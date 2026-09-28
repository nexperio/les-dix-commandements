# Brief : section « Le Talmud » · dix feuilles

Dix feuilles riso animées, même moteur et même format que les parachiot et que les sections Femmes et Hommes. **Lis d'abord `docs/BRIEF-nouvelles-parachiot.md` puis `docs/BRIEF-femmes.md`** (moteur, format d'une scène, outils, exigences de qualité et de style) et **lis en entier une feuille récente comme modèle direct** : `src/hommes/hommes.js` ou `src/femmes/mitsvot.js`. Tout s'applique ici, sauf ce qui suit.

## Ce qui change pour le Talmud

- **Fichier** : `src/talmud/<id>.js`. **Build** : `python3 tools/build.py <id>` → `talmud/<sortie>.html` (voir `TALMUD` dans `tools/build.py`). Ne lance pas le build complet (`python3 tools/build.py` sans argument) : d'autres feuilles sont écrites en parallèle.
- **Référence** : format de Sefaria, lue par `tools/talmud.py` :
  - Talmud de Babylone, un amoud : `ref: 'Shabbat 31a'` ; `book: 'Chabbat'` (nom français du traité, voir `ORDERS` dans `tools/talmud.py`) ; `ch: 31` (numéro du daf) ; `refFr: 'Chabbat 31a'`.
  - Michna : `ref: 'Mishnah Peah 1:1'` ; `book: 'Péa'` ; `ch: 1` (chapitre) ; `refFr: 'Michna Péa 1, 1'`.
  - Pirké Avot : `ref: 'Pirkei Avot 1:14'` ; `book: 'Avot'` ; `ch: 1` ; `refFr: 'Avot 1, 14'`.
  - Talmud de Jérusalem, une halakha : `ref: 'Jerusalem Talmud Nedarim 9:4'` ; `book: 'Nedarim'` ; `ch: 9` ; `refFr: 'Talmud de Jérusalem, Nedarim 9, 4'`.
  - Les champs d'en-tête s'écrivent **dans cet ordre, sur une ligne** : `title: '…', book: '…', ch: N, ref: '…', refFr: '…', accent: N, feast: null,` (le build et la recherche les lisent par expression régulière).
- **Citation originale `quote`** : un extrait **contigu** (une à trois phrases) du texte hébreu ou araméen, **copié depuis la sortie de `python3 tools/talmud.py '<ref>'`**, jamais écrit de mémoire. Garde les abréviations telles quelles (`א"ל`, `רבש"ע`, `הקב"ה`). Échappe l'apostrophe en `\'`. N'extrais jamais un passage où le Nom divin est écrit en toutes lettres (les formes `ה'`, `ד'`, `הקב"ה` conviennent). Vérifie avec `python3 tools/check_quotes.py src/talmud/<id>.js` : chaque ligne doit être `OK`.
- **Traduction `fr`** : ta propre traduction française, fidèle à l'extrait `quote` (ni plus, ni moins). Développe les abréviations (`א"ל` → « il lui dit »). C'est elle qu'affiche la carte, avec la mention « traduit de l'araméen » ou « traduit de l'hébreu ». Ne recopie aucune traduction publiée : ni Steinsaltz, ni Soncino, ni celle de Sefaria.
- **La carte** affiche automatiquement « Talmud de Babylone · traité Chabbat » (ou Michna, ou Talmud de Jérusalem), puis le lien « Le texte original › » vers `talmud/texte.html`, qui montre l'hébreu avec la citation surlignée. Tu n'as rien à coder pour cela.
- **Commentaire `more`** (2 paragraphes HTML) : le contexte du récit ou de la règle, ce que les maîtres en ont tiré, et au besoin une autre source nommée avec sa référence (Rachi, un autre passage du Talmud, un verset). N'invente rien. En cas de doute, reste général. Nomme les maîtres à la française : Rabbi Akiva, Rabbi Méïr, Rabban Yohanan ben Zakkaï, Rabbi Chimon bar Yohaï, Hillel, Chammaï, Rav, Chmouel, Abaye, Rava, Resh Lakish, Rabbi Yohanan, Rabbi Hanina ben Dossa, Beroura.
- **Préfixe des noms** (personnages `LK.*`, clips `CLIPS.*`, accessoires `PROPS2.*`, décors, fonctions) : celui de la feuille, indiqué plus bas. Aucune collision entre feuilles, ni avec `mt*` ou `mh*`.
- **4 à 12 scènes par feuille** ; vise le nombre donné.
- **`SHEET`** : `{ title: '…', sub: 'Le Talmud · feuille <lettre> · …' }`.

