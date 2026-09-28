/* ============================================================
   FIGURES : squelette unique, clips en keyframes, volumes effilés,
   costumes d'époque, visages ; animaux
   ============================================================ */
const CLIPS = {
  idle: { d: 3.4, k: [{ lean: 2, nU: 5, nL: 14, fU: -4, fL: 12, head: -3, nT: 3, fT: -3 }, { lean: 0, nU: 2, nL: 10, fU: -2, fL: 16, head: 2, nT: 3, fT: -3 }] },
  walk: { d: 1, k: [
    { nT: 24, nK: -4, fT: -20, fK: -12, nU: -18, nL: 14, fU: 20, fL: 22, lean: 4 },
    { nT: 4, nK: -6, fT: 14, fK: -55, nU: 0, nL: 10, fU: 0, fL: 12, lean: 3 },
    { nT: -20, nK: -12, fT: 24, fK: -4, nU: 20, nL: 22, fU: -18, fL: 14, lean: 4 },
    { nT: 14, nK: -55, fT: 4, fK: -6, nU: 0, nL: 12, fU: 0, fL: 10, lean: 3 }] },
  haul: { d: 1.6, k: [{ lean: -24, head: -8, nU: 78, nL: 12, fU: 70, fL: 18, nT: 30, nK: -4, fT: -22, fK: -6 }, { lean: -10, head: -3, nU: 96, nL: 55, fU: 88, fL: 58, nT: 26, nK: -10, fT: -16, fK: -12 }] },
  sit: { d: 3.2, k: [{ nT: 86, nK: -86, fT: 82, fK: -80, lean: -3, nU: 24, nL: 58, fU: 16, fL: 62, hy: 0.3 }, { nT: 86, nK: -86, fT: 82, fK: -80, lean: 0, head: 5, nU: 20, nL: 62, fU: 14, fL: 66, hy: 0.3 }] },
  eat: { d: 2.2, k: [{ nT: 86, nK: -86, fT: 82, fK: -80, lean: 6, nU: 38, nL: 55, fU: 30, fL: 70, hy: 0.3 }, { nT: 86, nK: -86, fT: 82, fK: -80, lean: 4, head: -4, nU: 30, nL: 128, fU: 30, fL: 70, hy: 0.3 }] },
  throne: { d: 3.6, k: [{ nT: 84, nK: -84, fT: 80, fK: -82, lean: -4, nU: 74, nL: 4, fU: 18, fL: 64, head: -2, hy: 0.3 }, { nT: 84, nK: -84, fT: 80, fK: -82, lean: -2, nU: 70, nL: 8, fU: 16, fL: 66, head: 2, hy: 0.3 }] },
  sleep: { d: 4, k: [{ rot: -90, nT: 10, nK: -18, fT: 4, fK: -8, nU: -12, nL: 40, fU: 170, fL: 50, head: -14, lean: 0 }, { rot: -90, nT: 10, nK: -18, fT: 4, fK: -8, nU: -10, nL: 44, fU: 170, fL: 50, head: -12, lean: 2 }] },
  bound: { d: 3, k: [{ rot: -90, nT: 55, nK: -95, fT: 50, fK: -92, nU: -40, nL: 70, fU: -45, fL: 70, head: -20 }, { rot: -92, nT: 55, nK: -95, fT: 50, fK: -92, nU: -40, nL: 70, fU: -45, fL: 70, head: -26 }] },
  pray: { d: 3.2, k: [{ nT: 2, nK: -95, fT: -2, fK: -95, lean: 4, head: -18, nU: 150, nL: 14, fU: 140, fL: 20 }, { nT: 2, nK: -95, fT: -2, fK: -95, lean: 2, head: -24, nU: 162, nL: 8, fU: 152, fL: 14 }] },
  kneel: { d: 3.6, k: [{ nT: 4, nK: -95, fT: 0, fK: -95, lean: 28, head: 14, nU: 62, nL: 72, fU: 56, fL: 76 }, { nT: 4, nK: -95, fT: 0, fK: -95, lean: 34, head: 18, nU: 60, nL: 76, fU: 54, fL: 80 }] },
  point: { d: 3, k: [{ lean: 3, head: -3, nU: 88, nL: 2, fU: -4, fL: 14, nT: 10, fT: -8, fK: -4 }, { lean: 2, head: -6, nU: 84, nL: 6, fU: -2, fL: 18, nT: 10, fT: -8, fK: -4 }] },
  raise: { d: 3, k: [{ nU: 140, nL: 4, fU: 26, fL: 34, lean: -4, head: -12, nT: 14, nK: -2, fT: -12, fK: -4 }, { nU: 152, nL: 2, fU: 30, fL: 30, lean: -6, head: -16, nT: 14, nK: -2, fT: -12, fK: -4 }] },
  hold2: { d: 3, k: [{ nU: 164, nL: 16, fU: 158, fL: 22, lean: -6, head: -14, nT: 8, fT: -6 }, { nU: 170, nL: 12, fU: 165, fL: 18, lean: -7, head: -18, nT: 8, fT: -6 }] },
  smash: { d: 2.8, k: [{ nU: 168, nL: 14, fU: 162, fL: 20, lean: -10, head: -12, nT: 16, fT: -14, fK: -4 }, { nU: 175, nL: 30, fU: 170, fL: 34, lean: -14, head: -16, nT: 16, fT: -14, fK: -4 }, { nU: 70, nL: 8, fU: 62, fL: 10, lean: 20, head: 12, nT: 24, nK: -8, fT: -16, fK: -6 }] },
  dance: { d: 1.2, k: [{ nU: 150, nL: 20, fU: 118, fL: 40, nT: 42, nK: -80, fT: -4, fK: -6, lean: -4, head: -8 }, { nU: 112, nL: 40, fU: 155, fL: 14, nT: -4, nK: -6, fT: 42, fK: -80, lean: 4, head: 6 }] },
  blow: { d: 2, k: [{ nU: 52, nL: 118, fU: 44, fL: 122, head: -16 }, { nU: 55, nL: 114, fU: 46, fL: 119, head: -13 }] },
  carry: { d: 2, k: [{ nU: 152, nL: 52, fU: 142, fL: 62 }, { nU: 150, nL: 55, fU: 140, fL: 64 }] },
  reach: { d: 3.8, k: [{ nU: 150, nL: 12, fU: 10, fL: 20, head: -18, lean: -3, nT: 6, fT: -10 }, { nU: 162, nL: 5, fU: 14, fL: 25, head: -22, lean: -5, nT: 6, fT: -10 }, { nU: 78, nL: 22, fU: 10, fL: 30, head: -2, lean: 2, nT: 6, fT: -10 }] },
  offer: { d: 3.2, k: [{ nU: 66, nL: 26, fU: 10, fL: 20, lean: 3, nT: 8, fT: -8, head: 2 }, { nU: 74, nL: 20, fU: 8, fL: 24, lean: 4, nT: 8, fT: -8, head: -2 }] },
  glean: { d: 2.6, k: [{ lean: 64, head: 18, nU: 52, nL: 10, fU: 44, fL: 34, nT: 34, nK: -32, fT: -8, fK: -22 }, { lean: 56, head: 10, nU: 78, nL: 28, fU: 28, fL: 64, nT: 34, nK: -32, fT: -8, fK: -22 }] },
  reap: { d: 1.4, k: [{ lean: 42, head: 10, nU: 18, nL: 30, fU: 72, fL: 10, nT: 30, nK: -36, fT: -14, fK: -16 }, { lean: 34, head: 4, nU: 104, nL: 40, fU: 42, fL: 22, nT: 30, nK: -36, fT: -14, fK: -16 }] },
  sling: { d: 0.9, k: [{ nU: 168, nL: 12, fU: 42, fL: 30, lean: -6, head: -6, nT: 22, nK: -6, fT: -20, fK: -8 }, { nU: 176, nL: 22, fU: 46, fL: 26, lean: -8, head: -8, nT: 22, nK: -6, fT: -20, fK: -8 }] },
  climb: { d: 1.1, k: [{ hy: 0.52, nU: 165, nL: 12, fU: 128, fL: 42, nT: 62, nK: -92, fT: 8, fK: -14, lean: 6, head: -10 }, { hy: 0.52, nU: 128, nL: 42, fU: 165, fL: 12, nT: 8, nK: -14, fT: 62, fK: -92, lean: 6, head: -10 }] },
  guard: { d: 4, k: [{ nU: 14, nL: 78, fU: -4, fL: 12, nT: 4, fT: -4 }, { nU: 16, nL: 76, fU: -2, fL: 16, nT: 4, fT: -4, lean: 1, head: 3 }] },
  knife: { d: 2.6, k: [{ nU: 170, nL: 24, fU: 58, fL: 22, lean: 3, head: -10, nT: 18, nK: -4, fT: -14, fK: -6 }, { nU: 164, nL: 36, fU: 56, fL: 28, lean: 5, head: -26, nT: 18, nK: -4, fT: -14, fK: -6 }] },
  wave: { d: 0.8, k: [{ nU: 72, nL: 40, fU: 60, fL: 52, head: -2 }, { nU: 88, nL: 30, fU: 64, fL: 46, head: 0 }] },
  hover: { d: 2.8, k: [{ nU: 96, nL: 10, fU: 30, fL: 30, nT: 12, nK: -24, fT: -4, fK: -34, lean: 6, head: 4, hy: 0.6 }, { nU: 88, nL: 16, fU: 34, fL: 26, nT: 14, nK: -28, fT: -2, fK: -30, lean: 8, head: 6, hy: 0.66 }] },
  stagger: { d: 3, k: [{ lean: -2, nU: 15, nL: 72, fU: 30, fL: 40, head: 0, nT: 10, fT: -8 }, { lean: -9, head: -10, nU: 22, nL: 66, fU: 48, fL: 36, nT: 10, fT: -8 }] },
  talk: { d: 2.4, k: [{ nU: 40, nL: 60, fU: 6, fL: 20, head: -2, nT: 6, fT: -6 }, { nU: 60, nL: 40, fU: 8, fL: 24, head: 2, nT: 6, fT: -6 }] },
  rest: { d: 4, k: [{ nT: 70, nK: -120, fT: 80, fK: -140, lean: -8, nU: 40, nL: 60, fU: -20, fL: 20, head: -4 }, { nT: 70, nK: -120, fT: 80, fK: -140, lean: -6, nU: 42, nL: 64, fU: -18, fL: 22, head: 2 }] },
  sink: { d: 3.6, k: [{ nU: 150, nL: 20, fU: 30, fL: 50, lean: -6, head: -20, nT: 6, fT: -4, fK: -8 }, { nU: 140, nL: 30, fU: 40, fL: 40, lean: -4, head: -14, nT: 6, fT: -4, fK: -8 }] }
};
function samplePose(name, ph) {
  const c = CLIPS[name] || CLIPS.idle, k = c.k, n = k.length;
  ph = ((ph % 1) + 1) % 1;
  const f = ph * n, i = Math.floor(f) % n, u = f - Math.floor(f), e = (1 - Math.cos(Math.PI * u)) / 2, a = k[i], b = k[(i + 1) % n], o = {};
  for (const key in a) { const va = a[key], vb = b[key] !== undefined ? b[key] : va; o[key] = va + (vb - va) * e; }
  for (const key in b) if (a[key] === undefined) o[key] = b[key];
  return o;
}
function rig(p) {
  const S = Math.sin, C = Math.cos, lean = (p.lean || 0) * DEG, hd = lean + (p.head || 0) * DEG;
  const dn = a => [S(a), C(a)], add = (o, d, l) => [o[0] + d[0] * l, o[1] + d[1] * l];
  const up = [S(lean), -C(lean)], fw = [C(lean), S(lean)];
  const hip = [0, 0], neck = add(hip, up, 0.3), sh = add(hip, up, 0.262);
  const head = add(add(neck, [S(hd), -C(hd)], 0.07), [C(hd), S(hd)], 0.008);
  const arm = (u, l, o) => { const a = lean + u * DEG, e = add(o, dn(a), 0.18), b = a + l * DEG, w = add(e, dn(b), 0.16), t = add(w, dn(b), 0.062); return { s: o, e, w, t }; };
  const leg = (t, k, o) => { const a = t * DEG, kn = add(o, dn(a), 0.245), b = a + k * DEG, an = add(kn, dn(b), 0.24), pf = [C(b), -S(b)], toe = add(add(an, pf, 0.078), dn(b), 0.026), heel = add(add(an, pf, -0.026), dn(b), 0.024); return { h: o, k: kn, a: an, toe, heel }; };
  const shF = add(sh, fw, -0.036), hipF = add(hip, fw, -0.03);
  const J = { hip, neck, sh, head, aN: arm(p.nU || 0, p.nL || 0, sh), aF: arm(p.fU || 0, p.fL || 0, shF), lN: leg(p.nT || 0, p.nK || 0, [hip[0], hip[1]]), lF: leg(p.fT || 0, p.fK || 0, hipF) };
  const set = new Set([J.hip, J.neck, J.sh, J.head]);
  for (const g of [J.aN, J.aF, J.lN, J.lF]) for (const k in g) set.add(g[k]);
  if (p.rot) { const r = p.rot * DEG, c = C(r), s = S(r); for (const q of set) { const x = q[0], y = q[1]; q[0] = x * c - y * s; q[1] = x * s + y * c; } }
  let dy;
  if (p.hy !== undefined) dy = -p.hy - J.hip[1];
  else {
    let m = -1e9; const c = (q, r) => { if (q[1] + r > m) m = q[1] + r; };
    for (const L of [J.lN, J.lF]) { c(L.toe, 0); c(L.heel, 0.004); c(L.k, 0.035); c(L.a, 0.02); }
    c(J.hip, 0.07); c(J.sh, 0.06); c(J.head, 0.068); c(J.aN.t, 0.01); c(J.aF.t, 0.01); dy = -m;
  }
  for (const q of set) q[1] += dy;
  const un = (a, b) => { const x = b[0] - a[0], y = b[1] - a[1], l = Math.hypot(x, y) || 1; return [x / l, y / l]; };
  J.up = un(J.hip, J.neck); J.fw = [-J.up[1], J.up[0]]; J.hu = un(J.neck, J.head); J.hf = [-J.hu[1], J.hu[0]];
  return J;
}
function limbPoly(pts, rads) {
  const n = pts.length, L = [], R = [], o = [];
  for (let i = 0; i < n; i++) { const a = pts[Math.max(0, i - 1)], b = pts[Math.min(n - 1, i + 1)], dx = b[0] - a[0], dy = b[1] - a[1], d = Math.hypot(dx, dy) || 1, nx = -dy / d, ny = dx / d, r = rads[i]; L.push([pts[i][0] + nx * r, pts[i][1] + ny * r]); R.push([pts[i][0] - nx * r, pts[i][1] - ny * r]); }
  const cap = (c, from, r, tip) => { const a0 = Math.atan2(from[1] - c[1], from[0] - c[0]), at = Math.atan2(tip[1], tip[0]); let dd = a0 + Math.PI / 2 - at; dd = Math.atan2(Math.sin(dd), Math.cos(dd)); const dir = Math.abs(dd) < Math.PI / 2 ? 1 : -1; for (let k = 1; k < 6; k++) { const a = a0 + dir * Math.PI * k / 6; o.push([c[0] + Math.cos(a) * r, c[1] + Math.sin(a) * r]); } };
  for (const p of L) o.push(p);
  cap(pts[n - 1], L[n - 1], rads[n - 1], [pts[n - 1][0] - pts[n - 2][0], pts[n - 1][1] - pts[n - 2][1]]);
  for (let i = n - 1; i >= 0; i--) o.push(R[i]);
  cap(pts[0], R[0], rads[0], [pts[0][0] - pts[1][0], pts[0][1] - pts[1][1]]);
  return o;
}
function caps(a, b, ra, rb, n = 5) {
  const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1e-6, ux = dx / L, uy = dy / L, nx = -uy, ny = ux, o = [];
  for (let i = 0; i <= n; i++) { const t = Math.PI / 2 - Math.PI * i / n, c = Math.cos(t), s = Math.sin(t); o.push([b[0] + (ux * c + nx * s) * rb, b[1] + (uy * c + ny * s) * rb]); }
  for (let i = 0; i <= n; i++) { const t = -Math.PI / 2 - Math.PI * i / n, c = Math.cos(t), s = Math.sin(t); o.push([a[0] + (ux * c + nx * s) * ra, a[1] + (uy * c + ny * s) * ra]); }
  return o;
}
const HEADS = {
  m: [[0, -0.075], [0.035, -0.068], [0.056, -0.035], [0.061, -0.014], [0.058, -0.004], [0.074, 0.014], [0.06, 0.021], [0.062, 0.029], [0.057, 0.035], [0.06, 0.041], [0.052, 0.058], [0.032, 0.068], [0.004, 0.058], [-0.028, 0.036], [-0.056, 0.004], [-0.054, -0.04], [-0.028, -0.068]],
  f: [[0, -0.072], [0.034, -0.065], [0.054, -0.034], [0.058, -0.014], [0.056, -0.004], [0.068, 0.013], [0.057, 0.02], [0.059, 0.028], [0.054, 0.034], [0.057, 0.04], [0.047, 0.056], [0.028, 0.064], [0.004, 0.054], [-0.026, 0.034], [-0.053, 0.004], [-0.052, -0.038], [-0.027, -0.066]]
};
const HAIR = {
  short: [[0.05, -0.05], [0.04, -0.072], [0.0, -0.085], [-0.04, -0.071], [-0.063, -0.035], [-0.063, 0.005], [-0.045, 0.032], [-0.022, 0.022], [-0.012, -0.012], [0.01, -0.036], [0.035, -0.046]],
  curly: [[0.054, -0.048], [0.05, -0.08], [0.02, -0.097], [-0.02, -0.098], [-0.06, -0.08], [-0.078, -0.04], [-0.074, 0.01], [-0.055, 0.04], [-0.026, 0.026], [-0.012, -0.01], [0.012, -0.036], [0.036, -0.04]],
  long: [[0.05, -0.05], [0.04, -0.075], [0, -0.087], [-0.046, -0.073], [-0.07, -0.03], [-0.078, 0.04], [-0.088, 0.13], [-0.075, 0.23], [-0.04, 0.26], [-0.024, 0.16], [-0.022, 0.06], [-0.012, -0.01], [0.012, -0.036], [0.036, -0.046]],
  fringe: [[-0.02, -0.06], [-0.05, -0.05], [-0.063, -0.02], [-0.063, 0.01], [-0.045, 0.034], [-0.022, 0.022], [-0.016, -0.02]]
};
const BEARD = {
  short: [[-0.006, 0.016], [0.012, 0.03], [0.03, 0.03], [0.05, 0.031], [0.062, 0.044], [0.056, 0.068], [0.03, 0.084], [0.004, 0.072], [-0.016, 0.044]],
  long: [[-0.006, 0.016], [0.012, 0.03], [0.03, 0.03], [0.05, 0.031], [0.063, 0.046], [0.062, 0.08], [0.05, 0.12], [0.034, 0.165], [0.016, 0.18], [0.004, 0.13], [-0.01, 0.08], [-0.018, 0.044]],
  full: [[-0.008, 0.012], [0.012, 0.03], [0.03, 0.03], [0.05, 0.031], [0.064, 0.046], [0.066, 0.09], [0.058, 0.15], [0.044, 0.21], [0.026, 0.25], [0.01, 0.2], [-0.006, 0.13], [-0.02, 0.06]]
};
const HAT = {
  cloth: [[0.058, -0.028], [0.052, -0.076], [0.0, -0.094], [-0.05, -0.082], [-0.078, -0.03], [-0.088, 0.06], [-0.094, 0.17], [-0.05, 0.2], [-0.036, 0.1], [-0.022, 0.03], [-0.006, -0.02], [0.03, -0.038]],
  veil: [[0.056, -0.03], [0.05, -0.078], [0.0, -0.095], [-0.05, -0.083], [-0.08, -0.03], [-0.095, 0.08], [-0.11, 0.24], [-0.06, 0.28], [-0.036, 0.14], [-0.022, 0.03], [-0.006, -0.02], [0.03, -0.04]],
  turban: [[0.06, -0.03], [0.064, -0.08], [0.034, -0.112], [-0.03, -0.118], [-0.072, -0.088], [-0.074, -0.03], [-0.03, -0.034]],
  crown: [[0.05, -0.058], [0.056, -0.102], [0.041, -0.084], [0.03, -0.116], [0.016, -0.09], [0.0, -0.122], [-0.015, -0.092], [-0.03, -0.116], [-0.042, -0.086], [-0.056, -0.102], [-0.056, -0.054]],
  tall: [[0.052, -0.058], [0.058, -0.16], [0.042, -0.15], [0.03, -0.178], [0.014, -0.156], [0.0, -0.182], [-0.016, -0.158], [-0.03, -0.18], [-0.046, -0.154], [-0.06, -0.164], [-0.058, -0.056]],
  helmet: [[0.064, -0.018], [0.062, -0.07], [0.022, -0.1], [-0.04, -0.096], [-0.072, -0.05], [-0.072, 0.028], [-0.034, 0.036], [-0.018, -0.016], [0.034, -0.018]],
  cap: [[0.054, -0.046], [0.05, -0.08], [0.0, -0.094], [-0.05, -0.08], [-0.064, -0.04], [0.0, -0.05]]
};
/* ---- la figure humaine ---- */
function drawFig(P, F, pose, t) {
  const J = rig(pose), h = F.h, fc = F.face || 1, b = F.base, lk = F.look, lw = Math.max(0.35, h / 170);
  const M = q => [b[0] + fc * q[0] * h, b[1] + q[1] * h], Ms = a => a.map(M);
  const add = (o, d, l) => [o[0] + d[0] * l, o[1] + d[1] * l];
  const amp0 = P.amp; P.amp = 0.5 * h / 140;
  const det = P.s * h > 55, fine = P.s * h > 110, HS = lk.child ? 1.4 : 1.12;
  const skin = lk.skin || 'y5r4', skinD = tadd(skin, 'k1r1'), robe = lk.robe, robeD = robe ? tadd(robe, 'k2') : null;
  const legT = lk.legs || skin, legD = tadd(legT, 'k1');
  const up = J.up, fw = J.fw, T_ = (al, ac) => [J.hip[0] + up[0] * al + fw[0] * ac, J.hip[1] + up[1] * al + fw[1] * ac];
  const H = (x, y) => (x *= HS, y *= HS, [J.head[0] + J.hf[0] * x - J.hu[0] * y, J.head[1] + J.hf[1] * x - J.hu[1] * y]), Hs = a => a.map(p => M(H(p[0], p[1])));
  const out = F.out = { hN: M(J.aN.t), hF: M(J.aF.t), head: M(J.head), wN: M(J.aN.w), wF: M(J.aF.w) };
  const sleeve = lk.sleeves || (robe ? 'long' : 'none');
  // ailes (anges)
  if (lk.wings) {
    const root = T_(0.22, -0.06), fl = Math.sin(t * 2.2) * 0.04;
    for (const s of [0, 1]) {
      const d = s ? 1 : 0.8, pts = [root, T_(0.38 + fl, -0.12 * d), T_(0.52 + fl, -0.3 * d), T_(0.44 + fl, -0.36 * d), T_(0.3, -0.34 * d), T_(0.16, -0.3 * d), T_(0.06, -0.2 * d), T_(0.1, -0.1)];
      P.shape(Ms(pts), s ? lk.wings : tadd(lk.wings, 'k1'), lw);
      if (det) for (let i = 1; i < 5; i++) P.line(Ms([T_(0.16 + i * 0.02, -0.08), T_(0.1 + i * 0.07 + fl, -0.3 * d)]), lw * 0.5);
    }
  }
  if (lk.halo && det) { const c = M(H(0, -0.01)); P.halo(c[0], c[1], h * 0.13, ['y2', 'y4', 'y6r1']); }
  // manteau (derrière le corps)
  if (lk.cloak) {
    const fl = Math.sin(t * 1.7 + (F.x || 0)) * 0.015;
    const lowB = J.lN.a[1] < J.lF.a[1] ? J.lF : J.lN, hem = add(lowB.k, [0, 1], lk.len === 'knee' ? 0.08 : 0.2);
    const pts = [T_(0.29, 0.03), T_(0.28, -0.08), T_(0.18, -0.12), [T_(0, -0.13)[0] - 0.03 + fl, T_(0, -0.13)[1]], [Math.min(J.lN.k[0], J.lF.k[0]) - 0.16 + fl, hem[1]], [Math.max(J.lN.k[0], J.lF.k[0]) - 0.02, hem[1] + 0.01], T_(0.02, 0.0), T_(0.2, 0.04)];
    P.shape(Ms(pts), lk.cloak, lw);
    if (det) for (let i = 0; i < 3; i++) P.line(Ms([T_(0.2 - i * 0.04, -0.1), [Math.min(J.lN.k[0], J.lF.k[0]) - 0.12 + i * 0.04 + fl, hem[1] - 0.01]]), lw * 0.6);
  }
  const limb = (a, bb, ra, rb, tn) => P.shape(Ms(caps(a, bb, ra, rb)), tn, lw);
  const hand = (A, tn) => { const d = [A.t[0] - A.w[0], A.t[1] - A.w[1]], L = Math.hypot(d[0], d[1]) || 1, u = [d[0] / L, d[1] / L], n = [-u[1], u[0]]; P.shape(Ms([add(A.w, n, 0.02), add(add(A.w, u, 0.045), n, 0.024), add(A.t, n, 0.012), add(A.t, u, 0.008), add(A.t, n, -0.014), add(add(A.w, u, 0.03), n, -0.026), add(A.w, n, -0.019)]), tn, lw * 0.8); };
  const foot = (Lg, tn) => { const up2 = [(Lg.k[0] - Lg.a[0]) * 0.18, (Lg.k[1] - Lg.a[1]) * 0.18]; P.shape(Ms([Lg.heel, add(Lg.a, up2, 1), [Lg.a[0] + (Lg.toe[0] - Lg.a[0]) * 0.5 + up2[0] * 0.3, Lg.a[1] + (Lg.toe[1] - Lg.a[1]) * 0.5 + up2[1] * 0.3], Lg.toe, [Lg.toe[0], Lg.toe[1] + 0.008], [Lg.heel[0], Lg.heel[1] + 0.01]]), tn, lw * 0.8); };
  const armDraw = (A, far) => {
    const bare = far ? skinD : skin, st = sleeve === 'none' ? bare : (far ? robeD || lk.sleeveT : lk.sleeveT || robe);
    const lp = (a, c, u) => [a[0] + (c[0] - a[0]) * u, a[1] + (c[1] - a[1]) * u];
    if (sleeve === 'long') P.shape(Ms(limbPoly([A.s, lp(A.s, A.e, .5), A.e, lp(A.e, A.w, .45), A.w], [.04, .036, .031, lk.wide ? .036 : .03, lk.wide ? .046 : .031])), st, lw);
    else if (sleeve === 'short') { P.shape(Ms(limbPoly([A.s, lp(A.s, A.e, .45), A.e, lp(A.e, A.w, .35), A.w], [.036, .033, .026, .028, .02])), bare, lw); P.shape(Ms(limbPoly([A.s, lp(A.s, A.e, .55)], [.042, .038])), st, lw); }
    else P.shape(Ms(limbPoly([A.s, lp(A.s, A.e, .45), A.e, lp(A.e, A.w, .35), A.w], [.036, .033, .026, .028, .02])), bare, lw);
    hand(A, bare);
  };
  const legDraw = (Lg, far) => {
    const tn = far ? legD : legT, lp = (a, c, u) => [a[0] + (c[0] - a[0]) * u, a[1] + (c[1] - a[1]) * u];
    P.shape(Ms(limbPoly([Lg.h, lp(Lg.h, Lg.k, .45), Lg.k, lp(Lg.k, Lg.a, .3), Lg.a], [.06, .052, .036, .04, .022])), tn, lw);
    foot(Lg, lk.feet === 'bare' ? (far ? skinD : skin) : lk.feet === 'boot' ? 'k6r2' : 'r5y5k3');
    if (lk.greaves) P.shape(Ms(limbPoly([lp(Lg.k, Lg.a, .05), lp(Lg.k, Lg.a, .4), lp(Lg.k, Lg.a, .85)], [.04, .043, .028])), lk.greaves, lw);
    if (lk.feet !== 'bare' && lk.feet !== 'boot' && det) P.line(Ms([lp(Lg.a, Lg.k, .12), lp(Lg.heel, Lg.toe, .55)]), lw * 0.6);
  };
  const props = (which) => { const hp = F.hold && F.hold[which]; if (hp) drawProp(P, hp, which === 'n' ? J.aN : J.aF, J, M, h, t, lw, F); };
  // bras lointain, jambe lointaine
  props('f'); armDraw(J.aF, true);
  legDraw(J.lF, true);
  // torse
  const torso = [T_(-0.02, -0.085), T_(0.1, -0.078), T_(0.2, -0.09), T_(0.27, -0.078), T_(0.3, -0.03), T_(0.305, 0.03), T_(0.27, 0.07), T_(0.21, lk.fem ? 0.1 : 0.095), T_(0.15, 0.078), T_(0.08, 0.078), T_(-0.02, 0.078), T_(-0.05, 0.03), T_(-0.05, -0.05)];
  P.shape(Ms(torso), lk.armor || (robe && !lk.skirt ? robe : skin), lw);
  if (!robe && !lk.armor && det) { P.line(Ms([T_(0.2, 0.08), T_(0.18, 0.02), T_(0.21, -0.01)]), lw * 0.5); P.line(Ms([T_(0.12, 0.05), T_(0.06, 0.05)]), lw * 0.4); }
  if (lk.armor) { for (let r = 0; r < 5; r++) for (let c = 0; c < 3; c++) { const q = M(T_(0.04 + r * 0.05, -0.05 + c * 0.05 + (r % 2) * 0.02)); if (det) P.line([[q[0] - 2, q[1]], [q[0], q[1] + 2.5 * h / 140], [q[0] + 2, q[1]]], lw * 0.5); } }
  legDraw(J.lN, false);
  // robe
  if (robe) drawRobe(P, J, lk, M, Ms, T_, h, lw, det);
  if (lk.sash) { P.shape(Ms([T_(0.14, -0.082), T_(0.145, 0.082), T_(0.1, 0.083), T_(0.095, -0.084)]), lk.sash, lw * 0.8); P.shape(Ms([T_(0.12, 0.06), T_(0.02, 0.085), T_(0.0, 0.07), T_(0.1, 0.05)]), lk.sash, lw * 0.6); }
  // tête
  limb([J.neck[0] - up[0] * 0.02, J.neck[1] - up[1] * 0.02], [J.neck[0] * 0.4 + J.head[0] * 0.6, J.neck[1] * 0.4 + J.head[1] * 0.6], 0.027, 0.025, skin);
  const hb = HAT[lk.head];
  if (hb && (lk.head === 'cloth' || lk.head === 'veil')) { /* tissu tombant derrière */ P.shape(Hs(hb), lk.ht || 'y2', lw); }
  else if (lk.hs === 'long') P.shape(Hs(HAIR.long), lk.hair || 'k7', lw);
  P.shape(Hs(lk.fem ? HEADS.f : HEADS.m), skin, lw);
  if (det) {
    const eye = M(H(0.039, -0.006));
    P.fill(P.disc(eye[0], eye[1], Math.max(0.35, h * 0.0062), 8), 'k9', { noKnock: true });
    P.line(Hs([[0.027, -0.013], [0.036, -0.016], [0.048, -0.012]]), lw * 0.45);
    P.line(Hs([[0.024, -0.024], [0.04, -0.028], [0.054, -0.023]]), lw * (lk.fem ? 0.55 : 0.9), { ink: 3 });
    P.line(Hs([[0.058, -0.004], [0.052, 0.014], [0.06, 0.019]]), lw * 0.4);
    if (!lk.beard) P.line(Hs([[0.046, 0.036], [0.058, 0.035]]), lw * 0.55, { ink: lk.fem ? 1 : 3 });
    P.shape(Hs([[-0.012, -0.012], [0.004, -0.01], [0.008, 0.012], [-0.004, 0.022], [-0.013, 0.006]]), tadd(skin, 'r1'), lw * 0.5);
    if (lk.fem) { const ck = M(H(0.034, 0.018)); P.fill(P.disc(ck[0], ck[1], h * 0.011, 8), 'r3', { noKnock: true }); }
    if (lk.old && fine) { P.line(Hs([[0.03, -0.045], [0.048, -0.043]]), lw * 0.3); P.line(Hs([[0.046, 0.005], [0.04, 0.02]]), lw * 0.3); }
  }
  if (lk.beard) { const bd = BEARD[lk.beard], bt = lk.bt || lk.hair || 'k7'; P.shape(Hs(bd), bt, lw); if (det) { P.line(Hs([[0.046, 0.03], [0.058, 0.028], [0.068, 0.036]]), lw * 0.7); const n = lk.beard === 'short' ? 2 : 4; for (let i = 0; i < n; i++) P.line(Hs([[0.012 + i * 0.012, 0.045], [0.014 + i * 0.01, 0.07 + (lk.beard === 'full' ? 0.12 : lk.beard === 'long' ? 0.07 : 0)]]), lw * 0.45); } }
  if (lk.hs && lk.hs !== 'long' && !(hb && lk.head !== 'crown' && lk.head !== 'tall' && lk.head !== 'cap')) P.shape(Hs(HAIR[lk.hs]), lk.hair || 'k7', lw);
  if (lk.hs === 'long' && !hb) { P.shape(Hs(HAIR.short), lk.hair || 'k7', lw * 0.8); if (det) P.line(Hs([[-0.02, -0.07], [-0.06, 0.0], [-0.07, 0.15]]), lw * 0.5); }
  if (hb) {
    if (lk.head === 'cloth' || lk.head === 'veil') { P.shape(Hs(hb.slice(0, 5).concat([[-0.02, -0.02], [0.03, -0.04]])), lk.ht || 'y2', lw); if (lk.head === 'cloth') P.shape(Hs([[0.056, -0.05], [0.0, -0.064], [-0.058, -0.052], [-0.06, -0.038], [0.0, -0.05], [0.057, -0.038]]), lk.band || 'k6', lw * 0.7); else if (lk.crown) P.shape(Hs(HAT.crown), 'y8r2', lw * 0.8); }
    else { P.shape(Hs(hb), lk.ht || 'y8r2', lw); if (lk.head === 'turban' && det) for (let i = 0; i < 3; i++) P.line(Hs([[0.06, -0.04 - i * 0.022], [0.0, -0.07 - i * 0.02], [-0.07, -0.04 - i * 0.018]]), lw * 0.5); if (lk.head === 'helmet') P.shape(Hs([[0.02, -0.1], [0.0, -0.15], [-0.07, -0.16], [-0.12, -0.1], [-0.06, -0.09]]), 'r7y3', lw); if ((lk.head === 'crown' || lk.head === 'tall') && det) P.line(Hs([[0.05, -0.066], [-0.056, -0.062]]), lw * 0.6, { ink: 1 }); }
  }
  if (lk.rays && det) { for (const s of [-1, 1]) { const o = H(0.01 + s * 0.022, -0.078); for (let i = -1; i <= 1; i++) { const a = -Math.PI / 2 + s * 0.35 + i * 0.16; P.line([M(o), M([o[0] + Math.cos(a) * 0.1 * J.hf[0] * 0 + Math.cos(a) * 0.07, o[1] + Math.sin(a) * 0.07])], lw * 0.9, { ink: 0 }); } } }
  // bras proche
  props('n'); armDraw(J.aN, false);
  if (F.hold && F.hold.nTop) drawProp(P, F.hold.nTop, J.aN, J, M, h, t, lw, F);
  P.amp = amp0;
}
function drawRobe(P, J, lk, M, Ms, T_, h, lw, det) {
  const add = (o, d, l) => [o[0] + d[0] * l, o[1] + d[1] * l], fw = J.fw, up = J.up;
  const len = lk.len || 'ankle', f = len === 'knee' ? 0.14 : len === 'thigh' ? -0.35 : len === 'floor' ? 1.0 : 0.8;
  const hemPt = Lg => f >= 0 ? [Lg.k[0] + (Lg.a[0] - Lg.k[0]) * f, Lg.k[1] + (Lg.a[1] - Lg.k[1]) * f] : [Lg.k[0] + (Lg.h[0] - Lg.k[0]) * -f, Lg.k[1] + (Lg.h[1] - Lg.k[1]) * -f];
  const A = hemPt(J.lN), B = hemPt(J.lF), pr = q => (q[0] - J.hip[0]) * fw[0] + (q[1] - J.hip[1]) * fw[1];
  let fr = pr(A) > pr(B) ? A : B, bk = fr === A ? B : A;
  const flare = len === 'knee' || len === 'thigh' ? 0.05 : 0.078, dn = [-up[0], -up[1]];
  let hemF = add(add(fr, fw, flare), dn, 0.01), hemB = add(add(bk, fw, -flare), dn, 0.012);
  if (len === 'floor') { hemF = add(hemF, dn, 0.03); hemB = add(add(hemB, dn, 0.03), fw, -0.06); }
  const top = lk.skirt ? 0.1 : 0.29;
  const back = lk.skirt ? [T_(0.11, -0.082), T_(0.02, -0.09)] : [T_(0.29, -0.035), T_(0.255, -0.09), T_(0.13, -0.084), T_(0.02, -0.09)];
  const front = lk.skirt ? [T_(0.11, 0.078), T_(0.02, 0.082)] : [T_(0.3, 0.036), T_(0.22, lk.fem ? 0.104 : 0.098), T_(0.13, 0.082), T_(0.02, 0.084)];
  const bl = back[back.length - 1], fl = front[front.length - 1];
  back.push(add([(bl[0] + hemB[0]) / 2, (bl[1] + hemB[1]) / 2], fw, -0.012), hemB);
  front.push(add([(fl[0] + hemF[0]) / 2, (fl[1] + hemF[1]) / 2], fw, 0.012), hemF);
  const hemMid = add([(hemB[0] + hemF[0]) / 2, (hemB[1] + hemF[1]) / 2], dn, 0.012);
  const outline = back.concat([hemMid], front.slice().reverse());
  if (lk.stripes) {
    P.fill(Ms(outline), lk.stripes[0]);
    const n = back.length;
    for (let i = 0; i < n - 1; i++) for (let s = 0; s < 2; s++) {
      const u0 = s / 2, u1 = (s + 1) / 2, lp = (a, c, u) => [a[0] + (c[0] - a[0]) * u, a[1] + (c[1] - a[1]) * u];
      const q = [lp(back[i], back[i + 1], u0), lp(front[i], front[i + 1], u0), lp(front[i], front[i + 1], u1), lp(back[i], back[i + 1], u1)];
      P.fill(Ms(q), lk.stripes[(i * 2 + s) % lk.stripes.length]);
    }
    P.outline(Ms(outline), lw);
  } else P.shape(Ms(outline), lk.robe, lw);
  // ombre du pli arrière
  const sh = back.map(q => add(q, fw, 0.03));
  P.fill(Ms(back.concat(sh.reverse())), tadd(lk.stripes ? lk.stripes[1] : lk.robe, 'k2'), { noKnock: false });
  if (lk.leafy) { const n = 7; for (let i = 0; i <= n; i++) { const q = [hemB[0] + (hemF[0] - hemB[0]) * i / n, hemB[1] + (hemF[1] - hemB[1]) * i / n]; P.shape(Ms([add(q, up, 0.03), add(add(q, fw, 0.02), up, 0.0), add(q, dn, 0.035), add(add(q, fw, -0.02), up, 0.0)]), i % 2 ? 'y6b6' : 'y5b5k1', lw * 0.5); } }
  if (det) {
    for (let i = 1; i <= 3; i++) { const u = i / 4, s0 = T_(0.08, -0.06 + 0.04 * i), e = [hemB[0] + (hemF[0] - hemB[0]) * u, hemB[1] + (hemF[1] - hemB[1]) * u]; P.line(Ms([s0, [(s0[0] + e[0]) / 2 + 0.01 * Math.sin(i * 3), (s0[1] + e[1]) / 2], e]), lw * 0.5); }
    if (lk.trim) P.line(Ms([hemB, hemMid, hemF]), lw * 2.2, { ink: 0 });
    if (!lk.skirt && lk.collar !== false) P.line(Ms([T_(0.3, -0.02), T_(0.27, 0.03), T_(0.3, 0.05)]), lw * 0.6);
  }
}
function drawProp(P, kind, A, J, M, h, t, lw, F) {
  const add = (o, d, l) => [o[0] + d[0] * l, o[1] + d[1] * l];
  const d0 = [A.t[0] - A.e[0], A.t[1] - A.e[1]], L = Math.hypot(d0[0], d0[1]) || 1, u = [d0[0] / L, d0[1] / L], n = [-u[1], u[0]];
  const Ms = a => a.map(M);
  switch (kind) {
    case 'staff': P.shape(Ms([add(A.w, u, -0.25), add(add(A.w, u, 0.85), n, 0.012), add(A.w, u, 0.86), add(A.w, n, 0.012)]).concat([]), 'r5y6k4', lw * 0.8); break;
    case 'staffV': { const a = add(A.w, [0, -1], 0.34), c = [A.w[0] + 0.03, 0.0]; P.shape(Ms([a, add(a, [1, 0], 0.016), add(c, [1, 0], 0.016), c]), 'r5y6k4', lw * 0.8); P.line(Ms([a, add(add(a, [0, -1], 0.04), [1, 0], 0.03), add(add(a, [0, -1], 0.03), [1, 0], 0.06)]), lw * 1.6); break; }
    case 'spear': { const a = add(A.w, [0, -1], 0.9), c = [A.w[0] + 0.02, 0.0]; P.shape(Ms([a, add(a, [1, 0], 0.014), add(c, [1, 0], 0.014), c]), 'r4y5k5', lw * 0.7); P.shape(Ms([add(a, [0, -1], 0.13), add(a, [1, 0], 0.03), [a[0] + 0.007, a[1] + 0.01], add(a, [1, 0], -0.018)]), 'k5b3', lw * 0.7); break; }
    case 'bigspear': { const a = add(A.w, u, -0.5), c = add(A.w, u, 0.75); P.shape(Ms([a, add(a, n, 0.022), add(c, n, 0.022), c]), 'r4y5k5', lw * 0.9); P.shape(Ms([add(c, u, 0.2), add(c, n, 0.04), add(c, n, -0.02)]), 'k6b3', lw); break; }
    case 'knife': P.shape(Ms([add(A.t, n, 0.012), add(A.t, u, 0.16), add(A.t, n, -0.01)]), 'b2k3', lw * 0.7); P.line(Ms([add(A.t, n, 0.02), add(A.t, n, -0.02)]), lw * 1.4); break;
    case 'tablets': {
      const c = [(J.aN.t[0] + J.aF.t[0]) / 2, (J.aN.t[1] + J.aF.t[1]) / 2 - 0.08];
      for (const s of [-1, 1]) { const x0 = c[0] + s * 0.045, w = 0.043, pts = [[x0 - w, c[1] + 0.09], [x0 - w, c[1] - 0.04]]; for (let i = 0; i <= 6; i++) { const a = Math.PI + Math.PI * i / 6; pts.push([x0 + Math.cos(a) * w, c[1] - 0.04 + Math.sin(a) * w]); } pts.push([x0 + w, c[1] + 0.09]); P.shape(Ms(pts), 'k2y3b1', lw); for (let r = 0; r < 5; r++) P.line(Ms([[x0 - w * 0.6, c[1] - 0.03 + r * 0.025], [x0 + w * 0.6, c[1] - 0.03 + r * 0.025]]), lw * 0.4); }
      break;
    }
    case 'shofar': { const m = add(add(J.head, J.hf, 0.07), J.hu, -0.035), pts = []; for (let i = 0; i <= 8; i++) { const s = i / 8; pts.push([m[0] + s * 0.2, m[1] - Math.sin(s * 2.4) * 0.06 - s * s * 0.05]); } const w0 = 0.008, w1 = 0.03, top = pts.map((p, i) => [p[0], p[1] - lerp(w0, w1, i / 8)]), bot = pts.map((p, i) => [p[0], p[1] + lerp(w0, w1, i / 8)]); P.shape(Ms(top.concat(bot.reverse())), 'y5r3k1', lw * 0.8); break; }
    case 'scepter': { const a = add(A.w, u, -0.05), c = add(A.w, u, 0.4); P.line(Ms([a, c]), h * 0.012, { ink: 0, taper: 0 }); P.line(Ms([a, c]), h * 0.004, { ink: 1, taper: 0.2 }); const q = M(c); P.shape(P.disc(q[0], q[1], h * 0.018, 10), 'y9r3', lw * 0.7); break; }
    case 'sling': { const a = t * TAU * 1.8, c = [A.t[0] + Math.cos(a) * 0.16, A.t[1] - 0.05 + Math.sin(a) * 0.08]; P.line(Ms([A.t, c]), lw * 0.7); const q = M(c); P.shape(P.disc(q[0], q[1], h * 0.014, 8), 'k4y2', lw * 0.5); break; }
    case 'sickle': { const pts = []; for (let i = 0; i <= 8; i++) { const a = -0.3 + i / 8 * 2.4; pts.push(add(add(A.t, u, Math.cos(a) * 0.06 + 0.04), n, Math.sin(a) * 0.06)); } P.line(Ms(pts), lw * 1.5, { ink: 3 }); break; }
    case 'lulav': { const a = A.w, c = add(add(A.w, [0, -1], 0.44), [1, 0], 0.05); P.line(Ms([a, c]), lw * 1.2); for (let i = 1; i < 7; i++) { const q = [a[0] + (c[0] - a[0]) * i / 7, a[1] + (c[1] - a[1]) * i / 7]; P.shape(Ms([q, [q[0] + 0.05, q[1] - 0.05], [q[0] + 0.01, q[1] - 0.02], [q[0] - 0.05, q[1] - 0.05]]), 'y6b6', lw * 0.4); } break; }
    case 'etrog': { const q = M(add(A.t, u, 0.01)); P.shape(P.disc(q[0], q[1], h * 0.026, 12).map((p, i) => [p[0] + (p[0] - q[0]) * 0.3, p[1]]), 'y9', lw * 0.6); break; }
    case 'sheaf': { const c = add(A.w, u, 0.02); for (let i = -3; i <= 3; i++) P.line(Ms([add(c, [0.3, 1], 0.08), add(c, [i * 0.08 - 0.2, -1], 0.16)]), lw * 0.9, { ink: 0 }); for (let i = -3; i <= 3; i++) { const q = M(add(c, [i * 0.08 - 0.2, -1], 0.17)); P.fill(P.disc(q[0], q[1], h * 0.012, 6), 'y8r2', {}); } P.line(Ms([add(c, [0, 1], -0.01), add(add(c, [0, 1], -0.01), [1, 0], 0.04)]), lw * 1.2, { ink: 1 }); break; }
    case 'branches': { const c = add(A.w, [0, -1], 0.04); for (let i = 0; i < 5; i++) { const a = add(c, [1, 0], -0.25 + i * 0.02), e = add(add(c, [1, 0], 0.3), [0, -1], 0.03 + i * 0.02); P.line(Ms([a, e]), lw * 0.9); for (let k = 1; k < 6; k++) { const q = [a[0] + (e[0] - a[0]) * k / 6, a[1] + (e[1] - a[1]) * k / 6]; P.shape(Ms([q, [q[0] + 0.03, q[1] - 0.04], [q[0] + 0.05, q[1] - 0.01]]), 'y5b6', lw * 0.3); } } break; }
    case 'fruit': { const q = M(add(A.t, u, 0.01)); P.shape(P.disc(q[0], q[1], h * 0.024, 10), 'r8y5', lw * 0.6); break; }
    case 'shield': { const c = add(A.w, n, 0.02), pts = []; for (let i = 0; i < 16; i++) { const a = i / 16 * TAU; pts.push([c[0] + Math.cos(a) * 0.06, c[1] + Math.sin(a) * 0.14]); } P.shape(Ms(pts), 'y7r4k2', lw); P.shape(Ms(pts.map(p => [c[0] + (p[0] - c[0]) * 0.35, c[1] + (p[1] - c[1]) * 0.35])), 'y9r2', lw * 0.6); break; }
    case 'bundle': { const c = add(J.sh, J.up, 0.08); P.shape(Ms([[c[0] - 0.1, c[1] + 0.02], [c[0] - 0.08, c[1] - 0.07], [c[0] + 0.02, c[1] - 0.08], [c[0] + 0.05, c[1] + 0.0]]), 'r4y5k2', lw); P.line(Ms([[c[0] - 0.05, c[1] - 0.075], [c[0] - 0.03, c[1] + 0.01]]), lw * 0.6); break; }
    case 'jarhead': { const c = add(J.head, J.hu, 0.1); P.shape(Ms([[c[0] - 0.035, c[1] + 0.02], [c[0] - 0.05, c[1] - 0.04], [c[0] - 0.02, c[1] - 0.08], [c[0] + 0.02, c[1] - 0.08], [c[0] + 0.05, c[1] - 0.04], [c[0] + 0.035, c[1] + 0.02]]), 'r5y6k1', lw); break; }
    case 'lamb': { const c = add(J.sh, J.up, 0.05); P.shape(Ms([[c[0] - 0.12, c[1] + 0.03], [c[0] - 0.12, c[1] - 0.05], [c[0] + 0.08, c[1] - 0.06], [c[0] + 0.12, c[1] - 0.02], [c[0] + 0.08, c[1] + 0.03]]), 'y1', lw); const q = M([c[0] + 0.13, c[1] - 0.04]); P.shape(P.disc(q[0], q[1], h * 0.025, 8), 'k2y1', lw * 0.6); break; }
    default: if (typeof PROPS2 !== 'undefined' && PROPS2[kind]) PROPS2[kind](P, A, J, M, h, t, lw, F, u, n, add); break;
    case 'torch': { const c = add(A.w, [0, -1], 0.12); P.line(Ms([A.w, c]), lw * 2); const q = M(c); Lib.flame(P, q[0], q[1], h * 0.06, h * 0.1, t); break; }
  }
}
/* ---- animaux ---- */
/* quadrupèdes : silhouette lissée, pattes articulées (coude, genou, jarret, boulet) */
function smooth(pts, k = 3) { const n = pts.length, o = []; for (let i = 0; i < n; i++) { const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n]; for (let j = 0; j < k; j++) { const t = j / k, t2 = t * t, t3 = t2 * t; o.push([0.5 * ((2 * p1[0]) + (-p0[0] + p2[0]) * t + (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t2 + (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t3), 0.5 * ((2 * p1[1]) + (-p0[1] + p2[1]) * t + (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 + (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3)]); } } return o; }
const BEAST = {
  sheep: { bl: .56, bh: .3, lh: .22, nk: [.08, -40], hd: [.16, 35, .07, .045], tone: 'y1', legT: 'k6', wool: 1, ears: 'side' },
  ram: { bl: .6, bh: .32, lh: .24, nk: [.1, -40], hd: [.17, 40, .075, .05], tone: 'y2r1', legT: 'k6', wool: 1, horns: 'curl', ears: 'side' },
  camel: { bl: .78, bh: .32, lh: .62, nk: [.44, -18, 'camel'], hd: [.2, 30, .06, .045], tone: 'y5r3k1', hump: 1, ears: 'small', tail: 1, pads: 1 },
  donkey: { bl: .66, bh: .3, lh: .42, nk: [.24, -45], hd: [.24, 50, .075, .05], tone: 'k3y2r1', ears: 'long', tail: 1, mane: 'k5' },
  lion: { bl: .74, bh: .32, lh: .34, nk: [.1, -25], hd: [.17, 25, .085, .06], tone: 'y6r2', ruff: 'r5y6k2', tail: 2, ears: 'round', paws: 1 },
  bull: { bl: .86, bh: .44, lh: .32, nk: [.12, -10], hd: [.2, 55, .1, .075], tone: 'r4y4k3', horns: 'bull', tail: 1, ears: 'side' },
  calf: { bl: .72, bh: .38, lh: .32, nk: [.12, -20], hd: [.19, 50, .09, .065], tone: 'y9r2', horns: 'bull', tail: 1, ears: 'side' },
  deer: { bl: .62, bh: .26, lh: .46, nk: [.3, -58], hd: [.17, 45, .06, .035], tone: 'r4y6k1', antler: 1, ears: 'long', tail: 0 },
  elephant: { bl: .95, bh: .56, lh: .38, nk: [.04, -20], hd: [.26, 70, .17, .11], tone: 'k3b1', trunk: 1, ears: 'big', pillar: 1, tail: 1 },
  giraffe: { bl: .62, bh: .3, lh: .7, nk: [.78, -68], hd: [.17, 40, .055, .04], tone: 'y6r2', spots: 1, ears: 'small', oss: 1, tail: 1 }
};
function drawBeast(P, kind, base, s, face, ph, walking) {
  const B = BEAST[kind], M = q => [base[0] + face * q[0] * s, base[1] + q[1] * s], Ms = a => a.map(M), lw = Math.max(0.4, s / 150);
  const amp0 = P.amp; P.amp = 0.4 * s / 100;
  const tone = B.tone, dark = tadd(tone, 'k2'), belly = -B.lh, top = -B.lh - B.bh, hb = B.bl / 2, legT = B.legT || tone;
  const sw = walking ? Math.sin(ph * TAU) * 0.42 : 0.04;
  const rot = (p, c, a) => { const x = p[0] - c[0], y = p[1] - c[1], co = Math.cos(a), si = Math.sin(a); return [c[0] + x * co - y * si, c[1] + x * si + y * co]; };
  const fore = (x, a, tn) => { const t = [x, top + B.bh * 0.5], pts = [t, [x - .01, belly + .02], [x + .012, belly + B.lh * 0.5], [x, -0.05], [x + .025, -0.004]].map((p, i) => i ? rot(p, t, a * (i > 2 ? 1.2 : 1)) : p); if (a < 0) pts[3] = rot(pts[3], pts[2], a * 0.8), pts[4] = rot(pts[4], pts[2], a * 0.9); const r = B.pillar ? [B.bh * .22, B.bh * .2, B.bh * .18, B.bh * .17, B.bh * .18] : [B.bh * .2, B.bh * .12, B.bh * .085, B.bh * .065, B.pads ? B.bh * .11 : B.bh * .075]; P.shape(Ms(limbPoly(pts, r)), tn, lw); hoof(pts[4], tn); };
  const hind = (x, a, tn) => { const t = [x, top + B.bh * 0.4], pts = [t, [x + .05, belly + .01], [x - .045, belly + B.lh * 0.52], [x - .015, -0.05], [x + .005, -0.004]].map((p, i) => i ? rot(p, t, a) : p); if (a > 0) pts[3] = rot(pts[3], pts[2], -a * 0.8), pts[4] = rot(pts[4], pts[2], -a * 0.8); const r = B.pillar ? [B.bh * .28, B.bh * .22, B.bh * .18, B.bh * .17, B.bh * .18] : [B.bh * .27, B.bh * .15, B.bh * .075, B.bh * .065, B.pads ? B.bh * .11 : B.bh * .075]; P.shape(Ms(limbPoly(pts, r)), tn, lw); hoof(pts[4], tn); };
  const hoof = (p, tn) => { if (B.wool || B.bl > .7 && !B.paws && !B.pads && !B.pillar) P.fill(Ms([[p[0] - .022, p[1] - .03], [p[0] + .03, p[1] - .03], [p[0] + .035, p[1] + .004], [p[0] - .025, p[1] + .004]]), 'k7', {}); };
  // queue
  if (B.tail) { const tb = [-hb - .01, top + B.bh * 0.2], sway = Math.sin(ph * TAU + 1) * 0.03; P.line(Ms([tb, [tb[0] - .06, tb[1] + .1 + sway], [tb[0] - .05 + sway, tb[1] + (B.tail === 2 ? .3 : .22)]]), lw * (B.pillar ? 2.4 : 1.6)); if (B.tail === 2) { const q = M([tb[0] - .05 + sway, tb[1] + .31]); P.shape(P.disc(q[0], q[1], s * .028, 8), 'r6y4k4', lw * .5); } }
  fore(hb - .1, -sw, tadd(legT, 'k2')); hind(-hb + .12, sw, tadd(legT, 'k2'));
  // corps
  let body = [[-hb + .04, top + .02], [-hb * .3, top + .035], [hb * .2, top + .02], [hb - .08, top - (B.hump ? 0 : .02)], [hb + .03, top + B.bh * .45], [hb - .05, belly + .01], [0, belly + .02], [-hb + .1, belly - B.bh * .08], [-hb - .03, top + B.bh * .4]];
  body = smooth(body, 4);
  if (B.wool) body = body.map((p, i) => [p[0] + Math.cos(i * 1.3) * .008, p[1] + Math.sin(i * 1.7) * .012]);
  if (B.hump) P.shape(Ms(smooth([[-hb * .5, top + .03], [-hb * .15, top - B.bh * .5], [hb * .25, top - B.bh * .45], [hb * .45, top + .03]], 4)), tone, lw);
  P.shape(Ms(body), tone, lw);
  P.fill(Ms(body.filter(p => p[1] > top + B.bh * .62)), tadd(tone, 'k1b1'), { noKnock: true });
  if (B.wool && P.detail) for (let i = 0; i < 12; i++) { const q = M([(h2(i, 1, 7) - .5) * B.bl * .85, top + B.bh * (.2 + h2(i, 2, 7) * .55)]); P.line([[q[0] - s * .02, q[1]], [q[0], q[1] - s * .015], [q[0] + s * .02, q[1]]], lw * .6); }
  if (B.spots) for (let i = 0; i < 11; i++) { const q = M([(h2(i, 1, 3) - .5) * B.bl * .8, top + B.bh * (.15 + h2(i, 2, 3) * .6)]); P.fill(P.disc(q[0], q[1], s * .028, 6).map((p, k) => [p[0] + Math.cos(k) * s * .006, p[1]]), 'r6y6k2', { noKnock: true }); }
  // cou et tête
  const nb = [hb - .06, top + B.bh * .25], na = B.nk[1] * DEG, bob = walking ? Math.sin(ph * TAU * 2) * .012 : Math.sin(ph * TAU * .5) * .01;
  const nt = [nb[0] + Math.cos(na) * B.nk[0], nb[1] + Math.sin(na) * B.nk[0] + bob];
  if (B.nk[2] === 'camel') { const mid = [nb[0] + B.nk[0] * .55, nb[1] + .06]; P.shape(Ms(limbPoly([nb, mid, [mid[0] + .1, mid[1] - .22 + bob]], [B.bh * .32, B.bh * .2, B.bh * .17])), tone, lw); nt[0] = mid[0] + .1; nt[1] = mid[1] - .22 + bob; }
  else if (B.nk[0] > .05) P.shape(Ms(limbPoly([nb, [(nb[0] + nt[0]) / 2, (nb[1] + nt[1]) / 2], nt], [B.bh * .36, B.bh * .26, B.bh * .2])), tone, lw);
  if (B.ruff) P.shape(Ms(smooth(Lib.bumpy(P, nt[0] - .02, nt[1] + .02, B.bh * .62, B.bh * .7, 10), 1)), B.ruff, lw);
  if (B.mane && P.detail) P.line(Ms([[nb[0] - .02, nb[1] - B.bh * .25], nt]), lw * 2.2, { ink: 3, lvl: 6 });
  if (B.ears === 'big') P.shape(Ms(smooth([[nt[0] - .02, nt[1] - .1], [nt[0] - .16, nt[1] - .06], [nt[0] - .17, nt[1] + .12], [nt[0] - .06, nt[1] + .16], [nt[0] + .01, nt[1] + .04]], 3)), tadd(tone, 'k1r1'), lw);
  const ha = B.hd[1] * DEG, mz = [nt[0] + Math.cos(ha) * B.hd[0], nt[1] + Math.sin(ha) * B.hd[0]];
  if (B.ears === 'long') for (const e of [0, .025]) P.shape(Ms([[nt[0] - .01 - e, nt[1] - .01], [nt[0] - .05 - e, nt[1] - .17], [nt[0] + .02 - e, nt[1] - .03]]), dark, lw * .7);
  if (B.ears === 'side' || B.ears === 'small' || B.ears === 'round') P.shape(Ms([[nt[0] - .01, nt[1] - .005], [nt[0] - .09, nt[1] + (B.ears === 'side' ? .03 : -.04)], [nt[0] - .02, nt[1] + .03]]), dark, lw * .7);
  if (B.oss) for (const e of [0, .02]) { P.line(Ms([[nt[0] - e, nt[1] - .02], [nt[0] - .01 - e, nt[1] - .08]]), lw * 1.4); P.fill(Ms(P.disc(nt[0] - .01 - e, nt[1] - .085, .012, 6)), 'k6', {}); }
  if (B.trunk) { const tk = [mz, [mz[0] + .06, mz[1] + .12], [mz[0] + .03 + bob * 2, mz[1] + .28], [mz[0] + .08, mz[1] + .34]]; P.shape(Ms(limbPoly(tk, [.07, .05, .03, .022])), tone, lw); P.shape(Ms([[mz[0] - .02, mz[1] - .01], [mz[0] + .12, mz[1] + .04], [mz[0] + .14, mz[1] + .01], [mz[0] - .01, mz[1] - .04]]), 'y1', lw * .7); }
  P.shape(Ms(limbPoly([nt, mz], [B.hd[2], B.hd[3]])), B.wool ? 'k2y1' : tone, lw);
  const eye = M([nt[0] + Math.cos(ha) * B.hd[0] * .3 - .005, nt[1] + Math.sin(ha) * B.hd[0] * .3 - B.hd[2] * .45]); P.fill(P.disc(eye[0], eye[1], Math.max(0.35, s * .011), 6), 'k9', { noKnock: true });
  if (P.detail && !B.trunk) { const n0 = M([mz[0] - .005, mz[1] - B.hd[3] * .3]); P.fill(P.disc(n0[0], n0[1], Math.max(.3, s * .007), 5), 'k8', { noKnock: true }); P.line(Ms([[mz[0] - .03, mz[1] + B.hd[3] * .5], [mz[0] + .005, mz[1] + B.hd[3] * .6]]), lw * .5); }
  if (B.horns === 'curl') { const c = [nt[0] - .005, nt[1] - .01], pts = []; for (let i = 0; i <= 16; i++) { const a = -1.6 + i / 16 * 5.4, r = .075 * (1 - i / 20); pts.push([c[0] - .02 + Math.cos(a) * r, c[1] + .02 + Math.sin(a) * r]); } P.line(Ms(pts), s * .035, { ink: 0, lvl: 8 }); P.line(Ms(pts), lw * .8); for (let i = 2; i < 15; i += 2) P.line(Ms([pts[i], [pts[i][0] + (c[0] - .02 - pts[i][0]) * .3, pts[i][1] + (c[1] + .02 - pts[i][1]) * .3]]), lw * .4); }
  if (B.horns === 'bull') for (const e of [0, .035]) P.shape(Ms(limbPoly([[nt[0] - e, nt[1] - .02], [nt[0] - .05 - e, nt[1] - .08], [nt[0] - .01 - e, nt[1] - .15]], [.018, .014, .005])), 'y3k1', lw * .7);
  if (B.antler) for (const e of [0, .03]) { P.line(Ms([[nt[0] - e, nt[1] - .03], [nt[0] - .03 - e, nt[1] - .18], [nt[0] + .03 - e, nt[1] - .28]]), lw * 1.4); P.line(Ms([[nt[0] - .025 - e, nt[1] - .12], [nt[0] + .04 - e, nt[1] - .16]]), lw * 1.1); P.line(Ms([[nt[0] - .03 - e, nt[1] - .2], [nt[0] - .09 - e, nt[1] - .25]]), lw * 1.1); }
  if (B.ruff && P.detail) for (let i = 0; i < 6; i++) { const a = i / 6 * TAU, q = [nt[0] - .02 + Math.cos(a) * B.bh * .45, nt[1] + .02 + Math.sin(a) * B.bh * .5]; P.line(Ms([q, [q[0] + Math.cos(a) * .04, q[1] + Math.sin(a) * .05]]), lw * .6); }
  fore(hb - .13, sw, legT); hind(-hb + .09, -sw, legT);
  P.amp = amp0;
}
function drawFish(P, x, y, s, face, tn = 'b5y3') { const M = q => [x + face * q[0] * s, y + q[1] * s]; P.shape([M([-0.5, 0]), M([-0.2, -0.22]), M([0.25, -0.2]), M([0.5, 0]), M([0.25, 0.2]), M([-0.2, 0.2])], tn, 0.6); P.shape([M([-0.45, 0]), M([-0.75, -0.22]), M([-0.68, 0]), M([-0.75, 0.22])], tadd(tn, 'k1'), 0.5); const e = M([0.3, -0.05]); P.fill(P.disc(e[0], e[1], s * 0.05, 6), 'k9', { noKnock: true }); }
function drawSnake(P, pts, w, tn = 'y7b4') {
  const L = [], R = [], n = pts.length;
  for (let i = 0; i < n; i++) { const a = pts[Math.max(0, i - 1)], b = pts[Math.min(n - 1, i + 1)], dx = b[0] - a[0], dy = b[1] - a[1], d = Math.hypot(dx, dy) || 1, ww = w * (i < n - 3 ? 0.3 + 0.7 * (i / n) : 1.2); L.push([pts[i][0] - dy / d * ww, pts[i][1] + dx / d * ww]); R.push([pts[i][0] + dy / d * ww, pts[i][1] - dx / d * ww]); }
  P.shape(L.concat(R.reverse()), tn, 0.8);
  for (let i = 2; i < n - 2; i += 2) P.line([L[i], R[n - 1 - i]], 0.9, { ink: 1 });
  const h = pts[n - 1]; P.fill(P.disc(h[0] + 2, h[1] - 1, 1, 6), 'k9', { noKnock: true }); P.line([[h[0] + 4, h[1]], [h[0] + 9, h[1] + 1], [h[0] + 11, h[1] - 1]], 0.5, { ink: 1 });
}
/* ---- personnages : trajets en boucle ---- */
function prepChar(c) {
  c.speed = c.speed || 34; c.h = c.h || 140; c.t0 = c.t0 || 0;
  if (!c.path) { c.cycle = 0; return c; }
  let T = 0; c.segs = [];
  const n = c.path.length;
  for (let i = 0; i < n; i++) {
    const a = c.path[i], b = c.path[(i + 1) % n];
    const w = a.w || 0; if (w) { c.segs.push({ t0: T, t1: T + w, wait: a }); T += w; }
    if (c.loop === false && i === n - 1) break;
    const d = Math.hypot(b.x - a.x, b.y - a.y, (b.z || 0) - (a.z || 0));
    if (d > 0.1 && !b.jump) { const dt = d / (a.sp || c.speed); c.segs.push({ t0: T, t1: T + dt, a, b, d }); T += dt; }
  }
  c.cycle = T; return c;
}
function charState(c, t) {
  if (!c.path) return { x: c.x, y: c.y, z: c.z || 0, face: c.face || 1, clip: c.clip || 'idle', ph: (t + c.t0) / (CLIPS[c.clip || 'idle'] || CLIPS.idle).d, over: c.over, walking: false };
  const tt = ((t + c.t0) % c.cycle + c.cycle) % c.cycle;
  let prevFace = c.face || 1;
  for (let i = 0; i < c.segs.length; i++) {
    const s = c.segs[i];
    if (s.a) { const sdx = ((s.b.x - s.a.x) - (s.b.y - s.a.y)); if (Math.abs(sdx) > 1) prevFace = sdx > 0 ? 1 : -1; else if (s.a.f) prevFace = s.a.f; }
    if (tt < s.t1) {
      if (s.wait) { const w = s.wait, cl = w.c || c.idle || 'idle'; let face = w.f || prevFace; if (!w.f) { for (let j = i - 1; j >= 0; j--) if (c.segs[j].a) { const q = c.segs[j], sdx = (q.b.x - q.a.x) - (q.b.y - q.a.y); if (Math.abs(sdx) > 1) { face = sdx > 0 ? 1 : -1; break; } } } return { x: w.x, y: w.y, z: w.z || 0, face, clip: cl, ph: (tt - s.t0) / (CLIPS[cl] || CLIPS.idle).d, over: w.o || null, walking: false }; }
      const u = (tt - s.t0) / (s.t1 - s.t0), a = s.a, b = s.b;
      const walkClip = a.c || c.walk || 'walk';
      return { x: lerp(a.x, b.x, u), y: lerp(a.y, b.y, u), z: lerp(a.z || 0, b.z || 0, u), face: prevFace, clip: walkClip, ph: walkClip === 'walk' ? (u * s.d) / (c.h * 0.95) : (tt - s.t0) / (CLIPS[walkClip] || CLIPS.idle).d, over: a.o || c.over || null, walking: true };
    }
  }
  const p = c.path[0]; return { x: p.x, y: p.y, z: p.z || 0, face: 1, clip: 'idle', ph: 0, walking: false };
}
function renderChar(P, c, t) {
  const st = charState(c, t);
  const base = P.I(st.x, st.y, st.z);
  if (c.beast) { drawBeast(P, c.beast, base, c.h, st.face, st.walking ? st.ph * 0.95 * c.h / (c.h * 0.9) : t / 3, st.walking); return st; }
  if (!c.noShadow) { const g = P.I(st.x, st.y, c.gz !== undefined ? c.gz : st.z); P.fill(P.disc(g[0], g[1], c.h * 0.16, 16).map(p => [p[0], g[1] + (p[1] - g[1]) * 0.36]), 'k2b1', { noKnock: true }); }
  let pose = samplePose(st.clip, st.ph);
  const ov = st.over || c.over; if (ov) Object.assign(pose, samplePose(ov, t / (CLIPS[ov] || CLIPS.idle).d));
  const F = { h: c.h, face: st.face, base, look: c.look, hold: c.hold, x: st.x };
  if (c.clipFn) { const q = c.clipFn(P), p = new Path2D(); p.moveTo(q[0][0], q[0][1]); for (const v of q) p.lineTo(v[0], v[1]); p.closePath(); P.ctx.save(); P.ctx.clip(p); }
  drawFig(P, F, pose, t);
  if (c.clipFn) P.ctx.restore();
  c.out = F.out; return st;
}
