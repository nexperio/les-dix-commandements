/* ============================================================
   APPLICATION : feuille, caches par niveau de détail, impression,
   visite guidée, caméra, carte de chapitre
   ============================================================ */
const CELL = 1000, GUT = 90, MARG = 300, COLS = SCENES.length <= 4 ? 2 : SCENES.length <= 6 ? 3 : 4, ROWS = Math.ceil(SCENES.length / COLS);
const SW = MARG * 2 + COLS * CELL + (COLS - 1) * GUT, SH = MARG * 2 + ROWS * CELL + (ROWS - 1) * GUT;
const cellPos = i => [MARG + (i % COLS) * (CELL + GUT), MARG + Math.floor(i / COLS) * (CELL + GUT)];
const cv = document.getElementById('c'), ctx = cv.getContext('2d');
let VW = 0, VH = 0, DPR = 1, S0 = 0.25, SMAX = 2.6;
const cam = { x: SW / 2, y: SH / 2, z: 0.2, vx: 0, vy: 0 };
let fly = null, lastMove = 0, userT = -1e9, cardPinned = false, cardHidden = false, cardScene = -1, needDraw = true;
const SC = SCENES.map((d, i) => { d.id = i; (d.chars || []).forEach(c => c.draw || prepChar(c)); return { d, id: i, lays: new Map(), cur: 0, frame: document.createElement('canvas'), fs: 0, lastTick: -1, stage: [], rev: { t0: 0, done: false }, used: 0 }; });

