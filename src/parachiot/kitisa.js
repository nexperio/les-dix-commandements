/* PARACHA KI TISSA · Exode 30, 11 à 34, 35 · Chabbat 27 février 2027 */
Object.assign(LK, {
  kt_moses: Object.assign({}, LK.mosesOld, { rays: 0 }),
  kt_aaron: { skin: 'y5r4', hs: 'short', hair: 'k5', beard: 'long', bt: 'k4', robe: 'b7', len: 'floor', trim: 1, sleeves: 'long', cloak: 'y6r4b3', sash: 'y6r5b4', head: 'turban', ht: 'y1', band: 'y8', feet: 'bare' },
  kt_betsalel: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'short', bt: 'k7', robe: 'r5y3k1', len: 'knee', sleeves: 'short', sash: 'y8r2', head: 'cloth', ht: 'y2', band: 'r6' },
  kt_oholiab: { skin: 'y5r4k1', hs: 'short', hair: 'k6r2', beard: 'short', robe: 'b4r3', len: 'knee', sleeves: 'short', sash: 'r7', head: 'cap', ht: 'y1' },
  kt_levite: { skin: 'y6r4k1', hs: 'short', hair: 'k7', beard: 'short', robe: 'y1b1', len: 'knee', sleeves: 'short', sash: 'b6', head: 'cloth', ht: 'b3y1', band: 'k6', feet: 'sandal' },
  kt_joshua: { skin: 'y6r4k1', hs: 'short', hair: 'k7', robe: 'r5y3k1', len: 'knee', sleeves: 'short', cloak: 'b6k1', sash: 'y7', feet: 'sandal' }
});
/* décors propres à la feuille : Tabernacle, parvis, autel de bronze, cuve */
const ktFence = (P, x0, y0, x1, y1, h = 64) => {
  P.shape([P.I(x0, y0, 0), P.I(x1, y1, 0), P.I(x1, y1, h), P.I(x0, y0, h)], 'y1', 1);
  const n = Math.ceil(Math.hypot(x1 - x0, y1 - y0) / 45);
  for (let i = 0; i <= n; i++) { const x = lerp(x0, x1, i / n), y = lerp(y0, y1, i / n); P.line([P.I(x, y, 0), P.I(x, y, h + 6)], 1.5, { ink: 3 }); const c = P.I(x, y, h + 6); P.fill(P.disc(c[0], c[1], 2.6, 6), 'b1k2', {}); }
};
const ktMishkan = (P, x, y, w, d, h) => {
  P.box(x, y, 0, w, d, h, { t: 'r5y4k3', l: 'y7r3k1', r: 'y7r3k2' });
  for (let i = 1; i < w / 18; i++) P.line([P.I(x + i * 18, y + d, 2), P.I(x + i * 18, y + d, h - 2)], 0.6);
  P.shape([P.I(x - 4, y + d + 2, h - 34), P.I(x + w + 2, y + d + 2, h - 34), P.I(x + w + 2, y + d + 2, h + 2), P.I(x - 4, y + d + 2, h + 2)], 'b4r3k3', 1);
  for (let i = 0; i < 8; i++) { const a = P.I(x + w + 1, y + d * i / 8, 4), b = P.I(x + w + 1, y + d * (i + 1) / 8, 4), c = P.I(x + w + 1, y + d * (i + 1) / 8, h), e = P.I(x + w + 1, y + d * i / 8, h); P.shape([a, b, c, e], ['b7', 'r7b4', 'r7y1', 'y1'][i % 4], 0.6); }
  for (let i = 0; i <= 4; i++) P.cyl(x + w + 6, y + d * i / 4, 0, 4, h, 'y8r3');
};
const ktAltar = (P, x, y, s = 70) => {
  P.box(x, y, 0, s, s, s * 0.55, { t: 'k6r2', l: 'r5y5k3', r: 'r5y5k4' });
  for (let i = 1; i < 6; i++) { P.line([P.I(x + s * i / 6, y + s, 4), P.I(x + s * i / 6, y + s, s * 0.5)], 0.5); P.line([P.I(x + s, y + s * i / 6, 4), P.I(x + s, y + s * i / 6, s * 0.5)], 0.5); }
  for (const [a, b] of [[0, 0], [s - 10, 0], [0, s - 10], [s - 10, s - 10]]) P.box(x + a, y + b, s * 0.55, 10, 10, 10, 'r5y6k2', 0.7);
};
const ktLaver = (P, x, y) => { P.cyl(x, y, 0, 16, 6, 'r5y6k3'); P.cyl(x, y, 6, 8, 22, 'r5y6k2'); P.cyl(x, y, 28, 26, 16, { t: 'r4y7k1', s: 'r5y7k1', d: 'r5y7k3' }); P.shape(P.ell(x, y, 44.5, 21, 21, 18), 'b5y1', 0.8); };
const ktCamp = (P, pts) => { for (const [x, y, s, tn] of pts) Lib.tent(P, x, y, 70 * s, 60 * s, 58 * s, tn); };
const ktRays = (P, c, r, t) => { for (let i = 0; i < 12; i++) { const a = i / 12 * TAU + t * 0.3, r0 = r * 0.35, r1 = r * (0.85 + 0.15 * Math.sin(t * 3 + i)); P.line([[c[0] + Math.cos(a) * r0, c[1] + Math.sin(a) * r0], [c[0] + Math.cos(a) * r1, c[1] + Math.sin(a) * r1]], 1.4, { ink: 0, taper: 0.5 }); } };
const ktSinai = (P, x, y, r, h) => Lib.mound(P, x, y, r, h, 'y4r3k3', { px: 10 });
const SHEET = { title: 'Ki Tissa · Quand tu compteras', sub: 'Paracha de la semaine · Chabbat 27 février 2027 · Exode 30, 11 à 34, 35' };
const SCENES = [
{
  title: 'Le demi-sicle', book: 'Exode', ch: 30, ref: 'Exodus 30:13', refFr: 'Exode 30, 13', accent: 0, feast: null,
  quote: 'And this shall every one give that passeth at the naming, half a sicle according to the standard of the temple.  A sicle hath twenty obols.  Half a sicle shall be offered to the Lord.',
  fr: 'Voici ce que donnera quiconque passe au dénombrement : un demi-sicle selon le sicle du sanctuaire. Le sicle vaut vingt oboles. Le demi-sicle sera offert au Seigneur.',
  more: ['Quand on dénombrera les enfants d’Israël, chacun donnera pour son âme une rançon au Seigneur. On ne compte pas les têtes : chacun apporte une pièce, et l’on compte les pièces. Le riche ne donnera pas plus, le pauvre ne donnera pas moins d’un demi-sicle. Cet argent servira au service de la tente du témoignage.',
    'Pas de fête juive attachée à ce Chabbat. Ces versets (Exode 30, 11-16) sont relus chaque année comme lecture supplémentaire du Chabbat Chekalim, qui tombe cette année le Chabbat suivant, 6 mars 2027. C’est de cette phrase, « quand tu compteras », que la paracha tire son nom.'],
  back(P) {
    Lib.sun(P, 180, 130, 30); Lib.cloud(P, 780, 120, 160, 32, 'b1');
    Lib.platform(P, 'y5r2b1', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    ktCamp(P, [[20, 20, 1.2, 'r5y4k1'], [140, 15, 1, 'b3y2k1'], [250, 10, 1.1, 'y3r2k1'], [370, 20, .9, 'r4y5k2'], [20, 150, 1, 'b4y3k1'], [15, 270, 1.1, 'y4r3k2']]);
    P.box(215, 195, 0, 100, 55, 34, 'r4y5k2'); P.shape([P.I(215, 195, 34.5), P.I(315, 195, 34.5), P.I(315, 250, 34.5), P.I(215, 250, 34.5)], 'y1b1', 0.8);
    const s = P.I(265, 215, 34); P.line([[s[0], s[1]], [s[0], s[1] - 34]], 1.4); P.line([[s[0] - 26, s[1] - 32], [s[0] + 26, s[1] - 32]], 1.2, { ink: 3 });
    for (const k of [-1, 1]) { P.line([[s[0] + k * 26, s[1] - 32], [s[0] + k * 22, s[1] - 16]], 0.5); P.line([[s[0] + k * 26, s[1] - 32], [s[0] + k * 30, s[1] - 16]], 0.5); P.shape([[s[0] + k * 26 - 10, s[1] - 16], [s[0] + k * 26 + 10, s[1] - 16], [s[0] + k * 26 + 6, s[1] - 11], [s[0] + k * 26 - 6, s[1] - 11]], 'r5y6k2', 0.6); }
    for (let i = 0; i < 14; i++) { const c = P.I(235 + (i % 5) * 7, 232 + Math.floor(i / 5) * 6, 35 + Math.floor(i / 5) * 2); P.shape(P.disc(c[0], c[1], 3, 8), 'b1k2', 0.4); }
    P.box(335, 190, 0, 56, 44, 30, { t: 'k7r2', l: 'r5y5k3', r: 'r5y5k4' });
    const cf = P.I(335, 190, 30); P.shape([cf, P.I(391, 190, 30), P.I(391, 190, 62), P.I(335, 190, 62)], 'r5y5k2', 0.9);
    for (let i = 0; i < 16; i++) { const c = P.I(342 + P.r() * 42, 196 + P.r() * 32, 30); P.shape(P.disc(c[0], c[1] - 2, 3.2, 8), 'b1k1', 0.4); }
    for (let i = 0; i < 4; i++) P.box(40 + i * 34, 440, 0, 26, 26, 14, 'b1k3', 0.7);
    Lib.jar(P, 470, 60, 0, 1.2); Lib.jar(P, 500, 90, 0, 1, 'b5y3');
    Lib.stones(P, 18, 'y3r2k3', [100, 330, 300, 180]);
    Lib.grass(P, 30, 'y5b4', [380, 300, 150, 200]);
  },
  live(P, t) { for (let i = 0; i < 3; i++) { const u = (t * 0.6 + i / 3) % 1, c = P.I(350 + i * 14, 205 + i * 8, 34); if (u < 0.5) Lib.star(P, c[0], c[1] - 6, 5 * (1 - u * 2), 'y2'); } },
  chars: [
    ch(LK.kt_moses, { x: 270, y: 165, face: 1, clip: 'talk', h: 142, hold: { f: 'staffV' } }),
    ch(LK.kt_levite, { x: 240, y: 280, face: 1, clip: 'sit', h: 128, hold: { n: 'scroll' } }),
    ch(LK.kt_levite, { x: 410, y: 175, face: -1, clip: 'guard', h: 136, hold: { n: 'staffV' }, look: Object.assign({}, LK.kt_levite, { ht: 'r4y3', robe: 'y2k1' }) }),
    ...[LK.isrM, LK.isrW, LK.isrOld, LK.isrM2, LK.isrW2].map((lk, i) => ch(lk, { h: 136, speed: 20, t0: i * 5.6, path: [W(520, 530, 0), W(355, 280, 2.4, 'offer'), W(535, 330, 0), W(520, 530, 0, null, { jump: 1 })], hold: i === 2 ? { f: 'staffV' } : undefined }))
  ]
},
{
  title: 'La cuve de bronze', book: 'Exode', ch: 30, ref: 'Exodus 30:19', refFr: 'Exode 30, 19', accent: 2, feast: null,
  quote: 'Aaron and his sons shall wash their hands and feet in it:',
  fr: 'Aaron et ses fils s’y laveront les mains et les pieds :',
  more: ['Une cuve de bronze sur son socle est placée entre la tente du témoignage et l’autel, et on la remplit d’eau. Avant d’entrer dans la tente, avant de s’approcher de l’autel pour y faire monter l’offrande, Aaron et ses fils s’y lavent les mains et les pieds, afin de ne pas mourir. C’est une loi perpétuelle pour eux et pour leur descendance.',
    'Pas de fête juive attachée à ce passage. Le texte précise plus loin (Exode 38, 8) que la cuve fut faite avec les miroirs de bronze des femmes qui servaient à l’entrée de la tente de la rencontre.'],
  back(P) {
    Lib.cloud(P, 250, 120, 180, 36, 'b1'); Lib.cloud(P, 760, 150, 140, 30, 'b1');
    Lib.platform(P, 'y4r2b1', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    ktFence(P, 0, 0, 540, 0); ktFence(P, 0, 0, 0, 540);
    ktMishkan(P, 30, 60, 190, 140, 130);
    ktLaver(P, 300, 150);
    ktAltar(P, 390, 150, 90);
    P.shape([P.I(390, 240, 0.5), P.I(480, 240, 0.5), P.I(520, 320, 0.5), P.I(430, 320, 0.5)], 'y3r2k1', 0.8);
    Lib.stones(P, 14, 'y3r2k2', [260, 330, 260, 190]);
    Lib.jar(P, 250, 250, 0, 1.1, 'r5y6k2');
  },
  live(P, t) {
    const a = P.I(435, 195, 60); Lib.flame(P, a[0], a[1], 40, 58, t); Lib.smoke(P, a[0], a[1] - 40, t, { n: 5, h: 200, r: 22, tn: 'k2b1' });
    const w = P.I(300, 150, 45); for (let i = 0; i < 3; i++) { const u = (t * 0.5 + i / 3) % 1; P.line(P.ell(300, 150, 45, 6 + u * 14, 6 + u * 14, 14), 0.5, { ink: 2 }); }
    if ((t * 0.7) % 1 < 0.4) Lib.star(P, w[0] + 8, w[1] - 4, 4, 'y2');
  },
  chars: [
    ch(LK.kt_aaron, { x: 290, y: 205, face: 1, clip: 'fill', h: 146 }),
    ch(LK.priest, { h: 138, speed: 16, path: [W(440, 280, 3, 'offer', { f: -1 }), W(345, 200, 3, 'fill', { f: -1 }), W(260, 150, 2, 'idle'), W(345, 200, 0)] }),
    ch(LK.priest, { h: 136, speed: 16, t0: 6, path: [W(500, 180, 3, 'offer', { f: -1 }), W(350, 110, 3, 'fill'), W(500, 180, 0)], look: Object.assign({}, LK.priest, { hair: 'k5r2', beard: 'short' }) }),
    ch(LK.kt_levite, { h: 134, speed: 18, over: 'carry', hold: { nTop: 'jarhead' }, path: [W(520, 520, 0), W(330, 250, 2, 'fill'), W(520, 520, 0)] }),
    ch(LK.isrM, { x: 470, y: 420, face: -1, clip: 'offer', h: 136, hold: { n: 'lamb' } }),
    ch(LK.isrW, { x: 400, y: 470, face: -1, clip: 'pray', h: 128 }),
    { beast: 'sheep', h: 56, x: 510, y: 460, face: -1 }
  ]
},
{
  title: 'Betsalel et Oholiab', book: 'Exode', ch: 31, ref: 'Exodus 31:2', refFr: 'Exode 31, 2', accent: 0, feast: null,
  quote: 'Behold, I have called by name Beseleel the son of Uri, the son of Hur, of the tribe of Juda,',
  fr: 'Vois, j’ai appelé par son nom Betsalel, fils d’Ouri, fils de Hour, de la tribu de Juda,',
  more: ['Dieu désigne l’artisan du Tabernacle : Betsalel, de la tribu de Juda, rempli de l’esprit de Dieu, de sagesse, d’intelligence et de savoir, pour travailler l’or, l’argent et le bronze, tailler les pierres, sculpter le bois. Il lui donne pour compagnon Oholiab, fils d’Ahisamakh, de la tribu de Dan. Ensemble ils feront la tente, l’arche, la table, le chandelier, les autels et les vêtements sacrés.',
    'Pas de fête juive attachée à ce passage. Le Talmud (Berakhot 55a) rapporte que Betsalel savait combiner les lettres par lesquelles furent créés le ciel et la terre, et lit dans son nom « à l’ombre de Dieu » (be-tsel El).'],
  back(P) {
    Lib.sun(P, 820, 140, 28);
    Lib.platform(P, 'y4r3', 'y4r3k2', { strata: [[0, .4, 'y4r3k2'], [.4, 1, 'y4r4k3']] });
    for (const [x, y] of [[20, 20], [300, 20], [20, 240], [300, 240]]) P.box(x, y, 0, 8, 8, 150, 'r4y5k3', 0.8);
    P.shape([P.I(20, 20, 150), P.I(308, 20, 150), P.I(308, 248, 150), P.I(20, 248, 150)], 'b3y2k1', 1);
    for (let i = 1; i < 8; i++) P.line([P.I(20 + i * 36, 20, 150), P.I(20 + i * 36, 248, 150)], 0.5);
    P.box(60, 60, 0, 110, 60, 40, 'r4y5k2');
    P.box(80, 70, 40, 70, 40, 34, { t: 'y8r3', l: 'y7r3k1', r: 'y7r4k2' });
    for (const s of [-1, 1]) { const c = P.I(115 + s * 22, 90, 74); P.shape([[c[0], c[1]], [c[0] - s * 4, c[1] - 26], [c[0] + s * 18, c[1] - 34], [c[0] + s * 10, c[1] - 12]], 'y8r2', 0.8); }
    P.box(190, 60, 0, 90, 50, 40, 'r4y5k2');
    const m = P.I(235, 85, 40); P.line([[m[0], m[1]], [m[0], m[1] - 60]], 2.2, { ink: 0 });
    for (let k = 1; k <= 3; k++) for (const s of [-1, 1]) { P.line([[m[0], m[1] - 20 - k * 6 + 6], [m[0] + s * k * 9, m[1] - 20 - k * 6 + 2], [m[0] + s * k * 9, m[1] - 60]], 1.4, { ink: 0 }); }
    for (let k = -3; k <= 3; k++) { const q = [m[0] + k * 9, m[1] - 62]; P.fill(P.disc(q[0], q[1], 2.5, 6), 'y8r4', {}); }
    P.box(40, 330, 0, 16, 150, 110, 'r4y5k3', 0.8); P.box(150, 330, 0, 16, 150, 110, 'r4y5k3', 0.8); P.box(40, 330, 110, 126, 12, 10, 'r4y5k3', 0.8);
    for (let i = 0; i < 12; i++) P.line([P.I(56 + i * 8, 336, 106), P.I(56 + i * 8, 336, 12)], 1, { ink: [2, 1, 0, 3][i % 4], lvl: 7 });
    P.shape([P.I(56, 337, 12), P.I(150, 337, 12), P.I(150, 337, 52), P.I(56, 337, 52)], 'b6r3', 0.8);
    for (let i = 0; i < 5; i++) P.box(360, 60 + i * 6, i * 10, 150, 26, 10, 'r4y6k2', 0.7);
    P.box(330, 330, 0, 30, 30, 40, 'k6b2');
    const f = P.I(440, 380, 0); P.shape(Lib.bumpy(P, f[0], f[1] - 20, 30, 22, 7), 'y3r2k3', 1);
    Lib.stones(P, 16, 'y3r2k3', [200, 280, 300, 240]);
    for (let i = 0; i < 6; i++) { const c = P.I(280 + i * 12, 460, 0); P.shape([[c[0] - 8, c[1]], [c[0] + 8, c[1] - 3], [c[0] + 8, c[1] - 9], [c[0] - 8, c[1] - 6]], i % 2 ? 'y8r3' : 'b1k2', 0.6); }
  },
  live(P, t) {
    const f = P.I(440, 380, 20); Lib.flame(P, f[0], f[1], 26, 40, t); Lib.smoke(P, f[0], f[1] - 30, t, { n: 4, h: 160, r: 16, tn: 'k2' });
    const a = P.I(345, 345, 40); if ((t * 1.4) % 1 < 0.35) for (let i = 0; i < 5; i++) Lib.star(P, a[0] + Math.cos(i * 1.3) * 16, a[1] - 10 - Math.abs(Math.sin(i * 2.1)) * 18, 3, 'y7r2');
  },
  chars: [
    ch(LK.kt_betsalel, { x: 310, y: 380, face: 1, clip: 'hammer', h: 144, hold: { n: 'hammer' } }),
    ch(LK.kt_oholiab, { x: 100, y: 430, face: 1, clip: 'reach', h: 132, dz: -2 }),
    ch(LK.isrM, { h: 136, speed: 16, hold: { n: 'plank' }, over: 'carry', path: [W(520, 200, 1, 'idle'), W(360, 170, 2, 'idle'), W(520, 200, 0)] }),
    ch(LK.isrM2, { x: 190, y: 160, face: -1, clip: 'hammer', h: 136, hold: { n: 'hammer' }, t0: 0.3 }),
    ch(LK.isrW, { h: 128, speed: 14, path: [W(520, 520, 0), W(210, 470, 2.5, 'offer'), W(520, 520, 0)], hold: { n: 'bundle' } }),
    ch(LK.kt_moses, { x: 400, y: 260, face: -1, clip: 'point', h: 140, hold: { f: 'staffV' } })
  ]
},
{
  title: 'Le Chabbat, signe éternel', book: 'Exode', ch: 31, ref: 'Exodus 31:16', refFr: 'Exode 31, 16', accent: 2, feast: null,
  quote: 'Let the children of Israel keep the sabbath, and celebrate it in their generations.  It is an everlasting covenant',
  fr: 'Que les enfants d’Israël gardent le Chabbat, et le célèbrent au long de leurs générations. C’est une alliance éternelle',
  more: ['Au milieu des instructions sur le Tabernacle, Dieu rappelle le Chabbat. Six jours on travaillera, le septième est un repos saint pour le Seigneur. Le Chabbat est un signe entre Dieu et les enfants d’Israël, car en six jours le Seigneur a fait le ciel et la terre, et le septième jour il a cessé et s’est reposé.',
    'Pas de fête juive attachée à ce passage. Rachi (sur Exode 31, 13) lit dans la place de ce rappel une leçon : même le chantier du Tabernacle s’arrête le Chabbat. Les versets 16 et 17, « Vechamrou », sont chantés le vendredi soir et récités au kiddouch du Chabbat matin.'],
  back(P) {
    nightSky(P, 'b6r3k3', 70);
    Lib.platform(P, 'y3r2b3k1', 'y3r3b2k2', { strata: [[0, .4, 'y3r3b2k2'], [.4, 1, 'y3r3b3k3']] });
    ktCamp(P, [[20, 30, 1.5, 'r4y4b2k1'], [180, 20, 1.1, 'b3y2k2'], [300, 30, 1, 'y3r2b2k1'], [420, 20, 1.2, 'r3y3b3k1'], [20, 220, 1.1, 'b4y2k2'], [430, 330, 1.2, 'y3r3b2k2']]);
    P.box(170, 220, 0, 110, 70, 26, 'r5y4k2');
    P.shape([P.I(170, 220, 26.5), P.I(280, 220, 26.5), P.I(280, 290, 26.5), P.I(170, 290, 26.5)], 'y1', 0.8);
    for (let i = 0; i < 2; i++) { const c = P.I(200 + i * 26, 255, 26); P.shape(Lib.bumpy(P, c[0], c[1] - 6, 14, 7, 6), 'y7r4k1', 0.7); }
    P.shape(P.ell(250, 240, 27, 10, 10, 12), 'y2b1', 0.6);
    const cup = P.I(262, 268, 26); P.shape([[cup[0] - 5, cup[1] - 14], [cup[0] + 5, cup[1] - 14], [cup[0] + 2, cup[1] - 4], [cup[0] + 2, cup[1]], [cup[0] - 2, cup[1]], [cup[0] - 2, cup[1] - 4]], 'r7b4', 0.6);
    for (const x of [235, 270]) P.cyl(x, 230, 26, 5, 6, 'r5y6k2');
    P.box(380, 420, 0, 90, 14, 8, 'r4y6k2', 0.7); P.box(395, 440, 0, 70, 12, 8, 'r4y6k2', 0.7);
    const hm = P.I(420, 470, 0); P.line([[hm[0], hm[1]], [hm[0] + 22, hm[1] - 8]], 1.6, { ink: 3 }); P.shape([[hm[0] + 18, hm[1] - 14], [hm[0] + 28, hm[1] - 10], [hm[0] + 26, hm[1] - 4], [hm[0] + 16, hm[1] - 8]], 'k6b2', 0.6);
    Lib.stones(P, 18, 'y2r2b3k2', [20, 300, 300, 220]);
  },
  live(P, t) {
    for (const x of [235, 270]) { const c = P.I(x, 230, 32); Lib.flame(P, c[0], c[1], 8, 16, t + x); }
    const c = P.I(252, 236, 60); P.halo(c[0], c[1], 40 + Math.sin(t * 2) * 3, ['y1', 'y2', 'y3']);
    for (let i = 0; i < 3; i++) { const u = (t * 0.15 + i / 3) % 1; if (u < 0.6) Lib.star(P, 520 + i * 150, 80 + i * 40, 7 * Math.sin(u / 0.6 * Math.PI), 'y4'); }
  },
  chars: [
    ch(LK.isrOld, { x: 160, y: 250, face: 1, clip: 'bless', h: 136 }),
    ch(LK.isrW, { x: 225, y: 200, face: -1, clip: 'sit', h: 126, dz: -6 }),
    ch(LK.child, { x: 300, y: 250, face: -1, clip: 'sit', h: 90 }),
    ch(LK.childG, { x: 240, y: 320, face: 1, clip: 'sit', h: 88 }),
    ch(LK.isrM2, { x: 300, y: 300, face: -1, clip: 'eat', h: 132, t0: .6 }),
    ch(LK.isrM, { h: 136, speed: 12, path: [W(500, 520, 0), W(360, 330, 3, 'wave'), W(500, 520, 0)] }),
    ch(LK.isrW2, { x: 90, y: 380, face: 1, clip: 'pray', h: 128 })
  ]
},
{
  title: 'Les tables du témoignage', book: 'Exode', ch: 31, ref: 'Exodus 31:18', refFr: 'Exode 31, 18', accent: 1, feast: null,
  quote: 'And the Lord, when he had ended these words in Mount Sinai, gave to Moses two stone tables of testimony, written with the finger of God.',
  fr: 'Et le Seigneur, quand il eut achevé de parler sur le mont Sinaï, donna à Moïse les deux tables de pierre du témoignage, écrites du doigt de Dieu.',
  more: ['Depuis quarante jours et quarante nuits, Moïse se tient sur la montagne, dans la nuée. Dieu achève de lui parler et lui remet les deux tables du témoignage. Le texte dit plus loin qu’elles étaient écrites des deux côtés, que les tables étaient l’œuvre de Dieu et l’écriture, l’écriture de Dieu gravée sur les tables (Exode 32, 15-16).',
    'Pas de fête juive attachée à ce passage. Josué, le serviteur de Moïse, était monté avec lui une partie du chemin (Exode 24, 13) ; c’est lui qui, à la descente, entendra le premier les cris du camp (Exode 32, 17).'],
  back(P) {
    for (const [x, y, w, h] of [[430, 90, 300, 70], [600, 60, 220, 50], [260, 70, 240, 60]]) Lib.cloud(P, x, y, w, h, 'k3b2');
    Lib.platform(P, 'y4r3k1', 'y4r3k2', { strata: [[0, .35, 'y4r3k2'], [.35, .7, 'r4y4k3'], [.7, 1, 'r4y3k4']] });
    const m = ktSinai(P, 190, 180, 180, 340);
    Lib.rock(P, 360, 300, 0, 40, 26, 'y4r3k3'); Lib.rock(P, 120, 420, 0, 34, 22, 'y4r3k3');
    ktCamp(P, [[440, 380, .8, 'y3r2k1'], [470, 460, .7, 'r4y4k1'], [370, 470, .7, 'b3y2k1']]);
    Lib.stones(P, 20, 'y3r2k3', [260, 300, 260, 230]);
    Lib.cloud(P, m.peak[0] - 80, m.peak[1] + 70, 150, 44, 'k4b2'); Lib.cloud(P, m.peak[0] + 90, m.peak[1] + 50, 120, 40, 'k3b1');
  },
  live(P, t) {
    const pk = P.I(190, 180, 340);
    P.halo(pk[0] + 6, pk[1] - 70, 140, ['y1', 'y2', 'y3r1', 'y5r2'], { knock: true });
    ktRays(P, [pk[0] + 6, pk[1] - 70], 150, t);
    Lib.flame(P, pk[0] - 40, pk[1] + 8, 30, 50, t, { noKnock: true }); Lib.flame(P, pk[0] + 46, pk[1] + 14, 26, 44, t + 2, { noKnock: true });
    Lib.cloud(P, pk[0] - 120, pk[1] - 170 - Math.sin(t) * 6, 170, 50, 'k3b2');
  },
  chars: [
    ch(LK.kt_moses, { x: 190, y: 180, z: 338, face: 1, clip: 'hold2', hold: { nTop: 'tablets' }, h: 110, noShadow: 1 }),
    ch(LK.kt_joshua, { x: 330, y: 330, face: -1, clip: 'lookup', h: 132 }),
    ch(LK.isrM, { x: 420, y: 440, face: -1, clip: 'lookup', h: 110 }),
    ch(LK.isrW, { x: 380, y: 520, face: -1, clip: 'idle', h: 104 }),
    { beast: 'sheep', h: 44, x: 500, y: 420, face: -1 }
  ]
},
{
  title: 'Aaron fond l’or', book: 'Exode', ch: 32, ref: 'Exodus 32:4', refFr: 'Exode 32, 4', accent: 1, feast: null,
  quote: 'And when he had received them, he fashioned them by founders\' work, and made of them a molten calf.  And they said:  These are thy gods, O Israel, that have brought thee out of the land of Egypt.',
  fr: 'Quand il les eut reçus, il les travailla au moule et en fit un veau de métal fondu. Et ils dirent : Voici tes dieux, Israël, qui t’ont fait sortir du pays d’Égypte.',
  more: ['Moïse tarde à redescendre. Le peuple s’assemble autour d’Aaron : « Fais-nous des dieux qui marchent devant nous, car ce Moïse, nous ne savons ce qu’il est devenu. » Aaron demande les anneaux d’or des oreilles des femmes et des enfants. On les lui apporte, il les fond et en fait un veau. Il bâtit un autel devant lui et proclame : « Demain, fête pour le Seigneur. »',
    'Pas de fête juive attachée à ce passage. La haftara de Ki Tissa (1 Rois 18) répond à cet épisode : sur le Carmel, le prophète Élie somme le peuple de choisir entre le Seigneur et Baal, et le peuple s’écrie « C’est le Seigneur qui est Dieu ».'],
  back(P) {
    Lib.sun(P, 180, 140, 30);
    Lib.mound(P, 30, 20, 90, 170, 'y4r3k3');
    Lib.platform(P, 'y5r2', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
    ktCamp(P, [[400, 20, 1, 'b3y2k1'], [450, 150, .9, 'r5y3k1'], [30, 430, .9, 'y3r2k1'], [170, 20, .9, 'r4y4k2']]);
    stoneStack(P, 140, 170, 70, 60, 60, 'y3r2k3');
    P.fill([P.I(210, 185, 6), P.I(210, 215, 6), P.I(210, 215, 40), P.I(210, 185, 40)], 'k7r3', { noKnock: true });
    P.box(250, 240, 0, 60, 40, 12, 'y3r2k3');
    P.shape(P.ell(280, 260, 12.5, 20, 12, 14), 'y8r4', 0.8);
    P.box(300, 170, 0, 60, 60, 30, 'y4r3k2');
    Lib.stones(P, 18, 'y4r3k2', [150, 330, 300, 150]);
    for (let i = 0; i < 9; i++) { const c = P.I(262 + (i % 3) * 12, 250 + Math.floor(i / 3) * 8, 13); P.line(P.ell(262 + (i % 3) * 12, 250 + Math.floor(i / 3) * 8, 13, 3, 3, 8), 0.6, { ink: 0 }); }
  },
  live(P, t) {
    const f = P.I(210, 200, 10); Lib.flame(P, f[0] + 6, f[1] - 4, 22, 30, t); Lib.smoke(P, P.I(175, 200, 60)[0], P.I(175, 200, 60)[1], t, { n: 5, h: 200, r: 22, tn: 'k3' });
    const c = P.I(330, 200, 30); P.halo(c[0], c[1] - 50, 70 + Math.sin(t * 2) * 5, ['y1', 'y2', 'y3']);
  },
  chars: [
    { beast: 'calf', h: 76, x: 330, y: 200, z: 30, face: 1, noShadow: 1 },
    ch(LK.priest, { x: 240, y: 200, face: -1, clip: 'reach', h: 140 }),
    ...[LK.isrW, LK.childG, LK.isrW2].map((lk, i) => ch(lk, { h: i === 1 ? 90 : 128, speed: 18, t0: i * 5, path: [W(520, 500, 0), W(300, 280, 2.2, 'offer'), W(520, 380, 0), W(520, 500, 0, null, { jump: 1 })] })),
    ch(LK.isrM2, { x: 430, y: 280, face: -1, clip: 'raise', h: 138 }),
    ch(LK.isrM, { x: 390, y: 330, face: -1, clip: 'point', h: 136, t0: 1 }),
    ch(LK.isrW, { x: 150, y: 330, face: 1, clip: 'reach', h: 126, look: Object.assign({}, LK.isrW, { robe: 'r5y4' }) })
  ]
},
reuse(AT[8], { title: 'Le veau d’or et les tables brisées', feast: null,
  more: ['Descendant de la montagne avec les tables, Moïse entend les chants du camp. En approchant, il voit le veau et les danses. Saisi de colère, il jette les tables de ses mains et les brise au pied de la montagne. À Aaron il demande : « Que t’a fait ce peuple, pour que tu l’aies chargé d’un si grand péché ? »',
    'Pas de fête juive attachée à ce Chabbat. La Michna (Taanit 4, 6) compte le bris des tables parmi les malheurs du 17 Tamouz, jour de jeûne. Selon la tradition (Rachi sur Exode 33, 11), Moïse redescendit avec les secondes tables le 10 Tichri, qui devint Yom Kippour.'] }),
{
  title: 'Le veau réduit en poudre', book: 'Exode', ch: 32, ref: 'Exodus 32:20', refFr: 'Exode 32, 20', accent: 3, feast: null,
  quote: 'And laying hold of the calf which they had made, he burnt it, and beat it to powder, which he strewed into water, and gave thereof to the children of Israel to drink.',
  fr: 'Et saisissant le veau qu’ils avaient fait, il le brûla, le réduisit en poudre, la répandit dans l’eau et en fit boire aux enfants d’Israël.',
  more: ['Moïse prend le veau, le brûle au feu, le broie jusqu’à le réduire en poussière, répand la poudre sur l’eau et la fait boire au peuple. Puis il se tient à la porte du camp : « Qui est pour le Seigneur, à moi ! » Tous les fils de Lévi se rassemblent auprès de lui.',
    'Pas de fête juive attachée à ce passage. Dans le Deutéronome (9, 21), Moïse rappelle la scène et précise qu’il jeta la poussière dans le torrent qui descend de la montagne.'],
  back(P) {
    for (const [x, y, w, h] of [[300, 90, 260, 60], [620, 70, 200, 46]]) Lib.cloud(P, x, y, w, h, 'k2b2');
    Lib.mound(P, 60, 40, 120, 230, 'y4r3k3');
    Lib.platform(P, 'y4r2b1', 'y4r3k2', { strata: [[0, .4, 'y4r3k2'], [.4, 1, 'y4r4k3']] });
    const riv = [[120, 0], [200, 120], [300, 260], [400, 400], [460, 540], [540, 540], [480, 400], [380, 250], [270, 110], [180, 0]];
    P.shape(riv.map(p => P.I(p[0], p[1], 0.6)), 'b5y1', 1); Lib.waves(P, [200, 120, 200, 280], 10, 1, 2);
    P.box(170, 290, 0, 60, 40, 14, 'y3r2k3');
    for (let i = 0; i < 5; i++) { const c = P.I(90 + i * 8, 270 + i * 7, 0); P.shape([[c[0], c[1]], [c[0] + 10, c[1] - 4], [c[0] + 16, c[1] + 2], [c[0] + 5, c[1] + 6]], 'k2y3b1', 0.6); }
    stoneStack(P, 60, 180, 70, 60, 20, 'y3r2k3');
    ktCamp(P, [[420, 20, 1, 'b3y2k1'], [470, 150, .9, 'r5y3k1'], [20, 430, 1, 'y3r2k1']]);
    Lib.stones(P, 18, 'y3r2k3', [20, 320, 200, 200]);
    const d = P.I(200, 305, 14); P.shape(Lib.bumpy(P, d[0], d[1] - 6, 16, 7, 6), 'y8r3', 0.7);
  },
  live(P, t) {
    const f = P.I(95, 210, 20); Lib.flame(P, f[0] - 12, f[1], 26, 50, t); Lib.flame(P, f[0] + 14, f[1] + 4, 22, 40, t + 1.4); Lib.smoke(P, f[0], f[1] - 40, t, { n: 5, h: 220, r: 24, tn: 'k3b1' });
    for (let i = 0; i < 12; i++) { const u = (t * 0.12 + i / 12) % 1, x = lerp(250, 470, u), y = lerp(200, 520, u) + Math.sin(i * 3) * 20, c = P.I(x, y, 2); P.fill(P.disc(c[0], c[1], 2.2, 6), 'y8r3', {}); }
  },
  top(P, t) { const f = P.I(95, 210, 20); Lib.flame(P, f[0], f[1] + 6, 30, 36, t + 0.7); },
  chars: [
    { beast: 'calf', h: 64, x: 95, y: 210, z: 20, face: 1, noShadow: 1 },
    ch(LK.kt_moses, { x: 200, y: 330, face: 1, clip: 'smash', h: 142, hold: { n: 'hammer' } }),
    ch(LK.isrM, { x: 330, y: 150, face: 1, clip: 'fill', h: 134 }),
    ch(LK.isrW, { x: 360, y: 230, face: 1, clip: 'fill', h: 126, t0: 1 }),
    ch(LK.isrM2, { x: 520, y: 440, face: -1, clip: 'fill', h: 134, t0: 0.5 }),
    ch(LK.kt_levite, { x: 290, y: 420, face: -1, clip: 'guard', h: 138, hold: { n: 'sword' } }),
    ch(LK.kt_levite, { h: 136, speed: 18, hold: { n: 'sword' }, path: [W(520, 540, 0), W(330, 460, 3, 'idle'), W(520, 540, 0)], look: Object.assign({}, LK.kt_levite, { robe: 'y2k1', ht: 'r4y3' }) })
  ]
},
{
  title: 'La tente de la rencontre', book: 'Exode', ch: 33, ref: 'Exodus 33:10', refFr: 'Exode 33, 10', accent: 2, feast: null,
  quote: 'And all saw that the pillar of the cloud stood at the door of the tabernacle.  And they stood and worshipped at the doors of their tent.',
  fr: 'Et tous voyaient la colonne de nuée se tenir à l’entrée de la tente. Et ils se levaient et se prosternaient chacun à l’entrée de sa tente.',
  more: ['Moïse dresse la tente hors du camp, loin, et l’appelle tente de la rencontre. Quand il y va, tout le peuple se lève, chacun à l’entrée de sa tente, et le suit des yeux. La colonne de nuée descend et se tient à l’entrée, et le Seigneur parle à Moïse face à face, comme un homme parle à son ami. Josué, son jeune serviteur, ne quitte pas la tente.',
    'Pas de fête juive attachée à ce passage. Le verset 11, « face à face, comme un homme parle à son ami », est l’une des rares descriptions de la relation entre Dieu et Moïse ; le Deutéronome (34, 10) y fait écho : il ne s’est plus levé en Israël de prophète comme Moïse.'],
  back(P) {
    Lib.sun(P, 820, 140, 26);
    Lib.platform(P, 'y4r2b2', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    P.box(40, 60, 0, 130, 100, 90, { t: 'r4y5k2', l: 'y2r1k1', r: 'y2r1k2' });
    P.shape([P.I(30, 50, 90), P.I(180, 50, 90), P.I(180, 170, 90), P.I(30, 170, 90)], 'r5y4k3', 1);
    P.shape([P.I(170.5, 90, 0), P.I(170.5, 130, 0), P.I(170.5, 130, 70), P.I(170.5, 90, 70)], 'k7r2', 0.9);
    for (const y of [60, 160]) P.cyl(174, y, 0, 3, 94, 'r4y5k3');
    Lib.stones(P, 30, 'y3r2k2', [180, 20, 150, 200]);
    ktCamp(P, [[360, 230, 1, 'b3y2k1'], [440, 300, 1.1, 'r5y4k1'], [300, 380, 1, 'y3r2k1'], [430, 430, 1, 'b4r3k1'], [230, 450, 1, 'r4y4k2'], [460, 120, .9, 'y4b3k1']]);
    Lib.grass(P, 30, 'y5b4', [200, 250, 300, 280]);
    Lib.bush(P, 110, 330, 0, 20); Lib.bush(P, 60, 470, 0, 16);
  },
  live(P, t) {
    for (let i = 0; i < 6; i++) { const c = P.I(205, 110, 20 + i * 45); const w = 36 + Math.sin(t * 1.3 + i) * 6 + i * 3; Lib.cloud(P, c[0] + Math.sin(t * 0.8 + i * 1.7) * 6, c[1], w * 2.2, w, i % 2 ? 'b1k1' : 'k1'); }
  },
  chars: [
    ch(LK.kt_moses, { h: 140, speed: 14, hold: { f: 'staffV' }, path: [W(330, 240, 1, 'idle'), W(215, 150, 4, 'talk', { f: -1 }), W(330, 240, 0, null, { jump: 1 })] }),
    ch(LK.kt_joshua, { x: 190, y: 190, face: -1, clip: 'still', h: 132 }),
    ch(LK.isrM, { x: 400, y: 290, face: -1, clip: 'prostrate', h: 136 }),
    ch(LK.isrW, { x: 350, y: 360, face: -1, clip: 'bow', h: 128 }),
    ch(LK.isrOld, { x: 420, y: 400, face: -1, clip: 'prostrate', h: 134, t0: 1 }),
    ch(LK.isrW2, { x: 290, y: 440, face: -1, clip: 'bow', h: 126, t0: 0.5 }),
    ch(LK.child, { x: 320, y: 470, face: -1, clip: 'lookup', h: 90 }),
    ch(LK.isrM2, { x: 480, y: 190, face: -1, clip: 'bow', h: 134, t0: 1.4 })
  ]
},
{
  title: 'Dans le creux du rocher', book: 'Exode', ch: 33, ref: 'Exodus 33:22', refFr: 'Exode 33, 22', accent: 0, feast: null,
  quote: 'And when my glory shall pass, I will set thee in a hole of the rock, and protect thee with my righthand till I pass:',
  fr: 'Et quand ma gloire passera, je te placerai dans le creux du rocher, et je te couvrirai de ma main jusqu’à ce que je sois passé :',
  more: ['Moïse demande : « Montre-moi ta gloire. » Dieu répond : je ferai passer devant toi toute ma bonté, mais tu ne peux voir ma face, car l’homme ne peut me voir et vivre. Il y a un lieu près de moi : tu te tiendras sur le rocher. Quand ma gloire passera, je te mettrai dans le creux du rocher et je te couvrirai de ma main ; puis tu me verras de dos.',
    'Pas de fête juive attachée à ce Chabbat. Lorsque Dieu passe devant Moïse, il proclame les treize attributs de miséricorde (Exode 34, 6-7), que l’on récite aux Selihot, aux jours de jeûne et tout au long de Yom Kippour.'],
  back(P) {
    nightSky(P, 'b5k3', 40);
    Lib.platform(P, 'y3r3k2', 'y3r3k3', { h: 70, strata: [[0, .4, 'y3r3k3'], [.4, 1, 'r4y3k4']] });
    P.box(0, 0, 0, 300, 200, 300, { t: 'y4r3k3', l: 'y3r3k2', r: 'y3r3k4' });
    P.box(0, 200, 0, 170, 140, 170, { t: 'y4r3k3', l: 'y3r3k2', r: 'y3r3k4' });
    P.box(300, 0, 0, 170, 120, 200, { t: 'y4r3k3', l: 'y3r3k2', r: 'y3r3k4' });
    for (let i = 0; i < 9; i++) { const z = 30 + i * 30; P.line([P.I(10 + (i % 3) * 40, 200, z), P.I(80 + (i % 4) * 50, 200, z - 10)], 0.6); }
    const cl = [[120, 200, 70], [200, 200, 70], [215, 200, 150], [170, 200, 200], [130, 200, 160]];
    P.shape(cl.map(p => P.I(p[0], p[1], p[2])), 'k8r2', 1.2);
    Lib.rock(P, 380, 260, 0, 50, 30, 'y3r3k3'); Lib.rock(P, 460, 380, 0, 40, 24, 'y3r3k3'); Lib.rock(P, 250, 460, 0, 44, 26, 'y3r3k3');
    Lib.stones(P, 24, 'y3r3k3', [200, 240, 320, 280]);
  },
  live(P, t) {
    const u = (t * 0.08) % 1, x = lerp(-100, 1100, u), y = 200 + Math.sin(u * Math.PI) * -40;
    P.halo(x, y, 170, ['y1', 'y2', 'y3', 'y4r1', 'y6r2'], { knock: true });
    ktRays(P, [x, y], 200, t);
  },
  top(P, t) {
    const u = (t * 0.08) % 1;
    if (u > 0.3 && u < 0.62) { const c = P.I(165, 204, 150), s = Math.sin((u - 0.3) / 0.32 * Math.PI); P.shape(smooth([[c[0] - 70 * s, c[1] - 20], [c[0] - 30, c[1] - 70 * s], [c[0] + 50 * s, c[1] - 60 * s], [c[0] + 80 * s, c[1] + 10], [c[0] + 40, c[1] + 60 * s], [c[0] - 40 * s, c[1] + 50 * s]], 3), 'b3k3', 1); }
  },
  chars: [
    ch(LK.kt_moses, { x: 165, y: 205, z: 72, face: 1, clip: 'kneel', h: 104, noShadow: 1 }),
    { depth: 900, draw(P, t) { for (let i = 0; i < 2; i++) { const a = t * 0.5 + i * Math.PI, c = P.I(380 + Math.cos(a) * 90, 300 + Math.sin(a) * 60, 260); Lib.bird(P, c[0], c[1], 0.9, t * 2 + i, 'k5'); } } },
    { beast: 'deer', h: 70, x: 400, y: 60, z: 200, face: -1 }
  ]
},
{
  title: 'Les secondes tables', book: 'Exode', ch: 34, ref: 'Exodus 34:4', refFr: 'Exode 34, 4', accent: 1, feast: null,
  quote: 'Then he cut out two tables of stone, such as had been before; and rising very early he went up into the Mount Sinai, as the Lord had commanded him, carrying with him the tables.',
  fr: 'Alors il tailla deux tables de pierre semblables aux premières ; et, se levant de grand matin, il monta sur le mont Sinaï, comme le Seigneur le lui avait ordonné, emportant avec lui les tables.',
  more: ['« Taille-toi deux tables de pierre semblables aux premières, et j’y écrirai les paroles qui étaient sur les tables que tu as brisées. » Moïse doit monter seul : que personne ne paraisse sur la montagne, et que même le petit et le gros bétail ne paissent pas en face d’elle. Il taille les pierres et monte de grand matin, les tables dans les mains.',
    'Pas de fête juive attachée à ce Chabbat. Les passages Exode 32, 11-14 et 34, 1-10 sont la lecture de la Torah des jours de jeûne publics, comme le 10 Tévet, le 17 Tamouz ou le jeûne de Guedalia.'],
  back(P) {
    Lib.sun(P, 820, 230, 34);
    Lib.cloud(P, 700, 150, 180, 30, 'r1y1');
    Lib.platform(P, 'y4r3k1', 'y4r3k2', { strata: [[0, .35, 'y4r3k2'], [.35, .7, 'r4y4k3'], [.7, 1, 'r4y3k4']] });
    ktSinai(P, 170, 160, 170, 330);
    P.box(360, 330, 0, 90, 60, 50, 'y2r1k3');
    P.shape([P.I(372, 390.5, 10), P.I(402, 390.5, 10), P.I(402, 390.5, 40), P.I(372, 390.5, 40)], 'y1k2', 0.8);
    for (let i = 0; i < 16; i++) { const c = P.I(340 + P.r() * 140, 400 + P.r() * 60, 0); P.shape([[c[0], c[1]], [c[0] + 6, c[1] - 3], [c[0] + 9, c[1] + 1], [c[0] + 3, c[1] + 3]], 'y2r1k2', 0.5); }
    const ch0 = P.I(330, 420, 0); P.line([[ch0[0], ch0[1]], [ch0[0] + 16, ch0[1] - 6]], 1.4, { ink: 3 });
    Lib.stones(P, 20, 'y3r2k3', [280, 260, 240, 260]);
    fenceRing(P, 170, 160, 250, -0.55, 2.1, 14);
  },
  chars: [
    ch(LK.kt_moses, { h: 132, speed: 10, over: 'hold2', hold: { nTop: 'tablets' }, path: [W(330, 380, 2.5, 'hold2'), W(290, 300, 0, null, { z: 30 }), W(220, 210, 3, 'hold2', { z: 180 }), W(330, 380, 0, null, { jump: 1 })] }),
    ch(LK.shepherd, { h: 132, speed: 12, hold: { f: 'staffV' }, path: [W(420, 250, 0), W(530, 430, 1.5, 'wave'), W(420, 250, 0, null, { jump: 1 })] }),
    ...[0, 1, 2].map(i => ({ beast: i === 2 ? 'ram' : 'sheep', h: 56, speed: 12, t0: -0.6 - i * 0.9, path: [W(420, 250, 0), W(530, 430, 1.5), W(420, 250, 0, null, { jump: 1 })] })),
    { beast: 'bull', h: 80, speed: 8, path: [W(500, 180, 1), W(530, 300, 2), W(500, 180, 0)] }
  ]
},
{
  title: 'Le visage rayonnant de Moïse', book: 'Exode', ch: 34, ref: 'Exodus 34:30', refFr: 'Exode 34, 30', accent: 0, feast: null,
  quote: 'And Aaron and the children of Israel seeing the face of Moses horned, were afraid to come near.',
  fr: 'Et Aaron et les enfants d’Israël, voyant le visage de Moïse rayonnant, craignirent de s’approcher.',
  more: ['Moïse redescend du Sinaï avec les deux tables du témoignage, et il ne sait pas que la peau de son visage rayonne depuis qu’il a parlé avec Dieu. Aaron et le peuple ont peur d’approcher. Il les appelle, Aaron et les chefs reviennent, puis tout Israël, et il leur transmet ce que Dieu lui a dit. Quand il a fini, il met un voile sur son visage.',
    'Pas de fête juive attachée à ce passage. L’hébreu karan, « rayonner », est de la même racine que qéren, « corne » : la Vulgate a traduit « cornuta », d’où la traduction anglaise citée ici et le Moïse cornu de Michel-Ange.'],
  back(P) {
    Lib.sun(P, 180, 130, 30);
    ktSinai(P, 60, 40, 130, 250);
    Lib.platform(P, 'y5r2', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
    ktCamp(P, [[420, 20, 1, 'b3y2k1'], [450, 150, 1, 'r5y3k1'], [30, 440, .9, 'y3r2k1'], [440, 440, 1, 'r4y4k2']]);
    Lib.stones(P, 20, 'y4r3k2', [150, 300, 300, 200]);
    Lib.rock(P, 120, 220, 0, 40, 24, 'y4r3k3');
    Lib.grass(P, 24, 'y5b4', [260, 60, 150, 150]);
  },
  live(P, t) { const c = P.I(200, 230, 125); P.halo(c[0], c[1], 70 + Math.sin(t * 2.2) * 6, ['y1', 'y2', 'y3', 'y5r1']); ktRays(P, c, 90, t); },
  chars: [
    ch(LK.mosesOld, { x: 200, y: 230, face: 1, clip: 'hold2', hold: { nTop: 'tablets' }, h: 146 }),
    ch(LK.kt_aaron, { x: 320, y: 260, face: -1, clip: 'stagger', h: 142 }),
    ch(LK.isrOld, { x: 360, y: 330, face: -1, clip: 'stagger', h: 136, t0: 0.8, hold: { f: 'staffV' } }),
    ch(LK.isrM, { x: 300, y: 380, face: -1, clip: 'bow', h: 136 }),
    ch(LK.isrW, { x: 400, y: 400, face: -1, clip: 'still', h: 128 }),
    ch(LK.child, { x: 350, y: 440, face: -1, clip: 'point', h: 90 }),
    ch(LK.isrM2, { h: 136, speed: 12, path: [W(260, 300, 3, 'talk'), W(500, 330, 2, 'idle'), W(260, 300, 0)] })
  ]
}
];
