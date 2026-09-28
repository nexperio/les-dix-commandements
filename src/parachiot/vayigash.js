/* PARACHA VAYIGACH · Genèse 44, 18 à 47, 27 · Chabbat 19 décembre 2026 */
Object.assign(LK, {
  vg_joseph: { skin: 'y5r4', hs: 'short', hair: 'k6r2', robe: 'y1', len: 'ankle', trim: 1, sleeves: 'long', wide: 1, sash: 'y8r2', cloak: 'b5r3', head: 'cloth', ht: 'y1b1', band: 'y8r2', feet: 'sandal' },
  vg_judah: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'full', bt: 'k7', robe: 'r6y4k1', cloak: 'y5r3k2', sash: 'b5', head: 'cloth', ht: 'r4y3', band: 'k6' },
  vg_benjamin: { skin: 'y5r4', hs: 'curly', hair: 'k7r2', robe: 'b4r2', len: 'knee', sleeves: 'short', sash: 'y7', head: 'cloth', ht: 'y2', band: 'b5' },
  vg_jacob: { old: 1, skin: 'y5r4', hs: 'fringe', hair: 'k1', beard: 'full', bt: 'k1b1', robe: 'r5y5k2', cloak: 'b4k2', sash: 'y6r2', head: 'cloth', ht: 'y2', band: 'k5' },
  vg_pharaoh: { skin: 'y6r5k1', hs: 'short', hair: 'k8', beard: 'short', bt: 'k8', robe: 'y1', len: 'ankle', trim: 1, sleeves: 'long', wide: 1, cloak: 'b6y1', sash: 'y8r2', head: 'tall', ht: 'y1b3' },
  vg_egypt: { skin: 'y6r5k1', hs: 'short', hair: 'k8', robe: 'y1', len: 'knee', sleeves: 'none', sash: 'b5', head: 'cap', ht: 'b5y2', feet: 'sandal' },
  vg_egyptW: { fem: 1, skin: 'y6r5k1', hs: 'long', hair: 'k8', robe: 'y1b1', len: 'floor', sleeves: 'short', sash: 'r6', head: 'veil', ht: 'b4y3' }
});
Object.assign(BEAST, { vg_horse: { bl: .7, bh: .3, lh: .5, nk: [.32, -52], hd: [.22, 55, .075, .05], tone: 'r5y5k3', ears: 'small', tail: 1, mane: 'k6' } });
const vgCol = (P, x, y, h) => { P.cyl(x, y, 0, 17, h, 'y3r1'); for (let z = 40; z < h - 20; z += 60) P.cyl(x, y, z, 18, 6, 'b5y2'); P.cyl(x, y, h, 25, 22, 'y5b5'); P.box(x - 22, y - 22, h + 22, 44, 44, 12, 'y4r3'); };
const vgHall = (P, o = {}) => {
  const L = P.L;
  Lib.platform(P, 'y3r1', 'y4r3k1', { h: 50, pebbles: false, strata: [[0, .5, 'y4r3k1'], [.5, 1, 'y4r3k3']] });
  for (let i = 0; i < 9; i++) for (let j = 0; j < 9; j++) { const x = i * 60, y = j * 60; P.fill([P.I(x, y, 0), P.I(x + 60, y, 0), P.I(x + 60, y + 60, 0), P.I(x, y + 60, 0)], (i + j) % 2 ? 'y4r2' : 'y2r1', {}); }
  P.outline([P.I(0, 0, 0), P.I(L, 0, 0), P.I(L, L, 0), P.I(0, L, 0)], 1.2);
  Lib.walls(P, { l: o.wl || 'y3r2', r: o.wr || 'y3r2k1', cut: 'y4r3k2' }, { h: 300 });
  for (let x = 0; x < L; x += 30) Lib.wallR(P, x, 252, 26, 18, (x / 30) % 2 ? 'b6y2' : 'r6y4', 0.6);
  for (let y = 0; y < L; y += 30) Lib.wallL(P, y, 252, 26, 18, (y / 30) % 2 ? 'b6y2' : 'r6y4', 0.6);
  for (let i = 0; i < 24; i++) { const x = 70 + (i % 12) * 36, z = 180 + Math.floor(i / 12) * 34, a = P.I(x, 0.5, z), k = i % 4; if (o.door && x > 360 && x < 480) continue; if (k === 0) P.shape(P.disc(a[0], a[1] - 8, 5, 10), 'r6y5', 0.5); else if (k === 1) Lib.bird(P, a[0], a[1] - 6, 0.7, 0.1, 'k5'); else if (k === 2) P.line([[a[0], a[1]], [a[0], a[1] - 18], [a[0] + 6, a[1] - 22]], 1, { ink: 3 }); else P.shape([[a[0] - 5, a[1]], [a[0] + 5, a[1] - 3], [a[0] + 5, a[1] - 14], [a[0] - 5, a[1] - 11]], 'b5y2', 0.5); }
  if (o.door) { P.shape([P.I(380, 0.5, 0), P.I(460, 0.5, 0), P.I(460, 0.5, 140), P.I(380, 0.5, 140)], 'y6r2', 1.1); P.box(372, 0, 140, 96, 10, 16, 'y4r3k1'); }
  for (const [x, y] of o.cols || [[300, 40], [470, 40]]) vgCol(P, x, y, 230);
};
const vgThrone = (P, tall) => {
  P.box(40, 150, 0, 150, 200, 20, 'r4y4'); P.box(60, 170, 20, 130, 160, 14, 'b5y2');
  P.box(80, 210, 34, 40, 90, 55, 'y7r3'); P.box(64, 205, 34, 20, 100, tall ? 190 : 150, { t: 'y8r3', l: 'y7r4k1', r: 'y7r4k2' });
  for (const y of [205, 295]) P.cyl(84, y + 5, 34, 7, tall ? 210 : 170, 'y8r2');
  if (tall) { const c = P.I(74, 255, 250); P.shape(P.disc(c[0], c[1], 16, 20), 'r7y6', 1); for (const s of [-1, 1]) P.shape([[c[0] + s * 14, c[1]], [c[0] + s * 70, c[1] - 12], [c[0] + s * 60, c[1] + 2], [c[0] + s * 70, c[1] + 6], [c[0] + s * 14, c[1] + 6]], 'b6y2', 0.8); }
};
const vgSacks = (P, pts) => { for (const [x, y, s] of pts) { const c = P.I(x, y, 0); P.shape(Lib.bumpy(P, c[0], c[1] - 12 * s, 16 * s, 13 * s, 6), 'y4r2k1', 0.9); P.line([[c[0] - 8 * s, c[1] - 22 * s], [c[0] + 8 * s, c[1] - 24 * s]], 1.2, { ink: 1 }); } };
const vgWagon = (x, y, o = {}) => ({ depth: x + y + 40, draw(P) {
  const L = o.l || 80, D = 44, zb = 16, tn = o.tn || 'r4y5k2';
  const wheel = (cx, cy) => { const pts = []; for (let i = 0; i < 16; i++) { const a = i / 16 * TAU; pts.push(P.I(cx + Math.cos(a) * 16, cy, 16 + Math.sin(a) * 16)); } P.shape(pts, 'r5y5k4', 1); for (let k = 0; k < 4; k++) { const a = k / 4 * Math.PI; P.line([P.I(cx + Math.cos(a) * 14, cy, 16 + Math.sin(a) * 14), P.I(cx - Math.cos(a) * 14, cy, 16 - Math.sin(a) * 14)], 0.7); } const c = P.I(cx, cy, 16); P.fill(P.disc(c[0], c[1], 2.5, 8), 'k6', {}); };
  wheel(x + 14, y - 2); wheel(x + L - 14, y - 2);
  P.line([P.I(x + L, y + D / 2, zb + 6), P.I(x + L + 46, y + D / 2, 20)], 1.8, { ink: 3 });
  P.box(x, y, zb, L, D, 18, tn);
  if (o.load !== false) for (let i = 0; i < 4; i++) { const c = P.I(x + 12 + i * 18, y + 12 + (i % 2) * 16, zb + 18); P.shape(Lib.bumpy(P, c[0], c[1] - 8, 11, 9, 5), i % 2 ? 'y6r2k1' : ['y5r3', 'b5r3', 'r6y3'][i >> 1 ? 2 : 0], 0.8); }
  wheel(x + 14, y + D + 2); wheel(x + L - 14, y + D + 2);
} });
const vgChariot = (x, y) => ({ depth: x + y, draw(P) {
  const Q = (a, b, z) => P.I(x - a * 0.707 + b * 0.707, y + a * 0.707 + b * 0.707, z);
  const wheel = b => { const pts = []; for (let i = 0; i < 18; i++) { const a = i / 18 * TAU; pts.push(Q(Math.cos(a) * 20, b, 20 + Math.sin(a) * 20)); } P.shape(pts, 'r5y5k3', 1); for (let k = 0; k < 3; k++) { const a = k / 3 * Math.PI; P.line([Q(Math.cos(a) * 18, b, 20 + Math.sin(a) * 18), Q(-Math.cos(a) * 18, b, 20 - Math.sin(a) * 18)], 0.7); } };
  wheel(-20);
  P.line([Q(20, 0, 24), Q(72, 0, 46)], 2, { ink: 3 });
  P.shape([Q(-15, -18, 22), Q(20, -18, 22), Q(20, 18, 22), Q(-15, 18, 22)], 'r5y5k3', 0.9);
  P.shape([Q(20, -18, 22), Q(20, 18, 22), Q(20, 18, 50), Q(20, -18, 50)], 'y7r3', 1);
  P.shape([Q(-15, 18, 22), Q(20, 18, 22), Q(20, 18, 46), Q(-15, 18, 40)], 'y7r4k1', 1);
  for (let i = 0; i < 3; i++) { const c = Q(3, 18, 32 + i * 4); P.fill(P.disc(c[0] + (i - 1) * 8, c[1], 2, 6), 'b6', {}); }
  wheel(20);
} });
const SHEET = { title: 'Vayigach · Il s’approcha', sub: 'Paracha de la semaine · Chabbat 19 décembre 2026 · Genèse 44, 18 à 47, 27' };
const SCENES = [
{
  title: 'Juda s’avance vers Joseph', book: 'Genèse', ch: 44, ref: 'Genesis 44:18', refFr: 'Genèse 44, 18', accent: 1, feast: null,
  quote: 'Then Juda coming nearer, said boldly:  I beseech thee, my lord, let thy servant speak a word in thy ears, and be not angry with thy servant:  for after Pharao thou art.',
  fr: 'Alors Juda, s’approchant, dit avec assurance : Je t’en prie, mon seigneur, que ton serviteur dise une parole à tes oreilles, et ne t’irrite pas contre ton serviteur : car tu es le premier après Pharaon.',
  more: ['La coupe d’argent du gouverneur a été trouvée dans le sac de Benjamin, et Joseph, que ses frères ne reconnaissent pas, veut garder le coupable comme esclave. Juda s’avance. Il raconte la vieillesse de leur père, la mort supposée de l’autre fils de Rachel, et la promesse qu’il a faite de ramener l’enfant. Il demande à rester esclave à la place de Benjamin.',
    'Pas de fête juive attachée à ce passage. La paracha tire son nom de ce verset : Vayigach, « il s’approcha ». Le même Juda qui avait proposé de vendre Joseph (Genèse 37, 26-27) se porte ici garant de son plus jeune frère.'],
  back(P) {
    vgHall(P);
    vgThrone(P);
    vgSacks(P, [[430, 120, 1], [470, 150, 0.9], [440, 180, 1.1]]);
    const c = P.I(385, 170, 0); P.shape([[c[0] - 7, c[1] - 26], [c[0] + 7, c[1] - 26], [c[0] + 3, c[1] - 14], [c[0] + 3, c[1] - 6], [c[0] + 8, c[1]], [c[0] - 8, c[1]], [c[0] - 3, c[1] - 6], [c[0] - 3, c[1] - 14]], 'b2y1', 0.8);
    Lib.lamp(P, 250, 40, 0, 1.1);
    Lib.jar(P, 30, 470, 0, 1.4, 'b5y3'); Lib.jar(P, 60, 500, 0, 1.2);
  },
  live(P, t) { const c = P.I(385, 170, 0); if ((t * 0.5) % 1 < 0.6) Lib.star(P, c[0] + 4, c[1] - 22, 6, 'y3'); },
  chars: [
    ch(LK.vg_joseph, { x: 100, y: 255, z: 34, face: 1, clip: 'throne', h: 146 }),
    ch(LK.vg_egypt, { x: 70, y: 110, face: 1, clip: 'guard', hold: { n: 'spear' }, h: 140 }),
    ch(LK.vg_egypt, { x: 90, y: 400, face: 1, clip: 'guard', hold: { n: 'spear' }, h: 140, t0: 1.3 }),
    ch(LK.vg_judah, { h: 146, speed: 14, path: [W(330, 330, 2, 'bow', { f: -1 }), W(240, 285, 7, 'talk', { f: -1 }), W(330, 330, 0)] }),
    ch(LK.vg_benjamin, { x: 370, y: 220, face: -1, clip: 'kneel', h: 130 }),
    ch(LK.bro1, { x: 410, y: 300, face: -1, clip: 'bow', h: 140 }),
    ch(LK.bro2, { x: 400, y: 400, face: -1, clip: 'bow', h: 140, t0: 1 }),
    ch(LK.bro3, { x: 320, y: 460, face: -1, clip: 'prostrate', h: 140 })
  ]
},
{
  title: 'Je suis Joseph', book: 'Genèse', ch: 45, ref: 'Genesis 45:3', refFr: 'Genèse 45, 3', accent: 2, feast: null,
  quote: 'And he said to his brethren:  I am Joseph:  Is my father yet living?  His brethren could not answer him, being struck with exceeding great fear.',
  fr: 'Et il dit à ses frères : Je suis Joseph : mon père vit-il encore ? Ses frères ne purent lui répondre, tant ils étaient saisis d’épouvante.',
  more: ['Joseph ne peut plus se contenir. Il fait sortir tous les Égyptiens et éclate en sanglots si fort que la maison de Pharaon l’entend. « Je suis Joseph. » Les frères restent muets. Il les fait approcher : ce n’est pas vous qui m’avez envoyé ici, c’est Dieu, pour sauver des vies. Il se jette au cou de Benjamin et embrasse chacun d’eux.',
    'Pas de fête juive attachée à ce passage. La haftara de Vayigach (Ézéchiel 37, 15-28) lui répond : le prophète prend deux morceaux de bois, l’un pour Juda, l’autre pour Joseph, et ils ne font plus qu’un dans sa main.'],
  back(P) {
    vgHall(P, { door: 1, cols: [[250, 40], [500, 180]] });
    vgThrone(P);
    vgSacks(P, [[470, 470, 1], [500, 430, 0.9]]);
    Lib.lamp(P, 200, 480, 0, 1.2);
  },
  chars: [
    ch(LK.vg_joseph, { x: 200, y: 290, face: 1, clip: 'offer', h: 146 }),
    ch(LK.vg_benjamin, { x: 280, y: 330, face: -1, clip: 'lookup', h: 130 }),
    ch(LK.vg_judah, { x: 320, y: 250, face: -1, clip: 'kneel', h: 144 }),
    ch(LK.bro1, { x: 400, y: 320, face: -1, clip: 'stagger', h: 140 }),
    ch(LK.bro2, { x: 340, y: 440, face: -1, clip: 'kneel', h: 140, t0: 1 }),
    ch(LK.bro3, { x: 450, y: 420, face: -1, clip: 'still', h: 140 }),
    ch(LK.vg_egypt, { h: 136, speed: 18, path: [W(260, 150, 1.5, 'idle'), W(420, 20, 0), W(260, 150, 0, null, { jump: 1 })] }),
    ch(LK.vg_egyptW, { h: 128, speed: 18, t0: 4, path: [W(200, 180, 1.5, 'idle'), W(410, 25, 0), W(200, 180, 0, null, { jump: 1 })] })
  ]
},
{
  title: 'Les chariots d’Égypte', book: 'Genèse', ch: 45, ref: 'Genesis 45:27', refFr: 'Genèse 45, 27', accent: 0, feast: null,
  quote: 'They, on the other side, told the whole order of the thing.  And when he saw the wagons, and all that he had sent, his spirit revived,',
  fr: 'Eux, de leur côté, lui racontèrent toute la suite de l’affaire. Et quand il vit les chariots et tout ce que Joseph avait envoyé, son esprit se ranima,',
  more: ['Sur l’ordre de Pharaon, Joseph a donné à ses frères des chariots pour ramener toute la famille, des vivres, des vêtements, et dix ânes chargés des biens de l’Égypte. Revenus en Canaan, ils disent à Jacob : « Joseph vit encore, il gouverne toute l’Égypte. » Le vieillard ne les croit pas. Il voit les chariots, et son esprit revit : « C’est assez, j’irai le voir avant de mourir. »',
    'Pas de fête juive attachée à ce passage. Rachi, d’après le midrach, lit dans les chariots (agalot) un signe envoyé par Joseph : la dernière étude qu’il partageait avec son père portait sur la génisse (egla) de Deutéronome 21.'],
  back(P) {
    Lib.sun(P, 180, 140, 30); Lib.cloud(P, 760, 130, 170, 34, 'b1');
    Lib.platform(P, 'y5r2b1', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    Lib.mound(P, 470, 60, 70, 80, 'y4b3k1'); Lib.mound(P, 380, 20, 50, 50, 'y4b3k1');
    Lib.tent(P, 40, 40, 150, 110, 120, 'r5y4k1'); Lib.tent(P, 220, 30, 110, 90, 90, 'b3y2k1');
    Lib.tree(P, 70, 250, 0, { h: 220, r: 70, blobs: 9, can: 'y5b6k1', trunk: 'r5y4k4' });
    const road = [[540, 400], [420, 330], [300, 250]]; for (let i = 0; i < road.length - 1; i++) { const a = road[i], b = road[i + 1]; P.fill([P.I(a[0], a[1] - 30, 0.5), P.I(b[0], b[1] - 30, 0.5), P.I(b[0], b[1] + 30, 0.5), P.I(a[0], a[1] + 30, 0.5)], 'y3r2', {}); }
    Lib.grass(P, 40, 'y5b4', [20, 300, 250, 220]);
    Lib.stones(P, 18, 'y3r2k3', [250, 350, 280, 180]);
    fenceRing(P, 120, 440, 80, -1.4, 1.2, 10);
  },
  chars: [
    vgWagon(330, 100), vgWagon(420, 180, { tn: 'y5r4k2' }),
    ch(LK.vg_jacob, { x: 190, y: 200, face: 1, clip: 'raise', h: 142, hold: { f: 'staffV' } }),
    ch(LK.vg_judah, { x: 260, y: 240, face: -1, clip: 'talk', h: 144 }),
    ch(LK.vg_benjamin, { x: 300, y: 290, face: -1, clip: 'point', h: 132 }),
    ch(LK.bro2, { x: 230, y: 330, face: -1, clip: 'talk', h: 140, t0: 1 }),
    ...[0, 1, 2].map(i => ({ beast: 'donkey', h: 92, speed: 16, t0: i * 3, path: [W(540, 400, 0), W(330, 270, 2), W(330, 270, 0, null, { jump: 1 })] })),
    { beast: 'sheep', h: 60, x: 120, y: 440, face: 1 }
  ]
},
{
  title: 'La vision de Beer-Shéva', book: 'Genèse', ch: 46, ref: 'Genesis 46:3', refFr: 'Genèse 46, 3', accent: 2, feast: null,
  quote: 'God said to him:  I am the most mighty God of thy father; fear not, go down into Egypt, for I will make a great nation of thee there.',
  fr: 'Dieu lui dit : Je suis le Dieu très puissant de ton père ; ne crains pas, descends en Égypte, car là je ferai de toi une grande nation.',
  more: ['Jacob se met en route avec tout ce qui est à lui. À Beer-Shéva, le puits du serment, il offre des sacrifices au Dieu de son père Isaac. La nuit, Dieu l’appelle : « Jacob, Jacob. » « Me voici. » Ne crains pas de descendre en Égypte : j’y descendrai avec toi, je t’en ferai remonter, et Joseph te fermera les yeux. Soixante-dix âmes descendent en Égypte.',
    'Pas de fête juive attachée à ce passage. Le Talmud (Méguila 29a) enseigne que partout où Israël fut exilé, la Présence divine l’accompagna, et il cite d’abord l’exil en Égypte.'],
  back(P) {
    nightSky(P, 'b7k4', 90);
    P.halo(560, 150, 130, ['y1b1', 'y2', 'y3', 'y4r1', 'y6r1'], { knock: true });
    Lib.platform(P, 'y3r2b3k1', 'y3r3b2k2', { strata: [[0, .4, 'y3r3b2k2'], [.4, 1, 'y3r3b3k3']] });
    Lib.well(P, 380, 120, 34);
    Lib.altar(P, 170, 180, 70, 50, 40, 'y3r2b2k3');
    Lib.tent(P, 40, 360, 120, 100, 100, 'r4y4b2k1'); Lib.tent(P, 420, 320, 100, 90, 90, 'b3y2k2');
    Lib.stones(P, 30, 'y2r2b3k2', [20, 20, 500, 500]);
    Lib.palm(P, 480, 60, 0, 150, { lean: -10 });
  },
  live(P, t) {
    const a = P.I(205, 205, 46); Lib.flame(P, a[0], a[1], 26, 46, t); Lib.smoke(P, a[0], a[1] - 30, t, { n: 4, h: 180, r: 18, tn: 'k2b2' });
    P.halo(560, 150, 60 + Math.sin(t * 1.4) * 8, ['y1', 'y2', 'y3']);
    for (let i = 0; i < 6; i++) { const u = (t * 0.25 + i / 6) % 1; Lib.star(P, 560 + Math.cos(i * 1.7) * 120 * u, 150 + Math.sin(i * 1.7) * 60 * u, 5 * (1 - u), 'y7'); }
  },
  chars: [
    ch(LK.vg_jacob, { x: 280, y: 250, face: 1, clip: 'pray', h: 144 }),
    ch(LK.vg_judah, { x: 250, y: 440, face: 1, clip: 'sleep', h: 150 }),
    ch(LK.bro1, { x: 330, y: 480, face: 1, clip: 'sleep', h: 146 }),
    vgWagon(330, 380, { tn: 'r4y4b2k2' }),
    { beast: 'sheep', h: 58, x: 470, y: 470, face: -1 }, { beast: 'sheep', h: 54, x: 500, y: 430, face: 1 },
    { beast: 'donkey', h: 88, x: 470, y: 230, face: -1 }
  ]
},
{
  title: 'Joseph au cou de son père', book: 'Genèse', ch: 46, ref: 'Genesis 46:29', refFr: 'Genèse 46, 29', accent: 1, feast: null,
  quote: 'And when he was come thither, Joseph made ready his chariot, and went up to meet his father in the same place:  and seeing him, he fell upon his neck, and embracing him, wept.',
  fr: 'Et quand il fut arrivé là, Joseph fit atteler son char et monta à la rencontre de son père au même endroit : et le voyant, il se jeta à son cou, et l’embrassant, il pleura.',
  more: ['Jacob envoie Juda devant lui pour préparer la route vers Gessen. Joseph fait atteler son char et monte à la rencontre de son père. Il le voit, se jette à son cou et pleure longtemps. Jacob dit : « Maintenant je peux mourir, puisque j’ai vu ton visage et que tu vis encore. » Les frères se présenteront à Pharaon comme bergers.',
    'Pas de fête juive attachée à ce passage. Rachi note que Joseph seul pleure : Jacob, dit-il d’après les sages, récitait à cet instant le Chema.'],
  back(P) {
    Lib.sun(P, 820, 150, 28);
    Lib.platform(P, 'y4b4', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    const riv = [[0, 60], [200, 40], [540, 90], [540, 150], [220, 100], [0, 120]]; P.shape(riv.map(p => P.I(p[0], p[1], 0.6)), 'b5y1', 1); Lib.waves(P, [40, 60, 460, 50], 10, 1, 2);
    for (let i = 0; i < 14; i++) { const c = P.I(20 + i * 36, 130 + (i % 3) * 8, 0); for (let k = -2; k <= 2; k++) P.line([[c[0] + k * 2, c[1]], [c[0] + k * 5, c[1] - 26]], 0.8, { ink: 0 }); P.fill(P.disc(c[0], c[1] - 28, 4, 8), 'y5b6', {}); }
    Lib.grass(P, 70, 'y5b5', [20, 170, 500, 350]);
    Lib.palm(P, 470, 190, 0, 170, { lean: -10, dates: 1 }); Lib.palm(P, 60, 200, 0, 150, { lean: 12 });
    Lib.tent(P, 40, 400, 110, 90, 90, 'r4y4k1');
    Lib.stones(P, 14, 'y3r2k3', [200, 400, 300, 120]);
  },
  chars: [
    vgChariot(480, 200), { beast: 'vg_horse', h: 118, x: 413, y: 267, face: -1 },
    ch(LK.vg_joseph, { x: 270, y: 300, face: -1, clip: 'cradle', h: 146 }),
    ch(LK.vg_jacob, { x: 245, y: 285, face: 1, clip: 'cradle', h: 140 }),
    ch(LK.vg_judah, { x: 180, y: 380, face: 1, clip: 'idle', h: 144, hold: { f: 'staffV' } }),
    ch(LK.bro2, { h: 138, speed: 8, path: [W(330, 450, 3), W(420, 480, 3, 'point'), W(330, 450, 0)], hold: { f: 'staffV' } }),
    { beast: 'sheep', h: 58, speed: 6, path: [W(380, 400, 3), W(440, 420, 2), W(380, 400, 0)] },
    { beast: 'sheep', h: 56, x: 470, y: 450, face: -1 }, { beast: 'ram', h: 64, x: 280, y: 480, face: 1 }
  ]
},
{
  title: 'Jacob bénit Pharaon', book: 'Genèse', ch: 47, ref: 'Genesis 47:7', refFr: 'Genèse 47, 7', accent: 0, feast: null,
  quote: 'After this Joseph brought in his father to the king, and presented him before him:  and he blessed him.',
  fr: 'Après cela, Joseph introduisit son père auprès du roi et le lui présenta : et Jacob le bénit.',
  more: ['Joseph présente d’abord cinq de ses frères, qui demandent à paître leurs troupeaux dans la terre de Gessen. Puis il fait entrer son père. Pharaon demande au vieillard son âge. « Les jours de mon pèlerinage sont de cent trente ans, peu nombreux et mauvais, et ils n’atteignent pas ceux de mes pères. » Jacob bénit Pharaon en entrant, et de nouveau en sortant.',
    'Pas de fête juive attachée à ce passage. Le berger venu de Canaan bénit le roi d’Égypte : le texte le dit deux fois, aux versets 7 et 10.'],
  back(P) {
    vgHall(P, { wl: 'b3y2', wr: 'b3y2k1', cols: [[260, 40], [420, 40], [40, 470]] });
    vgThrone(P, 1);
    P.shape([P.I(210, 240, 0.5), P.I(520, 240, 0.5), P.I(520, 320, 0.5), P.I(210, 320, 0.5)], 'r7y3', 1);
    for (let i = 0; i < 6; i++) P.line([P.I(230 + i * 50, 252, 1), P.I(230 + i * 50, 308, 1)], 0.8, { ink: 2 });
    Lib.lamp(P, 170, 110, 0, 1.2); Lib.lamp(P, 170, 400, 0, 1.2);
    P.box(328, 138, 0, 24, 24, 16, 'r4y5k2');
  },
  chars: [
    ch(LK.vg_pharaoh, { x: 100, y: 255, z: 34, face: 1, clip: 'throne', hold: { n: 'scepter' }, h: 150 }),
    ch(LK.vg_egypt, { x: 70, y: 120, face: 1, clip: 'guard', hold: { n: 'spear' }, h: 140 }),
    ch(LK.vg_egypt, { x: 80, y: 400, face: 1, clip: 'guard', hold: { n: 'spear' }, h: 140, t0: 1.3 }),
    ch(LK.vg_jacob, { x: 250, y: 270, face: -1, clip: 'bless', h: 140, hold: { f: 'staffV' } }),
    ch(LK.vg_joseph, { x: 300, y: 350, face: -1, clip: 'offer', h: 146 }),
    ch(LK.vg_judah, { x: 420, y: 300, face: -1, clip: 'bow', h: 142 }),
    ch(LK.bro1, { x: 440, y: 400, face: -1, clip: 'bow', h: 140, t0: 1 }),
    ch(LK.vg_egypt, { x: 340, y: 150, z: 16, face: -1, clip: 'sit', h: 130, hold: { n: 'scroll' }, look: Object.assign({}, LK.vg_egypt, { robe: 'y2', head: null }) })
  ]
},
{
  title: 'Le pain contre les troupeaux', book: 'Genèse', ch: 47, ref: 'Genesis 47:17', refFr: 'Genèse 47, 17', accent: 2, feast: null,
  quote: 'And when they had brought them, he gave them food in exchange for their horses, and sheep, and oxen, and asses:  and he maintained them that year for the exchange of their cattle.',
  fr: 'Et quand ils les eurent amenés, il leur donna de la nourriture en échange de leurs chevaux, de leurs brebis, de leurs bœufs et de leurs ânes : et il les nourrit cette année-là en échange de leur bétail.',
  more: ['La famine dure. L’argent de l’Égypte et de Canaan passe tout entier dans le trésor de Pharaon. Alors les Égyptiens amènent leurs chevaux, leurs brebis, leurs bœufs et leurs ânes, et Joseph leur donne du pain en échange. L’année suivante, ils vendent leurs terres et deviennent les serfs de Pharaon, avec des semences pour cultiver.',
    'Pas de fête juive attachée à ce passage. Le texte précise que Joseph n’acquit pas la terre des prêtres, et qu’il fixa une redevance d’un cinquième des récoltes pour Pharaon (Genèse 47, 22-26).'],
  back(P) {
    Lib.sun(P, 180, 140, 30);
    for (const [cx, w, h] of [[720, 90, 110], [820, 60, 70]]) { P.shape([[cx - w, 340], [cx, 340 - h], [cx + w * 0.3, 340]], 'y5r3', 1); P.shape([[cx + w * 0.3, 340], [cx, 340 - h], [cx + w, 340]], 'y5r3k2', 1); }
    Lib.platform(P, 'y5r2', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
    P.box(20, 20, 0, 20, 300, 70, 'y4r3k1'); P.box(20, 20, 0, 320, 20, 70, 'y4r3k1');
    for (const [x, y] of [[80, 70], [170, 60], [80, 170]]) { P.cyl(x, y, 0, 36, 70, 'y3r2k1'); const c = P.I(x, y, 70); P.shape(P.ell(x, y, 70, 36, 36, 20).concat([[c[0], c[1] - 44]]), 'y4r3', 1); P.shape([P.I(x - 8, y + 36, 8), P.I(x + 8, y + 36, 8), P.I(x + 8, y + 36, 30), P.I(x - 8, y + 36, 30)], 'k6r2', 0.6); }
    const h = P.I(250, 200, 0); P.shape(Lib.bumpy(P, h[0], h[1] - 18, 50, 26, 8), 'y7r3', 1); for (let i = 0; i < 20; i++) P.fill(P.disc(h[0] - 40 + P.r() * 80, h[1] - 30 + P.r() * 26, 1.8, 6), 'y8r4k1', {});
    for (const [x, y] of [[180, 250], [240, 270], [300, 250]]) P.box(x, y, 0, 6, 6, 110, 'r4y5k3', 0.7);
    P.shape([P.I(170, 240, 110), P.I(310, 240, 110), P.I(310, 280, 104), P.I(170, 280, 104)], 'b5y1', 1);
    vgSacks(P, [[330, 150, 1], [360, 180, 0.9], [300, 120, 1]]);
    P.box(268, 318, 0, 24, 24, 16, 'r4y5k2');
    Lib.palm(P, 490, 60, 0, 160, { lean: -12, dates: 1 });
    Lib.stones(P, 18, 'y4r3k2', [300, 300, 220, 220]);
  },
  chars: [
    ch(LK.vg_joseph, { x: 220, y: 300, face: 1, clip: 'point', h: 146 }),
    ch(LK.vg_egypt, { x: 280, y: 330, z: 16, face: 1, clip: 'sit', h: 128, hold: { n: 'scroll' }, look: Object.assign({}, LK.vg_egypt, { robe: 'y2', head: null }) }),
    ch(LK.vg_egypt, { h: 136, speed: 14, path: [W(520, 480, 0), W(360, 370, 3, 'offer'), W(520, 480, 0)] }),
    { beast: 'bull', h: 84, speed: 14, t0: 0.7, path: [W(540, 440, 0), W(410, 360, 3), W(540, 440, 0)] },
    ch(LK.vg_egyptW, { h: 128, speed: 12, t0: 5, path: [W(470, 520, 0), W(340, 430, 3, 'idle'), W(470, 520, 0)] }),
    { beast: 'donkey', h: 88, speed: 12, t0: 5.6, path: [W(500, 540, 0), W(380, 460, 3), W(500, 540, 0)] },
    { beast: 'sheep', h: 56, x: 450, y: 330, face: -1 }, { beast: 'sheep', h: 54, x: 490, y: 300, face: -1 },
    ch(LK.vg_egypt, { h: 134, speed: 16, over: 'carry', hold: { nTop: 'jarhead' }, path: [W(350, 190, 1.5, 'idle'), W(510, 230, 0), W(350, 190, 0, null, { jump: 1 })], look: Object.assign({}, LK.vg_egypt, { ht: 'r5y3' }) })
  ]
}
];