function resize() {
  DPR = Math.min(window.devicePixelRatio || 1, 2.5); VW = innerWidth; VH = innerHeight;
  let w = Math.round(VW * DPR), h = Math.round(VH * DPR); const mx = 3840 * 2400; if (w * h > mx) { const k = Math.sqrt(mx / (w * h)); w = Math.round(w * k); h = Math.round(h * k); DPR *= k; }
  cv.width = w; cv.height = h;
  SMAX = Math.min(VW, VH) < 700 ? 1.8 : 2.8;
  const fz = fitZ(); S0 = clamp(bucket(fz * DPR * 1.15), 0.18, 1);
  needDraw = true;
}
const fitZ = () => Math.min(VW / (SW * 1.03), VH / (SH * 1.03));
function sceneView(i) {
  const [x, y] = cellPos(i), cw = Math.min(390, VW - 32) + 30;
  let C, sx, sy;
  if (VW >= VH) { C = Math.min(VH * 0.96, Math.max(VW - cw, VW * 0.6)); sx = C <= VW - cw ? cw + (VW - cw) / 2 : VW - C / 2 - 6; sy = VH / 2; }
  else { const chh = VW < 640 ? 250 : 330; C = Math.min(VW * 0.99, (VH - chh) * 0.99); sx = VW / 2; sy = (VH - chh) / 2 + 6; }
  const z = C / CELL;
  return { x: x + CELL / 2 - (sx - VW / 2) / z, y: y + CELL / 2 - (sy - VH / 2) / z, z };
}
function focusScene() {
  const z = cam.z, x0 = cam.x - VW / 2 / z, x1 = cam.x + VW / 2 / z, y0 = cam.y - VH / 2 / z, y1 = cam.y + VH / 2 / z; let best = -1, ba = 0;
  for (let i = 0; i < SCENES.length; i++) { const [x, y] = cellPos(i), w = Math.max(0, Math.min(x1, x + CELL) - Math.max(x0, x)), h = Math.max(0, Math.min(y1, y + CELL) - Math.max(y0, y)), a = w * h / (CELL * CELL); if (a > ba) { ba = a; best = i; } }
  return ba > 0.6 && CELL * z > 0.5 * Math.min(VW, VH) ? best : -1;
}
/* ---------- rendu des calques ---------- */
function drawSceneLayer(g, sc, s, layer, v, mask, withChars) {
  const P = new Painter(g, s, v, sc.id, mask);
  g.setTransform(s, 0, 0, s, 0, 0);
  if (layer === 'back') { g.fillStyle = PAPER; g.fillRect(0, 0, CELL + 4, CELL + 4); P.r = rng(sc.id * 1009 + 1); sc.d.back(P); if (grainPat) { g.globalCompositeOperation = 'multiply'; g.fillStyle = grainPat; g.fillRect(0, 0, CELL + 4, CELL + 4); g.globalCompositeOperation = 'source-over'; } }
  if (withChars) { P.r = rng(sc.id * 77 + 3); drawLive(P, sc, 0); }
  if ((layer === 'front' || withChars) && sc.d.front) { P.r = rng(sc.id * 3001 + 7); sc.d.front(P); }
}
function drawLive(P, sc, t) {
  const d = sc.d, items = [];
  for (const c of d.chars || []) {
    if (c.draw) { items.push({ dp: typeof c.depth === 'function' ? c.depth(t) : c.depth || 0, c }); continue; }
    const st = charState(c, t); items.push({ dp: st.x + st.y + (c.dz || 0), c });
  }
  items.sort((a, b) => a.dp - b.dp);
  if (d.live) d.live(P, t);
  for (const it of items) { if (it.c.draw) it.c.draw(P, t); else renderChar(P, it.c, t); }
  if (d.top) d.top(P, t);
}
function makeCanvas(s) { const c = document.createElement('canvas'); c.width = c.height = Math.ceil(CELL * s); return c; }
const jobs = []; let jobKey = new Set();
function enqueue(sc, s, pri) {
  const key = sc.id + ':' + s; if (jobKey.has(key) || sc.lays.has(s)) return; jobKey.add(key);
  const L = { s, back: [], front: sc.d.front ? [] : null, n: 0 };
  for (let v = 0; v < 3; v++) jobs.push({ sc, s, v, L, pri: pri + v * 0.1, key });
}
function runJobs(budget) {
  const t0 = performance.now();
  while (jobs.length && performance.now() - t0 < budget) {
    jobs.sort((a, b) => a.pri - b.pri); const j = jobs.shift();
    if (j.stage !== undefined) { const c = makeCanvas(j.s), g = c.getContext('2d'); drawSceneLayer(g, j.sc, j.s, 'back', 0, j.mask, true); j.sc.stage[j.stage] = c; continue; }
    const c = makeCanvas(j.s); drawSceneLayer(c.getContext('2d'), j.sc, j.s, 'back', j.v, 15, false); j.L.back[j.v] = c;
    if (j.L.front) { const f = makeCanvas(j.s); drawSceneLayer(f.getContext('2d'), j.sc, j.s, 'front', j.v, 15, false); j.L.front[j.v] = f; }
    if (++j.L.n === 3) { j.sc.lays.set(j.s, j.L); jobKey.delete(j.key); }
    if (j.v === 0) j.sc.pending = j.L;
  }
}
function evict() {
  const hi = []; for (const sc of SC) for (const [s, L] of sc.lays) if (s > S0 && s !== sc.cur) hi.push({ sc, s, u: sc.used });
  let bytes = 0; for (const sc of SC) for (const [s] of sc.lays) bytes += s * s * CELL * CELL * 4 * 7;
  hi.sort((a, b) => a.u - b.u);
  while (bytes > 700e6 && hi.length) { const e = hi.shift(); e.sc.lays.delete(e.s); bytes -= e.s * e.s * CELL * CELL * 4 * 7; }
}
function compose(sc, t, v) {
  let L = sc.lays.get(sc.cur);
  if (!L && sc.pending && sc.pending.s === sc.cur) L = sc.pending;
  if (!L) return false;
  const s = L.s, f = sc.frame, W = Math.ceil(CELL * s);
  if (f.width !== W) { f.width = f.height = W; }
  const g = f.getContext('2d'); g.setTransform(1, 0, 0, 1, 0, 0);
  g.drawImage(L.back[v] || L.back[0], 0, 0);
  g.setTransform(s, 0, 0, s, 0, 0);
  const P = new Painter(g, s, v, sc.id, 15); P.r = rng(sc.id * 77 + 3);
  drawLive(P, sc, t);
  if (L.front) { const fr = L.front[v] || L.front[0]; if (fr) { g.setTransform(1, 0, 0, 1, 0, 0); g.drawImage(fr, 0, 0); } }
  sc.fs = s; return true;
}

