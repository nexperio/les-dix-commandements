/* ============================================================
   BIBLIOTHÈQUE COMPLÉMENTAIRE : décors, accessoires, poses
   ============================================================ */
Object.assign(CLIPS, {
  prostrate: { d: 4, k: [{ nT: 4, nK: -100, fT: 0, fK: -100, lean: 78, head: 20, nU: 100, nL: 10, fU: 95, fL: 12 }, { nT: 4, nK: -100, fT: 0, fK: -100, lean: 82, head: 22, nU: 104, nL: 8, fU: 98, fL: 10 }] },
  hammer: { d: 0.7, k: [{ nU: 160, nL: 50, fU: 50, fL: 40, lean: 12, head: 10, nT: 20, nK: -10, fT: -14, fK: -8 }, { nU: 60, nL: 20, fU: 50, fL: 40, lean: 20, head: 14, nT: 20, nK: -10, fT: -14, fK: -8 }] },
  lookup: { d: 4, k: [{ nU: 40, nL: 20, fU: 30, fL: 20, head: -34, lean: -6, nT: 6, fT: -6 }, { nU: 60, nL: 16, fU: 40, fL: 18, head: -38, lean: -8, nT: 6, fT: -6 }] },
  cradle: { d: 3, k: [{ nU: 40, nL: 95, fU: 30, fL: 100, head: 16, lean: 4 }, { nU: 44, nL: 92, fU: 32, fL: 98, head: 12, lean: 6 }] },
  fill: { d: 2.4, k: [{ nT: 4, nK: -95, fT: 70, fK: -80, lean: 40, head: 20, nU: 50, nL: 20, fU: 40, fL: 30 }, { nT: 4, nK: -95, fT: 70, fK: -80, lean: 34, head: 14, nU: 70, nL: 40, fU: 50, fL: 40 }] },
  bless: { d: 3, k: [{ nU: 120, nL: 12, fU: 110, fL: 16, head: -6, lean: -2, nT: 6, fT: -6 }, { nU: 128, nL: 8, fU: 118, fL: 12, head: -10, lean: -3, nT: 6, fT: -6 }] },
  sing: { d: 2.6, k: [{ nU: 70, nL: 30, fU: 50, fL: 40, head: -10, lean: -2, nT: 8, fT: -8 }, { nU: 95, nL: 20, fU: 70, fL: 30, head: -16, lean: -4, nT: 8, fT: -8 }] },
  bow: { d: 3, k: [{ lean: 40, head: 16, nU: 30, nL: 60, fU: 24, fL: 64, nT: 6, fT: -6 }, { lean: 46, head: 18, nU: 34, nL: 58, fU: 28, fL: 60, nT: 6, fT: -6 }] },
  lie: { d: 4, k: [{ rot: -90, nT: 30, nK: -50, fT: 20, fK: -40, nU: 20, nL: 90, fU: 160, fL: 40, head: -10 }, { rot: -90, nT: 30, nK: -50, fT: 20, fK: -40, nU: 22, nL: 92, fU: 160, fL: 40, head: -8 }] },
  still: { d: 9, k: [{ nU: 150, nL: 70, fU: 20, fL: 60, head: 8, lean: -4, nT: 12, fT: -8, fK: -6 }] }
});
const PROPS2 = {
  hammer(P, A, J, M, h, t, lw, F, u, n, add) { const a = A.w, b = add(A.w, u, 0.13); P.line([M(a), M(b)], lw * 1.6, { ink: 3 }); P.shape([M(add(b, n, 0.035)), M(add(add(b, n, 0.035), u, 0.03)), M(add(add(b, n, -0.035), u, 0.03)), M(add(b, n, -0.035))], 'k6b2', lw * 0.6); },
  plank(P, A, J, M, h, t, lw) { const c = add2(J.sh, J.up, 0.06); P.shape([M([c[0] - 0.32, c[1] + 0.02]), M([c[0] + 0.32, c[1] - 0.04]), M([c[0] + 0.32, c[1] - 0.075]), M([c[0] - 0.32, c[1] - 0.015])], 'r4y6k2', lw); },
  bricks(P, A, J, M, h, t, lw) { const c = add2(J.sh, J.up, 0.07); for (let r = 0; r < 3; r++) for (let i = 0; i < 2; i++) { const x = c[0] - 0.09 + i * 0.09 + (r % 2) * 0.03, y = c[1] - r * 0.035; P.shape([M([x, y]), M([x + 0.085, y]), M([x + 0.085, y - 0.032]), M([x, y - 0.032])], r % 2 ? 'r6y5k1' : 'r5y5k2', lw * 0.6); } },
  bread(P, A, J, M, h, t, lw, F, u, n, add) { const q = M(add(A.t, u, 0.02)); P.shape(Lib.bumpy(P, q[0], q[1], h * 0.035, h * 0.022, 5), 'y7r4k1', lw * 0.6); },
  cup(P, A, J, M, h, t, lw, F, u, n, add) { const q = M(add(A.t, [0, -1], 0.03)); P.shape([[q[0] - h * .022, q[1] - h * .03], [q[0] + h * .022, q[1] - h * .03], [q[0] + h * .008, q[1]], [q[0] + h * .01, q[1] + h * .02], [q[0] - h * .01, q[1] + h * .02], [q[0] - h * .008, q[1]]], 'y8r3', lw * 0.6); P.fill([[q[0] - h * .018, q[1] - h * .028], [q[0] + h * .018, q[1] - h * .028], [q[0] + h * .01, q[1] - h * .018], [q[0] - h * .01, q[1] - h * .018]], 'r8b3', {}); },
  baby(P, A, J, M, h, t, lw, F) { const c = [(J.aN.w[0] + J.aF.w[0]) / 2 + 0.02, (J.aN.w[1] + J.aF.w[1]) / 2 - 0.03]; const q = M(c); P.shape(smooth([[q[0] - h * .08, q[1]], [q[0] - h * .02, q[1] - h * .04], [q[0] + h * .07, q[1] - h * .03], [q[0] + h * .06, q[1] + h * .02]], 3), 'y1b1', lw * 0.7); const hd = [q[0] + (F.face || 1) * h * .07, q[1] - h * .03]; P.shape(P.disc(hd[0], hd[1], h * .028, 10), 'y5r4', lw * 0.6); },
  skin(P, A, J, M, h, t, lw, F, u, n, add) { const q = M(add(A.w, u, 0.03)); P.shape(smooth([[q[0] - h * .03, q[1]], [q[0], q[1] - h * .05], [q[0] + h * .035, q[1] - h * .01], [q[0] + h * .02, q[1] + h * .05], [q[0] - h * .02, q[1] + h * .05]], 3), 'r5y5k3', lw * 0.7); },
  sword(P, A, J, M, h, t, lw, F, u, n, add) { const a = A.w, b = add(A.w, u, 0.5); P.line([M(a), M(b)], h * 0.012, { ink: 2, taper: 0.1 }); P.line([M(add(a, n, 0.05)), M(add(a, n, -0.05))], lw * 1.8); for (let i = 1; i <= 4; i++) { const q = M(add(a, u, 0.12 * i)); Lib.flame(P, q[0], q[1], h * 0.05, h * 0.09, t + i, { noKnock: true }); } },
  scroll(P, A, J, M, h, t, lw) { const c = [(J.aN.t[0] + J.aF.t[0]) / 2, (J.aN.t[1] + J.aF.t[1]) / 2]; const q = M(c); P.shape([[q[0] - h * .09, q[1] - h * .04], [q[0] + h * .09, q[1] - h * .04], [q[0] + h * .09, q[1] + h * .04], [q[0] - h * .09, q[1] + h * .04]], 'y2', lw * 0.7); for (const s of [-1, 1]) P.shape([[q[0] + s * h * .09 - h * .015, q[1] - h * .07], [q[0] + s * h * .09 + h * .015, q[1] - h * .07], [q[0] + s * h * .09 + h * .015, q[1] + h * .07], [q[0] + s * h * .09 - h * .015, q[1] + h * .07]], 'r5y5k3', lw * 0.7); for (let i = 0; i < 4; i++) P.line([[q[0] - h * .06, q[1] - h * .025 + i * h * .016], [q[0] + h * .06, q[1] - h * .025 + i * h * .016]], lw * 0.35); }
};
const add2 = (o, d, l) => [o[0] + d[0] * l, o[1] + d[1] * l];
Object.assign(Lib, {
  ark(P, dx = 0, dy = 0, dz = 0, o = {}) {
    const X = x => x + dx, Y = y => y + dy, Z = z => z + dz, I = (x, y, z) => P.I(X(x), Y(y), Z(z));
    if (o.frame) {
      P.box(X(130), Y(150), Z(-10), 300, 150, 12, 'r4y6k2');
      for (let i = 0; i <= 10; i++) { const x = 130 + i * 30; P.line([I(x, 150, 2), I(x, 150, 70), I(x, 150, 2)], 2.2); P.line([I(x, 300, 2), I(x, 300, 70)], 2.2); P.line([I(x, 150, 70), I(x, 300, 70)], 1.4); }
      for (let z = 20; z <= 50; z += 30) P.box(X(130), Y(296), Z(z), 300 * (o.progress || 0.6), 5, 10, 'r4y6k1', 0.8);
      P.line([I(130, 150, 70), I(430, 150, 70)], 2.4); P.line([I(130, 300, 70), I(430, 300, 70)], 2.4);
      return;
    }
    P.box(X(130), Y(150), Z(-10), 300, 150, 75, { t: 'r4y6k1', l: 'r4y5k3', r: 'r5y5k4' });
    for (let z = 5; z < 60; z += 11) { P.line([I(130, 300, z), I(430, 300, z)], 0.7); P.line([I(430, 150, z), I(430, 300, z)], 0.7); }
    P.fill([I(130, 300, -10), I(430, 300, -10), I(430, 300, 4), I(130, 300, 4)], 'k6r2', { noKnock: true });
    P.box(X(170), Y(175), Z(65), 215, 100, 58, 'r3y5k1');
    for (let i = 0; i < 4; i++) P.shape([I(190 + i * 50, 275, 85), I(215 + i * 50, 275, 85), I(215 + i * 50, 275, 108), I(190 + i * 50, 275, 108)], 'k6b2', 0.8);
    P.shape([I(385, 200, 65), I(385, 245, 65), I(385, 245, 110), I(385, 200, 110)], 'k7r1', 0.9);
    P.shape([I(160, 165, 123), I(395, 165, 123), I(395, 225, 160), I(160, 225, 160)], 'r5y4k2', 1);
    P.shape([I(160, 285, 123), I(395, 285, 123), I(395, 225, 160), I(160, 225, 160)], 'r5y4k3', 1);
    P.shape([I(395, 165, 123), I(395, 285, 123), I(395, 225, 160)], 'r4y5k2', 1);
    for (let i = 1; i < 8; i++) P.line([I(160 + i * 30, 285, 123), I(160 + i * 30, 225, 160)], 0.5);
    if (o.door) { P.shape([I(430, 200, 0), I(430, 250, 0), I(430, 250, 50), I(430, 200, 50)], 'k8r2', 1); }
  },
  city(P, x, y, w, d, n, tn = 'y3r2', seed = 1) { const r = rng(seed); const hs = []; for (let i = 0; i < n; i++) hs.push([x + r() * (w - 50), y + r() * (d - 50), 30 + r() * 25, 30 + r() * 25, 30 + r() * 45]); hs.sort((a, b) => a[0] + a[1] - b[0] - b[1]); for (const [hx, hy, hw, hd, hh] of hs) { P.box(hx, hy, 0, hw, hd, hh, r() > .5 ? tn : tadd(tn, 'r1k1')); P.shape([P.I(hx + hw * .3, hy + hd, 0), P.I(hx + hw * .55, hy + hd, 0), P.I(hx + hw * .55, hy + hd, 20), P.I(hx + hw * .3, hy + hd, 20)], 'k6r2', 0.6); } },
  well(P, x, y, r = 30) { P.cyl(x, y, 0, r, 26, { t: 'y3r2k2', s: 'y4r3k2', d: 'y4r3k3' }); P.shape(P.ell(x, y, 26.5, r * 0.72, r * 0.72, 20), 'b7k3', 0.8); for (let i = 0; i < 10; i++) { const a = i / 10 * TAU; P.line([P.I(x + Math.cos(a) * r, y + Math.sin(a) * r, 2), P.I(x + Math.cos(a) * r, y + Math.sin(a) * r, 24)], 0.4); } },
  altar(P, x, y, w = 70, d = 50, h = 40, tn = 'y3r2k3') { stoneStack(P, x, y, w, d, h, tn); for (let i = 0; i < 4; i++) P.box(x + 4, y + 3 + i * (d / 4), h, w - 8, d / 4 - 3, 6, 'r5y5k3', 0.7); },
  smoke(P, x, y, t, o = {}) { const n = o.n || 6, up = o.up !== false; for (let i = 0; i < n; i++) { const u = ((t * (o.sp || 0.25) + i / n) % 1), r = 10 + u * (o.r || 30); const px = x + (up ? Math.sin(u * 5 + i) * 10 : u * (o.drift || 160)), py = y - (up ? u * (o.h || 260) : u * 30 - Math.sin(u * 6) * 8); const pts = []; for (let k = 0; k < 14; k++) { const a = k / 14 * TAU; pts.push([px + Math.cos(a) * r * (1 + 0.15 * Math.sin(a * 3 + i)), py + Math.sin(a) * r * 0.8]); } P.shape(pts, o.tn || (u > .6 ? 'k2b1' : 'k3b1'), 0.7); } },
  rain(P, t, o = {}) { const r = rng(7), n = o.n || 90, ph = (t * (o.sp || 1.6)) % 1; for (let i = 0; i < n; i++) { const x = r() * 1000, y0 = r() * 1000, y = (y0 + ph * 1000) % 1000; if (o.clip && !o.clip(x, y)) continue; P.line([[x, y], [x - 5, y + 22]], 0.9, { ink: 2, lvl: 7 }); } },
  tower(P, cx, cy, levels, base, hStep, tn) {
    for (let k = 0; k < levels; k++) {
      const s = base * (1 - k * 0.16), x = cx - s / 2, y = cy - s / 2, z = k * hStep;
      const t = k % 2 ? tn : tadd(tn, 'r1');
      P.box(x, y, z, s, s, hStep, { t: tadd(t, 'y1'), l: tadd(t, 'k1'), r: tadd(t, 'k2b1') });
      for (let r = 1; r < 4; r++) { P.line([P.I(x, y + s, z + r * hStep / 4), P.I(x + s, y + s, z + r * hStep / 4)], 0.5); P.line([P.I(x + s, y, z + r * hStep / 4), P.I(x + s, y + s, z + r * hStep / 4)], 0.5); }
      for (let i = 1; i < 6; i++) { const u = i / 6; P.line([P.I(x + s * u, y + s, z + hStep * 0.2), P.I(x + s * u, y + s, z + hStep * 0.75)], 0.6); P.shape([P.I(x + s * u - 5, y + s, z + hStep * .45), P.I(x + s * u + 5, y + s, z + hStep * .45), P.I(x + s * u + 5, y + s, z + hStep * .7), P.I(x + s * u - 5, y + s, z + hStep * .7)], 'k6r2', 0.4); }
      // rampe sur la face avant
      P.shape([P.I(x, y + s + 1, z), P.I(x + s * 0.9, y + s + 1, z + hStep), P.I(x + s * 0.9, y + s + 18, z + hStep), P.I(x, y + s + 18, z)], tadd(tn, 'y2k1'), 0.8);
    }
  },
  vines(P, x, y, w, d, rows) { for (let r = 0; r < rows; r++) { const yy = y + r * d / rows; P.line([P.I(x, yy, 18), P.I(x + w, yy, 18)], 0.7); for (let i = 0; i <= 6; i++) { const xx = x + i * w / 6; P.line([P.I(xx, yy, 0), P.I(xx, yy, 22)], 1); const c = P.I(xx, yy, 20); P.shape(Lib.bumpy(P, c[0], c[1], 12, 8, 5), 'y5b6', 0.6); if (i % 2) P.fill(P.disc(c[0] + 4, c[1] + 6, 3.5, 8), 'r6b6', {}); } } },
  field(P, x, y, w, d, rows, tn = 'y7r2') { for (let r = 0; r < rows; r++) for (let i = 0; i < 14; i++) { const c = P.I(x + i * w / 14 + (r % 2) * 8, y + r * d / rows, 0); P.line([[c[0], c[1]], [c[0] + 1, c[1] - 18]], 0.9, { ink: 0 }); P.fill([[c[0] - 2, c[1] - 18], [c[0] + 1, c[1] - 26], [c[0] + 3, c[1] - 18]], tn, {}); } },
  gate(P, x, y, w, h, tn = 'y4r3k2') { P.box(x, y, 0, 26, 26, h + 20, tn); P.box(x, y + w, 0, 26, 26, h + 20, tn); P.box(x, y, h, 26, w + 26, 22, tadd(tn, 'r1')); },
  hedge(P, x0, y0, x1, y1, h = 50, tn = 'y5b6k1') { const n = Math.ceil(Math.hypot(x1 - x0, y1 - y0) / 30); for (let i = 0; i <= n; i++) { const x = lerp(x0, x1, i / n), y = lerp(y0, y1, i / n), c = P.I(x, y, 0); P.shape(Lib.bumpy(P, c[0], c[1] - h * 0.5, 22, h * 0.5, 7), i % 2 ? tn : tadd(tn, 'k1'), 0.8); } }
});
