#!/usr/bin/env python3
"""Vérifie que chaque `quote:` est copiée mot pour mot du Project Gutenberg n° 1609 (Douay-Rheims, AT partie 1).
Le texte est téléchargé une fois dans data/gutenberg-1609.txt."""
import os, re, glob, urllib.request
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TXT = os.path.join(ROOT, 'data', 'gutenberg-1609.txt')
if not os.path.exists(TXT):
    os.makedirs(os.path.dirname(TXT), exist_ok=True)
    urllib.request.urlretrieve('https://www.gutenberg.org/ebooks/1609.txt.utf-8', TXT)
verses, book, cur = {}, None, None
for ln in open(TXT, encoding='utf-8').read().replace('\r', '').split('\n'):
    m = re.match(r'^(.+?) Chapter (\d+)$', ln)
    if m: book, cur = m.group(1), None; continue
    m = re.match(r'^(\d+):(\d+)\. (.*)$', ln)
    if m and book: cur = f'{book} {m.group(1)}:{m.group(2)}'; verses[cur] = m.group(3); continue
    if not ln.strip(): cur = None; continue
    if cur: verses[cur] += ' ' + ln
bad = 0
for f in sorted(glob.glob(os.path.join(ROOT, 'src', '**', '*.js'), recursive=True)):
    src = open(f, encoding='utf-8').read()
    for ref, q in re.findall(r"ref: '([^']+)'.*?quote: '((?:[^'\\]|\\.)*)'", src, re.S):
        q = q.replace("\\'", "'")
        ok = q in verses.get(ref, '') or any(q in v for v in verses.values())
        bad += not ok
        print(('OK  ' if ok else 'FAUX'), os.path.relpath(f, ROOT), ref)
print('\n' + ('Toutes les citations sont exactes.' if not bad else f'{bad} citation(s) à corriger.'))
raise SystemExit(1 if bad else 0)