/* ---------- impression : chaque encre passe l'une après l'autre ---------- */
const MASKS = [1, 3, 7, 15], PASS = 0.42, START = 0.5, STAG = 0.26;
let revealDone = false, T0 = null;
function queueStages() { SC.forEach((sc, i) => MASKS.forEach((m, k) => jobs.push({ sc, s: S0, stage: k, mask: m, pri: -100 + i * 4 + k }))); }

/* ---------- marques d'imprimeur, témoins d'encre ---------- */
function drawSheet(g, z) {
  // titre imprimé dans la marge haute, encre de galle tramée
  const s = bucket(Math.max(0.05, z)), pt = pats(s), serif = '"Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif';
  g.save(); g.globalCompositeOperation = 'multiply'; g.textAlign = 'center'; g.textBaseline = 'alphabetic';
  let fs = SHEET.sub ? 180 : 215; g.font = 'normal ' + fs + 'px ' + serif; const tw = g.measureText(SHEET.title).width; if (tw > SW * 0.9) { fs *= SW * 0.9 / tw; g.font = 'normal ' + fs + 'px ' + serif; } g.fillStyle = pt[3][10];
  g.fillText(SHEET.title, SW / 2, MARG * (SHEET.sub ? 0.62 : 0.8));
  if (SHEET.sub) { let ss = 54; g.font = 'italic 54px ' + serif; const sw2 = g.measureText(SHEET.sub).width; if (sw2 > SW * 0.92) { ss *= SW * 0.92 / sw2; g.font = 'italic ' + ss + 'px ' + serif; } g.fillStyle = pt[1][10]; g.fillText(SHEET.sub, SW / 2, MARG * 0.9); }
  g.restore();
}
let grainPat = null;
function makeGrain() {
  const c = document.createElement('canvas'); c.width = c.height = 512; const g = c.getContext('2d'); const r = rng(42);
  g.fillStyle = '#fff'; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 9000; i++) { const a = r() * 0.07; g.fillStyle = `rgba(${90 + r() * 40 | 0},${70 + r() * 30 | 0},${50 + r() * 20 | 0},${a})`; g.fillRect(r() * 512, r() * 512, 1 + r() * 1.5, 1 + r() * 1.5); }
  for (let i = 0; i < 160; i++) { g.strokeStyle = `rgba(110,90,60,${0.05 + r() * 0.06})`; g.lineWidth = 0.7; g.beginPath(); const x = r() * 512, y = r() * 512, a = r() * TAU; g.moveTo(x, y); g.quadraticCurveTo(x + Math.cos(a) * 8 + r() * 6, y + Math.sin(a) * 8, x + Math.cos(a) * 16, y + Math.sin(a) * 16); g.stroke(); }
  grainPat = ctx.createPattern(c, 'repeat'); grainPat.setTransform(new DOMMatrix().scaleSelf(0.45));
  const k = 2048 / SW; paperC = document.createElement('canvas'); paperC.width = 2048; paperC.height = Math.round(SH * k);
  const g2 = paperC.getContext('2d'); g2.fillStyle = PAPER; g2.fillRect(0, 0, paperC.width, paperC.height); g2.setTransform(k, 0, 0, k, 0, 0); g2.globalCompositeOperation = 'multiply'; g2.fillStyle = grainPat; g2.fillRect(0, 0, SW, SH);
}
let paperC = null;

