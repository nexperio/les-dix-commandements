/* PARACHA VAYE'HI · Genèse 47, 28 à 50, 26 · Chabbat 26 décembre 2026 */
Object.assign(LK, {
  vc_jacob: { old: 1, skin: 'y5r4', hs: 'fringe', hair: 'k1', beard: 'full', bt: 'k1b1', robe: 'r5y5k2', cloak: 'b4k2', sash: 'y6r2', head: 'cloth', ht: 'y2', band: 'k5' },
  vc_joseph: { skin: 'y5r4', hs: 'short', hair: 'k6r2', beard: 'short', bt: 'k6r2', robe: 'y1', len: 'ankle', trim: 1, sleeves: 'long', wide: 1, sash: 'y8r2', cloak: 'b5r3', head: 'cloth', ht: 'y1b1', band: 'y8r2', feet: 'sandal' },
  vc_ephraim: { skin: 'y5r4', hs: 'short', hair: 'k7', robe: 'y1b1', len: 'knee', sleeves: 'short', sash: 'b6', cloak: 'r5y3', feet: 'sandal' },
  vc_manasseh: { skin: 'y5r4k1', hs: 'curly', hair: 'k7r2', robe: 'b4y2', len: 'knee', sleeves: 'short', sash: 'r6', cloak: 'y5r3k1', feet: 'sandal' },
  vc_judah: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'full', bt: 'k7', robe: 'r6y4k1', cloak: 'y5r3k2', sash: 'b5', head: 'cloth', ht: 'r4y3', band: 'k6' },
  vc_benjamin: { skin: 'y5r4', hs: 'curly', hair: 'k7r2', beard: 'short', robe: 'b4r2', len: 'knee', sleeves: 'short', sash: 'y7', head: 'cloth', ht: 'y2', band: 'b5' },
  vc_egypt: { skin: 'y6r5k1', hs: 'short', hair: 'k8', robe: 'y1', len: 'knee', sleeves: 'none', sash: 'b5', head: 'cap', ht: 'b5y2', feet: 'sandal' },
  vc_elder: { old: 1, skin: 'y6r5k1', hs: 'short', hair: 'k2', beard: 'short', bt: 'k2', robe: 'y1', len: 'ankle', sleeves: 'long', cloak: 'b5y1', sash: 'r6', head: 'cap', ht: 'b5y3' },
  vc_mourner: { fem: 1, skin: 'y6r5k1', hs: 'long', hair: 'k8', robe: 'b5k2', len: 'floor', sleeves: 'long', sash: 'k6', head: 'veil', ht: 'b6k2' }
});
Object.assign(BEAST, { vc_horse: { bl: .7, bh: .3, lh: .5, nk: [.32, -52], hd: [.22, 55, .075, .05], tone: 'r5y5k3', ears: 'small', tail: 1, mane: 'k6' } });
Object.assign(CLIPS, {
  vc_blessSit: { d: 3, k: [{ nT: 86, nK: -86, fT: 82, fK: -80, hy: 0.3, lean: 4, head: 4, nU: 84, nL: 10, fU: 76, fL: 14 }, { nT: 86, nK: -86, fT: 82, fK: -80, hy: 0.3, lean: 6, head: 8, nU: 88, nL: 6, fU: 80, fL: 10 }] },
  vc_mourn: { d: 3.4, k: [{ lean: 20, head: 26, nU: 150, nL: 120, fU: 140, fL: 125, nT: 4, fT: -4 }, { lean: 24, head: 30, nU: 146, nL: 124, fU: 136, fL: 128, nT: 4, fT: -4 }] }
});
const vcRoom = (P, o = {}) => {
  const L = P.L;
  Lib.platform(P, o.floor || 'y4r2k1', 'y4r3k2', { h: 50, pebbles: false, strata: [[0, .5, 'y4r3k2'], [.5, 1, 'y4r3k3']] });
  for (let i = 0; i < 12; i++) P.line([P.I(i * 45, 0, 0.5), P.I(i * 45, L, 0.5)], 0.5, { lvl: 4 });
  Lib.walls(P, { l: o.wl || 'y4r3k1', r: o.wr || 'y4r3k2', cut: 'y4r3k3' }, { h: 260 });
  for (let z = 20; z < 260; z += 20) { P.line([P.I(0.5, 0, z), P.I(0.5, L, z)], 0.4, { lvl: 4 }); P.line([P.I(0, 0.5, z), P.I(L, 0.5, z)], 0.4, { lvl: 4 }); }
  for (let x = 0; x < L; x += 30) Lib.wallR(P, x, 222, 26, 16, (x / 30) % 2 ? 'b6y2' : 'y6r3', 0.6);
  for (let y = 0; y < L; y += 30) Lib.wallL(P, y, 222, 26, 16, (y / 30) % 2 ? 'b6y2' : 'y6r3', 0.6);
  const win = [P.I(300, 0.5, 120), P.I(380, 0.5, 120), P.I(380, 0.5, 180), P.I(300, 0.5, 180)]; P.shape(win, o.night ? 'b7k4' : 'b2y1', 1);
  if (o.night) { const c = P.I(340, 0.5, 160); Lib.star(P, c[0] - 10, c[1], 4, 'y7'); Lib.star(P, c[0] + 14, c[1] + 12, 3, 'y7'); }
  for (let i = 1; i < 4; i++) P.line([P.I(300 + i * 20, 0.5, 120), P.I(300 + i * 20, 0.5, 180)], 1.4, { ink: 3 });
};
const vcBed = (P, x, y, w, d, blanket) => {
  for (const [a, b] of [[x, y], [x + w - 8, y], [x, y + d - 8], [x + w - 8, y + d - 8]]) P.box(a, b, 0, 8, 8, 22, 'r4y5k3', 0.8);
  P.box(x, y, 22, w, d, 10, 'r4y5k2');
  P.shape([P.I(x + 4, y + 30, 32.5), P.I(x + w - 4, y + 30, 32.5), P.I(x + w - 4, y + d - 4, 32.5), P.I(x + 4, y + d - 4, 32.5)], blanket || 'b5r2', 0.9);
  for (let i = 1; i < 5; i++) P.line([P.I(x + 4, y + 30 + i * (d - 34) / 5, 33), P.I(x + w - 4, y + 30 + i * (d - 34) / 5, 33)], 0.8, { ink: 1, lvl: 6 });
  const c = P.I(x + w / 2, y + 16, 32); P.shape(Lib.bumpy(P, c[0], c[1] - 5, 20, 8, 6), 'y2', 0.8);
};
const vcPyramids = (P, list) => { for (const [cx, w, h] of list) { P.shape([[cx - w, 345], [cx, 345 - h], [cx + w * 0.3, 345]], 'y5r3', 1); P.shape([[cx + w * 0.3, 345], [cx, 345 - h], [cx + w, 345]], 'y5r3k2', 1); } };
const vcCol = (P, x, y, h) => { P.cyl(x, y, 0, 17, h, 'y3r1'); for (let z = 40; z < h - 20; z += 60) P.cyl(x, y, z, 18, 6, 'b5y2'); P.cyl(x, y, h, 25, 22, 'y5b5'); P.box(x - 22, y - 22, h + 22, 44, 44, 12, 'y4r3'); };
const vcChariot = (x, y) => ({ depth: x + y, draw(P) {
  const Q = (a, b, z) => P.I(x - a * 0.707 + b * 0.707, y + a * 0.707 + b * 0.707, z);
  const wheel = b => { const pts = []; for (let i = 0; i < 18; i++) { const a = i / 18 * TAU; pts.push(Q(Math.cos(a) * 20, b, 20 + Math.sin(a) * 20)); } P.shape(pts, 'r5y5k3', 1); for (let k = 0; k < 3; k++) { const a = k / 3 * Math.PI; P.line([Q(Math.cos(a) * 18, b, 20 + Math.sin(a) * 18), Q(-Math.cos(a) * 18, b, 20 - Math.sin(a) * 18)], 0.7); } };
  wheel(-20);
  P.line([Q(20, 0, 24), Q(72, 0, 46)], 2, { ink: 3 });
  P.shape([Q(-15, -18, 22), Q(20, -18, 22), Q(20, 18, 22), Q(-15, 18, 22)], 'r5y5k3', 0.9);
  P.shape([Q(20, -18, 22), Q(20, 18, 22), Q(20, 18, 50), Q(20, -18, 50)], 'y7r3', 1);
  P.shape([Q(-15, 18, 22), Q(20, 18, 22), Q(20, 18, 46), Q(-15, 18, 40)], 'b5k2', 1);
  wheel(20);
} });
const vcCoffin = (x, y, o = {}) => ({ depth: x + y + 30, draw(P) {
  const z0 = o.z || 0, bz = z0 + 26;
  P.box(x, y, z0, 130, 50, 26, o.bier || 'r4y5k3');
  P.box(x + 8, y + 6, bz, 114, 38, 18, { t: o.tn || 'y7r3', l: 'y6r4k1', r: 'y6r4k2' });
  for (let i = 0; i < 5; i++) P.line([P.I(x + 30 + i * 18, y + 44, bz + 2), P.I(x + 30 + i * 18, y + 44, bz + 16)], 1.6, { ink: 2, lvl: 7 });
  const hd = P.I(x + 20, y + 25, bz + 18); P.shape(P.disc(hd[0], hd[1] - 2, 12, 14).map(p => [p[0], hd[1] - 2 + (p[1] - hd[1] + 2) * 0.7]), 'y8r4', 0.9);
  if (o.pall) P.shape([P.I(x + 6, y + 4, bz + 19), P.I(x + 124, y + 4, bz + 19), P.I(x + 124, y + 46, bz + 12), P.I(x + 6, y + 46, bz + 12)], o.pall, 0.9);
} });
const SHEET = { title: 'Vaye’hi · Il vécut', sub: 'Paracha de la semaine · Chabbat 26 décembre 2026 · Genèse 47, 28 à 50, 26' };
const SCENES = [
{
  title: 'Éphraïm et Manassé bénis', book: 'Genèse', ch: 48, ref: 'Genesis 48:14', refFr: 'Genèse 48, 14', accent: 0, feast: null,
  quote: 'But he, stretching forth his right hand, put it upon the head of Ephraim, the younger brother; and the left upon the head of Manasses, who was the elder, changing his hands.',
  fr: 'Mais lui, étendant la main droite, la posa sur la tête d’Éphraïm, le plus jeune ; et la gauche sur la tête de Manassé, qui était l’aîné, en croisant ses mains.',
  more: ['Jacob a vécu dix-sept ans en Égypte. Malade, il se redresse sur son lit quand Joseph arrive avec ses deux fils. Il les adopte : Éphraïm et Manassé seront comme Ruben et Siméon. Joseph place l’aîné à la droite de son père, mais Jacob croise les bras et pose la main droite sur le plus jeune. Joseph veut corriger ; Jacob refuse : « Je sais, mon fils, je sais. »',
    'Pas de fête juive attachée à ce passage. De ce chapitre (Genèse 48, 20) vient la bénédiction que les parents donnent à leurs fils le vendredi soir : « Que Dieu te rende semblable à Éphraïm et à Manassé. »'],
  back(P) {
    vcRoom(P);
    vcBed(P, 30, 150, 90, 190);
    P.box(40, 400, 0, 60, 60, 40, 'r4y5k2'); Lib.jar(P, 60, 420, 40, 1.1); Lib.jar(P, 85, 440, 40, 0.9, 'b5y3');
    Lib.lamp(P, 70, 425, 40, 1);
    P.shape([P.I(160, 180, 0.5), P.I(360, 180, 0.5), P.I(360, 340, 0.5), P.I(160, 340, 0.5)], 'r6y3', 1);
    for (let i = 0; i < 5; i++) P.line([P.I(170 + i * 45, 190, 1), P.I(170 + i * 45, 330, 1)], 0.8, { ink: 2 });
    Lib.jar(P, 480, 40, 0, 1.6, 'r5y5k2'); Lib.jar(P, 510, 70, 0, 1.3);
  },
  chars: [
    ch(LK.vc_jacob, { x: 90, y: 260, z: 32, face: 1, clip: 'vc_blessSit', h: 140 }),
    ch(LK.vc_ephraim, { x: 165, y: 215, face: -1, clip: 'kneel', h: 128 }),
    ch(LK.vc_manasseh, { x: 170, y: 305, face: -1, clip: 'kneel', h: 132, t0: 1 }),
    ch(LK.vc_joseph, { x: 280, y: 370, face: -1, clip: 'point', h: 146 }),
    ch(LK.vc_mourner, { h: 126, speed: 14, over: 'carry', hold: { nTop: 'jarhead' }, path: [W(460, 300, 3, 'idle'), W(300, 470, 4, 'idle'), W(460, 300, 0)], look: Object.assign({}, LK.vc_mourner, { robe: 'y1b1', ht: 'r5y4', sash: 'r6' }) }),
    ch(LK.vc_egypt, { x: 440, y: 160, face: -1, clip: 'idle', h: 134, hold: { f: 'staffV' } })
  ]
},
{
  title: 'Juda, jeune lion', book: 'Genèse', ch: 49, ref: 'Genesis 49:9', refFr: 'Genèse 49, 9', accent: 1, feast: null,
  quote: 'Juda is a lion\'s whelp:  to the prey, my son, thou art gone up: resting thou hast couched as a lion, and as a lioness, who shall rouse him?',
  fr: 'Juda est un jeune lion : tu es monté de la proie, mon fils ; il s’est couché, il s’est étendu comme un lion et comme une lionne : qui le fera lever ?',
  more: ['« Rassemblez-vous, fils de Jacob, écoutez Israël votre père. » Au seuil de la mort, Jacob parle à chacun de ses douze fils. Ruben, Siméon et Lévi reçoivent des reproches. Juda reçoit la royauté : ses frères le loueront, le sceptre ne s’écartera pas de lui. Zabulon habitera au bord de la mer, Issacar portera le fardeau, Joseph sera un rameau fertile près d’une source.',
    'Pas de fête juive attachée à ce passage. Le nom même de « Juifs » vient de Juda, et le lion de Juda figure aujourd’hui sur l’emblème de la ville de Jérusalem.'],
  back(P) {
    Lib.sun(P, 180, 140, 28);
    Lib.platform(P, 'y4b3', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    P.box(20, 20, 0, 20, 260, 80, 'y4r3k1'); P.box(20, 20, 0, 300, 20, 80, 'y4r3k1');
    for (const [x, y] of [[40, 60], [200, 60], [40, 240], [200, 240]]) P.box(x, y, 0, 8, 8, 140, 'r4y5k3', 0.8);
    P.shape([P.I(36, 56, 140), P.I(212, 56, 140), P.I(212, 252, 134), P.I(36, 252, 134)], 'r5y4', 1);
    for (let i = 1; i < 6; i++) P.line([P.I(36 + i * 29, 56, 140), P.I(36 + i * 29, 252, 134)], 1, { ink: 1, lvl: 8 });
    vcBed(P, 60, 90, 90, 150, 'y5b4');
    Lib.palm(P, 470, 60, 0, 170, { lean: -12, dates: 1 }); Lib.palm(P, 510, 180, 0, 140, { lean: 10 });
    Lib.grass(P, 50, 'y5b5', [260, 300, 260, 220]);
    Lib.stones(P, 16, 'y3r2k3', [300, 20, 200, 250]);
  },
  chars: [
    ch(LK.vc_jacob, { x: 110, y: 180, z: 32, face: 1, clip: 'vc_blessSit', h: 138, noShadow: 1 }),
    ch(LK.vc_judah, { x: 250, y: 240, face: -1, clip: 'raise', h: 148, hold: { n: 'scepter' } }),
    { beast: 'lion', h: 96, x: 310, y: 300, face: -1 },
    ch(LK.vc_benjamin, { x: 330, y: 170, face: -1, clip: 'kneel', h: 136 }),
    ch(LK.vc_joseph, { x: 400, y: 230, face: -1, clip: 'idle', h: 146 }),
    ch(LK.bro1, { x: 260, y: 390, face: -1, clip: 'kneel', h: 138 }),
    ch(LK.bro2, { x: 360, y: 400, face: -1, clip: 'idle', h: 140, t0: 1 }),
    ch(LK.bro3, { x: 440, y: 340, face: -1, clip: 'talk', h: 140 }),
    ch(LK.isrM, { x: 200, y: 470, face: 1, clip: 'lookup', h: 138 })
  ]
},
{
  title: 'Jacob réuni à son peuple', book: 'Genèse', ch: 49, ref: 'Genesis 49:32', refFr: 'Genèse 49, 33', accent: 2, feast: null,
  quote: 'And when he had ended the commandments, wherewith he instructed his sons, he drew up his feet upon the bed, and died:  and he was gathered to his people.',
  fr: 'Et quand il eut achevé les ordres qu’il donnait à ses fils, il ramena ses pieds sur le lit et expira : et il fut réuni à son peuple.',
  more: ['Jacob a fait promettre à ses fils de l’enterrer avec ses pères, dans la caverne double de Makhpéla, où reposent Abraham et Sara, Isaac et Rébecca, et Léa. Ses paroles achevées, il ramène ses pieds sur le lit et rend le dernier souffle. Joseph se jette sur le visage de son père, pleure et l’embrasse. Les médecins l’embaument ; l’Égypte le pleure soixante-dix jours.',
    'Pas de fête juive attachée à ce passage. L’hébreu dit « il expira » sans employer le mot « mourir » ; le Talmud (Taanit 5b) en tire la parole : « Jacob notre père n’est pas mort. »'],
  back(P) {
    vcRoom(P, { night: 1, floor: 'y3r2b2k1', wl: 'y3r3b1k2', wr: 'y3r3b1k3' });
    vcBed(P, 60, 150, 90, 190, 'b5k2');
    P.box(40, 420, 0, 60, 60, 40, 'r4y5k3');
    P.box(420, 40, 0, 80, 50, 40, 'r4y5k3');
  },
  live(P, t) { Lib.lamp(P, 70, 445, 40, 1.3); Lib.lamp(P, 460, 60, 40, 1.3); const c = P.I(70, 445, 40), d = P.I(460, 60, 40); Lib.flame(P, c[0] + 2, c[1] - 5, 7, 14, t); Lib.flame(P, d[0] + 2, d[1] - 5, 7, 14, t + 1); },
  chars: [
    ch(LK.vc_jacob, { x: 105, y: 250, z: 34, face: 1, clip: 'lie', h: 140, noShadow: 1 }),
    ch(LK.vc_joseph, { x: 175, y: 230, face: -1, clip: 'kneel', h: 146 }),
    ch(LK.vc_judah, { x: 240, y: 320, face: -1, clip: 'vc_mourn', h: 144 }),
    ch(LK.vc_benjamin, { x: 200, y: 400, face: -1, clip: 'sulk', h: 136 }),
    ch(LK.bro1, { x: 300, y: 250, face: -1, clip: 'vc_mourn', h: 140, t0: 1 }),
    ch(LK.bro2, { x: 320, y: 400, face: -1, clip: 'kneel', h: 140 }),
    ch(LK.vc_ephraim, { x: 380, y: 320, face: -1, clip: 'sulk', h: 130 })
  ]
},
{
  title: 'Le deuil de l’aire d’Atad', book: 'Genèse', ch: 50, ref: 'Genesis 50:10', refFr: 'Genèse 50, 10', accent: 1, feast: null,
  quote: 'And they came to the threshing floor of Atad, which is situated beyond the Jordan:  where celebrating the exequies with a great and vehement lamentation, they spent full seven days.',
  fr: 'Et ils arrivèrent à l’aire d’Atad, située au-delà du Jourdain : et là, célébrant les funérailles avec de grandes et vives lamentations, ils passèrent sept jours entiers.',
  more: ['Avec la permission de Pharaon, Joseph monte enterrer son père. Tous les serviteurs de Pharaon, les anciens de l’Égypte, la maison de Joseph et ses frères, des chars et des cavaliers : le cortège est immense. À l’aire d’Atad, au-delà du Jourdain, on mène un deuil de sept jours. Les Cananéens voient cela et nomment le lieu Abel-Mitsraïm, « le deuil de l’Égypte ».',
    'Pas de fête juive attachée à ce passage. La tradition rattache à ces sept jours le deuil juif de sept jours, la chiva, observé depuis par les proches d’un défunt.'],
  back(P) {
    Lib.cloud(P, 250, 150, 170, 34, 'k2b1'); Lib.cloud(P, 760, 130, 150, 30, 'k2b1');
    Lib.platform(P, 'y4r2b1', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    const riv = [[380, 0], [420, 120], [470, 260], [540, 330], [540, 400], [450, 290], [380, 140], [330, 0]]; P.shape(riv.map(p => P.I(p[0], p[1], 0.6)), 'b5y1', 1); Lib.waves(P, [350, 40, 120, 250], 8, 1, 2);
    Lib.mound(P, 90, 70, 80, 90, 'y4r3k2'); Lib.mound(P, 200, 40, 50, 50, 'y4b3k1');
    P.shape(P.ell(230, 300, 0.5, 120, 110, 30), 'y6r2', 1.1);
    for (let i = 0; i < 40; i++) { const a = P.r() * TAU, r = Math.sqrt(P.r()) * 100, c = P.I(230 + Math.cos(a) * r, 300 + Math.sin(a) * r * 0.9, 1); P.line([[c[0] - 5, c[1]], [c[0] + 5, c[1] - 2]], 0.8, { ink: 0, lvl: 8 }); }
    for (let i = 0; i < 14; i++) { const a = i / 14 * TAU; if (Math.sin(a) > 0.3) continue; P.box(230 + Math.cos(a) * 124 - 8, 300 + Math.sin(a) * 114 - 8, 0, 16, 16, 10, 'y3r2k3', 0.7); }
    Lib.palm(P, 40, 300, 0, 150, { lean: 10 }); Lib.stones(P, 16, 'y3r2k3', [20, 400, 300, 120]);
  },
  front(P) { for (let i = 0; i < 14; i++) { const a = i / 14 * TAU; if (Math.sin(a) <= 0.3) continue; P.box(230 + Math.cos(a) * 124 - 8, 300 + Math.sin(a) * 114 - 8, 0, 16, 16, 10, 'y3r2k3', 0.7); } },
  chars: [
    vcCoffin(160, 275, { pall: 'b6k2' }),
    ch(LK.vc_joseph, { x: 230, y: 360, face: -1, clip: 'vc_mourn', h: 146 }),
    ch(LK.vc_judah, { x: 150, y: 370, face: 1, clip: 'kneel', h: 144 }),
    ch(LK.bro2, { x: 310, y: 290, face: -1, clip: 'sulk', h: 140 }),
    ch(LK.vc_elder, { x: 300, y: 230, face: -1, clip: 'vc_mourn', h: 140, t0: 1 }),
    ch(LK.vc_mourner, { x: 180, y: 220, face: 1, clip: 'vc_mourn', h: 128, t0: 2 }),
    vcChariot(430, 420), { beast: 'vc_horse', h: 118, x: 363, y: 487, face: -1 },
    ch(LK.shepherd, { x: 90, y: 70, z: 88, face: 1, clip: 'point', h: 120, noShadow: 1 })
  ]
},
{
  title: 'Joseph console ses frères', book: 'Genèse', ch: 50, ref: 'Genesis 50:20', refFr: 'Genèse 50, 20', accent: 2, feast: null,
  quote: 'You thought evil against me:  but God turned it into good, that he might exalt me, as at present you see, and might save many people.',
  fr: 'Vous aviez médité le mal contre moi : mais Dieu l’a tourné en bien, pour m’élever comme vous le voyez à présent, et pour sauver un peuple nombreux.',
  more: ['De retour en Égypte, les frères ont peur : leur père mort, Joseph ne va-t-il pas se venger ? Ils lui font dire que Jacob a demandé le pardon de leur faute, puis viennent se jeter à terre : « Nous sommes tes serviteurs. » Joseph pleure. « Ne craignez pas. Suis-je à la place de Dieu ? » Il promet de les nourrir, eux et leurs enfants, et leur parle au cœur.',
    'Pas de fête juive attachée à ce passage. Ce verset donne la clé que Joseph avait déjà formulée en Genèse 45 : ce que les hommes ont voulu pour le mal, Dieu l’a conduit vers le salut de beaucoup.'],
  back(P) {
    Lib.sun(P, 180, 140, 30);
    vcPyramids(P, [[700, 110, 130], [830, 70, 80], [610, 50, 55]]);
    Lib.platform(P, 'y4r2', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    P.box(20, 20, 0, 180, 500, 26, 'y3r1');
    for (let i = 0; i < 6; i++) for (let j = 0; j < 16; j++) P.fill([P.I(20 + i * 30, 30 + j * 30, 26.5), P.I(48 + i * 30, 30 + j * 30, 26.5), P.I(48 + i * 30, 58 + j * 30, 26.5), P.I(20 + i * 30, 58 + j * 30, 26.5)], (i + j) % 2 ? 'y4r2' : 'y2r1', {});
    for (const y of [60, 200, 340, 480]) vcCol(P, 60, y, 200);
    P.box(40, 40, 222, 30, 470, 20, 'y4r3');
    const riv = [[540, 0], [540, 540], [470, 540], [480, 300], [460, 0]]; P.shape(riv.map(p => P.I(p[0], p[1], 0.6)), 'b5y1', 1); Lib.waves(P, [470, 20, 60, 500], 10, 1, 2);
    for (let i = 0; i < 10; i++) { const c = P.I(455, 40 + i * 50, 0); for (let k = -2; k <= 2; k++) P.line([[c[0] + k * 2, c[1]], [c[0] + k * 5, c[1] - 24]], 0.8, { ink: 0 }); P.fill(P.disc(c[0], c[1] - 26, 4, 8), 'y5b6', {}); }
    Lib.palm(P, 420, 60, 0, 170, { lean: -10, dates: 1 });
    Lib.stones(P, 14, 'y3r2k3', [220, 300, 200, 200]);
  },
  chars: [
    ch(LK.vc_joseph, { x: 180, y: 260, z: 26, face: 1, clip: 'offer', h: 148 }),
    ch(LK.vc_judah, { x: 260, y: 190, face: -1, clip: 'prostrate', h: 144 }),
    ch(LK.vc_benjamin, { x: 270, y: 330, face: -1, clip: 'prostrate', h: 138, t0: 1 }),
    ch(LK.bro1, { x: 370, y: 240, face: -1, clip: 'prostrate', h: 140, t0: 2 }),
    ch(LK.bro3, { x: 390, y: 390, face: -1, clip: 'bow', h: 140 }),
    ch(LK.bro2, { x: 270, y: 470, face: -1, clip: 'kneel', h: 140 }),
    ch(LK.vc_egypt, { x: 110, y: 120, z: 26, face: 1, clip: 'guard', hold: { n: 'spear' }, h: 138 })
  ]
},
{
  title: 'Le cercueil de Joseph', book: 'Genèse', ch: 50, ref: 'Genesis 50:25', refFr: 'Genèse 50, 26', accent: 0, feast: null,
  quote: 'And he died, being a hundred and ten years old.  And being embalmed, he was laid in a coffin in Egypt.',
  fr: 'Et il mourut, âgé de cent dix ans. Et ayant été embaumé, il fut déposé dans un cercueil en Égypte.',
  more: ['Joseph voit les enfants d’Éphraïm jusqu’à la troisième génération, et les fils de Makhir, fils de Manassé, naissent sur ses genoux. Avant de mourir, il dit à ses frères : « Dieu vous visitera et vous fera remonter vers le pays promis à Abraham, Isaac et Jacob. » Il leur fait jurer d’emporter ses ossements. Il meurt à cent dix ans ; on l’embaume et on le dépose dans un cercueil en Égypte.',
    'Pas de fête juive attachée à ce passage. Le serment sera tenu : Moïse emporte les ossements de Joseph à la sortie d’Égypte (Exode 13, 19), et ils sont enterrés à Sichem (Josué 24, 32). Ce verset clôt la Genèse ; l’assemblée proclame alors « ’Hazak, ’hazak, venit’hazek ».'],
  back(P) {
    Lib.sun(P, 820, 150, 26);
    vcPyramids(P, [[250, 120, 140], [380, 80, 90]]);
    Lib.platform(P, 'y5r2', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
    const riv = [[0, 420], [540, 380], [540, 460], [0, 500]]; P.shape(riv.map(p => P.I(p[0], p[1], 0.6)), 'b5y1', 1); Lib.waves(P, [20, 400, 500, 70], 12, 1, 2);
    for (let i = 0; i < 12; i++) { const c = P.I(20 + i * 44, 375 - i * 3, 0); for (let k = -2; k <= 2; k++) P.line([[c[0] + k * 2, c[1]], [c[0] + k * 5, c[1] - 24]], 0.8, { ink: 0 }); P.fill(P.disc(c[0], c[1] - 26, 4, 8), 'y5b6', {}); }
    Lib.palm(P, 60, 60, 0, 170, { lean: 12, dates: 1 }); Lib.palm(P, 470, 80, 0, 160, { lean: -12 }); Lib.palm(P, 40, 320, 0, 130, { lean: 8 });
    for (const [x, y] of [[180, 90], [340, 90]]) { P.box(x, y, 0, 28, 28, 150, 'y3r1'); P.shape([P.I(x, y + 28, 150), P.I(x + 28, y + 28, 150), P.I(x + 14, y + 14, 175)], 'y8r3', 0.9); }
    for (let i = 0; i < 8; i++) { const c = P.I(194, 118, 20 + i * 15); P.fill([[c[0] - 4, c[1]], [c[0] + 4, c[1]], [c[0] + 4, c[1] - 6], [c[0] - 4, c[1] - 6]], i % 2 ? 'b6' : 'r6', {}); }
    Lib.stones(P, 16, 'y4r3k2', [20, 150, 500, 200]);
  },
  chars: [
    vcCoffin(200, 190, { tn: 'y8r3' }),
    ch(LK.vc_egypt, { x: 170, y: 290, face: 1, clip: 'offer', h: 134, hold: { n: 'cup' } }),
    ch(LK.vc_mourner, { x: 380, y: 200, face: -1, clip: 'vc_mourn', h: 128 }),
    ch(LK.vc_ephraim, { x: 330, y: 300, face: -1, clip: 'raise', h: 138, look: Object.assign({}, LK.vc_ephraim, { beard: 'short', bt: 'k7' }) }),
    ch(LK.vc_manasseh, { x: 400, y: 280, face: -1, clip: 'raise', h: 140, t0: 1, look: Object.assign({}, LK.vc_manasseh, { beard: 'long', bt: 'k2', old: 1, hair: 'k2' }) }),
    ch(LK.child, { x: 280, y: 340, face: -1, clip: 'lookup', h: 90 }),
    ch(LK.childG, { x: 250, y: 330, face: -1, clip: 'idle', h: 86 }),
    { draw(P, t) { const a = t * 0.3; Lib.bird(P, 640 + Math.cos(a) * 120, 180 + Math.sin(a) * 30, 1.4, t * 1.3, 'k6r2'); }, depth: 3000 }
  ]
}
];
