#!/usr/bin/env python3
"""Documents historiques de la section « L'histoire d'Israël » : télécharge un texte à sa source et le range dans
src/histoire/docs/<clé>.txt. Une scène le cite avec `ref: 'Doc <clé>'` ; tools/check_quotes.py compare `quote` à ce fichier.

  python3 tools/doc.py balfour-1917                       # affiche le texte rangé, à copier tel quel dans `quote`
  python3 tools/doc.py balfour-1917 https://avalon.law.yale.edu/20th_century/balfour.asp \\
      --titre 'Déclaration Balfour' --date '2 novembre 1917' --langue anglais \\
      --de 'His Majesty' --a 'any other country.'         # télécharge, garde le passage de « --de » à « --a » (compris)
  python3 tools/doc.py josephe-guerre <url> … --de 'And now' --a 'the city.' --n 2   # 2e occurrence de « --de »

Le fichier : un en-tête (titre, date, langue, source), une ligne « --- », puis le texte, jamais retouché à la main.
"""
import argparse, html, os, re, sys, urllib.request
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS = os.path.join(ROOT, 'src', 'histoire', 'docs')

def text_of(url):
    raw = urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (feuilles riso ; citation de sources)'}), timeout=60).read()
    t = raw.decode('utf-8', 'replace')
    if re.search(r'<(html|body|p|div)\b', t, re.I):
        t = re.sub(r'(?is)<(script|style|head)\b.*?</\1>', ' ', t)
        t = html.unescape(re.sub(r'<[^>]+>', ' ', t))
    return re.sub(r'\s+', ' ', t).strip()

if __name__ == '__main__':
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('cle'); ap.add_argument('url', nargs='?')
    ap.add_argument('--titre'); ap.add_argument('--date'); ap.add_argument('--langue', default='anglais')
    ap.add_argument('--de'); ap.add_argument('--a'); ap.add_argument('--n', type=int, default=1)
    a = ap.parse_args()
    path = os.path.join(DOCS, a.cle + '.txt')
    if not a.url:
        if not os.path.exists(path): sys.exit(f'{a.cle} : pas encore rangé. Donne son URL.')
        print(open(path, encoding='utf-8').read()); sys.exit()
    if not (a.titre and a.date and a.de and a.a): sys.exit('Il faut --titre, --date, --de et --a.')
    t = text_of(a.url)
    i = -1
    for _ in range(a.n):
        i = t.find(a.de, i + 1)
        if i < 0: sys.exit(f'« {a.de} » introuvable dans la page ({len(t)} caractères).')
    j = t.find(a.a, i)
    if j < 0: sys.exit(f'« {a.a} » introuvable après « {a.de} ».')
    body = t[i:j + len(a.a)]
    if len(body) > 6000: sys.exit(f'Passage trop long ({len(body)} caractères) : resserre --de et --a (6 000 au plus).')
    os.makedirs(DOCS, exist_ok=True)
    open(path, 'w', encoding='utf-8').write(f'titre: {a.titre}\ndate: {a.date}\nlangue: {a.langue}\nsource: {a.url}\n---\n{body}\n')
    print(f'{os.path.relpath(path, ROOT)} · {len(body)} caractères\n\n{body}')
