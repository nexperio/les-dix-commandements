/* LES FEMMES ET LE FOYER · feuille ג · Les mitsvot des femmes : bougies, hallah, mikvé, et leurs berakhot */
Object.assign(LK, {
  mtHannah: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k7', robe: 'b5r3', len: 'floor', head: 'veil', ht: 'r4y2', sash: 'y7r2', sleeves: 'long' },
  mtPeninna: { fem: 1, skin: 'y5r4k1', hs: 'long', hair: 'k8', robe: 'r6y4', len: 'floor', trim: 1, head: 'veil', ht: 'y6r2', sash: 'b6', sleeves: 'long' },
  mtEli: { old: 1, skin: 'y5r4', hs: 'fringe', hair: 'k1', beard: 'full', bt: 'k1b1', robe: 'y1k1', trim: 1, sash: 'b6r5', head: 'turban', ht: 'y1b1', sleeves: 'long' },
  mtElkana: { skin: 'y5r4k1', hs: 'short', hair: 'k7', beard: 'long', bt: 'k7', robe: 'b4y3k1', cloak: 'r5y4k2', sash: 'y7', head: 'cloth', ht: 'y2', band: 'k6' },
  mtMother: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k7', robe: 'b6r3', len: 'floor', head: 'veil', ht: 'y2', sash: 'y7r2', sleeves: 'long' },
  mtMother2: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k7r2', robe: 'r5b4', len: 'floor', trim: 1, head: 'veil', ht: 'y1', sash: 'y8r2', sleeves: 'long' },
  mtMother3: { fem: 1, skin: 'y5r4k1', hs: 'long', hair: 'k8', robe: 'b5y3', len: 'floor', head: 'veil', ht: 'r5y5', sash: 'r6', sleeves: 'long' },
  mtGrandma: { fem: 1, old: 1, skin: 'y5r4k1', hs: 'long', hair: 'k2', robe: 'y4r3k2', len: 'floor', head: 'veil', ht: 'b3y1', sash: 'r5', sleeves: 'long' },
  mtFather: { skin: 'y5r4k1', hs: 'short', hair: 'k7', beard: 'short', bt: 'k7', robe: 'k6b2', len: 'ankle', sleeves: 'long', sash: 'y2', head: 'cap', ht: 'k7' },
  mtFather2: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'full', bt: 'k8', robe: 'y1b1', len: 'ankle', sleeves: 'long', sash: 'b5', head: 'cap', ht: 'b6k3' },
  mtGrandpa: { old: 1, skin: 'y5r4', hs: 'fringe', hair: 'k1', beard: 'full', bt: 'k1b1', robe: 'k5b2', len: 'ankle', sleeves: 'long', sash: 'y2', head: 'cap', ht: 'k7' },
  mtTeen: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k6r2', robe: 'y5b5', len: 'floor', sleeves: 'long', sash: 'r5y3' },
  mtGirl: { child: 1, fem: 1, skin: 'y5r4', hs: 'long', hair: 'r5k4', robe: 'r6y3', len: 'ankle', sleeves: 'long', sash: 'y7', feet: 'sandal' },
  mtGirl2: { child: 1, fem: 1, skin: 'y5r4k1', hs: 'long', hair: 'k7', robe: 'b5y2', len: 'ankle', sleeves: 'long', sash: 'r6', feet: 'sandal' },
  mtBoy: { child: 1, skin: 'y5r4', hs: 'curly', hair: 'k7', robe: 'y2b1', len: 'ankle', sleeves: 'long', sash: 'b5', head: 'cap', ht: 'k7', feet: 'sandal' },
  mtBoy2: { child: 1, skin: 'y6r4k1', hs: 'short', hair: 'k8', robe: 'b4y2k1', len: 'knee', sleeves: 'short', sash: 'r5', head: 'cap', ht: 'b6k2', feet: 'sandal' },
  mtBalanit: { fem: 1, skin: 'y5r4k1', hs: 'long', hair: 'k6', robe: 'b3y1k1', len: 'floor', head: 'veil', ht: 'y1b1', sash: 'b5', sleeves: 'long' },
  mtVisitor: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k7', robe: 'b6k3', len: 'floor', head: 'veil', ht: 'r5b4k2', cloak: 'r5b4k2', sash: 'y6', sleeves: 'long' }
});
Object.assign(CLIPS, {
  mtCover: { d: 3.2, k: [{ nU: 34, nL: 136, fU: 30, fL: 140, head: 14, lean: 4, nT: 4, fT: -4 }, { nU: 36, nL: 134, fU: 32, fL: 138, head: 17, lean: 5, nT: 4, fT: -4 }] },
  mtKnead: { d: 1.3, k: [{ nU: 42, nL: 40, fU: 36, fL: 46, lean: 16, head: 14, nT: 6, fT: -6 }, { nU: 62, nL: 16, fU: 56, fL: 20, lean: 22, head: 16, nT: 6, fT: -6 }] },
  mtLay: { d: 4, k: [{ nU: 52, nL: 6, fU: 56, fL: 4, head: 12, lean: 4, nT: 4, fT: -4 }, { nU: 54, nL: 4, fU: 58, fL: 2, head: 15, lean: 5, nT: 4, fT: -4 }] },
  mtBowHead: { d: 3.4, k: [{ lean: 6, head: 22, nU: 8, nL: 30, fU: 4, fL: 34, nT: 3, fT: -3 }, { lean: 8, head: 26, nU: 8, nL: 32, fU: 4, fL: 36, nT: 3, fT: -3 }] },
  mtRead: { d: 4, k: [{ nU: 36, nL: 82, fU: 30, fL: 88, head: 18, lean: 5, nT: 3, fT: -3 }, { nU: 38, nL: 80, fU: 32, fL: 86, head: 21, lean: 6, nT: 3, fT: -3 }] },
  mtSitRead: { d: 4, k: [{ nT: 86, nK: -86, fT: 82, fK: -80, lean: 6, head: 18, nU: 36, nL: 82, fU: 30, fL: 88, hy: 0.3 }, { nT: 86, nK: -86, fT: 82, fK: -80, lean: 8, head: 22, nU: 38, nL: 80, fU: 32, fL: 86, hy: 0.3 }] }
});
/* tresse de pain vue de biais, en coordonnées écran ; dir = axe de la tresse */
const mtBraid = (P, cx, cy, len, tn = 'y7r5k1', lw = 0.7, dir = [0.866, 0.5]) => {
  const n = 6;
  for (let i = 0; i < n; i++) {
    const u = (i + 0.5) / n - 0.5, s = 1 - Math.abs(u) * 0.9, px = cx + dir[0] * u * len, py = cy + dir[1] * u * len + (i % 2 ? -1 : 1) * len * 0.03;
    const rx = len * 0.1 * s + len * 0.035, ry = len * 0.085 * s + len * 0.03;
    P.shape(P.disc(0, 0, 1, 14).map(([a, b]) => [px + a * rx, py + b * ry - ry * 0.5]), i % 2 ? tn : tadd(tn, 'k1'), lw);
    P.line([[px - rx * 0.5, py - ry * 1.05], [px + rx * 0.2, py - ry * 1.25]], lw * 0.9, { ink: 0, lvl: 3 });
  }
};
Object.assign(PROPS2, {
  mtDough(P, A, J, M, h, t, lw, F, u, n, add) { const q = M(add(A.t, u, 0.02)); P.shape(Lib.bumpy(P, q[0], q[1] - h * 0.012, h * 0.028, h * 0.02, 5), 'y2r1', lw * 0.6); },
  mtChallah(P, A, J, M, h, t, lw, F, u, n, add) { const q = M(add(A.t, u, 0.02)); mtBraid(P, q[0], q[1], h * 0.16, 'y7r5k1', lw * 0.5, [1, -0.1]); },
  mtTaper(P, A, J, M, h, t, lw, F, u, n, add) { const a = M(A.t), b = M(add(add(A.t, u, 0.1), [0, -1], 0.08)); P.line([a, b], h * 0.014, { ink: 0, lvl: 2, taper: 0 }); P.line([a, b], lw * 0.4); Lib.flame(P, b[0], b[1], h * 0.03, h * 0.07, t * 1.5, { noKnock: true }); },
  mtTowel(P, A, J, M, h, t, lw, F) { const q = M(J.aN.w); P.shape([[q[0] - h * 0.045, q[1] - h * 0.012], [q[0] + h * 0.045, q[1] - h * 0.012], [q[0] + h * 0.04, q[1] + h * 0.13], [q[0] - h * 0.035, q[1] + h * 0.13]], 'y1b1', lw * 0.7); P.line([[q[0] - h * 0.038, q[1] + h * 0.1], [q[0] + h * 0.04, q[1] + h * 0.1]], lw * 0.9, { ink: 2 }); P.line([[q[0] - h * 0.038, q[1] + h * 0.112], [q[0] + h * 0.04, q[1] + h * 0.112]], lw * 0.6, { ink: 2 }); },
  mtLamp(P, A, J, M, h, t, lw, F, u, n, add) { const q = M(add(A.t, [0, -1], 0.02)); P.halo(q[0], q[1] - h * 0.06, h * 0.16, ['y1', 'y2', 'y3r1']); P.shape([[q[0] - h * 0.04, q[1]], [q[0] + h * 0.045, q[1] - h * 0.01], [q[0] + h * 0.03, q[1] - h * 0.03], [q[0] - h * 0.03, q[1] - h * 0.03]], 'r5y6k2', lw * 0.7); Lib.flame(P, q[0] + h * 0.035, q[1] - h * 0.03, h * 0.03, h * 0.07, t * 1.3, { noKnock: true }); },
  mtBook(P, A, J, M, h, t, lw) {
    const c = [(J.aN.t[0] + J.aF.t[0]) / 2, (J.aN.t[1] + J.aF.t[1]) / 2 - 0.02], q = M(c), w = h * 0.07, e = h * 0.05;
    P.shape([[q[0] - w - 2, q[1] - e * 0.4], [q[0], q[1] - e * 0.1], [q[0] + w + 2, q[1] - e * 0.4], [q[0] + w + 2, q[1] + e * 0.8], [q[0], q[1] + e * 1.1], [q[0] - w - 2, q[1] + e * 0.8]], 'r6b3k2', lw * 0.7);
    for (const s of [-1, 1]) { P.shape([[q[0], q[1] - e * 0.3], [q[0] + s * w, q[1] - e * 0.6], [q[0] + s * w, q[1] + e * 0.6], [q[0], q[1] + e * 0.85]], 'y1', lw * 0.6); for (let i = 0; i < 4; i++) P.line([[q[0] + s * w * 0.2, q[1] - e * 0.25 + i * e * 0.25], [q[0] + s * w * 0.85, q[1] - e * 0.45 + i * e * 0.25]], lw * 0.3); }
  }
});
/* ---------- décors : pièce, fenêtres, table dressée ---------- */
const mtRoom = (P, o) => {
  const L = P.L, H = o.h || 230;
  Lib.platform(P, o.floor || 'y4r3k2', 'y4r3k2', { h: 46, pebbles: false });
  for (let v = 45; v < L; v += 45) P.line([P.I(v, 0, 0), P.I(v, L, 0)], 0.45);
  P.outline([P.I(0, 0, 0), P.I(L, 0, 0), P.I(L, L, 0), P.I(0, L, 0)], 1.2);
  Lib.walls(P, { l: o.wl, r: tadd(o.wl, 'k1'), cut: 'y4r3k2' }, { h: H });
  Lib.wallL(P, 0, 0, L, 30, tadd(o.wl, 'r1k2'), 0.7); Lib.wallR(P, 0, 0, L, 30, tadd(o.wl, 'r1k3'), 0.7);
  Lib.wallL(P, 0, H - 30, L, 9, o.band || 'b5y2', 0.5); Lib.wallR(P, 0, H - 30, L, 9, o.band || 'b5y2', 0.5);
  for (let v = 0; v < L; v += 18) { Lib.wallL(P, v + 4, H - 28, 8, 5, o.band2 || 'y7r2', 0); Lib.wallR(P, v + 4, H - 28, 8, 5, o.band2 || 'y7r2', 0); }
  if (o.rug) { const [x, y, w, d] = o.rug, q = (a, b) => P.I(x + a, y + b, 0.6); P.shape([q(0, 0), q(w, 0), q(w, d), q(0, d)], o.rugTn || 'r6b3k1', 0.9); P.shape([q(10, 10), q(w - 10, 10), q(w - 10, d - 10), q(10, d - 10)], 'y5r3', 0.6); P.shape([q(18, 18), q(w - 18, 18), q(w - 18, d - 18), q(18, d - 18)], o.rugTn || 'r6b3k1', 0.5); for (let i = 1; i < 4; i++) { const c = q(w * i / 4, d / 2); P.fill([[c[0], c[1] - 8], [c[0] + 12, c[1]], [c[0], c[1] + 8], [c[0] - 12, c[1]]], 'b6y2', {}); } for (let i = 0; i <= 12; i++) { P.line([q(w * i / 12, d), q(w * i / 12, d + 6)], 0.5); } }
};
const mtSky = (P, pts, o) => {
  if (o.stars) { const r = rng(o.stars); for (let i = 0; i < 7; i++) { const q = pts(0.1 + r() * 0.8, 0.15 + r() * 0.75); Lib.star(P, q[0], q[1], 2 + r() * 2.5, r() > 0.5 ? 'y7' : 'y4'); } }
  if (o.sun) { const q = pts(0.62, 0.3); P.shape(P.disc(q[0], q[1], o.sun, 20), 'y8r5', 0.6); }
  if (o.moon) { const q = pts(0.4, 0.62); P.shape(P.disc(q[0], q[1], o.moon, 20), 'y4', 0.6); P.fill(P.disc(q[0] - 3, q[1] + 2, o.moon * 0.25, 10), 'y5k1', { noKnock: true }); }
};
const mtWinR = (P, x, z, w, h, sky, o = {}) => {
  Lib.wallR(P, x - 7, z - 7, w + 14, h + 14, 'r4y5k3', 1); Lib.wallR(P, x, z, w, h, sky, 0.8);
  if (o.band) Lib.wallR(P, x, z, w, h * 0.3, o.band, 0);
  mtSky(P, (a, b) => P.I(x + a * w, 0.5, z + (1 - b) * h), o);
  P.line([P.I(x + w / 2, 0.5, z), P.I(x + w / 2, 0.5, z + h)], 1.8); P.line([P.I(x, 0.5, z + h * 0.58), P.I(x + w, 0.5, z + h * 0.58)], 1.4);
  P.box(x - 9, 0.5, z - 11, w + 18, 10, 4, 'r4y5k2', 0.8);
};
const mtWinL = (P, y, z, w, h, sky, o = {}) => {
  Lib.wallL(P, y - 7, z - 7, w + 14, h + 14, 'r4y5k3', 1); Lib.wallL(P, y, z, w, h, sky, 0.8);
  if (o.band) Lib.wallL(P, y, z, w, h * 0.3, o.band, 0);
  mtSky(P, (a, b) => P.I(0.5, y + a * w, z + (1 - b) * h), o);
  P.line([P.I(0.5, y + w / 2, z), P.I(0.5, y + w / 2, z + h)], 1.8); P.line([P.I(0.5, y, z + h * 0.58), P.I(0.5, y + w, z + h * 0.58)], 1.4);
  P.box(0.5, y - 9, z - 11, 10, w + 18, 4, 'r4y5k2', 0.8);
};
const mtDoorL = (P, y, w, h, tn = 'r5y4k3') => { Lib.wallL(P, y - 7, 0, w + 14, h + 8, 'r4y5k2', 1); Lib.wallL(P, y, 0, w, h, tn, 0.9); for (let i = 1; i < 3; i++) P.line([P.I(0.8, y + w * i / 3, 6), P.I(0.8, y + w * i / 3, h - 6)], 0.5); P.box(1, y + w + 1, h * 0.62, 3, 4, 14, 'y6r3k2', 0.5); };
const mtShelfR = (P, x, z, w, seed) => { P.box(x, 1, z, w, 16, 4, 'r4y5k3', 0.8); const r = rng(seed), tn = ['r6b3k2', 'b6k2', 'y6r4k2', 'r5y2k3', 'b5y3k2']; let xx = x + 3; while (xx < x + w - 10) { const bw = 5 + r() * 4, bh = 14 + r() * 8; P.box(xx, 3, z + 4, bw, 11, bh, tn[(r() * 5) | 0], 0.5); xx += bw + 1; } };
const mtChair = (P, x, y, h = 38, side = 'x', tn = 'r4y5k2') => { P.box(x - 12, y - 12, 0, 24, 24, h, tn, 0.8); if (side === 'x') P.box(x + 10, y - 12, h, 4, 24, 38, tn, 0.8); else if (side === 'y') P.box(x - 12, y - 14, h, 24, 4, 38, tn, 0.8); else if (side === 'x0') P.box(x - 14, y - 12, h, 4, 24, 38, tn, 0.8); };
/* objets de table : chacun (P, t, z) */
const mtCandle = (x, y, o = {}) => (P, t, z) => {
  const tn = o.tn || 'b1k3', hh = o.ch || 16;
  P.cyl(x, y, z, 4.5, 2, tn, 0.6, 12); P.cyl(x, y, z + 2, 1.4, 11, tn, 0.5, 8); P.cyl(x, y, z + 13, 3.6, 2.5, tn, 0.6, 12);
  P.cyl(x, y, z + 15.5, 2, hh, o.wax || 'y1', 0.6, 10);
  const f = P.I(x, y, z + 15.5 + hh); P.line([[f[0], f[1]], [f[0], f[1] - 3]], 0.8);
  if (o.lit !== false) { P.halo(f[0], f[1] - 7, 24, ['y1', 'y2', 'y3r1']); Lib.flame(P, f[0], f[1] - 1, 7, 15, t * 1.4 + x * 0.1, { noKnock: true }); }
};
const mtHallot = (x, y, cover = 'b6r3') => (P, t, z) => {
  const q = P.I(x, y, z);
  if (!cover) { mtBraid(P, q[0] - 10, q[1] - 2, 34); mtBraid(P, q[0] + 8, q[1] + 6, 34); return; }
  P.shape(Lib.bumpy(P, q[0], q[1] - 6, 26, 10, 8), cover, 0.9);
  P.line([[q[0] - 20, q[1] - 3], [q[0] + 20, q[1] - 11]], 1.4, { ink: 0 }); P.line([[q[0] - 8, q[1] - 12], [q[0] + 4, q[1] - 2]], 1, { ink: 0 });
  for (let i = 0; i < 6; i++) P.line([[q[0] - 22 + i * 8, q[1] + 3 - i * 0.6], [q[0] - 22 + i * 8, q[1] + 7 - i * 0.6]], 0.6, { ink: 0 });
};
const mtCup = (x, y, tn = 'b1k3') => (P, t, z) => { const b = P.I(x, y, z); P.shape([[b[0] - 5, b[1]], [b[0] + 5, b[1]], [b[0] + 1.5, b[1] - 3], [b[0] + 1.5, b[1] - 8], [b[0] + 6, b[1] - 11], [b[0] + 6, b[1] - 20], [b[0] - 6, b[1] - 20], [b[0] - 6, b[1] - 11], [b[0] - 1.5, b[1] - 8], [b[0] - 1.5, b[1] - 3]], tn, 0.7); P.fill([[b[0] - 5, b[1] - 19], [b[0] + 5, b[1] - 19], [b[0] + 5, b[1] - 15], [b[0] - 5, b[1] - 15]], 'r8b3', {}); };
const mtBottle = (x, y) => (P, t, z) => { P.cyl(x, y, z, 4, 18, 'r7b4k3', 0.7, 10); P.cyl(x, y, z + 18, 1.6, 9, 'r7b4k3', 0.5, 8); P.cyl(x, y, z + 8, 4.2, 6, 'y2', 0.4, 10); };
const mtPlate = (x, y, food) => (P, t, z) => { P.shape(P.ell(x, y, z + 0.4, 9, 9, 16), 'y1b1', 0.6); P.shape(P.ell(x, y, z + 0.6, 5.5, 5.5, 12), 'y1', 0.4); if (food) { const q = P.I(x, y, z); P.shape(Lib.bumpy(P, q[0], q[1] - 1, 5, 3, 5), food, 0.4); } };
const mtOpenBook = (x, y) => (P, t, z) => { const I = (a, b) => P.I(x + a, y + b, z + 0.8); P.shape([I(-12, -8), I(0, -8), I(0, 8), I(-12, 8)], 'y1', 0.6); P.shape([I(0, -8), I(12, -8), I(12, 8), I(0, 8)], 'y1b1', 0.6); for (let i = 0; i < 4; i++) { P.line([I(-10, -5 + i * 3.4), I(-2, -5 + i * 3.4)], 0.3); P.line([I(2, -5 + i * 3.4), I(10, -5 + i * 3.4)], 0.3); } };
const mtOil = (x, y) => (P, t, z) => { const b = P.I(x, y, z); P.halo(b[0], b[1] - 12, 34, ['y1', 'y2', 'y3r1']); P.shape([[b[0] - 9, b[1]], [b[0] + 11, b[1] - 2], [b[0] + 7, b[1] - 6], [b[0] - 7, b[1] - 6]], 'r5y6k2', 0.7); Lib.flame(P, b[0] + 9, b[1] - 5, 7, 14, t * 1.3, { noKnock: true }); };
const mtSeder = (x, y) => (P, t, z) => {
  P.shape(P.ell(x, y, z + 0.5, 19, 19, 24), 'b1k2', 0.8); P.shape(P.ell(x, y, z + 0.7, 15, 15, 20), 'y1b1', 0.4);
  ['y5b6', 'y2r1', 'r5y5k3', 'y6r2', 'y5b5k1', 'r4y6k2'].forEach((tn, i) => { const a = i / 6 * TAU, q = P.I(x + Math.cos(a) * 9, y + Math.sin(a) * 9, z + 1); P.shape(P.disc(q[0], q[1] - 1.5, 3.2, 8), tn, 0.4); });
};
const mtMatsot = (x, y) => (P, t, z) => { for (let i = 0; i < 3; i++) P.box(x - 13 + i, y - 13 - i, z + i * 2, 26, 26, 2, 'y4r2k1', 0.5); const q = P.I(x, y, z + 7); P.shape(Lib.bumpy(P, q[0], q[1] - 2, 22, 8, 7), 'y1', 0.8); P.line([[q[0] - 16, q[1] + 1], [q[0] + 16, q[1] - 4]], 0.9, { ink: 2 }); };
const mtTable = (x, y, w, d, h, items, o = {}) => ({ depth: o.depth || (x + w / 2 + y + d / 2), draw(P, t) {
  for (const [a, b] of [[x + 4, y + 4], [x + w - 10, y + 4], [x + 4, y + d - 10], [x + w - 10, y + d - 10]]) P.box(a, b, 0, 6, 6, h - 4, 'r4y5k3', 0.7);
  P.box(x, y, h - 4, w, d, 4, o.wood || 'r4y5k2', 0.9);
  const cl = o.cloth === undefined ? 'y1' : o.cloth, dr = 12;
  if (cl) {
    P.shape([P.I(x - 2, y - 2, h + 0.3), P.I(x + w + 2, y - 2, h + 0.3), P.I(x + w + 2, y + d + 2, h + 0.3), P.I(x - 2, y + d + 2, h + 0.3)], cl, 0.9);
    P.shape([P.I(x - 2, y + d + 2, h + 0.3), P.I(x + w + 2, y + d + 2, h + 0.3), P.I(x + w + 2, y + d + 2, h - dr), P.I(x - 2, y + d + 2, h - dr)], tadd(cl, 'b1'), 0.8);
    P.shape([P.I(x + w + 2, y - 2, h + 0.3), P.I(x + w + 2, y + d + 2, h + 0.3), P.I(x + w + 2, y + d + 2, h - dr), P.I(x + w + 2, y - 2, h - dr)], tadd(cl, 'b1k1'), 0.8);
    if (o.hem) { P.line([P.I(x - 2, y + d + 2, h - dr + 3), P.I(x + w + 2, y + d + 2, h - dr + 3)], 1, { ink: o.hem }); P.line([P.I(x + w + 2, y - 2, h - dr + 3), P.I(x + w + 2, y + d + 2, h - dr + 3)], 1, { ink: o.hem }); }
  }
  for (const it of items) it(P, t, h + 0.5);
} });
/* bâtisse simple aux fenêtres éclairées */
const mtHouse = (P, x, y, w, d, h, tn, lit = 'y7r3') => {
  P.box(x, y, 0, w, d, h, tn); P.box(x - 3, y - 3, h, w + 6, d + 6, 6, tadd(tn, 'k1'), 0.8);
  for (let i = 0; i < Math.floor(w / 36); i++) { const a = x + 12 + i * 36; P.shape([P.I(a, y + d + 0.5, h * 0.45), P.I(a + 16, y + d + 0.5, h * 0.45), P.I(a + 16, y + d + 0.5, h * 0.75), P.I(a, y + d + 0.5, h * 0.75)], lit, 0.8); P.line([P.I(a + 8, y + d + 0.5, h * 0.45), P.I(a + 8, y + d + 0.5, h * 0.75)], 0.6); }
  for (let i = 0; i < Math.floor(d / 36); i++) { const b = y + 12 + i * 36; P.shape([P.I(x + w + 0.5, b, h * 0.45), P.I(x + w + 0.5, b + 16, h * 0.45), P.I(x + w + 0.5, b + 16, h * 0.75), P.I(x + w + 0.5, b, h * 0.75)], lit, 0.8); }
};
const SHEET = { title: 'Les mitsvot des femmes · Bougies, hallah, mikvé', sub: 'Les femmes et le foyer · feuille ג · les gestes du foyer et leurs berakhot' };
const SCENES = [
{
  title: 'La prière du cœur', book: '1 Samuel', ch: 1, ref: '1 Kings 1:13', refFr: '1 Samuel 1, 13', accent: 2, feast: 'Rosh Hashana',
  quote: 'Now Anna spoke in her heart, and only her lips moved, but her voice was not heard at all.',
  fr: 'Or Hanna parlait dans son cœur ; seules ses lèvres remuaient, et l’on n’entendait point sa voix.',
  more: ['Hanna, épouse d’Elkana, n’a pas d’enfant, et Peninna, l’autre femme, la blesse chaque année quand la famille monte à Chilo. Après le repas, Hanna se lève, pleure et prie devant l’Éternel ; elle fait le vœu que, si un fils lui est donné, il sera consacré à Dieu. Le prêtre Éli, assis près du montant de la porte du sanctuaire, voit ses lèvres remuer sans entendre sa voix et la croit ivre. « J’épanche mon âme devant l’Éternel », répond-elle. Éli la bénit ; Samuel naîtra.',
    'Correspondance : <b>Rosh Hashana</b>. L’histoire de Hanna est la haftara du premier jour de la fête. Le Talmud (Berakhot 31a) en tire les règles de la prière : « elle parlait dans son cœur », la prière demande l’intention ; « ses lèvres seules remuaient », on articule les mots ; « sa voix ne s’entendait pas », on prie à voix basse. Chaque journée de prière s’ouvre au réveil par « Moda ani ».'],
  brakha: [
    { label: 'Au réveil', he: 'מוֹדָה אֲנִי לְפָנֶיךָ, מֶלֶךְ חַי וְקַיָּם, שֶׁהֶחֱזַרְתָּ בִּי נִשְׁמָתִי בְּחֶמְלָה, רַבָּה אֱמוּנָתֶךָ.', ph: 'Moda ani léfanékha, Mélekh \'haï vékayam, chéhé\'hézarta bi nichmati bé\'hemla, raba émounatékha.', fr: 'Je Te rends grâce, Roi vivant et éternel, de m\'avoir rendu mon âme avec bonté ; grande est Ta fidélité.', note: 'Au féminin « moda ani », au masculin « modé ani ». On la dit dès le réveil, avant même de se laver les mains.' }
  ],
  back(P) {
    Lib.sun(P, 810, 130, 26); Lib.cloud(P, 240, 140, 170, 30, 'b1'); Lib.cloud(P, 700, 250, 120, 24, 'b1');
    Lib.platform(P, 'y4r2k1', 'y4r3k2');
    P.box(0, 0, 0, 18, 540, 36, 'y3r2k2'); P.box(18, 0, 0, 522, 18, 36, 'y3r2k2');
    for (let i = 0; i < 18; i++) { P.box(2, 6 + i * 30, 36, 14, 14, 8, 'y3r2k2', 0.6); P.box(24 + i * 29, 2, 36, 14, 14, 8, 'y3r2k2', 0.6); }
    P.box(40, 40, 0, 230, 140, 82, 'y3r2k1');
    for (let z = 16; z < 82; z += 16) { P.line([P.I(40, 180, z), P.I(270, 180, z)], 0.5); P.line([P.I(270, 40, z), P.I(270, 180, z)], 0.5); }
    for (let i = 0; i < 9; i++) P.line([P.I(52 + i * 25, 180, 16 * ((i % 4) + 1)), P.I(52 + i * 25, 180, 16 * ((i % 4) + 1) + 16)], 0.5);
    P.shape([P.I(32, 188, 82), P.I(278, 188, 82), P.I(278, 110, 140), P.I(32, 110, 140)], 'b5r3', 1.1);
    P.shape([P.I(278, 32, 82), P.I(278, 188, 82), P.I(278, 110, 140)], 'b5r3k2', 1.1);
    for (let i = 1; i < 8; i++) P.line([P.I(32 + i * 31, 188, 82), P.I(32 + i * 31, 110, 140)], 1.6, { ink: i % 2 ? 1 : 0 });
    P.line([P.I(32, 184, 86), P.I(278, 184, 86)], 2, { ink: 0 });
    P.shape([P.I(125, 180.5, 0), P.I(178, 180.5, 0), P.I(178, 180.5, 64), P.I(125, 180.5, 64)], 'k7r2', 1);
    P.shape([P.I(125, 180.8, 30), P.I(178, 180.8, 30), P.I(178, 180.8, 64), P.I(125, 180.8, 64)], 'b6r5', 0.8);
    for (let i = 1; i < 5; i++) P.line([P.I(125 + i * 10.6, 181, 64), P.I(125 + i * 10.6, 181, 32)], 0.5);
    P.box(117, 180, 0, 8, 10, 72, 'y4r3k2'); P.box(178, 180, 0, 8, 10, 72, 'y4r3k2'); P.box(113, 180, 70, 77, 12, 8, 'y4r3k3');
    P.box(200, 205, 0, 26, 24, 40, 'r4y5k2');
    Lib.altar(P, 400, 80, 64, 54, 40);
    Lib.mound(P, 470, 470, 60, 30, 'y4r3k1');
    P.box(458, 448, 0, 24, 24, 36, 'r5y4k2', 0.8); P.box(508, 398, 0, 24, 24, 24, 'r5y4k2', 0.8);
    for (const [x, y, hh] of [[240, 470, 150], [40, 470, 140], [110, 300, 120]]) Lib.tree(P, x, y, 0, { h: hh, r: hh * 0.28, can: 'y4b5k2', trunk: 'r5y4k4' });
    P.shape([P.I(410, 380, 0.5), P.I(500, 380, 0.5), P.I(500, 440, 0.5), P.I(410, 440, 0.5)], 'r5y3k1', 0.8);
    for (let i = 0; i < 3; i++) { const c = P.I(430 + i * 25, 400, 0.6); P.shape(P.disc(c[0], c[1] - 2, 6, 10), ['y7r4', 'y2', 'r7y4'][i], 0.5); }
    Lib.stones(P, 18, 'y3r2k3', [280, 200, 240, 150]);
  },
  live(P, t) { const a = P.I(432, 107, 40); Lib.flame(P, a[0], a[1], 34, 46, t); Lib.smoke(P, a[0], a[1] - 30, t, { n: 5, h: 170, r: 18 }); },
  chars: [
    ch(LK.mtHannah, { x: 300, y: 300, face: -1, clip: 'pray', h: 134 }),
    ch(LK.mtEli, { x: 213, y: 217, face: 1, clip: 'sit', h: 138 }),
    ch(LK.mtElkana, { x: 400, y: 460, face: 1, clip: 'talk', h: 144 }),
    ch(LK.mtPeninna, { x: 470, y: 460, face: -1, clip: 'sit', h: 130 }),
    ch(LK.childG, { x: 520, y: 410, face: -1, clip: 'eat', h: 88 }),
    ch(LK.isrM, { h: 138, over: 'carry', hold: { nTop: 'lamb' }, speed: 20, path: [W(520, 300, 1), W(430, 160, 3, 'offer'), W(520, 300, 0)] })
  ]
},
{
  title: 'La hallah', book: 'Nombres', ch: 15, ref: 'Numbers 15:21', refFr: 'Nombres 15, 21', accent: 0, feast: null,
  quote: 'So also shall you give firstfruits of your dough to the Lord.',
  fr: 'De même, vous donnerez au Seigneur les prémices de votre pâte.',
  more: ['Quand vous mangerez du pain du pays, dit la Torah, vous en prélèverez une part pour l’Éternel : les prémices de votre pâte. Ce prélèvement s’appelle la hallah ; il revenait au prêtre. On pétrit, on dit la bénédiction, on détache un morceau et l’on déclare « Voici la hallah ». Faute de pouvoir le donner aujourd’hui au cohen, on le brûle enveloppé. Le nom est passé aux pains tressés du Chabbat.',
    'Pas de fête juive attachée à ce passage. La Michna (Chabbat 2, 6) nomme ensemble trois mitsvot confiées aux femmes : la pureté familiale, la hallah et l’allumage de la lumière du Chabbat. Rachi (sur Genèse 24, 67) rapporte qu’une bénédiction reposait sur la pâte de Sarah, et qu’elle revint quand Rébecca entra dans sa tente.'],
  brakha: [
    { label: 'Avant le prélèvement', he: 'בָּרוּךְ אַתָּה ה׳ אֱלֹקֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ לְהַפְרִישׁ חַלָּה.', ph: 'Baroukh Ata Adonaï, Élohénou Mélekh haolam, achère kidéchanou bémitsvotav vétsivanou léhafrich \'hala.', fr: 'Béni sois-Tu, Éternel notre Dieu, Roi du monde, qui nous as sanctifiés par Tes commandements et nous as ordonné de prélever la hallah.', note: 'Certains ajoutent « min haissa » (de la pâte). La bénédiction se dit quand la pâte contient assez de farine, environ 1,2 à 1,7 kg selon les avis : on se renseigne auprès de son rav.' },
    { label: 'En prélevant', he: 'הֲרֵי זוֹ חַלָּה.', ph: 'Haré zo \'hala.', fr: 'Voici, ceci est la hallah.', note: 'On prélève un morceau gros comme une olive environ ; puisqu\'on ne peut plus le donner au prêtre, on le brûle enveloppé.' }
  ],
  back(P) {
    mtRoom(P, { wl: 'y3r2', band: 'b5y2', h: 220 });
    mtWinR(P, 300, 95, 80, 70, 'b3y1', { sun: 9 });
    mtShelfR(P, 130, 150, 130, 21);
    for (const [x, s, tn] of [[150, 0.9, 'r5y6k1'], [185, 1.1, 'b5y3'], [225, 0.8, 'r5y6k2']]) Lib.jar(P, x, 8, 154, s, tn);
    P.box(390, 2, 0, 130, 44, 52, 'r4y5k2'); P.box(386, 0, 52, 138, 48, 4, 'r4y5k3', 0.8);
    for (let i = 0; i < 3; i++) { const q = P.I(410 + i * 38, 24, 56); mtBraid(P, q[0], q[1], 36); }
    P.box(16, 40, 0, 96, 100, 60, 'r4y4k2');
    P.box(46, 50, 60, 26, 26, 160, 'r4y4k3');
    { const c = P.I(64, 90, 60), pts = []; for (let i = 0; i <= 16; i++) { const a = Math.PI * i / 16; pts.push([c[0] + Math.cos(a) * 58, c[1] - Math.sin(a) * 44]); } P.shape(pts, 'r5y4k2', 1.1); P.line([[c[0] - 40, c[1] - 20], [c[0] - 10, c[1] - 38]], 0.6); }
    { const pts = []; for (let i = 0; i <= 10; i++) { const a = Math.PI * i / 10; pts.push(P.I(64 + Math.cos(a) * 24, 140.5, 6 + Math.sin(a) * 36)); } P.shape(pts, 'k8r3', 1); }
    for (let i = 0; i < 5; i++) { const q = P.I(24 + (i % 3) * 22, 172 + (i > 2 ? 12 : 0), i > 2 ? 12 : 0); P.line([[q[0] - 16, q[1] - 5], [q[0] + 16, q[1] + 5]], 7, { ink: 3, lvl: 5, taper: 0 }); P.line([[q[0] - 16, q[1] - 5], [q[0] + 16, q[1] + 5]], 3, { ink: 1, lvl: 4, taper: 0 }); }
    { const q = P.I(160, 40, 0); P.shape(smooth([[q[0] - 20, q[1]], [q[0] - 22, q[1] - 30], [q[0] - 10, q[1] - 44], [q[0] + 10, q[1] - 44], [q[0] + 22, q[1] - 30], [q[0] + 20, q[1]]], 2), 'y2r1k1', 1); P.line([[q[0] - 9, q[1] - 40], [q[0] + 9, q[1] - 40]], 1.4); }
    for (let i = 0; i < 4; i++) { const c = P.I(1, 200 + i * 34, 150); P.line([[c[0], c[1] - 18], [c[0], c[1] - 8]], 0.6); P.shape(P.disc(c[0], c[1], 9, 14), 'r6y5k2', 0.7); }
  },
  live(P, t) { const a = P.I(64, 141, 6); Lib.flame(P, a[0], a[1], 34, 32, t); Lib.smoke(P, P.I(59, 63, 220)[0], P.I(59, 63, 220)[1], t, { n: 3, h: 90, r: 12 }); },
  chars: [
    mtTable(220, 200, 150, 90, 44, [
      (P, t, z) => { const q = P.I(255, 235, z); P.shape(Lib.bumpy(P, q[0], q[1] - 7, 26, 12, 7), 'y2r1', 0.9); P.line([[q[0] - 10, q[1] - 12], [q[0] + 6, q[1] - 8]], 0.5); },
      (P, t, z) => { P.cyl(335, 225, z, 13, 9, 'r5y5k2', 0.8, 16); P.shape(P.ell(335, 225, z + 9.3, 10, 10, 14), 'y1', 0.5); },
      (P, t, z) => { P.box(290, 255, z, 56, 26, 2, 'r4y5k3', 0.6); for (const x of [300, 318, 336]) { const q = P.I(x, 268, z + 2); mtBraid(P, q[0], q[1], 26, 'y3r1', 0.5, [0.5, 0.87]); } },
      (P, t, z) => { const r = rng(4); for (let i = 0; i < 22; i++) { const q = P.I(230 + r() * 120, 212 + r() * 70, z); P.fill(P.disc(q[0], q[1], 1.2, 5), 'y1', {}); } }
    ], { cloth: null }),
    ch(LK.mtMother, { h: 136, hold: { n: 'mtDough' }, speed: 10, path: [W(300, 330, 4.5, 'mtKnead', { f: 1 }), W(304, 334, 3, 'raise', { f: 1 }), W(300, 330, 0)] }),
    ch(LK.mtGirl, { x: 405, y: 300, face: -1, clip: 'mtKnead', h: 96, t0: 0.6 }),
    ch(LK.mtGrandma, { x: 180, y: 310, face: 1, clip: 'offer', h: 124, hold: { n: 'mtChallah' } }),
    ch(LK.mtBoy2, { h: 90, over: 'carry', hold: { n: 'plank' }, speed: 26, path: [W(470, 480, 2), W(100, 215, 2, 'kneel', { f: -1 }), W(470, 480, 0)] })
  ]
},
{
  title: 'Les bougies du Chabbat', book: 'Proverbes', ch: 6, ref: 'Proverbs 6:23', refFr: 'Proverbes 6, 23', accent: 1, feast: null,
  quote: 'Because the commandment is a lamp, and the law a light',
  fr: 'Car le commandement est une lampe, et la loi une lumière',
  more: ['Le vendredi, avant le coucher du soleil, la femme de la maison allume au moins deux bougies ; la tradition les rattache aux deux formulations du commandement, « souviens-toi » (Exode 20, 8) et « garde » (Deutéronome 5, 12). Selon l’usage ashkénaze, elle allume, se couvre les yeux, dit la bénédiction, puis découvre la lumière. Dans certaines familles, les filles allument aussi leur propre bougie. La table est dressée, les pains sont couverts, les hommes partent pour la synagogue.',
    'Pas de fête juive attachée à ce passage. Rachi (sur Genèse 24, 67) rapporte que, du vivant de Sarah, une lampe brûlait dans sa tente d’une veille de Chabbat à l’autre ; elle s’éteignit à sa mort et se ralluma quand Rébecca entra dans la tente. Le verset des Proverbes rapproche la mitsva de la lampe, et la Torah de la lumière.'],
  brakha: [
    { label: 'Allumage', he: 'בָּרוּךְ אַתָּה ה׳ אֱלֹקֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ לְהַדְלִיק נֵר שֶׁל שַׁבָּת.', ph: 'Baroukh Ata Adonaï, Élohénou Mélekh haolam, achère kidéchanou bémitsvotav vétsivanou léhadlik nère chel Chabbat.', fr: 'Béni sois-Tu, Éternel notre Dieu, Roi du monde, qui nous as sanctifiés par Tes commandements et nous as ordonné d\'allumer la lumière du Chabbat.', note: 'Avant le coucher du soleil, à l\'heure du calendrier local. Usage ashkénaze : on allume, on se couvre les yeux, puis on bénit ; beaucoup de Séfarades bénissent avant d\'allumer. À l\'écrit, le Nom est abrégé ; on prononce Adonaï, Élohénou.' }
  ],
  back(P) {
    mtRoom(P, { wl: 'y2r2b1', band: 'b5y2', h: 230, rug: [140, 320, 300, 150] });
    mtWinR(P, 340, 85, 90, 80, 'r3y5', { band: 'r5y6', sun: 12 });
    mtShelfR(P, 90, 150, 170, 31);
    mtDoorL(P, 360, 70, 132);
    P.box(16, 120, 0, 50, 140, 52, 'r4y5k2'); P.box(14, 118, 52, 54, 144, 4, 'r4y5k3', 0.8);
    Lib.jar(P, 40, 160, 56, 1.1, 'b5y3'); { const q = P.I(40, 160, 80); for (let i = 0; i < 5; i++) P.shape(Lib.bumpy(P, q[0] - 12 + i * 6, q[1] - 6 - (i % 2) * 8, 6, 5, 5), ['r7y2', 'y8r2', 'r6b3'][i % 3], 0.5); }
    P.cyl(40, 220, 56, 7, 12, 'b5k2', 0.6, 12);
    mtChair(P, 230, 175, 36, 'y'); mtChair(P, 300, 175, 36, 'y'); mtChair(P, 395, 245, 36, 'x');
  },
  chars: [
    mtTable(190, 190, 170, 100, 46, [
      mtCandle(207, 272), mtCandle(226, 276), mtCandle(262, 280, { tn: 'y6r2k1', ch: 12 }),
      mtHallot(300, 225), mtCup(335, 210), mtBottle(352, 200), mtPlate(215, 215), mtPlate(250, 210), mtPlate(345, 262)
    ], { hem: 2 }),
    ch(LK.mtMother2, { x: 212, y: 335, face: 1, clip: 'mtCover', h: 136 }),
    ch(LK.mtTeen, { x: 275, y: 340, face: 1, clip: 'mtCover', h: 124, t0: 1.2 }),
    ch(LK.mtGirl2, { x: 160, y: 365, face: 1, clip: 'lookup', h: 86 }),
    ch(LK.mtFather, { h: 142, speed: 22, path: [W(460, 440, 4, 'wave', { f: -1 }), W(40, 395, 0.4), W(460, 440, 0, null, { jump: 1 })] }),
    ch(LK.mtBoy, { h: 92, speed: 22, t0: -1.2, path: [W(480, 470, 4, 'idle', { f: -1 }), W(40, 405, 0.4), W(480, 470, 0, null, { jump: 1 })] })
  ]
},
{
  title: 'Échet ‘haïl, le vendredi soir', book: 'Proverbes', ch: 31, ref: 'Proverbs 31:10', refFr: 'Proverbes 31, 10', accent: 0, feast: null,
  quote: 'Who shall find a valiant woman?  far, and from the uttermost coasts is the price of her.',
  fr: 'Qui trouvera une femme vaillante ? Son prix vient de loin, des rivages les plus reculés.',
  more: ['Au retour de la synagogue, on chante « Chalom alékhem » pour accueillir les anges du Chabbat, puis « Échet ‘haïl ». Autour de la table, le mari et les enfants chantent pour la femme de la maison les vingt-deux versets qui closent le livre des Proverbes : la femme vaillante qui se lève avant l’aube, veille sur les siens, ouvre la main au pauvre, parle avec sagesse, et que ses enfants se lèvent pour dire heureuse.',
    'Pas de fête juive attachée à ce passage. Le poème est un acrostiche : chaque verset commence par une lettre de l’alphabet hébreu, d’aleph à tav. Il est suivi du kiddouch sur la coupe de vin, puis de la bénédiction du pain sur les deux hallot découvertes.'],
  brakha: [
    { label: 'Le chant', he: 'אֵשֶׁת חַיִל מִי יִמְצָא, וְרָחֹק מִפְּנִינִים מִכְרָהּ.', ph: 'Échet \'haïl mi yimtsa, véra\'hok mipéninim mikhra.', fr: 'Une femme vaillante, qui la trouvera ? Son prix dépasse de loin celui des perles.', note: 'Premier des vingt-deux versets de Proverbes 31, 10 à 31, un par lettre de l\'alphabet, chantés le vendredi soir avant le kiddouch.' }
  ],
  back(P) {
    mtRoom(P, { wl: 'b2y2k1', band: 'y6r3', band2: 'b6', h: 230, rug: [150, 310, 320, 150], rugTn: 'b6r2k1' });
    mtWinR(P, 360, 85, 90, 80, 'b7k3', { stars: 5 });
    mtWinL(P, 90, 85, 80, 80, 'b7k3', { stars: 9, moon: 7 });
    mtShelfR(P, 110, 150, 200, 41);
    P.box(16, 260, 0, 44, 150, 60, 'r4y5k2'); for (let i = 0; i < 3; i++) Lib.jar(P, 36, 290 + i * 45, 60, 0.9, ['r5y6k1', 'b5y3', 'y6r3k1'][i]);
    mtChair(P, 410, 240, 40, 'x'); mtChair(P, 150, 215, 38, 'x0');
    mtChair(P, 240, 165, 36, 'y'); mtChair(P, 320, 165, 36, 'y');
  },
  chars: [
    mtTable(175, 180, 200, 110, 46, [
      mtCandle(192, 196, { ch: 9 }), mtCandle(210, 194, { ch: 9 }),
      mtHallot(300, 215), mtCup(330, 268), mtBottle(352, 200), mtPlate(230, 210, 'y5b5'), mtPlate(265, 272, 'r5y5'), mtPlate(360, 240), mtPlate(210, 262, 'y5b5')
    ], { hem: 1 }),
    ch(LK.mtMother, { x: 410, y: 240, face: -1, clip: 'sit', h: 132, look: LK.mtMother2 }),
    ch(LK.mtGrandpa, { x: 150, y: 215, face: 1, clip: 'sit', h: 132 }),
    ch(LK.mtFather, { x: 300, y: 335, face: 1, clip: 'sing', h: 142 }),
    ch(LK.mtBoy, { x: 230, y: 330, face: 1, clip: 'sing', h: 92, t0: 0.7 }),
    ch(LK.mtGirl, { x: 360, y: 335, face: 1, clip: 'sing', h: 90, t0: 1.3 }),
    ch(LK.mtTeen, { x: 440, y: 360, face: -1, clip: 'sing', h: 122, t0: 0.3 })
  ]
},
{
  title: 'Bénir ses enfants', book: 'Ruth', ch: 4, ref: 'Ruth 4:11', refFr: 'Ruth 4, 11', accent: 2, feast: 'Chavouot',
  quote: 'The Lord make this woman who cometh into thy house, like Rachel, and Lia, who built up the house of Israel',
  fr: 'Que le Seigneur rende cette femme qui entre dans ta maison semblable à Rachel et à Léa, qui ont bâti la maison d’Israël',
  more: ['À la porte de Bethléem, le peuple et les anciens, témoins du rachat, bénissent Boaz pour la femme qui entre dans sa maison, Ruth la Moabite : qu’elle soit comme Rachel et Léa, qui ont bâti la maison d’Israël. Le vendredi soir, avant le kiddouch, les parents reprennent ce geste : ils posent les mains sur la tête de chaque enfant et le bénissent, les filles au nom des quatre mères, les fils au nom d’Éphraïm et Manassé (Genèse 48, 20).',
    'Correspondance : <b>Chavouot</b>. Le livre de Ruth est lu à la synagogue le jour de Chavouot. Ruth devient l’arrière-grand-mère du roi David, dont la tradition place la naissance et la mort à Chavouot. Après le nom des ancêtres, les parents ajoutent la bénédiction des prêtres.'],
  brakha: [
    { label: 'Pour une fille', he: 'יְשִׂמֵךְ אֱלֹקִים כְּשָׂרָה, רִבְקָה, רָחֵל וְלֵאָה.', ph: 'Yéssimèkh Élohim kéSarah, Rivka, Ra\'hel véLéa.', fr: 'Que Dieu te rende semblable à Sarah, Rébecca, Rachel et Léa.', note: 'Pour un garçon : « Yéssimkha Élohim kÉfraïm vékhiMénaché », que Dieu te rende semblable à Éphraïm et Manassé (Genèse 48, 20).' },
    { label: 'Puis, pour tous', he: 'יְבָרֶכְךָ ה׳ וְיִשְׁמְרֶךָ. יָאֵר ה׳ פָּנָיו אֵלֶיךָ וִיחֻנֶּךָּ. יִשָּׂא ה׳ פָּנָיו אֵלֶיךָ וְיָשֵׂם לְךָ שָׁלוֹם.', ph: 'Yévarékhékha Adonaï véyichmérékha. Yaèr Adonaï panav élékha vi\'hounéka. Yissa Adonaï panav élékha véyassèm lékha chalom.', fr: 'Que l\'Éternel te bénisse et te garde. Que l\'Éternel fasse rayonner Sa face vers toi et te soit favorable. Que l\'Éternel tourne Sa face vers toi et te donne la paix.', note: 'La bénédiction des prêtres (Nombres 6, 24 à 26), dite par les parents le vendredi soir avant le kiddouch.' }
  ],
  back(P) {
    mtRoom(P, { wl: 'y3b1k1', band: 'r5y4', band2: 'b5y2', h: 230, rug: [120, 300, 320, 160], rugTn: 'r5y4k2' });
    mtWinL(P, 60, 85, 80, 80, 'b7k3', { stars: 12, moon: 8 });
    mtWinR(P, 420, 85, 70, 80, 'b7k3', { stars: 3 });
    mtShelfR(P, 150, 150, 200, 51);
    mtChair(P, 230, 95, 36, 'y'); mtChair(P, 310, 95, 36, 'y');
    P.box(16, 300, 0, 40, 140, 56, 'r4y5k2'); P.cyl(36, 330, 56, 6, 10, 'y6r3k1', 0.6, 12); P.cyl(36, 400, 56, 8, 14, 'b5y3', 0.6, 12);
  },
  chars: [
    mtTable(200, 110, 190, 90, 46, [
      mtCandle(215, 185, { ch: 12 }), mtCandle(233, 188, { ch: 12 }),
      mtHallot(300, 140), mtCup(345, 175), mtBottle(365, 130), mtPlate(255, 180), mtPlate(290, 185)
    ], { hem: 2 }),
    ch(LK.mtFather2, { x: 165, y: 350, face: 1, clip: 'mtLay', h: 142, dz: 80 }),
    ch(LK.mtBoy, { x: 214, y: 350, face: -1, clip: 'mtBowHead', h: 104 }),
    ch(LK.mtMother3, { x: 330, y: 390, face: 1, clip: 'mtLay', h: 134, dz: 80, t0: 1 }),
    ch(LK.mtGirl, { x: 376, y: 390, face: -1, clip: 'mtBowHead', h: 100, t0: 0.5 }),
    ch(LK.mtGirl2, { x: 440, y: 300, face: -1, clip: 'idle', h: 80 }),
    ch(LK.mtGrandma, { x: 110, y: 250, face: 1, clip: 'cradle', h: 124, hold: { n: 'baby' } })
  ]
},
{
  title: 'Les bougies de fête', book: 'Lévitique', ch: 23, ref: 'Leviticus 23:4', refFr: 'Lévitique 23, 4', accent: 1, feast: 'Pessah',
  quote: 'These also are the holy days of the Lord, which you must celebrate in their seasons.',
  fr: 'Voici aussi les jours saints du Seigneur, que vous devez célébrer en leur temps.',
  more: ['Le chapitre 23 du Lévitique énumère les temps fixés par Dieu : le Chabbat, Pessah et les pains azymes, l’omer, Chavouot, le jour de la sonnerie, Kippour et Souccot. À la veille de chaque fête, comme le vendredi, la femme allume les bougies et dit la bénédiction du Yom Tov, suivie le premier soir de « Chéhé’héyanou ». Une fois la fête commencée, on ne crée pas de feu : on prend la flamme d’une lumière déjà allumée.',
    'Correspondance : <b>Pessah</b>. Ce chapitre est lu à la synagogue le premier jour de Souccot et, hors d’Israël, le deuxième jour de Pessah. Ici, le soir du séder : sur la table, le plateau, les matsot couvertes, les coupes pour les quatre verres de vin, un coussin pour s’accouder ; derrière la fenêtre monte la pleine lune du 15 Nissan.'],
  brakha: [
    { label: 'Allumage', he: 'בָּרוּךְ אַתָּה ה׳ אֱלֹקֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ לְהַדְלִיק נֵר שֶׁל יוֹם טוֹב.', ph: 'Baroukh Ata Adonaï, Élohénou Mélekh haolam, achère kidéchanou bémitsvotav vétsivanou léhadlik nère chel Yom Tov.', fr: 'Béni sois-Tu, Éternel notre Dieu, Roi du monde, qui nous as sanctifiés par Tes commandements et nous as ordonné d\'allumer la lumière du jour de fête.', note: 'Si la fête tombe un vendredi soir : « chel Chabbat véchel Yom Tov ». À Yom Kippour : « chel Yom Hakippourim ». Le jour de fête, on allume à partir d\'une flamme déjà allumée.' },
    { label: 'Le premier soir', he: 'בָּרוּךְ אַתָּה ה׳ אֱלֹקֵינוּ מֶלֶךְ הָעוֹלָם, שֶׁהֶחֱיָנוּ וְקִיְּמָנוּ וְהִגִּיעָנוּ לַזְּמַן הַזֶּה.', ph: 'Baroukh Ata Adonaï, Élohénou Mélekh haolam, chéhé\'héyanou vékiyémanou véhiguianou lazmane hazé.', fr: 'Béni sois-Tu, Éternel notre Dieu, Roi du monde, qui nous as fait vivre, nous as maintenus et nous as fait parvenir jusqu\'à ce moment.', note: 'Beaucoup de femmes la disent à l\'allumage ; dans d\'autres communautés, on l\'entend au kiddouch. Pas le septième soir de Pessah.' }
  ],
  back(P) {
    mtRoom(P, { wl: 'r2y3k1', band: 'b6', band2: 'y7r3', h: 230, rug: [150, 330, 330, 150], rugTn: 'b5r4k1' });
    mtWinR(P, 380, 85, 90, 80, 'b5r2k1', { band: 'r3y3', moon: 11, stars: 6 });
    mtShelfR(P, 110, 150, 180, 61);
    P.box(16, 60, 0, 50, 130, 52, 'r4y5k2'); P.box(14, 58, 52, 54, 134, 4, 'r4y5k3', 0.8);
    P.cyl(40, 100, 56, 6, 16, 'b1k1', 0.7, 12); P.cyl(40, 150, 56, 7, 20, 'b5y3', 0.6, 12);
    mtChair(P, 396, 255, 40, 'x', 'r5y4k2'); { const q = P.I(396, 255, 40); P.shape(Lib.bumpy(P, q[0], q[1] - 6, 14, 8, 6), 'b5r3', 0.8); }
    mtChair(P, 250, 180, 36, 'y'); mtChair(P, 320, 180, 36, 'y');
  },
  live(P, t) { const f = P.I(40, 100, 72); P.halo(f[0], f[1] - 6, 26, ['y1', 'y2', 'y3r1']); Lib.flame(P, f[0], f[1], 7, 14, t * 1.2, { noKnock: true }); },
  chars: [
    mtTable(180, 195, 190, 110, 46, [
      mtCandle(200, 215, { tn: 'y6r2k1' }), mtCandle(220, 212, { tn: 'y6r2k1' }),
      mtSeder(290, 250), mtMatsot(340, 225), mtBottle(250, 212), mtCup(215, 280, 'y6r2k1'), mtCup(270, 290), mtCup(330, 290), mtCup(355, 270),
      mtOpenBook(245, 280), mtOpenBook(310, 212)
    ], { hem: 1 }),
    ch(LK.mtMother2, { h: 134, hold: { n: 'mtTaper' }, speed: 14, path: [W(90, 115, 2.5, 'reach', { f: -1 }), W(150, 235, 3.5, 'reach', { f: 1 }), W(90, 115, 0)] }),
    ch(LK.mtGrandpa, { x: 400, y: 255, face: -1, clip: 'sit', h: 134, hold: { n: 'mtBook' }, look: Object.assign({}, LK.mtGrandpa, { robe: 'y1', sash: 'y6' }) }),
    ch(LK.mtGrandma, { x: 290, y: 360, face: -1, clip: 'idle', h: 124 }),
    ch(LK.mtBoy, { x: 230, y: 350, face: -1, clip: 'lookup', h: 92 }),
    ch(LK.mtGirl2, { x: 450, y: 370, face: 1, clip: 'point', h: 86 }),
    ch(LK.mtElkana, { x: 470, y: 290, face: -1, clip: 'talk', h: 140, look: Object.assign({}, LK.mtFather, { robe: 'b5y2k2' }) })
  ]
},
{
  title: 'Le mikvé', book: 'Ézéchiel', ch: 36, ref: 'Ezechiel 36:25', refFr: 'Ézéchiel 36, 25', accent: 2, feast: 'Chabbat Para',
  quote: 'And I will pour upon you clean water, and you shall be cleansed',
  fr: 'Et je répandrai sur vous une eau pure, et vous serez purifiés',
  more: ['Ézéchiel annonce le retour des exilés : Dieu les rassemblera, répandra sur eux une eau pure et leur donnera un cœur nouveau. Le mikvé donne corps à cette image. Après ses règles, la femme compte sept jours (Lévitique 15, 28, tel que la loi juive l’applique), puis, à la nuit tombée, se rend au mikvé, bassin d’eau de pluie ou de source, et s’y immerge entièrement. Cette pureté familiale est un pilier du foyer juif.',
    'Correspondance : <b>Chabbat Para</b>. Ce passage d’Ézéchiel (36, 16 à 38) est la haftara du Chabbat Para, lu avant Pessah avec la loi de la vache rousse. À la fin du traité Yoma (85b), Rabbi Akiva cite ce verset avec Jérémie 17, 13, « l’Éternel est le mikvé d’Israël » : comme le mikvé purifie ceux qui sont impurs, ainsi le Saint, béni soit-Il, purifie Israël.'],
  brakha: [
    { label: 'Immersion', he: 'בָּרוּךְ אַתָּה ה׳ אֱלֹקֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ עַל הַטְּבִילָה.', ph: 'Baroukh Ata Adonaï, Élohénou Mélekh haolam, achère kidéchanou bémitsvotav vétsivanou al hatévila.', fr: 'Béni sois-Tu, Éternel notre Dieu, Roi du monde, qui nous as sanctifiés par Tes commandements et nous as ordonné l\'immersion.', note: 'Le moment varie selon les communautés (avant l\'immersion, ou dans l\'eau après une première immersion) : on suit son usage et les indications de la responsable du mikvé.' }
  ],
  back(P) {
    nightSky(P, 'b7k4', 90);
    Lib.platform(P, 'y3r2k2', 'y4r3k2', { h: 50 });
    for (let v = 30; v < 540; v += 30) { P.line([P.I(v, 250, 0), P.I(v, 540, 0)], 0.4); P.line([P.I(0, v, 0), P.I(540, v, 0)], 0.3); }
    P.box(0, 0, 0, 14, 540, 44, 'y3r2k3'); P.box(14, 0, 0, 526, 14, 44, 'y3r2k3');
    P.box(30, 40, 0, 170, 200, 118, 'y3r2k1'); P.box(26, 36, 118, 178, 208, 7, 'y3r2k2', 0.8);
    { const c = P.I(115, 140, 125), pts = []; for (let i = 0; i <= 16; i++) { const a = Math.PI * i / 16; pts.push([c[0] + Math.cos(a) * 62, c[1] - Math.sin(a) * 46]); } P.shape(pts, 'y3r2k2', 1.1); }
    P.shape([P.I(95, 240.5, 0), P.I(140, 240.5, 0), P.I(140, 240.5, 72), P.I(95, 240.5, 72)], 'y6r3', 1);
    P.line([P.I(117, 240.8, 0), P.I(117, 240.8, 72)], 0.8);
    P.box(89, 240, 0, 6, 8, 80, 'y4r3k2', 0.7); P.box(140, 240, 0, 6, 8, 80, 'y4r3k2', 0.7); P.box(86, 240, 78, 63, 10, 6, 'y4r3k3', 0.7);
    for (const b of [70, 150]) P.shape([P.I(200.5, b, 60), P.I(200.5, b + 26, 60), P.I(200.5, b + 26, 92), P.I(200.5, b, 92)], 'y7r3', 0.8);
    for (const a of [50, 165]) P.shape([P.I(a, 240.5, 60), P.I(a + 24, 240.5, 60), P.I(a + 24, 240.5, 92), P.I(a, 240.5, 92)], 'y7r3', 0.8);
    { const q = P.I(117, 240, 92); P.halo(q[0], q[1], 40, ['y1', 'y2', 'y3r1']); }
    P.fill([P.I(200, 30, 0.3), P.I(510, 30, 0.3), P.I(510, 250, 0.3), P.I(200, 250, 0.3)], 'b2y1k1', {});
    for (let v = 220; v < 510; v += 20) P.line([P.I(v, 30, 0.4), P.I(v, 250, 0.4)], 0.3);
    P.shape([P.I(200, 30, 0), P.I(510, 30, 0), P.I(510, 30, 110), P.I(200, 30, 110)], 'b3y2k1', 1.1);
    for (let z = 20; z < 110; z += 20) P.line([P.I(200, 30.5, z), P.I(510, 30.5, z)], 0.4);
    for (let x = 220; x < 510; x += 20) P.line([P.I(x, 30.5, 0), P.I(x, 30.5, 110)], 0.3);
    P.shape([P.I(200, 14, 110), P.I(510, 14, 110), P.I(510, 30, 110), P.I(200, 30, 110)], 'y4r3k2', 0.9);
    for (let i = 0; i < 3; i++) { const q = P.I(440 + i * 18, 30.5, 80); P.line([[q[0], q[1]], [q[0], q[1] - 6]], 1); P.shape([[q[0] - 6, q[1]], [q[0] + 6, q[1]], [q[0] + 5, q[1] + 30], [q[0] - 5, q[1] + 30]], 'y1b1', 0.6); P.line([[q[0] - 5, q[1] + 24], [q[0] + 5, q[1] + 24]], 0.6, { ink: 2 }); }
    { const q = P.I(260, 30.5, 88); P.halo(q[0], q[1], 26, ['y1', 'y2', 'y3r1']); P.shape(P.disc(q[0], q[1], 5, 10), 'y7r3', 0.6); }
    const X0 = 290, X1 = 470, Y0 = 70, Y1 = 220, D = 54, I = (a, b, c) => P.I(a, b, c), ctx = P.ctx;
    const rim = [I(X0, Y0, 0), I(X1, Y0, 0), I(X1, Y1, 0), I(X0, Y1, 0)];
    ctx.save(); ctx.beginPath(); ctx.moveTo(rim[0][0], rim[0][1]); for (const p of rim.slice(1)) ctx.lineTo(p[0], p[1]); ctx.closePath(); ctx.clip();
    P.shape([I(X0, Y0, 0), I(X1, Y0, 0), I(X1, Y0, -D), I(X0, Y0, -D)], 'b3y1k1', 0.9);
    P.shape([I(X0, Y0, 0), I(X0, Y1, 0), I(X0, Y1, -D), I(X0, Y0, -D)], 'b3y1k2', 0.9);
    for (let z = -10; z > -D; z -= 10) { P.line([I(X0, Y0, z), I(X1, Y0, z)], 0.3); P.line([I(X0, Y0, z), I(X0, Y1, z)], 0.3); }
    const step = i => { const y = Y1 - (i + 1) * 26, z = -(i + 1) * 11, z0 = i < 2 ? -22 : -D; P.box(X0, y, z0, 70, 26, z - z0, 'y2r1k1', 0.6); };
    step(3); step(2);
    const wat = [I(X0, Y0, -22), I(X1, Y0, -22), I(X1, Y1, -22), I(X0, Y1, -22)]; P.fill(wat, 'b5y2', { noKnock: true }); P.outline(wat, 0.9);
    step(1); step(0);
    ctx.restore();
    P.outline(rim, 1.4);
    P.box(X0 - 6, Y0 - 6, 0, X1 - X0 + 12, 6, 3, 'y2b1', 0.6); P.box(X0 - 6, Y0, 0, 6, Y1 - Y0, 3, 'y2b1', 0.6);
    for (const x of [X0 + 72, X0 + 72]) { P.line([I(x, Y1, 0), I(x, Y1, 30), I(x, Y1 - 60, 30), I(x, Y1 - 70, 10)], 1.4, { ink: 3, lvl: 6 }); }
    P.box(230, 200, 0, 30, 30, 34, 'r4y5k2'); { const q = P.I(245, 215, 34); P.shape(Lib.bumpy(P, q[0], q[1] - 4, 12, 6, 6), 'y1b1', 0.6); }
    for (let i = 0; i < 9; i++) { const q = P.I(470 - i * 38, 520 - i * 26, 0); P.shape(P.ell(470 - i * 38, 520 - i * 26, 0.5, 12, 9, 12), 'y2r1k2', 0.6); }
    for (const [x, y] of [[40, 460], [80, 500]]) { const b = P.I(x, y, 0); P.shape(smooth([[b[0] - 12, b[1]], [b[0] - 14, b[1] - 60], [b[0], b[1] - 130], [b[0] + 14, b[1] - 60], [b[0] + 12, b[1]]], 2), 'y4b6k3', 1); }
    Lib.tree(P, 500, 330, 0, { h: 150, r: 42, can: 'y4b5k3', trunk: 'r5y4k4' });
    Lib.bush(P, 330, 440, 0, 26, 'y4b5k3'); Lib.bush(P, 30, 300, 0, 22, 'y4b5k3');
  },
  live(P, t) {
    const X0 = 290, X1 = 470, Y0 = 70, Y1 = 220;
    for (let i = 0; i < 5; i++) { const u = ((t * 0.3 + i / 5) % 1), x = X0 + 110 + (i % 3) * 18, y = Y0 + 30 + (i * 23) % 90, r = 6 + u * 20; P.line(P.ell(x, y, -22, r, r * 0.7, 18).slice(0, 12), 0.7 * (1 - u) + 0.1, { ink: 0, lvl: 3 }); }
    const f = P.I(117, 240, 84); Lib.flame(P, f[0], f[1] - 2, 8, 14, t);
  },
  chars: [
    { depth: -2000, draw(P, t) { for (let i = 0; i < 6; i++) { const x = 120 + i * 150 + (i % 2) * 40, y = 70 + (i * 53) % 160, s = 3 + 2.5 * (0.5 + 0.5 * Math.sin(t * 2 + i * 1.7)); Lib.star(P, x, y, s, 'y8'); } } },
    ch(LK.mtVisitor, { h: 132, hold: { n: 'mtTowel' }, speed: 20, path: [W(500, 500, 1), W(200, 300, 3.5, 'idle', { f: -1 }), W(200, 300, 0.1), W(500, 500, 0, null, { jump: 1 })] }),
    ch(LK.mtBalanit, { x: 128, y: 262, face: 1, clip: 'offer', h: 128, hold: { n: 'mtLamp' } }),
    ch(LK.mtMother3, { h: 130, speed: 18, t0: 9, path: [W(200, 300, 1), W(470, 470, 0.2), W(200, 300, 0, null, { jump: 1 })], look: Object.assign({}, LK.mtMother3, { ht: 'y1', cloak: 'b5k2' }) })
  ]
},
{
  title: 'La gloire intérieure', book: 'Psaumes', ch: 45, ref: 'Psalms 44:14', refFr: 'Psaumes 45, 14', accent: 3, feast: null,
  quote: 'All the glory of the king\'s daughter is within',
  fr: 'Toute la gloire de la fille du roi est au-dedans',
  more: ['Le psaume 45 est un chant pour les noces du roi : il célèbre le roi, puis la princesse conduite vers lui, parée d’or. Le verset « toute la gloire de la fille du roi est à l’intérieur » est devenu dans la tradition l’éloge d’une grandeur qui ne s’exhibe pas. Ici, la nuit tombe sur le quartier ; derrière les fenêtres éclairées, une mère étudie avec ses enfants, le livre ouvert sur la table.',
    'Pas de fête juive attachée à ce passage. Le Talmud applique ce verset à la dignité et à la discrétion. La maison est aussi le premier lieu de la transmission : « Écoute, mon fils, l’instruction de ton père, et ne rejette pas l’enseignement de ta mère » (Proverbes 1, 8).'],
  brakha: [
    { label: 'Le verset', he: 'כָּל כְּבוּדָּה בַת מֶלֶךְ פְּנִימָה.', ph: 'Kol kévouda vat mélekh pénima.', fr: 'Toute la gloire de la fille du roi est à l\'intérieur.', note: 'Psaume 45, 14 dans la numérotation hébraïque (44, 14 dans la Vulgate).' }
  ],
  back(P) {
    nightSky(P, 'b6r2k4', 70); Lib.moon(P, 830, 150, 22);
    Lib.platform(P, 'y4b4k2', 'y4r3k2');
    Lib.grass(P, 40, 'y4b5k3', [380, 380, 150, 150]);
    P.shape([P.I(40, 40, 0.4), P.I(370, 40, 0.4), P.I(370, 370, 0.4), P.I(40, 370, 0.4)], 'y4r3k2', 1);
    for (let v = 70; v < 370; v += 30) P.line([P.I(v, 40, 0.5), P.I(v, 370, 0.5)], 0.4);
    P.shape([P.I(40, 40, 0), P.I(40, 370, 0), P.I(40, 370, 190), P.I(40, 40, 190)], 'y3r2k1', 1.2);
    P.shape([P.I(40, 40, 0), P.I(370, 40, 0), P.I(370, 40, 190), P.I(40, 40, 190)], 'y3r2k2', 1.2);
    P.box(213, 288, 0, 24, 24, 38, 'r4y5k2', 0.8); P.box(309, 219, 0, 22, 22, 27, 'r4y5k2', 0.8);
    P.box(24, 24, 190, 16, 346, 10, 'y4r3k3', 0.9); P.box(40, 24, 190, 330, 16, 10, 'y4r3k3', 0.9);
    const winL = (y) => { P.shape([P.I(40.5, y - 6, 84), P.I(40.5, y + 56, 84), P.I(40.5, y + 56, 166), P.I(40.5, y - 6, 166)], 'r4y5k3', 1); P.shape([P.I(40.8, y, 90), P.I(40.8, y + 50, 90), P.I(40.8, y + 50, 160), P.I(40.8, y, 160)], 'b7k3', 0.8); const q = P.I(40.8, y + 25, 135); Lib.star(P, q[0] - 6, q[1] - 6, 3, 'y7'); Lib.star(P, q[0] + 8, q[1] + 10, 2, 'y5'); P.line([P.I(41, y + 25, 90), P.I(41, y + 25, 160)], 1.4); };
    winL(110); winL(250);
    P.box(80, 41, 0, 170, 20, 150, 'r4y5k2');
    for (let s = 0; s < 4; s++) { P.box(84, 42, 8 + s * 36, 162, 18, 3, 'r4y5k3', 0.5); const r = rng(80 + s); let xx = 88; while (xx < 238) { const bw = 5 + r() * 4, bh = 18 + r() * 10; P.box(xx, 44, 11 + s * 36, bw, 13, bh, ['r6b3k2', 'b6k2', 'y6r4k2', 'r5y2k3', 'b5y3k2'][(r() * 5) | 0], 0.4); xx += bw + 1; } }
    P.shape([P.I(290, 40.5, 84), P.I(350, 40.5, 84), P.I(350, 40.5, 166), P.I(290, 40.5, 166)], 'r4y5k3', 1); P.shape([P.I(296, 40.8, 90), P.I(344, 40.8, 90), P.I(344, 40.8, 160), P.I(296, 40.8, 160)], 'b7k3', 0.8);
    mtHouse(P, 400, 30, 120, 110, 140, 'y3r2k2'); mtHouse(P, 420, 170, 100, 110, 100, 'y4r3k2');
    { const q = P.I(470, 150, 60); P.halo(q[0], q[1], 70, ['y1', 'y2']); }
    for (let i = 0; i < 6; i++) P.shape(P.ell(450 - i * 12, 520 - i * 24, 0.5, 11, 8, 12), 'y2r1k2', 0.6);
    Lib.tree(P, 500, 440, 0, { h: 150, r: 42, can: 'y4b5k3', trunk: 'r5y4k4' });
    Lib.bush(P, 390, 500, 0, 22, 'y4b5k3');
  },
  front(P) {
    P.box(40, 366, 0, 170, 8, 34, 'y3r2k1', 1); P.box(260, 366, 0, 114, 8, 34, 'y3r2k1', 1);
    P.box(366, 40, 0, 8, 326, 34, 'y3r2k2', 1);
    P.box(206, 366, 0, 6, 8, 34, 'y4r3k3', 0.8); P.box(258, 366, 0, 6, 8, 34, 'y4r3k3', 0.8);
  },
  chars: [
    mtTable(150, 170, 150, 90, 40, [mtOil(235, 200), mtOpenBook(190, 235), mtOpenBook(270, 240), mtOpenBook(210, 190), mtCup(280, 190, 'r5y6k1')], { cloth: 'b5r3', wood: 'r4y5k3' }),
    ch(LK.mtMother, { x: 225, y: 300, face: 1, clip: 'mtSitRead', h: 130, hold: { n: 'mtBook' } }),
    ch(LK.mtBoy, { x: 320, y: 230, face: -1, clip: 'mtSitRead', h: 92, hold: { n: 'mtBook' } }),
    ch(LK.mtGirl, { x: 120, y: 220, face: 1, clip: 'mtRead', h: 92, hold: { n: 'mtBook' }, t0: 1 }),
    ch(LK.mtGirl2, { x: 160, y: 300, face: 1, clip: 'lookup', h: 80 }),
    ch(LK.mtFather, { h: 142, speed: 16, path: [W(470, 520, 2), W(380, 440, 3, 'idle', { f: -1 }), W(470, 520, 0)] })
  ]
}
];
