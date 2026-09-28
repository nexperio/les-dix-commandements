/* PARACHA PEKOUDÉ · Exode 38, 21 à 40, 38 · Chabbat 13 mars 2027 */
Object.assign(LK, {
  pk_moses: Object.assign({}, LK.mosesOld),
  pk_aaron: { old: 1, skin: 'y5r4', hs: 'short', hair: 'k2', beard: 'full', bt: 'k2b1', robe: 'b7r1', len: 'floor', trim: 1, sleeves: 'long', sash: 'y7r3', cloak: 'y7r3b1', head: 'turban', ht: 'y1', band: 'y9r3', feet: 'bare' },
  pk_son: { skin: 'y5r4', hs: 'short', hair: 'k7', beard: 'short', bt: 'k6', robe: 'y1', len: 'ankle', sleeves: 'long', sash: 'r6b4', head: 'cap', ht: 'y1', feet: 'bare' },
  pk_ithamar: { skin: 'y5r4k1', hs: 'curly', hair: 'k7r2', beard: 'short', bt: 'k6r2', robe: 'y1', len: 'ankle', sleeves: 'long', sash: 'b6r4', head: 'cap', ht: 'y1', feet: 'bare' },
  pk_levite: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'short', robe: 'y3r2', len: 'knee', sleeves: 'short', sash: 'b6', head: 'cloth', ht: 'y2b1', band: 'k6', feet: 'sandal' },
  pk_levite2: { skin: 'y5r4k1', hs: 'short', hair: 'k7', beard: 'long', robe: 'b3y2', len: 'knee', sleeves: 'short', sash: 'r6', head: 'cloth', ht: 'y2', band: 'r5', feet: 'sandal' },
  pk_bezalel: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'short', bt: 'k7', robe: 'r4y5k1', len: 'knee', sleeves: 'short', sash: 'b6', head: 'cloth', ht: 'y3r2', band: 'k6', feet: 'sandal' },
  pk_oholiav: { skin: 'y5r4k1', hs: 'short', hair: 'k6r2', beard: 'long', bt: 'k5', robe: 'b5r3', len: 'ankle', cloak: 'r5b3k1', sash: 'y7', head: 'turban', ht: 'y2r2', sleeves: 'long' }
});
Object.assign(CLIPS, {
  pk_wash: { d: 2.2, k: [{ lean: 34, head: 12, nU: 60, nL: 30, fU: 56, fL: 34, nT: 14, nK: -20, fT: -10, fK: -14 }, { lean: 38, head: 16, nU: 74, nL: 14, fU: 70, fL: 18, nT: 14, nK: -20, fT: -10, fK: -14 }] },
  pk_weave: { d: 1.6, k: [{ nU: 70, nL: 30, fU: 90, fL: 10, lean: 6, head: 4, nT: 4, fT: -4 }, { nU: 96, nL: 8, fU: 64, fL: 36, lean: 8, head: 6, nT: 4, fT: -4 }] }
});
Object.assign(PROPS2, {
  pk_hoshen(P, A, J, M, h, t, lw, F, u, n, add) {
    const c = add(add(J.sh, J.up, -0.075), J.fw, 0.012), s = 0.036, Q = (a, b) => M(add(add(c, J.fw, a), J.up, b));
    P.line([M(add(J.sh, J.fw, -0.01)), Q(-s * 0.6, s)], lw * 0.7, { ink: 0 });
    P.shape([Q(-s, s), Q(s, s), Q(s, -s), Q(-s, -s)], 'y8r3', lw * 0.6);
    const tones = ['r8y2', 'y9', 'y5b6', 'b7r1', 'b6', 'y2', 'r6y6', 'b2k2', 'r6b5', 'y6b3', 'k6', 'b4y4'];
    for (let r = 0; r < 4; r++) for (let k = 0; k < 3; k++) { const q = Q(-s * 0.6 + k * s * 0.6, s * 0.72 - r * s * 0.48); P.fill(P.disc(q[0], q[1], h * 0.0055, 6), tones[r * 3 + k], { noKnock: true }); }
  },
  pk_socket(P, A, J, M, h, t, lw) {
    const c = add2(J.sh, J.up, 0.07), q = M(c);
    P.shape([[q[0] - h * 0.07, q[1]], [q[0] + h * 0.07, q[1]], [q[0] + h * 0.06, q[1] - h * 0.05], [q[0] - h * 0.06, q[1] - h * 0.05]], 'b1k2', lw * 0.7);
    P.fill([[q[0] - h * 0.02, q[1] - h * 0.05], [q[0] + h * 0.02, q[1] - h * 0.05], [q[0] + h * 0.015, q[1] - h * 0.02], [q[0] - h * 0.015, q[1] - h * 0.02]], 'k6', {});
  },
  pk_board(P, A, J, M, h, t, lw) {
    const c = add2(J.sh, J.up, 0.05), q = M(c);
    P.shape([[q[0] - h * 0.05, q[1] + h * 0.1], [q[0] + h * 0.02, q[1] + h * 0.12], [q[0] + h * 0.08, q[1] - h * 0.5], [q[0] + h * 0.01, q[1] - h * 0.52]], 'y8r3', lw * 0.8);
  }
});
/* ---- décors ---- */
const pkSky = (P, o = {}) => {
  if (o.night) { nightSky(P, 'b7k4', 90); Lib.moon(P, 200, 150, 16); }
  else { Lib.sun(P, o.sx || 190, o.sy || 140, 28); Lib.cloud(P, o.cx || 800, 140, 160, 30, 'b1'); }
  P.shape(smooth([[520, 345], [570, 300], [615, 285], [660, 240], [700, 262], [740, 222], [790, 270], [850, 290], [900, 345]], 3), o.night ? 'r3b5k4' : 'r4y4k3', 1);
  Lib.platform(P, o.top || (o.night ? 'y3r2b4k2' : 'y5r2'), o.night ? 'y3r3b3k3' : 'y5r3k1', { strata: [[0, .4, o.night ? 'y3r3b3k3' : 'y5r3k1'], [.4, 1, o.night ? 'y3r3b3k4' : 'y5r4k3']] });
};
const pkSocket = (P, x, y, tn = 'b1k2') => { P.box(x - 9, y - 9, 0, 18, 18, 10, tn, 0.6); };
const pkBoard = (P, x, y, h, gold = 1) => { pkSocket(P, x + 6, y + 6); P.box(x, y, 8, 12, 12, h, gold ? { t: 'y9r3', l: 'y8r4k1', r: 'y7r4k2' } : 'r5y5k3', 0.7); };
const pkCourt = (P, o = {}) => {
  const H = 72, step = 45, post = (x, y) => { P.box(x - 4, y - 4, 0, 8, 8, 10, 'r5y6k3', 0.5); P.box(x - 3, y - 3, 10, 6, 6, H - 10, 'r4y6k2', 0.6); P.box(x - 4, y - 4, H, 8, 8, 5, 'b1k2', 0.5); };
  for (let x = 12; x < 540; x += step) { if (x + step <= 540) P.shape([P.I(x, 12, 12), P.I(x + step, 12, 12), P.I(x + step, 12, H - 4), P.I(x, 12, H - 4)], 'y1', 0.6); post(x, 12); }
  for (let y = 12 + step; y < 540; y += step) { if (y + step <= 540) P.shape([P.I(12, y, 12), P.I(12, y + step, 12), P.I(12, y + step, H - 4), P.I(12, y, H - 4)], 'y1', 0.6); post(12, y); }
  P.shape([P.I(12, 12, 12), P.I(12, 57, 12), P.I(12, 57, H - 4), P.I(12, 12, H - 4)], 'y1', 0.6);
  for (let i = 0; i < 12; i++) { const x = 30 + i * 44; P.box(x, 528, 0, 7, 7, 26, 'r4y6k2', 0.5); P.box(528, x, 0, 7, 7, 26, 'r4y6k2', 0.5); }
};
const pkTent = (P, x, y, w, d, h) => {
  P.box(x, y, 0, w, d, h, { t: 'r6y3k1', l: 'y8r3', r: 'y7r3k1' });
  for (let i = 1; i < 12; i++) P.line([P.I(x + w * i / 12, y + d, 0), P.I(x + w * i / 12, y + d, h * 0.62)], 0.5);
  for (let i = 0; i < 12; i++) { const a = P.I(x + w * i / 12, y + d, 0); P.box(x + w * i / 12 + 2, y + d - 2, 0, w / 12 - 4, 4, 8, 'b1k2', 0.4); }
  P.shape([P.I(x, y + d, h * 0.62), P.I(x + w, y + d, h * 0.62), P.I(x + w, y + d, h), P.I(x, y + d, h)], 'b6r3k1', 0.9);
  P.shape([P.I(x, y, h + 0.5), P.I(x + w, y, h + 0.5), P.I(x + w, y + d, h + 0.5), P.I(x, y + d, h + 0.5)], 'r7y2k2', 1);
  P.shape([P.I(x + w, y, h * 0.62), P.I(x + w, y + d, h * 0.62), P.I(x + w, y + d, h), P.I(x + w, y, h)], 'b6r3k2', 0.9);
  const bands = ['b7r1', 'r6b5', 'r8y2', 'y1'];
  for (let i = 0; i < 8; i++) P.fill([P.I(x + w + 0.5, y + 8 + i * (d - 16) / 8, 0), P.I(x + w + 0.5, y + 8 + (i + 1) * (d - 16) / 8, 0), P.I(x + w + 0.5, y + 8 + (i + 1) * (d - 16) / 8, h * 0.6), P.I(x + w + 0.5, y + 8 + i * (d - 16) / 8, h * 0.6)], bands[i % 4]);
  for (let i = 0; i < 5; i++) { const yy = y + 8 + i * (d - 16) / 4; P.box(x + w, yy - 3, 0, 6, 6, h * 0.62, 'y8r3', 0.6); }
};
const pkArk = (P, x, y, z, s = 1) => {
  const W = 70 * s, D = 42 * s, H = 40 * s;
  P.box(x - 26 * s, y - 4 * s, z + 12 * s, W + 52 * s, 4 * s, 4 * s, 'r5y6k3', 0.7);
  P.box(x, y, z, W, D, H, { t: 'y9r3', l: 'y8r4k1', r: 'y7r4k2' });
  P.box(x - 2 * s, y - 2 * s, z + H, W + 4 * s, D + 4 * s, 4 * s, 'y9r4', 0.8);
  const pa = P.I(x + 10 * s, y + D / 2, z + H + 4 * s), pb = P.I(x + W - 10 * s, y + D / 2, z + H + 4 * s);
  for (const [p, o] of [[pa, pb], [pb, pa]]) { const d = Math.sign(o[0] - p[0]) || 1; P.shape([[p[0] - 5 * s, p[1]], [p[0] + 5 * s, p[1]], [p[0] + 3 * s, p[1] - 18 * s], [p[0] - 3 * s, p[1] - 18 * s]], 'y9r3', 0.7); P.shape(P.disc(p[0], p[1] - 22 * s, 5 * s, 10), 'y9r3', 0.7); P.shape([[p[0], p[1] - 14 * s], [p[0] + d * 22 * s, p[1] - 36 * s], [p[0] + d * 30 * s, p[1] - 30 * s], [p[0] + d * 24 * s, p[1] - 20 * s], [p[0] + d * 30 * s, p[1] - 14 * s], [p[0] + d * 8 * s, p[1] - 6 * s]], 'y8r2', 0.7); }
  P.box(x - 26 * s, y + D, z + 12 * s, W + 52 * s, 4 * s, 4 * s, 'r5y6k3', 0.7);
};
const pkMenorah = (P, x, y, z, s = 1) => {
  const b = P.I(x, y, z), top = [b[0], b[1] - 110 * s], G = (pts, w) => { P.line(pts, w + 1.6, { ink: 3, taper: 0 }); P.line(pts, w, { ink: 0, taper: 0 }); };
  P.shape([[b[0] - 18 * s, b[1]], [b[0] + 18 * s, b[1]], [b[0] + 6 * s, b[1] - 12 * s], [b[0] - 6 * s, b[1] - 12 * s]], 'y9r3', 0.9);
  G([[b[0], b[1] - 10 * s], top], 5 * s);
  for (let k = 1; k <= 3; k++) for (const sg of [-1, 1]) { const R = k * 16 * s, pts = []; for (let i = 0; i <= 10; i++) { const a = i / 10 * Math.PI / 2; pts.push([top[0] + sg * R * Math.cos(a), top[1] + R * Math.sin(a)]); } G(pts, 3.6 * s); }
  for (let j = -3; j <= 3; j++) { const X = top[0] + j * 16 * s; P.shape([[X - 5 * s, top[1] - 6 * s], [X + 5 * s, top[1] - 6 * s], [X + 2 * s, top[1] + 2 * s], [X - 2 * s, top[1] + 2 * s]], 'y9r3', 0.6); }
  return top;
};
const pkLaver = (P, x, y, s = 1) => {
  P.cyl(x, y, 0, 24 * s, 6 * s, 'r5y6k3'); P.cyl(x, y, 6 * s, 11 * s, 30 * s, 'r5y6k2');
  P.cyl(x, y, 36 * s, 34 * s, 18 * s, { t: 'r5y5k2', s: 'r5y6k1', d: 'r5y6k3' });
  P.shape(P.ell(x, y, 54.5 * s, 28 * s, 28 * s, 20), 'b4y1', 0.6);
};
const pkAltar = (P, x, y, w, h) => {
  P.box(x, y, 0, w, w, h, { t: 'r5y5k3', l: 'r5y6k2', r: 'r5y6k3' });
  P.line([P.I(x, y + w, h * 0.5), P.I(x + w, y + w, h * 0.5)], 1.6, { ink: 3, taper: 0 }); P.line([P.I(x + w, y, h * 0.5), P.I(x + w, y + w, h * 0.5)], 1.6, { ink: 3, taper: 0 });
  for (const [a, b] of [[0, 0], [w - 9, 0], [0, w - 9], [w - 9, w - 9]]) P.box(x + a, y + b, h, 9, 9, 10, 'r5y6k2', 0.7);
};
const pkTable = (P, x, y) => { P.box(x, y, 0, 60, 34, 36, { t: 'y9r3', l: 'y8r4k1', r: 'y7r4k2' }); for (let s = 0; s < 2; s++) for (let i = 0; i < 6; i++) { const c = P.I(x + 12 + s * 36, y + 17, 36 + i * 5); P.shape([[c[0] - 12, c[1]], [c[0] + 12, c[1]], [c[0] + 10, c[1] - 5], [c[0] - 10, c[1] - 5]], 'y6r3', 0.5); } };
const pkTabernacle = (P) => { pkCourt(P); pkTent(P, 40, 40, 230, 120, 150); pkLaver(P, 330, 100, 1); pkAltar(P, 390, 65, 70, 44); };
const SHEET = { title: 'Pekoudé · Les comptes', sub: 'Paracha de la semaine · Chabbat 13 mars 2027 · Exode 38, 21 à 40, 38' };
const SCENES = [
{
  title: 'Cent socles d’argent', book: 'Exode', ch: 38, ref: 'Exodus 38:27', refFr: 'Exode 38, 27', accent: 2, feast: null,
  quote: 'A hundred sockets were made of a hundred talents, one talent being reckoned for every socket.',
  fr: 'On fit cent socles avec cent talents, un talent pour chaque socle.',
  more: ['« Voici les comptes de la Demeure. » Sous la conduite d’Itamar, fils d’Aaron, les Lévites dressent l’inventaire de ce qui a été donné et employé : vingt-neuf talents d’or, cent talents d’argent et mille sept cent soixante-quinze sicles, soixante-dix talents de cuivre. L’argent sert à fondre les cent socles qui porteront les planches de la Demeure et les piliers du voile.',
    'Pas de fête juive attachée à ce passage. Cet argent est celui du demi-sicle versé par chacun des 603 550 hommes recensés (Exode 38, 26), le passage lu la semaine précédente pour Chabbat Chekalim. Le midrach (Chemot Rabba 51) rapporte que Moïse tint à rendre ces comptes publiquement, pour que nul ne le soupçonne.'],
  back(P) {
    pkSky(P);
    Lib.tent(P, 30, 30, 150, 110, 120, 'b4y2k1');
    for (let r = 0; r < 4; r++) for (let i = 0; i < 7; i++) pkSocket(P, 240 + i * 36, 40 + r * 34);
    P.box(40, 220, 0, 110, 60, 30, 'r4y5k3');
    const b = P.I(95, 250, 30); P.line([[b[0], b[1]], [b[0], b[1] - 70]], 2.2, { ink: 3, taper: 0 }); P.line([[b[0] - 40, b[1] - 66], [b[0] + 40, b[1] - 60]], 1.8, { ink: 3, taper: 0 });
    for (const [sx, dy] of [[-40, -66], [40, -60]]) { P.line([[b[0] + sx, b[1] + dy], [b[0] + sx - 12, b[1] + dy + 30]], 0.6); P.line([[b[0] + sx, b[1] + dy], [b[0] + sx + 12, b[1] + dy + 30]], 0.6); P.shape([[b[0] + sx - 16, b[1] + dy + 30], [b[0] + sx + 16, b[1] + dy + 30], [b[0] + sx + 10, b[1] + dy + 38], [b[0] + sx - 10, b[1] + dy + 38]], 'r5y6k2', 0.6); }
    P.shape(P.disc(b[0] - 40, b[1] - 42, 7, 10), 'b1k2', 0.5); P.shape(P.disc(b[0] + 40, b[1] - 36, 7, 10), 'b1k2', 0.5);
    for (let i = 0; i < 5; i++) P.box(180 + (i % 2) * 5, 300, i * 7, 50, 22, 7, 'b1k2', 0.6);
    for (let i = 0; i < 3; i++) P.box(180 + (i % 2) * 5, 350, i * 7, 50, 22, 7, 'y9r3', 0.6);
    for (let i = 0; i < 4; i++) P.box(180 + (i % 2) * 5, 400, i * 7, 50, 22, 7, 'r5y6k2', 0.6);
    Lib.stones(P, 14, 'y3r2k3', [300, 300, 220, 220]);
  },
  chars: [
    ch(LK.pk_ithamar, { x: 150, y: 330, z: 0, face: 1, clip: 'sit', h: 136, hold: { n: 'scroll' } }),
    ch(LK.pk_moses, { x: 260, y: 230, face: -1, clip: 'point', h: 144, hold: { f: 'staffV' } }),
    ch(LK.pk_bezalel, { x: 110, y: 200, face: 1, clip: 'offer', h: 140 }),
    ch(LK.pk_levite, { h: 136, speed: 14, over: 'carry', hold: { nTop: 'pk_socket' }, path: [W(470, 450, 1), W(470, 200, 1.5, 'idle'), W(470, 450, 0)] }),
    ch(LK.pk_levite2, { h: 136, speed: 14, t0: 5, over: 'carry', hold: { nTop: 'pk_socket' }, path: [W(380, 480, 1), W(390, 200, 1.5, 'idle'), W(380, 480, 0)] }),
    ch(LK.pk_levite, { x: 300, y: 330, face: -1, clip: 'kneel', h: 136, t0: 1, look: Object.assign({}, LK.pk_levite, { robe: 'r4y4k1' }) }),
    ch(LK.isrOld, { x: 330, y: 440, face: -1, clip: 'idle', h: 136, hold: { f: 'staffV' } })
  ]
},
{
  title: 'Les fils d’or de l’éphod', book: 'Exode', ch: 39, ref: 'Exodus 39:3', refFr: 'Exode 39, 3', accent: 0, feast: null,
  quote: 'With embroidered work, and he cut thin plates of gold, and drew them small into threads, that they might be twisted with the woof of the foresaid colours,',
  fr: 'D’un travail de brodeur : il découpa de minces lames d’or et les étira en fils, pour les tordre avec la trame des couleurs susdites,',
  more: ['Avec le bleu azur, la pourpre et l’écarlate, les artisans font les vêtements sacrés d’Aaron. Pour l’éphod, ils battent l’or en lames minces, les découpent en fils et les tissent avec la laine et le lin retors. Sur les épaulières, ils sertissent deux pierres d’onyx gravées des noms des fils d’Israël, en souvenir devant l’Éternel.',
    'Pas de fête juive attachée à ce passage. Au chapitre 39 revient sept fois, comme un refrain, « comme l’Éternel l’avait ordonné à Moïse ».'],
  back(P) {
    pkSky(P, { sx: 820, sy: 160 });
    for (const [a, b] of [[20, 20], [520, 20], [20, 200]]) P.box(a - 3, b - 3, 0, 6, 6, 150, 'r5y5k3', 0.7);
    P.shape([P.I(20, 20, 150), P.I(520, 20, 150), P.I(520, 110, 138), P.I(20, 200, 138)], 'y2r2k1', 1);
    stoneStack(P, 50, 40, 56, 44, 32, 'y3r2k3'); P.cyl(78, 62, 32, 14, 12, 'k5r2');
    P.box(150, 70, 0, 18, 14, 20, 'k5b2', 0.9); P.box(143, 70, 20, 32, 14, 7, 'k6b2', 0.9);
    const L = (x, y, w, H, bands, frac) => { P.box(x - 6, y - 3, 0, 6, 6, H + 10, 'r5y5k3', 0.8); P.box(x + w, y - 3, 0, 6, 6, H + 10, 'r5y5k3', 0.8); const z0 = 14, z1 = z0 + (H - 20) * frac; bands.forEach((tn, i) => { const a = z0 + (z1 - z0) * i / bands.length, b = z0 + (z1 - z0) * (i + 1) / bands.length; P.fill([P.I(x, y, a), P.I(x + w, y, a), P.I(x + w, y, b), P.I(x, y, b)], tn); P.line([P.I(x, y, b), P.I(x + w, y, b)], 1.2, { ink: 0 }); }); for (let i = 0; i <= 12; i++) P.line([P.I(x + w * i / 12, y, z1), P.I(x + w * i / 12, y, H - 4)], 0.45); P.line([P.I(x - 4, y, H - 2), P.I(x + w + 4, y, H - 2)], 2.2, { ink: 3, taper: 0 }); };
    L(290, 50, 180, 120, ['y8r3', 'b7r1', 'r6b5', 'r8y2', 'y1', 'y8r3'], 0.6);
    P.box(60, 240, 0, 120, 60, 36, 'r4y5k3');
    const e = P.I(110, 270, 36); P.shape([[e[0] - 30, e[1] - 4], [e[0] + 30, e[1] - 12], [e[0] + 36, e[1] + 8], [e[0] - 24, e[1] + 16]], 'y8r3', 0.8); for (const k of [-1, 1]) P.shape(P.disc(e[0] + k * 20, e[1] + k * -4, 5, 10), 'k5b3', 0.6);
    for (let i = 0; i < 9; i++) { const c = P.I(200 + i * 8, 250, 30); P.line([[c[0], c[1]], [c[0] + 3, c[1] - 30]], 0.8, { ink: 0 }); }
    P.box(190, 240, 0, 80, 30, 30, 'r4y5k3');
    Lib.stones(P, 12, 'y3r2k3', [300, 320, 220, 200]);
  },
  live(P, t) { const a = P.I(78, 62, 44); Lib.flame(P, a[0], a[1], 18, 30, t); const c = P.I(160, 78, 27); for (let i = 0; i < 5; i++) { const u = (t * 1.8 + i / 5) % 1; P.fill(P.disc(c[0] + Math.cos(i * 1.3) * 30 * u, c[1] - 20 * u + u * u * 30, 2 * (1 - u) + 0.5, 6), 'y9r4', { noKnock: true }); } },
  chars: [
    ch(LK.pk_bezalel, { x: 175, y: 120, face: -1, clip: 'hammer', h: 140, hold: { n: 'hammer' } }),
    ch(LK.pk_levite, { x: 240, y: 310, face: -1, clip: 'reach', h: 134, hold: { n: 'knife' } }),
    ch(LK.pk_oholiav, { x: 380, y: 110, face: 1, clip: 'pk_weave', h: 140, look: Object.assign({}, LK.pk_oholiav, { cloak: null }) }),
    ch(LK.isrW, { x: 450, y: 170, face: -1, clip: 'pk_weave', h: 128, t0: 0.7 }),
    ch(LK.isrW2, { x: 160, y: 380, face: -1, clip: 'offer', h: 130 }),
    ch(LK.pk_moses, { x: 360, y: 350, face: -1, clip: 'bless', h: 144 }),
    ch(LK.child, { h: 86, speed: 14, over: 'carry', hold: { nTop: 'bundle' }, path: [W(480, 440, 1), W(300, 360, 2, 'offer'), W(480, 440, 0)] })
  ]
},
{
  title: 'Le pectoral aux douze pierres', book: 'Exode', ch: 39, ref: 'Exodus 39:10', refFr: 'Exode 39, 10', accent: 1, feast: null,
  quote: 'And he set four rows of precious stones in it.',
  fr: 'Et il y enchâssa quatre rangées de pierres précieuses.',
  more: ['Le pectoral du jugement est tissé comme l’éphod, carré, plié en double, d’un empan de côté. On y sertit quatre rangées de trois pierres, douze en tout : sardoine, topaze, émeraude, escarboucle, saphir, diamant, opale, agate, améthyste, chrysolithe, onyx, jaspe, chacune gravée du nom d’une tribu. Des chaînettes d’or le fixent à l’éphod, et sur la tiare une lame d’or pur porte « Saint à l’Éternel ».',
    'Pas de fête juive attachée à ce passage. Les noms français des pierres varient selon les traductions ; le texte hébreu nomme chaque pierre, et la correspondance exacte avec les gemmes connues reste discutée. Le grand prêtre porte ainsi les noms des tribus deux fois, sur ses épaules et sur son cœur.'],
  back(P) {
    pkSky(P);
    Lib.tent(P, 30, 30, 160, 110, 120, 'y2r1k1');
    P.box(260, 40, 0, 90, 40, 70, 'r4y5k3'); P.box(262, 42, 70, 86, 36, 6, 'r4y6k2');
    const f = P.I(305, 80, 90); P.shape([[f[0] - 34, f[1] - 60], [f[0] + 34, f[1] - 60], [f[0] + 34, f[1] + 20], [f[0] - 34, f[1] + 20]], 'y8r3', 1.1);
    const tones = ['r8y2', 'y9', 'y5b6', 'b7r1', 'b6', 'y2', 'r6y6', 'b2k2', 'r6b5', 'y6b3', 'k6', 'b4y4'];
    for (let r = 0; r < 4; r++) for (let k = 0; k < 3; k++) { const x = f[0] - 20 + k * 20, y = f[1] - 46 + r * 19; P.shape(P.disc(x, y, 7, 12), tones[r * 3 + k], 0.6); }
    P.box(400, 60, 0, 100, 50, 32, 'r4y5k3'); for (let i = 0; i < 6; i++) { const c = P.I(415 + i * 14, 85, 32); P.shape(P.disc(c[0], c[1] - 3, 4, 8), tones[i + 3], 0.5); }
    Lib.lamp(P, 220, 180, 0, 1.1); Lib.jar(P, 470, 200, 0, 1.3, 'y7r3');
    Lib.stones(P, 12, 'y3r2k3', [300, 320, 220, 200]);
  },
  chars: [
    ch(LK.pk_aaron, { x: 250, y: 260, face: 1, clip: 'bless', h: 148, hold: { nTop: 'pk_hoshen' } }),
    ch(LK.pk_moses, { x: 360, y: 260, face: -1, clip: 'offer', h: 144 }),
    ch(LK.pk_bezalel, { x: 440, y: 150, face: -1, clip: 'hammer', h: 138, hold: { n: 'knife' } }),
    ch(LK.pk_son, { x: 170, y: 330, face: 1, clip: 'idle', h: 136 }),
    ch(LK.pk_ithamar, { x: 200, y: 400, face: 1, clip: 'idle', h: 136, t0: 1.2 }),
    ch(LK.pk_son, { x: 130, y: 410, face: 1, clip: 'lookup', h: 132, t0: 0.6, look: Object.assign({}, LK.pk_son, { sash: 'b6r4', beard: null }) }),
    ch(LK.isrW, { x: 380, y: 400, face: -1, clip: 'pray', h: 128 }),
    ch(LK.isrM, { x: 440, y: 340, face: -1, clip: 'lookup', h: 136 })
  ]
},
{
  title: 'Moïse bénit l’ouvrage', book: 'Exode', ch: 39, ref: 'Exodus 39:43', refFr: 'Exode 39, 43', accent: 0, feast: null,
  quote: 'And when Moses saw all things finished, he blessed them.',
  fr: 'Et quand Moïse vit que tout était achevé, il les bénit.',
  more: ['Tout l’ouvrage est terminé. Les enfants d’Israël apportent à Moïse la Demeure et chacune de ses pièces : les planches, les barres, les piliers et les socles, les couvertures de peaux, le voile, l’arche et ses barres, la table et les pains, le chandelier, l’autel d’or, l’autel de cuivre, la cuve, les tentures du parvis, les vêtements sacrés. Moïse regarde : ils ont fait comme l’Éternel l’avait ordonné. Et il les bénit.',
    'Pas de fête juive attachée à ce passage. Rachi donne les mots de cette bénédiction : « Que la Présence divine repose sur l’œuvre de vos mains », et la suite du Psaume 90, la prière de Moïse : « que la douceur de l’Éternel notre Dieu soit sur nous ».'],
  back(P) {
    pkSky(P, { sx: 820, sy: 170 });
    for (let i = 0; i < 6; i++) P.box(40 + (i % 2) * 5, 40, i * 12, 150, 20, 12, i % 2 ? 'y8r3' : 'y9r3', 0.7);
    for (let r = 0; r < 2; r++) for (let i = 0; i < 6; i++) pkSocket(P, 240 + i * 34, 40 + r * 32);
    for (let i = 0; i < 3; i++) P.box(460, 40 + i * 14, 0, 50, 40, 10, ['r7y2k2', 'b7k2', 'y1'][i], 0.7);
    pkArk(P, 70, 190, 0, 1);
    pkTable(P, 230, 170);
    pkMenorah(P, 380, 170, 0, 0.95);
    pkLaver(P, 470, 250, 0.7);
    P.box(40, 330, 0, 60, 60, 36, { t: 'r5y5k3', l: 'r5y6k2', r: 'r5y6k3' });
    P.box(120, 330, 0, 30, 30, 34, { t: 'y9r3', l: 'y8r4k1', r: 'y7r4k2' });
    for (let i = 0; i < 3; i++) P.box(40, 420 + i * 8, i * 5, 60, 40, 5, ['b7r1', 'y1', 'r6b5'][i], 0.6);
  },
  chars: [
    ch(LK.pk_moses, { x: 290, y: 330, face: -1, clip: 'bless', h: 146, hold: { f: 'staffV' } }),
    ch(LK.pk_bezalel, { x: 380, y: 360, face: -1, clip: 'bow', h: 140 }),
    ch(LK.pk_oholiav, { x: 420, y: 420, face: -1, clip: 'bow', h: 140, t0: 1 }),
    ch(LK.pk_aaron, { x: 200, y: 400, face: 1, clip: 'pray', h: 146, hold: { nTop: 'pk_hoshen' } }),
    ch(LK.isrW, { x: 340, y: 470, face: -1, clip: 'kneel', h: 128 }),
    ch(LK.isrM2, { x: 490, y: 360, face: -1, clip: 'bow', h: 138 }),
    ch(LK.isrOld, { x: 480, y: 470, face: -1, clip: 'bow', h: 136 }),
    ch(LK.childG, { x: 270, y: 480, face: -1, clip: 'lookup', h: 88 })
  ]
},
{
  title: 'La Demeure dressée', book: 'Exode', ch: 40, ref: 'Exodus 40:15', refFr: 'Exode 40, 17', accent: 2, feast: null,
  quote: 'So in the first month of the second year, the first day of the month, the tabernacle was set up.',
  fr: 'Ainsi, le premier mois de la deuxième année, le premier jour du mois, le tabernacle fut dressé.',
  more: ['Dieu dit à Moïse : « Au premier jour du premier mois, tu dresseras la Demeure. » Moïse pose les socles, place les planches, met les barres et dresse les piliers. Il étend la tente sur la Demeure, dépose le Témoignage dans l’arche, l’apporte à l’intérieur et tend le voile. Puis il place la table, le chandelier, l’autel d’or, le rideau de l’entrée et l’autel des holocaustes.',
    'Pas de fête juive attachée à ce passage. Le premier jour du premier mois est Roch ’Hodech Nissan, un an moins deux semaines après la sortie d’Égypte. Le texte en marque la date avec précision.'],
  back(P) {
    pkSky(P);
    for (let i = 0; i < 14; i++) pkSocket(P, 50 + i * 17, 50);
    for (let i = 0; i < 8; i++) pkSocket(P, 44, 70 + i * 17);
    for (let i = 0; i < 9; i++) pkBoard(P, 38 + i * 17, 38, 120);
    for (let i = 0; i < 5; i++) pkBoard(P, 32, 60 + i * 17, 120);
    P.line([P.I(38, 50, 40), P.I(200, 50, 40)], 2.2, { ink: 0 }); P.line([P.I(38, 50, 90), P.I(200, 50, 90)], 2.2, { ink: 0 });
    for (let i = 0; i < 6; i++) P.box(300 + (i % 2) * 5, 40, i * 12, 150, 20, 12, i % 2 ? 'y8r3' : 'y9r3', 0.7);
    for (let i = 0; i < 3; i++) P.box(310, 120 + i * 10, i * 8, 70, 50, 8, ['r7y2k2', 'b7k2', 'y1'][i], 0.7);
    pkArk(P, 380, 230, 0, 0.9);
    Lib.stones(P, 12, 'y3r2k3', [220, 330, 300, 200]);
  },
  chars: [
    ch(LK.pk_moses, { x: 230, y: 220, face: -1, clip: 'point', h: 146, hold: { f: 'staffV' } }),
    ch(LK.pk_levite, { h: 136, speed: 12, over: 'carry', hold: { nTop: 'pk_board' }, path: [W(420, 110, 1), W(240, 110, 2, 'hold2'), W(420, 110, 0)] }),
    ch(LK.pk_levite2, { h: 136, speed: 12, t0: 5, over: 'carry', hold: { nTop: 'pk_board' }, path: [W(430, 180, 1), W(130, 200, 2, 'hold2'), W(430, 180, 0)] }),
    ch(LK.pk_levite, { x: 110, y: 160, face: 1, clip: 'hammer', h: 134, hold: { n: 'hammer' }, look: Object.assign({}, LK.pk_levite, { robe: 'r4y4k1' }) }),
    ch(LK.pk_aaron, { x: 300, y: 380, face: -1, clip: 'idle', h: 146 }),
    ch(LK.pk_son, { x: 350, y: 440, face: -1, clip: 'lookup', h: 134 }),
    ch(LK.isrM, { x: 170, y: 400, face: 1, clip: 'lookup', h: 136 }),
    ch(LK.childG, { x: 220, y: 470, face: 1, clip: 'point', h: 88 })
  ]
},
{
  title: 'Les mains et les pieds lavés', book: 'Exode', ch: 40, ref: 'Exodus 40:29', refFr: 'Exode 40, 31', accent: 1, feast: null,
  quote: 'And Moses and Aaron, and his sons, washed their hands and feet,',
  fr: 'Et Moïse, Aaron et ses fils se lavaient les mains et les pieds,',
  more: ['Moïse place la cuve entre la tente d’assignation et l’autel, et y met de l’eau. Moïse, Aaron et ses fils s’y lavent les mains et les pieds chaque fois qu’ils entrent dans la tente ou s’approchent de l’autel. Sur l’autel des holocaustes, Moïse offre l’holocauste et l’oblation. Il dresse le parvis autour de la Demeure et de l’autel, et tend le rideau de l’entrée.',
    'Pas de fête juive attachée à ce passage. Les commentateurs rattachent le lavage des mains du matin, la netilat yadayim, à ce geste des prêtres qui se lavaient à la cuve avant leur service.'],
  back(P) { pkSky(P); pkTabernacle(P); Lib.stones(P, 10, 'y3r2k3', [260, 360, 260, 160]); },
  live(P, t) { const a = P.I(425, 100, 54); Lib.flame(P, a[0], a[1], 34, 50, t); Lib.smoke(P, a[0], a[1] - 40, t, { n: 4, h: 200, r: 18, tn: 'k2b1' }); const w = P.I(330, 100, 56); for (let i = 0; i < 3; i++) { const u = (t * 0.8 + i / 3) % 1; P.fill(P.disc(w[0] + 40, w[1] - 10 + u * 30, 2.2, 6), 'b5', { noKnock: true }); } },
  chars: [
    ch(LK.pk_moses, { x: 340, y: 170, face: -1, clip: 'pk_wash', h: 144 }),
    ch(LK.pk_aaron, { x: 290, y: 150, face: 1, clip: 'pk_wash', h: 146, hold: { nTop: 'pk_hoshen' }, t0: 0.8 }),
    ch(LK.pk_son, { x: 400, y: 190, face: -1, clip: 'pk_wash', h: 134, t0: 0.4 }),
    ch(LK.pk_ithamar, { x: 320, y: 240, face: -1, clip: 'idle', h: 134 }),
    ch(LK.pk_son, { h: 132, speed: 12, over: 'carry', hold: { nTop: 'lamb' }, look: Object.assign({}, LK.pk_son, { beard: null }), path: [W(500, 330, 1), W(470, 170, 2, 'offer'), W(500, 330, 0)] }),
    ch(LK.pk_levite, { x: 200, y: 330, face: 1, clip: 'guard', h: 136, hold: { n: 'staffV' } }),
    ch(LK.isrW2, { x: 300, y: 470, face: -1, clip: 'pray', h: 128 }),
    ch(LK.isrOld, { x: 420, y: 440, face: -1, clip: 'idle', h: 136, hold: { f: 'staffV' } })
  ]
},
{
  title: 'La nuée emplit la Demeure', book: 'Exode', ch: 40, ref: 'Exodus 40:32', refFr: 'Exode 40, 34', accent: 2, feast: null,
  quote: 'The cloud covered the tabernacle of the testimony, and the glory of the Lord filled it.',
  fr: 'La nuée couvrit le tabernacle du témoignage, et la gloire du Seigneur le remplit.',
  more: ['Quand Moïse a achevé l’ouvrage, la nuée couvre la tente d’assignation et la gloire de l’Éternel emplit la Demeure. Moïse lui-même ne peut plus entrer dans la tente, car la nuée repose sur elle. La Présence que le peuple avait vue sur le Sinaï habite désormais au milieu du camp.',
    'Pas de fête juive attachée à ce passage. Ce verset répond à Exode 25, 8 : « Ils me feront un sanctuaire, et je résiderai au milieu d’eux. » Le livre, commencé dans l’esclavage d’Égypte, se clôt sur la Présence qui descend dans la Demeure.'],
  back(P) { pkSky(P, { sx: 180, sy: 160, cx: 820 }); pkTabernacle(P); Lib.stones(P, 10, 'y3r2k3', [260, 360, 260, 160]); },
  live(P, t) {
    const c = P.I(155, 100, 150);
    P.halo(c[0], c[1] - 20, 170, ['y1', 'y2', 'y3', 'y4r1']);
    for (let i = 0; i < 4; i++) Lib.cloud(P, c[0] - 70 + i * 45 + Math.sin(t * 0.6 + i) * 8, c[1] - 30 - (i % 2) * 40 - Math.cos(t * 0.5 + i) * 6, 160, 50, 'b1k1', { noShade: 1 });
    Lib.cloud(P, c[0], c[1] - 110 - Math.sin(t * 0.4) * 10, 220, 60, 'b1', { noShade: 1 });
  },
  chars: [
    ch(LK.pk_moses, { x: 330, y: 190, face: -1, clip: 'stagger', h: 146, hold: { f: 'staffV' } }),
    ch(LK.pk_aaron, { x: 380, y: 250, face: -1, clip: 'lookup', h: 146, hold: { nTop: 'pk_hoshen' } }),
    ch(LK.pk_son, { x: 430, y: 290, face: -1, clip: 'bow', h: 134 }),
    ch(LK.isrM, { x: 300, y: 350, face: -1, clip: 'prostrate', h: 136 }),
    ch(LK.isrW, { x: 360, y: 410, face: -1, clip: 'pray', h: 128 }),
    ch(LK.isrOld, { x: 450, y: 390, face: -1, clip: 'kneel', h: 136 }),
    ch(LK.isrW2, { x: 230, y: 440, face: -1, clip: 'lookup', h: 128, t0: 1 }),
    ch(LK.child, { x: 470, y: 470, face: -1, clip: 'point', h: 86 })
  ]
},
{
  title: 'Un feu dans la nuit', book: 'Exode', ch: 40, ref: 'Exodus 40:36', refFr: 'Exode 40, 38', accent: 1, feast: null,
  quote: 'For the cloud of the Lord hung over the tabernacle by day, and a fire by night, in the sight of all the children of Israel throughout all their mansions.',
  fr: 'Car la nuée du Seigneur reposait sur le tabernacle le jour, et un feu la nuit, aux yeux de tous les enfants d’Israël, dans toutes leurs étapes.',
  more: ['Quand la nuée s’élève de dessus la Demeure, les enfants d’Israël lèvent le camp ; tant qu’elle ne s’élève pas, ils restent. Le jour la nuée de l’Éternel est sur la Demeure, la nuit un feu y brille, à la vue de toute la maison d’Israël, dans tous leurs déplacements. Ainsi s’achève le livre de l’Exode.',
    'Pas de fête juive attachée à ce passage. À la fin de la lecture d’un livre de la Torah, l’assemblée se lève et proclame : « ’Hazak, ’hazak, venit’hazek », « Sois fort, sois fort, et fortifions-nous ».'],
  back(P) {
    pkSky(P, { night: 1 });
    pkCourt(P);
    pkTent(P, 150, 150, 200, 110, 140);
    pkAltar(P, 400, 180, 60, 40);
    for (const [x, y, w, tn] of [[40, 400, 90, 'r4y4b2k2'], [440, 40, 80, 'b3y2k2'], [30, 60, 80, 'y3r2b2k2']]) Lib.tent(P, x, y, w, 70, 70, tn);
  },
  live(P, t) {
    const c = P.I(250, 205, 140);
    P.halo(c[0], c[1] - 110, 190, ['b3k1', 'b1y1', 'y2', 'y3r1', 'y4r2'], { knock: true });
    for (let i = 0; i < 3; i++) Lib.flame(P, c[0] - 26 + i * 26, c[1] - 6 - (i === 1 ? 30 : 0), 60, 150 + (i === 1 ? 60 : 0), t + i * 1.7);
    for (let i = 0; i < 5; i++) { const u = (t * 0.3 + i / 5) % 1; Lib.star(P, c[0] + Math.sin(i * 2.1 + t) * 50, c[1] - 120 - u * 160, 5 * (1 - u), 'y8r2'); }
  },
  chars: [
    ch(LK.pk_levite, { x: 380, y: 300, face: -1, clip: 'guard', h: 136, hold: { n: 'spear' } }),
    ch(LK.pk_levite2, { x: 120, y: 290, face: 1, clip: 'guard', h: 136, hold: { n: 'spear' }, t0: 1.3 }),
    ch(LK.pk_moses, { x: 300, y: 350, face: -1, clip: 'lookup', h: 144, hold: { f: 'staffV' } }),
    ch(LK.isrW, { x: 380, y: 420, face: -1, clip: 'lookup', h: 128 }),
    ch(LK.child, { x: 420, y: 460, face: -1, clip: 'point', h: 86 }),
    ch(LK.isrM2, { x: 220, y: 420, face: -1, clip: 'sit', h: 136 }),
    { beast: 'sheep', h: 56, x: 480, y: 330, face: -1 }, { beast: 'sheep', h: 54, x: 500, y: 380, face: 1 }
  ]
}
];
