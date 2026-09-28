# Brief : section « Les femmes et le foyer »

Trois feuilles riso animées, du même format que les feuilles de parachiot. **Lis d'abord `docs/BRIEF-nouvelles-parachiot.md`** : moteur, format d'une scène, outils, exigences de qualité et de style, tout s'applique ici. Seules différences :

- Les fichiers vont dans `src/femmes/<id>.js` (ids : `femmes`, `chalombayit`, `mitsvot`). Build : `python3 tools/build.py <id>` → `femmes/<nom>.html` (noms dans `FEMMES` de `tools/build.py`).
- `SHEET` : `{ title: '<titre> · <sens>', sub: 'Les femmes et le foyer · feuille א|ב|ג · <étendue des textes>' }`.
- Les versets viennent de la Douay-Rheims **parties 1 et 2** : `tools/vv.py` et `tools/check_quotes.py` lisent maintenant aussi Psaumes, Proverbes, Ecclésiaste, Cantique, prophètes. Noms Douay : `Proverbs`, `Canticle of Canticles`, `Ecclesiastes`, `Psalms` (numérotation de la Vulgate, **un de moins** que l'hébreu : Ps 128 hébreu = `Psalms 127`), `1 Kings` = 1 Samuel, `4 Kings` = 2 Rois, `Ezechiel`, `Malachias`.
- Champs `book` / `ch` / `refFr` en usage français et numérotation hébraïque : `book: 'Psaumes', ch: 128, ref: 'Psalms 127:3', refFr: 'Psaumes 128, 3'` ; `book: '1 Samuel', ch: 1, ref: '1 Kings 1:8', refFr: '1 Samuel 1, 8'` ; `book: 'Cantique des cantiques'`, `book: 'Proverbes'`.
- Pas de dates de Chabbat : ces feuilles ne suivent pas le calendrier. `feast` reste réservé à une correspondance réelle (ex. Ruth → Chavouot, Esther → Pourim, bougies de fête → `'Les fêtes'` n'est PAS une fête : utilise `null` ou une fête précise si la scène en montre une).
- Personnages : beaucoup de femmes. Varie les costumes (voile, couleurs, âge, `old`, `child`), crée-les dans ton fichier sous des noms préfixés par ta feuille pour éviter les collisions entre agents : `LK.fmRebecca`, `LK.cbSarah`, `LK.mtMother`…
- Pudeur : scènes dignes et habillées, en particulier pour le mikvé (on montre le bâtiment, les marches, l'eau, une femme qui arrive voilée avec sa serviette, la nuit étoilée ; personne dans l'eau).

## Champ nouveau : `brakha` (feuille ג surtout)

```js
brakha: [
  { label: 'Bénédiction', he: '<hébreu vocalisé>', ph: '<phonétique française>', fr: '<traduction>', note: '<usage, facultatif>' },
  ...
],
```
Placé juste après `more`. Le moteur l'affiche en tête du commentaire dans la carte et dans l'impression. **Recopie les textes ci-dessous tels quels** (hébreu, phonétique, traduction) ; tu peux raccourcir une `note`, jamais changer l'hébreu. Le Nom divin est abrégé à l'écrit (`ה׳`, `אֱלֹקֵינוּ`, `אֱלֹקִים`) et prononcé Adonaï, Élohénou, Élohim dans la phonétique : garde cette convention.

---

## Feuille א · `femmes` · « Les femmes de la Torah · Matriarches, prophétesses, sages »
`sub: 'Les femmes et le foyer · feuille א · de la Genèse à Esther'`. 12 scènes, dans cet ordre :

1. **Ève, mère de tous les vivants** · Genèse 3, 20 · `Genesis 3:20` (hors du jardin : Adam et Ève vêtus de peaux, premier foyer)
2. **Sarah rit** · Genèse 21, 6 · `Genesis 21:6` (Sarah âgée avec Isaac nourrisson, la tente, Abraham, les voisins qui rient avec elle ; fête : Roch Hachana, on lit Genèse 21 le premier jour)
3. **Rébecca au puits** · Genèse 24, 18 · `Genesis 24:18` (la cruche, le serviteur d'Abraham, les dix chameaux qu'elle abreuve)
4. **Léa loue l'Éternel** · Genèse 29, 35 · `Genesis 29:35` (Léa et ses quatre fils, le nom de Juda, d'où vient le mot « juif »)
5. **Rachel exaucée** · Genèse 30, 22 · `Genesis 30:22` (Rachel qui prie puis porte Joseph ; Jacob, les troupeaux)
6. **Chifra et Poua** · Exode 1, 17 · `Exodus 1:17` (les sages-femmes qui sauvent les garçons ; Pharaon au loin ; Rachi : Yokheved et Myriam)
7. **Le tambourin de Myriam** · Exode 15, 20 · `Exodus 15:20` (la mer refermée, les femmes qui dansent ; fête : Pessah, 7e jour)
8. **Les filles de Tselofhad** · Nombres 27, 6 · `Numbers 27:6`, citer « The daughters of Salphaad demand a just thing » (les cinq sœurs devant Moïse, Éléazar et les princes à l'entrée du Tabernacle)
9. **Déborah sous son palmier** · Juges 4, 5 · `Judges 4:5` (la prophétesse qui juge, le peuple qui monte vers elle)
10. **Ruth et Noémi** · Ruth 1, 16 · `Ruth 1:16` (sur la route de Moab à Bethléem ; Orpa qui repart ; fête : Chavouot). Ne reprends pas AT[12] (autre moment).
11. **La prophétesse Houlda** · 2 Rois 22, 14 · `4 Kings 22:14` (les envoyés du roi Josias chez Houlda à Jérusalem, le rouleau retrouvé au Temple)
12. **Esther : « jeûnez pour moi »** · Esther 4, 16 · `Esther 4:16` (Esther et ses servantes qui jeûnent, Mardochée ; fête : Pourim, jeûne d'Esther). Ne reprends pas AT[15] (autre moment).

## Feuille ב · `chalombayit` · « Chalom bayit · La paix du foyer »
`sub: 'Les femmes et le foyer · feuille ב · de la Genèse au Cantique des cantiques'`. 12 scènes :

1. **Une aide face à lui** · Genèse 2, 18 · `Genesis 2:18` (Adam seul parmi les animaux qu'il nomme ; commentaire : « ézer kénégdo », et Genèse 2, 24)
2. **Dieu change les mots pour la paix** · Genèse 18, 13 · `Genesis 18:13` (la tente de Mamré, Sarah à l'entrée, Abraham et les trois visiteurs ; Sarah avait dit « mon seigneur est vieux », Dieu rapporte « je suis vieille » : Rachi et le Talmud, Yevamot 65b, en tirent qu'on peut modifier ses paroles pour la paix)
3. **La tente de Sarah se rallume** · Genèse 24, 67 · `Genesis 24:67` (Isaac fait entrer Rébecca dans la tente de sa mère ; Rachi : la lampe allumée d'un vendredi à l'autre, la bénédiction dans la pâte, la nuée sur la tente revinrent ; lien avec la feuille ג)
4. **Isaac prie face à sa femme** · Genèse 25, 21 · `Genesis 25:21` (Isaac et Rébecca qui prient chacun dans un coin, face à face ; Rachi sur « lenokhah »)
5. **Sept ans comme quelques jours** · Genèse 29, 20 · `Genesis 29:20` (Jacob berger chez Laban, Rachel ; les saisons qui passent)
6. **Les eaux amères** · Nombres 5, 23 · `Numbers 5:23` (le prêtre écrit et efface l'écrit dans l'eau ; le Talmud, Houlin 141a : pour faire la paix entre mari et femme, la Torah laisse effacer le Nom écrit dans la sainteté. Tu peux évoquer Aharon « qui aimait la paix et la poursuivait », Pirké Avot 1, 12)
7. **La première année** · Deutéronome 24, 5 · `Deuteronomy 24:5` (le jeune marié qui reste chez lui pendant que l'armée part ; Rachi : « il réjouira sa femme »)
8. **« Ne suis-je pas pour toi mieux que dix fils ? »** · 1 Samuel 1, 8 · `1 Kings 1:8` (Elkana et Hanna à Chilo, le repas du sacrifice)
9. **La femme sage bâtit sa maison** · Proverbes 14, 1 · `Proverbs 14:1` (une maison en construction, une femme qui l'ordonne, la famille)
10. **Qui trouve une femme trouve le bien** · Proverbes 18, 22 · `Proverbs 18:22`, citer seulement « He that hath found a good wife, hath found a good thing, and shall receive a pleasure from the Lord. » (le mariage sous la houppa ; Talmud, Yevamot 62b : qui vit sans femme vit sans joie, sans bénédiction, sans bien)
11. **Les grandes eaux** · Cantique des cantiques 8, 7 · `Canticle of Canticles 8:7`, citer « Many waters cannot quench charity, neither can the floods drown it » (vignes, fleuve, les deux bien-aimés ; fête : Pessah, on lit le Cantique le Chabbat de Pessah ; Rabbi Akiva : le Cantique est le saint des saints, Yadaïm 3, 5)
12. **Autour de ta table** · Psaumes 128, 3 · `Psalms 127:3` (la table du Chabbat, la vigne sur le mur de la maison, les enfants comme des plants d'olivier ; on chante ce psaume au mariage)

## Feuille ג · `mitsvot` · « Les mitsvot des femmes · Bougies, hallah, mikvé »
`sub: 'Les femmes et le foyer · feuille ג · les gestes du foyer et leurs berakhot'`. 8 scènes, **chacune avec `brakha`** :

1. **La prière du cœur** · 1 Samuel 1, 13 · `1 Kings 1:13`, citer « Now Anna spoke in her heart, and only her lips moved, but her voice was not heard at all. » (Hanna au sanctuaire de Chilo, le prêtre Éli qui l'observe ; le Talmud, Berakhot 31a, apprend de Hanna les lois de la prière : lèvres qui bougent, voix basse)
   - `{ label: 'Au réveil', he: 'מוֹדָה אֲנִי לְפָנֶיךָ, מֶלֶךְ חַי וְקַיָּם, שֶׁהֶחֱזַרְתָּ בִּי נִשְׁמָתִי בְּחֶמְלָה, רַבָּה אֱמוּנָתֶךָ.', ph: 'Moda ani léfanékha, Mélekh \'haï vékayam, chéhé\'hézarta bi nichmati bé\'hemla, raba émounatékha.', fr: 'Je Te rends grâce, Roi vivant et éternel, de m\'avoir rendu mon âme avec bonté ; grande est Ta fidélité.', note: 'Au féminin « moda ani », au masculin « modé ani ». On la dit dès le réveil, avant même de se laver les mains.' }`
2. **La hallah** · Nombres 15, 21 · `Numbers 15:21` (une femme qui pétrit dans sa cuisine, prélève un morceau de pâte, le four ; les pains tressés du Chabbat)
   - `{ label: 'Avant le prélèvement', he: 'בָּרוּךְ אַתָּה ה׳ אֱלֹקֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ לְהַפְרִישׁ חַלָּה.', ph: 'Baroukh Ata Adonaï, Élohénou Mélekh haolam, achère kidéchanou bémitsvotav vétsivanou léhafrich \'hala.', fr: 'Béni sois-Tu, Éternel notre Dieu, Roi du monde, qui nous as sanctifiés par Tes commandements et nous as ordonné de prélever la hallah.', note: 'Certains ajoutent « min haissa » (de la pâte). La bénédiction se dit quand la pâte contient assez de farine, environ 1,2 à 1,7 kg selon les avis : on se renseigne auprès de son rav.' }`
   - `{ label: 'En prélevant', he: 'הֲרֵי זוֹ חַלָּה.', ph: 'Haré zo \'hala.', fr: 'Voici, ceci est la hallah.', note: 'On prélève un morceau gros comme une olive environ ; puisqu\'on ne peut plus le donner au prêtre, on le brûle enveloppé.' }`
3. **Les bougies du Chabbat** · Proverbes 6, 23 · `Proverbs 6:23`, citer « Because the commandment is a lamp, and the law a light » (le vendredi au crépuscule, la mère allume deux bougies, se couvre les yeux, les filles à côté ; la table dressée ; Rachi sur Genèse 24, 67 : la lampe de Sarah)
   - `{ label: 'Allumage', he: 'בָּרוּךְ אַתָּה ה׳ אֱלֹקֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ לְהַדְלִיק נֵר שֶׁל שַׁבָּת.', ph: 'Baroukh Ata Adonaï, Élohénou Mélekh haolam, achère kidéchanou bémitsvotav vétsivanou léhadlik nère chel Chabbat.', fr: 'Béni sois-Tu, Éternel notre Dieu, Roi du monde, qui nous as sanctifiés par Tes commandements et nous as ordonné d\'allumer la lumière du Chabbat.', note: 'Avant le coucher du soleil, à l\'heure du calendrier local. Usage ashkénaze : on allume, on se couvre les yeux, puis on bénit ; beaucoup de Séfarades bénissent avant d\'allumer. À l\'écrit, le Nom est abrégé ; on prononce Adonaï, Élohénou.' }`
4. **Échet ‘haïl, le vendredi soir** · Proverbes 31, 10 · `Proverbs 31:10` (la table du Chabbat, le mari et les enfants qui chantent pour la mère)
   - `{ label: 'Le chant', he: 'אֵשֶׁת חַיִל מִי יִמְצָא, וְרָחֹק מִפְּנִינִים מִכְרָהּ.', ph: 'Échet \'haïl mi yimtsa, véra\'hok mipéninim mikhra.', fr: 'Une femme vaillante, qui la trouvera ? Son prix dépasse de loin celui des perles.', note: 'Premier des vingt-deux versets de Proverbes 31, 10 à 31, un par lettre de l\'alphabet, chantés le vendredi soir avant le kiddouch.' }`
5. **Bénir ses enfants** · Ruth 4, 11 · `Ruth 4:11`, citer « The Lord make this woman who cometh into thy house, like Rachel, and Lia, who built up the house of Israel » (les parents, mains posées sur la tête des enfants, vendredi soir)
   - `{ label: 'Pour une fille', he: 'יְשִׂמֵךְ אֱלֹקִים כְּשָׂרָה, רִבְקָה, רָחֵל וְלֵאָה.', ph: 'Yéssimèkh Élohim kéSarah, Rivka, Ra\'hel véLéa.', fr: 'Que Dieu te rende semblable à Sarah, Rébecca, Rachel et Léa.', note: 'Pour un garçon : « Yéssimkha Élohim kÉfraïm vékhiMénaché », que Dieu te rende semblable à Éphraïm et Manassé (Genèse 48, 20).' }`
   - `{ label: 'Puis, pour tous', he: 'יְבָרֶכְךָ ה׳ וְיִשְׁמְרֶךָ. יָאֵר ה׳ פָּנָיו אֵלֶיךָ וִיחֻנֶּךָּ. יִשָּׂא ה׳ פָּנָיו אֵלֶיךָ וְיָשֵׂם לְךָ שָׁלוֹם.', ph: 'Yévarékhékha Adonaï véyichmérékha. Yaèr Adonaï panav élékha vi\'hounéka. Yissa Adonaï panav élékha véyassèm lékha chalom.', fr: 'Que l\'Éternel te bénisse et te garde. Que l\'Éternel fasse rayonner Sa face vers toi et te soit favorable. Que l\'Éternel tourne Sa face vers toi et te donne la paix.', note: 'La bénédiction des prêtres (Nombres 6, 24 à 26), dite par les parents le vendredi soir avant le kiddouch.' }`
6. **Les bougies de fête** · Lévitique 23, 4 · `Leviticus 23:4` (soir de fête, bougies allumées à partir d'une flamme existante, famille en habits de fête ; si tu montres une fête précise, mets-la en `feast`)
   - `{ label: 'Allumage', he: 'בָּרוּךְ אַתָּה ה׳ אֱלֹקֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ לְהַדְלִיק נֵר שֶׁל יוֹם טוֹב.', ph: 'Baroukh Ata Adonaï, Élohénou Mélekh haolam, achère kidéchanou bémitsvotav vétsivanou léhadlik nère chel Yom Tov.', fr: 'Béni sois-Tu, Éternel notre Dieu, Roi du monde, qui nous as sanctifiés par Tes commandements et nous as ordonné d\'allumer la lumière du jour de fête.', note: 'Si la fête tombe un vendredi soir : « chel Chabbat véchel Yom Tov ». À Yom Kippour : « chel Yom Hakippourim ». Le jour de fête, on allume à partir d\'une flamme déjà allumée.' }`
   - `{ label: 'Le premier soir', he: 'בָּרוּךְ אַתָּה ה׳ אֱלֹקֵינוּ מֶלֶךְ הָעוֹלָם, שֶׁהֶחֱיָנוּ וְקִיְּמָנוּ וְהִגִּיעָנוּ לַזְּמַן הַזֶּה.', ph: 'Baroukh Ata Adonaï, Élohénou Mélekh haolam, chéhé\'héyanou vékiyémanou véhiguianou lazmane hazé.', fr: 'Béni sois-Tu, Éternel notre Dieu, Roi du monde, qui nous as fait vivre, nous as maintenus et nous as fait parvenir jusqu\'à ce moment.', note: 'Beaucoup de femmes la disent à l\'allumage ; dans d\'autres communautés, on l\'entend au kiddouch. Pas le septième soir de Pessah.' }`
7. **Le mikvé** · Ézéchiel 36, 25 · `Ezechiel 36:25`, citer « And I will pour upon you clean water, and you shall be cleansed » (voir « Pudeur » plus haut ; commentaire : Lévitique 15, 28, les sept jours comptés, la pureté familiale, pilier du foyer ; Rabbi Akiva à la fin du traité Yoma, 85b : « l'Éternel est le mikvé d'Israël »)
   - `{ label: 'Immersion', he: 'בָּרוּךְ אַתָּה ה׳ אֱלֹקֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ עַל הַטְּבִילָה.', ph: 'Baroukh Ata Adonaï, Élohénou Mélekh haolam, achère kidéchanou bémitsvotav vétsivanou al hatévila.', fr: 'Béni sois-Tu, Éternel notre Dieu, Roi du monde, qui nous as sanctifiés par Tes commandements et nous as ordonné l\'immersion.', note: 'Le moment varie selon les communautés (avant l\'immersion, ou dans l\'eau après une première immersion) : on suit son usage et les indications de la responsable du mikvé.' }`
8. **La gloire intérieure** · Psaumes 45, 14 · `Psalms 44:14` (une maison vue de l'extérieur, fenêtres éclairées ; à l'intérieur, une femme qui étudie avec ses enfants ; le Talmud applique ce verset à la dignité et à la discrétion)
   - `{ label: 'Le verset', he: 'כָּל כְּבוּדָּה בַת מֶלֶךְ פְּנִימָה.', ph: 'Kol kévouda vat mélekh pénima.', fr: 'Toute la gloire de la fille du roi est à l\'intérieur.', note: 'Psaume 45, 14 dans la numérotation hébraïque (44, 14 dans la Vulgate).' }`
