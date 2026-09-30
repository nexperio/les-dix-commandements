/* ============================================================
   RENDU D'UNE SCÈNE : décor, personnages, premier plan.
   Partagé par la page et par les workers : tout ce qui précède la
   marque de début de app.js est aussi le code source des workers,
   qui dessinent les calques hors du fil principal (le glisser et
   le pincer restent fluides pendant qu'une scène se dessine).
   ============================================================ */
const CELL = 1000;
SCENES.forEach((d, i) => { d.id = i; (d.chars || []).forEach(c => c.draw || prepChar(c)); });
let grainPat = null;
function makeGrainPat() {
  const c = newCanvas(512, 512), g = c.getContext('2d'); const r = rng(42);
  g.fillStyle = '#fff'; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 9000; i++) { const a = r() * 0.07; g.fillStyle = `rgba(${90 + r() * 40 | 0},${70 + r() * 30 | 0},${50 + r() * 20 | 0},${a})`; g.fillRect(r() * 512, r() * 512, 1 + r() * 1.5, 1 + r() * 1.5); }
  for (let i = 0; i < 160; i++) { g.strokeStyle = `rgba(110,90,60,${0.05 + r() * 0.06})`; g.lineWidth = 0.7; g.beginPath(); const x = r() * 512, y = r() * 512, a = r() * TAU; g.moveTo(x, y); g.quadraticCurveTo(x + Math.cos(a) * 8 + r() * 6, y + Math.sin(a) * 8, x + Math.cos(a) * 16, y + Math.sin(a) * 16); g.stroke(); }
  grainPat = g.createPattern(c, 'repeat'); grainPat.setTransform(new DOMMatrix().scaleSelf(0.45));
}
/* ---------- rendu des calques ---------- */
function drawSceneLayer(g, sc, s, layer, v, mask, withChars) {
  const P = new Painter(g, s, v, sc.id, mask);
  g.setTransform(s, 0, 0, s, 0, 0);
  if (layer === 'back') { g.fillStyle = PAPER; g.fillRect(0, 0, CELL + 4, CELL + 4); P.r = rng(sc.id * 1009 + 1); sc.d.back(P); if (grainPat) { g.globalCompositeOperation = 'multiply'; g.fillStyle = grainPat; g.fillRect(0, 0, CELL + 4, CELL + 4); g.globalCompositeOperation = 'source-over'; } }
  if (withChars) { P.r = rng(sc.id * 77 + 3); drawLive(P, sc, 0); }
  if ((layer === 'front' || withChars) && sc.d.front) { P.r = rng(sc.id * 3001 + 7); sc.d.front(P); }
}
function drawLive(P, sc, t) {
  const d = sc.d, items = [];
  for (const c of d.chars || []) {
    if (c.draw) { items.push({ dp: typeof c.depth === 'function' ? c.depth(t) : c.depth || 0, c }); continue; }
    const st = charState(c, t); items.push({ dp: st.x + st.y + (c.dz || 0), c });
  }
  items.sort((a, b) => a.dp - b.dp);
  if (d.live) d.live(P, t);
  for (const it of items) { if (it.c.draw) it.c.draw(P, t); else renderChar(P, it.c, t); }
  if (d.top) d.top(P, t);
}
function makeCanvas(s) { const n = Math.ceil(CELL * s); return newCanvas(n, n); }
/* ---------- côté worker : un calque demandé, une image rendue ---------- */
if (typeof document === 'undefined') {
  makeGrainPat();
  onmessage = e => {
    const m = e.data, sc = { id: m.i, d: SCENES[m.i] }, c = makeCanvas(m.s);
    drawSceneLayer(c.getContext('2d'), sc, m.s, 'back', m.v, m.mask, m.stage);
    /* le premier plan se dessine avant de rendre le décor : certaines scènes y reprennent le peintre du décor */
    const f = m.front ? makeCanvas(m.s) : null; if (f) drawSceneLayer(f.getContext('2d'), sc, m.s, 'front', m.v, 15, false);
    const out = { back: c.transferToImageBitmap() }; if (f) out.front = f.transferToImageBitmap();
    postMessage(out, out.front ? [out.back, out.front] : [out.back]);
  };
}
