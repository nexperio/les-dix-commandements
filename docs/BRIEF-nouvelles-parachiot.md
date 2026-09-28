# Brief : feuilles riso des parachiot 5787

Tu écris des feuilles « riso » animées, une par paracha, pour le projet Parachiot 5787 d'Arnaud. Le moteur existe et marche ; tu n'y touches pas. Tu écris uniquement des fichiers `src/parachiot/<id>.js` (un par paracha qui t'est confiée), dans le dépôt `les-dix-commandements`. L'`<id>` et le nom de sortie sont fixés dans `PARACHIOT` de `tools/build.py`.

## À lire d'abord (obligatoire)
- `src/parachiot/vayera.js`, `src/parachiot/noach.js`, `src/parachiot/lekhlekha.js` : modèles exacts du format attendu et du niveau de richesse.
- `src/scenes/ancien-testament.js` (tableau `AT`, 16 scènes : exemples de décors riches) et `src/scenes/personnages.js` (costumes).
- `src/engine/lib2.js` (décors, poses et accessoires additionnels), en diagonale `core.js` (objet `Lib`) et `figures.js` (`CLIPS`, `drawProp`, `BEAST`).

## Format d'un fichier src/parachiot/<id>.js
```js
/* PARACHA <NOM> · <référence> · Chabbat <date> */
Object.assign(LK, { rebecca: {...}, eliezer: {...} });      // costumes propres à cette feuille (facultatif)
Object.assign(CLIPS, { ... });                              // poses nouvelles (facultatif)
Object.assign(PROPS2, { ... });                             // accessoires nouveaux (facultatif)
const SHEET = { title: 'Hayé Sarah · La vie de Sarah', sub: 'Paracha de la semaine · Chabbat 7 novembre 2026 · Genèse 23, 1 à 25, 18' };
const SCENES = [ { ...scène... }, ... ];                    // 4 à 12 scènes, dans l'ordre du texte
```
`SHEET` doit tenir sur une ligne, sous cette forme exacte avec apostrophes simples (le script de build la lit par regex). Pour une paracha double, `sub: 'Parachiot de la semaine · ...'`.

Une scène :
```js
{
  title: 'Rébecca au puits', book: 'Genèse', ch: 24, ref: 'Genesis 24:15', refFr: 'Genèse 24, 15', accent: 2, feast: null,
  quote: '<verset anglais COPIÉ MOT POUR MOT depuis vv.py, doubles espaces compris ; une sous-chaîne continue d\'un seul verset est permise>',
  fr: '<traduction française fidèle de la citation, style biblique sobre>',
  more: ['<paragraphe 1 : le récit, 50 à 90 mots>', '<paragraphe 2 : correspondance avec une fête ou « Pas de fête juive attachée à ce passage. » + un fait traditionnel sûr>'],
  back(P) { ...décor statique... },   // obligatoire
  front(P) { ... },                   // facultatif : premier plan qui passe devant les personnages
  live(P, t) { ... },                 // facultatif : éléments animés sous les personnages (feu, fumée, pluie)
  top(P, t) { ... },                  // facultatif : au-dessus des personnages (cordes, projectiles)
  chars: [ ... ]                      // personnages, animaux, objets animés
}
```
- Les champs `title, book, ch, ref, refFr` doivent apparaître dans cet ordre au début de l'objet (le build les lit par regex), puis `accent` (0 Safran, 1 Écarlate, 2 Tekhelet, 3 galle) et `feast`.
- `reuse(AT[i], { title: '...' })` reprend une scène de la grande feuille si elle illustre exactement ce passage (au plus une par feuille) : 0 Éden, 1 colombe, 2 bélier/ligature, 3 échelle de Jacob, 4 Joseph et la citerne, 5 buisson ardent, 6 passage de la mer, 7 Sinaï, 8 veau d'or, 9 cabanes de Souccot (Lv 23), 10 Nebo, 11 Jéricho, 12 Ruth, 13 David, 14 Carmel, 15 Esther.

## Outils
Toutes les commandes se lancent depuis la racine du dépôt.
- Versets : `python3 tools/vv.py "Genesis 24:10-20"` (noms Douay : Genesis, Exodus, Leviticus, Numbers, Deuteronomy). Copie `quote` depuis cette sortie, jamais de mémoire.
- Vérification : `python3 tools/check_quotes.py src/parachiot/<id>.js` doit afficher uniquement des OK (mode strict : la citation doit venir du verset de `ref`).
- Build : `python3 tools/build.py <id>` écrit `parachiot/5787-NN-<nom>.html`.
- Rendu : `F=parachiot/5787-NN-<nom>.html W=1600 H=1000 node tools/shot.js wait:6500 over wait:400 shot:<dossier temporaire>/<id>_0.png scene:2:1 wait:1800 shot:<dossier temporaire>/<id>_2.png` puis regarde les PNG avec Read. `errors:` doit être vide et `requests: 1`. Regarde au plus 3 captures par paracha (limite d'images), corrige en une passe.
- Vérification de fête : page Hebcal de la paracha, ex. `https://www.hebcal.com/sedrot/chayei-sara-20261107` (WebFetch).

## Moteur : l'essentiel
- Cellule 1000 × 1000 unités. Plateau isométrique 540 × 540 : `P.I(x, y, z)` → point écran ; coin arrière (0,0) en haut, (540,540) en bas. Le ciel occupe le haut de la cellule (y écran 0 à 360).
- Teintes = chaînes d'encre : `'y5r2b1k3'` (y Safran, r Écarlate, b Tekhelet, k galle, 0 à 10). Jamais de RVB. Vert = y+b, orange = y+r, violet = r+b, ombre = +k.
- Painter : `P.shape(pts, tone, lw)`, `P.fill(pts, tone, {noKnock})`, `P.line(pts, w, {ink, lvl, taper})`, `P.box(x,y,z,w,d,h,tone)`, `P.cyl(x,y,z,r,h,tone)`, `P.ell(x,y,z,rx,ry,n)`, `P.disc(cx,cy,r)`, `P.halo(cx,cy,r,[tons du bord vers le centre],{knock,sq})`, `P.r()` = aléatoire seedé (jamais Math.random).
- Lib : platform, walls, wallL, wallR, archR, archL, grass, stones, rock, mound, tree, bumpy, palm, bush, cloud, star, flame, waves, tent, jar, lamp, sun, moon, rainbow, bird, ark, city, well, altar, smoke, rain, tower, vines, field, gate, hedge. Aides globales : `nightSky(P, tone, n)`, `stoneStack`, `fenceRing`, `smooth`, `drawFish`, `drawSnake`, `drawBeast`.
- Personnages : `ch(LK.<costume>, { x, y, z, face: 1|-1, clip, h: 140, hold: { n: 'staff', f: 'etrog', nTop: 'tablets' }, t0, noShadow })` ou en mouvement `path: [W(x, y, attente_s, clip_pendant_attente, {z, f, jump})], speed, walk: 'walk'|'dance'|'climb'|'reap'`. `{ jump: 1 }` sur le dernier point = retour instantané au départ. Animaux : `{ beast: 'camel', h: 110, x, y, face }` ou avec `path`. Objets animés : `{ draw(P, t) {...}, depth: x+y }`.
- Costumes (LK) : adam, eve, noah, noahWife, abraham, isaac, angel, jacob, joseph, bro1, bro2, bro3, ismaelite, moses, mosesOld, isrM, isrM2, isrOld, isrW, isrW2, child, childG, priest, soldier, ruth, boaz, reaper, david, goliath, elijah, baal, esther, king, guard, maid, adamSkin, eveSkin, cain, abel, enoch, son1, son2, sarai, saraiOld, lot, abram, melchi, hagar, ishmael, isaacChild, visitor, saltWife, lotDau, joshua, shepherd. Champs d'un costume : skin, hs (short|curly|long|fringe), hair, beard (short|long|full), bt, robe, len (knee|thigh|ankle|floor), sleeves (none|short|long), wide, sash, cloak, head (cloth|veil|turban|crown|tall|helmet|cap), ht, band, crown, fem, old, child, wings, halo, rays, armor, greaves, feet (bare|sandal|boot), trim, stripes: [tons].
- Poses (CLIPS) : idle, walk, haul, sit, eat, throne, sleep, bound, pray, kneel, point, raise, hold2, smash, dance, blow, carry, reach, offer, glean, reap, sling, climb, guard, knife, wave, hover, stagger, talk, rest, sink, prostrate, hammer, lookup, cradle, fill, bless, sing, bow, lie, still, sulk. `over: 'carry'` superpose les bras d'un clip à une marche.
- Accessoires (hold) : staff, staffV, spear, bigspear, knife, tablets, shofar, scepter, sling, sickle, lulav, etrog, sheaf, branches, fruit, shield, bundle, jarhead, lamb, torch, hammer, plank, bricks, bread, cup, baby, skin, sword, scroll.
- Animaux : sheep, ram, camel, donkey, lion, bull, calf, deer, elephant, giraffe.

## Exigences de qualité
1. Entre 4 et 12 scènes par feuille (jamais plus de 12), chacune un moment visualisable et distinct de la paracha, dans l'ordre du texte, avec un décor riche (plateau + éléments construits + détails) et 2 à 9 personnages ou animaux animés, placés sur le plateau (0 ≤ x, y ≤ 540), sans chevauchement grossier.
2. Personnages reconnaissables par leurs attributs (Rébecca et sa cruche, Ésaü roux et chasseur, Moïse bâton et rayons, Aaron grand prêtre, etc.). Crée les costumes manquants dans ton fichier.
3. Pour les parachiot de lois (Lévitique, Deutéronome) : illustre les lois par des scènes concrètes (le Tabernacle, le grand prêtre, l'autel, le bouc émissaire, la glane laissée aux pauvres, le jubilé, les villes de refuge…).
4. `quote` exact (checkq.py vert). `fr` fidèle. `more` en français clair ; aucun fait inventé ; tu ne cites une tradition (Talmud, midrach, Rachi) que si tu en es sûr, sinon tu décris le texte.
5. `feast` : une fête ou un Chabbat spécial seulement si la correspondance est réelle et vérifiée (ex. la paracha tombe pendant Hanoucca, Chabbat Chekalim/Zakhor/Para/Ha'hodech, Chabbat Hagadol, Chabbat 'Hazon, Chabbat Na'hamou, lecture d'une fête). Sinon `null`.
6. Style d'écriture : pas de tiret cadratin (—), nulle part. Interdits : les tournures « Pas un X. Un Y. », « pas…, pas…, juste… », « pas ci, pas ça mais ça ». Pas de « il semblerait que ».
7. Performance : décor statique dans back(P) ; pas plus de ~9 éléments animés par scène.
8. Ne modifie aucun fichier existant du moteur ou des outils (`src/engine/*`, `src/scenes/*`, `src/index/*`, `src/accueil/*`, `tools/*`) ni les feuilles d'un autre agent. Ne commite rien.

## Rendu final attendu dans ta réponse
Pour chaque paracha : id, nombre de scènes, liste « titre (réf. française, fête) », taille du HTML, et « rendu OK » ou le problème restant. Court.
