#!/usr/bin/env python3
"""Affiche des versets du Project Gutenberg n° 1609 et 1610 (Douay-Rheims), à copier tels quels dans `quote`.

  python3 tools/vv.py "Genesis 24:10-20"
  python3 tools/vv.py "Genesis 24"
  python3 tools/vv.py "Proverbs 31:10-31" "Canticle of Canticles 8:6-7"
"""
import os, re, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TXTS = [os.path.join(ROOT, 'data', f'gutenberg-{n}.txt') for n in (1609, 1610)]  # AT partie 1 (Genèse à Job), partie 2 (Psaumes à Machabées)
verses, book, cur = {}, None, None
for ln in ''.join(open(t, encoding='utf-8').read() for t in TXTS).replace('\r', '').split('\n'):
    m = re.match(r'^(.+?) Chapter (\d+)$', ln)
    if m: book, cur = m.group(1), None; continue
    m = re.match(r'^(\d+):(\d+)\. (.*)$', ln)
    if m and book: cur = f'{book} {m.group(1)}:{m.group(2)}'; verses[cur] = m.group(3); continue
    if not ln.strip(): cur = None; continue
    if cur: verses[cur] += ' ' + ln
for arg in sys.argv[1:]:
    m = re.match(r'^(.+?) (\d+)(?::(\d+)(?:-(\d+))?)?$', arg.strip())
    if not m: sys.exit(f'référence illisible : {arg}')
    b, c, v0, v1 = m.group(1), m.group(2), m.group(3), m.group(4)
    lo, hi = (int(v0), int(v1 or v0)) if v0 else (1, 999)
    for v in range(lo, hi + 1):
        k = f'{b} {c}:{v}'
        if k in verses: print(f'{k}\t{verses[k]}')
