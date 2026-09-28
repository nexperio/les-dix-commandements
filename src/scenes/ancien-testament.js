/* ============================================================
   LES SCÈNES (ordre du livre, Genèse → Esther)
   ============================================================ */
const LK = {
  adam: { skin: 'y6r5k1', hs: 'curly', hair: 'k7r2', beard: 'short', robe: 'y6b6', skirt: 1, len: 'thigh', leafy: 1, sleeves: 'none', feet: 'bare' },
  eve: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'r6y5k3', robe: 'y5b6', len: 'thigh', leafy: 1, sleeves: 'none', feet: 'bare', collar: false },
  noah: { old: 1, skin: 'y5r4', hs: 'fringe', hair: 'k1', beard: 'full', bt: 'k1b1', robe: 'r4y6k2', cloak: 'b5k1', sash: 'r6y3', head: 'cloth', ht: 'y2k1', band: 'r6k3' },
  noahWife: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k3', robe: 'b4y3', len: 'floor', head: 'veil', ht: 'r4y3', sash: 'r5' },
  abraham: { old: 1, skin: 'y5r4k1', hs: 'fringe', hair: 'k2', beard: 'full', bt: 'k2b1', robe: 'y2k1', cloak: 'r5b3k1', sash: 'b5', head: 'cloth', ht: 'y2r1', band: 'k6' },
  isaac: { skin: 'y5r4', hs: 'curly', hair: 'k7r2', robe: 'y2', len: 'knee', sleeves: 'short', sash: 'r5', feet: 'bare' },
  angel: { skin: 'y4r3', hs: 'curly', hair: 'y7r2', robe: 'y1b1', len: 'floor', sleeves: 'long', wide: 1, wings: 'y2b1', halo: 1, sash: 'y7', feet: 'bare' },
  jacob: { skin: 'y5r4', hs: 'short', hair: 'k7', beard: 'short', robe: 'r5y5k2', cloak: 'b4k2', sash: 'y6r2', head: 'cloth', ht: 'y3r2', band: 'k5' },
  joseph: { skin: 'y5r4', hs: 'short', hair: 'k6r2', robe: 'y2', len: 'knee', sleeves: 'short', sash: 'y6', feet: 'bare' },
  bro1: { skin: 'y6r5k1', hs: 'curly', hair: 'k8', beard: 'short', robe: 'r4y5k2', len: 'knee', sleeves: 'short', sash: 'b5', head: 'cloth', ht: 'b3y2', band: 'k6' },
  bro2: { skin: 'y5r4k1', hs: 'short', hair: 'k7r2', beard: 'long', robe: 'b5y2k1', len: 'knee', sleeves: 'short', sash: 'r6', head: 'cloth', ht: 'y3r1', band: 'k6' },
  bro3: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'short', robe: 'y6b4k1', len: 'ankle', sash: 'r5y4', cloak: 'r6b2k1', head: 'cloth', ht: 'y2', band: 'r5k4' },
  ismaelite: { skin: 'y6r5k2', hs: 'short', hair: 'k8', beard: 'long', robe: 'b6r2', cloak: 'y6r4', head: 'turban', ht: 'y2r1', sash: 'r7y3' },
  moses: { skin: 'y5r4k1', hs: 'short', hair: 'k6', beard: 'long', bt: 'k6', robe: 'r5y6k2', cloak: 'b5k1', sash: 'r6y3', head: 'cloth', ht: 'y2r1', band: 'k6' },
  mosesOld: { old: 1, skin: 'y5r4k1', hs: 'fringe', hair: 'k1', beard: 'full', bt: 'k1b1', robe: 'r5y6k2', cloak: 'b5k2', sash: 'r6y3', rays: 1, head: null },
  isrM: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'short', robe: 'b4y3', sash: 'r5y3', head: 'cloth', ht: 'y2k1', band: 'k6' },
  isrM2: { skin: 'y5r4k1', hs: 'short', hair: 'k7r2', beard: 'long', robe: 'r4y5k1', cloak: 'y4b3', sash: 'b6', head: 'cloth', ht: 'r3y2', band: 'k6' },
  isrOld: { old: 1, skin: 'y5r4', hs: 'fringe', hair: 'k2', beard: 'long', bt: 'k2', robe: 'y3r2k1', cloak: 'b3k2', head: 'cloth', ht: 'y2', band: 'k5' },
  isrW: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k7', robe: 'r6y2', len: 'floor', head: 'veil', ht: 'b4y2', sash: 'y6' },
  isrW2: { fem: 1, skin: 'y5r4k1', hs: 'long', hair: 'k6r2', robe: 'y5b5', len: 'floor', head: 'veil', ht: 'r5y4', sash: 'r6' },
  child: { child: 1, skin: 'y5r4', hs: 'curly', hair: 'k7', robe: 'y3r3', len: 'knee', sleeves: 'short', sash: 'b5', feet: 'bare' },
  childG: { child: 1, fem: 1, skin: 'y5r4', hs: 'long', hair: 'r5k4', robe: 'b4r2', len: 'ankle', sleeves: 'short', sash: 'y6' },
  priest: { skin: 'y5r4', hs: 'short', hair: 'k7', beard: 'long', robe: 'y1k1', trim: 1, sash: 'b6r5', head: 'turban', ht: 'y1b1', sleeves: 'long' },
  soldier: { skin: 'y6r4k1', hs: 'short', hair: 'k7', beard: 'short', robe: 'r5y3k1', len: 'knee', sleeves: 'short', sash: 'k6', head: 'helmet', ht: 'y5r3k3', feet: 'boot', greaves: 'y5r3k3' },
  ruth: { fem: 1, skin: 'y6r4k1', hs: 'long', hair: 'k8', robe: 'b5r2', len: 'ankle', head: 'veil', ht: 'r6y3', sash: 'y7r1', sleeves: 'long' },
  boaz: { skin: 'y5r4k1', hs: 'short', hair: 'k5', beard: 'long', bt: 'k4', robe: 'r6y4k1', cloak: 'b6k1', sash: 'y7', head: 'turban', ht: 'y2', trim: 1 },
  reaper: { skin: 'y6r5k1', hs: 'curly', hair: 'k8', beard: 'short', robe: 'y3r2k1', len: 'knee', sleeves: 'short', sash: 'r5', head: 'cap', ht: 'y2' },
  david: { skin: 'y5r5', hs: 'curly', hair: 'r6y4k2', robe: 'r3y4', len: 'knee', sleeves: 'short', sash: 'b5', feet: 'sandal' },
  goliath: { skin: 'y6r5k2', hs: 'curly', hair: 'k8', beard: 'full', bt: 'k8', robe: 'r6y2k1', len: 'knee', armor: 'y6r4k3', head: 'helmet', ht: 'y6r4k3', greaves: 'y6r4k3', feet: 'boot', sleeves: 'short' },
  elijah: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'full', bt: 'k7', robe: 'r3y3k3', cloak: 'r5y4k4', sash: 'k7', feet: 'bare' },
  baal: { skin: 'y6r5k1', hs: 'short', hair: 'k8', beard: 'short', robe: 'r7y4', len: 'knee', sleeves: 'none', sash: 'y8', head: 'tall', ht: 'r5y6', feet: 'bare' },
  esther: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k8', robe: 'r6b5', len: 'floor', trim: 1, sleeves: 'long', wide: 1, head: 'veil', ht: 'y2r1', crown: 1, sash: 'y8r2' },
  king: { skin: 'y5r5', hs: 'curly', hair: 'k8', beard: 'long', robe: 'r8y3', len: 'ankle', trim: 1, cloak: 'b6r4', head: 'tall', ht: 'y8r3', sash: 'y7', sleeves: 'long', wide: 1 },
  guard: { skin: 'y6r5k1', hs: 'curly', hair: 'k8', beard: 'short', robe: 'b5y2', len: 'knee', sash: 'r6', head: 'cap', ht: 'r5y5', feet: 'boot', sleeves: 'short' },
  maid: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k7r2', robe: 'y4r1', len: 'floor', head: 'veil', ht: 'b3', sleeves: 'long', sash: 'b5' }
};
const PX = 240, PY = 190;
const ch = (look, o) => Object.assign({ look }, o);
const W = (x, y, w, c, extra) => Object.assign({ x, y, w, c }, extra || {});
const nightSky = (P, tn, n = 70) => { P.shape(P.disc(500, 470, 450, 64), tn, 0); for (let i = 0; i < n; i++) { const a = P.r() * TAU, r = Math.sqrt(P.r()) * 430, x = 500 + Math.cos(a) * r, y = 470 + Math.sin(a) * r; if (y > 380 && Math.abs(x - 500) < 470 - (y - 380) * 0.9) continue; Lib.star(P, x, y, 2 + P.r() * 4, P.r() > 0.7 ? 'y8' : 'y5'); } };
const stoneStack = (P, x, y, w, d, h, tn) => { const rows = Math.round(h / 16); for (let r = 0; r < rows; r++) { const n = Math.max(2, Math.round(w / 30)); for (let i = 0; i < n; i++) { const sw = w / n; P.box(x + i * sw + (r % 2) * 3, y, r * 16, sw - 2, d, 15, P.r() > .5 ? tn : tadd(tn, 'k1')); } } };
const fenceRing = (P, cx, cy, r, a0, a1, n) => { let prev = null; for (let i = 0; i <= n; i++) { const a = lerp(a0, a1, i / n), x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r; P.box(x - 3, y - 3, 0, 6, 6, 30, 'r4y5k3', 0.7); const t = P.I(x, y, 26); if (prev) P.line([prev, t], 0.8); prev = t; } };

