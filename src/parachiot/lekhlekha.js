/* PARACHA LEKH LEKHA · Genèse 12, 1 à 17, 27 · Chabbat 24 octobre 2026 */
const SHEET = { title: 'Lekh Lekha · Va pour toi', sub: 'Paracha de la semaine · Chabbat 24 octobre 2026 · Genèse 12, 1 à 17, 27' };
const SCENES = [
{
  title: 'Quitte ton pays', book: 'Genèse', ch: 12, ref: 'Genesis 12:1', refFr: 'Genèse 12, 1', accent: 1, feast: null,
  quote: 'And the Lord said to Abram:  Go forth out of thy country, and from thy kindred, and out of thy father\'s house, and come into the land which I shall shew thee.',
  fr: 'Et le Seigneur dit à Abram : Sors de ton pays, de ta parenté et de la maison de ton père, et viens dans le pays que je te montrerai.',
  more: ['À soixante-quinze ans, Abram quitte Haran avec Saraï sa femme, Lot son neveu, leurs biens et les gens de leur maison. Il part sans connaître la destination : « le pays que je te montrerai ». Toute l’histoire d’Israël commence par ce départ.',
    'Pas de fête juive attachée à ce passage. La tradition compte ce départ parmi les dix épreuves d’Abraham, la première d’une série qui s’achève avec la ligature d’Isaac.'],
  back(P) {
    Lib.sun(P, 820, 150, 28); Lib.cloud(P, 250, 150, 160, 32, 'b1');
    Lib.platform(P, 'y5r2', 'y5r3k1');
    P.box(20, 20, 0, 24, 200, 80, 'y4r3k1'); P.box(20, 20, 0, 200, 24, 80, 'y4r3k1');
    Lib.city(P, 40, 40, 170, 170, 6, 'y3r2', 9);
    P.box(210, 150, 0, 26, 26, 110, 'y4r3k2'); P.box(210, 220, 0, 26, 26, 110, 'y4r3k2'); P.box(210, 150, 110, 26, 96, 22, 'y5r3k2');
    const road = [[236, 185], [320, 260], [420, 380], [520, 520]]; for (let i = 0; i < road.length - 1; i++) { const a = road[i], b = road[i + 1]; P.fill([P.I(a[0] - 25, a[1] + 25, 0.5), P.I(b[0] - 25, b[1] + 25, 0.5), P.I(b[0] + 25, b[1] - 25, 0.5), P.I(a[0] + 25, a[1] - 25, 0.5)], 'y3r1', {}); }
    Lib.palm(P, 470, 120, 0, 160, { lean: 10, dates: 1 }); Lib.palm(P, 90, 420, 0, 140, { lean: -12 });
    Lib.stones(P, 20, 'y4r3k2', [260, 20, 260, 500]);
  },
  chars: (() => {
    const path = [W(240, 190, 0), W(520, 520, 0), W(240, 190, 0, null, { jump: 1 })], L = [];
    const seq = [[LK.abram, 0, { hold: { f: 'staffV' } }], [LK.sarai, 2.4, {}], ['camel', 5.2, { h: 118 }], [LK.lot, 9, {}], ['donkey', 11.5, { h: 94 }], ['sheep', 13.6, { h: 64 }], ['sheep', 14.6, { h: 62 }], [LK.shepherd, 16, { hold: { f: 'staffV' } }], ['camel', 18.6, { h: 112 }]];
    for (const [k, t0, o] of seq) L.push(typeof k === 'string' ? Object.assign({ beast: k, speed: 18, t0, path }, o) : ch(k, Object.assign({ h: 140, speed: 18, t0, path }, o)));
    return L;
  })()
},
{
  title: 'Abram et Lot se séparent', book: 'Genèse', ch: 13, ref: 'Genesis 13:9', refFr: 'Genèse 13, 9', accent: 2, feast: null,
  quote: 'Behold the whole land is before thee:  depart from me, I pray thee:  if thou wilt go to the left hand, I will take the right:  if thou choose the right hand, I will pass to the left.',
  fr: 'Voici que tout le pays est devant toi : sépare-toi de moi, je te prie : si tu vas à gauche, je prendrai la droite ; si tu choisis la droite, je passerai à gauche.',
  more: ['Les troupeaux d’Abram et de Lot sont devenus trop nombreux et leurs bergers se querellent. Abram refuse la dispute entre parents et laisse Lot choisir le premier. Lot lève les yeux vers la plaine du Jourdain, bien arrosée « comme le jardin du Seigneur », et descend vers Sodome.',
    'Pas de fête juive attachée à ce passage. Il sert souvent d’exemple classique de résolution de conflit : céder la première place pour préserver la paix.'],
  back(P) {
    Lib.cloud(P, 800, 140, 150, 30, 'b1');
    Lib.platform(P, 'y4r2k1', 'y4r3k2');
    P.fill([P.I(0, 250, 0.5), P.I(250, 250, 0.5), P.I(270, 540, 0.5), P.I(0, 540, 0.5)], 'y4b4', {});
    const riv = [[0, 420], [100, 400], [180, 450], [260, 430], [270, 470], [180, 490], [100, 440], [0, 460]]; P.shape(riv.map(p => P.I(p[0], p[1], 0.8)), 'b5y1', 0.9);
    Lib.grass(P, 40, 'y5b4', [10, 260, 240, 270]);
    for (const [x, y] of [[40, 300], [120, 330], [200, 290]]) Lib.palm(P, x, y, 0, 110, { lean: 8 });
    Lib.city(P, 20, 470, 120, 60, 3, 'y3r2', 3);
    Lib.mound(P, 330, 200, 70, 50, 'y4r3k2');
    Lib.mound(P, 470, 60, 60, 90, 'y4r3k3'); Lib.stones(P, 18, 'y3r2k3', [300, 280, 220, 240]);
  },
  chars: [
    ch(LK.abram, { x: 320, y: 200, z: 44, face: -1, clip: 'point', h: 142, hold: { f: 'staffV' } }),
    ch(LK.lot, { x: 290, y: 240, z: 30, face: -1, clip: 'lookup', h: 138 }),
    ch(LK.shepherd, { x: 400, y: 400, face: -1, clip: 'talk', h: 134 }),
    ch(LK.bro1, { x: 350, y: 430, face: 1, clip: 'talk', h: 136, t0: 1.2 }),
    { beast: 'sheep', h: 62, speed: 7, path: [W(440, 460, 3), W(500, 500, 2), W(440, 460, 0)] },
    { beast: 'sheep', h: 60, speed: 7, t0: 3, path: [W(300, 480, 3), W(250, 510, 2), W(300, 480, 0)] },
    { beast: 'camel', h: 110, x: 480, y: 330, face: -1 }
  ]
},
{
  title: 'Le pain et le vin de Melchisédech', book: 'Genèse', ch: 14, ref: 'Genesis 14:18', refFr: 'Genèse 14, 18', accent: 1, feast: null,
  quote: 'But Melchisedech, the king of Salem, bringing forth bread and wine, for he was the priest of the most high God,',
  fr: 'Mais Melchisédech, roi de Salem, apportant du pain et du vin, car il était prêtre du Dieu très-haut,',
  more: ['Abram revient vainqueur de la guerre des rois, où il a délivré Lot captif. À sa rencontre sort Melchisédech, roi de Salem et prêtre du Dieu très-haut, avec du pain et du vin. Il bénit Abram, qui lui donne la dîme de tout. Au roi de Sodome, Abram refuse tout butin, « pas même un fil ou une courroie de sandale ».',
    'Pas de fête juive attachée à ce passage. La tradition identifie Salem à Jérusalem, en s’appuyant sur le Psaume 76 : « Sa tente est à Salem, sa demeure à Sion ».'],
  back(P) {
    Lib.sun(P, 180, 150, 26);
    Lib.platform(P, 'y4r2', 'y4r3k2');
    P.box(20, 20, 0, 24, 300, 90, 'y3r2k1'); P.box(20, 20, 0, 300, 24, 90, 'y3r2k1');
    for (let i = 0; i < 12; i++) { P.box(20, 26 + i * 25, 90, 24, 12, 12, 'y3r2k1', 0.7); P.box(26 + i * 25, 20, 90, 12, 24, 12, 'y3r2k1', 0.7); }
    Lib.city(P, 60, 60, 220, 180, 6, 'y2r1', 12);
    P.box(300, 40, 0, 30, 30, 130, 'y3r2k2'); P.box(300, 120, 0, 30, 30, 130, 'y3r2k2'); P.box(300, 40, 130, 30, 110, 24, 'y4r2k2');
    P.box(250, 260, 0, 60, 40, 30, 'r5y4k2'); P.shape(P.ell(265, 280, 31, 12, 12, 12), 'y7r4k1', 0.6); P.shape(P.ell(290, 275, 31, 8, 8, 10), 'r8b3', 0.6);
    Lib.stones(P, 18, 'y3r2k3', [340, 200, 180, 320]);
  },
  chars: [
    ch(LK.melchi, { x: 330, y: 250, face: 1, clip: 'offer', h: 148, hold: { n: 'bread', f: 'cup' } }),
    ch(LK.abram, { x: 400, y: 300, face: -1, clip: 'bow', h: 144 }),
    ch(LK.soldier, { x: 450, y: 360, face: -1, clip: 'guard', hold: { n: 'spear' }, h: 136 }),
    ch(LK.soldier, { x: 480, y: 280, face: -1, clip: 'guard', hold: { n: 'spear' }, h: 134, t0: 1 }),
    ch(LK.lot, { x: 470, y: 440, face: -1, clip: 'idle', h: 136 }),
    { beast: 'camel', h: 112, x: 500, y: 200, face: -1 }, { beast: 'donkey', h: 92, x: 420, y: 480, face: -1 },
    ch(LK.priest, { x: 280, y: 320, face: 1, clip: 'idle', h: 134 })
  ]
},
{
  title: 'Compte les étoiles', book: 'Genèse', ch: 15, ref: 'Genesis 15:5', refFr: 'Genèse 15, 5', accent: 0, feast: null,
  quote: 'And he brought him forth abroad, and said to him:  Look up to heaven and number the stars if thou canst.  And he said to him:  So shall thy seed be.',
  fr: 'Et il le fit sortir dehors et lui dit : Regarde le ciel et compte les étoiles, si tu le peux. Et il lui dit : Ainsi sera ta postérité.',
  more: ['Abram n’a pas d’enfant et s’en inquiète. Dieu le fait sortir sous la nuit et lui montre les étoiles : ainsi sera sa descendance. Abram crut, et cela lui fut compté comme justice. Suit l’alliance « entre les morceaux », scellée par une torche de feu passant entre les animaux partagés.',
    'Pas de fête juive attachée à ce passage. Une tradition rapporte que cette alliance fut conclue un 15 Nissan, la date qui deviendra celle de Pessah.'],
  back(P) {
    nightSky(P, 'b7k4', 200);
    Lib.moon(P, 780, 170, 22);
    for (let i = 0; i < 40; i++) Lib.star(P, 120 + P.r() * 760, 60 + P.r() * 260, 3 + P.r() * 6, 'y8');
    Lib.platform(P, 'y3r2b2k1', 'y3r3b2k2', { strata: [[0, .5, 'y3r3b2k2'], [.5, 1, 'y3r3b3k3']] });
    Lib.tent(P, 90, 200, 150, 120, 110, 'r4y4b2k1');
    Lib.lamp(P, 250, 330, 0, 1.2);
    Lib.stones(P, 24, 'y2r2b3k2', [20, 20, 500, 500]);
  },
  chars: [
    ch(LK.abram, { x: 320, y: 330, face: 1, clip: 'lookup', h: 148 }),
    { beast: 'sheep', h: 60, x: 420, y: 440, face: -1 }, { beast: 'sheep', h: 56, x: 460, y: 400, face: 1 }, { beast: 'ram', h: 64, x: 400, y: 490, face: 1 },
    { draw(P, t) { for (let i = 0; i < 7; i++) { const a = (t * 0.6 + i) % 2 < 1; if (a) Lib.star(P, 200 + i * 100, 90 + (i * 53) % 150, 9, 'y9r1'); } }, depth: 3000 }
  ]
},
{
  title: 'Agar à la source', book: 'Genèse', ch: 16, ref: 'Genesis 16:7', refFr: 'Genèse 16, 7', accent: 2, feast: null,
  quote: 'And the angel of the Lord having found her, by a fountain of water in the wilderness, which is in the way to Sur in the desert,',
  fr: 'Et l’ange du Seigneur la trouva près d’une source d’eau dans le désert, celle qui est sur le chemin de Sur, dans le désert,',
  more: ['Saraï, stérile, donne à Abram sa servante égyptienne Agar. Enceinte, Agar est humiliée par sa maîtresse et s’enfuit vers le désert. L’ange la trouve près d’une source, lui demande de revenir et lui annonce un fils : Ismaël, « Dieu entend ». Agar nomme ce Dieu « El-Roï », le Dieu qui me voit.',
    'Pas de fête juive attachée à ce passage. Le puits prendra le nom de Beer-Lahaï-Roï, « le puits du Vivant qui me voit ».'],
  back(P) {
    Lib.sun(P, 180, 140, 30);
    Lib.platform(P, 'y5r3', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
    Lib.mound(P, 460, 60, 70, 60, 'y5r3k1'); Lib.mound(P, 60, 440, 60, 50, 'y5r3k1');
    P.shape(P.ell(260, 250, 0.5, 70, 50, 26), 'b6y1', 1.1); Lib.waves(P, [210, 215, 100, 70], 6, 1, 2);
    Lib.palm(P, 200, 190, 0, 170, { lean: -14, dates: 1 }); Lib.palm(P, 330, 200, 0, 150, { lean: 16 }); Lib.bush(P, 320, 300, 0, 22, 'y5b5');
    Lib.stones(P, 26, 'y4r3k2', [20, 20, 500, 500]);
    for (let i = 0; i < 6; i++) { const c = P.I(380 + i * 25, 380 + i * 25, 0); P.shape(Lib.bumpy(P, c[0], c[1], 8, 5, 5), 'y3r2k2', 0.6); }
  },
  chars: [
    ch(LK.angel, { x: 330, y: 250, z: 110, face: -1, clip: 'hover', h: 136, noShadow: 1 }),
    ch(LK.hagar, { x: 300, y: 330, face: -1, clip: 'kneel', h: 134 }),
    { draw(P) { Lib.jar(P, 340, 350, 0, 1.2); }, depth: 689 }
  ]
},
{
  title: 'Abram devient Abraham', book: 'Genèse', ch: 17, ref: 'Genesis 17:5', refFr: 'Genèse 17, 5', accent: 1, feast: null,
  quote: 'Neither shall thy name be called any more Abram:  but thou shalt be called Abraham:  because I have made thee a father of many nations.',
  fr: 'Et ton nom ne sera plus Abram : mais tu seras appelé Abraham, parce que je t’ai fait père d’une multitude de nations.',
  more: ['Abram a quatre-vingt-dix-neuf ans. Dieu lui apparaît, il tombe face contre terre. L’alliance est renouvelée : Abram devient Abraham, « père d’une multitude », Saraï devient Sara, et la circoncision devient le signe de l’alliance dans la chair. Isaac est annoncé pour l’année suivante.',
    'Pas de fête juive attachée à ce passage. La circoncision (brit mila) au huitième jour, instituée ici, reste l’un des rites les plus constants de la vie juive.'],
  back(P) {
    const c = [560, 300]; P.halo(c[0], c[1], 300, ['y1', 'y2', 'y3', 'y4r1', 'y6r2'], { knock: true });
    for (let i = 0; i < 18; i++) { const a = i / 18 * TAU; P.line([[c[0] + Math.cos(a) * 70, c[1] + Math.sin(a) * 70], [c[0] + Math.cos(a) * 290, c[1] + Math.sin(a) * 290]], 2, { ink: 0, lvl: 5 }); }
    Lib.platform(P, 'y4r2k1', 'y4r3k2');
    Lib.tent(P, 40, 300, 140, 120, 110, 'r4y4k1'); Lib.tent(P, 60, 120, 110, 100, 90, 'b3y2k1');
    Lib.tree(P, 450, 90, 0, { h: 200, r: 60, can: 'y5b6k1' });
    Lib.stones(P, 20, 'y3r2k3', [200, 200, 300, 300]);
  },
  chars: [
    ch(LK.abram, { x: 320, y: 280, face: 1, clip: 'prostrate', h: 146 }),
    ch(LK.sarai, { x: 200, y: 430, face: 1, clip: 'lookup', h: 132 }),
    ch(LK.ismaelite, { x: 140, y: 470, face: 1, clip: 'idle', h: 136, look: Object.assign({}, LK.shepherd, {}) }),
    ch(LK.ishmael, { x: 250, y: 470, face: 1, clip: 'point', h: 100 })
  ]
}
];
