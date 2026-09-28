/* PARACHA MIKETS · Genèse 41, 1 à 44, 17 · Chabbat 12 décembre 2026 */
Object.assign(LK, {
  mk_pharaoh: { skin: 'y6r5k1', hs: 'short', hair: 'k8', beard: 'short', bt: 'b6k2', robe: 'y1', len: 'ankle', trim: 1, cloak: 'b6r2', sash: 'y8r2', head: 'tall', ht: 'y1r1', sleeves: 'long', wide: 1 },
  mk_joseph: { skin: 'y5r4', hs: 'short', hair: 'k6r2', robe: 'y1', len: 'ankle', trim: 1, cloak: 'b5y2', sash: 'y8', head: 'cloth', ht: 'y1b2', band: 'y8', sleeves: 'long', wide: 1 },
  mk_josephPlain: { skin: 'y5r4', hs: 'short', hair: 'k6r2', robe: 'y1', len: 'ankle', sash: 'y6', sleeves: 'long', feet: 'sandal' },
  mk_magician: { skin: 'y6r5k1', hs: 'short', hair: 'k8', robe: 'y1', len: 'ankle', cloak: 'y6r3k2', sash: 'r6', head: 'cap', ht: 'k6', sleeves: 'long' },
  mk_steward: { skin: 'y6r5k1', hs: 'short', hair: 'k8', robe: 'y2', len: 'knee', sash: 'y7', head: 'cloth', ht: 'b5y2', band: 'y7', sleeves: 'short' },
  mk_egypt: { skin: 'y6r5k1', hs: 'short', hair: 'k8', robe: 'y1', len: 'knee', sash: 'r5y3', sleeves: 'short', feet: 'bare' },
  mk_egypt2: { skin: 'y6r5k2', hs: 'short', hair: 'k8', robe: 'y2b1', len: 'knee', sash: 'b6', head: 'cap', ht: 'y1', sleeves: 'short', feet: 'bare' },
  mk_butler: { skin: 'y6r5k1', hs: 'short', hair: 'k8', robe: 'y1', len: 'knee', sash: 'r6y3', head: 'cap', ht: 'b5y1', sleeves: 'short' },
  mk_guard: { skin: 'y6r5k1', hs: 'short', hair: 'k8', robe: 'y1', len: 'knee', sash: 'r6', head: 'cap', ht: 'b6y2', feet: 'sandal', sleeves: 'none' },
  mk_benjamin: { skin: 'y5r4', hs: 'curly', hair: 'k6r2', robe: 'b4y2', len: 'knee', sleeves: 'short', sash: 'r6', head: 'cloth', ht: 'y2', band: 'r5' },
  mk_judah: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'full', bt: 'k7', robe: 'r6y3k1', cloak: 'y5r4k1', sash: 'b6', head: 'cloth', ht: 'r5y3', band: 'k6' }
});
Object.assign(CLIPS, {
  mk_tear: { d: 1.6, k: [{ nU: 40, nL: 95, fU: 30, fL: 100, head: 22, lean: 8, nT: 4, fT: -4 }, { nU: 62, nL: 40, fU: 56, fL: 44, head: 28, lean: 12, nT: 4, fT: -4 }] }
});
Object.assign(BEAST, {
  mk_fat: Object.assign({}, BEAST.bull, { tone: 'y7r4', bh: .5 }),
  mk_lean: Object.assign({}, BEAST.calf, { bl: .84, bh: .22, lh: .42, tone: 'y3r2k4' }),
  mk_horse: Object.assign({}, BEAST.donkey, { ears: 'small', tone: 'r5y4k3', mane: 'k8', lh: .5, bl: .74 })
});
function mkEgWall(P, H, tn) {
  Lib.walls(P, { l: tn, r: tadd(tn, 'k1'), cut: 'y4r3k2' }, { h: H });
  for (let x = 0; x < P.L; x += 30) Lib.wallR(P, x, H - 40, 26, 14, ['b6y2', 'r6y4', 'y7r2'][(x / 30) % 3], 0.5);
  for (let y = 0; y < P.L; y += 30) Lib.wallL(P, y, H - 40, 26, 14, ['b6y2', 'r6y4', 'y7r2'][(y / 30) % 3], 0.5);
}
function mkLotus(P, x, y, h, tn = 'y3r1') { P.cyl(x, y, 0, 13, h, tn); for (let i = 1; i < 4; i++) P.shape(P.ell(x, y, h * i / 4, 14, 14, 16), 'b5y3', 0.5); P.cyl(x, y, h, 20, 14, 'y5b5'); P.box(x - 22, y - 22, h + 14, 44, 44, 10, 'y4r3'); }
function mkObelisk(P, x, y, h, tn = 'r3y5k1') {
  const I = (a, b, c) => P.I(a, b, c), s = 13, e = 8;
  P.shape([I(x - s, y + s, 0), I(x + s, y + s, 0), I(x + e, y + e, h), I(x - e, y + e, h)], tn, 1);
  P.shape([I(x + s, y - s, 0), I(x + s, y + s, 0), I(x + e, y + e, h), I(x + e, y - e, h)], tadd(tn, 'k1'), 1);
  P.shape([I(x - e, y + e, h), I(x + e, y + e, h), I(x, y, h + 22)], 'y8r2', 0.8); P.shape([I(x + e, y - e, h), I(x + e, y + e, h), I(x, y, h + 22)], 'y7r3k1', 0.8);
  for (let i = 1; i < 7; i++) { const z = h * i / 8; P.line([I(x - 4, y + s - (s - e) * z / h, z), I(x + 4, y + s - (s - e) * z / h, z)], 0.7); }
}
function mkSilo(P, x, y, r, h, tn = 'y4r3k1') {
  P.cyl(x, y, 0, r, h, tn);
  for (let k = 0; k < 5; k++) P.cyl(x, y, h + k * 9, r * (1 - k * 0.19), 9, tadd(tn, k % 2 ? 'y1' : 'r1'));
  const d = P.I(x + r * 0.7, y + r * 0.7, h * 0.4); P.shape([[d[0] - 7, d[1]], [d[0] + 7, d[1]], [d[0] + 7, d[1] - 18], [d[0] - 7, d[1] - 18]], 'k7r2', 0.6);
}
function mkEars(P, x, y, fat, t) {
  const b = P.I(x, y, 0), sw = Math.sin(t * 1.2 + x) * 3;
  P.line([b, [b[0] + sw, b[1] - 100]], 1.6, { ink: fat ? 0 : 3 });
  for (let i = 0; i < 7; i++) { const s = i % 2 ? 1 : -1, yy = b[1] - 30 - i * 10, xx = b[0] + sw * (i / 7) + s * (fat ? 9 : 6); P.shape(P.disc(xx, yy, fat ? 7 : 3.5, 10).map(p => [p[0], yy + (p[1] - yy) * 1.8]), fat ? 'y8r3' : 'y3r2k4', 0.5); }
}
function mkSack(P, x, y, open, tn = 'y4r3k2') {
  const b = P.I(x, y, 0);
  P.shape([[b[0] - 14, b[1]], [b[0] - 16, b[1] - 20], [b[0] - 10, b[1] - 32], [b[0] + 10, b[1] - 32], [b[0] + 16, b[1] - 20], [b[0] + 14, b[1]]], tn, 0.8);
  if (open) P.shape(P.disc(b[0], b[1] - 32, 10, 12).map(p => [p[0], b[1] - 32 + (p[1] - b[1] + 32) * 0.4]), 'y7r3', 0.6);
  else P.line([[b[0] - 8, b[1] - 30], [b[0] + 8, b[1] - 30]], 1.4, { ink: 1 });
}
const SHEET = { title: 'Mikets · Au bout', sub: 'Paracha de la semaine · Chabbat 12 décembre 2026 · Genèse 41, 1 à 44, 17' };
const SCENES = [
{
  title: 'Les songes de Pharaon', book: 'Genèse', ch: 41, ref: 'Genesis 41:4', refFr: 'Genèse 41, 4', accent: 2, feast: 'Hanoucca',
  quote: 'And they devoured them, whose bodies were very beautiful and well conditioned.  So Pharao awoke.',
  fr: 'Et elles dévorèrent celles dont les corps étaient très beaux et en bon état. Alors Pharaon s’éveilla.',
  more: ['Au bout de deux ans, Pharaon rêve : sept vaches belles et grasses montent du Nil et paissent dans les roseaux, puis sept vaches laides et maigres montent après elles et les dévorent. Il se rendort : sept épis pleins sur une seule tige, puis sept épis maigres, brûlés par le vent d’est, qui les engloutissent. Aucun devin d’Égypte ne sait l’interpréter. L’échanson se souvient alors de Joseph.',
    'Correspondance : <b>Hanoucca</b>. Mikets est presque toujours lu pendant Hanoucca. En 5787, ce Chabbat est le huitième jour de la fête, appelé Zot ’Hanouka d’après Nombres 7, 84. On sort deux rouleaux : le maftir lit les offrandes du huitième jour et l’allumage du chandelier (Nombres 7, 54 à 8, 4), et la haftara (1 Rois 7, 40 à 50) décrit les objets du Temple de Salomon, dont dix chandeliers d’or pur.'],
  back(P) {
    Lib.sun(P, 800, 150, 28); Lib.cloud(P, 230, 140, 170, 32, 'b1r1');
    Lib.platform(P, 'y5r2', 'y5r3k1');
    P.fill([P.I(0, 0, 0.5), P.I(540, 0, 0.5), P.I(540, 120, 0.5), P.I(0, 150, 0.5)], 'b6y1', {});
    Lib.waves(P, [20, 10, 500, 110], 10, 1, 2);
    for (let i = 0; i < 40; i++) { const x = 10 + i * 13, y = 125 + Math.sin(i * 1.7) * 12, c = P.I(x, y, 0); P.line([c, [c[0] + Math.sin(i) * 4, c[1] - 26 - (i % 4) * 6]], 1.2, { ink: 0 }); P.fill(P.disc(c[0] + Math.sin(i) * 4, c[1] - 28 - (i % 4) * 6, 2.5, 6), 'y5b6k1', {}); }
    Lib.grass(P, 40, 'y5b5', [20, 170, 500, 160]);
    Lib.palm(P, 500, 180, 0, 150, { lean: 8, dates: 1 });
    P.box(40, 380, 0, 130, 70, 30, 'r4y5k3'); P.box(40, 380, 30, 130, 70, 8, 'y1b1'); P.box(40, 380, 38, 16, 70, 34, 'y7r3');
    for (const [x, y] of [[40, 380], [170, 380], [40, 450], [170, 450]]) P.box(x - 2, y - 2, 0, 5, 5, 100, 'y7r3k1', 0.6);
    P.shape([P.I(38, 378, 100), P.I(175, 378, 100), P.I(175, 455, 100), P.I(38, 455, 100)], 'b5y2', 0.9);
    Lib.lamp(P, 200, 360, 0, 1);
    Lib.stones(P, 14, 'y3r2k3', [220, 330, 300, 200]);
  },
  live(P, t) { for (let i = 0; i < 2; i++) mkEars(P, 420 + i * 70, 440 - i * 40, i === 0, t); mkEars(P, 350, 480, 0, t); },
  chars: [
    ch(LK.mk_pharaoh, { x: 110, y: 415, z: 38, face: 1, clip: 'sleep', h: 146, noShadow: 1 }),
    { beast: 'mk_fat', h: 100, x: 330, y: 230, face: -1 },
    { beast: 'mk_fat', h: 96, x: 420, y: 280, face: 1 },
    { beast: 'mk_fat', h: 98, x: 250, y: 300, face: -1 },
    { beast: 'mk_lean', h: 100, speed: 14, path: [W(120, 90, 1), W(250, 220, 3), W(120, 90, 0, null, { jump: 1 })] },
    { beast: 'mk_lean', h: 96, speed: 14, t0: 4, path: [W(240, 60, 1), W(360, 180, 3), W(240, 60, 0, null, { jump: 1 })] },
    { beast: 'mk_lean', h: 98, speed: 14, t0: 7, path: [W(380, 50, 1), W(460, 220, 3), W(380, 50, 0, null, { jump: 1 })] }
  ]
},
{
  title: 'Joseph devant Pharaon', book: 'Genèse', ch: 41, ref: 'Genesis 41:16', refFr: 'Genèse 41, 16', accent: 2, feast: null,
  quote: 'Joseph answered:  Without me, God shall give Pharao a prosperous answer.',
  fr: 'Joseph répondit : Sans moi, Dieu donnera à Pharaon une réponse favorable.',
  more: ['On tire Joseph en hâte de la prison ; il se rase, change de vêtements et paraît devant Pharaon. « On dit que tu interprètes les songes. » Joseph renvoie à Dieu. Les deux songes n’en font qu’un : sept années d’abondance vont venir, suivies de sept années de famine. Que Pharaon choisisse un homme sage et fasse engranger le cinquième des récoltes pendant les années d’abondance.',
    'Pas de fête juive attachée à ce passage. Joseph a trente ans quand il se tient devant Pharaon (Genèse 41, 46), treize ans après avoir été vendu par ses frères à dix-sept ans.'],
  back(P) {
    Lib.platform(P, 'y3r1', 'y4r3k1', { h: 50, pebbles: false, strata: [[0, .5, 'y4r3k1'], [.5, 1, 'y4r3k3']] });
    for (let i = 0; i < 9; i++) for (let j = 0; j < 9; j++) if ((i + j) % 2) P.fill([P.I(i * 60, j * 60, 0), P.I(i * 60 + 60, j * 60, 0), P.I(i * 60 + 60, j * 60 + 60, 0), P.I(i * 60, j * 60 + 60, 0)], 'b4y2', {});
    mkEgWall(P, 290, 'y3r2');
    for (let i = 0; i < 5; i++) { const p = P.I(100 + i * 85, 0.5, 150); P.shape([[p[0] - 14, p[1]], [p[0] + 14, p[1]], [p[0] + 10, p[1] - 44], [p[0] - 10, p[1] - 44]], i % 2 ? 'r6y4' : 'b5y3', 0.5); P.shape(P.disc(p[0], p[1] - 52, 9, 12), 'y8r3', 0.5); }
    for (let i = 0; i < 4; i++) { const p = P.I(0.5, 120 + i * 100, 180); P.shape(P.disc(p[0], p[1], 14, 12), 'y8r2', 0.6); P.line([[p[0] - 30, p[1]], [p[0] - 14, p[1]]], 2, { ink: 2 }); P.line([[p[0] + 14, p[1]], [p[0] + 30, p[1]]], 2, { ink: 2 }); }
    P.box(40, 170, 0, 140, 150, 20, 'r4y4'); P.box(60, 190, 20, 110, 110, 14, 'b6r2');
    P.box(80, 215, 34, 44, 60, 50, 'y8r3'); P.box(66, 212, 34, 16, 66, 120, { t: 'y8r3', l: 'y7r4k1', r: 'y7r4k2' });
    mkLotus(P, 230, 60, 250); mkLotus(P, 430, 60, 250); mkLotus(P, 60, 440, 250);
    P.shape([P.I(220, 250, 0.5), P.I(520, 250, 0.5), P.I(520, 330, 0.5), P.I(220, 330, 0.5)], 'r7y3', 1);
    Lib.lamp(P, 200, 170, 0, 1.2); Lib.lamp(P, 200, 350, 0, 1.2);
  },
  chars: [
    ch(LK.mk_pharaoh, { x: 105, y: 245, z: 34, face: 1, clip: 'throne', hold: { n: 'scepter' }, h: 150 }),
    ch(LK.mk_josephPlain, { x: 300, y: 290, face: -1, clip: 'talk', h: 136 }),
    ch(LK.mk_magician, { x: 300, y: 130, face: -1, clip: 'sulk', h: 138 }),
    ch(LK.mk_magician, { x: 370, y: 170, face: -1, clip: 'lookup', h: 136, t0: 1, look: Object.assign({}, LK.mk_magician, { cloak: 'b4k2' }) }),
    ch(LK.mk_butler, { x: 420, y: 400, face: -1, clip: 'point', h: 134, hold: { f: 'cup' } }),
    ch(LK.mk_guard, { x: 60, y: 120, face: 1, clip: 'guard', hold: { n: 'spear' }, h: 140 }),
    ch(LK.mk_guard, { x: 110, y: 380, face: 1, clip: 'guard', hold: { n: 'spear' }, h: 140, t0: 1.3 })
  ]
},
{
  title: 'L’anneau et le char', book: 'Genèse', ch: 41, ref: 'Genesis 41:42', refFr: 'Genèse 41, 42', accent: 0, feast: null,
  quote: 'And he took his ring from his own hand, and gave it into his hand:  and he put upon him a robe of silk, and put a chain of gold about his neck.',
  fr: 'Et il ôta l’anneau de sa main et le mit dans la main de Joseph : il le revêtit d’une robe de soie et lui mit au cou un collier d’or.',
  more: ['Pharaon fait de Joseph le second du royaume : « Sans toi, nul ne lèvera la main ni le pied dans tout le pays d’Égypte. » Il lui donne son anneau, une robe fine et un collier d’or, le fait monter sur son second char, et l’on crie devant lui « Abrekh ! ». Il lui donne un nom égyptien, Tsafnath-Panéa’h, et pour femme Asnath, fille de Poti-Phéra, prêtre d’On.',
    'Pas de fête juive attachée à ce passage. Avant la famine naissent à Joseph deux fils, Manassé et Éphraïm. C’est par leurs noms que les pères bénissent leurs fils le vendredi soir : « Que Dieu te rende semblable à Éphraïm et à Manassé » (Genèse 48, 20).'],
  back(P) {
    Lib.sun(P, 180, 140, 30);
    Lib.platform(P, 'y5r2', 'y5r3k1');
    P.fill([P.I(0, 250, 0.5), P.I(540, 250, 0.5), P.I(540, 350, 0.5), P.I(0, 350, 0.5)], 'y3r1', {});
    for (let i = 0; i < 9; i++) P.line([P.I(i * 60, 252, 1), P.I(i * 60 + 30, 348, 1)], 0.4);
    P.box(20, 20, 0, 70, 60, 180, 'y3r2k1'); P.box(20, 150, 0, 70, 60, 180, 'y3r2k1'); P.box(20, 80, 120, 70, 70, 40, 'y4r2k1');
    mkObelisk(P, 170, 200, 200); mkObelisk(P, 430, 200, 200);
    Lib.palm(P, 300, 60, 0, 170, { lean: -8, dates: 1 }); Lib.palm(P, 500, 80, 0, 150, { lean: 12 });
    Lib.city(P, 140, 20, 120, 110, 4, 'y2r1', 41);
    P.box(275, 286, 18, 50, 30, 4, 'r5y6k2');
    Lib.stones(P, 16, 'y3r2k3', [20, 380, 500, 140]);
  },
  chars: [
    ch(LK.mk_joseph, { x: 300, y: 300, z: 22, face: 1, clip: 'raise', h: 138, noShadow: 1 }),
    { draw(P) {
      const I = (a, b, c) => P.I(a, b, c);
      P.line([I(326, 300, 26), I(410, 305, 44)], 2.4, { ink: 3 });
      P.shape([I(280, 316, 22), I(326, 316, 22), I(326, 316, 40), I(280, 316, 34)], 'y7r3', 0.9);
      P.shape([I(326, 284, 22), I(326, 316, 22), I(326, 316, 60), I(326, 300, 66), I(326, 284, 60)], 'r6y5', 1); P.line([I(326, 288, 44), I(326, 312, 44)], 1.6, { ink: 0 });
      const w = []; for (let k = 0; k < 20; k++) { const a = k / 20 * TAU; w.push(I(300 + Math.cos(a) * 26, 320, 26 + Math.sin(a) * 26)); } P.shape(w, 'r5y6k3', 1.2);
      for (let k = 0; k < 6; k++) { const a = k / 6 * Math.PI; P.line([I(300 + Math.cos(a) * 24, 320, 26 + Math.sin(a) * 24), I(300 - Math.cos(a) * 24, 320, 26 - Math.sin(a) * 24)], 0.9); }
    }, depth: 640 },
    { beast: 'mk_horse', h: 118, x: 420, y: 285, face: 1 },
    { beast: 'mk_horse', h: 114, x: 430, y: 325, face: 1 },
    ch(LK.mk_steward, { x: 500, y: 230, face: 1, clip: 'raise', h: 136 }),
    ch(LK.mk_egypt, { x: 380, y: 430, face: -1, clip: 'kneel', h: 134 }),
    ch(LK.mk_egypt2, { x: 470, y: 420, face: -1, clip: 'prostrate', h: 134 }),
    ch(LK.mk_egypt, { x: 180, y: 420, face: 1, clip: 'kneel', h: 132, look: Object.assign({}, LK.maid, { robe: 'y1b1' }) }),
    ch(LK.mk_egypt2, { x: 240, y: 200, face: 1, clip: 'bow', h: 134 })
  ]
},
{
  title: 'Les greniers d’Égypte', book: 'Genèse', ch: 41, ref: 'Genesis 41:49', refFr: 'Genèse 41, 49', accent: 0, feast: null,
  quote: 'And there was so great abundance of wheat, that it was equal to the sand of the sea, and the plenty exceeded measure.',
  fr: 'Et il y eut une si grande abondance de blé qu’elle égalait le sable de la mer, et l’abondance dépassait toute mesure.',
  more: ['Pendant les sept années d’abondance, Joseph parcourt l’Égypte et amasse le blé dans les villes, chaque ville gardant la récolte des champs d’alentour. Le grain s’entasse comme le sable de la mer, au point qu’on cesse de le compter. Puis viennent les années de famine : elle frappe tous les pays, et l’Égypte seule a du pain.',
    'Pas de fête juive attachée à ce passage. Quand le peuple affamé crie vers Pharaon, celui-ci répond : « Allez vers Joseph ; faites ce qu’il vous dira » (Genèse 41, 55).'],
  back(P) {
    Lib.sun(P, 820, 150, 28); Lib.cloud(P, 250, 130, 150, 28, 'b1');
    Lib.platform(P, 'y5r2', 'y5r3k1');
    Lib.field(P, 300, 330, 220, 190, 6, 'y8r3');
    for (const [x, y] of [[70, 70], [170, 50], [270, 40], [380, 40]]) mkSilo(P, x, y, 38, 80);
    P.box(440, 60, 0, 70, 60, 50, 'y3r2k1'); P.box(440, 60, 50, 70, 60, 6, 'y4r3k2');
    Lib.mound(P, 120, 190, 40, 30, 'y8r3'); Lib.mound(P, 250, 170, 34, 24, 'y7r3');
    for (let i = 0; i < 5; i++) mkSack(P, 60 + i * 22, 270 + (i % 2) * 14, i % 3 === 0);
    Lib.palm(P, 40, 460, 0, 140, { lean: -10, dates: 1 });
    Lib.stones(P, 14, 'y3r2k3', [20, 300, 260, 220]);
  },
  chars: [
    ch(LK.mk_joseph, { x: 230, y: 330, face: 1, clip: 'point', h: 140 }),
    ch(LK.mk_steward, { x: 170, y: 250, face: 1, clip: 'offer', h: 134, hold: { n: 'scroll' }, look: Object.assign({}, LK.mk_magician, { cloak: 0 }) }),
    ch(LK.mk_egypt, { h: 132, speed: 22, hold: { n: 'sheaf' }, over: 'carry', path: [W(420, 420, 1, 'reap'), W(300, 120, 1, 'kneel'), W(420, 420, 0, null, { jump: 1 })] }),
    ch(LK.mk_egypt2, { h: 132, speed: 22, t0: 5, hold: { n: 'sheaf' }, over: 'carry', path: [W(470, 380, 1, 'reap'), W(330, 110, 1, 'kneel'), W(470, 380, 0, null, { jump: 1 })] }),
    ch(LK.mk_egypt, { x: 380, y: 480, face: -1, clip: 'reap', h: 130, hold: { n: 'sickle' }, t0: 0.7 }),
    ch(LK.mk_egypt2, { x: 470, y: 470, face: -1, clip: 'reap', h: 130, hold: { n: 'sickle' }, t0: 0.2 }),
    { beast: 'donkey', h: 90, x: 120, y: 360, face: 1 }
  ]
},
{
  title: 'Les frères se prosternent', book: 'Genèse', ch: 42, ref: 'Genesis 42:6', refFr: 'Genèse 42, 6', accent: 1, feast: null,
  quote: 'And Joseph was governor in the land of Egypt, and corn was sold by his direction to the people.  And when his brethren had bowed down to him,',
  fr: 'Or Joseph était gouverneur au pays d’Égypte, et le blé se vendait au peuple par ses ordres. Et lorsque ses frères se furent prosternés devant lui,',
  more: ['La famine atteint Canaan. Jacob envoie dix de ses fils acheter du blé en Égypte et garde auprès de lui Benjamin. Ils se prosternent devant le gouverneur sans le reconnaître ; Joseph les reconnaît et se souvient de ses songes. Il leur parle durement par un interprète, les accuse d’être des espions, garde Siméon en otage et exige qu’ils reviennent avec leur plus jeune frère.',
    'Pas de fête juive attachée à ce passage. Ignorant que Joseph les comprend, les frères s’avouent leur faute : « Nous avons vu l’angoisse de son âme quand il nous suppliait, et nous n’avons pas écouté. » Joseph se détourne pour pleurer (Genèse 42, 21 à 24).'],
  back(P) {
    Lib.sun(P, 180, 150, 26);
    Lib.platform(P, 'y4r2', 'y4r3k2');
    P.box(20, 20, 0, 24, 500, 130, 'y3r2k1'); P.box(20, 20, 0, 500, 24, 130, 'y3r2k1');
    for (let i = 0; i < 16; i++) { P.box(20, 26 + i * 31, 130, 24, 14, 12, 'y3r2k1', 0.6); P.box(26 + i * 31, 20, 130, 14, 24, 12, 'y3r2k1', 0.6); }
    mkSilo(P, 380, 80, 40, 80); mkSilo(P, 470, 90, 34, 70);
    P.box(50, 150, 0, 140, 170, 30, 'y4r3k1'); P.box(60, 160, 30, 120, 150, 4, 'r6b3');
    for (const [x, y] of [[55, 155], [185, 155], [55, 315], [185, 315]]) P.box(x - 3, y - 3, 30, 6, 6, 130, 'y7r3k1', 0.6);
    P.shape([P.I(52, 152, 160), P.I(190, 152, 160), P.I(190, 320, 160), P.I(52, 320, 160)], 'y1b2', 0.9);
    P.box(80, 215, 34, 40, 50, 36, 'y8r3');
    for (let i = 0; i < 6; i++) mkSack(P, 300 + (i % 3) * 26, 60 + Math.floor(i / 3) * 24, i === 1);
  },
  chars: [
    ch(LK.mk_joseph, { x: 100, y: 240, z: 34, face: 1, clip: 'throne', h: 146, hold: { n: 'scepter' } }),
    ch(LK.mk_steward, { x: 225, y: 190, face: 1, clip: 'talk', h: 134 }),
    ch(LK.mk_judah, { x: 280, y: 260, face: -1, clip: 'prostrate', h: 140 }),
    ch(LK.bro1, { x: 300, y: 350, face: -1, clip: 'prostrate', h: 140, t0: 0.5 }),
    ch(LK.bro2, { x: 350, y: 200, face: -1, clip: 'prostrate', h: 140, t0: 1 }),
    ch(LK.bro3, { x: 380, y: 290, face: -1, clip: 'prostrate', h: 140, t0: 1.5 }),
    ch(LK.son1, { x: 280, y: 440, face: -1, clip: 'prostrate', h: 138, t0: 2 }),
    { beast: 'donkey', h: 92, x: 470, y: 400, face: -1 }, { beast: 'donkey', h: 88, x: 480, y: 300, face: -1 }
  ]
},
{
  title: 'L’argent dans les sacs', book: 'Genèse', ch: 42, ref: 'Genesis 42:27', refFr: 'Genèse 42, 27', accent: 2, feast: null,
  quote: 'And one of them opening his sack, to give his beast provender in the inn, saw the money in the sack\'s mouth,',
  fr: 'Et l’un d’eux, ouvrant son sac pour donner du fourrage à sa bête à l’hôtellerie, vit l’argent à l’entrée du sac,',
  more: ['Sur le chemin du retour, à l’étape, l’un des frères ouvre son sac pour nourrir son âne et y trouve son argent. « Qu’est-ce que Dieu nous a fait ? » disent-ils, le cœur défaillant. Arrivés chez Jacob, chacun trouve son argent dans son sac. Jacob refuse de laisser partir Benjamin : « Vous me privez de mes enfants. »',
    'Pas de fête juive attachée à ce passage. Ruben offre ses deux fils en garantie, et Jacob refuse. C’est Juda qui obtiendra son accord en se portant lui-même garant de Benjamin (Genèse 42, 37 et 43, 8 à 9).'],
  back(P) {
    nightSky(P, 'b6r3k3', 90); Lib.moon(P, 780, 170, 20);
    Lib.platform(P, 'y3r2b1k1', 'y3r3b2k2');
    P.box(20, 20, 0, 20, 500, 60, 'y3r2k2'); P.box(20, 20, 0, 500, 20, 60, 'y3r2k2');
    P.box(250, 60, 0, 120, 30, 26, 'y3r2k3'); P.box(255, 64, 20, 110, 22, 6, 'y6r3');
    Lib.well(P, 460, 150, 28);
    Lib.tree(P, 90, 80, 0, { h: 180, r: 55, blobs: 8, can: 'y3b6k3', trunk: 'r4y3k5' });
    P.box(60, 400, 0, 50, 50, 2, 'k2', 0.4); Lib.stones(P, 7, 'k4', [65, 405, 40, 40]);
    mkSack(P, 270, 300, 1); mkSack(P, 330, 380, 0); mkSack(P, 200, 380, 0); mkSack(P, 400, 330, 0);
    Lib.stones(P, 16, 'y2r2b2k2', [20, 200, 500, 320]);
  },
  live(P, t) {
    const f = P.I(85, 425, 0); Lib.flame(P, f[0], f[1], 18, 26, t);
    const c = P.I(270, 300, 32); for (let i = 0; i < 6; i++) { const on = (t * 2 + i * 0.37) % 1 < 0.5; P.shape(P.disc(c[0] - 8 + (i % 3) * 8, c[1] - 2 + Math.floor(i / 3) * 4, 3.5, 8), on ? 'y2' : 'y6r2', 0.4); }
    P.halo(c[0], c[1] - 4, 26, ['y1', 'y2']);
  },
  chars: [
    ch(LK.son1, { x: 300, y: 300, face: -1, clip: 'kneel', h: 138 }),
    ch(LK.bro1, { x: 360, y: 250, face: -1, clip: 'stagger', h: 140 }),
    ch(LK.mk_judah, { x: 230, y: 250, face: 1, clip: 'lookup', h: 142 }),
    ch(LK.bro3, { x: 330, y: 440, face: -1, clip: 'point', h: 138, t0: 1 }),
    { beast: 'donkey', h: 92, x: 290, y: 120, face: -1 },
    { beast: 'donkey', h: 90, x: 350, y: 130, face: 1 },
    { beast: 'donkey', h: 94, speed: 8, path: [W(460, 400, 3), W(480, 460, 2), W(460, 400, 0)] }
  ]
},
{
  title: 'Le repas chez Joseph', book: 'Genèse', ch: 43, ref: 'Genesis 43:34', refFr: 'Genèse 43, 34', accent: 0, feast: null,
  quote: 'Taking the messes which they received of him:  and the greater mess came to Benjamin, so that it exceeded by five parts.  And they drank, and were merry with him.',
  fr: 'Ils prirent les portions qu’ils reçurent de lui : et la plus grande échut à Benjamin, et elle dépassait les autres de cinq parts. Et ils burent, et se réjouirent avec lui.',
  more: ['Poussés par la faim, les frères reviennent avec Benjamin, le double de l’argent et des présents : baume, miel, aromates, pistaches et amandes. Joseph les fait entrer chez lui pour midi. En voyant Benjamin, le fils de sa mère, il sort en hâte pleurer dans sa chambre, puis revient et se contient. On sert Joseph à part, les frères à part, les Égyptiens à part, et les frères sont placés par ordre d’âge, à leur grand étonnement.',
    'Pas de fête juive attachée à ce passage. Le texte précise que les Égyptiens ne pouvaient pas manger avec les Hébreux, car c’était pour eux une abomination (Genèse 43, 32).'],
  back(P) {
    Lib.platform(P, 'y3r1', 'y4r3k1', { h: 50, pebbles: false, strata: [[0, .5, 'y4r3k1'], [.5, 1, 'y4r3k3']] });
    mkEgWall(P, 270, 'y4r2');
    for (let i = 0; i < 4; i++) { const p = P.I(0.5, 90 + i * 120, 130); P.shape([[p[0] - 16, p[1]], [p[0] + 16, p[1]], [p[0] + 16, p[1] - 50], [p[0] - 16, p[1] - 50]], 'b6k2', 0.6); }
    P.box(40, 60, 0, 130, 100, 16, 'r4y4'); P.box(70, 80, 16, 70, 50, 26, 'y8r3');
    for (let i = 0; i < 3; i++) { const c = P.I(85 + i * 20, 100, 42); P.shape(P.disc(c[0], c[1] - 3, 6, 10), ['y7r4', 'r8b3', 'y6r2'][i], 0.5); }
    P.box(330, 60, 0, 150, 40, 26, 'y5r3k2'); for (let i = 0; i < 4; i++) { const c = P.I(345 + i * 35, 80, 26); P.shape(P.disc(c[0], c[1] - 3, 6, 10), ['y7r4', 'y2', 'r7y4', 'y6r2'][i], 0.5); }
    P.box(220, 260, 0, 260, 40, 26, 'r4y5k2');
    for (let i = 0; i < 6; i++) { const c = P.I(240 + i * 40, 280, 26); P.shape(P.disc(c[0], c[1] - 3, 6, 10), ['y7r4', 'y2', 'r7y4', 'y6r2', 'r8b3', 'y8'][i], 0.5); }
    for (let i = 0; i < 5; i++) { const c = P.I(235 + (i % 3) * 14, 268 + Math.floor(i / 3) * 14, 26); P.shape(P.disc(c[0], c[1] - 3, 7, 10), ['y8r3', 'r7y4', 'y7r4', 'r8b3', 'y6r2'][i], 0.5); }
    mkLotus(P, 520, 250, 230); mkLotus(P, 200, 520, 230);
    Lib.jar(P, 490, 40, 0, 1.6, 'r5y5k1'); Lib.lamp(P, 190, 230, 0, 1.1);
  },
  chars: [
    ch(LK.mk_joseph, { x: 100, y: 115, z: 16, face: 1, clip: 'eat', h: 144 }),
    ch(LK.mk_egypt2, { x: 380, y: 130, face: -1, clip: 'eat', h: 132, look: LK.mk_magician }),
    ch(LK.mk_egypt, { x: 450, y: 130, face: -1, clip: 'eat', h: 132, t0: 1, look: LK.mk_steward }),
    ch(LK.mk_benjamin, { x: 240, y: 320, face: -1, clip: 'eat', h: 128 }),
    ch(LK.mk_judah, { x: 310, y: 320, face: -1, clip: 'eat', h: 136, t0: 0.5 }),
    ch(LK.bro1, { x: 380, y: 320, face: -1, clip: 'eat', h: 134, t0: 1.1 }),
    ch(LK.bro2, { x: 450, y: 320, face: -1, clip: 'eat', h: 134, t0: 1.6 }),
    ch(LK.mk_egypt, { h: 130, speed: 20, hold: { n: 'bread' }, path: [W(470, 470, 2, 'idle'), W(200, 330, 2, 'offer', { f: 1 }), W(470, 470, 0)] })
  ]
},
{
  title: 'La coupe dans le sac de Benjamin', book: 'Genèse', ch: 44, ref: 'Genesis 44:12', refFr: 'Genèse 44, 12', accent: 1, feast: null,
  quote: 'Which when he had searched, beginning at the eldest, and ending at the youngest, he found the cup in Benjamin\'s sack.',
  fr: 'Il fouilla, commençant par l’aîné et finissant par le plus jeune, et il trouva la coupe dans le sac de Benjamin.',
  more: ['Joseph fait remplir les sacs, remettre l’argent de chacun et cacher sa coupe d’argent dans le sac du plus jeune. Au matin, son intendant rattrape les frères. Sûrs de leur innocence, ils jurent que le coupable mourra. On fouille de l’aîné au plus jeune : la coupe est dans le sac de Benjamin. Les frères déchirent leurs vêtements et reviennent tous à la ville.',
    'Pas de fête juive attachée à ce passage. La paracha s’arrête sur ce suspense : Joseph ne veut garder que Benjamin comme esclave. La suivante, Vayigach, s’ouvre sur la plaidoirie de Juda, qui s’offre à la place de son frère.'],
  back(P) {
    P.halo(820, 330, 180, ['r1y1', 'r1y2', 'r2y3', 'r3y5']); Lib.sun(P, 820, 330, 26);
    Lib.platform(P, 'y4r2', 'y4r3k2');
    P.box(20, 20, 0, 24, 300, 110, 'y3r2k1'); P.box(20, 20, 0, 300, 24, 110, 'y3r2k1');
    for (let i = 0; i < 10; i++) { P.box(20, 26 + i * 30, 110, 24, 14, 12, 'y3r2k1', 0.6); P.box(26 + i * 30, 20, 110, 14, 24, 12, 'y3r2k1', 0.6); }
    Lib.city(P, 50, 50, 170, 150, 5, 'y2r1', 44);
    mkObelisk(P, 300, 60, 170);
    const road = [[120, 230], [300, 330], [540, 420]]; for (let i = 0; i < 2; i++) { const a = road[i], b = road[i + 1]; P.fill([P.I(a[0] - 30, a[1] + 30, 0.5), P.I(b[0] - 30, b[1] + 30, 0.5), P.I(b[0] + 30, b[1] - 30, 0.5), P.I(a[0] + 30, a[1] - 30, 0.5)], 'y3r1', {}); }
    mkSack(P, 260, 360, 1); mkSack(P, 350, 330, 1); mkSack(P, 410, 400, 1); mkSack(P, 220, 440, 0);
    for (let i = 0; i < 16; i++) { const c = P.I(250 + P.r() * 30, 370 + P.r() * 25, 0.5); P.fill(P.disc(c[0], c[1], 2.2, 6), 'y7r3', {}); }
    Lib.palm(P, 480, 150, 0, 150, { lean: 10, dates: 1 });
    Lib.stones(P, 16, 'y3r2k3', [300, 420, 220, 100]);
  },
  chars: [
    ch(LK.mk_steward, { x: 300, y: 280, face: -1, clip: 'raise', h: 138, hold: { n: 'cup' } }),
    ch(LK.mk_benjamin, { x: 210, y: 330, face: 1, clip: 'stagger', h: 130 }),
    ch(LK.mk_judah, { x: 330, y: 430, face: -1, clip: 'mk_tear', h: 142 }),
    ch(LK.bro1, { x: 440, y: 330, face: -1, clip: 'mk_tear', h: 140, t0: 0.4 }),
    ch(LK.bro2, { x: 400, y: 470, face: -1, clip: 'mk_tear', h: 140, t0: 0.8 }),
    ch(LK.mk_guard, { x: 370, y: 210, face: -1, clip: 'guard', hold: { n: 'spear' }, h: 140 }),
    { beast: 'donkey', h: 92, x: 150, y: 450, face: 1 }, { beast: 'donkey', h: 90, x: 490, y: 420, face: -1 }
  ]
}
];
