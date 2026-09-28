/* PARACHA VAYERA · Genèse 18, 1 à 22, 24 · Chabbat 31 octobre 2026 */
const SHEET = { title: 'Vayera · Il apparut', sub: 'Paracha de la semaine · Chabbat 31 octobre 2026 · Genèse 18, 1 à 22, 24' };
const SCENES = [
{
  title: 'Les trois visiteurs de Mambré', book: 'Genèse', ch: 18, ref: 'Genesis 18:2', refFr: 'Genèse 18, 2', accent: 2, feast: null,
  quote: 'And when he had lifted up his eyes, there appeared to him three men standing near to him:  and as soon as he saw them, he ran to meet them from the door of his tent, and adored down to the ground.',
  fr: 'Et quand il eut levé les yeux, trois hommes lui apparurent, debout près de lui : et dès qu’il les vit, il courut à leur rencontre depuis l’entrée de sa tente, et se prosterna jusqu’à terre.',
  more: ['Au plus chaud du jour, Abraham, convalescent de sa circoncision, est assis à l’entrée de sa tente près des chênes de Mambré. Trois hommes paraissent. Il court, se prosterne, fait apporter de l’eau pour leurs pieds, du pain, un veau tendre, du lait et du beurre. Sous l’arbre, ils annoncent qu’Isaac naîtra dans un an ; Sara rit dans la tente.',
    'Pas de fête juive attachée à ce passage. Il fonde la mitsva de l’hospitalité (hakhnassat or’him), que la tradition juge « plus grande que l’accueil de la Présence divine ».'],
  back(P) {
    Lib.sun(P, 830, 140, 34);
    Lib.platform(P, 'y4r2', 'y4r3k2');
    Lib.tree(P, 250, 150, 0, { h: 280, r: 90, blobs: 10, can: 'y5b6k1', trunk: 'r5y4k4' });
    Lib.tent(P, 40, 330, 150, 130, 120, 'r5y4k1');
    P.box(230, 230, 0, 90, 50, 26, 'r4y5k2'); for (let i = 0; i < 4; i++) { const c = P.I(245 + i * 20, 250, 26); P.shape(P.disc(c[0], c[1] - 3, 6, 10), ['y7r4', 'y2', 'r7y4', 'y6r2'][i], 0.6); }
    Lib.stones(P, 18, 'y3r2k3', [300, 300, 220, 220]);
    const f = P.I(430, 440, 0); Lib.stones(P, 6, 'k3', [410, 420, 40, 40]);
  },
  live(P, t) { const f = P.I(430, 440, 0); Lib.flame(P, f[0], f[1], 22, 30, t); Lib.smoke(P, f[0], f[1] - 20, t, { n: 4, h: 110, r: 14 }); },
  chars: [
    ...[0, 1, 2].map(i => ch(LK.visitor, { x: 290 + i * 45, y: 190 + i * 10, face: -1, clip: 'idle', h: 142, t0: i, hold: { f: 'staffV' } })),
    ch(LK.abraham, { h: 146, speed: 30, path: [W(170, 380, 3, 'idle'), W(270, 280, 3.5, 'prostrate', { f: 1 }), W(170, 380, 0)] }),
    ch(LK.saraiOld, { x: 180, y: 430, face: 1, clip: 'idle', h: 128 }),
    ch(LK.son2, { x: 470, y: 440, face: -1, clip: 'kneel', h: 128 }),
    { beast: 'calf', h: 70, x: 470, y: 360, face: -1 }
  ]
},
{
  title: 'Abraham plaide pour Sodome', book: 'Genèse', ch: 18, ref: 'Genesis 18:23', refFr: 'Genèse 18, 23', accent: 1, feast: null,
  quote: 'And drawing nigh, he said:  Wilt thou destroy the just with the wicked?',
  fr: 'Et s’approchant, il dit : Feras-tu périr le juste avec l’impie ?',
  more: ['Les visiteurs repartent vers Sodome. Dieu confie à Abraham ce qu’il va faire, et Abraham ose discuter : s’il s’y trouve cinquante justes, quarante-cinq, quarante, trente, vingt, dix ? « Le juge de toute la terre ne fera-t-il pas justice ? » Dieu accepte chaque fois. Il ne se trouvera pas dix justes.',
    'Pas de fête juive attachée à ce passage. Le marchandage d’Abraham reste le modèle d’une prière qui argumente avec Dieu au nom de la justice.'],
  back(P) {
    Lib.cloud(P, 250, 150, 170, 34, 'b1');
    Lib.platform(P, 'y4r2k1', 'y4r3k2');
    Lib.mound(P, 150, 150, 110, 70, 'y4r3k2');
    P.fill([P.I(280, 0, 0.5), P.I(540, 0, 0.5), P.I(540, 540, 0.5), P.I(380, 540, 0.5)], 'y4b3', {});
    Lib.city(P, 360, 260, 170, 250, 9, 'y3r3', 21);
    Lib.city(P, 400, 40, 120, 120, 4, 'y3r3', 22);
    Lib.stones(P, 18, 'y3r2k3', [20, 300, 250, 220]);
  },
  chars: [
    ch(LK.abraham, { x: 160, y: 170, z: 60, face: 1, clip: 'talk', h: 146 }),
    ch(LK.visitor, { h: 138, speed: 16, path: [W(250, 250, 0), W(360, 400, 0), W(250, 250, 0, null, { jump: 1 })] }),
    ch(LK.visitor, { h: 138, speed: 16, t0: 2, path: [W(250, 250, 0), W(360, 400, 0), W(250, 250, 0, null, { jump: 1 })] })
  ]
},
{
  title: 'La femme de Lot', book: 'Genèse', ch: 19, ref: 'Genesis 19:26', refFr: 'Genèse 19, 26', accent: 1, feast: null,
  quote: 'And his wife looking behind her, was turned into a statue of salt.',
  fr: 'Et sa femme, ayant regardé derrière elle, fut changée en statue de sel.',
  more: ['Les deux anges pressent Lot de fuir avec sa femme et ses deux filles : « Ne regarde pas derrière toi. » Le soufre et le feu tombent sur Sodome et Gomorrhe. La femme de Lot se retourne et devient une statue de sel ; Lot et ses filles gagnent Tsoar, puis la montagne.',
    'Pas de fête juive attachée à ce passage. Au sud de la mer Morte, le mont Sodome, massif de sel, porte encore des piliers que la tradition populaire associe à ce récit.'],
  back(P) {
    Lib.platform(P, 'y4r3k1', 'y4r3k2');
    Lib.city(P, 330, 20, 190, 190, 8, 'y3r3k2', 31);
    Lib.mound(P, 80, 440, 70, 80, 'y4r3k3');
    P.fill([P.I(0, 0, 0.5), P.I(160, 0, 0.5), P.I(0, 200, 0.5)], 'b4y1', {});
    Lib.stones(P, 22, 'y3r2k3', [20, 250, 500, 280]);
  },
  live(P, t) {
    const c = P.I(425, 115, 40); P.halo(c[0], c[1] - 40, 200, ['r1y2', 'r2y3', 'r3y5', 'r5y6'], { sq: 0.8 });
    for (let i = 0; i < 5; i++) { const q = P.I(350 + i * 35, 40 + (i * 37) % 150, 50); Lib.flame(P, q[0], q[1], 30, 60, t + i); }
    Lib.smoke(P, c[0], c[1] - 60, t, { h: 260, r: 50, tn: 'k4r1' });
    const r = rng(3); for (let i = 0; i < 26; i++) { const x = 300 + r() * 600, u = (t * 0.6 + r()) % 1, y = u * 500; P.line([[x, y], [x - 10, y + 22]], 2.4, { ink: 1 }); P.fill(P.disc(x - 10, y + 22, 3, 6), 'r7y8', { noKnock: true }); }
  },
  chars: [
    ch(LK.saltWife, { x: 280, y: 290, face: 1, clip: 'still', h: 136 }),
    ch(LK.lot, { h: 140, speed: 22, path: [W(260, 330, 0), W(90, 500, 0), W(260, 330, 0, null, { jump: 1 })] }),
    ch(LK.lotDau, { h: 128, speed: 22, t0: -1.8, path: [W(260, 330, 0), W(90, 500, 0), W(260, 330, 0, null, { jump: 1 })] }),
    ch(LK.lotDau, { h: 124, speed: 22, t0: -3.4, path: [W(260, 330, 0), W(90, 500, 0), W(260, 330, 0, null, { jump: 1 })], look: Object.assign({}, LK.lotDau, { robe: 'y5b4', ht: 'r4' }) })
  ]
},
{
  title: 'Le festin du sevrage d’Isaac', book: 'Genèse', ch: 21, ref: 'Genesis 21:8', refFr: 'Genèse 21, 8', accent: 0, feast: 'Rosh Hashana',
  quote: 'And the child grew, and was weaned:  and Abraham made a great feast on the day of his weaning.',
  fr: 'Et l’enfant grandit, et fut sevré : et Abraham fit un grand festin le jour de son sevrage.',
  more: ['La promesse s’est accomplie : Sara, à quatre-vingt-dix ans, a enfanté Isaac, « il rira », car « Dieu m’a donné sujet de rire ». Le jour où l’enfant est sevré, Abraham donne un grand festin. C’est là que Sara voit Ismaël se moquer, et que tout bascule pour Agar.',
    'Correspondance : <b>Rosh Hashana</b>. Le chapitre 21 de la Genèse, naissance d’Isaac et renvoi d’Agar, est lu le premier jour de la fête. La tradition rattache au même jour la visite divine à Sara, qui « se souvint » d’elle.'],
  back(P) {
    Lib.sun(P, 820, 140, 28);
    Lib.platform(P, 'y4r2', 'y4r3k2');
    Lib.tent(P, 30, 40, 180, 150, 130, 'r5y4k1');
    for (const [x, y] of [[250, 40], [480, 40], [250, 240], [480, 240]]) P.box(x, y, 0, 6, 6, 120, 'r4y5k3', 0.7);
    P.shape([P.I(250, 40, 120), P.I(486, 40, 120), P.I(486, 246, 120), P.I(250, 246, 120)], 'b5y2', 1);
    P.box(290, 110, 0, 150, 50, 24, 'r4y5k2'); for (let i = 0; i < 6; i++) { const c = P.I(300 + i * 24, 135, 24); P.shape(P.disc(c[0], c[1] - 3, 6, 10), ['y7r4', 'y2', 'r7y4', 'y6r2', 'r8b3', 'y8'][i], 0.6); }
    Lib.lamp(P, 460, 290, 0, 1.2);
    const f = P.I(120, 430, 0); Lib.stones(P, 6, 'k3', [100, 410, 40, 40]); P.line([P.I(90, 430, 40), P.I(150, 430, 40)], 2.2);
  },
  live(P, t) { const f = P.I(120, 430, 0); Lib.flame(P, f[0], f[1], 26, 32, t); },
  chars: [
    ch(LK.abraham, { x: 330, y: 200, face: 1, clip: 'bless', h: 146 }),
    ch(LK.saraiOld, { x: 250, y: 290, face: 1, clip: 'cradle', h: 130, hold: { n: 'baby' } }),
    ch(LK.visitor, { x: 330, y: 80, face: 1, clip: 'eat', h: 136, look: LK.isrM }),
    ch(LK.visitor, { x: 400, y: 80, face: 1, clip: 'eat', h: 132, t0: 1, look: LK.isrW }),
    ch(LK.visitor, { x: 450, y: 180, face: -1, clip: 'eat', h: 134, t0: .5, look: LK.isrOld }),
    ch(LK.isrW2, { h: 128, speed: 12, walk: 'dance', path: [W(300, 370, 0), W(420, 420, 0), W(300, 470, 0), W(200, 420, 0)] }),
    ch(LK.ishmael, { h: 100, speed: 30, path: [W(470, 480, 1), W(380, 520, 0), W(470, 480, 0)] })
  ]
},
{
  title: 'Agar et Ismaël au désert', book: 'Genèse', ch: 21, ref: 'Genesis 21:19', refFr: 'Genèse 21, 19', accent: 2, feast: 'Rosh Hashana',
  quote: 'And God opened her eyes:  and she saw a well of water, and went and filled the bottle, and gave the boy to drink.',
  fr: 'Et Dieu lui ouvrit les yeux : et elle vit un puits d’eau, alla remplir l’outre et donna à boire à l’enfant.',
  more: ['Renvoyée avec du pain et une outre d’eau, Agar erre dans le désert de Beer-Shéva. L’eau épuisée, elle laisse l’enfant sous un arbrisseau et s’éloigne « d’une portée d’arc » pour ne pas le voir mourir. Dieu entend la voix de l’enfant, l’ange appelle Agar, et ses yeux s’ouvrent sur un puits.',
    'Correspondance : <b>Rosh Hashana</b>. Ce récit fait partie de la lecture du premier jour de la fête. Selon le midrach, Ismaël fut jugé « là où il était », sur ce qu’il était alors, idée centrale du jugement de Rosh Hashana.'],
  back(P) {
    Lib.sun(P, 170, 150, 32);
    Lib.platform(P, 'y5r3', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
    Lib.mound(P, 470, 60, 80, 70, 'y5r3k1'); Lib.mound(P, 60, 60, 60, 50, 'y5r3k1');
    Lib.well(P, 330, 250, 34);
    Lib.bush(P, 170, 360, 0, 34, 'y5b5k1');
    Lib.stones(P, 26, 'y4r3k2', [20, 20, 500, 500]);
  },
  live(P, t) { const c = P.I(330, 250, 30); P.halo(c[0], c[1] - 10, 70, ['y1', 'y2', 'y3']); },
  chars: [
    ch(LK.ishmael, { x: 175, y: 380, face: 1, clip: 'lie', h: 100 }),
    ch(LK.hagar, { x: 380, y: 290, face: -1, clip: 'fill', h: 134, hold: { n: 'skin' } }),
    ch(LK.angel, { x: 330, y: 170, z: 150, face: 1, clip: 'hover', h: 130, noShadow: 1 })
  ]
},
reuse(AT[2])
];
