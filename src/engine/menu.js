/* ============================================================
   MENU VERTICAL DES FEUILLES
   Rail fixé à gauche, commun à toutes les pages : L'Ancien Testament, l'index des parachiot
   et chaque feuille. Se déplie au survol ; sur mobile, un bouton ouvre un tiroir.
   tools/build.py remplace NAV_ARGS par (base relative, entrées, entrée courante).
   ============================================================ */
(function (BASE, ITEMS, CUR) {
  'use strict';
  const INK = ['#F0B21F', '#E0453A', '#2D5BA6', '#2F2729'];
  const css = `
#nav{position:fixed;left:14px;top:50%;transform:translateY(-50%);z-index:50;font-family:"Iowan Old Style","Palatino Linotype",Palatino,"Book Antiqua",Georgia,serif;color:#2F2729;-webkit-user-select:none;user-select:none}
#nav ol{list-style:none;margin:0;padding:8px 6px;background:rgba(244,233,211,.94);box-shadow:0 8px 24px rgba(0,0,0,.32);display:flex;flex-direction:column;gap:3px;max-height:calc(100vh - 40px);overflow:auto;scrollbar-width:none}
#nav li.sep{margin-top:6px;padding-top:7px;border-top:1px solid rgba(47,39,41,.25)}
#nav a,#nav .it{display:flex;align-items:center;gap:10px;text-decoration:none;color:inherit;padding:3px 4px;white-space:nowrap}
#nav .m{flex:none;width:28px;height:28px;display:grid;place-items:center;font-size:14px;color:var(--i);border:1.5px solid var(--i);border-radius:50%;transition:background .2s,color .2s}
#nav .l{max-width:0;overflow:hidden;opacity:0;transition:max-width .35s ease,opacity .25s ease;line-height:1.15}
#nav .l b{display:block;font-weight:normal;font-size:15px}
#nav .l small{display:block;font-style:italic;font-size:12px;opacity:.7}
#nav:hover .l,#nav:focus-within .l,#nav.open .l{max-width:240px;opacity:1;padding-right:8px}
#nav a:hover .m,#nav a:focus-visible .m,#nav a[aria-current] .m{background:var(--i);color:#F4E9D3}
#nav a:focus-visible{outline:1px dashed #2F2729;outline-offset:1px}
#nav a[aria-current] .l b{color:var(--i)}
#nav .soon{opacity:.45;cursor:default}
#navbtn{display:none}
@media (min-width:641px){#card{left:84px;width:min(390px,calc(100vw - 108px))}.sheet{padding-left:84px}}
@media (max-width:640px){
  #nav{top:12px;left:12px;transform:none}
  #navbtn{display:grid;place-items:center;width:42px;height:42px;padding:0;border:0;background:rgba(244,233,211,.94);color:#2F2729;box-shadow:0 6px 18px rgba(0,0,0,.3);font:22px/1 Georgia,serif;cursor:pointer}
  #nav ol{display:none;margin-top:8px;max-height:calc(100vh - 80px)}
  #nav.open ol{display:flex}
  #help{left:66px}
}`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  const nav = document.createElement('nav'); nav.id = 'nav'; nav.setAttribute('aria-label', 'Feuilles');
  const btn = document.createElement('button'); btn.id = 'navbtn'; btn.type = 'button';
  btn.setAttribute('aria-label', 'Menu des feuilles'); btn.setAttribute('aria-expanded', 'false'); btn.textContent = '☰';
  const ol = document.createElement('ol');
  for (const it of ITEMS) {
    const li = document.createElement('li'); if (it.sep) li.className = 'sep';
    const el = document.createElement(it.href ? 'a' : 'span');
    el.className = it.href ? '' : 'it soon'; el.style.setProperty('--i', INK[it.ink]); el.title = it.he + ' · ' + it.fr;
    if (it.href) { el.href = BASE + it.href; if (it.href === CUR) el.setAttribute('aria-current', 'page'); }
    el.innerHTML = `<span class="m">${it.mark}</span><span class="l"><b>${it.he}</b><small>${it.fr}</small></span>`;
    li.appendChild(el); ol.appendChild(li);
  }
  nav.append(btn, ol); document.body.appendChild(nav);
  const setOpen = o => { nav.classList.toggle('open', o); btn.setAttribute('aria-expanded', String(o)); btn.textContent = o ? '×' : '☰'; };
  btn.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
  addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
  addEventListener('pointerdown', e => { if (!nav.contains(e.target)) setOpen(false); });
})(/*NAV_ARGS*/);