## Représenter les sages

- Époque des Tannaïm et des Amoraïm (Ier au Ve siècle) : longues robes et manteaux, turbans ou calottes de tissu, barbes, sandales. Lampes à huile, rouleaux et tablettes. Pas de livres reliés, sauf dans la feuille א pour la page de Vilna et l'étude d'aujourd'hui, qu'on signale comme telle.
- Les maîtres ont des visages différents : Hillel doux et âgé, Chammaï sévère avec sa règle de bâtisseur, Rabbi Akiva de berger devenu vieux maître, Resh Lakish athlétique.
- Le miracle se montre avec retenue : un halo, une lumière, un nuage (voir `halo` et `cloud` dans les feuilles existantes). Jamais un visage divin, jamais un ange au visage humain détaillé : les anges sont des silhouettes lumineuses.
- Pudeur et dignité : aucune violence montrée. La mort de Rabbi Akiva est une silhouette sereine qui prie, sans supplice. La destruction de Jérusalem se dit par des murs en flammes, au loin. Le Pardès reste un jardin clos lumineux, sans plus.
- **Décors récurrents à créer** (chaque feuille recopie ce qu'elle utilise sous son préfixe) : beit midrash (bancs, pupitres bas, lampes suspendues, étagères de rouleaux), cour du Temple (portiques, autel, bassin), champ et vigne, Jérusalem en pierre dorée, Yavné (vignoble, maison basse), le Jourdain, une grotte avec un caroubier et une source.

---

## Feuille א · `talmud` · « Qu'est-ce que le Talmud ? » · préfixe `tl` · 8 scènes

`SHEET = { title: 'Qu’est-ce que le Talmud ? · La Torah orale', sub: 'Le Talmud · feuille א · la chaîne de la tradition, la Michna, la Guemara, l’étude' }`

1. **La chaîne de la tradition** · `Pirkei Avot 1:1` (« Moïse reçut la Torah du Sinaï et la transmit à Josué… »). Une montagne au fond, une file de silhouettes qui se passent un rouleau de main en main, de Moïse aux « hommes de la Grande Assemblée ».
2. **Moïse dans la classe de Rabbi Akiva** · `Menachot 29b` (Moïse s'assoit au huitième rang et ne comprend pas ; « D'où tiens-tu cela ? — C'est une loi donnée à Moïse au Sinaï » ; son esprit s'apaise). Un beit midrash, Rabbi Akiva qui enseigne, huit rangs d'élèves, Moïse au fond, rayonnant et perplexe.
3. **« Donne-moi Yavné et ses sages »** · `Gittin 56b`. Rabban Yohanan ben Zakkaï devant le général romain Vespasien, sous une tente ; au loin Jérusalem assiégée ; puis Yavné, maison d'étude dans les vignes.
4. **La Michna et le Talmud, mis en ordre** · `Bava Metzia 86a` (« Rabbi et Rabbi Nathan, fin de la Michna ; Rav Achi et Ravina, fin de l'enseignement »). À gauche Rabbi Yehouda HaNassi qui dicte la Michna ; à droite Rav Achi en Babylonie, entouré de scribes.
5. **« Celles-ci et celles-là sont paroles du Dieu vivant »** · `Eruvin 13b`. L'école de Hillel et celle de Chammaï face à face, trois ans de discussion ; une voix céleste (un rayon doré) ; la loi suit Hillel parce que ses élèves étaient humbles et citaient d'abord les paroles de Chammaï.
6. **J'ai appris de mes élèves plus que de tous** · `Taanit 7a` (« J'ai beaucoup appris de mes maîtres, plus encore de mes compagnons, et de mes élèves plus que de tous »). Une étude en havrouta à deux, face à face ; un maître qu'un jeune élève corrige.
7. **La fête de la fin d'un traité** · `Shabbat 118b` (Abaye : quand je voyais un jeune savant achever son traité, je faisais une fête pour les rabbins). Le siyoum : une table, un livre refermé, des coupes levées. Commentaire : le Daf Yomi, une page par jour, 2 711 pages en sept ans et demi ; renvoie à l'index du Talmud.
8. **« Tourne-la et retourne-la »** · `Pirkei Avot 5:22` (Ben Bag Bag : « tourne-la et retourne-la, car tout est en elle »). Ici, l'étude d'aujourd'hui : un grand volume ouvert sur **la page de Vilna** (la Guemara au centre, Rachi du côté de la reliure, Tossafot du côté extérieur, en blocs de lignes dessinées) ; un lecteur, une lampe. Le commentaire explique la page.

## Feuille ב · `zeraim` · « Zeraïm · Semences » · préfixe `tz` · 9 scènes

`SHEET = { title: 'Zeraïm · Semences', sub: 'Le Talmud · feuille ב · premier ordre : la prière, les bénédictions, les récoltes' }`

1. **À partir de quand lit-on le Chema du soir ?** · `Berakhot 2a` (la première Michna du Talmud). Les prêtres qui rentrent chez eux au coucher du soleil pour manger la terouma ; les premières étoiles.
2. **La harpe de David à minuit** · `Berakhot 3b` (une harpe suspendue au-dessus du lit de David ; à minuit le vent du nord en joue et David se lève pour étudier). Chambre de palais, harpe dans la fenêtre, lune.
3. **Hannah, maîtresse de la prière** · `Berakhot 31a` (« seules ses lèvres bougeaient » : on apprend à prier à voix basse). Le sanctuaire de Silo, Hannah qui prie, le prêtre Éli assis près du montant de la porte.
4. **Rabbi Hanina ben Dossa et le serpent venimeux** · `Berakhot 33a` (le serpent mord Rabbi Hanina en prière et meurt ; « ce n'est pas le serpent qui tue, c'est le péché »). Un sentier, le maître absorbé dans sa prière, les élèves qui portent le serpent mort à la maison d'étude.
5. **Rabban Gamliel destitué : on ajoute des bancs** · `Berakhot 28a` (le jour où Rabbi Éléazar ben Azaria est nommé, on ouvre les portes et on ajoute des centaines de bancs). La maison d'étude qui déborde, un gardien qui s'écarte de la porte.
6. **« Je suis une créature, et mon compagnon est une créature »** · `Berakhot 17a` (les sages de Yavné : moi à la ville, lui aux champs ; que l'on fasse beaucoup ou peu, pourvu que le cœur soit tourné vers le ciel). Un savant qui part à l'aube vers la ville, un laboureur vers son champ.
7. **Rabbi Akiva et le Chema, jusqu'au dernier souffle** · `Berakhot 61b` (il prolonge le mot « Un », *e'had*). Silhouette sereine qui prie les yeux fermés, une lumière ; ses élèves à distance ; **aucun supplice montré**.
8. **Les choses qui n'ont pas de mesure** · `Mishnah Peah 1:1` (la péa, le coin du champ, les prémices, la visite au Temple, la bienfaisance, l'étude de la Torah). Un champ de blé moissonné sauf un coin laissé aux pauvres, une veuve et un étranger qui glanent.
9. **Les prémices montent à Jérusalem** · `Mishnah Bikkurim 3:3` (le bœuf devant eux, les cornes plaquées d'or, une couronne d'olivier, la flûte qui joue). Procession joyeuse, paniers de fruits, flûtiste, bœuf aux cornes dorées, portes de Jérusalem.

