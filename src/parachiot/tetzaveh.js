/* PARACHA TETSAVÉ · Exode 27, 20 à 30, 10 · Chabbat 20 février 2027 */
Object.assign(LK, {
  tz_moses: { old: 1, skin: 'y5r4k1', hs: 'fringe', hair: 'k1', beard: 'full', bt: 'k1b1', robe: 'r5y6k2', cloak: 'b5k2', sash: 'r6y3', head: 'cloth', ht: 'y2r1', band: 'k6' },
  tz_aaron: { old: 1, skin: 'y5r4', hs: 'short', hair: 'k3', beard: 'full', bt: 'k3', robe: 'b7', len: 'ankle', trim: 1, sleeves: 'long', sleeveT: 'y1', sash: 'y7r4b3', head: 'turban', ht: 'y1', feet: 'bare' },
  tz_aaronPlain: { old: 1, skin: 'y5r4', hs: 'short', hair: 'k3', beard: 'full', bt: 'k3', robe: 'r4y4k2', cloak: 'b4k1', sash: 'y6', head: 'cloth', ht: 'y2', band: 'k5' },
  tz_aaronLinen: { old: 1, skin: 'y5r4', hs: 'short', hair: 'k3', beard: 'full', bt: 'k3', robe: 'y1', len: 'ankle', sleeves: 'long', sash: 'b5r4', head: 'turban', ht: 'y1', feet: 'bare' },
  tz_son: { skin: 'y5r4', hs: 'short', hair: 'k7', beard: 'short', robe: 'y1', len: 'ankle', sleeves: 'long', sash: 'b5r5', head: 'cap', ht: 'y1', feet: 'bare' },
  tz_son2: { skin: 'y5r4k1', hs: 'curly', hair: 'k8', beard: 'short', robe: 'y1', len: 'ankle', sleeves: 'long', sash: 'r6b4', head: 'cap', ht: 'y1', feet: 'bare' },
  tz_nadab: { skin: 'y5r4', hs: 'short', hair: 'k7', beard: 'short', robe: 'r5y4k1', len: 'knee', sleeves: 'short', sash: 'b5', head: 'cloth', ht: 'y2', band: 'k6' },
  tz_abihu: { skin: 'y5r4k1', hs: 'curly', hair: 'k8', beard: 'short', robe: 'b4y3', len: 'knee', sleeves: 'short', sash: 'r6', head: 'cloth', ht: 'r3y2', band: 'k6' },
  tz_eleazar: { skin: 'y5r4', hs: 'short', hair: 'k6r2', beard: 'short', robe: 'y4r2k1', cloak: 'b5k1', sash: 'r5y3', head: 'cloth', ht: 'y2k1', band: 'k5' },
  tz_itamar: { skin: 'y5r4', hs: 'curly', hair: 'k7r2', robe: 'y5b4', len: 'knee', sleeves: 'short', sash: 'y7r2', head: 'cloth', ht: 'b3y1', band: 'k6' },
  tz_jeweler: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'short', robe: 'y3r2k1', len: 'knee', sleeves: 'short', sash: 'b5', head: 'cap', ht: 'y2', feet: 'sandal' },
  tz_worker: { skin: 'y6r5k1', hs: 'curly', hair: 'k8', beard: 'full', bt: 'k8', robe: 'y4r3k2', len: 'knee', sleeves: 'none', sash: 'r5', head: 'cloth', ht: 'y2k1', band: 'k6', feet: 'bare' }
});
const tzStones = ['r8y1', 'y8r1', 'y5b7', 'r8y4', 'b8', 'y4b3k1', 'r6y6', 'k3y3', 'r5b6', 'y7b2', 'k6b1', 'b5y5'];
Object.assign(PROPS2, {
  tz_kg(P, A, J, M, h, t, lw) {
    const up = J.up, fw = J.fw, T = (al, ac) => [J.hip[0] + up[0] * al + fw[0] * ac, J.hip[1] + up[1] * al + fw[1] * ac], Ms = a => a.map(M);
    const H = (x, y) => (x *= 1.12, y *= 1.12, [J.head[0] + J.hf[0] * x - J.hu[0] * y, J.head[1] + J.hf[1] * x - J.hu[1] * y]);
    const hem = Lg => [Lg.k[0] + (Lg.a[0] - Lg.k[0]) * 0.8, Lg.k[1] + (Lg.a[1] - Lg.k[1]) * 0.8], pr = q => (q[0] - J.hip[0]) * fw[0] + (q[1] - J.hip[1]) * fw[1];
    let a = hem(J.lN), b = hem(J.lF); if (pr(a) < pr(b)) [a, b] = [b, a];
    const hf = [a[0] + fw[0] * 0.07 - up[0] * 0.012, a[1] + fw[1] * 0.07 - up[1] * 0.012], hb = [b[0] - fw[0] * 0.07 - up[0] * 0.012, b[1] - fw[1] * 0.07 - up[1] * 0.012];
    for (let i = 0; i <= 8; i++) { const q = M([hb[0] + (hf[0] - hb[0]) * i / 8, hb[1] + (hf[1] - hb[1]) * i / 8]); P.shape(P.disc(q[0], q[1] + h * 0.006, h * (i % 2 ? 0.009 : 0.007), 7), i % 2 ? 'r7b4' : 'y9r2', lw * 0.4); }
    P.shape(Ms([T(0.15, -0.088), T(0.15, 0.086), T(-0.17, 0.1), T(-0.17, -0.1)]), 'y6r3b2', lw * 0.8);
    [[0, 0.07], [2, 0.0], [1, -0.07], [0, -0.13]].forEach(([ink, al]) => P.line(Ms([T(al, -0.09), T(al, 0.09)]), lw * 0.9, { ink }));
    P.shape(Ms([T(0.155, -0.088), T(0.155, 0.088), T(0.115, 0.088), T(0.115, -0.088)]), 'y8r3', lw * 0.6);
    P.shape(Ms([T(0.29, -0.03), T(0.29, 0.05), T(0.15, 0.07), T(0.15, 0.0)]), 'y6r3b2', lw * 0.6);
    const o = M(T(0.285, 0.012)); P.shape(P.disc(o[0], o[1], h * 0.016, 8), 'y8r3', lw * 0.5); P.fill(P.disc(o[0], o[1], h * 0.01, 8), 'b5y4k3', {});
    P.line(Ms([T(0.285, 0.03), T(0.26, 0.095)]), lw * 0.7, { ink: 0 });
    P.shape(Ms([T(0.262, 0.02), T(0.262, 0.1), T(0.158, 0.1), T(0.158, 0.02)]), 'y8r3', lw * 0.7);
    for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) { const q = M(T(0.245 - r * 0.026, 0.035 + c * 0.025)); P.fill(P.disc(q[0], q[1], h * 0.0075, 6), tzStones[r * 3 + c], {}); }
    P.shape(Ms([H(0.068, -0.034), H(0.07, -0.064), H(0.028, -0.072), H(0.026, -0.044)]), 'y9r3', lw * 0.5);
    P.line(Ms([H(0.028, -0.06), H(-0.074, -0.066)]), lw * 0.9, { ink: 2 });
  },
  tz_pestle(P, A, J, M, h, t, lw) { const a = [A.w[0], A.w[1] - 0.08], c = [A.w[0] + 0.01, A.w[1] + 0.4]; P.shape([a, [a[0] + 0.02, a[1]], [c[0] + 0.022, c[1]], [c[0] - 0.002, c[1]]].map(M), 'r4y5k3', lw * 0.7); },
  tz_jug(P, A, J, M, h, t, lw, F, u, n, add) { const q = M(add(A.t, u, 0.02)); P.shape([[q[0] - h * .02, q[1] - h * .03], [q[0] + h * .012, q[1] - h * .03], [q[0] + h * .03, q[1] - h * .04], [q[0] + h * .026, q[1]], [q[0] + h * .02, q[1] + h * .03], [q[0] - h * .02, q[1] + h * .03], [q[0] - h * .026, q[1]]], 'r5y6k1', lw * 0.6); },
  tz_flask(P, A, J, M, h, t, lw, F, u, n, add) { const b = add(A.t, u, 0.01), c = add(b, u, 0.12); P.shape([M(add(b, n, 0.03)), M(add(c, n, 0.012)), M(add(c, n, -0.012)), M(add(b, n, -0.03))], 'y6r3k1', lw * 0.7); const q = M(c); P.fill(P.disc(q[0], q[1], h * 0.008, 6), 'y8r2', {}); },
  tz_ladle(P, A, J, M, h, t, lw, F, u, n, add) { const c = add(A.w, u, 0.18); P.line([M(A.w), M(c)], lw * 1.4, { ink: 0, lvl: 9 }); P.shape([M(add(c, n, 0.045)), M(add(add(c, n, 0.045), u, 0.09)), M(add(add(c, n, -0.045), u, 0.09)), M(add(c, n, -0.045))], 'y8r3', lw * 0.7); const q = M(add(c, u, 0.045)); P.fill(Lib.bumpy(P, q[0], q[1] - h * 0.01, h * 0.028, h * 0.01, 5), (t * 3) % 1 < 0.5 ? 'r8y5' : 'r7y7', {}); },
  tz_stone(P, A, J, M, h, t, lw) { const c = [(J.aN.t[0] + J.aF.t[0]) / 2, (J.aN.t[1] + J.aF.t[1]) / 2 - 0.02], q = M(c); P.shape(P.disc(q[0], q[1], h * 0.04, 12).map(p => [p[0], q[1] + (p[1] - q[1]) * 0.7]), 'y8r3', lw * 0.7); P.fill(P.disc(q[0], q[1], h * 0.028, 12).map(p => [p[0], q[1] + (p[1] - q[1]) * 0.7]), 'b5y4k3', {}); }
});
/* ---- objets du sanctuaire ---- */
const tzStrip = (pts, w) => { const L = [], R = []; for (let i = 0; i < pts.length; i++) { const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)], dx = b[0] - a[0], dy = b[1] - a[1], d = Math.hypot(dx, dy) || 1; L.push([pts[i][0] - dy / d * w / 2, pts[i][1] + dx / d * w / 2]); R.push([pts[i][0] + dy / d * w / 2, pts[i][1] - dx / d * w / 2]); } return L.concat(R.reverse()); };
const tzMenoLamps = (P, x, y, z, s) => { const b = P.I(x, y, z), top = b[1] - 110 * s, W = 40 * s, o = []; for (let k = -3; k <= 3; k++) o.push([b[0] + k * W / 3, top]); return o; };
function tzMenorah(P, x, y, z, s = 1) {
  const b = P.I(x, y, z), H = 110 * s, W = 40 * s, top = b[1] - H, cx = b[0], G = 'y8r3';
  P.shape([[cx - 17 * s, b[1]], [cx - 12 * s, b[1] - 5 * s], [cx - 4 * s, b[1] - 12 * s], [cx + 4 * s, b[1] - 12 * s], [cx + 12 * s, b[1] - 5 * s], [cx + 17 * s, b[1]]], G, 0.8);
  P.shape([[cx - 2.8 * s, b[1] - 11 * s], [cx + 2.8 * s, b[1] - 11 * s], [cx + 2.4 * s, top], [cx - 2.4 * s, top]], G, 0.7);
  for (let k = 3; k >= 1; k--) { const r = W * k / 3, pts = []; for (let i = 0; i <= 14; i++) { const a = Math.PI * i / 14; pts.push([cx + r * Math.cos(a), top + r * Math.sin(a) * 0.95]); } P.shape(tzStrip(pts, 4 * s), G, 0.6); for (const a of [0.35, 0.7, 1.05]) for (const sg of [-1, 1]) { const q = [cx + sg * r * Math.cos(a), top + r * Math.sin(a) * 0.95]; P.shape(P.disc(q[0], q[1], 2.4 * s, 7), 'y9r4', 0.4); } P.shape(P.disc(cx, top + r * 0.95, 3.4 * s, 8), 'y9r4', 0.5); }
  for (let i = 0; i < 4; i++) P.shape(P.disc(cx, top + H * (0.55 + i * 0.1), 3 * s, 8), 'y9r4', 0.5);
  for (const [lx, ly] of tzMenoLamps(P, x, y, z, s)) P.shape([[lx - 4.5 * s, ly], [lx + 4.5 * s, ly], [lx + 2.5 * s, ly + 3.5 * s], [lx - 2.5 * s, ly + 3.5 * s]], 'y9r3', 0.5);
}
function tzMenoFlames(P, x, y, z, s, t) { const L = tzMenoLamps(P, x, y, z, s); L.forEach(([lx, ly], i) => Lib.flame(P, lx, ly - 1, 4.2 * s, 10 * s, t + i * 0.7)); const c = P.I(x, y, z); P.halo(c[0], c[1] - 110 * s, 70 * s, ['y1', 'y2', 'y3r1'], { sq: 0.8 }); }
function tzArk(P, x, y, z = 0, o = {}) {
  const G = { t: 'y8r3', l: 'y7r4k1', r: 'y7r4k2' }, Wd = { t: 'r4y5k2', l: 'r4y5k3', r: 'r5y5k4' }, k = o.s || 1;
  if (o.poles !== false) P.box(x - 45 * k, y - 6 * k, z + 14 * k, 165 * k, 5 * k, 5 * k, 'y7r4k2', 0.7);
  if (o.half) { P.box(x, y, z, 40, 45, 42, G); P.box(x + 38, y, z, 37, 45, 42, Wd); }
  else P.box(x, y, z, 75 * k, 45 * k, 42 * k, G);
  P.line([P.I(x, y + 45 * k, z + 38 * k), P.I(x + 75 * k, y + 45 * k, z + 38 * k), P.I(x + 75 * k, y, z + 38 * k)], 1.4 * k, { ink: 0 });
  for (const a of [x + 8 * k, x + 67 * k]) { const c = P.I(a, y + 45 * k, z + 17 * k); P.shape(P.disc(c[0], c[1], 3.5 * k, 8), 'y9r4', 0.6); }
  if (!o.half) P.box(x - k, y - k, z + 42 * k, 77 * k, 47 * k, 5 * k, 'y9r3');
  if (o.poles !== false) P.box(x - 45 * k, y + 46 * k, z + 14 * k, 165 * k, 5 * k, 5 * k, 'y8r3', 0.7);
}
function tzTable(P, x, y) {
  for (const [a, b] of [[x + 2, y + 2], [x + 54, y + 2]]) P.box(a, b, 0, 4, 4, 40, 'y7r4k1', 0.7);
  P.box(x, y, 24, 60, 30, 4, 'y8r3', 0.7);
  for (const [a, b] of [[x + 2, y + 24], [x + 54, y + 24]]) P.box(a, b, 0, 4, 4, 40, 'y7r4k1', 0.7);
  P.box(x - 2, y - 2, 40, 64, 34, 5, 'y8r3');
  P.line([P.I(x - 2, y + 32, 47), P.I(x + 62, y + 32, 47), P.I(x + 62, y - 2, 47)], 1.1, { ink: 0 });
  for (let s = 0; s < 2; s++) for (let i = 0; i < 6; i++) { const c = P.I(x + 16 + s * 28, y + 15, 48 + i * 6); P.shape(Lib.bumpy(P, c[0], c[1] - 3, 12, 4.6, 6), i % 2 ? 'y6r4k1' : 'y7r4', 0.6); }
  for (const a of [x + 2, x + 58]) { const c = P.I(a, y + 26, 46); P.shape(P.disc(c[0], c[1], 4, 8).map(p => [p[0], c[1] + (p[1] - c[1]) * 0.5]), 'y9r4', 0.5); }
}
function tzAltar(P, x, y, w = 130, h = 80) {
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
function tzInner(P, o = {}) {
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
function tzVeil(P, X) {
  const I = (a, b, c) => P.I(a, b, c), H = 280;
  P.shape([I(X, 0, 0), I(X, 540, 0), I(X, 540, H), I(X, 0, H)], 'b6r3', 1.2);
  [['r8y2', 60], ['r6b6', 130], ['y1b1', 200]].forEach(([tn, z]) => P.fill([I(X, 0, z), I(X, 540, z), I(X, 540, z + 20), I(X, 0, z + 20)], tn, {}));
  for (let y = 20; y < 540; y += 22) P.line([I(X, y, 2), I(X, y + 4, H - 4)], 0.4, { ink: 3, lvl: 5 });
  for (let y = 70; y < 540; y += 100) { const c = I(X, y, 110); P.fill(P.disc(c[0], c[1] - 6, 4, 8), 'y8r2', {}); for (const s of [-1, 1]) P.fill([[c[0], c[1] - 4], [c[0] + s * 22, c[1] - 26], [c[0] + s * 24, c[1] - 12], [c[0] + s * 6, c[1] + 4]], 'y7r2', {}); P.fill([[c[0] - 5, c[1]], [c[0] + 5, c[1]], [c[0] + 7, c[1] + 20], [c[0] - 7, c[1] + 20]], 'y7r2', {}); }
  for (let y = 0; y <= 540; y += 30) { const c = I(X, y, H - 6); P.shape(P.disc(c[0], c[1], 2.6, 6), 'y9r4', 0.4); }
  for (const y of [70, 205, 340, 475]) { P.box(X + 4, y - 9, 0, 18, 18, 12, 'k2b1', 0.7); P.cyl(X + 13, y, 12, 6, H - 20, 'y8r3', 0.8); P.box(X + 5, y - 8, H - 10, 16, 16, 10, 'y9r3', 0.6); }
}
function tzCourtWalls(P, H = 150) {
  const I = (a, b, c) => P.I(a, b, c), L = P.L;
  P.shape([I(0.5, 0, 0), I(0.5, L, 0), I(0.5, L, H), I(0.5, 0, H)], 'y1', 1.1);
  P.shape([I(0, 0.5, 0), I(L, 0.5, 0), I(L, 0.5, H), I(0, 0.5, H)], 'y1b1', 1.1);
  for (let v = 0; v <= L; v += 54) {
    for (let k = 1; k < 3; k++) { P.line([I(0.5, v + k * 18, 6), I(0.5, v + k * 18, H - 6)], 0.4); P.line([I(v + k * 18, 0.5, 6), I(v + k * 18, 0.5, H - 6)], 0.4); }
    for (const [a, b] of [[4, v], [v, 4]]) { P.box(a - 6, b - 6, 0, 14, 14, 12, 'r5y5k3', 0.6); P.cyl(a + 1, b + 1, 12, 5, H - 8, 'r4y5k2', 0.7); P.cyl(a + 1, b + 1, H + 2, 7, 8, 'k2b1', 0.6); }
  }
}
function tzTentBox(P, x, y, w, d, h) {
  const I = (a, b, c) => P.I(a, b, c);
  P.box(x, y, 0, w, d, h, { t: 'b6k3', l: 'b5k3', r: 'b6k4' });
  P.fill([I(x, y + d, 0), I(x + w, y + d, 0), I(x + w, y + d, 24), I(x, y + d, 24)], 'r6y3k1', {}); P.line([I(x, y + d, 24), I(x + w, y + d, 24)], 0.8);
  P.fill([I(x, y + d, 24), I(x + w, y + d, 24), I(x + w, y + d, 34), I(x, y + d, 34)], 'k5y2', {});
  const Y0 = y + d * 0.12, Y1 = y + d * 0.88;
  P.shape([I(x + w, Y0, 0), I(x + w, Y1, 0), I(x + w, Y1, h * 0.8), I(x + w, Y0, h * 0.8)], 'b6r3', 1);
  [['r8y2', 0.2], ['r6b6', 0.4], ['y1', 0.6]].forEach(([tn, f]) => P.fill([I(x + w, Y0, h * f), I(x + w, Y1, h * f), I(x + w, Y1, h * f + 12), I(x + w, Y0, h * f + 12)], tn, {}));
  for (let i = 0; i < 5; i++) { const yy = Y0 + (Y1 - Y0) * i / 4; P.box(x + w + 3, yy - 6, 0, 12, 12, 8, 'r5y5k3', 0.6); P.cyl(x + w + 9, yy, 8, 4.5, h * 0.8, 'y8r3', 0.7); }
}
const tzBellWalker = ch(LK.tz_aaron, { h: 148, speed: 12, hold: { n: 'tz_kg' }, path: [W(450, 330, 2, 'idle', { f: -1 }), W(205, 235, 2.5, 'bow', { f: -1 }), W(450, 330, 0)] });
const tzOilMoses = ch(LK.tz_moses, { x: 300, y: 285, face: -1, clip: 'raise', h: 148, hold: { nTop: 'tz_flask' } });
const tzOilAaron = ch(LK.tz_aaron, { x: 225, y: 320, face: 1, clip: 'idle', h: 146, hold: { n: 'tz_kg' } });
const tzGold = { t: 'y8r3', l: 'y7r4k1', r: 'y7r4k2' };
const SHEET = { title: 'Tetsavé · Tu ordonneras', sub: 'Paracha de la semaine · Chabbat 20 février 2027 · Exode 27, 20 à 30, 10' };
const SCENES = [
{
  title: 'L’huile d’olive pilée', book: 'Exode', ch: 27, ref: 'Exodus 27:20', refFr: 'Exode 27, 20', accent: 0, feast: null,
  quote: 'Command the children of Israel that they bring thee the purest oil of the olives, and beaten with a pestle:  that a lamp may burn always,',
  fr: 'Ordonne aux enfants d’Israël de t’apporter l’huile d’olive la plus pure, pilée au mortier, afin qu’une lampe brûle toujours,',
  more: ['Tetsavé, « tu ordonneras » : la paracha s’ouvre sur l’huile de la lampe. Les enfants d’Israël apporteront une huile d’olive pure, obtenue en pilant les fruits, pour entretenir une flamme permanente dans la tente du Témoignage. Le verset suivant confie cette lampe à Aaron et à ses fils, du soir jusqu’au matin, pour toutes les générations.',
    'Pas de fête juive attachée à ce passage. Rachi explique que l’on pile les olives au mortier sans les moudre, pour que l’huile sorte claire, sans dépôt ; seule cette première huile convient à la ménora, la suivante peut servir aux offrandes de farine.'],
  back(P) {
    Lib.sun(P, 800, 130, 28); Lib.cloud(P, 250, 140, 150, 34, 'b1');
    Lib.platform(P, 'y5r2b1', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    for (const [x, y, hh, r] of [[70, 70, 150, 66], [250, 50, 140, 60], [460, 70, 150, 64], [70, 260, 140, 60], [60, 460, 130, 56]]) Lib.tree(P, x, y, 0, { h: hh, r, blobs: 9, can: 'y3b5k3', trunk: 'r4y3k5' });
    Lib.grass(P, 40, 'y4b4k1', [20, 20, 500, 500]);
    P.cyl(270, 290, 0, 26, 34, 'y3r2k3'); P.shape(P.ell(270, 290, 34.5, 19, 19, 16), 'r5b5k4', 0.6);
    for (let i = 0; i < 7; i++) { const c = P.I(262 + P.r() * 16, 282 + P.r() * 16, 35); P.fill(P.disc(c[0], c[1], 2.4, 6), 'b5r5k3', {}); }
    for (const [x, y] of [[360, 190], [395, 225]]) { const c = P.I(x, y, 0); P.shape(Lib.bumpy(P, c[0], c[1] - 10, 20, 12, 6), 'r4y5k2', 0.8); for (let i = 0; i < 8; i++) P.fill(P.disc(c[0] - 12 + P.r() * 24, c[1] - 18 + P.r() * 8, 2.6, 6), i % 3 ? 'b5r5k3' : 'y5b5k2', {}); }
    const s = P.I(222, 345, 0); P.shape(P.disc(s[0], s[1], 16, 16).map(p => [p[0], s[1] + (p[1] - s[1]) * 0.5]), 'y3r2k3', 0.8); P.fill(P.disc(s[0], s[1] - 1, 11, 16).map(p => [p[0], s[1] - 1 + (p[1] - s[1]) * 0.5]), 'y8r2', {});
    Lib.jar(P, 180, 400, 0, 1.5); Lib.jar(P, 200, 425, 0, 1.4, 'y5r4k1'); Lib.jar(P, 155, 425, 0, 1.3, 'r5y5k2');
    Lib.tent(P, 430, 400, 90, 80, 70, 'b3y2k1');
    Lib.stones(P, 12, 'y4r3k2', [260, 300, 200, 200]);
  },
  chars: [
    ch(LK.tz_worker, { x: 300, y: 268, face: -1, clip: 'hammer', h: 138, hold: { n: 'tz_pestle' } }),
    ch(LK.isrW, { x: 240, y: 405, face: -1, clip: 'fill', h: 126, hold: { nTop: 'tz_jug' } }),
    ch(LK.child, { x: 125, y: 300, face: -1, clip: 'raise', h: 88 }),
    ch(LK.isrM, { h: 136, speed: 14, hold: { nTop: 'bundle' }, path: [W(150, 210, 1.5, 'reach'), W(350, 240, 1.5), W(150, 210, 0)] }),
    ch(LK.isrM2, { h: 136, speed: 14, t0: 4, over: 'carry', hold: { nTop: 'jarhead' }, path: [W(260, 440, 1.5), W(420, 520, 0), W(260, 440, 0, null, { jump: 1 })] })
  ]
},
{
  title: 'La lampe du soir au matin', book: 'Exode', ch: 27, ref: 'Exodus 27:21', refFr: 'Exode 27, 21', accent: 2, feast: null,
  quote: 'In the tabernacle of the testimony, without the veil that hangs before the testimony.  And Aaron and his sons shall order it, that it may give light before the Lord until the morning.',
  fr: 'Dans la tente du Témoignage, en dehors du voile suspendu devant le Témoignage. Aaron et ses fils la disposeront, afin qu’elle éclaire devant le Seigneur jusqu’au matin.',
  more: ['La lampe brûle dans la tente du Témoignage, du côté du voile où ne se trouve pas l’arche. Aaron et ses fils la préparent pour qu’elle éclaire devant le Seigneur du soir jusqu’au matin : c’est une loi perpétuelle pour toutes les générations. Le Lévitique (24, 1-4) reprend ce commandement presque mot pour mot et précise que les lampes reposent sur le chandelier d’or pur.',
    'Pas de fête juive attachée à ce passage. Dans les synagogues, une lampe perpétuelle, le ner tamid, brûle devant l’arche sainte en souvenir de cette flamme.'],
  back(P) {
    nightSky(P, 'b7k4', 60);
    tzInner(P, { dark: 1 });
    tzVeil(P, 170);
    tzTable(P, 300, 50);
    tzMenorah(P, 330, 330, 0, 1.5);
  },
  live(P, t) { tzMenoFlames(P, 330, 330, 0, 1.5, t); },
  chars: [
    ch(LK.tz_aaron, { x: 425, y: 330, face: -1, clip: 'reach', h: 148, hold: { n: 'tz_kg', nTop: 'tz_jug' } }),
    ch(LK.tz_son, { x: 420, y: 470, face: -1, clip: 'offer', h: 138, hold: { nTop: 'tz_jug' } })
  ]
},
{
  title: 'Aaron et ses fils', book: 'Exode', ch: 28, ref: 'Exodus 28:1', refFr: 'Exode 28, 1', accent: 1, feast: null,
  quote: 'Take unto thee also Aaron thy brother with his sons, from among the children of Israel, that they may minister to me in the priest\'s office:  Aaron, Nadab, and Abiu, Eleazar, and Ithamar.',
  fr: 'Fais aussi approcher de toi Aaron ton frère, avec ses fils, du milieu des enfants d’Israël, pour qu’ils me servent dans le sacerdoce : Aaron, Nadab et Abihou, Éléazar et Itamar.',
  more: ['Moïse doit faire approcher son frère Aaron et ses quatre fils, Nadab, Abihou, Éléazar et Itamar, pour qu’ils exercent le sacerdoce. Des vêtements saints seront faits pour Aaron « pour la gloire et pour la parure ». Le sacerdoce restera à Aaron et à sa descendance. Nadab et Abihou mourront plus tard pour avoir offert un feu étranger (Lévitique 10, 1-2).',
    'Pas de fête juive attachée à ce passage. Le nom de Moïse n’apparaît pas une seule fois dans la paracha Tetsavé ; le Baal Hatourim y voit l’écho de sa prière après le veau d’or : « efface-moi de ton livre » (Exode 32, 32).'],
  back(P) {
    Lib.sun(P, 180, 130, 26); Lib.cloud(P, 760, 140, 160, 36, 'b1');
    Lib.platform(P, 'y5r2', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
    tzTentBox(P, 30, 30, 120, 180, 150);
    Lib.tent(P, 420, 30, 90, 70, 70, 'b3y2k1'); Lib.tent(P, 30, 420, 80, 70, 64, 'r4y4k1'); Lib.tent(P, 480, 150, 50, 50, 46, 'y3r2k1');
    Lib.stones(P, 18, 'y4r3k2', [180, 200, 300, 300]);
  },
  chars: [
    ch(LK.tz_moses, { x: 190, y: 330, face: 1, clip: 'point', h: 148, hold: { f: 'staffV' } }),
    ch(LK.tz_aaronPlain, { x: 290, y: 270, face: -1, clip: 'bow', h: 146, hold: { f: 'staffV' } }),
    ch(LK.tz_nadab, { x: 370, y: 260, face: -1, clip: 'idle', h: 140 }),
    ch(LK.tz_abihu, { x: 390, y: 330, face: -1, clip: 'idle', h: 140, t0: 1 }),
    ch(LK.tz_eleazar, { x: 400, y: 400, face: -1, clip: 'bow', h: 140 }),
    ch(LK.tz_itamar, { x: 380, y: 475, face: -1, clip: 'lookup', h: 134 }),
    ch(LK.isrW, { x: 500, y: 300, face: -1, clip: 'pray', h: 126 }),
    ch(LK.isrOld, { x: 490, y: 470, face: -1, clip: 'idle', h: 132, hold: { f: 'staffV' } })
  ]
},
{
  title: 'Les pierres d’onyx', book: 'Exode', ch: 28, ref: 'Exodus 28:12', refFr: 'Exode 28, 12', accent: 0, feast: null,
  quote: 'And thou shalt put them in both sides of the ephod, a memorial for the children of Israel.  And Aaron shall bear their names before the Lord upon both shoulders, for a remembrance.',
  fr: 'Et tu les placeras des deux côtés de l’éphod, en mémorial pour les enfants d’Israël. Aaron portera leurs noms devant le Seigneur sur ses deux épaules, en souvenir.',
  more: ['Deux pierres d’onyx, serties d’or, sont fixées sur les épaulettes de l’éphod, le tablier tissé d’or, de violet, de pourpre, d’écarlate et de lin retors. Un graveur y inscrit les noms des fils d’Israël, six sur chaque pierre, « selon l’ordre de leur naissance », comme on grave un sceau. Aaron portera ces noms sur ses épaules devant le Seigneur, en souvenir.',
    'Pas de fête juive attachée à ce passage. Les mêmes noms seront gravés une seconde fois, sur les douze pierres du pectoral, et Aaron les portera alors sur sa poitrine (Exode 28, 21 et 29).'],
  back(P) {
    Lib.platform(P, 'y4r3k1', 'y4r3k2', { h: 50, strata: [[0, .5, 'y4r3k2'], [.5, 1, 'y4r3k3']] });
    Lib.walls(P, { l: 'r4y4k1', r: 'r4y4k2', cut: 'y4r3k2' }, { h: 190 });
    for (let v = 0; v < 540; v += 45) { P.line([P.I(0.5, v, 0), P.I(0.5, v + 20, 190)], 0.4); P.line([P.I(v, 0.5, 0), P.I(v + 20, 0.5, 190)], 0.4); }
    for (let x = 60; x < 500; x += 60) { const a = P.I(x, 0.5, 140); P.line([[a[0], a[1]], [a[0] + 2, a[1] + 26]], 1, { ink: 3 }); }
    const I = (a, b, c) => P.I(a, b, c);
    P.box(200, 180, 0, 130, 50, 40, 'r4y5k2');
    for (const x of [235, 295]) { const c = P.I(x, 205, 40); P.shape(P.disc(c[0], c[1], 17, 16).map(p => [p[0], c[1] + (p[1] - c[1]) * 0.55]), 'y8r3', 0.8); P.shape(P.disc(c[0], c[1], 12, 16).map(p => [p[0], c[1] + (p[1] - c[1]) * 0.55]), 'b5y4k3', 0.6); for (let r = 0; r < 3; r++) P.line([[c[0] - 7, c[1] - 3 + r * 3], [c[0] + 7, c[1] - 3 + r * 3]], 0.4, { ink: 0 }); }
    P.box(330, 330, 0, 120, 60, 36, 'r4y5k3');
    P.shape([I(350, 338, 36.5), I(430, 338, 36.5), I(425, 382, 36.5), I(355, 382, 36.5)], 'y6r3b2', 0.9);
    [[0, 348], [2, 358], [1, 368]].forEach(([ink, y]) => P.line([I(352, y, 37), I(428, y, 37)], 1, { ink }));
    for (const x of [360, 420]) P.shape([I(x - 6, 330, 37), I(x + 6, 330, 37), I(x + 4, 340, 37), I(x - 4, 340, 37)], 'y8r3', 0.5);
    for (let i = 0; i < 12; i++) { const c = P.I(120 + (i % 4) * 14, 330 + Math.floor(i / 4) * 14, 1); P.fill(P.disc(c[0], c[1], 3.4, 8), tzStones[i], {}); }
    P.box(470, 60, 0, 40, 40, 60, 'r4y4k2'); Lib.jar(P, 490, 150, 0, 1.3, 'k4b2');
  },
  chars: [
    ch(LK.tz_jeweler, { x: 265, y: 265, face: 1, clip: 'hammer', h: 136, hold: { n: 'hammer' } }),
    ch(LK.tz_jeweler, { x: 380, y: 220, face: -1, clip: 'offer', h: 134, hold: { nTop: 'tz_stone' }, look: Object.assign({}, LK.tz_jeweler, { robe: 'b4y2k1', beard: 'long', bt: 'k5', hair: 'k5' }) }),
    ch(LK.isrW2, { x: 480, y: 410, face: -1, clip: 'fill', h: 126 }),
    ch(LK.childG, { x: 175, y: 380, face: 1, clip: 'kneel', h: 86 }),
    ch(LK.tz_moses, { x: 150, y: 250, face: 1, clip: 'talk', h: 146, hold: { f: 'staffV' } })
  ]
},
{
  title: 'Le pectoral aux douze pierres', book: 'Exode', ch: 28, ref: 'Exodus 28:29', refFr: 'Exode 28, 29', accent: 1, feast: null,
  quote: 'And Aaron shall bear the names of the children of Israel in the rational of judgment upon his breast, when he shall enter into the sanctuary, a memorial before the Lord for ever.',
  fr: 'Aaron portera les noms des enfants d’Israël sur le pectoral du jugement, sur sa poitrine, quand il entrera dans le sanctuaire, en mémorial devant le Seigneur pour toujours.',
  more: ['Le pectoral du jugement est un carré d’un empan, doublé, tissé comme l’éphod. Quatre rangées de trois pierres y sont serties d’or : sardoine, topaze, émeraude ; escarboucle, saphir, jaspe ; ligure, agate, améthyste ; chrysolithe, onyx, béryl, selon les noms de la version latine. Chaque pierre porte le nom d’une tribu. Des chaînettes et des anneaux d’or le lient à l’éphod.',
    'Pas de fête juive attachée à ce passage. Dans le pectoral sont placés les Ourim et Toumim, « doctrine et vérité » dans la version latine (28, 30) ; Rachi explique qu’il s’agissait d’une inscription du Nom divin glissée dans ses plis.'],
  back(P) {
    Lib.sun(P, 800, 130, 26);
    Lib.platform(P, 'y5r2', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
    tzCourtWalls(P);
    tzTentBox(P, 30, 30, 130, 170, 150);
    const I = (a, b, c) => P.I(a, b, c);
    for (const x of [150, 230]) P.box(x - 4, 356, 0, 8, 8, 128, 'r4y5k3', 0.7);
    P.shape([I(148, 360, 40), I(232, 360, 40), I(232, 360, 128), I(148, 360, 128)], 'y8r3', 1.2);
    P.shape([I(154, 360, 46), I(226, 360, 46), I(226, 360, 122), I(154, 360, 122)], 'y6r3b2', 0.7);
    for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) { const q = I(166 + c * 24, 360, 110 - r * 20); P.shape(P.disc(q[0], q[1], 7.5, 10), 'y9r3', 0.5); P.shape(P.disc(q[0], q[1], 5.6, 10), tzStones[r * 3 + c], 0.4); }
    for (const x of [152, 228]) { const q = I(x, 360, 132); P.shape(P.disc(q[0], q[1], 3.5, 8), 'y9r3', 0.5); }
    P.box(120, 400, 0, 90, 44, 34, 'r4y5k2'); for (let i = 0; i < 6; i++) { const c = P.I(132 + i * 12, 420, 34); P.fill(P.disc(c[0], c[1], 3, 6), tzStones[i * 2], {}); }
  },
  chars: [
    ch(LK.tz_aaron, { x: 285, y: 300, face: 1, clip: 'idle', h: 152, hold: { n: 'tz_kg' } }),
    ch(LK.tz_moses, { x: 350, y: 250, face: -1, clip: 'reach', h: 148 }),
    ch(LK.tz_jeweler, { x: 300, y: 440, face: -1, clip: 'kneel', h: 134 }),
    ch(LK.tz_son, { x: 440, y: 390, face: -1, clip: 'idle', h: 140 }),
    ch(LK.tz_son2, { x: 470, y: 300, face: -1, clip: 'lookup', h: 138, t0: 1 })
  ]
},
{
  title: 'Les clochettes et les grenades', book: 'Exode', ch: 28, ref: 'Exodus 28:35', refFr: 'Exode 28, 35', accent: 2, feast: null,
  quote: 'And Aaron shall be vested with it in the office of his ministry, that the sound may be heard, when he goeth in and cometh out of the sanctuary, in the sight of the Lord, and that he may not die.',
  fr: 'Aaron en sera revêtu pour son ministère, afin que le son s’en fasse entendre quand il entre dans le sanctuaire et quand il en sort, devant le Seigneur, et qu’il ne meure pas.',
  more: ['Sous l’éphod, Aaron porte une robe tout entière de violet, avec une ouverture pour la tête bordée d’un ourlet tissé pour qu’elle ne se déchire pas. À son bord inférieur alternent des grenades de violet, de pourpre et d’écarlate et des clochettes d’or : une clochette, une grenade, tout autour. Leur son se fait entendre quand il entre dans le sanctuaire et quand il en sort.',
    'Pas de fête juive attachée à ce passage. Le Talmud (Zeva’him 88b, Arakhin 16a) enseigne que chaque vêtement du grand prêtre expie une faute ; la robe aux clochettes expie la médisance, faute commise par la voix.'],
  back(P) {
    Lib.sun(P, 180, 120, 24); Lib.cloud(P, 780, 130, 150, 34, 'b1');
    Lib.platform(P, 'y5r2', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
    tzCourtWalls(P);
    tzTentBox(P, 20, 60, 160, 340, 190);
    Lib.stones(P, 12, 'y4r3k2', [260, 300, 260, 220]);
  },
  chars: [
    tzBellWalker,
    { depth: t => { const s = charState(tzBellWalker, t); return s.x + s.y + 1; }, draw(P, t) { const s = charState(tzBellWalker, t); if (!s.walking && s.clip !== 'bow') return; const c = P.I(s.x, s.y, 14); for (let k = 0; k < 3; k++) { const u = (t * 1.6 + k / 3) % 1, r = 8 + u * 22; for (const sg of [-1, 1]) P.line([[c[0] + sg * r, c[1] - 14 - r * 0.5], [c[0] + sg * (r + 3), c[1] - 6], [c[0] + sg * r, c[1] + 2 + r * 0.3]], 1.1 * (1 - u), { ink: 0 }); } } },
    ch(LK.tz_son, { x: 330, y: 430, face: -1, clip: 'idle', h: 140 }),
    ch(LK.tz_son2, { x: 400, y: 470, face: -1, clip: 'lookup', h: 138, t0: 1 }),
    ch(LK.isrW, { x: 500, y: 440, face: -1, clip: 'pray', h: 126 }),
    ch(LK.isrM, { x: 500, y: 200, face: -1, clip: 'lookup', h: 136 })
  ]
},
{
  title: 'La lame d’or', book: 'Exode', ch: 28, ref: 'Exodus 28:36', refFr: 'Exode 28, 36', accent: 0, feast: null,
  quote: 'Thou shalt make also a plate of the purest gold:  wherein thou shalt grave with engraver\'s work, Holy to the Lord.',
  fr: 'Tu feras aussi une lame d’or très pur, et tu y graveras, en travail de graveur : Saint au Seigneur.',
  more: ['Une lame d’or pur, gravée comme un sceau des mots « Saint au Seigneur », est attachée par un cordon violet sur le devant de la tiare, au front du grand prêtre. Viennent ensuite la tunique de lin fin, la tiare de lin et la ceinture brodée, puis, pour les fils d’Aaron, des tuniques, des ceintures et des bonnets « pour la gloire et pour la parure ».',
    'Pas de fête juive attachée à ce passage. Le texte précise (28, 38) que la lame, toujours sur le front d’Aaron, porte les fautes commises dans les choses saintes que les enfants d’Israël consacrent, afin qu’elles soient agréées.'],
  back(P) {
    Lib.platform(P, 'y4r3k1', 'y4r3k2', { h: 50, strata: [[0, .5, 'y4r3k2'], [.5, 1, 'y4r3k3']] });
    Lib.walls(P, { l: 'b3y2k1', r: 'b3y2k2', cut: 'y4r3k2' }, { h: 190 });
    const I = (a, b, c) => P.I(a, b, c);
    P.box(160, 170, 0, 150, 50, 40, 'r4y5k2');
    for (const x of [178, 292]) P.box(x - 3, 192, 40, 6, 6, 22, 'r4y5k3', 0.6);
    P.shape([I(172, 195, 52), I(298, 195, 52), I(298, 195, 86), I(172, 195, 86)], 'y9r3', 1.2);
    for (let i = 0; i < 9; i++) { const a = I(184 + i * 12.5, 195, 78), b = I(184 + i * 12.5, 195, 60); P.line([[a[0] - 2, a[1]], [a[0] + 4, a[1] + 2], [b[0] + 3, b[1] - 2], [b[0] - 3, b[1]]], 0.8, { ink: 3 }); }
    P.line([I(172, 195, 70), I(150, 195, 64), I(140, 205, 40)], 1.6, { ink: 2 }); P.line([I(298, 195, 70), I(320, 195, 64), I(330, 205, 40)], 1.6, { ink: 2 });
    P.box(400, 120, 0, 44, 44, 70, 'r4y4k2'); P.cyl(422, 142, 70, 20, 26, 'y1', 1); for (let i = 0; i < 3; i++) P.line(P.ell(422, 142, 76 + i * 7, 20.5, 20.5, 18).slice(0, 10), 0.5);
    P.box(120, 360, 0, 34, 34, 34, 'r4y5k3');
    for (let i = 0; i < 3; i++) P.box(300 + i * 4, 420 - i * 4, i * 8, 60, 34, 8, ['y1', 'y1b1', 'b5r4'][i], 0.7);
  },
  chars: [
    ch(LK.tz_jeweler, { x: 360, y: 240, face: -1, clip: 'hammer', h: 136, hold: { n: 'hammer' } }),
    ch(LK.tz_aaronLinen, { x: 137, y: 377, z: 34, face: 1, clip: 'sit', h: 144, noShadow: 1 }),
    ch(LK.tz_moses, { x: 250, y: 320, face: 1, clip: 'talk', h: 148, hold: { f: 'staffV' } }),
    ch(LK.tz_son, { x: 440, y: 330, face: -1, clip: 'idle', h: 138 })
  ]
},
{
  title: 'L’onction d’Aaron', book: 'Exode', ch: 29, ref: 'Exodus 29:7', refFr: 'Exode 29, 7', accent: 1, feast: null,
  quote: 'And thou shalt pour the oil of unction upon his head:  and by this rite shall he be consecrated.',
  fr: 'Et tu verseras l’huile d’onction sur sa tête : et par ce rite il sera consacré.',
  more: ['Le chapitre 29 règle la consécration, qui dure sept jours. Moïse amène Aaron et ses fils à l’entrée de la tente et les lave avec de l’eau. Il revêt Aaron de la tunique, de la robe, de l’éphod et du pectoral, pose sur sa tête la tiare et la lame sainte, puis verse sur lui l’huile d’onction. Un jeune taureau, deux béliers et une corbeille de pains sans levain sont offerts.',
    'Pas de fête juive attachée à ce passage. Le psaume 133 chante cette onction : « comme l’huile précieuse sur la tête, qui descend sur la barbe, la barbe d’Aaron ».'],
  back(P) {
    Lib.sun(P, 180, 120, 26);
    Lib.platform(P, 'y5r2', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
    tzCourtWalls(P);
    tzTentBox(P, 20, 40, 140, 250, 160);
    P.cyl(240, 110, 0, 26, 24, 'r5y5k3'); P.shape(P.ell(240, 110, 24.5, 20, 20, 16), 'b5y1', 0.6);
    const c = P.I(400, 170, 0); P.shape(Lib.bumpy(P, c[0], c[1] - 10, 24, 12, 7), 'r4y5k2', 0.9); for (let i = 0; i < 4; i++) P.shape(P.disc(c[0] - 10 + i * 7, c[1] - 20 - (i % 2) * 3, 7, 10).map(p => [p[0], c[1] - 20 + (p[1] - c[1] + 20) * 0.4]), 'y6r3', 0.5);
    Lib.stones(P, 10, 'y4r3k2', [260, 360, 240, 160]);
  },
  chars: [
    tzOilAaron, tzOilMoses,
    { depth: 590, draw(P, t) { if (!tzOilMoses.out || !tzOilAaron.out) return; const a = tzOilMoses.out.hN, b = tzOilAaron.out.head; for (let i = 0; i < 4; i++) { const u = (t * 0.9 + i / 4) % 1, x = a[0] + (b[0] - a[0]) * u, y = a[1] + (b[1] - 10 - a[1]) * u * u; P.shape(P.disc(x, y, 2.2, 6).map((p, k) => k === 0 ? [p[0], p[1] - 3] : p), 'y7r2', 0.4); } } },
    ch(LK.tz_son, { x: 390, y: 420, face: -1, clip: 'idle', h: 140 }),
    ch(LK.tz_son2, { x: 430, y: 360, face: -1, clip: 'bow', h: 138 }),
    ch(LK.tz_son, { x: 340, y: 490, face: -1, clip: 'lookup', h: 136, look: Object.assign({}, LK.tz_son, { hair: 'k6r2', sash: 'r6y3' }) }),
    ch(LK.tz_son2, { x: 470, y: 460, face: -1, clip: 'idle', h: 134, t0: 1, look: Object.assign({}, LK.tz_son2, { beard: null, hair: 'k7r2' }) }),
    { beast: 'calf', h: 84, x: 480, y: 240, face: -1 },
    { beast: 'ram', h: 64, x: 505, y: 300, face: -1 }, { beast: 'ram', h: 62, x: 470, y: 150, face: -1 }
  ]
},
{
  title: 'L’agneau perpétuel', book: 'Exode', ch: 29, ref: 'Exodus 29:39', refFr: 'Exode 29, 39', accent: 0, feast: null,
  quote: 'One lamb in the morning, and another in the evening.',
  fr: 'Un agneau le matin, et l’autre le soir.',
  more: ['Sur l’autel des holocaustes on offrira chaque jour, à perpétuité, deux agneaux d’un an : l’un le matin, l’autre au soir, chacun avec un dixième de fleur de farine pétrie dans l’huile d’olive pilée et une libation de vin. C’est à l’entrée de la tente, dit le texte, que Dieu donnera rendez-vous aux enfants d’Israël, et il habitera au milieu d’eux.',
    'Pas de fête juive attachée à ce passage. Pour le Talmud (Berakhot 26b), les prières du matin et de l’après-midi ont été instituées en correspondance avec ces deux sacrifices perpétuels. La haftara de Tetsavé (Ézéchiel 43, 10-27) décrit les mesures et la consécration de l’autel.'],
  back(P) {
    P.halo(150, 330, 170, ['y1', 'y2r1', 'y3r2']); Lib.sun(P, 150, 330, 30); Lib.moon(P, 850, 140, 20);
    Lib.platform(P, 'y5r2', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
    tzCourtWalls(P);
    tzTentBox(P, 20, 20, 110, 160, 150);
    tzAltar(P, 200, 200);
    Lib.stones(P, 12, 'y4r3k2', [340, 340, 180, 180]);
  },
  live(P, t) { const c = P.I(265, 265, 80); Lib.flame(P, c[0] - 16, c[1], 26, 50, t); Lib.flame(P, c[0] + 18, c[1] + 4, 22, 40, t + 1.5); Lib.smoke(P, c[0], c[1] - 50, t, { n: 5, h: 260, r: 22, tn: 'k2b1' }); },
  chars: [
    ch(LK.tz_son, { h: 138, speed: 12, path: [W(520, 440, 1), W(380, 370, 3, 'idle', { f: -1 }), W(520, 440, 0)] }),
    { beast: 'sheep', h: 58, speed: 12, path: [W(490, 450, 1), W(350, 380, 3), W(490, 450, 0)] },
    ch(LK.tz_son2, { x: 360, y: 220, face: -1, clip: 'offer', h: 138, hold: { nTop: 'bread' } }),
    ch(LK.tz_son, { x: 220, y: 380, face: 1, clip: 'offer', h: 136, hold: { nTop: 'cup' }, look: Object.assign({}, LK.tz_son, { hair: 'k6r2' }) }),
    ch(LK.tz_aaron, { x: 370, y: 300, face: -1, clip: 'raise', h: 148, hold: { n: 'tz_kg' } })
  ]
},
{
  title: 'L’autel des parfums', book: 'Exode', ch: 30, ref: 'Exodus 30:7', refFr: 'Exode 30, 7', accent: 2, feast: null,
  quote: 'And Aaron shall burn sweet smelling incense upon it in the morning.  When he shall dress the lamps, he shall burn it:',
  fr: 'Et Aaron fera brûler sur lui un encens odoriférant, le matin. Quand il préparera les lampes, il le fera brûler :',
  more: ['La paracha se clôt sur un dernier objet : l’autel des parfums, d’acacia plaqué d’or, une coudée sur une, haut de deux, avec des cornes et une couronne d’or. Placé devant le voile, face au propitiatoire, il reçoit matin et soir l’encens qu’Aaron fait brûler en préparant les lampes. On n’y offrira aucun encens étranger, ni holocauste, ni oblation, ni libation.',
    'Pas de fête juive attachée à ce passage. Une fois l’an, au jour de Kippour, Aaron fera l’expiation sur ses cornes avec le sang du sacrifice (30, 10). Ce Chabbat tombe le 13 adar I 5787 ; le lendemain est Pourim Katan, le « petit Pourim » des années qui comptent deux mois d’adar.'],
  back(P) {
    tzInner(P);
    tzVeil(P, 170);
    tzTable(P, 320, 45);
    tzMenorah(P, 330, 470, 0, 1.1);
    P.box(206, 246, 0, 48, 48, 8, 'y8r3', 0.7);
    P.box(210, 250, 8, 40, 40, 74, tzGold);
    for (let z = 22; z < 70; z += 16) P.line([P.I(210, 290, z), P.I(250, 290, z), P.I(250, 250, z)], 0.5);
    P.box(207, 247, 82, 46, 46, 5, 'y9r3');
    P.shape([P.I(213, 253, 87), P.I(247, 253, 87), P.I(247, 287, 87), P.I(213, 287, 87)], 'k6r3', 0.6);
    for (const [a, b] of [[208, 248], [244, 248], [208, 284], [244, 284]]) { const c = P.I(a + 4, b + 4, 87); P.shape([[c[0] - 4, c[1]], [c[0] + 4, c[1]], [c[0] + 2, c[1] - 9]], 'y9r3', 0.5); }
    P.box(170, 288, 40, 120, 4, 4, 'y8r3', 0.5);
  },
  live(P, t) { tzMenoFlames(P, 330, 470, 0, 1.1, t); const c = P.I(230, 270, 87); P.fill(Lib.bumpy(P, c[0], c[1] - 2, 12, 4, 5), (t * 2) % 1 < 0.5 ? 'r8y5' : 'r7y7', {}); Lib.smoke(P, c[0], c[1] - 8, t, { n: 6, h: 230, r: 22, sp: 0.18, tn: 'y1b1' }); },
  chars: [
    ch(LK.tz_aaron, { x: 300, y: 285, face: -1, clip: 'offer', h: 150, hold: { n: 'tz_kg', nTop: 'tz_ladle' } }),
    ch(LK.tz_son, { x: 440, y: 470, face: -1, clip: 'reach', h: 138 }),
    ch(LK.tz_son2, { x: 440, y: 230, face: -1, clip: 'bow', h: 136, t0: 1 })
  ]
}
];
