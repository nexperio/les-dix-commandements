/* ---- personnages supplémentaires des parachiot ---- */
Object.assign(LK, {
  adamSkin: Object.assign({}, LK.adam, { robe: 'r4y5k3', skirt: 0, len: 'knee', leafy: 0, sleeves: 'short' }),
  eveSkin: Object.assign({}, LK.eve, { robe: 'r4y5k2', len: 'ankle', leafy: 0, sleeves: 'short' }),
  cain: { skin: 'y6r5k1', hs: 'curly', hair: 'k8', beard: 'short', robe: 'r5y4k2', len: 'knee', sleeves: 'short', sash: 'k5', feet: 'bare' },
  abel: { skin: 'y5r4', hs: 'curly', hair: 'r5y4k2', robe: 'y2k1', len: 'knee', sleeves: 'short', sash: 'b5', feet: 'bare' },
  enoch: { old: 1, skin: 'y5r4', hs: 'fringe', hair: 'k1', beard: 'full', bt: 'k1b1', robe: 'y1b1', cloak: 'y3b2', sash: 'y6' },
  son1: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'short', robe: 'b4y3', len: 'knee', sleeves: 'short', sash: 'r6', head: 'cap', ht: 'y2' },
  son2: { skin: 'y5r4k1', hs: 'short', hair: 'k7r2', beard: 'short', robe: 'r5y3k1', len: 'knee', sleeves: 'short', sash: 'b5' },
  sarai: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k7', robe: 'b5r3', len: 'floor', head: 'veil', ht: 'y3r3', sash: 'y7r2' },
  saraiOld: { fem: 1, old: 1, skin: 'y5r4', hs: 'long', hair: 'k2', robe: 'b5r3', len: 'floor', head: 'veil', ht: 'y2', sash: 'y7r2' },
  lot: { skin: 'y5r4k1', hs: 'short', hair: 'k7r2', beard: 'long', robe: 'r6y3k1', cloak: 'y4b3', sash: 'b6', head: 'cloth', ht: 'b3y1', band: 'k6' },
  abram: { skin: 'y5r4k1', hs: 'short', hair: 'k5', beard: 'long', bt: 'k4', robe: 'y2k1', cloak: 'r5b3k1', sash: 'b5', head: 'cloth', ht: 'y2r1', band: 'k6' },
  melchi: { skin: 'y5r4', hs: 'short', hair: 'k3', beard: 'long', bt: 'k2', robe: 'y1b1', trim: 1, cloak: 'r7b4', sash: 'y8', head: 'crown', ht: 'y8r2', sleeves: 'long', wide: 1 },
  hagar: { fem: 1, skin: 'y6r5k2', hs: 'long', hair: 'k8', robe: 'r5y5', len: 'floor', head: 'veil', ht: 'b4y2', sash: 'r7' },
  ishmael: { child: 1, skin: 'y6r5k1', hs: 'curly', hair: 'k8', robe: 'y3r2', len: 'knee', sleeves: 'short', sash: 'r5', feet: 'bare' },
  isaacChild: { child: 1, skin: 'y5r4', hs: 'curly', hair: 'k7r2', robe: 'y1b1', len: 'knee', sleeves: 'short', sash: 'b5', feet: 'bare' },
  visitor: { skin: 'y4r3', hs: 'curly', hair: 'y6r2k2', beard: 'short', bt: 'y6r2k2', robe: 'y1b1', cloak: 'b3k1', sash: 'y6', head: 'cloth', ht: 'y1', band: 'y7' },
  saltWife: { fem: 1, skin: 'y1b1k1', hs: 'long', hair: 'y1b2k1', robe: 'y1b1k1', len: 'floor', head: 'veil', ht: 'b1k1', sash: 'b1k2' },
  lotDau: { fem: 1, skin: 'y5r4', hs: 'long', hair: 'k7r2', robe: 'r5b2', len: 'floor', head: 'veil', ht: 'y3', sash: 'b5' },
  joshua: { skin: 'y6r4k1', hs: 'short', hair: 'k7', beard: 'short', robe: 'r5y3k1', cloak: 'b6k1', sash: 'y7', head: 'helmet', ht: 'y5r3k3', greaves: 'y5r3k3', feet: 'boot' },
  shepherd: { skin: 'y6r4k1', hs: 'curly', hair: 'k8', beard: 'short', robe: 'y4r3k1', len: 'knee', sleeves: 'short', sash: 'b4', head: 'cloth', ht: 'y2', band: 'k6', cloak: 'k3y2' }
});
CLIPS.sulk = { d: 4, k: [{ nU: 30, nL: 112, fU: 24, fL: 116, head: 22, lean: 4, nT: 6, fT: -6 }, { nU: 32, nL: 110, fU: 26, fL: 114, head: 26, lean: 6, nT: 6, fT: -6 }] };
const reuse = (s, o) => Object.assign(Object.create(s), o || {});