## Feuille ג · `moed` · « Moed · Temps fixés » · préfixe `tm` · 10 scènes

`SHEET = { title: 'Moed · Temps fixés', sub: 'Le Talmud · feuille ג · deuxième ordre : Chabbat, fêtes et jeûnes' }`

1. **Sur un seul pied** · `Shabbat 31a` (« Ce qui t'est haïssable, ne le fais pas à ton prochain : c'est toute la Torah, le reste est commentaire ; va et étudie »). Un converti debout sur un pied ; Chammaï qui le repousse avec sa règle de bâtisseur ; Hillel qui l'accueille. `feast: null`.
2. **Rabbi Chimon bar Yohaï dans la grotte** · `Shabbat 33b`. La grotte, le caroubier, la source, père et fils enfouis dans le sable jusqu'au cou, qui étudient ; au sortir, le vieil homme qui court avec deux bouquets de myrte pour le Chabbat.
3. **Les deux anges du vendredi soir** · `Shabbat 119b` (un bon et un mauvais ange raccompagnent l'homme de la synagogue ; s'ils trouvent la lampe allumée et la table mise, le bon ange dit « qu'il en soit ainsi la semaine prochaine »). Deux silhouettes lumineuses sur le seuil, la table et les bougies.
4. **Hillel et les Bnei Beteira : laissez faire Israël** · `Pesachim 66a` (« s'ils ne sont pas prophètes, ils sont fils de prophètes » : le couteau piqué dans la laine de l'agneau). Veille de Pessah, des agneaux qui portent chacun un couteau pris dans la laine. `feast: 'Pessah'`.
5. **Trois livres ouverts** · `Rosh Hashanah 16b` (les justes, les méchants, les intermédiaires). Un pupitre céleste avec trois livres ouverts au-dessus d'une ville qui prie ; choffar. `feast: 'Rosh Hashana'`.
6. **Le grand prêtre sort en paix** · `Mishnah Yoma 7:4` (il faisait une fête pour ses amis quand il sortait du sanctuaire en paix). Le soir de Kippour, le grand prêtre en blanc raccompagné par la foule aux flambeaux. `feast: 'Kippour'`.
7. **La joie de puiser l'eau** · `Sukkah 51a` (« qui n'a pas vu la joie de la maison où l'on puise l'eau n'a jamais vu de joie de sa vie »). Grands chandeliers d'or dans la cour du Temple, des hommes qui dansent avec des torches, les Lévites sur les marches avec leurs instruments. `feast: 'Souccot'`.
8. **Honi le traceur de cercles** · `Taanit 23a` (il trace un cercle et jure de ne pas en sortir avant la pluie). Sécheresse, un cercle tracé dans la poussière, Honi au centre, la pluie qui tombe doucement. Commentaire : le caroubier planté pour les petits-enfants (même page).
9. **« Cela aussi est pour le bien »** · `Taanit 21a` (Nahoum Ich Gamzou et le coffret de pierres précieuses changé en terre, qui devient une arme miraculeuse). Un vieil homme sur un âne avec un coffret ; une auberge ; la cour d'un empereur.
10. **Les quatre qui entrèrent au Pardès** · `Chagigah 14b` (« Quatre entrèrent au Pardès… Rabbi Akiva entra en paix et sortit en paix »). Un jardin clos et lumineux, quatre silhouettes à la porte ; une seule en ressort sereine. Rien de plus.

## Feuille ד · `nachim` · « Nachim · Femmes » · préfixe `tn` · 8 scènes

`SHEET = { title: 'Nachim · Femmes', sub: 'Le Talmud · feuille ד · troisième ordre : le mariage, les promesses, la famille' }`

1. **Rabbi Akiva et Rachel** · `Ketubot 63a` (« le mien et le vôtre sont à elle »). Le retour de Rabbi Akiva avec vingt-quatre mille élèves ; Rachel, pauvrement vêtue, qui se prosterne ; les élèves qui veulent l'écarter ; lui qui les arrête.
2. **Les vingt-quatre mille élèves** · `Yevamot 62b` (« douze mille paires d'élèves… ils moururent parce qu'ils ne se traitaient pas avec respect ; puis il enseigna à cinq maîtres du Sud »). Une plaine vide de Guevat à Antipatris, puis cinq maîtres autour de Rabbi Akiva âgé. Commentaire : le deuil du Omer, Lag Baomer.
3. **La servante de Rabbi** · `Ketubot 104a` (elle monte sur le toit, voit la souffrance de Rabbi et jette une jarre pour interrompre la prière des sages). Un toit, une servante qui lâche une jarre, les sages en prière en bas.
4. **Dama ben Netina honore son père** · `Kiddushin 31a` (il refuse une grosse vente pour ne pas réveiller son père endormi sur la clé ; l'année suivante naît une vache rousse). Une maison, un vieil homme endormi, des marchands qui attendent, une génisse rousse dans l'enclos.
5. **La moitié juste, la moitié coupable** · `Kiddushin 40b` (que chacun se voie comme une balance en équilibre : une seule mitsva fait pencher le plateau). Une grande balance sur un marché, un homme qui dépose une pièce dans la main d'un pauvre.
6. **Marcher dans Ses voies** · `Sotah 14a` (« comme Il habille ceux qui sont nus, habille-les ; visite les malades ; console les endeuillés ; enterre les morts »). Quatre petits tableaux dans une rue : un manteau donné, une visite au malade, une consolation, un cortège sobre.
7. **Le berger au regard pur** · `Nedarim 9b` (Chimon le Juste et le jeune berger nazir qui coupe ses boucles pour ne pas s'enorgueillir de son reflet). Une source, un troupeau, un jeune berger aux longues boucles, le grand prêtre qui l'embrasse sur la tête.
8. **Kamtsa et Bar Kamtsa** · `Gittin 55b` (« à cause de Kamtsa et Bar Kamtsa Jérusalem fut détruite »). Un banquet, un homme chassé devant les convives qui se taisent ; au fond, Jérusalem en flammes, **au loin**. Commentaire : la haine gratuite et l'amour gratuit.

## Feuille ה · `nezikin` · « Nezikin · Dommages » · préfixe `tq` · 9 scènes

`SHEET = { title: 'Nezikin · Dommages', sub: 'Le Talmud · feuille ה · quatrième ordre : le droit, la justice, le tribunal' }`

1. **Le bœuf, la fosse, le feu** · `Mishnah Bava Kamma 1:1` (les quatre causes principales de dommage). Un village : un bœuf qui piétine un jardin, une fosse ouverte, un feu qui gagne un champ voisin.
2. **Deux tiennent un talit** · `Mishnah Bava Metzia 1:1` (« je l'ai trouvé, il est à moi »). Deux hommes qui tirent un manteau, un juge assis qui écoute.
3. **« Elle n'est pas dans le ciel »** · `Bava Metzia 59b` (le four d'Akhnaï : le caroubier qui se déplace, le ruisseau qui remonte, les murs qui s'inclinent, la voix céleste ; Rabbi Yehochoua se lève). Garde toutes les images du récit dans une seule scène. Commentaire : Élie rapporte que Dieu sourit, « Mes fils M'ont vaincu ».
4. **Le Sanhédrin en demi-cercle** · `Mishnah Sanhedrin 4:3` (« comme la moitié d'une aire, pour qu'ils se voient les uns les autres »). Soixante et onze juges en hémicycle, deux greffiers.
5. **Qui sauve une vie sauve un monde** · `Mishnah Sanhedrin 4:5` (Adam fut créé seul ; « qui fait périr une seule âme… qui fait vivre une seule âme, c'est comme s'il faisait vivre un monde entier »). Un homme qui tire un autre hors de l'eau ; derrière, une foule d'êtres qui descend de lui, en ombres.
6. **Le renard sur le mont du Temple** · `Makkot 24b` (Rabbi Akiva rit en voyant un renard sortir du Saint des saints). Ruines sur la montagne, un renard, trois sages qui pleurent, Rabbi Akiva qui sourit.
7. **Le Temple d'Hérode** · `Bava Batra 4a` (« qui n'a pas vu l'édifice d'Hérode n'a jamais vu de bel édifice » : pierre verte et blanche, comme les vagues de la mer). Le Temple rebâti, rangées de pierre alternées comme des vagues.
8. **Antonin et Rabbi** · `Avodah Zarah 10b` (l'amitié de l'empereur et de Rabbi Yehouda HaNassi, le tunnel entre leurs maisons). Deux palais reliés par un souterrain ; l'empereur qui porte une lampe.
9. **Le savant avant le grand prêtre** · `Mishnah Horayot 3:8` (un érudit de naissance obscure passe avant un grand prêtre ignorant). Un jeune savant modeste et un grand prêtre en habits d'or, face à une assemblée qui se lève pour l'étude.

## Feuille ו · `avot` · « Pirké Avot » · préfixe `ta` · 10 scènes

`SHEET = { title: 'Pirké Avot · Les maximes des Pères', sub: 'Le Talmud · feuille ו · le traité des Pères, de Chimon le Juste à Rabbi Yehouda HaNassi' }`

Chaque scène illustre la maxime **au premier degré, par une petite histoire visuelle**. `book: 'Avot'`.

1. **Sur trois choses le monde repose** · `Pirkei Avot 1:2` (la Torah, le service, la bienfaisance). Un monde posé sur trois colonnes : un rouleau, un autel, une main tendue.
2. **Fais-toi un maître, acquiers-toi un compagnon** · `Pirkei Avot 1:6`. Un élève devant un maître, deux compagnons qui étudient.
3. **Aimer la paix et la poursuivre** · `Pirkei Avot 1:12` (être des disciples d'Aaron). Aaron qui réconcilie deux hommes.
4. **Si je ne suis pas pour moi, qui le sera ?** · `Pirkei Avot 1:14`. Un homme sur un chemin qui se met en route à l'aube.
5. **Accueille tout homme d'un visage avenant** · `Pirkei Avot 1:15` (Chammaï). Un seuil, un hôte qui accueille un voyageur.
6. **Là où il n'y a pas d'homme, efforce-toi d'être un homme** · `Pirkei Avot 2:5`. Une rue indifférente, un seul qui s'arrête pour relever quelqu'un.
7. **Le crâne sur l'eau** · `Pirkei Avot 2:6` (Hillel voit un crâne flotter : « parce que tu as noyé, on t'a noyé »). Une rive, un fleuve, Hillel qui regarde. Montre-le sobrement, un crâne petit et stylisé.
8. **Il ne t'appartient pas d'achever l'ouvrage** · `Pirkei Avot 2:16` (Rabbi Tarfon). Un mur de pierre en construction, des ouvriers, le soir qui tombe.
9. **Qui est sage ? Qui est fort ?** · `Pirkei Avot 4:1` (Ben Zoma). Quatre petits portraits : celui qui apprend de tout homme, celui qui maîtrise son penchant, celui qui se réjouit de sa part, celui qui honore les autres.
10. **Les âges de la vie** · `Pirkei Avot 5:21` (« à cinq ans l'Écriture, à dix la Michna, à treize les commandements… »). Une frise d'âges de gauche à droite, de l'enfant au vieillard.

## Feuille ז · `kodachim` · « Kodachim · Choses saintes » · préfixe `td` · 9 scènes

`SHEET = { title: 'Kodachim · Choses saintes', sub: 'Le Talmud · feuille ז · cinquième ordre : le Temple et son service' }`

1. **Les gardes du Temple** · `Mishnah Middot 1:1` (en trois lieux les prêtres montent la garde, et les Lévites en vingt et un). Le Temple la nuit, des gardes aux portes avec des torches.
2. **Qui veut enlever la cendre de l'autel ?** · `Mishnah Tamid 1:2` (se lever tôt, s'immerger, le tirage au sort). Aube, prêtres qui s'immergent, l'autel fumant.
3. **De Jéricho on l'entendait** · `Mishnah Tamid 3:8` (de Jéricho on entendait la grande porte, la flûte, le choffar, et l'on sentait l'odeur de l'encens). Jéricho aux palmiers au premier plan, Jérusalem au loin sur la montagne, des filets de son et de fumée qui voyagent.
4. **La bénédiction des prêtres** · `Mishnah Tamid 7:2`. Les prêtres sur les marches, les mains levées, la foule inclinée.
5. **Le cantique du jour** · `Mishnah Tamid 7:4` (le psaume que chantaient les Lévites, un pour chaque jour). Les Lévites sur l'estrade avec harpes et cymbales.
6. **Le bleu comme la mer** · `Menachot 43b` (« pourquoi le bleu plus que toutes les couleurs ? Parce que le bleu ressemble à la mer, la mer au ciel, et le ciel au trône de gloire »). Un fil de tsitsit bleu, la mer, le ciel qui s'étage. L'encre Tekhelet domine.
7. **L'âne de Rabbi Pinhas ben Yaïr** · `Chullin 7a` (l'âne refuse l'orge non prélevée). Une auberge, un âne qui détourne la tête d'une mangeoire, des disciples étonnés.
8. **Beaucoup ou peu, pourvu que le cœur y soit** · `Menachot 110a`. Un riche qui mène un bœuf, un pauvre qui porte une poignée de farine ; la même lumière sur les deux.
9. **Le bélier aux sept voix** · `Mishnah Kinnim 3:6` (vivant il n'a qu'une voix, mort il en a sept : ses cornes deviennent trompettes, ses os flûtes, sa peau tambour, ses boyaux cordes de lyre et de harpe). Un bélier dans un pré, et autour de lui les sept instruments qu'il deviendra.

## Feuille ח · `taharot` · « Taharot · Puretés » · préfixe `tt` · 8 scènes

`SHEET = { title: 'Taharot · Puretés', sub: 'Le Talmud · feuille ח · sixième ordre : le mikvé, la vie, la sainteté' }`

1. **Dix degrés de sainteté** · `Mishnah Kelim 1:6` (« la terre d'Israël est plus sainte que toutes les terres »). Une carte en cercles concentriques : la terre, Jérusalem, le mont du Temple, le Saint des saints au centre.
2. **Le mikvé de quarante séa** · `Mishnah Mikvaot 1:7`. Un bassin creusé dans la roche, des marches, une eau de pluie ; aucun personnage dévêtu.
3. **La vache rousse et les enfants** · `Mishnah Parah 3:2` (des enfants nés dans la pureté, montés sur des bœufs, puisent l'eau de Siloé dans des coupes de pierre). Des bœufs sur des planches, des enfants dessus, la source de Siloé.
4. **Chacun voit les plaies, sauf les siennes** · `Mishnah Negaim 2:5`. Un prêtre qui examine le bras d'un homme ; leçon morale sur le regard porté sur soi.
5. **L'enfant qui apprend toute la Torah** · `Niddah 30b` (une lampe allumée au-dessus de sa tête ; on lui enseigne toute la Torah ; un ange le touche au moment de naître). Montre seulement une lampe et une lumière douce au-dessus d'une femme enceinte endormie, puis un nouveau-né emmailloté. Aucune anatomie.
6. **Le Cantique des cantiques, saint des saints** · `Mishnah Yadayim 3:5` (Rabbi Akiva : « tous les Écrits sont saints, et le Cantique est saint des saints »). Rabbi Akiva qui déroule un rouleau, les sages réunis à Yavné.
7. **Qui étudie les lois chaque jour** · `Niddah 73a` (la dernière page du Talmud de Babylone : « quiconque étudie des lois chaque jour a l'assurance du monde futur »). Des chemins (*halikhot*) qui montent vers une lumière ; un vieil homme qui ferme le dernier volume.
8. **La paix, vase de la bénédiction** · `Mishnah Oktzin 3:12` (la dernière Michna : « le Saint, béni soit-Il, n'a trouvé de vase qui contienne la bénédiction pour Israël que la paix »). Un grand vase d'où déborde la lumière, des familles autour.

## Feuille ט · `maitres` · « Les maîtres » · préfixe `tr` · 9 scènes

`SHEET = { title: 'Les maîtres du Talmud', sub: 'Le Talmud · feuille ט · Tannaïm et Amoraïm, de Hillel à Rav Achi' }`

1. **Hillel sur le toit, dans la neige** · `Yoma 35b` (trop pauvre pour payer l'entrée, il écoute par la lucarne ; on le trouve couvert de neige un matin de Chabbat). La maison d'étude, la lucarne, un homme endormi sous la neige.
2. **Beroura et Rabbi Méïr** · `Berakhot 10a` (« que les péchés disparaissent, pas les pécheurs »). Une maison, Beroura qui parle à Rabbi Méïr, des voisins querelleurs au-dehors.
3. **Rabbi Méïr et Aher** · `Chagigah 15a` (Elicha ben Abouya à cheval un Chabbat, son élève qui marche à côté et l'avertit de la limite du Chabbat). Un chemin, un cavalier et un piéton, une borne.
4. **Resh Lakish saute dans le Jourdain** · `Bava Metzia 84a` (« ta force pour la Torah »). Le Jourdain, Rabbi Yohanan qui se baigne, un colosse qui saute vers lui.
5. **Rabbi Zeira jeûne pour oublier la Babylonie** · `Bava Metzia 85a` (cent jeûnes pour oublier l'étude babylonienne avant de monter en terre d'Israël). Un voyageur entre deux paysages, la Babylonie plate et Israël aux collines.
6. **Abaye et Rabba** · `Rosh Hashanah 18a` (Rabba vécut quarante ans par la Torah, Abaye soixante par la Torah et les actes de bonté). Deux maîtres de la même maison ; Abaye qui distribue.
7. **Les larmes de Rabban Yohanan ben Zakkaï** · `Berakhot 28b` (sur son lit, il pleure devant ses élèves : « deux chemins sont devant moi… »). Une chambre, des élèves, un vieillard qui bénit.
8. **La lampe au vinaigre** · `Taanit 25a` (« Celui qui a dit à l'huile de brûler dira au vinaigre de brûler »). Veille de Chabbat, la fille de Rabbi Hanina ben Dossa, une lampe qui brûle jusqu'à la havdala.
9. **La petite fille qui vainquit Rabbi Yehochoua** · `Eruvin 53b` (un chemin à travers le champ : « est-ce un chemin ? » — « des gens comme toi l'ont tracé »). Un carrefour, une fillette, un maître qui sourit.

## Feuille י · `yerouchalmi` · « Le Talmud de Jérusalem » · préfixe `ty` · 8 scènes

`SHEET = { title: 'Le Talmud de Jérusalem', sub: 'Le Talmud · feuille י · le Yerouchalmi, rédigé en Galilée' }`

Texte : édition Guggenheimer, vocalisée. Copie l'extrait avec ses voyelles depuis `tools/talmud.py`. Commentaire de la première scène : ce qu'est le Yerouchalmi (Tibériade, Césarée, Sepphoris ; plus bref et moins étudié que le Babylonien).

1. **Aime ton prochain : un grand principe** · `Jerusalem Talmud Nedarim 9:4` (Rabbi Akiva ; Ben Azzaï : « ceci est le livre des générations d'Adam » est un principe plus grand encore). Deux maîtres au bord du lac de Tibériade.
2. **La perle de l'âne** · `Jerusalem Talmud Bava Metzia 2:5` (Chimon ben Chetah rend la perle trouvée au cou de l'âne acheté à un Arabe : « béni soit le Dieu des Juifs »). Un marché, un âne, une perle, un marchand qui bénit.
3. **Les gardiens de la ville** · `Jerusalem Talmud Chagigah 1:7` (« ce ne sont pas les soldats, ce sont les maîtres d'école »). Des remparts avec des gardes armés ; les envoyés de Rabbi montrent une petite école.
4. **Rendre compte de ce qu'on n'a pas goûté** · `Jerusalem Talmud Kiddushin 4:12` (l'homme devra rendre compte de tout ce que son œil a vu de permis et dont il n'a pas joui). Un verger aux fruits mûrs, un homme qui cueille et bénit.
5. **Au Sinaï, j'aurais demandé deux bouches** · `Jerusalem Talmud Berakhot 1:2` (Rabbi Chimon bar Yohaï). Le mont Sinaï, un maître debout devant la montagne, les mains ouvertes. Aucun visage déformé.
6. **Chaque génération qui ne le rebâtit pas** · `Jerusalem Talmud Yoma 1:1` (« toute génération où le Temple n'est pas rebâti est considérée comme si elle l'avait détruit »). Les pierres du Temple en ruines, des gens qui posent chacun une pierre.
7. **Bar Kokhba, « l'étoile »** · `Jerusalem Talmud Taanit 4:5` (Rabbi Akiva : « voici le roi Messie » ; Rabbi Yohanan ben Torta : « l'herbe poussera sur tes joues avant que le fils de David vienne »). Béthar sur sa colline, une étoile, deux maîtres qui discutent. Pas de bataille montrée.
8. **Il a accompli en vingt-huit ans** · `Jerusalem Talmud Berakhot 2:8` (éloge funèbre de Rabbi Boun bar Rabbi Hiyya : le roi et les ouvriers, celui qui a travaillé deux heures reçoit le salaire entier). Une vigne, un roi qui se promène avec un ouvrier, les autres ouvriers qui reçoivent leur paie au soir.

---

## Livrer une feuille

1. `python3 tools/check_quotes.py src/talmud/<id>.js` : toutes les lignes sont `OK`.
2. `python3 tools/build.py <id>` : le nombre de scènes est accepté.
3. Captures (voir `tools/shot.js`) : `F=talmud/<sortie>.html node tools/shot.js wait:7000 over shot:<dossier temporaire>/vue.png scene:0 wait:1500 shot:<dossier temporaire>/s1.png scene:1 wait:1500 shot:…` puis ouvre les PNG. `char:<scène>:<perso>:3` cadre un personnage de près. La sortie affiche aussi les erreurs de console. Regarde la vue d'ensemble et chaque scène de près : personnages lisibles, décor riche, rien qui déborde de la cellule, pas d'erreur en console.
4. Ne touche à aucun autre fichier que `src/talmud/<id>.js`. Si le moteur te manque, écris l'accessoire dans ta feuille.
