/* PARACHA MICHPATIM · Exode 21, 1 à 24, 18 · Chabbat 6 février 2027 */
Object.assign(LK, {
  mi_master: { skin: 'y5r4k1', hs: 'short', hair: 'k6', beard: 'full', bt: 'k6', robe: 'b5y2', cloak: 'r6y3k1', sash: 'y7', head: 'cloth', ht: 'y2r1', band: 'k6', feet: 'sandal' },
  mi_servant: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'short', bt: 'k7', robe: 'y3r2k1', len: 'knee', sleeves: 'short', sash: 'k5', feet: 'bare' },
  mi_servantW: { fem: 1, skin: 'y6r4k1', hs: 'long', hair: 'k8', robe: 'y4b3', len: 'floor', head: 'veil', ht: 'r4y2', sash: 'r6' },
  mi_judge: { old: 1, skin: 'y5r4', hs: 'fringe', hair: 'k1', beard: 'long', bt: 'k1b1', robe: 'y1b1', trim: 1, cloak: 'b6k1', sash: 'y7', head: 'turban', ht: 'y1b2', sleeves: 'long', feet: 'sandal' },
  mi_judge2: { old: 1, skin: 'y6r4k1', hs: 'fringe', hair: 'k2', beard: 'full', bt: 'k2', robe: 'y2r1', cloak: 'r5b3k1', sash: 'b6', head: 'turban', ht: 'y2', sleeves: 'long', feet: 'sandal' },
  mi_farmer: { skin: 'y6r4k1', hs: 'short', hair: 'k7', beard: 'short', bt: 'k7', robe: 'r4y5k1', len: 'knee', sleeves: 'short', sash: 'b5', head: 'cloth', ht: 'y3', band: 'k5' },
  mi_poor: { skin: 'y6r4k2', hs: 'curly', hair: 'k6', beard: 'short', bt: 'k5', robe: 'y2k3', len: 'knee', sleeves: 'none', sash: 'k4', feet: 'bare' },
  mi_poorW: { fem: 1, skin: 'y6r4k1', hs: 'long', hair: 'k7', robe: 'y3k3', len: 'ankle', head: 'veil', ht: 'y2k2', sash: 'k4', feet: 'bare' },
  mi_lender: { skin: 'y5r4', hs: 'short', hair: 'k5', beard: 'long', bt: 'k4', robe: 'r5b3', cloak: 'y5r2k1', sash: 'y8', head: 'cloth', ht: 'b4y1', band: 'y7', feet: 'sandal' },
  mi_foe: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'full', bt: 'k8', robe: 'r6y2k2', cloak: 'k3r2', sash: 'y6', head: 'cloth', ht: 'r6k2', band: 'k7', feet: 'sandal' },
  mi_youth: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', robe: 'y1b1', len: 'knee', sleeves: 'short', sash: 'r6', feet: 'bare' },
  mi_nadab: { skin: 'y5r4', hs: 'short', hair: 'k7', beard: 'short', bt: 'k7', robe: 'y1', trim: 1, sash: 'r6b4', head: 'turban', ht: 'y1', sleeves: 'long' },
  mi_abihu: { skin: 'y5r4k1', hs: 'short', hair: 'k8', beard: 'short', bt: 'k8', robe: 'y1b1', trim: 1, sash: 'b6y2', head: 'turban', ht: 'y1', sleeves: 'long' },
  mi_hur: { old: 1, skin: 'y5r4k1', hs: 'fringe', hair: 'k2', beard: 'full', bt: 'k2', robe: 'r5y4k1', cloak: 'y3b3', sash: 'b6', head: 'cloth', ht: 'r3y3', band: 'k6' },
  mi_joshua: Object.assign({}, LK.joshua, { head: 'cloth', ht: 'y2b1', band: 'k6', greaves: null, feet: 'sandal' })
});
Object.assign(PROPS2, {
  mi_awl(P, A, J, M, h, t, lw, F, u, n, add) { const a = add(A.t, u, -0.02), b = add(A.t, u, 0.05), c = add(A.t, u, 0.14); P.line([M(a), M(b)], lw * 2.4, { ink: 3 }); P.line([M(b), M(c)], lw * 0.7, { ink: 2 }); },
  mi_cloak(P, A, J, M, h, t, lw) { const q = M([(J.aN.t[0] + J.aF.t[0]) / 2, (J.aN.t[1] + J.aF.t[1]) / 2]); const pts = [[q[0] - h * .09, q[1] - h * .01], [q[0] + h * .09, q[1] - h * .02], [q[0] + h * .08, q[1] + h * .17], [q[0] - h * .07, q[1] + h * .18]]; P.shape(pts, 'r6b3', lw * 0.8); for (let i = 1; i < 4; i++) P.line([[q[0] - h * .08 + i * h * .045, q[1]], [q[0] - h * .075 + i * h * .045, q[1] + h * .17]], lw * 0.5, { ink: 0 }); },
  mi_purse(P, A, J, M, h, t, lw, F, u, n, add) { const q = M(add(A.t, u, 0.02)); P.shape(P.disc(q[0], q[1] + h * .02, h * .024, 10), 'r4y5k2', lw * 0.6); P.line([[q[0] - h * .012, q[1] - h * .002], [q[0] + h * .012, q[1] - h * .004]], lw * 0.8, { ink: 0 }); }
});
function miSeat(P, x, y, h = 18, tn = 'y3r2k3') { P.box(x - 14, y - 14, 0, 28, 28, h, tn); }
function miRim(P, x, y, r, n, tn) { for (let i = 0; i < n; i++) { const a = i / n * TAU, c = P.I(x + Math.cos(a) * r, y + Math.sin(a) * r, 0); P.shape(P.disc(c[0], c[1] - 2, 5, 8).map(p => [p[0], c[1] - 2 + (p[1] - c[1] + 2) * 0.7]), tn, 0.6); } }
function miStack(P, x, y, s, tn = 'y7r3') { const c = P.I(x, y, 0); P.shape([[c[0] - 26 * s, c[1]], [c[0] - 18 * s, c[1] - 30 * s], [c[0], c[1] - 46 * s], [c[0] + 18 * s, c[1] - 30 * s], [c[0] + 26 * s, c[1]]], tn, 1); for (let i = 0; i < 5; i++) P.line([[c[0] - 20 * s + i * 10 * s, c[1] - 4], [c[0] - 8 * s + i * 4 * s, c[1] - 36 * s]], 0.6, { ink: 0 }); }
function miMount(P, x, y, r, hgt) { return Lib.mound(P, x, y, r, hgt, 'y4r3k3', { px: 8 }); }
function miFarm(P, top) { Lib.platform(P, top || 'y5r2b2', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] }); }
const SHEET = { title: 'Michpatim · Les lois', sub: 'Paracha de la semaine · Chabbat 6 février 2027 · Exode 21, 1 à 24, 18' };
const SCENES = [
{
  title: 'L’oreille percée à la porte', book: 'Exode', ch: 21, ref: 'Exodus 21:6', refFr: 'Exode 21, 6', accent: 1, feast: null,
  quote: 'His master shall bring him to the gods, and he shall be set to the door and the posts, and he shall bore his ear through with an awl: and he shall be his servant for ever.',
  fr: 'Son maître le conduira devant les juges, on le placera contre la porte et ses montants, et il lui percera l’oreille avec un poinçon : et il sera son serviteur pour toujours.',
  more: ['Voici les lois que tu leur exposeras. Le serviteur hébreu sert six ans et sort libre la septième année, sans rien payer, avec sa femme s’il est venu marié. S’il déclare : « J’aime mon maître, ma femme et mes enfants, je ne veux pas sortir libre », son maître l’amène devant les juges (le texte dit Elohim), l’approche de la porte et lui perce l’oreille avec un poinçon.',
    'Pas de fête juive attachée à ce passage. Rachi, d’après le Talmud (Kiddouchin 22b), explique le choix de l’oreille : elle a entendu au Sinaï que les enfants d’Israël sont les serviteurs de Dieu, et cet homme s’est donné un autre maître. La porte et ses montants ont été témoins en Égypte, quand Dieu passa par-dessus les maisons marquées.'],
  back(P) {
    Lib.sun(P, 780, 120, 28); Lib.cloud(P, 300, 110, 160, 34, 'b1');
    miFarm(P, 'y4r2b1');
    for (let i = 0; i < 9; i++) for (let j = 0; j < 9; j++) if ((i + j) % 3 === 0) { const c = P.I(i * 60 + 30, j * 60 + 30, 0); P.shape([[c[0] - 12, c[1]], [c[0], c[1] - 6], [c[0] + 12, c[1]], [c[0], c[1] + 6]], 'y3r2k1', 0.5); }
    P.box(40, 40, 0, 240, 180, 140, { t: 'y3r3k1', l: 'y4r3', r: 'y4r3k2' });
    P.box(36, 36, 140, 248, 188, 10, 'r4y4k2');
    P.shape([P.I(135, 220.5, 0), P.I(185, 220.5, 0), P.I(185, 220.5, 96), P.I(135, 220.5, 96)], 'k6r3', 1);
    P.box(126, 220, 0, 9, 9, 106, 'r4y5k3'); P.box(185, 220, 0, 9, 9, 106, 'r4y5k3'); P.box(122, 220, 104, 76, 12, 12, 'r5y5k3');
    P.shape([P.I(280.5, 80, 60), P.I(280.5, 120, 60), P.I(280.5, 120, 100), P.I(280.5, 80, 100)], 'k6b2', 0.9);
    P.shape([P.I(60, 220.5, 60), P.I(95, 220.5, 60), P.I(95, 220.5, 95), P.I(60, 220.5, 95)], 'k6b2', 0.9);
    Lib.tree(P, 440, 90, 0, { h: 190, r: 60, blobs: 8, can: 'y4b6k2', trunk: 'r4y4k4', fruit: 8, fruitTone: 'k6b3' });
    Lib.jar(P, 250, 240, 0, 1.4); Lib.jar(P, 275, 250, 0, 1.1, 'b5y3');
    Lib.stones(P, 16, 'y3r2k3', [320, 260, 200, 260]);
    Lib.grass(P, 30, 'y5b4', [360, 360, 160, 160]);
  },
  chars: [
    ch(LK.mi_servant, { x: 160, y: 238, face: 1, clip: 'still', h: 138 }),
    ch(LK.mi_master, { x: 205, y: 262, face: -1, clip: 'reach', h: 144, hold: { n: 'mi_awl' } }),
    ch(LK.mi_servantW, { x: 270, y: 330, face: -1, clip: 'cradle', h: 128, hold: { nTop: 'baby' } }),
    ch(LK.childG, { x: 310, y: 290, face: -1, clip: 'lookup', h: 88 }),
    ch(LK.child, { x: 320, y: 370, face: -1, clip: 'still', h: 90, t0: 1 }),
    ch(LK.mi_judge, { x: 110, y: 330, face: 1, clip: 'talk', h: 142, hold: { f: 'staffV' } }),
    ch(LK.mi_judge2, { x: 160, y: 390, face: 1, clip: 'idle', h: 140, hold: { f: 'staffV' } }),
    { beast: 'sheep', h: 56, speed: 5, path: [W(420, 420, 4), W(470, 460, 3), W(420, 420, 0)] }
  ]
},
{
  title: 'La citerne ouverte', book: 'Exode', ch: 21, ref: 'Exodus 21:33', refFr: 'Exode 21, 33', accent: 2, feast: null,
  quote: 'If a man open a pit, and dig one, and cover it not, and an ox or an ass fall into it,',
  fr: 'Si un homme ouvre une citerne, ou en creuse une, et ne la couvre pas, et qu’un bœuf ou un âne y tombe,',
  more: ['La loi descend dans le concret des champs et des troupeaux. Celui qui laisse une citerne ouverte, et y voit tomber le bœuf ou l’âne d’un autre, en paiera le prix au propriétaire, et la bête morte sera à lui. Si le bœuf d’un homme encorne le bœuf d’un autre, on vend le bœuf vivant et l’on partage l’argent, et l’on partage aussi la bête morte.',
    'Pas de fête juive attachée à ce passage. Le Talmud consacre à ces cas le traité Bava Kamma, qui s’ouvre sur les quatre « pères » des dommages : le bœuf, la citerne, le mav’eh (que les maîtres discutent : l’homme ou la bête qui broute) et l’incendie.'],
  back(P) {
    Lib.sun(P, 230, 130, 28); Lib.cloud(P, 790, 110, 180, 36, 'b1');
    miFarm(P, 'y5r2b2');
    fenceRing(P, 540, 540, 200, Math.PI * 1.02, Math.PI * 1.48, 8);
    P.cyl(110, 110, 0, 34, 14, 'y3r2k3'); P.cyl(110, 110, 14, 30, 8, 'y2r2k2'); P.box(106, 106, 22, 8, 8, 6, 'r4y5k3');
    Lib.tree(P, 60, 300, 0, { h: 180, r: 56, blobs: 8, can: 'y5b6k1', trunk: 'r4y4k4' });
    P.shape(P.ell(290, 270, 0.6, 50, 50, 24), 'k7b2', 1);
    P.fill(P.ell(290, 270, 0.6, 50, 50, 12, Math.PI * 0.75, Math.PI * 1.75).concat(P.ell(290, 270, -30, 50, 50, 12, Math.PI * 1.75, Math.PI * 0.75)), 'y3r3k4', { noKnock: true });
    Lib.stones(P, 24, 'y3r2k3', [340, 20, 180, 200]);
    Lib.grass(P, 60, 'y5b5', [20, 360, 500, 160]);
    P.line([P.I(330, 240, 1), P.I(360, 225, 1), P.I(395, 205, 1)], 1.6, { ink: 0, lvl: 8 });
    for (const [x, y] of [[180, 190], [200, 205]]) { const c = P.I(x, y, 0); P.line([[c[0], c[1]], [c[0] + 18, c[1] - 30]], 2, { ink: 3 }); P.shape([[c[0] + 14, c[1] - 26], [c[0] + 26, c[1] - 38], [c[0] + 30, c[1] - 30], [c[0] + 20, c[1] - 22]], 'k5b2', 0.6); }
  },
  front(P) {
    const near = P.ell(290, 270, 0.6, 50, 50, 14, -Math.PI * 0.25, Math.PI * 0.75), lo = near.map(p => [p[0], p[1] + 70]).reverse();
    P.fill(near.concat(lo), 'y5r2b2', {});
    P.line(near, 1.1);
    miRim(P, 290, 270, 54, 16, 'y3r2k3');
  },
  live(P, t) { const a = P.I(290, 270, 30), b = P.I(346, 248, 88), c = P.I(390, 212, 86); P.line([a, [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2 + 6 + Math.sin(t * 2) * 2], b, c], 1.6, { ink: 3, taper: 0 }); },
  chars: [
    { beast: 'bull', h: 100, x: 282, y: 262, z: -30, face: 1 },
    ch(LK.mi_youth, { x: 360, y: 250, face: -1, clip: 'haul', h: 128 }),
    ch(LK.mi_servant, { x: 395, y: 212, face: -1, clip: 'haul', h: 136, t0: 0.4 }),
    ch(LK.mi_farmer, { x: 190, y: 330, face: 1, clip: 'offer', h: 138, hold: { n: 'mi_purse' } }),
    ch(LK.mi_master, { x: 240, y: 400, face: -1, clip: 'talk', h: 142 }),
    { beast: 'donkey', h: 88, x: 470, y: 340, face: -1 },
    { beast: 'sheep', h: 56, speed: 6, path: [W(430, 440, 3), W(490, 470, 2), W(430, 440, 0)] },
    { beast: 'sheep', h: 52, x: 500, y: 400, face: -1 }
  ]
},
{
  title: 'Le feu dans les épines', book: 'Exode', ch: 22, ref: 'Exodus 22:6', refFr: 'Exode 22, 5', accent: 1, feast: null,
  quote: 'If a fire breaking out light upon thorns, and catch stacks of corn, or corn standing in the fields, he that kindled the fire shall make good the loss.',
  fr: 'Si un feu éclate et prend aux épines, et qu’il gagne les meules de blé ou le blé encore sur pied dans les champs, celui qui a allumé le feu réparera le dommage.',
  more: ['Qui laisse sa bête brouter le champ ou la vigne d’un autre paiera sur le meilleur de son propre champ. Qui allume un feu dans ses épines doit le surveiller : si les flammes gagnent les gerbes entassées ou le blé sur pied du voisin, il répond de toute la perte. La même section règle les dépôts confiés à un gardien, perdus ou volés.',
    'Pas de fête juive attachée à ce passage. L’incendie est le quatrième des « pères » des dommages de la Michna (Bava Kamma 1, 1). Les versets suivants distinguent le gardien gratuit et le gardien payé, dont la responsabilité n’est pas la même (Exode 22, 7-15).'],
  back(P) {
    Lib.sun(P, 800, 120, 28); Lib.cloud(P, 280, 120, 150, 32, 'b1');
    miFarm(P, 'y6r2');
    Lib.field(P, 250, 40, 270, 200, 9, 'y7r2');
    Lib.hedge(P, 60, 70, 60, 420, 40, 'y3r3k3');
    miStack(P, 150, 250, 1.1, 'y6r3k1'); miStack(P, 170, 390, 1, 'y7r3'); miStack(P, 250, 450, 0.9, 'y7r3');
    Lib.stones(P, 18, 'y3r2k3', [250, 280, 250, 240]);
    Lib.tent(P, 420, 330, 80, 70, 70, 'b3y2k1');
    Lib.tree(P, 480, 260, 0, { h: 160, r: 48, blobs: 7, can: 'y5b6k1' });
  },
  live(P, t) {
    for (let i = 0; i < 5; i++) { const c = P.I(60, 110 + i * 60, 30); Lib.flame(P, c[0], c[1], 26, 40 + (i % 2) * 14, t + i * 0.7); }
    const s = P.I(150, 250, 30); Lib.flame(P, s[0], s[1], 50, 80, t + 0.3);
    const f = P.I(260, 60, 10); Lib.flame(P, f[0], f[1], 30, 44, t + 1.1);
    Lib.smoke(P, s[0], s[1] - 70, t, { n: 5, h: 220, r: 26, tn: 'k3b1' });
  },
  chars: [
    ch(LK.mi_farmer, { x: 170, y: 170, face: -1, clip: 'stagger', h: 138, hold: { n: 'torch' } }),
    ch(LK.mi_servant, { x: 210, y: 300, face: -1, clip: 'smash', h: 136, hold: { n: 'branches' } }),
    ch(LK.mi_master, { h: 142, speed: 26, path: [W(500, 500, 1), W(260, 330, 2.5, 'fill', { f: -1 }), W(500, 500, 0)], over: 'carry', hold: { nTop: 'jarhead' } }),
    ch(LK.reaper, { x: 420, y: 170, face: -1, clip: 'point', h: 136, hold: { n: 'sickle' } }),
    ch(LK.isrW, { x: 360, y: 400, face: -1, clip: 'lookup', h: 128, hold: { f: 'sheaf' } }),
    ch(LK.child, { x: 330, y: 470, face: -1, clip: 'point', h: 90 }),
    { beast: 'bull', h: 84, speed: 8, path: [W(470, 440, 3), W(520, 480, 2), W(470, 440, 0)] }
  ]
},
{
  title: 'Le manteau rendu avant le soir', book: 'Exode', ch: 22, ref: 'Exodus 22:26', refFr: 'Exode 22, 25', accent: 0, feast: 'Pessah',
  quote: 'If thou take of thy neighbour a garment in pledge, thou shalt give it him again before sunset.',
  fr: 'Si tu prends en gage le vêtement de ton prochain, tu le lui rendras avant le coucher du soleil.',
  more: ['Tu ne maltraiteras ni la veuve ni l’orphelin. Si tu prêtes de l’argent au pauvre de mon peuple, ne sois pas pour lui un créancier dur et n’exige pas d’intérêt. Si tu prends en gage son manteau, rends-le avant le coucher du soleil : c’est sa seule couverture, le vêtement de sa peau ; dans quoi dormirait-il ? S’il crie vers moi, je l’entendrai, car je suis compatissant.',
    'Correspondance : <b>Pessah</b>. La section qui va du prêt au pauvre (Exode 22, 25) jusqu’à 23, 19 est lue pendant les demi-fêtes de Pessah, à ’Hol hamoèd. Elle se clôt sur les trois fêtes de pèlerinage, dont la fête des pains azymes.'],
  back(P) {
    P.halo(170, 340, 320, ['r2y2', 'r3y4', 'r4y5', 'r5y6', 'r6y5b1']); Lib.sun(P, 170, 345, 36);
    for (let i = 0; i < 8; i++) Lib.star(P, 640 + i * 42, 60 + (i % 3) * 26, 3 + (i % 2) * 2, 'y6');
    Lib.cloud(P, 380, 200, 180, 30, 'r3y2'); Lib.cloud(P, 820, 180, 150, 30, 'r2b2');
    miFarm(P, 'y5r3k1');
    P.box(40, 250, 0, 110, 100, 80, { t: 'y4r2k3', l: 'y3r3k2', r: 'y3r3k3' });
    for (let i = 0; i < 10; i++) P.line([P.I(40 + i * 11, 250, 80), P.I(46 + i * 11, 350, 80)], 0.8, { ink: 0 });
    P.shape([P.I(80, 350.5, 0), P.I(110, 350.5, 0), P.I(110, 350.5, 58), P.I(80, 350.5, 58)], 'k7r2', 0.9);
    P.box(320, 40, 0, 180, 130, 150, { t: 'y3r2', l: 'y4r3', r: 'y4r3k2' }); P.box(316, 36, 150, 188, 138, 10, 'r4y4k2');
    P.shape([P.I(380, 170.5, 0), P.I(420, 170.5, 0), P.I(420, 170.5, 90), P.I(380, 170.5, 90)], 'k6r3', 1);
    P.shape([P.I(500.5, 80, 70), P.I(500.5, 110, 70), P.I(500.5, 110, 100), P.I(500.5, 80, 100)], 'y7r3', 0.8);
    const road = [[400, 190], [300, 290], [170, 400]]; for (let i = 0; i < road.length - 1; i++) { const a = road[i], b = road[i + 1]; P.fill([P.I(a[0] - 20, a[1] - 20, 0.5), P.I(b[0] - 20, b[1] - 20, 0.5), P.I(b[0] + 20, b[1] + 20, 0.5), P.I(a[0] + 20, a[1] + 20, 0.5)], 'y4r3k2', {}); }
    Lib.lamp(P, 125, 365, 0, 0.8);
    const m = P.I(60, 380, 0); P.shape(Lib.bumpy(P, m[0], m[1] - 5, 24, 8, 6), 'y4r3k3', 0.7);
    Lib.palm(P, 250, 60, 0, 160, { lean: 10 });
    Lib.stones(P, 18, 'y3r2k3', [240, 380, 280, 140]);
  },
  chars: [
    ch(LK.mi_lender, { h: 142, speed: 16, path: [W(400, 200, 1.5, 'idle'), W(210, 395, 4, 'offer'), W(400, 200, 0)], over: 'offer', hold: { nTop: 'mi_cloak' } }),
    ch(LK.mi_poor, { x: 150, y: 400, face: 1, clip: 'sulk', h: 136 }),
    ch(LK.mi_poorW, { x: 100, y: 385, face: 1, clip: 'still', h: 126 }),
    ch(LK.child, { x: 120, y: 440, face: 1, clip: 'lookup', h: 86, look: Object.assign({}, LK.child, { robe: 'y2k2' }) }),
    { beast: 'sheep', h: 54, x: 60, y: 470, face: 1 },
    ch(LK.mi_farmer, { h: 136, speed: 12, t0: 4, path: [W(520, 480, 0), W(420, 250, 1), W(520, 480, 0, null, { jump: 1 })] }),
    { beast: 'donkey', h: 84, speed: 12, t0: 3.2, path: [W(540, 520, 0), W(440, 290, 1), W(540, 520, 0, null, { jump: 1 })] }
  ]
},
{
  title: 'L’âne de ton ennemi', book: 'Exode', ch: 23, ref: 'Exodus 23:5', refFr: 'Exode 23, 5', accent: 2, feast: 'Pessah',
  quote: 'If thou see the ass of him that hateth thee lie underneath his burden, thou shalt not pass by, but shalt lift him up with him.',
  fr: 'Si tu vois l’âne de celui qui te hait couché sous son fardeau, tu ne passeras pas outre, mais tu le relèveras avec lui.',
  more: ['Si tu rencontres le bœuf ou l’âne de ton ennemi qui s’égare, ramène-le-lui. Si tu vois l’âne de celui qui te hait écrasé sous sa charge, ne passe pas ton chemin : aide-le à le relever. Suivent les lois de la justice : ne fausse pas le droit du pauvre, fuis le mensonge, n’accepte pas de présent, car le présent aveugle les clairvoyants. Tu n’opprimeras pas l’étranger.',
    'Correspondance : <b>Pessah</b>, ce verset appartenant à la lecture de ’Hol hamoèd. Le Talmud (Bava Metsia 32b) en tire une règle : si un ami doit être déchargé et un ennemi chargé, on aide d’abord l’ennemi, pour briser son mauvais penchant.'],
  back(P) {
    Lib.sun(P, 240, 120, 28); Lib.cloud(P, 780, 120, 190, 36, 'b1');
    miFarm(P, 'y5r2');
    Lib.mound(P, 60, 40, 80, 150, 'y4r3k2'); Lib.mound(P, 250, 10, 60, 100, 'y4r3k3'); Lib.mound(P, 20, 250, 60, 110, 'y4r3k2');
    P.fill([P.I(230, 0, 0.5), P.I(310, 0, 0.5), P.I(310, 540, 0.5), P.I(230, 540, 0.5)], 'y3r2k1', {}); for (let i = 0; i < 9; i++) { const c = P.I(250 + (i % 3) * 20, 30 + i * 60, 1); P.line([[c[0] - 6, c[1]], [c[0] + 6, c[1] - 2]], 0.7); }
    Lib.rock(P, 180, 170, 0, 34, 22, 'y4r3k3'); Lib.rock(P, 460, 380, 0, 30, 20, 'y4r3k3');
    const s = P.I(190, 380, 0); P.shape(Lib.bumpy(P, s[0], s[1] - 10, 18, 12, 6), 'y4r3k2', 0.9); P.line([[s[0] - 8, s[1] - 18], [s[0] + 8, s[1] - 20]], 1.2, { ink: 1 });
    Lib.stones(P, 24, 'y3r2k3', [20, 20, 500, 500]);
    Lib.grass(P, 30, 'y5b4', [360, 420, 160, 100]);
    Lib.bush(P, 480, 480, 0, 26, 'y5b5k1'); Lib.bush(P, 60, 440, 0, 22, 'y5b5k1');
  },
  chars: [
    { depth: 570, draw(P, t) {
      const b = P.I(270, 300, 0), ctx = P.ctx, up = (Math.sin(t * 1.1) * 0.5 + 0.5) * 6;
      ctx.save(); ctx.beginPath(); ctx.rect(b[0] - 200, b[1] - 300, 400, 305); ctx.clip();
      drawBeast(P, 'donkey', [b[0], b[1] + 32], 94, 1, t / 3, false);
      ctx.restore();
      P.fill(P.disc(b[0], b[1] + 2, 44, 16).map(p => [p[0], b[1] + 2 + (p[1] - b[1] - 2) * 0.3]), 'k2b1', { noKnock: true });
      for (const [dx, tn] of [[-16, 'y4r3k2'], [14, 'r5y4k2']]) P.shape(Lib.bumpy(P, b[0] + dx, b[1] - 42 - up, 17, 13, 6), tn, 0.9);
      P.line([[b[0] - 30, b[1] - 38 - up], [b[0] + 30, b[1] - 40 - up]], 1.4, { ink: 3 });
    } },
    ch(LK.mi_foe, { x: 335, y: 280, face: -1, clip: 'reach', h: 142 }),
    ch(LK.mi_lender, { x: 215, y: 335, face: 1, clip: 'reach', h: 140, t0: 0.5, look: Object.assign({}, LK.mi_lender, { cloak: 'b5y2', robe: 'y3r2' }) }),
    ch(LK.mi_youth, { h: 128, speed: 12, path: [W(540, 140, 0), W(420, 230, 3, 'idle'), W(540, 140, 0)], hold: { f: 'staffV' } }),
    { beast: 'bull', h: 84, speed: 12, t0: 0.6, path: [W(540, 100, 0), W(450, 190, 3), W(540, 100, 0)] },
    { beast: 'donkey', h: 86, x: 400, y: 410, face: -1 },
    { beast: 'sheep', h: 54, x: 120, y: 420, face: 1 }
  ]
},
{
  title: 'Trois fois l’an', book: 'Exode', ch: 23, ref: 'Exodus 23:17', refFr: 'Exode 23, 17', accent: 0, feast: 'Pessah',
  quote: 'Thrice a year shall all thy males appear before the Lord thy God.',
  fr: 'Trois fois l’an, tous tes mâles paraîtront devant le Seigneur ton Dieu.',
  more: ['Six années tu sèmeras ta terre ; la septième, tu la laisseras reposer pour que les pauvres de ton peuple en mangent, et les bêtes des champs après eux. Six jours tu travailleras, et le septième tu te reposeras. Trois fois l’an tu me feras fête : la fête des pains azymes, au mois des épis nouveaux ; la fête de la moisson des prémices ; la fête de la récolte, à la fin de l’année.',
    'Correspondance : <b>Pessah</b>. Ce sont les trois fêtes de pèlerinage (chaloch regalim) : Pessah, Chavouot et Souccot. Les pèlerins de la scène portent un agneau, une gerbe des prémices, le loulav et le cédrat. Le verset 19 interdit de cuire le chevreau dans le lait de sa mère : c’est la source de la séparation du lait et de la viande.'],
  back(P) {
    Lib.sun(P, 780, 120, 28); Lib.cloud(P, 280, 120, 160, 34, 'b1');
    miFarm(P, 'y5r2b2');
    P.box(40, 40, 0, 220, 200, 40, { t: 'y3r2', l: 'y3r2k2', r: 'y3r2k3' });
    P.shape([P.I(120, 240, 40), P.I(180, 240, 40), P.I(180, 330, 0), P.I(120, 330, 0)], 'y3r2k1', 1);
    P.shape([P.I(180, 240, 40), P.I(180, 240, 0), P.I(180, 330, 0)], 'y3r2k3', 1);
    P.box(70, 70, 40, 70, 60, 36, 'y3r2k3'); for (let i = 0; i < 3; i++) P.box(74, 74 + i * 18, 76, 62, 14, 5, 'r5y5k3', 0.7);
    Lib.tent(P, 170, 50, 80, 70, 70, 'b5r3'); P.box(168, 48, 0, 4, 4, 40, 'y3r2k2', 0.1);
    Lib.field(P, 310, 40, 210, 170, 8, 'y6r2');
    Lib.vines(P, 40, 400, 150, 110, 4);
    Lib.tree(P, 480, 280, 0, { h: 160, r: 50, blobs: 7, can: 'y4b6k2', trunk: 'r4y4k4', fruit: 6, fruitTone: 'k6b3' });
    Lib.stones(P, 18, 'y3r2k3', [280, 280, 240, 240]);
  },
  live(P, t) { const a = P.I(105, 100, 81); Lib.flame(P, a[0], a[1], 30, 54, t); Lib.smoke(P, a[0], a[1] - 50, t, { n: 5, h: 220, r: 22, tn: 'k2b1' }); },
  chars: [
    ch(LK.priest, { x: 190, y: 190, z: 40, face: -1, clip: 'bless', h: 140 }),
    ...[[LK.isrM, { f: 'lamb' }, 'carry', 0], [LK.mi_farmer, { f: 'sheaf' }, null, 6], [LK.isrM2, { n: 'lulav', f: 'etrog' }, null, 12], [LK.mi_youth, { n: 'bread' }, null, 18]].map(([lk, hold, over, t0]) => ch(lk, { h: 136, speed: 22, t0, hold, over, path: [W(540, 520, 0), W(150, 350, 0), W(150, 260, 2.5, 'offer', { z: 40, f: -1 }), W(150, 260, 0, null, { jump: 1 })] })),
    { beast: 'sheep', h: 56, x: 360, y: 300, face: -1 }, { beast: 'ram', h: 62, x: 420, y: 330, face: 1 },
    ch(LK.childG, { x: 290, y: 420, face: -1, clip: 'wave', h: 88 })
  ]
},
{
  title: 'Nous ferons et nous entendrons', book: 'Exode', ch: 24, ref: 'Exodus 24:7', refFr: 'Exode 24, 7', accent: 1, feast: null,
  quote: 'And taking the book of the covenant, he read it in the hearing of the people:  and they said:  All things that the Lord hath spoken, we will do, we will be obedient.',
  fr: 'Et prenant le livre de l’alliance, il le lut aux oreilles du peuple : et ils dirent : Tout ce que le Seigneur a dit, nous le ferons, et nous obéirons.',
  more: ['Moïse écrit toutes les paroles du Seigneur. Au matin, il bâtit un autel au pied de la montagne et dresse douze stèles pour les douze tribus d’Israël. Des jeunes gens offrent des holocaustes et des taureaux. Moïse verse la moitié du sang sur l’autel, lit le livre de l’alliance devant le peuple, puis asperge le peuple : « Voici le sang de l’alliance. »',
    'Pas de fête juive attachée à ce passage. La réponse du peuple, na’assé venichma, « nous ferons et nous entendrons », est célèbre : le Talmud (Chabbat 88a) raconte qu’au moment où Israël plaça « nous ferons » avant « nous entendrons », des anges vinrent poser deux couronnes sur la tête de chacun.'],
  back(P) {
    Lib.cloud(P, 800, 110, 200, 40, 'b1'); Lib.cloud(P, 240, 90, 160, 34, 'b1');
    miFarm(P, 'y5r2b1');
    miMount(P, 40, 40, 110, 240);
    Lib.altar(P, 170, 150, 70, 54, 40, 'y3r2k3');
    for (let i = 0; i < 12; i++) { const a = 0.08 + i / 11 * 1.42, x = 60 + Math.cos(a) * 290, y = 60 + Math.sin(a) * 290; P.cyl(x, y, 0, 9, 56 + (i % 3) * 8, 'y3r2k2', 0.8); }
    for (const [x, y] of [[250, 190], [225, 215]]) { P.shape(P.ell(x, y, 8, 14, 14, 14), 'y4r3k3', 0.8); P.fill(P.ell(x, y, 8.5, 10, 10, 12), 'r8k2', {}); P.box(x - 10, y - 10, 0, 20, 20, 8, 'y4r3k3', 0.6); }
    P.box(290, 290, 0, 40, 40, 20, 'y3r2k3');
    Lib.tent(P, 440, 440, 80, 70, 70, 'r5y4k1');
    Lib.stones(P, 18, 'y3r2k3', [300, 20, 200, 200]);
  },
  live(P, t) { const a = P.I(205, 177, 46); Lib.flame(P, a[0], a[1], 34, 64, t); Lib.smoke(P, a[0], a[1] - 56, t, { n: 5, h: 240, r: 24, tn: 'k2b1' }); },
  chars: [
    ch(LK.moses, { x: 310, y: 310, z: 20, face: 1, clip: 'hold2', h: 146, hold: { n: 'scroll' } }),
    ch(LK.mi_youth, { h: 128, speed: 12, path: [W(470, 250, 1), W(290, 170, 3, 'offer', { f: -1 }), W(470, 250, 0)] }),
    { beast: 'calf', h: 76, speed: 12, t0: 0.5, path: [W(500, 260, 1), W(320, 180, 3), W(500, 260, 0)] },
    ch(LK.isrM, { x: 400, y: 400, face: -1, clip: 'raise', h: 136 }),
    ch(LK.isrW, { x: 450, y: 340, face: -1, clip: 'raise', h: 128, t0: 0.6 }),
    ch(LK.isrOld, { x: 490, y: 400, face: -1, clip: 'sing', h: 136 }),
    ch(LK.isrW2, { x: 360, y: 470, face: -1, clip: 'raise', h: 128, t0: 1.2 }),
    ch(LK.childG, { x: 420, y: 480, face: -1, clip: 'raise', h: 88, t0: 0.3 })
  ]
},
{
  title: 'Un ouvrage de saphir', book: 'Exode', ch: 24, ref: 'Exodus 24:10', refFr: 'Exode 24, 10', accent: 2, feast: null,
  quote: 'And they saw the God of Israel:  and under his feet as it were a work of sapphire stone, and as the heaven, when clear.',
  fr: 'Et ils virent le Dieu d’Israël : et sous ses pieds, comme un ouvrage de pierre de saphir, pareil au ciel quand il est serein.',
  more: ['Moïse monte avec Aaron, Nadab et Abihou, et soixante-dix anciens d’Israël. Ils voient le Dieu d’Israël, et sous ses pieds comme un pavement de saphir, clair comme le ciel lui-même. Le texte ne décrit rien au-dessus de ce pavement. Dieu ne porte pas la main sur ces nobles d’Israël : ils contemplent Dieu, et ils mangent et boivent.',
    'Pas de fête juive attachée à ce passage. Rachi, d’après le midrach, voit dans cette brique de saphir un souvenir de l’esclavage : elle se tenait devant Dieu pendant que les Hébreux étaient asservis aux briques en Égypte.'],
  back(P) {
    P.halo(500, 150, 330, ['y1', 'b1', 'b2', 'b3', 'b4y1']);
    Lib.cloud(P, 180, 300, 260, 50, 'b1'); Lib.cloud(P, 830, 300, 260, 50, 'b1');
    Lib.platform(P, 'y3r2k2', 'y3r3k2', { strata: [[0, .4, 'y3r3k2'], [.4, 1, 'y3r3k4']] });
    for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) { const x = 30 + i * 40, y = 30 + j * 40; P.shape([P.I(x, y, 2), P.I(x + 40, y, 2), P.I(x + 40, y + 40, 2), P.I(x, y + 40, 2)], (i + j) % 2 ? 'b7y1' : 'b5', 0.8); }
    P.box(24, 24, 0, 252, 252, 2, 'b6k1', 0.6);
    const c = P.I(150, 150, 60); P.halo(c[0], c[1] - 40, 150, ['y1', 'y1b1', 'y2', 'y3b1'], { knock: true });
    for (let i = 0; i < 16; i++) { const a = i / 16 * TAU; P.line([[c[0] + Math.cos(a) * 50, c[1] - 40 + Math.sin(a) * 50], [c[0] + Math.cos(a) * 130, c[1] - 40 + Math.sin(a) * 130]], 1.2, { ink: 0, lvl: 6 }); }
    Lib.rock(P, 450, 90, 0, 40, 26, 'y3r2k3'); Lib.rock(P, 90, 450, 0, 36, 24, 'y3r2k3');
    Lib.stones(P, 18, 'y3r2k3', [300, 300, 220, 220]);
    for (const [x, y] of [[360, 360], [420, 390]]) { const q = P.I(x, y, 1); P.shape(Lib.bumpy(P, q[0], q[1] - 4, 10, 6, 5), 'y7r4k1', 0.7); }
    Lib.jar(P, 390, 330, 0, 1.2);
  },
  front(P) { Lib.cloud(P, 250, 860, 300, 70, 'b1', { noShade: true }); Lib.cloud(P, 760, 860, 300, 70, 'b1', { noShade: true }); },
  live(P, t) {
    for (let k = 0; k < 4; k++) { const i = (Math.floor(t * 1.3) * 7 + k * 11) % 36, x = 30 + (i % 6) * 40, y = 30 + Math.floor(i / 6) * 40; P.fill([P.I(x + 6, y + 6, 3), P.I(x + 34, y + 6, 3), P.I(x + 34, y + 34, 3), P.I(x + 6, y + 34, 3)], 'b2y1', { noKnock: true }); }
    const c = P.I(150, 150, 60); P.halo(c[0], c[1] - 40, 60 + Math.sin(t * 1.3) * 8, ['y1', 'y1', 'y2']);
  },
  chars: [
    ch(LK.moses, { x: 300, y: 250, face: -1, clip: 'bow', h: 146, hold: { f: 'staffV' } }),
    ch(LK.priest, { x: 320, y: 320, face: -1, clip: 'kneel', h: 140 }),
    ch(LK.mi_nadab, { x: 380, y: 290, z: 0, face: -1, clip: 'eat', h: 136, hold: { n: 'bread' } }),
    ch(LK.mi_abihu, { x: 400, y: 360, face: -1, clip: 'eat', h: 136, hold: { n: 'cup' } }),
    ch(LK.isrOld, { x: 450, y: 420, face: -1, clip: 'lookup', h: 136, hold: { f: 'staffV' } }),
    ch(LK.mi_judge, { x: 480, y: 300, face: -1, clip: 'pray', h: 140 }),
    ch(LK.mi_hur, { x: 350, y: 440, face: -1, clip: 'eat', h: 136, hold: { n: 'cup' } }),
    ch(LK.mi_judge2, { x: 260, y: 400, face: -1, clip: 'lookup', h: 138 })
  ]
},
{
  title: 'Quarante jours dans la nuée', book: 'Exode', ch: 24, ref: 'Exodus 24:18', refFr: 'Exode 24, 18', accent: 1, feast: 'Chabbat Ma’har ’Hodech',
  quote: 'And Moses entering into the midst of the cloud, went up into the mountain:  And he was there forty days and forty nights.',
  fr: 'Et Moïse entra au milieu de la nuée et monta sur la montagne : et il y demeura quarante jours et quarante nuits.',
  more: ['Dieu appelle Moïse : monte vers moi, je te donnerai les tables de pierre. Moïse se lève avec Josué, son serviteur, et dit aux anciens : attendez-nous ici ; Aaron et Hour restent avec vous. La nuée couvre la montagne six jours ; le septième, Dieu appelle Moïse du milieu de la nuée. Aux yeux d’Israël, la gloire est comme un feu dévorant au sommet. Moïse y reste quarante jours et quarante nuits.',
    'Correspondance : <b>Chabbat Ma’har ’Hodech</b>. En 5787, Michpatim tombe le 29 Chevat, veille de Roch ’Hodech Adar I : la haftara est alors 1 Samuel 20, 18-42, qui s’ouvre sur « Demain, c’est la nouvelle lune ». L’année étant embolismique, Chabbat Chekalim n’arrive qu’avant Adar II.'],
  back(P) {
    P.shape(P.disc(500, 470, 450, 64), 'b2r1', 0);
    Lib.cloud(P, 200, 170, 240, 50, 'k2b2'); Lib.cloud(P, 820, 160, 240, 50, 'k2b2');
    miFarm(P, 'y4r2b1');
    miMount(P, 110, 110, 170, 300);
    P.halo(500, 150, 150, ['r1y2', 'r2y3', 'r3y5', 'r5y7'], { knock: false });
    for (const [x, y] of [[360, 300], [410, 360], [460, 300], [330, 400]]) miSeat(P, x, y, 16);
    miRim(P, 400, 330, 90, 16, 'y3r2k3');
    Lib.tent(P, 440, 420, 90, 80, 76, 'b3y2k1'); Lib.tent(P, 470, 170, 60, 60, 56, 'r5y3k1');
    Lib.stones(P, 18, 'y3r2k3', [220, 220, 160, 160]);
  },
  live(P, t) { const pk = P.I(110, 110, 300); Lib.flame(P, pk[0] - 30, pk[1] + 4, 46, 80, t, { noKnock: true }); Lib.flame(P, pk[0] + 34, pk[1] + 8, 40, 66, t + 1.4, { noKnock: true }); Lib.flame(P, pk[0], pk[1], 54, 110, t + 0.6); },
  top(P, t) {
    const pk = P.I(110, 110, 300);
    Lib.cloud(P, pk[0] + Math.sin(t * 0.5) * 8, pk[1] + 140, 360, 80, 'k3b3', { noShade: true });
    Lib.cloud(P, pk[0] - 20 + Math.cos(t * 0.4) * 10, pk[1] + 70, 280, 70, 'k3b2');
  },
  chars: [
    ch(LK.moses, { h: 140, speed: 12, path: [W(250, 250, 2, 'lookup', { f: -1 }), W(180, 180, 0, null, { z: 150 }), W(170, 170, 3, null, { z: 175 }), W(250, 250, 0, null, { jump: 1 })], hold: { n: 'staff' } }),
    ch(LK.mi_joshua, { x: 270, y: 210, face: -1, clip: 'rest', h: 136, hold: { f: 'staffV' } }),
    ch(LK.priest, { x: 360, y: 300, z: 16, face: -1, clip: 'sit', h: 140 }),
    ch(LK.mi_hur, { x: 410, y: 360, z: 16, face: -1, clip: 'sit', h: 136 }),
    ch(LK.mi_judge, { x: 460, y: 300, z: 16, face: -1, clip: 'sit', h: 138 }),
    ch(LK.mi_judge2, { x: 330, y: 400, z: 16, face: -1, clip: 'lookup', h: 138 }),
    ch(LK.isrW, { x: 500, y: 470, face: -1, clip: 'point', h: 128 }),
    ch(LK.child, { x: 450, y: 500, face: -1, clip: 'lookup', h: 88 })
  ]
}
];
