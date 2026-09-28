/* PARACHA HAAZINOU · Deutéronome 32 · Chabbat Chouva, 19 septembre 2026 */
const SHEET = { title: 'Haazinou · Prêtez l’oreille', sub: 'Paracha de la semaine · Chabbat Chouva, 19 septembre 2026 · Deutéronome 32' };
const SCENES = [
{
  title: 'Écoutez, cieux', book: 'Deutéronome', ch: 32, ref: 'Deuteronomy 32:1', refFr: 'Deutéronome 32, 1', accent: 1, feast: 'Chabbat Chouva',
  quote: 'Hear, O ye heavens, the things I speak, let the earth give ear to the words of my mouth.',
  fr: 'Écoutez, cieux, ce que je dis ; que la terre prête l’oreille aux paroles de ma bouche.',
  more: ['Au dernier jour de sa vie, Moïse chante devant tout Israël, avec Josué à ses côtés. Il prend à témoin le ciel et la terre, qui dureront après lui. Le cantique raconte en quelques strophes toute l’histoire : la fidélité de Dieu, l’ingratitude du peuple, l’épreuve, puis la délivrance.',
    'Correspondance : <b>Chabbat Chouva</b>. En 5787, Haazinou est lu le Chabbat du retour, entre Rosh Hashana et Yom Kippour. Dans le rouleau de la Torah, ce cantique est copié à part, en deux colonnes parallèles.'],
  back(P) {
    Lib.sun(P, 830, 140, 28); Lib.cloud(P, 260, 130, 190, 38, 'b1'); Lib.cloud(P, 580, 100, 150, 30, 'b1');
    Lib.platform(P, 'y4r2', 'y4r3k2');
    Lib.rock(P, 170, 170, 0, 60, 40, 'y4r3k2');
    Lib.tent(P, 440, 30, 70, 60, 56, 'y3r2k1'); Lib.tent(P, 470, 130, 60, 50, 50, 'b3y2k1');
    Lib.stones(P, 20, 'y3r2k3', [20, 300, 500, 220]);
  },
  chars: [
    ch(LK.mosesOld, { x: 170, y: 170, z: 38, face: 1, clip: 'sing', h: 150 }),
    ch(LK.joshua, { x: 230, y: 150, face: 1, clip: 'idle', h: 142, hold: { f: 'spear' } }),
    ...[[LK.isrM, 330, 300, 'idle'], [LK.isrW, 380, 260, 'sing'], [LK.isrOld, 400, 360, 'idle'], [LK.isrM2, 300, 420, 'bow'], [LK.childG, 350, 400, 'lookup'], [LK.isrW2, 470, 330, 'idle'], [LK.child, 440, 440, 'point'], [LK.priest, 480, 240, 'idle']].map(([lk, x, y, c], i) => ch(lk, { x, y, face: -1, clip: c, h: lk.child ? 92 : 134, t0: i * 0.7 }))
  ]
},
{
  title: 'Comme la pluie et la rosée', book: 'Deutéronome', ch: 32, ref: 'Deuteronomy 32:2', refFr: 'Deutéronome 32, 2', accent: 2, feast: 'Chabbat Chouva',
  quote: 'Let my doctrine gather as the rain, let my speech distil as the dew, as a shower upon the herb, and as drops upon the grass.',
  fr: 'Que ma doctrine s’amasse comme la pluie, que ma parole distille comme la rosée, comme l’ondée sur l’herbe et comme les gouttes sur le gazon.',
  more: ['La parole est comparée à l’eau qui tombe du ciel : la pluie forte qui pénètre, la rosée discrète qui ne manque jamais. Chaque terre reçoit ce qui lui convient ; chaque herbe en tire sa propre croissance.',
    'Correspondance : <b>Chabbat Chouva</b>. Les commentateurs lisent ici une pédagogie : l’enseignement doit s’adapter à chacun, comme la pluie qui fait pousser des plantes différentes. Les prières pour la rosée et la pluie scandent d’ailleurs le calendrier, de Souccot à Pessah.'],
  back(P) {
    Lib.cloud(P, 520, 150, 360, 70, 'b3k1');
    Lib.platform(P, 'y4b4', 'r3y5k1');
    Lib.grass(P, 120);
    Lib.field(P, 260, 300, 260, 220, 6, 'y6b5');
    for (let i = 0; i < 30; i++) { const c = P.I(20 + P.r() * 220, 20 + P.r() * 500, 0); P.fill(P.disc(c[0], c[1] - 3, 2.6, 7), i % 2 ? 'b4' : 'r7y2', {}); }
    Lib.tree(P, 90, 90, 0, { h: 170, r: 46, can: 'y5b6' }); Lib.bush(P, 450, 90, 0, 24);
  },
  live(P, t) { Lib.rain(P, t, { n: 70, clip: (x, y) => x > 320 && x < 740 && y > 190 && y < 780 }); for (let i = 0; i < 16; i++) { const c = P.I(40 + (i * 61) % 220, 60 + (i * 97) % 460, 6); const on = (t * 0.8 + i * 0.13) % 1 < 0.5; if (on) P.fill(P.disc(c[0], c[1], 2.4, 8), 'b3', { noKnock: false }); } },
  chars: [
    ch(LK.shepherd, { x: 180, y: 380, face: 1, clip: 'lookup', h: 140, hold: { f: 'staffV' } }),
    { beast: 'sheep', h: 62, speed: 6, path: [W(120, 440, 3), W(200, 480, 2), W(120, 440, 0)] }, { beast: 'sheep', h: 60, x: 90, y: 330, face: 1 }
  ]
},
{
  title: 'L’aigle et ses petits', book: 'Deutéronome', ch: 32, ref: 'Deuteronomy 32:11', refFr: 'Deutéronome 32, 11', accent: 0, feast: 'Chabbat Chouva',
  quote: 'As the eagle enticing her young to fly, and hovering over them, he spread his wings, and hath taken him and carried him on his shoulders.',
  fr: 'Comme l’aigle qui incite ses petits à voler et plane au-dessus d’eux, il a déployé ses ailes, il l’a pris et l’a porté sur ses épaules.',
  more: ['Dieu a trouvé son peuple « dans une terre déserte, dans un lieu d’horreur et de vaste solitude ». Il l’a entouré, instruit, gardé comme la prunelle de l’œil. Puis l’image de l’aigle : il remue son nid, plane au-dessus des aiglons et les porte sur ses ailes.',
    'Correspondance : <b>Chabbat Chouva</b>. L’image rejoint Exode 19, 4 : « je vous ai portés sur des ailes d’aigle ». Rachi y explique que l’aigle porte ses petits sur ses ailes et non dans ses serres : la flèche du chasseur l’atteindrait lui avant eux.'],
  back(P) {
    Lib.cloud(P, 200, 180, 170, 34, 'b1'); Lib.cloud(P, 820, 120, 140, 28, 'b1');
    Lib.platform(P, 'y4r3k1', 'y4r3k2');
    const m = Lib.mound(P, 180, 170, 150, 300, 'y4r3k2', { px: 20 });
    const n = m.peak; P.shape(smooth([[n[0] - 34, n[1] + 6], [n[0] - 20, n[1] - 12], [n[0] + 20, n[1] - 12], [n[0] + 34, n[1] + 6], [n[0], n[1] + 14]], 3), 'r5y5k3', 1);
    for (let i = 0; i < 7; i++) P.line([[n[0] - 30 + i * 9, n[1] - 8], [n[0] - 24 + i * 9, n[1] + 8]], 0.7);
    Lib.stones(P, 24, 'y3r2k3', [300, 250, 220, 270]);
    Lib.tent(P, 420, 380, 80, 70, 60, 'y3r2k1');
  },
  chars: [
    { draw(P, t) {
      const n = P.I(180, 170, 300); for (let i = 0; i < 2; i++) { const b = [n[0] - 10 + i * 18, n[1] - 14]; P.shape(P.disc(b[0], b[1], 6, 10), 'y2k2', 0.6); P.fill(P.disc(b[0] + 3, b[1] - 2, 1, 5), 'k9', { noKnock: true }); }
      const a = t * 0.5, x = 520 + Math.cos(a) * 200, y = 250 + Math.sin(a) * 60, f = Math.sin(t * 2.4);
      const L = (s) => [[x, y], [x + s * 60, y - 30 * f - 10], [x + s * 110, y - 10 - 40 * f], [x + s * 90, y + 6], [x + s * 50, y + 10]];
      for (const s of [-1, 1]) { P.shape(smooth(L(s), 2), 'r5y5k4', 1); for (let k = 1; k < 5; k++) P.line([[x + s * 20 * k, y + 2], [x + s * (22 * k + 8), y - 24 * f * k / 4]], 0.6); }
      P.shape(smooth([[x - 12, y], [x, y - 10], [x + 14, y - 4], [x + 20, y - 12], [x + 26, y - 8], [x + 18, y + 4], [x - 4, y + 12], [x - 22, y + 18]], 2), 'r5y5k4', 0.9);
      P.shape(P.disc(x + 22, y - 10, 5, 10), 'y1', 0.7); P.fill([[x + 26, y - 10], [x + 32, y - 8], [x + 26, y - 6]], 'y8', {});
      P.shape(P.disc(x + 2, y - 12, 6, 10), 'y2k2', 0.6);
    }, depth: 3000 }
  ]
},
{
  title: 'Monte sur le mont Nebo', book: 'Deutéronome', ch: 32, ref: 'Deuteronomy 32:49', refFr: 'Deutéronome 32, 49', accent: 1, feast: 'Chabbat Chouva',
  quote: 'Go up into this mountain Abarim, (that is to say, of passages,) unto mount Nebo, which is in the land of Moab over against Jericho:  and see the land of Chanaan, which I will deliver to the children of Israel to possess, and die thou in the mountain.',
  fr: 'Monte sur cette montagne d’Abarim, (c’est-à-dire des passages,) sur le mont Nebo, qui est au pays de Moab, en face de Jéricho : et vois le pays de Canaan, que je donnerai en possession aux enfants d’Israël, et meurs sur la montagne.',
  more: ['Le jour même où il achève son cantique, Moïse reçoit l’ordre de monter sur le Nebo. Il verra la terre de loin et n’y entrera pas. Il lui reste à bénir les tribus : ce sera la dernière paracha, Vezot haBerakha.',
    'Correspondance : <b>Chabbat Chouva</b>. La tradition note que l’expression « en ce jour même » n’apparaît qu’en trois moments décisifs : l’entrée dans l’arche, la sortie d’Égypte et la mort de Moïse.'],
  back(P) {
    Lib.cloud(P, 820, 150, 150, 30, 'b1');
    Lib.platform(P, 'y4r3k1', 'y4r3k2');
    const m = Lib.mound(P, 150, 150, 140, 260, 'y4r3k3');
    const path = [[470, 480], [400, 380], [320, 300], [250, 240], [190, 190]]; for (let i = 0; i < path.length - 1; i++) { const a = path[i], b = path[i + 1]; for (let k = 0; k < 5; k++) { const c = P.I(lerp(a[0], b[0], k / 5), lerp(a[1], b[1], k / 5), lerp(i * 50, (i + 1) * 50, k / 5) * 0.6); P.shape(Lib.bumpy(P, c[0], c[1], 8, 5, 5), 'y3r2k2', 0.6); } }
    Lib.tent(P, 420, 40, 70, 60, 56, 'y3r2k1'); Lib.tent(P, 470, 150, 60, 50, 50, 'r4y4k1');
  },
  chars: [
    ch(LK.mosesOld, { h: 140, speed: 10, hold: { f: 'staffV' }, path: [W(470, 480, 2), W(320, 300, 0, null, { z: 90 }), W(190, 190, 3, 'lookup', { z: 190 }), W(470, 480, 0, null, { jump: 1 })] }),
    ch(LK.joshua, { x: 440, y: 470, face: -1, clip: 'lookup', h: 140 }),
    ch(LK.isrW, { x: 480, y: 420, face: -1, clip: 'pray', h: 128 }),
    ch(LK.isrOld, { x: 500, y: 500, face: -1, clip: 'idle', h: 134 })
  ]
}
];
