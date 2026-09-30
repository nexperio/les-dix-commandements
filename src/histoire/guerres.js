/* L'HISTOIRE D'ISRAËL · feuille ו · Guerres et accords · 1956 à 1999 */
const hgMan = o => Object.assign({ skin: 'y5r4', hs: 'short', hair: 'k7', robe: 'k6b2', len: 'thigh', sleeves: 'long', legs: 'k7b1', feet: 'boot' }, o);
Object.assign(LK, {
  hgSuit: hgMan({}),
  hgSuitB: hgMan({ robe: 'b6k2', legs: 'b6k3', hair: 'k5' }),
  hgSuitG: hgMan({ old: 1, hs: 'fringe', hair: 'k2', robe: 'k4b1', legs: 'k5b1' }),
  hgSuitBr: hgMan({ skin: 'y6r4k1', hair: 'k8', robe: 'r4y4k3', legs: 'r4y4k4' }),
  hgSuitL: hgMan({ skin: 'y6r5k2', hair: 'k8', robe: 'y3r2k2', legs: 'y3r2k3' }),
  hgSuitKef: hgMan({ skin: 'y6r4k1', hair: 'k8', beard: 'short', bt: 'k6', robe: 'k5r1', legs: 'k6r1', head: 'cloth', ht: 'y1', band: 'k8' }),
  hgLady: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k7r2', robe: 'r5b3k1', len: 'knee', sleeves: 'long', legs: 'y4r3k1', feet: 'boot' },
  hgLady2: { fem: 1, skin: 'y6r4k1', hs: 'long', hair: 'k8', robe: 'b5y2k1', len: 'knee', sleeves: 'long', legs: 'y5r3k1', feet: 'boot' },
  hgSadat: hgMan({ skin: 'y6r5k2', hs: 'fringe', hair: 'k8', robe: 'k7b1', legs: 'k7b2' }),
  hgBegin: hgMan({ old: 1, hs: 'fringe', hair: 'k2', robe: 'k6b1', legs: 'k6b2' }),
  hgCarter: hgMan({ hair: 'y3k2', robe: 'b6k1', legs: 'b6k2' }),
  hgRabin: hgMan({ old: 1, hair: 'k2', robe: 'k7b1', legs: 'k7b2' }),
  hgArafat: hgMan({ skin: 'y6r4k1', beard: 'short', bt: 'k4', hair: 'k5', robe: 'y4b3k3', legs: 'y4b3k4', head: 'cloth', ht: 'y1', band: 'k8' }),
  hgClinton: hgMan({ hair: 'k2y1', robe: 'b7k2', legs: 'b7k3' }),
  hgSoldier: hgMan({ skin: 'y6r4k1', hair: 'k8', robe: 'y4b3k3', legs: 'y4b3k4', sash: 'k6' }),
  hgSoldier2: hgMan({ hs: 'curly', hair: 'k7r2', robe: 'y4b3k3', legs: 'y4b3k4', sash: 'k6' }),
  hgUN: hgMan({ skin: 'y5r4', hair: 'y5r3k2', robe: 'y4r2k2', legs: 'y4r2k3', sash: 'k5' }),
  hgUN2: hgMan({ skin: 'y6r5k3', hair: 'k9', robe: 'y4r2k2', legs: 'y4r2k3', sash: 'k5' }),
  hgMnf: hgMan({ hair: 'k6', robe: 'y4b2k2', legs: 'y4b2k3', sash: 'k6', head: 'cap', ht: 'r7k1' }),
  hgFedai: hgMan({ skin: 'y6r4k1', hair: 'k8', beard: 'short', bt: 'k8', robe: 'y4b3k2', legs: 'y4b3k3', head: 'cloth', ht: 'y1', band: 'k8' }),
  hgFedai2: hgMan({ skin: 'y6r5k1', hs: 'curly', hair: 'k8', robe: 'y5b3k2', legs: 'y4b3k4' }),
  hgArabM: { skin: 'y6r4k1', hs: 'short', hair: 'k8', beard: 'short', bt: 'k8', robe: 'y2k1', len: 'ankle', sleeves: 'long', head: 'cloth', ht: 'y1', band: 'k8', feet: 'sandal' },
  hgArabM2: { skin: 'y6r5k2', hs: 'short', hair: 'k8', robe: 'b2k2', len: 'ankle', sleeves: 'long', head: 'turban', ht: 'y1b1', feet: 'sandal' },
  hgArabOld: { old: 1, skin: 'y6r4k1', hs: 'fringe', hair: 'k2', beard: 'short', bt: 'k2', robe: 'k3y1', len: 'ankle', sleeves: 'long', cloak: 'r4y4k4', head: 'cloth', ht: 'y1', band: 'k8', feet: 'sandal' },
  hgArabW: { fem: 1, skin: 'y6r4k1', hs: 'long', hair: 'k8', robe: 'k7r2', len: 'floor', trim: 1, sleeves: 'long', head: 'veil', ht: 'y1', sash: 'r7y2' },
  hgArabW2: { fem: 1, skin: 'y5r4k1', hs: 'long', hair: 'k8', robe: 'b6r2k1', len: 'floor', sleeves: 'long', head: 'veil', ht: 'y2r1', sash: 'y6r3' },
  hgArabKid: { child: 1, skin: 'y6r4k1', hs: 'curly', hair: 'k8', robe: 'r5y4', len: 'thigh', sleeves: 'short', legs: 'b5k2', feet: 'sandal' },
  hgPupil: hgMan({ skin: 'y6r4k1', hs: 'curly', hair: 'k8', robe: 'b3y1', sleeves: 'short', legs: 'b6k3' }),
  hgPupil2: hgMan({ skin: 'y6r5k1', hair: 'k8', robe: 'y1b1', sleeves: 'short', legs: 'k6b2' }),
  hgPupilG: { fem: 1, skin: 'y6r4k1', hs: 'long', hair: 'k8', robe: 'b5k1', stripes: ['b5k1', 'y1b2'], len: 'knee', sleeves: 'long', legs: 'k6b2', head: 'veil', ht: 'y1', feet: 'boot' },
  hgPupilG2: { fem: 1, skin: 'y6r5k1', hs: 'long', hair: 'k8', robe: 'b5k1', stripes: ['b5k1', 'y1b2'], len: 'knee', sleeves: 'long', legs: 'k6b2', feet: 'boot' },
  hgCivil: hgMan({ robe: 'y1b1', sleeves: 'short', legs: 'y4r2k2', hair: 'k7r2', head: 'cap', ht: 'k8' }),
  hgCivil2: hgMan({ robe: 'y1', legs: 'k7b1', hs: 'curly', hair: 'k8', beard: 'short', bt: 'k8', head: 'cap', ht: 'y1b1', skin: 'y6r4k1' }),
  hgCivil3: hgMan({ robe: 'y1b1', legs: 'b6k3', hair: 'r5y3k3', head: 'cap', ht: 'b6k2' }),
  hgRabbi: { old: 1, skin: 'y5r4', hs: 'fringe', hair: 'k2', beard: 'full', bt: 'k2', robe: 'k7b1', len: 'knee', sleeves: 'long', legs: 'k7', head: 'cap', ht: 'k8', feet: 'boot' },
  hgIsrW: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k7r2', robe: 'y1b1', len: 'knee', sleeves: 'short', sash: 'b5', feet: 'sandal' },
  hgIsrW2: { fem: 1, old: 1, skin: 'y5r4k1', hs: 'long', hair: 'k2', robe: 'b4r2k1', len: 'knee', sleeves: 'long', legs: 'y4r3k2', head: 'veil', ht: 'y2b1', feet: 'boot' },
  hgIsrBoy: { child: 1, skin: 'y5r4', hs: 'curly', hair: 'k7', robe: 'y1', len: 'thigh', sleeves: 'short', legs: 'b6k2', head: 'cap', ht: 'b5', feet: 'sandal' },
  hgEthM: { skin: 'r5y4k5', hs: 'short', hair: 'k9', beard: 'short', bt: 'k9', robe: 'y1', len: 'ankle', sleeves: 'long', cloak: 'y1b1', feet: 'sandal' },
  hgEthOld: { old: 1, skin: 'r5y4k5', hs: 'fringe', hair: 'k1', beard: 'full', bt: 'k1', robe: 'y1b1', len: 'ankle', sleeves: 'long', cloak: 'y1', head: 'turban', ht: 'y1', feet: 'sandal' },
  hgEthW: { fem: 1, skin: 'r5y4k5', hs: 'long', hair: 'k9', robe: 'y1', len: 'floor', trim: 1, sleeves: 'long', head: 'veil', ht: 'y1b1', sash: 'r6y3' },
  hgEthW2: { fem: 1, skin: 'r5y4k4', hs: 'long', hair: 'k9', robe: 'y1b1', len: 'floor', sleeves: 'long', head: 'veil', ht: 'y1', sash: 'y6b4' },
  hgEthKid: { child: 1, skin: 'r5y4k5', hs: 'curly', hair: 'k9', robe: 'y1', len: 'knee', sleeves: 'short', feet: 'bare' },
  hgRusM: hgMan({ hair: 'k4', beard: 'short', bt: 'k4', robe: 'k5r2', len: 'knee', legs: 'k7' }),
  hgRusW: { fem: 1, skin: 'y4r3', hs: 'long', hair: 'y5r3k1', robe: 'r5b3k1', len: 'knee', sleeves: 'long', legs: 'k4', head: 'veil', ht: 'r6y4', feet: 'boot' },
  hgRusGirl: { child: 1, fem: 1, skin: 'y4r3', hs: 'long', hair: 'y6r3', robe: 'b4r2', len: 'knee', sleeves: 'long', legs: 'y1b1', feet: 'boot' },
  hgYouth: hgMan({ hs: 'curly', hair: 'k7r2', robe: 'y1b1', sleeves: 'short', legs: 'b6k2' }),
  hgYouth2: hgMan({ skin: 'y6r4k1', hair: 'k8', robe: 'r6y3', sleeves: 'short', legs: 'b6k3' }),
  hgYouthG: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k7r2', robe: 'y1', len: 'thigh', sleeves: 'short', legs: 'b6k2', feet: 'boot' },
  hgYouthG2: { fem: 1, skin: 'y5r4k1', hs: 'long', hair: 'y6r3k1', robe: 'b4y2', len: 'thigh', sleeves: 'long', legs: 'b6k3', feet: 'boot' },
  hgPress: hgMan({ hs: 'curly', hair: 'r5y3k3', robe: 'y4r3k2', legs: 'k6b1' })
});
Object.assign(CLIPS, {
  hgShake: { d: 1.4, k: [{ nU: 62, nL: 24, fU: 2, fL: 14, lean: 5, head: -2, nT: 8, fT: -8 }, { nU: 66, nL: 18, fU: 4, fL: 16, lean: 6, head: 2, nT: 8, fT: -8 }] },
  hgClasp: { d: 1.4, k: [{ nU: 80, nL: -150, fU: 6, fL: 16, lean: 2, nT: 5, fT: -5 }, { nU: 84, nL: -146, fU: 8, fL: 18, lean: 3, head: 3, nT: 5, fT: -5 }] },
  hgOpen: { d: 3, k: [{ nU: 72, nL: 10, fU: -64, fL: -12, head: -3, nT: 6, fT: -6 }, { nU: 78, nL: 6, fU: -70, fL: -8, head: 3, nT: 6, fT: -6 }] },
  hgVote: { d: 3.2, k: [{ nT: 86, nK: -86, fT: 82, fK: -80, hy: 0.3, lean: -2, nU: 150, nL: 12, fU: 18, fL: 64 }, { nT: 86, nK: -86, fT: 82, fK: -80, hy: 0.3, lean: -3, head: -4, nU: 158, nL: 6, fU: 18, fL: 66 }] },
  hgSitWrite: { d: 2.2, k: [{ nT: 86, nK: -86, fT: 82, fK: -80, hy: 0.3, lean: 12, head: 16, nU: 48, nL: 44, fU: 40, fL: 52 }, { nT: 86, nK: -86, fT: 82, fK: -80, hy: 0.3, lean: 14, head: 20, nU: 54, nL: 36, fU: 42, fL: 50 }] },
  hgClap: { d: 0.7, k: [{ nT: 86, nK: -86, fT: 82, fK: -80, hy: 0.3, lean: 2, nU: 50, nL: 70, fU: 44, fL: 80 }, { nT: 86, nK: -86, fT: 82, fK: -80, hy: 0.3, lean: 3, nU: 56, nL: 86, fU: 50, fL: 94 }] },
  hgPhoto: { d: 2.6, k: [{ nU: 58, nL: 112, fU: 50, fL: 116, lean: 4, head: 2, nT: 10, fT: -10 }, { nU: 62, nL: 108, fU: 54, fL: 112, lean: 8, head: 4, nT: 10, fT: -10 }] },
  hgKneelPhoto: { d: 2.6, k: [{ nT: 4, nK: -95, fT: 70, fK: -80, lean: 4, nU: 58, nL: 112, fU: 50, fL: 116 }, { nT: 4, nK: -95, fT: 70, fK: -80, lean: 8, nU: 62, nL: 108, fU: 54, fL: 112 }] },
  hgWaveHi: { d: 0.9, k: [{ nU: 150, nL: 24, fU: 8, fL: 16, head: -6, nT: 6, fT: -6 }, { nU: 164, nL: -14, fU: 10, fL: 18, head: -8, nT: 6, fT: -6 }] },
  hgLean: { d: 3, k: [{ lean: 22, head: 12, nU: 62, nL: 14, fU: 48, fL: 30, nT: 6, fT: -6 }, { lean: 26, head: 16, nU: 70, nL: 8, fU: 50, fL: 28, nT: 6, fT: -6 }] },
  hgClapS: { d: 0.7, k: [{ nU: 50, nL: 70, fU: 44, fL: 80, nT: 5, fT: -5 }, { nU: 56, nL: 86, fU: 50, fL: 94, nT: 5, fT: -5, head: 2 }] },
  hgDaven: { d: 1.8, k: [{ lean: 2, head: 10, nU: 36, nL: 82, fU: 30, fL: 88, nT: 4, fT: -4 }, { lean: 13, head: 16, nU: 38, nL: 80, fU: 32, fL: 86, nT: 4, fT: -4 }] },
  hgTouch: { d: 4, k: [{ lean: 8, head: 14, nU: 96, nL: 10, fU: 88, fL: 16, nT: 6, fT: -6 }, { lean: 10, head: 18, nU: 100, nL: 6, fU: 92, fL: 12, nT: 6, fT: -6 }] }
});
/* ---------- accessoires portés ---------- */
const hgH = (J, F) => { const HS = F.look && F.look.child ? 1.4 : 1.12; return (x, y) => [J.head[0] + (J.hf[0] * x - J.hu[0] * y) * HS, J.head[1] + (J.hf[1] * x - J.hu[1] * y) * HS]; };
const hgT = J => (al, ac) => [J.hip[0] + J.up[0] * al + J.fw[0] * ac, J.hip[1] + J.up[1] * al + J.fw[1] * ac];
/* drapeaux : (x, y) = haut de la hampe, le tissu part vers la droite */
const hgFlagRect = (P, x, y, w, h, kind, ph = 0.6) => {
  const Q = (u, v) => [x + u * w, y + v * h + Math.sin(u * 3 + ph) * h * 0.07 * u];
  const band = (v0, v1, tn, u0 = 0, u1 = 1) => P.fill([Q(u0, v0), Q((u0 + u1) / 2, v0), Q(u1, v0), Q(u1, v1), Q((u0 + u1) / 2, v1), Q(u0, v1)], tn, {});
  band(0, 1, null);
  if (kind === 'il') { band(0.12, 0.26, 'b8'); band(0.74, 0.88, 'b8'); const c = Q(0.5, 0.5), r = h * 0.17; for (const s of [1, -1]) P.line([[c[0], c[1] - s * r], [c[0] + r * 0.87, c[1] + s * r * 0.5], [c[0] - r * 0.87, c[1] + s * r * 0.5], [c[0], c[1] - s * r]], Math.max(0.5, h * 0.04), { ink: 2, taper: 0 }); }
  else if (kind === 'ps' || kind === 'jo') { band(0, 0.34, 'k9'); band(0.66, 1, 'y6b7'); P.fill([Q(0, 0), Q(0.36, 0.5), Q(0, 1)], 'r8y2', {}); if (kind === 'jo') { const c = Q(0.12, 0.5); P.fill(P.disc(c[0], c[1], h * 0.06, 7), null, {}); } }
  else if (kind === 'un') { band(0, 1, 'b4'); const c = Q(0.5, 0.5); P.fill(P.disc(c[0], c[1], h * 0.27, 12), null, {}); P.fill(P.disc(c[0], c[1], h * 0.15, 10), 'b4', {}); }
  else if (kind === 'eg') { band(0, 0.34, 'r8y2'); band(0.66, 1, 'k9'); const c = Q(0.5, 0.5); P.fill(P.disc(c[0], c[1], h * 0.1, 8), 'y7r2', {}); }
  else if (kind === 'us') { for (let i = 0; i < 7; i += 2) band(i / 7, (i + 1) / 7, 'r8y2'); band(0, 0.57, 'b8k1', 0, 0.42); }
  else if (kind === 'lb') { band(0, 0.25, 'r8y2'); band(0.75, 1, 'r8y2'); const c = Q(0.5, 0.5); P.fill([[c[0], c[1] - h * 0.2], [c[0] + h * 0.2, c[1] + h * 0.16], [c[0] - h * 0.2, c[1] + h * 0.16]], 'y6b7', {}); }
  P.outline([Q(0, 0), Q(0.5, 0), Q(1, 0), Q(1, 1), Q(0.5, 1), Q(0, 1)], 0.6);
};
const hgFlag = (P, x, y, z, H, kind, o = {}) => { const a = P.I(x, y, z), b = [a[0], a[1] - H], w = o.w || 46; P.line([a, b], 2, { taper: 0 }); P.fill(P.disc(b[0], b[1] - 2, 2.4, 8), 'y6r2k2', {}); hgFlagRect(P, b[0] + 1, b[1] + (o.half ? H * 0.32 : 3), w, w * 0.62, kind, o.ph === undefined ? 0.6 : o.ph); };
const hgHelmet = tn => (P, A, J, M, h, t, lw, F) => { const H = hgH(J, F); P.shape([[0.07, -0.034], [0.064, -0.078], [0.024, -0.106], [-0.036, -0.104], [-0.074, -0.066], [-0.082, -0.022], [-0.03, -0.03], [0.03, -0.038]].map(p => M(H(p[0], p[1]))), tn, lw); P.line([M(H(0.078, -0.03)), M(H(0.0, -0.038)), M(H(-0.088, -0.018))], lw * 1.2); };
const hgCaseP = (tn, w = 0.2, hh = 0.13) => (P, A, J, M, h) => { const q = M(A.t), lw = Math.max(0.4, h / 170), x0 = q[0] - w * h / 2, y0 = q[1] + 0.035 * h; P.line([[q[0] - 0.03 * h, y0], [q[0] - 0.03 * h, y0 - 0.025 * h], [q[0] + 0.03 * h, y0 - 0.025 * h], [q[0] + 0.03 * h, y0]], lw); P.shape([[x0, y0], [x0 + w * h, y0], [x0 + w * h, y0 + hh * h], [x0, y0 + hh * h]], tn, lw * 0.8); P.line([[x0, y0 + hh * h * 0.32], [x0 + w * h, y0 + hh * h * 0.32]], lw * 0.5); };
const hgHandFlag = kind => (P, A, J, M, h, t, lw, F) => { const a = M(A.t), b = [a[0], a[1] - h * 0.36]; P.line([[a[0], a[1] + h * 0.03], b], lw * 1.3, { taper: 0 }); hgFlagRect(P, b[0] + 0.5, b[1] + 1, h * 0.2, h * 0.125, kind, t * 2 + (F.x || 0)); };
Object.assign(PROPS2, {
  hgHelmB: hgHelmet('b4'), hgHelmO: hgHelmet('y4b3k4'),
  hgTie(P, A, J, M, h, t, lw) { const T = hgT(J); P.shape([T(0.3, 0.03), T(0.27, 0.076), T(0.17, 0.088), T(0.16, 0.062), T(0.26, 0.04)].map(M), 'y1', lw * 0.5); P.line([M(T(0.283, 0.052)), M(T(0.19, 0.08))], lw * 1.6, { ink: 1, lvl: 9, taper: 0.3 }); },
  hgMoust(P, A, J, M, h, t, lw, F) { const H = hgH(J, F); P.line([M(H(0.04, 0.027)), M(H(0.058, 0.03)), M(H(0.066, 0.038))], lw * 1.7, { taper: 0.4 }); },
  hgSpecs(P, A, J, M, h, t, lw, F) { const H = hgH(J, F), c = M(H(0.043, -0.008)); P.line(P.disc(c[0], c[1], h * 0.0125, 10), lw * 0.7, { closed: true, taper: 0 }); P.line([M(H(0.03, -0.01)), M(H(-0.03, -0.014))], lw * 0.7); },
  hgCase: hgCaseP('r4y4k3'), hgCase2: hgCaseP('k6b2', 0.17, 0.12), hgViolin: hgCaseP('k7r2', 0.3, 0.085), hgBrief: hgCaseP('k7', 0.15, 0.1),
  hgPaper(P, A, J, M, h, t, lw, F, u, n, add) { const q = M(add(A.t, u, 0.02)), s = h / 140; P.shape([[q[0] - 6 * s, q[1] - 9 * s], [q[0] + 7 * s, q[1] - 10 * s], [q[0] + 7 * s, q[1] + 6 * s], [q[0] - 6 * s, q[1] + 7 * s]], 'y1', lw * 0.6); for (let i = 0; i < 4; i++) P.line([[q[0] - 4 * s, q[1] - 6 * s + i * 3.2 * s], [q[0] + 5 * s, q[1] - 6.6 * s + i * 3.2 * s]], lw * 0.3); },
  hgBook(P, A, J, M, h, t, lw, F, u, n, add) { const q = M(add(A.t, u, 0.01)), s = h / 140; P.shape([[q[0] - 7 * s, q[1] - 4 * s], [q[0] + 7 * s, q[1] - 6 * s], [q[0] + 7 * s, q[1] + 4 * s], [q[0] - 7 * s, q[1] + 6 * s]], 'r6b3k2', lw * 0.6); P.line([[q[0] - 6 * s, q[1] + 4 * s], [q[0] + 6 * s, q[1] + 2.5 * s]], lw * 0.6, { ink: 0 }); },
  /* bougie tenue à la main : la lueur se découpe sur la nuit */
  hgCandle(P, A, J, M, h, t, lw, F) { const a = M(A.t), b = [a[0], a[1] - h * 0.09]; P.halo(b[0], b[1] - h * 0.035, h * 0.085, ['y2', 'y1'], { knock: true }); P.line([[a[0], a[1] + h * 0.02], b], h * 0.022, { ink: 0, lvl: 2, taper: 0 }); P.line([[a[0], a[1] + h * 0.02], b], lw * 0.4); Lib.flame(P, b[0], b[1], h * 0.045, h * 0.1, t * 1.5 + (F.x || 0), { noKnock: true }); },
  hgFlagPS: hgHandFlag('ps'), hgFlagIL: hgHandFlag('il'),
  hgCam(P, A, J, M, h, t, lw, F) { const H = hgH(J, F), c = M(H(0.088, -0.004)), s = h * 0.012, fc = F.face || 1; P.shape([[c[0] - 3 * s * fc, c[1] - 2.6 * s], [c[0] + 2.6 * s * fc, c[1] - 2.6 * s], [c[0] + 2.6 * s * fc, c[1] + 2.6 * s], [c[0] - 3 * s * fc, c[1] + 2.6 * s]], 'k7', lw * 0.6); P.shape(P.disc(c[0] + 3.8 * s * fc, c[1], 1.9 * s, 8), 'k3b2', lw * 0.5); if ((t * 0.45 + (F.x || 0) * 0.013) % 1 < 0.07) P.halo(c[0] + 2 * s * fc, c[1] - 4 * s, h * 0.13, ['y1', 'y2'], { knock: true }); },
  hgGuitar(P, A, J, M, h, t, lw) { const T = hgT(J), c = T(0.13, 0.1), e = T(0.34, 0.36), Ms = a => a.map(M); P.line(Ms([c, e]), lw * 3.4, { lvl: 8, taper: 0 }); P.shape(Ms(P.disc(c[0], c[1], 0.072, 12).map(p => [c[0] + (p[0] - c[0]) * 1.2, p[1]])), 'y6r4k1', lw * 0.8); P.fill(Ms(P.disc(c[0] + 0.012, c[1] - 0.008, 0.022, 8)), 'k7', {}); },
  hgSatchel(P, A, J, M, h, t, lw) { const T = hgT(J), Ms = a => a.map(M); P.shape(Ms([T(0.27, -0.085), T(0.275, -0.17), T(0.11, -0.18), T(0.1, -0.09)]), 'r5y4k3', lw * 0.8); P.line(Ms([T(0.22, -0.086), T(0.22, -0.176)]), lw * 0.6); P.line(Ms([T(0.27, -0.09), T(0.29, -0.01), T(0.2, 0.06)]), lw * 1.2, { lvl: 7 }); },
  /* talit : châle blanc à bandes sombres, franges aux coins */
  hgTalit(P, A, J, M, h, t, lw, F) {
    const T = hgT(J), H = hgH(J, F), Ms = a => a.map(M), lo = -0.13, bk = -0.132, fr = 0.075, lk = F.look || {};
    P.shape(Ms([T(0.3, -0.05), T(0.29, -0.1), T(0.2, bk), T(0.0, bk), T(lo - 0.01, bk + 0.006), T(lo, fr), T(0.08, fr), T(0.22, fr + 0.01), T(0.295, 0.05)]), 'y1', lw * 0.9);
    for (const [a0, a1] of [[lo + 0.022, lo + 0.038], [lo + 0.05, lo + 0.06], [0.235, 0.25]]) P.fill(Ms([T(a0, bk + 0.004), T(a0, fr), T(a1, fr), T(a1, bk + 0.004)]), 'k7', { noKnock: true });
    if (lk.beard) P.shape(BEARD[lk.beard].map(p => M(H(p[0], p[1]))), lk.bt || lk.hair || 'k7', lw);
    for (const c of [T(lo - 0.006, bk + 0.008), T(lo, fr - 0.004)]) for (let i = 0; i < 3; i++) P.line(Ms([[c[0] + (i - 1) * 0.007, c[1]], [c[0] + (i - 1) * 0.011, c[1] + 0.085]]), lw * 0.6, { lvl: 5 });
  }
});
/* plusieurs accessoires sur le même emplacement */
const hgC = (...ks) => { const n = ks.join('+'); if (!PROPS2[n]) PROPS2[n] = (...a) => { for (const k of ks) PROPS2[k](...a); }; return n; };
/* ---------- décors ---------- */
const hgStatic = (P, lk, o) => renderChar(P, prepChar(ch(lk, o)), o.tt || 1.3);
/* point d'un plan vertical : x = c (le long de y) ou y = c (le long de x) */
const hgQ = (P, ax, c, a, z) => (u, v) => ax === 'x' ? P.I(c, a + u, z + v) : P.I(a + u, c, z + v);
const hgRect = (P, ax, c, a, z, w, h, tn, lw = 0.7) => { const q = hgQ(P, ax, c, a, z); P.shape([q(0, 0), q(w, 0), q(w, h), q(0, h)], tn, lw); return q; };
const hgShutter = (P, ax, c, a, z, w, h, tn = 'b2k3') => { const q = hgRect(P, ax, c, a, z, w, h, tn, 0.8); for (let v = 5; v < h; v += 5) P.line([q(1, v), q(w - 1, v)], 0.4); P.fill([q(w / 2 - 2, 2), q(w / 2 + 2, 2), q(w / 2 + 2, 7), q(w / 2 - 2, 7)], 'k7', {}); return q; };
/* immeuble : boîte et fenêtres sur les deux faces visibles */
const hgBld = (P, x, y, w, d, h, tn, o = {}) => {
  P.box(x, y, 0, w, d, h, tn, o.lw || 1);
  const win = o.win || 'b6k4', cw = o.cw || 16, chh = o.ch || 20, gx = o.gx || 30, gz = o.gz || 38, z0 = o.z0 === undefined ? 14 : o.z0, r = rng((x * 7 + y * 13 + h) | 0);
  const tone = () => (o.lit && r() < o.lit ? 'y4r1' : o.alt && r() < 0.3 ? o.alt : win);
  for (let z = z0; z + chh < h - 4; z += gz) {
    if (!o.noL) for (let a = x + (gx - cw) / 2; a + cw < x + w; a += gx) { hgRect(P, 'y', y + d + 0.4, a, z, cw, chh, tone(), 0.5); if (o.sill) P.line([P.I(a - 3, y + d + 0.5, z), P.I(a + cw + 3, y + d + 0.5, z)], 1.1); }
    if (!o.noR) for (let b = y + (gx - cw) / 2; b + cw < y + d; b += gx) { hgRect(P, 'x', x + w + 0.4, b, z, cw, chh, tone(), 0.5); if (o.sill) P.line([P.I(x + w + 0.5, b - 3, z), P.I(x + w + 0.5, b + cw + 3, z)], 1.1); }
  }
};
/* coupole : demi-ellipse posée sur un cercle du sol */
const hgDome = (P, x, y, z, r, tn, o = {}) => {
  const c = P.I(x, y, z), k = o.k || 1, top = [], bot = [];
  for (let i = 0; i <= 16; i++) { const a = Math.PI + Math.PI * i / 16; top.push([c[0] + Math.cos(a) * r * 1.22, c[1] + Math.sin(a) * r * k]); }
  for (let i = 1; i < 8; i++) { const a = Math.PI * i / 8; bot.push([c[0] + Math.cos(a) * r * 1.22, c[1] + Math.sin(a) * r * 0.7]); }
  P.shape(top.concat(bot), tn, 1);
  P.fill(top.filter(p => p[0] > c[0] + r * 0.4).concat(bot.filter(p => p[0] > c[0] + r * 0.4)), tadd(tn, 'k2'), { noKnock: true });
  if (o.fin) { P.line([[c[0], c[1] - r * k], [c[0], c[1] - r * k - o.fin]], 1.4, { taper: 0 }); P.fill(P.disc(c[0], c[1] - r * k - o.fin, 2.6, 8), 'y7r2', {}); }
};
const hgWheel = (P, x, y, r, hub = 'k3') => { const pts = [], c = P.I(x, y, r); for (let i = 0; i < 16; i++) { const a = i / 16 * TAU; pts.push(P.I(x + Math.cos(a) * r, y, r + Math.sin(a) * r)); } P.shape(pts, 'k8', 0.8); P.fill(pts.map(p => [c[0] + (p[0] - c[0]) * 0.45, c[1] + (p[1] - c[1]) * 0.45]), hub, {}); };
/* camion : roule vers +x, ou vers −x si o.rev (l'arrière bâché s'ouvre alors vers nous) */
const hgTruck = (P, x, y, o = {}) => {
  const L = o.L || 150, Wd = o.W || 54, tn = o.tn || 'y4b3k3', cab = o.cab || 42, hb = o.hb || 52, z0 = 12, rv = o.rev, cx = rv ? x : x + L - cab, bx = rv ? x + cab + 3 : x, bl = L - cab - 3, wz = o.wr || 12;
  for (const wx of [x + 22, x + L - 24]) hgWheel(P, wx, y + 3, wz);
  P.box(bx, y, z0, bl, Wd, 9, tadd(tn, 'k2'), 0.8);
  if (o.open) { P.box(bx, y, z0 + 9, bl, 3, 14, tn, 0.7); P.box(bx, y + Wd - 3, z0 + 9, bl, 3, 14, tn, 0.7); }
  else {
    P.box(bx, y, z0 + 9, bl, Wd, hb - 6, o.cover || 'y4b2k2', 0.9);
    for (let i = 1; i < 4; i++) P.line([P.I(bx + bl * i / 4, y + Wd, z0 + 9), P.I(bx + bl * i / 4, y + Wd, z0 + hb + 3), P.I(bx + bl * i / 4, y, z0 + hb + 3)], 0.6);
    if (rv) hgRect(P, 'x', bx + bl + 0.4, y + 5, z0 + 11, Wd - 10, hb - 12, 'k7b2', 0.7);
  }
  P.box(cx, y, z0, cab, Wd, hb * 0.84, tn, 0.9);
  hgRect(P, 'y', y + Wd + 0.4, cx + 7, z0 + hb * 0.42, cab - 14, hb * 0.34, 'b3k2', 0.6);
  if (!rv) hgRect(P, 'x', x + L + 0.4, y + 6, z0 + hb * 0.42, Wd - 12, hb * 0.34, 'b3k2', 0.6);
  if (o.band) P.fill([P.I(bx, y + Wd + 0.5, z0 + 12), P.I(bx + bl, y + Wd + 0.5, z0 + 12), P.I(bx + bl, y + Wd + 0.5, z0 + 19), P.I(bx, y + Wd + 0.5, z0 + 19)], o.band, {});
  for (const wx of [x + 22, x + L - 24]) hgWheel(P, wx, y + Wd + 0.6, wz);
};
/* navire le long de x : flanc gauche, étrave, pont, château, cheminée ; renvoie le haut de la cheminée */
const hgShip = (P, x, y, L, W, o = {}) => {
  const h = o.h || 34, tn = o.tn || 'k6b2', I = (a, b, c) => P.I(a, b, c), bow = L * 0.16;
  P.shape([I(x, y + W, 0), I(x + L - bow, y + W, 0), I(x + L, y + W / 2, 0), I(x + L + 8, y + W / 2, h + 9), I(x + L - bow, y + W, h), I(x, y + W, h)], tn, 1.1);
  P.fill([I(x, y + W, 0), I(x + L - bow, y + W, 0), I(x + L, y + W / 2, 0), I(x + L + 1.5, y + W / 2, 7), I(x + L - bow, y + W, 7), I(x, y + W, 7)], 'r7y2k2', {});
  P.shape([I(x, y, h), I(x + L - bow, y, h), I(x + L + 8, y + W / 2, h + 9), I(x + L - bow, y + W, h), I(x, y + W, h)], o.deck || 'y3r2k2', 1);
  for (let i = 0; i < 9; i++) { const c = I(x + 14 + i * (L - bow - 20) / 8, y + W, h * 0.66); P.fill(P.disc(c[0], c[1], 2, 6), 'y1b1', {}); }
  if (o.holds) for (const u of o.holds) P.box(x + L * u, y + W * 0.22, h, L * 0.12, W * 0.56, 6, 'r4y4k3', 0.7);
  const bx = x + L * (o.bridge || 0.08), bw = L * 0.22;
  P.box(bx, y + W * 0.14, h, bw, W * 0.72, 24, o.house || 'y1b1', 0.9); P.box(bx + 6, y + W * 0.22, h + 24, bw - 12, W * 0.56, 20, o.house || 'y1b1', 0.9);
  for (let i = 0; i < 4; i++) { hgRect(P, 'y', y + W * 0.86 + 0.4, bx + 8 + i * (bw - 22) / 3, h + 9, 7, 8, 'b5k3', 0.4); hgRect(P, 'y', y + W * 0.78 + 0.4, bx + 12 + i * (bw - 32) / 3, h + 30, 7, 8, 'b5k3', 0.4); }
  P.cyl(bx + bw / 2, y + W / 2, h + 44, 9, 26, o.fun || 'r7y2k1', 0.8, 12); P.cyl(bx + bw / 2, y + W / 2, h + 64, 9.4, 6, 'k7', 0.6, 12);
  const mx = x + L * 0.66; P.line([I(mx, y + W / 2, h), I(mx, y + W / 2, h + 78)], 2.2, { taper: 0 }); P.line([I(mx, y + W / 2, h + 60), I(mx + 50, y + W / 2, h + 30)], 1.2); P.line([I(mx, y + W / 2, h + 60), I(mx - 50, y + W / 2, h + 30)], 1.2);
  P.line([I(bx + bw / 2, y + W / 2, h + 70), I(mx, y + W / 2, h + 78), I(x + L + 8, y + W / 2, h + 12)], 0.5);
  return I(bx + bw / 2, y + W / 2, h + 72);
};
/* carte schématique : q(u, v) place un point, u d'ouest en est, v du nord au sud (de 31,9° à 36,5° E, de 33,6° à 27,8° N) */
const hgMap = (P, q, o = {}) => {
  const G = p => q((p[0] - 31.9) / 4.6, (33.6 - p[1]) / 5.8), poly = a => a.map(G);
  P.shape([q(0, 0), q(1, 0), q(1, 1), q(0, 1)], o.land || 'y2r1', 1.3);
  const isr = [[35.1, 33.1], [35.6, 33.25], [35.65, 32.75], [35.55, 32.52], [35.2, 32.55], [35.0, 32.3], [34.97, 32.0], [35.0, 31.85], [35.22, 31.8], [35.1, 31.65], [34.95, 31.5], [35.0, 31.35], [35.4, 31.45], [35.4, 31.2], [35.45, 31.05], [35.2, 30.6], [35.0, 29.6], [34.92, 29.55], [34.25, 31.3], [34.3, 31.22], [34.58, 31.52], [34.55, 31.65], [34.75, 32.05], [34.9, 32.5], [34.95, 32.82]];
  const wb = [[35.55, 32.52], [35.2, 32.55], [35.0, 32.3], [34.97, 32.0], [35.0, 31.85], [35.22, 31.8], [35.1, 31.65], [34.95, 31.5], [35.0, 31.35], [35.4, 31.45], [35.5, 31.75], [35.55, 32.0]];
  const gz = [[34.2, 31.3], [34.5, 31.62], [34.6, 31.52], [34.3, 31.2]];
  const sinai = [[34.25, 31.3], [33.8, 31.12], [33.2, 31.05], [32.6, 31.1], [32.3, 31.27], [32.35, 30.6], [32.55, 29.95], [32.62, 29.9], [33.1, 28.9], [33.75, 27.95], [34.25, 27.82], [34.6, 27.9], [34.8, 28.6], [34.92, 29.55]];
  const golan = [[35.65, 33.3], [35.88, 33.3], [35.92, 32.95], [35.76, 32.7], [35.65, 32.75]];
  const T = o.terr || {};
  if (o.mand) P.shape(poly(isr), o.mand, 0.8); else if (o.il) P.shape(poly(isr), o.il, 0.8);
  for (const [k, pts] of [['wb', wb], ['gz', gz], ['sinai', sinai], ['golan', golan]]) { const tn = T[k] || (o.mand && (k === 'wb' || k === 'gz') ? o.mand : null); if (tn) P.shape(poly(pts), tn, 0.7); else if (k !== 'sinai') P.outline(poly(pts), 0.5); }
  P.shape(poly([[35.15, 33.6], [35.1, 33.1], [34.95, 32.82], [34.9, 32.5], [34.75, 32.05], [34.55, 31.65], [34.25, 31.3], [33.8, 31.12], [33.2, 31.05], [32.6, 31.1], [32.3, 31.27], [31.9, 31.4], [31.9, 33.6]]), 'b4', 0.8);
  P.shape(poly([[32.5, 29.95], [32.62, 29.9], [33.1, 28.9], [33.75, 27.95], [33.7, 27.8], [33.3, 27.8], [32.8, 28.8]]), 'b4', 0.6);
  P.shape(poly([[34.92, 29.55], [35.0, 29.5], [34.8, 28.6], [34.6, 27.9], [34.5, 27.8], [34.35, 27.8], [34.62, 28.6]]), 'b4', 0.6);
  P.shape(poly([[35.5, 31.75], [35.58, 31.6], [35.5, 31.1], [35.4, 31.2], [35.45, 31.6]]), 'b5', 0.5);
  { const c = G([35.6, 32.8]), s = Math.hypot(q(1, 0)[0] - q(0, 0)[0], q(1, 0)[1] - q(0, 0)[1]) * 0.022; P.shape(P.disc(c[0], c[1], s, 8), 'b5', 0.5); }
  P.line(poly([[35.62, 33.25], [35.6, 32.8], [35.56, 32.3], [35.5, 31.75]]), 1, { ink: 2, lvl: 9 });
  P.line(poly([[32.3, 31.27], [32.35, 30.6], [32.55, 29.95]]), 1.2, { ink: 2, lvl: 9 });
  { const c = G([35.22, 31.78]); P.fill(P.disc(c[0], c[1], 2.2, 6), 'r8', {}); }
};
const hgTable = (x, y, w, d, h, o = {}) => ({ depth: o.depth || (x + w / 2 + y + d / 2), draw(P, t) {
  const z0 = o.z || 0;
  if (o.cloth) P.box(x, y, z0, w, d, h, o.cloth, 0.9);
  else { for (const [a, b] of [[x + 3, y + 3], [x + w - 8, y + 3], [x + 3, y + d - 8], [x + w - 8, y + d - 8]]) P.box(a, b, z0, 5, 5, h - 4, 'r4y5k3', 0.6); P.box(x, y, z0 + h - 4, w, d, 4, o.wood || 'r4y5k2', 0.9); }
  for (const it of o.items || []) it(P, t, z0 + h + 0.5);
} });
const hgDoc = (x, y) => (P, t, z) => { P.shape([P.I(x - 9, y - 7, z), P.I(x + 9, y - 7, z), P.I(x + 9, y + 7, z), P.I(x - 9, y + 7, z)], 'y1', 0.5); for (let i = 0; i < 3; i++) P.line([P.I(x - 6, y - 4 + i * 4, z), P.I(x + 6, y - 4 + i * 4, z)], 0.3); };
const hgMic = (x, y) => (P, t, z) => { P.line([P.I(x, y, z), P.I(x, y, z + 12)], 1, { taper: 0 }); const c = P.I(x, y, z + 13); P.fill(P.disc(c[0], c[1], 2.2, 6), 'k7', {}); };
const hgChair = (P, x, y, s = 32, tn = 'y1b1', bk = 'x') => { P.box(x - 10, y - 10, 0, 20, 20, s, tn, 0.7); if (bk === 'x') P.box(x - 12, y - 10, s, 3, 20, 30, tn, 0.7); else if (bk === 'y') P.box(x - 10, y - 12, s, 20, 3, 30, tn, 0.7); else if (bk === 'X') P.box(x + 9, y - 10, s, 3, 20, 30, tn, 0.7); else if (bk === 'Y') P.box(x - 10, y + 9, s, 20, 3, 30, tn, 0.7); };
const hgArchL = (P, y, z, w, h, sky = 'b2y1') => { Lib.archL(P, y - 6, z - 6, w + 12, h + 12, 'r4y5k3', 1); Lib.archL(P, y, z, w, h, sky, 0.8); P.line([P.I(0.6, y + w / 2, z), P.I(0.6, y + w / 2, z + h)], 1.4); P.line([P.I(0.6, y, z + h * 0.45), P.I(0.6, y + w, z + h * 0.45)], 1.1); };
const hgRoom = (P, o) => {
  const L = P.L, H = o.h || 240;
  Lib.platform(P, o.floor || 'y4r3k2', 'y4r3k2', { h: 46, pebbles: false });
  for (let v = 45; v < L; v += 45) { P.line([P.I(v, 0, 0), P.I(v, L, 0)], 0.4); if (o.grid) P.line([P.I(0, v, 0), P.I(L, v, 0)], 0.4); }
  Lib.walls(P, { l: o.wl, r: tadd(o.wl, 'k1'), cut: 'y4r3k2' }, { h: H });
  Lib.wallL(P, 0, 0, L, 26, tadd(o.wl, 'r1k2'), 0.7); Lib.wallR(P, 0, 0, L, 26, tadd(o.wl, 'r1k3'), 0.7);
  if (o.band) { Lib.wallL(P, 0, H - 26, L, 8, o.band, 0.5); Lib.wallR(P, 0, H - 26, L, 8, o.band, 0.5); }
};
/* la Maison-Blanche : façade à colonnes le long du fond droit, ou du fond gauche si sw */
const hgWH = (P, sw) => {
  const B = (a, b, z, w, d, h, tn, lw) => sw ? P.box(b, a, z, d, w, h, tn, lw) : P.box(a, b, z, w, d, h, tn, lw), I = (a, b, z) => sw ? P.I(b, a, z) : P.I(a, b, z), C = (a, b, z, r, h, tn) => sw ? P.cyl(b, a, z, r, h, tn, 0.7, 10) : P.cyl(a, b, z, r, h, tn, 0.7, 10);
  B(30, 0, 0, 480, 46, 176, 'y1b1');
  for (const z of [26, 100]) for (let a = 48; a < 490; a += 40) { if (a > 160 && a < 360) continue; P.shape([I(a, 46.5, z), I(a + 18, 46.5, z), I(a + 18, 46.5, z + 44), I(a, 46.5, z + 44)], 'b5k3', 0.6); P.line([I(a - 3, 46.6, z), I(a + 21, 46.6, z)], 1.2); P.line([I(a - 2, 46.6, z + 48), I(a + 20, 46.6, z + 48)], 0.8); }
  B(30, 0, 176, 480, 46, 8, 'y1', 0.7);
  for (let a = 40; a < 505; a += 14) P.line([I(a, 46.4, 184), I(a, 46.4, 194)], 0.6);
  P.line([I(30, 46.4, 194), I(510, 46.4, 194)], 1.2, { taper: 0 });
  B(166, 46, 0, 208, 58, 10, 'y2k1', 0.8);
  for (const a of [236, 282]) P.shape([I(a, 46.5, 10), I(a + 22, 46.5, 10), I(a + 22, 46.5, 74), I(a, 46.5, 74)], a === 236 ? 'k6b2' : 'k5b2', 0.7);
  for (let i = 0; i < 6; i++) C(180 + i * 36, 92, 10, 7, 136, 'y1');
  B(166, 46, 146, 208, 58, 12, 'y1b1', 0.8);
  P.shape([I(162, 105, 158), I(270, 105, 206), I(270, 46, 206), I(162, 46, 158)], 'y1b2k1', 0.8); P.shape([I(378, 105, 158), I(270, 105, 206), I(270, 46, 206), I(378, 46, 158)], 'y1b2k1', 0.8);
  P.shape([I(162, 105, 158), I(378, 105, 158), I(270, 105, 206)], 'y1', 1.1); P.shape([I(190, 105, 164), I(350, 105, 164), I(270, 105, 198)], 'y1b1', 0.6);
};
const hgLectern = (x, y, o = {}) => ({ depth: x + y + 14, draw(P) { P.box(x, y, o.z || 0, 26, 22, 50, o.tn || 'b7k2', 0.9); const c = P.I(x + 13, y + 22.5, (o.z || 0) + 32); P.shape(P.disc(c[0], c[1], 7, 12), 'y6r2', 0.5); P.fill(P.disc(c[0], c[1], 4, 8), 'b6', {}); P.line([P.I(x + 8, y + 8, (o.z || 0) + 50), P.I(x + 6, y + 14, (o.z || 0) + 64)], 0.9); P.line([P.I(x + 18, y + 8, (o.z || 0) + 50), P.I(x + 20, y + 14, (o.z || 0) + 64)], 0.9); } });
const hgCypress = (P, x, y, z, h) => { const b = P.I(x, y, z); P.shape(smooth([[b[0] - h * 0.11, b[1] - h * 0.1], [b[0] - h * 0.13, b[1] - h * 0.5], [b[0], b[1] - h], [b[0] + h * 0.13, b[1] - h * 0.5], [b[0] + h * 0.11, b[1] - h * 0.1], [b[0], b[1]]], 3), 'y4b6k3', 0.8); };
const hgCandles = (P, n, area, seed) => { const r = rng(seed); for (let i = 0; i < n; i++) { const c = P.I(area[0] + r() * area[2], area[1] + r() * area[3], 0), hh = 4 + r() * 5; P.halo(c[0], c[1] - hh - 3, 5.5 + r() * 2, ['y3r1', 'y1'], { knock: true }); P.line([[c[0], c[1]], [c[0], c[1] - hh]], 2, { ink: 0, lvl: 2, taper: 0 }); P.fill([[c[0] - 1.4, c[1] - hh], [c[0], c[1] - hh - 5], [c[0] + 1.4, c[1] - hh]], 'r6y9', { noKnock: true }); } };

