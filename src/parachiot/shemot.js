/* PARACHA CHEMOT · Exode 1, 1 à 6, 1 · Chabbat 2 janvier 2027 */
Object.assign(LK, {
  sh_pharaoh: { skin: 'y6r5k1', hs: 'short', hair: 'k8', beard: 'short', bt: 'b6k2', robe: 'y1', len: 'ankle', trim: 1, sleeves: 'long', wide: 1, cloak: 'r6y2', sash: 'y8r2', head: 'tall', ht: 'y1b2' },
  sh_task: { skin: 'y6r5k1', hs: 'short', hair: 'k8', robe: 'y1', len: 'knee', sleeves: 'none', sash: 'r6', head: 'cap', ht: 'b6y2', feet: 'sandal' },
  sh_task2: { skin: 'y6r5k2', hs: 'short', hair: 'k8', beard: 'short', bt: 'k8', robe: 'y2', len: 'knee', sleeves: 'short', sash: 'b6', head: 'cap', ht: 'r5y3', feet: 'sandal' },
  sh_slave: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'short', robe: 'y3r2k2', len: 'knee', sleeves: 'none', sash: 'k5', feet: 'bare' },
  sh_slave2: { skin: 'y5r4k1', hs: 'short', hair: 'k7r2', beard: 'long', bt: 'k6', robe: 'r3y3k2', len: 'knee', sleeves: 'none', sash: 'b4k2', head: 'cloth', ht: 'y2k2', band: 'k6', feet: 'bare' },
  sh_slave3: { skin: 'y6r4k2', hs: 'curly', hair: 'k8', robe: 'b3y2k2', len: 'knee', sleeves: 'short', sash: 'r4k2', feet: 'bare' },
  sh_midwife: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k7', robe: 'b5y2', len: 'floor', sleeves: 'long', sash: 'r6y3', head: 'veil', ht: 'y2' },
  sh_midwife2: { fem: 1, old: 1, skin: 'y5r4', hs: 'long', hair: 'k2', robe: 'r5y4', len: 'floor', sleeves: 'long', sash: 'b6', head: 'veil', ht: 'y1b1' },
  sh_mother: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k8', robe: 'r4b3', len: 'floor', sleeves: 'long', sash: 'y7', head: 'veil', ht: 'b4y2' },
  sh_miriam: { fem: 1, child: 1, skin: 'y5r4', hs: 'long', hair: 'k8', robe: 'r6y3', len: 'ankle', sleeves: 'short', sash: 'b6', feet: 'bare' },
  sh_princess: { fem: 1, skin: 'y6r5k1', hs: 'long', hair: 'k9', robe: 'y1', len: 'floor', trim: 1, sleeves: 'short', wide: 1, sash: 'b6r2', cloak: 'b5y1', head: 'crown', ht: 'y8r2', feet: 'sandal' },
  sh_maid: { fem: 1, skin: 'y6r5k1', hs: 'long', hair: 'k9', robe: 'y1b1', len: 'floor', sleeves: 'none', sash: 'r6y2', head: 'cloth', ht: 'b6y1', band: 'y7', feet: 'bare' },
  sh_maid2: { fem: 1, skin: 'y6r5k2', hs: 'long', hair: 'k9', robe: 'y2', len: 'floor', sleeves: 'none', sash: 'b6y2', head: 'veil', ht: 'y1', feet: 'bare' },
  sh_prince: { skin: 'y5r4k1', hs: 'short', hair: 'k7', beard: 'short', bt: 'k7', robe: 'y1', len: 'ankle', trim: 1, sleeves: 'short', sash: 'r7y3', cloak: 'r5b3', head: 'cloth', ht: 'y1b1', band: 'y8', feet: 'sandal' },
  sh_zippora: { fem: 1, skin: 'y6r5k1', hs: 'long', hair: 'k8', robe: 'r6b2', len: 'floor', sleeves: 'long', sash: 'y7', head: 'veil', ht: 'y5r3', feet: 'sandal' },
  sh_sister: { fem: 1, skin: 'y6r5k1', hs: 'long', hair: 'k8', robe: 'b4r3', len: 'floor', sleeves: 'short', sash: 'r6', head: 'veil', ht: 'y3b1', feet: 'sandal' },
  sh_herd: { skin: 'y6r5k2', hs: 'curly', hair: 'k8', beard: 'full', bt: 'k8', robe: 'k3y3r2', len: 'knee', sleeves: 'short', sash: 'r5k2', head: 'cloth', ht: 'k3y2', band: 'k7', cloak: 'k4r2' },
  sh_aaron: { old: 1, skin: 'y5r4k1', hs: 'short', hair: 'k3', beard: 'long', bt: 'k2', robe: 'b5r3', cloak: 'y5r3k1', sash: 'y7r2', head: 'cloth', ht: 'y1b1', band: 'b6' },
  sh_scribe: { skin: 'y6r5k1', hs: 'short', hair: 'k8', robe: 'y1', len: 'knee', sleeves: 'short', sash: 'b5', feet: 'bare' }
});
/* décors */
const shEgWall = (P, H, tn) => {
  Lib.walls(P, { l: tn, r: tadd(tn, 'k1'), cut: 'y4r3k2' }, { h: H });
  for (let x = 0; x < P.L; x += 30) Lib.wallR(P, x, H - 44, 26, 16, ['b6y2', 'r6y4', 'y7r2'][(x / 30) % 3], 0.5);
  for (let y = 0; y < P.L; y += 30) Lib.wallL(P, y, H - 44, 26, 16, ['b6y2', 'r6y4', 'y7r2'][(y / 30) % 3], 0.5);
};
const shCol = (P, x, y, h) => { P.cyl(x, y, 0, 17, h, 'y3r1'); for (let z = 40; z < h - 20; z += 60) P.cyl(x, y, z, 18, 6, 'b5y2'); P.cyl(x, y, h, 25, 22, 'y5b5'); P.box(x - 22, y - 22, h + 22, 44, 44, 12, 'y4r3'); };
const shPyr = (P, list) => { for (const [cx, w, h] of list) { P.shape([[cx - w, 340], [cx, 340 - h], [cx + w * 0.3, 340]], 'y5r3', 1); P.shape([[cx + w * 0.3, 340], [cx, 340 - h], [cx + w, 340]], 'y5r3k2', 1); } };
const shWater = (P, poly, tn = 'b6y1', wv) => { P.shape(poly.map(p => P.I(p[0], p[1], 0.5)), tn, 1); if (wv) Lib.waves(P, wv, 14, 1, 2); };
const shReeds = (P, x, y, w, d, n) => { for (let i = 0; i < n; i++) { const c = P.I(x + P.r() * w, y + P.r() * d, 0), hh = 30 + P.r() * 34, lx = (P.r() - 0.5) * 8; P.line([c, [c[0] + lx, c[1] - hh]], 1.1, { ink: i % 3 ? 0 : 3 }); const tp = [c[0] + lx, c[1] - hh]; for (let k = -2; k <= 2; k++) P.line([tp, [tp[0] + k * 4, tp[1] - 8 + Math.abs(k) * 2]], 0.6, { ink: 2 }); P.fill(P.disc(tp[0], tp[1] - 3, 3, 6), 'y5b6k1', {}); } };
const shBricks = (P, x, y, nx, ny) => { for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) P.box(x + i * 24 + (j % 2) * 6, y + j * 18, 0, 18, 11, 7, (i + j) % 3 ? 'r5y5k2' : 'r4y5k3', 0.5); };
const shStack = (P, x, y, n) => { for (let k = 0; k < n; k++) P.box(x, y, k * 8, 28, 16, 8, k % 2 ? 'r5y5k2' : 'r4y5k3', 0.6); };
const shPit = (P, x, y, r) => { P.shape(P.ell(x, y, 0.5, r, r * 0.8, 20), 'r4y4k5', 1); P.fill(P.ell(x - 6, y - 4, 0.8, r * 0.6, r * 0.45, 16), 'r4y5k4', {}); };
const shStraw = (P, x, y, s = 1) => { const c = P.I(x, y, 0); P.shape(Lib.bumpy(P, c[0], c[1] - 12 * s, 26 * s, 14 * s, 7), 'y7r2', 0.8); for (let i = 0; i < 8; i++) P.line([[c[0] - 20 * s + i * 5 * s, c[1] - 4], [c[0] - 16 * s + i * 5 * s, c[1] - 22 * s]], 0.5, { ink: 0, lvl: 8 }); };
const shHut = (P, x, y, w, d, h, tn) => { P.box(x, y, 0, w, d, h, tn); P.box(x - 4, y - 4, h, w + 8, d + 8, 6, 'y5r3k2'); const a = P.I(x + w, y + d * 0.35, 0); const b = P.I(x + w, y + d * 0.65, 0); P.shape([a, b, [b[0], b[1] - h * 0.6], [a[0], a[1] - h * 0.6]], 'k7r2', 0.6); };
const shThrone = (P) => {
  P.box(40, 150, 0, 150, 200, 20, 'r4y4'); P.box(60, 170, 20, 130, 160, 14, 'b5y2');
  P.box(80, 210, 34, 40, 90, 55, 'y7r3'); P.box(64, 205, 34, 20, 100, 190, { t: 'y8r3', l: 'y7r4k1', r: 'y7r4k2' });
  for (const y of [205, 295]) P.cyl(84, y + 5, 34, 7, 210, 'y8r2');
  const c = P.I(74, 255, 250); P.shape(P.disc(c[0], c[1], 16, 20), 'r7y6', 1); for (const s of [-1, 1]) P.shape([[c[0] + s * 14, c[1]], [c[0] + s * 70, c[1] - 12], [c[0] + s * 60, c[1] + 2], [c[0] + s * 70, c[1] + 6], [c[0] + s * 14, c[1] + 6]], 'b6y2', 0.8);
};
const shBasket = (x, y, open) => ({ depth: x + y, draw(P, t) {
  const bob = open ? 0 : Math.sin(t * 1.6) * 2.2, sh = pts => pts.map(p => [p[0], p[1] + bob]);
  if (!open) for (let k = 0; k < 2; k++) { const u = (t * 0.4 + k * 0.5) % 1; P.line(P.ell(x, y, 0.6, 30 + u * 30, 18 + u * 18, 20).concat([P.I(x + 30 + u * 30, y, 0.6)]), 0.6, { ink: 2, lvl: Math.round(7 * (1 - u)) + 1 }); }
  P.shape(sh(P.ell(x, y, 0, 26, 14, 18)), 'r4y5k4', 0.9);
  P.shape(sh(P.ell(x, y, 11, 26, 14, 18)), open ? 'r4y5k4' : 'y6r3k1', 0.9);
  if (open) { const c = P.I(x, y, 11); P.fill(sh(P.disc(c[0], c[1], 9, 12)), 'y1b1', {}); P.shape(sh(P.disc(c[0] + 5, c[1] - 2, 5, 10)), 'y5r4', 0.5); }
  else for (let i = -2; i <= 2; i++) { const a = P.I(x + i * 9, y - 12, 11), b = P.I(x + i * 9, y + 12, 11); P.line(sh([a, b]), 0.5, { ink: 3 }); }
} });
const shSnake = (x, y) => ({ depth: x + y, draw(P, t) {
  const pts = []; for (let i = 0; i < 22; i++) { const u = i / 21, z = u > 0.72 ? (u - 0.72) * 220 : 0; pts.push(P.I(x - 110 + u * 130, y + 30 - u * 30 + Math.sin(u * 10 + t * 4) * 20 * (1 - u * 0.5), z)); }
  drawSnake(P, pts, 11, 'r5y6k3');
  const hd = pts[pts.length - 1]; P.fill(P.disc(hd[0] + 3, hd[1] - 2, 1.6, 6), 'k9', { noKnock: true });
  if ((t * 1.3) % 1 < 0.5) P.line([[hd[0] + 7, hd[1]], [hd[0] + 15, hd[1] - 2], [hd[0] + 18, hd[1] - 5]], 0.8, { ink: 1 });
} });
const SHEET = { title: 'Chemot · Les noms', sub: 'Paracha de la semaine · Chabbat 2 janvier 2027 · Exode 1, 1 à 6, 1' };
const SCENES = [
{
  title: 'Les briques de Pithom et Ramsès', book: 'Exode', ch: 1, ref: 'Exodus 1:14', refFr: 'Exode 1, 14', accent: 1, feast: null,
  quote: 'And they made their life bitter with hard works in clay and brick, and with all manner of service, wherewith they were overcharged in the works of the earth.',
  fr: 'Et ils leur rendirent la vie amère par de durs travaux dans l’argile et la brique, et par toutes sortes de services dont ils les accablaient dans les travaux des champs.',
  more: ['Joseph et toute sa génération sont morts, et les enfants d’Israël se sont multipliés en Égypte. Un nouveau roi se lève, qui n’a pas connu Joseph. Il craint ce peuple nombreux et place sur lui des chefs de corvée pour l’accabler. Les Hébreux bâtissent pour Pharaon les villes d’entrepôts, Pithom et Ramsès. Plus on les opprime, plus ils se multiplient.',
    'Pas de fête juive attachée à ce passage. Le mot « amère » de ce verset revient à la table du seder de Pessa’h : on y mange les herbes amères (maror) en souvenir de cette vie rendue amère, et le ’harosset rappelle l’argile des briques.'],
  back(P) {
    Lib.sun(P, 180, 140, 30);
    shPyr(P, [[760, 110, 150], [880, 70, 90]]);
    Lib.platform(P, 'y5r3', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
    stoneStack(P, 20, 20, 320, 40, 144, 'r5y5k2');
    for (let y = 70; y < 260; y += 40) for (let r = 0; r < 5; r++) P.box(20, y + (r % 2) * 8, r * 16, 40, 36, 15, (y / 40 + r) % 2 ? 'r5y5k2' : 'r4y5k3');
    P.shape([P.I(340, 30, 144), P.I(340, 60, 144), P.I(470, 60, 0), P.I(470, 30, 0)], 'r4y4k3', 1);
    for (let i = 0; i < 6; i++) P.line([P.I(350 + i * 20, 32, 132 - i * 22), P.I(350 + i * 20, 58, 132 - i * 22)], 0.7);
    for (const x of [120, 220, 310]) { P.box(x, 64, 0, 6, 6, 190, 'r4y5k3', 0.6); }
    P.line([P.I(120, 67, 180), P.I(316, 67, 180)], 1.4, { ink: 3 });
    shBricks(P, 130, 330, 7, 5);
    shPit(P, 400, 330, 50);
    shStraw(P, 470, 240, 1.3); shStraw(P, 490, 290, 1);
    shStack(P, 90, 180, 5); shStack(P, 280, 110, 6); shStack(P, 210, 250, 4);
    Lib.jar(P, 470, 420, 0, 1.4, 'r5y6k1'); Lib.jar(P, 500, 440, 0, 1.2);
    Lib.stones(P, 18, 'y4r3k2', [80, 300, 440, 220]);
    Lib.palm(P, 500, 120, 0, 170, { lean: -12, dates: 1 });
  },
  chars: [
    ch(LK.sh_task, { x: 290, y: 200, face: 1, clip: 'point', hold: { n: 'staff' }, h: 144 }),
    ch(LK.sh_task2, { x: 200, y: 470, face: -1, clip: 'guard', hold: { n: 'staff' }, h: 140 }),
    ch(LK.sh_slave, { h: 136, speed: 16, over: 'carry', hold: { n: 'bricks' }, path: [W(260, 380, 1.5, 'fill'), W(420, 100, 0), W(390, 45, 1, 'idle', { z: 110 }), W(260, 380, 0, null, { jump: 1 })] }),
    ch(LK.sh_slave2, { h: 138, speed: 14, t0: 5, over: 'carry', hold: { n: 'bricks' }, path: [W(300, 420, 1.5, 'fill'), W(160, 110, 1, 'idle'), W(300, 420, 0)] }),
    ch(LK.sh_slave3, { x: 390, y: 380, face: -1, clip: 'fill', h: 134 }),
    ch(LK.sh_slave, { x: 340, y: 450, face: -1, clip: 'kneel', h: 132, t0: 1 }),
    ch(LK.sh_slave2, { x: 190, y: 40, z: 144, face: 1, clip: 'hammer', hold: { n: 'hammer' }, h: 134 }),
    ch(LK.child, { h: 96, speed: 12, t0: 2, over: 'carry', hold: { n: 'sheaf' }, path: [W(470, 270, 1), W(420, 330, 1.5), W(470, 270, 0)] })
  ]
},
{
  title: 'Les sages-femmes', book: 'Exode', ch: 1, ref: 'Exodus 1:17', refFr: 'Exode 1, 17', accent: 2, feast: null,
  quote: 'But the midwives feared God, and did not do as the king of Egypt had commanded, but saved the men children.',
  fr: 'Mais les sages-femmes craignirent Dieu et ne firent pas comme le roi d’Égypte le leur avait ordonné : elles laissèrent vivre les garçons.',
  more: ['Pharaon ordonne aux sages-femmes des Hébreux, Chifra et Poua, de faire mourir tout garçon à la naissance. Elles craignent Dieu et laissent vivre les enfants. Convoquées, elles répondent que les femmes des Hébreux sont vigoureuses et accouchent avant leur arrivée. Dieu fait du bien aux sages-femmes et leur bâtit des maisons. Pharaon ordonne alors à tout son peuple de jeter au fleuve chaque garçon nouveau-né.',
    'Pas de fête juive attachée à ce passage. Rachi, d’après le Talmud (Sota 11b), identifie Chifra à Yokheved, la mère de Moïse, et Poua à Myriam, sa fille.'],
  back(P) {
    Lib.platform(P, 'y4r3k1', 'y4r3k2', { h: 50, pebbles: false });
    Lib.walls(P, { l: 'y4r2k2', r: 'y4r2k3', cut: 'y4r3k3' }, { h: 230 });
    for (let z = 20; z < 220; z += 26) { P.line([P.I(0.5, 0, z), P.I(0.5, 540, z)], 0.4, { ink: 3, lvl: 4 }); P.line([P.I(0, 0.5, z), P.I(540, 0.5, z)], 0.4, { ink: 3, lvl: 4 }); }
    P.shape([P.I(0.5, 230, 110), P.I(0.5, 300, 110), P.I(0.5, 300, 170), P.I(0.5, 230, 170)], 'b7k3', 1);
    for (let i = 1; i < 3; i++) P.line([P.I(0.5, 230 + i * 23, 110), P.I(0.5, 230 + i * 23, 170)], 1.2, { ink: 3 });
    P.shape([P.I(380, 0.5, 0), P.I(460, 0.5, 0), P.I(460, 0.5, 150), P.I(380, 0.5, 150)], 'k6r2', 1.1);
    P.shape([P.I(385, 0.5, 60), P.I(455, 0.5, 60), P.I(455, 0.5, 150), P.I(385, 0.5, 150)], 'y6r3', 0);
    P.fill([P.I(120, 190, 0.6), P.I(320, 190, 0.6), P.I(320, 300, 0.6), P.I(120, 300, 0.6)], 'r5y4b1', {});
    for (let i = 0; i < 7; i++) P.line([P.I(128 + i * 28, 194, 1), P.I(128 + i * 28, 296, 1)], 0.6, { ink: 0 });
    P.box(60, 60, 0, 60, 90, 70, 'y3r3k3');
    for (let i = 0; i < 3; i++) Lib.jar(P, 70 + i * 18, 80 + i * 22, 70, 1, i % 2 ? 'b4y3k1' : 'r5y6k1');
    P.box(240, 60, 0, 100, 40, 16, 'r4y5k3');
    for (let i = 0; i < 4; i++) { const c = P.I(250 + i * 24, 80, 16); P.shape(Lib.bumpy(P, c[0], c[1] - 5, 10, 6, 5), 'y7r4k1', 0.6); }
    for (const [x, y] of [[170, 330], [210, 330]]) P.box(x, y, 0, 26, 26, 24, 'y3r2k3');
    Lib.lamp(P, 60, 440, 0, 1.2);
    Lib.jar(P, 480, 460, 0, 1.6, 'r5y6k1'); Lib.jar(P, 505, 420, 0, 1.3, 'b5y3');
  },
  chars: [
    ch(LK.sh_mother, { x: 150, y: 245, face: 1, clip: 'lie', h: 140 }),
    ch(LK.sh_midwife, { x: 250, y: 320, face: -1, clip: 'cradle', hold: { n: 'baby' }, h: 138 }),
    ch(LK.sh_midwife2, { x: 300, y: 250, face: -1, clip: 'kneel', h: 134, hold: { n: 'jarhead' } }),
    ch(LK.sh_slave2, { x: 400, y: 360, face: -1, clip: 'pray', h: 140 }),
    ch(LK.childG, { x: 360, y: 420, face: -1, clip: 'lookup', h: 92 }),
    ch(LK.sh_task, { h: 140, speed: 14, path: [W(420, 30, 3, 'point', { f: 1 }), W(470, 110, 3, 'talk'), W(420, 30, 0)] })
  ]
},
{
  title: 'Le panier dans les roseaux', book: 'Exode', ch: 2, ref: 'Exodus 2:3', refFr: 'Exode 2, 3', accent: 2, feast: null,
  quote: 'And when she could hide him no longer, she took a basket made of bulrushes, and daubed it with slime and pitch:  and put the little babe therein, and laid him in the sedges by the river\'s brink,',
  fr: 'Et quand elle ne put le cacher plus longtemps, elle prit un panier de joncs, l’enduisit de bitume et de poix, y mit le petit enfant et le déposa parmi les roseaux, au bord du fleuve.',
  more: ['Un homme de la maison de Lévi épouse une fille de Lévi. Elle enfante un fils, voit qu’il est beau et le cache trois mois. Quand elle ne peut plus le cacher, elle tresse un panier de papyrus, l’enduit de bitume et de poix, y couche l’enfant et le dépose dans les roseaux du Nil. La sœur de l’enfant se tient à distance pour savoir ce qu’il deviendra.',
    'Pas de fête juive attachée à ce passage. Le mot hébreu pour ce panier, tévah, est celui qui désigne l’arche de Noé : deux enfants de la Genèse et de l’Exode sont sauvés des eaux dans une tévah enduite de poix.'],
  back(P) {
    Lib.sun(P, 820, 150, 26); Lib.cloud(P, 250, 150, 160, 30, 'b1');
    Lib.platform(P, 'y5b4', 'y4r3k1', { strata: [[0, .35, 'y4r3k1'], [.35, 1, 'y4r4k3']] });
    shWater(P, [[0, 0], [150, 0], [190, 180], [170, 380], [210, 540], [0, 540]], 'b6y1', [10, 20, 150, 500]);
    P.fill([P.I(150, 0, 0.8), P.I(190, 180, 0.8), P.I(170, 380, 0.8), P.I(210, 540, 0.8), P.I(230, 540, 0.8), P.I(192, 380, 0.8), P.I(212, 180, 0.8), P.I(172, 0, 0.8)], 'y4r3k2', {});
    shReeds(P, 150, 200, 60, 330, 36); shReeds(P, 70, 240, 60, 80, 14); shReeds(P, 60, 360, 50, 60, 10);
    Lib.grass(P, 60, 'y5b5', [220, 20, 300, 500]);
    shHut(P, 400, 30, 90, 70, 80, 'y4r3k1'); shHut(P, 440, 150, 70, 60, 64, 'y4r3k2');
    Lib.palm(P, 330, 60, 0, 170, { lean: 10, dates: 1 }); Lib.palm(P, 490, 330, 0, 150, { lean: -12 });
    Lib.bush(P, 380, 190, 0, 34, 'y5b6k1'); Lib.bush(P, 350, 230, 0, 26, 'y5b5k2');
    Lib.jar(P, 270, 330, 0, 1.3, 'k6r2');
    Lib.stones(P, 14, 'y3r2k3', [220, 380, 250, 150]);
  },
  live(P, t) { for (let i = 0; i < 3; i++) { const u = (t * 0.05 + i / 3) % 1; Lib.bird(P, 100 + u * 800, 200 + i * 30 + Math.sin(u * 9) * 8, 1, t * 1.5 + i, 'k1'); } },
  chars: [
    shBasket(95, 320),
    ch(LK.sh_mother, { h: 136, speed: 10, path: [W(230, 310, 5, 'kneel', { f: -1 }), W(280, 360, 3, 'pray', { f: -1 }), W(230, 310, 0)] }),
    ch(LK.sh_miriam, { x: 360, y: 200, face: -1, clip: 'still', h: 96 }),
    ch(LK.sh_slave3, { x: 440, y: 260, face: -1, clip: 'lookup', h: 132, t0: 2 })
  ]
},
{
  title: 'La fille de Pharaon', book: 'Exode', ch: 2, ref: 'Exodus 2:6', refFr: 'Exode 2, 6', accent: 0, feast: null,
  quote: 'She opened it, and seeing within it an infant crying, having compassion on it, she said:  This is one of the babes of the Hebrews.',
  fr: 'Elle l’ouvrit, et voyant dedans un enfant qui pleurait, elle en eut compassion et dit : C’est un des enfants des Hébreux.',
  more: ['La fille de Pharaon descend se baigner au fleuve, ses servantes marchent sur la rive. Elle aperçoit le panier dans les roseaux et envoie une servante le prendre. Elle l’ouvre : un enfant pleure. Émue, elle le reconnaît pour un enfant des Hébreux. La sœur de l’enfant s’approche et propose une nourrice hébreue : elle ramène la propre mère de l’enfant. La princesse l’appelle Moïse, « car je l’ai tiré des eaux ».',
    'Pas de fête juive attachée à ce passage. Le livre des Chroniques (1 Chroniques 4, 18) nomme une fille de Pharaon, Bitya, que la tradition rabbinique identifie à la princesse qui sauva Moïse.'],
  back(P) {
    Lib.sun(P, 180, 140, 28);
    Lib.platform(P, 'y4b3', 'y4r3k1', { strata: [[0, .35, 'y4r3k1'], [.35, 1, 'y4r4k3']] });
    shWater(P, [[0, 0], [540, 0], [540, 120], [0, 150]], 'b6y1', [20, 10, 500, 110]);
    for (let i = 0; i < 4; i++) P.box(180 + i * 0, 130 + i * 14, 0, 200, 14, 4 + i * 5, i % 2 ? 'y3r2' : 'y3r2k1', 0.7);
    shReeds(P, 10, 110, 150, 40, 28); shReeds(P, 400, 90, 140, 40, 24);
    for (let i = 0; i < 6; i++) { const c = P.I(60 + i * 70, 40 + (i % 2) * 30, 1); P.shape(P.ell(60 + i * 70, 40 + (i % 2) * 30, 1, 12, 8, 10), 'y5b6k1', 0.5); P.fill(P.disc(c[0] + 3, c[1] - 6, 3, 6), 'r4y1', {}); }
    for (const [x, y] of [[250, 260], [370, 260], [250, 380], [370, 380]]) P.box(x - 3, y - 3, 0, 6, 6, 150, 'y7r3k1', 0.7);
    P.shape([P.I(245, 255, 150), P.I(375, 255, 150), P.I(375, 385, 150), P.I(245, 385, 150)], 'b5r3', 1);
    for (let i = 0; i < 7; i++) { const a = P.I(245 + i * 21, 385, 150); P.line([a, [a[0], a[1] + 10]], 1, { ink: 0 }); }
    shCol(P, 470, 470, 180); shCol(P, 60, 470, 180);
    Lib.palm(P, 490, 200, 0, 180, { lean: -10, dates: 1 }); Lib.palm(P, 40, 260, 0, 160, { lean: 14 });
    Lib.jar(P, 400, 420, 0, 1.4, 'b5y3'); Lib.jar(P, 425, 440, 0, 1.2);
    Lib.grass(P, 40, 'y5b5', [20, 180, 500, 320]);
  },
  chars: [
    shBasket(300, 190, 1),
    ch(LK.sh_princess, { x: 300, y: 310, face: -1, clip: 'cradle', hold: { n: 'baby' }, h: 146 }),
    ch(LK.sh_maid, { h: 132, speed: 12, path: [W(200, 120, 3, 'reach'), W(260, 220, 3, 'idle'), W(200, 120, 0)] }),
    ch(LK.sh_maid2, { x: 380, y: 340, face: -1, clip: 'guard', hold: { n: 'staffV' }, h: 132 }),
    ch(LK.sh_maid, { x: 190, y: 340, face: 1, clip: 'idle', h: 130, t0: 1, look: Object.assign({}, LK.sh_maid, { robe: 'y1r1', band: 'r6' }) }),
    ch(LK.sh_miriam, { h: 96, speed: 12, t0: 3, path: [W(480, 520, 2), W(360, 420, 5, 'talk', { f: -1 }), W(480, 520, 0)] }),
    ch(LK.sh_task, { x: 90, y: 420, face: 1, clip: 'guard', hold: { n: 'spear' }, h: 140 })
  ]
},
{
  title: 'Moïse frappe l’Égyptien', book: 'Exode', ch: 2, ref: 'Exodus 2:12', refFr: 'Exode 2, 12', accent: 1, feast: null,
  quote: 'And when he had looked about this way and that way, and saw no one there, he slew the Egyptian and hid him in the sand.',
  fr: 'Et ayant regardé de côté et d’autre, et ne voyant personne, il tua l’Égyptien et le cacha dans le sable.',
  more: ['Moïse a grandi. Il sort vers ses frères et voit leurs corvées. Il voit un Égyptien frapper un Hébreu, l’un de ses frères. Il regarde de côté et d’autre, ne voit personne, frappe l’Égyptien et le cache dans le sable. Le lendemain, deux Hébreux se querellent ; l’un lui lance : « Veux-tu me tuer comme tu as tué l’Égyptien ? » Pharaon l’apprend et cherche à le faire mourir. Moïse s’enfuit au pays de Madian.',
    'Pas de fête juive attachée à ce passage. C’est le premier acte de Moïse adulte rapporté par la Torah : il prend le parti de l’opprimé. Au puits de Madian, il défendra de même des bergères chassées par des bergers.'],
  back(P) {
    Lib.sun(P, 800, 150, 30);
    shPyr(P, [[180, 90, 120], [280, 60, 70]]);
    Lib.platform(P, 'y6r3', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
    Lib.mound(P, 470, 70, 70, 60, 'y6r3k1', { conc: 0.9 }); Lib.mound(P, 120, 60, 60, 50, 'y6r3k1', { conc: 0.9 });
    stoneStack(P, 200, 20, 200, 30, 96, 'r5y5k2');
    shStack(P, 420, 150, 5); shStack(P, 80, 200, 4);
    const s = P.I(420, 400, 0); P.shape(Lib.bumpy(P, s[0], s[1] - 8, 50, 14, 8), 'y6r3k1', 0.8);
    P.line([P.I(380, 380, 1), P.I(470, 420, 1)], 1, { ink: 3, lvl: 4 });
    for (let i = 0; i < 20; i++) { const c = P.I(40 + P.r() * 460, 200 + P.r() * 320, 0); P.line([[c[0] - 8, c[1]], [c[0] + 8, c[1] - 1]], 0.5, { ink: 1, lvl: 3 }); }
    Lib.stones(P, 16, 'y4r3k2', [40, 150, 460, 360]);
    Lib.palm(P, 40, 420, 0, 150, { lean: 12 });
  },
  chars: [
    ch(LK.sh_prince, { h: 146, speed: 6, path: [W(250, 270, 1.4, 'idle', { f: -1 }), W(256, 276, 1.4, 'idle', { f: 1 }), W(262, 282, 3, 'smash', { f: 1 }), W(250, 270, 0)] }),
    ch(LK.sh_task, { x: 320, y: 320, face: -1, clip: 'stagger', h: 140, hold: { n: 'staff' } }),
    ch(LK.sh_slave, { x: 370, y: 270, face: -1, clip: 'kneel', h: 132 }),
    ch(LK.sh_slave2, { h: 136, speed: 14, over: 'carry', hold: { n: 'bricks' }, path: [W(430, 180, 1), W(250, 80, 1), W(430, 180, 0)] }),
    ch(LK.sh_slave3, { h: 134, speed: 14, t0: 6, over: 'carry', hold: { n: 'bricks' }, path: [W(430, 180, 1), W(250, 80, 1), W(430, 180, 0)] }),
    { beast: 'donkey', h: 88, x: 120, y: 330, face: 1 }
  ]
},
{
  title: 'Au puits de Madian', book: 'Exode', ch: 2, ref: 'Exodus 2:17', refFr: 'Exode 2, 17', accent: 0, feast: null,
  quote: 'And the shepherds came and drove them away:  and Moses arose, and defending the maids, watered their sheep.',
  fr: 'Les bergers vinrent et les chassèrent ; alors Moïse se leva, prit la défense des jeunes filles et abreuva leur troupeau.',
  more: ['Moïse s’assied près d’un puits au pays de Madian. Les sept filles du prêtre de Madian viennent puiser et remplir les abreuvoirs pour le troupeau de leur père. Des bergers les chassent. Moïse se lève, les défend et abreuve leurs brebis. Leur père Réouel, appelé aussi Jéthro, l’invite à sa table. Moïse s’installe chez lui et épouse sa fille Tsippora, qui lui donne un fils, Guerchom.',
    'Pas de fête juive attachée à ce passage. C’est la troisième rencontre au puits de la Torah, après le serviteur d’Abraham et Rébecca, puis Jacob et Rachel : chaque fois, un puits mène à un mariage.'],
  back(P) {
    Lib.cloud(P, 780, 140, 160, 30, 'b1');
    Lib.platform(P, 'y5r3k1', 'y4r3k2', { strata: [[0, .4, 'y4r3k2'], [.4, 1, 'r3y4k3']] });
    Lib.mound(P, 80, 60, 100, 180, 'y4r3k3', { px: 14 }); Lib.mound(P, 260, 20, 70, 110, 'y3r3k2');
    Lib.well(P, 260, 270, 34);
    P.box(300, 300, 0, 130, 26, 22, 'y3r2k3'); P.fill([P.I(304, 304, 22.5), P.I(426, 304, 22.5), P.I(426, 322, 22.5), P.I(304, 322, 22.5)], 'b6y1', {});
    P.box(200, 330, 0, 26, 110, 22, 'y3r2k3'); P.fill([P.I(204, 334, 22.5), P.I(222, 334, 22.5), P.I(222, 436, 22.5), P.I(204, 436, 22.5)], 'b6y1', {});
    Lib.tent(P, 400, 30, 120, 90, 100, 'k4r3y2');
    Lib.tree(P, 470, 220, 0, { h: 150, r: 46, blobs: 6, can: 'y4b5k2', trunk: 'r4y4k4' });
    Lib.palm(P, 60, 300, 0, 150, { lean: 14 });
    Lib.stones(P, 24, 'y3r2k3', [30, 140, 480, 380]);
    Lib.grass(P, 30, 'y5b4', [60, 380, 300, 140]);
    Lib.jar(P, 300, 250, 0, 1.3, 'r5y6k1');
  },
  chars: [
    ch(LK.moses, { x: 240, y: 300, face: 1, clip: 'fill', h: 146 }),
    ch(LK.sh_zippora, { x: 330, y: 360, face: -1, clip: 'lookup', h: 134 }),
    ch(LK.sh_sister, { x: 380, y: 410, face: -1, clip: 'talk', h: 130, hold: { nTop: 'jarhead' } }),
    ch(LK.sh_sister, { x: 150, y: 380, face: 1, clip: 'fill', h: 130, look: Object.assign({}, LK.sh_sister, { robe: 'y5r4', ht: 'b5y1' }) }),
    ch(LK.sh_herd, { h: 142, speed: 16, hold: { f: 'staffV' }, path: [W(310, 200, 3, 'stagger', { f: -1 }), W(470, 120, 2), W(310, 200, 0)] }),
    ch(LK.shepherd, { h: 140, speed: 16, t0: 1, hold: { f: 'staffV' }, path: [W(350, 250, 3, 'point', { f: -1 }), W(510, 170, 2), W(350, 250, 0)] }),
    { beast: 'sheep', h: 62, x: 360, y: 290, face: -1 }, { beast: 'sheep', h: 58, x: 420, y: 280, face: -1 },
    { beast: 'ram', h: 66, x: 230, y: 400, face: 1 }
  ]
},
reuse(AT[5]),
{
  title: 'Le bâton devenu serpent', book: 'Exode', ch: 4, ref: 'Exodus 4:3', refFr: 'Exode 4, 3', accent: 2, feast: null,
  quote: 'And the Lord said:  Cast it down upon the ground.  He cast it down, and it was turned into a serpent, so that Moses fled from it.',
  fr: 'Et le Seigneur dit : Jette-le à terre. Il le jeta à terre, et il devint un serpent, et Moïse s’enfuit devant lui.',
  more: ['Moïse objecte : ils ne me croiront pas. Dieu lui demande ce qu’il tient en main : un bâton. Jeté à terre, le bâton devient serpent et Moïse fuit devant lui ; saisi par la queue, il redevient bâton. Deux autres signes suivent : la main couverte de lèpre puis guérie, et l’eau du fleuve changée en sang. Moïse dit encore qu’il a la bouche lourde. Aaron, son frère, parlera pour lui.',
    'Pas de fête juive attachée à ce passage. Ce bâton accompagnera Moïse jusqu’au désert : c’est avec lui qu’il fera les signes devant Pharaon, fendra la mer et frappera le rocher.'],
  back(P) {
    Lib.cloud(P, 260, 150, 150, 30, 'b1');
    Lib.platform(P, 'y4r2k2', 'y4r3k2', { strata: [[0, .4, 'y4r3k2'], [.4, .75, 'r3y4k3'], [.75, 1, 'r4y3k4']] });
    Lib.mound(P, 120, 90, 120, 280, 'y4r3k3', { px: 24 });
    const pk = P.I(120, 90, 0); P.halo(pk[0] + 24, pk[1] - 290, 70, ['y1', 'y2', 'y3r1']);
    Lib.mound(P, 330, 30, 80, 140, 'y3r3k2');
    Lib.rock(P, 450, 200, 0, 30, 18, 'y4r2k3'); Lib.rock(P, 80, 360, 0, 34, 22, 'y4r3k3'); Lib.rock(P, 380, 470, 0, 24, 16, 'y4r3k3');
    Lib.bush(P, 470, 380, 0, 26, 'y5b5k2'); Lib.bush(P, 180, 470, 0, 22, 'y5b6k1');
    Lib.stones(P, 30, 'y3r2k3', [20, 200, 500, 320]);
    Lib.grass(P, 30, 'y5b4', [250, 250, 260, 260]);
  },
  chars: [
    shSnake(260, 300),
    ch(LK.moses, { h: 146, speed: 30, path: [W(300, 300, 2.5, 'stagger', { f: -1 }), W(360, 360, 2.5, 'point', { f: -1 }), W(300, 300, 0)] }),
    { beast: 'sheep', h: 64, speed: 20, path: [W(360, 230, 2), W(460, 290, 3), W(360, 230, 0)] },
    { beast: 'sheep', h: 60, x: 420, y: 420, face: -1 }, { beast: 'ram', h: 70, x: 470, y: 330, face: -1 },
    { beast: 'sheep', h: 58, x: 150, y: 420, face: 1 }
  ]
},
{
  title: 'Laisse partir mon peuple', book: 'Exode', ch: 5, ref: 'Exodus 5:1', refFr: 'Exode 5, 1', accent: 1, feast: null,
  quote: 'After these things, Moses and Aaron went in, and said to Pharao: Thus saith the Lord God of Israel:  Let my people go, that they may sacrifice to me in the desert.',
  fr: 'Après cela, Moïse et Aaron entrèrent et dirent à Pharaon : Ainsi parle le Seigneur, Dieu d’Israël : Laisse partir mon peuple, pour qu’il me sacrifie dans le désert.',
  more: ['Aaron est venu à la rencontre de Moïse à la montagne de Dieu. Ensemble ils ont réuni les anciens d’Israël, et le peuple a cru. Ils entrent chez Pharaon : « Ainsi parle le Seigneur : laisse partir mon peuple. » Pharaon répond : « Qui est le Seigneur, pour que j’écoute sa voix ? Je ne connais pas le Seigneur, et je ne laisserai pas partir Israël. »',
    'Pas de fête juive attachée à ce passage. La formule « Laisse partir mon peuple » revient ensuite avant presque chacune des plaies, et elle est devenue le refrain du chant afro-américain « Go Down, Moses ».'],
  back(P) {
    shEgWall(P, 300, 'y3r2');
    Lib.platform(P, 'y3r1', 'y4r3k1', { h: 50, pebbles: false });
    for (let i = 0; i < 9; i++) for (let j = 0; j < 9; j++) { const x = i * 60, y = j * 60; P.fill([P.I(x, y, 0), P.I(x + 60, y, 0), P.I(x + 60, y + 60, 0), P.I(x, y + 60, 0)], (i + j) % 2 ? 'y4r2' : 'y2r1', {}); }
    for (let i = 0; i < 20; i++) { const x = 70 + (i % 10) * 44, z = 170 + Math.floor(i / 10) * 40, a = P.I(x, 0.5, z); if (i % 3 === 0) P.shape(P.disc(a[0], a[1] - 8, 6, 10), 'r6y5', 0.5); else if (i % 3 === 1) Lib.bird(P, a[0], a[1] - 6, 0.8, 0.1, 'k5'); else P.line([[a[0], a[1]], [a[0], a[1] - 20], [a[0] + 7, a[1] - 24]], 1, { ink: 3 }); }
    shThrone(P);
    for (const [x, y] of [[300, 40], [470, 40], [40, 470]]) shCol(P, x, y, 230);
    P.shape([P.I(210, 230, 0.5), P.I(520, 230, 0.5), P.I(520, 310, 0.5), P.I(210, 310, 0.5)], 'r7y3', 1);
    Lib.lamp(P, 170, 110, 0, 1.2); Lib.lamp(P, 170, 400, 0, 1.2);
    P.box(328, 128, 0, 24, 24, 16, 'r4y5k2');
  },
  chars: [
    ch(LK.sh_pharaoh, { x: 100, y: 255, z: 34, face: 1, clip: 'throne', hold: { n: 'scepter' }, h: 150 }),
    ch(LK.sh_task, { x: 70, y: 120, face: 1, clip: 'guard', hold: { n: 'spear' }, h: 140 }),
    ch(LK.sh_task2, { x: 80, y: 400, face: 1, clip: 'guard', hold: { n: 'spear' }, h: 140, t0: 1.3 }),
    ch(LK.moses, { x: 270, y: 260, face: -1, clip: 'raise', hold: { f: 'staffV' }, h: 146 }),
    ch(LK.sh_aaron, { x: 300, y: 330, face: -1, clip: 'talk', h: 144 }),
    ch(LK.sh_scribe, { x: 340, y: 140, z: 16, face: -1, clip: 'sit', h: 128, hold: { n: 'scroll' } }),
    ch(LK.sh_maid2, { x: 190, y: 190, face: 1, clip: 'guard', hold: { n: 'staffV' }, h: 132 })
  ]
},
{
  title: 'La paille dans les champs', book: 'Exode', ch: 5, ref: 'Exodus 5:12', refFr: 'Exode 5, 12', accent: 0, feast: null,
  quote: 'And the people was scattered through all the land of Egypt to gather straw.',
  fr: 'Et le peuple se dispersa dans tout le pays d’Égypte pour ramasser de la paille.',
  more: ['Pharaon aggrave la corvée : on ne fournira plus de paille pour les briques, mais le nombre de briques restera le même. Le peuple se disperse dans les champs pour ramasser du chaume. Les contremaîtres hébreux sont battus. Ils reprochent à Moïse et Aaron d’avoir rendu leur odeur odieuse aux yeux de Pharaon. Moïse se tourne vers Dieu, qui répond : « Maintenant tu verras ce que je ferai à Pharaon. »',
    'Pas de fête juive attachée à ce passage. La paracha s’achève sur cette promesse (Exode 6, 1), et la suivante, Vaéra, s’ouvre sur la réponse de Dieu : « Je suis le Seigneur. »'],
  back(P) {
    Lib.sun(P, 180, 150, 30);
    shPyr(P, [[760, 100, 130], [870, 60, 80]]);
    Lib.platform(P, 'y5r3', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
    for (let r = 0; r < 14; r++) for (let i = 0; i < 18; i++) { if (P.r() < 0.2) continue; const c = P.I(20 + i * 28 + (r % 2) * 10, 140 + r * 28, 0); P.line([c, [c[0] + 1, c[1] - 8]], 0.8, { ink: 0 }); P.line([[c[0] + 3, c[1]], [c[0] + 4, c[1] - 6]], 0.6, { ink: 3 }); }
    P.fill([P.I(0, 0, 0.5), P.I(540, 0, 0.5), P.I(540, 110, 0.5), P.I(0, 110, 0.5)], 'y6b3r1', {});
    Lib.field(P, 20, 20, 500, 90, 4, 'y7r2');
    shStraw(P, 230, 170, 1.4); shStraw(P, 420, 360, 1.2); shStraw(P, 300, 500, 1); shStraw(P, 160, 360, 1.1);
    for (const [x, y] of [[250, 200], [470, 250]]) { const c = P.I(x, y, 0); for (let k = -1; k <= 1; k++) P.shape([[c[0] + k * 6, c[1]], [c[0] + k * 8 - 4, c[1] - 30], [c[0] + k * 8 + 4, c[1] - 30]], 'y8r2', 0.6); P.line([[c[0] - 8, c[1] - 14], [c[0] + 8, c[1] - 14]], 1.2, { ink: 1 }); }
    Lib.palm(P, 500, 180, 0, 160, { lean: -12, dates: 1 });
    stoneStack(P, 30, 130, 120, 30, 64, 'r5y5k2'); shStack(P, 40, 200, 4); shStack(P, 60, 260, 3);
    shHut(P, 30, 300, 60, 60, 60, 'y4r3k1');
    Lib.stones(P, 14, 'y4r3k2', [60, 150, 440, 360]);
  },
  chars: [
    ch(LK.sh_task, { x: 250, y: 330, face: -1, clip: 'point', hold: { n: 'staff' }, h: 144 }),
    ch(LK.sh_slave, { x: 150, y: 220, face: 1, clip: 'glean', h: 136 }),
    ch(LK.sh_slave2, { x: 390, y: 170, face: -1, clip: 'reap', hold: { n: 'sickle' }, h: 138 }),
    ch(LK.sh_mother, { x: 420, y: 430, face: -1, clip: 'glean', h: 132, t0: 1 }),
    ch(LK.sh_slave3, { h: 134, speed: 14, over: 'carry', hold: { n: 'sheaf' }, path: [W(470, 290, 1.5, 'glean'), W(320, 250, 0), W(170, 330, 1), W(470, 290, 0, null, { jump: 1 })] }),
    ch(LK.childG, { h: 92, speed: 12, t0: 3, over: 'carry', hold: { n: 'sheaf' }, path: [W(470, 490, 2, 'glean'), W(330, 470, 1), W(470, 490, 0)] }),
    ch(LK.sh_slave2, { x: 110, y: 400, face: 1, clip: 'kneel', h: 134, t0: 2, look: Object.assign({}, LK.sh_slave2, { robe: 'y4r3k2', ht: 'b3y2' }) }),
    ch(LK.sh_task2, { x: 130, y: 460, face: 1, clip: 'smash', hold: { n: 'staff' }, h: 140 })
  ]
}
];