/* ---------- carte de chapitre ---------- */
const card = document.getElementById('card'), cardIn = card.querySelector('.in'), cardBg = card.querySelector('canvas');
const ROMAN = n => { const r = [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]; let o = ''; for (const [v, s] of [[100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [30, 'XXX'], [20, 'XX'], ...r]) while (n >= v) { o += s; n -= v; } return o; };
/* bénédictions (champ facultatif `brakha` d'une scène) : hébreu vocalisé, phonétique, traduction, remarque */
const brakhaHTML = b => b.map(x => `<div class="bk">${x.label ? `<div class="bl">${x.label}</div>` : ''}<p class="he" lang="he" dir="rtl">${x.he}</p><p class="ph">${x.ph}</p><p class="tr">${x.fr}</p>${x.note ? `<p class="bn">${x.note}</p>` : ''}</div>`).join('');
/* d'où vient la citation : la Douay-Rheims, ou le Talmud (référence au format de Sefaria, voir tools/talmud.py).
   Pour le Talmud, `texte.html` (dans talmud/) montre l'original hébreu ou araméen de chaque scène. */
const TSRC = { bavli: ['Talmud de Babylone', 'traduit de l’araméen', 'éd. de Vilna'], mishna: ['Michna', 'traduit de l’hébreu', 'éd. Romm, Vilna 1913'], yeru: ['Talmud de Jérusalem', 'traduit de l’araméen', 'éd. Guggenheimer'] };
const srcKind = r => /^Jerusalem Talmud /.test(r) ? 'yeru' : /^(Mishnah |Pirkei Avot )/.test(r) ? 'mishna' : /^\D.* \d+[ab]$/.test(r) ? 'bavli' : null;
const srcOf = d => {
  const k = srcKind(d.ref);
  if (!k) return { kick: `${d.book} · chapitre ${ROMAN(d.ch)}`, tr: 'traduit de la Douay-Rheims' };
  const [name, tr, ed] = TSRC[k];
  return { k, kick: `${name} · traité ${d.book}` + (k === 'mishna' ? ` · chapitre ${ROMAN(d.ch)}` : ''), tr, ed, href: 'texte.html#' + d.ref.replace(/ /g, '_').replace(/:/g, '.') };
};
const cardLink = d => d.brakha ? 'La bénédiction et le commentaire ›' : d.feast ? 'Fête : ' + d.feast + ' ›' : 'Lire le commentaire ›';
function fillCard(i) {
  const d = SCENES[i], acc = INKS[d.accent].hex;
  card.style.setProperty('--acc', acc);
  const nb = x => x.replace(/ ([:;?!»])/g, '\u202F$1').replace(/« /g, '«\u202F'), q = nb(d.fr || d.quote), first = q[0], rest = q.slice(1);
  const so = srcOf(d);
  cardIn.innerHTML = `<div class="kick">${so.kick}</div><h1>${d.title}</h1><div class="orn"><i></i><b></b><i></i></div>` +
    `<p class="q"><span class="dc"><small>«\u202F</small>${first}</span>${rest}\u202F»</p><div class="src">${d.refFr || d.ref} · ${so.tr}</div>` +
    `<a class="lk" tabindex="0">${cardLink(d)}</a>${so.href ? `<a class="lk lko" href="${so.href}">Le texte original ›</a>` : ''}<div class="more">${d.brakha ? brakhaHTML(d.brakha) : ''}${d.more.map(p => `<p>${p}</p>`).join('')}</div>`;
  const lk = cardIn.querySelector('.lk'), more = cardIn.querySelector('.more');
  lk.onclick = e => { e.stopPropagation(); const o = more.classList.toggle('open'); setTimeout(paintCardBg, 750); cardPinned = o; lk.textContent = o ? 'Refermer ‹' : cardLink(d); userT = performance.now() / 1000; };
  requestAnimationFrame(paintCardBg);
}
/* l'étoile de David ferme la carte et ramène à la vue d'ensemble */
function closeCard() { cardPinned = false; card.classList.remove('on'); interact(); flyTo({ x: SW / 2, y: SH / 2, z: fitZ() }, 1.6); }
card.querySelector('.x').addEventListener('click', e => { e.stopPropagation(); closeCard(); });
addEventListener('keydown', e => { if (e.key === 'Escape' && card.classList.contains('on')) closeCard(); });
function paintCardBg() {
  const r = card.getBoundingClientRect(), dp = Math.min(2, window.devicePixelRatio || 1); cardBg.width = Math.max(1, r.width * dp); cardBg.height = Math.max(1, r.height * dp);
  const g = cardBg.getContext('2d'); g.fillStyle = PAPER; g.fillRect(0, 0, cardBg.width, cardBg.height);
  g.globalCompositeOperation = 'multiply'; g.fillStyle = grainPat || '#fff'; g.setTransform(dp * 2, 0, 0, dp * 2, 0, 0); g.fillRect(0, 0, cardBg.width, cardBg.height); g.setTransform(1, 0, 0, 1, 0, 0);
  const acc = getComputedStyle(card).getPropertyValue('--acc').trim() || INKS[1].hex, st = 5 * dp;
  g.fillStyle = acc;
  for (let y = 0; y < cardBg.height; y += st) for (let x = 0; x < cardBg.width; x += st) { const e = Math.min(x, y, cardBg.width - x, cardBg.height - y); if (e > 9 * dp) continue; const rr = st * 0.42 * (1 - e / (9 * dp)); if (rr > 0.2) { g.beginPath(); g.arc(x + st / 2, y + st / 2, rr, 0, TAU); g.fill(); } }
  g.globalCompositeOperation = 'source-over';
}
function showCard(i) {
  if (cardHidden) { card.classList.remove('on'); return; }
  if (i !== cardScene) { cardScene = i; if (i >= 0) { card.classList.remove('on'); fillCard(i); } }
  card.classList.toggle('on', i >= 0);
}

/* ---------- caméra, visite ---------- */
function flyTo(v, dur) {
  const z0 = cam.z, d = Math.hypot(v.x - cam.x, v.y - cam.y), zm = Math.min(z0, v.z);
  const bump = Math.max(0, Math.log(d * zm / Math.min(VW, VH) * 0.9 + 1e-9)) * 0.9;
  fly = { a: { x: cam.x, y: cam.y, z: z0 }, b: v, t0: performance.now() / 1000, dur: dur || clamp(1.6 + Math.log2(1 + d * zm / VW) * 0.7, 1.6, 3.4), bump };
  cam.vx = cam.vy = 0;
}
const tour = { mode: 'reveal', idx: -1, until: 0 };
/* lien direct vers une scène (page de recherche) : feuille.html#scene=4 ouvre la 4e scène et y reste */
const DEEP = (() => { const m = /scene=(\d+)/.exec(location.hash), i = m ? +m[1] - 1 : -1; return i >= 0 && i < SCENES.length ? i : -1; })();
function tourStep(now) {
  if (tour.mode === 'reveal') { if (revealDone && now > tour.until) { tour.mode = 'tour'; goScene(Math.max(0, DEEP), now); if (DEEP >= 0) tour.until = Infinity; } return; }
  if (tour.mode === 'user') { if (!cardPinned && now - userT > 9) { tour.mode = 'tour'; const n = nearestScene(); goScene(n.d < CELL * 0.3 ? (n.i + 1) % SCENES.length : n.i, now); } return; }
  if (fly) return;
  if (now > tour.until) {
    if (tour.idx === SCENES.length - 1) { tour.idx = -2; flyTo({ x: SW / 2, y: SH / 2, z: fitZ() }, 3.2); tour.until = now + 3.2 + 5; return; }
    goScene(tour.idx === -2 ? 0 : tour.idx + 1, now);
  }
}
function goScene(i, now) { tour.idx = i; const v = sceneView(i); flyTo(v); tour.until = now + fly.dur + 9; prefetch(i, v.z); }
function prefetch(i, z) { const sc = SC[i]; const s = clamp(bucket(z * DPR), S0, SMAX); enqueue(sc, s, -10); }
function nearestScene() { let b = { i: 0, d: 1e9 }; for (let i = 0; i < SCENES.length; i++) { const [x, y] = cellPos(i), d = Math.hypot(x + CELL / 2 - cam.x, y + CELL / 2 - cam.y); if (d < b.d) b = { i, d }; } return b; }
function interact() { document.getElementById('help').classList.add('dim'); userT = performance.now() / 1000; if (tour.mode !== 'reveal' || revealDone) tour.mode = 'user'; fly = null; }
const zLim = () => [fitZ() * 0.55, Math.min(VW, VH) / CELL * 5];
function zoomAt(f, sx, sy) { const [a, b] = zLim(), nz = clamp(cam.z * f, a, b); const wx = cam.x + (sx - VW / 2) / cam.z, wy = cam.y + (sy - VH / 2) / cam.z; cam.z = nz; cam.x = wx - (sx - VW / 2) / nz; cam.y = wy - (sy - VH / 2) / nz; needDraw = true; }

/* ---------- entrées ---------- */
const helpEl = document.getElementById('help');
if (matchMedia('(pointer: coarse)').matches) helpEl.innerHTML = '<b>Double-tap</b> sur une scène pour y entrer · <b>glisser</b> pour se déplacer · <b>pincer</b> pour zoomer';
const ptrs = new Map(); let pinch = null, lastTap = 0;
cv.addEventListener('pointerdown', e => { cv.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY, t: performance.now() }); interact(); cam.vx = cam.vy = 0; if (ptrs.size === 2) { const [p, q] = [...ptrs.values()]; pinch = { d: Math.hypot(p.x - q.x, p.y - q.y), mx: (p.x + q.x) / 2, my: (p.y + q.y) / 2 }; } cv.style.cursor = 'grabbing'; });
cv.addEventListener('pointermove', e => {
  const p = ptrs.get(e.pointerId); if (!p) return;
  const dx = e.clientX - p.x, dy = e.clientY - p.y, now = performance.now(), dt = Math.max(1, now - p.t);
  p.x = e.clientX; p.y = e.clientY; p.t = now; interact();
  if (ptrs.size === 1) { cam.x -= dx / cam.z; cam.y -= dy / cam.z; cam.vx = lerp(cam.vx, -dx / cam.z / dt * 1000, 0.5); cam.vy = lerp(cam.vy, -dy / cam.z / dt * 1000, 0.5); }
  else if (ptrs.size === 2 && pinch) { const [a, b] = [...ptrs.values()], d = Math.hypot(a.x - b.x, a.y - b.y), mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2; cam.x -= (mx - pinch.mx) / cam.z; cam.y -= (my - pinch.my) / cam.z; zoomAt(d / pinch.d, mx, my); pinch = { d, mx, my }; }
  needDraw = true;
});
const up = e => { ptrs.delete(e.pointerId); if (ptrs.size < 2) pinch = null; if (!ptrs.size) cv.style.cursor = 'grab'; if (performance.now() - (lastTap || 0) < 300 && e.pointerType === 'touch') dbl(e.clientX, e.clientY); if (e.pointerType === 'touch') lastTap = performance.now(); };
cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
cv.addEventListener('wheel', e => { e.preventDefault(); interact(); const k = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 400 : 1; zoomAt(Math.exp(-e.deltaY * k * 0.0016), e.clientX, e.clientY); }, { passive: false });
function dbl(sx, sy) { const wx = cam.x + (sx - VW / 2) / cam.z, wy = cam.y + (sy - VH / 2) / cam.z; for (let i = 0; i < SCENES.length; i++) { const [x, y] = cellPos(i); if (wx >= x && wx <= x + CELL && wy >= y && wy <= y + CELL) { interact(); const v = sceneView(i); flyTo(v); prefetch(i, v.z); return; } } }
cv.addEventListener('dblclick', e => dbl(e.clientX, e.clientY));
addEventListener('keydown', e => {
  const k = e.key, step = 0.3 * Math.min(VW, VH) / cam.z;
  if (k === 'c' || k === 'C') { cardHidden = !cardHidden; showCard(cardHidden ? -1 : cardScene); if (!cardHidden) cardScene = -1; return; }
  if (k === 'ArrowLeft' || k === 'ArrowRight' || k === 'ArrowUp' || k === 'ArrowDown') { interact(); e.preventDefault(); const dx = k === 'ArrowLeft' ? -1 : k === 'ArrowRight' ? 1 : 0, dy = k === 'ArrowUp' ? -1 : k === 'ArrowDown' ? 1 : 0; flyTo({ x: cam.x + dx * step, y: cam.y + dy * step, z: cam.z }, 0.45); }
  if (k === '+' || k === '=') { interact(); flyTo({ x: cam.x, y: cam.y, z: clamp(cam.z * 1.45, ...zLim()) }, 0.45); }
  if (k === '-' || k === '_') { interact(); flyTo({ x: cam.x, y: cam.y, z: clamp(cam.z / 1.45, ...zLim()) }, 0.45); }
  if (k === '0') { interact(); flyTo({ x: SW / 2, y: SH / 2, z: fitZ() }, 1.6); }
});
addEventListener('resize', resize);

