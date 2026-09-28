/* PARACHA VAÉRA · Exode 6, 2 à 9, 35 · Chabbat 9 janvier 2027 */
Object.assign(LK, {
  va_pharaoh: { skin: 'y6r5k1', hs: 'short', hair: 'k8', beard: 'short', bt: 'b6k2', robe: 'y1', len: 'ankle', trim: 1, sleeves: 'long', wide: 1, cloak: 'r6y2', sash: 'y8r2', head: 'tall', ht: 'y1b2' },
  va_aaron: { old: 1, skin: 'y5r4k1', hs: 'short', hair: 'k3', beard: 'long', bt: 'k2', robe: 'b5r3', cloak: 'y5r3k1', sash: 'y7r2', head: 'cloth', ht: 'y1b1', band: 'b6' },
  va_magician: { skin: 'y6r5k1', hs: 'short', hair: 'k8', robe: 'y1', len: 'ankle', sleeves: 'long', cloak: 'k5r3', sash: 'r6', head: 'cap', ht: 'k7', stripes: ['y7r3', 'k6'] },
  va_magician2: { skin: 'y6r5k2', hs: 'short', hair: 'k8', robe: 'y2', len: 'ankle', sleeves: 'long', cloak: 'b6k3', sash: 'y7', head: 'tall', ht: 'k6b2' },
  va_egypt: { skin: 'y6r5k1', hs: 'short', hair: 'k8', robe: 'y1', len: 'knee', sleeves: 'none', sash: 'r6', head: 'cap', ht: 'b6y2', feet: 'sandal' },
  va_egypt2: { skin: 'y6r5k2', hs: 'short', hair: 'k8', beard: 'short', bt: 'k8', robe: 'y2', len: 'knee', sleeves: 'short', sash: 'b6', head: 'cloth', ht: 'r5y3', band: 'k6', feet: 'bare' },
  va_egyptW: { fem: 1, skin: 'y6r5k1', hs: 'long', hair: 'k9', robe: 'y1b1', len: 'floor', sleeves: 'short', sash: 'r6', head: 'veil', ht: 'b4y3' },
  va_slave: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'short', robe: 'y3r2k2', len: 'knee', sleeves: 'none', sash: 'k5', feet: 'bare' },
  va_slave2: { skin: 'y5r4k1', hs: 'short', hair: 'k7r2', beard: 'long', bt: 'k6', robe: 'r3y3k2', len: 'knee', sleeves: 'none', sash: 'b4k2', head: 'cloth', ht: 'y2k2', band: 'k6', feet: 'bare' },
  va_herd: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'full', bt: 'k8', robe: 'b4y3k1', len: 'knee', sleeves: 'short', sash: 'r5', head: 'cloth', ht: 'y2', band: 'k6', cloak: 'k3y2' }
});
Object.assign(CLIPS, {
  va_scratch: { d: 0.6, k: [{ nU: 150, nL: 120, fU: 40, fL: 110, head: 18, lean: 6, nT: 6, fT: -6 }, { nU: 140, nL: 140, fU: 50, fL: 130, head: 22, lean: 8, nT: 6, fT: -6 }] }
});
/* décors */
const vaEgWall = (P, H, tn) => {
  Lib.walls(P, { l: tn, r: tadd(tn, 'k1'), cut: 'y4r3k2' }, { h: H });
  for (let x = 0; x < P.L; x += 30) Lib.wallR(P, x, H - 44, 26, 16, ['b6y2', 'r6y4', 'y7r2'][(x / 30) % 3], 0.5);
  for (let y = 0; y < P.L; y += 30) Lib.wallL(P, y, H - 44, 26, 16, ['b6y2', 'r6y4', 'y7r2'][(y / 30) % 3], 0.5);
};
const vaCol = (P, x, y, h) => { P.cyl(x, y, 0, 17, h, 'y3r1'); for (let z = 40; z < h - 20; z += 60) P.cyl(x, y, z, 18, 6, 'b5y2'); P.cyl(x, y, h, 25, 22, 'y5b5'); P.box(x - 22, y - 22, h + 22, 44, 44, 12, 'y4r3'); };
const vaPyr = (P, list) => { for (const [cx, w, h] of list) { P.shape([[cx - w, 340], [cx, 340 - h], [cx + w * 0.3, 340]], 'y5r3', 1); P.shape([[cx + w * 0.3, 340], [cx, 340 - h], [cx + w, 340]], 'y5r3k2', 1); } };
const vaReeds = (P, x, y, w, d, n) => { for (let i = 0; i < n; i++) { const c = P.I(x + P.r() * w, y + P.r() * d, 0), hh = 30 + P.r() * 34, lx = (P.r() - 0.5) * 8; P.line([c, [c[0] + lx, c[1] - hh]], 1.1, { ink: i % 3 ? 0 : 3 }); const tp = [c[0] + lx, c[1] - hh]; for (let k = -2; k <= 2; k++) P.line([tp, [tp[0] + k * 4, tp[1] - 8 + Math.abs(k) * 2]], 0.6, { ink: 2 }); P.fill(P.disc(tp[0], tp[1] - 3, 3, 6), 'y5b6k1', {}); } };
const vaStack = (P, x, y, n) => { for (let k = 0; k < n; k++) P.box(x, y, k * 8, 28, 16, 8, k % 2 ? 'r5y5k2' : 'r4y5k3', 0.6); };
const vaHut = (P, x, y, w, d, h, tn) => { P.box(x, y, 0, w, d, h, tn); P.box(x - 4, y - 4, h, w + 8, d + 8, 6, 'y5r3k2'); const a = P.I(x + w, y + d * 0.35, 0), b = P.I(x + w, y + d * 0.65, 0); P.shape([a, b, [b[0], b[1] - h * 0.6], [a[0], a[1] - h * 0.6]], 'k7r2', 0.6); };
const vaObelisk = (P, x, y, h, tn = 'r3y5k1') => {
  const I = (a, b, c) => P.I(a, b, c), s = 13, e = 8;
  P.shape([I(x - s, y + s, 0), I(x + s, y + s, 0), I(x + e, y + e, h), I(x - e, y + e, h)], tn, 1);
  P.shape([I(x + s, y - s, 0), I(x + s, y + s, 0), I(x + e, y + e, h), I(x + e, y - e, h)], tadd(tn, 'k1'), 1);
  P.shape([I(x - e, y + e, h), I(x + e, y + e, h), I(x, y, h + 22)], 'y8r2', 0.8); P.shape([I(x + e, y - e, h), I(x + e, y + e, h), I(x, y, h + 22)], 'y7r3k1', 0.8);
  for (let i = 1; i < 7; i++) { const z = h * i / 8; P.line([I(x - 4, y + s - (s - e) * z / h, z), I(x + 4, y + s - (s - e) * z / h, z)], 0.7); }
};
const vaHall = (P) => {
  vaEgWall(P, 300, 'y3r2');
  Lib.platform(P, 'y3r1', 'y4r3k1', { h: 50, pebbles: false });
  for (let i = 0; i < 9; i++) for (let j = 0; j < 9; j++) { const x = i * 60, y = j * 60; P.fill([P.I(x, y, 0), P.I(x + 60, y, 0), P.I(x + 60, y + 60, 0), P.I(x, y + 60, 0)], (i + j) % 2 ? 'y4r2' : 'y2r1', {}); }
  for (let i = 0; i < 20; i++) { const x = 70 + (i % 10) * 44, z = 170 + Math.floor(i / 10) * 40, a = P.I(x, 0.5, z); if (i % 3 === 0) P.shape(P.disc(a[0], a[1] - 8, 6, 10), 'r6y5', 0.5); else if (i % 3 === 1) Lib.bird(P, a[0], a[1] - 6, 0.8, 0.1, 'k5'); else P.line([[a[0], a[1]], [a[0], a[1] - 20], [a[0] + 7, a[1] - 24]], 1, { ink: 3 }); }
  P.box(40, 150, 0, 150, 200, 20, 'r4y4'); P.box(60, 170, 20, 130, 160, 14, 'b5y2');
  P.box(80, 210, 34, 40, 90, 55, 'y7r3'); P.box(64, 205, 34, 20, 100, 190, { t: 'y8r3', l: 'y7r4k1', r: 'y7r4k2' });
  for (const y of [205, 295]) P.cyl(84, y + 5, 34, 7, 210, 'y8r2');
  const c = P.I(74, 255, 250); P.shape(P.disc(c[0], c[1], 16, 20), 'r7y6', 1); for (const s of [-1, 1]) P.shape([[c[0] + s * 14, c[1]], [c[0] + s * 70, c[1] - 12], [c[0] + s * 60, c[1] + 2], [c[0] + s * 70, c[1] + 6], [c[0] + s * 14, c[1] + 6]], 'b6y2', 0.8);
};
const vaSnake = (P, pts, w, tn) => { drawSnake(P, pts, w, tn); const hd = pts[pts.length - 1]; P.fill(P.disc(hd[0] + 2, hd[1] - 2, Math.max(1.2, w * 0.18), 6), 'k9', { noKnock: true }); };
const vaFrog = (P, x, y, s, hop) => {
  const b = [x, y - hop], M = (a, c) => [b[0] + a * s, b[1] + c * s];
  if (hop < 1) P.fill(P.disc(x, y + 1, 8 * s, 10).map(p => [p[0], y + 1 + (p[1] - y - 1) * 0.35]), 'k3', {});
  for (const d of [-1, 1]) P.shape([M(d * 5, 0), M(d * 11, -1), M(d * 12, 3), M(d * 6, 3)], 'y5b6k2', 0.5);
  P.shape(Lib.bumpy(P, b[0], b[1] - 4 * s, 8 * s, 5 * s, 5), 'y5b6k1', 0.6);
  for (const d of [-1, 1]) { P.shape(P.disc(b[0] + d * 4 * s, b[1] - 8 * s, 2.4 * s, 8), 'y7b2', 0.4); P.fill(P.disc(b[0] + d * 4 * s, b[1] - 8.4 * s, 1 * s, 6), 'k9', { noKnock: true }); }
};
const vaFrogs = (list, dep) => ({ depth: dep, draw(P, t) {
  for (const [x, y, dx, dy, ph] of list) { const u = (t * 0.35 + ph) % 1, hop = Math.max(0, Math.sin(((t * 1.3 + ph * 7) % 1) * Math.PI)) * 16, c = P.I(x + dx * u, y + dy * u, 0); vaFrog(P, c[0], c[1], 2.1, hop * 1.4); }
} });
const vaDead = (P, x, y, s, tn, flip) => {
  const c = P.I(x, y, 0), f = flip ? -1 : 1, M = (a, b) => [c[0] + f * a * s, c[1] + b * s];
  for (let i = 0; i < 4; i++) P.line([M(-18 + i * 11, -8), M(-22 + i * 11 + (i % 2) * 6, -26)], 1.6 * s, { ink: 3 });
  P.shape(smooth([M(-30, 0), M(-26, -14), M(0, -18), M(22, -14), M(28, -2), M(10, 4), M(-20, 4)], 3), tn, 0.8);
  P.shape(Lib.bumpy(P, c[0] + f * 36 * s, c[1] - 2 * s, 10 * s, 6 * s, 5), tadd(tn, 'k1'), 0.7);
  P.line([M(40, -6), M(46, -12)], 1, { ink: 3 });
};
const vaFurnace = (P, x, y) => {
  P.cyl(x, y, 0, 46, 90, { t: 'r4y4k3', s: 'r5y5k2', d: 'r5y5k3' });
  P.shape(P.ell(x, y, 90.5, 30, 30, 18), 'k8r2', 0.8);
  const m = [P.I(x + 20, y + 42, 4), P.I(x + 42, y + 20, 4), P.I(x + 42, y + 20, 40), P.I(x + 20, y + 42, 40)]; P.shape(m, 'k7r3', 0.8);
  for (let z = 14; z < 90; z += 18) P.line(P.ell(x, y, z, 46, 46, 18).slice(1, 9), 0.4, { ink: 3, lvl: 4 });
};
const SHEET = { title: 'Vaéra · J’apparus', sub: 'Paracha de la semaine · Chabbat 9 janvier 2027 · Exode 6, 2 à 9, 35' };
const SCENES = [
{
  title: 'Je suis le Seigneur', book: 'Exode', ch: 6, ref: 'Exodus 6:6', refFr: 'Exode 6, 6', accent: 2, feast: 'Chabbat Roch ’Hodech',
  quote: 'Therefore say to the children of Israel:  I am the Lord who will bring you out from the work-prison of the Egyptians, and will deliver you from bondage:  and redeem you with a high arm, and great judgments.',
  fr: 'Dis donc aux enfants d’Israël : Je suis le Seigneur, qui vous ferai sortir de la maison de travail des Égyptiens, qui vous délivrerai de la servitude, et qui vous rachèterai à bras levé et par de grands jugements.',
  more: ['Dieu répond à la plainte de Moïse : « J’apparus à Abraham, à Isaac et à Jacob. » Il a entendu le gémissement des enfants d’Israël et se souvient de son alliance. Moïse doit leur annoncer : je vous ferai sortir, je vous délivrerai, je vous rachèterai, je vous prendrai pour mon peuple. Moïse le leur dit, mais ils ne l’écoutent pas, à cause de l’angoisse de leur esprit et de la dureté du travail.',
    'Correspondance : <b>Chabbat Roch ’Hodech</b>. En 5787, Vaéra est lu le 1er Chevat, qui tombe un Chabbat. On sort deux rouleaux : le maftir lit les sacrifices du Chabbat et de la néoménie (Nombres 28, 9 à 15), et la haftara est Isaïe 66, qui annonce que de néoménie en néoménie et de Chabbat en Chabbat, toute chair viendra se prosterner. Les quatre verbes de la délivrance (Exode 6, 6-7) sont, selon le Talmud de Jérusalem, l’origine des quatre coupes du seder.'],
  back(P) {
    Lib.sun(P, 820, 250, 36); Lib.cloud(P, 250, 170, 170, 30, 'r1y1');
    vaPyr(P, [[640, 90, 120], [740, 60, 80]]);
    Lib.platform(P, 'y5r4', 'y5r3k2', { strata: [[0, .4, 'y5r3k2'], [.4, 1, 'y5r4k4']] });
    stoneStack(P, 20, 20, 300, 40, 128, 'r5y5k2');
    for (let y = 70; y < 230; y += 40) for (let r = 0; r < 4; r++) P.box(20, y + (r % 2) * 8, r * 16, 40, 36, 15, (y / 40 + r) % 2 ? 'r5y5k2' : 'r4y5k3');
    for (let j = 0; j < 4; j++) for (let i = 0; i < 6; i++) P.box(300 + i * 24 + (j % 2) * 6, 380 + j * 18, 0, 18, 11, 7, (i + j) % 3 ? 'r5y5k2' : 'r4y5k3', 0.5);
    P.shape(P.ell(430, 250, 0.5, 44, 34, 18), 'r4y4k5', 1);
    vaStack(P, 120, 140, 5); vaStack(P, 360, 90, 4); vaStack(P, 480, 170, 6);
    Lib.palm(P, 500, 470, 0, 160, { lean: -10, dates: 1 });
    Lib.stones(P, 16, 'y4r3k2', [80, 250, 400, 250]);
  },
  chars: [
    ch(LK.moses, { x: 200, y: 290, face: 1, clip: 'raise', hold: { f: 'staffV' }, h: 146 }),
    ch(LK.va_aaron, { x: 170, y: 360, face: 1, clip: 'talk', h: 142 }),
    ch(LK.va_slave, { x: 300, y: 300, face: -1, clip: 'sulk', h: 134 }),
    ch(LK.va_slave2, { x: 420, y: 250, face: -1, clip: 'fill', h: 136 }),
    ch(LK.va_slave, { h: 134, speed: 14, t0: 3, over: 'carry', hold: { n: 'bricks' }, path: [W(360, 400, 1.5, 'fill'), W(250, 90, 1), W(360, 400, 0)], look: Object.assign({}, LK.va_slave, { robe: 'b3y2k2' }) }),
    ch(LK.isrOld, { x: 330, y: 470, face: -1, clip: 'rest', h: 132 }),
    ch(LK.va_egypt, { x: 470, y: 340, face: -1, clip: 'point', hold: { n: 'staff' }, h: 142 })
  ]
},
{
  title: 'Le bâton d’Aaron dévore', book: 'Exode', ch: 7, ref: 'Exodus 7:12', refFr: 'Exode 7, 12', accent: 1, feast: null,
  quote: 'And they every one cast down their rods, and they were turned into serpents:  but Aaron\'s rod devoured their rods.',
  fr: 'Et chacun d’eux jeta son bâton, et ils devinrent des serpents : mais le bâton d’Aaron dévora leurs bâtons.',
  more: ['Moïse a quatre-vingts ans, Aaron quatre-vingt-trois. Ils entrent chez Pharaon, et Aaron jette son bâton devant lui : il devient un serpent. Pharaon appelle ses sages et ses magiciens, qui en font autant par leurs enchantements. Mais le bâton d’Aaron engloutit leurs bâtons. Le cœur de Pharaon s’endurcit, et il ne les écoute pas.',
    'Pas de fête juive attachée à ce passage. Rachi précise que le bâton d’Aaron avait déjà repris sa forme de bâton quand il avala les autres. Le mot employé ici pour le serpent, tannin, désigne aussi le grand monstre des eaux, image de l’Égypte chez Ézéchiel (29, 3).'],
  back(P) {
    vaHall(P);
    for (const [x, y] of [[300, 40], [470, 40], [40, 470]]) vaCol(P, x, y, 230);
    P.shape([P.I(210, 230, 0.5), P.I(520, 230, 0.5), P.I(520, 310, 0.5), P.I(210, 310, 0.5)], 'r7y3', 1);
    Lib.lamp(P, 170, 110, 0, 1.2); Lib.lamp(P, 170, 400, 0, 1.2);
    for (let i = 0; i < 3; i++) P.box(440 + i * 20, 120, 0, 14, 60, 6 + i * 4, 'y4r2k1', 0.6);
  },
  top(P, t) {
    const cx = 330, cy = 360, u = (t / 6) % 1, n = u < 0.8 ? 2 : 1;
    for (let k = 0; k < n; k++) { const sx = 400 + k * 30, sy = 300 + k * 90, sc = 1 - Math.max(0, (u - 0.4 * k - 0.2)) * 1.2, pts = []; if (sc <= 0.1) continue; for (let i = 0; i < 12; i++) { const v = i / 11; pts.push(P.I(sx + (1 - v) * 50 * sc, sy - (1 - v) * 10 + Math.sin(v * 8 + t * 5 + k) * 8, v > 0.8 ? (v - 0.8) * 60 : 0)); } vaSnake(P, pts, 5 * sc, 'y4r2k3'); }
    const hx = lerp(cx + 20, 400, (Math.sin(t * 1.4) + 1) * 0.35), pts = [];
    for (let i = 0; i < 20; i++) { const v = i / 19; pts.push(P.I(lerp(cx - 90, hx, v), cy + Math.sin(v * 9 + t * 4) * 16 * (1 - v * 0.5) - v * 20, v > 0.8 ? (v - 0.8) * 150 : 0)); }
    vaSnake(P, pts, 12, 'r5y6k3');
  },
  chars: [
    ch(LK.va_pharaoh, { x: 100, y: 255, z: 34, face: 1, clip: 'throne', hold: { n: 'scepter' }, h: 150 }),
    ch(LK.va_egypt, { x: 70, y: 120, face: 1, clip: 'guard', hold: { n: 'spear' }, h: 140 }),
    ch(LK.va_magician, { x: 400, y: 220, face: -1, clip: 'point', hold: { n: 'staffV' }, h: 142 }),
    ch(LK.va_magician2, { x: 470, y: 330, face: -1, clip: 'stagger', h: 142 }),
    ch(LK.va_magician, { x: 440, y: 430, face: -1, clip: 'lookup', h: 140, look: Object.assign({}, LK.va_magician, { cloak: 'r5y3k2', ht: 'b6k2' }) }),
    ch(LK.va_aaron, { x: 220, y: 380, face: 1, clip: 'point', h: 144 }),
    ch(LK.moses, { x: 190, y: 460, face: 1, clip: 'idle', hold: { f: 'staffV' }, h: 146 })
  ]
},
{
  title: 'Le Nil changé en sang', book: 'Exode', ch: 7, ref: 'Exodus 7:20', refFr: 'Exode 7, 20', accent: 1, feast: null,
  quote: 'And Moses and Aaron did as the Lord had commanded:  and lifting up the rod, he struck the water of the river before Pharao and his servants:  and it was turned into blood.',
  fr: 'Et Moïse et Aaron firent comme le Seigneur l’avait ordonné : levant le bâton, il frappa l’eau du fleuve devant Pharaon et ses serviteurs, et elle fut changée en sang.',
  more: ['Au matin, Moïse attend Pharaon au bord du Nil. Devant lui et ses serviteurs, le bâton frappe l’eau du fleuve, qui devient du sang. Les poissons meurent, le fleuve empeste, et le sang couvre toute l’Égypte, jusque dans les récipients de bois et de pierre. Les Égyptiens creusent autour du fleuve pour trouver de l’eau à boire. Les magiciens en font autant, et Pharaon rentre dans son palais.',
    'Pas de fête juive attachée à ce passage. Rachi explique que c’est Aaron qui frappa le fleuve, car l’eau avait protégé Moïse enfant dans son panier. Au seder de Pessa’h, on retire une goutte de vin de sa coupe pour chacune des dix plaies, en commençant par le sang.'],
  back(P) {
    Lib.sun(P, 180, 150, 26);
    Lib.platform(P, 'y4r3', 'y4r3k1', { strata: [[0, .35, 'y4r3k1'], [.35, 1, 'y4r4k3']] });
    P.shape([P.I(0, 0, 0.5), P.I(540, 0, 0.5), P.I(540, 150, 0.5), P.I(0, 180, 0.5)], 'r8y2k2', 1);
    Lib.waves(P, [20, 10, 500, 140], 16, 1, 1);
    for (let i = 0; i < 9; i++) { const c = P.I(40 + i * 55, 40 + (i * 37) % 110, 1); drawFish(P, c[0], c[1], 20, i % 2 ? 1 : -1, 'y2b2k2'); }
    vaReeds(P, 10, 170, 200, 30, 22); vaReeds(P, 400, 140, 140, 30, 16);
    for (const [x, y] of [[130, 400], [300, 460]]) { P.shape(P.ell(x, y, 0.6, 26, 18, 16), 'k6r3', 0.9); P.fill(P.ell(x, y, 0.8, 16, 11, 12), 'b6k3', {}); const c = P.I(x + 30, y, 0); P.shape(Lib.bumpy(P, c[0], c[1] - 6, 18, 8, 6), 'y5r3k2', 0.6); }
    vaObelisk(P, 490, 260, 170); vaObelisk(P, 490, 360, 150);
    Lib.palm(P, 40, 260, 0, 160, { lean: 12, dates: 1 });
    Lib.jar(P, 380, 230, 0, 1.3, 'r5y6k1'); Lib.jar(P, 400, 250, 0, 1.1, 'b5y3');
    Lib.grass(P, 30, 'y5b4', [30, 200, 480, 300]);
  },
  chars: [
    ch(LK.moses, { x: 180, y: 220, face: -1, clip: 'raise', hold: { n: 'staff' }, h: 146 }),
    ch(LK.va_aaron, { x: 250, y: 230, face: -1, clip: 'smash', hold: { n: 'staff' }, h: 144 }),
    ch(LK.va_pharaoh, { x: 380, y: 300, face: -1, clip: 'stagger', h: 150 }),
    ch(LK.va_egypt2, { x: 430, y: 320, face: -1, clip: 'guard', hold: { n: 'staffV' }, h: 136 }),
    ch(LK.va_egypt, { x: 120, y: 380, face: 1, clip: 'fill', h: 138 }),
    ch(LK.va_egyptW, { x: 330, y: 440, face: -1, clip: 'fill', h: 130 }),
    ch(LK.va_egypt2, { h: 136, speed: 12, over: 'carry', hold: { nTop: 'jarhead' }, path: [W(240, 490, 2), W(420, 480, 2, 'stagger'), W(240, 490, 0)] })
  ]
},
{
  title: 'Les grenouilles', book: 'Exode', ch: 8, ref: 'Exodus 8:6', refFr: 'Exode 8, 2', accent: 2, feast: null,
  quote: 'And Aaron stretched forth his hand upon the waters of Egypt, and the frogs came up, and covered the land of Egypt.',
  fr: 'Et Aaron étendit sa main sur les eaux de l’Égypte, et les grenouilles montèrent et couvrirent le pays d’Égypte.',
  more: ['Pharaon refuse encore. Aaron étend sa main sur les fleuves, les canaux et les marais, et les grenouilles montent et couvrent le pays. Elles entrent dans les maisons, les chambres et les lits, dans les fours et les pétrins. Pharaon supplie Moïse de prier pour qu’elles s’en aillent. Les grenouilles meurent, on les entasse en monceaux et le pays empeste. Pharaon, soulagé, endurcit son cœur.',
    'Pas de fête juive attachée à ce passage. Le Talmud (Pessa’him 53b) raconte que Hanania, Mishaël et Azaria acceptèrent la fournaise de Nabuchodonosor en pensant aux grenouilles, qui étaient entrées d’elles-mêmes dans les fours d’Égypte.'],
  back(P) {
    Lib.platform(P, 'y4r2', 'y4r3k1', { strata: [[0, .35, 'y4r3k1'], [.35, 1, 'y4r4k3']] });
    P.shape([P.I(380, 0, 0.5), P.I(540, 0, 0.5), P.I(540, 540, 0.5), P.I(470, 540, 0.5), P.I(420, 300, 0.5)], 'b6y2', 1);
    Lib.waves(P, [440, 20, 90, 480], 10, 1, 2); vaReeds(P, 390, 30, 60, 200, 14);
    P.box(0, 0, 0, 16, 360, 150, 'y4r2k1'); P.box(16, 0, 0, 340, 16, 150, 'y4r2k2');
    for (let x = 20; x < 350; x += 30) Lib.wallR(P, x, 110, 26, 14, ['b6y2', 'r6y4', 'y7r2'][(x / 30 | 0) % 3], 0.5);
    P.shape([P.I(200, 16.5, 0), P.I(260, 16.5, 0), P.I(260, 16.5, 100), P.I(200, 16.5, 100)], 'k6r2', 1);
    P.box(60, 60, 0, 120, 70, 32, 'r4y5k3'); P.box(60, 60, 32, 120, 70, 8, 'y1b1'); P.box(60, 60, 40, 18, 70, 30, 'y7r3');
    for (const [x, y] of [[60, 60], [180, 60], [60, 130], [180, 130]]) P.box(x - 2, y - 2, 0, 5, 5, 38, 'y7r3k1', 0.6);
    P.cyl(110, 260, 0, 34, 60, { t: 'r4y4k3', s: 'r5y5k2', d: 'r5y5k3' }); P.shape(P.ell(110, 260, 60.5, 22, 22, 16), 'k8r3', 0.8);
    P.box(250, 110, 0, 90, 40, 26, 'r4y6k2'); P.fill([P.I(256, 116, 26.5), P.I(334, 116, 26.5), P.I(334, 144, 26.5), P.I(256, 144, 26.5)], 'y4r2', {});
    for (let i = 0; i < 3; i++) Lib.jar(P, 30, 170 + i * 30, 0, 1.3, i % 2 ? 'b5y3' : 'r5y6k1');
    Lib.palm(P, 470, 470, 0, 160, { lean: -8, dates: 1 });
  },
  live(P, t) { const c = P.I(110, 260, 60); Lib.smoke(P, c[0], c[1] - 6, t, { n: 3, h: 100, r: 12, tn: 'k2b1' }); },
  chars: [
    vaFrogs([[430, 120, -120, 60, 0], [440, 200, -140, 90, 0.3], [420, 320, -150, 60, 0.6], [440, 420, -120, 40, 0.15], [410, 260, -60, 120, 0.8]], 700),
    vaFrogs([[120, 160, 0, 0, 0.2], [150, 110, 10, -10, 0.5], [110, 90, 20, 0, 0.9], [280, 130, 10, 0, 0.4]], 260),
    vaFrogs([[250, 400, -60, 60, 0.1], [320, 470, -80, 20, 0.45], [200, 330, -50, 80, 0.7], [140, 260, 0, 0, 0.35]], 900),
    ch(LK.va_aaron, { x: 360, y: 280, face: 1, clip: 'raise', hold: { f: 'staffV' }, h: 144 }),
    ch(LK.moses, { x: 340, y: 380, face: 1, clip: 'idle', hold: { f: 'staffV' }, h: 146 }),
    ch(LK.va_egyptW, { x: 180, y: 300, face: 1, clip: 'stagger', h: 132 }),
    ch(LK.va_egypt2, { x: 130, y: 160, z: 40, face: 1, clip: 'stagger', h: 138 }),
    ch(LK.child, { x: 240, y: 200, face: 1, clip: 'point', h: 92 })
  ]
},
{
  title: 'Le doigt de Dieu', book: 'Exode', ch: 8, ref: 'Exodus 8:17', refFr: 'Exode 8, 13', accent: 3, feast: null,
  quote: 'And they did so.  And Aaron stretched forth his hand, holding the rod; and he struck the dust of the earth, and there came sciniphs on men and on beasts:  all the dust of the earth was turned into sciniphs through all the land of Egypt.',
  fr: 'Ils firent ainsi. Aaron étendit la main qui tenait le bâton et frappa la poussière de la terre, et il vint des moustiques sur les hommes et sur les bêtes : toute la poussière de la terre devint moustiques dans tout le pays d’Égypte.',
  more: ['Troisième plaie, sans avertissement. Aaron frappe de son bâton la poussière du sol, et elle devient une vermine qui couvre hommes et bêtes. Les magiciens tentent d’en faire autant et échouent. Ils disent alors à Pharaon : « C’est le doigt de Dieu. » Le cœur de Pharaon s’endurcit, et il ne les écoute pas.',
    'Pas de fête juive attachée à ce passage. Rachi explique que Moïse ne frappa pas lui-même la poussière, car elle l’avait protégé quand il y enfouit l’Égyptien. L’hébreu kinim désigne selon les traductions des poux, des moustiques ou des moucherons.'],
  back(P) {
    Lib.sun(P, 800, 160, 26); Lib.cloud(P, 250, 150, 150, 28, 'k1y1');
    vaPyr(P, [[640, 80, 100]]);
    Lib.platform(P, 'y5r3k1', 'y5r3k2', { strata: [[0, .4, 'y5r3k2'], [.4, 1, 'y5r4k4']] });
    P.box(40, 20, 0, 60, 120, 200, 'y4r2k1'); P.box(40, 180, 0, 60, 120, 200, 'y4r2k1');
    P.box(40, 140, 0, 50, 40, 150, 'k5r3');
    for (const y of [20, 180]) for (let z = 40; z < 200; z += 40) Lib.wallL(P, y + 10, z, 100, 10, 'r5y4', 0.5);
    P.box(36, 16, 200, 68, 128, 12, 'y5r3'); P.box(36, 176, 200, 68, 128, 12, 'y5r3');
    vaObelisk(P, 190, 60, 160);
    Lib.stones(P, 30, 'y4r3k2', [100, 100, 420, 420]);
    for (let i = 0; i < 40; i++) { const c = P.I(160 + P.r() * 360, 160 + P.r() * 360, 0); P.fill(P.disc(c[0], c[1], 1.5 + P.r() * 3, 6).map(p => [p[0], c[1] + (p[1] - c[1]) * 0.4]), 'y4r3k2', {}); }
    Lib.palm(P, 490, 60, 0, 160, { lean: -10 });
    Lib.tree(P, 470, 480, 0, { h: 130, r: 38, blobs: 6, can: 'y4b5k2' });
  },
  live(P, t) {
    const b = P.I(290, 270, 0);
    for (let i = 0; i < 7; i++) { const u = (t * 0.3 + i / 7) % 1; const pts = []; for (let k = 0; k < 12; k++) { const a = k / 12 * TAU, r = 10 + u * 40; pts.push([b[0] + Math.sin(i * 2 + u * 3) * 30 + Math.cos(a) * r, b[1] - u * 170 + Math.sin(a) * r * 0.6]); } P.shape(pts, u > 0.5 ? 'y2r2k1' : 'y3r2k2', 0.5); }
    for (let i = 0; i < 70; i++) { const a = i * 2.39 + t * (0.6 + (i % 5) * 0.2), r = 60 + (i * 37) % 300; P.fill(P.disc(500 + Math.cos(a) * r, 520 + Math.sin(a * 1.3) * r * 0.45 - (i % 7) * 10, 1.4, 5), 'k8', { noKnock: true }); }
  },
  chars: [
    ch(LK.va_aaron, { x: 290, y: 250, face: 1, clip: 'smash', hold: { n: 'staff' }, h: 144 }),
    ch(LK.moses, { x: 230, y: 200, face: 1, clip: 'point', hold: { f: 'staffV' }, h: 146 }),
    ch(LK.va_magician, { x: 400, y: 380, face: -1, clip: 'smash', hold: { n: 'staff' }, h: 142 }),
    ch(LK.va_magician2, { x: 330, y: 430, face: -1, clip: 'point', h: 142 }),
    ch(LK.va_egypt, { x: 180, y: 400, face: 1, clip: 'va_scratch', h: 138 }),
    ch(LK.va_egyptW, { x: 460, y: 250, face: -1, clip: 'va_scratch', h: 130, t0: 0.3 }),
    { beast: 'donkey', h: 90, x: 150, y: 480, face: 1 }, { beast: 'bull', h: 84, x: 460, y: 440, face: -1 }
  ]
},
{
  title: 'La nuée sur l’Égypte, la paix sur Gessen', book: 'Exode', ch: 8, ref: 'Exodus 8:24', refFr: 'Exode 8, 20', accent: 0, feast: null,
  quote: 'And the Lord did so.  And there came a very grievous swarm of flies into the houses of Pharao and of his servants, and into all the land of Egypt:  and the land was corrupted by this kind of flies.',
  fr: 'Et le Seigneur fit ainsi. Il vint un essaim très pesant dans les maisons de Pharaon et de ses serviteurs, et dans tout le pays d’Égypte : et le pays fut ravagé par cette engeance.',
  more: ['Moïse attend Pharaon au bord de l’eau et annonce la quatrième plaie : l’arov envahira les maisons des Égyptiens. Pour la première fois, Dieu distingue la terre de Gessen, où habite son peuple : l’arov n’y entrera pas. L’essaim fond sur l’Égypte. Pharaon propose de laisser le peuple sacrifier dans le pays, puis dans le désert tout proche. La plaie cesse, et il se rétracte encore.',
    'Pas de fête juive attachée à ce passage. La Douay traduit arov par « mouches » ; Rachi y lit un mélange de bêtes sauvages, serpents et scorpions. Le verset précédent (8, 23) parle d’une « séparation » entre les deux peuples, le mot hébreu pedout, qui signifie aussi rachat.'],
  back(P) {
    Lib.cloud(P, 280, 170, 180, 36, 'k2b1'); Lib.sun(P, 800, 150, 26);
    Lib.platform(P, 'y4r3', 'y4r3k1', { strata: [[0, .35, 'y4r3k1'], [.35, 1, 'y4r4k3']] });
    P.fill([P.I(290, 0, 0.5), P.I(540, 0, 0.5), P.I(540, 540, 0.5), P.I(290, 540, 0.5)], 'y5b5', {});
    P.shape([P.I(270, 0, 0.6), P.I(292, 0, 0.6), P.I(292, 540, 0.6), P.I(270, 540, 0.6)], 'b6y1', 0.9);
    Lib.waves(P, [272, 10, 18, 520], 8, 1, 2);
    vaHut(P, 40, 30, 90, 70, 90, 'y4r2k1'); vaHut(P, 150, 40, 80, 60, 70, 'y4r2k2'); vaHut(P, 30, 150, 70, 80, 80, 'y3r2k2');
    vaObelisk(P, 220, 180, 150);
    Lib.tent(P, 360, 30, 110, 90, 90, 'r4y4k1'); Lib.tent(P, 420, 170, 90, 80, 80, 'b3y2k1');
    Lib.grass(P, 60, 'y5b5', [310, 250, 220, 280]);
    Lib.tree(P, 500, 360, 0, { h: 150, r: 44, blobs: 7, can: 'y5b6k1', fruit: 4 });
    fenceRing(P, 420, 420, 70, -1.6, 1.4, 10);
    Lib.stones(P, 18, 'y4r3k3', [30, 250, 220, 280]);
    Lib.jar(P, 150, 130, 0, 1.3, 'r5y6k1');
  },
  live(P, t) {
    for (let i = 0; i < 110; i++) { const a = i * 2.39 + t * (0.8 + (i % 6) * 0.25), r = 20 + (i * 53) % 150, c = P.I(140 + Math.cos(a) * r, 260 + Math.sin(a * 1.2) * r, 60 + (i % 9) * 18 + Math.sin(t * 3 + i) * 12); P.fill([[c[0] - 2.2, c[1]], [c[0], c[1] - 1.6], [c[0] + 2.2, c[1]], [c[0], c[1] + 1.6]], 'k9', { noKnock: true }); }
  },
  chars: [
    ch(LK.va_egypt, { x: 150, y: 290, face: 1, clip: 'va_scratch', h: 138 }),
    ch(LK.va_egyptW, { x: 90, y: 350, face: 1, clip: 'stagger', h: 130 }),
    ch(LK.va_egypt2, { h: 136, speed: 26, path: [W(210, 420, 0.6, 'stagger'), W(80, 460, 0.6, 'stagger'), W(210, 420, 0)] }),
    { beast: 'lion', h: 96, speed: 16, path: [W(70, 250, 2), W(200, 330, 2), W(70, 250, 0)] },
    ch(LK.va_herd, { x: 350, y: 330, face: 1, clip: 'idle', hold: { f: 'staffV' }, h: 142 }),
    ch(LK.isrW, { x: 400, y: 150, face: -1, clip: 'still', h: 132 }),
    { beast: 'sheep', h: 60, x: 420, y: 400, face: 1 }, { beast: 'sheep', h: 58, speed: 6, path: [W(450, 450, 3), W(390, 460, 3), W(450, 450, 0)] },
    { beast: 'camel', h: 110, x: 480, y: 270, face: -1 }
  ]
},
{
  title: 'La peste du bétail', book: 'Exode', ch: 9, ref: 'Exodus 9:6', refFr: 'Exode 9, 6', accent: 3, feast: null,
  quote: 'The Lord therefore did this thing the next day:  and all the beasts of the Egyptians died, but of the beasts of the children of Israel there died not one.',
  fr: 'Le Seigneur fit donc cela le lendemain : tout le bétail des Égyptiens mourut, mais du bétail des enfants d’Israël il ne mourut pas une seule bête.',
  more: ['Cinquième plaie : la main du Seigneur frappe les troupeaux des Égyptiens qui sont dans les champs, chevaux, ânes, chameaux, bœufs et brebis. Dieu en a fixé le jour à l’avance, le lendemain. Pharaon envoie voir : pas une bête d’Israël n’est morte. Il n’en endurcit pas moins son cœur.',
    'Pas de fête juive attachée à ce passage. Dans la Haggada de Pessa’h, Rabbi Yehouda regroupe les dix plaies en trois mots formés de leurs initiales : Detsakh, Adach, Béa’hav. La peste est la cinquième, au milieu du deuxième groupe.'],
  back(P) {
    Lib.cloud(P, 250, 160, 170, 32, 'k2y1'); Lib.cloud(P, 800, 150, 140, 28, 'b1');
    Lib.platform(P, 'y4r3k1', 'y4r3k2', { strata: [[0, .35, 'y4r3k2'], [.35, 1, 'y4r4k4']] });
    P.fill([P.I(0, 380, 0.5), P.I(540, 380, 0.5), P.I(540, 540, 0.5), P.I(0, 540, 0.5)], 'y5b5', {});
    P.shape([P.I(0, 360, 0.6), P.I(540, 360, 0.6), P.I(540, 382, 0.6), P.I(0, 382, 0.6)], 'b6y1', 0.9);
    Lib.waves(P, [10, 362, 520, 18], 8, 1, 2);
    Lib.grass(P, 50, 'y5b5', [20, 390, 500, 140]);
    Lib.grass(P, 20, 'y4r2k2', [20, 20, 500, 320]);
    vaHut(P, 30, 30, 90, 70, 80, 'y4r2k1'); vaObelisk(P, 170, 40, 140);
    fenceRing(P, 330, 170, 130, 0.2, 3.3, 14);
    vaDead(P, 250, 150, 1.4, 'r4y4k3'); vaDead(P, 360, 230, 1.3, 'y6r2k2', 1); vaDead(P, 300, 90, 1.2, 'k4y2r1'); vaDead(P, 430, 120, 1.1, 'y2r1k2', 1); vaDead(P, 180, 270, 1.2, 'y5r3k1');
    Lib.tent(P, 40, 420, 100, 80, 80, 'r4y4k1');
    Lib.palm(P, 500, 60, 0, 150, { lean: -12 });
  },
  live(P, t) { for (let i = 0; i < 4; i++) { const a = t * 0.5 + i * 1.6, c = [640 + Math.cos(a) * 110, 250 + Math.sin(a) * 30]; Lib.bird(P, c[0], c[1], 1.3, t * 1.2 + i, 'k5'); } },
  chars: [
    ch(LK.va_egypt2, { x: 280, y: 200, face: 1, clip: 'kneel', h: 136 }),
    ch(LK.va_egyptW, { x: 160, y: 190, face: 1, clip: 'still', h: 130 }),
    ch(LK.va_egypt, { h: 138, speed: 14, path: [W(90, 330, 2, 'point', { f: 1 }), W(200, 340, 2, 'lookup', { f: 1 }), W(90, 330, 0)], hold: { n: 'scroll' } }),
    ch(LK.va_herd, { x: 300, y: 460, face: -1, clip: 'idle', hold: { f: 'staffV' }, h: 142 }),
    { beast: 'bull', h: 88, x: 400, y: 450, face: -1 }, { beast: 'camel', h: 110, x: 490, y: 480, face: -1 },
    { beast: 'sheep', h: 60, speed: 6, path: [W(200, 470, 3), W(250, 500, 3), W(200, 470, 0)] }, { beast: 'donkey', h: 88, x: 150, y: 430, face: 1 }
  ]
},
{
  title: 'La suie de la fournaise', book: 'Exode', ch: 9, ref: 'Exodus 9:10', refFr: 'Exode 9, 10', accent: 1, feast: null,
  quote: 'And they took ashes out of the chimney, and stood before Pharao, and Moses sprinkled it in the air; and there came boils with swelling blains in men and beasts.',
  fr: 'Ils prirent de la cendre de la fournaise et se tinrent devant Pharaon, et Moïse la jeta en l’air ; et il vint des ulcères avec des pustules enflées sur les hommes et sur les bêtes.',
  more: ['Sixième plaie, elle aussi sans avertissement. Moïse et Aaron prennent chacun plein les mains de suie de fournaise, et Moïse la lance vers le ciel sous les yeux de Pharaon. Elle devient une fine poussière sur toute l’Égypte, et des ulcères couverts de pustules éclatent sur les hommes et les bêtes. Les magiciens ne peuvent plus se tenir devant Moïse.',
    'Pas de fête juive attachée à ce passage. Le verset 12 est le premier où le récit dit que le Seigneur lui-même endurcit le cœur de Pharaon ; auparavant, c’est le cœur de Pharaon qui s’endurcissait.'],
  back(P) {
    Lib.cloud(P, 780, 150, 170, 34, 'k2b1');
    Lib.platform(P, 'y4r3k1', 'y4r3k2', { strata: [[0, .35, 'y4r3k2'], [.35, 1, 'y4r4k4']] });
    vaFurnace(P, 110, 110);
    vaStack(P, 200, 40, 6); vaStack(P, 240, 70, 5); vaStack(P, 40, 220, 4);
    const h = P.I(200, 160, 0); P.shape(Lib.bumpy(P, h[0], h[1] - 10, 34, 12, 7), 'k4b1', 0.8);
    vaCol(P, 470, 60, 200); vaCol(P, 470, 200, 200);
    P.box(440, 30, 222, 60, 200, 14, 'y5r3');
    P.shape([P.I(250, 250, 0.5), P.I(520, 250, 0.5), P.I(520, 330, 0.5), P.I(250, 330, 0.5)], 'r6y3k1', 1);
    Lib.stones(P, 20, 'y4r3k3', [30, 300, 480, 220]);
    Lib.palm(P, 40, 470, 0, 150, { lean: 12 });
  },
  live(P, t) {
    const c = P.I(110, 110, 90); Lib.smoke(P, c[0], c[1] - 4, t, { n: 4, h: 200, r: 22, tn: 'k3b1' });
    const m = P.I(142, 142, 20); Lib.flame(P, m[0], m[1], 20, 26, t);
    const s = P.I(210, 270, 150);
    for (let i = 0; i < 26; i++) { const u = (t * 0.35 + i / 26) % 1, a = i * 2.4; P.fill(P.disc(s[0] + Math.cos(a) * u * 260, s[1] - u * 90 + Math.sin(a) * u * 90 + u * u * 120, 2 + u * 3, 6), u > 0.6 ? 'k2' : 'k4', { noKnock: true }); }
  },
  chars: [
    ch(LK.moses, { x: 210, y: 270, face: 1, clip: 'raise', h: 146 }),
    ch(LK.va_aaron, { x: 180, y: 340, face: 1, clip: 'offer', h: 144 }),
    ch(LK.va_pharaoh, { x: 400, y: 280, face: -1, clip: 'stagger', hold: { n: 'scepter' }, h: 150 }),
    ch(LK.va_egypt, { x: 460, y: 330, face: -1, clip: 'va_scratch', h: 138 }),
    ch(LK.va_magician, { x: 340, y: 420, face: -1, clip: 'kneel', h: 140 }),
    ch(LK.va_magician2, { x: 420, y: 460, face: -1, clip: 'sulk', h: 140 }),
    { beast: 'donkey', h: 88, x: 120, y: 450, face: 1 }
  ]
},
{
  title: 'La grêle et le feu', book: 'Exode', ch: 9, ref: 'Exodus 9:23', refFr: 'Exode 9, 23', accent: 2, feast: null,
  quote: 'And Moses stretched forth his rod towards heaven, and the Lord sent thunder and hail, and lightnings running along the ground:  and the Lord rained hail upon the land of Egypt.',
  fr: 'Et Moïse étendit son bâton vers le ciel, et le Seigneur envoya le tonnerre et la grêle, et des éclairs couraient sur la terre : et le Seigneur fit pleuvoir la grêle sur le pays d’Égypte.',
  more: ['Moïse annonce pour le lendemain une grêle comme l’Égypte n’en a jamais vu. Ceux des serviteurs de Pharaon qui craignent la parole du Seigneur font rentrer leurs esclaves et leurs troupeaux ; les autres les laissent aux champs. Le feu court au milieu de la grêle. Le lin et l’orge sont abattus ; le blé et l’épeautre, plus tardifs, sont épargnés. Pharaon avoue : « Cette fois j’ai péché », puis s’endurcit encore dès que cesse l’orage.',
    'Pas de fête juive attachée à ce passage. Rachi y voit un miracle dans le miracle : le feu et la glace, contraires, firent la paix pour accomplir la volonté de leur Créateur. Seule la terre de Gessen fut épargnée.'],
  back(P) {
    nightSky(P, 'b5k5', 0);
    Lib.cloud(P, 300, 160, 260, 48, 'k4b3'); Lib.cloud(P, 700, 130, 260, 44, 'k4b3');
    Lib.platform(P, 'y4b3k2', 'y4r3k3', { strata: [[0, .35, 'y4r3k3'], [.35, 1, 'y4r4k5']] });
    for (let r = 0; r < 6; r++) for (let i = 0; i < 14; i++) { const c = P.I(230 + i * 21 + (r % 2) * 8, 30 + r * 26, 0), bent = (i + r) % 3 === 0; P.line(bent ? [c, [c[0] + 8, c[1] - 6], [c[0] + 16, c[1] - 4]] : [c, [c[0] + 1, c[1] - 20]], 0.9, { ink: 2 }); if (!bent) P.fill(P.disc(c[0] + 1, c[1] - 21, 2.4, 6), 'b6r2', {}); }
    Lib.field(P, 230, 200, 290, 90, 4, 'y6r2k2');
    for (let i = 0; i < 12; i++) { const c = P.I(240 + i * 24, 300 + (i % 3) * 8, 0); P.line([c, [c[0] + 14, c[1] - 4]], 1, { ink: 0 }); }
    const tb = P.I(120, 170, 0); P.shape([[tb[0] - 7, tb[1]], [tb[0] - 4, tb[1] - 80], [tb[0] - 30, tb[1] - 118], [tb[0] - 24, tb[1] - 122], [tb[0] + 2, tb[1] - 92], [tb[0] + 6, tb[1] - 60], [tb[0] + 30, tb[1] - 58], [tb[0] + 28, tb[1] - 52], [tb[0] + 8, tb[1] - 50], [tb[0] + 8, tb[1]]], 'r4y5k4', 1);
    P.shape(Lib.bumpy(P, tb[0] + 34, tb[1] - 8, 30, 12, 7), 'y4b5k3', 0.8);
    vaHut(P, 30, 300, 100, 80, 80, 'y4r2k2');
    P.box(30, 420, 0, 120, 90, 6, 'y3r2k3'); for (const [x, y] of [[30, 420], [150, 420], [30, 510], [150, 510]]) P.box(x - 3, y - 3, 0, 6, 6, 90, 'r4y5k3', 0.7);
    P.shape([P.I(26, 416, 90), P.I(154, 416, 90), P.I(154, 514, 90), P.I(26, 514, 90)], 'y5r3k3', 1);
    Lib.stones(P, 30, 'y1b2', [200, 320, 320, 200]);
  },
  top(P, t) {
    for (let i = 0; i < 90; i++) { const x = (i * 97.3) % 1000, y0 = (i * 211.7) % 800, y = (y0 + t * 420) % 820 + 80; P.shape(P.disc(x - (y * 0.12), y, 2.4 + (i % 3), 6), 'b1', 0.4); }
    for (let i = 0; i < 10; i++) { const x = (i * 131.7) % 900 + 50, y = ((i * 173) % 700 + t * 360) % 760 + 120; Lib.flame(P, x - y * 0.12, y, 8, 22, t + i, { noKnock: true }); }
    const ph = (t * 0.35) % 1;
    if (ph < 0.12) { let x = 520 + Math.sin(Math.floor(t * 0.35) * 3.1) * 180, y = 180; const pts = [[x, y]]; for (let k = 0; k < 7; k++) { x += (k % 2 ? 22 : -18); y += 60; pts.push([x, y]); } P.line(pts, 3, { ink: 0, lvl: 10 }); P.line(pts, 1.2, { ink: 3 }); }
  },
  chars: [
    ch(LK.moses, { x: 240, y: 380, face: -1, clip: 'raise', hold: { n: 'staff' }, h: 146 }),
    ch(LK.va_aaron, { x: 290, y: 430, face: -1, clip: 'pray', h: 144 }),
    ch(LK.va_egypt2, { h: 136, speed: 20, path: [W(360, 200, 0.5, 'stagger'), W(160, 470, 1.5, 'idle'), W(360, 200, 0)] }),
    { beast: 'bull', h: 84, speed: 20, t0: 0.4, path: [W(400, 220, 0.5), W(200, 470, 1.5), W(400, 220, 0)] },
    ch(LK.va_egypt, { x: 420, y: 330, face: -1, clip: 'kneel', h: 136 }),
    ch(LK.va_egyptW, { x: 110, y: 460, face: 1, clip: 'lookup', h: 130 }),
    { beast: 'donkey', h: 86, x: 70, y: 470, face: 1 }
  ]
}
];
