#!/usr/bin/env python3
"""Vérifie que chaque `quote:` est copiée mot pour mot du Project Gutenberg n° 1609 et 1610 (Douay-Rheims, AT parties 1 et 2).
Les textes sont téléchargés une fois dans data/gutenberg-1609.txt et data/gutenberg-1610.txt.
Les références talmudiques ('Shabbat 31a', 'Mishnah Peah 1:1', 'Pirkei Avot 1:1', 'Jerusalem Talmud Nedarim 9:4')
sont vérifiées contre le texte original de Sefaria (tools/talmud.py), sans voyelles ni ponctuation.

  python3 tools/check_quotes.py                          # tout src/
  python3 tools/check_quotes.py src/parachiot/toledot.js # un seul fichier (la citation doit venir du verset de `ref`)
"""
import os, re, sys, glob, urllib.request
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import talmud
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TXTS = [os.path.join(ROOT, 'data', f'gutenberg-{n}.txt') for n in (1609, 1610)]  # AT partie 1 (Genèse à Job), partie 2 (Psaumes à Machabées)
for TXT in TXTS:
    if not os.path.exists(TXT):
        os.makedirs(os.path.dirname(TXT), exist_ok=True)
        urllib.request.urlretrieve(f'https://www.gutenberg.org/ebooks/{TXT[-8:-4]}.txt.utf-8', TXT)
verses, book, cur = {}, None, None
for ln in ''.join(open(t, encoding='utf-8').read() for t in TXTS).replace('\r', '').split('\n'):
    m = re.match(r'^(.+?) Chapter (\d+)$', ln)
    if m: book, cur = m.group(1), None; continue
    m = re.match(r'^(\d+):(\d+)\. (.*)$', ln)
    if m and book: cur = f'{book} {m.group(1)}:{m.group(2)}'; verses[cur] = m.group(3); continue
    if not ln.strip(): cur = None; continue
    if cur: verses[cur] += ' ' + ln
bad = 0
files = sys.argv[1:] or sorted(glob.glob(os.path.join(ROOT, 'src', '**', '*.js'), recursive=True))
strict = bool(sys.argv[1:])
for f in files:
    src = open(f, encoding='utf-8').read()
    for ref, q in re.findall(r"ref: '([^']+)'.*?quote: '((?:[^'\\]|\\.)*)'", src, re.S):
        q = q.replace("\\'", "'")
        ok = talmud.check(ref, q) if talmud.parse(ref) else q in verses.get(ref, '') or (not strict and any(q in v for v in verses.values()))
        bad += not ok
        print(('OK  ' if ok else 'FAUX'), os.path.relpath(f, ROOT), ref)
print('\n' + ('Toutes les citations sont exactes.' if not bad else f'{bad} citation(s) à corriger.'))
raise SystemExit(1 if bad else 0)