const SHEET = { title: 'Guerres et accords · 1956 à 1999', sub: 'L’histoire d’Israël · feuille ו · Suez, 1967, 1973, Camp David, le Liban, l’Intifada, Oslo' };
const SCENES = [
/* 1 · SUEZ */
{
  title: 'La crise de Suez', book: 'Résolution 997 de l’Assemblée générale', ch: 1956, ref: 'Doc onu-ag-997-1956', refFr: 'Résolution 997 (ES-I) de l’Assemblée générale des Nations unies, 2 novembre 1956', accent: 2, feast: null,
  when: '29 octobre 1956 · canal de Suez', year: 1956, lang: 'anglais', url: 'https://en.wikisource.org/wiki/United_Nations_General_Assembly_Resolution_997',
  quote: 'Urges as a matter of priority that all parties now involved in hostilities in the area agree to an immediate cease-fire and, as part thereof, halt the movement of military forces and arms into the area',
  fr: 'Demande instamment, en priorité, que toutes les parties actuellement engagées dans les hostilités dans la région acceptent un cessez-le-feu immédiat et, dans ce cadre, arrêtent l’envoi de forces militaires et d’armes dans la région',
  more: ['Le 26 juillet 1956, le président égyptien Gamal Abdel Nasser nationalise la Compagnie du canal de Suez, à capitaux surtout français et britanniques. Le 29 octobre, l’armée israélienne entre dans le Sinaï, selon un plan arrêté en secret à Sèvres avec Paris et Londres, dont les troupes prennent pied à Port-Saïd le 5 novembre. Sous la pression des États-Unis et de l’Union soviétique, le cessez-le-feu intervient dans la nuit du 6 au 7 novembre. Les pertes sont estimées, selon les sources, à 1 650 à 3 000 morts égyptiens, 172 à 231 israéliens, 16 à 22 britanniques et 10 français.',
    'Israël invoque les incursions de fedayin venus de Gaza et la fermeture du détroit de Tiran et du canal à ses navires. L’Égypte et le monde arabe parlent de l’« agression tripartite » ; en Israël on dit « campagne du Sinaï » ou « opération Kadesh ». Français et Britanniques se retirent en décembre 1956, Israël quitte le Sinaï et Gaza en mars 1957. La Force d’urgence des Nations unies, première force armée de maintien de la paix, se déploie du côté égyptien de la ligne d’armistice : ce sont les premiers casques bleus. Le canal, obstrué par des navires coulés, rouvre au printemps 1957.'],
  back(P) {
    Lib.sun(P, 190, 130, 30); Lib.cloud(P, 770, 130, 170, 36, 'b1');
    Lib.platform(P, 'y4r2', 'y4r3k1', { strata: [[0, .3, 'y4r3k1'], [.3, .65, 'y5r3k2'], [.65, 1, 'y4r4k3']] });
    P.shape([P.I(0, 205, 0.5), P.I(540, 205, 0.5), P.I(540, 335, 0.5), P.I(0, 335, 0.5)], 'b5y1', 1.1);
    P.shape([P.I(540, 205, 0), P.I(540, 335, 0), P.I(540, 335, -60), P.I(540, 205, -60)], 'b6', 1);
    for (let i = 0; i < 4; i++) P.line([P.I(540, 225 + i * 28, -3), P.I(540, 227 + i * 28, -58)], 0.7, { lvl: 3 });
    Lib.waves(P, [10, 214, 520, 112], 28, 1, 2);
    Lib.stones(P, 16, 'y3r2k2', [4, 192, 530, 8]); Lib.stones(P, 16, 'y3r2k2', [4, 340, 530, 8]);
    hgBld(P, 36, 40, 176, 84, 86, 'y2r1', { win: 'b5k3', gx: 29, cw: 14, ch: 30, z0: 12, gz: 40, sill: 1 });
    P.box(30, 34, 86, 188, 96, 6, 'y3r2k1', 0.7);
    for (const dx of [26, 88, 150]) { P.cyl(36 + dx, 82, 92, 17, 10, 'y2r1', 0.7, 12); hgDome(P, 36 + dx, 82, 102, 16, 'y4b5k1', { k: dx === 88 ? 1.25 : 1, fin: 8 }); }
    Lib.palm(P, 256, 70, 0, 150, { lean: 14, dates: 1 }); Lib.palm(P, 22, 170, 0, 128, { lean: -10 });
    Lib.tent(P, 330, 52, 84, 62, 52, 'y1b1'); Lib.tent(P, 436, 36, 84, 62, 52, 'y1b1');
    for (const [x, y] of [[372, 114.5], [478, 98.5]]) { const c = P.I(x, y, 26); P.fill(P.disc(c[0], c[1], 7, 10), 'b4', {}); }
    hgFlag(P, 306, 140, 0, 126, 'un', { w: 50 });
    hgShip(P, 96, 238, 330, 62, { holds: [0.42, 0.74] });
    P.line([P.I(468, 290, 0), P.I(498, 268, 62)], 3.2, { taper: 0.2 }); P.line([P.I(478, 283, 22), P.I(512, 292, 34)], 1.4); P.line([P.I(488, 275, 42), P.I(470, 262, 50)], 1.2);
    P.shape([P.I(500, 300, 0), P.I(524, 292, 0), P.I(530, 286, 22), P.I(512, 292, 26)], 'r6y2k3', 0.8);
    P.shape([P.I(0, 404, 0.3), P.I(540, 404, 0.3), P.I(540, 452, 0.3), P.I(0, 452, 0.3)], 'y3r2k2', 0.8);
    for (let x = 20; x < 530; x += 50) P.line([P.I(x, 428, 0.4), P.I(x + 24, 428, 0.4)], 1, { ink: 0 });
    for (const x of [70, 250, 430]) { P.cyl(x, 352, 0, 6, 14, 'k6', 0.6, 10); P.cyl(x, 352, 14, 8, 4, 'k7', 0.5, 10); }
    P.line([P.I(250, 352, 12), P.I(268, 344, 4), P.I(300, 320, 20)], 1.1);
    hgTruck(P, 40, 480, { L: 96, W: 42, tn: 'y1', cab: 40, hb: 38, open: 1, band: 'b4' });
    for (const [x, y, s] of [[300, 490, 22], [324, 498, 16], [304, 512, 14]]) P.box(x, y, 0, s, s, s * 0.8, 'r4y5k2', 0.7);
    Lib.palm(P, 506, 504, 0, 150, { lean: -16 });
    Lib.stones(P, 14, 'y3r2k2', [20, 360, 500, 40]); Lib.stones(P, 12, 'y3r2k2', [180, 460, 300, 60]);
  },
  live(P, t) { const f = P.I(158.7, 269, 106); Lib.smoke(P, f[0], f[1], t, { n: 4, r: 16, h: 120, sp: 0.1, tn: 'k2b1' }); },
  chars: [
    ...[0, 1, 2].map(i => ch(i === 1 ? LK.hgUN2 : LK.hgUN, { h: 116, speed: 22, t0: i * 2.4, hold: { n: 'hgHelmB' }, path: [W(20, 428, 0), W(520, 428, 0), W(20, 428, 0, null, { jump: 1 })] })),
    ch(LK.hgUN, { x: 150, y: 500, face: 1, clip: 'point', h: 118, hold: { n: 'hgHelmB', nTop: 'hgPaper' } }),
    ch(LK.hgArabM2, { x: 232, y: 366, face: 1, clip: 'haul', h: 118 }),
    ch(LK.hgArabKid, { x: 392, y: 372, face: -1, clip: 'hgWaveHi', h: 84 }),
    ch(LK.hgArabM, { h: 116, speed: 16, hold: { n: 'staff' }, path: [W(380, 160, 2.5, 'idle', { f: 1 }), W(520, 160, 3, 'lookup', { f: 1 }), W(380, 160, 0)] }),
    { beast: 'camel', h: 108, speed: 16, path: [W(290, 178, 2.5), W(430, 178, 3), W(290, 178, 0)] },
    ch(LK.hgUN2, { x: 290, y: 118, face: -1, clip: 'guard', h: 106, hold: { n: 'hgHelmB' } })
  ]
},
/* 2 · L'OLP */
{
  title: 'L’Organisation de libération de la Palestine', book: 'Charte nationale palestinienne', ch: 1968, ref: 'Doc olp-charte-1968', refFr: 'Charte nationale palestinienne, juillet 1968, article 1, traduction anglaise', accent: 1, feast: null,
  when: '28 mai 1964 · Jérusalem-Est', year: 1964, lang: 'anglais', url: 'https://avalon.law.yale.edu/20th_century/plocov.asp',
  quote: 'Palestine is the homeland of the Arab Palestinian people; it is an indivisible part of the Arab homeland, and the Palestinian people are an integral part of the Arab nation.',
  fr: 'La Palestine est la patrie du peuple arabe palestinien ; elle est une partie indivisible de la patrie arabe, et le peuple palestinien fait partie intégrante de la nation arabe.',
  more: ['À l’initiative de la Ligue arabe, un Conseil national palestinien se réunit à Jérusalem-Est, alors jordanienne, du 28 mai au 2 juin 1964. Il fonde l’Organisation de libération de la Palestine (OLP), présidée par Ahmed Choukeiri, et adopte une charte. Après la guerre de 1967, les mouvements armés en prennent la direction : Yasser Arafat, chef du Fatah fondé en 1959, en devient président en février 1969. La charte révisée en 1968 fait de la lutte armée la seule voie, et tient le partage de 1947 et la création d’Israël pour nuls.',
    'Chassée de Jordanie après les combats de septembre 1970, l’OLP s’installe au Liban. Plusieurs de ses groupes mènent des détournements d’avions et des attentats. Le 5 septembre 1972, aux Jeux olympiques de Munich, le groupe Septembre noir prend en otages des membres de la délégation israélienne : onze d’entre eux, un policier allemand et cinq des huit preneurs d’otages sont tués. Israël tient alors l’OLP pour une organisation terroriste. En 1974, la Ligue arabe la reconnaît comme seul représentant légitime du peuple palestinien, et l’Assemblée générale des Nations unies lui donne un statut d’observateur. Les articles de la charte qui nient l’existence d’Israël seront déclarés caducs en 1996.'],
  back(P) {
    hgRoom(P, { wl: 'y3r2', floor: 'r4y4k2', h: 250, band: 'y6b5' });
    for (const y of [70, 200, 330]) { hgArchL(P, y, 70, 66, 126); P.fill([P.I(2, y + 4, 0.3), P.I(2, y + 62, 0.3), P.I(150, y + 128, 0.3), P.I(150, y + 70, 0.3)], 'y2r1', {}); }
    Lib.wallL(P, 452, 0, 60, 134, 'r5y4k3', 0.9); P.line([P.I(0.8, 482, 4), P.I(0.8, 482, 132)], 0.6);
    hgMap(P, (u, v) => P.I(236 + u * 120, 0.6, 226 - v * 150), { mand: 'y5b5', land: 'y1b1' });
    P.line([P.I(232, 0.7, 230), P.I(360, 0.7, 230)], 2.6, { lvl: 8, taper: 0 }); P.line([P.I(232, 0.7, 72), P.I(360, 0.7, 72)], 2.6, { lvl: 8, taper: 0 });
    P.box(130, 8, 0, 360, 110, 22, 'r4y5k2'); P.box(130, 118, 0, 360, 12, 11, 'r4y5k3', 0.7);
    hgFlag(P, 190, 22, 22, 170, 'ps', { w: 56 }); hgFlag(P, 420, 22, 22, 170, 'ps', { w: 56, ph: 1.8 });
    for (const [x, lk, c, tt] of [[362, LK.hgSuitG, 'sit', 0.6], [408, LK.hgSuitKef, 'hgSitWrite', 1.4], [452, LK.hgSuitBr, 'sit', 2.2]]) hgStatic(P, lk, { x, y: 40, z: 22, face: -1, clip: c, h: 112, noShadow: 1, tt, hold: { n: 'hgTie' } });
    hgTable(330, 52, 140, 34, 36, { z: 22, cloth: 'y6b5k2', items: [hgDoc(360, 69), hgDoc(410, 69), hgMic(440, 72), hgDoc(452, 66)] }).draw(P, 0);
    const seats = [];
    for (const y of [210, 292, 374, 456]) for (let x = 120 + (y === 292 || y === 456 ? 30 : 0); x < 480; x += 64) seats.push([x, y]);
    const lks = [LK.hgSuit, LK.hgSuitKef, LK.hgSuitBr, LK.hgSuitG, LK.hgArabOld, LK.hgSuitB, LK.hgLady2, LK.hgSuitL];
    const free = [3, 8, 15, 21];
    hgChair(P, 60, 300, 32, 'r5y4k2', 'Y');
    seats.forEach(([x, y], i) => { hgChair(P, x, y, 32, 'r5y4k2', 'Y'); if (!free.includes(i) && i !== 10) hgStatic(P, lks[(i * 3 + 1) % lks.length], { x, y, face: 1, clip: i % 4 === 1 ? 'hgClap' : 'sit', h: 114, noShadow: 1, tt: i * 0.37 }); });
    for (const [x, y] of [[60, 120], [500, 210]]) { P.line([P.I(x, y, 250), P.I(x, y, 196)], 0.6); const q = P.I(x, y, 190); P.halo(q[0], q[1], 30, ['y1', 'y2']); P.shape([[q[0] - 14, q[1] - 5], [q[0] + 14, q[1] - 5], [q[0] + 8, q[1] + 5], [q[0] - 8, q[1] + 5]], 'y6r3k2', 0.8); }
  },
  chars: [
    hgLectern(222, 72, { z: 22, tn: 'r4y5k3' }),
    ch(LK.hgSuit, { x: 236, y: 56, z: 22, face: -1, clip: 'raise', h: 124, hold: { n: 'hgTie', nTop: 'hgPaper' } }),
    ch(LK.hgSuitKef, { x: 312, y: 210, face: 1, clip: 'hgClap', h: 114, noShadow: 1 }),
    ch(LK.hgLady2, { x: 278, y: 292, face: 1, clip: 'hgClap', h: 108, noShadow: 1, t0: 0.3 }),
    ch(LK.hgSuitBr, { x: 312, y: 374, face: 1, clip: 'hgVote', h: 114, noShadow: 1 }),
    ch(LK.hgArabOld, { x: 342, y: 456, face: 1, clip: 'hgClap', h: 112, noShadow: 1, t0: 0.5 }),
    ch(LK.hgPress, { x: 96, y: 150, face: 1, clip: 'hgKneelPhoto', h: 118, hold: { nTop: 'hgCam' } }),
    ch(LK.hgSuitB, { x: 60, y: 300, face: 1, clip: 'hgSitWrite', h: 116, hold: { nTop: 'hgPaper' } }),
    ch(LK.hgSuitL, { h: 120, speed: 20, hold: { n: 'hgTie', nTop: 'hgPaper' }, path: [W(40, 482, 2, 'idle', { f: 1 }), W(60, 400, 0), W(96, 236, 3, 'offer', { f: 1 }), W(60, 400, 0), W(40, 482, 0)] })
  ]
},
/* 3 · LA GUERRE DES SIX JOURS */
{
  title: 'La guerre des Six Jours', book: 'Résolution 234 du Conseil de sécurité', ch: 1967, ref: 'Doc onu-cs-234-1967', refFr: 'Résolution 234 du Conseil de sécurité des Nations unies, 7 juin 1967', accent: 0, feast: null,
  when: '5 au 10 juin 1967 · Jérusalem', year: 1967, lang: 'anglais', url: 'https://en.wikisource.org/wiki/United_Nations_Security_Council_Resolution_234',
  quote: 'Demands that the Governments concerned should as a first step cease fire and discontinue all military activities at 2000 hours GMT on 7 June 1967',
  fr: 'Exige que les gouvernements intéressés, comme première mesure, cessent le feu et mettent fin à toutes les activités militaires le 7 juin 1967 à 20 heures GMT',
  more: ['En mai 1967, l’Égypte masse des troupes dans le Sinaï, obtient le départ des casques bleus et ferme le détroit de Tiran aux navires israéliens ; la Jordanie signe avec elle un pacte de défense. Le 5 juin au matin, l’aviation israélienne détruit au sol l’aviation égyptienne. En six jours, Israël prend le Sinaï et la bande de Gaza à l’Égypte, la Cisjordanie et Jérusalem-Est à la Jordanie, le Golan à la Syrie. Les pertes sont estimées à 776 à 983 morts israéliens, 10 000 à 15 000 égyptiens, environ 700 jordaniens et 1 000 à 2 500 syriens.',
    'Guerre des Six Jours pour les Israéliens, guerre de juin 1967 ou Naksa (« le revers ») pour les Arabes. Israël dit avoir devancé une attaque qui menaçait son existence ; les États arabes parlent d’une agression. Le 7 juin, des soldats israéliens atteignent le Mur occidental, vestige du Second Temple, où les Juifs ne pouvaient plus prier depuis 1948 ; le quartier des Maghrébins, qui le bordait, est rasé peu après. L’esplanade, mont du Temple pour les Juifs, Haram al-Charif (« le Noble Sanctuaire ») pour les musulmans, reste administrée par le Waqf. De 250 000 à 400 000 Palestiniens, selon les sources, et près de 100 000 habitants du Golan sont déplacés.'],
  back(P) {
    Lib.sun(P, 170, 120, 28); Lib.cloud(P, 330, 170, 150, 32, 'b1');
    /* l'esplanade, au-dessus du Mur : le Dôme du Rocher au nord, al-Aqsa au sud */
    P.shape([P.I(0, 0, 220), P.I(540, 0, 220), P.I(540, -20, 220), P.I(400, -160, 220), P.I(0, -160, 220)], 'y2r1k1', 1);
    for (const [x, y, h] of [[24, -36, 70], [236, -30, 80], [272, -64, 64], [300, -24, 58]]) hgCypress(P, x, y, 220, h);
    P.cyl(128, -92, 220, 52, 34, { t: 'y2b1', s: 'b5y2', d: 'b6y2k1' }, 0.9, 8);
    for (let k = 0; k < 6; k++) { const a = (-35 + k * 32) * DEG, c = P.I(128 + 52 * Math.cos(a), -92 + 52 * Math.sin(a), 226); P.fill([[c[0] - 3, c[1]], [c[0] + 3, c[1]], [c[0] + 3, c[1] - 16], [c[0], c[1] - 20], [c[0] - 3, c[1] - 16]], 'y6r2', {}); }
    P.cyl(128, -92, 254, 31, 20, { t: 'y3r1', s: 'b4y3', d: 'b5y3k1' }, 0.8, 14);
    hgDome(P, 128, -92, 274, 30, 'y8r1', { k: 1.25, fin: 10 });
    P.box(350, -80, 220, 110, 56, 34, 'y2r1k1', 0.9);
    for (let i = 0; i < 5; i++) { const q = hgQ(P, 'y', -23.6, 357 + i * 20, 220); P.shape([q(0, 0), q(12, 0), q(12, 18), q(6, 25), q(0, 18)], 'k5b2', 0.5); }
    P.cyl(405, -52, 254, 18, 9, 'y2r1k1', 0.7, 12); hgDome(P, 405, -52, 263, 17, 'k3b1', { k: 1.1, fin: 7 });
    Lib.platform(P, 'y3r2k1', 'y4r3k2', { strata: [[0, .35, 'y4r3k2'], [.35, .7, 'y4r3k3'], [.7, 1, 'r3y4k4']] });
    for (let v = 60; v < 540; v += 60) { P.line([P.I(v, 0, 0), P.I(v, 540, 0)], 0.4); P.line([P.I(0, v, 0), P.I(540, v, 0)], 0.4); }
    /* le Mur occidental : grandes assises hérodiennes, plus petites au-dessus, touffes de câprier */
    Lib.wallR(P, 0, 0, 540, 220, 'y3r2k1', 1.3);
    { const r = rng(11); let z = 0, row = 0; while (z < 216) { const big = row < 6, hh = big ? 27 : 15; P.line([P.I(0, 0.7, z + hh), P.I(540, 0.7, z + hh)], big ? 0.9 : 0.5); let x = (row % 2) * 20 + r() * 12; while (x < 536) { P.line([P.I(x, 0.7, z + 1), P.I(x, 0.7, Math.min(220, z + hh) - 1)], 0.5); if (r() < 0.16) { const w = big ? 40 : 22; P.fill([P.I(x + 2, 0.7, z + 2), P.I(x + w, 0.7, z + 2), P.I(x + w, 0.7, z + hh - 2), P.I(x + 2, 0.7, z + hh - 2)], 'y3r2k2', { noKnock: true }); } x += (big ? 46 : 26) + r() * 24; } z += hh; row++; }
      for (let i = 0; i < 10; i++) { const c = P.I(30 + r() * 480, 0.9, 100 + r() * 100); P.shape(Lib.bumpy(P, c[0], c[1], 9 + r() * 6, 6, 5), 'y5b5k1', 0.5); for (let k = -1; k <= 1; k++) P.line([[c[0] + k * 4, c[1] + 3], [c[0] + k * 6, c[1] + 12 + r() * 8]], 0.5, { ink: 2 }); } }
    P.box(0, 0, 220, 540, 8, 8, 'y3r2k2', 0.7);
    /* les maisons du quartier des Maghrébins, sur le côté */
    Lib.wallL(P, 0, 0, 540, 160, 'y2r2k1', 1.2);
    for (let z = 22; z < 160; z += 22) P.line([P.I(0.6, 0, z), P.I(0.6, 540, z)], 0.35);
    for (const [y, z, w, h] of [[60, 86, 34, 46], [150, 90, 30, 42], [250, 86, 34, 46], [470, 90, 30, 42]]) { Lib.archL(P, y, z, w, h, 'k5b2', 0.7); P.box(0.5, y - 5, z - 6, 7, w + 10, 4, 'y3r2k2', 0.5); }
    Lib.archL(P, 346, 0, 56, 98, 'k6r2', 0.9); P.line([P.I(0.7, 374, 0), P.I(0.7, 374, 96)], 0.6);
    P.shape([P.I(0, 0, 160), P.I(-40, 0, 160), P.I(-40, 540, 160), P.I(0, 540, 160)], 'y3r2k1', 0.9);
    for (const y of [110, 300]) { P.box(-40, y, 160, 40, 70, 30, 'y2r2k1', 0.8); hgDome(P, -20, y + 35, 190, 20, 'y2r1k1', {}); }
    P.line([P.I(0.8, 120, 146), P.I(0.8, 230, 138)], 0.5); for (let i = 0; i < 4; i++) { const a = P.I(0.8, 136 + i * 24, 145 - i * 1.8); P.shape([[a[0] - 7, a[1]], [a[0] + 7, a[1] + 4], [a[0] + 7, a[1] + 22], [a[0] - 7, a[1] + 18]], ['y1', 'b4y1', 'r5y3', 'y1b1'][i], 0.5); }
    Lib.jar(P, 30, 300, 0, 1.2, 'r5y5k2'); Lib.jar(P, 26, 440, 0, 1, 'r5y6k1');
    Lib.stones(P, 12, 'y3r2k3', [300, 380, 220, 130]);
    P.box(440, 20, 0, 60, 26, 20, 'y3r2k2', 0.8); P.box(448, 22, 20, 34, 20, 14, 'y3r2k3', 0.7);
    hgTruck(P, 290, 440, { L: 100, W: 44, cab: 40, hb: 38, open: 1 });
    for (const [x, y, s] of [[150, 470, 20], [174, 480, 14]]) P.box(x, y, 0, s, s, s * 0.7, 'y3r2k3', 0.7);
  },
  chars: [
    ch(LK.hgSoldier, { x: 150, y: 34, face: 1, clip: 'hgTouch', h: 124 }),
    ch(LK.hgSoldier2, { x: 270, y: 80, face: -1, clip: 'lookup', h: 126, hold: { n: 'hgHelmO' } }),
    ch(LK.hgRabbi, { x: 360, y: 60, face: -1, clip: 'blow', h: 124, look: Object.assign({}, LK.hgRabbi, { old: 0, hair: 'k7', bt: 'k7', robe: 'y4b3k3', legs: 'y4b3k4' }), hold: { n: 'shofar' } }),
    ch(LK.hgSoldier, { x: 80, y: 60, face: 1, clip: 'hgDaven', h: 122, hold: { n: 'hgHelmO', nTop: 'hgBook' } }),
    ch(LK.hgSoldier2, { h: 124, speed: 22, hold: { n: 'hgHelmO' }, path: [W(520, 330, 1), W(400, 170, 4, 'lookup', { f: -1 }), W(520, 330, 0)] }),
    ch(LK.hgSoldier, { h: 124, speed: 20, t0: 3, look: Object.assign({}, LK.hgSoldier, { head: 'cap', ht: 'y4b3k4' }), path: [W(500, 470, 1.5), W(300, 250, 5, 'talk', { f: -1 }), W(500, 470, 0)] }),
    ch(LK.hgArabOld, { x: 34, y: 384, face: 1, clip: 'idle', h: 122, hold: { n: 'staffV' } }),
    ch(LK.hgArabW, { x: 60, y: 430, face: 1, clip: 'cradle', h: 116, hold: { nTop: 'baby' } }),
    ch(LK.hgArabKid, { x: 96, y: 404, face: 1, clip: 'lookup', h: 80 })
  ]
},
/* 4 · LA RÉSOLUTION 242 */
{
  title: 'La résolution 242', book: 'Résolution 242 du Conseil de sécurité', ch: 1967, ref: 'Doc onu-cs-242-1967', refFr: 'Résolution 242 du Conseil de sécurité des Nations unies, 22 novembre 1967', accent: 2, feast: null,
  when: '22 novembre 1967 · New York', year: 1967, lang: 'anglais', url: 'https://avalon.law.yale.edu/20th_century/un242.asp',
  quote: 'Withdrawal of Israeli armed forces from territories occupied in the recent conflict; Termination of all claims or states of belligerency and respect for and acknowledgement of the sovereignty, territorial integrity and political independence of every State in the area and their right to live in peace within secure and recognized boundaries free from threats or acts of force',
  fr: 'Retrait des forces armées israéliennes de territoires occupés lors du récent conflit ; fin de toute revendication ou de tout état de belligérance, respect et reconnaissance de la souveraineté, de l’intégrité territoriale et de l’indépendance politique de chaque État de la région et de son droit de vivre en paix à l’intérieur de frontières sûres et reconnues, à l’abri de menaces ou d’actes de force',
  more: ['Le 22 novembre 1967, le Conseil de sécurité adopte à l’unanimité un texte préparé par le Royaume-Uni. Son préambule affirme l’« inadmissibilité de l’acquisition de territoire par la guerre ». Il pose deux principes : le retrait israélien de territoires occupés en juin, et le droit de chaque État de la région à vivre en paix dans des frontières sûres et reconnues. Le texte anglais dit « from territories », le texte français « des territoires » : Israël en conclut que le retrait peut être partiel, les États arabes qu’il doit être total. La question est débattue depuis.',
    'Le 1er septembre, à Khartoum, la Ligue arabe avait posé trois refus : pas de paix avec Israël, pas de reconnaissance, pas de négociation. L’Égypte, la Jordanie et Israël acceptent la résolution, chacun selon sa lecture ; la Syrie la rejette jusqu’en 1973, et l’OLP jusqu’en 1988, parce que le texte ne parle des Palestiniens que comme d’un « problème des réfugiés ». Les premières implantations israéliennes apparaissent dès 1967 au Golan et en Cisjordanie. Israël étend sa loi à Jérusalem-Est en juin 1967, puis proclame en 1980 Jérusalem « entière et réunifiée » sa capitale ; le Conseil de sécurité déclare cette loi nulle (résolution 478).'],
  back(P) {
    hgRoom(P, { wl: 'b3y2k1', floor: 'b4k2y1', h: 260, band: 'y6r3' });
    /* la grande toile du fond, et la carte des territoires pris en juin */
    { const q = hgRect(P, 'y', 0.6, 120, 60, 320, 176, 'y3r2', 1.2), r = rng(8); for (let i = 0; i < 16; i++) { const u = 20 + r() * 280, v = 14 + r() * 140, c = q(u, v); P.shape(Lib.bumpy(P, c[0], c[1], 12 + r() * 16, 8 + r() * 10, 5), ['r5y4', 'b4y2', 'y6r1', 'b5r2k1', 'y4b4'][i % 5], 0.5); } const c = q(160, 96); P.shape([[c[0], c[1] - 40], [c[0] + 46, c[1] - 12], [c[0] + 14, c[1] - 6], [c[0] + 22, c[1] + 34], [c[0], c[1] + 8], [c[0] - 22, c[1] + 34], [c[0] - 14, c[1] - 6], [c[0] - 46, c[1] - 12]], 'y1', 0.9); P.line([q(-5, -5), q(325, -5), q(325, 181), q(-5, 181), q(-5, -5)], 2.4, { ink: 0, lvl: 9, taper: 0 }); }
    hgMap(P, (u, v) => P.I(0.6, 440 - u * 150, 236 - v * 190), { il: 'b3', land: 'y1b1', terr: { wb: 'r5y2', gz: 'r5y2', sinai: 'r3y3', golan: 'r5y2' } });
    P.line([P.I(0.7, 444, 240), P.I(0.7, 286, 240)], 2.4, { lvl: 8, taper: 0 });
    for (const y of [60, 140]) { hgRect(P, 'x', 0.6, y, 150, 60, 50, 'b6k3', 0.8); P.line([P.I(0.7, y + 30, 150), P.I(0.7, y + 30, 200)], 0.6, { ink: 0 }); }
    { const c = P.I(0.6, 130, 100); P.shape(P.disc(c[0], c[1], 24, 20).map(p => [c[0] + (p[0] - c[0]) * 0.87, p[1] + (p[0] - c[0]) * -0.5]), 'b4', 0.8); P.fill(P.disc(c[0], c[1], 13, 14).map(p => [c[0] + (p[0] - c[0]) * 0.87, p[1] + (p[0] - c[0]) * -0.5]), null, {}); }
    const cx = 290, cy = 290, R = 196;
    const far = [150, 172, 194, 216, 238, 260, 282, 304].map(a => [a, cx + R * Math.cos(a * DEG), cy + R * Math.sin(a * DEG)]);
    const lks = [LK.hgSuit, LK.hgSuitBr, LK.hgSuitG, LK.hgSuitB, LK.hgSuitL, LK.hgSuit, LK.hgSuitG, LK.hgSuitB];
    far.forEach(([a, x, y], i) => { if (i % 2 === 0 || i === 3) hgStatic(P, lks[i], { x, y, face: a < 225 ? 1 : -1, clip: 'hgVote', h: 112, noShadow: 1, tt: 0.4 + i * 0.5, hold: { n: 'hgTie' } }); });
    for (const [x, y] of [[261, 335], [321, 275]]) hgChair(P, x, y, 30, 'b6k2', x < 290 ? 'Y' : 'X');
    for (const y of [470, 500]) for (let x = 60; x < 300; x += 34) P.box(x, y, 0, 26, 8, 40, 'r5b3k2', 0.6);
    for (const x of [470, 500]) for (let y = 60; y < 300; y += 34) P.box(x, y, 0, 8, 26, 40, 'r5b3k2', 0.6);
  },
  chars: [
    { depth: 570, draw(P) {
      const cx = 290, cy = 290, R = 152, a0 = 124, a1 = 326, h = 36, arc = (r, z) => { const o = []; for (let a = a0; a <= a1; a += 6) o.push(P.I(cx + r * Math.cos(a * DEG), cy + r * Math.sin(a * DEG), z)); return o; };
      P.shape(arc(R - 17, h).concat(arc(R - 17, 0).reverse()), 'r4y5k3', 1);
      for (const a of [a0, a1]) P.shape([P.I(cx + (R - 17) * Math.cos(a * DEG), cy + (R - 17) * Math.sin(a * DEG), 0), P.I(cx + (R + 17) * Math.cos(a * DEG), cy + (R + 17) * Math.sin(a * DEG), 0), P.I(cx + (R + 17) * Math.cos(a * DEG), cy + (R + 17) * Math.sin(a * DEG), h), P.I(cx + (R - 17) * Math.cos(a * DEG), cy + (R - 17) * Math.sin(a * DEG), h)], 'r4y5k4', 0.9);
      P.shape(arc(R + 17, h).concat(arc(R - 17, h).reverse()), 'r4y5k1', 1);
      for (let a = 140; a <= 312; a += 21.5) { const x = cx + R * Math.cos(a * DEG), y = cy + R * Math.sin(a * DEG); hgDoc(x, y)(P, 0, h + 0.5); hgMic(x + 8, y + 8)(P, 0, h + 0.5); }
    } },
    ...[1, 5, 7].map(i => { const a = [150, 172, 194, 216, 238, 260, 282, 304][i], x = 290 + 196 * Math.cos(a * DEG), y = 290 + 196 * Math.sin(a * DEG); return ch([LK.hgSuitBr, LK.hgSuit, LK.hgSuitB][i % 3], { x, y, face: a < 225 ? 1 : -1, clip: 'hgVote', h: 112, noShadow: 1, t0: i * 0.6, hold: { n: 'hgTie' } }); }),
    hgTable(268, 282, 46, 46, 32, { depth: 600, items: [hgDoc(284, 298), hgDoc(300, 314)] }),
    ch(LK.hgLady, { x: 261, y: 335, face: 1, clip: 'hgSitWrite', h: 104, noShadow: 1, dz: 20 }),
    ch(LK.hgSuitL, { x: 321, y: 275, face: -1, clip: 'hgSitWrite', h: 110, noShadow: 1, dz: 20, hold: { n: 'hgTie' } }),
    ch(LK.hgSuitG, { x: 96, y: 404, face: 1, clip: 'hgVote', h: 114, hold: { n: 'hgTie' } }),
    ch(LK.hgSuit, { x: 404, y: 96, face: -1, clip: 'hgVote', h: 114, t0: 1.2, hold: { n: 'hgTie' } }),
    ch(LK.hgSuitB, { h: 120, speed: 18, hold: { n: 'hgTie', nTop: 'hgPaper' }, path: [W(420, 420, 2, 'idle', { f: -1 }), W(330, 430, 0), W(200, 420, 3, 'offer', { f: -1 }), W(330, 430, 0), W(420, 420, 0)] }),
    ch(LK.hgPress, { x: 440, y: 470, face: -1, clip: 'hgPhoto', h: 118, hold: { nTop: 'hgCam' } })
  ]
},
/* 5 · LA GUERRE DE KIPPOUR */
{
  title: 'La guerre de Kippour', book: 'Résolution 338 du Conseil de sécurité', ch: 1973, ref: 'Doc onu-cs-338-1973', refFr: 'Résolution 338 du Conseil de sécurité des Nations unies, 22 octobre 1973', accent: 3, feast: 'Kippour',
  when: '6 octobre 1973 · Israël, Sinaï et Golan', year: 1973, lang: 'anglais', url: 'https://en.wikisource.org/wiki/United_Nations_Security_Council_Resolution_338',
  quote: 'Calls upon all parties to the present fighting to cease all firing and terminate all military activity immediately, no later than 12 hours after the moment of the adoption of this decision, in the positions they now occupy',
  fr: 'Demande à toutes les parties aux combats en cours de cesser le feu et de mettre fin à toute activité militaire immédiatement, douze heures au plus tard après l’adoption de la présente décision, sur les positions qu’elles occupent maintenant',
  more: ['Le samedi 6 octobre 1973, vers 14 heures, les armées d’Égypte et de Syrie attaquent en même temps sur le canal de Suez et sur le Golan, territoires pris par Israël en 1967. C’est le jour de Kippour, jeûne le plus solennel du calendrier juif, et le dixième jour du ramadan. En Israël, les réservistes sont appelés jusque dans les synagogues. Les armées arabes avancent d’abord, puis l’armée israélienne contre-attaque, franchit le canal et approche de Damas. Le cessez-le-feu s’impose le 25 octobre. Israël compte environ 2 650 morts ; les pertes égyptiennes et syriennes sont estimées entre 8 000 et 18 000 morts.',
    'Guerre de Kippour pour les Israéliens, guerre d’Octobre ou du Ramadan pour les Arabes. L’Égypte célèbre chaque 6 octobre la traversée du canal ; en Israël, la surprise est restée « la défaillance » (hamehdal). La commission Agranat met en cause le commandement militaire et le renseignement ; la Première ministre Golda Meir démissionne en avril 1974. Les pays arabes exportateurs de pétrole décrètent un embargo contre les soutiens d’Israël, et le prix du baril quadruple. Des accords de désengagement sont signés en 1974 avec l’Égypte puis la Syrie. Pour beaucoup d’historiens, cette guerre a ouvert la voie à la négociation entre l’Égypte et Israël.'],
  back(P) {
    Lib.sun(P, 800, 120, 28); Lib.cloud(P, 250, 150, 180, 38, 'b1');
    Lib.platform(P, 'y3r1k1', 'y4r3k2', { strata: [[0, .3, 'y4r3k2'], [.3, .65, 'y4r3k3'], [.65, 1, 'r3y4k4']] });
    P.shape([P.I(0, 290, 0.3), P.I(540, 290, 0.3), P.I(540, 420, 0.3), P.I(0, 420, 0.3)], 'k3b1', 0.9);
    for (let x = 16; x < 530; x += 56) P.line([P.I(x, 355, 0.4), P.I(x + 28, 355, 0.4)], 1.4, { ink: 0, lvl: 8 });
    P.line([P.I(0, 286, 1), P.I(540, 286, 1)], 1.6, { lvl: 6, taper: 0 }); P.line([P.I(0, 424, 1), P.I(540, 424, 1)], 1.6, { lvl: 6, taper: 0 });
    /* immeuble d'habitation, au fond */
    hgBld(P, 300, 16, 220, 110, 236, 'y2r1k1', { win: 'b5k3', alt: 'y1b1', gx: 36, cw: 20, ch: 22, gz: 46, z0: 30, sill: 1 });
    for (let z = 28; z < 220; z += 46) P.box(322, 126, z, 60, 12, 3, 'y3r2k2', 0.5);
    P.box(296, 12, 236, 228, 118, 5, 'y3r2k2', 0.7); P.cyl(360, 60, 241, 12, 18, 'y1b1', 0.6, 10); P.cyl(450, 60, 241, 12, 18, 'y1b1', 0.6, 10);
    P.line([P.I(410, 80, 241), P.I(410, 80, 286)], 1, { taper: 0 }); for (let i = 0; i < 3; i++) P.line([P.I(398, 80, 270 + i * 6), P.I(422, 80, 270 + i * 6)], 0.6);
    /* la synagogue */
    P.box(24, 40, 0, 170, 190, 150, 'y2r2');
    P.box(18, 34, 150, 182, 202, 8, 'y3r2k2', 0.7);
    for (const y of [60, 170]) { const q = hgQ(P, 'x', 194.5, y, 40); P.shape([q(0, 0), q(30, 0), q(30, 56), q(15, 74), q(0, 56)], 'b5r2k2', 0.7); P.line([q(15, 0), q(15, 72)], 0.5, { ink: 0 }); }
    { const q = hgQ(P, 'x', 194.5, 112, 0); P.shape([q(-6, 0), q(46, 0), q(46, 78), q(20, 100), q(-6, 78)], 'y3r2k2', 0.8); P.shape([q(0, 0), q(40, 0), q(40, 74), q(20, 92), q(0, 74)], 'k6r2', 0.8); P.shape([q(0, 0), q(14, 0), q(14, 70), q(0, 74)], 'r5y4k3', 0.6);
      const c = q(20, 124), r = 15; P.shape(P.disc(c[0], c[1], 19, 16), 'b3y1', 0.7); for (const s of [1, -1]) P.line([[c[0], c[1] - s * r], [c[0] + r * 0.87, c[1] + s * r * 0.5], [c[0] - r * 0.87, c[1] + s * r * 0.5], [c[0], c[1] - s * r]], 1.2, { ink: 2, taper: 0 }); }
    for (const s of [0, 1]) { const q = hgQ(P, 'x', 120, 118 + s * 17, 158), pts = [q(0, 0), q(0, 20)]; for (let i = 0; i <= 6; i++) { const a = Math.PI - Math.PI * i / 6; pts.push(q(7.5 + Math.cos(a) * 7.5, 20 + Math.sin(a) * 7.5)); } pts.push(q(15, 0)); P.shape(pts, 'y1b1', 0.7); for (let i = 0; i < 4; i++) P.line([q(3, 5 + i * 4.5), q(12, 5 + i * 4.5)], 0.35); }
    for (let i = 0; i < 3; i++) P.box(194, 100 + i * 4, 0, 14 + i * 10, 64 - i * 8, 12 - i * 4, 'y3r2k2', 0.7);
    Lib.tree(P, 286, 150, 0, { h: 130, r: 34, can: 'y5b5k1' });
    Lib.bush(P, 40, 262, 0, 18); Lib.bush(P, 84, 266, 0, 14, 'y6b5');
    /* le camion, l'arrière ouvert vers nous ; la sirène sur son mât */
    hgTruck(P, 250, 328, { L: 170, W: 56, rev: 1, hb: 56 });
    P.line([P.I(500, 250, 0), P.I(500, 250, 170)], 3, { taper: 0 }); { const c = P.I(500, 250, 172); P.shape([[c[0] - 8, c[1] + 4], [c[0] + 8, c[1] + 4], [c[0] + 5, c[1] - 8], [c[0] - 5, c[1] - 8]], 'k5b1', 0.7); for (const s of [-1, 1]) P.shape([[c[0] + s * 5, c[1] - 6], [c[0] + s * 22, c[1] - 14], [c[0] + s * 22, c[1] + 8], [c[0] + s * 5, c[1] + 2]], 'r6y3k2', 0.7); }
    P.box(60, 470, 0, 90, 22, 18, 'r4y5k2', 0.7); P.box(60, 488, 18, 90, 4, 22, 'r4y5k2', 0.6);
    Lib.tree(P, 480, 490, 0, { h: 120, r: 30, can: 'y5b6k1' });
    P.cyl(330, 486, 0, 9, 30, 'r7y2k1', 0.7, 10); P.cyl(330, 486, 30, 10, 4, 'r7y2k2', 0.6, 10);
    P.line([P.I(20, 440, 0), P.I(20, 440, 150), P.I(44, 440, 158)], 2.6, { taper: 0 }); { const c = P.I(44, 440, 154); P.shape([[c[0] - 8, c[1] - 3], [c[0] + 8, c[1] - 3], [c[0] + 5, c[1] + 4], [c[0] - 5, c[1] + 4]], 'y2k2', 0.6); }
    P.line([P.I(400, 440, 0), P.I(400, 440, 70)], 2, { taper: 0 }); { const q = hgQ(P, 'y', 440, 388, 70); P.shape([q(0, 0), q(24, 0), q(24, 22), q(0, 22)], 'y6r1', 0.7); P.fill([q(4, 5), q(20, 5), q(20, 12), q(4, 12)], 'b6k2', {}); }
  },
  live(P, t) { const c = P.I(500, 250, 172); for (let i = 0; i < 3; i++) { const u = (t * 0.5 + i / 3) % 1, r = 26 + u * 54; for (const s of [-1, 1]) { const pts = []; for (let k = -4; k <= 4; k++) { const a = k * 0.16; pts.push([c[0] + s * Math.cos(a) * r, c[1] - 3 + Math.sin(a) * r]); } P.line(pts, 1.5 * (1 - u) + 0.4, { ink: 1, lvl: 8 }); } } },
  chars: [
    ...[0, 1].map(i => ch(i ? LK.hgCivil2 : LK.hgCivil, { h: 122, speed: 24, t0: i * 7, hold: { n: 'hgTalit', nTop: 'hgBook' }, path: [W(214, 134, 1.2, 'idle', { f: 1 }), W(226, 262, 0), W(446, 300, 0), W(446, 352, 0.6, 'idle', { f: -1 }), W(214, 134, 0, null, { jump: 1 })] })),
    ch(LK.hgRabbi, { x: 226, y: 172, face: 1, clip: 'bless', h: 122, hold: { n: 'hgTalit' } }),
    ch(LK.hgSoldier, { x: 492, y: 310, face: -1, clip: 'point', h: 124, look: Object.assign({}, LK.hgSoldier, { head: 'cap', ht: 'y4b3k4' }), hold: { nTop: 'hgPaper' } }),
    ch(LK.hgCivil3, { x: 124, y: 266, face: 1, clip: 'offer', h: 124, hold: { n: 'hgTalit', nTop: 'hgBook' } }),
    ch(LK.hgIsrBoy, { x: 156, y: 234, face: -1, clip: 'reach', h: 84 }),
    ch(LK.hgSoldier2, { h: 124, speed: 26, t0: 4, hold: { n: 'bundle' }, path: [W(20, 452, 0.5), W(330, 452, 0), W(446, 400, 0), W(446, 356, 0.5, 'idle', { f: -1 }), W(20, 452, 0, null, { jump: 1 })] }),
    ch(LK.hgIsrW, { x: 196, y: 484, face: 1, clip: 'still', h: 118 }),
    ch(LK.hgIsrW2, { x: 350, y: 250, face: 1, clip: 'sulk', h: 114 })
  ]
},
/* 6 · CAMP DAVID */
{
  title: 'Sadate à Jérusalem, la paix de Camp David', book: 'Accords de Camp David', ch: 1978, ref: 'Doc camp-david-1978', refFr: 'Accords de Camp David, cadre pour la paix au Proche-Orient, 17 septembre 1978, préambule', accent: 0, feast: null,
  when: '17 septembre 1978 · Camp David et Washington', year: 1978, lang: 'anglais', url: 'https://avalon.law.yale.edu/20th_century/campdav.asp',
  quote: 'After four wars during 30 years, despite intensive human efforts, the Middle East, which is the cradle of civilization and the birthplace of three great religions, does not enjoy the blessings of peace.',
  fr: 'Après quatre guerres en trente ans, malgré d’intenses efforts humains, le Proche-Orient, berceau de la civilisation et lieu de naissance de trois grandes religions, ne connaît pas les bienfaits de la paix.',
  more: ['Le 19 novembre 1977, le président égyptien Anouar el-Sadate atterrit en Israël ; le lendemain, il s’adresse à la Knesset, à Jérusalem. C’est la première visite d’un chef d’État arabe. Du 5 au 17 septembre 1978, le président américain Jimmy Carter réunit Sadate et le Premier ministre israélien Menahem Begin à Camp David, dans le Maryland. Deux accords-cadres en sortent. Le traité de paix est signé à Washington le 26 mars 1979, sur la pelouse de la Maison-Blanche : l’Égypte reconnaît Israël, qui lui rend le Sinaï, évacué en avril 1982.',
    'Sadate et Begin reçoivent le prix Nobel de la paix en 1978. Le premier accord-cadre prévoyait une autonomie pour les Palestiniens de Cisjordanie et de Gaza ; l’OLP le rejette, et il n’est pas appliqué. La Ligue arabe suspend l’Égypte de 1979 à 1989 et transfère son siège à Tunis. Le 6 octobre 1981, Sadate est assassiné au Caire par des militaires islamistes pendant un défilé. Le traité, lui, tient depuis : c’est le premier conclu entre Israël et un État arabe. Les implantations israéliennes du Sinaï, dont la ville de Yamit, sont démantelées en 1982.'],
  back(P) {
    Lib.sun(P, 170, 110, 26); Lib.cloud(P, 300, 170, 150, 30, 'b1');
    Lib.platform(P, 'y5b4', 'r3y5k1', { strata: [[0, .3, 'y5b4k1'], [.3, .65, 'r3y5k2'], [.65, 1, 'r4y4k3']] });
    hgWH(P, false);
    Lib.grass(P, 60, 'y5b4', [20, 130, 500, 400]);
    Lib.tree(P, 60, 120, 0, { h: 190, r: 50, can: 'y5b6k1' });
    { const b = Lib.tree(P, 500, 150, 0, { h: 150, r: 40, can: 'r3y2', blobs: 8 }); for (let i = 0; i < 14; i++) P.fill(P.disc(b[0] + (P.r() - .5) * 80, b[1] + (P.r() - .5) * 50, 3, 6), 'r5', {}); }
    Lib.hedge(P, 20, 250, 20, 520, 34, 'y5b6k1');
    hgFlag(P, 210, 150, 0, 150, 'eg', { w: 50 }); hgFlag(P, 270, 150, 0, 150, 'us', { w: 50, ph: 1.4 }); hgFlag(P, 330, 150, 0, 150, 'il', { w: 50, ph: 2.2 });
    for (const y of [410, 450, 490]) for (let x = 250 + (y === 450 ? 20 : 0); x < 520; x += 46) { hgChair(P, x, y, 28, 'y1b1', 'Y'); }
    const lks = [LK.hgSuit, LK.hgLady, LK.hgSuitG, LK.hgSuitB, LK.hgLady2, LK.hgSuitBr, LK.hgSuitL];
    let k = 0; for (const y of [410, 450, 490]) for (let x = 250 + (y === 450 ? 20 : 0); x < 520; x += 46) { k++; if (k % 5 !== 3) hgStatic(P, lks[k % 7], { x, y, face: 1, clip: k % 3 ? 'sit' : 'hgClap', h: 104, noShadow: 1, tt: k * 0.41 }); }
  },
  chars: [
    hgTable(196, 180, 150, 40, 40, { cloth: 'y1b1', items: [hgDoc(226, 200), hgDoc(271, 200), hgDoc(316, 200)] }),
    ch(LK.hgSadat, { x: 229, y: 285, face: 1, clip: 'hgShake', h: 134, hold: { n: hgC('hgTie', 'hgMoust') } }),
    ch(LK.hgBegin, { x: 285, y: 229, face: -1, clip: 'hgShake', h: 128, t0: 0.2, hold: { n: hgC('hgTie', 'hgSpecs') } }),
    ch(LK.hgCarter, { x: 244, y: 240, face: 1, clip: 'hgClasp', h: 134, hold: { n: 'hgTie' } }),
    ch(LK.hgPress, { x: 120, y: 420, face: 1, clip: 'hgKneelPhoto', h: 118, hold: { nTop: 'hgCam' } }),
    ch(LK.hgSuitBr, { x: 170, y: 470, face: 1, clip: 'hgPhoto', h: 122, hold: { nTop: 'hgCam' } }),
    ch(LK.hgSoldier, { x: 400, y: 170, face: -1, clip: 'guard', h: 122, look: Object.assign({}, LK.hgSoldier, { robe: 'b7k2', legs: 'b7k3', head: 'cap', ht: 'y1', sash: 'y1' }) }),
    ch(LK.hgSuitG, { x: 130, y: 250, face: 1, clip: 'hgClapS', h: 122, hold: { n: 'hgTie' } }),
    ch(LK.hgLady, { h: 116, speed: 16, hold: { nTop: 'hgPaper' }, path: [W(90, 330, 3, 'idle', { f: 1 }), W(150, 340, 2.5, 'talk', { f: 1 }), W(90, 330, 0)] })
  ]
},
/* 7 · LA GUERRE DU LIBAN */
{
  title: 'La guerre du Liban', book: 'Rapport de la commission Kahane', ch: 1983, ref: 'Doc kahane-1983', refFr: 'Rapport de la commission d’enquête israélienne Kahane, 8 février 1983, traduction anglaise', accent: 1, feast: null,
  when: 'Août 1982 · port de Beyrouth', year: 1982, lang: 'anglais', url: 'https://www.jewishvirtuallibrary.org/the-kahan-commission-of-inquiry',
  quote: 'those who made the decisions and those who implemented them are indirectly responsible for what ultimately occurred, even if they did not intend this to happen and merely disregarded the anticipated danger',
  fr: 'ceux qui ont pris les décisions et ceux qui les ont exécutées sont indirectement responsables de ce qui s’est finalement produit, même s’ils n’avaient pas l’intention que cela arrive et n’ont fait que négliger le danger prévisible',
  more: ['L’OLP s’est installée au Liban après 1970 ; le pays est en guerre civile depuis 1975. Le 6 juin 1982, trois jours après un attentat contre son ambassadeur à Londres, Israël envahit le Liban, opération qu’il nomme « Paix en Galilée », et assiège Beyrouth-Ouest. Fin août, environ 14 000 combattants palestiniens et soldats syriens quittent la ville par mer et par terre, sous la garde d’une force multinationale ; la direction de l’OLP gagne Tunis. Le quotidien libanais An-Nahar compte 17 825 morts au Liban pour l’été 1982, civils et combattants ; Israël perd plus de 650 soldats jusqu’en 1985.',
    'Du 16 au 18 septembre, après l’assassinat du président élu Bachir Gemayel, des miliciens phalangistes libanais entrent dans les camps de Sabra et Chatila, que l’armée israélienne encercle, et y tuent des civils palestiniens et libanais : 460 corps recensés par les secours libanais, 700 à 800 selon le renseignement israélien, jusqu’à 3 500 selon d’autres estimations. À Tel-Aviv, une manifestation (400 000 personnes selon ses organisateurs) réclame une enquête. La commission Kahane attribue la responsabilité directe aux phalangistes et une responsabilité indirecte à Israël ; le ministre de la Défense Ariel Sharon doit quitter son poste. Le Hezbollah naît dans ces années. Israël se retire du Liban-Sud en 2000.'],
  back(P) {
    Lib.sun(P, 820, 130, 28); Lib.cloud(P, 600, 190, 160, 32, 'b1');
    Lib.platform(P, 'y3r1k2', 'y4r3k2', { strata: [[0, .3, 'y4r3k2'], [.3, .65, 'y4r3k3'], [.65, 1, 'r3y4k4']] });
    P.shape([P.I(150, 0, 0.5), P.I(540, 0, 0.5), P.I(540, 188, 0.5), P.I(150, 188, 0.5)], 'b5y1', 1.1);
    P.shape([P.I(540, 0, 0), P.I(540, 188, 0), P.I(540, 188, -60), P.I(540, 0, -60)], 'b6', 1);
    for (let i = 0; i < 5; i++) P.line([P.I(540, 20 + i * 36, -3), P.I(540, 22 + i * 36, -58)], 0.7, { lvl: 3 });
    Lib.waves(P, [160, 10, 370, 40], 12, 1, 2); Lib.waves(P, [160, 150, 370, 30], 10, 1, 2);
    /* la ville, des immeubles éventrés */
    hgBld(P, 10, 10, 60, 70, 210, 'y2r1k2', { win: 'k6b2', gx: 26, cw: 14, ch: 18, gz: 34, z0: 20 });
    P.fill([P.I(70, 30, 210), P.I(70, 80, 210), P.I(70, 80, 170), P.I(70, 56, 150), P.I(70, 40, 184)], null, {}); P.line([P.I(70, 30, 210), P.I(70, 40, 184), P.I(70, 56, 150), P.I(70, 80, 170)], 1.2);
    hgBld(P, 80, 30, 60, 90, 150, 'y3r2k1', { win: 'k6b2', gx: 28, cw: 15, ch: 18, gz: 34, z0: 18 });
    hgBld(P, 10, 100, 70, 110, 120, 'y2r2k1', { win: 'k6b2', gx: 30, cw: 16, ch: 18, gz: 34, z0: 18, sill: 1 });
    P.fill([P.I(10, 210, 120), P.I(50, 210, 120), P.I(38, 210, 98), P.I(22, 210, 104), P.I(10, 210, 86)], null, {}); P.line([P.I(50, 210, 120), P.I(38, 210, 98), P.I(22, 210, 104), P.I(10, 210, 86)], 1.2);
    Lib.stones(P, 10, 'y3r2k3', [14, 214, 90, 30]);
    Lib.palm(P, 120, 160, 0, 130, { lean: 10 });
    hgShip(P, 190, 70, 320, 70, { tn: 'y1b1', deck: 'y3r2k1', house: 'y1', fun: 'b6k1', holds: [0.46] });
    for (let i = 0; i < 7; i++) { const a = P.I(330 + i * 22, 140, 34), b = P.I(330 + i * 22, 140, 48); P.line([a, b], 0.8, { taper: 0 }); } P.line([P.I(326, 140, 48), P.I(470, 140, 48)], 1.2, { taper: 0 });
    /* le quai : passerelle, bittes, grue, camion */
    P.line([P.I(150, 188, 1), P.I(540, 188, 1)], 2.4, { lvl: 7, taper: 0 });
    P.shape([P.I(286, 196, 0), P.I(310, 196, 0), P.I(310, 140, 36), P.I(286, 140, 36)], 'r4y5k2', 0.9); for (let i = 1; i < 6; i++) P.line([P.I(286, 196 - i * 9.3, i * 6), P.I(310, 196 - i * 9.3, i * 6)], 0.5);
    for (const x of [200, 380, 500]) { P.cyl(x, 200, 0, 6, 12, 'k6', 0.6, 10); P.cyl(x, 200, 12, 8, 4, 'k7', 0.5, 10); }
    P.line([P.I(200, 200, 10), P.I(214, 170, 4), P.I(220, 140, 30)], 1.1); P.line([P.I(500, 200, 10), P.I(492, 170, 4), P.I(486, 140, 30)], 1.1);
    hgTruck(P, 30, 300, { L: 150, W: 54, tn: 'y4b3k2', cover: 'y4b2k2' });
    for (const [x, y, s] of [[230, 236, 24], [258, 242, 18], [420, 300, 26], [448, 312, 18]]) P.box(x, y, 0, s, s, s * 0.8, 'r4y5k2', 0.7);
    hgFlag(P, 420, 216, 0, 130, 'lb', { w: 48 });
    Lib.stones(P, 10, 'y3r2k3', [200, 470, 150, 50]);
    P.cyl(60, 420, 0, 12, 30, 'b5k3', 0.7, 12); P.cyl(88, 434, 0, 12, 30, 'r6y2k2', 0.7, 12); P.cyl(70, 450, 0, 12, 30, 'b5k3', 0.7, 12);
    hgTruck(P, 380, 456, { L: 100, W: 44, tn: 'y1', cab: 40, hb: 38, open: 1 });
    for (const [x, y, lk, c, f, h] of [[120, 500, LK.hgArabW2, 'idle', 1, 110], [160, 516, LK.hgArabM, 'hgWaveHi', 1, 116], [196, 500, LK.hgArabKid, 'lookup', 1, 76], [470, 330, LK.hgMnf, 'guard', -1, 118]]) hgStatic(P, lk, { x, y, face: f, clip: c, h, tt: x * 0.01 });
    for (const [x, y] of [[500, 250], [516, 266], [490, 272]]) { const c = P.I(x, y, 0); P.shape(Lib.bumpy(P, c[0], c[1] - 8, 16, 10, 6), 'y3r2k2', 0.7); }
  },
  live(P, t) { const f = P.I(0, 20, 250); Lib.smoke(P, f[0], f[1], t, { n: 4, r: 18, h: 110, sp: 0.07, tn: 'k2b1' }); const g = P.I(250.8, 105, 106); Lib.smoke(P, g[0], g[1], t, { n: 3, r: 12, h: 90, sp: 0.11, tn: 'k2b1' }); },
  chars: [
    ch(LK.hgArafat, { x: 322, y: 132, z: 34, face: -1, clip: 'hgWaveHi', h: 112, noShadow: 1 }),
    ...[0, 1, 2].map(i => ch(i === 1 ? LK.hgFedai2 : LK.hgFedai, { h: 118, speed: 22, t0: i * 6.2, hold: { n: 'bundle' }, path: [W(190, 354, 1, 'idle', { f: 1 }), W(298, 300, 0), W(298, 200, 0), W(298, 142, 0.4, 'idle', { z: 36, f: 1 }), W(190, 354, 0, null, { jump: 1 })] })),
    ch(LK.hgMnf, { x: 340, y: 214, face: -1, clip: 'guard', h: 122 }),
    ch(LK.hgArabW, { x: 230, y: 420, face: 1, clip: 'hgWaveHi', h: 116 }),
    ch(LK.hgArabW2, { x: 290, y: 450, face: 1, clip: 'cradle', h: 114, hold: { nTop: 'baby' } }),
    ch(LK.hgArabKid, { x: 262, y: 392, face: 1, clip: 'hgWaveHi', h: 80, t0: 0.4 }),
    ch(LK.hgArabOld, { x: 350, y: 430, face: -1, clip: 'still', h: 118, hold: { n: 'staffV' } }),
    ch(LK.hgPress, { x: 420, y: 380, face: -1, clip: 'hgPhoto', h: 118, hold: { nTop: 'hgCam' } })
  ]
},
/* 8 · LA PREMIÈRE INTIFADA */
{
  title: 'La première Intifada', book: 'Déclaration d’Alger', ch: 1988, ref: 'Doc alger-1988', refFr: 'Déclaration d’indépendance du Conseil national palestinien, Alger, 15 novembre 1988, traduction anglaise des Nations unies', accent: 3, feast: null,
  when: 'Décembre 1987 · Gaza et Cisjordanie', year: 1987, lang: 'anglais', url: 'https://www.un.org/unispal/document/auto-insert-178680/',
  quote: 'The Palestine National Council hereby declares, in the Name of God and on behalf of the Palestinian Arab people, the establishment of the State of Palestine in the land of Palestine with its capital at Jerusalem.',
  fr: 'Le Conseil national palestinien proclame, au nom de Dieu et au nom du peuple arabe palestinien, l’établissement de l’État de Palestine sur la terre de Palestine, avec pour capitale Jérusalem.',
  more: ['Le 8 décembre 1987, près du camp de Jabaliya, dans la bande de Gaza, un camion israélien heurte des voitures et tue quatre ouvriers palestiniens. Le lendemain, les manifestations gagnent Gaza puis la Cisjordanie, sous administration militaire israélienne depuis vingt ans. C’est l’Intifada, « le soulèvement » : grèves, boutiques fermées, boycott, jets de pierres, puis des attaques armées. L’armée israélienne répond par la force, les arrestations et les couvre-feux. De décembre 1987 à septembre 1993, l’organisation israélienne B’Tselem compte environ 1 100 Palestiniens tués par les forces israéliennes et environ 160 Israéliens tués par des Palestiniens.',
    'Plusieurs centaines de Palestiniens accusés de collaboration sont aussi tués par d’autres Palestiniens. Le Hamas, issu des Frères musulmans, est fondé à Gaza en décembre 1987 ; sa charte de 1988 refuse l’existence d’Israël, et il est classé organisation terroriste par Israël, les États-Unis et l’Union européenne. En juillet 1988, la Jordanie renonce à la Cisjordanie. Le 15 novembre 1988, à Alger, le Conseil national palestinien proclame l’État de Palestine et accepte les résolutions 242 et 338, ce qui revient à admettre deux États ; en décembre, Yasser Arafat déclare renoncer au terrorisme. Israël rejette la proclamation ; près de 80 États la reconnaissent avant la fin de l’année.'],
  back(P) {
    Lib.cloud(P, 240, 140, 200, 40, 'b1k1'); Lib.cloud(P, 760, 110, 180, 36, 'b1k1');
    Lib.platform(P, 'y3r2k2', 'y4r3k2', { strata: [[0, .3, 'y4r3k2'], [.3, .65, 'y4r3k3'], [.65, 1, 'r3y4k4']] });
    P.shape([P.I(96, 100, 0.3), P.I(540, 100, 0.3), P.I(540, 540, 0.3), P.I(96, 540, 0.3)], 'k2y1r1', 0.8);
    /* minaret et maisons du fond */
    P.cyl(60, 40, 0, 14, 210, 'y2r1k1', 0.8, 10); P.cyl(60, 40, 150, 20, 6, 'y3r2k2', 0.7, 10); P.cyl(60, 40, 210, 10, 30, 'y2r1k1', 0.7, 10); hgDome(P, 60, 40, 240, 10, 'y5b5k1', { k: 1.5, fin: 10 });
    hgBld(P, 110, 0, 150, 86, 150, 'y2r1k1', { win: 'b5k3', gx: 36, cw: 18, ch: 24, gz: 60, z0: 86, sill: 1, noR: 1 });
    hgBld(P, 270, 0, 130, 86, 110, 'y3r2k1', { win: 'b5k3', gx: 40, cw: 18, ch: 22, gz: 60, z0: 74, noR: 1 });
    hgBld(P, 410, 0, 130, 86, 170, 'y2r2k1', { win: 'b5k3', gx: 40, cw: 18, ch: 24, gz: 56, z0: 86, sill: 1, noR: 1 });
    for (const [x, w, tn] of [[120, 56, 'b3k2'], [190, 58, 'y4b3k2'], [282, 106, 'b2k3'], [420, 50, 'y3r2k3'], [480, 50, 'b3k2']]) { hgShutter(P, 'y', 86.5, x, 0, w, 58, tn); P.shape([P.I(x - 4, 86.6, 60), P.I(x + w + 4, 86.6, 60), P.I(x + w + 4, 106, 52), P.I(x - 4, 106, 52)], ['r6y3', 'y6b4', 'b5y1', 'r5y5', 'y5b5'][(x / 10 | 0) % 5], 0.7); }
    { const q = hgQ(P, 'y', 86.8, 300, 14); P.fill([q(0, 0), q(30, 0), q(30, 20), q(0, 20)], null, {}); hgFlagRect(P, q(0, 20)[0], q(0, 20)[1], 26, 17, 'ps', 9); }
    for (const [x, z] of [[170, 150], [330, 110], [470, 170]]) { P.cyl(x, 40, z, 12, 16, 'k7', 0.6, 10); P.box(x + 20, 30, z, 22, 14, 3, 'b4k3', 0.5); }
    P.line([P.I(250, 86.6, 100), P.I(262, 100, 96), P.I(262, 100, 140)], 0.7);
    /* la rangée de gauche : boutiques fermées, balcons, linge */
    hgBld(P, 0, 110, 90, 200, 160, 'y2r2k1', { win: 'b5k3', gx: 46, cw: 20, ch: 24, gz: 60, z0: 92, sill: 1, noL: 1 });
    hgBld(P, 0, 320, 90, 220, 120, 'y3r2k1', { win: 'b5k3', gx: 50, cw: 20, ch: 22, gz: 60, z0: 78, noL: 1 });
    for (const [y, w, tn] of [[122, 60, 'y4b3k2'], [196, 50, 'b3k2'], [256, 46, 'b2k3'], [336, 70, 'y3r2k3'], [420, 50, 'b3k2'], [480, 50, 'y4b3k2']]) { hgShutter(P, 'x', 90.5, y, 0, w, 60, tn); P.shape([P.I(90.6, y - 4, 62), P.I(90.6, y + w + 4, 62), P.I(112, y + w + 4, 54), P.I(112, y - 4, 54)], ['y6b4', 'r6y3', 'r5y5', 'b5y1', 'y5b5', 'r6y3'][(y / 10 | 0) % 6], 0.7); }
    P.box(90, 150, 84, 26, 70, 5, 'y3r2k2', 0.7); hgRect(P, 'x', 90.6, 170, 89, 26, 50, 'k6r2', 0.7);
    P.line([P.I(90.6, 350, 110), P.I(90.6, 470, 104)], 0.5); for (let i = 0; i < 4; i++) { const a = P.I(90.8, 364 + i * 26, 109 - i * 1.4); P.shape([[a[0] - 7, a[1]], [a[0] + 7, a[1] + 4], [a[0] + 7, a[1] + 22], [a[0] - 7, a[1] + 18]], ['y1', 'r5y3', 'y1b1', 'b4y1'][i], 0.5); }
    /* la rue : poteau, pneu, pierres, caisses renversées */
    P.line([P.I(500, 130, 0), P.I(500, 130, 190)], 3, { taper: 0 }); P.line([P.I(488, 130, 176), P.I(512, 130, 176)], 1.4, { taper: 0 }); for (const dx of [-10, 10]) P.line([P.I(500 + dx, 130, 176), P.I(300 + dx, 60, 150), P.I(110 + dx, 110, 164)], 0.4);
    for (const [x, y, r] of [[330, 300, 20], [356, 326, 17]]) { P.shape(P.ell(x, y, 0.5, r, r, 18), 'k8', 0.9); P.fill(P.ell(x, y, 0.6, r * 0.55, r * 0.55, 14), 'k2y1r1', {}); P.line(P.ell(x, y, 5, r, r, 18), 1, {}); }
    Lib.stones(P, 26, 'y2r1k3', [180, 180, 330, 330]);
    P.box(420, 240, 0, 34, 26, 22, 'r4y5k2', 0.7); P.box(440, 274, 0, 28, 28, 8, 'r4y5k3', 0.7);
    P.box(140, 130, 0, 22, 22, 28, 'r4y5k2', 0.7);
    Lib.jar(P, 126, 470, 0, 1.2, 'r5y5k2');
    hgWheel(P, 330, 451, 13, 'r4y5k3'); P.box(296, 450, 16, 84, 42, 7, 'r4y5k2', 0.8); P.line([P.I(380, 460, 20), P.I(420, 460, 30)], 1.6); P.line([P.I(380, 482, 20), P.I(420, 482, 30)], 1.6);
    for (let i = 0; i < 9; i++) { const c = P.I(306 + (i % 5) * 15, 460 + (i % 2) * 18, 23); P.shape(Lib.bumpy(P, c[0], c[1] - 3, 7, 5, 5), ['y6b5', 'r7y3', 'y8r2'][i % 3], 0.4); }
    hgWheel(P, 330, 492.6, 13, 'r4y5k3');
    P.cyl(500, 470, 0, 13, 30, 'k5b1', 0.7, 12);
  },
  front(P) { for (let i = 0; i <= 5; i++) P.line([P.I(116, 150 + i * 14, 89), P.I(116, 150 + i * 14, 108)], 0.7, { taper: 0 }); P.line([P.I(116, 150, 108), P.I(116, 220, 108)], 1.4, { taper: 0 }); P.line([P.I(116, 150, 98), P.I(116, 220, 98)], 0.6, { taper: 0 }); },
  chars: [
    ch(LK.hgPupil, { x: 437, y: 253, z: 22, face: -1, clip: 'raise', h: 112, hold: { n: 'hgFlagPS' }, noShadow: 1 }),
    ch(LK.hgPupilG, { h: 108, speed: 20, hold: { n: 'hgSatchel', nTop: 'hgBook' }, path: [W(520, 470, 0.5), W(300, 440, 0), W(170, 300, 2.5, 'lookup', { f: 1 }), W(300, 440, 0), W(520, 470, 0)] }),
    ch(LK.hgPupilG2, { h: 104, speed: 20, t0: 1.6, hold: { n: 'hgSatchel' }, path: [W(520, 500, 0.5), W(300, 470, 0), W(190, 340, 2.5, 'talk', { f: 1 }), W(300, 470, 0), W(520, 500, 0)] }),
    ch(LK.hgPupil2, { x: 300, y: 210, face: 1, clip: 'talk', h: 112, hold: { n: 'hgSatchel' } }),
    ch(LK.hgPupil, { x: 360, y: 200, face: -1, clip: 'point', h: 110, look: Object.assign({}, LK.hgPupil, { robe: 'r5y3k1', hs: 'short' }) }),
    ch(LK.hgArabOld, { x: 150, y: 142, z: 0, face: 1, clip: 'sit', h: 116, noShadow: 1, hold: { n: 'staffV' } }),
    ch(LK.hgArabW, { h: 114, speed: 16, t0: 5, hold: { n: 'jarhead' }, path: [W(140, 520, 1), W(200, 400, 0), W(480, 380, 2, 'idle', { f: -1 }), W(200, 400, 0), W(140, 520, 0)] }),
    ch(LK.hgArabW2, { x: 103, y: 190, z: 89, face: 1, clip: 'idle', h: 100, noShadow: 1 }),
    { beast: 'donkey', x: 440, y: 472, face: 1, h: 86 }
  ]
},
/* 9 · UN MILLION D'ARRIVANTS */
{
  title: 'Un million d’arrivants', book: 'Isaïe', ch: 43, ref: 'Isaias 43:6', refFr: 'Isaïe 43, 6', accent: 0, feast: null,
  when: '24 mai 1991 · aéroport Ben Gourion', year: 1991,
  quote: 'I will say to the north:  Give up:  and to the south:  Keep not back:  bring my sons from afar, and my daughters from the ends of the earth.',
  fr: 'Je dirai au nord : Donne ! et au midi : Ne retiens pas ! Ramène mes fils de loin, et mes filles des extrémités de la terre.',
  more: ['Les 24 et 25 mai 1991, alors que le régime éthiopien s’effondre, l’opération Salomon transporte 14 325 Juifs d’Éthiopie d’Addis-Abeba à Tel-Aviv en trente-six heures, à bord de trente-cinq avions. L’opération Moïse en avait amené environ 8 000 par le Soudan, de novembre 1984 à janvier 1985. Dans le même temps, l’Union soviétique ouvre ses frontières puis disparaît : près d’un million de ses ressortissants s’installent en Israël de 1989 à 1999, selon le Bureau central de statistique. Le pays, qui comptait 4,5 millions d’habitants en 1989, en compte plus de 6 millions en 2000.',
    'La tradition juive nomme « rassemblement des exilés » (kibbouts galouyot) le retour annoncé par les prophètes ; ce verset d’Isaïe, qui appelle le nord et le midi, a souvent été cité pour ces deux immigrations. L’intégration est inégale : logement, emploi, reconnaissance des diplômes pour les uns ; pour les Juifs d’Éthiopie, dont le grand rabbin séfarade avait reconnu la judéité en 1973, des discriminations que dénoncent leurs associations. Au début de 1991, pendant la guerre du Golfe, l’Irak tire une quarantaine de missiles Scud sur Israël, qui ne riposte pas ; deux personnes sont tuées directement, d’autres meurent d’arrêts cardiaques ou d’un mauvais usage du masque à gaz.'],
  back(P) {
    Lib.sun(P, 180, 110, 28); Lib.cloud(P, 330, 190, 160, 32, 'b1');
    Lib.platform(P, 'k2y1b1', 'y4r3k2', { strata: [[0, .3, 'k3y1'], [.3, .65, 'y4r3k3'], [.65, 1, 'r3y4k4']] });
    for (let v = 90; v < 540; v += 90) { P.line([P.I(v, 0, 0), P.I(v, 540, 0)], 0.4); P.line([P.I(0, v, 0), P.I(540, v, 0)], 0.4); }
    P.line([P.I(0, 330, 0.4), P.I(540, 330, 0.4)], 2.2, { ink: 0, lvl: 9, taper: 0 });
    /* le gros porteur : fuselage le long de x, nez vers la droite */
    const y0 = 110, zb = 46, D = 100, L = 500, x0 = -10, I = (a, c) => P.I(x0 + a, y0, c);
    P.shape([P.I(x0 + L * 0.4, y0, zb + 22), P.I(x0 + L * 0.58, y0, zb + 22), P.I(x0 + L * 0.34, y0 - 104, zb + 36), P.I(x0 + L * 0.27, y0 - 104, zb + 36)], 'y1b2k1', 0.9);
    P.shape([I(L * 0.03, zb + D * 0.9), I(L * 0.22, zb + D * 0.95), I(L * 0.1, zb + D + 120), I(0, zb + D + 126)], 'b6', 1);
    { const c = I(L * 0.085, zb + D + 62); hgFlagRect(P, c[0] - 17, c[1] - 12, 34, 22, 'il', 9); }
    P.shape([P.I(x0 + L * 0.03, y0, zb + D * 0.72), P.I(x0 + L * 0.15, y0, zb + D * 0.72), P.I(x0 + L * 0.06, y0 + 74, zb + D * 0.72), P.I(x0, y0 + 74, zb + D * 0.72)], 'y1b1', 0.8);
    P.shape(smooth([I(0, zb + D * 0.8), I(L * 0.12, zb + D), I(L * 0.5, zb + D), I(L * 0.76, zb + D), I(L * 0.82, zb + D + 16), I(L * 0.93, zb + D + 12), I(L * 0.985, zb + D * 0.66), I(L, zb + D * 0.4), I(L * 0.96, zb + D * 0.1), I(L * 0.86, zb), I(L * 0.5, zb), I(L * 0.2, zb), I(L * 0.06, zb + D * 0.34)], 3), 'y1', 1.2);
    P.line([I(L * 0.05, zb + D * 0.5), I(L * 0.5, zb + D * 0.44), I(L * 0.97, zb + D * 0.44)], 4, { ink: 2, lvl: 9, taper: 0.1 });
    P.line([I(L * 0.08, zb + D * 0.42), I(L * 0.5, zb + D * 0.36), I(L * 0.95, zb + D * 0.36)], 1.4, { ink: 2, lvl: 6, taper: 0.1 });
    for (let a = 0.16; a < 0.9; a += 0.033) { if (a > 0.69 && a < 0.76) continue; const c = I(L * a, zb + D * 0.62); P.fill(P.disc(c[0], c[1], 2.6, 6), 'b6k3', {}); }
    for (let a = 0.84; a < 0.93; a += 0.03) { const c = I(L * a, zb + D + 2); P.fill(P.disc(c[0], c[1], 2.2, 6), 'b6k3', {}); }
    P.shape([I(L * 0.95, zb + D * 0.86), I(L * 0.985, zb + D * 0.7), I(L * 0.97, zb + D * 0.62), I(L * 0.93, zb + D * 0.78)], 'b6k4', 0.6);
    P.shape([I(L * 0.7, zb + D * 0.3), I(L * 0.75, zb + D * 0.3), I(L * 0.75, zb + D * 0.74), I(L * 0.7, zb + D * 0.74)], 'k7b2', 0.8);
    for (const a of [0.46, 0.5]) hgWheel(P, x0 + L * a, y0 + 6, 14); hgWheel(P, x0 + L * 0.88, y0 + 4, 11);
    P.line([I(L * 0.48, zb + 4), I(L * 0.48, 22)], 3, { taper: 0 }); P.line([I(L * 0.88, zb + 2), I(L * 0.88, 18)], 2.4, { taper: 0 });
    for (const dy of [70, 136]) { const xa = x0 + L * (0.43 - dy * 0.00075), a = P.I(xa, y0 + dy, zb + 4), b = P.I(xa + 44, y0 + dy, zb + 4); P.shape(caps(a, b, 12, 13), 'k3b1', 0.8); P.fill(P.disc(b[0], b[1], 8, 10), 'k7', {}); P.line([P.I(xa + 20, y0 + dy, zb + 14), P.I(xa + 20, y0 + dy, zb + 24)], 3, { taper: 0 }); }
    P.shape([P.I(x0 + L * 0.4, y0, zb + 18), P.I(x0 + L * 0.6, y0, zb + 18), P.I(x0 + L * 0.3, y0 + 196, zb + 30), P.I(x0 + L * 0.22, y0 + 196, zb + 30)], 'y1b1', 1);
    /* la passerelle */
    for (let i = 0; i < 9; i++) P.box(342, y0 + 6 + i * 13, 0, 34, 13, 76 - i * 8.4, 'y2k2', 0.6);
    P.line([P.I(376, y0 + 6, 110), P.I(376, y0 + 123, 34)], 1.4, { taper: 0 }); for (let i = 0; i < 5; i++) P.line([P.I(376, y0 + 10 + i * 27, 76 - i * 17.6), P.I(376, y0 + 10 + i * 27, 108 - i * 17.6)], 0.8, { taper: 0 });
    /* l'autobus, les chariots à bagages */
    P.box(400, 300, 10, 130, 48, 50, 'y1b1', 0.9); hgRect(P, 'y', 348.4, 406, 32, 118, 20, 'b5k3', 0.6); for (let i = 1; i < 6; i++) P.line([P.I(406 + i * 19.6, 348.5, 32), P.I(406 + i * 19.6, 348.5, 52)], 0.7, { ink: 0 }); hgRect(P, 'x', 530.4, 306, 30, 36, 24, 'b5k3', 0.6); P.fill([P.I(400, 348.5, 18), P.I(530, 348.5, 18), P.I(530, 348.5, 24), P.I(400, 348.5, 24)], 'b6', {});
    for (const x of [424, 504]) hgWheel(P, x, 348.8, 11);
    P.box(60, 470, 8, 70, 36, 4, 'k5b1', 0.6); for (const [a, b, s, tn] of [[64, 474, 22, 'r4y4k3'], [90, 476, 26, 'k6b2'], [70, 488, 18, 'r6y3k2'], [100, 490, 16, 'y4r3k2']]) P.box(a, b, 12, s, 14, s * 0.7, tn, 0.6);
    hgFlag(P, 110, 410, 0, 120, 'il', { w: 46 });
  },
  chars: [
    ...[0, 1].map(i => ch(i ? LK.hgEthW2 : LK.hgEthM, { h: 110, speed: 18, t0: i * 7.5, noShadow: 1, hold: i ? { nTop: 'baby' } : { n: 'bundle' }, over: i ? 'cradle' : null, path: [W(359, 122, 1, i ? 'cradle' : 'idle', { z: 76, f: -1 }), W(359, 232, 0, null, { z: 0 }), W(300, 290, 0), W(90, 290, 0), W(359, 122, 0, null, { z: 76, jump: 1 })] })),
    ch(LK.hgEthOld, { x: 170, y: 372, face: -1, clip: 'prostrate', h: 116 }),
    ch(LK.hgEthW, { x: 296, y: 352, face: -1, clip: 'bless', h: 112 }),
    ch(LK.hgEthKid, { x: 328, y: 378, face: -1, clip: 'lookup', h: 78 }),
    ch(LK.hgSoldier2, { x: 236, y: 222, face: 1, clip: 'offer', h: 118, look: Object.assign({}, LK.hgSoldier2, { fem: 1, hs: 'long' }), hold: { nTop: 'hgPaper' } }),
    ch(LK.hgRusM, { h: 122, speed: 17, hold: { n: 'hgCase' }, path: [W(522, 424, 1.5, 'idle', { f: -1 }), W(440, 438, 3, 'lookup', { f: -1 }), W(522, 424, 0)] }),
    ch(LK.hgRusW, { h: 112, speed: 17, t0: 0.2, hold: { n: 'hgCase2' }, path: [W(526, 458, 1.5, 'idle', { f: -1 }), W(452, 474, 3, 'idle', { f: -1 }), W(526, 458, 0)] }),
    ch(LK.hgRusGirl, { h: 82, speed: 17, t0: 0.3, hold: { n: 'hgViolin' }, path: [W(506, 494, 1.5, 'idle', { f: -1 }), W(424, 508, 3, 'lookup', { f: -1 }), W(506, 494, 0)] })
  ]
},
/* 10 · OSLO */
{
  title: 'Les accords d’Oslo', book: 'Déclaration de principes d’Oslo', ch: 1993, ref: 'Doc oslo-1993', refFr: 'Déclaration de principes sur des arrangements intérimaires d’autonomie, 13 septembre 1993', accent: 2, feast: null,
  when: '13 septembre 1993 · Washington', year: 1993, lang: 'anglais', url: 'https://avalon.law.yale.edu/20th_century/isrplo.asp',
  quote: 'agree that it is time to put an end to decades of confrontation and conflict, recognize their mutual legitimate and political rights, and strive to live in peaceful coexistence and mutual dignity and security',
  fr: 'conviennent qu’il est temps de mettre fin à des décennies d’affrontement et de conflit, de reconnaître leurs droits légitimes et politiques mutuels, et de s’efforcer de vivre dans la coexistence pacifique, la dignité et la sécurité mutuelles',
  more: ['Après la conférence de Madrid (octobre 1991), des négociations secrètes s’ouvrent en Norvège en janvier 1993. Le 9 septembre, par un échange de lettres, l’OLP reconnaît le droit d’Israël à vivre en paix et en sécurité et renonce au terrorisme ; Israël reconnaît l’OLP comme représentant du peuple palestinien. Le 13 septembre, à la Maison-Blanche, Shimon Peres et Mahmoud Abbas signent la déclaration de principes ; le Premier ministre Yitzhak Rabin et Yasser Arafat se serrent la main devant le président Bill Clinton. Le texte prévoit une autonomie palestinienne de cinq ans et renvoie à plus tard Jérusalem, les réfugiés, les implantations, la sécurité et les frontières.',
    'L’Autorité palestinienne s’installe à Gaza et à Jéricho en 1994 ; l’accord de 1995 divise la Cisjordanie en zones A, B et C, la dernière, environ 60 % du territoire, restant sous contrôle israélien. Rabin, Peres et Arafat reçoivent le prix Nobel de la paix en 1994. Le 25 février 1994, à Hébron, un colon israélien tue 29 fidèles musulmans dans le sanctuaire que les Juifs nomment tombeau des Patriarches et les musulmans mosquée d’Ibrahim. À partir d’avril 1994, le Hamas et le Jihad islamique commettent des attentats-suicides dans des villes israéliennes. Le nombre d’Israéliens installés en Cisjordanie, environ 110 000 en 1993 selon l’organisation La Paix maintenant, continue de croître.'],
  back(P) {
    Lib.sun(P, 830, 110, 28); Lib.cloud(P, 640, 180, 170, 34, 'b1');
    Lib.platform(P, 'y5b4', 'r3y5k1', { strata: [[0, .3, 'y5b4k1'], [.3, .65, 'r3y5k2'], [.65, 1, 'r4y4k3']] });
    hgWH(P, true);
    Lib.grass(P, 50, 'y5b4', [130, 20, 400, 500]);
    Lib.tree(P, 150, 40, 0, { h: 200, r: 52, can: 'y5b6k1' }); Lib.tree(P, 500, 60, 0, { h: 170, r: 46, can: 'y6b5' });
    Lib.hedge(P, 250, 16, 440, 16, 30, 'y5b6k1');
    /* l'estrade, la table de signature, les drapeaux */
    P.box(150, 110, 0, 270, 160, 14, 'b5k2'); P.shape([P.I(160, 120, 14.3), P.I(410, 120, 14.3), P.I(410, 260, 14.3), P.I(160, 260, 14.3)], 'b4k1', 0.6);
    P.box(420, 170, 0, 16, 50, 7, 'b5k3', 0.6);
    hgFlag(P, 170, 124, 14, 150, 'us', { w: 50 }); hgFlag(P, 230, 124, 14, 150, 'us', { w: 50, ph: 1.7 });
    const lks = [LK.hgSuit, LK.hgLady, LK.hgSuitG, LK.hgSuitKef, LK.hgLady2, LK.hgSuitBr, LK.hgSuitB, LK.hgSuitL];
    let k = 0; for (const x of [300, 346, 392, 438, 484]) for (let y = 330 + (x % 4 ? 0 : 18); y < 520; y += 44) { k++; hgChair(P, x, y, 28, 'y1b1', 'Y'); if (k % 6 !== 4) hgStatic(P, lks[(k * 3) % 8], { x, y, face: 1, clip: k % 3 === 1 ? 'hgClap' : 'sit', h: 104, noShadow: 1, tt: k * 0.43 }); }
  },
  chars: [
    hgTable(176, 150, 46, 80, 50, { wood: 'r4y5k2', z: 14, items: [hgDoc(199, 176), hgDoc(199, 204)] }),
    hgLectern(330, 130, { z: 14 }),
    ch(LK.hgRabin, { x: 265, y: 233, z: 14, face: 1, clip: 'hgShake', h: 128, noShadow: 1, hold: { n: 'hgTie' } }),
    ch(LK.hgArafat, { x: 319, y: 179, z: 14, face: -1, clip: 'hgShake', h: 122, noShadow: 1, t0: 0.2 }),
    ch(LK.hgClinton, { x: 277, y: 191, z: 14, face: 1, clip: 'hgOpen', h: 140, noShadow: 1, hold: { n: 'hgTie' } }),
    ch(LK.hgSuitG, { x: 214, y: 250, z: 14, face: 1, clip: 'hgClapS', h: 122, noShadow: 1, look: Object.assign({}, LK.hgSuitG, { hair: 'k3' }), hold: { n: 'hgTie' } }),
    ch(LK.hgSuitBr, { x: 380, y: 150, z: 14, face: -1, clip: 'talk', h: 122, noShadow: 1, look: Object.assign({}, LK.hgSuitBr, { hair: 'k3', beard: null }), hold: { n: hgC('hgTie', 'hgMoust') } }),
    ch(LK.hgPress, { x: 200, y: 330, face: 1, clip: 'hgKneelPhoto', h: 118, hold: { nTop: 'hgCam' } }),
    ch(LK.hgSuitB, { x: 240, y: 390, face: 1, clip: 'hgPhoto', h: 120, look: Object.assign({}, LK.hgSuitB, { robe: 'y4r3k2', legs: 'k6b1' }), hold: { nTop: 'hgCam' } }),
    ch(LK.hgLady, { x: 170, y: 430, face: 1, clip: 'hgPhoto', h: 112, t0: 1.1, hold: { nTop: 'hgCam' } })
  ]
},
/* 11 · LA PAIX AVEC LA JORDANIE, LA MORT DE RABIN */
{
  title: 'La paix avec la Jordanie, la mort de Rabin', book: 'Traité de paix israélo-jordanien', ch: 1994, ref: 'Doc israel-jordanie-1994', refFr: 'Traité de paix entre l’État d’Israël et le Royaume hachémite de Jordanie, 26 octobre 1994, article 1', accent: 1, feast: null,
  when: '4 novembre 1995 · Tel-Aviv', year: 1995, lang: 'anglais', url: 'https://avalon.law.yale.edu/20th_century/jordan_treaty.asp',
  quote: 'Peace is hereby established between the State of Israel and the Hashemite Kingdom of Jordan (the "Parties") effective from the exchange of the instruments of ratification of this Treaty.',
  fr: 'La paix est établie par le présent traité entre l’État d’Israël et le Royaume hachémite de Jordanie (les « Parties »), à compter de l’échange des instruments de ratification du présent traité.',
  more: ['Le 26 octobre 1994, dans la vallée de l’Arava, Yitzhak Rabin et le Premier ministre jordanien Abdelsalam Majali signent un traité de paix en présence du roi Hussein et de Bill Clinton. La Jordanie est le deuxième État arabe à reconnaître Israël ; le traité lui reconnaît un rôle particulier dans les lieux saints musulmans de Jérusalem. Le samedi 4 novembre 1995, à Tel-Aviv, à la sortie d’un rassemblement pour la paix sur la place des Rois-d’Israël, Yitzhak Rabin est tué par un étudiant israélien d’extrême droite opposé aux accords d’Oslo, condamné depuis à la prison à vie.',
    'Dans les jours qui suivent, des milliers de personnes, dont beaucoup de jeunes, veillent sur la place avec des bougies ; elle porte aujourd’hui le nom de Rabin. Le roi Hussein, le président égyptien Hosni Moubarak et Bill Clinton assistent aux obsèques à Jérusalem. Les mois précédents avaient vu des manifestations où Rabin était traité de traître ; la société israélienne débat depuis de la part de ce climat. Après une série d’attentats-suicides au début de 1996, Benyamin Netanyahou, opposé aux accords, remporte les élections de mai. Des accords partiels suivent (Hébron en 1997, Wye River en 1998). La période intérimaire s’achève en mai 1999 sans accord final.'],
  back(P) {
    nightSky(P, 'b7k4', 80); Lib.moon(P, 800, 130, 22);
    Lib.platform(P, 'b3k3r1', 'b3k4r1', { strata: [[0, .4, 'b3k4r1'], [.4, 1, 'b4k5r1']], pebbles: false });
    for (let v = 60; v < 540; v += 60) { P.line([P.I(v, 100, 0), P.I(v, 540, 0)], 0.35, { lvl: 6 }); P.line([P.I(0, v + 40, 0), P.I(540, v + 40, 0)], 0.35, { lvl: 6 }); }
    /* l'hôtel de ville : une grande barre à fenêtres, son perron */
    hgBld(P, 50, 6, 440, 70, 250, 'b3k3', { win: 'b6k5', lit: 0.3, gx: 27, cw: 18, ch: 20, gz: 31, z0: 50 });
    P.box(44, 0, 250, 452, 82, 6, 'b3k4', 0.7);
    P.box(190, 76, 0, 160, 34, 34, 'b3k3', 0.8); for (let i = 0; i < 4; i++) P.box(200, 110 + i * 9, 0, 140, 9, 27 - i * 8, 'b2k3', 0.6);
    hgRect(P, 'y', 76.4, 236, 34, 68, 12, 'y3r1', 0.6);
    hgFlag(P, 150, 96, 0, 150, 'il', { w: 46, half: 1 }); hgFlag(P, 390, 96, 0, 150, 'il', { w: 46, half: 1, ph: 1.7 });
    Lib.tree(P, 40, 150, 0, { h: 150, r: 38, can: 'y3b5k4', trunk: 'r3y3k5' }); Lib.tree(P, 510, 130, 0, { h: 140, r: 36, can: 'y3b5k4', trunk: 'r3y3k5' });
    for (const [x, y] of [[100, 430], [480, 330]]) { P.line([P.I(x, y, 0), P.I(x, y, 150)], 2.6, { taper: 0 }); const c = P.I(x, y, 156); P.halo(c[0], c[1], 40, ['b5k3', 'b3k1', 'y1'], { knock: true }); P.shape(P.disc(c[0], c[1], 7, 12), 'y2', 0.6); }
    /* la veillée : silhouettes au fond, bougies par milliers, fleurs, feuilles de papier */
    const lks = [LK.hgYouth, LK.hgYouthG, LK.hgSuit, LK.hgYouth2, LK.hgIsrW2, LK.hgYouthG2, LK.hgCivil3, LK.hgSoldier2];
    for (let i = 0; i < 9; i++) hgStatic(P, lks[i % 8], { x: 90 + i * 44, y: 176 + (i % 3) * 14, face: i % 2 ? -1 : 1, clip: i % 3 === 1 ? 'sulk' : 'idle', h: 96, tt: i * 0.7 });
    hgCandles(P, 70, [80, 214, 390, 50], 3); hgCandles(P, 90, [210, 300, 180, 110], 5); hgCandles(P, 50, [60, 440, 300, 70], 7); hgCandles(P, 30, [400, 420, 110, 90], 9);
    { const r = rng(21); for (let i = 0; i < 26; i++) { const c = P.I(200 + r() * 210, 290 + r() * 130, 0); if (i % 2) P.shape([[c[0] - 5, c[1] - 2], [c[0] + 4, c[1] - 4], [c[0] + 6, c[1] + 2], [c[0] - 3, c[1] + 4]], 'y1', 0.4); else { P.line([[c[0], c[1]], [c[0] + 7, c[1] - 3]], 0.8, { ink: 2 }); P.fill(P.disc(c[0] + 8, c[1] - 4, 2.6, 6), ['r7', 'y8', 'r5b3'][i % 3], {}); } } }
    for (const [x, y, tt, lk, fc, c] of [[196, 380, 0.4, LK.hgYouthG2, 1, 'rest'], [300, 440, 1.9, LK.hgYouth2, -1, 'fill'], [412, 336, 2.6, LK.hgYouthG, -1, 'rest']]) hgStatic(P, lk, { x, y, face: fc, clip: c, h: 106, tt, hold: { n: 'hgCandle' } });
  },
  live(P, t) { for (const [x, y, s] of [[270, 350, 1], [330, 380, 1.2], [300, 320, 0.9], [240, 470, 1.1], [440, 470, 1]]) { const c = P.I(x, y, 0); P.halo(c[0], c[1] - 12 * s, 11 * s, ['y3r1', 'y1'], { knock: true }); P.line([[c[0], c[1]], [c[0], c[1] - 10 * s]], 3 * s, { ink: 0, lvl: 2, taper: 0 }); Lib.flame(P, c[0], c[1] - 10 * s, 5 * s, 11 * s, t * 1.4 + x, { noKnock: true }); } },
  chars: [
    ch(LK.hgYouthG, { x: 160, y: 340, face: 1, clip: 'rest', h: 110, hold: { n: 'hgGuitar' } }),
    ch(LK.hgYouth, { x: 236, y: 300, face: 1, clip: 'fill', h: 114, hold: { n: 'hgCandle' } }),
    ch(LK.hgSoldier2, { x: 440, y: 280, face: -1, clip: 'offer', h: 120, hold: { n: 'hgCandle' } }),
    ch(LK.hgIsrW2, { x: 480, y: 410, face: -1, clip: 'sulk', h: 112 }),
    ch(LK.hgCivil2, { x: 120, y: 470, face: 1, clip: 'offer', h: 120, hold: { n: 'hgCandle' } }),
    ch(LK.hgCivil3, { x: 400, y: 500, face: -1, clip: 'sulk', h: 116 }),
    ch(LK.hgYouthG2, { h: 112, speed: 14, hold: { n: 'hgCandle' }, over: 'offer', path: [W(520, 500, 1, 'offer'), W(400, 400, 5, 'offer', { f: -1 }), W(520, 500, 0)] }),
    ch(LK.hgSuitG, { h: 118, speed: 12, t0: 4, hold: { n: 'hgTie' }, path: [W(30, 300, 2, 'sulk', { f: 1 }), W(130, 290, 6, 'sulk', { f: 1 }), W(30, 300, 0)] })
  ]
}
];
