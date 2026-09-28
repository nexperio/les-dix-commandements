
/* ============================================================
   IMPRESSION : la feuille entière ou une scène, sur fond blanc
   Chaque scène est redessinée à part (décor, personnages à t = 0, premier plan)
   puis mise en page avec sa citation, le verset anglais et le commentaire.
   Le navigateur fait le reste : « Imprimer » ou « Enregistrer au format PDF ».
   ============================================================ */
const printBox = document.getElementById('print'), PRINT_S = 1.1;
/* livres de la seconde partie de la Douay-Rheims (Project Gutenberg n° 1610) */
const GUT2 = /^(Psalms|Proverbs|Ecclesiastes|Canticle|Wisdom|Ecclesiasticus|Isaias|Jeremias|Lamentations|Baruch|Ezechiel|Daniel|Osee|Joel|Amos|Abdias|Jonas|Micheas|Nahum|Habacuc|Sophonias|Aggeus|Zacharias|Malachias|\d Machabees) /;
function printScene(i) {
  const sc = SC[i], d = sc.d, acc = INKS[d.accent].hex, c = makeCanvas(PRINT_S);
  drawSceneLayer(c.getContext('2d'), sc, PRINT_S, 'back', 0, 15, true);
  const sec = document.createElement('section'); sec.className = 'ps'; sec.style.setProperty('--acc', acc);
  const nb = x => x.replace(/ ([:;?!»])/g, ' $1').replace(/« /g, '« ');
  sec.innerHTML = `<header><div class="pk">${SHEET.title} · scène ${i + 1} sur ${SCENES.length}</div><h2>${d.title}</h2><div class="pr">${d.book} · chapitre ${ROMAN(d.ch)}${d.feast ? ' · fête : ' + d.feast : ''}</div></header>` +
    `<div class="pi"></div><blockquote>« ${nb(d.fr || d.quote)} »<cite>${d.refFr || d.ref} · traduit de la Douay-Rheims</cite></blockquote>` +
    `<p class="po">${d.quote.replace(/\s+/g, ' ')}<cite>${d.ref} · Douay-Rheims, Project Gutenberg n° ${GUT2.test(d.ref) ? 1610 : 1609}</cite></p>` +
    (d.brakha ? `<div class="pm pb"><h3>${d.brakha.length > 1 ? 'Bénédictions' : 'Bénédiction'}</h3>${brakhaHTML(d.brakha)}</div>` : '') +
    `<div class="pm"><h3>Commentaire</h3>${d.more.map(p => `<p>${p}</p>`).join('')}</div>`;
  sec.querySelector('.pi').appendChild(c);
  return sec;
}
function buildPrint(only) {
  printBox.innerHTML = '';
  const head = document.createElement('div'); head.className = 'ph';
  head.innerHTML = `<div class="pk">${only === undefined ? 'Feuille à imprimer' : 'Scène à imprimer'}</div><h1>${SHEET.title}</h1>${SHEET.sub ? `<div class="ps2">${SHEET.sub}</div>` : ''}` +
    (only === undefined ? `<ol>${SCENES.map(d => `<li>${d.title} <span>${d.refFr || d.ref}</span></li>`).join('')}</ol>` : '');
  printBox.appendChild(head);
  for (const i of only === undefined ? SCENES.keys() : [only]) printBox.appendChild(printScene(i));
  const foot = document.createElement('div'); foot.className = 'pf';
  foot.textContent = location.hostname ? location.hostname + ' · Une réalisation nexperio.tech' : 'Une réalisation nexperio.tech';
  printBox.appendChild(foot);
  printBox.dataset.only = only === undefined ? '' : only;
}
function printNow(only) { buildPrint(only); requestAnimationFrame(() => requestAnimationFrame(() => print())); }
/* Ctrl+P sans passer par un bouton : la feuille entière */
addEventListener('beforeprint', () => { if (!printBox.childElementCount) buildPrint(); });
addEventListener('afterprint', () => { printBox.innerHTML = ''; });
document.getElementById('printbtn').addEventListener('click', () => printNow());
addEventListener('keydown', e => { if ((e.key === 'p' || e.key === 'P') && !e.metaKey && !e.ctrlKey) printNow(); });
/* lien « Imprimer la scène » dans la carte de chapitre */
const fillCard0 = fillCard;
fillCard = i => {
  fillCard0(i);
  const a = document.createElement('a'); a.className = 'lk lkp'; a.tabIndex = 0; a.textContent = 'Imprimer la scène ›';
  a.onclick = e => { e.stopPropagation(); printNow(i); };
  cardIn.querySelector('.lk').after(a);
};
