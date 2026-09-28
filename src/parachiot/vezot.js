/* PARACHA VEZOT HABERAKHA · Deutéronome 33 et 34 · Simhat Torah, 4 octobre 2026 */
const SHEET = { title: 'Vezot haBerakha · Voici la bénédiction', sub: 'Lue à Simhat Torah · 4 octobre 2026 (3 octobre en Israël) · Deutéronome 33 et 34' };
const SCENES = [
{
  title: 'Moïse bénit les tribus', book: 'Deutéronome', ch: 33, ref: 'Deuteronomy 33:1', refFr: 'Deutéronome 33, 1', accent: 2, feast: 'Simhat Torah',
  quote: 'This is the blessing, wherewith the man of God, Moses, blessed the children of Israel, before his death.',
  fr: 'Voici la bénédiction dont Moïse, l’homme de Dieu, bénit les enfants d’Israël avant sa mort.',
  more: ['Comme Jacob avant lui, Moïse bénit les tribus une à une avant de mourir : Ruben, Juda, Lévi, Benjamin, Joseph, Zabulon et Issachar, Gad, Dan, Nephtali, Aser. Chaque bénédiction dessine une vocation, une terre, un caractère.',
    'Correspondance : <b>Simhat Torah</b>. Cette dernière paracha n’a pas de Chabbat : elle est lue le jour de Simhat Torah, et chacun est appelé à la Torah, jusqu’aux enfants, réunis sous un grand talith.'],
  back(P) {
    Lib.sun(P, 830, 140, 28);
    Lib.platform(P, 'y4r2', 'y4r3k2');
    Lib.rock(P, 150, 150, 0, 56, 36, 'y4r3k2');
    const tones = ['r7', 'b6', 'y8', 'r5b4', 'y6b5', 'r7y5', 'b5y2', 'k6', 'y5r3', 'b7k1', 'r6k2', 'y7b2'];
    for (let i = 0; i < 12; i++) { const a = -0.2 + i / 11 * 1.9, x = 200 + Math.cos(a) * 280, y = 200 + Math.sin(a) * 260; if (x > 530 || y > 530) continue; P.box(x - 2, y - 2, 0, 4, 4, 110, 'r4y5k3', 0.6); const t = P.I(x, y, 110); P.shape([[t[0], t[1]], [t[0] + 30, t[1] + 4], [t[0] + 26, t[1] + 14], [t[0] + 30, t[1] + 24], [t[0], t[1] + 22]], tones[i], 0.8); }
  },
  chars: [
    ch(LK.mosesOld, { x: 150, y: 150, z: 34, face: 1, clip: 'bless', h: 150 }),
    ...[[LK.isrM, 300, 300], [LK.isrW, 350, 250], [LK.isrOld, 280, 400], [LK.isrM2, 400, 350], [LK.priest, 230, 330], [LK.childG, 330, 450], [LK.isrW2, 450, 420], [LK.joshua, 230, 200], [LK.child, 400, 480]].map(([lk, x, y], i) => ch(lk, { x, y, face: -1, clip: i % 3 === 0 ? 'bow' : i % 3 === 1 ? 'lookup' : 'idle', h: lk.child ? 92 : 134, t0: i * 0.6 }))
  ]
},
{
  title: 'Joseph, le taureau premier-né', book: 'Deutéronome', ch: 33, ref: 'Deuteronomy 33:13', refFr: 'Deutéronome 33, 13', accent: 0, feast: 'Simhat Torah',
  quote: 'To Joseph also he said:  Of the blessing of the Lord be his land, of the fruits of heaven, and of the dew, and of the deep that lieth beneath.',
  fr: 'Et à Joseph il dit : Que sa terre soit bénie du Seigneur, des fruits du ciel, de la rosée, et de l’abîme qui s’étend en dessous.',
  more: ['La bénédiction de Joseph est la plus abondante : les fruits du ciel, la rosée, les eaux profondes, les récoltes du soleil et des lunes, les richesses des montagnes antiques. Sa majesté est celle du taureau premier-né, ses cornes celles du buffle : ce sont les multitudes d’Éphraïm et de Manassé.',
    'Correspondance : <b>Simhat Torah</b>. La fête clôt la saison des récoltes de Souccot ; les images de rosée et de fruits de cette bénédiction y trouvent un écho naturel.'],
  back(P) {
    Lib.sun(P, 180, 150, 32); Lib.cloud(P, 760, 140, 170, 34, 'b1');
    Lib.platform(P, 'y4b4', 'r3y5k1', { strata: [[0, .3, 'y5b4k1'], [.3, .6, 'b4y2k1'], [.6, 1, 'b6k2']] });
    for (let i = 0; i < 5; i++) { const c = P.I(540, 80 + i * 90, -48); drawFish(P, c[0], c[1], 12, 1, 'y5b3'); }
    Lib.vines(P, 300, 320, 220, 190, 4);
    for (const [x, y] of [[80, 90], [180, 60], [90, 220]]) Lib.tree(P, x, y, 0, { h: 150, r: 40, can: 'y5b6', fruit: 8, fruitTone: 'y8r4' });
    Lib.field(P, 260, 60, 260, 200, 6);
    const s = P.I(200, 420, 0); P.shape(P.ell(200, 420, 0.5, 40, 30, 18), 'b5y1', 0.9);
  },
  chars: [
    { beast: 'bull', h: 110, x: 190, y: 330, face: 1 },
    { beast: 'calf', h: 80, x: 140, y: 400, face: 1, look: 0 },
    ch(LK.shepherd, { x: 260, y: 440, face: -1, clip: 'lookup', h: 136, hold: { f: 'staffV' } })
  ]
},
reuse(AT[10], { feast: 'Simhat Torah' }),
{
  title: 'Josué rempli de sagesse', book: 'Deutéronome', ch: 34, ref: 'Deuteronomy 34:9', refFr: 'Deutéronome 34, 9', accent: 1, feast: 'Simhat Torah',
  quote: 'And Josue the son of Nun was filled with the spirit of wisdom, because Moses had laid his hands upon him.  And the children of Israel obeyed him, and did as the Lord commanded Moses.',
  fr: 'Et Josué, fils de Noun, fut rempli de l’esprit de sagesse, parce que Moïse lui avait imposé les mains. Et les enfants d’Israël lui obéirent, et firent comme le Seigneur l’avait ordonné à Moïse.',
  more: ['Moïse est mort au pays de Moab, et nul ne connaît son tombeau. Israël le pleure trente jours. Josué, sur qui Moïse a posé les mains, prend la tête du peuple. La Torah se clôt sur un éloge : il ne s’est plus levé en Israël de prophète comme Moïse, que le Seigneur connaissait face à face.',
    'Correspondance : <b>Simhat Torah</b>. Aussitôt ces derniers versets lus, on déroule le rouleau jusqu’au début et l’on reprend « Au commencement ». La fin de la Torah et son premier mot sont lus le même jour, sans interruption.'],
  back(P) {
    Lib.cloud(P, 250, 140, 170, 34, 'b1');
    Lib.platform(P, 'y4r2', 'y4r3k2');
    Lib.mound(P, 90, 90, 90, 150, 'y4r3k3');
    P.fill([P.I(440, 0, 0.5), P.I(500, 0, 0.5), P.I(540, 540, 0.5), P.I(480, 540, 0.5)], 'b5y1', {});
    Lib.tent(P, 40, 380, 80, 70, 60, 'y3r2k1'); Lib.tent(P, 130, 440, 70, 60, 56, 'r4y4k1');
    P.box(250, 130, 0, 60, 40, 34, 'y9r3');
    for (const y of [124, 176]) P.line([P.I(230, y, 30), P.I(330, y, 30)], 2.2);
    for (const s of [-1, 1]) { const c = P.I(280 + s * 12, 150, 34); P.shape([[c[0], c[1]], [c[0] + s * 16, c[1] - 22], [c[0] + s * 22, c[1] - 10]], 'y8r2', 0.8); }
  },
  chars: [
    ch(LK.joshua, { x: 330, y: 250, face: 1, clip: 'point', h: 146, hold: { f: 'spear' } }),
    ch(LK.priest, { x: 240, y: 170, face: 1, clip: 'idle', h: 134 }), ch(LK.priest, { x: 320, y: 160, face: -1, clip: 'idle', h: 134, t0: 1 }),
    ...[[LK.isrM, 400, 330], [LK.isrW, 360, 400], [LK.isrOld, 450, 380], [LK.soldier, 300, 360], [LK.isrM2, 250, 420], [LK.childG, 420, 470]].map(([lk, x, y], i) => ch(lk, { x, y, face: -1, clip: i % 2 ? 'bow' : 'idle', h: lk.child ? 92 : 134, t0: i * 0.5 }))
  ]
}
];
