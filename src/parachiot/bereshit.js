/* PARACHA BERESHIT · Genèse 1, 1 à 6, 8 · Chabbat 10 octobre 2026 */
const SHEET = { title: 'Bereshit · Au commencement', sub: 'Paracha de la semaine · Chabbat 10 octobre 2026 · Genèse 1, 1 à 6, 8' };
const SCENES = [
{
  title: 'Que la lumière soit', book: 'Genèse', ch: 1, ref: 'Genesis 1:3', refFr: 'Genèse 1, 3', accent: 0, feast: 'Rosh Hashana',
  quote: 'And God said:  Be light made.  And light was made.',
  fr: 'Et Dieu dit : Que la lumière soit faite. Et la lumière fut faite.',
  more: ['Premier jour. La terre est vide, les ténèbres couvrent l’abîme et l’esprit de Dieu plane sur les eaux. Une parole suffit : la lumière paraît, puis elle est séparée des ténèbres. Le récit avance par paroles et par séparations, jour après jour.',
    'Correspondance : <b>Rosh Hashana</b>. Pour Rabbi Eliézer (Talmud, Rosh Hashana 10b), le monde fut créé en Tichri, et la liturgie du Nouvel An le proclame : « aujourd’hui est la naissance du monde ». Bereshit, elle, ouvre le cycle annuel de lecture juste après Simhat Torah.'],
  back(P) {
    nightSky(P, 'b7k4', 110);
    P.halo(640, 330, 300, ['y1', 'y2', 'y3', 'y4r1', 'y5r1', 'y7r2'], { knock: true });
    for (let i = 0; i < 16; i++) { const a = i / 16 * TAU + 0.1, a2 = a + 0.08; P.fill([[640, 330], [640 + Math.cos(a) * 300, 330 + Math.sin(a) * 300], [640 + Math.cos(a2) * 300, 330 + Math.sin(a2) * 300]], 'y2', { noKnock: true }); }
    Lib.platform(P, 'b5y1', 'b5', { h: 70, pebbles: false, strata: [[0, .35, 'b5'], [.35, .7, 'b6k1'], [.7, 1, 'b7k3']] });
    Lib.waves(P, [0, 0, 540, 540], 60, 1, 2);
    P.fill([P.I(0, 0, 0.5), P.I(540, 0, 0.5), P.I(540, 220, 0.5), P.I(0, 300, 0.5)], 'k3', { noKnock: true });
  },
  live(P, t) { for (let i = 0; i < 5; i++) { const u = (t * 0.08 + i / 5) % 1, c = P.I(80 + u * 400, 470 - u * 120 + Math.sin(u * 9 + i) * 30, 2); P.line([[c[0] - 30, c[1]], [c[0] - 12, c[1] - 6], [c[0] + 6, c[1] + 2], [c[0] + 26, c[1] - 5]], 1.4, { ink: 0, lvl: 6 }); } },
  chars: [{ draw(P, t) { const a = t * 0.4, x = 500 + Math.cos(a) * 220, y = 470 + Math.sin(a) * 60; Lib.bird(P, x, y, 2.2, t * 1.4, 'y1'); }, depth: 3000 }]
},
{
  title: 'Adam nomme les animaux', book: 'Genèse', ch: 2, ref: 'Genesis 2:19', refFr: 'Genèse 2, 19', accent: 2, feast: null,
  quote: 'And the Lord God having formed out of the ground all the beasts of the earth, and all the fowls of the air, brought them to Adam to see what he would call them:  for whatsoever Adam called any living creature the same is its name.',
  fr: 'Le Seigneur Dieu, ayant formé de la terre toutes les bêtes des champs et tous les oiseaux du ciel, les amena devant Adam pour voir comment il les nommerait : car tout nom qu’Adam donna à un être vivant est son nom.',
  more: ['Adam est seul dans le jardin. Dieu fait défiler devant lui les bêtes et les oiseaux, et c’est l’homme qui leur donne leur nom. Nommer, c’est comprendre et ordonner. Mais parmi eux, Adam ne trouve pas d’aide qui lui corresponde : la femme viendra ensuite.',
    'Pas de fête juive attachée à ce passage. Les commentateurs voient dans ce premier acte de langage la marque propre de l’humain : la parole qui donne sens au monde.'],
  back(P) {
    Lib.sun(P, 830, 140, 30); Lib.cloud(P, 220, 150, 150, 32, 'b1');
    Lib.platform(P, 'y4b3', 'r3y5k1', { strata: [[0, .3, 'y5b4k1'], [.3, .65, 'r3y5k2'], [.65, 1, 'r4y4k3']] });
    Lib.grass(P, 70);
    for (let i = 0; i < 40; i++) { const c = P.I(20 + P.r() * 500, 20 + P.r() * 500, 0); P.fill(P.disc(c[0], c[1] - 3, 2.4, 7), i % 3 ? 'r8y2' : 'y8', {}); }
    Lib.tree(P, 60, 80, 0, { h: 190, r: 50, can: 'y5b6', fruit: 8, fruitTone: 'y9r1' });
    Lib.palm(P, 40, 300, 0, 170, { lean: 14, dates: 1 }); Lib.bush(P, 480, 80, 0, 26);
    Lib.rock(P, 150, 300, 0, 40, 22, 'y4r3k2');
    const riv = [[540, 60], [460, 140], [520, 260], [540, 300]]; P.shape(riv.map(p => P.I(p[0], p[1], 0.5)), 'b5y1', 1);
  },
  chars: (() => {
    const L = [ch(LK.adam, { x: 150, y: 300, z: 20, face: 1, clip: 'point', h: 146 })];
    const path = [W(520, 90, 0), W(270, 300, 2.5), W(470, 510, 0), W(520, 90, 0, null, { jump: 1 })];
    [['lion', 100], ['deer', 100], ['camel', 118], ['sheep', 76], ['donkey', 96], ['giraffe', 110], ['bull', 96], ['elephant', 84]].forEach(([b, h], i) => L.push({ beast: b, h, speed: 26, t0: i * 5.5, path }));
    L.push({ draw(P, t) { for (let i = 0; i < 4; i++) { const a = t * 0.45 + i * 1.6; Lib.bird(P, 470 + Math.cos(a) * 200, 230 + Math.sin(a * 1.2) * 50, 1.2, t * 2 + i, i % 2 ? 'r6y4' : 'b4'); } }, depth: 3000 });
    return L;
  })()
},
reuse(AT[0], { title: 'Le fruit de l’arbre' }),
{
  title: 'Les chérubins à la porte', book: 'Genèse', ch: 3, ref: 'Genesis 3:24', refFr: 'Genèse 3, 24', accent: 1, feast: null,
  quote: 'And he cast out Adam:  and placed before the paradise of pleasure Cherubims, and a flaming sword, turning every way, to keep the way of the tree of life.',
  fr: 'Et il chassa Adam : et il plaça devant le paradis de délices des chérubins et une épée flamboyante qui tournoyait en tous sens, pour garder le chemin de l’arbre de vie.',
  more: ['Après la faute, Dieu fait à l’homme et à la femme des tuniques de peau et les renvoie du jardin, pour cultiver la terre dont l’homme a été tiré. À l’orient d’Éden veillent les chérubins et la flamme de l’épée : le chemin de l’arbre de vie est désormais gardé.',
    'Pas de fête juive attachée à ce passage. Le midrach (Bereshit Rabba 20, 12) rapporte que dans la Torah de Rabbi Meïr on lisait « tuniques de lumière » (or, avec un aleph) au lieu de « tuniques de peau » (‘or, avec un ‘ayin).'],
  back(P) {
    Lib.sun(P, 180, 150, 26);
    Lib.platform(P, 'y4r3k1', 'r3y5k1', { strata: [[0, .35, 'y4r3k2'], [.35, .7, 'r3y5k2'], [.7, 1, 'r4y4k3']] });
    P.fill([P.I(0, 0, 0.5), P.I(540, 0, 0.5), P.I(540, 230, 0.5), P.I(0, 230, 0.5)], 'y4b4', {});
    Lib.grass(P, 40, 'y5b4', [10, 10, 520, 200]);
    Lib.tree(P, 130, 90, 0, { h: 220, r: 64, blobs: 8, can: 'y5b6', fruit: 14, fruitTone: 'y9r2' });
    Lib.tree(P, 400, 60, 0, { h: 170, r: 44, can: 'y6b5', fruit: 6, fruitTone: 'r8y4' });
    Lib.hedge(P, 0, 238, 230, 238, 60); Lib.hedge(P, 350, 238, 540, 238, 60);
    P.box(226, 230, 0, 26, 26, 120, 'y5r3k2'); P.box(328, 230, 0, 26, 26, 120, 'y5r3k2'); P.box(226, 230, 120, 128, 26, 22, 'y6r4k2');
    for (let i = 0; i < 14; i++) { const c = P.I(40 + P.r() * 460, 300 + P.r() * 220, 0); for (let k = 0; k < 4; k++) P.line([[c[0], c[1]], [c[0] - 8 + k * 5, c[1] - 12 - P.r() * 6]], 0.8); }
    Lib.stones(P, 24, 'y3r2k3', [20, 300, 500, 220]);
  },
  chars: [
    ch(LK.angel, { x: 270, y: 262, face: 1, clip: 'raise', hold: { n: 'sword' }, h: 150, look: Object.assign({}, LK.angel, { wings: 'y3r2' }) }),
    ch(LK.angel, { x: 320, y: 262, face: -1, clip: 'raise', hold: { n: 'sword' }, h: 150, t0: 1.3 }),
    ch(LK.adamSkin, { h: 146, speed: 14, path: [W(300, 300, 1), W(170, 470, 0), W(300, 300, 0, null, { jump: 1 })] }),
    ch(LK.eveSkin, { h: 136, speed: 14, t0: -1.6, path: [W(300, 300, 1), W(170, 470, 0), W(300, 300, 0, null, { jump: 1 })] })
  ]
},
{
  title: 'Les offrandes de Caïn et d’Abel', book: 'Genèse', ch: 4, ref: 'Genesis 4:4', refFr: 'Genèse 4, 4', accent: 2, feast: null,
  quote: 'Abel also offered of the firstlings of his flock, and of their fat:  and the Lord had respect to Abel, and to his offerings.',
  fr: 'Abel offrit aussi des premiers-nés de son troupeau et de leur graisse : et le Seigneur regarda Abel et ses offrandes.',
  more: ['Caïn cultive la terre, Abel garde les brebis. Chacun apporte une offrande. Celle d’Abel est agréée, celle de Caïn ne l’est pas. Caïn s’irrite, son visage s’abat, et Dieu l’avertit : le péché est tapi à la porte, mais tu peux le dominer.',
    'Pas de fête juive attachée à ce récit. Le texte ne dit pas comment l’offrande fut agréée ; l’iconographie a pris l’habitude de le montrer par une fumée qui monte droit, ou qui retombe.'],
  back(P) {
    Lib.cloud(P, 820, 150, 150, 30, 'b1');
    Lib.platform(P, 'y4b3', 'r3y5k1');
    P.fill([P.I(290, 0, 0.5), P.I(540, 0, 0.5), P.I(540, 540, 0.5), P.I(290, 540, 0.5)], 'y5r3k1', {});
    for (let i = 0; i < 12; i++) P.line([P.I(300 + i * 20, 10, 1), P.I(300 + i * 20, 530, 1)], 0.8, { ink: 1, lvl: 7 });
    for (const [x, y] of [[480, 330], [440, 430], [500, 470]]) { const c = P.I(x, y, 0); for (let k = -4; k <= 4; k++) P.line([[c[0] + k * 1.5, c[1]], [c[0] + k * 4, c[1] - 30]], 1.2, { ink: 0 }); P.fill([[c[0] - 20, c[1] - 30], [c[0] + 20, c[1] - 30], [c[0] + 14, c[1] - 40], [c[0] - 14, c[1] - 40]], 'y8r3', {}); }
    Lib.grass(P, 40, 'y5b4', [10, 10, 270, 520]);
    Lib.altar(P, 110, 170, 70, 50, 40); Lib.altar(P, 360, 150, 70, 50, 40, 'y4r3k3');
    for (let i = 0; i < 4; i++) { const c = P.I(380 + i * 12, 170, 46); P.line([[c[0], c[1]], [c[0] + 3, c[1] - 22]], 1.4, { ink: 0 }); }
  },
  live(P, t) { const a = P.I(145, 195, 46); P.halo(a[0], a[1] - 300, 90, ['y1', 'y2', 'y3']); Lib.smoke(P, a[0], a[1] - 10, t, { up: true, h: 300, tn: 'y2k1' }); const b = P.I(395, 175, 46); Lib.flame(P, a[0], a[1], 22, 36, t); Lib.flame(P, b[0], b[1], 16, 20, t + 1); Lib.smoke(P, b[0], b[1], t, { up: false, drift: 170, n: 5, tn: 'k3' }); },
  chars: [
    { beast: 'sheep', h: 64, x: 150, y: 190, z: 46, face: 1, noShadow: 1 },
    ch(LK.abel, { x: 200, y: 260, face: -1, clip: 'kneel', h: 136 }),
    ch(LK.cain, { x: 430, y: 230, face: -1, clip: 'sulk', h: 146 }),
    { beast: 'sheep', h: 66, speed: 7, path: [W(80, 380, 3), W(160, 440, 2), W(80, 380, 0)] },
    { beast: 'sheep', h: 62, x: 60, y: 470, face: 1 }, { beast: 'ram', h: 70, x: 200, y: 480, face: -1 }
  ]
},
{
  title: 'Hénoch marchait avec Dieu', book: 'Genèse', ch: 5, ref: 'Genesis 5:24', refFr: 'Genèse 5, 24', accent: 0, feast: null,
  quote: 'And he walked with God, and was seen no more:  because God took him.',
  fr: 'Et il marcha avec Dieu, et on ne le vit plus : car Dieu l’enleva.',
  more: ['Au milieu de la longue généalogie d’Adam à Noé, un seul nom échappe à la formule « et il mourut ». Hénoch, septième depuis Adam, « marcha avec Dieu », puis disparut. Le texte ne dit rien de plus, et c’est ce silence qui a nourri toute une tradition.',
    'Pas de fête juive attachée à ce verset. La même expression, « marcher avec Dieu », sera dite de Noé quelques versets plus loin (Genèse 6, 9).'],
  back(P) {
    Lib.platform(P, 'y4r2k1', 'y4r3k2');
    const pk = Lib.mound(P, 150, 120, 120, 200, 'y4r3k2').peak;
    P.halo(pk[0], pk[1] - 40, 150, ['y1', 'y2', 'y3', 'y5r1', 'y7r2'], { knock: true });
    for (let i = 0; i < 12; i++) { const a = -Math.PI / 2 + (i - 5.5) * 0.22; P.line([[pk[0] + Math.cos(a) * 60, pk[1] - 40 + Math.sin(a) * 60], [pk[0] + Math.cos(a) * 190, pk[1] - 40 + Math.sin(a) * 190]], 1.6, { ink: 0, lvl: 6 }); }
    const path = [[420, 500], [360, 400], [300, 330], [240, 260], [190, 190]]; for (let i = 0; i < path.length - 1; i++) { const a = path[i], b = path[i + 1]; for (let k = 0; k < 5; k++) { const c = P.I(lerp(a[0], b[0], k / 5), lerp(a[1], b[1], k / 5), 0); P.shape(Lib.bumpy(P, c[0], c[1], 9, 5, 5), 'y3r2k2', 0.6); } }
    Lib.city(P, 380, 50, 150, 140, 5, 'y3r2', 4);
    Lib.stones(P, 20, 'y3r2k3', [20, 300, 300, 200]); Lib.palm(P, 470, 260, 0, 150, { lean: -12 });
  },
  chars: [
    ch(LK.enoch, { h: 142, speed: 12, path: [W(420, 500, 1), W(300, 330, 0), W(190, 190, 2, 'lookup'), W(420, 500, 0, null, { jump: 1 })] }),
    ch(LK.isrW, { x: 470, y: 440, face: -1, clip: 'lookup', h: 128 }),
    ch(LK.isrOld, { x: 500, y: 390, face: -1, clip: 'idle', h: 136, hold: { f: 'staffV' } }),
    ch(LK.child, { x: 440, y: 470, face: -1, clip: 'point', h: 90 })
  ]
}
];
