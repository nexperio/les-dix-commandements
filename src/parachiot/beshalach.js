/* PARACHA BECHALA'H · Exode 13, 17 à 17, 16 · Chabbat 23 janvier 2027 */
Object.assign(LK, {
  bs_moses: { skin: 'y5r4k1', hs: 'short', hair: 'k6', beard: 'long', bt: 'k6', robe: 'r5y6k2', cloak: 'b5k1', sash: 'r6y3', head: 'cloth', ht: 'y2r1', band: 'k6', feet: 'sandal' },
  bs_aaron: { skin: 'y5r4k1', hs: 'short', hair: 'k4', beard: 'long', bt: 'k3', robe: 'b5y1', cloak: 'r6b3', sash: 'y7r2', head: 'turban', ht: 'y2', feet: 'sandal' },
  bs_hur: { skin: 'y6r4k1', hs: 'curly', hair: 'k5', beard: 'full', bt: 'k4', robe: 'y5r3k1', cloak: 'b4y2k1', sash: 'r6', head: 'cloth', ht: 'b3y1', band: 'k6', feet: 'sandal' },
  bs_miriam: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k6r2', robe: 'r6b3', len: 'floor', head: 'veil', ht: 'y3r1', sash: 'y7b2', sleeves: 'long', feet: 'sandal' },
  bs_joshua: { skin: 'y6r4k1', hs: 'short', hair: 'k7', beard: 'short', robe: 'r5y3k1', len: 'knee', sleeves: 'short', cloak: 'b6k1', sash: 'y7', head: 'helmet', ht: 'y5r3k3', greaves: 'y5r3k3', feet: 'boot' },
  bs_isrFighter: { skin: 'y5r4k1', hs: 'curly', hair: 'k8', beard: 'short', robe: 'b4y3', len: 'knee', sleeves: 'short', sash: 'r6', head: 'cloth', ht: 'y2', band: 'k6', feet: 'sandal' },
  bs_amalek: { skin: 'y6r5k2', hs: 'curly', hair: 'k8', beard: 'full', bt: 'k8', robe: 'k4r4', len: 'knee', sleeves: 'short', sash: 'y6r4', head: 'turban', ht: 'k5r3', feet: 'sandal', cloak: 'r5k4' },
  bs_charioteer: { skin: 'y6r5k1', hs: 'short', hair: 'k8', robe: 'y1', len: 'knee', sleeves: 'short', sash: 'r6', head: 'helmet', ht: 'b6y2', armor: 'b5y3k1', feet: 'sandal' },
  bs_isrW: Object.assign({}, LK.isrW, { feet: 'sandal' })
});
Object.assign(CLIPS, {
  bs_arms: { d: 4, k: [{ nT: 86, nK: -86, fT: 82, fK: -80, lean: -4, head: -10, nU: 158, nL: 10, fU: 150, fL: 14, hy: 0.3 }, { nT: 86, nK: -86, fT: 82, fK: -80, lean: -3, head: -14, nU: 162, nL: 6, fU: 154, fL: 10, hy: 0.3 }] },
  bs_prop: { d: 4, k: [{ nU: 128, nL: 20, fU: 118, fL: 30, lean: -3, head: -12, nT: 8, fT: -8 }, { nU: 132, nL: 16, fU: 122, fL: 26, lean: -4, head: -14, nT: 8, fT: -8 }] }
});
Object.assign(PROPS2, {
  bs_timbrel(P, A, J, M, h, t, lw, F, u, n, add) { const q = M(add(A.t, u, 0.04)), r = h * 0.045; P.shape(P.disc(q[0], q[1], r, 14), 'y5r3', lw * 0.7); P.fill(P.disc(q[0], q[1], r * 0.7, 12), 'y2', {}); for (let i = 0; i < 4; i++) { const a = i / 4 * TAU + t * 3; P.fill(P.disc(q[0] + Math.cos(a) * r, q[1] + Math.sin(a) * r, r * 0.22, 6), 'y8r2', { noKnock: true }); } }
});
const bsSea = (P, pts, tn = 'b6y1') => { P.shape(pts.map(p => P.I(p[0], p[1], 0.6)), tn, 1.1); };
const bsPillarCloud = (P, t, x, y, o = {}) => { const b = P.I(x, y, 0), H = o.h || 520; for (let i = 0; i < 9; i++) { const u = i / 8, sw = Math.sin(t * 0.8 + i * 1.3) * 10; const c = [b[0] + sw, b[1] - u * H]; P.shape(Lib.bumpy(P, c[0], c[1], 38 + u * 22, 26 + u * 8, 7), u > 0.7 ? 'b1k1' : 'b2k2', 0.7); } };
const bsPillarFire = (P, t, x, y, o = {}) => { const b = P.I(x, y, 0), H = o.h || 460; P.halo(b[0], b[1] - H * 0.5, H * 0.5, ['y1', 'y2', 'y2r1', 'y3r1'], { sq: 2.4 }); const L = [], R = []; for (let i = 0; i <= 10; i++) { const u = i / 10, w = 22 + u * 20 + Math.sin(t * 2.4 + i * 1.7) * 5, cx = b[0] + Math.sin(t * 1.1 + u * 4) * 6; L.push([cx - w, b[1] - u * H]); R.push([cx + w, b[1] - u * H]); } P.shape(L.concat(R.reverse()), 'y6r4', 1); const C = []; for (let i = 0; i <= 10; i++) { const u = i / 10, cx = b[0] + Math.sin(t * 1.1 + u * 4) * 6, w = 8 + u * 8; C.push([cx - w, b[1] - u * H]); } for (let i = 10; i >= 0; i--) { const u = i / 10, cx = b[0] + Math.sin(t * 1.1 + u * 4) * 6, w = 8 + u * 8; C.push([cx + w, b[1] - u * H]); } P.fill(C, 'y3', { noKnock: true }); Lib.flame(P, b[0], b[1] - H + 10, 60, 90, t); };
const bsWheel = (P, x, y, r, tn = 'r5y5k3') => { P.shape(P.ell(x, y, 1, r, r, 16), tn, 0.8); for (let k = 0; k < 3; k++) { const a = k / 3 * Math.PI; P.line([P.I(x + Math.cos(a) * r, y + Math.sin(a) * r, 1.5), P.I(x - Math.cos(a) * r, y - Math.sin(a) * r, 1.5)], 0.7); } };
const bsChariot = (P, x, y, s = 1) => {
  const Q = (a, b, z) => P.I(x + a * s, y + b * s, z * s);
  const wheel = b => { const pts = []; for (let i = 0; i < 16; i++) { const a = i / 16 * TAU; pts.push(Q(Math.cos(a) * 18, b, 18 + Math.sin(a) * 18)); } P.shape(pts, 'r5y5k3', 0.9); };
  wheel(-18); P.line([Q(-18, 0, 22), Q(-70, 0, 40)], 1.6, { ink: 3 });
  P.shape([Q(-14, -16, 20), Q(16, -16, 20), Q(16, 16, 20), Q(-14, 16, 20)], 'r5y5k3', 0.8);
  P.shape([Q(-14, 16, 20), Q(16, 16, 20), Q(16, 16, 44), Q(-14, 16, 40)], 'y7r3', 0.9);
  wheel(18);
};
const bsSprings = Array.from({ length: 12 }, (_, i) => [90 + (i % 4) * 110 + (Math.floor(i / 4) % 2) * 40, 90 + Math.floor(i / 4) * 150]);
const bsTents = (P, list) => { for (const [x, y, w, d, h, tn] of list) Lib.tent(P, x, y, w, d, h, tn); };
const SHEET = { title: 'Bechala’h · Quand il laissa partir', sub: 'Paracha de la semaine · Chabbat 23 janvier 2027 · Exode 13, 17 à 17, 16' };
const SCENES = [
{
  title: 'Les ossements de Joseph', book: 'Exode', ch: 13, ref: 'Exodus 13:19', refFr: 'Exode 13, 19', accent: 0, feast: null,
  quote: 'And Moses took Joseph\'s bones with him:  because he had adjured the children of Israel, saying:  God shall visit you, carry out my bones from hence with you.',
  fr: 'Et Moïse prit avec lui les ossements de Joseph, car Joseph avait fait jurer les enfants d’Israël, en disant : Dieu vous visitera ; emportez d’ici mes ossements avec vous.',
  more: ['Pharaon a laissé partir le peuple. Dieu ne le conduit pas par la route des Philistins, la plus courte, de peur qu’il ne regrette en voyant la guerre, mais par le détour du désert, vers la mer des Joncs. Moïse emporte le cercueil de Joseph : la promesse faite à la fin de la Genèse (Genèse 50, 25) est tenue.',
    'Pas de fête juive attachée à ce passage. Joseph sera enterré à Sichem, dans le champ que Jacob avait acheté, à la fin du livre de Josué (Josué 24, 32). Le Talmud (Sota 13a) loue Moïse de s’être occupé des ossements pendant que tout le peuple s’occupait du butin.'],
  back(P) {
    Lib.sun(P, 780, 150, 28); P.shape([[180, 350], [240, 270], [270, 350]], 'y5r3', 1); P.shape([[240, 270], [270, 350], [320, 350]], 'y5r3k2', 1);
    Lib.platform(P, 'y5r2', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    Lib.city(P, 10, 10, 140, 140, 6, 'y4r3', 3);
    const road = [[80, 160], [280, 290], [540, 440]]; for (let i = 0; i < 2; i++) { const a = road[i], b = road[i + 1]; P.fill([P.I(a[0], a[1] - 34, 0.5), P.I(b[0], b[1] - 34, 0.5), P.I(b[0], b[1] + 34, 0.5), P.I(a[0], a[1] + 34, 0.5)], 'y3r2', {}); }
    Lib.palm(P, 250, 60, 0, 160, { lean: -10, dates: 1 }); Lib.palm(P, 60, 380, 0, 140, { lean: 12 });
    Lib.grass(P, 30, 'y5b4', [20, 300, 200, 220]);
    Lib.stones(P, 20, 'y3r2k3', [300, 20, 220, 220]);
  },
  chars: [
    ch(LK.bs_moses, { x: 420, y: 330, face: 1, clip: 'point', h: 146, hold: { n: 'staff' } }),
    ch(LK.isrM, { x: 250, y: 250, face: 1, clip: 'carry', h: 140 }),
    ch(LK.isrM2, { x: 340, y: 300, face: 1, clip: 'carry', h: 140 }),
    { depth: 610, draw(P, t) { const z = 128 + Math.sin(t * 3) * 2; P.box(248, 262, z, 96, 34, 24, { t: 'y7r3', l: 'y6r4k1', r: 'y6r4k2' }); P.box(252, 266, z + 24, 88, 26, 6, 'b5y2'); for (let i = 0; i < 4; i++) { const c = P.I(262 + i * 22, 296, z + 12); P.fill(P.disc(c[0], c[1], 3, 6), 'r7b3', {}); } } },
    ch(LK.isrOld, { x: 200, y: 330, face: 1, clip: 'idle', h: 136, hold: { f: 'staffV' } }),
    ch(LK.bs_isrW, { h: 130, speed: 18, t0: 0, over: 'carry', hold: { nTop: 'jarhead' }, path: [W(90, 190, 0), W(420, 420, 0), W(90, 190, 0, null, { jump: 1 })] }),
    ch(LK.child, { h: 90, speed: 18, t0: 7, path: [W(110, 170, 0), W(460, 400, 0), W(110, 170, 0, null, { jump: 1 })] }),
    { beast: 'sheep', h: 56, speed: 18, t0: 12, path: [W(70, 200, 0), W(400, 460, 0), W(70, 200, 0, null, { jump: 1 })] }
  ]
},
{
  title: 'La colonne de nuée et de feu', book: 'Exode', ch: 13, ref: 'Exodus 13:21', refFr: 'Exode 13, 21', accent: 1, feast: null,
  quote: 'And the Lord went before them to shew the way, by day in a pillar of a cloud, and by night in a pillar of fire; that he might be the guide of their journey at both times.',
  fr: 'Et le Seigneur marchait devant eux pour leur montrer le chemin, le jour dans une colonne de nuée, et la nuit dans une colonne de feu, afin de les guider en tout temps.',
  more: ['Depuis Soukkot, le peuple campe à Étam, à l’orée du désert. Devant lui marche une colonne : de nuée le jour, de feu la nuit. Elle ne quitte jamais le peuple, et elle lui permet de marcher de jour comme de nuit.',
    'Pas de fête juive attachée à ce passage. Rabbi Eliézer voit dans les « soukkot » où campa Israël les nuées de gloire qui l’entouraient (Talmud, Soucca 11b) : c’est l’une des lectures qui fondent le sens de la fête de Souccot.'],
  back(P) {
    P.shape(P.disc(500, 470, 450, 64), 'b5r3k2', 0);
    for (let i = 0; i < 30; i++) { const x = 540 + P.r() * 380, y = 60 + P.r() * 250; Lib.star(P, x, y, 2 + P.r() * 3, 'y6'); }
    P.halo(260, 200, 220, ['y1', 'y2', 'y2r1', 'y3r1'], { knock: true, sq: 0.8 });
    Lib.platform(P, 'y4r3k1', 'y4r3k2', { strata: [[0, .4, 'y4r3k2'], [.4, 1, 'y4r4k3']] });
    Lib.mound(P, 470, 40, 60, 70, 'y4r3k3'); Lib.mound(P, 40, 470, 60, 60, 'y4r3k3');
    Lib.stones(P, 30, 'y3r2k3', [20, 20, 500, 500]);
    bsTents(P, [[330, 360, 90, 80, 80, 'r4y4k1'], [440, 300, 80, 70, 70, 'b3y2k1'], [420, 440, 90, 80, 76, 'y4r3k2']]);
    for (let i = 0; i < 12; i++) { const c = P.I(180 + P.r() * 200, 180 + P.r() * 200, 0); P.line([[c[0] - 4, c[1]], [c[0] + 4, c[1]]], 0.8, { ink: 3 }); }
  },
  live(P, t) { bsPillarCloud(P, t, 90, 90, { h: 440 }); bsPillarFire(P, t, 250, 40, { h: 420 }); },
  chars: [
    ch(LK.bs_moses, { x: 240, y: 240, face: -1, clip: 'point', h: 146, hold: { n: 'staff' } }),
    ch(LK.bs_aaron, { x: 280, y: 280, face: -1, clip: 'lookup', h: 142 }),
    ...[[LK.isrM, 0, {}], [LK.bs_isrW, 4, { over: 'carry', hold: { nTop: 'bundle' } }], [LK.childG, 7, { h: 88 }], [LK.isrOld, 10, { hold: { f: 'staffV' } }]].map(([lk, t0, o]) => ch(lk, Object.assign({ h: 136, t0, speed: 20, path: [W(360, 520, 0), W(300, 330, 0), W(360, 520, 0, null, { jump: 1 })] }, o))),
    { beast: 'sheep', h: 56, x: 380, y: 300, face: -1 }
  ]
},
{
  title: 'Les chars de Pharaon', book: 'Exode', ch: 14, ref: 'Exodus 14:10', refFr: 'Exode 14, 10', accent: 1, feast: null,
  quote: 'And when Pharao drew near, the children of Israel lifting up their eyes, saw the Egyptians behind them:  and they feared exceedingly, and cried to the Lord.',
  fr: 'Et quand Pharaon fut proche, les enfants d’Israël, levant les yeux, virent les Égyptiens derrière eux ; ils eurent une grande frayeur et crièrent vers le Seigneur.',
  more: ['Pharaon regrette d’avoir laissé partir ses esclaves. Il attelle son char, prend six cents chars d’élite et tous les chars d’Égypte, et rattrape le peuple campé au bord de la mer, près de Pi-Hahiroth. Le peuple crie : n’y avait-il pas assez de tombeaux en Égypte ? Moïse répond : « Ne craignez pas, tenez-vous là, et voyez le salut du Seigneur. »',
    'Pas de fête juive attachée à ce passage. La colonne de nuée passe alors de l’avant à l’arrière du camp et se place entre les Égyptiens et Israël : ténèbres d’un côté, lumière de l’autre, toute la nuit (Exode 14, 19-20).'],
  back(P) {
    Lib.cloud(P, 300, 170, 160, 40, 'k2y1'); Lib.cloud(P, 820, 140, 120, 30, 'b1');
    Lib.platform(P, 'y5r2', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    bsSea(P, [[380, 0], [540, 0], [540, 540], [300, 540], [330, 400], [360, 250], [350, 120]]); Lib.waves(P, [390, 20, 140, 500], 16, 1, 2);
    Lib.stones(P, 14, 'y4r2k2', [230, 200, 120, 300]);
    for (const [x, y] of [[40, 40], [110, 30], [30, 120]]) bsChariot(P, x, y, 0.9);
    P.shape(Lib.bumpy(P, P.I(80, 80, 0)[0], P.I(80, 80, 0)[1] - 30, 90, 30, 9), 'y4r2k1', 0.6);
    Lib.mound(P, 200, 30, 60, 70, 'y4r3k3');
  },
  live(P, t) { const b = P.I(90, 90, 0); for (let i = 0; i < 5; i++) { const u = (t * 0.3 + i / 5) % 1; P.shape(Lib.bumpy(P, b[0] - 60 + u * 40 + i * 20, b[1] - 20 - u * 60, 20 + u * 30, 12 + u * 14, 6), 'y3r2k1', 0.5); } bsPillarCloud(P, t, 200, 190, { h: 380 }); },
  chars: [
    { beast: 'bs_horse', h: 100, x: 150, y: 70, face: 1 }, { beast: 'bs_horse', h: 96, x: 80, y: 150, face: 1 },
    ch(LK.bs_charioteer, { x: 60, y: 60, face: 1, clip: 'raise', hold: { n: 'spear' }, h: 124 }),
    ch(LK.bs_moses, { x: 300, y: 300, face: -1, clip: 'raise', h: 146, hold: { n: 'staff' } }),
    ch(LK.isrM, { x: 280, y: 400, face: -1, clip: 'pray', h: 140 }),
    ch(LK.bs_isrW, { x: 240, y: 450, face: -1, clip: 'lookup', h: 130 }),
    ch(LK.child, { x: 280, y: 480, face: -1, clip: 'stagger', h: 90 }),
    ch(LK.isrM2, { x: 330, y: 470, face: -1, clip: 'kneel', h: 140 }),
    ch(LK.isrOld, { h: 136, speed: 12, hold: { f: 'staffV' }, path: [W(220, 330, 2, 'point'), W(250, 380, 2, 'talk'), W(220, 330, 0)] })
  ]
},
reuse(AT[6]),
{
  title: 'Le cantique de la mer', book: 'Exode', ch: 15, ref: 'Exodus 15:1', refFr: 'Exode 15, 1', accent: 2, feast: 'Chabbat Chira',
  quote: 'Then Moses and the children of Israel sung this canticle to the Lord, and said:  Let us sing to the Lord:  for he is gloriously magnified, the horse and the rider he hath thrown into the sea.',
  fr: 'Alors Moïse et les enfants d’Israël chantèrent ce cantique au Seigneur, et dirent : Chantons le Seigneur, car il s’est glorieusement élevé ; il a jeté à la mer le cheval et son cavalier.',
  more: ['Au matin, la mer revient à sa place et engloutit les chars et les cavaliers. Israël voit les Égyptiens morts sur le rivage, et il croit au Seigneur et en Moïse son serviteur. Alors Moïse et les enfants d’Israël chantent : « Le Seigneur est ma force et mon chant, il a été mon salut. »',
    'Correspondance : <b>Chabbat Chira</b>. Le Chabbat où l’on lit ce cantique porte son nom, « le Chabbat du chant ». Dans le rouleau, la Chira est copiée en briques superposées, comme les assises d’un mur ; on la récite aussi chaque matin dans la prière.'],
  back(P) {
    Lib.sun(P, 260, 120, 30); Lib.cloud(P, 760, 150, 150, 34, 'b1');
    Lib.platform(P, 'y5r1', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    bsSea(P, [[0, 0], [540, 0], [540, 200], [380, 230], [200, 190], [0, 220]]); Lib.waves(P, [20, 20, 500, 170], 18, 1, 2);
    bsWheel(P, 120, 90, 18); bsWheel(P, 380, 130, 16); bsWheel(P, 470, 60, 14, 'y6r3k2');
    for (const [x, y] of [[250, 80], [60, 150]]) { const c = P.I(x, y, 1); P.shape(P.disc(c[0], c[1], 9, 12).map(p => [p[0], c[1] + (p[1] - c[1]) * 0.5]), 'b5y3k1', 0.7); }
    const sh = []; for (let i = 0; i <= 12; i++) sh.push(P.I(i * 45, 220 + Math.sin(i) * 12, 0.7)); P.line(sh, 2.4, { ink: 2, lvl: 3 });
    Lib.rock(P, 160, 300, 0, 50, 30, 'y4r3k3');
    Lib.stones(P, 16, 'y4r2k2', [20, 280, 500, 240]);
    Lib.grass(P, 20, 'y5b4', [300, 400, 220, 120]);
  },
  chars: [
    ch(LK.bs_moses, { x: 160, y: 300, z: 30, face: 1, clip: 'sing', h: 146, hold: { f: 'staffV' } }),
    ch(LK.bs_aaron, { x: 220, y: 340, face: -1, clip: 'raise', h: 142 }),
    ch(LK.isrM, { x: 290, y: 330, face: -1, clip: 'sing', h: 140 }),
    ch(LK.isrM2, { x: 360, y: 380, face: -1, clip: 'hold2', h: 140 }),
    ch(LK.isrOld, { x: 250, y: 430, face: -1, clip: 'sing', h: 136, hold: { f: 'staffV' } }),
    ch(LK.child, { x: 330, y: 470, face: -1, clip: 'raise', h: 90 }),
    ch(LK.bs_isrW, { x: 420, y: 300, face: -1, clip: 'sing', h: 130 }),
    ch(LK.isrW2, { x: 450, y: 420, face: -1, clip: 'raise', h: 130 })
  ]
},
{
  title: 'Myriam et les tambourins', book: 'Exode', ch: 15, ref: 'Exodus 15:20', refFr: 'Exode 15, 20', accent: 1, feast: null,
  quote: 'So Mary the prophetess, the sister of Aaron, took a timbrel in her hand:  and all the women went forth after her with timbrels and with dances.',
  fr: 'Alors Marie la prophétesse, sœur d’Aaron, prit un tambourin à la main ; et toutes les femmes sortirent à sa suite avec des tambourins et des danses.',
  more: ['Myriam, la sœur qui avait veillé sur Moïse enfant au bord du Nil, prend son tambourin. Toutes les femmes la suivent en dansant, et elle leur répond par le premier verset du cantique : « Chantez le Seigneur, car il s’est glorieusement élevé ; il a jeté à la mer le cheval et son cavalier. »',
    'Pas de fête juive attachée à ce passage en dehors du Chabbat Chira. Rachi, d’après la Mekhilta, explique que les femmes justes de cette génération étaient si sûres du miracle qu’elles avaient emporté des tambourins en sortant d’Égypte.'],
  back(P) {
    Lib.sun(P, 780, 140, 28);
    Lib.platform(P, 'y5r1', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    bsSea(P, [[0, 0], [540, 0], [540, 120], [300, 150], [0, 110]]); Lib.waves(P, [20, 10, 500, 100], 12, 1, 2);
    bsWheel(P, 200, 60, 16);
    P.shape(P.ell(270, 330, 0.6, 150, 130, 30), 'y4r1', 0.8);
    bsTents(P, [[30, 380, 100, 90, 90, 'r4y4k1'], [440, 180, 90, 80, 80, 'b3y2k1']]);
    Lib.palm(P, 480, 460, 0, 150, { lean: -12 });
    Lib.stones(P, 16, 'y4r2k2', [20, 160, 500, 100]);
  },
  chars: [
    ch(LK.bs_miriam, { x: 270, y: 320, face: 1, clip: 'dance', h: 134, hold: { n: 'bs_timbrel' } }),
    ...[0, 1, 2, 3, 4].map(i => { const pts = []; for (let k = 0; k < 10; k++) { const a = -k / 10 * TAU; pts.push(W(270 + Math.cos(a) * 130, 330 + Math.sin(a) * 110, 0)); } return ch([LK.bs_isrW, LK.isrW2, LK.childG, LK.isrW, LK.bs_isrW][i], { h: i === 2 ? 90 : 128, t0: i * 5.6, speed: 22, walk: 'dance', path: pts, hold: { n: 'bs_timbrel' } }); }),
    ch(LK.bs_aaron, { x: 120, y: 200, face: 1, clip: 'sing', h: 142 }),
    ch(LK.isrOld, { x: 150, y: 480, face: 1, clip: 'idle', h: 136, hold: { f: 'staffV' } })
  ]
},
{
  title: 'Les eaux de Mara', book: 'Exode', ch: 15, ref: 'Exodus 15:25', refFr: 'Exode 15, 25', accent: 0, feast: null,
  quote: 'But he cried to the Lord, and he shewed him a tree, which when he had cast into the waters, they were turned into sweetness.',
  fr: 'Mais il cria vers le Seigneur, qui lui montra un bois ; il le jeta dans les eaux, et elles devinrent douces.',
  more: ['Trois jours de marche dans le désert de Chour, sans eau. À Mara, l’eau est amère, et le peuple murmure contre Moïse : « Que boirons-nous ? » Moïse crie vers le Seigneur, qui lui montre un bois. Il le jette dans l’eau, et l’eau devient douce. Là, Dieu donne au peuple une loi et un droit, et le met à l’épreuve.',
    'Pas de fête juive attachée à ce passage. Le Talmud (Sanhédrin 56b) enseigne qu’à Mara furent déjà données certaines lois, dont le Chabbat, avant même le Sinaï. Le lieu tire son nom de l’amertume de ses eaux (mar, « amer »).'],
  back(P) {
    Lib.sun(P, 200, 130, 32); P.halo(500, 250, 400, ['y2r1', 'y3r1'], { sq: 0.5 });
    Lib.platform(P, 'y5r2', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    const pool = []; for (let i = 0; i < 20; i++) { const a = i / 20 * TAU; pool.push([270 + Math.cos(a) * (110 + Math.sin(a * 3) * 10), 250 + Math.sin(a) * (80 + Math.cos(a * 2) * 8)]); }
    P.shape(pool.map(p => P.I(p[0], p[1], 0.5)), 'y3r2k2', 1.2); bsSea(P, pool.map(p => [270 + (p[0] - 270) * 0.9, 250 + (p[1] - 250) * 0.9]), 'b4y4k1');
    Lib.waves(P, [200, 200, 140, 100], 6, 1, 2);
    Lib.rock(P, 90, 90, 0, 40, 30, 'y4r3k3'); Lib.rock(P, 460, 120, 0, 30, 20, 'y4r2k3');
    Lib.bush(P, 60, 300, 0, 20, 'y4b4k2'); Lib.tree(P, 450, 360, 0, { h: 110, r: 26, blobs: 4, can: 'y4b4k2', trunk: 'r5y4k4' });
    Lib.stones(P, 20, 'y3r2k3', [20, 20, 500, 500]);
  },
  live(P, t) { const c = P.I(260, 250, 1); const r = Math.sin(t * 1.2) * 4; P.shape([[c[0] - 44, c[1] + r], [c[0] + 40, c[1] - 10 + r], [c[0] + 42, c[1] - 4 + r], [c[0] - 42, c[1] + 6 + r]], 'r5y5k4', 0.9); for (let i = 0; i < 3; i++) { const u = (t * 0.4 + i / 3) % 1; P.outline(P.ell(260, 250, 1, 20 + u * 70, 16 + u * 50, 20), 0.6 * (1 - u) + 0.1); } },
  chars: [
    ch(LK.bs_moses, { x: 180, y: 360, face: 1, clip: 'point', h: 146, hold: { f: 'staffV' } }),
    ch(LK.isrM, { x: 360, y: 320, face: -1, clip: 'fill', h: 140, hold: { n: 'cup' } }),
    ch(LK.bs_isrW, { x: 330, y: 360, face: -1, clip: 'kneel', h: 130 }),
    ch(LK.isrM2, { x: 120, y: 200, face: 1, clip: 'sulk', h: 140 }),
    ch(LK.child, { x: 260, y: 370, face: -1, clip: 'lookup', h: 90 }),
    ch(LK.isrW2, { h: 128, speed: 14, over: 'carry', hold: { nTop: 'jarhead' }, path: [W(420, 460, 1), W(380, 360, 2, 'fill'), W(420, 460, 0)] }),
    { beast: 'sheep', h: 56, x: 420, y: 250, face: -1 }
  ]
},
{
  title: 'Les palmiers d’Élim', book: 'Exode', ch: 15, ref: 'Exodus 15:27', refFr: 'Exode 15, 27', accent: 0, feast: 'Tou Bichvat',
  quote: 'And the children of Israel came into Elim, where there were twelve fountains of water, and seventy palm trees:  and they encamped by the waters.',
  fr: 'Et les enfants d’Israël arrivèrent à Élim, où il y avait douze sources d’eau et soixante-dix palmiers ; et ils campèrent là, près des eaux.',
  more: ['Après l’amertume de Mara, une oasis : douze sources et soixante-dix palmiers. Le peuple campe au bord de l’eau. Le texte ne dit rien de plus, et ce verset reste comme une halte dans la marche, avant le désert de Sin.',
    'Correspondance : <b>Tou Bichvat</b>. En 5787, le 15 Chevat, nouvel an des arbres, tombe le Chabbat même de Bechala’h. On y mange des fruits de la terre d’Israël, dont la datte, l’une des sept espèces (Deutéronome 8, 8). Les commentateurs ont rapproché les douze sources des douze tribus et les soixante-dix palmiers des soixante-dix anciens.'],
  back(P) {
    Lib.sun(P, 780, 140, 30);
    Lib.platform(P, 'y5r2b1', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    Lib.grass(P, 90, 'y5b5', [20, 20, 500, 500]);
    for (let i = 0; i < 12; i++) { const x = 90 + (i % 4) * 110 + (Math.floor(i / 4) % 2) * 40, y = 90 + Math.floor(i / 4) * 150; P.shape(P.ell(x, y, 0.6, 20, 20, 16), 'b5y2', 0.8); P.outline(P.ell(x, y, 0.5, 26, 26, 16), 0.5); }
    const pal = [[40, 40], [150, 30], [280, 40], [400, 30], [510, 60], [30, 170], [510, 200], [40, 300], [240, 250], [510, 340], [30, 440], [140, 510], [510, 500]];
    for (const [x, y] of pal) Lib.palm(P, x, y, 0, 140 + ((x + y) % 5) * 12, { lean: (x > 270 ? -1 : 1) * (8 + (y % 3) * 4), dates: (x + y) % 2 });
    bsTents(P, [[300, 360, 90, 80, 80, 'r4y4k1'], [380, 420, 80, 70, 70, 'b3y2k1']]);
  },
  live(P, t) { for (let i = 0; i < 12; i++) { const [x, y] = bsSprings[i], u = (t * 0.5 + i * 0.37) % 1; P.outline(P.ell(x, y, 1, 4 + u * 16, 4 + u * 16, 12), 0.5 * (1 - u) + 0.1); } },
  chars: [
    ch(LK.bs_moses, { x: 250, y: 330, face: 1, clip: 'bless', h: 146, hold: { f: 'staffV' } }),
    ch(LK.isrM, { x: 190, y: 170, face: -1, clip: 'fill', h: 140, hold: { n: 'cup' } }),
    ch(LK.bs_isrW, { x: 330, y: 130, face: 1, clip: 'kneel', h: 128 }),
    ch(LK.isrOld, { x: 180, y: 420, z: 0, face: 1, clip: 'sit', h: 134 }),
    ch(LK.child, { h: 90, speed: 20, walk: 'dance', path: [W(120, 250, 0.5), W(200, 300, 0), W(160, 380, 0.5, 'reach'), W(120, 250, 0)] }),
    ch(LK.childG, { x: 250, y: 470, face: -1, clip: 'reach', h: 88, hold: { f: 'fruit' } }),
    { beast: 'sheep', h: 56, x: 420, y: 160, face: -1 }, { beast: 'sheep', h: 54, x: 460, y: 280, face: -1 }
  ]
},
{
  title: 'La manne', book: 'Exode', ch: 16, ref: 'Exodus 16:15', refFr: 'Exode 16, 15', accent: 2, feast: null,
  quote: 'And when the children of Israel saw it, they said one to another:  Manhu! which signifieth:  What is this! for they knew not what it was.  And Moses said to them:  This is the bread which the Lord hath given you to eat.',
  fr: 'Et quand les enfants d’Israël la virent, ils se dirent l’un à l’autre : Man hou ? c’est-à-dire : Qu’est-ce que c’est ? car ils ne savaient pas ce que c’était. Et Moïse leur dit : C’est le pain que le Seigneur vous a donné à manger.',
  more: ['Dans le désert de Sin, le peuple regrette les marmites de viande d’Égypte. Le soir, des cailles couvrent le camp ; le matin, une couche de rosée, et sous elle une chose fine comme le givre. Chacun en ramasse un omer par personne. Le sixième jour, la mesure est double, et le septième jour il n’en tombe pas.',
    'Pas de fête juive attachée à ce passage. C’est pourtant ici que le Chabbat apparaît pour la première fois comme commandement au peuple (Exode 16, 23-30). En souvenir de la double part, on bénit le vendredi soir et le samedi deux pains, les deux ’hallot, posés sur une nappe comme la manne sur sa rosée.'],
  back(P) {
    P.halo(500, 330, 480, ['y1', 'y2r1', 'y3r1', 'r2y3'], { sq: 0.5 }); Lib.sun(P, 160, 300, 28);
    Lib.platform(P, 'y4r2', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    bsTents(P, [[20, 20, 120, 100, 100, 'r4y4k1'], [180, 20, 100, 90, 90, 'b3y2k1'], [320, 30, 110, 90, 96, 'y4r3k2'], [20, 170, 100, 100, 90, 'b4r2k1']]);
    for (let i = 0; i < 260; i++) { const x = 150 + P.r() * 380, y = 150 + P.r() * 380, c = P.I(x, y, 0.6); P.shape(P.disc(c[0], c[1], 2.4 + P.r() * 2, 6), 'y1b1', 0.3); }
    Lib.jar(P, 150, 150, 0, 1.3, 'r5y6k1'); Lib.jar(P, 175, 160, 0, 1.1, 'b5y3');
    Lib.stones(P, 10, 'y3r2k3', [20, 350, 120, 170]);
  },
  top(P, t) { for (let i = 0; i < 12; i++) { const u = (t * 0.06 + i / 12) % 1; Lib.bird(P, 120 + u * 800, 120 + Math.sin(i * 2.1) * 60 + u * 80, 1 + (i % 3) * 0.3, t * 3 + i, 'k3r1'); } },
  chars: [
    ch(LK.bs_moses, { x: 180, y: 290, face: 1, clip: 'talk', h: 146, hold: { f: 'staffV' } }),
    ch(LK.bs_aaron, { x: 230, y: 250, face: 1, clip: 'offer', h: 142 }),
    ch(LK.isrM, { x: 300, y: 330, face: -1, clip: 'glean', h: 140 }),
    ch(LK.bs_isrW, { x: 380, y: 280, face: 1, clip: 'glean', h: 128 }),
    ch(LK.isrM2, { x: 420, y: 400, face: -1, clip: 'lookup', h: 140, hold: { n: 'bread' } }),
    ch(LK.child, { x: 330, y: 440, face: 1, clip: 'reach', h: 90 }),
    ch(LK.isrW2, { h: 128, speed: 12, over: 'carry', hold: { nTop: 'jarhead' }, path: [W(470, 250, 2, 'glean'), W(470, 470, 2, 'glean'), W(470, 250, 0)] }),
    ch(LK.childG, { x: 250, y: 480, face: -1, clip: 'glean', h: 86 })
  ]
},
{
  title: 'L’eau du rocher', book: 'Exode', ch: 17, ref: 'Exodus 17:6', refFr: 'Exode 17, 6', accent: 2, feast: null,
  quote: 'Behold I will stand there before thee, upon the rock Horeb, and thou shalt strike the rock, and water shall come out of it that the people may drink.  Moses did so before the ancients of Israel:',
  fr: 'Voici, je me tiendrai là devant toi, sur le rocher d’Horeb ; tu frapperas le rocher, et il en sortira de l’eau, et le peuple boira. Moïse fit ainsi en présence des anciens d’Israël.',
  more: ['À Rephidim, il n’y a pas d’eau. Le peuple se querelle avec Moïse, au point qu’il craint d’être lapidé. Dieu lui dit de prendre avec lui des anciens et le bâton dont il a frappé le Nil, et de frapper le rocher d’Horeb. L’eau jaillit. Moïse appelle le lieu Massa et Meriba, « épreuve » et « querelle », parce que le peuple a demandé : le Seigneur est-il au milieu de nous ?',
    'Pas de fête juive attachée à ce passage. Un second épisode de l’eau du rocher, à Meriba de Qadech, se trouve au livre des Nombres (Nombres 20, 1-13) : Moïse y frappe le rocher au lieu de lui parler, et il lui est annoncé qu’il n’entrera pas dans le pays.'],
  back(P) {
    Lib.sun(P, 800, 140, 28);
    Lib.platform(P, 'y4r2k1', 'y4r3k2', { strata: [[0, .4, 'y4r3k2'], [.4, .75, 'r3y4k3'], [.75, 1, 'r4y3k4']] });
    Lib.mound(P, 110, 90, 120, 220, 'y4r3k3', { px: 20 }); Lib.mound(P, 330, 30, 80, 130, 'y3r3k2');
    Lib.rock(P, 200, 190, 0, 70, 60, 'y4r3k3', 1.4);
    const w = []; for (let i = 0; i <= 10; i++) w.push([230 + i * 20 + Math.sin(i) * 8, 230 + i * 22]); for (let i = 10; i >= 0; i--) w.push([230 + i * 20 + 30 + Math.sin(i) * 8, 230 + i * 22 - 20]);
    bsSea(P, w, 'b5y2');
    P.shape(P.ell(470, 460, 0.7, 50, 40, 20), 'b5y2', 1);
    Lib.stones(P, 24, 'y3r2k3', [20, 250, 200, 270]);
    Lib.bush(P, 480, 200, 0, 18, 'y4b4k2');
  },
  live(P, t) { const a = P.I(236, 226, 50); for (let i = 0; i < 6; i++) { const u = (t * 0.9 + i / 6) % 1; const p0 = [a[0] + u * 26, a[1] - 10 + u * u * 60]; P.line([[p0[0], p0[1]], [p0[0] + 8, p0[1] + 14]], 2.2, { ink: 2, lvl: 5 }); } P.line([[a[0], a[1] - 6], [a[0] + 14, a[1] + 8], [a[0] + 24, a[1] + 40], [a[0] + 30, a[1] + 60]], 3, { ink: 2, lvl: 4 }); Lib.waves(P, [440, 440, 60, 40], 3, 1, 2); },
  chars: [
    ch(LK.bs_moses, { x: 290, y: 200, face: -1, clip: 'smash', h: 146, hold: { n: 'staff' } }),
    ch(LK.isrOld, { x: 340, y: 150, face: -1, clip: 'lookup', h: 136, hold: { f: 'staffV' } }),
    ch(LK.bs_aaron, { x: 360, y: 230, face: -1, clip: 'raise', h: 142 }),
    ch(LK.isrM, { x: 330, y: 360, face: -1, clip: 'fill', h: 140, hold: { n: 'cup' } }),
    ch(LK.bs_isrW, { x: 200, y: 380, face: 1, clip: 'kneel', h: 128 }),
    ch(LK.child, { x: 400, y: 440, face: -1, clip: 'fill', h: 90 }),
    { beast: 'sheep', h: 56, x: 470, y: 400, face: -1 }, { beast: 'donkey', h: 86, speed: 10, path: [W(500, 300, 3), W(430, 380, 3), W(500, 300, 0)] }
  ]
},
{
  title: 'Les mains levées de Moïse', book: 'Exode', ch: 17, ref: 'Exodus 17:12', refFr: 'Exode 17, 12', accent: 1, feast: 'Pourim',
  quote: 'And Moses\'s hands were heavy:  so they took a stone, and put under him, and he sat on it:  and Aaron and Hur stayed up his hands on both sides.  And it came to pass, that his hands were not weary until sunset.',
  fr: 'Mais les mains de Moïse étaient lourdes ; ils prirent donc une pierre et la mirent sous lui, et il s’assit dessus ; Aaron et Hour soutenaient ses mains, des deux côtés. Et ses mains restèrent fermes jusqu’au coucher du soleil.',
  more: ['Amalek vient attaquer Israël à Rephidim. Josué choisit des hommes et combat dans la plaine ; Moïse monte au sommet de la colline avec le bâton de Dieu. Quand il lève les mains, Israël l’emporte ; quand il les baisse, Amalek l’emporte. Aaron et Hour le font asseoir sur une pierre et soutiennent ses bras jusqu’au soir, et Josué affaiblit Amalek.',
    'Correspondance : <b>Pourim</b>. Ce passage (Exode 17, 8-16) est la lecture de la Torah le matin de Pourim : Haman est présenté comme un descendant d’Agag, roi d’Amalek (Esther 3, 1). La Michna (Roch Hachana 3, 8) demande si les mains de Moïse faisaient la guerre, et répond : quand Israël regardait vers le haut, il l’emportait.'],
  back(P) {
    P.halo(500, 300, 460, ['r2y3', 'r3y4', 'r4y4', 'r5y4k1'], { sq: 0.5 }); Lib.sun(P, 800, 300, 34);
    Lib.platform(P, 'y4r2', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    P.box(20, 20, 0, 190, 170, 50, { t: 'y4r3k1', l: 'y4r3k2', r: 'y4r3k3' }); P.box(40, 30, 50, 130, 120, 40, { t: 'y4r2k1', l: 'y4r3k2', r: 'y4r3k3' });
    Lib.stones(P, 12, 'y3r2k3', [30, 30, 150, 110]); Lib.rock(P, 90, 70, 90, 22, 14, 'y3r2k3');
    Lib.bush(P, 190, 60, 50, 16, 'y4b4k2');
    Lib.stones(P, 20, 'y3r2k3', [230, 230, 280, 280]);
    for (let i = 0; i < 4; i++) { const c = P.I(300 + i * 50, 480 - i * 30, 0); P.line([[c[0] - 12, c[1]], [c[0] + 14, c[1] - 4]], 1.2, { ink: 3 }); }
  },
  chars: [
    ch(LK.bs_moses, { x: 100, y: 80, z: 102, face: 1, clip: 'bs_arms', h: 142, hold: { n: 'staff' } }),
    ch(LK.bs_aaron, { x: 70, y: 120, z: 90, face: 1, clip: 'bs_prop', h: 138 }),
    ch(LK.bs_hur, { x: 130, y: 50, z: 90, face: -1, clip: 'bs_prop', h: 138 }),
    ch(LK.bs_joshua, { h: 144, speed: 30, hold: { n: 'sword' }, path: [W(300, 320, 1.4, 'smash'), W(360, 340, 1.4, 'smash'), W(300, 320, 0)] }),
    ch(LK.bs_isrFighter, { x: 280, y: 420, face: 1, clip: 'guard', h: 138, hold: { n: 'spear', f: 'shield' } }),
    ch(LK.bs_isrFighter, { x: 250, y: 260, face: 1, clip: 'sling', h: 136, hold: { n: 'sling' } }),
    ch(LK.bs_amalek, { h: 140, speed: 30, t0: 0.7, hold: { n: 'bigspear' }, path: [W(430, 330, 1.4, 'smash'), W(470, 380, 1.4, 'guard'), W(430, 330, 0)] }),
    ch(LK.bs_amalek, { x: 450, y: 460, face: -1, clip: 'stagger', h: 140, hold: { f: 'shield' } }),
    ch(LK.bs_amalek, { x: 470, y: 230, face: -1, clip: 'raise', h: 138, hold: { n: 'spear' } })
  ]
}
];
Object.assign(BEAST, { bs_horse: Object.assign({}, BEAST.donkey, { ears: 'small', tone: 'r5y4k3', mane: 'k8', lh: .5, bl: .74 }) });
