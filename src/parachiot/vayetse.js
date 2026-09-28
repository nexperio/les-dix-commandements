/* PARACHA VAYETSÉ · Genèse 28, 10 à 32, 3 · Chabbat 21 novembre 2026 */
Object.assign(LK, {
  vt_rachel: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k8', robe: 'b5y2', len: 'ankle', head: 'veil', ht: 'r6y3', sash: 'r7', sleeves: 'long', feet: 'sandal' },
  vt_leah: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k6r2', robe: 'r5y4', len: 'floor', head: 'veil', ht: 'y3r1', sash: 'b6', sleeves: 'long' },
  vt_laban: { skin: 'y5r4k1', hs: 'short', hair: 'k3', beard: 'long', bt: 'k3', robe: 'r6b4', cloak: 'y5r3k1', sash: 'y7', head: 'turban', ht: 'y2b1', trim: 1, sleeves: 'long' },
  vt_jacobS: { skin: 'y5r4', hs: 'short', hair: 'k7', beard: 'short', robe: 'r5y5k2', len: 'knee', sleeves: 'short', sash: 'y6r2', head: 'cloth', ht: 'y3r2', band: 'k5', cloak: 'k3y2' }
});
LK.vt_bride = Object.assign({}, LK.vt_leah, { robe: 'y1r1', trim: 1, ht: 'y1', sash: 'r6y4' });
LK.vt_rachelW = Object.assign({}, LK.vt_rachel, { len: 'floor', feet: null });
Object.assign(CLIPS, {
  vt_peel: { d: 1.4, k: [{ nT: 4, nK: -95, fT: 0, fK: -95, lean: 22, head: 18, nU: 60, nL: 60, fU: 50, fL: 70 }, { nT: 4, nK: -95, fT: 0, fK: -95, lean: 24, head: 20, nU: 44, nL: 80, fU: 52, fL: 68 }] },
  vt_swear: { d: 3, k: [{ nU: 125, nL: 10, fU: 10, fL: 20, head: -8, lean: -2, nT: 6, fT: -6 }, { nU: 132, nL: 6, fU: 12, fL: 22, head: -10, lean: -3, nT: 6, fT: -6 }] }
});
Object.assign(PROPS2, {
  vt_stone(P, A, J, M, h, t, lw) { const c = [(J.aN.t[0] + J.aF.t[0]) / 2, (J.aN.t[1] + J.aF.t[1]) / 2 - 0.02], q = M(c); P.shape(Lib.bumpy(P, q[0], q[1], h * 0.06, h * 0.042, 5), 'y3r2k3', lw * 0.7); },
  vt_rod(P, A, J, M, h, t, lw, F, u, n, add) { for (let i = 0; i < 6; i++) { const a = add(A.w, u, -0.1 + i * 0.07), b = add(A.w, u, -0.03 + i * 0.07); P.line([M(a), M(b)], lw * 1.6, { ink: i % 2 ? 2 : 0, lvl: i % 2 ? 7 : 1 }); } }
});
Object.assign(BEAST, {
  vt_speck: Object.assign({}, BEAST.sheep, { tone: 'y1', spots: 1 }),
  vt_goat: { bl: .56, bh: .28, lh: .3, nk: [.12, -48], hd: [.16, 45, .06, .04], tone: 'k6b1', horns: 'bull', ears: 'long', tail: 1 },
  vt_goatS: { bl: .56, bh: .28, lh: .3, nk: [.12, -48], hd: [.16, 45, .06, .04], tone: 'y2', spots: 1, horns: 'bull', ears: 'long', tail: 1 }
});
const vtTrough = (P, x, y, w, d) => { P.box(x, y, 0, w, d, 16, 'y3r2k3'); P.fill([P.I(x + 4, y + 4, 16.5), P.I(x + w - 4, y + 4, 16.5), P.I(x + w - 4, y + d - 4, 16.5), P.I(x + 4, y + d - 4, 16.5)], 'b6y1', {}); };
const vtIdol = (P, x, y, z, s, tn) => { const b = P.I(x, y, z); P.shape([[b[0] - 4 * s, b[1]], [b[0] + 4 * s, b[1]], [b[0] + 3 * s, b[1] - 12 * s], [b[0] - 3 * s, b[1] - 12 * s]], tn, 0.7); P.shape(P.disc(b[0], b[1] - 15 * s, 3.4 * s, 8), tn, 0.7); P.fill(P.disc(b[0] + s, b[1] - 16 * s, 0.8 * s, 5), 'k9', { noKnock: true }); };
const SHEET = { title: 'Vayetsé · Il sortit', sub: 'Paracha de la semaine · Chabbat 21 novembre 2026 · Genèse 28, 10 à 32, 3' };
const SCENES = [
reuse(AT[3], {
  more: ['Jacob quitte Beer-Chéva pour Haran, fuyant la colère d’Ésaü. La nuit le surprend en chemin ; il prend des pierres du lieu pour oreiller. En songe, une échelle relie la terre au ciel, parcourue par des anges qui montent et descendent, et Dieu lui renouvelle la promesse faite à Abraham. Au réveil : « Le Seigneur est en ce lieu, et je ne le savais pas. » Il dresse la pierre en stèle, y verse de l’huile et nomme le lieu Béthel.',
    'Pas de fête juive attachée à ce passage. Rachi relève l’ordre des verbes, monter puis descendre : les anges qui avaient accompagné Jacob dans le pays remontent, et ceux de l’extérieur du pays descendent pour prendre le relais.']
}),
{
  title: 'Rachel au puits', book: 'Genèse', ch: 29, ref: 'Genesis 29:10', refFr: 'Genèse 29, 10', accent: 2, feast: null,
  quote: 'And when Jacob saw her, and knew her to be his cousin german, and that they were the sheep of Laban, his uncle:  he removed the stone wherewith the well was closed.',
  fr: 'Et quand Jacob la vit, et sut qu’elle était sa cousine germaine, et que c’étaient les brebis de Laban, son oncle, il ôta la pierre qui fermait le puits.',
  more: ['Arrivé au pays de l’Orient, Jacob trouve un puits dans les champs, fermé d’une grosse pierre que les bergers ne roulent qu’une fois tous les troupeaux réunis. Rachel, fille de Laban, arrive avec les brebis de son père, car elle est bergère. Jacob roule seul la pierre, abreuve le troupeau, embrasse Rachel et pleure.',
    'Pas de fête juive attachée à ce passage. C’est la troisième rencontre au puits de la Genèse, après le serviteur d’Abraham et Rébecca : le puits y est le lieu où se nouent les mariages des patriarches.'],
  back(P) {
    Lib.sun(P, 800, 140, 30); Lib.cloud(P, 230, 150, 170, 32, 'b1');
    Lib.platform(P, 'y5b3', 'y4r3k2');
    Lib.grass(P, 70, 'y5b5');
    Lib.mound(P, 70, 70, 80, 90, 'y5b4k1'); Lib.mound(P, 470, 50, 70, 70, 'y4b3k2');
    Lib.city(P, 400, 60, 120, 110, 4, 'y3r2', 17);
    Lib.well(P, 260, 250, 36);
    vtTrough(P, 300, 310, 80, 22); vtTrough(P, 190, 300, 22, 70);
    Lib.palm(P, 170, 140, 0, 170, { lean: -14, dates: 1 }); Lib.tree(P, 470, 250, 0, { h: 180, r: 50, can: 'y5b6k1' });
    Lib.stones(P, 18, 'y3r2k3', [20, 380, 500, 140]);
    for (let i = 0; i < 20; i++) { const c = P.I(30 + P.r() * 480, 30 + P.r() * 480, 0); P.fill(P.disc(c[0], c[1] - 2, 2.2, 6), i % 2 ? 'y8' : 'r6b3', {}); }
  },
  chars: [
    { draw(P, t) { const u = (t % 12) / 12, k = u < .25 ? 0 : u < .45 ? (u - .25) / .2 : u < .85 ? 1 : 1 - (u - .85) / .15; P.cyl(260 + k * 62, 250 - k * 40, 26 * (1 - k), 34, 10, { t: 'y3r2k2', s: 'y3r2k3', d: 'y3r3k4' }); }, depth: 540 },
    ch(LK.vt_jacobS, { h: 144, speed: 10, path: [W(210, 250, 3, 'idle', { f: 1 }), W(210, 250, 3, 'haul', { f: 1 }), W(250, 330, 3, 'fill', { f: 1 }), W(210, 250, 0)] }),
    ch(LK.vt_rachel, { x: 340, y: 360, face: -1, clip: 'lookup', h: 132, hold: { f: 'staffV' } }),
    ch(LK.shepherd, { x: 110, y: 330, face: 1, clip: 'rest', h: 132 }),
    ch(LK.shepherd, { x: 140, y: 410, face: 1, clip: 'talk', h: 134, t0: 1, look: Object.assign({}, LK.shepherd, { robe: 'b4y3k1', ht: 'r4y3' }) }),
    { beast: 'sheep', h: 62, speed: 8, path: [W(430, 440, 2), W(360, 340, 4), W(430, 440, 0)] },
    { beast: 'sheep', h: 60, speed: 8, t0: 3, path: [W(470, 400, 2), W(390, 300, 4), W(470, 400, 0)] },
    { beast: 'ram', h: 66, x: 440, y: 350, face: -1 },
    { beast: 'sheep', h: 58, x: 80, y: 470, face: 1 }
  ]
},
{
  title: 'Au matin, c’était Léa', book: 'Genèse', ch: 29, ref: 'Genesis 29:25', refFr: 'Genèse 29, 25', accent: 1, feast: null,
  quote: 'And he said to his father-in-law:  What is it that thou didst mean to do?  did not I serve thee for Rachel?  why hast thou deceived me?',
  fr: 'Et il dit à son beau-père : Qu’as-tu voulu faire ? N’est-ce pas pour Rachel que je t’ai servi ? Pourquoi m’as-tu trompé ?',
  more: ['Jacob sert sept ans pour Rachel, « et ils lui parurent quelques jours, tant il l’aimait ». Laban réunit tous les gens du lieu pour le festin, puis, le soir, conduit auprès de lui Léa, son aînée, voilée. Au matin Jacob découvre la substitution. Laban invoque la coutume du pays et lui donne Rachel après la semaine de noces, contre sept autres années de service.',
    'Pas de fête juive attachée à ce passage. Le Talmud (Méguila 13b) raconte que Jacob avait convenu de signes avec Rachel et que Rachel, pour épargner la honte à sa sœur, les lui transmit.'],
  back(P) {
    Lib.sun(P, 170, 250, 34); Lib.cloud(P, 260, 200, 200, 30, 'r2y2', { noShade: 1 });
    Lib.platform(P, 'y4r3', 'y4r3k2');
    Lib.tent(P, 30, 30, 200, 150, 150, 'r5y4k1');
    for (const [x, y] of [[270, 60], [480, 60], [270, 250], [480, 250]]) P.box(x, y, 0, 6, 6, 120, 'r4y5k3', 0.7);
    P.shape([P.I(270, 60, 120), P.I(486, 60, 120), P.I(486, 256, 120), P.I(270, 256, 120)], 'r6y5', 1);
    for (let i = 1; i < 6; i++) P.line([P.I(270 + i * 36, 60, 120), P.I(270 + i * 36, 256, 120)], 0.6, { ink: 0 });
    P.box(310, 110, 0, 140, 50, 22, 'r4y5k2'); for (let i = 0; i < 5; i++) { const c = P.I(322 + i * 26, 135, 22); P.shape(P.disc(c[0], c[1] - 3, 6, 10), ['y7r4', 'r8b3', 'y2', 'y6r2', 'r7y4'][i], 0.6); }
    Lib.lamp(P, 280, 300, 0, 1); Lib.lamp(P, 470, 300, 0, 1);
    for (let i = 0; i < 4; i++) Lib.jar(P, 60 + i * 22, 220, 0, 1.1, i % 2 ? 'r5y6k1' : 'y4r3k2');
    Lib.stones(P, 16, 'y3r2k3', [20, 380, 500, 140]);
  },
  chars: [
    ch(LK.jacob, { x: 210, y: 300, face: 1, clip: 'talk', h: 146 }),
    ch(LK.vt_laban, { x: 300, y: 230, face: -1, clip: 'offer', h: 146 }),
    ch(LK.vt_bride, { x: 160, y: 250, face: 1, clip: 'bow', h: 132 }),
    ch(LK.vt_rachelW, { x: 430, y: 400, face: -1, clip: 'still', h: 130 }),
    ch(LK.maid, { x: 120, y: 330, face: 1, clip: 'idle', h: 124 }),
    ch(LK.isrM, { x: 360, y: 90, face: 1, clip: 'eat', h: 132 }),
    ch(LK.isrOld, { x: 430, y: 180, face: -1, clip: 'eat', h: 132, t0: 1 }),
    ch(LK.isrW2, { h: 126, speed: 12, walk: 'dance', path: [W(330, 330, 0), W(420, 300, 0), W(380, 450, 0)] })
  ]
},
{
  title: 'Les baguettes écorcées', book: 'Genèse', ch: 30, ref: 'Genesis 30:37', refFr: 'Genèse 30, 37', accent: 0, feast: null,
  quote: 'And Jacob took green rods of poplar, and of almond, and of plane-trees, and pilled them in part:  so when the bark was taken off, in the parts that were pilled, there appeared whiteness:  but the parts that were whole, remained green:  and by this means the colour was divers.',
  fr: 'Et Jacob prit des baguettes vertes de peuplier, d’amandier et de platane, et les écorça en partie : là où l’écorce était ôtée apparut la blancheur, et les parties intactes restèrent vertes ; ainsi la couleur en devint bigarrée.',
  more: ['Après la naissance de Joseph, Jacob veut rentrer chez lui. Laban le retient et lui demande son salaire. Jacob ne demande que les bêtes tachetées, mouchetées et noires qui naîtront du troupeau. Il place aux abreuvoirs des baguettes écorcées en bandes, et les bêtes qui conçoivent devant elles mettent bas des petits rayés et tachetés. L’homme devient extrêmement riche.',
    'Pas de fête juive attachée à ce passage. Jacob dira plus tard à ses femmes que c’est Dieu qui a pris le bétail de leur père pour le lui donner, comme un ange le lui avait montré en songe.'],
  back(P) {
    Lib.sun(P, 820, 150, 26); Lib.cloud(P, 300, 140, 160, 30, 'b1');
    Lib.platform(P, 'y5b3', 'y4r3k2');
    Lib.grass(P, 60, 'y5b5');
    Lib.tree(P, 60, 90, 0, { h: 210, r: 34, blobs: 8, can: 'y4b6k1' }); Lib.tree(P, 120, 60, 0, { h: 190, r: 32, can: 'y5b5k1' });
    Lib.tree(P, 460, 60, 0, { h: 170, r: 50, can: 'y3b3', fruit: 10, fruitTone: 'y1r1' });
    fenceRing(P, 330, 350, 150, -0.2, 1.9, 16);
    vtTrough(P, 200, 200, 130, 24); vtTrough(P, 350, 170, 24, 110);
    for (let i = 0; i < 7; i++) { const a = P.I(210 + i * 17, 212, 14), b = P.I(222 + i * 17, 212, 60); for (let k = 0; k < 5; k++) P.line([[lerp(a[0], b[0], k / 5), lerp(a[1], b[1], k / 5)], [lerp(a[0], b[0], (k + 1) / 5), lerp(a[1], b[1], (k + 1) / 5)]], 2.4, { ink: k % 2 ? 2 : 0, lvl: k % 2 ? 7 : 1 }); }
    for (let i = 0; i < 5; i++) { const a = P.I(362, 180 + i * 20, 14), b = P.I(362, 192 + i * 20, 60); for (let k = 0; k < 5; k++) P.line([[lerp(a[0], b[0], k / 5), lerp(a[1], b[1], k / 5)], [lerp(a[0], b[0], (k + 1) / 5), lerp(a[1], b[1], (k + 1) / 5)]], 2.4, { ink: k % 2 ? 2 : 0, lvl: k % 2 ? 7 : 1 }); }
    for (let i = 0; i < 10; i++) { const c = P.I(80 + P.r() * 80, 250 + P.r() * 80, 0); P.line([[c[0] - 8, c[1]], [c[0] + 8, c[1] - 3]], 1.4, { ink: 2 }); }
  },
  chars: [
    ch(LK.vt_jacobS, { x: 140, y: 240, face: 1, clip: 'vt_peel', h: 140, hold: { n: 'vt_rod', f: 'knife' } }),
    ch(LK.shepherd, { x: 440, y: 150, face: -1, clip: 'idle', h: 132, hold: { f: 'staffV' } }),
    { beast: 'vt_goatS', h: 64, speed: 7, path: [W(250, 260, 3), W(300, 400, 3), W(250, 260, 0)] },
    { beast: 'vt_speck', h: 62, speed: 7, t0: 2, path: [W(390, 250, 3), W(420, 380, 3), W(390, 250, 0)] },
    { beast: 'vt_goat', h: 66, x: 300, y: 250, face: 1 },
    { beast: 'vt_speck', h: 58, x: 350, y: 450, face: -1 },
    { beast: 'vt_goatS', h: 56, x: 240, y: 470, face: 1 },
    { beast: 'ram', h: 70, x: 410, y: 300, face: -1 },
    { beast: 'sheep', h: 60, x: 460, y: 420, face: -1 }
  ]
},
{
  title: 'Rachel assise sur les idoles', book: 'Genèse', ch: 31, ref: 'Genesis 31:34', refFr: 'Genèse 31, 34', accent: 1, feast: null,
  quote: 'She, in haste, hid the idols under the camel\'s furniture, and sat upon them:  and when he had searched all the tent, and found nothing,',
  fr: 'Elle, en hâte, cacha les idoles sous le bât du chameau et s’assit dessus : et quand il eut fouillé toute la tente sans rien trouver,',
  more: ['Jacob s’enfuit avec ses femmes, ses enfants et ses troupeaux pendant que Laban tond ses brebis. Rachel emporte en secret les idoles de son père. Laban les poursuit sept jours et les rattrape sur la montagne de Galaad. Il fouille les tentes de Jacob, de Léa, des deux servantes, puis celle de Rachel, assise sur le bât où elle a caché les idoles. Elle s’excuse de ne pas se lever ; il ne trouve rien.',
    'Pas de fête juive attachée à ce passage. Rachi explique que Rachel voulait détourner son père de l’idolâtrie.'],
  back(P) {
    Lib.cloud(P, 780, 140, 170, 32, 'b1');
    Lib.platform(P, 'y4r2k1', 'y4r3k2');
    Lib.mound(P, 460, 60, 80, 110, 'y4r3k2'); Lib.mound(P, 80, 50, 70, 80, 'y4b2k2');
    Lib.tent(P, 40, 180, 170, 170, 150, 'r4y4b2k1');
    Lib.tent(P, 250, 30, 120, 100, 100, 'b3y3k1');
    P.box(230, 300, 0, 60, 40, 28, 'r6y4k2'); P.box(226, 296, 28, 68, 48, 8, 'b5r3');
    for (let i = 0; i < 4; i++) P.line([P.I(230, 305 + i * 10, 36), P.I(290, 305 + i * 10, 36)], 0.8, { ink: 0 });
    Lib.lamp(P, 330, 280, 0, 1);
    for (let i = 0; i < 4; i++) Lib.jar(P, 90 + i * 24, 390, 0, 1.2, i % 2 ? 'r5y6k1' : 'y4r3k2');
    P.box(120, 430, 0, 50, 30, 20, 'r4y5k3'); P.box(180, 440, 0, 40, 26, 16, 'y4r3k2');
    Lib.stones(P, 18, 'y3r2k3', [300, 300, 220, 220]);
  },
  front(P) { vtIdol(P, 296, 322, 0, 1, 'y7r3k1'); vtIdol(P, 296, 334, 0, 0.8, 'r6y4k2'); },
  chars: [
    ch(LK.vt_rachelW, { x: 260, y: 320, z: 36, face: 1, clip: 'sit', h: 130, noShadow: 1 }),
    ch(LK.vt_laban, { h: 146, speed: 14, path: [W(360, 360, 2.5, 'reach'), W(170, 420, 2.5, 'kneel', { f: -1 }), W(330, 440, 2.5, 'talk', { f: -1 }), W(360, 360, 0)] }),
    ch(LK.jacob, { x: 420, y: 250, face: -1, clip: 'point', h: 146 }),
    ch(LK.vt_leah, { x: 450, y: 330, face: -1, clip: 'idle', h: 130 }),
    ch(LK.isrM, { x: 480, y: 420, face: -1, clip: 'guard', h: 134, hold: { n: 'spear' } }),
    { beast: 'camel', h: 116, x: 380, y: 130, face: -1 },
    { beast: 'camel', h: 108, x: 470, y: 180, face: -1 }
  ]
},
{
  title: 'Le monceau du témoignage', book: 'Genèse', ch: 31, ref: 'Genesis 31:46', refFr: 'Genèse 31, 46', accent: 2, feast: null,
  quote: 'And he said to his brethren:  Bring hither stones.  And they, gathering stones together, made a heap, and they ate upon it.',
  fr: 'Et il dit à ses frères : Apportez des pierres. Et eux, rassemblant des pierres, en firent un monceau, et ils mangèrent dessus.',
  more: ['Jacob reproche à Laban vingt ans de service durs, sous la chaleur du jour et le froid de la nuit, et un salaire changé dix fois. Laban propose une alliance. Jacob dresse une pierre en stèle, les frères élèvent un monceau de pierres, et l’on mange dessus. Le monceau servira de témoin : ni l’un ni l’autre ne le franchira pour nuire.',
    'Pas de fête juive attachée à ce passage. Laban nomme le monceau en araméen, Yegar Sahadouta, et Jacob en hébreu, Galed : ce sont les deux premiers mots araméens de la Torah.'],
  back(P) {
    Lib.sun(P, 180, 150, 28); Lib.cloud(P, 760, 130, 190, 34, 'b1');
    Lib.platform(P, 'y4b2k1', 'y4r3k2', { strata: [[0, .4, 'y4r3k2'], [.4, 1, 'y3r3k3']] });
    Lib.mound(P, 80, 80, 90, 150, 'y4b3k2'); Lib.mound(P, 250, 30, 80, 110, 'y4b3k1'); Lib.mound(P, 470, 60, 70, 90, 'y4r3k2');
    Lib.grass(P, 40, 'y5b4');
    Lib.tent(P, 20, 320, 120, 100, 100, 'r5y4k1'); Lib.tent(P, 420, 150, 110, 100, 100, 'b4r3k1');
    for (let r = 0; r < 4; r++) for (let i = 0; i < 7 - r * 1.5; i++) { const c = P.I(230 + r * 8 + i * 16, 260 + r * 8 + ((i * 7) % 5) * 4, r * 14); P.shape(Lib.bumpy(P, c[0], c[1] - 6, 12, 8, 5), (i + r) % 2 ? 'y3r2k3' : 'y4r2k2', 0.8); }
    P.box(300, 200, 0, 18, 14, 110, { t: 'y3r2k1', l: 'y3r2k2', r: 'y3r3k3' });
    Lib.stones(P, 30, 'y3r2k3', [20, 200, 500, 320]);
  },
  chars: [
    ch(LK.jacob, { x: 260, y: 360, face: 1, clip: 'vt_swear', h: 146 }),
    ch(LK.vt_laban, { x: 380, y: 250, face: -1, clip: 'vt_swear', h: 146, t0: 1 }),
    ch(LK.bro1, { h: 136, speed: 18, over: 'cradle', hold: { n: 'vt_stone' }, path: [W(120, 480, 1), W(230, 330, 1.5, 'bow'), W(120, 480, 0)] }),
    ch(LK.bro2, { h: 138, speed: 18, t0: 3, over: 'cradle', hold: { n: 'vt_stone' }, path: [W(480, 420, 1), W(340, 330, 1.5, 'bow'), W(480, 420, 0)] }),
    ch(LK.isrM2, { x: 350, y: 400, face: -1, clip: 'eat', h: 134 }),
    ch(LK.ismaelite, { x: 420, y: 330, face: -1, clip: 'eat', h: 136, t0: .7 }),
    ch(LK.vt_leah, { x: 150, y: 420, face: 1, clip: 'idle', h: 128 }),
    { beast: 'camel', h: 112, x: 480, y: 480, face: -1 }
  ]
},
{
  title: 'Les camps de Dieu', book: 'Genèse', ch: 32, ref: 'Genesis 32:2', refFr: 'Genèse 32, 3', accent: 0, feast: null,
  quote: 'And when he saw them, he said:  These are the camps of God, and he called the name of that place Mahanaim, that is, Camps.',
  fr: 'Et quand il les vit, il dit : Ce sont les camps de Dieu. Et il appela ce lieu Mahanaïm, c’est-à-dire les Camps.',
  more: ['Laban se lève de bon matin, embrasse ses filles et ses petits-enfants, les bénit et retourne chez lui. Jacob reprend sa route vers le pays de Canaan, et des anges de Dieu viennent à sa rencontre. Il nomme le lieu Mahanaïm, « les deux camps ». La paracha, ouverte sur des anges dans un songe au départ, se referme sur des anges au retour.',
    'Pas de fête juive attachée à ce passage. Rachi explique que les anges de l’extérieur du pays l’avaient accompagné jusque-là et que ceux de la terre d’Israël venaient l’escorter.'],
  back(P) {
    Lib.sun(P, 830, 200, 30);
    P.halo(260, 180, 170, ['y1', 'y2', 'y3', 'y4r1'], { knock: true });
    Lib.cloud(P, 260, 200, 260, 44, 'y2', { noShade: 1 }); Lib.cloud(P, 150, 160, 160, 30, 'y1', { noShade: 1 });
    Lib.platform(P, 'y4r2', 'y4r3k2');
    Lib.mound(P, 470, 40, 70, 80, 'y4r3k2');
    Lib.tent(P, 330, 300, 110, 90, 90, 'r5y4k1'); Lib.tent(P, 440, 380, 90, 80, 80, 'b4y3k1');
    const c = P.I(120, 150, 0); P.halo(c[0], c[1] - 40, 130, ['y1', 'y2', 'y3']);
    Lib.tent(P, 40, 90, 140, 110, 120, 'y1b1'); Lib.tent(P, 60, 250, 100, 80, 90, 'y1');
    Lib.stones(P, 20, 'y3r2k3', [200, 200, 300, 300]);
  },
  chars: [
    ch(LK.jacob, { x: 280, y: 280, face: -1, clip: 'lookup', h: 146, hold: { f: 'staffV' } }),
    ...[0, 1, 2].map(i => ch(LK.angel, { x: 160 + i * 50, y: 170 + i * 40, z: 40 + i * 30, face: 1, clip: 'hover', h: 118, t0: i, noShadow: 1 })),
    ch(LK.angel, { h: 120, speed: 10, path: [W(200, 380, 2), W(160, 300, 2), W(200, 380, 0)] }),
    ch(LK.vt_rachel, { x: 380, y: 440, face: -1, clip: 'point', h: 128 }),
    ch(LK.child, { x: 420, y: 480, face: -1, clip: 'lookup', h: 96 }),
    { beast: 'camel', h: 112, speed: 14, path: [W(520, 260, 2), W(420, 250, 2), W(520, 260, 0)] },
    { beast: 'sheep', h: 58, x: 300, y: 480, face: -1 }
  ]
}
];