const AT = [
/* 1 · LE JARDIN D'ÉDEN */
{
  title: 'Le jardin d’Éden', book: 'Genèse', ch: 3, ref: 'Genesis 3:6', refFr: 'Genèse 3, 6', fr: 'La femme vit donc que l’arbre était bon à manger, beau aux yeux et agréable à regarder : elle prit de son fruit, en mangea, et en donna à son mari, qui en mangea.', accent: 2, feast: 'Rosh Hashana',
  quote: 'And the woman saw that the tree was good to eat, and fair to the eyes, and delightful to behold:  and she took of the fruit thereof, and did eat, and gave to her husband, who did eat.',
  more: ['Le jardin planté « à l’orient », ses quatre fleuves, et au milieu l’arbre de la connaissance du bien et du mal. Le serpent parle, la femme regarde, cueille, partage. Le texte est d’une sobriété clinique : trois verbes, et le monde bascule.',
    'Correspondance : <b>Rosh Hashana</b>. Pour la tradition rabbinique (Lévitique Rabba 29, 1), l’homme fut créé le 1er Tichri, jour de Rosh Hashana. Le même jour il faute, est jugé, puis gracié : d’où le sens du Nouvel An juif, jour du jugement où l’on espère la même clémence.'],
  back(P) {
    Lib.sun(P, 190, 150, 34);
    Lib.cloud(P, 770, 150, 170, 40, 'b1');
    Lib.platform(P, 'y4b3', 'r3y5k1', { strata: [[0, .3, 'y5b4k1'], [.3, .65, 'r3y5k2'], [.65, 1, 'r4y4k3']] });
    const riv = [[330, 0], [360, 90], [300, 200], [360, 330], [430, 430], [540, 470], [540, 520], [420, 480], [330, 370], [260, 220], [320, 90], [300, 0]];
    P.shape(riv.map(p => P.I(p[0], p[1], 0.5)), 'b5y1', 1.1);
    Lib.waves(P, [300, 100, 80, 300], 8, 1, 2);
    P.shape([P.I(540, 470, 0), P.I(540, 520, 0), P.I(540, 520, -60), P.I(540, 470, -60)], 'b6', 1);
    for (let i = 0; i < 4; i++) P.line([P.I(540, 478 + i * 11, -2), P.I(540, 480 + i * 11, -58)], 0.7, { ink: 3, lvl: 3 });
    Lib.grass(P, 80);
    for (let i = 0; i < 46; i++) { const x = 20 + P.r() * 500, y = 20 + P.r() * 500; const c = P.I(x, y, 0); P.fill(P.disc(c[0], c[1] - 3, 2.6, 7), i % 3 ? 'r8y2' : 'y8', {}); }
    Lib.tree(P, 60, 120, 0, { h: 170, r: 40, can: 'y5b6', fruit: 6, fruitTone: 'y9r1' });
    Lib.palm(P, 80, 450, 0, 180, { lean: -20, dates: 1 });
    Lib.bush(P, 470, 120, 0, 24); Lib.bush(P, 140, 300, 0, 20, 'y6b4');
    Lib.tree(P, 230, 200, 0, { h: 270, r: 78, blobs: 9, can: 'y6b5', fruit: 18, fruitTone: 'r9y4', trunk: 'r5y5k4' });
  },
  front(P) { Lib.bush(P, 420, 525, 0, 22, 'y6b5k1'); },
  chars: [
    { draw(P, t) { const b = P.I(230, 200, 0), pts = []; for (let i = 0; i <= 26; i++) { const u = i / 26, a = u * 10 + t * 0.4; pts.push([b[0] + Math.sin(a) * (10 + u * 4) + u * u * 34 + Math.sin(t * 1.3) * u * u * 6, b[1] - 12 - u * 150 + Math.cos(a) * 3]); } drawSnake(P, pts, 4.4, 'y7b4k1'); }, depth: 431 },
    ch(LK.eve, { x: 290, y: 240, face: -1, clip: 'reach', hold: { n: 'fruit' }, h: 136 }),
    ch(LK.adam, { h: 146, path: [W(380, 330, 3), W(330, 400, 0), W(200, 380, 2, 'point'), W(180, 280, 0), W(345, 290, 5, 'offer', { f: -1 })] }),
    { beast: 'lion', h: 105, path: [W(60, 330, 6, 'idle'), W(120, 250, 0), W(60, 330, 0)], speed: 14 },
    { beast: 'deer', h: 100, path: [W(430, 190, 4), W(480, 330, 0), W(430, 190, 0)], speed: 20 },
    { beast: 'sheep', h: 78, x: 160, y: 470, face: 1 },
    { draw(P, t) { for (let i = 0; i < 3; i++) { const a = t * 0.5 + i * 2.1; Lib.bird(P, 560 + Math.cos(a) * 160, 190 + Math.sin(a * 1.3) * 40, 1.1, t * 2 + i, 'b3k2'); } }, depth: 2000 }
  ]
},
/* 2 · L'ARCHE DE NOÉ */
{
  title: 'La colombe et le rameau', book: 'Genèse', ch: 8, ref: 'Genesis 8:11', refFr: 'Genèse 8, 11', fr: 'Et elle revint vers lui le soir, portant dans son bec un rameau d’olivier aux feuilles vertes. Noé comprit donc que les eaux avaient cessé sur la terre.', accent: 2, feast: null,
  quote: 'And she came to him in the evening carrying a bough of an olive tree, with green leaves, in her mouth.  Noe therefore understood that the waters were ceased upon the earth.',
  more: ['Après quarante jours de pluie et des mois de dérive, l’arche s’est posée sur les monts d’Ararat. Noé lâche un corbeau, puis une colombe. Au second essai, elle revient le soir avec une feuille d’olivier : la terre respire de nouveau. Juste après viendra l’arc dans la nuée, signe d’alliance.',
    'Pas de fête juive attachée à ce récit. La paracha Noa’h se lit à l’automne, peu après les fêtes de Tichri, et la tradition prévoit une bénédiction spéciale quand on aperçoit un arc-en-ciel.'],
  back(P) {
    Lib.rainbow(P, 520, 400, 370, 13);
    Lib.cloud(P, 170, 130, 210, 46, 'b2k1'); Lib.cloud(P, 840, 110, 150, 34, 'b2k1');
    Lib.platform(P, 'b4y1', 'b5', { h: 84, pebbles: false, strata: [[0, .3, 'b5'], [.3, .65, 'b6k1'], [.65, 1, 'b7k2']] });
    for (let i = 0; i < 9; i++) { const side = i % 2, u = 60 + P.r() * 440, z = -20 - P.r() * 55, c = side ? P.I(540, u, z) : P.I(u, 540, z); drawFish(P, c[0], c[1], 10 + P.r() * 8, P.r() > .5 ? 1 : -1, P.r() > .5 ? 'y6r2' : 'y4b2'); }
    Lib.mound(P, 40, 470, 60, 120, 'y3r3k2'); const pk = P.I(40, 470, 120); P.shape([[pk[0], pk[1]], [pk[0] + 22, pk[1] + 22], [pk[0] + 8, pk[1] + 18], [pk[0] - 4, pk[1] + 26], [pk[0] - 20, pk[1] + 20]], 'b1', 0.9);
    Lib.waves(P, [0, 0, 540, 540], 46, 1, 2);
    // la coque : une caisse, comme dans le texte
    P.box(130, 150, -10, 300, 150, 75, { t: 'r4y6k1', l: 'r4y5k3', r: 'r5y5k4' });
    for (let z = 5; z < 60; z += 11) P.line([P.I(130, 300, z), P.I(430, 300, z)], 0.7);
    for (let z = 5; z < 60; z += 11) P.line([P.I(430, 150, z), P.I(430, 300, z)], 0.7);
    P.fill([P.I(130, 300, -10), P.I(430, 300, -10), P.I(430, 300, 4), P.I(130, 300, 4)], 'k6r2', { noKnock: true });
    Lib.waves(P, [130, 300, 300, 20], 10, 1, 2);
    P.box(170, 175, 65, 215, 100, 58, 'r3y5k1');
    for (let i = 0; i < 4; i++) P.shape([P.I(190 + i * 50, 275, 85), P.I(215 + i * 50, 275, 85), P.I(215 + i * 50, 275, 108), P.I(190 + i * 50, 275, 108)], 'k6b2', 0.8);
    P.shape([P.I(385, 200, 65), P.I(385, 245, 65), P.I(385, 245, 110), P.I(385, 200, 110)], 'k7r1', 0.9);
    P.shape([P.I(160, 165, 123), P.I(395, 165, 123), P.I(395, 225, 160), P.I(160, 225, 160)], 'r5y4k2', 1);
    P.shape([P.I(160, 285, 123), P.I(395, 285, 123), P.I(395, 225, 160), P.I(160, 225, 160)], 'r5y4k3', 1);
    P.shape([P.I(395, 165, 123), P.I(395, 285, 123), P.I(395, 225, 160)], 'r4y5k2', 1);
    for (let i = 1; i < 8; i++) P.line([P.I(160 + i * 30, 285, 123), P.I(160 + i * 30, 225, 160)], 0.5);
    P.box(390, 290, -6, 60, 18, 8, 'r4y5k3'); // passerelle
  },
  chars: [
    ch(LK.noah, { x: 150, y: 245, z: 65, face: -1, clip: 'offer', h: 140, noShadow: 0 }),
    ch(LK.noahWife, { x: 410, y: 270, z: 65, face: 1, clip: 'idle', h: 128 }),
    { beast: 'giraffe', h: 100, x: 405, y: 190, z: 65, face: 1 },
    { draw(P, t) { const u = (t % 9) / 9, A = [60, 260], Bp = P.I(150, 245, 65), B = [Bp[0] - 58, Bp[1] - 118]; let x, y, ph = t * 3; if (u < .4) { const k = u / .4; x = lerp(A[0], B[0], k); y = lerp(A[1], B[1], k) - Math.sin(k * Math.PI) * 40; } else if (u < .6) { x = B[0]; y = B[1] + Math.sin(t * 6) * 2; ph = t * 7; } else { const k = (u - .6) / .4; x = lerp(B[0], 140, k); y = lerp(B[1], 60, k) - Math.sin(k * Math.PI) * 30; } P.ctx.save(); Lib.bird(P, x, y, 1.5, ph, 'b1'); P.shape([[x + 15, y - 3], [x + 24, y - 7], [x + 20, y - 1]], 'y6b6', 0.5); P.ctx.restore(); }, depth: 2000 },
    { draw(P, t) { const a = t * 0.35; Lib.bird(P, 800 + Math.cos(a) * 110, 230 + Math.sin(a) * 30, 1.3, t * 2.4, 'k8'); }, depth: 2001 },
    { draw(P, t) { const u = (t % 5) / 5; if (u < .35) { const k = u / .35, b = P.I(470, 420, 0); drawFish(P, b[0] + k * 40, b[1] - Math.sin(k * Math.PI) * 30, 12, 1, 'y6r3'); } }, depth: 900 }
  ]
},
/* 3 · LA LIGATURE D'ISAAC */
{
  title: 'Le bélier dans le buisson', book: 'Genèse', ch: 22, ref: 'Genesis 22:13', refFr: 'Genèse 22, 13', fr: 'Abraham leva les yeux et vit derrière lui un bélier pris par les cornes dans les ronces ; il le prit et l’offrit en holocauste à la place de son fils.', accent: 1, feast: 'Rosh Hashana',
  quote: 'Abraham lifted up his eyes, and saw behind his back a ram, amongst the briers, sticking fast by the horns, which he took and offered for a holocaust instead of his son.',
  more: ['Sur une montagne du pays de Moriah, Abraham a lié Isaac sur le bois de l’autel. Le couteau est levé quand l’ange l’appelle deux fois par son nom. Derrière lui, un bélier est pris par les cornes dans un buisson : c’est lui qui sera offert. Les serviteurs et l’âne attendent au pied du mont.',
    'Correspondance : <b>Rosh Hashana</b>. Ce chapitre, la Akéda, est lu le deuxième jour de la fête. Le shofar est une corne de bélier : selon le Talmud (Rosh Hashana 16a), on en sonne pour que soit rappelé le mérite de la ligature d’Isaac.'],
  back(P) {
    Lib.sun(P, 810, 150, 28);
    Lib.cloud(P, 250, 170, 150, 30, 'b1');
    Lib.platform(P, 'y4r3k1', 'y4r3k2', { strata: [[0, .35, 'y4r3k2'], [.35, .7, 'y3r4k3'], [.7, 1, 'r4y3k4']] });
    Lib.mound(P, 100, 90, 85, 110, 'y4r3k2');
    Lib.stones(P, 30, 'y3r2k3', [20, 20, 500, 500]);
    Lib.rock(P, 470, 120, 0, 30, 20, 'y4r3k2'); Lib.rock(P, 60, 300, 0, 26, 18, 'y4r3k3');
    stoneStack(P, 200, 205, 100, 70, 48, 'y3r2k3');
    for (let i = 0; i < 6; i++) P.box(205, 208 + i * 11, 48, 92, 9, 7, 'r5y5k3', 0.7);
    // feu porté par Abraham
    const pot = P.I(330, 190, 0); Lib.jar(P, 330, 190, 0, 1.1, 'k5r3'); Lib.flame(P, pot[0], pot[1] - 26, 14, 26, 0);
    Lib.bush(P, 450, 385, 0, 42, 'y4b5k2');
    for (let i = 0; i < 12; i++) { const c = P.I(430 + P.r() * 50, 370 + P.r() * 40, 20 + P.r() * 30); P.line([[c[0] - 8, c[1]], [c[0] + 8, c[1] - 5]], 0.8); }
    Lib.palm(P, 40, 470, 0, 150, { lean: 14 });
  },
  front(P) { const b = P.I(468, 408, 0); for (let i = 0; i < 11; i++) { const x = b[0] - 34 + i * 7; P.line([[x, b[1] + 2], [x + (P.r() - .5) * 14, b[1] - 20 - P.r() * 16], [x + (P.r() - .5) * 20, b[1] - 34 - P.r() * 10]], 0.9); } for (let i = 0; i < 9; i++) P.fill(Lib.bumpy(P, b[0] - 30 + P.r() * 60, b[1] - 14 - P.r() * 18, 7, 5, 4), 'y4b5k2', {}); },
  chars: [
    ch(LK.isaac, { x: 250, y: 238, z: 55, face: -1, clip: 'bound', h: 124, noShadow: 1 }),
    ch(LK.abraham, { x: 175, y: 262, face: 1, clip: 'knife', hold: { n: 'knife' }, h: 150 }),
    ch(LK.angel, { x: 420, y: 190, z: 150, face: -1, clip: 'hover', h: 138, noShadow: 1 }),
    { beast: 'ram', h: 88, x: 455, y: 395, face: -1 },
    { beast: 'donkey', h: 96, x: 90, y: 400, face: 1 },
    ch(LK.bro2, { x: 150, y: 460, face: -1, clip: 'rest', h: 132 }),
    ch(LK.bro1, { h: 134, path: [W(60, 470, 5, 'idle'), W(120, 500, 3, 'talk'), W(60, 470, 0)], speed: 16 })
  ]
},
/* 4 · L'ÉCHELLE DE JACOB */
{
  title: 'L’échelle de Jacob', book: 'Genèse', ch: 28, ref: 'Genesis 28:12', refFr: 'Genèse 28, 12', fr: 'Et il vit en songe une échelle dressée sur la terre, dont le sommet touchait le ciel : et les anges de Dieu y montaient et y descendaient.', accent: 0, feast: null,
  quote: 'And he saw in his sleep a ladder standing upon the earth, and the top thereof touching heaven:  the angels also of God ascending and descending by it.',
  more: ['Jacob fuit la colère d’Ésaü. La nuit le surprend en chemin ; il prend une pierre pour oreiller. En songe, une échelle relie la terre au ciel, parcourue par des anges qui montent et descendent. Au réveil il nomme le lieu Béthel, « maison de Dieu », et dresse la pierre en stèle.',
    'Pas de fête juive attachée à ce récit (paracha Vayétsé, lue en hiver). Les commentateurs lisent dans l’ordre des verbes, monter puis descendre, les anges gardiens de Jacob qui se relaient à la frontière du pays.'],
  back(P) {
    nightSky(P, 'b7k4', 90);
    P.halo(440, 140, 118, ['y1b1', 'y2', 'y3', 'y4', 'y5r1', 'y7r1'], { knock: true });
    Lib.moon(P, 170, 170, 26);
    Lib.cloud(P, 420, 170, 240, 46, 'y2b1', { noShade: 1 }); Lib.cloud(P, 520, 140, 190, 38, 'y1', { noShade: 1 });
    Lib.platform(P, 'y3r2b3k1', 'y3r3b2k2', { strata: [[0, .4, 'y3r3b2k2'], [.4, 1, 'y3r3b3k3']] });
    Lib.stones(P, 40, 'y2r2b3k2', [20, 20, 500, 500]);
    Lib.rock(P, 440, 110, 0, 34, 22, 'y3r2b3k2'); Lib.rock(P, 90, 110, 0, 24, 18, 'y3r2b3k3');
    Lib.rock(P, 190, 350, 0, 16, 10, 'y3r2b2k3');
    // l'échelle
    const b0 = [300, 240, 0], b1 = [175, 240, 520], rails = [0, 36];
    for (const dy of rails) { const a = P.I(b0[0], b0[1] + dy, b0[2]), c = P.I(b1[0], b1[1] + dy, b1[2]); P.line([a, c], 4.5, { taper: 0.25, ink: 3 }); P.line([[a[0] + 1.5, a[1]], [c[0] + 1.5, c[1]]], 2.2, { ink: 0, taper: 0.2 }); }
    for (let i = 1; i < 19; i++) { const u = i / 19, x = lerp(b0[0], b1[0], u), z = lerp(b0[2], b1[2], u); P.line([P.I(x, b0[1], z), P.I(x, b0[1] + 36, z)], 2.2, { taper: 0.2 }); }
    Lib.cloud(P, 360, 120, 200, 38, 'y1b1', { noShade: 1 });
  },
  chars: [
    { draw(P) { const b = P.I(230, 360, 0); P.shape(smooth(Lib.bumpy(P, b[0] - 70, b[1] - 3, 18, 10, 6), 1), 'y3r2b2k2', 1); P.line([[b[0] - 20, b[1] + 22], [b[0] + 90, b[1] - 8]], 2.4); const q = [b[0] + 96, b[1] + 6]; P.shape(smooth([[q[0] - 14, q[1]], [q[0] - 10, q[1] - 16], [q[0] + 10, q[1] - 18], [q[0] + 16, q[1]]], 3), 'r4y5k2', 0.9); }, depth: 589 },
    ch(LK.jacob, { x: 230, y: 360, face: 1, clip: 'sleep', h: 172 }),
    ...[0, 1, 2].map(i => ch(LK.angel, { h: 108, noShadow: 1, t0: i * 11, speed: 26, path: [W(292, 258, 0.5, 'climb', { z: 10 }), W(180, 258, 0.5, 'climb', { z: 500, c: 'climb' })], walk: 'climb' }))
  ]
},
/* 5 · JOSEPH VENDU PAR SES FRÈRES */
{
  title: 'Joseph tiré de la citerne', book: 'Genèse', ch: 37, ref: 'Genesis 37:28', refFr: 'Genèse 37, 28', fr: 'Et comme passaient les marchands madianites, ils le tirèrent de la citerne et le vendirent aux Ismaélites pour vingt pièces d’argent : et ceux-ci l’emmenèrent en Égypte.', accent: 1, feast: null,
  quote: 'And when the Madianite merchants passed by, they drew him out of the pit, and sold him to the Ismaelites, for twenty pieces of silver: and they led him into Egypt.',
  more: ['Jacob aime Joseph plus que ses autres fils et lui a fait une tunique de couleurs variées. Jaloux, ses frères l’arrachent de ce vêtement et le jettent dans une citerne vide. Une caravane passe, en route vers l’Égypte : ils le revendent vingt pièces d’argent. La tunique, trempée de sang de chevreau, sera rapportée au père.',
    'Pas de fête juive attachée à cet épisode. Correspondance de calendrier seulement : les parachiot de Joseph (Vayéchev, Mikets) tombent presque chaque année pendant Hanoucca.'],
  back(P) {
    Lib.sun(P, 180, 150, 30);
    Lib.platform(P, 'y5r2', 'y5r3k1', { strata: [[0, .3, 'y5r3k1'], [.3, .6, 'y6r3k2'], [.6, 1, 'y5r4k3']] });
    Lib.palm(P, 60, 70, 0, 170, { lean: 16, dates: 1 }); Lib.palm(P, 110, 40, 0, 140, { lean: -12 });
    Lib.stones(P, 26, 'y4r3k2', [20, 20, 500, 500]);
    // la citerne
    P.shape(P.ell(PX, PY, 0.5, 50, 50, 24), 'k8b3r2', 1.2);
    P.fill(P.ell(PX, PY, 0.6, 50, 50, 12, Math.PI * 1.25, Math.PI * 2.25).concat(P.ell(PX, PY, -40, 50, 50, 12, Math.PI * 2.25, Math.PI * 1.25)), 'y4r3k4', {});
    for (let i = 0; i < 18; i++) { const a = i / 18 * TAU; if (a > -Math.PI / 4 + TAU * 0 && a < 3 * Math.PI / 4) continue; const c = P.I(PX + Math.cos(a) * 56, PY + Math.sin(a) * 56, 0); P.shape(Lib.bumpy(P, c[0], c[1] - 5, 11, 7, 5), 'y3r2k3', 0.8); }
    // la tunique de couleurs sur une pierre
    Lib.rock(P, 170, 330, 0, 34, 20, 'y4r2k3');
    const c = P.I(170, 330, 18), st = ['r7', 'b6', 'y8', 'r5b4', 'y6b5', 'r7y5'];
    for (let i = 0; i < 6; i++) P.shape([[c[0] - 30 + i * 9, c[1] - 12 + i * 2], [c[0] - 21 + i * 9, c[1] - 14 + i * 2], [c[0] - 16 + i * 9, c[1] + 10], [c[0] - 25 + i * 9, c[1] + 12]], st[i], 0.6);
    for (let i = 0; i < 20; i++) { const cc = P.I(360 + P.r() * 150, 440 + P.r() * 60, 0); P.fill(P.disc(cc[0], cc[1], 1.8, 6), 'y2k3', {}); }
  },
  front(P) { for (let i = 0; i < 18; i++) { const a = i / 18 * TAU; if (!(a > -Math.PI / 4 && a < 3 * Math.PI / 4)) continue; const c = P.I(PX + Math.cos(a) * 56, PY + Math.sin(a) * 56, 0); P.shape(Lib.bumpy(P, c[0], c[1] - 5, 11, 7, 5), 'y3r2k3', 0.8); } },
  chars: [
    ch(LK.joseph, { h: 132, dz: -200, noShadow: 1, clipFn(P) { const arc = P.ell(PX, PY, 0, 50, 50, 16, -Math.PI / 4, 3 * Math.PI / 4); return arc.concat([[arc[arc.length - 1][0], -2000], [arc[0][0], -2000]]); }, speed: 14, path: [W(PX, PY, 2, 'sink', { z: -90 }), W(PX, PY, 3.5, 'sink', { z: -8, c: 'sink' }), W(PX, PY, 0, 'sink', { z: -90, c: 'sink' })], walk: 'sink' }),
    ch(LK.bro1, { x: 350, y: 270, face: -1, clip: 'haul', h: 140 }),
    ch(LK.bro2, { x: 420, y: 320, face: -1, clip: 'haul', h: 142, t0: 0.4 }),
    ch(LK.bro3, { x: 190, y: 430, face: 1, clip: 'talk', h: 144 }),
    ch(LK.ismaelite, { x: 260, y: 470, face: -1, clip: 'offer', h: 142 }),
    { beast: 'camel', h: 120, t0: 0, speed: 18, path: [W(520, 110, 0), W(330, 40, 0), W(150, 30, 0), W(520, 110, 0, null, { jump: 1 })] },
    { beast: 'camel', h: 115, t0: 4.5, speed: 18, path: [W(520, 110, 0), W(330, 40, 0), W(150, 30, 0), W(520, 110, 0, null, { jump: 1 })] },
    ch(LK.ismaelite, { h: 136, t0: 2.3, speed: 18, path: [W(520, 110, 0), W(330, 40, 0), W(150, 30, 0), W(520, 110, 0, null, { jump: 1 })] }),
    { beast: 'sheep', h: 70, x: 90, y: 250, face: 1 }, { beast: 'sheep', h: 66, x: 120, y: 200, face: -1 }
  ],
  top(P, t) {
    const cs = this.chars, j = cs[0].out, a = cs[1].out, b = cs[2].out; if (!j || !a || !b) return;
    P.line([j.hN, [(j.hN[0] + a.hF[0]) / 2, Math.max(j.hN[1], a.hF[1]) + 6], a.hF, a.hN, b.hF], 1.6, { ink: 1, lvl: 8, taper: 0.1 });
  }
},
/* 6 · LE BUISSON ARDENT */
{
  title: 'Le buisson ardent', book: 'Exode', ch: 3, ref: 'Exodus 3:5', refFr: 'Exode 3, 5', fr: 'Et il dit : N’approche pas d’ici ; ôte les chaussures de tes pieds, car le lieu où tu te tiens est une terre sainte.', accent: 1, feast: null,
  quote: 'And he said:  Come not nigh hither, put off the shoes from thy feet; for the place, whereon thou standest, is holy ground.',
  more: ['Moïse, exilé au pays de Madian, garde le troupeau de son beau-père Jéthro près de l’Horeb, la montagne de Dieu. Un buisson brûle sans se consumer. Quand il s’approche, une voix l’arrête : ôte tes sandales, le sol est saint. C’est ici qu’il reçoit sa mission et le Nom.',
    'Pas de fête juive attachée à ce récit, lu en hiver avec la paracha Chemot. Le buisson (séné) deviendra l’image d’un peuple éprouvé qui brûle sans être détruit.'],
  back(P) {
    Lib.cloud(P, 820, 140, 150, 34, 'b1');
    Lib.platform(P, 'y4r2k2', 'y4r3k2', { strata: [[0, .4, 'y4r3k2'], [.4, .75, 'r3y4k3'], [.75, 1, 'r4y3k4']] });
    Lib.mound(P, 90, 80, 110, 250, 'y4r3k3', { px: 20 }); Lib.mound(P, 300, 20, 80, 150, 'y3r3k2');
    Lib.stones(P, 30, 'y3r2k3', [20, 20, 500, 500]);
    Lib.rock(P, 460, 180, 0, 30, 18, 'y4r2k3'); Lib.rock(P, 110, 380, 0, 34, 22, 'y4r3k3');
    Lib.grass(P, 30, 'y5b4', [300, 300, 220, 220]);
    const s = P.I(360, 380, 0); P.shape([[s[0] - 4, s[1]], [s[0] + 10, s[1] - 3], [s[0] + 12, s[1] + 2], [s[0] - 2, s[1] + 4]], 'r5y5k4', 0.6); P.shape([[s[0] + 8, s[1] + 6], [s[0] + 22, s[1] + 3], [s[0] + 24, s[1] + 8], [s[0] + 10, s[1] + 10]], 'r5y5k4', 0.6);
    P.line([P.I(380, 360, 1), P.I(470, 380, 1)], 2.2, { ink: 3 });
  },
  live(P, t) { const b = P.I(240, 260, 0); P.halo(b[0], b[1] - 40, 118, ['y1', 'y2', 'y3r1', 'y4r2', 'y6r3'], { knock: true, sq: 0.8 }); P.r = rng(55); Lib.bush(P, 240, 260, 0, 48, 'y5b6k2'); Lib.flame(P, b[0] - 22, b[1] - 24, 40, 90, t, { noKnock: true }); Lib.flame(P, b[0] + 20, b[1] - 22, 36, 80, t + 1.3, { noKnock: true }); Lib.flame(P, b[0], b[1] - 36, 42, 120, t + 0.6); for (let i = 0; i < 6; i++) { const u = (t * 0.7 + i / 6) % 1; Lib.star(P, b[0] + Math.sin(i * 2.3 + t) * 30, b[1] - 60 - u * 110, 3 * (1 - u), 'y7r3'); } },
  chars: [
    ch(Object.assign({}, LK.moses, { feet: 'bare' }), { x: 350, y: 350, face: -1, clip: 'kneel', h: 146 }),
    { beast: 'sheep', h: 70, speed: 8, path: [W(420, 250, 3), W(470, 330, 2), W(420, 250, 0)] },
    { beast: 'sheep', h: 66, speed: 7, t0: 5, path: [W(400, 450, 4), W(470, 470, 2), W(400, 450, 0)] },
    { beast: 'ram', h: 72, x: 150, y: 460, face: 1 }, { beast: 'sheep', h: 64, x: 200, y: 490, face: -1 }
  ]
},
/* 7 · LA MER ROUGE */
{
  title: 'Le passage de la mer', book: 'Exode', ch: 14, ref: 'Exodus 14:22', refFr: 'Exode 14, 22', fr: 'Et les enfants d’Israël entrèrent au milieu de la mer desséchée ; car l’eau était comme un mur à leur droite et à leur gauche.', accent: 2, feast: 'Pessah',
  quote: 'And the children of Israel went in through the midst of the sea dried up; for the water was as a wall on their right hand and on their left.',
  more: ['Poursuivis par les chars de Pharaon, les Hébreux sont acculés à la mer. Moïse étend la main, un vent d’est souffle toute la nuit, et les eaux se dressent en murailles de part et d’autre. Le peuple traverse à pied sec ; la colonne de nuée et de feu se place entre les deux camps.',
    'Correspondance : <b>Pessah</b>. Le passage de la mer est lu le septième jour de la fête, que la tradition date au 21 Nissan. On y chante le Cantique de la mer (Exode 15), l’un des sommets poétiques de la Torah.'],
  back(P) {
    const pb = P.I(270, 0, 0); P.halo(pb[0] - 40, pb[1] - 170, 150, ['y1', 'y2', 'y3r1', 'y5r2', 'r4y7'], { sq: 1.5 });
    Lib.cloud(P, pb[0] - 40, pb[1] - 290, 120, 50, 'k2b1'); Lib.cloud(P, pb[0] - 30, pb[1] - 330, 90, 40, 'k2b2');
    Lib.platform(P, 'y5r1', 'y5r2k1', { strata: [[0, .5, 'y5r2k1'], [.5, 1, 'y5r3k2']] });
    Lib.stones(P, 14, 'y4r2k2', [180, 20, 180, 500]);
    for (let i = 0; i < 16; i++) { const c = P.I(180 + P.r() * 180, 20 + P.r() * 500, 0); P.line([[c[0], c[1]], [c[0] + 2, c[1] - 9], [c[0] - 1, c[1] - 15]], 1, { ink: 2 }); }
    Lib.rock(P, 270, 35, 0, 34, 24, 'y4r3k3');
    const wall = (x0, x1, H) => {
      P.box(x0, 0, 0, x1 - x0, 540, H, { t: 'b3', l: 'b6k1', r: 'b5' });
      for (let i = 0; i < 8; i++) { const onRight = x0 === 0, u = 40 + P.r() * 460, z = 8 + P.r() * (H - 20); const c = onRight ? P.I(x1, u, z) : P.I(x0 + 20 + P.r() * (x1 - x0 - 40), 540, z); drawFish(P, c[0], c[1], 10 + P.r() * 7, P.r() > .5 ? 1 : -1, P.r() > .5 ? 'y6r3' : 'y5b2'); }
      for (let i = 0; i < 26; i++) { const c = P.I(x0 + P.r() * (x1 - x0), P.r() * 540, H); P.line([[c[0] - 7, c[1]], [c[0], c[1] - 3], [c[0] + 7, c[1]]], 0.8, { ink: 2 }); }
      for (let z = 15; z < H; z += 30) { if (x0 === 0) P.line([P.I(x1, 0, z + Math.sin(z) * 5), P.I(x1, 270, z + 8), P.I(x1, 540, z)], 0.7, { ink: 2, lvl: 6 }); P.line([P.I(x0, 540, z), P.I(x1, 540, z + 6)], 0.7, { ink: 2, lvl: 6 }); }
      const foam = []; for (let i = 0; i <= 20; i++) foam.push(P.I(x0 === 0 ? x1 : x0, i * 27, H + Math.sin(i * 1.7) * 8)); P.line(foam, 3, { ink: 2, lvl: 3 });
    };
    this.wall = wall; wall(0, 170, 180);
  },
  front(P) { this.wall(375, 540, 46); },
  chars: [
    ch(LK.moses, { x: 270, y: 35, z: 24, face: 1, clip: 'raise', hold: { n: 'staff' }, h: 144 }),
    ...[[LK.isrM, 0, {}], [LK.isrW, 4.2, { hold: { nTop: 'jarhead' }, over: 'carry' }], [LK.child, 5.4, { h: 92 }], [LK.isrOld, 9, { hold: { f: 'staffV' } }], [LK.isrM2, 13, { hold: { f: 'lamb' } }], [LK.isrW2, 17.5, {}], [LK.childG, 18.7, { h: 90 }]].map(([lk, t0, o]) => ch(lk, Object.assign({ h: 138, t0, speed: 24, path: [W(300, 530, 0), W(250, 90, 0), W(300, 530, 0, null, { jump: 1 })] }, o)))
  ]
},
/* 8 · LE SINAÏ */
{
  title: 'Le Sinaï dans la fumée', book: 'Exode', ch: 19, ref: 'Exodus 19:18', refFr: 'Exode 19, 18', fr: 'Et tout le mont Sinaï fumait, parce que le Seigneur y était descendu dans le feu ; la fumée s’en élevait comme d’une fournaise, et toute la montagne était terrible.', accent: 1, feast: 'Chavouot',
  quote: 'And all Mount Sinai was on a smoke:  because the Lord was come down upon it in fire, and the smoke arose from it as out of a furnace: and all the mount was terrible.',
  more: ['Trois mois après la sortie d’Égypte, le peuple campe au pied du Sinaï. Une limite est tracée autour de la montagne : nul ne doit la franchir. Au troisième jour, tonnerre, éclairs, son du cor, et la montagne fume comme une fournaise. Moïse monte ; il en redescendra avec les Tables de la Loi.',
    'Correspondance : <b>Chavouot</b> (6 Sivan), fête du don de la Torah. Ces chapitres (Exode 19 et 20, avec les Dix Paroles) sont lus le premier jour. Beaucoup veillent toute la nuit à étudier, le Tikoun Leil Chavouot.'],
  back(P) {
    for (const [x, y, w, h] of [[430, 90, 300, 70], [560, 60, 220, 50], [300, 70, 240, 60]]) Lib.cloud(P, x, y, w, h, 'k3b2');
    Lib.platform(P, 'y4r3k1', 'y4r3k2', { strata: [[0, .35, 'y4r3k2'], [.35, .7, 'r4y4k3'], [.7, 1, 'r4y3k4']] });
    const m = Lib.mound(P, 200, 190, 170, 320, 'y4r3k3', { px: 10 });
    fenceRing(P, 200, 190, 250, -0.55, 2.1, 14);
    Lib.tent(P, 420, 60, 70, 60, 55, 'y3r2k1'); Lib.tent(P, 470, 150, 60, 55, 50, 'r4y4k1');
    Lib.stones(P, 20, 'y3r2k3', [300, 300, 220, 220]);
    Lib.cloud(P, m.peak[0] - 60, m.peak[1] + 60, 160, 50, 'k4b2'); Lib.cloud(P, m.peak[0] + 70, m.peak[1] + 30, 130, 44, 'k3b1');
  },
  live(P, t) {
    const pk = P.I(200, 190, 320);
    P.halo(pk[0] + 10, pk[1] - 60, 120, ['r1y2', 'r2y3', 'r3y5', 'r5y7']);
    Lib.flame(P, pk[0] - 30, pk[1] + 4, 36, 60, t, { noKnock: true }); Lib.flame(P, pk[0] + 40, pk[1] + 10, 30, 50, t + 2, { noKnock: true });
    Lib.cloud(P, pk[0] + 10, pk[1] - 110 - Math.sin(t) * 6, 180, 60, 'k4b2'); Lib.cloud(P, pk[0] - 60, pk[1] - 160 - Math.cos(t * .8) * 8, 150, 50, 'k3b1');
    if (Math.floor(t * 3) % 4 === 0) { const x0 = pk[0] + 150, y0 = pk[1] - 200; P.line([[x0, y0], [x0 - 20, y0 + 40], [x0 - 5, y0 + 44], [x0 - 30, y0 + 95]], 4, { ink: 0, taper: 0.6 }); P.line([[x0, y0], [x0 - 20, y0 + 40], [x0 - 5, y0 + 44], [x0 - 30, y0 + 95]], 1.2); }
  },
  chars: [
    ch(LK.mosesOld, { x: 200, y: 190, z: 318, face: 1, clip: 'hold2', hold: { nTop: 'tablets' }, h: 110, noShadow: 1 }),
    ch(LK.isrM, { x: 380, y: 360, face: -1, clip: 'kneel', h: 136 }),
    ch(LK.isrW, { x: 430, y: 330, face: -1, clip: 'pray', h: 130 }),
    ch(LK.isrOld, { x: 460, y: 430, face: -1, clip: 'idle', h: 136, hold: { f: 'staffV' } }),
    ch(LK.isrM2, { x: 330, y: 460, face: -1, clip: 'kneel', h: 138, t0: 1 }),
    ch(LK.childG, { x: 400, y: 470, face: -1, clip: 'idle', h: 90 }),
    ch(LK.isrW2, { x: 500, y: 250, face: -1, clip: 'pray', h: 130, t0: 1.5 })
  ]
},
/* 9 · LE VEAU D'OR */
{
  title: 'Le veau d’or', book: 'Exode', ch: 32, ref: 'Exodus 32:19', refFr: 'Exode 32, 19', fr: 'Et lorsqu’il approcha du camp, il vit le veau et les danses : saisi d’une grande colère, il jeta les tables de sa main et les brisa au pied de la montagne.', accent: 0, feast: 'Yom Kippour',
  quote: 'And when he came nigh to the camp, he saw the calf, and the dances:  and being very angry, he threw the tables out of his hand, and broke them at the foot of the mount:',
  more: ['Moïse tarde à redescendre. Le peuple réclame un dieu visible ; Aaron fond les anneaux d’or en un veau. On danse, on sacrifie. En approchant du camp, Moïse voit la fête et brise les tables de pierre au pied de la montagne.',
    'Correspondance : <b>Yom Kippour</b>. Selon la tradition (Seder Olam, Rachi sur Exode 33, 11), Moïse redescend avec les secondes tables le 10 Tichri, signe du pardon accordé : ce jour devient le Grand Pardon. Le bris des premières tables est, lui, commémoré par le jeûne du 17 Tamouz.'],
  back(P) {
    Lib.mound(P, 20, 20, 90, 170, 'y4r3k3');
    Lib.platform(P, 'y5r2', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
    Lib.tent(P, 420, 40, 80, 70, 64, 'b3y2k1'); Lib.tent(P, 450, 170, 70, 60, 56, 'r5y3k1'); Lib.tent(P, 40, 440, 70, 60, 56, 'y3r2k1');
    Lib.rock(P, 70, 120, 0, 50, 34, 'y4r3k3');
    for (let i = 0; i < 5; i++) { const c = P.I(130 + i * 9, 170 + i * 5, 0); P.shape([[c[0], c[1]], [c[0] + 10, c[1] - 4], [c[0] + 16, c[1] + 2], [c[0] + 5, c[1] + 6]], 'k2y3b1', 0.6); }
    P.box(330, 210, 0, 36, 36, 26, 'y3r2k3');
    Lib.stones(P, 18, 'y4r3k2', [150, 350, 300, 150]);
  },
  live(P, t) { const a = P.I(348, 228, 26); Lib.flame(P, a[0], a[1], 26, 44, t); const c = P.I(265, 265, 36); P.halo(c[0], c[1] - 60, 90, ['y1', 'y2', 'y3']); },
  chars: [
    { draw(P) { P.box(235, 235, 0, 60, 60, 36, 'y4r3k2'); }, depth: 520 },
    { beast: 'calf', h: 86, x: 262, y: 262, z: 36, face: 1, noShadow: 1, dz: 20 },
    ch(LK.mosesOld, { x: 70, y: 120, z: 44, face: 1, clip: 'smash', hold: { nTop: 'tablets' }, h: 142 }),
    ch(LK.isrM2, { x: 120, y: 60, face: 1, clip: 'idle', h: 136, hold: { f: 'spear' } }),
    ch(LK.priest, { x: 360, y: 290, face: -1, clip: 'offer', h: 140 }),
    ...[0, 1, 2, 3, 4].map(i => { const pts = []; for (let k = 0; k < 10; k++) { const a = -k / 10 * TAU; pts.push(W(265 + Math.cos(a) * 140, 265 + Math.sin(a) * 120, 0)); } return ch([LK.isrW, LK.isrM, LK.isrW2, LK.isrM2, LK.childG][i], { h: i === 4 ? 92 : 132, t0: i * 5.2, speed: 22, walk: 'dance', path: pts }); }),
    ch(LK.isrW, { x: 420, y: 420, face: -1, clip: 'dance', h: 128 })
  ]
},
/* 10 · SOUCCOTH */
{
  title: 'Les cabanes du désert', book: 'Lévitique', ch: 23, ref: 'Leviticus 23:42', refFr: 'Lévitique 23, 42', fr: 'Et vous demeurerez sept jours sous des tentes de feuillage. Quiconque est de la race d’Israël habitera sous des tabernacles.', accent: 0, feast: 'Souccot',
  quote: 'And you shall dwell in bowers seven days.  Every one that is of the race of Israel, shall dwell in tabernacles:',
  more: ['Le calendrier des fêtes de Lévitique 23 prescrit, au quinzième jour du septième mois, de prendre « du fruit du plus bel arbre, des palmes, des branches d’arbres touffus et des saules » et d’habiter sept jours dans des cabanes, en mémoire des années de désert.',
    'Correspondance : <b>Souccot</b> (15 Tichri, pleine lune). On mange sous un toit de branchages assez clairsemé pour voir les étoiles, et l’on agite chaque jour le loulav et l’étrog, les quatre espèces. La fête s’achève sur Chemini Atseret et Simhat Torah.'],
  back(P) {
    nightSky(P, 'b6r2k3', 70);
    Lib.moon(P, 800, 150, 34);
    Lib.platform(P, 'y4r2b2', 'y4r3b1k2', { strata: [[0, .4, 'y4r3b1k2'], [.4, 1, 'y4r3b2k3']] });
    Lib.palm(P, 470, 60, 0, 190, { lean: -10 }); Lib.palm(P, 500, 140, 0, 150, { lean: 18 });
    Lib.tent(P, 380, 20, 70, 60, 60, 'y3r2b1k1');
    const booth = (x, y, w, d, h) => {
      P.shape([P.I(x, y, 0), P.I(x, y + d, 0), P.I(x, y + d, h), P.I(x, y, h)], 'y4b5k2', 1);
      P.shape([P.I(x, y, 0), P.I(x + w, y, 0), P.I(x + w, y, h), P.I(x, y, h)], 'y5b5k1', 1);
      for (let i = 1; i < 10; i++) { P.line([P.I(x, y + d * i / 10, 2), P.I(x, y + d * i / 10 + 8, h - 2)], 0.6); P.line([P.I(x + w * i / 10, y, 2), P.I(x + w * i / 10 + 8, y, h - 2)], 0.6); }
      for (let z = 20; z < h; z += 26) { P.line([P.I(x, y, z), P.I(x, y + d, z + 4)], 0.8, { ink: 1, lvl: 6 }); P.line([P.I(x, y, z), P.I(x + w, y, z + 4)], 0.8, { ink: 1, lvl: 6 }); }
      for (const [px, py] of [[x + w, y + d], [x + w, y], [x, y + d]]) P.box(px - 4, py - 4, 0, 8, 8, h, 'r5y5k3', 0.8);
    };
    booth(40, 40, 230, 210, 170); booth(330, 250, 150, 140, 150);
    P.box(110, 110, 0, 100, 70, 38, 'r5y4k2');
    P.shape([P.I(112, 112, 38.5), P.I(208, 112, 38.5), P.I(208, 178, 38.5), P.I(112, 178, 38.5)], 'y2', 0.8);
    Lib.lamp(P, 160, 140, 38, 1.4);
    for (let i = 0; i < 3; i++) { const c = P.I(130 + i * 25, 160, 38); P.shape(P.disc(c[0], c[1] - 3, 5, 10), ['r7y4', 'y8', 'r8b3'][i], 0.6); }
  },
  front(P) {
    const roof = (x, y, w, d, h) => { for (let i = 0; i <= 8; i++) P.line([P.I(x + w * i / 8, y, h), P.I(x + w * i / 8, y + d, h)], 1.6, { ink: 3 }); for (let i = 0; i < 14; i++) { const c = P.I(x + P.r() * w, y + P.r() * d, h + 2); P.shape([[c[0], c[1]], [c[0] + 12, c[1] - 7], [c[0] + 20, c[1] - 2], [c[0] + 8, c[1] + 4]], 'y5b6', 0.6); } };
    roof(40, 40, 230, 210, 170); roof(330, 250, 150, 140, 150);
  },
  chars: [
    ch(LK.isrOld, { x: 80, y: 150, face: 1, clip: 'eat', h: 134, dz: -10 }),
    ch(LK.isrW, { x: 150, y: 90, face: 1, clip: 'eat', h: 126, t0: 1.1, dz: -10 }),
    ch(LK.childG, { x: 175, y: 205, face: -1, clip: 'sit', h: 88 }),
    ch(LK.isrM, { x: 330, y: 170, face: 1, clip: 'wave', hold: { n: 'lulav', f: 'etrog' }, h: 140 }),
    ch(LK.child, { h: 92, over: 'carry', hold: { n: 'branches' }, speed: 20, path: [W(500, 470, 2), W(300, 480, 0), W(250, 330, 1.5, 'idle'), W(300, 480, 0)] }),
    ch(LK.isrW2, { x: 390, y: 320, face: -1, clip: 'sit', h: 126 }),
    ch(LK.isrM2, { x: 440, y: 300, face: -1, clip: 'eat', h: 132, t0: .6 })
  ]
},
/* 11 · LE MONT NEBO */
{
  title: 'Moïse au mont Nebo', book: 'Deutéronome', ch: 34, ref: 'Deuteronomy 34:4', refFr: 'Deutéronome 34, 4', fr: 'Et le Seigneur lui dit : Voici la terre que j’ai juré de donner à Abraham, à Isaac et à Jacob, en disant : Je la donnerai à ta postérité. Tu l’as vue de tes yeux, et tu n’y passeras point.', accent: 2, feast: 'Simhat Torah',
  quote: 'And the Lord said to him:  This is the land, for which I swore to Abraham, Isaac, and Jacob, saying:  I will give it to thy seed.  Thou hast seen it with thy eyes, and shalt not pass over to it.',
  more: ['Dernier chapitre de la Torah. Moïse monte des plaines de Moab au sommet du Pisga, face à Jéricho. Dieu lui montre tout le pays, de Galaad jusqu’à Dan, jusqu’à la mer. Il le voit et n’y entrera pas. Il meurt là, à cent vingt ans, « l’œil non terni ».',
    'Correspondance : <b>Simhat Torah</b>. Ce passage clôt la lecture annuelle ; on enchaîne aussitôt sur le premier chapitre de la Genèse. Les rouleaux sortent de l’arche et l’on danse avec eux : la fin du livre ouvre le suivant.'],
  back(P) {
    P.ctx.save(); const cl = new Path2D(); cl.ellipse(500, 420, 480, 330, 0, 0, TAU); P.ctx.clip(cl);
    const band = (y0, amp, f, tn, ph) => { const pts = [[0, 700]]; for (let x = 0; x <= 1000; x += 20) pts.push([x, y0 - Math.abs(Math.sin(x * f + ph)) * amp - Math.sin(x * f * 2.3 + ph) * amp * 0.3]); pts.push([1000, 700]); P.fill(pts, tn, {}); P.line(pts.slice(1, -1), 0.8, { lvl: 7 }); };
    band(250, 50, 0.006, 'b2', 1); band(300, 40, 0.009, 'b3y1', 2);
    P.fill([[0, 330], [1000, 318], [1000, 700], [0, 700]], 'y3b2', {});
    P.fill([[40, 380], [210, 360], [300, 390], [180, 420], [60, 410]], 'b5', {}); P.outline([[40, 380], [210, 360], [300, 390], [180, 420], [60, 410]], 0.7);
    P.line([[820, 330], [760, 360], [800, 390], [720, 420], [760, 460], [700, 500]], 2.2, { ink: 2 });
    band(470, 26, 0.012, 'y4b3', 3);
    const jr = [860, 430];
    P.shape([[jr[0] - 40, jr[1]], [jr[0] + 40, jr[1] - 6], [jr[0] + 40, jr[1] - 26], [jr[0] - 40, jr[1] - 20]], 'y5r3k1', 0.8);
    for (let i = 0; i < 6; i++) P.line([[jr[0] - 40 + i * 16, jr[1] - 20 - i], [jr[0] - 40 + i * 16, jr[1] - 27 - i]], 1.4);
    for (let i = 0; i < 5; i++) { const x = jr[0] - 60 + i * 30, y = jr[1] + 14; P.line([[x, y], [x + 2, y - 22]], 1.2); P.fill(Lib.bumpy(P, x + 2, y - 24, 7, 4, 5), 'y5b6', {}); }
    P.ctx.restore(); P.line(P.disc(500, 420, 1, 80).map((p, i) => { const a = i / 80 * TAU; return [500 + Math.cos(a) * 480, 420 + Math.sin(a) * 330]; }).filter(p => p[1] < 560), 1, { lvl: 8 });
    Lib.cloud(P, 180, 130, 130, 28, 'b1'); Lib.cloud(P, 700, 110, 110, 24, 'b1');
    Lib.sun(P, 880, 110, 24);
    Lib.platform(P, 'y4r3k2', 'y4r3k3', { h: 70, strata: [[0, .35, 'y4r3k3'], [.35, .7, 'r3y4k3'], [.7, 1, 'r4y3k5']] });
    Lib.mound(P, 90, 90, 90, 70, 'y4r3k3'); Lib.rock(P, 200, 80, 0, 40, 30, 'y4r3k3');
    Lib.rock(P, 380, 160, 0, 60, 36, 'y4r3k2');
    Lib.stones(P, 36, 'y3r2k3', [20, 200, 500, 320]);
    Lib.bush(P, 250, 420, 0, 22, 'y4b5k2'); Lib.bush(P, 450, 360, 0, 16, 'y4b5k2');
  },
  chars: [
    ch(LK.mosesOld, { x: 385, y: 160, z: 34, face: 1, clip: 'point', hold: { f: 'staffV' }, h: 150 }),
    { beast: 'deer', h: 80, x: 180, y: 380, face: 1 },
    { beast: 'deer', h: 70, speed: 12, path: [W(300, 470, 4), W(420, 480, 3), W(300, 470, 0)] },
    { draw(P, t) { const a = t * 0.3; Lib.bird(P, 640 + Math.cos(a) * 120, 130 + Math.sin(a) * 40, 1.6, t * 1.2, 'k7r2'); }, depth: 3000 }
  ]
},
/* 12 · JÉRICHO */
{
  title: 'Les murailles de Jéricho', book: 'Josué', ch: 6, ref: 'Josue 6:20', refFr: 'Josué 6, 20', fr: 'Alors tout le peuple poussa un cri et les trompettes sonnèrent ; et quand la voix et le son eurent retenti aux oreilles de la multitude, les murailles tombèrent aussitôt.', accent: 1, feast: null,
  quote: 'So all the people making a shout, and the trumpets sounding, when the voice and the sound thundered in the ears of the multitude, the walls forthwith fell down:',
  more: ['Six jours durant, l’armée fait le tour de Jéricho en silence, derrière sept prêtres sonnant du cor devant l’arche de l’alliance. Le septième jour, sept tours, un long son de trompe, un cri du peuple : la muraille s’effondre. Seule la maison de Rahab, marquée d’un cordon écarlate à la fenêtre, est épargnée.',
    'Pas de fête juive attachée à ce récit. Les cors des prêtres sont des shofarot, les mêmes cornes de bélier que celles de Rosh Hashana.'],
  back(P) {
    Lib.sun(P, 160, 140, 26);
    Lib.platform(P, 'y5r2', 'y5r3k1', { strata: [[0, .4, 'y5r3k1'], [.4, 1, 'y5r4k3']] });
    for (const [x, y, h] of [[40, 80, 150], [70, 30, 120], [30, 180, 130]]) Lib.palm(P, x, y, 0, h, { lean: 10, dates: 1 });
    const wt = 'y4r3k1';
    P.box(120, 120, 0, 24, 280, 92, wt); P.box(120, 120, 0, 280, 24, 92, wt);
    for (let i = 0; i < 11; i++) { P.box(120, 126 + i * 25, 92, 24, 12, 12, wt, 0.8); P.box(126 + i * 25, 120, 92, 12, 24, 12, wt, 0.8); }
    for (const [x, y] of [[110, 110]]) P.box(x, y, 0, 46, 46, 128, 'y4r3k2');
    for (const [x, y, w, d, h] of [[170, 170, 60, 50, 60], [250, 160, 50, 60, 76], [180, 250, 50, 50, 50], [260, 250, 60, 60, 66], [320, 180, 44, 50, 52]]) { P.box(x, y, 0, w, d, h, 'y3r2'); P.shape([P.I(x + w * 0.3, y + d, 0), P.I(x + w * 0.55, y + d, 0), P.I(x + w * 0.55, y + d, 26), P.I(x + w * 0.3, y + d, 26)], 'k6r2', 0.7); }
    // mur de droite encore debout avec la maison de Rahab
    P.box(376, 140, 0, 24, 110, 92, wt); P.box(360, 180, 92, 50, 60, 52, 'y3r3k1');
    const win = P.I(410, 205, 118); P.shape([[win[0], win[1]], [win[0] + 12, win[1] + 6], [win[0] + 12, win[1] - 10], [win[0], win[1] - 16]], 'k7', 0.7);
    P.line([[win[0] + 6, win[1] - 2], [win[0] + 8, win[1] + 30], [win[0] + 5, win[1] + 70], [win[0] + 9, win[1] + 110]], 2.4, { ink: 1, taper: 0.3 });
    // gravats
    for (let i = 0; i < 26; i++) { const x = 140 + P.r() * 270, y = 380 + P.r() * 40, s = 10 + P.r() * 14; if (x > 360 && y < 250) continue; P.box(x, y, 0, s, s * 0.8, s * 0.6, wt, 0.8); }
    for (let i = 0; i < 14; i++) { const x = 380 + P.r() * 40, y = 260 + P.r() * 140, s = 10 + P.r() * 12; P.box(x, y, 0, s, s, s * 0.6, wt, 0.8); }
    P.box(380, 380, 0, 36, 30, 44, wt); P.box(150, 382, 0, 40, 30, 36, wt);
  },
  live(P, t) {
    for (let k = 0; k < 3; k++) { const u = ((t * 0.5 + k * 0.33) % 1), x = 200 + k * 70, c = P.I(x, 400, 92 * (1 - u * u)); P.shape([[c[0] - 10, c[1] - 6], [c[0] + 10, c[1] - 9], [c[0] + 12, c[1] + 6], [c[0] - 8, c[1] + 8]].map(p => [c[0] + (p[0] - c[0]) * Math.cos(u * 3) - (p[1] - c[1]) * Math.sin(u * 3), c[1] + (p[0] - c[0]) * Math.sin(u * 3) + (p[1] - c[1]) * Math.cos(u * 3)]), 'y4r3k2', 0.8); if (u > 0.75) Lib.cloud(P, c[0], c[1] + 10, 50 * (u - 0.6) * 3, 16, 'y3r2k1', { noShade: 1 }); }
  },
  chars: (() => {
    const path = [W(500, 40, 0), W(500, 480, 0), W(40, 480, 0), W(500, 40, 0, null, { jump: 1 })];
    const L = [];
    for (let i = 0; i < 4; i++) L.push(ch(LK.priest, { h: 136, t0: 30 - i * 3.2, speed: 24, over: 'blow', hold: { n: 'shofar' }, path }));
    const ark = ch(LK.priest, { h: 134, t0: 30 - 15, speed: 24, over: 'carry', path });
    const ark2 = ch(LK.priest, { h: 134, t0: 30 - 17.6, speed: 24, over: 'carry', path });
    L.push(ark, ark2, { depth: t => { const s = charState(ark, t); return s.x + s.y - 1; }, draw(P, t) { const a = charState(ark, t), b = charState(ark2, t), pa = P.I(a.x, a.y, 118), pb = P.I(b.x, b.y, 118), c = [(pa[0] + pb[0]) / 2, (pa[1] + pb[1]) / 2]; P.line([pa, pb], 3, { ink: 3, taper: 0 }); P.shape([[c[0] - 26, c[1] - 4], [c[0] + 26, c[1] - 4], [c[0] + 26, c[1] - 28], [c[0] - 26, c[1] - 28]], 'y9r3', 1); P.shape([[c[0] - 26, c[1] - 28], [c[0] + 26, c[1] - 28], [c[0] + 30, c[1] - 33], [c[0] - 22, c[1] - 33]], 'y9r4k1', 0.8); for (const s of [-1, 1]) P.shape([[c[0] + s * 4, c[1] - 33], [c[0] + s * 20, c[1] - 52], [c[0] + s * 24, c[1] - 40], [c[0] + s * 14, c[1] - 33]], 'y8r2', 0.7); } });
    for (let i = 0; i < 3; i++) L.push(ch(i === 1 ? LK.isrM2 : LK.soldier, { h: 138, t0: 30 - 21 - i * 3.3, speed: 24, hold: { n: 'spear' }, over: 'guard', path }));
    L.push(ch(LK.isrW, { x: 470, y: 520, face: -1, clip: 'pray', h: 126 }));
    return L;
  })()
},
/* 13 · RUTH */
{
  title: 'Ruth dans le champ de Booz', book: 'Ruth', ch: 2, ref: 'Ruth 2:3', refFr: 'Ruth 2, 3', fr: 'Elle alla donc, et glanait les épis derrière les moissonneurs. Et il se trouva que ce champ appartenait à Booz, qui était de la parenté d’Élimélech.', accent: 0, feast: 'Chavouot',
  quote: 'She went, therefore, and gleaned the ears of corn after the reapers.  And it happened that the owner of that field was Booz, who was of the kindred of Elimelech.',
  more: ['Ruth la Moabite a suivi sa belle-mère Noémi jusqu’à Bethléem. C’est le début de la moisson des orges. Pour les nourrir, elle glane derrière les moissonneurs les épis oubliés, comme la Loi le permet aux pauvres et aux étrangers. Le champ appartient à Booz, un parent : il la remarque et la protège.',
    'Correspondance : <b>Chavouot</b>, fête des moissons. On y lit le livre de Ruth : récolte, don de la Torah et fidélité d’une étrangère qui choisit ce peuple. Ruth sera l’arrière-grand-mère de David, que la tradition fait naître et mourir à Chavouot.'],
  back(P) {
    Lib.sun(P, 820, 150, 30); Lib.cloud(P, 210, 130, 160, 32, 'b1');
    Lib.mound(P, 40, 30, 80, 90, 'y4b3k1');
    Lib.platform(P, 'y5r1', 'y5r3k1', { strata: [[0, .35, 'y5r3k1'], [.35, .7, 'r3y5k2'], [.7, 1, 'r4y4k3']] });
    for (let r = 0; r < 14; r++) for (let i = 0; i < 26; i++) {
      const x = 20 + i * 20 + (r % 2) * 10, y = 20 + r * 37; const c = P.I(x, y, 0), tall = x < 250;
      if (tall) { P.line([[c[0], c[1]], [c[0] + 1, c[1] - 24]], 1, { ink: 0, lvl: 9 }); P.line([[c[0] - 3, c[1]], [c[0] - 4, c[1] - 20]], 0.8, { ink: 0 }); P.fill([[c[0] - 2, c[1] - 24], [c[0] + 1, c[1] - 34], [c[0] + 3, c[1] - 24]], 'y8r2', {}); }
      else P.line([[c[0], c[1]], [c[0] + 1, c[1] - 5]], 0.8, { ink: 0, lvl: 8 });
    }
    for (const [x, y] of [[300, 120], [360, 90], [330, 220], [420, 170], [470, 300]]) { const c = P.I(x, y, 0); for (let k = -4; k <= 4; k++) P.line([[c[0] + k * 1.5, c[1]], [c[0] + k * 4, c[1] - 30]], 1.2, { ink: 0 }); P.fill([[c[0] - 20, c[1] - 30], [c[0] + 20, c[1] - 30], [c[0] + 14, c[1] - 40], [c[0] - 14, c[1] - 40]], 'y8r3', {}); P.line([[c[0] - 7, c[1] - 14], [c[0] + 7, c[1] - 14]], 2, { ink: 1 }); }
    P.box(440, 40, 0, 6, 6, 80, 'r4y5k3'); P.box(510, 110, 0, 6, 6, 80, 'r4y5k3');
    P.shape([P.I(430, 30, 80), P.I(530, 30, 80), P.I(530, 130, 76), P.I(430, 130, 76)], 'b4y2', 1);
    Lib.jar(P, 480, 70, 0, 1.2); Lib.jar(P, 500, 80, 0, 1); Lib.jar(P, 470, 95, 0, 1.1, 'r6y5k2');
  },
  chars: [
    ch(LK.reaper, { h: 136, hold: { n: 'sickle' }, speed: 5, walk: 'reap', path: [W(240, 120, 0), W(240, 420, 0), W(240, 120, 0, null, { jump: 1 })] }),
    ch(LK.reaper, { h: 134, hold: { n: 'sickle' }, speed: 5, t0: 20, walk: 'reap', path: [W(250, 200, 0), W(250, 500, 0), W(250, 200, 0, null, { jump: 1 })], look: Object.assign({}, LK.reaper, { robe: 'b3y2', hs: 'short', head: null }) }),
    ch(LK.ruth, { h: 130, speed: 6, hold: { f: 'sheaf' }, path: [W(300, 260, 3, 'glean'), W(330, 380, 4, 'glean'), W(360, 450, 3, 'glean'), W(300, 260, 0)], walk: 'walk' }),
    ch(LK.boaz, { x: 420, y: 430, face: -1, clip: 'talk', h: 146 }),
    ch(LK.reaper, { x: 470, y: 470, face: -1, clip: 'idle', h: 132, hold: { f: 'staffV' }, look: Object.assign({}, LK.reaper, { robe: 'r4y5k1', beard: 'long' }) }),
    ch(LK.maid, { h: 124, over: 'carry', hold: { nTop: 'jarhead' }, speed: 18, path: [W(470, 140, 4), W(420, 300, 3), W(470, 140, 0)] })
  ]
},
/* 14 · DAVID ET GOLIATH */
{
  title: 'David et Goliath', book: '1 Samuel', ch: 17, ref: '1 Kings 17:49', refFr: '1 Samuel 17, 49', fr: 'Il mit la main dans sa panetière, en tira une pierre, la lança avec la fronde en la faisant tournoyer, et frappa le Philistin au front ; et celui-ci tomba face contre terre.', accent: 1, feast: null,
  quote: 'And he put his hand into his scrip, and took a stone, and cast it with the sling, and fetching it about, struck the Philistine in the forehead, and he fell on his face upon the earth.',
  more: ['Vallée du Térébinthe. Deux armées sur deux collines, un torrent entre elles. Goliath, champion philistin, casque et cuirasse de bronze, défie Israël depuis quarante jours. David, berger roux, refuse l’armure du roi, choisit cinq pierres lisses dans le torrent et tend sa fronde.',
    'Pas de fête juive attachée à ce récit (le livre est appelé « 1 Rois » dans la Douay-Rheims, « 1 Samuel » dans les bibles hébraïques). David reste lié à Chavouot par la tradition de sa naissance et de sa mort.'],
  back(P) {
    Lib.cloud(P, 500, 110, 200, 38, 'b1');
    Lib.platform(P, 'y5b2', 'y4r3k1', { strata: [[0, .4, 'y4r3k1'], [.4, 1, 'y4r4k3']] });
    const m1 = Lib.mound(P, 70, 70, 80, 90, 'y5b3k1'), m2 = Lib.mound(P, 470, 60, 70, 80, 'y5b3k1');
    Lib.tent(P, 20, 20, 50, 40, 40, 'r5y4k1'); Lib.tent(P, 450, 10, 50, 40, 40, 'b4y2k1');
    const riv = [[0, 300], [120, 330], [260, 300], [400, 350], [540, 330], [540, 370], [400, 390], [260, 340], [120, 370], [0, 340]];
    P.shape(riv.map(p => P.I(p[0], p[1], 0.5)), 'b5y1', 1); Lib.waves(P, [40, 320, 460, 30], 10, 1, 2);
    Lib.stones(P, 16, 'b2k3', [40, 300, 460, 60]);
    Lib.grass(P, 60, 'y5b4');
    Lib.bush(P, 120, 480, 0, 24, 'y5b5k2'); Lib.tree(P, 500, 460, 0, { h: 150, r: 42, can: 'y5b5k1' });
  },
  top(P, t) {
    const d = this.chars[1].out, g = this.chars[0].out; if (!d || !g) return;
    const u = (t % 3) / 3; if (u < 0.35) return; const k = (u - 0.35) / 0.65, x = lerp(d.hN[0], g.head[0] + 6, k), y = lerp(d.hN[1] - 20, g.head[1] - 6, k) - Math.sin(k * Math.PI) * 50;
    P.shape(P.disc(x, y, 3, 8), 'k5y2', 0.6); for (let i = 1; i < 4; i++) P.line([[x - i * 6, y + i * 1.5], [x - i * 6 - 4, y + i * 1.5 + 1]], 0.6);
    if (k > 0.92) P.halo(g.head[0] + 6, g.head[1] - 6, 16, ['y3', 'y6r3']);
  },
  chars: [
    ch(LK.goliath, { x: 170, y: 220, face: 1, clip: 'stagger', hold: { n: 'spear', f: 'shield' }, h: 250 }),
    ch(LK.david, { x: 400, y: 410, face: -1, clip: 'sling', hold: { n: 'sling' }, h: 120, over: null }),
    ch(LK.soldier, { x: 60, y: 160, face: 1, clip: 'guard', hold: { n: 'spear' }, h: 110 }),
    ch(LK.soldier, { x: 100, y: 120, face: 1, clip: 'guard', hold: { n: 'spear' }, h: 106, t0: 1 }),
    ch(LK.isrM, { x: 480, y: 170, face: -1, clip: 'guard', hold: { n: 'spear' }, h: 110 }),
    ch(LK.isrM2, { x: 440, y: 130, face: -1, clip: 'point', h: 108 }),
    { beast: 'sheep', h: 62, x: 460, y: 500, face: -1 }
  ]
},
/* 15 · ÉLIE AU CARMEL */
{
  title: 'Le feu du Carmel', book: '1 Rois', ch: 18, ref: '3 Kings 18:38', refFr: '1 Rois 18, 38', fr: 'Alors le feu du Seigneur tomba, et il consuma l’holocauste, le bois, les pierres et la poussière, et il lécha l’eau qui était dans la rigole.', accent: 1, feast: null,
  quote: 'Then the fire of the Lord fell, and consumed the holocaust, and the wood, and the stones, and the dust, and licked up the water that was in the trench.',
  more: ['Sécheresse de trois ans sous le roi Achab. Au mont Carmel, Élie défie seul les quatre cent cinquante prophètes de Baal : chacun prépare un taureau, et le vrai Dieu répondra par le feu. Les prêtres de Baal dansent et crient en vain toute la journée. Élie fait inonder son autel de douze pierres, prie, et le feu tombe.',
    'Pas de fête juive attachée à cet épisode (le livre est le « 3 Rois » de la Douay-Rheims). Le prophète Élie est pourtant présent à Pessah, où l’on remplit pour lui une coupe au Séder, et chaque samedi soir dans les chants de la Havdala.'],
  back(P) {
    Lib.cloud(P, 250, 160, 220, 44, 'k2b2'); Lib.cloud(P, 700, 120, 170, 36, 'k2b1');
    Lib.platform(P, 'y4b2r1', 'y4r3k2', { strata: [[0, .4, 'y4r3k2'], [.4, 1, 'r4y4k3']] });
    Lib.grass(P, 50, 'y5b4'); Lib.stones(P, 20, 'y3r2k3', [20, 20, 500, 500]);
    Lib.tree(P, 60, 60, 0, { h: 150, r: 40, can: 'y5b5k1' });
    stoneStack(P, 120, 150, 80, 60, 32, 'y4r3k2'); P.box(125, 155, 32, 70, 50, 8, 'r5y5k3', 0.8);
    // autel de douze pierres et sa rigole d'eau
    P.shape(P.ell(330, 300, 0.5, 85, 70, 28), 'b6y1', 1.1);
    P.shape(P.ell(330, 300, 0.8, 66, 52, 28), 'y4r2k2', 1);
    for (let i = 0; i < 12; i++) { const a = i / 12 * TAU, x = 330 + Math.cos(a) * 34, y = 300 + Math.sin(a) * 26; if (Math.sin(a) > 0.2) continue; P.box(x - 10, y - 10, 0, 20, 20, 34, 'y3r2k2', 0.9); }
    P.box(300, 270, 0, 60, 50, 34, 'y3r2k3');
    for (let i = 0; i < 12; i++) { const a = i / 12 * TAU, x = 330 + Math.cos(a) * 34, y = 300 + Math.sin(a) * 26; if (Math.sin(a) <= 0.2) continue; P.box(x - 10, y - 10, 0, 20, 20, 34, 'y3r2k2', 0.9); }
    for (let i = 0; i < 5; i++) P.box(298, 272 + i * 10, 34, 64, 8, 7, 'r5y5k3', 0.7);
  },
  live(P, t) {
    const c = P.I(330, 300, 44), top = [c[0] + 30, 0];
    const w0 = 34, pts = [[top[0] - w0 * 2.2, top[1]], [top[0] + w0 * 2.2, top[1]], [c[0] + w0 * 1.2, c[1] - 20], [c[0] - w0 * 1.2, c[1] - 20]];
    P.fill(pts, 'y3r1', { noKnock: true });
    P.fill([[top[0] - w0, top[1]], [top[0] + w0, top[1]], [c[0] + w0 * 0.6, c[1] - 20], [c[0] - w0 * 0.6, c[1] - 20]], 'y4r2', { noKnock: true });
    P.halo(c[0], c[1] - 20, 110, ['y2', 'y3r1', 'y4r2', 'y6r3', 'r5y8'], { sq: 0.7 });
    for (let i = -2; i <= 2; i++) Lib.flame(P, c[0] + i * 16, c[1] - 6 + Math.abs(i) * 3, 24, 60 - Math.abs(i) * 10, t + i, { noKnock: i !== 0 });
  },
  chars: [
    { beast: 'bull', h: 80, x: 160, y: 175, z: 40, face: 1, noShadow: 1 },
    ch(LK.elijah, { x: 430, y: 380, face: -1, clip: 'pray', h: 146 }),
    ...[0, 1, 2].map(i => { const pts = []; for (let k = 0; k < 8; k++) { const a = -k / 8 * TAU; pts.push(W(160 + Math.cos(a) * 110, 180 + Math.sin(a) * 90, 0)); } return ch(LK.baal, { h: 132, t0: i * 4.2, speed: 20, walk: 'dance', path: pts }); }),
    ch(LK.isrM, { x: 200, y: 450, face: 1, clip: 'kneel', h: 136 }),
    ch(LK.isrW, { x: 150, y: 400, face: 1, clip: 'kneel', h: 128, t0: 1 }),
    ch(LK.isrOld, { x: 260, y: 500, face: 1, clip: 'pray', h: 134 })
  ]
},
/* 16 · ESTHER */
{
  title: 'Esther devant le roi', book: 'Esther', ch: 5, ref: 'Esther 5:2', refFr: 'Esther 5, 2', fr: 'Et quand il vit la reine Esther debout, elle plut à ses yeux ; il tendit vers elle le sceptre d’or qu’il tenait à la main ; elle s’approcha et baisa le bout du sceptre.', accent: 1, feast: 'Pourim',
  quote: 'And when he saw Esther the queen standing, she pleased his eyes, and he held out toward her the golden sceptre, which he held in his hand and she drew near, and kissed the top of his sceptre.',
  more: ['Suse, capitale perse. Entrer chez le roi sans être appelée, c’est risquer la mort. Esther jeûne trois jours puis se présente dans la cour intérieure. Le sceptre d’or s’abaisse vers elle : elle a la vie sauve, et par elle tout son peuple menacé par le décret d’Aman.',
    'Correspondance : <b>Pourim</b> (14 Adar). On lit la Méguila d’Esther, on couvre de bruit le nom d’Aman, on s’offre des mets et l’on donne aux pauvres. La veille, le jeûne d’Esther (Taanit Esther) rappelle les trois jours qui ont précédé cette audience.'],
  back(P) {
    const L = P.L;
    Lib.platform(P, 'y2r1', 'y4r3k1', { h: 50, strata: [[0, .5, 'y4r3k1'], [.5, 1, 'y4r3k3']], pebbles: false });
    for (let i = 0; i < 9; i++) for (let j = 0; j < 9; j++) { const x = i * 60, y = j * 60; P.fill([P.I(x, y, 0), P.I(x + 60, y, 0), P.I(x + 60, y + 60, 0), P.I(x, y + 60, 0)], (i + j) % 2 ? 'b4y1' : 'y2r1', {}); }
    P.outline([P.I(0, 0, 0), P.I(L, 0, 0), P.I(L, L, 0), P.I(0, L, 0)], 1.2);
    Lib.walls(P, { l: 'y2r1', r: 'y2r1k1', cut: 'y4r3k2' }, { h: 300 });
    for (let i = 0; i < 3; i++) { Lib.archR(P, 90 + i * 150, 70, 80, 170, 'b7k3'); Lib.archL(P, 120 + i * 140, 70, 70, 160, 'b7k3'); }
    for (let i = 0; i < 14; i++) { const p = P.I(100 + (i * 53) % 400, 0.5, 150 + (i * 37) % 80); if ((i * 53) % 400 % 150 < 70) Lib.star(P, p[0], p[1], 3, 'y7'); }
    for (let x = 0; x < L; x += 30) Lib.wallR(P, x, 262, 26, 16, (x / 30) % 2 ? 'r6y4' : 'b6y2', 0.6);
    for (let y = 0; y < L; y += 30) Lib.wallL(P, y, 262, 26, 16, (y / 30) % 2 ? 'r6y4' : 'b6y2', 0.6);
    for (const x of [45, 480]) P.shape([P.I(x - 20, 1, 300), P.I(x + 20, 1, 300), P.I(x + 26, 1, 40), P.I(x + 8, 1, 0), P.I(x - 12, 1, 60)], 'r7b3', 1);
    P.box(40, 150, 0, 150, 200, 20, 'r4y4');
    P.box(60, 170, 20, 130, 160, 14, 'r6b2');
    P.box(80, 210, 34, 40, 90, 55, 'y7r3');
    P.box(64, 205, 34, 20, 100, 150, { t: 'y8r3', l: 'y7r4k1', r: 'y7r4k2' });
    for (const y of [205, 295]) P.cyl(84, y + 5, 34, 7, 175, 'y8r2');
    for (const [x, y] of [[300, 40], [460, 40]]) { P.cyl(x, y, 0, 18, 280, 'y2r1'); P.box(x - 26, y - 26, 280, 52, 52, 20, 'y4r3'); }
    P.shape([P.I(210, 250, 0.5), P.I(520, 250, 0.5), P.I(520, 330, 0.5), P.I(210, 330, 0.5)], 'r7y3', 1);
    for (let i = 0; i < 6; i++) P.line([P.I(230 + i * 50, 262, 1), P.I(230 + i * 50, 318, 1)], 0.8, { ink: 2 });
    Lib.lamp(P, 250, 60, 150); Lib.lamp(P, 60, 470, 140);
    P.box(40, 440, 0, 30, 30, 140, 'y6r3');
  },
  chars: [
    ch(LK.king, { x: 100, y: 255, z: 34, face: 1, clip: 'throne', hold: { n: 'scepter' }, h: 150 }),
    ch(LK.guard, { x: 70, y: 110, face: 1, clip: 'guard', hold: { n: 'spear' }, h: 140 }),
    ch(LK.guard, { x: 90, y: 400, face: 1, clip: 'guard', hold: { n: 'spear' }, h: 140, t0: 1.3 }),
    ch(LK.esther, { h: 136, speed: 22, path: [W(470, 420, 3, 'idle'), W(235, 275, 5, 'kneel', { f: -1 }), W(300, 300, 2, 'idle', { f: -1 })] }),
    ch(LK.maid, { h: 126, speed: 22, t0: -1.2, path: [W(500, 470, 3, 'idle'), W(330, 360, 6, 'idle', { f: -1 }), W(360, 380, 2, 'idle')] })
  ]
}
];
