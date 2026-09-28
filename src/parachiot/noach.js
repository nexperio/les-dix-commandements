/* PARACHA NOA'H · Genèse 6, 9 à 11, 32 · Chabbat 17 octobre 2026 */
const SHEET = { title: 'Noa’h · Noé', sub: 'Paracha de la semaine · Chabbat 17 octobre 2026 · Genèse 6, 9 à 11, 32' };
const SCENES = [
{
  title: 'L’arche en chantier', book: 'Genèse', ch: 6, ref: 'Genesis 6:14', refFr: 'Genèse 6, 14', accent: 1, feast: null,
  quote: 'Make thee an ark of timber planks:  thou shalt make little rooms in the ark, and thou shalt pitch it within and without.',
  fr: 'Fais-toi une arche de planches de bois : tu feras de petites chambres dans l’arche, et tu l’enduiras de poix dedans et dehors.',
  more: ['Noé, « homme juste et intègre dans sa génération », reçoit un plan précis : trois cents coudées de long, cinquante de large, trente de haut, trois étages, une porte sur le côté et une ouverture en haut. L’arche est une caisse, pas un navire : elle ne se dirige pas, elle se laisse porter.',
    'Pas de fête juive attachée à ce passage. Selon un midrach, Noé mit cent vingt ans à bâtir l’arche, pour laisser à ses contemporains le temps de l’interroger et de changer.'],
  back(P) {
    Lib.sun(P, 170, 140, 28); Lib.cloud(P, 820, 150, 150, 30, 'b1');
    Lib.platform(P, 'y4r2k1', 'y4r3k2');
    Lib.stones(P, 20, 'y3r2k3', [20, 20, 500, 500]);
    for (let i = 0; i < 6; i++) { const x = 30 + P.r() * 90, y = 40 + i * 70; P.cyl(x, y, 0, 9 + P.r() * 4, 10, 'r5y5k3', 0.8); }
    for (let i = 0; i < 5; i++) P.box(440, 380 + i * 12, 0 + (i % 2) * 8, 90, 10, 8, 'r4y6k2', 0.8);
    P.box(440, 440, 0, 90, 40, 24, 'r4y6k2'); for (let i = 0; i < 4; i++) P.box(445, 445 + i * 8, 24, 80, 7, 6, 'r4y6k1', 0.6);
    Lib.ark(P, -30, -40, 0, { frame: 1, progress: 0.7 });
    for (const x of [90, 200, 310, 410]) { P.box(x, 115, 0, 6, 6, 100, 'r4y5k3', 0.7); P.box(x, 275, 0, 6, 6, 100, 'r4y5k3', 0.7); P.line([P.I(x, 118, 60), P.I(x, 278, 60)], 1); }
    const c = P.I(200, 380, 0); Lib.jar(P, 200, 380, 0, 1.6, 'k8r1');
  },
  live(P, t) { const c = P.I(200, 380, 0); Lib.flame(P, c[0], c[1] + 2, 18, 18, t); Lib.smoke(P, c[0], c[1] - 40, t, { n: 4, h: 120, r: 14, tn: 'k4' }); },
  chars: [
    ch(LK.noah, { x: 330, y: 300, face: -1, clip: 'hammer', hold: { n: 'hammer' }, h: 142 }),
    ch(LK.son1, { h: 138, speed: 20, over: 'carry', hold: { nTop: 'plank' }, path: [W(470, 420, 1.5), W(360, 330, 1.5), W(470, 420, 0)] }),
    ch(LK.son2, { h: 136, speed: 20, t0: 4, over: 'carry', hold: { nTop: 'plank' }, path: [W(480, 470, 1.5), W(250, 320, 1.5), W(480, 470, 0)] }),
    ch(LK.son1, { x: 170, y: 320, face: 1, clip: 'hammer', hold: { n: 'hammer' }, h: 134, t0: 0.3, look: Object.assign({}, LK.son1, { robe: 'y6b4k1' }) }),
    ch(LK.noahWife, { x: 120, y: 440, face: 1, clip: 'offer', h: 126, hold: { n: 'bread' } })
  ]
},
{
  title: 'Deux à deux', book: 'Genèse', ch: 7, ref: 'Genesis 7:9', refFr: 'Genèse 7, 9', accent: 2, feast: null,
  quote: 'Two and two went in to Noe into the ark, male and female, as the Lord had commanded Noe.',
  fr: 'Deux à deux ils entrèrent auprès de Noé dans l’arche, mâle et femelle, comme le Seigneur l’avait ordonné à Noé.',
  more: ['Sept jours avant la pluie, les animaux viennent à Noé, un couple de chaque espèce, et sept couples des animaux purs. Noé, sa femme, ses trois fils Sem, Cham et Japhet et leurs épouses entrent à leur tour. « Et le Seigneur ferma la porte sur lui. »',
    'Pas de fête juive attachée à ce passage. La paracha Noa’h est lue au mois de ‘Hechvan, celui-là même où, selon le texte, le déluge commença (le deuxième mois, le dix-septième jour).'],
  back(P) {
    Lib.cloud(P, 250, 130, 220, 46, 'k3b2'); Lib.cloud(P, 700, 110, 260, 50, 'k3b2'); Lib.cloud(P, 480, 170, 180, 36, 'k2b2');
    Lib.platform(P, 'y4b2r1', 'y4r3k2');
    Lib.grass(P, 40);
    Lib.ark(P, -40, -60, 0, { door: 1 });
    const I = (x, y, z) => P.I(x, y, z);
    P.shape([I(390, 140, 0), I(390, 190, 0), I(505, 190, 0), I(505, 140, 0)].map((p, i) => i < 2 ? [p[0], p[1] - 50] : p), 'r4y5k2', 1);
    for (let i = 1; i < 8; i++) { const a = P.I(390 + i * 14, 140, 50 - i * 7), b = P.I(390 + i * 14, 190, 50 - i * 7); P.line([a, b], 0.6); }
  },
  chars: (() => {
    const L = [ch(LK.noah, { x: 480, y: 290, face: -1, clip: 'point', h: 142 }), ch(LK.noahWife, { x: 500, y: 250, face: -1, clip: 'idle', h: 126 })];
    const path = [W(260, 530, 0), W(505, 330, 0), W(505, 165, 0), W(395, 165, 0, null, { z: 50 }), W(260, 530, 0, null, { jump: 1 })];
    [['lion', 90], ['lion', 86], ['sheep', 66], ['sheep', 62], ['camel', 108], ['camel', 104], ['giraffe', 100], ['giraffe', 96], ['deer', 86], ['deer', 82]].forEach(([b, h], i) => L.push({ beast: b, h, speed: 24, t0: Math.floor(i / 2) * 7 + (i % 2) * 1.2, path }));
    return L;
  })()
},
{
  title: 'Les eaux montent', book: 'Genèse', ch: 7, ref: 'Genesis 7:18', refFr: 'Genèse 7, 18', accent: 2, feast: null,
  quote: 'For they overflowed exceedingly:  and filled all on the face of the earth:  and the ark was carried upon the waters.',
  fr: 'Car elles débordèrent à l’extrême et couvrirent toute la face de la terre : et l’arche était portée sur les eaux.',
  more: ['Les sources du grand abîme jaillissent, les écluses du ciel s’ouvrent : quarante jours de pluie. Les eaux dépassent les plus hautes montagnes de quinze coudées. Tout ce qui respirait sur la terre sèche périt ; seule l’arche flotte, portée sur les eaux.',
    'Pas de fête juive attachée à ce passage. Le texte hébreu emploie pour l’arche le mot teva, le même que pour la corbeille où sera déposé Moïse enfant.'],
  back(P) {
    Lib.cloud(P, 200, 110, 300, 60, 'k4b3'); Lib.cloud(P, 700, 90, 320, 64, 'k4b3'); Lib.cloud(P, 480, 150, 240, 50, 'k3b3');
    Lib.platform(P, 'b5k1', 'b6', { h: 90, pebbles: false, strata: [[0, .3, 'b6'], [.3, .65, 'b7k1'], [.65, 1, 'b7k3']] });
    for (const [x, y] of [[60, 460], [480, 60]]) { const c = P.I(x, y, 0); P.shape([[c[0] - 30, c[1] + 4], [c[0], c[1] - 26], [c[0] + 30, c[1] + 4]], 'y3r3k3', 1); }
    const r = P.I(90, 120, 0); P.shape([[r[0] - 24, r[1]], [r[0], r[1] - 16], [r[0] + 24, r[1]]], 'r5y3k3', 1);
    Lib.tree(P, 420, 440, -110, { h: 140, r: 32, can: 'y5b6k2' });
    for (let i = 0; i < 7; i++) { const c = P.I(540, 60 + i * 70, -30 - (i % 3) * 20); drawFish(P, c[0], c[1], 14, i % 2 ? 1 : -1, 'y5b3'); }
    Lib.waves(P, [0, 0, 540, 540], 70, 1, 3);
    Lib.ark(P, 0, 10, -20);
  },
  live(P, t) { Lib.rain(P, t, { n: 120 }); if (Math.floor(t * 3) % 5 === 0) { P.line([[780, 120], [750, 190], [770, 196], [735, 270]], 4, { ink: 0, taper: 0.6 }); } for (let i = 0; i < 6; i++) { const u = (t * 0.2 + i / 6) % 1, c = P.I(40 + u * 480, 330 + Math.sin(i * 3) * 150, 2); P.line([[c[0] - 14, c[1]], [c[0] - 5, c[1] - 6], [c[0] + 5, c[1]], [c[0] + 14, c[1] - 6]], 1.1, { ink: 2 }); } },
  chars: [ch(LK.noah, { x: 150, y: 290, z: 55, face: -1, clip: 'lookup', h: 120, noShadow: 1 })]
},
reuse(AT[1]),
{
  title: 'L’arc dans la nuée', book: 'Genèse', ch: 9, ref: 'Genesis 9:13', refFr: 'Genèse 9, 13', accent: 0, feast: null,
  quote: 'I will set my bow in the clouds, and it shall be the sign of a covenant between me and between the earth.',
  fr: 'Je placerai mon arc dans les nuées, et il sera le signe d’une alliance entre moi et la terre.',
  more: ['Sortis de l’arche, Noé et les siens bâtissent un autel. Dieu promet de ne plus maudire la terre et scelle une alliance avec toute chair : l’arc dans la nuée en sera le signe. Noé, « homme de la terre », plante ensuite la première vigne.',
    'Pas de fête juive attachée à ce passage. La tradition prescrit une bénédiction à la vue d’un arc-en-ciel : « Béni sois-Tu… qui Te souviens de l’alliance ». Les sept lois noa’hides, adressées à toute l’humanité, trouvent aussi leur source ici.'],
  back(P) {
    Lib.rainbow(P, 520, 420, 380, 13); Lib.cloud(P, 180, 170, 170, 36, 'b2'); Lib.cloud(P, 830, 150, 150, 32, 'b2');
    Lib.platform(P, 'y4b3', 'y4r3k2');
    Lib.ark(P, -125, -145, 0);
    Lib.grass(P, 50);
    Lib.altar(P, 220, 260, 60, 44, 36);
    Lib.vines(P, 350, 360, 170, 160, 4);
  },
  live(P, t) { const a = P.I(250, 282, 42); Lib.flame(P, a[0], a[1], 20, 30, t); Lib.smoke(P, a[0], a[1] - 12, t, { h: 200, tn: 'k2' }); },
  chars: [
    ch(LK.noah, { x: 290, y: 330, face: -1, clip: 'pray', h: 142 }),
    ch(LK.noahWife, { x: 260, y: 360, face: -1, clip: 'kneel', h: 126 }),
    ch(LK.son1, { x: 180, y: 360, face: 1, clip: 'bow', h: 136 }),
    ch(LK.son2, { x: 330, y: 480, face: 1, clip: 'hammer', hold: { n: 'hammer' }, h: 134 }),
    { beast: 'deer', h: 90, speed: 20, path: [W(140, 200, 0), W(40, 500, 0), W(140, 200, 0, null, { jump: 1 })] },
    { beast: 'sheep', h: 66, speed: 10, path: [W(120, 260, 2), W(90, 420, 3), W(120, 260, 0)] },
    { beast: 'lion', h: 90, speed: 16, path: [W(200, 150, 0), W(500, 200, 0), W(200, 150, 0, null, { jump: 1 })] }
  ]
},
{
  title: 'La tour de Babel', book: 'Genèse', ch: 11, ref: 'Genesis 11:4', refFr: 'Genèse 11, 4', accent: 1, feast: null,
  quote: 'And they said:  Come, let us make a city and a tower, the top whereof may reach to heaven; and let us make our name famous before we be scattered abroad into all lands.',
  fr: 'Et ils dirent : Venez, faisons-nous une ville et une tour dont le sommet atteigne le ciel ; et rendons notre nom célèbre, avant que nous soyons dispersés par toute la terre.',
  more: ['Dans la plaine de Shinéar, les hommes, qui parlent tous une même langue, cuisent des briques au feu et se servent de bitume comme mortier. Ils veulent une tour qui touche le ciel et un nom. Dieu confond leur langage : ils ne se comprennent plus, le chantier s’arrête, et ils se dispersent.',
    'Pas de fête juive attachée à ce récit. Les sages opposent souvent Babel, où l’on bâtit pour « se faire un nom », à la génération suivante, celle d’Abraham, à qui Dieu promet : « je rendrai ton nom grand ».'],
  back(P) {
    Lib.sun(P, 830, 150, 26);
    Lib.platform(P, 'y5r2', 'y5r3k1');
    Lib.tower(P, 250, 230, 5, 330, 66, 'y4r3k1');
    Lib.cloud(P, 470, 90, 180, 36, 'b1'); Lib.cloud(P, 330, 60, 130, 28, 'b1');
    const top = P.I(250, 230, 330); for (let i = 0; i < 5; i++) P.line([[top[0] - 60 + i * 30, top[1] + 10], [top[0] - 60 + i * 30, top[1] - 50]], 1.4);
    P.line([[top[0] - 64, top[1] - 40], [top[0] + 64, top[1] - 40]], 1.2);
    P.box(440, 420, 0, 70, 60, 50, 'r4y4k2'); const k = P.I(475, 480, 20); P.shape([[k[0] - 12, k[1]], [k[0] + 12, k[1]], [k[0] + 12, k[1] - 22], [k[0], k[1] - 30], [k[0] - 12, k[1] - 22]], 'k8r2', 0.8);
    for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) P.box(360 + i * 18, 470 + j * 14, 0, 16, 12, 8 + (i + j) % 2 * 8, 'r5y5k1', 0.6);
    for (let i = 0; i < 3; i++) P.box(70 + i * 22, 470, 0, 20, 14, 10, 'r5y5k1', 0.6);
    P.cyl(150, 470, 0, 18, 16, 'k8r1');
  },
  live(P, t) { const k = P.I(475, 480, 20); Lib.flame(P, k[0], k[1] - 4, 16, 22, t); Lib.smoke(P, P.I(475, 450, 50)[0], P.I(475, 450, 50)[1], t, { n: 4, h: 150, r: 16 }); },
  chars: (() => {
    const L = [];
    const path = [W(420, 500, 1.5, 'bow'), W(300, 420, 0), W(260, 420, 1, 'idle'), W(420, 500, 0)];
    for (let i = 0; i < 4; i++) L.push(ch([LK.son1, LK.son2, LK.bro1, LK.reaper][i], { h: 132, speed: 22, t0: i * 3.5, over: 'carry', hold: { nTop: 'bricks' }, path }));
    L.push(ch(LK.bro2, { x: 250, y: 230, z: 330, face: 1, clip: 'hammer', hold: { n: 'hammer' }, h: 100, noShadow: 1 }));
    L.push(ch(LK.son1, { x: 200, y: 400, face: 1, clip: 'hammer', hold: { n: 'hammer' }, h: 130 }));
    L.push(ch(LK.ismaelite, { x: 110, y: 430, face: 1, clip: 'talk', h: 140 }), ch(LK.isrM, { x: 160, y: 500, face: -1, clip: 'talk', h: 136, t0: 1.2 }));
    return L;
  })()
}
];
