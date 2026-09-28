#!/usr/bin/env python3
"""Construit toutes les pages autonomes (un fichier HTML chacune) à la racine du dépôt :
index.html (accueil), ancien-testament.html et parachiot/*.html.

  python3 tools/build.py            # tout
  python3 tools/build.py noach      # une seule paracha
"""
import json, os, re, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
S = lambda *p: os.path.join(ROOT, 'src', *p)
DIST = ROOT  # la racine est servie telle quelle

# ordre de parution : (numéro, id du fichier src/parachiot/<id>.js, nom de sortie)
PARACHIOT = [
    (1, 'haazinu',   '5787-01-haazinou.html'),
    (2, 'vezot',     '5787-02-vezot-haberakha.html'),
    (3, 'bereshit',  '5787-03-bereshit.html'),
    (4, 'noach',     '5787-04-noach.html'),
    (5, 'lekhlekha', '5787-05-lekh-lekha.html'),
    (6, 'vayera',    '5787-06-vayera.html'),
]
ENGINE = ['core.js', 'figures.js', 'lib2.js']
read = lambda p: open(p, encoding='utf-8').read()

def nav_items():
    """Entrées du menu vertical, tirées du tableau PARA de l'index (source unique)."""
    items = [{'mark': '⌂', 'he': 'Accueil', 'fr': 'Toutes les feuilles', 'href': 'index.html', 'ink': 3},
             {'mark': 'AT', 'he': 'L’Ancien Testament', 'fr': 'Seize scènes, une seule feuille', 'href': 'ancien-testament.html', 'ink': 3, 'sep': 1},
             {'mark': '✦', 'he': 'Parachiot 5787', 'fr': 'Les Dix Paroles et l’index', 'href': 'parachiot/index.html', 'ink': 1, 'sep': 1}]
    for m in re.finditer(r"\{ n: (\d+), he: '([^']*)', fr: '([^']*)', date: '([^']*)'(.*?)ink: (\d) \}", read(S('index', 'index.html'))):
        n, he, fr, date, rest, ink = m.groups()
        f = re.search(r"file: '([^']*)'", rest)
        soon = 'soon: 1' in rest
        items.append({'mark': n, 'he': he, 'fr': ('À paraître' if soon else fr) + ' · ' + date.split('·')[-1].replace('Chabbat', '').strip(),
                      'href': None if soon or not f else 'parachiot/' + f.group(1), 'ink': int(ink)})
    return items

def nav_script(cur):
    base = '../' * cur.count('/')
    args = ', '.join(json.dumps(a, ensure_ascii=False) for a in (base, nav_items(), cur))
    return '<script>\n' + read(S('engine', 'menu.js')).replace('/*NAV_ARGS*/', args) + '</script>\n'

def page(title, comment, parts, cur):
    head = read(S('engine', 'head.html')).replace('<!--TITLE-->', title).replace('<!--BASE-->', '../' * cur.count('/')).replace('<!--SCENELIST-->', '<!--\n' + comment + '\n-->')
    js = '\n'.join(read(p) for p in parts)
    return head + js + '\n</script>\n' + nav_script(cur) + '</body>\n</html>\n'

def comment_for(src):
    sh = re.search(r"title: '([^']*)', sub: '([^']*)'", src)
    rows = re.findall(r"title: '((?:[^'\\]|\\.)*)', book: '[^']*', ch: \d+, ref: '[^']*', refFr: '([^']*)'.*?feast: (null|'[^']*')", src)
    out = [f"  {sh.group(1)}\n  {sh.group(2)}\n  Un seul fichier. Canvas 2D. Aucune image, aucune police, aucune bibliothèque.\n  Versets traduits en français depuis la Douay-Rheims (Project Gutenberg n° 1609).\n"]
    for i, (t, r, f) in enumerate(rows, 1):
        out.append(f"  {i}. {t.replace(chr(92), '')}  ({r})" + ('' if f == 'null' else '  fête : ' + f.strip("'")))
    if 'reuse(AT' in src: out.append("  (+ scènes reprises de L'Ancien Testament)")
    return '\n'.join(out) + "\n\n  Commandes : glisser, molette, pincer, double-clic, flèches, + / -, 0, C."

def write(path, html):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    open(path, 'w', encoding='utf-8').write(html)
    print(f'{os.path.relpath(path, ROOT):45s} {os.path.getsize(path):>8,d} octets')

def build_at():
    parts = [S('engine', p) for p in ENGINE] + [S('scenes', 'ancien-testament.js'), S('scenes', 'main-ancien-testament.js'), S('engine', 'app.js')]
    write(os.path.join(DIST, 'ancien-testament.html'), page("L'Ancien Testament, scène par scène", read(S('scenes', 'ancien-testament.liste.txt')), parts, 'ancien-testament.html'))

def build_home():
    html = read(S('accueil', 'index.html')).replace('/*CORE*/', read(S('engine', 'core.js'))).replace('/*ITEMS*/', json.dumps(nav_items(), ensure_ascii=False))
    write(os.path.join(DIST, 'index.html'), html.replace('</body>', nav_script('index.html') + '</body>'))

def build_paracha(pid, out):
    src = read(S('parachiot', pid + '.js'))
    title = re.search(r"title: '([^']*)'", src).group(1)
    parts = [S('engine', p) for p in ENGINE] + [S('scenes', 'ancien-testament.js'), S('scenes', 'personnages.js'), S('parachiot', pid + '.js'), S('engine', 'app.js')]
    write(os.path.join(DIST, 'parachiot', out), page(title, comment_for(src), parts, 'parachiot/' + out))

def build_index():
    html = read(S('index', 'index.html')).replace('/*CORE*/', read(S('engine', 'core.js'))).replace('</body>', nav_script('parachiot/index.html') + '</body>')
    write(os.path.join(DIST, 'parachiot', 'index.html'), html)

if __name__ == '__main__':
    only = sys.argv[1:]
    if not only: build_home(); build_at(); build_index()
    for n, pid, out in PARACHIOT:
        if not only or pid in only: build_paracha(pid, out)
