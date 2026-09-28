# Parachiot 5787 · feuilles riso animées

Pages HTML autonomes qui impriment en riso simulée des dioramas isométriques animés de l'Ancien Testament : une grande feuille « L'Ancien Testament » (16 scènes, Genèse à Esther), une feuille par paracha de l'année 5787, un index avec les Dix Paroles et une section « Les femmes et le foyer » (trois feuilles : les femmes de la Torah, le chalom bayit, les mitsvot des femmes avec leurs berakhot) et une section « Les hommes » (une feuille : les mitsvot des hommes et leurs berakhot).

Chaque page construite (`index.html`, `ancien-testament.html`, `parachiot/*.html`, `femmes/*.html` et `hommes/*.html`, à la racine du dépôt) est **un seul fichier** : Canvas 2D, zéro image, zéro police téléchargée, zéro bibliothèque, une seule requête réseau (elle-même). Tout est dessiné en code.

## Démarrage

```bash
python3 tools/build.py          # reconstruit index.html, ancien-testament.html, parachiot/, femmes/ et hommes/
python3 tools/build.py noach    # une seule paracha
python3 tools/check_quotes.py   # vérifie les citations contre les Gutenberg 1609 et 1610
npm i && npm run shot           # capture Playwright (optionnel)
```

Python 3 suffit pour construire. Aucune étape npm n'est nécessaire en production : on sert la racine du dépôt telle quelle.

## Arborescence

```
src/
  engine/
    head.html      gabarit HTML + CSS de la carte de chapitre (<!--TITLE-->, <!--SCENELIST-->)
    core.js        aléatoire seedé, bruit, 4 encres, tuiles de trame, Painter, bibliothèque Lib (décors)
    figures.js     squelette humain, CLIPS de poses, costumes, visages, animaux, trajets en boucle
    lib2.js        décors et accessoires additionnels (arche, tour, puits, autel, pluie, fumée…)
    app.js         feuille, cache par niveau de détail, impression encre par encre, caméra, visite, carte
    print.js       impression sur fond blanc (feuille entière ou une scène) : bouton, touche P, lien dans la carte
    menu.js        menu vertical des feuilles, inliné dans chaque page (entrées tirées de PARA)
  scenes/
    ancien-testament.js       tableau AT : les 16 scènes de la grande feuille (réutilisables)
    main-ancien-testament.js  const SCENES = AT pour la grande feuille
    personnages.js            costumes supplémentaires (LK.*) et helper reuse()
    ancien-testament.liste.txt  commentaire d'en-tête de la grande feuille
  parachiot/<id>.js           une feuille = const SHEET + const SCENES
  femmes/<id>.js              section « Les femmes et le foyer », même format (+ champ brakha)
  hommes/<id>.js              section « Les hommes », même format (+ champ brakha)
  index/index.html            index : Dix Paroles + tableau PARA des feuilles
  accueil/index.html          accueil du site (/*CORE*/ et /*ITEMS*/ remplacés au build)
tools/
  build.py          assemble les pages (ordre des fichiers = ordre d'exécution)
  check_quotes.py   contrôle des citations
  vv.py             affiche des versets Douay-Rheims à recopier dans quote
  shot.js           captures Playwright (F=chemin W= H= DPR=)
index.html          page construite : accueil (menu + accès aux feuilles)
ancien-testament.html  page construite : L'Ancien Testament
parachiot/          pages construites : index des parachiot et une feuille par paracha
femmes/             pages construites : les trois feuilles de la section Femmes
hommes/             pages construites : la feuille de la section Hommes
data/               Douay-Rheims, Gutenberg n° 1609 (Genèse à Job) et n° 1610 (Psaumes à Machabées)
favicon.svg
```

Ordre d'assemblage d'une feuille de paracha : `core.js → figures.js → lib2.js → ancien-testament.js → personnages.js → parachiot/<id>.js → app.js`. Tout partage la même portée globale d'un `<script>` classique : pas de modules, pas d'imports. Le menu vertical (`menu.js`) est ajouté à la fin de chaque page, y compris l'index, dans un second `<script>` ; `build.py` lui passe le chemin relatif vers la racine, les entrées (lues dans `PARA` de `src/index/index.html`) et la page courante.

## Ajouter une paracha

