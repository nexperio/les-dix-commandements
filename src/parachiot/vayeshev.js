/* PARACHA VAYÉCHEV · Genèse 37, 1 à 40, 23 · Chabbat 5 décembre 2026 */
Object.assign(LK, {
  vs_israel: { old: 1, skin: 'y5r4', hs: 'fringe', hair: 'k2', beard: 'full', bt: 'k2b1', robe: 'r5y5k2', cloak: 'b4k2', sash: 'y6r2', head: 'cloth', ht: 'y3r2', band: 'k5' },
  vs_israelSack: { old: 1, skin: 'y5r4', hs: 'fringe', hair: 'k2', beard: 'full', bt: 'k2b1', robe: 'k4y3r1', len: 'ankle', sash: 'k6', head: 'cloth', ht: 'k3y2', band: 'k6', feet: 'bare' },
  vs_joseph: { skin: 'y5r4', hs: 'short', hair: 'k6r2', robe: 'y2', len: 'ankle', sleeves: 'long', sash: 'y7', feet: 'sandal', stripes: ['r7', 'b6', 'y8', 'r5b4', 'y6b5', 'r7y5'] },
  vs_judah: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'full', bt: 'k7', robe: 'r6y3k1', cloak: 'y5r4k1', sash: 'b6', head: 'cloth', ht: 'r5y3', band: 'k6' },
  vs_tamar: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k8', robe: 'r4b4', len: 'floor', head: 'veil', ht: 'r6y4', sash: 'y7', sleeves: 'long' },
  vs_potWife: { fem: 1, skin: 'y6r4', hs: 'long', hair: 'k9', robe: 'y1b1', len: 'floor', trim: 1, sleeves: 'long', wide: 1, sash: 'b6r3', crown: 1 },
  vs_jailer: { skin: 'y6r5k1', hs: 'short', hair: 'k8', robe: 'y2', len: 'knee', sash: 'r6', head: 'cap', ht: 'b5y2', feet: 'sandal', sleeves: 'short' },
  vs_butler: { skin: 'y6r5k1', hs: 'short', hair: 'k8', robe: 'y1', len: 'knee', sash: 'r6y3', head: 'cap', ht: 'b5y1', sleeves: 'short' },
  vs_baker: { skin: 'y6r4k1', hs: 'short', hair: 'k8', beard: 'short', robe: 'y2r1', len: 'knee', sash: 'b5', head: 'cap', ht: 'y1', sleeves: 'short' },
  vs_dinah: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k7', robe: 'b4r3', len: 'floor', head: 'veil', ht: 'y3r2', sash: 'r5' }
});
Object.assign(CLIPS, {
  vs_tear: { d: 1.6, k: [{ nU: 40, nL: 95, fU: 30, fL: 100, head: 22, lean: 8, nT: 4, fT: -4 }, { nU: 62, nL: 40, fU: 56, fL: 44, head: 28, lean: 12, nT: 4, fT: -4 }] }
});
Object.assign(PROPS2, {
  vs_coat(P, A, J, M, h, t, lw) { const w = A.w, st = ['r7', 'b6', 'y8', 'r5b4', 'y6b5']; for (let i = 0; i < 5; i++) { const y0 = w[1] + 0.01 + i * 0.045, y1 = y0 + 0.045; P.shape([M([w[0] - 0.07 - i * 0.004, y0]), M([w[0] + 0.07 + i * 0.004, y0]), M([w[0] + 0.074 + i * 0.004, y1]), M([w[0] - 0.074 - i * 0.004, y1])], st[i], lw * 0.5); } },
  vs_coatB(P, A, J, M, h, t, lw) { PROPS2.vs_coat(P, A, J, M, h, t, lw); const w = A.w; for (const [dx, dy, r] of [[-0.03, 0.08, 0.025], [0.03, 0.15, 0.03], [-0.01, 0.2, 0.02]]) { const q = M([w[0] + dx, w[1] + dy]); P.fill(P.disc(q[0], q[1], h * r, 10), 'r9k3', { noKnock: true }); } },
  vs_cloth(P, A, J, M, h, t, lw) { const w = A.w, s = Math.sin(t * 3) * 0.02; P.shape([M([w[0] - 0.02, w[1]]), M([w[0] + 0.06, w[1] - 0.01]), M([w[0] + 0.1 + s, w[1] + 0.16]), M([w[0] + 0.02 + s, w[1] + 0.2]), M([w[0] - 0.04, w[1] + 0.12])], 'y2', lw * 0.6); P.line([M([w[0], w[1] + 0.05]), M([w[0] + 0.05 + s, w[1] + 0.15])], lw * 0.4); },
  vs_seal(P, A, J, M, h, t, lw, F, u, n, add) { const q = M(add(A.t, u, 0.02)); P.line([[q[0], q[1] - h * 0.03], [q[0] - h * 0.02, q[1] + h * 0.02], [q[0] + h * 0.02, q[1] + h * 0.04]], lw * 0.8, { ink: 1 }); P.shape(P.disc(q[0] + h * 0.02, q[1] + h * 0.05, h * 0.018, 10), 'y8r3', lw * 0.6); },
  vs_baskets(P, A, J, M, h, t, lw) { const c = add2(J.head, J.hu, 0.09); for (let i = 0; i < 3; i++) { const y = c[1] - i * 0.06; P.shape([M([c[0] - 0.11, y]), M([c[0] + 0.11, y]), M([c[0] + 0.095, y - 0.056]), M([c[0] - 0.095, y - 0.056])], i % 2 ? 'y5r4k2' : 'y6r3k2', lw * 0.7); P.line([M([c[0] - 0.08, y - 0.028]), M([c[0] + 0.08, y - 0.028])], lw * 0.4); } for (let k = 0; k < 3; k++) { const q = M([c[0] - 0.055 + k * 0.055, c[1] - 0.19]); P.shape(P.disc(q[0], q[1], h * 0.026, 8), 'y7r4k1', lw * 0.5); } }
});
function vsSheaf(P, x, y, ang, s, tn) {
  const b = P.I(x, y, 0), c = Math.cos(ang), si = Math.sin(ang), R = (dx, dy) => [b[0] + (dx * c - dy * si) * s, b[1] + (dx * si + dy * c) * s];
  P.shape([R(-8, 0), R(-4, -16), R(-11, -34), R(-4, -42), R(4, -42), R(11, -34), R(4, -16), R(8, 0)], tn, 0.8);
  P.line([R(-6, -19), R(6, -19)], 2, { ink: 1 });
  for (let i = -2; i <= 2; i++) P.line([R(i * 3, -40), R(i * 5, -52)], 1, { ink: 0 });
}
function vsStar(P, x, y, r) { const pts = []; for (let k = 0; k < 10; k++) { const a = k / 10 * TAU - Math.PI / 2, q = k % 2 ? r * 0.42 : r; pts.push([x + Math.cos(a) * q, y + Math.sin(a) * q]); } P.shape(pts, 'y8r1', 0.6); }
function vsEgWall(P, H, tn) {
  Lib.walls(P, { l: tn, r: tadd(tn, 'k1'), cut: 'y4r3k2' }, { h: H });
  for (let x = 0; x < P.L; x += 30) Lib.wallR(P, x, H - 40, 26, 14, (x / 30) % 3 === 0 ? 'b6y2' : (x / 30) % 3 === 1 ? 'r6y4' : 'y7r2', 0.5);
  for (let y = 0; y < P.L; y += 30) Lib.wallL(P, y, H - 40, 26, 14, (y / 30) % 3 === 0 ? 'b6y2' : (y / 30) % 3 === 1 ? 'r6y4' : 'y7r2', 0.5);
}
function vsLotus(P, x, y, h, tn = 'y3r1') { P.cyl(x, y, 0, 13, h, tn); for (let i = 1; i < 4; i++) P.shape(P.ell(x, y, h * i / 4, 14, 14, 16), 'b5y3', 0.5); P.cyl(x, y, h, 20, 14, 'y5b5'); P.box(x - 22, y - 22, h + 14, 44, 44, 10, 'y4r3'); }
const SHEET = { title: 'Vayéchev · Il s’établit', sub: 'Paracha de la semaine · Chabbat 5 décembre 2026 · Genèse 37, 1 à 40, 23' };
const SCENES = [
{
  title: 'La tunique de couleurs', book: 'Genèse', ch: 37, ref: 'Genesis 37:3', refFr: 'Genèse 37, 3', accent: 0, feast: null,
  quote: 'Now Israel loved Joseph above all his sons, because he had him in his old age:  and he made him a coat of divers colours.',
  fr: 'Or Israël aimait Joseph plus que tous ses fils, parce qu’il l’avait eu dans sa vieillesse : et il lui fit une tunique de couleurs variées.',
  more: ['Jacob s’est établi au pays de Canaan, où son père avait séjourné. Joseph, fils de Rachel, a dix-sept ans ; il fait paître le troupeau avec ses frères et rapporte à son père leurs mauvais propos. Jacob, qui l’a eu dans sa vieillesse, lui fait une tunique de couleurs variées. Les frères voient cette préférence et ne peuvent plus lui parler en paix.',
    'Pas de fête juive attachée à ce passage. Le Talmud (Chabbat 10b) en tire une règle d’éducation : un père ne doit pas distinguer un fils parmi les autres, car pour le poids de deux sicles de laine fine, la jalousie des frères finit par faire descendre nos pères en Égypte.'],
  back(P) {
    Lib.sun(P, 820, 140, 30); Lib.cloud(P, 260, 130, 150, 30, 'b1');
    Lib.platform(P, 'y4r2', 'y4r3k2');
    Lib.tent(P, 30, 40, 170, 140, 130, 'r5y4k1'); Lib.tent(P, 250, 20, 130, 110, 100, 'b3y3k1');
    Lib.tree(P, 450, 90, 0, { h: 220, r: 70, blobs: 9, can: 'y4b5k2', trunk: 'r5y4k4' });
    P.box(150, 250, 0, 70, 30, 24, 'y3r2k3');
    Lib.well(P, 440, 300, 30);
    P.box(40, 330, 0, 90, 90, 1, 'y5r3k1', 0.5); for (let i = 0; i < 5; i++) P.line([P.I(45, 340 + i * 18, 1.5), P.I(125, 340 + i * 18, 1.5)], 0.6, { ink: 1 });
    Lib.grass(P, 30, 'y5b4', [260, 380, 260, 150]);
    Lib.stones(P, 18, 'y3r2k3', [20, 200, 500, 320]);
  },
  chars: [
    ch(LK.vs_israel, { x: 185, y: 265, z: 24, face: 1, clip: 'bless', h: 142 }),
    ch(LK.vs_joseph, { h: 132, speed: 14, path: [W(270, 300, 3, 'idle', { f: -1 }), W(330, 360, 2.5, 'dance'), W(290, 400, 0), W(270, 300, 0)] }),
    ch(LK.bro1, { x: 470, y: 400, face: -1, clip: 'sulk', h: 140 }),
    ch(LK.bro2, { x: 420, y: 450, face: -1, clip: 'talk', h: 142, t0: 1 }),
    ch(LK.bro3, { x: 490, y: 480, face: -1, clip: 'sulk', h: 138, t0: 2 }),
    ch(LK.shepherd, { x: 380, y: 200, face: -1, clip: 'idle', h: 136, hold: { f: 'staffV' } }),
    { beast: 'sheep', h: 64, speed: 6, path: [W(100, 470, 3), W(180, 500, 2), W(100, 470, 0)] },
    { beast: 'sheep', h: 60, x: 60, y: 420, face: 1 }, { beast: 'ram', h: 68, x: 200, y: 460, face: -1 }
  ]
},
{
  title: 'Le songe des gerbes', book: 'Genèse', ch: 37, ref: 'Genesis 37:7', refFr: 'Genèse 37, 7', accent: 0, feast: null,
  quote: 'I thought we were binding sheaves in the field:  and my sheaf arose as it were, and stood, and your sheaves standing about bowed down before my sheaf.',
  fr: 'Il me semblait que nous liions des gerbes dans les champs : et ma gerbe se leva et se tint debout, et vos gerbes, rangées autour, se prosternèrent devant ma gerbe.',
  more: ['Joseph raconte à ses frères un premier songe : ils lient ensemble des gerbes dans un champ ; la sienne se dresse, et les leurs, rangées autour, se prosternent devant elle. « Régneras-tu donc sur nous ? » répondent les frères. Ils le haïssent davantage, pour ses songes et pour ses paroles.',
    'Pas de fête juive attachée à ce passage. Le songe s’accomplit dans la paracha suivante, Mikets : les frères viennent acheter du blé en Égypte et se prosternent devant Joseph devenu gouverneur (Genèse 42, 6).'],
  back(P) {
    Lib.sun(P, 180, 150, 28); Lib.cloud(P, 760, 130, 160, 32, 'b1');
    Lib.platform(P, 'y6r2', 'y5r3k1');
    Lib.field(P, 20, 30, 500, 120, 5, 'y7r3');
    Lib.field(P, 330, 380, 190, 140, 4, 'y7r3');
    P.fill([P.I(150, 170, 0.5), P.I(390, 170, 0.5), P.I(390, 370, 0.5), P.I(150, 370, 0.5)], 'y4r2k1', {});
    for (let i = 0; i < 20; i++) { const c = P.I(160 + P.r() * 220, 180 + P.r() * 180, 0); P.line([[c[0], c[1]], [c[0] + 8, c[1] - 2]], 0.8, { ink: 0 }); }
    Lib.tree(P, 60, 380, 0, { h: 170, r: 50, blobs: 8, can: 'y4b5k2', trunk: 'r5y4k4' });
    Lib.stones(P, 12, 'y3r2k3', [20, 440, 250, 90]);
    P.box(420, 190, 0, 40, 30, 22, 'y3r2k2'); Lib.jar(P, 440, 205, 22, 1.1);
  },
  live(P, t) {
    const cx = 270, cy = 270, ctr = P.I(cx, cy, 0)[0], bow = 0.35 + 0.25 * Math.sin(t * 1.3);
    const L = []; for (let i = 0; i < 11; i++) { const a = i / 11 * TAU; L.push([cx + Math.cos(a) * 85, cy + Math.sin(a) * 70]); }
    L.sort((a, b) => a[0] + a[1] - b[0] - b[1]);
    for (const [x, y] of L) { if (x + y > cx + cy) continue; const sx = P.I(x, y, 0)[0]; vsSheaf(P, x, y, Math.sign(ctr - sx) * bow, 1, 'y7r3'); }
    vsSheaf(P, cx, cy, 0.04 * Math.sin(t * 2), 1.35, 'y8r3');
    for (const [x, y] of L) { if (x + y <= cx + cy) continue; const sx = P.I(x, y, 0)[0]; vsSheaf(P, x, y, Math.sign(ctr - sx) * bow, 1, 'y7r3'); }
  },
  chars: [
    ch(LK.joseph, { x: 400, y: 330, face: -1, clip: 'talk', h: 132, look: Object.assign({}, LK.vs_joseph) }),
    ch(LK.bro1, { x: 470, y: 250, face: -1, clip: 'sulk', h: 140 }),
    ch(LK.bro2, { x: 150, y: 420, face: 1, clip: 'reap', h: 140, hold: { n: 'sickle' } }),
    ch(LK.bro3, { x: 230, y: 470, face: 1, clip: 'glean', h: 140, t0: 1 }),
    ch(LK.son1, { x: 460, y: 420, face: -1, clip: 'talk', h: 138, t0: 0.6 }),
    ch(LK.son2, { x: 90, y: 250, face: 1, clip: 'sulk', h: 138 }),
    ch(LK.shepherd, { h: 136, speed: 18, hold: { n: 'sheaf' }, over: 'carry', path: [W(60, 120, 1), W(120, 200, 1), W(60, 120, 0)] })
  ]
},
{
  title: 'Le soleil, la lune et onze étoiles', book: 'Genèse', ch: 37, ref: 'Genesis 37:9', refFr: 'Genèse 37, 9', accent: 2, feast: 'Hanoucca',
  quote: 'He dreamed also another dream, which he told his brethren, saying:  I saw in a dream, as it were the sun, and the moon, and eleven stars worshipping me.',
  fr: 'Il eut encore un autre songe, qu’il raconta à ses frères, disant : J’ai vu en songe comme le soleil, la lune et onze étoiles qui se prosternaient devant moi.',
  more: ['Dans un second songe, le soleil, la lune et onze étoiles se prosternent devant Joseph. Il le raconte à son père et à ses frères. Jacob le reprend : « Faudra-t-il que moi, ta mère et tes frères, nous venions nous prosterner à terre devant toi ? » Ses frères le jalousent, mais son père garde la chose en mémoire.',
    'Correspondance : <b>Hanoucca</b>. En 5787, ce Chabbat Vayéchev est le premier jour de la fête : la première lumière s’allume le vendredi soir, avant les bougies de Chabbat. On sort deux rouleaux ; le maftir lit l’offrande du premier jour de l’inauguration de l’autel (Nombres 7, 1 à 17), et la haftara de Zacharie (2, 14 à 4, 7) montre au prophète un chandelier d’or à sept lampes.'],
  back(P) {
    nightSky(P, 'b7k4', 160);
    Lib.platform(P, 'y3r2b2k1', 'y3r3b2k2', { strata: [[0, .5, 'y3r3b2k2'], [.5, 1, 'y3r3b3k3']] });
    Lib.tent(P, 40, 60, 170, 140, 130, 'r4y4b2k1'); Lib.tent(P, 300, 30, 130, 100, 100, 'b4y2k2');
    P.box(230, 300, 0, 110, 50, 4, 'r5y4k2'); for (let i = 0; i < 5; i++) P.line([P.I(235, 305 + i * 10, 4.5), P.I(335, 305 + i * 10, 4.5)], 0.5, { ink: 1 });
    Lib.stones(P, 8, 'k3', [410, 400, 40, 40]);
    Lib.tree(P, 470, 200, 0, { h: 180, r: 55, blobs: 8, can: 'y2b6k3', trunk: 'r4y3k5' });
    Lib.stones(P, 18, 'y2r2b3k2', [20, 20, 500, 500]);
  },
  live(P, t) {
    const f = P.I(430, 420, 0); Lib.flame(P, f[0], f[1], 20, 30, t);
    Lib.sun(P, 300, 170, 26); Lib.moon(P, 700, 165, 20);
    const j = P.I(280, 320, 40);
    for (let i = 0; i < 11; i++) { const a = Math.PI * (0.12 + i * 0.076), r = 330, dip = 16 * Math.sin(t * 1.5 + i * 0.6); vsStar(P, j[0] + Math.cos(a) * r * 1.1, 350 - Math.sin(a) * 180 + dip, 13 + (i % 3) * 2); }
  },
  chars: [
    ch(LK.joseph, { x: 280, y: 325, z: 4, face: 1, clip: 'sleep', h: 132, look: LK.vs_joseph }),
    ch(LK.vs_israel, { x: 200, y: 230, face: 1, clip: 'lookup', h: 140 }),
    ch(LK.bro1, { x: 400, y: 280, face: -1, clip: 'sulk', h: 138 }),
    ch(LK.bro2, { x: 460, y: 330, face: -1, clip: 'talk', h: 140, t0: 1 }),
    { beast: 'sheep', h: 58, x: 120, y: 460, face: 1 }, { beast: 'sheep', h: 56, x: 180, y: 490, face: -1 }
  ]
},
reuse(AT[4]),
{
  title: 'La tunique rapportée à Jacob', book: 'Genèse', ch: 37, ref: 'Genesis 37:33', refFr: 'Genèse 37, 33', accent: 1, feast: null,
  quote: 'And the father acknowledging it, said:  It is my son\'s coat, an evil wild beast hath eaten him, a beast hath devoured Joseph.',
  fr: 'Et le père la reconnut et dit : C’est la tunique de mon fils ; une bête féroce l’a dévoré, une bête a dévoré Joseph.',
  more: ['Les frères égorgent un chevreau, trempent la tunique dans le sang et la font porter à leur père : « Reconnais si c’est la tunique de ton fils. » Jacob la reconnaît. Il déchire ses vêtements, se ceint les reins d’un sac et porte longtemps le deuil. Ses fils et ses filles viennent le consoler ; il refuse : « Je descendrai en deuil vers mon fils au Chéol. »',
    'Pas de fête juive attachée à ce passage. Le mot « reconnais » revient au chapitre suivant, quand Tamar le dit à Juda en lui renvoyant son sceau, son cordon et son bâton (Genèse 38, 25).'],
  back(P) {
    Lib.cloud(P, 250, 120, 190, 40, 'k2b1'); Lib.cloud(P, 700, 150, 170, 36, 'k2b2'); Lib.cloud(P, 480, 90, 130, 28, 'k1b1');
    Lib.platform(P, 'y3r2k2', 'y4r3k3');
    Lib.tent(P, 30, 40, 190, 150, 140, 'r4y3k3');
    P.box(230, 40, 0, 50, 40, 30, 'y3r2k3');
    Lib.tree(P, 460, 60, 0, { h: 190, r: 40, blobs: 5, can: 'y3r2k4', trunk: 'r4y3k5' });
    Lib.stones(P, 7, 'k4', [120, 250, 40, 40]); for (let i = 0; i < 8; i++) { const c = P.I(125 + P.r() * 30, 255 + P.r() * 30, 1); P.fill(P.disc(c[0], c[1], 3, 6), 'k5', {}); }
    Lib.stones(P, 22, 'y3r2k3', [20, 200, 500, 320]);
  },
  chars: [
    ch(LK.vs_israelSack, { x: 210, y: 220, face: 1, clip: 'vs_tear', h: 140 }),
    ch(LK.bro1, { x: 300, y: 260, face: -1, clip: 'offer', h: 140, hold: { n: 'vs_coatB' } }),
    ch(LK.bro2, { x: 360, y: 330, face: -1, clip: 'bow', h: 142 }),
    ch(LK.bro3, { x: 420, y: 250, face: -1, clip: 'sulk', h: 138, t0: 1 }),
    ch(LK.son1, { x: 440, y: 400, face: -1, clip: 'idle', h: 136 }),
    ch(LK.vs_dinah, { x: 170, y: 320, face: 1, clip: 'talk', h: 126 }),
    ch(LK.isrW, { x: 120, y: 380, face: 1, clip: 'pray', h: 124 }),
    { beast: 'donkey', h: 90, x: 480, y: 470, face: -1 }
  ]
},
{
  title: 'Tamar et les gages de Juda', book: 'Genèse', ch: 38, ref: 'Genesis 38:25', refFr: 'Genèse 38, 25', accent: 1, feast: null,
  quote: 'But when she was led to execution, she sent to her father in law, saying:  By the man, to whom these things belong, I am with child. See whose ring, and bracelet, and staff this is.',
  fr: 'Mais comme on la menait au supplice, elle envoya dire à son beau-père : C’est de l’homme à qui appartiennent ces objets que je suis enceinte. Vois à qui sont cet anneau, ce bracelet et ce bâton.',
  more: ['Juda a promis à Tamar, sa belle-fille deux fois veuve, son dernier fils Chéla, puis la laisse attendre. Tamar se voile et s’assied au carrefour ; Juda, qui ne la reconnaît pas, lui laisse en gage son sceau, son cordon et son bâton. Trois mois plus tard, on la dit enceinte et Juda ordonne qu’on la brûle. Elle lui renvoie les gages, et Juda reconnaît : « Elle est plus juste que moi. »',
    'Pas de fête juive attachée à ce passage. De cette union naissent les jumeaux Pérets et Zéra’h ; de Pérets descendent Booz, puis le roi David, comme le rappelle la fin du livre de Ruth (Ruth 4, 18 à 22).'],
  back(P) {
    Lib.sun(P, 800, 150, 26);
    Lib.platform(P, 'y4r2k1', 'y4r3k2');
    P.box(20, 20, 0, 24, 260, 110, 'y3r2k2'); P.box(20, 20, 0, 260, 24, 110, 'y3r2k2');
    Lib.city(P, 50, 50, 180, 150, 5, 'y3r2', 38);
    Lib.gate(P, 280, 60, 70, 100, 'y4r3k2');
    for (let i = 0; i < 9; i++) { const y = 400 + (i % 3) * 12, x = 400 + Math.floor(i / 3) * 6; P.box(x - 40, y, Math.floor(i / 3) * 9, 90, 10, 9, i % 2 ? 'r4y5k3' : 'r5y4k2', 0.6); }
    const road = [[350, 100], [420, 250], [540, 330]]; for (let i = 0; i < 2; i++) { const a = road[i], b = road[i + 1]; P.fill([P.I(a[0] - 20, a[1] + 20, 0.5), P.I(b[0] - 20, b[1] + 20, 0.5), P.I(b[0] + 20, b[1] - 20, 0.5), P.I(a[0] + 20, a[1] - 20, 0.5)], 'y3r1', {}); }
    Lib.palm(P, 470, 120, 0, 150, { lean: 10, dates: 1 });
    Lib.stones(P, 18, 'y3r2k3', [20, 300, 300, 220]);
  },
  chars: [
    ch(LK.vs_judah, { x: 300, y: 190, face: 1, clip: 'talk', h: 146 }),
    ch(LK.isrOld, { x: 240, y: 150, face: 1, clip: 'idle', h: 136 }),
    ch(LK.vs_tamar, { x: 330, y: 420, face: -1, clip: 'offer', h: 134, hold: { n: 'vs_seal' } }),
    ch(LK.guard, { x: 260, y: 470, face: 1, clip: 'guard', h: 140, look: LK.bro2 }),
    ch(LK.shepherd, { h: 136, speed: 20, hold: { f: 'staffV' }, path: [W(310, 380, 1.5), W(340, 250, 2.5, 'offer', { f: -1 }), W(310, 380, 0)] }),
    ch(LK.isrW2, { x: 150, y: 330, face: 1, clip: 'talk', h: 126 }),
    ch(LK.isrM, { x: 120, y: 400, face: 1, clip: 'point', h: 138 })
  ]
},
{
  title: 'Joseph et la femme de Potiphar', book: 'Genèse', ch: 39, ref: 'Genesis 39:12', refFr: 'Genèse 39, 12', accent: 2, feast: null,
  quote: 'But he leaving the garment in her hand, fled, and went out.',
  fr: 'Mais lui, laissant le vêtement dans sa main, s’enfuit et sortit.',
  more: ['Vendu à Potiphar, chef des gardes de Pharaon, Joseph réussit en tout ce qu’il entreprend, et son maître lui confie toute sa maison. La femme de Potiphar le presse jour après jour. Un jour où personne de la maison n’est là, elle le saisit par son vêtement ; Joseph le lui laisse entre les mains et s’enfuit. Elle l’accuse, et Joseph est jeté dans la prison du roi.',
    'Pas de fête juive attachée à ce passage. C’est pour ce refus que la tradition juive appelle Joseph « Yossef hatsadik », Joseph le Juste.'],
  back(P) {
    Lib.platform(P, 'y3r1', 'y4r3k1', { h: 50, pebbles: false, strata: [[0, .5, 'y4r3k1'], [.5, 1, 'y4r3k3']] });
    for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) { const x = i * 90, y = j * 90; if ((i + j) % 2) P.fill([P.I(x, y, 0), P.I(x + 90, y, 0), P.I(x + 90, y + 90, 0), P.I(x, y + 90, 0)], 'y4r2', {}); }
    vsEgWall(P, 260, 'y3r2');
    Lib.archR(P, 330, 0, 90, 180, 'y5b5k3'); Lib.archL(P, 150, 60, 80, 110, 'b6k3');
    for (let i = 0; i < 4; i++) { const p = P.I(60 + i * 60, 0.5, 120); P.shape([[p[0] - 12, p[1]], [p[0] + 12, p[1]], [p[0] + 8, p[1] - 30], [p[0] - 8, p[1] - 30]], i % 2 ? 'r6y4' : 'b5y3', 0.5); P.shape(P.disc(p[0], p[1] - 36, 7, 10), 'y7r3', 0.5); }
    P.box(40, 200, 0, 140, 70, 30, 'r4y5k3'); P.box(40, 200, 30, 140, 70, 10, 'y1b1'); P.box(40, 200, 40, 20, 70, 40, 'y7r3');
    vsLotus(P, 260, 60, 220); vsLotus(P, 60, 360, 220);
    Lib.jar(P, 470, 40, 0, 1.6, 'r5y5k1'); Lib.jar(P, 500, 40, 0, 1.3, 'b5y2');
    P.shape([P.I(220, 280, 0.5), P.I(420, 280, 0.5), P.I(420, 380, 0.5), P.I(220, 380, 0.5)], 'r6b3', 0.9); for (let i = 0; i < 5; i++) P.line([P.I(235 + i * 40, 290, 1), P.I(235 + i * 40, 370, 1)], 0.7, { ink: 0 });
  },
  chars: [
    ch(LK.vs_potWife, { h: 134, speed: 18, hold: { n: 'vs_cloth' }, path: [W(200, 290, 2.5, 'reach', { f: 1 }), W(260, 330, 3, 'reach', { f: 1 }), W(200, 290, 0)] }),
    ch(LK.joseph, { h: 134, speed: 46, path: [W(290, 320, 0.8, 'stagger', { f: 1 }), W(500, 360, 0), W(520, 480, 0), W(290, 320, 0, null, { jump: 1 })] }),
    ch(LK.maid, { x: 480, y: 120, face: -1, clip: 'idle', h: 126, hold: { nTop: 'jarhead' } })
  ]
},
{
  title: 'L’échanson et le panetier', book: 'Genèse', ch: 40, ref: 'Genesis 40:8', refFr: 'Genèse 40, 8', accent: 2, feast: null,
  quote: 'They answered:  We have dreamed a dream, and there is nobody to interpret it to us.  And Joseph said to them:  Doth not interpretation belong to God?  Tell me what you have dreamed:',
  fr: 'Ils répondirent : Nous avons fait un songe, et il n’y a personne pour nous l’interpréter. Et Joseph leur dit : L’interprétation n’appartient-elle pas à Dieu ? Racontez-moi ce que vous avez vu en songe.',
  more: ['En prison, Joseph gagne la confiance du chef de la prison. Le grand échanson et le grand panetier de Pharaon y sont jetés. La même nuit, chacun fait un songe : une vigne à trois sarments dont l’échanson presse les raisins dans la coupe du roi ; trois corbeilles sur la tête du panetier, que les oiseaux viennent picorer. Dans trois jours, dit Joseph, l’un retrouvera sa charge, l’autre sera pendu. Tout arrive ainsi, mais l’échanson oublie Joseph.',
    'Pas de fête juive attachée à ce passage. Le troisième jour est celui de l’anniversaire de Pharaon (Genèse 40, 20), première mention d’un anniversaire dans la Bible.'],
  back(P) {
    const a = [300, 170], b = [690, 170];
    P.halo(a[0], a[1], 110, ['b1', 'y1', 'y2'], { sq: 0.8 }); P.halo(b[0], b[1], 110, ['b1', 'y1', 'y2'], { sq: 0.8 });
    P.line([[a[0], a[1] + 80], [a[0] - 5, a[1] + 20]], 4, { ink: 3 }); for (let i = 0; i < 3; i++) { const e = [a[0] - 60 + i * 60, a[1] - 40 - (i % 2) * 20]; P.line([[a[0] - 5, a[1] + 20], [(a[0] + e[0]) / 2, a[1] - 5], e], 2.4, { ink: 3 }); P.shape(Lib.bumpy(P, e[0], e[1], 16, 10, 5), 'y5b6', 0.6); for (let k = 0; k < 5; k++) P.fill(P.disc(e[0] - 6 + (k % 3) * 6, e[1] + 10 + Math.floor(k / 3) * 6, 3.5, 8), 'r6b6', {}); }
    const cp = [a[0] + 50, a[1] + 50]; P.shape([[cp[0] - 12, cp[1] - 16], [cp[0] + 12, cp[1] - 16], [cp[0] + 4, cp[1]], [cp[0] + 6, cp[1] + 10], [cp[0] - 6, cp[1] + 10], [cp[0] - 4, cp[1]]], 'y8r3', 0.8);
    for (let i = 0; i < 3; i++) { const y = b[1] + 50 - i * 32; P.shape([[b[0] - 42, y], [b[0] + 42, y], [b[0] + 36, y - 26], [b[0] - 36, y - 26]], i % 2 ? 'y5r4k2' : 'y6r3k2', 0.9); P.line([[b[0] - 34, y - 13], [b[0] + 34, y - 13]], 0.6); }
    for (let k = 0; k < 4; k++) P.shape(P.disc(b[0] - 24 + k * 16, b[1] - 50, 8, 10), 'y7r4k1', 0.6);
    Lib.platform(P, 'k2y3r2', 'y3r3k3', { h: 50 });
    P.box(0, 0, 0, 24, 540, 150, { t: 'y3r2k3', l: 'y3r2k2', r: 'y3r2k4' }); P.box(0, 0, 0, 540, 24, 150, { t: 'y3r2k3', l: 'y3r2k3', r: 'y3r2k2' });
    stoneStack(P, 24, 0, 516, 24, 150, 'y3r2k3');
    P.box(200, 24, 0, 70, 6, 110, 'k7r2'); for (let i = 0; i < 5; i++) P.line([P.I(210 + i * 13, 31, 0), P.I(210 + i * 13, 31, 110)], 1.6, { ink: 3 });
    for (let i = 0; i < 26; i++) { const c = P.I(60 + P.r() * 200, 300 + P.r() * 200, 0.5); P.line([[c[0], c[1]], [c[0] + 10, c[1] - 3]], 0.8, { ink: 0 }); }
    Lib.lamp(P, 60, 60, 60, 1.1);
    Lib.stones(P, 16, 'k3y2', [300, 300, 220, 220]);
  },
  live(P, t) { for (let i = 0; i < 3; i++) { const a = t * 1.4 + i * 2.1; Lib.bird(P, 690 + Math.cos(a) * 55, 95 + Math.sin(a) * 18, 1.3, t * 3 + i, 'k6'); } },
  chars: [
    ch(LK.joseph, { x: 250, y: 270, face: 1, clip: 'talk', h: 134 }),
    ch(LK.vs_butler, { x: 250, y: 420, face: 1, clip: 'offer', h: 136, hold: { n: 'cup' } }),
    ch(LK.vs_baker, { x: 400, y: 280, face: -1, clip: 'lookup', h: 136, hold: { nTop: 'vs_baskets' } }),
    ch(LK.vs_jailer, { h: 138, speed: 14, hold: { n: 'spear' }, path: [W(470, 120, 3, 'guard'), W(470, 450, 3, 'guard'), W(470, 120, 0)] }),
    ch(LK.son2, { x: 90, y: 160, face: 1, clip: 'sulk', h: 134, look: Object.assign({}, LK.son2, { head: 0, robe: 'y2k2', feet: 'bare' }) })
  ]
}
];
