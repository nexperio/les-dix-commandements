/* PARACHA TEROUMA · Exode 25, 1 à 27, 19 · Chabbat 13 février 2027 */
Object.assign(LK, {
  tr_moses: { old: 1, skin: 'y5r4k1', hs: 'fringe', hair: 'k1', beard: 'full', bt: 'k1b1', robe: 'r5y6k2', cloak: 'b5k2', sash: 'r6y3', head: 'cloth', ht: 'y2r1', band: 'k6' },
  tr_artisan: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'short', robe: 'y3r2k1', len: 'knee', sleeves: 'short', sash: 'r5', head: 'cap', ht: 'y2', feet: 'sandal' },
  tr_artisan2: { skin: 'y5r4k1', hs: 'short', hair: 'k7r2', beard: 'long', bt: 'k6', robe: 'b3y2k1', len: 'knee', sleeves: 'short', sash: 'y6r3', head: 'cloth', ht: 'y2k1', band: 'r5k3', feet: 'sandal' },
  tr_smith: { skin: 'y6r5k1', hs: 'curly', hair: 'k8', beard: 'full', bt: 'k8', robe: 'r4y4k3', len: 'knee', sleeves: 'none', sash: 'k6', feet: 'sandal' },
  tr_levite: { skin: 'y5r4k1', hs: 'curly', hair: 'k8', beard: 'short', robe: 'y2b1', len: 'knee', sleeves: 'short', sash: 'b6', head: 'cap', ht: 'y1', feet: 'sandal' },
  tr_cherub: { child: 1, skin: 'y8r3', hs: 'curly', hair: 'y9r4', robe: 'y8r3', len: 'ankle', sleeves: 'long', wings: 'y8r2', feet: 'bare', sash: 'y9r4', collar: false }
});
const trBolt = tn => (P, A, J, M, h, t, lw) => { const c = add2(J.sh, J.up, 0.07), q = [[c[0] - 0.16, c[1] + 0.01], [c[0] + 0.16, c[1] - 0.03], [c[0] + 0.16, c[1] - 0.085], [c[0] - 0.16, c[1] - 0.045]]; P.shape(q.map(M), tn, lw); const e = M([c[0] + 0.16, c[1] - 0.057]); P.shape(P.disc(e[0], e[1], h * 0.02, 8).map(p => [e[0] + (p[0] - e[0]) * 0.5, p[1]]), tadd(tn, 'k2'), lw * 0.6); P.line([M([c[0] - 0.05, c[1] - 0.03]), M([c[0] - 0.06, c[1] - 0.075])], lw * 0.5); };
Object.assign(PROPS2, {
  tr_boltB: trBolt('b7'), tr_boltP: trBolt('r6b6'), tr_boltR: trBolt('r8y2'),
  tr_bowl(P, A, J, M, h, t, lw) { const c = [(J.aN.t[0] + J.aF.t[0]) / 2, (J.aN.t[1] + J.aF.t[1]) / 2], q = M(c); P.shape(Lib.bumpy(P, q[0], q[1] - h * 0.03, h * 0.04, h * 0.018, 6), 'y9r4', lw * 0.5); P.shape([[q[0] - h * .055, q[1] - h * .025], [q[0] + h * .055, q[1] - h * .025], [q[0] + h * .03, q[1] + h * .018], [q[0] - h * .03, q[1] + h * .018]], 'y8r3', lw * 0.7); },
  tr_fork(P, A, J, M, h, t, lw, F, u, n, add) { const a = add(A.w, u, -0.3), c = add(A.w, u, 0.5); P.line([M(a), M(c)], lw * 1.6, { ink: 3 }); for (const s of [-1, 0, 1]) P.line([M(add(c, n, s * 0.025)), M(add(add(c, n, s * 0.03), u, 0.07))], lw * 0.9, { ink: 3 }); },
  tr_pan(P, A, J, M, h, t, lw, F, u, n, add) { const c = add(A.w, u, 0.22); P.line([M(A.w), M(c)], lw * 1.4, { ink: 3 }); P.shape([M(add(c, n, 0.05)), M(add(add(c, n, 0.05), u, 0.1)), M(add(add(c, n, -0.05), u, 0.1)), M(add(c, n, -0.05))], 'r5y5k3', lw * 0.7); const q = M(add(c, u, 0.05)); P.fill(Lib.bumpy(P, q[0], q[1] - h * 0.01, h * 0.03, h * 0.01, 5), 'k3b1', {}); }
});
/* ---- objets du sanctuaire ---- */
const trStrip = (pts, w) => { const L = [], R = []; for (let i = 0; i < pts.length; i++) { const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)], dx = b[0] - a[0], dy = b[1] - a[1], d = Math.hypot(dx, dy) || 1; L.push([pts[i][0] - dy / d * w / 2, pts[i][1] + dx / d * w / 2]); R.push([pts[i][0] + dy / d * w / 2, pts[i][1] - dx / d * w / 2]); } return L.concat(R.reverse()); };
const trMenoLamps = (P, x, y, z, s) => { const b = P.I(x, y, z), top = b[1] - 110 * s, W = 40 * s, o = []; for (let k = -3; k <= 3; k++) o.push([b[0] + k * W / 3, top]); return o; };
function trMenorah(P, x, y, z, s = 1) {
  const b = P.I(x, y, z), H = 110 * s, W = 40 * s, top = b[1] - H, cx = b[0], G = 'y8r3';
  P.shape([[cx - 17 * s, b[1]], [cx - 12 * s, b[1] - 5 * s], [cx - 4 * s, b[1] - 12 * s], [cx + 4 * s, b[1] - 12 * s], [cx + 12 * s, b[1] - 5 * s], [cx + 17 * s, b[1]]], G, 0.8);
  P.shape([[cx - 2.8 * s, b[1] - 11 * s], [cx + 2.8 * s, b[1] - 11 * s], [cx + 2.4 * s, top], [cx - 2.4 * s, top]], G, 0.7);
  for (let k = 3; k >= 1; k--) { const r = W * k / 3, pts = []; for (let i = 0; i <= 14; i++) { const a = Math.PI * i / 14; pts.push([cx + r * Math.cos(a), top + r * Math.sin(a) * 0.95]); } P.shape(trStrip(pts, 4 * s), G, 0.6); for (const a of [0.35, 0.7, 1.05]) for (const sg of [-1, 1]) { const q = [cx + sg * r * Math.cos(a), top + r * Math.sin(a) * 0.95]; P.shape(P.disc(q[0], q[1], 2.4 * s, 7), 'y9r4', 0.4); } P.shape(P.disc(cx, top + r * 0.95, 3.4 * s, 8), 'y9r4', 0.5); }
  for (let i = 0; i < 4; i++) P.shape(P.disc(cx, top + H * (0.55 + i * 0.1), 3 * s, 8), 'y9r4', 0.5);
  for (const [lx, ly] of trMenoLamps(P, x, y, z, s)) P.shape([[lx - 4.5 * s, ly], [lx + 4.5 * s, ly], [lx + 2.5 * s, ly + 3.5 * s], [lx - 2.5 * s, ly + 3.5 * s]], 'y9r3', 0.5);
}
function trMenoFlames(P, x, y, z, s, t) { const L = trMenoLamps(P, x, y, z, s); L.forEach(([lx, ly], i) => Lib.flame(P, lx, ly - 1, 4.2 * s, 10 * s, t + i * 0.7)); const c = P.I(x, y, z); P.halo(c[0], c[1] - 110 * s, 70 * s, ['y1', 'y2', 'y3r1'], { sq: 0.8 }); }
function trArk(P, x, y, z = 0, o = {}) {
  const G = { t: 'y8r3', l: 'y7r4k1', r: 'y7r4k2' }, Wd = { t: 'r4y5k2', l: 'r4y5k3', r: 'r5y5k4' }, k = o.s || 1;
  if (o.poles !== false) P.box(x - 45 * k, y - 6 * k, z + 14 * k, 165 * k, 5 * k, 5 * k, 'y7r4k2', 0.7);
  if (o.half) { P.box(x, y, z, 40, 45, 42, G); P.box(x + 38, y, z, 37, 45, 42, Wd); }
  else P.box(x, y, z, 75 * k, 45 * k, 42 * k, G);
  P.line([P.I(x, y + 45 * k, z + 38 * k), P.I(x + 75 * k, y + 45 * k, z + 38 * k), P.I(x + 75 * k, y, z + 38 * k)], 1.4 * k, { ink: 0 });
  for (const a of [x + 8 * k, x + 67 * k]) { const c = P.I(a, y + 45 * k, z + 17 * k); P.shape(P.disc(c[0], c[1], 3.5 * k, 8), 'y9r4', 0.6); }
  if (!o.half) P.box(x - k, y - k, z + 42 * k, 77 * k, 47 * k, 5 * k, 'y9r3');
  if (o.poles !== false) P.box(x - 45 * k, y + 46 * k, z + 14 * k, 165 * k, 5 * k, 5 * k, 'y8r3', 0.7);
}
function trTable(P, x, y) {
  for (const [a, b] of [[x + 2, y + 2], [x + 54, y + 2]]) P.box(a, b, 0, 4, 4, 40, 'y7r4k1', 0.7);
  P.box(x, y, 24, 60, 30, 4, 'y8r3', 0.7);
  for (const [a, b] of [[x + 2, y + 24], [x + 54, y + 24]]) P.box(a, b, 0, 4, 4, 40, 'y7r4k1', 0.7);
  P.box(x - 2, y - 2, 40, 64, 34, 5, 'y8r3');
  P.line([P.I(x - 2, y + 32, 47), P.I(x + 62, y + 32, 47), P.I(x + 62, y - 2, 47)], 1.1, { ink: 0 });
  for (let s = 0; s < 2; s++) for (let i = 0; i < 6; i++) { const c = P.I(x + 16 + s * 28, y + 15, 48 + i * 6); P.shape(Lib.bumpy(P, c[0], c[1] - 3, 12, 4.6, 6), i % 2 ? 'y6r4k1' : 'y7r4', 0.6); }
  for (const a of [x + 2, x + 58]) { const c = P.I(a, y + 26, 46); P.shape(P.disc(c[0], c[1], 4, 8).map(p => [p[0], c[1] + (p[1] - c[1]) * 0.5]), 'y9r4', 0.5); }
}
function trAltar(P, x, y, w = 130, h = 80) {
  const B = { t: 'r5y5k3', l: 'r5y4k3', r: 'r5y4k4' }, I = (a, b, c) => P.I(a, b, c);
  P.box(x - 34, y - 7, h * 0.45, w + 68, 5, 5, 'r5y5k4', 0.7);
  P.box(x, y, 0, w, w, h, B);
  P.shape([I(x + 12, y + 12, h), I(x + w - 12, y + 12, h), I(x + w - 12, y + w - 12, h), I(x + 12, y + w - 12, h)], 'k6r3', 0.8);
  P.shape([I(x, y + w, h * 0.3), I(x + w, y + w, h * 0.3), I(x + w, y + w, h * 0.55), I(x, y + w, h * 0.55)], 'r4y5k4', 0.7);
  P.shape([I(x + w, y, h * 0.3), I(x + w, y + w, h * 0.3), I(x + w, y + w, h * 0.55), I(x + w, y, h * 0.55)], 'r4y5k5', 0.7);
  for (let i = 1; i < 10; i++) { P.line([I(x + w * i / 10, y + w, h * 0.3), I(x + w * i / 10 + 6, y + w, h * 0.55)], 0.5); P.line([I(x + w, y + w * i / 10, h * 0.3), I(x + w, y + w * i / 10 - 6, h * 0.55)], 0.5); }
  for (const [a, b] of [[x, y], [x + w - 12, y], [x, y + w - 12], [x + w - 12, y + w - 12]]) { P.box(a, b, h, 12, 12, 10, 'r5y5k2', 0.7); const c = P.I(a + 6, b + 6, h + 10); P.shape([[c[0] - 5, c[1]], [c[0] + 5, c[1]], [c[0] + 3, c[1] - 8]], 'r4y6k2', 0.6); }
  P.box(x - 34, y + w + 2, h * 0.45, w + 68, 5, 5, 'r5y5k3', 0.7);
  return P.I(x + w / 2, y + w / 2, h);
}
function trInner(P, o = {}) {
  const L = P.L, H = 280, G = o.dark ? 'y6r4k2' : 'y7r4';
  Lib.platform(P, 'y4r3k1', 'y4r3k2', { h: 50, pebbles: false, strata: [[0, .5, 'y4r3k2'], [.5, 1, 'y4r3k3']] });
  Lib.walls(P, { l: G, r: tadd(G, 'k1'), cut: 'y6r4k2' }, { h: H });
  for (let v = 0; v < L; v += 36) { P.line([P.I(0.5, v, 0), P.I(0.5, v, 220)], 0.6); P.line([P.I(v, 0.5, 0), P.I(v, 0.5, 220)], 0.6); Lib.wallL(P, v + 3, 0, 30, 12, 'k2b1', 0.5); Lib.wallR(P, v + 3, 0, 30, 12, 'k2b1', 0.5); }
  Lib.wallL(P, 0, 110, L, 7, 'y9r3', 0.5); Lib.wallR(P, 0, 110, L, 7, 'y9r3', 0.5);
  const bands = ['r8y2', 'r6b5', 'b7', 'y1b1'];
  bands.forEach((tn, i) => { Lib.wallL(P, 0, 220 + i * 15, L, 15, tn, 0.6); Lib.wallR(P, 0, 220 + i * 15, L, 15, tn, 0.6); });
  for (let v = 30; v < L; v += 90) for (const side of [0, 1]) { const c = side ? P.I(v, 0.5, 236) : P.I(0.5, v, 236); for (const s of [-1, 1]) P.fill([[c[0], c[1]], [c[0] + s * 10, c[1] - 9], [c[0] + s * 13, c[1] - 2]], 'y8r2', {}); P.fill(P.disc(c[0], c[1] - 4, 2.4, 6), 'y8r2', {}); }
  for (let v = 0; v < L; v += 18) { const a = P.I(0.5, v, 220), b = P.I(v, 0.5, 220); P.fill(P.disc(a[0], a[1] + 2, 2.4, 6), 'b7', {}); P.fill(P.disc(b[0], b[1] + 2, 2.4, 6), 'b7', {}); }
}
function trVeil(P, X) {
  const I = (a, b, c) => P.I(a, b, c), H = 280;
  P.shape([I(X, 0, 0), I(X, 540, 0), I(X, 540, H), I(X, 0, H)], 'b6r3', 1.2);
  [['r8y2', 60], ['r6b6', 130], ['y1b1', 200]].forEach(([tn, z]) => P.fill([I(X, 0, z), I(X, 540, z), I(X, 540, z + 20), I(X, 0, z + 20)], tn, {}));
  for (let y = 20; y < 540; y += 22) P.line([I(X, y, 2), I(X, y + 4, H - 4)], 0.4, { ink: 3, lvl: 5 });
  for (let y = 70; y < 540; y += 100) { const c = I(X, y, 110); P.fill(P.disc(c[0], c[1] - 6, 4, 8), 'y8r2', {}); for (const s of [-1, 1]) P.fill([[c[0], c[1] - 4], [c[0] + s * 22, c[1] - 26], [c[0] + s * 24, c[1] - 12], [c[0] + s * 6, c[1] + 4]], 'y7r2', {}); P.fill([[c[0] - 5, c[1]], [c[0] + 5, c[1]], [c[0] + 7, c[1] + 20], [c[0] - 7, c[1] + 20]], 'y7r2', {}); }
  for (let y = 0; y <= 540; y += 30) { const c = I(X, y, H - 6); P.shape(P.disc(c[0], c[1], 2.6, 6), 'y9r4', 0.4); }
  for (const y of [70, 205, 340, 475]) { P.box(X + 4, y - 9, 0, 18, 18, 12, 'k2b1', 0.7); P.cyl(X + 13, y, 12, 6, H - 20, 'y8r3', 0.8); P.box(X + 5, y - 8, H - 10, 16, 16, 10, 'y9r3', 0.6); }
}
function trCourtWalls(P, H = 150) {
  const I = (a, b, c) => P.I(a, b, c), L = P.L;
  P.shape([I(0.5, 0, 0), I(0.5, L, 0), I(0.5, L, H), I(0.5, 0, H)], 'y1', 1.1);
  P.shape([I(0, 0.5, 0), I(L, 0.5, 0), I(L, 0.5, H), I(0, 0.5, H)], 'y1b1', 1.1);
  for (let v = 0; v <= L; v += 54) {
    for (let k = 1; k < 3; k++) { P.line([I(0.5, v + k * 18, 6), I(0.5, v + k * 18, H - 6)], 0.4); P.line([I(v + k * 18, 0.5, 6), I(v + k * 18, 0.5, H - 6)], 0.4); }
    for (const [a, b] of [[4, v], [v, 4]]) { P.box(a - 6, b - 6, 0, 14, 14, 12, 'r5y5k3', 0.6); P.cyl(a + 1, b + 1, 12, 5, H - 8, 'r4y5k2', 0.7); P.cyl(a + 1, b + 1, H + 2, 7, 8, 'k2b1', 0.6); }
  }
}
function trTentBox(P, x, y, w, d, h) {
  const I = (a, b, c) => P.I(a, b, c);
  P.box(x, y, 0, w, d, h, { t: 'b6k3', l: 'b5k3', r: 'b6k4' });
  P.fill([I(x, y + d, 0), I(x + w, y + d, 0), I(x + w, y + d, 24), I(x, y + d, 24)], 'r6y3k1', {}); P.line([I(x, y + d, 24), I(x + w, y + d, 24)], 0.8);
  P.fill([I(x, y + d, 24), I(x + w, y + d, 24), I(x + w, y + d, 34), I(x, y + d, 34)], 'k5y2', {});
  const Y0 = y + d * 0.12, Y1 = y + d * 0.88;
  P.shape([I(x + w, Y0, 0), I(x + w, Y1, 0), I(x + w, Y1, h * 0.8), I(x + w, Y0, h * 0.8)], 'b6r3', 1);
  [['r8y2', 0.2], ['r6b6', 0.4], ['y1', 0.6]].forEach(([tn, f]) => P.fill([I(x + w, Y0, h * f), I(x + w, Y1, h * f), I(x + w, Y1, h * f + 12), I(x + w, Y0, h * f + 12)], tn, {}));
  for (let i = 0; i < 5; i++) { const yy = Y0 + (Y1 - Y0) * i / 4; P.box(x + w + 3, yy - 6, 0, 12, 12, 8, 'r5y5k3', 0.6); P.cyl(x + w + 9, yy, 8, 4.5, h * 0.8, 'y8r3', 0.7); }
}
const SHEET = { title: 'Terouma · Le prélèvement', sub: 'Paracha de la semaine · Chabbat 13 février 2027 · Exode 25, 1 à 27, 19' };
const SCENES = [
{
  title: 'Les offrandes du peuple', book: 'Exode', ch: 25, ref: 'Exodus 25:2', refFr: 'Exode 25, 2', accent: 0, feast: null,
  quote: 'Speak to the children of Israel, that they bring firstfruits to me:  of every man that offereth of his own accord, you shall take them.',
  fr: 'Parle aux enfants d’Israël, qu’ils m’apportent des prémices : de tout homme qui les offre de son plein gré, vous les recevrez.',
  more: ['Au pied du Sinaï, Dieu demande à Moïse de recueillir une offrande pour bâtir le sanctuaire. La liste suit : or, argent et airain, laine teinte de violet, de pourpre et d’écarlate, lin fin, poil de chèvre, peaux de béliers teintes en rouge, bois d’acacia, huile pour le luminaire, aromates pour l’onction et l’encens, pierres d’onyx et pierres à sertir. Chacun donne selon ce que son cœur lui dicte.',
    'Pas de fête juive attachée à ce passage. Le mot terouma désigne ce que l’on « prélève » sur ses biens pour le donner. Plus loin, le peuple apporte tant que les artisans demandent à Moïse de l’arrêter, et un appel est proclamé dans le camp pour que l’on cesse d’apporter (Exode 36, 5-7).'],
  back(P) {
    Lib.sun(P, 180, 130, 28); Lib.cloud(P, 770, 120, 160, 36, 'b1');
    Lib.mound(P, 20, 20, 100, 190, 'y4r3k3');
    Lib.platform(P, 'y5r2', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
    Lib.tent(P, 380, 30, 90, 70, 70, 'b3y2k1'); Lib.tent(P, 470, 130, 60, 60, 56, 'r5y3k1'); Lib.tent(P, 30, 400, 80, 70, 64, 'y3r2k1');
    let c = P.I(250, 250, 0); P.shape(Lib.bumpy(P, c[0], c[1] - 10, 36, 16, 7), 'y8r3', 1);
    for (let i = 0; i < 12; i++) { const q = [c[0] - 26 + P.r() * 52, c[1] - 20 + P.r() * 14]; P.shape(P.disc(q[0], q[1], 3.2, 8), 'y9r2', 0.5); }
    for (const dx of [-18, 14]) P.shape([[c[0] + dx - 7, c[1] - 26], [c[0] + dx + 7, c[1] - 26], [c[0] + dx + 4, c[1] - 19], [c[0] + dx - 4, c[1] - 19]], 'y9r4', 0.6);
    c = P.I(300, 205, 0); P.shape(Lib.bumpy(P, c[0], c[1] - 8, 26, 12, 6), 'k2b1', 0.9); for (let i = 0; i < 6; i++) P.shape(P.disc(c[0] - 16 + P.r() * 32, c[1] - 14 + P.r() * 8, 2.8, 8), 'k1b1', 0.4);
    c = P.I(205, 300, 0); P.shape(Lib.bumpy(P, c[0], c[1] - 8, 26, 12, 6), 'r5y5k3', 0.9);
    [['b7', 0], ['r6b6', 12], ['r8y2', 24], ['y1', 36], ['k4y2', 46]].forEach(([tn, z], i) => P.box(318 + i * 2, 282 + i * 2, z, 50 - i * 4, 22 - i * 2, i === 4 ? 9 : 12, tn, 0.8));
    P.box(130, 320, 0, 6, 6, 70, 'r4y5k3', 0.7); P.box(190, 320, 0, 6, 6, 70, 'r4y5k3', 0.7);
    P.shape([P.I(134, 322, 66), P.I(192, 322, 66), P.I(190, 322, 20), P.I(136, 322, 16)], 'r7y3', 1); P.line([P.I(133, 322, 68), P.I(193, 322, 68)], 1.4);
    P.box(140, 350, 0, 50, 30, 8, 'b6k2', 0.8);
    for (const [z, dy] of [[0, 0], [0, 16], [14, 8]]) P.box(380, 350 + dy, z, 120, 14, 14, 'r4y5k2', 0.8);
    Lib.jar(P, 200, 190, 0, 1.4); Lib.jar(P, 216, 172, 0, 1.2, 'r5y5k2'); Lib.jar(P, 180, 205, 0, 1.1, 'b4y3k1');
    c = P.I(265, 335, 0); P.shape(Lib.bumpy(P, c[0], c[1] - 8, 16, 9, 6), 'r4y5k2', 0.8); for (const [dx, tn] of [[-6, 'y4b6'], [0, 'r8'], [6, 'b8'], [2, 'y8r2']]) P.fill(P.disc(c[0] + dx, c[1] - 14 + Math.abs(dx) / 2, 2.6, 7), tn, {});
    Lib.stones(P, 16, 'y4r3k2', [60, 60, 420, 420]);
  },
  chars: [
    ch(LK.tr_moses, { x: 160, y: 230, face: 1, clip: 'raise', h: 146, hold: { f: 'staffV' } }),
    ch(LK.isrW, { h: 128, speed: 16, hold: { nTop: 'tr_boltP' }, path: [W(520, 440, 1), W(330, 340, 2.5, 'offer', { f: -1 }), W(520, 440, 0)] }),
    ch(LK.isrM, { h: 138, speed: 14, t0: 3, hold: { nTop: 'plank' }, path: [W(540, 300, 1), W(440, 330, 2), W(540, 300, 0)] }),
    ch(LK.isrW2, { h: 126, speed: 15, t0: 6, over: 'carry', hold: { nTop: 'jarhead' }, path: [W(420, 520, 1), W(250, 400, 2, 'idle'), W(420, 520, 0)] }),
    ch(LK.isrOld, { x: 360, y: 235, face: -1, clip: 'offer', h: 134, hold: { nTop: 'tr_bowl' } }),
    ch(LK.childG, { x: 290, y: 400, face: -1, clip: 'offer', h: 88, hold: { nTop: 'tr_bowl' } }),
    ch(LK.isrM2, { x: 470, y: 250, face: -1, clip: 'idle', h: 138, hold: { f: 'staffV' } }),
    { beast: 'ram', h: 66, x: 430, y: 270, face: -1 }
  ]
},
{
  title: 'Le modèle sur la montagne', book: 'Exode', ch: 25, ref: 'Exodus 25:9', refFr: 'Exode 25, 9', accent: 2, feast: null,
  quote: 'According to all the likeness of the tabernacle which I will shew thee, and of all the vessels for the service thereof:  and thus you shall make it:',
  fr: 'Selon toute la forme du tabernacle que je te montrerai, et de tous les ustensiles pour son service : c’est ainsi que vous le ferez.',
  more: ['« Qu’ils me fassent un sanctuaire, et j’habiterai au milieu d’eux. » Moïse est seul dans la nuée, au sommet du Sinaï. Ce qu’il doit bâtir, il ne le reçoit pas seulement en paroles : on le lui montre. Le texte revient trois fois sur ce modèle vu sur la montagne, pour la ménora, pour la demeure et pour l’autel (Exode 25, 40 ; 26, 30 ; 27, 8).',
    'Pas de fête juive attachée à ce passage. Moïse est monté pour quarante jours et quarante nuits (Exode 24, 18) ; Josué, son serviteur, l’attend sur les pentes et le retrouvera à la descente (Exode 32, 17).'],
  back(P) {
    P.halo(760, 210, 200, ['b1', 'b1y1', 'y1', 'y2']);
    Lib.platform(P, 'y4r3k1', 'y4r3k2', { strata: [[0, .35, 'y4r3k2'], [.35, .7, 'r4y4k3'], [.7, 1, 'r4y3k4']] });
    const m = Lib.mound(P, 170, 170, 150, 280, 'y4r3k3', { px: 10 });
    Lib.cloud(P, m.peak[0] - 90, m.peak[1] + 70, 150, 44, 'k3b2'); Lib.cloud(P, m.peak[0] + 90, m.peak[1] + 50, 120, 40, 'k2b1');
    Lib.tent(P, 400, 330, 70, 60, 56, 'r4y4k1'); Lib.tent(P, 470, 240, 60, 55, 50, 'b3y2k1'); Lib.tent(P, 330, 470, 60, 50, 48, 'y3r2k1');
    Lib.stones(P, 22, 'y3r2k3', [300, 300, 220, 220]);
  },
  live(P, t) {
    const pk = P.I(170, 170, 280), I = (a, b, c) => P.I(a, b, c), lv = 7 + Math.round(Math.sin(t * 2) * 2);
    Lib.cloud(P, pk[0] - 10, pk[1] - 60 - Math.sin(t) * 5, 200, 60, 'k2b1', { noShade: 1 });
    const ln = (pts, w = 1.2) => P.line(pts, w, { ink: 0, lvl: lv, taper: 0.2 });
    const z0 = 330, rect = (x0, y0, x1, y1, z) => ln([I(x0, y0, z), I(x1, y0, z), I(x1, y1, z), I(x0, y1, z), I(x0, y0, z)]);
    rect(250, 20, 520, 150, z0);
    for (let x = 250; x <= 520; x += 30) { ln([I(x, 20, z0), I(x, 20, z0 + 22)], 0.8); ln([I(x, 150, z0), I(x, 150, z0 + 22)], 0.8); }
    rect(250, 20, 520, 150, z0 + 22);
    const bx = [280, 55, 380, 115, 60]; rect(bx[0], bx[1], bx[2], bx[3], z0); rect(bx[0], bx[1], bx[2], bx[3], z0 + bx[4]);
    for (const [a, b] of [[bx[0], bx[1]], [bx[2], bx[1]], [bx[2], bx[3]], [bx[0], bx[3]]]) ln([I(a, b, z0), I(a, b, z0 + bx[4])], 1);
    rect(440, 70, 470, 100, z0); rect(440, 70, 470, 100, z0 + 18); ln([I(470, 100, z0), I(470, 100, z0 + 18)], 1);
    for (let i = 0; i < 8; i++) { const u = (t * 0.2 + i / 8) % 1, a = i * 0.8; Lib.star(P, 760 + Math.cos(a) * 150 * u, 230 + Math.sin(a) * 70 * u, 5 * (1 - u), 'y6'); }
  },
  chars: [
    ch(LK.tr_moses, { x: 170, y: 170, z: 278, face: 1, clip: 'lookup', h: 96, noShadow: 1 }),
    ch(LK.joshua, { x: 330, y: 280, face: -1, clip: 'lookup', h: 132, hold: { f: 'spear' } }),
    ch(LK.isrM, { x: 420, y: 420, face: -1, clip: 'lookup', h: 136 }),
    ch(LK.isrW, { x: 480, y: 360, face: -1, clip: 'pray', h: 128 }),
    ch(LK.isrOld, { x: 390, y: 490, face: -1, clip: 'idle', h: 134, hold: { f: 'staffV' } }),
    ch(LK.childG, { x: 460, y: 470, face: -1, clip: 'lookup', h: 88 })
  ]
},
{
  title: 'L’arche de bois d’acacia', book: 'Exode', ch: 25, ref: 'Exodus 25:11', refFr: 'Exode 25, 11', accent: 0, feast: null,
  quote: 'And thou shalt overlay it with the purest gold, within and without; and over it thou shalt make a golden crown round about:',
  fr: 'Et tu la couvriras d’or très pur, au-dedans et au-dehors ; et tu feras au-dessus une couronne d’or tout autour.',
  more: ['Le premier objet décrit est l’arche : un coffre de bois d’acacia de deux coudées et demie sur une et demie, couvert d’or au-dedans et au-dehors, bordé d’une couronne d’or. Quatre anneaux d’or à ses angles reçoivent deux barres d’acacia dorées qui ne doivent jamais en être retirées. On y déposera le Témoignage, les tables de la Loi.',
    'Pas de fête juive attachée à ce passage. Le Talmud (Yoma 72b) lit « au-dedans et au-dehors » comme trois coffres emboîtés : un d’or à l’intérieur, un de bois au milieu, un d’or à l’extérieur. Le chapitre 37 dira que c’est Betsalel qui fit l’arche.'],
  back(P) {
    Lib.sun(P, 800, 140, 26);
    Lib.platform(P, 'y5r2', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
    Lib.tent(P, 40, 40, 170, 120, 130, 'r4y4k1');
    Lib.tree(P, 470, 60, 0, { h: 180, r: 80, blobs: 7, can: 'y4b5k2', trunk: 'r4y4k4' });
    Lib.tree(P, 60, 250, 0, { h: 150, r: 60, blobs: 6, can: 'y4b5k3', trunk: 'r4y4k4' });
    for (const x of [350, 450]) P.box(x, 120, 0, 10, 30, 36, 'r4y4k3', 0.7);
    P.box(330, 125, 36, 150, 20, 18, 'r4y5k2');
    for (let i = 0; i < 4; i++) P.box(360 + i * 4, 200 + i * 14, 0, 120, 12, 6, 'r4y5k1', 0.7);
    trArk(P, 200, 220, 0, { half: 1 });
    for (let i = 0; i < 3; i++) { const c = P.I(160 + i * 16, 330, 0.5); P.shape([[c[0] - 12, c[1]], [c[0] + 8, c[1] - 6], [c[0] + 18, c[1] - 1], [c[0] - 2, c[1] + 5]], 'y9r3', 0.6); }
    P.box(100, 440, 0, 170, 6, 6, 'y8r3', 0.7); P.box(110, 460, 0, 170, 6, 6, 'r4y5k2', 0.7);
    for (let i = 0; i < 4; i++) { const c = P.I(300 + i * 12, 460, 1); P.line(P.disc(c[0], c[1], 5, 10).map(p => [p[0], c[1] + (p[1] - c[1]) * 0.5]), 1.4, { ink: 0, closed: true }); }
    for (let a = 0; a < 7; a++) { const x = 110 + Math.cos(a) * 26, y = 370 + Math.sin(a) * 26; P.box(x, y, 0, 12, 12, 10, 'y3r2k3', 0.6); }
    Lib.stones(P, 12, 'y4r3k2', [300, 300, 220, 200]);
  },
  live(P, t) { const c = P.I(116, 376, 8); Lib.flame(P, c[0], c[1], 16, 30, t); const d = P.I(116, 376, 20); P.shape([[d[0] - 9, d[1]], [d[0] + 9, d[1]], [d[0] + 7, d[1] - 10], [d[0] - 7, d[1] - 10]], 'r5y4k4', 0.7); P.fill(P.disc(d[0], d[1] - 10, 6, 10).map(p => [p[0], d[1] - 10 + (p[1] - d[1] + 10) * 0.4]), 'y9r5', {}); },
  chars: [
    ch(LK.tr_artisan, { x: 300, y: 250, face: -1, clip: 'hammer', h: 136, hold: { n: 'hammer' } }),
    ch(LK.tr_artisan2, { x: 225, y: 300, face: 1, clip: 'reach', h: 138 }),
    ch(LK.tr_smith, { x: 400, y: 170, face: -1, clip: 'hammer', h: 134, t0: 0.3 }),
    ch(LK.tr_artisan, { h: 134, speed: 14, hold: { nTop: 'plank' }, look: Object.assign({}, LK.tr_artisan, { robe: 'r4y4k2', ht: 'b4y2' }), path: [W(540, 380, 1), W(380, 330, 2), W(540, 380, 0)] }),
    ch(LK.tr_smith, { x: 160, y: 400, face: 1, clip: 'fill', h: 130, look: Object.assign({}, LK.tr_smith, { robe: 'y4r3k2' }) }),
    { beast: 'donkey', h: 90, x: 470, y: 470, face: -1 }
  ]
},
{
  title: 'Les chérubins d’or', book: 'Exode', ch: 25, ref: 'Exodus 25:20', refFr: 'Exode 25, 20', accent: 2, feast: null,
  quote: 'Let them cover both sides of the propitiatory, spreading their wings, and covering the oracle, and let them look one towards the other, their faces being turned towards the propitiatory wherewith the ark is to be covered.',
  fr: 'Qu’ils couvrent les deux côtés du propitiatoire, déployant leurs ailes et couvrant l’oracle ; qu’ils se regardent l’un l’autre, le visage tourné vers le propitiatoire qui doit couvrir l’arche.',
  more: ['Sur l’arche repose le propitiatoire, la kaporet, une plaque d’or pur de la taille du coffre. À ses deux extrémités, deux chérubins d’or battu, faits d’une seule pièce avec elle, se font face, les ailes déployées vers le haut. « C’est de là que je te parlerai, d’entre les deux chérubins » (Exode 25, 22). Le livre des Nombres (7, 89) montre Moïse entendant la voix venue de cet espace.',
    'Pas de fête juive attachée à ce passage. Le Talmud (Soucca 5b) rapproche le mot keruv de l’araméen ke-ravia, « comme un enfant » : Rachi en conclut que les chérubins avaient un visage d’enfant.'],
  back(P) {
    trInner(P, { dark: 1 });
    P.halo(500, 440, 200, ['y1', 'y2', 'y3r1'], { sq: 0.7 });
    trArk(P, 150, 190, 0, { s: 2 });
  },
  live(P, t) {
    const c = P.I(225, 235, 94);
    P.halo(c[0], c[1] - 60, 70 + Math.sin(t * 1.5) * 6, ['y1', 'y2', 'y3', 'y5r1']);
    for (let i = 0; i < 6; i++) { const u = (t * 0.3 + i / 6) % 1; Lib.star(P, c[0] + Math.sin(i * 2.1) * 30 * u, c[1] - 30 - u * 110, 5 * (1 - u), 'y6'); }
  },
  chars: [
    ch(LK.tr_cherub, { x: 172, y: 235, z: 94, face: 1, clip: 'bow', h: 104, noShadow: 1 }),
    ch(LK.tr_cherub, { x: 282, y: 235, z: 94, face: -1, clip: 'bow', h: 104, noShadow: 1, t0: 1.5 }),
    ch(LK.tr_moses, { x: 400, y: 380, face: -1, clip: 'kneel', h: 146 }),
    { depth: 1000, draw(P, t) { const c = P.I(225, 235, 94); for (let k = 0; k < 3; k++) { const u = (t * 0.35 + k / 3) % 1, r = 20 + u * 150; P.line(P.disc(c[0] + 40 + u * 60, c[1] + 10 + u * 40, r, 30).slice(20, 27), 1.1 * (1 - u), { ink: 0 }); } } }
  ]
},
{
  title: 'La table et les pains', book: 'Exode', ch: 25, ref: 'Exodus 25:30', refFr: 'Exode 25, 30', accent: 1, feast: null,
  quote: 'And thou shalt set upon the table loaves of proposition in my sight always.',
  fr: 'Et tu placeras sur la table les pains de proposition, devant ma face, toujours.',
  more: ['La table est d’acacia plaqué d’or, deux coudées sur une, avec un rebord et une couronne d’or, quatre anneaux et deux barres pour la porter. On fait pour elle des plats, des coupes et des vases d’or pur. Sur elle reposent en permanence les pains « de la face », placés devant le Seigneur.',
    'Pas de fête juive attachée à ce passage. Le Lévitique (24, 5-9) précise le rite : douze pains en deux rangées de six, avec de l’encens pur, renouvelés chaque Chabbat, et mangés par Aaron et ses fils dans un lieu saint.'],
  back(P) {
    trInner(P);
    trVeil(P, 150);
    trTable(P, 280, 80);
    trMenorah(P, 300, 450, 0, 1.1);
    Lib.jar(P, 480, 60, 0, 1.2, 'y8r3');
  },
  live(P, t) { trMenoFlames(P, 300, 450, 0, 1.1, t); },
  chars: [
    ch(LK.priest, { h: 136, speed: 12, hold: { nTop: 'bread' }, path: [W(470, 430, 1), W(330, 160, 3, 'offer', { f: 1 }), W(470, 430, 0)] }),
    ch(LK.priest, { x: 400, y: 150, face: -1, clip: 'offer', h: 136, hold: { nTop: 'tr_bowl' }, look: Object.assign({}, LK.priest, { beard: 'short', hair: 'k8', sash: 'r6b5' }) }),
    ch(LK.priest, { x: 240, y: 170, face: 1, clip: 'reach', h: 134, t0: 1, look: Object.assign({}, LK.priest, { hair: 'k3', bt: 'k3' }) })
  ]
},
{
  title: 'La ménora d’or battu', book: 'Exode', ch: 25, ref: 'Exodus 25:31', refFr: 'Exode 25, 31', accent: 0, feast: null,
  quote: 'Thou shalt make also a candlestick of beaten work, of the finest gold, the shaft thereof, and the branches, the cups, and the bowls, and the lilies going forth from it.',
  fr: 'Tu feras aussi un chandelier d’or très fin, travaillé au marteau : sa tige et ses branches, ses coupes, ses boutons et ses fleurs sortiront de lui.',
  more: ['La ménora est tirée d’une seule masse d’or, un talent, battue au marteau et non assemblée. Six branches sortent de la tige, trois de chaque côté ; chacune porte trois calices en forme d’amande, un bouton et une fleur. Sept lampes éclairent devant elle. « Regarde, et fais selon le modèle qui t’a été montré sur la montagne » (Exode 25, 40).',
    'Pas de fête juive attachée à ce passage. Rachi, sur ce dernier verset, rapporte que Moïse peinait à concevoir la ménora, et que Dieu lui en montra une de feu. Sept branches sur la ménora du Temple ; la hanoukia des huit jours de Hanoucca en est distincte.'],
  back(P) {
    Lib.platform(P, 'y4r3k1', 'y4r3k2', { h: 50, strata: [[0, .5, 'y4r3k2'], [.5, 1, 'y4r3k3']] });
    Lib.walls(P, { l: 'y3r3k1', r: 'y3r3k2', cut: 'y4r3k2' }, { h: 200 });
    for (let x = 20; x < 520; x += 70) { const a = P.I(x, 0.5, 150); P.line([[a[0], a[1]], [a[0], a[1] + 30]], 0.7); P.shape([[a[0] - 6, a[1] + 30], [a[0] + 6, a[1] + 30], [a[0] + 3, a[1] + 42], [a[0] - 3, a[1] + 42]], 'k5b2', 0.5); }
    P.box(40, 270, 0, 70, 70, 50, 'y3r2k3'); P.shape([P.I(50, 280, 50), P.I(100, 280, 50), P.I(100, 330, 50), P.I(50, 330, 50)], 'k7r3', 0.8);
    P.box(150, 120, 0, 50, 50, 30, 'y4r3k2');
    P.halo(P.I(175, 145, 30)[0], P.I(175, 145, 30)[1] - 80, 110, ['y1', 'y2', 'y3']);
    trMenorah(P, 175, 145, 30, 1.25);
    P.box(260, 260, 0, 40, 30, 36, 'k4b2');
    for (let i = 0; i < 3; i++) P.box(380 + i * 8, 90, i * 10, 50 - i * 16, 26, 10, 'y9r3', 0.7);
    for (let i = 0; i < 5; i++) { const c = P.I(270 + i * 8, 275, 36); P.line([[c[0], c[1]], [c[0] + 20, c[1] - 30 - i * 4]], 1.8, { ink: 0 }); }
    Lib.jar(P, 460, 40, 0, 1.3, 'k4b1'); Lib.jar(P, 500, 70, 0, 1.1);
  },
  live(P, t) { const c = P.I(75, 305, 50); Lib.flame(P, c[0], c[1], 30, 40, t); Lib.smoke(P, c[0], c[1] - 40, t, { n: 4, h: 160, r: 16, tn: 'k2b1' }); if ((t * 1.4) % 1 < 0.35) { const a = P.I(280, 270, 38); for (let i = 0; i < 5; i++) Lib.star(P, a[0] + Math.cos(i * 1.3) * 16, a[1] - 6 - Math.abs(Math.sin(i * 1.3)) * 14, 3.5, 'y7r2'); } },
  chars: [
    ch(LK.tr_smith, { x: 320, y: 300, face: -1, clip: 'hammer', h: 136, hold: { n: 'hammer' } }),
    ch(LK.tr_artisan, { x: 150, y: 350, face: -1, clip: 'fill', h: 134 }),
    ch(LK.child, { h: 88, speed: 14, hold: { nTop: 'bundle' }, path: [W(520, 420, 1), W(200, 400, 1.5), W(520, 420, 0)] }),
    ch(LK.tr_moses, { x: 300, y: 150, face: -1, clip: 'point', h: 144, hold: { f: 'staffV' } })
  ]
},
{
  title: 'Les dix tentures', book: 'Exode', ch: 26, ref: 'Exodus 26:1', refFr: 'Exode 26, 1', accent: 1, feast: null,
  quote: 'And thou shalt make the tabernacle in this manner:  Thou shalt make ten curtains of fine twisted linen, and violet and purple, and scarlet twice dyed, diversified with embroidery.',
  fr: 'Et tu feras le tabernacle de cette manière : tu feras dix tentures de lin fin retors, de violet, de pourpre et d’écarlate teinte deux fois, ornées de broderies.',
  more: ['La demeure elle-même est un tissu : dix tentures de vingt-huit coudées sur quatre, brodées de chérubins, cousues en deux ensembles de cinq. Cinquante lacets de laine violette bordent chaque ensemble, et cinquante agrafes d’or les réunissent « pour que la demeure soit une ». Par-dessus viennent onze tentures de poil de chèvre, puis des peaux de béliers teintes en rouge.',
    'Pas de fête juive attachée à ce passage. Le Talmud (Chabbat 49b) tire du travail du sanctuaire les trente-neuf catégories de travaux interdits le Chabbat ; filer, ourdir et tisser en font partie.'],
  back(P) {
    Lib.sun(P, 190, 140, 26); Lib.cloud(P, 760, 150, 150, 34, 'b1');
    Lib.platform(P, 'y5r2', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
    Lib.tent(P, 420, 20, 100, 80, 80, 'k4y2'); Lib.tent(P, 20, 20, 80, 70, 70, 'r4y4k1');
    const I = (a, b, c) => P.I(a, b, c);
    for (const y of [100, 190]) P.cyl(90, y, 0, 5, 150, 'r4y5k3', 0.7);
    P.box(84, 95, 150, 12, 102, 8, 'r4y5k3', 0.7);
    P.shape([I(90, 106, 150), I(90, 186, 150), I(90, 186, 40), I(90, 106, 40)], 'y1', 0.7);
    [['b7', 70], ['r6b6', 90], ['r8y2', 110]].forEach(([tn, z]) => P.fill([I(90, 106, z), I(90, 186, z), I(90, 186, z + 16), I(90, 106, z + 16)], tn, {}));
    for (let y = 108; y < 186; y += 5) P.line([I(90, y, 150), I(90, y, 128)], 0.3);
    P.box(88, 104, 34, 6, 84, 6, 'r4y5k3', 0.6);
    for (const x of [150, 350]) P.box(x, 300, 0, 10, 80, 12, 'r4y5k3', 0.7);
    P.fill([I(160, 305, 6), I(260, 305, 6), I(260, 375, 6), I(160, 375, 6)], 'y1', {});
    [['b7', 0], ['r6b6', 18], ['r8y2', 36], ['y1', 54]].forEach(([tn, dy]) => P.fill([I(160, 305 + dy, 6.5), I(260, 305 + dy, 6.5), I(260, 305 + dy + 14, 6.5), I(160, 305 + dy + 14, 6.5)], tn, {}));
    for (let y = 305; y < 376; y += 5) P.line([I(260, y, 6), I(350, y, 6)], 0.3);
    P.shape([I(380, 60, 0.5), I(450, 60, 0.5), I(450, 500, 0.5), I(380, 500, 0.5)], 'b6r4', 1);
    for (let y = 60; y < 500; y += 88) { P.line([I(380, y, 1), I(450, y, 1)], 0.8); const c = I(415, y + 44, 1); for (const s of [-1, 1]) P.fill([[c[0], c[1]], [c[0] + s * 16, c[1] - 8], [c[0] + s * 12, c[1] + 2]], 'y7r2', {}); }
    [['r8y2', 392], ['y1', 430]].forEach(([tn, x]) => P.fill([I(x, 60, 1), I(x + 8, 60, 1), I(x + 8, 500, 1), I(x, 500, 1)], tn, {}));
    for (let y = 66; y < 500; y += 12) { const c = I(452, y, 1); P.line(P.disc(c[0] + 2, c[1] + 1, 3, 8), 0.8, { ink: 2, closed: true }); }
    for (let y = 72; y < 500; y += 36) { const c = I(456, y, 1); P.shape(P.disc(c[0], c[1], 2.6, 6), 'y9r3', 0.4); }
    P.box(470, 360, 0, 40, 40, 30, 'y4r3k2'); for (let i = 0; i < 3; i++) { const c = P.I(480 + i * 10, 380, 30); P.shape(P.disc(c[0], c[1] - 3, 5, 10), ['b7', 'r6b6', 'r8y2'][i], 0.6); }
  },
  chars: [
    ch(LK.isrW, { x: 230, y: 410, face: -1, clip: 'fill', h: 126 }),
    ch(LK.isrW2, { x: 150, y: 150, face: -1, clip: 'reach', h: 126, t0: 1 }),
    ch(LK.maid, { x: 60, y: 420, face: 1, clip: 'sit', h: 120, hold: { nTop: 'staffV' } }),
    ch(LK.isrM, { x: 480, y: 250, face: -1, clip: 'kneel', h: 136 }),
    ch(LK.isrM2, { h: 136, speed: 14, t0: 2, hold: { nTop: 'tr_boltB' }, path: [W(530, 520, 1), W(500, 320, 2), W(530, 520, 0)] }),
    ch(LK.childG, { x: 320, y: 440, face: -1, clip: 'hold2', h: 86 })
  ]
},
{
  title: 'Le voile devant l’arche', book: 'Exode', ch: 26, ref: 'Exodus 26:33', refFr: 'Exode 26, 33', accent: 2, feast: null,
  quote: 'And the veil shall be hanged on with rings, and within it thou shalt put the ark of the testimony, and the sanctuary and the holy of the holies shall be divided with it.',
  fr: 'Le voile sera suspendu par des anneaux ; derrière lui tu placeras l’arche du Témoignage, et il séparera le sanctuaire du saint des saints.',
  more: ['Un voile de violet, de pourpre, d’écarlate et de lin retors, brodé de chérubins, pend sur quatre colonnes d’acacia dorées posées sur des socles d’argent. Derrière lui, l’arche et le propitiatoire : le saint des saints. Devant lui, le sanctuaire, avec la table au nord et la ménora au sud, face à face (Exode 26, 35).',
    'Pas de fête juive attachée à ce passage. Derrière ce voile, seul le grand prêtre entrera, une fois l’an, au jour de Kippour, avec l’encens et le sang de l’expiation (Lévitique 16, 2 et 12-15).'],
  back(P) {
    trInner(P);
    trVeil(P, 170);
    trTable(P, 300, 50);
    trMenorah(P, 300, 450, 0, 1.15);
  },
  live(P, t) { trMenoFlames(P, 300, 450, 0, 1.15, t); const c = P.I(170, 270, 280); P.halo(c[0], c[1] - 10, 60 + Math.sin(t) * 8, ['y1', 'y2'], { sq: 0.5 }); },
  chars: [
    ch(LK.priest, { x: 360, y: 480, face: -1, clip: 'reach', h: 136 }),
    ch(LK.priest, { x: 390, y: 100, face: 1, clip: 'offer', h: 136, hold: { nTop: 'bread' }, look: Object.assign({}, LK.priest, { beard: 'short', hair: 'k8' }) }),
    ch(LK.priest, { x: 260, y: 290, face: -1, clip: 'bow', h: 134, t0: 1.2, look: Object.assign({}, LK.priest, { hair: 'k3', bt: 'k3' }) })
  ]
},
{
  title: 'L’autel d’airain', book: 'Exode', ch: 27, ref: 'Exodus 27:2', refFr: 'Exode 27, 2', accent: 1, feast: null,
  quote: 'And there shall be horns at the four corners of the same:  and thou shalt cover it with brass.',
  fr: 'Il y aura des cornes aux quatre angles, et tu le couvriras d’airain.',
  more: ['Dans le parvis, devant l’entrée, se dresse l’autel des holocaustes : un carré de cinq coudées, haut de trois, en bois d’acacia creux couvert d’airain. Quatre cornes à ses angles, une grille d’airain en treillis à mi-hauteur, des anneaux et deux barres pour le porter. Ses ustensiles aussi sont d’airain : cendriers, pelles, bassins, fourchettes et brasiers.',
    'Pas de fête juive attachée à ce passage. Les cornes de l’autel deviendront un lieu de refuge : Adonias, craignant Salomon, court les saisir (1 Rois 1, 50).'],
  back(P) {
    Lib.sun(P, 180, 120, 26);
    Lib.platform(P, 'y5r2', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
    trCourtWalls(P);
    trTentBox(P, 30, 30, 110, 150, 150);
    trAltar(P, 200, 200);
    for (const [x, y] of [[380, 120], [400, 150]]) { const c = P.I(x, y, 0); P.shape(Lib.bumpy(P, c[0], c[1] - 8, 16, 9, 6), 'r4y5k2', 0.8); }
    P.box(430, 90, 0, 60, 14, 10, 'r4y5k2', 0.7); P.box(432, 104, 0, 60, 14, 10, 'r4y5k3', 0.7);
    Lib.stones(P, 12, 'y4r3k2', [320, 320, 200, 200]);
  },
  live(P, t) { const c = P.I(265, 265, 80); Lib.flame(P, c[0] - 16, c[1], 26, 50, t); Lib.flame(P, c[0] + 18, c[1] + 4, 22, 40, t + 1.5); Lib.smoke(P, c[0], c[1] - 50, t, { n: 5, h: 260, r: 22, tn: 'k2b1' }); },
  chars: [
    ch(LK.priest, { x: 360, y: 300, face: -1, clip: 'reach', h: 138, hold: { n: 'tr_fork' } }),
    ch(LK.priest, { h: 136, speed: 14, hold: { nTop: 'tr_pan' }, look: Object.assign({}, LK.priest, { beard: 'short', hair: 'k8' }), path: [W(250, 380, 2, 'fill'), W(480, 500, 1.5), W(250, 380, 0)] }),
    ch(LK.isrM, { x: 460, y: 330, face: -1, clip: 'idle', h: 138, hold: { f: 'staffV' } }),
    { beast: 'ram', h: 66, x: 420, y: 380, face: -1 },
    ch(LK.tr_levite, { x: 180, y: 420, face: 1, clip: 'carry', h: 130, hold: { nTop: 'bundle' } })
  ]
},
{
  title: 'Le parvis de lin', book: 'Exode', ch: 27, ref: 'Exodus 27:18', refFr: 'Exode 27, 18', accent: 0, feast: null,
  quote: 'In length the court shall take up a hundred cubits, in breadth fifty, the height shall be of five cubits, and it shall be made of fine twisted linen, and shall have sockets of brass.',
  fr: 'Le parvis aura cent coudées de long, cinquante de large, et cinq de haut ; il sera fait de lin fin retors, et aura des socles d’airain.',
  more: ['Autour de la demeure, une enceinte de lin blanc tendue sur soixante colonnes à socles d’airain, chapiteaux et tringles d’argent. À l’est, l’entrée du parvis est fermée par un rideau de vingt coudées brodé de violet, de pourpre et d’écarlate. Les piquets de la demeure et du parvis sont d’airain.',
    'Pas de fête juive attachée à ce passage. La haftara de Terouma (1 Rois 5, 26 à 6, 13) raconte la construction du Temple de Salomon, et s’achève sur la même promesse : « j’habiterai au milieu des enfants d’Israël ».'],
  back(P) {
    Lib.sun(P, 820, 140, 24); Lib.cloud(P, 250, 120, 170, 36, 'b1');
    Lib.platform(P, 'y5r2', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
    trCourtWalls(P);
    trTentBox(P, 30, 50, 150, 250, 170);
    for (const [a, b, c, d] of [[30, 300, 10, 340], [100, 300, 110, 340], [180, 300, 220, 330]]) { const p = P.I(a, b, 160), q = P.I(c, d, 0); P.line([p, q], 0.6); P.box(c - 2, d - 2, 0, 4, 4, 10, 'r5y5k3', 0.5); }
    trAltar(P, 300, 140, 100, 64);
    Lib.stones(P, 12, 'y4r3k2', [260, 340, 260, 180]);
  },
  front(P) {
    const I = (a, b, c) => P.I(a, b, c);
    for (const [y0, y1] of [[540, 400]]) { P.shape([I(538, y1, 0), I(538, y0, 0), I(538, y0, 40), I(538, y1, 40)], 'y1', 0.9); }
    P.shape([I(538, 180, 0), I(538, 400, 0), I(538, 400, 40), I(538, 180, 40)], 'b6r3', 0.9);
    [['r8y2', 8], ['r6b6', 20]].forEach(([tn, z]) => P.fill([I(538, 180, z), I(538, 400, z), I(538, 400, z + 8), I(538, 180, z + 8)], tn, {}));
    for (const y of [180, 235, 290, 345, 400, 470, 540]) { P.box(533, y - 5, 0, 10, 10, 8, 'r5y5k3', 0.5); P.cyl(538, y, 8, 3.5, 40, 'r4y5k2', 0.5); P.cyl(538, y, 48, 5, 5, 'k2b1', 0.5); }
  },
  live(P, t) { const c = P.I(350, 190, 64); Lib.flame(P, c[0], c[1], 22, 40, t); Lib.smoke(P, c[0], c[1] - 40, t, { n: 4, h: 200, r: 18, tn: 'k2b1' }); },
  chars: [
    ch(LK.tr_levite, { x: 470, y: 60, face: 1, clip: 'hammer', h: 132, hold: { n: 'hammer' } }),
    ch(LK.priest, { x: 250, y: 280, face: -1, clip: 'offer', h: 136 }),
    ch(LK.isrM, { h: 136, speed: 14, path: [W(520, 300, 1), W(430, 250, 3, 'idle'), W(520, 300, 0)] }),
    { beast: 'sheep', h: 58, speed: 14, t0: 0.4, path: [W(520, 330, 1), W(440, 280, 3), W(520, 330, 0)] },
    ch(LK.isrW, { x: 470, y: 440, face: -1, clip: 'pray', h: 128 }),
    ch(LK.tr_levite, { x: 380, y: 420, face: -1, clip: 'carry', h: 130, hold: { nTop: 'plank' }, look: Object.assign({}, LK.tr_levite, { robe: 'r4y4k1' }) })
  ]
}
];
