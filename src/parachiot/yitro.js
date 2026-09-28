/* PARACHA YITRO · Exode 18, 1 à 20, 23 · Chabbat 30 janvier 2027 */
Object.assign(LK, {
  yi_jethro: { old: 1, skin: 'y6r4k1', hs: 'fringe', hair: 'k1', beard: 'full', bt: 'k1b1', robe: 'y2b1', len: 'ankle', trim: 1, sleeves: 'long', wide: 1, cloak: 'r6b4', sash: 'y7r2', head: 'turban', ht: 'y1r2', feet: 'sandal' },
  yi_zipporah: { fem: 1, skin: 'y6r5k1', hs: 'long', hair: 'k8', robe: 'r5b3', len: 'floor', head: 'veil', ht: 'y4r2', sash: 'b6', stripes: ['y6', 'b5'] },
  yi_gershom: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', robe: 'y4b2', len: 'knee', sleeves: 'short', sash: 'r6', head: 'cloth', ht: 'r4y3', band: 'k6' },
  yi_eliezer: { child: 1, skin: 'y6r4k1', hs: 'curly', hair: 'k8', robe: 'b4y2', len: 'knee', sleeves: 'short', sash: 'y7', feet: 'bare' },
  yi_elder: { old: 1, skin: 'y5r4k1', hs: 'fringe', hair: 'k2', beard: 'long', bt: 'k2', robe: 'b4y2k1', cloak: 'r4y4k2', sash: 'y6', head: 'cloth', ht: 'y2b1', band: 'k5' },
  yi_elder2: { old: 1, skin: 'y6r4k1', hs: 'fringe', hair: 'k3', beard: 'full', bt: 'k3', robe: 'r4y5k1', cloak: 'b5k1', sash: 'y7', head: 'cloth', ht: 'b3y1', band: 'r5' },
  yi_youth: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', robe: 'y3r3', len: 'knee', sleeves: 'short', sash: 'b6', head: 'cloth', ht: 'y2', band: 'r5' }
});
const yiMoses = Object.assign({}, LK.moses, { feet: 'sandal' });
/* les lettres א à י qui numérotent les Dix Paroles : tracés dans un carré unité */
const YI_GL = [
  [[[.15, .08], [.85, .92]], [[.74, .08], [.78, .34], [.6, .46]], [[.4, .54], [.24, .92]]],
  [[[.12, .1], [.82, .1], [.82, .86]], [[.06, .88], [.96, .88]]],
  [[[.3, .1], [.6, .12], [.6, .9]], [[.6, .6], [.28, .9]]],
  [[[.05, .1], [.95, .1]], [[.78, .1], [.78, .92]]],
  [[[.08, .1], [.88, .1], [.88, .92]], [[.22, .42], [.22, .92]]],
  [[[.35, .1], [.58, .12], [.58, .92]]],
  [[[.22, .1], [.8, .1]], [[.5, .1], [.5, .92]]],
  [[[.15, .92], [.15, .1], [.85, .1], [.85, .92]]],
  [[[.52, .4], [.36, .1], [.15, .16], [.15, .82], [.5, .92], [.85, .82], [.85, .1]]],
  [[[.35, .1], [.62, .12], [.58, .45]]]
];
const YI_TAB = { cx: [553, 447], top: 34, w: 98, h: 178 };
function yiLetterPos(i) { const T = YI_TAB, cx = T.cx[i < 5 ? 0 : 1], r = i % 5, y0 = T.top + T.w * 0.36, rh = (T.h - T.w * 0.36 - 10) / 5; return [cx, y0 + rh * (r + 0.5), rh * 0.72]; }
function yiLetter(P, i, lw, ink, lvl) { const [x, y, s] = yiLetterPos(i); for (const st of YI_GL[i]) P.line(st.map(([u, v]) => [x - s / 2 + u * s, y - s / 2 + v * s]), lw, { ink, lvl, taper: 0.3 }); }
function yiTablets(P) {
  const T = YI_TAB;
  for (const cx of T.cx) {
    const pts = [[cx - T.w / 2, T.top + T.h]]; for (let i = 0; i <= 12; i++) { const a = Math.PI + Math.PI * i / 12; pts.push([cx + Math.cos(a) * T.w / 2, T.top + T.w / 2 + Math.sin(a) * T.w / 2]); } pts.push([cx + T.w / 2, T.top + T.h]);
    P.shape(pts, 'y2b1k1', 1.4);
    P.fill(pts.map(p => [cx + (p[0] - cx) * 0.86, T.top + T.h * 0.52 + (p[1] - T.top - T.h * 0.52) * 0.9]), 'y1', { noKnock: true });
  }
  for (let i = 0; i < 10; i++) yiLetter(P, i, 3.2, 3, 7);
}
function yiDesert(P, o = {}) {
  Lib.platform(P, o.top || 'y5r2', o.face || 'y4r3k1', { strata: [[0, .4, o.face || 'y4r3k1'], [.4, .75, 'r3y4k3'], [.75, 1, 'r4y3k4']] });
}
function yiCanopy(P, x, y, w, d, h, tn) {
  for (const [a, b] of [[0, 0], [w, 0], [0, d], [w, d]]) P.box(x + a - 3, y + b - 3, 0, 6, 6, h, 'r4y5k3', 0.7);
  P.shape([P.I(x - 8, y - 8, h), P.I(x + w + 8, y - 8, h), P.I(x + w + 8, y + d + 8, h - 6), P.I(x - 8, y + d + 8, h - 6)], tn, 1);
  for (let i = 1; i < 4; i++) P.line([P.I(x - 8 + (w + 16) * i / 4, y - 8, h), P.I(x - 8 + (w + 16) * i / 4, y + d + 8, h - 6)], 0.6);
}
function yiSeat(P, x, y, tn = 'y3r2k3') { P.box(x - 14, y - 14, 0, 28, 28, 18, tn); }
function yiBanner(P, x, y, marks, tn) {
  P.box(x - 2, y - 2, 0, 4, 4, 130, 'r4y5k4', 0.6);
  const a = P.I(x, y, 128), b = P.I(x + 38, y, 124), c = P.I(x + 38, y, 96), d = P.I(x, y, 100);
  P.shape([a, b, c, d], tn, 0.9);
  for (let i = 0; i < marks; i++) { const q = P.I(x + 8 + i * 8, y, 112 - (i % 2) * 2); P.fill(P.disc(q[0], q[1], 2.6, 8), 'k6', {}); }
}
function yiRug(P, x, y, w, d, tn, tb) {
  P.shape([P.I(x, y, 0.5), P.I(x + w, y, 0.5), P.I(x + w, y + d, 0.5), P.I(x, y + d, 0.5)], tn, 1);
  P.line([P.I(x + 8, y + 8, 1), P.I(x + w - 8, y + 8, 1), P.I(x + w - 8, y + d - 8, 1), P.I(x + 8, y + d - 8, 1)], 0.8, { ink: 2, closed: true });
  for (let i = 1; i < 4; i++) P.line([P.I(x + w * i / 4, y + 10, 1), P.I(x + w * i / 4, y + d - 10, 1)], 1.4, { ink: tb || 1, lvl: 6 });
}
function yiGarment(P, x, y, z, tn, sw) { const a = P.I(x, y, z); P.shape([[a[0] - 11, a[1]], [a[0] + 11, a[1] - 3], [a[0] + 12 + sw, a[1] + 26], [a[0] - 10 + sw, a[1] + 30]], tn, 0.7); P.line([[a[0] - 6 + sw * 0.5, a[1] + 8], [a[0] + 6 + sw * 0.5, a[1] + 6]], 0.5, { ink: 3 }); }
const SHEET = { title: 'Yitro · Jéthro', sub: 'Paracha de la semaine · Chabbat 30 janvier 2027 · Exode 18, 1 à 20, 23' };
const SCENES = [
{
  title: 'Jéthro vient au désert', book: 'Exode', ch: 18, ref: 'Exodus 18:7', refFr: 'Exode 18, 7', accent: 0, feast: null,
  quote: 'And he went out to meet his kinsman, and worshipped and kissed him:  and they saluted one another with words of peace.',
  fr: 'Et il sortit à la rencontre de son beau-père, se prosterna et l’embrassa ; et ils se saluèrent l’un l’autre par des paroles de paix.',
  more: ['Jéthro, prêtre de Madian et beau-père de Moïse, a entendu tout ce que Dieu a fait pour Israël. Il vient au désert, là où le peuple campe près de la montagne de Dieu, et ramène Tsipora, la femme de Moïse, avec leurs deux fils. Moïse sort à sa rencontre, se prosterne et l’embrasse. Sous la tente, il lui raconte la chute de Pharaon et les épreuves du chemin.',
    'Pas de fête juive attachée à ce passage. La paracha des Dix Paroles porte le nom d’un prêtre étranger. Le texte explique les noms des deux fils : Guershom, « j’ai été un étranger en terre étrangère », et Éliézer, « le Dieu de mon père est mon secours » (Exode 18, 3-4).'],
  back(P) {
    Lib.sun(P, 250, 130, 30); Lib.cloud(P, 800, 110, 170, 36, 'b1');
    yiDesert(P);
    Lib.mound(P, 80, 80, 115, 250, 'y4r3k3', { px: 12 });
    Lib.mound(P, 300, 20, 70, 110, 'y4r3k2');
    Lib.tent(P, 380, 40, 90, 80, 80, 'b3y2k1'); Lib.tent(P, 440, 150, 80, 70, 70, 'r5y3k1'); Lib.tent(P, 330, 170, 70, 60, 60, 'y3r2k1');
    Lib.palm(P, 250, 180, 0, 150, { lean: 12, dates: 1 }); Lib.palm(P, 40, 330, 0, 140, { lean: -10 });
    const road = [[540, 520], [420, 420], [300, 300]]; for (let i = 0; i < road.length - 1; i++) { const a = road[i], b = road[i + 1]; P.fill([P.I(a[0] - 22, a[1] + 22, 0.5), P.I(b[0] - 22, b[1] + 22, 0.5), P.I(b[0] + 22, b[1] - 22, 0.5), P.I(a[0] + 22, a[1] - 22, 0.5)], 'y3r2', {}); }
    Lib.stones(P, 26, 'y3r2k3', [20, 200, 500, 320]);
    Lib.grass(P, 30, 'y5b4', [60, 380, 200, 140]);
    Lib.jar(P, 470, 250, 0, 1.3); Lib.jar(P, 495, 270, 0, 1.1, 'b5y3');
  },
  chars: [
    ch(yiMoses, { x: 250, y: 285, face: 1, clip: 'cradle', h: 146 }),
    ch(LK.yi_jethro, { x: 275, y: 305, face: -1, clip: 'cradle', h: 144, hold: { f: 'staffV' } }),
    ch(LK.yi_zipporah, { x: 340, y: 360, face: -1, clip: 'idle', h: 132 }),
    ch(LK.yi_gershom, { x: 380, y: 330, face: -1, clip: 'wave', h: 124 }),
    ch(LK.yi_eliezer, { x: 360, y: 410, face: -1, clip: 'point', h: 92 }),
    { beast: 'camel', h: 120, speed: 8, t0: 2, path: [W(470, 440, 4), W(430, 400, 3), W(470, 440, 0)] },
    { beast: 'donkey', h: 88, x: 500, y: 370, face: -1 },
    ch(LK.isrW, { x: 330, y: 250, face: 1, clip: 'lookup', h: 128 }),
    ch(LK.isrM, { x: 190, y: 250, face: 1, clip: 'point', h: 136, t0: 1 })
  ]
},
{
  title: 'Le repas devant Dieu', book: 'Exode', ch: 18, ref: 'Exodus 18:12', refFr: 'Exode 18, 12', accent: 1, feast: null,
  quote: 'So Jethro, the kinsman of Moses, offered holocausts and sacrifices to God:  and Aaron and all the ancients of Israel came, to eat bread with him before God.',
  fr: 'Jéthro, le beau-père de Moïse, offrit donc des holocaustes et des sacrifices à Dieu : et Aaron et tous les anciens d’Israël vinrent manger le pain avec lui devant Dieu.',
  more: ['Jéthro se réjouit de tout le bien que Dieu a fait à Israël. Il bénit : « Béni soit le Seigneur, qui vous a délivrés de la main de l’Égypte et de la main de Pharaon. Maintenant je sais que le Seigneur est plus grand que tous les dieux. » Puis il offre des holocaustes et des sacrifices, et Aaron vient avec tous les anciens d’Israël manger le pain avec lui devant Dieu.',
    'Pas de fête juive attachée à ce passage. Le Talmud (Sanhédrin 94a) remarque que ni Moïse ni les six cent mille n’avaient dit « Béni soit le Seigneur » pour la sortie d’Égypte avant que Jéthro vienne le dire.'],
  back(P) {
    Lib.cloud(P, 780, 120, 180, 40, 'b1'); Lib.cloud(P, 250, 90, 120, 30, 'b1');
    yiDesert(P, { top: 'y5r2b1' });
    Lib.mound(P, 30, 200, 70, 150, 'y4r3k3');
    Lib.tent(P, 300, 30, 130, 100, 110, 'r5y4k1'); Lib.tent(P, 460, 40, 70, 60, 60, 'b3y2k2');
    Lib.altar(P, 110, 120, 80, 60, 44, 'y3r2k3');
    yiRug(P, 230, 260, 170, 110, 'r6y3', 2);
    for (const [x, y] of [[270, 290], [320, 300], [360, 330], [290, 340]]) { const c = P.I(x, y, 1); P.shape(Lib.bumpy(P, c[0], c[1] - 4, 11, 6, 5), 'y7r4k1', 0.7); }
    Lib.jar(P, 380, 280, 0, 1.2); Lib.jar(P, 250, 360, 0, 1, 'b5y3');
    for (const [x, y] of [[240, 250], [410, 300], [300, 390], [400, 380]]) P.box(x - 12, y - 12, 0, 24, 24, 12, 'y4r3k2', 0.7);
    Lib.palm(P, 500, 250, 0, 160, { lean: -14, dates: 1 });
    Lib.stones(P, 18, 'y3r2k3', [20, 400, 500, 120]);
  },
  live(P, t) { const a = P.I(150, 150, 50); Lib.flame(P, a[0], a[1], 34, 60, t); Lib.smoke(P, a[0], a[1] - 50, t, { n: 5, h: 220, r: 24, tn: 'k2b1' }); },
  chars: [
    ch(LK.yi_jethro, { x: 215, y: 215, face: -1, clip: 'offer', h: 144 }),
    ch(LK.yi_youth, { h: 128, speed: 14, path: [W(200, 420, 1), W(200, 250, 3, 'offer', { f: -1 }), W(200, 420, 0)], hold: { f: 'lamb' }, over: 'carry' }),
    ch(LK.priest, { x: 240, y: 250, z: 12, face: 1, clip: 'eat', h: 140, hold: { n: 'bread' } }),
    ch(LK.yi_elder, { x: 410, y: 300, z: 12, face: -1, clip: 'eat', h: 138, hold: { n: 'cup' } }),
    ch(LK.isrOld, { x: 300, y: 390, z: 12, face: 1, clip: 'eat', h: 138, t0: 1 }),
    ch(LK.yi_elder2, { x: 400, y: 380, z: 12, face: -1, clip: 'sit', h: 138, hold: { n: 'bread' } }),
    ch(yiMoses, { x: 330, y: 220, face: -1, clip: 'talk', h: 146, hold: { f: 'staffV' } })
  ]
},
{
  title: 'Moïse juge du matin au soir', book: 'Exode', ch: 18, ref: 'Exodus 18:13', refFr: 'Exode 18, 13', accent: 2, feast: null,
  quote: 'And the next day Moses sat to judge the people, who stood by Moses from morning until night.',
  fr: 'Le lendemain, Moïse s’assit pour juger le peuple, et le peuple se tint devant Moïse du matin jusqu’au soir.',
  more: ['Le lendemain, Moïse s’assoit pour juger. Chacun vient lui soumettre son différend, et la file ne désemplit pas du matin au soir. Jéthro s’étonne : « Pourquoi sièges-tu seul, pendant que tout le peuple se tient devant toi du matin au soir ? » Moïse répond que le peuple vient consulter Dieu, et qu’il lui fait connaître les lois. « Ce que tu fais n’est pas bon ; tu t’épuiseras, toi et ce peuple. »',
    'Pas de fête juive attachée à ce passage. Sur les mots « du matin au soir », Rachi rapporte l’enseignement du Talmud (Chabbat 10a) : le juge qui juge selon la vérité, ne serait-ce qu’une heure, est compté comme associé à l’œuvre de la création.'],
  back(P) {
    P.halo(180, 330, 220, ['r1y2', 'r2y3', 'r3y4', 'r4y5']); Lib.sun(P, 180, 330, 34);
    Lib.cloud(P, 760, 110, 190, 36, 'r1b1'); Lib.cloud(P, 330, 160, 130, 30, 'r2y1');
    yiDesert(P, { top: 'y5r3' });
    Lib.tent(P, 330, 30, 120, 90, 100, 'b3y2k1'); Lib.tent(P, 470, 60, 60, 60, 56, 'r5y3k1'); Lib.tent(P, 40, 20, 90, 70, 80, 'y3r2k2');
    yiCanopy(P, 70, 200, 90, 110, 110, 'b5y2');
    P.box(95, 225, 0, 50, 60, 24, 'y3r2k3');
    Lib.jar(P, 60, 330, 0, 1.2); Lib.lamp(P, 170, 200, 0, 0.9);
    const q = [[250, 270], [310, 320], [370, 370], [430, 420], [500, 470]]; for (let i = 0; i < q.length - 1; i++) P.line([P.I(q[i][0], q[i][1], 0.5), P.I(q[i + 1][0], q[i + 1][1], 0.5)], 6, { ink: 0, lvl: 3, taper: 0 });
    Lib.stones(P, 22, 'y3r2k3', [200, 420, 320, 110]);
    Lib.palm(P, 480, 230, 0, 150, { lean: -12 });
  },
  chars: [
    ch(yiMoses, { x: 120, y: 255, z: 24, face: 1, clip: 'throne', h: 146, hold: { n: 'staff' } }),
    ch(LK.isrM2, { x: 200, y: 230, face: -1, clip: 'point', h: 138 }),
    ch(LK.isrM, { x: 215, y: 300, face: -1, clip: 'talk', h: 136, t0: 1.2 }),
    ch(LK.isrW, { x: 290, y: 320, face: -1, clip: 'idle', h: 128 }),
    ch(LK.isrOld, { x: 350, y: 370, face: -1, clip: 'rest', h: 136, hold: { f: 'staffV' } }),
    ch(LK.isrW2, { x: 410, y: 420, face: -1, clip: 'idle', h: 128, t0: 2, hold: { nTop: 'baby' } }),
    ch(LK.childG, { x: 460, y: 440, face: -1, clip: 'sulk', h: 88 }),
    ch(LK.isrM, { h: 136, speed: 16, t0: 3, path: [W(220, 400, 0), W(520, 520, 0), W(220, 400, 0, null, { jump: 1 })], look: Object.assign({}, LK.isrM, { robe: 'y4r2k1', ht: 'b4' }) }),
    ch(LK.yi_jethro, { x: 180, y: 440, face: 1, clip: 'talk', h: 142, hold: { f: 'staffV' } })
  ]
},
{
  title: 'Chefs de milliers et de dizaines', book: 'Exode', ch: 18, ref: 'Exodus 18:25', refFr: 'Exode 18, 25', accent: 0, feast: null,
  quote: 'And choosing able men out of all Israel, he appointed them rulers of the people, rulers over thousands, and over hundreds, and over fifties, and over tens.',
  fr: 'Et il choisit dans tout Israël des hommes capables, et les établit chefs du peuple : chefs de mille, chefs de cent, chefs de cinquante et chefs de dix.',
  more: ['Jéthro conseille : cherche dans tout le peuple des hommes capables, qui craignent Dieu, aiment la vérité et haïssent le gain injuste. Qu’ils jugent les petites affaires et t’apportent les grandes ; ta charge sera plus légère. Moïse écoute son beau-père et fait tout ce qu’il a dit. Les juges siègent en tout temps. Puis Moïse laisse partir Jéthro, qui s’en retourne dans son pays.',
    'Pas de fête juive attachée à ce passage. Moïse rappelle cette organisation en Deutéronome 1, 9-18 : les causes ordinaires sont jugées par les chefs, les causes trop difficiles remontent jusqu’à lui. Sur les fanions de la scène, les points distinguent les degrés.'],
  back(P) {
    Lib.sun(P, 780, 120, 26); Lib.cloud(P, 300, 110, 160, 34, 'b1');
    yiDesert(P, { top: 'y5r2b1' });
    Lib.mound(P, 40, 40, 80, 170, 'y4r3k3');
    Lib.tent(P, 250, 20, 90, 70, 80, 'r5y4k1'); Lib.tent(P, 400, 30, 80, 70, 70, 'b3y2k1');
    for (const [x, y, m, tn] of [[140, 160, 4, 'r6y3'], [390, 170, 3, 'b6y1'], [140, 380, 2, 'y7r2']]) { yiSeat(P, x, y); yiBanner(P, x - 30, y - 30, m, tn); }
    Lib.palm(P, 490, 330, 0, 150, { lean: -12, dates: 1 });
    Lib.stones(P, 24, 'y3r2k3', [20, 20, 500, 500]);
    Lib.grass(P, 30, 'y5b4', [300, 430, 200, 100]);
  },
  chars: [
    ch(LK.yi_elder, { x: 140, y: 160, z: 18, face: 1, clip: 'throne', h: 138 }),
    ch(LK.isrW, { x: 205, y: 190, face: -1, clip: 'talk', h: 128 }),
    ch(LK.isrOld, { x: 390, y: 170, z: 18, face: 1, clip: 'throne', h: 138, t0: 1 }),
    ch(LK.isrM2, { x: 440, y: 240, face: -1, clip: 'point', h: 136 }),
    ch(LK.yi_elder2, { x: 140, y: 380, z: 18, face: 1, clip: 'throne', h: 138, t0: 2 }),
    ch(LK.child, { x: 210, y: 410, face: -1, clip: 'talk', h: 92 }),
    ch(yiMoses, { x: 280, y: 280, face: 1, clip: 'raise', h: 146, hold: { n: 'staff' } }),
    ch(LK.yi_jethro, { h: 142, speed: 12, path: [W(330, 380, 3, 'wave', { f: -1 }), W(540, 520, 0), W(330, 380, 0, null, { jump: 1 })], hold: { f: 'staffV' } }),
    { beast: 'donkey', h: 88, speed: 12, t0: -1.2, path: [W(370, 400, 3), W(540, 540, 0), W(370, 400, 0, null, { jump: 1 })] }
  ]
},
{
  title: 'Laver les vêtements', book: 'Exode', ch: 19, ref: 'Exodus 19:14', refFr: 'Exode 19, 14', accent: 2, feast: 'Chavouot',
  quote: 'And Moses came down from the mount to the people, and sanctified them.  And when they had washed their garments,',
  fr: 'Et Moïse descendit de la montagne vers le peuple, et il le sanctifia. Et quand ils eurent lavé leurs vêtements,',
  more: ['Au troisième mois après la sortie d’Égypte, Israël campe face au Sinaï. Dieu fait dire : « Vous serez pour moi un royaume de prêtres et une nation sainte », et le peuple répond d’une seule voix : « Tout ce que le Seigneur a dit, nous le ferons. » Moïse reçoit l’ordre de préparer le peuple deux jours, de lui faire laver ses vêtements et de tracer une limite autour de la montagne.',
    'Correspondance : <b>Chavouot</b>. Exode 19 et 20 forment la lecture de la Torah du premier jour de la fête. Les trois jours qui la précèdent, du 3 au 5 Sivan, sont appelés « les trois jours de la limite » (chlochet yemé hagbala), en souvenir de cette préparation.'],
  back(P) {
    Lib.cloud(P, 780, 100, 200, 44, 'b1'); Lib.cloud(P, 620, 170, 120, 30, 'b1');
    yiDesert(P, { top: 'y5r2b1' });
    Lib.mound(P, 110, 110, 150, 290, 'y4r3k3', { px: 10 });
    fenceRing(P, 110, 110, 205, -0.2, 1.75, 12);
    const riv = [[0, 470], [180, 430], [360, 380], [540, 350], [540, 410], [360, 440], [180, 490], [0, 530]]; P.shape(riv.map(p => P.I(p[0], p[1], 0.6)), 'b5y1', 1);
    Lib.waves(P, [60, 440, 420, 60], 12, 1, 2);
    P.box(380, 150, 0, 5, 5, 110, 'r4y5k4', 0.6); P.box(500, 250, 0, 5, 5, 110, 'r4y5k4', 0.6);
    P.line([P.I(382, 152, 108), P.I(442, 202, 96), P.I(502, 252, 108)], 0.8);
    Lib.tent(P, 420, 20, 90, 70, 80, 'r5y4k1'); Lib.tent(P, 460, 120, 60, 50, 56, 'y3r2k1');
    for (const [x, y] of [[80, 380], [110, 400]]) { const c = P.I(x, y, 0); P.shape(Lib.bumpy(P, c[0], c[1] - 6, 14, 7, 5), 'r5b3', 0.7); }
    Lib.stones(P, 20, 'y3r2k3', [250, 250, 200, 100]);
    Lib.grass(P, 40, 'y5b5', [20, 400, 500, 140]);
  },
  live(P, t) {
    for (let i = 0; i < 4; i++) { const u = (i + 1) / 5, x = 382 + 120 * u, y = 152 + 100 * u, z = 108 - Math.sin(u * Math.PI) * 12; yiGarment(P, x, y, z - 2, ['r6y2', 'y1', 'b5r2', 'y6b2'][i], Math.sin(t * 2 + i) * 4); }
    for (let i = 0; i < 5; i++) { const u = (t * 0.12 + i / 5) % 1, c = P.I(20 + u * 500, 470 - u * 110, 1); P.line([[c[0] - 8, c[1]], [c[0], c[1] - 2], [c[0] + 8, c[1]]], 0.8, { ink: 2 }); }
  },
  chars: [
    ch(yiMoses, { h: 146, speed: 10, path: [W(190, 190, 0, null, { z: 110 }), W(270, 300, 5, 'raise'), W(270, 300, 0, null, { jump: 1 })], hold: { n: 'staff' } }),
    ch(LK.isrW, { x: 210, y: 440, face: 1, clip: 'fill', h: 128 }),
    ch(LK.isrW2, { x: 330, y: 390, face: -1, clip: 'fill', h: 128, t0: 1 }),
    ch(LK.childG, { x: 270, y: 420, face: 1, clip: 'reach', h: 88 }),
    ch(LK.yi_zipporah, { h: 128, speed: 12, t0: 2, path: [W(460, 330, 2), W(420, 230, 3, 'reach', { f: -1 }), W(460, 330, 0)], over: 'carry', hold: { nTop: 'bundle' } }),
    ch(LK.yi_youth, { x: 300, y: 180, face: 1, clip: 'hammer', h: 130, hold: { n: 'hammer' } }),
    ch(LK.isrOld, { x: 360, y: 250, face: -1, clip: 'point', h: 136, hold: { f: 'staffV' } })
  ]
},
reuse(AT[7]),
{
  title: 'Les Dix Paroles', book: 'Exode', ch: 20, ref: 'Exodus 20:2', refFr: 'Exode 20, 2', accent: 1, feast: 'Chavouot',
  quote: 'I am the Lord thy God, who brought thee out of the land of Egypt, out of the house of bondage.',
  fr: 'Je suis le Seigneur ton Dieu, qui t’ai fait sortir du pays d’Égypte, de la maison de servitude.',
  more: ['Dieu prononce toutes ces paroles devant le peuple assemblé au pied de la montagne. Je suis le Seigneur ton Dieu. Tu n’auras pas d’autres dieux devant moi et tu ne feras pas d’idole. Tu ne prononceras pas le Nom en vain. Souviens-toi du jour du chabbat. Honore ton père et ta mère. Tu ne tueras pas. Tu ne commettras pas d’adultère. Tu ne voleras pas. Tu ne porteras pas de faux témoignage. Tu ne convoiteras pas.',
    'Correspondance : <b>Chavouot</b>, la fête du don de la Torah, le 6 Sivan. Ces versets sont lus le premier jour, et l’assemblée se lève pour les entendre. Sur les tables de la scène, les dix premières lettres de l’alphabet hébreu, d’aleph à youd, numérotent les Paroles : cinq sur chaque table, comme l’enseigne la Mekhilta.'],
  back(P) {
    P.shape(P.disc(500, 470, 450, 64), 'b3r1k3', 0);
    P.halo(500, 100, 250, ['y1', 'y2', 'y3r1', 'y4r2', 'r3y3b2k2'], { knock: true });
    for (const [x, y, w, h] of [[220, 200, 300, 70], [800, 190, 300, 70], [150, 120, 200, 50], [870, 110, 200, 50]]) Lib.cloud(P, x, y, w, h, 'k4b3');
    yiDesert(P, { top: 'y4r3k2', face: 'y4r3k2' });
    const m = Lib.mound(P, 130, 130, 170, 215, 'y4r3k4', { px: 6 });
    fenceRing(P, 130, 130, 240, -0.35, 1.9, 14);
    Lib.tent(P, 450, 40, 70, 60, 56, 'y3r2k2'); Lib.tent(P, 40, 450, 70, 60, 56, 'r4y4k2');
    Lib.stones(P, 20, 'y3r2k3', [260, 260, 260, 260]);
    Lib.cloud(P, m.peak[0] - 90, m.peak[1] + 70, 150, 40, 'k4b2'); Lib.cloud(P, m.peak[0] + 90, m.peak[1] + 60, 150, 40, 'k4b2');
    yiTablets(P);
  },
  live(P, t) {
    const pk = P.I(130, 130, 215);
    Lib.flame(P, pk[0] - 26, pk[1] + 6, 40, 70, t, { noKnock: true }); Lib.flame(P, pk[0] + 28, pk[1] + 8, 34, 58, t + 1.7, { noKnock: true }); Lib.flame(P, pk[0], pk[1] + 2, 44, 90, t + 0.8);
    const k = Math.floor(t * 0.8) % 13;
    for (let i = 0; i < 10 && i <= k; i++) yiLetter(P, i, 4, 1, 8);
    if (k < 10) { const [x, y, s] = yiLetterPos(k); P.halo(x, y, s * 1.4, ['y1', 'y3', 'y5r1'], { knock: false }); yiLetter(P, k, 5.2, 1, 10); }
    for (let i = 0; i < 3; i++) { const u = (t * 0.35 + i / 3) % 1, R = 180 + u * 320, pts = []; for (let j = 0; j <= 24; j++) { const a = -0.2 + j / 24 * (Math.PI / 2 + 0.4); pts.push(P.I(130 + Math.cos(a) * R, 130 + Math.sin(a) * R, 3)); } P.line(pts, 3.2 * (1 - u) + 0.4, { ink: 0, lvl: 8, taper: 0.8 }); }
    if (Math.floor(t * 3) % 5 === 0) { const x0 = 720, y0 = 120; P.line([[x0, y0], [x0 - 22, y0 + 44], [x0 - 6, y0 + 48], [x0 - 34, y0 + 110]], 4, { ink: 0, taper: 0.6 }); }
  },
  chars: [
    ch(yiMoses, { x: 290, y: 300, face: -1, clip: 'raise', h: 146, hold: { n: 'staff' } }),
    ch(LK.priest, { x: 335, y: 350, face: -1, clip: 'kneel', h: 140 }),
    ch(LK.isrM, { x: 440, y: 300, face: -1, clip: 'prostrate', h: 136 }),
    ch(LK.isrW, { x: 490, y: 240, face: -1, clip: 'pray', h: 128 }),
    ch(LK.isrOld, { x: 500, y: 440, face: -1, clip: 'lookup', h: 136, hold: { f: 'staffV' } }),
    ch(LK.isrM2, { x: 390, y: 430, face: -1, clip: 'kneel', h: 138, t0: 1 }),
    ch(LK.childG, { x: 450, y: 500, face: -1, clip: 'lookup', h: 88 }),
    ch(LK.isrW2, { x: 520, y: 350, face: -1, clip: 'pray', h: 128, t0: 1.5 }),
    ch(LK.child, { x: 290, y: 480, face: -1, clip: 'lookup', h: 90, t0: 0.7 })
  ]
},
{
  title: 'Moïse entre dans la nuée obscure', book: 'Exode', ch: 20, ref: 'Exodus 20:21', refFr: 'Exode 20, 18', accent: 2, feast: 'Chavouot',
  quote: 'And the people stood afar off.  But Moses went to the dark cloud wherein God was.',
  fr: 'Et le peuple se tint au loin. Mais Moïse s’approcha de la nuée obscure où était Dieu.',
  more: ['Tout le peuple voit les voix et les flammes, entend le son du cor et voit la montagne fumer. Saisi de crainte, il recule et se tient au loin. « Parle-nous, toi, et nous écouterons ; que Dieu ne nous parle pas, de peur que nous ne mourions. » Moïse répond : « Ne craignez pas, Dieu est venu pour vous éprouver. » Le peuple reste à distance, et Moïse s’avance vers la nuée obscure.',
    'Correspondance : <b>Chavouot</b>, dont la lecture se poursuit jusqu’à la fin du chapitre 20. Le texte dit que le peuple « voyait les voix ». Rachi l’entend à la lettre : ils voyaient ce qui s’entend, chose impossible en tout autre lieu.'],
  back(P) {
    P.shape(P.disc(500, 470, 450, 64), 'b3k3', 0);
    for (const [x, y, w, h] of [[200, 120, 260, 60], [820, 140, 260, 60]]) Lib.cloud(P, x, y, w, h, 'k3b2');
    yiDesert(P, { top: 'y4r2k1' });
    Lib.mound(P, 110, 110, 170, 300, 'y4r3k4', { px: 8 });
    fenceRing(P, 110, 110, 230, -0.3, 1.9, 14);
    Lib.tent(P, 420, 330, 110, 90, 90, 'r5y4k1'); Lib.tent(P, 330, 440, 90, 80, 80, 'b3y2k1'); Lib.tent(P, 470, 200, 60, 60, 56, 'y3r2k1');
    Lib.stones(P, 24, 'y3r2k3', [220, 220, 200, 200]);
    Lib.jar(P, 520, 440, 0, 1.2);
  },
  live(P, t) {
    for (let i = 0; i < 5; i++) { const u = (t * 0.2 + i / 5) % 1, pk = P.I(110, 110, 300); Lib.star(P, pk[0] - 120 + i * 60, pk[1] - 20 - u * 140, 5 * (1 - u), 'r5y7'); }
    if (Math.floor(t * 2.5) % 4 === 0) { const x0 = 330, y0 = 60; P.line([[x0, y0], [x0 + 18, y0 + 40], [x0 + 4, y0 + 46], [x0 + 26, y0 + 100]], 3.6, { ink: 0, taper: 0.6 }); }
  },
  top(P, t) {
    const pk = P.I(110, 110, 300);
    Lib.cloud(P, pk[0] + Math.sin(t * 0.5) * 8, pk[1] + 120, 340, 90, 'k5b3', { noShade: true });
    Lib.cloud(P, pk[0] - 30 + Math.cos(t * 0.4) * 10, pk[1] + 40, 260, 80, 'k6b3');
    Lib.cloud(P, pk[0] + 40, pk[1] - 40 + Math.sin(t * 0.7) * 6, 200, 70, 'k5b4');
  },
  chars: [
    ch(yiMoses, { h: 140, speed: 12, path: [W(290, 290, 2, 'lookup', { f: -1 }), W(180, 180, 0, null, { z: 150 }), W(170, 170, 3, null, { z: 175 }), W(290, 290, 0, null, { jump: 1 })], hold: { n: 'staff' } }),
    ch(LK.isrM, { x: 400, y: 440, face: -1, clip: 'point', h: 136 }),
    ch(LK.isrW, { x: 450, y: 470, face: -1, clip: 'lookup', h: 128 }),
    ch(LK.isrOld, { x: 510, y: 400, face: -1, clip: 'stagger', h: 136, hold: { f: 'staffV' } }),
    ch(LK.isrM2, { x: 380, y: 510, face: -1, clip: 'talk', h: 138 }),
    ch(LK.childG, { x: 500, y: 510, face: -1, clip: 'sulk', h: 86 }),
    ch(LK.priest, { x: 340, y: 380, face: -1, clip: 'pray', h: 140 }),
    { beast: 'sheep', h: 58, x: 280, y: 500, face: 1 }
  ]
},
{
  title: 'L’autel de terre', book: 'Exode', ch: 20, ref: 'Exodus 20:24', refFr: 'Exode 20, 21', accent: 0, feast: 'Chavouot',
  quote: 'You shall make an altar of earth unto me, and you shall offer upon it your holocausts and peace offerings, your sheep and oxen, in every place where the memory of my name shall be:  I will come to thee, and will bless thee.',
  fr: 'Vous me ferez un autel de terre, et vous offrirez dessus vos holocaustes et vos sacrifices de paix, vos brebis et vos bœufs, en tout lieu où sera la mémoire de mon nom : je viendrai à toi et je te bénirai.',
  more: ['Après les Dix Paroles, Dieu dit à Moïse : vous avez vu que je vous ai parlé du ciel ; ne vous faites pas de dieux d’argent ni de dieux d’or. Faites-moi un autel de terre. Si vous le bâtissez en pierres, qu’elles ne soient pas taillées, car le fer levé sur elles les profanerait. Et l’on ne montera pas à l’autel par des marches.',
    'Correspondance : <b>Chavouot</b>, ces versets terminant la lecture du premier jour. Rachi explique l’interdit du fer : l’autel est fait pour prolonger la vie de l’homme, le fer pour l’abréger. On montait à l’autel du Temple par une rampe, sans marches.'],
  back(P) {
    Lib.sun(P, 240, 120, 28); Lib.cloud(P, 780, 120, 200, 40, 'b1');
    yiDesert(P, { top: 'y5r2b1' });
    Lib.mound(P, 40, 60, 90, 190, 'y4r3k3');
    P.box(170, 150, 0, 90, 70, 36, { t: 'r4y5k3', l: 'r4y4k4', r: 'r5y4k5' });
    const c = P.I(215, 185, 36); P.shape(Lib.bumpy(P, c[0], c[1] - 4, 40, 16, 7), 'r4y5k4', 0.9);
    for (let row = 0; row < 3; row++) for (let i = 0; i < 4 - row; i++) Lib.rock(P, 360 + i * 22 + row * 11, 130 + i * 6, row * 18, 16, 12, P.r() > .5 ? 'y3r2k3' : 'y2r2k3', 0.9);
    const q = (x, y, z) => P.I(x, y, z);
    P.shape([q(380, 150, 44), q(420, 150, 44), q(420, 260, 0), q(380, 260, 0)], 'y3r2k2', 1);
    P.shape([q(420, 150, 44), q(420, 150, 0), q(420, 260, 0)], 'y3r2k4', 1);
    for (let i = 1; i < 6; i++) P.line([q(380, 150 + i * 18, 44 - i * 7.2), q(420, 150 + i * 18, 44 - i * 7.2)], 0.5);
    const tl = P.I(470, 300, 0); P.line([[tl[0] - 16, tl[1]], [tl[0] + 14, tl[1] - 6]], 3, { ink: 3 }); P.line([[tl[0] - 4, tl[1] + 6], [tl[0] + 8, tl[1] - 14]], 2, { ink: 3 });
    for (let i = 0; i < 5; i++) Lib.rock(P, 470 + (i % 3) * 18, 230 + (i >> 1) * 20, 0, 12, 9, 'y3r2k3', 0.8);
    Lib.tent(P, 440, 30, 80, 70, 70, 'b3y2k1');
    Lib.palm(P, 90, 330, 0, 150, { lean: -12, dates: 1 });
    Lib.stones(P, 20, 'y3r2k3', [200, 380, 300, 140]);
    Lib.grass(P, 30, 'y5b4', [20, 420, 200, 100]);
  },
  live(P, t) { const a = P.I(215, 185, 44); Lib.flame(P, a[0], a[1], 40, 70, t); Lib.smoke(P, a[0], a[1] - 60, t, { n: 5, h: 230, r: 26, tn: 'k2b1' }); },
  chars: [
    ch(yiMoses, { x: 290, y: 330, face: -1, clip: 'talk', h: 146, hold: { f: 'staffV' } }),
    ch(LK.yi_youth, { h: 128, speed: 14, path: [W(340, 480, 1), W(260, 250, 3, 'offer', { f: -1 }), W(340, 480, 0)], hold: { f: 'lamb' }, over: 'carry' }),
    ch(LK.isrM2, { h: 136, speed: 10, t0: 3, path: [W(520, 460, 1), W(420, 380, 3, 'idle'), W(520, 460, 0)], hold: { f: 'staffV' } }),
    { beast: 'bull', h: 90, speed: 10, t0: 3.4, path: [W(540, 420, 1), W(450, 340, 3), W(540, 420, 0)] },
    ch(LK.isrOld, { x: 180, y: 300, face: -1, clip: 'pray', h: 136 }),
    ch(LK.isrW, { x: 350, y: 400, face: -1, clip: 'idle', h: 128, hold: { nTop: 'jarhead' }, over: 'carry' }),
    ch(LK.child, { x: 230, y: 420, face: -1, clip: 'point', h: 90 }),
    { beast: 'sheep', h: 58, x: 120, y: 450, face: 1 }, { beast: 'sheep', h: 54, x: 160, y: 490, face: -1 }
  ]
}
];
