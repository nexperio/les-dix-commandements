/* PARACHA BO · Exode 10, 1 à 13, 16 · Chabbat 16 janvier 2027 */
Object.assign(LK, {
  bo_moses: { skin: 'y5r4k1', hs: 'short', hair: 'k6', beard: 'long', bt: 'k6', robe: 'r5y6k2', cloak: 'b5k1', sash: 'r6y3', head: 'cloth', ht: 'y2r1', band: 'k6', feet: 'sandal' },
  bo_aaron: { skin: 'y5r4k1', hs: 'short', hair: 'k4', beard: 'long', bt: 'k3', robe: 'b5y1', cloak: 'r6b3', sash: 'y7r2', head: 'turban', ht: 'y2', feet: 'sandal' },
  bo_pharaoh: { skin: 'y6r5k1', hs: 'short', hair: 'k8', beard: 'short', bt: 'b6k2', robe: 'y1', len: 'ankle', trim: 1, cloak: 'b6r2', sash: 'y8r2', head: 'tall', ht: 'y1r1', sleeves: 'long', wide: 1 },
  bo_egypt: { skin: 'y6r5k1', hs: 'short', hair: 'k8', robe: 'y1', len: 'knee', sash: 'r5y3', sleeves: 'short', feet: 'bare' },
  bo_egypt2: { skin: 'y6r5k2', hs: 'short', hair: 'k8', robe: 'y2b1', len: 'knee', sash: 'b6', head: 'cap', ht: 'y1', sleeves: 'short', feet: 'bare' },
  bo_egyptW: { fem: 1, skin: 'y6r5k1', hs: 'long', hair: 'k8', robe: 'y1b1', len: 'floor', sleeves: 'short', sash: 'r6', head: 'veil', ht: 'b4y3' },
  bo_guard: { skin: 'y6r5k1', hs: 'short', hair: 'k8', robe: 'y1', len: 'knee', sash: 'r6', head: 'cap', ht: 'b6y2', feet: 'sandal', sleeves: 'none' },
  bo_isrM: Object.assign({}, LK.isrM, { feet: 'sandal', sash: 'r7y2' }),
  bo_isrM2: Object.assign({}, LK.isrM2, { feet: 'sandal', sash: 'y7' }),
  bo_isrW: Object.assign({}, LK.isrW, { feet: 'sandal' }),
  bo_isrOld: Object.assign({}, LK.isrOld, { feet: 'sandal', sash: 'r6' })
});
Object.assign(PROPS2, {
  bo_hyssop(P, A, J, M, h, t, lw, F, u, n, add) { const a = A.t, b = add(A.t, u, 0.1); P.line([M(a), M(b)], lw * 0.9, { ink: 3 }); const q = M(b); P.shape(Lib.bumpy(P, q[0], q[1], h * 0.022, h * 0.016, 5), 'y5b6k1', lw * 0.5); P.fill(P.disc(q[0], q[1] + h * 0.01, h * 0.008, 6), 'r8', {}); },
  bo_tefillin(P, A, J, M, h, t, lw, F) { const c = add2(add2(J.head, J.hu, 0.075), J.hf, 0.02), q = M(c), s = h * 0.016; P.shape([[q[0] - s, q[1] - s], [q[0] + s, q[1] - s], [q[0] + s, q[1] + s], [q[0] - s, q[1] + s]], 'k8', lw * 0.5); const an = J.aN; P.line([M(an.e), M(an.w)], lw * 1.1, { ink: 3 }); const e = M(an.e); P.fill([[e[0] - s * 0.8, e[1] - s * 0.8], [e[0] + s * 0.8, e[1] - s * 0.8], [e[0] + s * 0.8, e[1] + s * 0.8], [e[0] - s * 0.8, e[1] + s * 0.8]], 'k8', {}); }
});
const boHouse = (P, x, y, w, d, h, tn, o = {}) => {
  P.box(x, y, 0, w, d, h, tn);
  P.box(x, y, h, w, 5, 9, tadd(tn, 'k1')); P.box(x, y + d - 5, h, w, 5, 9, tadd(tn, 'k1'));
  if (o.side === 'r') {
    const cy = y + d / 2; P.shape([P.I(x + w + 0.5, cy - 13, 0), P.I(x + w + 0.5, cy + 13, 0), P.I(x + w + 0.5, cy + 13, 46), P.I(x + w + 0.5, cy - 13, 46)], o.lit ? 'y5r2' : 'k7r2', 0.8);
    if (o.blood) { P.line([P.I(x + w + 1, cy - 16, 0), P.I(x + w + 1, cy - 16, 50)], 2.4, { ink: 1 }); P.line([P.I(x + w + 1, cy + 16, 0), P.I(x + w + 1, cy + 16, 50)], 2.4, { ink: 1 }); P.line([P.I(x + w + 1, cy - 18, 51), P.I(x + w + 1, cy + 18, 51)], 2.6, { ink: 1 }); }
  } else {
    const cx = x + w / 2; P.shape([P.I(cx - 13, y + d + 0.5, 0), P.I(cx + 13, y + d + 0.5, 0), P.I(cx + 13, y + d + 0.5, 46), P.I(cx - 13, y + d + 0.5, 46)], o.lit ? 'y5r2' : 'k7r2', 0.8);
    if (o.blood) { P.line([P.I(cx - 16, y + d + 1, 0), P.I(cx - 16, y + d + 1, 50)], 2.4, { ink: 1 }); P.line([P.I(cx + 16, y + d + 1, 0), P.I(cx + 16, y + d + 1, 50)], 2.4, { ink: 1 }); P.line([P.I(cx - 18, y + d + 1, 51), P.I(cx + 18, y + d + 1, 51)], 2.6, { ink: 1 }); }
    if (w > 70) { const wx = x + 12; P.shape([P.I(wx, y + d + 0.5, h - 30), P.I(wx + 12, y + d + 0.5, h - 30), P.I(wx + 12, y + d + 0.5, h - 16), P.I(wx, y + d + 0.5, h - 16)], o.lit ? 'y6r2' : 'k6', 0.5); }
  }
};
const boPyr = (P, list, tn = 'y5r3') => { for (const [cx, w, h] of list) { P.shape([[cx - w, 350], [cx, 350 - h], [cx + w * 0.3, 350]], tn, 1); P.shape([[cx + w * 0.3, 350], [cx, 350 - h], [cx + w, 350]], tadd(tn, 'k2'), 1); } };
const boCol = (P, x, y, h, tn = 'y3r1') => { P.cyl(x, y, 0, 15, h, tn); for (let z = 40; z < h - 20; z += 50) P.cyl(x, y, z, 16, 5, 'b5y2'); P.cyl(x, y, h, 22, 18, 'y5b5'); P.box(x - 20, y - 20, h + 18, 40, 40, 10, 'y4r3'); };
const boCrescent = (P, cx, cy, r, tn = 'y7') => { const pts = []; for (let i = 0; i <= 16; i++) { const a = -Math.PI / 2 + Math.PI * i / 16; pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]); } for (let i = 16; i >= 0; i--) { const a = -Math.PI / 2 + Math.PI * i / 16; pts.push([cx + Math.cos(a) * r * 0.55, cy + Math.sin(a) * r]); } P.shape(pts, tn, 0.9); };
const boSwarm = (P, t, n, cx, cy, rx, ry) => { for (let i = 0; i < n; i++) { const a = i * 2.39 + t * (0.3 + (i % 5) * 0.08), rr = 0.3 + ((i * 37) % 70) / 100; const x = cx + Math.cos(a) * rx * rr + Math.sin(t * 1.7 + i) * 10, y = cy + Math.sin(a * 1.3) * ry * rr + Math.cos(t * 2.1 + i) * 6; const d = (i % 2 ? 1 : -1) * 7; P.fill([[x - d, y], [x, y - 3], [x + d, y - 1], [x, y + 2]], 'k6y4', { noKnock: true }); P.line([[x, y - 2], [x - d * 0.4, y - 9]], 0.9, { ink: 0 }); } };
const boOven = (P, x, y) => { P.cyl(x, y, 0, 22, 34, { t: 'r4y5k2', s: 'r5y5k2', d: 'r5y5k3' }); P.shape(P.ell(x, y, 34.5, 12, 12, 14), 'k8r2', 0.7); };
const boTrough = (x, y) => ({ depth: x + y, draw(P) { P.box(x, y, 0, 44, 24, 12, 'r4y5k3'); const c = P.I(x + 22, y + 12, 12); P.shape(Lib.bumpy(P, c[0], c[1], 20, 7, 6), 'y2r1', 0.6); } });
const SHEET = { title: 'Bo · Viens', sub: 'Paracha de la semaine · Chabbat 16 janvier 2027 · Exode 10, 1 à 13, 16' };
const SCENES = [
{
  title: 'Les sauterelles', book: 'Exode', ch: 10, ref: 'Exodus 10:15', refFr: 'Exode 10, 15', accent: 0, feast: null,
  quote: 'And they covered the whole face of the earth, wasting all things.  And the grass of the earth was devoured, and what fruits soever were on the trees, which the hail had left; and there remained not any thing that was green on the trees, or in the herbs of the earth, in all Egypt.',
  fr: 'Et elles couvrirent toute la face de la terre, dévastant tout. L’herbe de la terre fut dévorée, et tous les fruits des arbres que la grêle avait laissés ; et il ne resta rien de vert aux arbres ni aux herbes des champs, dans toute l’Égypte.',
  more: ['« Viens vers Pharaon », dit Dieu à Moïse : c’est le mot qui donne son nom à la paracha. Moïse et Aaron annoncent la huitième plaie. Les serviteurs de Pharaon le supplient de laisser partir ces hommes, il refuse de laisser partir les enfants et les troupeaux. Moïse étend son bâton, un vent d’orient souffle un jour et une nuit, et au matin les sauterelles couvrent le pays.',
    'Pas de fête juive attachée à ce passage. Pharaon rappelle Moïse et Aaron et avoue sa faute ; un vent d’occident très fort emporte alors les sauterelles jusqu’à la mer des Joncs, et il n’en reste pas une seule (Exode 10, 19).'],
  back(P) {
    P.halo(500, 200, 460, ['y2r1', 'y3r1', 'y3r2', 'y4r2k1'], { sq: 0.5 });
    Lib.sun(P, 800, 140, 26);
    boPyr(P, [[180, 90, 120], [290, 60, 76]], 'y5r3k1');
    Lib.platform(P, 'y4r2k1', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    const riv = [[0, 20], [540, 60], [540, 110], [0, 70]]; P.shape(riv.map(p => P.I(p[0], p[1], 0.5)), 'b5y1k1', 1); Lib.waves(P, [40, 40, 460, 40], 8, 1, 2);
    P.box(20, 120, 0, 110, 150, 120, 'y3r2'); for (let i = 0; i < 5; i++) Lib.wallR(P, 25 + i * 21, 90, 18, 14, i % 2 ? 'b6y2' : 'r6y4', 0.5);
    P.shape([P.I(130.5, 170, 0), P.I(130.5, 220, 0), P.I(130.5, 220, 80), P.I(130.5, 170, 80)], 'k7r2', 0.8);
    boCol(P, 160, 150, 140); boCol(P, 160, 250, 140);
    Lib.field(P, 260, 150, 250, 220, 7, 'y5r2k2');
    for (let i = 0; i < 60; i++) { const c = P.I(250 + P.r() * 270, 140 + P.r() * 380, 0); P.line([[c[0] - 3, c[1]], [c[0] + 3, c[1] - 1]], 1.1, { ink: 3 }); }
    Lib.tree(P, 480, 150, 0, { h: 150, r: 34, blobs: 4, can: 'y3r2k3', trunk: 'r5y4k4' });
    Lib.palm(P, 70, 420, 0, 150, { lean: 10 });
    Lib.stones(P, 12, 'y3r2k3', [20, 300, 200, 220]);
  },
  top(P, t) { boSwarm(P, t, 120, 520, 360, 460, 230); },
  chars: [
    ch(LK.bo_moses, { x: 220, y: 330, face: 1, clip: 'raise', hold: { n: 'staff' }, h: 146 }),
    ch(LK.bo_aaron, { x: 180, y: 380, face: 1, clip: 'point', h: 142 }),
    ch(LK.bo_pharaoh, { x: 110, y: 230, face: 1, clip: 'stagger', h: 150 }),
    ch(LK.bo_guard, { x: 90, y: 150, face: 1, clip: 'guard', hold: { n: 'spear' }, h: 138 }),
    ch(LK.bo_egypt, { x: 360, y: 250, face: -1, clip: 'wave', h: 136 }),
    ch(LK.bo_egypt2, { h: 136, speed: 26, path: [W(470, 320, 1, 'wave'), W(330, 420, 1.5, 'wave'), W(470, 320, 0)] }),
    ch(LK.bo_egyptW, { x: 420, y: 420, face: -1, clip: 'sulk', h: 128 }),
    { beast: 'bull', h: 80, x: 440, y: 500, face: -1 }
  ]
},
{
  title: 'Les ténèbres', book: 'Exode', ch: 10, ref: 'Exodus 10:23', refFr: 'Exode 10, 23', accent: 2, feast: null,
  quote: 'No man saw his brother, nor moved himself out of the place where he was:  but wheresoever the children of Israel dwelt, there was light.',
  fr: 'Nul ne vit son frère, ni ne bougea du lieu où il était : mais partout où habitaient les enfants d’Israël, il y avait de la lumière.',
  more: ['Moïse étend la main vers le ciel, et une obscurité épaisse, « qu’on peut toucher », tombe sur l’Égypte pendant trois jours. Les Égyptiens restent figés sur place, incapables de se voir les uns les autres. Dans les habitations des enfants d’Israël, la lumière demeure. C’est la neuvième plaie.',
    'Pas de fête juive attachée à ce passage. Après les ténèbres, Pharaon cède sur les enfants mais veut garder les troupeaux ; Moïse répond qu’il n’en restera pas un sabot (Exode 10, 26), et Pharaon le chasse en lui interdisant de revoir sa face.'],
  back(P) {
    nightSky(P, 'k6b4', 50);
    P.halo(780, 250, 230, ['y1', 'y2', 'y3r1', 'y4r1'], { knock: true, sq: 0.7 });
    Lib.platform(P, 'y4r2', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    P.fill([P.I(0, 0, 0.5), P.I(250, 0, 0.5), P.I(250, 540, 0.5), P.I(0, 540, 0.5)], 'k6b3', {});
    boHouse(P, 30, 30, 90, 70, 90, 'y3r2k3'); boHouse(P, 150, 40, 70, 60, 70, 'y3r2k3');
    boCol(P, 40, 300, 150, 'y3r1k3'); boCol(P, 40, 420, 150, 'y3r1k3');
    boHouse(P, 300, 40, 90, 70, 90, 'y4r2', { lit: 1 }); boHouse(P, 430, 60, 80, 90, 80, 'y4r3', { lit: 1 }); boHouse(P, 440, 250, 80, 70, 76, 'y4r2', { lit: 1, side: 'r' });
    Lib.lamp(P, 330, 220, 0, 1.3); Lib.lamp(P, 480, 420, 0, 1.2);
    Lib.grass(P, 30, 'y5b4', [280, 300, 240, 220]);
    Lib.tent(P, 300, 430, 90, 80, 80, 'r4y4');
  },
  front(P) { P.fill([P.I(0, 0, 170), P.I(250, 0, 170), P.I(250, 0, 0), P.I(250, 540, 0), P.I(250, 540, -60), P.I(0, 540, -60), P.I(0, 540, 170)], 'k5b3', { noKnock: true }); },
  chars: [
    ch(LK.bo_moses, { x: 270, y: 280, face: -1, clip: 'raise', h: 146 }),
    ch(LK.bo_egypt, { x: 110, y: 200, face: 1, clip: 'reach', h: 136 }),
    ch(LK.bo_egypt2, { x: 170, y: 380, face: -1, clip: 'still', h: 136 }),
    ch(LK.bo_egyptW, { x: 90, y: 470, z: 0, face: 1, clip: 'sit', h: 124 }),
    ch(LK.bo_isrW, { h: 132, speed: 16, over: 'carry', hold: { nTop: 'jarhead' }, path: [W(340, 150, 1.5), W(460, 380, 1.5), W(340, 150, 0)] }),
    ch(LK.child, { h: 90, speed: 22, walk: 'dance', path: [W(360, 330, 0.5), W(420, 380, 0), W(380, 450, 0), W(330, 380, 0.5)] }),
    ch(LK.bo_isrM, { x: 400, y: 220, face: -1, clip: 'talk', h: 140 }),
    { beast: 'sheep', h: 58, x: 480, y: 500, face: -1 }
  ]
},
{
  title: 'Ce mois sera le premier', book: 'Exode', ch: 12, ref: 'Exodus 12:2', refFr: 'Exode 12, 2', accent: 2, feast: 'Chabbat Ha’hodech',
  quote: 'This month shall be to you the beginning of months; it shall be the first in the months of the year.',
  fr: 'Ce mois sera pour vous le commencement des mois ; il sera le premier des mois de l’année.',
  more: ['Dans le pays d’Égypte, Dieu parle à Moïse et à Aaron : le mois de la sortie sera le premier de l’année. Le dixième jour, chaque famille prendra un agneau, le gardera jusqu’au quatorzième, et l’immolera au crépuscule. C’est le premier commandement donné au peuple entier, avant même qu’il soit sorti d’Égypte.',
    'Correspondance : <b>Chabbat Ha’hodech</b>. Ces versets (Exode 12, 1-20) sont lus en lecture complémentaire le Chabbat qui précède ou qui tombe le 1er Nissan. Rachi ouvre son commentaire de la Genèse en demandant pourquoi la Torah ne commence pas ici, par le premier commandement donné à Israël.'],
  back(P) {
    P.shape(P.disc(500, 470, 450, 64), 'b6r2k3', 0);
    for (let i = 0; i < 40; i++) { const x = 100 + P.r() * 800, y = 40 + P.r() * 280; Lib.star(P, x, y, 2 + P.r() * 3, 'y6'); }
    P.halo(300, 130, 90, ['b3', 'b2y1', 'y2', 'y3'], { knock: true });
    boCrescent(P, 300, 130, 36, 'y7');
    Lib.platform(P, 'y4b2k1', 'y4r3k2', { strata: [[0, .4, 'y4r3k2'], [.4, 1, 'y4r4k3']] });
    boHouse(P, 30, 30, 100, 70, 90, 'y4r3k1'); boHouse(P, 160, 20, 80, 60, 80, 'y3r3k1'); boHouse(P, 40, 180, 70, 80, 80, 'y4r2k1', { side: 'r' });
    fenceRing(P, 400, 400, 90, -3.2, 0.4, 12);
    Lib.stones(P, 20, 'y3r2k3', [200, 200, 300, 300]);
    Lib.palm(P, 480, 80, 0, 160, { lean: -12, dates: 1 });
    Lib.jar(P, 150, 160, 0, 1.3); Lib.jar(P, 175, 170, 0, 1.1, 'b5y3');
  },
  chars: [
    ch(LK.bo_moses, { x: 230, y: 240, face: -1, clip: 'point', h: 146 }),
    ch(LK.bo_aaron, { x: 280, y: 200, face: -1, clip: 'raise', h: 142 }),
    ch(LK.bo_isrOld, { x: 180, y: 330, face: 1, clip: 'lookup', h: 138, hold: { f: 'staffV' } }),
    ch(LK.bo_isrM, { x: 260, y: 360, face: -1, clip: 'lookup', h: 140 }),
    ch(LK.bo_isrW, { x: 150, y: 420, face: 1, clip: 'lookup', h: 130 }),
    { beast: 'sheep', h: 58, x: 400, y: 380, face: -1 }, { beast: 'sheep', h: 56, x: 440, y: 440, face: 1 },
    { beast: 'sheep', h: 54, speed: 6, path: [W(360, 450, 3), W(420, 480, 2), W(360, 450, 0)] }
  ]
},
{
  title: 'Le sang sur les linteaux', book: 'Exode', ch: 12, ref: 'Exodus 12:7', refFr: 'Exode 12, 7', accent: 1, feast: 'Pessah',
  quote: 'And they shall take of the blood thereof, and put it upon both the side posts, and on the upper door posts of the houses, wherein they shall eat it.',
  fr: 'Ils prendront de son sang et en mettront sur les deux montants et sur le linteau des maisons où ils le mangeront.',
  more: ['Le quatorzième jour du mois, au crépuscule, chaque maison immole son agneau. Avec un bouquet d’hysope trempé dans le sang, on marque les deux montants et le linteau de la porte. « Je verrai le sang et je passerai au-dessus de vous » : le fléau épargnera les maisons marquées. Personne ne doit sortir avant le matin.',
    'Correspondance : <b>Pessah</b>. Le nom de la fête vient de ce verbe : Dieu « passa » (pasa’h) au-dessus des maisons d’Israël (Exode 12, 27). Au séder, Rabban Gamliel enseigne qu’il faut expliquer trois choses : le pessah, la matsa et les herbes amères (Michna Pessahim 10, 5).'],
  back(P) {
    P.halo(500, 260, 460, ['r2y2', 'r3y3', 'r4y4', 'r5y4k1'], { sq: 0.5 });
    Lib.sun(P, 180, 300, 34);
    Lib.platform(P, 'y4r2k1', 'y4r3k2', { strata: [[0, .4, 'y4r3k2'], [.4, 1, 'y4r4k3']] });
    boHouse(P, 30, 30, 110, 80, 100, 'y4r3', { blood: 1 }); boHouse(P, 180, 30, 110, 80, 96, 'y3r3k1', { blood: 1 }); boHouse(P, 330, 30, 100, 80, 90, 'y4r2k1');
    boHouse(P, 30, 200, 80, 110, 90, 'y4r2', { blood: 1, side: 'r' });
    const b = P.I(230, 150, 0); P.shape(P.ell(230, 150, 0, 16, 16, 16), 'r5y5k3', 0.8); P.fill(P.ell(230, 150, 6, 12, 12, 14), 'r8k2', {}); void b;
    Lib.bush(P, 470, 200, 0, 20, 'y5b6'); Lib.bush(P, 490, 240, 0, 16, 'y5b5k1');
    fenceRing(P, 420, 420, 80, -2.8, 0.2, 10);
    Lib.stones(P, 18, 'y3r2k3', [150, 250, 300, 250]);
    Lib.jar(P, 130, 150, 0, 1.2);
  },
  chars: [
    ch(LK.bo_isrM, { x: 285, y: 130, face: -1, clip: 'reach', hold: { n: 'bo_hyssop' }, h: 140 }),
    ch(LK.child, { x: 245, y: 165, face: -1, clip: 'offer', h: 90 }),
    ch(LK.bo_isrM2, { x: 135, y: 280, face: 1, clip: 'reach', hold: { n: 'bo_hyssop' }, h: 140 }),
    ch(LK.bo_isrW, { x: 170, y: 340, face: -1, clip: 'offer', h: 130, hold: { f: 'cup' } }),
    ch(LK.bo_isrOld, { x: 330, y: 300, face: -1, clip: 'point', h: 136, hold: { f: 'staffV' } }),
    ch(LK.childG, { h: 88, speed: 14, path: [W(440, 150, 2), W(380, 250, 2, 'lookup'), W(440, 150, 0)] }),
    { beast: 'sheep', h: 58, x: 420, y: 400, face: -1 }, { beast: 'sheep', h: 54, x: 460, y: 450, face: 1 }
  ]
},
{
  title: 'Le repas en hâte', book: 'Exode', ch: 12, ref: 'Exodus 12:11', refFr: 'Exode 12, 11', accent: 0, feast: 'Pessah',
  quote: 'And thus you shall eat it:  you shall gird your reins, and you shall have shoes on your feet, holding staves in your hands, and you shall eat in haste; for it is the Phase (that is the Passage) of the Lord.',
  fr: 'Et vous le mangerez ainsi : les reins ceints, les sandales aux pieds, le bâton à la main ; vous le mangerez à la hâte, car c’est la Pâque du Seigneur.',
  more: ['L’agneau est rôti tout entier au feu, la tête, les pattes et les entrailles, et mangé la nuit même avec des pains sans levain et des herbes amères. Rien ne doit rester au matin. On mange debout, en tenue de voyage, prêt à partir, dans les maisons dont les portes sont marquées de sang.',
    'Correspondance : <b>Pessah</b>. Le séder reprend chaque année ce repas : la matsa, le maror, l’os rôti posé sur le plateau en souvenir de l’agneau. La Haggada demande : « Pourquoi cette nuit est-elle différente de toutes les autres nuits ? »'],
  back(P) {
    nightSky(P, 'b6k4', 40); Lib.moon(P, 800, 130, 24);
    Lib.platform(P, 'y3r2k1', 'y4r3k2', { h: 50 });
    Lib.walls(P, { l: 'y3r3k1', r: 'y3r3k2', cut: 'y4r3k3' }, { h: 220 });
    P.shape([P.I(0.5, 330, 0), P.I(0.5, 400, 0), P.I(0.5, 400, 120), P.I(0.5, 330, 120)], 'b6k3', 1);
    P.line([P.I(1, 326, 0), P.I(1, 326, 126)], 2.4, { ink: 1 }); P.line([P.I(1, 404, 0), P.I(1, 404, 126)], 2.4, { ink: 1 }); P.line([P.I(1, 322, 128), P.I(1, 408, 128)], 2.6, { ink: 1 });
    for (let x = 30; x < 520; x += 70) Lib.jar(P, x, 10, 0, 1.2, x % 140 ? 'r5y6k1' : 'b5y3');
    P.box(380, 60, 0, 70, 60, 30, 'r4y5k3'); Lib.stones(P, 8, 'k4r2', [385, 65, 60, 50]);
    P.box(200, 230, 0, 160, 80, 34, 'r4y5k2');
    for (let i = 0; i < 5; i++) { const c = P.I(220 + i * 28, 250, 34); P.shape(P.ell(220 + i * 28, 250, 34.5, 11, 11, 12), 'y5r2', 0.6); P.fill(P.disc(c[0], c[1], 1.2, 5), 'r5y5k3', {}); }
    for (let i = 0; i < 4; i++) { const c = P.I(230 + i * 34, 290, 34); P.shape(Lib.bumpy(P, c[0], c[1] - 4, 9, 5, 5), 'y6b6', 0.6); }
    Lib.lamp(P, 190, 30, 60, 1.1);
  },
  live(P, t) { const a = P.I(415, 90, 30); Lib.flame(P, a[0], a[1] - 4, 30, 44, t); P.line([P.I(385, 90, 60), P.I(445, 90, 60)], 1.8, { ink: 3 }); const c = P.I(415, 90, 60); P.shape(Lib.bumpy(P, c[0], c[1], 22, 10, 6), 'r5y5k3', 0.8); },
  chars: [
    ch(LK.bo_isrOld, { x: 180, y: 290, face: 1, clip: 'offer', h: 138, hold: { f: 'staffV', n: 'bread' } }),
    ch(LK.bo_isrM, { x: 260, y: 350, face: -1, clip: 'offer', h: 140, hold: { f: 'staffV', n: 'bread' } }),
    ch(LK.bo_isrW, { x: 330, y: 350, face: -1, clip: 'idle', h: 130, hold: { f: 'staffV' } }),
    ch(LK.bo_isrM2, { x: 380, y: 270, face: -1, clip: 'talk', h: 140, hold: { f: 'staffV' } }),
    ch(LK.child, { x: 220, y: 380, face: 1, clip: 'lookup', h: 90 }),
    ch(LK.childG, { x: 300, y: 400, face: -1, clip: 'offer', h: 88, hold: { n: 'bread' } }),
    ch(LK.isrW2, { h: 128, speed: 14, path: [W(420, 150, 1.5, 'offer'), W(300, 200, 1.5, 'offer'), W(420, 150, 0)], hold: { n: 'bread' } })
  ]
},
{
  title: 'Un grand cri à minuit', book: 'Exode', ch: 12, ref: 'Exodus 12:30', refFr: 'Exode 12, 30', accent: 1, feast: 'Jeûne des premiers-nés',
  quote: 'And Pharao arose in the night, and all his servants, and all Egypt:  and there arose a great cry in Egypt; for there was not a house wherein there lay not one dead.',
  fr: 'Et Pharaon se leva dans la nuit, lui et tous ses serviteurs et toute l’Égypte : et il y eut un grand cri en Égypte, car il n’y avait pas de maison où il n’y eût un mort.',
  more: ['À minuit, les premiers-nés d’Égypte meurent, depuis le fils de Pharaon assis sur son trône jusqu’au fils du captif dans sa prison. Pharaon se lève dans la nuit et fait appeler Moïse et Aaron : « Levez-vous, sortez du milieu de mon peuple, vous et les enfants d’Israël, allez servir le Seigneur comme vous l’avez dit. »',
    'Correspondance : <b>Jeûne des premiers-nés</b>. La veille de Pessah, le 14 Nissan, les premiers-nés d’Israël ont coutume de jeûner, en souvenir de ceux qui furent épargnés cette nuit-là. La plupart participent le matin à la conclusion d’un traité d’étude, dont le repas de fête lève le jeûne.'],
  back(P) {
    const L = P.L;
    Lib.platform(P, 'y3r1k2', 'y4r3k2', { h: 50, pebbles: false });
    for (let i = 0; i < 9; i++) for (let j = 0; j < 9; j++) P.fill([P.I(i * 60, j * 60, 0), P.I(i * 60 + 60, j * 60, 0), P.I(i * 60 + 60, j * 60 + 60, 0), P.I(i * 60, j * 60 + 60, 0)], (i + j) % 2 ? 'y3r2k2' : 'y2r1k2', {});
    P.outline([P.I(0, 0, 0), P.I(L, 0, 0), P.I(L, L, 0), P.I(0, L, 0)], 1.2);
    Lib.walls(P, { l: 'b3y2k3', r: 'b3y2k4', cut: 'y4r3k3' }, { h: 300 });
    for (let x = 0; x < L; x += 30) Lib.wallR(P, x, 252, 26, 18, (x / 30) % 2 ? 'b6y2k1' : 'r6y4k1', 0.6);
    for (let y = 0; y < L; y += 30) Lib.wallL(P, y, 252, 26, 18, (y / 30) % 2 ? 'b6y2k1' : 'r6y4k1', 0.6);
    P.shape([P.I(380, 0.5, 0), P.I(460, 0.5, 0), P.I(460, 0.5, 150), P.I(380, 0.5, 150)], 'b7k4', 1.1);
    for (const [x, y] of [[300, 40], [40, 300]]) boCol(P, x, y, 230, 'y3r1k2');
    P.box(40, 150, 0, 150, 160, 20, 'r4y4k2'); P.box(64, 190, 20, 20, 90, 150, 'y7r4k2'); P.box(84, 205, 20, 40, 60, 50, 'y6r3k2');
    P.box(260, 330, 0, 120, 50, 26, 'y2r1k1'); P.box(262, 332, 26, 116, 46, 6, 'y1');
    Lib.lamp(P, 200, 60, 0, 1.2); Lib.lamp(P, 60, 480, 0, 1);
  },
  live(P, t) { for (const [x, y] of [[200, 60], [60, 480]]) { const a = P.I(x, y, 0); Lib.flame(P, a[0] + 2, a[1] - 5, 8, 16, t + x); } },
  chars: [
    ch(LK.bo_pharaoh, { x: 180, y: 250, face: 1, clip: 'point', h: 150 }),
    ch(Object.assign({}, LK.bo_pharaoh, { head: null, cloak: null, beard: null, robe: 'y1', len: 'knee' }), { x: 320, y: 355, z: 30, face: 1, clip: 'lie', h: 120 }),
    ch(LK.bo_egyptW, { x: 290, y: 420, face: -1, clip: 'kneel', h: 128 }),
    ch(LK.bo_egypt, { x: 360, y: 450, face: -1, clip: 'sulk', h: 134 }),
    ch(LK.bo_guard, { x: 90, y: 400, face: 1, clip: 'stagger', h: 136 }),
    ch(LK.bo_egypt2, { x: 250, y: 180, face: 1, clip: 'prostrate', h: 134 }),
    ch(LK.bo_moses, { x: 420, y: 110, face: -1, clip: 'still', h: 146, hold: { f: 'staffV' } }),
    ch(LK.bo_aaron, { x: 470, y: 150, face: -1, clip: 'idle', h: 142 })
  ]
},
{
  title: 'La pâte sur les épaules', book: 'Exode', ch: 12, ref: 'Exodus 12:34', refFr: 'Exode 12, 34', accent: 0, feast: 'Pessah',
  quote: 'The people therefore took dough before it was leavened; and tying it in their cloaks, put it on their shoulders.',
  fr: 'Le peuple emporta donc sa pâte avant qu’elle eût levé ; ils lièrent leurs pétrins dans leurs manteaux et les mirent sur leurs épaules.',
  more: ['Les Égyptiens pressent le peuple de partir. Il n’y a pas le temps de laisser lever la pâte : on l’enveloppe dans les manteaux avec les pétrins et on la charge sur l’épaule. Sur le conseil de Moïse, les Israélites demandent aux Égyptiens des objets d’argent et d’or et des vêtements, et les Égyptiens les leur donnent.',
    'Correspondance : <b>Pessah</b>. En chemin, cette pâte cuite en galettes devient la matsa (Exode 12, 39). D’où l’interdiction de tout levain pendant les sept jours de la fête, et la recherche du ’hamets à la lueur d’une bougie la veille au soir.'],
  back(P) {
    Lib.sun(P, 200, 150, 28); boPyr(P, [[780, 80, 100]], 'y5r3');
    Lib.platform(P, 'y5r2', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    boHouse(P, 20, 20, 110, 80, 100, 'y4r3', { blood: 1 }); boHouse(P, 170, 20, 90, 70, 90, 'y3r3k1', { blood: 1 });
    boHouse(P, 20, 180, 80, 110, 90, 'y4r2k1', { blood: 1, side: 'r' });
    boOven(P, 300, 110);
    const road = [[120, 540], [300, 300], [540, 180]]; for (let i = 0; i < 2; i++) { const a = road[i], b = road[i + 1]; P.fill([P.I(a[0] - 30, a[1], 0.5), P.I(b[0] - 30, b[1], 0.5), P.I(b[0] + 30, b[1], 0.5), P.I(a[0] + 30, a[1], 0.5)], 'y3r2', {}); }
    Lib.stones(P, 14, 'y3r2k3', [20, 330, 180, 200]);
    Lib.palm(P, 470, 60, 0, 150, { lean: -10, dates: 1 });
    Lib.grass(P, 20, 'y5b4', [380, 330, 150, 200]);
  },
  live(P, t) { const a = P.I(300, 110, 34); Lib.smoke(P, a[0], a[1] - 4, t, { n: 4, h: 120, r: 12, tn: 'k2' }); },
  chars: [
    boTrough(150, 330),
    ch(LK.bo_isrW, { x: 170, y: 375, face: 1, clip: 'glean', h: 128 }),
    ...[[LK.bo_isrM, 0, {}], [LK.bo_isrW, 3.4, {}], [LK.child, 6, { h: 90, over: null, hold: null }], [LK.bo_isrM2, 8.6, {}], [LK.bo_isrOld, 12.5, { over: null, hold: { f: 'staffV', n: 'bundle' } }]].map(([lk, t0, o]) => ch(lk, Object.assign({ h: 136, t0, speed: 24, over: 'carry', hold: { nTop: 'bundle' }, path: [W(140, 520, 0), W(300, 310, 0), W(520, 190, 0), W(140, 520, 0, null, { jump: 1 })] }, o))),
    ch(LK.bo_egyptW, { x: 360, y: 250, face: -1, clip: 'offer', h: 128, hold: { n: 'cup' } }),
    ch(LK.bo_egypt, { x: 420, y: 330, face: -1, clip: 'offer', h: 134, hold: { n: 'scroll' } })
  ]
},
{
  title: 'De Ramsès à Soukkot', book: 'Exode', ch: 12, ref: 'Exodus 12:37', refFr: 'Exode 12, 37', accent: 2, feast: null,
  quote: 'And the children of Israel set forward from Ramesse to Socoth, being about six hundred thousand men on foot, beside children.',
  fr: 'Et les enfants d’Israël partirent de Ramsès pour Soukkot, environ six cent mille hommes à pied, sans compter les enfants.',
  more: ['Au terme de quatre cent trente ans, le jour même, toutes les armées du Seigneur sortent du pays d’Égypte. Six cent mille hommes à pied, les femmes, les enfants, une multitude mêlée qui se joint à eux, des brebis et des bœufs en très grand nombre. Ils partent de Ramsès, l’une des villes-entrepôts qu’ils avaient bâties pour Pharaon.',
    'Pas de fête juive attachée à ce passage en dehors de Pessah lui-même. Le texte appelle cette nuit « nuit de veille pour le Seigneur » (Exode 12, 42), que tous les enfants d’Israël garderont au long de leurs générations.'],
  back(P) {
    Lib.sun(P, 820, 150, 30); boPyr(P, [[170, 90, 110], [270, 56, 70]]);
    Lib.platform(P, 'y5r2b1', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    Lib.city(P, 10, 10, 180, 170, 8, 'y4r3', 5);
    P.box(200, 20, 0, 16, 130, 44, 'y3r2k1'); P.box(10, 200, 0, 186, 16, 44, 'y3r2k1');
    Lib.gate(P, 196, 150, 60, 110, 'y4r3k2');
    const road = [[230, 180], [380, 330], [540, 500]]; for (let i = 0; i < 2; i++) { const a = road[i], b = road[i + 1]; P.fill([P.I(a[0], a[1] - 34, 0.5), P.I(b[0], b[1] - 34, 0.5), P.I(b[0], b[1] + 34, 0.5), P.I(a[0], a[1] + 34, 0.5)], 'y3r2', {}); }
    Lib.grass(P, 40, 'y5b4', [20, 260, 250, 260]);
    Lib.stones(P, 20, 'y3r2k3', [300, 20, 220, 250]);
    Lib.palm(P, 460, 120, 0, 150, { lean: -10 }); Lib.palm(P, 90, 440, 0, 140, { lean: 12 });
  },
  chars: [
    ch(LK.bo_moses, { x: 470, y: 400, face: 1, clip: 'point', h: 146, hold: { n: 'staff' } }),
    ...[[LK.bo_isrM, 0, { hold: { f: 'staffV' } }], [LK.bo_isrW, 3, { over: 'carry', hold: { nTop: 'bundle' } }], [LK.childG, 4.4, { h: 90 }], [LK.bo_isrOld, 8, { hold: { f: 'staffV' } }], [LK.isrW2, 11.5, { over: 'carry', hold: { nTop: 'jarhead' } }], [LK.bo_isrM2, 15, { hold: { f: 'lamb' } }]].map(([lk, t0, o]) => ch(lk, Object.assign({ h: 136, t0, speed: 22, path: [W(230, 180, 0), W(520, 480, 0), W(230, 180, 0, null, { jump: 1 })] }, o))),
    { beast: 'sheep', h: 56, t0: 1.2, speed: 22, path: [W(260, 170, 0), W(530, 450, 0), W(260, 170, 0, null, { jump: 1 })] },
    { beast: 'bull', h: 76, t0: 9.8, speed: 22, path: [W(210, 210, 0), W(490, 500, 0), W(210, 210, 0, null, { jump: 1 })] }
  ]
},
{
  title: 'Un signe sur ta main', book: 'Exode', ch: 13, ref: 'Exodus 13:9', refFr: 'Exode 13, 9', accent: 1, feast: null,
  quote: 'And it shall be as a sign in thy hand, and as a memorial before thy eyes; and that the law of the Lord be always in thy mouth, for with a strong hand the Lord hath brought thee out of the land of Egypt.',
  fr: 'Et ce sera pour toi un signe sur ta main et un souvenir entre tes yeux, afin que la loi du Seigneur soit toujours dans ta bouche ; car c’est d’une main forte que le Seigneur t’a fait sortir d’Égypte.',
  more: ['La paracha se termine par des commandements de mémoire : consacrer les premiers-nés, manger des pains sans levain sept jours, et raconter. « Tu le raconteras à ton fils en ce jour-là : c’est à cause de ce que le Seigneur a fait pour moi quand je suis sorti d’Égypte » (Exode 13, 8). Le souvenir doit être un signe sur la main et entre les yeux.',
    'Pas de fête juive attachée à ce passage. La tradition y lit le commandement des tefillin : les boîtiers de la main et de la tête contiennent quatre passages, dont deux viennent de cette paracha (Exode 13, 1-10 et 13, 11-16). Exode 13, 8 est aussi le verset d’où la Haggada tire l’obligation du récit.'],
  back(P) {
    Lib.sun(P, 180, 140, 30); Lib.cloud(P, 760, 150, 160, 34, 'b1');
    Lib.platform(P, 'y5r2', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    Lib.tent(P, 30, 30, 140, 110, 120, 'r5y4k1'); Lib.tent(P, 220, 20, 110, 90, 90, 'b3y2k1'); Lib.tent(P, 400, 40, 110, 100, 100, 'y4r3k2');
    Lib.tent(P, 30, 260, 110, 100, 96, 'b4r2k1');
    const a = P.I(300, 200, 0); P.shape(P.ell(300, 200, 0, 24, 24, 14), 'k5r2', 0.8); Lib.stones(P, 7, 'k4', [280, 180, 40, 40]); void a;
    Lib.grass(P, 30, 'y5b4', [200, 350, 300, 180]);
    Lib.stones(P, 12, 'y3r2k3', [20, 400, 160, 120]);
    Lib.jar(P, 180, 150, 0, 1.3); Lib.jar(P, 200, 165, 0, 1.1, 'b5y3');
  },
  live(P, t) { const a = P.I(300, 200, 0); Lib.flame(P, a[0], a[1] - 4, 20, 34, t); Lib.smoke(P, a[0], a[1] - 30, t, { n: 3, h: 120, r: 12, tn: 'k2' }); },
  chars: [
    ch(LK.bo_isrOld, { x: 240, y: 290, face: 1, clip: 'talk', h: 140, hold: { nTop: 'bo_tefillin' } }),
    ch(LK.child, { x: 300, y: 330, face: -1, clip: 'lookup', h: 92 }),
    ch(LK.bo_isrM, { x: 380, y: 250, face: -1, clip: 'pray', h: 140, hold: { nTop: 'bo_tefillin' } }),
    ch(LK.bo_isrM2, { x: 170, y: 380, face: 1, clip: 'raise', h: 140, hold: { nTop: 'bo_tefillin' } }),
    ch(LK.childG, { x: 220, y: 420, face: 1, clip: 'talk', h: 88 }),
    ch(LK.bo_isrW, { h: 130, speed: 14, over: 'carry', hold: { nTop: 'jarhead' }, path: [W(460, 300, 1.5), W(420, 460, 1.5), W(460, 300, 0)] }),
    { beast: 'sheep', h: 56, x: 470, y: 480, face: -1 }, { beast: 'donkey', h: 86, x: 110, y: 200, face: 1 }
  ]
}
];
