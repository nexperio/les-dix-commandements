/* PARACHA TOLEDOT · Genèse 25, 19 à 28, 9 · Chabbat 14 novembre 2026 */
Object.assign(LK, {
  tol_esau: { skin: 'y6r5k1', hs: 'curly', hair: 'r7y4', beard: 'full', bt: 'r7y4', robe: 'r5y3k2', len: 'knee', sleeves: 'short', sash: 'k6', cloak: 'r4y6k3', feet: 'sandal' },
  tol_jacob: { skin: 'y5r4', hs: 'short', hair: 'k7', beard: 'short', bt: 'k6', robe: 'b5y2', len: 'ankle', sash: 'y6r2', head: 'cloth', ht: 'y2', band: 'k5' },
  tol_jacobEsau: { skin: 'y5r4', hs: 'short', hair: 'k7', beard: 'short', bt: 'k6', robe: 'r5y3k2', len: 'ankle', sleeves: 'long', sash: 'k6', cloak: 'r4y6k3', head: 'cloth', ht: 'y2', band: 'k5' },
  tol_isaac: { skin: 'y5r4', hs: 'curly', hair: 'k5r2', beard: 'long', bt: 'k5r2', robe: 'y2', cloak: 'r5y3k2', sash: 'r5', head: 'cloth', ht: 'y1', band: 'r5k3' },
  tol_isaacOld: { old: 1, skin: 'y5r4', hs: 'fringe', hair: 'k1', beard: 'full', bt: 'k1b1', robe: 'y2', cloak: 'r5y3k2', sash: 'r5', head: 'cloth', ht: 'y1', band: 'r5k3' },
  tol_rebecca: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k7r3', robe: 'r6y4k1', len: 'floor', head: 'veil', ht: 'b5y1', sash: 'b6', sleeves: 'long' },
  tol_philistine: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'short', robe: 'b4r3', len: 'knee', sleeves: 'short', sash: 'r6', head: 'cap', ht: 'r5y4', feet: 'sandal' }
});
Object.assign(CLIPS, {
  tol_feel: { d: 3.4, k: [{ nT: 86, nK: -86, fT: 82, fK: -80, lean: -2, nU: 78, nL: 12, fU: 24, fL: 60, head: -12, hy: 0.3 }, { nT: 86, nK: -86, fT: 82, fK: -80, lean: 0, nU: 86, nL: 20, fU: 26, fL: 62, head: -16, hy: 0.3 }] }
});
Object.assign(PROPS2, {
  tol_bow(P, A, J, M, h, t, lw, F, u, n, add) { const c = A.t, pts = []; for (let i = 0; i <= 10; i++) { const s = -1 + i / 5; pts.push(M(add(add(c, n, s * 0.2), u, (1 - s * s) * 0.07))); } P.line(pts, lw * 1.8, { ink: 1, taper: 0.3 }); P.line(pts, lw * 0.9); P.line([M(add(c, n, 0.2)), M(add(c, n, -0.2))], lw * 0.4); },
  tol_bowl(P, A, J, M, h, t, lw, F, u, n, add) { const q = M(add(A.t, [0, -1], 0.02)), w = h * 0.05; P.shape([[q[0] - w, q[1] - w * 0.3], [q[0] + w, q[1] - w * 0.3], [q[0] + w * 0.6, q[1] + w * 0.4], [q[0] - w * 0.6, q[1] + w * 0.4]], 'r4y5k3', lw * 0.6); P.fill(P.disc(q[0], q[1] - w * 0.35, w * 0.9, 10).map(p => [p[0], q[1] - w * 0.35 + (p[1] - q[1] + w * 0.35) * 0.3]), 'r8y5k1', {}); }
});
const tolTentIn = (P, tn) => { const I = (a, b, c) => P.I(a, b, c), H = 190; P.shape([I(0, 0, 0), I(0, 540, 0), I(0, 540, H), I(0, 0, H)], tn, 1.3); P.shape([I(0, 0, 0), I(540, 0, 0), I(540, 0, H), I(0, 0, H)], tadd(tn, 'k1'), 1.3); for (let i = 1; i < 9; i++) { P.fill([I(0, i * 60 - 12, 0), I(0, i * 60, 0), I(0, i * 60, H), I(0, i * 60 - 12, H)], 'k3r2', { noKnock: true }); P.fill([I(i * 60 - 12, 0, 0), I(i * 60, 0, 0), I(i * 60, 0, H), I(i * 60 - 12, 0, H)], 'k3r2', { noKnock: true }); } P.line([I(0, 540, H), I(0, 0, H), I(540, 0, H)], 2.4); for (let i = 0; i < 10; i++) { P.line([I(0, i * 54 + 27, H), I(0, i * 54 + 27, H - 14)], 1); P.line([I(i * 54 + 27, 0, H), I(i * 54 + 27, 0, H - 14)], 1); } };
const tolFire = (P, x, y) => { Lib.stones(P, 7, 'k3', [x - 20, y - 20, 40, 40]); P.line([P.I(x - 30, y, 48), P.I(x + 30, y, 48)], 2); };
const SHEET = { title: 'Toledot · Les générations', sub: 'Paracha de la semaine · Chabbat 14 novembre 2026 · Genèse 25, 19 à 28, 9' };
const SCENES = [
{
  title: 'Le chasseur et l’homme des tentes', book: 'Genèse', ch: 25, ref: 'Genesis 25:27', refFr: 'Genèse 25, 27', accent: 0, feast: null,
  quote: 'And when they were grown up, Esau became a skilful hunter, and a husbandman:  but Jacob, a plain man, dwelt in tents.',
  fr: 'Et quand ils eurent grandi, Ésaü devint un habile chasseur et un homme des champs ; mais Jacob, homme simple, habitait sous les tentes.',
  more: ['Rébecca, longtemps stérile, conçoit après la prière d’Isaac. Les enfants se heurtent en elle ; Dieu lui dit : « Deux nations sont dans ton sein, et l’aîné servira le cadet. » Ésaü naît le premier, roux et velu ; Jacob le suit, tenant son talon. Devenus grands, l’un court les champs, l’autre reste aux tentes. Isaac préfère Ésaü, qui lui rapporte du gibier ; Rébecca aime Jacob.',
    'Pas de fête juive attachée à ce passage. Rachi lit les « tentes » de Jacob comme celles de Chem et d’Éver, où il étudiait : la tradition fait de Jacob l’homme de l’étude, d’Ésaü l’homme de la chasse.'],
  back(P) {
    Lib.sun(P, 820, 150, 30); Lib.cloud(P, 240, 150, 160, 30, 'b1');
    Lib.platform(P, 'y4r2k1', 'y4r3k2');
    P.fill([P.I(300, 0, 0.5), P.I(540, 0, 0.5), P.I(540, 300, 0.5), P.I(300, 120, 0.5)], 'y4b4', {});
    Lib.grass(P, 30, 'y5b4', [300, 10, 230, 250]);
    for (const [x, y, hh] of [[360, 30, 180], [450, 60, 200], [510, 150, 170], [420, 10, 150]]) Lib.tree(P, x, y, 0, { h: hh, r: 42, can: 'y4b6k2' });
    Lib.tent(P, 30, 300, 160, 110, 110, 'r5y4k1'); Lib.tent(P, 40, 120, 120, 90, 90, 'b3y2k1');
    Lib.jar(P, 210, 430, 0, 1.2); Lib.lamp(P, 200, 470, 0, 0.9);
    Lib.stones(P, 18, 'y3r2k3', [200, 250, 300, 280]);
  },
  chars: [
    ch(LK.tol_jacob, { x: 130, y: 460, face: 1, clip: 'sit', h: 140 }),
    ch(LK.tol_rebecca, { x: 230, y: 380, face: -1, clip: 'talk', h: 132 }),
    ch(LK.tol_isaac, { x: 260, y: 300, face: 1, clip: 'idle', h: 142 }),
    ch(LK.tol_esau, { h: 144, speed: 36, hold: { n: 'tol_bow' }, path: [W(330, 250, 2.6, 'point', { f: 1 }), W(390, 330, 1.4, 'point', { f: 1 }), W(330, 250, 0)] }),
    { beast: 'deer', h: 96, speed: 44, path: [W(500, 280, 1.2), W(470, 110, 0.6), W(320, 60, 1.5), W(500, 280, 0)] },
    { beast: 'deer', h: 84, speed: 40, t0: 2.5, path: [W(510, 230, 1), W(460, 90, 0.8), W(340, 100, 1), W(510, 230, 0)] },
    { beast: 'sheep', h: 58, x: 280, y: 470, face: -1 }
  ]
},
{
  title: 'Le plat de lentilles', book: 'Genèse', ch: 25, ref: 'Genesis 25:30', refFr: 'Genèse 25, 30', accent: 1, feast: null,
  quote: 'Said:  Give me of this red pottage, for I am exceeding faint.  For which reason his name was called Edom.',
  fr: 'Il dit : Donne-moi de ce plat roux, car je suis épuisé. C’est pourquoi on l’appela Édom.',
  more: ['Jacob fait cuire un potage. Ésaü rentre des champs, épuisé, et réclame « de ce roux, de ce roux-là » : de là son surnom d’Édom, le Roux. Jacob pose son prix : le droit d’aînesse. « Je vais mourir, à quoi me sert-il ? » Ésaü jure, mange le pain et les lentilles, boit, se lève et s’en va. « Ainsi Ésaü méprisa le droit d’aînesse. »',
    'Pas de fête juive attachée à ce passage. Selon Rachi, Abraham mourut ce jour-là, et Jacob préparait des lentilles, plat du repas de deuil : rondes comme la roue du deuil qui tourne dans le monde. L’usage de servir des lentilles ou des œufs aux endeuillés en découle.'],
  back(P) {
    Lib.sun(P, 180, 170, 26);
    Lib.platform(P, 'y4r3k1', 'y4r3k2');
    Lib.tent(P, 40, 40, 170, 130, 120, 'r5y4k1');
    tolFire(P, 330, 170);
    P.cyl(330, 170, 12, 20, 26, 'k5r2');
    P.box(170, 330, 0, 60, 40, 3, 'y3r2k2'); for (let i = 0; i < 3; i++) { const c = P.I(185 + i * 16, 348, 3); P.shape(Lib.bumpy(P, c[0], c[1] - 3, 7, 4, 5), 'y7r4k1', 0.6); }
    Lib.jar(P, 250, 190, 0, 1.2);
    for (let i = 0; i < 10; i++) { const c = P.I(400 + P.r() * 110, 420 + P.r() * 100, 0); P.shape(Lib.bumpy(P, c[0], c[1] - 4, 6, 4, 4), 'y4b5k1', 0.5); }
    Lib.palm(P, 480, 120, 0, 150, { lean: 10 });
    Lib.stones(P, 20, 'y3r2k3', [300, 300, 220, 220]);
  },
  live(P, t) { const f = P.I(330, 170, 0); Lib.flame(P, f[0] - 14, f[1] - 4, 18, 22, t); Lib.flame(P, f[0] + 14, f[1] - 2, 16, 20, t + 1); const c = P.I(330, 170, 38); Lib.smoke(P, c[0], c[1], t, { n: 3, h: 70, r: 6, tn: 'k1b1' }); },
  chars: [
    ch(LK.tol_jacob, { x: 230, y: 340, face: 1, clip: 'offer', h: 140, hold: { n: 'tol_bowl' } }),
    ch(LK.tol_esau, { h: 144, speed: 22, hold: { f: 'tol_bow' }, path: [W(520, 440, 1), W(390, 410, 4, 'reach', { f: -1 }), W(380, 400, 3, 'eat', { f: -1 }), W(520, 440, 0, null, { jump: 1 })] }),
    { beast: 'sheep', h: 60, x: 120, y: 420, face: 1 }, { beast: 'sheep', h: 56, x: 180, y: 480, face: -1 }, { beast: 'ram', h: 62, x: 90, y: 480, face: 1 },
    { beast: 'deer', h: 70, x: 490, y: 300, face: -1 }
  ]
},
{
  title: 'Les puits d’Isaac', book: 'Genèse', ch: 26, ref: 'Genesis 26:22', refFr: 'Genèse 26, 22', accent: 2, feast: null,
  quote: 'Going forward from thence, he digged another well, for which they contended not; therefore he called the name thereof, Latitude, saying:  Now hath the Lord given us room, and made us to increase upon the earth.',
  fr: 'Partant de là, il creusa un autre puits, qu’on ne lui disputa pas ; il le nomma Rehoboth, « Espace », disant : Maintenant le Seigneur nous a donné de la place, et il nous a fait croître sur la terre.',
  more: ['Pendant une famine, Isaac s’installe à Guérar, chez Abimélech, roi des Philistins. Il sème et récolte au centuple ; jaloux, les Philistins bouchent les puits creusés par les serviteurs d’Abraham. Isaac les recreuse et leur redonne les noms de son père. Les bergers de Guérar lui disputent deux puits, Essek, « Querelle », et Sitna, « Hostilité » ; le troisième, personne ne le réclame : Rehoboth.',
    'Pas de fête juive attachée à ce passage. La ville israélienne de Rehovot, fondée en 1890, a pris son nom de ce verset. Isaac monte ensuite à Beer-Shéva, où Dieu lui apparaît et où il bâtit un autel.'],
  back(P) {
    Lib.sun(P, 800, 140, 28); Lib.cloud(P, 260, 150, 150, 28, 'b1');
    Lib.platform(P, 'y5r2', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
    Lib.well(P, 110, 110, 26); Lib.well(P, 90, 330, 26);
    stoneStack(P, 60, 60, 20, 20, 16, 'y3r2k3');
    P.shape(P.ell(360, 330, 0.5, 90, 70, 26), 'y4r2k1', 0.8);
    Lib.well(P, 360, 320, 38);
    P.box(260, 390, 0, 120, 26, 20, 'y3r2k3'); P.fill([P.I(265, 395, 20.5), P.I(375, 395, 20.5), P.I(375, 411, 20.5), P.I(265, 411, 20.5)], 'b6y1', {});
    Lib.tent(P, 420, 40, 100, 80, 80, 'r4y4k1');
    Lib.palm(P, 490, 220, 0, 150, { lean: 12, dates: 1 }); Lib.bush(P, 200, 60, 0, 22, 'y5b5k1');
    Lib.stones(P, 24, 'y4r3k2', [20, 20, 500, 500]);
  },
  chars: [
    ch(LK.tol_philistine, { x: 150, y: 180, face: -1, clip: 'point', h: 136 }),
    ch(LK.shepherd, { x: 70, y: 200, face: 1, clip: 'talk', h: 134 }),
    ch(LK.tol_philistine, { x: 150, y: 380, face: -1, clip: 'guard', h: 134, hold: { n: 'staffV' }, t0: 1, look: Object.assign({}, LK.tol_philistine, { robe: 'y4r3k1', ht: 'b4y2' }) }),
    ch(LK.tol_isaac, { x: 320, y: 450, face: 1, clip: 'raise', h: 144 }),
    ch(LK.bro1, { x: 410, y: 300, face: -1, clip: 'haul', h: 134 }),
    { beast: 'sheep', h: 58, speed: 8, path: [W(300, 430, 3), W(260, 480, 2), W(300, 430, 0)] },
    { beast: 'sheep', h: 56, x: 350, y: 430, face: -1 },
    { beast: 'camel', h: 110, x: 500, y: 310, face: -1 }
  ]
},
{
  title: 'La voix de Jacob, les mains d’Ésaü', book: 'Genèse', ch: 27, ref: 'Genesis 27:22', refFr: 'Genèse 27, 22', accent: 1, feast: null,
  quote: 'He came near to his father, and when he had felt him, Isaac said:  The voice indeed is the voice of Jacob; but the hands, are the hands of Esau.',
  fr: 'Il s’approcha de son père, et quand celui-ci l’eut palpé, Isaac dit : La voix est bien la voix de Jacob, mais les mains sont les mains d’Ésaü.',
  more: ['Isaac, vieux, ne voit plus. Il envoie Ésaü chasser pour lui préparer un plat avant de le bénir. Rébecca, qui a entendu, fait apprêter deux chevreaux par Jacob, le revêt des beaux habits d’Ésaü et couvre de peaux ses mains et son cou. Jacob apporte le plat. Isaac le palpe, hésite, sent l’odeur des vêtements, « l’odeur d’un champ que le Seigneur a béni », et le bénit.',
    'Pas de fête juive attachée à ce passage. Le midrach (Genèse Rabba 65) lit ce verset comme une promesse : tant que la voix de Jacob se fait entendre dans les maisons de prière et d’étude, les mains d’Ésaü sont sans pouvoir.'],
  back(P) {
    Lib.platform(P, 'y4r3k1', 'y4r3k2');
    tolTentIn(P, 'r4y4k1');
    P.box(0, 0, 0, 540, 540, 1, 'y3r3k2', 0);
    for (let i = 0; i < 4; i++) P.fill([P.I(60 + i * 110, 300, 1.5), P.I(140 + i * 110, 300, 1.5), P.I(140 + i * 110, 500, 1.5), P.I(60 + i * 110, 500, 1.5)], ['r5b3', 'b4y2', 'r6y3', 'y6b3'][i], {});
    P.box(110, 140, 0, 180, 80, 26, 'r4y5k3'); P.box(114, 144, 26, 172, 72, 8, 'b4r3');
    P.box(330, 150, 0, 70, 50, 24, 'r4y5k2'); P.shape(P.ell(350, 170, 25, 12, 12, 12), 'y7r4k1', 0.6); P.shape(P.ell(378, 172, 25, 9, 9, 10), 'r8b3', 0.6);
    Lib.lamp(P, 60, 60, 0, 1.3);
    Lib.jar(P, 40, 260, 0, 1.2);
  },
  chars: [
    ch(LK.tol_isaacOld, { x: 230, y: 185, z: 34, face: 1, clip: 'tol_feel', h: 138, noShadow: 1 }),
    ch(LK.tol_jacobEsau, { x: 320, y: 250, face: -1, clip: 'kneel', h: 140, hold: { n: 'tol_bowl' } }),
    ch(LK.tol_rebecca, { x: 130, y: 400, face: 1, clip: 'lookup', h: 134 }),
    { beast: 'sheep', h: 48, x: 440, y: 380, face: -1 }, { beast: 'sheep', h: 44, x: 480, y: 330, face: -1 }
  ]
},
{
  title: 'Le cri d’Ésaü', book: 'Genèse', ch: 27, ref: 'Genesis 27:34', refFr: 'Genèse 27, 34', accent: 1, feast: null,
  quote: 'Esau having heard his father\'s words, roared out with a great cry; and, being in a consternation, said:  Bless me also, my father.',
  fr: 'Ésaü, entendant les paroles de son père, poussa un grand cri ; et, bouleversé, il dit : Bénis-moi aussi, mon père.',
  more: ['Jacob vient à peine de sortir qu’Ésaü rentre de la chasse avec son plat. Isaac est saisi d’un grand tremblement : « Qui donc a apporté le gibier ? Je l’ai béni, et il sera béni. » Ésaü crie avec amertume : « N’as-tu qu’une bénédiction, mon père ? » Isaac lui annonce qu’il vivra de son épée et qu’un jour il secouera le joug de son frère. Ésaü prend Jacob en haine.',
    'Pas de fête juive attachée à ce passage. Ésaü rappelle le sens du nom de son frère : Jacob, « celui qui supplante », l’a supplanté deux fois, pour le droit d’aînesse et pour la bénédiction.'],
  back(P) {
    Lib.sun(P, 180, 200, 30); Lib.cloud(P, 780, 140, 160, 30, 'r1b1');
    Lib.platform(P, 'y4r2k1', 'y4r3k2');
    Lib.tent(P, 40, 40, 230, 170, 150, 'r5y4k1');
    P.box(300, 200, 0, 70, 40, 22, 'r4y5k3');
    Lib.tree(P, 460, 90, 0, { h: 190, r: 52, can: 'y5b6k1' });
    Lib.jar(P, 390, 210, 0, 1.1);
    Lib.stones(P, 20, 'y3r2k3', [300, 300, 220, 220]);
  },
  chars: [
    ch(LK.tol_isaacOld, { x: 250, y: 300, face: 1, clip: 'raise', h: 138 }),
    ch(LK.tol_esau, { x: 420, y: 300, face: -1, clip: 'pray', h: 144, hold: { n: 'tol_bowl' } }),
    ch(LK.tol_rebecca, { x: 180, y: 250, face: 1, clip: 'idle', h: 132 }),
    ch(LK.tol_jacob, { h: 140, speed: 18, hold: { f: 'staffV' }, path: [W(170, 360, 0.5), W(40, 520, 0), W(170, 360, 0, null, { jump: 1 })] }),
    { beast: 'deer', h: 72, x: 470, y: 460, face: -1 }
  ]
},
{
  title: 'Jacob part pour Haran', book: 'Genèse', ch: 28, ref: 'Genesis 28:5', refFr: 'Genèse 28, 5', accent: 2, feast: null,
  quote: 'And when Isaac had sent him away, he took his journey and went to Mesopotamia of Syria, to Laban, the son of Bathuel, the Syrian, brother to Rebecca, his mother.',
  fr: 'Quand Isaac l’eut congédié, il se mit en route et alla en Mésopotamie de Syrie, chez Laban, fils de Bathuel l’Araméen, frère de Rébecca, sa mère.',
  more: ['Rébecca apprend qu’Ésaü veut tuer son frère. Elle obtient d’Isaac qu’il envoie Jacob chercher une épouse chez Laban, loin des filles de Canaan. Isaac bénit Jacob une seconde fois, de la bénédiction d’Abraham, et le fait partir de Beer-Shéva. Ésaü comprend alors que les Cananéennes déplaisent à son père et épouse Mahalath, fille d’Ismaël.',
    'Pas de fête juive attachée à ce passage. Selon Rachi (sur 28, 9), Jacob avait alors soixante-trois ans. La paracha suivante, Vayétsé, s’ouvre sur la route : c’est en chemin, à Béthel, qu’il verra l’échelle.'],
  back(P) {
    Lib.sun(P, 850, 260, 34); Lib.cloud(P, 300, 150, 170, 30, 'r1y1');
    Lib.platform(P, 'y5r2', 'y5r3k1');
    const road = [[250, 260], [360, 180], [460, 90], [540, 20]]; for (let i = 0; i < road.length - 1; i++) { const a = road[i], b = road[i + 1]; P.fill([P.I(a[0] - 22, a[1] - 22, 0.5), P.I(b[0] - 22, b[1] - 22, 0.5), P.I(b[0] + 22, b[1] + 22, 0.5), P.I(a[0] + 22, a[1] + 22, 0.5)], 'y3r1', {}); }
    Lib.tent(P, 30, 300, 160, 110, 120, 'r5y4k1');
    Lib.well(P, 150, 130, 30);
    Lib.tree(P, 60, 40, 0, { h: 170, r: 40, blobs: 9, can: 'y4b5k2' });
    Lib.altar(P, 290, 420, 60, 44, 32);
    Lib.bush(P, 500, 480, 0, 26, 'y5b5k1'); Lib.bush(P, 480, 220, 0, 22, 'y5b5k1');
    Lib.stones(P, 20, 'y4r3k2', [220, 280, 280, 240]);
  },
  chars: [
    ch(LK.tol_jacob, { h: 140, speed: 16, hold: { n: 'bundle', f: 'staffV' }, path: [W(260, 250, 2), W(520, 30, 0), W(260, 250, 0, null, { jump: 1 })] }),
    ch(LK.tol_isaacOld, { x: 220, y: 290, face: 1, clip: 'bless', h: 138 }),
    ch(LK.tol_rebecca, { x: 230, y: 420, face: 1, clip: 'wave', h: 132 }),
    ch(LK.tol_esau, { x: 440, y: 400, face: -1, clip: 'sulk', h: 144, hold: { n: 'tol_bow' } }),
    { beast: 'sheep', h: 58, x: 120, y: 470, face: 1 }, { beast: 'sheep', h: 54, x: 170, y: 500, face: -1 },
    { beast: 'camel', h: 110, x: 290, y: 120, face: -1 }
  ]
}
];
