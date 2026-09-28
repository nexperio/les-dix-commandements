/* PARACHA VAYAKHEL · Exode 35, 1 à 38, 20 · Chabbat 6 mars 2027 (Chabbat Chekalim) */
Object.assign(LK, {
  vk_moses: Object.assign({}, LK.mosesOld),
  vk_bezalel: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'short', bt: 'k7', robe: 'r4y5k1', len: 'knee', sleeves: 'short', sash: 'b6', head: 'cloth', ht: 'y3r2', band: 'k6', feet: 'sandal' },
  vk_oholiav: { skin: 'y5r4k1', hs: 'short', hair: 'k6r2', beard: 'long', bt: 'k5', robe: 'b5r3', len: 'ankle', cloak: 'r5b3k1', sash: 'y7', head: 'turban', ht: 'y2r2', sleeves: 'long' },
  vk_herald: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'short', robe: 'y4r2k1', len: 'knee', sleeves: 'short', sash: 'r6', head: 'cap', ht: 'b5y1', feet: 'sandal' },
  vk_smith: { skin: 'y6r5k1', hs: 'short', hair: 'k7', beard: 'short', robe: 'r3y3k2', len: 'knee', sleeves: 'none', sash: 'k6', head: 'cap', ht: 'r5y3', feet: 'sandal' },
  vk_spinB: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k7', robe: 'y3r2', len: 'floor', head: 'veil', ht: 'b5y1', sash: 'r6', sleeves: 'long', wool: 'b7r1' },
  vk_spinP: { fem: 1, skin: 'y6r4k1', hs: 'long', hair: 'k8', robe: 'b4y3', len: 'floor', head: 'veil', ht: 'r4y4', sash: 'y7', sleeves: 'long', wool: 'r6b5' },
  vk_spinR: { fem: 1, skin: 'y5r4k1', hs: 'long', hair: 'k6r2', robe: 'y5b2', len: 'floor', head: 'veil', ht: 'y2', sash: 'b6', sleeves: 'long', wool: 'r8y2' },
  vk_spinK: { fem: 1, old: 1, skin: 'y5r4', hs: 'long', hair: 'k1', robe: 'r4y4k2', len: 'floor', head: 'veil', ht: 'y1', sash: 'b5', sleeves: 'long', wool: 'k7r1' }
});
Object.assign(CLIPS, {
  vk_spin: { d: 1.4, k: [{ nU: 40, nL: 30, fU: 118, fL: 24, head: 6, lean: 2, nT: 4, fT: -4 }, { nU: 46, nL: 22, fU: 122, fL: 18, head: 8, lean: 3, nT: 4, fT: -4 }] },
  vk_weave: { d: 1.6, k: [{ nU: 70, nL: 30, fU: 90, fL: 10, lean: 6, head: 4, nT: 4, fT: -4 }, { nU: 96, nL: 8, fU: 64, fL: 36, lean: 8, head: 6, nT: 4, fT: -4 }] }
});
Object.assign(PROPS2, {
  vk_spindle(P, A, J, M, h, t, lw) {
    const a = M(A.t), b = [a[0], a[1] + h * 0.26 + Math.sin(t * 5) * h * 0.01];
    P.line([a, b], lw * 0.5, { ink: 3, taper: 0 });
    P.line([[b[0], b[1] - h * 0.02], [b[0], b[1] + h * 0.07]], lw * 1.3, { ink: 3, taper: 0 });
    const w = h * 0.024 * Math.abs(Math.cos(t * 9)) + h * 0.006; P.shape([[b[0] - w, b[1] + h * 0.045], [b[0] + w, b[1] + h * 0.045], [b[0] + w * 0.7, b[1] + h * 0.058], [b[0] - w * 0.7, b[1] + h * 0.058]], 'r5y5k3', lw * 0.5);
  },
  vk_distaff(P, A, J, M, h, t, lw, F, u, n, add) {
    const a = add(A.w, u, -0.06), c = add(add(A.w, [0, -1], 0.2), u, 0.02);
    P.line([M(a), M(c)], lw * 1.2, { ink: 3 });
    const q = M(add(c, [0, 1], 0.03)); P.shape(Lib.bumpy(P, q[0], q[1], h * 0.03, h * 0.045, 6), (F.look && F.look.wool) || 'y1', lw * 0.6);
  },
  vk_gold(P, A, J, M, h, t, lw, F, u, n, add) {
    const q = M(add(A.t, [0, -1], 0.01));
    P.shape([[q[0] - h * 0.04, q[1] - h * 0.012], [q[0] + h * 0.04, q[1] - h * 0.012], [q[0] + h * 0.028, q[1] + h * 0.014], [q[0] - h * 0.028, q[1] + h * 0.014]], 'r5y5k3', lw * 0.6);
    for (let i = 0; i < 4; i++) P.shape(P.disc(q[0] - h * 0.027 + i * h * 0.018, q[1] - h * 0.018 - (i % 2) * h * 0.008, h * 0.011, 10), 'y9r3', lw * 0.4);
  },
  vk_mirror(P, A, J, M, h, t, lw, F, u, n, add) {
    const a = M(A.t), c = M(add(A.t, u, 0.07)); P.line([a, c], lw * 1.3, { ink: 3 });
    const q = M(add(A.t, u, 0.11)); P.shape(P.disc(q[0], q[1], h * 0.035, 16), 'r5y7k1', lw * 0.6); P.fill(P.disc(q[0] - h * 0.008, q[1] - h * 0.008, h * 0.018, 12), 'y2b1', { noKnock: true });
  },
  vk_skein(P, A, J, M, h, t, lw, F, u, n, add) {
    const q = M(add(A.t, u, 0.02)); P.shape(P.disc(q[0], q[1] + h * 0.03, h * 0.03, 12).map(p => [p[0], q[1] + h * 0.03 + (p[1] - q[1] - h * 0.03) * 1.6]), (F.look && F.look.wool) || 'b7r1', lw * 0.6);
  }
});
Object.assign(BEAST, {
  vk_goat: Object.assign({}, BEAST.sheep, { wool: 0, tone: 'k6r1', ears: 'long', tail: 1, lh: .3, bl: .54 }),
  vk_goatW: Object.assign({}, BEAST.sheep, { wool: 0, tone: 'y2r2k1', ears: 'long', tail: 1, lh: .3, bl: .52 })
});
/* ---- décors ---- */
const vkDesert = (P, o = {}) => {
  if (o.sun !== false) Lib.sun(P, o.sx || 190, o.sy || 140, 28);
  P.shape(smooth([[520, 345], [570, 300], [615, 285], [660, 240], [700, 262], [740, 222], [790, 270], [850, 290], [900, 345]], 3), 'r4y4k3', 1); P.fill([[740, 226], [790, 270], [850, 290], [880, 342], [760, 342], [720, 290]], 'r4y4k4', { noKnock: true });
  Lib.cloud(P, o.cx || 800, 140, 160, 30, 'b1');
  Lib.platform(P, o.top || 'y5r2', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
};
const vkLoom = (P, x, y, w, H, bands, frac, motif) => {
  const I = (a, b, c) => P.I(a, b, c);
  P.box(x - 6, y - 3, 0, 6, 6, H + 10, 'r5y5k3', 0.8); P.box(x + w, y - 3, 0, 6, 6, H + 10, 'r5y5k3', 0.8);
  const z0 = 14, z1 = z0 + (H - 20) * frac;
  bands.forEach((tn, i) => { const a = z0 + (z1 - z0) * i / bands.length, b = z0 + (z1 - z0) * (i + 1) / bands.length; P.fill([I(x, y, a), I(x + w, y, a), I(x + w, y, b), I(x, y, b)], tn); });
  P.outline([I(x, y, z0), I(x + w, y, z0), I(x + w, y, z1), I(x, y, z1)], 0.8);
  if (motif) for (let i = 0; i < 3; i++) { const c = I(x + w * (i + 0.5) / 3, y, (z0 + z1) / 2); for (const s of [-1, 1]) P.fill([[c[0], c[1]], [c[0] + s * 9, c[1] - 7], [c[0] + s * 7, c[1] + 2]], 'y8r2', { noKnock: true }); P.fill(P.disc(c[0], c[1] - 4, 2.4, 8), 'y8r3', { noKnock: true }); }
  for (let i = 0; i <= 12; i++) P.line([I(x + w * i / 12, y, z1), I(x + w * i / 12, y, H - 4)], 0.45);
  P.line([I(x - 4, y, H - 2), I(x + w + 4, y, H - 2)], 2.2, { ink: 3, taper: 0 }); P.line([I(x - 4, y, z0), I(x + w + 4, y, z0)], 2, { ink: 3, taper: 0 });
};
const vkArk = (P, x, y, z, s = 1) => {
  const W = 70 * s, D = 42 * s, H = 40 * s;
  P.box(x - 26 * s, y - 4 * s, z + 12 * s, W + 52 * s, 4 * s, 4 * s, 'r5y6k3', 0.7);
  P.box(x, y, z, W, D, H, { t: 'y9r3', l: 'y8r4k1', r: 'y7r4k2' });
  for (let i = 1; i < 5; i++) P.line([P.I(x + W * i / 5, y + D, z + 6 * s), P.I(x + W * i / 5, y + D, z + H - 6 * s)], 0.5, { ink: 1 });
  P.box(x - 2 * s, y - 2 * s, z + H, W + 4 * s, D + 4 * s, 4 * s, 'y9r4', 0.8);
  const pa = P.I(x + 10 * s, y + D / 2, z + H + 4 * s), pb = P.I(x + W - 10 * s, y + D / 2, z + H + 4 * s);
  for (const [p, o] of [[pa, pb], [pb, pa]]) {
    const d = Math.sign(o[0] - p[0]) || 1;
    P.shape([[p[0] - 5 * s, p[1]], [p[0] + 5 * s, p[1]], [p[0] + 3 * s, p[1] - 18 * s], [p[0] - 3 * s, p[1] - 18 * s]], 'y9r3', 0.7);
    P.shape(P.disc(p[0], p[1] - 22 * s, 5 * s, 10), 'y9r3', 0.7);
    P.shape([[p[0], p[1] - 14 * s], [p[0] + d * 22 * s, p[1] - 36 * s], [p[0] + d * 30 * s, p[1] - 30 * s], [p[0] + d * 24 * s, p[1] - 20 * s], [p[0] + d * 30 * s, p[1] - 14 * s], [p[0] + d * 8 * s, p[1] - 6 * s]], 'y8r2', 0.7);
  }
  P.box(x - 26 * s, y + D, z + 12 * s, W + 52 * s, 4 * s, 4 * s, 'r5y6k3', 0.7);
};
const vkMenorah = (P, x, y, z, s = 1) => {
  const b = P.I(x, y, z), top = [b[0], b[1] - 110 * s], G = (pts, w) => { P.line(pts, w + 2.2, { ink: 3, taper: 0 }); P.line(pts, w, { ink: 0, taper: 0 }); P.line(pts, w * 0.5, { ink: 1, lvl: 4, taper: 0 }); };
  P.shape([[b[0] - 18 * s, b[1]], [b[0] + 18 * s, b[1]], [b[0] + 6 * s, b[1] - 12 * s], [b[0] - 6 * s, b[1] - 12 * s]], 'y9r3', 0.9);
  G([[b[0], b[1] - 10 * s], top], 5 * s);
  for (let k = 1; k <= 3; k++) for (const sg of [-1, 1]) { const R = k * 16 * s, pts = []; for (let i = 0; i <= 10; i++) { const a = i / 10 * Math.PI / 2; pts.push([top[0] + sg * R * Math.cos(a), top[1] + R * Math.sin(a)]); } G(pts, 3.6 * s); for (const i of [4, 8]) P.fill(P.disc(pts[i][0], pts[i][1], 3 * s, 8), 'y9r4', {}); }
  for (let j = -3; j <= 3; j++) { const X = top[0] + j * 16 * s; P.shape([[X - 5 * s, top[1] - 6 * s], [X + 5 * s, top[1] - 6 * s], [X + 2 * s, top[1] + 2 * s], [X - 2 * s, top[1] + 2 * s]], 'y9r3', 0.6); }
  for (let i = 1; i <= 4; i++) P.fill(P.disc(top[0], top[1] + i * 20 * s, 3.4 * s, 8), 'y9r4', {});
  return top;
};
const vkLaver = (P, x, y, s = 1, mirrors = 1) => {
  P.cyl(x, y, 0, 26 * s, 6 * s, 'r5y6k3'); P.cyl(x, y, 6 * s, 12 * s, 32 * s, 'r5y6k2');
  P.cyl(x, y, 38 * s, 38 * s, 20 * s, { t: 'r5y5k2', s: 'r5y6k1', d: 'r5y6k3' });
  P.shape(P.ell(x, y, 58.5 * s, 31 * s, 31 * s, 20), 'b4y1', 0.6);
  if (mirrors) for (let i = 0; i < 6; i++) { const a = Math.PI / 4 + (i + 0.5) / 6 * Math.PI / 2, c = P.I(x + Math.cos(a) * 38 * s, y + Math.sin(a) * 38 * s, 48 * s); P.shape(P.disc(c[0], c[1], 4.2 * s, 10), 'y3b1', 0.5); }
};
const vkAltar = (P, x, y, w, h) => {
  P.box(x, y, 0, w, w, h, { t: 'r5y5k3', l: 'r5y6k2', r: 'r5y6k3' });
  P.line([P.I(x, y + w, h * 0.5), P.I(x + w, y + w, h * 0.5)], 1.6, { ink: 3, taper: 0 }); P.line([P.I(x + w, y, h * 0.5), P.I(x + w, y + w, h * 0.5)], 1.6, { ink: 3, taper: 0 });
  for (let i = 1; i < 6; i++) P.line([P.I(x + w * i / 6, y + w, h * 0.25), P.I(x + w * i / 6, y + w, h * 0.5)], 0.5);
  for (const [a, b] of [[0, 0], [w - 9, 0], [0, w - 9], [w - 9, w - 9]]) P.box(x + a, y + b, h, 9, 9, 10, 'r5y6k2', 0.7);
};
const vkForge = (P, x, y) => { stoneStack(P, x, y, 56, 44, 32, 'y3r2k3'); P.cyl(x + 28, y + 22, 32, 14, 12, 'k5r2'); P.shape(P.ell(x + 28, y + 22, 44.5, 10, 10, 14), 'r8y6', 0.5); };
const vkAnvil = (P, x, y) => { P.box(x, y, 0, 18, 14, 20, 'k5b2', 0.9); P.box(x - 7, y, 20, 32, 14, 7, 'k6b2', 0.9); };
const vkPlanks = (P, x, y, n = 5, tn = 'r5y5k3') => { for (let i = 0; i < n; i++) P.box(x + (i % 2) * 4, y, i * 8, 110, 24, 8, i % 2 ? tn : tadd(tn, 'y1'), 0.8); };
const vkBales = (P, pts) => { for (const [x, y, tn] of pts) { P.box(x, y, 0, 26, 22, 18, tn, 0.8); P.line([P.I(x, y + 22, 9), P.I(x + 26, y + 22, 9)], 0.5); } };
const vkGold = (P, x, y, r = 1) => { const c = P.I(x, y, 0); P.shape(Lib.bumpy(P, c[0], c[1] - 12 * r, 40 * r, 18 * r, 9), 'y9r3', 1); for (let i = 0; i < 22 * r; i++) { const px = c[0] - 32 * r + P.r() * 64 * r, py = c[1] - 22 * r + P.r() * 16 * r; P.shape(P.disc(px, py, 2 + P.r() * 2.5, 8), i % 3 ? 'y9r4' : 'y6b1', 0.4); } };
const vkSkins = (P, x, y) => { P.box(x, y, 0, 5, 5, 80, 'r5y5k3', 0.7); P.box(x + 90, y, 0, 5, 5, 80, 'r5y5k3', 0.7); P.line([P.I(x, y, 78), P.I(x + 95, y, 78)], 1.2); for (let i = 0; i < 3; i++) { const a = P.I(x + 10 + i * 28, y + 2, 76); P.shape([[a[0], a[1]], [a[0] + 26, a[1] + 13], [a[0] + 24, a[1] + 50], [a[0] + 14, a[1] + 58], [a[0] + 2, a[1] + 40]], i === 1 ? 'b7k2' : 'r7y2k2', 0.7); } };
const vkSkeins = (P, x, y, w, tones) => { P.box(x, y, 0, 5, 5, 76, 'r5y5k3', 0.7); P.box(x + w, y, 0, 5, 5, 76, 'r5y5k3', 0.7); P.line([P.I(x, y, 74), P.I(x + w, y, 74)], 1); tones.forEach((tn, i) => { const a = P.I(x + 12 + i * (w - 20) / (tones.length - 1 || 1), y + 2, 72); P.shape([[a[0] - 5, a[1]], [a[0] + 5, a[1]], [a[0] + 6, a[1] + 34], [a[0], a[1] + 40], [a[0] - 6, a[1] + 34]], tn, 0.6); }); };
const vkAwning = (P, x, y, w, d, h, tn) => { for (const [a, b] of [[0, 0], [w, 0], [0, d]]) P.box(x + a - 3, y + b - 3, 0, 6, 6, h, 'r5y5k3', 0.7); P.shape([P.I(x, y, h), P.I(x + w, y, h), P.I(x + w, y + d * 0.5, h - 12), P.I(x, y + d, h - 12)], tn, 1); };
const vkSparks = (P, x, y, z, t) => { const c = P.I(x, y, z); for (let i = 0; i < 6; i++) { const u = (t * 1.6 + i / 6) % 1, a = -0.4 - i * 0.45; P.fill(P.disc(c[0] + Math.cos(a) * 36 * u, c[1] + Math.sin(a) * 30 * u + u * u * 20, 2.4 * (1 - u) + 0.6, 6), 'r4y9', { noKnock: true }); } };
const SHEET = { title: 'Vayakhel · Il rassembla', sub: 'Paracha de la semaine · Chabbat 6 mars 2027 · Exode 35, 1 à 38, 20' };
const SCENES = [
{
  title: 'Le Chabbat avant l’ouvrage', book: 'Exode', ch: 35, ref: 'Exodus 35:3', refFr: 'Exode 35, 3', accent: 1, feast: null,
  quote: 'You shall kindle no fire in any of your habitations on the sabbath day.',
  fr: 'Vous n’allumerez point de feu dans aucune de vos demeures le jour du sabbat.',
  more: ['Redescendu du Sinaï avec les secondes Tables, Moïse rassemble toute l’assemblée d’Israël. Avant de parler du Sanctuaire, il rappelle le Chabbat : six jours on travaillera, le septième sera saint, un repos pour l’Éternel, et l’on n’allumera pas de feu dans les demeures ce jour-là. Puis vient l’appel à construire la Demeure.',
    'Pas de fête juive attachée à ce passage. Le Talmud (Chabbat 49b) tire de la proximité des deux sujets la liste des trente-neuf travaux interdits le Chabbat : ce sont les gestes qui servirent à bâtir le Tabernacle.'],
  back(P) {
    vkDesert(P, { sx: 820, sy: 190 });
    const r = Lib.rock(P, 90, 120, 0, 90, 44, 'y4r3k2');
    Lib.tent(P, 330, 30, 120, 90, 100, 'r5y4k1'); Lib.tent(P, 450, 140, 80, 80, 80, 'b3y2k1'); Lib.tent(P, 30, 330, 110, 90, 90, 'y4r2k2');
    Lib.tent(P, 200, 20, 100, 70, 80, 'k3y3r1');
    const c = P.I(420, 400, 0); for (let i = 0; i < 9; i++) { const a = i / 9 * TAU; P.box(420 + Math.cos(a) * 22 - 5, 400 + Math.sin(a) * 22 - 5, 0, 10, 10, 8, 'y3r1k3', 0.6); } P.fill(P.disc(c[0], c[1] - 2, 12, 12).map(p => [p[0], c[1] - 2 + (p[1] - c[1] + 2) * 0.5]), 'k4', {});
    P.line([P.I(395, 400, 0), P.I(420, 400, 60)], 1.2); P.line([P.I(445, 400, 0), P.I(420, 400, 60)], 1.2); P.cyl(420, 400, 26, 12, 16, 'k6r2');
    for (let i = 0; i < 3; i++) P.box(470 + i * 8, 330, i * 8, 50, 10, 8, 'r4y5k3', 0.7);
    Lib.jar(P, 150, 460, 0, 1.3); Lib.jar(P, 175, 480, 0, 1.1, 'b4y3k1');
    Lib.stones(P, 18, 'y3r2k3', [200, 200, 300, 300]);
  },
  chars: [
    ch(LK.vk_moses, { x: 125, y: 150, z: 44, face: 1, clip: 'raise', h: 144, hold: { f: 'staffV' } }),
    ch(LK.isrM, { x: 260, y: 240, face: -1, clip: 'sit', h: 136 }),
    ch(LK.isrW, { x: 300, y: 190, face: -1, clip: 'idle', h: 130 }),
    ch(LK.isrOld, { x: 330, y: 280, face: -1, clip: 'idle', h: 136, hold: { f: 'staffV' }, t0: 1 }),
    ch(LK.isrM2, { x: 220, y: 330, face: -1, clip: 'sit', h: 138, t0: 1.4 }),
    ch(LK.isrW2, { x: 300, y: 360, face: -1, clip: 'lookup', h: 130 }),
    ch(LK.childG, { x: 250, y: 420, face: -1, clip: 'idle', h: 90 }),
    ch(LK.child, { h: 88, speed: 20, path: [W(470, 470, 1), W(350, 430, 4, 'sit'), W(470, 470, 0)] })
  ]
},
{
  title: 'Les offrandes de bon cœur', book: 'Exode', ch: 35, ref: 'Exodus 35:22', refFr: 'Exode 35, 22', accent: 0, feast: 'Chabbat Chekalim',
  quote: 'Both men and women gave bracelets and earrings, rings and tablets:  every vessel of gold was set aside to be offered to the Lord.',
  fr: 'Hommes et femmes donnèrent bracelets et pendants d’oreilles, bagues et colliers : tout objet d’or fut mis à part pour être offert au Seigneur.',
  more: ['« Que tout homme au cœur généreux apporte l’offrande de l’Éternel. » Le peuple sort de devant Moïse et revient les bras chargés : or, argent et cuivre, laine bleu azur, pourpre et écarlate, lin fin, poil de chèvre, peaux de béliers teintes en rouge, bois d’acacia, huile, aromates. Les princes apportent les pierres d’onyx et les pierres à sertir pour l’éphod et le pectoral.',
    'Correspondance : <b>Chabbat Chekalim</b>. Ce Chabbat précède Roch ’Hodech Adar II (9 et 10 mars 2027). On sort un second rouleau pour lire Exode 30, 11-16 : chaque homme donne un demi-sicle d’argent au Sanctuaire, riche ou pauvre. La haftara (2 Rois 12) raconte le coffre du roi Joas, où l’on versait l’argent pour réparer le Temple.'],
  back(P) {
    vkDesert(P);
    Lib.tent(P, 30, 30, 150, 110, 120, 'b4y2k1');
    vkSkins(P, 250, 30);
    vkPlanks(P, 380, 40, 5);
    vkBales(P, [[40, 190, 'b7r1'], [72, 196, 'r6b5'], [44, 222, 'r8y2'], [76, 228, 'y1'], [58, 206, 'k6r1']]);
    for (const [x, y, s] of [[160, 150, 1.3], [185, 170, 1.1], [150, 180, 1]]) Lib.jar(P, x, y, 0, s, 'r5y6k1');
    P.shape([P.I(190, 200, 0.5), P.I(330, 200, 0.5), P.I(330, 290, 0.5), P.I(190, 290, 0.5)], 'r6y2', 1);
    vkGold(P, 250, 245, 1.2);
    for (let i = 0; i < 6; i++) { const c = P.I(205 + i * 22, 290, 0); P.shape(P.disc(c[0], c[1] - 4, 5, 10), i % 2 ? 'b2k2' : 'r5y6k2', 0.6); }
    Lib.stones(P, 14, 'y3r2k3', [340, 300, 180, 220]);
  },
  chars: [
    ch(LK.vk_moses, { x: 170, y: 250, face: 1, clip: 'bless', h: 144 }),
    ch(LK.isrW, { h: 130, speed: 16, hold: { n: 'vk_gold' }, path: [W(520, 420, 0), W(350, 270, 3, 'offer'), W(520, 420, 0)] }),
    ch(LK.isrM, { h: 138, speed: 16, t0: 3, over: 'carry', hold: { nTop: 'bundle' }, path: [W(470, 520, 0), W(330, 340, 3, 'offer'), W(470, 520, 0)] }),
    ch(LK.isrM2, { h: 138, speed: 14, t0: 6, over: 'carry', hold: { nTop: 'plank' }, path: [W(540, 330, 0), W(420, 160, 3, 'idle'), W(540, 330, 0)] }),
    ch(LK.isrW2, { h: 130, speed: 15, t0: 8, over: 'carry', hold: { nTop: 'jarhead' }, path: [W(380, 540, 0), W(240, 360, 3, 'idle'), W(380, 540, 0)] }),
    ch(LK.childG, { x: 300, y: 330, face: -1, clip: 'offer', h: 90, hold: { n: 'vk_gold' } }),
    ch(LK.bro3, { x: 110, y: 330, face: 1, clip: 'offer', h: 140, hold: { n: 'vk_gold' }, look: Object.assign({}, LK.bro3, { head: 'turban', ht: 'y8r2', trim: 1 }) }),
    { beast: 'ram', h: 62, x: 460, y: 250, face: -1 }
  ]
},
{
  title: 'Les femmes qui filent', book: 'Exode', ch: 35, ref: 'Exodus 35:25', refFr: 'Exode 35, 25', accent: 2, feast: null,
  quote: 'The skilful women also gave such things as they had spun, violet, purple, and scarlet, and fine linen,',
  fr: 'Les femmes habiles donnèrent aussi ce qu’elles avaient filé : bleu azur, pourpre, écarlate et lin fin,',
  more: ['Toutes les femmes au cœur sage filent de leurs mains et apportent le fil : laine teinte en bleu azur, en pourpre et en écarlate, et lin fin. D’autres, que leur cœur a élevées dans la sagesse, filent le poil de chèvre qui servira à tisser les tentures de la tente dressée par-dessus la Demeure.',
    'Pas de fête juive attachée à ce passage. Rachi, d’après le Talmud (Chabbat 99a), explique que le poil de chèvre était filé à même le dos des bêtes : un art particulier, qui vaut aux fileuses le titre de « sages de cœur ».'],
  back(P) {
    vkDesert(P, { top: 'y5r2b1' });
    Lib.tent(P, 30, 30, 140, 100, 110, 'k5y2r1'); Lib.tent(P, 200, 20, 110, 80, 90, 'r5y4k1');
    vkSkeins(P, 340, 40, 150, ['b7r1', 'r6b5', 'r8y2', 'y1', 'b7r1', 'r8y2']);
    vkLoom(P, 40, 190, 90, 120, ['k6r1', 'k5r1', 'k6r1'], 0.45, 0);
    for (const [x, y, tn] of [[200, 170, 'b7r1'], [228, 186, 'r6b5'], [210, 205, 'y1']]) { const c = P.I(x, y, 0); P.shape([[c[0] - 14, c[1]], [c[0] + 14, c[1]], [c[0] + 17, c[1] - 16], [c[0] - 17, c[1] - 16]], 'r4y5k2', 0.8); P.shape(Lib.bumpy(P, c[0], c[1] - 18, 13, 7, 6), tn, 0.6); }
    Lib.grass(P, 30, 'y5b5k1', [260, 280, 260, 240]);
    Lib.stones(P, 12, 'y3r2k3', [20, 400, 200, 120]);
  },
  chars: [
    { beast: 'vk_goat', h: 70, x: 330, y: 260, face: -1 },
    { beast: 'vk_goatW', h: 66, speed: 5, path: [W(430, 300, 3), W(470, 360, 3), W(430, 300, 0)] },
    { beast: 'vk_goat', h: 68, x: 420, y: 450, face: 1 },
    ch(LK.vk_spinK, { x: 300, y: 300, face: 1, clip: 'vk_spin', h: 124, hold: { n: 'vk_spindle', f: 'vk_distaff' } }),
    ch(LK.vk_spinB, { x: 160, y: 300, face: 1, clip: 'vk_spin', h: 130, hold: { n: 'vk_spindle', f: 'vk_distaff' }, t0: 0.5 }),
    ch(LK.vk_spinP, { x: 230, y: 380, face: 1, clip: 'vk_spin', h: 130, hold: { n: 'vk_spindle', f: 'vk_distaff' }, t0: 0.9 }),
    ch(LK.vk_spinR, { x: 110, y: 440, face: 1, clip: 'vk_spin', h: 130, hold: { n: 'vk_spindle', f: 'vk_distaff' }, t0: 0.3 }),
    ch(LK.childG, { h: 88, speed: 14, over: 'carry', hold: { nTop: 'vk_skein' }, look: Object.assign({}, LK.childG, { wool: 'r8y2' }), path: [W(360, 150, 2), W(250, 250, 2, 'offer'), W(360, 150, 0)] })
  ]
},
{
  title: 'Betsalel appelé par son nom', book: 'Exode', ch: 35, ref: 'Exodus 35:30', refFr: 'Exode 35, 30', accent: 1, feast: null,
  quote: 'And Moses said to the children of Israel:  Behold, the Lord hath called by name Beseleel, the son of Uri, the son of Hur, of the tribe of Juda,',
  fr: 'Et Moïse dit aux enfants d’Israël : Voici, le Seigneur a appelé par son nom Betsalel, fils d’Ouri, fils de Hour, de la tribu de Juda,',
  more: ['Dieu a rempli Betsalel de son esprit, de sagesse, d’intelligence et de savoir, pour travailler l’or, l’argent et le cuivre, tailler les pierres, sculpter le bois. Il lui donne un compagnon, Oholiav, fils d’A’hisamakh, de la tribu de Dan, maître du tissage et de la broderie. Tous deux reçoivent aussi le don d’enseigner.',
    'Pas de fête juive attachée à ce passage. Un homme de Juda, la tribu royale, et un homme de Dan, l’une des moins en vue, conduisent ensemble l’ouvrage. Le Talmud (Berakhot 55a) dit que Betsalel savait assembler les lettres par lesquelles furent créés le ciel et la terre.'],
  back(P) {
    vkDesert(P, { sx: 800, sy: 150 });
    vkAwning(P, 30, 30, 200, 120, 130, 'r6y3k1');
    vkForge(P, 60, 50); vkAnvil(P, 150, 80);
    vkPlanks(P, 260, 40, 6);
    vkBales(P, [[400, 40, 'b7r1'], [430, 46, 'r6b5'], [404, 72, 'r8y2'], [436, 78, 'y1']]);
    vkGold(P, 180, 170, 0.8);
    Lib.rock(P, 120, 250, 0, 70, 28, 'y4r3k2');
    Lib.stones(P, 16, 'y3r2k3', [250, 280, 270, 240]);
  },
  live(P, t) { const a = P.I(88, 72, 46); Lib.flame(P, a[0], a[1], 18, 32, t); Lib.smoke(P, a[0], a[1] - 30, t, { n: 3, h: 120, r: 12, tn: 'k2b1' }); },
  chars: [
    ch(LK.vk_moses, { x: 120, y: 260, z: 28, face: 1, clip: 'point', h: 144, hold: { f: 'staffV' } }),
    ch(LK.vk_bezalel, { x: 210, y: 250, face: 1, clip: 'bow', h: 140, hold: { n: 'hammer' } }),
    ch(LK.vk_oholiav, { x: 190, y: 320, face: 1, clip: 'idle', h: 140, hold: { n: 'vk_skein' }, look: Object.assign({}, LK.vk_oholiav, { wool: 'b7r1' }) }),
    ch(LK.isrM, { x: 330, y: 250, face: -1, clip: 'lookup', h: 136 }),
    ch(LK.isrW2, { x: 360, y: 320, face: -1, clip: 'idle', h: 130 }),
    ch(LK.isrOld, { x: 300, y: 400, face: -1, clip: 'point', h: 136, hold: { f: 'staffV' } }),
    ch(LK.vk_smith, { x: 420, y: 380, face: -1, clip: 'raise', h: 136, t0: 1 }),
    ch(LK.child, { x: 380, y: 460, face: -1, clip: 'lookup', h: 88 })
  ]
},
{
  title: 'Assez d’offrandes !', book: 'Exode', ch: 36, ref: 'Exodus 36:6', refFr: 'Exode 36, 6', accent: 0, feast: null,
  quote: 'Moses therefore commanded proclamation to be made by the crier\'s voice:  Let neither man nor woman offer any more for the work of the sanctuary.',
  fr: 'Moïse fit donc proclamer par la voix du héraut : Que ni homme ni femme n’offre plus rien pour l’ouvrage du sanctuaire.',
  more: ['Chaque matin le peuple apporte encore des dons volontaires. Les artisans quittent leur ouvrage et viennent dire à Moïse : « Le peuple apporte plus qu’il ne faut pour le travail que l’Éternel a ordonné. » Moïse fait passer une annonce dans le camp, et le peuple cesse d’apporter. Il y avait assez de matériaux pour tout l’ouvrage, et au-delà.',
    'Pas de fête juive attachée à ce passage. Quelques chapitres plus tôt, le même peuple avait donné son or pour le veau d’or (Exode 32, 3). Le texte emploie ici un mot rare, « dayam », « leur suffisance », et ajoute « vehotèr », « et il y en eut de reste ».'],
  back(P) {
    vkDesert(P);
    vkGold(P, 120, 120, 1.4); vkGold(P, 190, 90, 1);
    vkPlanks(P, 40, 200, 7); vkPlanks(P, 250, 30, 6, 'r5y4k3');
    vkBales(P, [[380, 40, 'b7r1'], [412, 46, 'r6b5'], [384, 72, 'r8y2'], [416, 78, 'y1'], [398, 58, 'k6r1'], [450, 50, 'b7r1'], [454, 82, 'r8y2']]);
    vkSkins(P, 400, 140);
    for (const [x, y, s] of [[60, 300, 1.3], [85, 320, 1.2], [60, 340, 1.1], [100, 345, 1.3]]) Lib.jar(P, x, y, 0, s);
    Lib.tent(P, 20, 420, 110, 90, 90, 'r4y4k1');
    Lib.stones(P, 14, 'y3r2k3', [200, 250, 300, 250]);
  },
  chars: [
    ch(LK.vk_moses, { x: 230, y: 200, face: 1, clip: 'raise', h: 144, hold: { f: 'staffV' } }),
    ch(LK.vk_bezalel, { x: 300, y: 180, face: -1, clip: 'talk', h: 140, hold: { f: 'hammer' } }),
    ch(LK.vk_oholiav, { x: 280, y: 250, face: -1, clip: 'point', h: 140 }),
    ch(LK.vk_herald, { h: 138, speed: 16, over: 'raise', path: [W(200, 420, 1.5, 'raise'), W(460, 420, 1.5, 'raise'), W(460, 280, 1, 'raise'), W(200, 420, 0)] }),
    ch(LK.isrW, { h: 130, speed: 12, hold: { n: 'vk_gold' }, path: [W(520, 520, 0), W(420, 360, 3, 'offer'), W(520, 520, 0)] }),
    ch(LK.isrM, { x: 360, y: 470, face: -1, clip: 'still', h: 136, over: 'carry', hold: { nTop: 'bundle' } }),
    ch(LK.isrW2, { x: 300, y: 480, face: 1, clip: 'idle', h: 130, hold: { nTop: 'jarhead' } }),
    ch(LK.vk_smith, { x: 350, y: 330, face: -1, clip: 'talk', h: 136, t0: 1 })
  ]
},
{
  title: 'Les tentures brodées', book: 'Exode', ch: 36, ref: 'Exodus 36:8', refFr: 'Exode 36, 8', accent: 2, feast: null,
  quote: 'And all the men that were wise of heart, to accomplish the work of the tabernacle, made ten curtains of twisted fine linen, and violet, and purple, and scarlet twice dyed, with varied work, and the art of embroidering:',
  fr: 'Et tous les hommes au cœur sage, qui accomplissaient l’ouvrage du tabernacle, firent dix tentures de lin fin retors, de bleu azur, de pourpre et d’écarlate deux fois teinte, d’un travail varié et brodé :',
  more: ['L’ouvrage commence par la Demeure elle-même. Les artisans tissent dix tentures de lin retors, bleu azur, pourpre et écarlate, où sont brodés des chérubins, puis onze tentures de poil de chèvre pour la tente de dessus, et les couvertures de peaux. Ils assemblent cinquante agrafes d’or pour que la Demeure ne fasse qu’un, et taillent en bois d’acacia les planches dressées sur des socles d’argent.',
    'Pas de fête juive attachée à ce passage. Chaque tenture mesure vingt-huit coudées sur quatre. Assemblées cinq par cinq, elles forment deux grands pans reliés par les agrafes (Exode 36, 9-13).'],
  back(P) {
    vkDesert(P, { top: 'y5r2b1', sx: 820 });
    vkAwning(P, 20, 20, 500, 150, 150, 'y2r1k1');
    vkLoom(P, 50, 60, 190, 130, ['b7r1', 'r6b5', 'r8y2', 'y1', 'b7r1'], 0.7, 1);
    vkLoom(P, 290, 60, 190, 130, ['y1', 'b7r1', 'r6b5', 'r8y2'], 0.4, 1);
    vkPlanks(P, 70, 330, 6); vkPlanks(P, 70, 380, 4, 'r5y4k3');
    for (let i = 0; i < 4; i++) P.box(40, 330 + i * 6, 0, 16, 20 + i * 6, 12 + i * 2, 'b1k3', 0.6);
    vkSkeins(P, 360, 470, 130, ['b7r1', 'r6b5', 'r8y2', 'y1']);
  },
  chars: [
    ch(LK.vk_oholiav, { x: 150, y: 110, face: 1, clip: 'vk_weave', h: 140, look: Object.assign({}, LK.vk_oholiav, { cloak: null }) }),
    ch(LK.vk_spinP, { x: 390, y: 110, face: 1, clip: 'vk_weave', h: 130, t0: 0.6 }),
    ch(LK.vk_spinB, { x: 270, y: 240, face: 1, clip: 'vk_spin', h: 130, hold: { n: 'vk_spindle', f: 'vk_distaff' } }),
    ch(LK.vk_smith, { x: 220, y: 380, face: -1, clip: 'hammer', h: 136, hold: { n: 'hammer' } }),
    ch(LK.vk_bezalel, { x: 330, y: 300, face: -1, clip: 'point', h: 140 }),
    ch(LK.isrM2, { h: 138, speed: 14, over: 'carry', hold: { nTop: 'plank' }, path: [W(480, 300, 1), W(260, 450, 2, 'idle'), W(480, 300, 0)] }),
    ch(LK.vk_spinR, { h: 130, speed: 12, t0: 4, over: 'carry', hold: { nTop: 'vk_skein' }, path: [W(440, 420, 2), W(420, 220, 2, 'offer'), W(440, 420, 0)] })
  ]
},
{
  title: 'L’arche et les chérubins', book: 'Exode', ch: 37, ref: 'Exodus 37:9', refFr: 'Exode 37, 9', accent: 0, feast: null,
  quote: 'Spreading their wings, and covering the propitiatory, and looking one towards the other, and towards it.',
  fr: 'Ils étendaient leurs ailes et couvraient le propitiatoire, se regardant l’un l’autre et tournés vers lui.',
  more: ['Betsalel fait l’arche en bois d’acacia, deux coudées et demie de long, une et demie de large et de haut, plaquée d’or pur dedans et dehors, avec une couronne d’or tout autour, quatre anneaux et deux barres pour la porter. Il fait le propitiatoire d’or pur, et aux deux bouts deux chérubins d’or battu, d’une seule pièce avec lui, les ailes déployées vers le haut, face à face.',
    'Pas de fête juive attachée à ce passage. Des autres objets le texte dit « il fit », de l’arche seule « Betsalel fit l’arche ». Rachi explique qu’il s’y consacra plus que tous les autres sages, et qu’elle porte donc son nom.'],
  back(P) {
    vkDesert(P, { sx: 810, sy: 160 });
    vkAwning(P, 20, 20, 460, 160, 160, 'b4r1k1');
    vkForge(P, 40, 40); vkAnvil(P, 130, 70);
    vkPlanks(P, 300, 40, 4);
    P.box(170, 190, 0, 150, 90, 20, 'r4y5k3');
    vkArk(P, 200, 210, 20, 1.3);
    Lib.lamp(P, 380, 150, 0, 1);
    vkGold(P, 400, 330, 0.6);
    Lib.stones(P, 12, 'y3r2k3', [300, 400, 200, 120]);
  },
  live(P, t) { const a = P.I(68, 62, 44); Lib.flame(P, a[0], a[1], 18, 30, t); vkSparks(P, 290, 330, 110, t); },
  chars: [
    ch(LK.vk_bezalel, { x: 300, y: 320, face: -1, clip: 'hammer', h: 140, hold: { n: 'hammer' } }),
    ch(LK.vk_oholiav, { x: 160, y: 340, face: 1, clip: 'point', h: 140 }),
    ch(LK.vk_smith, { x: 110, y: 150, face: 1, clip: 'haul', h: 134, t0: 0.6 }),
    ch(LK.vk_moses, { x: 420, y: 250, face: -1, clip: 'bless', h: 144 }),
    ch(LK.isrM, { h: 136, speed: 12, over: 'carry', hold: { nTop: 'plank' }, look: Object.assign({}, LK.isrM, { head: 'cap' }), path: [W(480, 480, 1), W(330, 440, 2, 'idle'), W(480, 480, 0)] }),
    ch(LK.child, { x: 240, y: 430, face: -1, clip: 'lookup', h: 86 })
  ]
},
{
  title: 'La ménora d’or battu', book: 'Exode', ch: 37, ref: 'Exodus 37:17', refFr: 'Exode 37, 17', accent: 1, feast: null,
  quote: 'He made also the candlestick of beaten work of the finest gold. From the shaft whereof its branches, its cups, and bowls, and lilies came out:',
  fr: 'Il fit aussi le chandelier d’or très pur, travaillé au marteau. De sa tige sortaient ses branches, ses calices, ses boutons et ses fleurs :',
  more: ['Le chandelier est martelé d’un seul bloc d’or pur : une tige, six branches, trois de chaque côté, et sur chacune des calices en forme d’amande, des boutons et des fleurs. Betsalel y ajoute sept lampes, les mouchettes et les plateaux. Le tout pèse un talent d’or. Dans la même section, il fait la table des pains et l’autel des parfums, plaqués d’or.',
    'Pas de fête juive attachée à ce passage. La ménora du Temple, gravée sur l’arc de Titus à Rome, est aujourd’hui l’emblème de l’État d’Israël.'],
  back(P) {
    Lib.platform(P, 'y3r2k1', 'y4r3k2', { h: 50, pebbles: false, strata: [[0, .5, 'y4r3k2'], [.5, 1, 'y4r3k3']] });
    Lib.walls(P, { l: 'r5y3k2', r: 'r5y3k3', cut: 'y4r3k2' }, { h: 280 });
    for (let x = 20; x < 540; x += 60) Lib.wallR(P, x, 200, 40, 30, 'b6r3k1', 0.6);
    for (let y = 20; y < 540; y += 60) Lib.wallL(P, y, 200, 40, 30, 'b6r3k1', 0.6);
    vkForge(P, 40, 40); vkAnvil(P, 140, 60);
    P.box(40, 200, 0, 90, 60, 50, 'r4y5k3'); for (let i = 0; i < 5; i++) { const c = P.I(52 + i * 16, 230, 50); P.shape([[c[0] - 5, c[1]], [c[0] + 5, c[1]], [c[0] + 2, c[1] + 6], [c[0] - 2, c[1] + 6]], 'y9r3', 0.5); }
    P.box(330, 50, 0, 110, 60, 50, 'y8r3'); for (let i = 0; i < 6; i++) { const c = P.I(345 + (i % 3) * 32, 64 + (i >> 1 & 1) * 30, 50); P.shape(Lib.bumpy(P, c[0], c[1] - 4, 12, 5, 6), 'y6r3', 0.5); }
    P.box(230, 200, 0, 70, 70, 26, 'r4y5k3');
    vkMenorah(P, 265, 235, 26, 1.25);
    Lib.lamp(P, 460, 200, 0, 1.1); Lib.jar(P, 470, 240, 0, 1.3, 'r5y6k1');
  },
  live(P, t) { const a = P.I(68, 62, 44); Lib.flame(P, a[0], a[1], 18, 30, t); vkSparks(P, 310, 290, 90, t); },
  chars: [
    ch(LK.vk_bezalel, { x: 320, y: 300, face: -1, clip: 'hammer', h: 140, hold: { n: 'hammer' } }),
    ch(LK.vk_smith, { x: 120, y: 140, face: 1, clip: 'haul', h: 134 }),
    ch(LK.vk_smith, { x: 150, y: 320, face: 1, clip: 'hammer', h: 134, hold: { n: 'hammer' }, t0: 0.35, look: Object.assign({}, LK.vk_smith, { robe: 'b3y3k2', ht: 'y3' }) }),
    ch(LK.vk_oholiav, { x: 400, y: 330, face: -1, clip: 'point', h: 140 }),
    ch(LK.vk_moses, { x: 420, y: 420, face: -1, clip: 'idle', h: 144, hold: { f: 'staffV' } }),
    ch(LK.child, { h: 86, speed: 14, over: 'carry', hold: { nTop: 'jarhead' }, path: [W(470, 280, 1), W(360, 180, 2, 'offer'), W(470, 280, 0)] })
  ]
},
{
  title: 'La cuve des miroirs', book: 'Exode', ch: 38, ref: 'Exodus 38:8', refFr: 'Exode 38, 8', accent: 2, feast: null,
  quote: 'He made also the laver of brass, with the foot thereof, of the mirrors of the women that watched at the door of the tabernacle.',
  fr: 'Il fit aussi la cuve d’airain avec son pied, des miroirs des femmes qui veillaient à l’entrée du tabernacle.',
  more: ['Betsalel fait l’autel des holocaustes en bois d’acacia plaqué de cuivre, avec ses cornes, sa grille et ses ustensiles. Puis la cuve de cuivre et son support, où les prêtres se laveront les mains et les pieds. Le métal vient des miroirs des femmes qui s’assemblaient à l’entrée de la tente d’assignation. Il fait enfin les tentures du parvis, cent coudées de côté.',
    'Pas de fête juive attachée à ce passage. Rachi rapporte, d’après le midrach Tan’houma, que Moïse hésitait à recevoir ces miroirs, objets de coquetterie. Dieu lui dit de les accepter : ils lui étaient plus chers que tout, car en Égypte les femmes s’en étaient servies pour garder l’espoir de leurs maris épuisés par l’esclavage.'],
  back(P) {
    vkDesert(P, { sx: 820, sy: 160 });
    Lib.tent(P, 30, 40, 150, 110, 120, 'y3r1k1'); P.shape([P.I(180, 70, 0), P.I(180, 120, 0), P.I(180, 110, 70), P.I(180, 80, 80)], 'r6b5', 0.8);
    vkAltar(P, 300, 50, 90, 50);
    vkForge(P, 60, 250);
    vkLaver(P, 250, 250, 1.2);
    for (let i = 0; i < 7; i++) { const c = P.I(150 + (i % 4) * 14, 330 + (i >> 2) * 14, 0); P.shape(P.disc(c[0], c[1] - 5, 6, 12).map(p => [p[0], c[1] - 5 + (p[1] - c[1] + 5) * 0.5]), 'r5y7k1', 0.5); }
    Lib.stones(P, 14, 'y3r2k3', [300, 300, 220, 220]);
  },
  live(P, t) { const a = P.I(88, 272, 46); Lib.flame(P, a[0], a[1], 18, 30, t); Lib.smoke(P, a[0], a[1] - 30, t, { n: 3, h: 120, r: 12, tn: 'k2b1' }); vkSparks(P, 250, 250, 120, t * 0.6); },
  chars: [
    ch(LK.vk_bezalel, { x: 330, y: 250, face: -1, clip: 'offer', h: 140 }),
    ch(LK.vk_moses, { x: 340, y: 180, face: -1, clip: 'bless', h: 144 }),
    ch(LK.vk_spinK, { x: 160, y: 150, face: 1, clip: 'pray', h: 124 }),
    ch(LK.isrW, { h: 130, speed: 14, hold: { n: 'vk_mirror' }, path: [W(520, 440, 0), W(380, 310, 3, 'offer'), W(520, 440, 0)] }),
    ch(LK.isrW2, { h: 130, speed: 14, t0: 4, hold: { n: 'vk_mirror' }, path: [W(420, 540, 0), W(290, 370, 3, 'offer'), W(420, 540, 0)] }),
    ch(LK.vk_spinP, { h: 130, speed: 14, t0: 8, hold: { n: 'vk_mirror' }, path: [W(540, 360, 0), W(420, 270, 3, 'offer'), W(540, 360, 0)] }),
    ch(LK.childG, { x: 220, y: 440, face: -1, clip: 'idle', h: 88, hold: { n: 'vk_mirror' } }),
    ch(LK.vk_smith, { x: 150, y: 250, face: -1, clip: 'haul', h: 134 })
  ]
}
];