/* ---------- boucle ---------- */
let settleT = 0, lastCam = '';
function loop(ms) {
  const now = ms / 1000; if (T0 === null) T0 = now; const t = now - T0;
  const dt = Math.min(0.05, now - (loop.p || now)); loop.p = now;
  // caméra
  if (fly) {
    const u = clamp((now - fly.t0) / fly.dur, 0, 1), e = u < .5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;
    const lz = lerp(Math.log(fly.a.z), Math.log(fly.b.z), e) - fly.bump * Math.sin(Math.PI * u);
    cam.z = Math.exp(lz); cam.x = lerp(fly.a.x, fly.b.x, e); cam.y = lerp(fly.a.y, fly.b.y, e);
    if (u >= 1) fly = null;
  } else if (!ptrs.size && (Math.abs(cam.vx) + Math.abs(cam.vy)) * cam.z > 2) { cam.x += cam.vx * dt; cam.y += cam.vy * dt; const f = Math.exp(-dt * 4.5); cam.vx *= f; cam.vy *= f; }
  else { cam.vx = cam.vy = 0; }
  const [za, zb] = zLim(); cam.z = clamp(cam.z, za * 0.99, zb * 1.01);
  cam.x = clamp(cam.x, -SW * 0.1, SW * 1.1); cam.y = clamp(cam.y, -SH * 0.1, SH * 1.1);
  const ck = cam.x.toFixed(2) + cam.y.toFixed(2) + cam.z.toFixed(5); if (ck !== lastCam) { lastCam = ck; needDraw = true; settleT = now; }
  tourStep(now);
  // révélation d'impression
  if (!revealDone) { let all = true; for (const sc of SC) { if (!sc.rev.done) { const st = START + sc.id * STAG; if (t > st + PASS * 4 && sc.stage[3]) sc.rev.done = true; else all = false; } } if (all) { revealDone = true; tour.until = now + 1.2; } needDraw = true; }
  // visibilité et niveau de détail
  const z = cam.z, hw = VW / 2 / z, hh = VH / 2 / z, sReq = clamp(bucket(z * DPR), S0, SMAX), v = Math.floor(t * 3) % 3, tick = Math.floor(t * 12);
  const vis = [];
  for (const sc of SC) {
    const [x, y] = cellPos(sc.id);
    if (x + CELL < cam.x - hw || x > cam.x + hw || y + CELL < cam.y - hh || y > cam.y + hh) continue;
    vis.push(sc); sc.used = now;
    if (!sc.lays.has(S0)) enqueue(sc, S0, 0);
    if (sReq > S0) enqueue(sc, sReq, 1 + Math.hypot(x + CELL / 2 - cam.x, y + CELL / 2 - cam.y) / CELL);
    const best = sc.lays.has(sReq) ? sReq : [...sc.lays.keys()].filter(s => s <= sReq).sort((a, b) => b - a)[0] || [...sc.lays.keys()].sort((a, b) => a - b)[0];
    const pend = sc.pending && sc.pending.s === sReq && sc.pending.back[0] ? sReq : null;
    const want = pend && !sc.lays.has(sReq) ? pend : best;
    if (want && want !== sc.cur) { sc.cur = want; sc.lastTick = -1; }
  }
  runJobs(revealDone ? 9 : 14);
  if (Math.random() < 0.02) evict();
  const rate = vis.length > 6 ? 8 : 12;
  for (const sc of vis) { const tk = Math.floor(t * rate + sc.id / SCENES.length) + ':' + v; if (sc.rev.done && sc.lastTick !== tk) { if (compose(sc, Math.floor(t * rate + sc.id / SCENES.length) / rate, v)) { sc.lastTick = tk; needDraw = true; } } }
  // carte de chapitre
  const settled = !fly && !ptrs.size && now - settleT > 0.35 && revealDone;
  let ci = settled ? focusScene() : -1;
  if (cardPinned && cardScene >= 0) ci = cardScene;
  if (ci !== (showCard.last ?? -2)) { showCard.last = ci; if (ci < 0) card.classList.remove('on'); else showCard(ci); }
  if (needDraw) { draw(vis, t); needDraw = false; }
  requestAnimationFrame(loop);
}
function draw(vis, t) {
  const W = cv.width, H = cv.height, z = cam.z * DPR, ox = W / 2 - cam.x * z, oy = H / 2 - cam.y * z;
  ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalCompositeOperation = 'source-over'; ctx.fillStyle = '#26211d'; ctx.fillRect(0, 0, W, H);
  ctx.setTransform(z, 0, 0, z, ox, oy); ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
  ctx.fillStyle = 'rgba(0,0,0,0.28)'; ctx.fillRect(22, 30, SW, SH); ctx.fillStyle = 'rgba(0,0,0,0.18)'; ctx.fillRect(10, 14, SW, SH);
  if (paperC) ctx.drawImage(paperC, 0, 0, SW, SH); else { ctx.fillStyle = PAPER; ctx.fillRect(0, 0, SW, SH); }
  drawSheet(ctx, z);
  for (const sc of vis) {
    const [x, y] = cellPos(sc.id);
    if (sc.rev.done) { if (sc.fs) ctx.drawImage(sc.frame, 0, 0, CELL * sc.fs, CELL * sc.fs, x, y, CELL, CELL); continue; }
    const st = START + sc.id * STAG, u = (t - st) / PASS; if (u <= 0) continue;
    const k = Math.min(3, Math.floor(u)), f = u - k;
    if (k > 0 && sc.stage[k - 1]) ctx.drawImage(sc.stage[k - 1], 0, 0, CELL * S0, CELL * S0, x, y, CELL, CELL);
    const im = sc.stage[k]; if (!im) continue;
    const ph = k === 3 && u >= 4 ? 1 : Math.min(1, f * 1.1), hgt = CELL * ph, W2 = CELL * S0;
    if (hgt > 1) ctx.drawImage(im, 0, 0, W2, W2 * ph, x, y, CELL, hgt);
    if (ph < 1) { ctx.fillStyle = 'rgba(40,30,25,0.10)'; ctx.fillRect(x - 10, y + hgt, CELL + 20, 6); }
  }
}
resize(); makeGrain(); cam.z = fitZ(); queueStages();
requestAnimationFrame(loop);
