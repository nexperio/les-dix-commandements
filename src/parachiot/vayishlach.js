/* PARACHA VAYICHLA'H · Genèse 32, 4 à 36, 43 · Chabbat 28 novembre 2026 */
Object.assign(LK, {
  vs_esau: { skin: 'y6r5k1', hs: 'curly', hair: 'r7y4', beard: 'full', bt: 'r7y4', robe: 'r5y5k2', len: 'knee', sleeves: 'short', sash: 'k5', cloak: 'r4y5k3', feet: 'boot' },
  vs_rachel: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k8', robe: 'b5y2', len: 'floor', head: 'veil', ht: 'r6y3', sash: 'r7', sleeves: 'long' },
  vs_leah: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k6r2', robe: 'r5y4', len: 'floor', head: 'veil', ht: 'y3r1', sash: 'b6', sleeves: 'long' },
  vs_man: { skin: 'y4r3', hs: 'curly', hair: 'y6r2k2', robe: 'b2y1', len: 'knee', sleeves: 'short', sash: 'y6', feet: 'bare' }
});
LK.vs_israel = Object.assign({}, LK.jacob, { hair: 'k4', beard: 'long', bt: 'k3' });
LK.vs_esauMan = Object.assign({}, LK.soldier, { robe: 'r6y4k2', ht: 'r5y4k3' });
Object.assign(CLIPS, {
  vs_wrestle: { d: 1.8, k: [{ lean: 24, head: 8, nU: 96, nL: 26, fU: 82, fL: 40, nT: 32, nK: -22, fT: -20, fK: -10 }, { lean: 30, head: 12, nU: 108, nL: 18, fU: 92, fL: 30, nT: 22, nK: -14, fT: -28, fK: -16 }, { lean: 18, head: 4, nU: 90, nL: 32, fU: 78, fL: 44, nT: 36, nK: -26, fT: -16, fK: -8 }] },
  vs_embrace: { d: 3, k: [{ lean: 10, head: 10, nU: 118, nL: 70, fU: 100, fL: 80, nT: 6, fT: -6 }, { lean: 12, head: 14, nU: 122, nL: 66, fU: 104, fL: 76, nT: 6, fT: -6 }] }
});
Object.assign(PROPS2, {
  vs_idol(P, A, J, M, h, t, lw, F, u, n, add) { const b = M(add(A.t, u, 0.02)), s = h / 140; P.shape([[b[0] - 3 * s, b[1] + 6 * s], [b[0] + 3 * s, b[1] + 6 * s], [b[0] + 2 * s, b[1] - 4 * s], [b[0] - 2 * s, b[1] - 4 * s]], 'y8r3', lw * 0.6); P.shape(P.disc(b[0], b[1] - 7 * s, 2.6 * s, 8), 'y8r3', lw * 0.6); }
});
Object.assign(BEAST, {
  vs_goat: { bl: .56, bh: .28, lh: .3, nk: [.12, -48], hd: [.16, 45, .06, .04], tone: 'k6b1', horns: 'bull', ears: 'long', tail: 1 }
});
const vsBooth = (P, x, y, w, d, h) => { for (const [a, b] of [[x, y], [x + w, y], [x, y + d], [x + w, y + d]]) P.box(a, b, 0, 6, 6, h, 'r4y5k3', 0.7); P.shape([P.I(x, y, h), P.I(x + w + 6, y, h), P.I(x + w + 6, y + d + 6, h), P.I(x, y + d + 6, h)], 'y4b5k1', 0.9); for (let i = 0; i < 9; i++) { const c = P.I(x + P.r() * w, y + P.r() * d, h + 2); P.shape(Lib.bumpy(P, c[0], c[1] - 4, 12, 6, 5), i % 2 ? 'y5b6' : 'y6b4k1', 0.6); } };
const SHEET = { title: 'Vayichla’h · Il envoya', sub: 'Paracha de la semaine · Chabbat 28 novembre 2026 · Genèse 32, 4 à 36, 43' };
const SCENES = [
{
  title: 'Les présents pour Ésaü', book: 'Genèse', ch: 32, ref: 'Genesis 32:16', refFr: 'Genèse 32, 17', accent: 0, feast: null,
  quote: 'And he sent them by the hands of his servants, every drove by itself, and he said to his servants:  Go before me, and let there be a space between drove and drove.',
  fr: 'Et il les envoya par la main de ses serviteurs, chaque troupeau à part, et il dit à ses serviteurs : Passez devant moi, et laissez un intervalle entre troupeau et troupeau.',
  more: ['Jacob envoie des messagers à son frère au pays de Séir. Ils reviennent : Ésaü vient à sa rencontre avec quatre cents hommes. Saisi de crainte, Jacob partage son camp en deux, prie, puis prépare un présent : chèvres, brebis, chamelles, vaches, ânesses, envoyés troupeau par troupeau, avec un espace entre chacun, pour apaiser Ésaü avant de le voir.',
    'Pas de fête juive attachée à ce passage. Rachi relève que Jacob se prépare de trois manières : par le présent, par la prière et par la guerre.'],
  back(P) {
    Lib.sun(P, 820, 150, 28); Lib.cloud(P, 280, 140, 160, 30, 'b1');
    Lib.platform(P, 'y4r2', 'y4r3k2');
    Lib.mound(P, 470, 50, 80, 140, 'r5y4k2'); Lib.mound(P, 520, 170, 60, 90, 'r5y3k3'); Lib.mound(P, 350, 20, 60, 80, 'r4y4k2');
    const road = [[90, 500], [200, 400], [330, 280], [460, 160]]; for (let i = 0; i < road.length - 1; i++) { const a = road[i], b = road[i + 1]; P.fill([P.I(a[0] - 24, a[1] - 24, 0.5), P.I(b[0] - 24, b[1] - 24, 0.5), P.I(b[0] + 24, b[1] + 24, 0.5), P.I(a[0] + 24, a[1] + 24, 0.5)], 'y3r1', {}); }
    Lib.tent(P, 30, 200, 130, 110, 110, 'r5y4k1'); Lib.tent(P, 60, 60, 110, 90, 90, 'b4y3k1');
    Lib.palm(P, 250, 120, 0, 150, { lean: 12 }); Lib.bush(P, 420, 420, 0, 26, 'y5b5k1');
    Lib.stones(P, 24, 'y3r2k3', [20, 20, 500, 500]);
  },
  chars: (() => {
    const path = [W(80, 520, 0), W(470, 150, 0), W(80, 520, 0, null, { jump: 1 })], L = [];
    const seq = [[LK.shepherd, 0, { hold: { f: 'staffV' } }], ['vs_goat', 2.4, { h: 62 }], ['vs_goat', 3.4, { h: 58 }], ['sheep', 7, { h: 62 }], [LK.son2, 9.5, { hold: { f: 'staffV' } }], ['camel', 12.5, { h: 112 }], ['bull', 17, { h: 96 }], ['donkey', 21, { h: 90 }]];
    for (const [k, t0, o] of seq) L.push(typeof k === 'string' ? Object.assign({ beast: k, speed: 16, t0, path }, o) : ch(k, Object.assign({ h: 136, speed: 16, t0, path }, o)));
    L.push(ch(LK.jacob, { x: 200, y: 330, face: 1, clip: 'point', h: 146 }));
    return L;
  })()
},
{
  title: 'La lutte au gué du Yabboq', book: 'Genèse', ch: 32, ref: 'Genesis 32:24', refFr: 'Genèse 32, 25', accent: 2, feast: null,
  quote: 'He remained alone; and behold, a man wrestled with him till morning.',
  fr: 'Il resta seul ; et voici qu’un homme lutta avec lui jusqu’au matin.',
  more: ['Jacob fait passer de nuit le gué du Yabboq à ses femmes, ses servantes, ses onze enfants et tous ses biens. Resté seul, il lutte avec un homme jusqu’à l’aurore. L’homme touche le creux de sa hanche, mais Jacob ne le lâche pas sans être béni : « Ton nom ne sera plus Jacob, mais Israël. » Jacob nomme le lieu Penouël et repart en boitant au lever du soleil.',
    'Pas de fête juive attachée à ce passage. Le texte en tire l’interdit de manger le nerf sciatique (guid hanaché), toujours observé ; Rachi identifie l’adversaire à l’ange protecteur d’Ésaü.'],
  back(P) {
    nightSky(P, 'b7k4', 70);
    P.halo(800, 320, 140, ['r1y1', 'r2y2', 'r3y3', 'r3y5'], { knock: true });
    Lib.moon(P, 200, 150, 20);
    Lib.platform(P, 'y3r2b3k1', 'y3r3b2k2', { strata: [[0, .4, 'y3r3b2k2'], [.4, 1, 'y3r3b3k3']] });
    P.shape([P.I(0, 150, 0.6), P.I(540, 190, 0.6), P.I(540, 280, 0.6), P.I(0, 240, 0.6)], 'b6k2', 1.1);
    Lib.waves(P, [20, 170, 500, 80], 26, 1, 0);
    for (let i = 0; i < 7; i++) { const c = P.I(300 + i * 14 - 20, 175 + i * 14, 0); P.shape(Lib.bumpy(P, c[0], c[1], 9, 5, 5), 'y2r2b3k3', 0.7); }
    Lib.tent(P, 40, 20, 110, 90, 90, 'r4y4b2k2'); Lib.tent(P, 200, 20, 100, 80, 80, 'b4y2k2'); Lib.tent(P, 380, 30, 90, 70, 70, 'r3y3b3k2');
    Lib.rock(P, 90, 380, 0, 30, 20, 'y3r2b3k2'); Lib.rock(P, 460, 420, 0, 26, 16, 'y3r2b3k3');
    Lib.stones(P, 26, 'y2r2b3k2', [20, 290, 500, 230]);
    Lib.bush(P, 140, 300, 0, 22, 'y3b5k2');
  },
  live(P, t) { const c = P.I(100, 60, 0); Lib.flame(P, c[0], c[1] + 10, 14, 18, t); },
  chars: [
    ch(LK.jacob, { x: 240, y: 360, face: 1, clip: 'vs_wrestle', h: 150 }),
    ch(LK.vs_man, { x: 280, y: 330, face: -1, clip: 'vs_wrestle', h: 152, t0: 0.9 }),
    { draw(P, t) { const a = (Math.sin(t * 0.8) + 1) / 2; Lib.star(P, 760, 250, 6 + a * 5, 'y8r1'); }, depth: 3000 },
    { beast: 'sheep', h: 56, x: 440, y: 480, face: -1 }, { beast: 'donkey', h: 84, x: 90, y: 470, face: 1 }
  ]
},
{
  title: 'Ésaü court à la rencontre de Jacob', book: 'Genèse', ch: 33, ref: 'Genesis 33:4', refFr: 'Genèse 33, 4', accent: 1, feast: null,
  quote: 'Then Esau ran to meet his brother, and embraced him:  and clasping him fast about the neck, and kissing him, wept.',
  fr: 'Alors Ésaü courut à la rencontre de son frère et l’embrassa ; il le serra étroitement par le cou et, le baisant, il pleura.',
  more: ['Jacob voit venir Ésaü et ses quatre cents hommes. Il place en tête les servantes et leurs enfants, puis Léa et les siens, enfin Rachel et Joseph, et s’avance en se prosternant sept fois. Ésaü court vers lui, se jette à son cou, l’embrasse ; ils pleurent. Ésaü finit par accepter le présent, et chacun reprend sa route.',
    'Pas de fête juive attachée à ce passage. Dans le rouleau de la Torah, le mot « et il l’embrassa » est surmonté de points ; Rachi rapporte les deux lectures des Sages sur la sincérité de ce baiser.'],
  back(P) {
    Lib.sun(P, 180, 150, 30); Lib.cloud(P, 760, 140, 180, 32, 'b1');
    Lib.platform(P, 'y4r2', 'y4r3k2');
    Lib.mound(P, 470, 40, 80, 110, 'r5y4k2'); Lib.mound(P, 60, 60, 70, 80, 'y4b3k2');
    Lib.grass(P, 30, 'y5b4');
    Lib.tree(P, 180, 120, 0, { h: 170, r: 46, can: 'y5b6k1' });
    Lib.stones(P, 26, 'y3r2k3', [20, 20, 500, 500]);
    for (let i = 0; i < 8; i++) { const c = P.I(380 + (i % 4) * 30, 120 + Math.floor(i / 4) * 40, 0); P.line([c, [c[0] + 2, c[1] - 90]], 1.4, { ink: 3 }); }
  },
  chars: [
    ch(LK.vs_esau, { x: 290, y: 280, face: -1, clip: 'vs_embrace', h: 150 }),
    ch(LK.jacob, { x: 250, y: 320, face: 1, clip: 'vs_embrace', h: 146, t0: 1 }),
    ch(LK.vs_esauMan, { x: 420, y: 200, face: -1, clip: 'guard', h: 136, hold: { n: 'spear' } }),
    ch(LK.vs_esauMan, { x: 470, y: 250, face: -1, clip: 'guard', h: 134, t0: 1, hold: { n: 'spear' } }),
    ch(LK.vs_esauMan, { x: 480, y: 170, face: -1, clip: 'idle', h: 132, t0: 2, hold: { n: 'spear' } }),
    ch(LK.maid, { x: 150, y: 400, face: 1, clip: 'bow', h: 126 }),
    ch(LK.vs_leah, { x: 110, y: 460, face: 1, clip: 'idle', h: 128 }),
    ch(LK.vs_rachel, { x: 200, y: 480, face: 1, clip: 'idle', h: 130 }),
    ch(LK.joseph, { x: 240, y: 510, face: 1, clip: 'lookup', h: 100, look: Object.assign({}, LK.child, { robe: 'r6b5', sash: 'y7' }) })
  ]
},
{
  title: 'Les cabanes de Soukkot', book: 'Genèse', ch: 33, ref: 'Genesis 33:17', refFr: 'Genèse 33, 17', accent: 0, feast: null,
  quote: 'And Jacob came to Socoth:  where having built a house, and pitched tents, he called the name of the place Socoth, that is, Tents.',
  fr: 'Et Jacob vint à Soukkot ; il y bâtit une maison, dressa des tentes, et appela ce lieu Soukkot, c’est-à-dire les Tentes.',
  more: ['Ésaü repart vers Séir. Jacob, lui, fait route à son pas, au rythme des enfants et des bêtes qui allaitent. Il s’arrête et s’installe : il se bâtit une maison et fait des abris pour son bétail. Le lieu en prend le nom de Soukkot. Ensuite il atteindra Sichem, y achètera un champ et y dressera un autel.',
    'Pas de fête juive attachée à ce passage. Le mot soukkot, « cabanes », est celui qui donnera son nom à la fête des Cabanes, instituée plus tard au Lévitique (23, 42).'],
  back(P) {
    Lib.sun(P, 820, 140, 28); Lib.cloud(P, 260, 150, 170, 32, 'b1');
    Lib.platform(P, 'y5b3', 'y4r3k2');
    Lib.grass(P, 60, 'y5b5');
    P.box(40, 60, 0, 170, 20, 90, 'y4r3k1'); P.box(40, 60, 0, 20, 150, 90, 'y4r3k2'); P.box(190, 60, 0, 20, 150, 60, 'y4r3k1'); P.box(60, 190, 0, 70, 20, 70, 'y4r3k2');
    for (let i = 0; i < 5; i++) P.box(40, 70 + i * 30, 90, 170, 8, 6, 'r4y6k2', 0.7);
    vsBooth(P, 290, 60, 110, 80, 80); vsBooth(P, 420, 170, 90, 90, 75);
    Lib.tent(P, 60, 340, 120, 100, 100, 'r5y4k1');
    for (let i = 0; i < 6; i++) P.box(250, 430 + i * 12, (i % 2) * 8, 90, 10, 8, 'r4y6k2', 0.8);
    Lib.tree(P, 470, 460, 0, { h: 150, r: 40, can: 'y5b6k1' });
    Lib.stones(P, 14, 'y3r2k3', [20, 250, 500, 250]);
  },
  chars: [
    ch(LK.jacob, { x: 230, y: 180, face: -1, clip: 'hammer', h: 144, hold: { n: 'hammer' } }),
    ch(LK.son1, { h: 136, speed: 18, over: 'carry', hold: { nTop: 'plank' }, path: [W(290, 470, 1.5), W(230, 240, 1.5), W(290, 470, 0)] }),
    ch(LK.son2, { h: 134, speed: 16, t0: 3, hold: { n: 'branches' }, path: [W(470, 330, 1.5), W(360, 170, 1.5, 'raise'), W(470, 330, 0)] }),
    ch(LK.vs_leah, { x: 170, y: 450, face: 1, clip: 'idle', h: 128 }),
    { beast: 'bull', h: 92, x: 350, y: 120, face: 1 }, { beast: 'calf', h: 66, x: 460, y: 230, face: -1 },
    { beast: 'sheep', h: 58, speed: 6, path: [W(380, 330, 3), W(420, 400, 3), W(380, 330, 0)] },
    { beast: 'vs_goat', h: 58, x: 320, y: 380, face: 1 }
  ]
},
{
  title: 'Les idoles enterrées sous le térébinthe', book: 'Genèse', ch: 35, ref: 'Genesis 35:4', refFr: 'Genèse 35, 4', accent: 1, feast: null,
  quote: 'So they gave him all the strange gods they had, and the earrings which were in their ears:  and he buried them under the turpentine tree, that is behind the city of Sichem.',
  fr: 'Ils lui donnèrent donc tous les dieux étrangers qu’ils avaient, et les pendants qui étaient à leurs oreilles ; et il les enfouit sous le térébinthe qui est derrière la ville de Sichem.',
  more: ['Dieu dit à Jacob de monter à Béthel, le lieu du songe de l’échelle, et d’y faire un autel. Jacob demande à sa maison d’ôter les dieux étrangers, de se purifier et de changer de vêtements. On lui remet les idoles et les pendants d’oreilles, qu’il enfouit sous le térébinthe près de Sichem. À Béthel, Dieu le bénit et confirme son nom d’Israël.',
    'Pas de fête juive attachée à ce passage. Jacob accomplit ici le vœu fait à Béthel lors de son départ : « cette pierre sera la maison de Dieu ».'],
  back(P) {
    Lib.sun(P, 180, 150, 28); Lib.cloud(P, 780, 150, 160, 30, 'b1');
    Lib.platform(P, 'y4r2k1', 'y4r3k2');
    Lib.city(P, 330, 20, 190, 150, 7, 'y3r2', 35);
    Lib.mound(P, 70, 60, 70, 90, 'y4b3k2');
    P.shape(P.ell(300, 300, 0.6, 34, 26, 18), 'k7r2', 1);
    for (let i = 0; i < 8; i++) { const c = P.I(345 + P.r() * 30, 280 + P.r() * 50, 0); P.shape(Lib.bumpy(P, c[0], c[1] - 3, 8, 5, 5), 'y4r3k3', 0.6); }
    Lib.tree(P, 240, 220, 0, { h: 260, r: 80, blobs: 10, can: 'y4b6k2', trunk: 'r5y4k4' });
    Lib.grass(P, 30, 'y5b4');
    Lib.stones(P, 18, 'y3r2k3', [20, 350, 500, 170]);
  },
  front(P) { for (let i = 0; i < 4; i++) { const c = P.I(292 + i * 6, 298 + (i % 2) * 5, 0.8); P.fill(P.disc(c[0], c[1], 2.4, 6), 'y9r2', { noKnock: true }); } },
  chars: [
    ch(LK.vs_israel, { x: 330, y: 330, face: -1, clip: 'kneel', h: 144, hold: { n: 'vs_idol' } }),
    ch(LK.son1, { x: 250, y: 360, face: 1, clip: 'reap', h: 136, hold: { n: 'hammer' } }),
    ch(LK.vs_rachel, { h: 128, speed: 14, path: [W(480, 480, 1), W(390, 380, 3, 'offer'), W(480, 480, 0)], hold: { n: 'vs_idol' } }),
    ch(LK.vs_leah, { h: 128, speed: 14, t0: 4, path: [W(470, 400, 1), W(400, 340, 3, 'offer'), W(470, 400, 0)], hold: { n: 'vs_idol' } }),
    ch(LK.isrM, { x: 150, y: 450, face: 1, clip: 'idle', h: 134 }),
    ch(LK.child, { x: 200, y: 480, face: 1, clip: 'lookup', h: 96 }),
    { beast: 'camel', h: 110, x: 90, y: 300, face: 1 }
  ]
},
{
  title: 'La tombe de Rachel', book: 'Genèse', ch: 35, ref: 'Genesis 35:20', refFr: 'Genèse 35, 20', accent: 2, feast: null,
  quote: 'And Jacob erected a pillar over her sepulchre:  this is the pillar of Rachel\'s monument, to this day.',
  fr: 'Et Jacob dressa une stèle sur son sépulcre : c’est la stèle du tombeau de Rachel, jusqu’à ce jour.',
  more: ['En route de Béthel vers Éphrata, au printemps, Rachel accouche dans de grandes douleurs. La sage-femme lui dit : « Ne crains pas, c’est encore un fils. » Mourante, elle le nomme Ben-Oni, « fils de ma douleur » ; son père l’appelle Benjamin, « fils de la droite ». Rachel est enterrée sur le chemin d’Éphrata, qui est Bethléem, et Jacob dresse une stèle sur sa tombe.',
    'Pas de fête juive attachée à ce passage. Le prophète Jérémie (31, 15) entend Rachel pleurer ses enfants partis en exil, et Dieu lui répondre qu’ils reviendront : ce passage est lu en haftara le deuxième jour de Rosh Hashana.'],
  back(P) {
    Lib.sun(P, 820, 150, 26); Lib.cloud(P, 260, 140, 170, 32, 'b1');
    Lib.platform(P, 'y5b3', 'y4r3k2');
    Lib.city(P, 380, 20, 140, 120, 6, 'y3r2', 50);
    const road = [[515, 215], [380, 260], [200, 360], [25, 430]]; for (let i = 0; i < road.length - 1; i++) { const a = road[i], b = road[i + 1]; P.fill([P.I(a[0] - 22, a[1] - 22, 0.5), P.I(b[0] - 22, b[1] - 22, 0.5), P.I(b[0] + 22, b[1] + 22, 0.5), P.I(a[0] + 22, a[1] + 22, 0.5)], 'y4r2', {}); }
    Lib.grass(P, 50, 'y5b5');
    for (let i = 0; i < 40; i++) { const c = P.I(20 + P.r() * 500, 20 + P.r() * 500, 0); P.fill(P.disc(c[0], c[1] - 2, 2.2, 6), ['y8', 'r7', 'r5b5', 'y1'][i % 4], {}); }
    stoneStack(P, 200, 180, 70, 50, 32, 'y3r2k2');
    P.box(222, 192, 32, 24, 22, 120, { t: 'y2r1', l: 'y3r2k1', r: 'y3r2k3' });
    Lib.tree(P, 90, 100, 0, { h: 170, r: 44, can: 'y4b5k1' }); Lib.tree(P, 140, 60, 0, { h: 140, r: 36, can: 'y5b5k1', fruit: 8, fruitTone: 'y1r2' });
    Lib.stones(P, 14, 'y3r2k3', [300, 300, 200, 200]);
  },
  chars: [
    ch(LK.vs_israel, { x: 300, y: 260, face: -1, clip: 'pray', h: 146 }),
    ch(LK.maid, { x: 360, y: 330, face: -1, clip: 'cradle', h: 126, hold: { n: 'baby' } }),
    ch(LK.vs_leah, { x: 400, y: 280, face: -1, clip: 'sulk', h: 128 }),
    ch(LK.joseph, { x: 320, y: 380, face: -1, clip: 'still', h: 100, look: Object.assign({}, LK.child, { robe: 'r6b5', sash: 'y7' }) }),
    { beast: 'camel', h: 110, x: 490, y: 470, face: -1 }, { beast: 'donkey', h: 88, x: 380, y: 500, face: -1 },
    { beast: 'sheep', h: 58, speed: 6, path: [W(140, 440, 3), W(90, 500, 3), W(140, 440, 0)] }
  ]
},
{
  title: 'Ésaü et Jacob enterrent Isaac', book: 'Genèse', ch: 35, ref: 'Genesis 35:29', refFr: 'Genèse 35, 29', accent: 1, feast: null,
  quote: 'and his sons Esau and Jacob buried him.',
  fr: 'et ses fils Ésaü et Jacob l’ensevelirent.',
  more: ['Jacob arrive auprès de son père Isaac à Mambré, à Qiryat-Arba, qui est Hébron, où avaient séjourné Abraham et Isaac. Isaac meurt à cent quatre-vingts ans, âgé et rassasié de jours, et ses deux fils l’ensevelissent ensemble. La paracha s’achève sur la longue liste des descendants d’Ésaü et des rois d’Édom.',
    'Pas de fête juive attachée à ce passage. Jacob précisera plus tard (Genèse 49, 31) qu’Isaac repose dans la grotte de Makhpéla, avec Abraham, Sara et Rébecca.'],
  back(P) {
    Lib.cloud(P, 250, 150, 200, 36, 'k1b2'); Lib.cloud(P, 780, 130, 160, 30, 'k1b2');
    Lib.platform(P, 'y4r2k1', 'y4r3k2');
    const m = Lib.mound(P, 120, 110, 110, 180, 'y4r3k2');
    const c = P.I(170, 170, 0); P.shape([[c[0] - 26, c[1]], [c[0] - 24, c[1] - 30], [c[0] - 10, c[1] - 44], [c[0] + 10, c[1] - 44], [c[0] + 24, c[1] - 30], [c[0] + 26, c[1]]], 'k8r2', 1.1);
    Lib.tree(P, 420, 60, 0, { h: 220, r: 66, blobs: 9, can: 'y4b6k2', trunk: 'r5y4k4' }); Lib.tree(P, 490, 190, 0, { h: 170, r: 50, can: 'y5b5k2' });
    P.box(250, 290, 0, 100, 36, 22, 'r4y5k3');
    P.shape([P.I(256, 294, 22), P.I(344, 294, 22), P.I(344, 322, 22), P.I(256, 322, 22)].map((p, i) => [p[0], p[1] - (i === 1 || i === 2 ? 8 : 12)]), 'y1', 1);
    Lib.lamp(P, 390, 270, 0, 1);
    Lib.stones(P, 22, 'y3r2k3', [20, 300, 500, 220]);
  },
  live(P, t) { const c = P.I(390, 270, 0); Lib.smoke(P, c[0], c[1] - 20, t, { n: 4, h: 110, r: 12, tn: 'k2' }); },
  chars: [
    ch(LK.vs_esau, { x: 250, y: 390, face: 1, clip: 'bow', h: 148 }),
    ch(LK.vs_israel, { x: 380, y: 340, face: -1, clip: 'bow', h: 146, t0: 1 }),
    ch(LK.vs_leah, { x: 430, y: 410, face: -1, clip: 'sulk', h: 128 }),
    ch(LK.isrOld, { x: 470, y: 350, face: -1, clip: 'pray', h: 134 }),
    ch(LK.vs_esauMan, { x: 170, y: 470, face: 1, clip: 'guard', h: 134, hold: { n: 'spear' } }),
    ch(LK.isrW, { x: 330, y: 470, face: -1, clip: 'sulk', h: 126, t0: 2 }),
    { beast: 'camel', h: 110, x: 500, y: 250, face: -1 }
  ]
}
];