1. Créer `src/parachiot/<id>.js` sur le modèle de `vayera.js` :
   - `const SHEET = { title: 'Nom · sens', sub: 'Paracha de la semaine · Chabbat <date> · <référence>' }`
   - `const SCENES = [ … ]` (4 à 12 scènes, jamais plus de 12, ordre du texte). Une scène : `title, book, ch, ref` (référence Douay, ex. `'Genesis 24:15'`), `refFr`, `accent` (0 à 3), `feast` (ou `null`), `quote` (anglais, **mot pour mot** Gutenberg 1609), `fr` (traduction française affichée), `more` (2 paragraphes HTML), `back(P)`, optionnellement `front(P)`, `live(P,t)`, `top(P,t)`, et `chars`.
   - `reuse(AT[i], {...})` reprend une scène de la grande feuille.
2. L'ajouter à `PARACHIOT` dans `tools/build.py`.
3. Passer son entrée de `PARA` (dans `src/index/index.html`) de « À paraître » à publiée, et ajouter la suivante. Le menu vertical suit automatiquement.
4. `python3 tools/check_quotes.py && python3 tools/build.py`.

## Section « Les femmes et le foyer »

Trois feuilles déclarées dans `FEMMES` de `tools/build.py` (marque du menu, id, sortie, titre, sous-titre, encre) : elles apparaissent dans le menu vertical et en cartes sur l'accueil. Brief complet : `docs/BRIEF-femmes.md`. Une scène peut porter un champ `brakha: [{ label, he, ph, fr, note }]` (hébreu vocalisé, phonétique, traduction, remarque d'usage) : il s'affiche en tête du commentaire et dans l'impression. À l'écrit, le Nom est abrégé (`ה׳`, `אֱלֹקֵינוּ`).

## Section « Les hommes »

Même mécanique, déclarée dans `HOMMES` de `tools/build.py` : une feuille, `src/hommes/hommes.js` → `hommes/mitsvot-des-hommes.html` (talit, tefillin, minyan, Torah, kiddouch, havdala, brit mila, choffar, souccah). Brief et berakhot de référence : `docs/BRIEF-hommes.md`.

## Le moteur en bref

- **Teintes** : chaîne `'y5r2b1k3'` = 50 % Safran, 20 % Écarlate, 10 % Tekhelet, 30 % Encre de galle.
- **Encres** : Safran `#F0B21F` (0°), Écarlate `#E0453A` (75°), Tekhelet `#2D5BA6` (15°), Encre de galle `#2F2729` (45°). Papier `#F4E9D3`.
- **Impression** : chaque forme réserve le papier (knockout) puis pose chaque encre en `multiply`, en motif de points tramés tourné à l'angle de l'encre, avec jitter, manques d'encre et léger défaut de repérage.
- **Trait qui bout** : 3 variantes seedées par scène, affichées à 3 Hz ; personnages recalculés à 12 i/s (8 en vue d'ensemble).
- **Coordonnées** : cellule de 1000 × 1000 unités ; `P.I(x, y, z)` projette le monde isométrique (plateau de 540 × 540) ; personnages `h` ≈ 140.
- **Personnages** : `ch(LK.<costume>, { x, y, z, face, clip, hold: { n, f, nTop }, h, path: [W(x, y, attente, clip)], speed, t0 })`. Les clips sont dans `CLIPS` (figures.js et lib2.js).
- **Contrôles** : glisser, molette, pincer, double-clic, flèches, + / −, 0, C, P (imprimer).
- **Impression / PDF** : bouton « Imprimer · PDF » ou touche P pour la feuille entière (une page de garde, puis une page A4 par scène : illustration redessinée sur blanc, citation française, verset anglais, commentaire) ; « Imprimer la scène » dans la carte pour une seule page. Le PDF s'obtient avec « Enregistrer au format PDF » du navigateur.

## Règles à respecter

- Une page = un fichier (seule exception : le lien vers `favicon.svg`). Pas d'image, pas de data-URI, pas de police, pas de bibliothèque, pas de requête réseau.
- Citations : texte anglais exact du Gutenberg 1609 ou 1610 dans `quote` (Psaumes en numérotation Vulgate : `Psalms 127:3` = Psaume 128, 3), traduction française dans `fr` ; le lancer de `check_quotes.py` doit rester vert.
- Correspondances avec les fêtes : seulement si elles sont réelles et vérifiables ; sinon `feast: null`.
- Pas de tiret cadratin dans les textes.
