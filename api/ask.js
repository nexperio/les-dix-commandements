/* ============================================================
   QUESTION LIBRE · fonction Vercel (Node), POST /api/ask
   Reçoit { q, ctx } : la question et les passages des feuilles que la page de recherche
   a trouvés les plus proches. Répond { answer } rédigé par DeepSeek à partir de ces passages.
   Clé : variable d'environnement DEEPSEEK_API_KEY (Vercel › Settings › Environment Variables).
   Sans clé, répond 503 { error: 'nokey' } et la page affiche seulement les passages.
   ============================================================ */
const MODEL = 'deepseek-chat';
const clip = (s, n) => String(s || '').slice(0, n);

const SYSTEM = `Tu réponds aux questions des visiteurs d'un site de feuilles illustrées sur la Torah, les parachiot de l'année, les femmes de la Torah et les mitsvot, avec leurs berakhot.
Règles :
- Réponds en français, avec simplicité et respect, en 3 à 8 phrases (davantage seulement si la question l'exige).
- Appuie-toi d'abord sur les passages numérotés fournis et cite-les par leur numéro entre crochets, par exemple [2]. Tu peux compléter avec des connaissances sûres de la tradition juive (Torah, Rachi, Talmud, Michna, usages ashkénazes et séfarades) en nommant la source.
- N'invente jamais de verset, de source ni de citation. Si tu n'es pas sûr, dis-le.
- Pour une question de halakha pratique (ce qu'il faut faire dans un cas précis), donne l'usage général puis conseille de consulter son rabbin.
- En hébreu, écris le Nom divin abrégé (ה׳, אֱלֹקֵינוּ) ; en phonétique, Adonaï, Élohénou.
- Si la question n'a aucun rapport avec la Torah, le judaïsme ou le site, réponds en une phrase que tu ne peux aider que sur ces sujets.
- Texte simple : paragraphes séparés par une ligne vide, pas de titres, pas de listes à puces.`;

module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ error: 'method' }); }
  const key = process.env.DEEPSEEK_API_KEY;
  if (!key) return res.status(503).json({ error: 'nokey' });
  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  const q = clip(body.q, 600).trim();
  if (q.length < 3) return res.status(400).json({ error: 'question' });
  const ctx = (Array.isArray(body.ctx) ? body.ctx : []).slice(0, 6).map((d, i) =>
    `[${i + 1}] ${clip(d.t, 120)} · ${clip(d.r, 60)} · feuille « ${clip(d.s, 120)} »${d.f ? ' · fête : ' + clip(d.f, 40) : ''}\n` +
    `Verset : ${clip(d.v, 500)}\n${d.k ? 'Bénédiction : ' + clip(d.k, 800) + '\n' : ''}Commentaire : ${clip(d.m, 1600)}`).join('\n\n');
  try {
    const r = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + key },
      body: JSON.stringify({
        model: MODEL, temperature: 0.3, max_tokens: 900,
        messages: [
          { role: 'system', content: SYSTEM },
          { role: 'user', content: (ctx ? 'Passages des feuilles :\n\n' + ctx : 'Aucun passage des feuilles ne correspond.') + '\n\nQuestion : ' + q }
        ]
      })
    });
    if (!r.ok) { console.error('deepseek', r.status, await r.text()); return res.status(502).json({ error: 'upstream' }); }
    const j = await r.json(), answer = j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content;
    if (!answer) return res.status(502).json({ error: 'empty' });
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({ answer: answer.trim() });
  } catch (e) {
    console.error('deepseek', e);
    return res.status(502).json({ error: 'upstream' });
  }
};
