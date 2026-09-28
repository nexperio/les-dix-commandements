/* PARACHA HAYÉ SARAH · Genèse 23, 1 à 25, 18 · Chabbat 7 novembre 2026 */
Object.assign(LK, {
  hs_eliezer: { old: 1, skin: 'y6r4k1', hs: 'fringe', hair: 'k3', beard: 'full', bt: 'k3', robe: 'b4y3k1', cloak: 'r4y5k2', sash: 'y7r2', head: 'turban', ht: 'y2r1' },
  hs_rebecca: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k7r3', robe: 'r6y4', len: 'floor', head: 'veil', ht: 'y3', sash: 'b6', sleeves: 'short' },
  hs_rebeccaVeil: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k7r3', robe: 'r6y4', len: 'floor', head: 'veil', ht: 'b5y1', cloak: 'b5y1', sash: 'b6', sleeves: 'long' },
  hs_isaac: { skin: 'y5r4', hs: 'curly', hair: 'k7r2', beard: 'short', bt: 'k6r2', robe: 'y2', cloak: 'r5y3k2', sash: 'r5', head: 'cloth', ht: 'y1', band: 'r5k3' },
  hs_ishmael: { skin: 'y6r5k1', hs: 'curly', hair: 'k8', beard: 'long', bt: 'k7', robe: 'y4r3k1', cloak: 'r6y4k2', sash: 'r7', head: 'turban', ht: 'r4y4' },
  hs_ephron: { skin: 'y6r4k2', hs: 'curly', hair: 'k8', beard: 'long', bt: 'k8', robe: 'b5r4', trim: 1, cloak: 'y6r3k1', sash: 'y8', head: 'tall', ht: 'b4y2k1', sleeves: 'long' },
  hs_hittite: { skin: 'y6r5k1', hs: 'curly', hair: 'k8', beard: 'short', robe: 'r5y2k1', len: 'ankle', sash: 'b5', head: 'tall', ht: 'r4y3k2', sleeves: 'long' },
  hs_laban: { skin: 'y5r4k1', hs: 'short', hair: 'k7', beard: 'long', bt: 'k7', robe: 'b5y2k1', cloak: 'y6r4k1', sash: 'r6', head: 'turban', ht: 'y3b1' },
  hs_nurse: { fem: 1, old: 1, skin: 'y5r4k1', hs: 'long', hair: 'k2', robe: 'y4r2k2', len: 'floor', head: 'veil', ht: 'k3y2', sash: 'r5' },
  hs_shroud: { old: 1, skin: 'y5r4k1', hs: 'fringe', hair: 'k1', beard: 'full', bt: 'k1b1', robe: 'y1', len: 'floor', sleeves: 'long', head: 'cloth', ht: 'y1', band: 'y1', feet: 'bare' }
});
Object.assign(PROPS2, {
  hs_pitcher(P, A, J, M, h, t, lw, F, u, n, add) { const q = M(add(A.t, u, 0.02)), s = h * 0.012; P.shape([[q[0] - 3 * s, q[1] - 5 * s], [q[0] - 4.5 * s, q[1] - 1 * s], [q[0] - 3.5 * s, q[1] + 4 * s], [q[0] + 3.5 * s, q[1] + 4 * s], [q[0] + 4.5 * s, q[1] - 1 * s], [q[0] + 3 * s, q[1] - 5 * s], [q[0] + 1.8 * s, q[1] - 7 * s], [q[0] - 1.8 * s, q[1] - 7 * s]], 'r5y6k1', lw * 0.7); P.line([[q[0] - 3.4 * s, q[1] - 2 * s], [q[0] + 3.4 * s, q[1] - 2 * s]], lw * 0.4); }
});
const hsBalance = (P, x, y, z) => { const b = P.I(x, y, z); P.line([[b[0], b[1]], [b[0], b[1] - 44]], 1.6); P.line([[b[0] - 26, b[1] - 40], [b[0] + 26, b[1] - 44]], 1.4); for (const [dx, dy] of [[-26, -40], [26, -44]]) { const c = [b[0] + dx, b[1] + dy + 18]; P.line([[b[0] + dx, b[1] + dy], [c[0] - 7, c[1]]], 0.5); P.line([[b[0] + dx, b[1] + dy], [c[0] + 7, c[1]]], 0.5); P.shape([[c[0] - 9, c[1]], [c[0] + 9, c[1]], [c[0] + 5, c[1] + 4], [c[0] - 5, c[1] + 4]], 'y6r3k2', 0.7); } };
const hsCave = (P, x, y, w, hh) => { const c = P.I(x, y, 0), pts = [[c[0] - w, c[1]]]; for (let i = 0; i <= 10; i++) { const a = Math.PI - Math.PI * i / 10; pts.push([c[0] + Math.cos(a) * w, c[1] - hh * 0.4 - Math.sin(a) * hh * 0.6]); } pts.push([c[0] + w, c[1]]); P.shape(pts, 'k8r2b1', 1.2); };
const hsWalls = (P, tn) => { P.box(0, 0, 0, 24, 330, 90, tn); P.box(24, 0, 0, 300, 24, 90, tn); for (let i = 0; i < 12; i++) { P.box(0, 6 + i * 27, 90, 24, 13, 13, tn, 0.7); P.box(30 + i * 25, 0, 90, 13, 24, 13, tn, 0.7); } };
const SHEET = { title: 'Hayé Sarah · La vie de Sarah', sub: 'Paracha de la semaine · Chabbat 7 novembre 2026 · Genèse 23, 1 à 25, 18' };
const SCENES = [
{
  title: 'Le champ de Makhpéla', book: 'Genèse', ch: 23, ref: 'Genesis 23:16', refFr: 'Genèse 23, 16', accent: 1, feast: null,
  quote: 'And when Abraham had heard this, he weighed out the money that Ephron had asked, in the hearing of the children of Heth, four hundred sicles of silver, of common current money.',
  fr: 'Quand Abraham eut entendu cela, il pesa l’argent qu’Éphron avait demandé, en présence des fils de Heth : quatre cents sicles d’argent, en monnaie ayant cours.',
  more: ['Sara meurt à Hébron, à cent vingt-sept ans, et Abraham la pleure. Étranger dans le pays, il n’y possède pas une tombe. À la porte de la ville, devant les fils de Heth, il demande la caverne double de Makhpéla. Éphron veut la donner ; Abraham tient à payer le prix entier, quatre cents sicles, pesés devant témoins.',
    'Pas de fête juive attachée à ce passage. C’est le premier achat de terre en Canaan rapporté par la Bible. Le caveau des Patriarches, à Hébron, est vénéré comme la tombe d’Abraham, Sara, Isaac, Rébecca, Jacob et Léa.'],
  back(P) {
    Lib.sun(P, 830, 150, 28); Lib.cloud(P, 230, 140, 160, 30, 'b1');
    Lib.platform(P, 'y4r2k1', 'y4r3k2');
    hsWalls(P, 'y3r2k1');
    Lib.city(P, 40, 40, 200, 200, 6, 'y3r2', 23);
    Lib.gate(P, 324, -10, 40, 90, 'y4r3k2');
    Lib.mound(P, 110, 430, 90, 110, 'y4r3k2');
    hsCave(P, 150, 470, 22, 50); hsCave(P, 90, 490, 16, 38);
    for (const [x, y] of [[230, 480], [290, 500], [40, 360]]) Lib.tree(P, x, y, 0, { h: 150, r: 38, can: 'y5b6k1' });
    P.box(270, 250, 0, 90, 50, 30, 'r4y5k2');
    for (let i = 0; i < 8; i++) { const c = P.I(282 + (i % 4) * 14, 262 + Math.floor(i / 4) * 18, 30); P.shape(P.disc(c[0], c[1], 5, 8).map(p => [p[0], c[1] + (p[1] - c[1]) * 0.5]), 'y1b1', 0.6); }
    hsBalance(P, 340, 270, 30);
    Lib.stones(P, 18, 'y3r2k3', [380, 300, 150, 200]);
  },
  chars: [
    ch(LK.abraham, { x: 250, y: 330, face: 1, clip: 'offer', h: 146 }),
    ch(LK.hs_ephron, { x: 390, y: 230, face: -1, clip: 'talk', h: 146 }),
    ch(LK.hs_hittite, { x: 420, y: 130, face: -1, clip: 'idle', h: 138 }),
    ch(LK.hs_hittite, { x: 470, y: 180, face: -1, clip: 'point', h: 136, t0: 1, look: Object.assign({}, LK.hs_hittite, { robe: 'b4y3k1', ht: 'y4r3k2' }) }),
    ch(LK.isrOld, { x: 450, y: 290, face: -1, clip: 'talk', h: 134, t0: 2, look: Object.assign({}, LK.hs_hittite, { old: 1, beard: 'long', bt: 'k2', hair: 'k2' }) }),
    ch(LK.hs_eliezer, { h: 136, speed: 18, hold: { n: 'bundle' }, path: [W(160, 280, 3), W(240, 380, 0), W(160, 280, 0)] }),
    { beast: 'camel', h: 112, x: 480, y: 440, face: -1 }
  ]
},
{
  title: 'La prière d’Éliézer', book: 'Genèse', ch: 24, ref: 'Genesis 24:12', refFr: 'Genèse 24, 12', accent: 2, feast: null,
  quote: 'O Lord, the God of my master, Abraham, meet me today, I beseech thee, and shew kindness to my master, Abraham.',
  fr: 'Seigneur, Dieu de mon maître Abraham, viens à ma rencontre aujourd’hui, je t’en prie, et montre ta bonté envers mon maître Abraham.',
  more: ['Abraham, âgé, charge son serviteur de trouver une épouse pour Isaac dans sa parenté, en Aram-Naharaïm. Le serviteur part avec dix chameaux chargés de biens et arrive le soir à la ville de Nahor, près du puits, à l’heure où les femmes sortent puiser. Il fait agenouiller les chameaux et prie : que la jeune fille qui offrira à boire à lui et à ses bêtes soit celle que Dieu a choisie.',
    'Pas de fête juive attachée à ce passage. Le texte ne nomme pas le serviteur ; la tradition l’identifie à Éliézer de Damas, mentionné en Genèse 15, 2. Sa mission, racontée puis redite par lui devant la famille de Rébecca, fait du chapitre 24 le plus long de la Genèse.'],
  back(P) {
    P.halo(820, 330, 260, ['r1y2', 'r2y3', 'r3y4', 'r4y6'], { sq: 0.7 }); Lib.sun(P, 820, 320, 36);
    Lib.platform(P, 'y4r3k1', 'y4r3k2');
    hsWalls(P, 'y3r3k1');
    Lib.city(P, 40, 40, 230, 220, 7, 'y3r3k1', 24);
    Lib.gate(P, 324, -10, 40, 90, 'y4r3k2');
    Lib.well(P, 300, 300, 34);
    Lib.palm(P, 380, 230, 0, 150, { lean: 12, dates: 1 }); Lib.palm(P, 470, 470, 0, 130, { lean: -10 });
    Lib.stones(P, 22, 'y3r2k3', [20, 280, 500, 240]);
  },
  chars: [
    ch(LK.hs_eliezer, { x: 330, y: 360, face: 1, clip: 'pray', h: 140 }),
    { beast: 'camel', h: 110, x: 190, y: 400, face: 1 },
    { beast: 'camel', h: 106, x: 120, y: 450, face: 1 },
    { beast: 'camel', h: 108, x: 450, y: 360, face: -1 },
    { beast: 'camel', h: 104, x: 470, y: 280, face: -1 },
    ch(LK.maid, { h: 124, over: 'carry', hold: { nTop: 'jarhead' }, speed: 16, path: [W(340, 30, 3), W(300, 240, 2), W(340, 30, 0)] }),
    ch(LK.isrW, { h: 122, over: 'carry', hold: { nTop: 'jarhead' }, speed: 16, t0: 7, path: [W(340, 30, 3), W(250, 260, 2), W(340, 30, 0)] })
  ]
},
{
  title: 'Rébecca abreuve les chameaux', book: 'Genèse', ch: 24, ref: 'Genesis 24:20', refFr: 'Genèse 24, 20', accent: 0, feast: null,
  quote: 'And pouring out the pitcher into the troughs, she ran back to the well to draw water; and having drawn, she gave to all the camels.',
  fr: 'Et versant sa cruche dans les abreuvoirs, elle courut de nouveau au puits pour puiser ; et ayant puisé, elle donna à boire à tous les chameaux.',
  more: ['Il n’a pas fini sa prière que Rébecca paraît, la cruche sur l’épaule : fille de Bethouël, petite-fille de Nahor, le frère d’Abraham. Elle descend à la source et remonte. Le serviteur court lui demander un peu d’eau ; elle lui donne à boire, puis puise pour les dix chameaux jusqu’à ce qu’ils aient fini. Il la regarde en silence, puis sort un anneau d’or et deux bracelets.',
    'Pas de fête juive attachée à ce passage. Rébecca est reconnue à sa générosité envers l’étranger et ses bêtes, prolongement de l’hospitalité d’Abraham. Dix chameaux assoiffés boivent chacun une grande quantité d’eau : l’effort est considérable.'],
  back(P) {
    Lib.sun(P, 790, 250, 30); Lib.cloud(P, 250, 150, 160, 30, 'r1y1');
    Lib.platform(P, 'y4r3k1', 'y4r3k2');
    hsWalls(P, 'y3r3k1');
    Lib.city(P, 40, 40, 180, 180, 5, 'y3r3k1', 25);
    Lib.well(P, 200, 290, 34);
    P.box(300, 250, 0, 150, 30, 22, 'y3r2k3'); P.fill([P.I(305, 255, 22.5), P.I(445, 255, 22.5), P.I(445, 275, 22.5), P.I(305, 275, 22.5)], 'b6y1', {});
    Lib.palm(P, 90, 440, 0, 150, { lean: -12, dates: 1 });
    Lib.stones(P, 20, 'y3r2k3', [240, 330, 280, 200]);
  },
  chars: [
    ch(LK.hs_rebecca, { h: 132, speed: 34, hold: { n: 'hs_pitcher' }, path: [W(245, 300, 1.6, 'fill', { f: -1 }), W(330, 300, 1.8, 'fill', { f: -1 }), W(245, 300, 0)] }),
    { beast: 'camel', h: 110, x: 330, y: 210, face: 1 },
    { beast: 'camel', h: 106, x: 400, y: 215, face: 1 },
    { beast: 'camel', h: 108, x: 470, y: 330, face: -1 },
    { beast: 'camel', h: 104, x: 460, y: 420, face: -1 },
    ch(LK.hs_eliezer, { x: 290, y: 440, face: -1, clip: 'lookup', h: 138 }),
    ch(LK.son2, { x: 200, y: 460, face: 1, clip: 'rest', h: 130 })
  ]
},
{
  title: '« J’irai »', book: 'Genèse', ch: 24, ref: 'Genesis 24:58', refFr: 'Genèse 24, 58', accent: 1, feast: null,
  quote: 'And they called her, and when she was come, they asked:  Wilt thou go with this man?  She said:  I will go.',
  fr: 'Ils l’appelèrent, et quand elle fut venue, ils lui demandèrent : Veux-tu aller avec cet homme ? Elle dit : J’irai.',
  more: ['Laban, frère de Rébecca, accourt au puits et fait entrer le serviteur. Celui-ci refuse de manger avant d’avoir raconté sa mission. Laban et Bethouël répondent : « La chose vient du Seigneur. » Le serviteur donne des bijoux d’or et d’argent et des vêtements. Au matin, la famille veut la retenir dix jours ; on appelle Rébecca, et elle répond d’un seul mot.',
    'Pas de fête juive attachée à ce passage. On en tire que l’on ne marie pas une femme sans son consentement (Rachi sur le verset précédent). La bénédiction de sa famille, « Notre sœur, deviens des milliers de myriades », est reprise sous le voile au mariage juif (badeken).'],
  back(P) {
    Lib.moon(P, 820, 170, 20); Lib.cloud(P, 250, 150, 150, 30, 'b1');
    Lib.platform(P, 'y4r2k1', 'y4r3k2');
    Lib.walls(P, 'y3r2k1');
    P.box(40, 40, 0, 160, 140, 110, 'y3r3k1'); P.shape([P.I(90, 180, 0), P.I(130, 180, 0), P.I(130, 180, 60), P.I(90, 180, 60)], 'k7r2', 0.9);
    P.box(250, 220, 0, 120, 60, 28, 'r4y5k2'); for (let i = 0; i < 4; i++) { const c = P.I(262 + i * 26, 245, 28); P.shape(P.disc(c[0], c[1] - 3, 6, 10), ['y7r4', 'y2', 'y9r1', 'r8b3'][i], 0.6); }
    for (let i = 0; i < 3; i++) { const c = P.I(300 + i * 18, 265, 28); P.shape(P.disc(c[0], c[1] - 4, 4, 10), 'y9r2', 0.6); P.fill(P.disc(c[0], c[1] - 4, 2, 8), 'y1', { noKnock: true }); }
    Lib.lamp(P, 220, 200, 0, 1.1);
    Lib.jar(P, 60, 250, 0, 1.3); Lib.jar(P, 70, 290, 0, 1.1);
    Lib.stones(P, 12, 'y3r2k3', [400, 380, 120, 140]);
  },
  chars: [
    ch(LK.hs_rebecca, { x: 300, y: 350, face: 1, clip: 'bow', h: 132 }),
    ch(LK.hs_laban, { x: 390, y: 230, face: -1, clip: 'talk', h: 142 }),
    ch(LK.isrOld, { x: 430, y: 300, face: -1, clip: 'idle', h: 138, look: Object.assign({}, LK.isrOld, { robe: 'b4y2k1', cloak: 'y5r3k2' }) }),
    ch(LK.isrW2, { x: 200, y: 340, face: 1, clip: 'bless', h: 128 }),
    ch(LK.hs_nurse, { x: 230, y: 420, face: 1, clip: 'idle', h: 122 }),
    ch(LK.hs_eliezer, { x: 360, y: 430, face: -1, clip: 'offer', h: 138, hold: { n: 'cup' } }),
    { beast: 'camel', h: 110, x: 480, y: 470, face: -1 }
  ]
},
{
  title: 'Rébecca voit Isaac', book: 'Genèse', ch: 24, ref: 'Genesis 24:64', refFr: 'Genèse 24, 64', accent: 2, feast: null,
  quote: 'Rebecca also, when she saw Isaac, lighted off the camel,',
  fr: 'Rébecca aussi, quand elle vit Isaac, descendit du chameau,',
  more: ['Rébecca part avec sa nourrice et ses servantes, montées sur les chameaux. Isaac revient du puits de Lahaï-Roï ; vers le soir, il sort méditer dans les champs. Il lève les yeux et voit venir des chameaux. Rébecca le voit aussi, descend de sa monture et demande qui est cet homme. « C’est mon maître », répond le serviteur ; elle prend son voile et se couvre.',
    'Pas de fête juive attachée à ce passage. Le mot rendu par « méditer » (lassouah) est compris par le Talmud (Berakhot 26b) comme une prière : Isaac aurait institué la prière de l’après-midi, Min’ha.'],
  back(P) {
    P.halo(180, 330, 240, ['r1y2', 'r2y3', 'r3y5', 'r4y6'], { sq: 0.7 }); Lib.sun(P, 180, 320, 34);
    Lib.platform(P, 'y5r2', 'y5r3k1');
    Lib.field(P, 30, 330, 240, 180, 7, 'y7r2');
    Lib.well(P, 440, 100, 28);
    Lib.tree(P, 90, 90, 0, { h: 180, r: 50, can: 'y5b6k1' }); Lib.palm(P, 500, 250, 0, 140, { lean: 10 });
    Lib.mound(P, 300, 40, 70, 60, 'y4r3k1');
    Lib.stones(P, 18, 'y3r2k3', [300, 150, 220, 360]);
  },
  chars: [
    ch(LK.hs_isaac, { h: 142, speed: 14, path: [W(150, 300, 4, 'pray'), W(220, 380, 3, 'lookup', { f: 1 }), W(150, 300, 0)] }),
    ch(LK.hs_rebeccaVeil, { h: 132, speed: 16, path: [W(420, 300, 2.5, 'idle'), W(360, 340, 4, 'bow', { f: -1 }), W(420, 300, 0)] }),
    { beast: 'camel', h: 112, x: 470, y: 330, face: -1 },
    { beast: 'camel', h: 108, speed: 12, path: [W(500, 440, 3), W(430, 460, 2), W(500, 440, 0)] },
    ch(LK.hs_eliezer, { x: 380, y: 420, face: -1, clip: 'point', h: 138 }),
    ch(LK.hs_nurse, { x: 490, y: 380, face: -1, clip: 'idle', h: 120 }),
    ch(LK.maid, { x: 460, y: 520, face: -1, clip: 'idle', h: 122 })
  ]
},
{
  title: 'Isaac et Ismaël ensevelissent Abraham', book: 'Genèse', ch: 25, ref: 'Genesis 25:9', refFr: 'Genèse 25, 9', accent: 3, feast: null,
  quote: 'And Isaac and Ismael his sons buried him in the double cave, which was situated in the field of Ephron the son of Seor the Hethite, over against Mambre,',
  fr: 'Et Isaac et Ismaël, ses fils, l’ensevelirent dans la caverne double, située dans le champ d’Éphron, fils de Tsohar le Héthéen, en face de Mambré,',
  more: ['Abraham prend encore pour femme Ketoura, qui lui donne six fils ; il laisse tous ses biens à Isaac et renvoie les autres vers l’orient avec des présents. Il meurt à cent soixante-quinze ans, « rassasié de jours ». Ses deux fils, Isaac et Ismaël, se retrouvent pour l’ensevelir auprès de Sara, dans la caverne qu’il avait achetée.',
    'Pas de fête juive attachée à ce passage. Le texte nomme Isaac avant Ismaël, l’aîné ; Rachi en conclut qu’Ismaël avait fait techouva et laissait le pas à son frère. La paracha s’achève sur la descendance d’Ismaël, douze princes.'],
  back(P) {
    Lib.cloud(P, 280, 130, 190, 34, 'b2k1'); Lib.cloud(P, 780, 160, 140, 28, 'b2k1');
    Lib.platform(P, 'y4r2k1', 'y4r3k2');
    Lib.mound(P, 150, 150, 120, 150, 'y4r3k2');
    hsCave(P, 210, 220, 30, 64); hsCave(P, 140, 240, 20, 44);
    Lib.rock(P, 280, 230, 0, 28, 30, 'y3r2k3');
    for (const [x, y] of [[420, 90], [480, 180], [60, 380]]) Lib.tree(P, x, y, 0, { h: 180, r: 46, can: 'y5b6k1' });
    P.box(220, 300, 0, 90, 34, 18, 'r4y5k3');
    Lib.stones(P, 20, 'y3r2k3', [300, 280, 220, 240]);
  },
  chars: [
    ch(LK.abraham, { x: 250, y: 310, z: 30, face: 1, clip: 'lie', h: 140, noShadow: 1, look: LK.hs_shroud }),
    ch(LK.hs_isaac, { x: 250, y: 390, face: -1, clip: 'bow', h: 142 }),
    ch(LK.hs_ishmael, { x: 330, y: 330, face: -1, clip: 'bow', h: 144 }),
    ch(LK.hs_rebecca, { x: 180, y: 440, face: 1, clip: 'pray', h: 128, look: LK.hs_rebeccaVeil }),
    ch(LK.son1, { x: 390, y: 420, face: -1, clip: 'idle', h: 132 }),
    ch(LK.son2, { x: 440, y: 360, face: -1, clip: 'sulk', h: 130 }),
    { beast: 'camel', h: 108, x: 490, y: 480, face: -1 }
  ]
}
];
