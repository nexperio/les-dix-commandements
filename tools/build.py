#!/usr/bin/env python3
"""Construit toutes les pages autonomes (un fichier HTML chacune) à la racine du dépôt :
index.html (accueil), ancien-testament.html, parachiot/*.html, femmes/*.html et hommes/*.html.

  python3 tools/build.py            # tout
  python3 tools/build.py noach      # une seule paracha (ou une feuille de section : femmes, chalombayit, mitsvot, hommes)
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
    (7, 'hayesarah', '5787-07-haye-sarah.html'),
    (8, 'toledot',   '5787-08-toledot.html'),
    (9, 'vayetse',   '5787-09-vayetse.html'),
    (10, 'vayishlach', '5787-10-vayichlach.html'),
    (11, 'vayeshev', '5787-11-vayechev.html'),
    (12, 'miketz',   '5787-12-mikets.html'),
    (13, 'vayigash', '5787-13-vayigach.html'),
    (14, 'vayechi',  '5787-14-vayehi.html'),
    (15, 'shemot',   '5787-15-chemot.html'),
    (16, 'vaera',    '5787-16-vaera.html'),
    (17, 'bo',       '5787-17-bo.html'),
    (18, 'beshalach', '5787-18-bechalah.html'),
    (19, 'yitro',    '5787-19-yitro.html'),
    (20, 'mishpatim', '5787-20-michpatim.html'),
    (21, 'terumah',  '5787-21-terouma.html'),
    (22, 'tetzaveh', '5787-22-tetsave.html'),
    (23, 'kitisa',   '5787-23-ki-tissa.html'),
    (24, 'vayakhel', '5787-24-vayakhel.html'),
    (25, 'pekudei',  '5787-25-pekoude.html'),
]

# section « Les femmes et le foyer » : (marque du menu, id du fichier src/femmes/<id>.js, nom de sortie, titre, sous-titre, encre)
FEMMES = [
    ('א', 'femmes',      'femmes-de-la-torah.html',  'Les femmes de la Torah', 'Matriarches, prophétesses, sages', 1),
    ('ב', 'chalombayit', 'chalom-bayit.html',        'Chalom bayit',           'La paix du foyer', 2),
    ('ג', 'mitsvot',     'mitsvot-des-femmes.html',  'Les mitsvot des femmes', 'Bougies, hallah, mikvé : les berakhot', 0),
]
# section « Les hommes » : même format, src/hommes/<id>.js
HOMMES = [
    ('א', 'hommes', 'mitsvot-des-hommes.html', 'Les mitsvot des hommes', 'Talit, tefillin, kiddouch : les berakhot', 2),
]
SECTIONS = [('femmes', FEMMES), ('hommes', HOMMES)]
ENGINE = ['core.js', 'figures.js', 'lib2.js']
read = lambda p: open(p, encoding='utf-8').read()

MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']

def nav_items():
    """Entrées du menu vertical, tirées du tableau PARA de l'index (source unique)."""
    items = [{'mark': '⌂', 'he': 'Accueil', 'fr': 'Toutes les feuilles', 'href': 'index.html', 'ink': 3},
             {'mark': 'AT', 'he': 'L’Ancien Testament', 'fr': 'Seize scènes, une seule feuille', 'href': 'ancien-testament.html', 'ink': 3, 'sep': 1}]
    for sec, sheets in SECTIONS:
        for i, (mark, fid, out, he, fr, ink) in enumerate(sheets):
            items.append({'mark': mark, 'he': he, 'fr': fr, 'href': sec + '/' + out, 'ink': ink, 'sec': sec, 'sep': int(i == 0)})
    items.append({'mark': '✦', 'he': 'Parachiot 5787', 'fr': 'Les Dix Paroles et l’index', 'href': 'parachiot/index.html', 'ink': 1, 'sep': 1})
    for m in re.finditer(r"\{ n: (\d+), he: '([^']*)', fr: '([^']*)', date: '([^']*)'(.*?)ink: (\d) \}", read(S('index', 'index.html'))):
        n, he, fr, date, rest, ink = m.groups()
        f = re.search(r"file: '([^']*)'", rest)
        soon = 'soon: 1' in rest
        day = date.split('·')[-1].replace('Chabbat', '').strip()
        d, mo, y = re.match(r'(\d+)\w* (\S+) (\d{4})', day).groups()
        items.append({'mark': n, 'he': he, 'fr': ('À paraître' if soon else fr) + ' · ' + day,
                      'href': None if soon or not f else 'parachiot/' + f.group(1), 'ink': int(ink),
                      'day': f'{y}-{MOIS.index(mo) + 1:02d}-{int(d):02d}', 'date': date, 'sens': fr})
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
    parts = [S('engine', p) for p in ENGINE] + [S('scenes', 'ancien-testament.js'), S('scenes', 'main-ancien-testament.js'), S('engine', 'app.js'), S('engine', 'print.js')]
    write(os.path.join(DIST, 'ancien-testament.html'), page("L'Ancien Testament, scène par scène", read(S('scenes', 'ancien-testament.liste.txt')), parts, 'ancien-testament.html'))

def build_home():
    html = read(S('accueil', 'index.html')).replace('/*CORE*/', read(S('engine', 'core.js'))).replace('/*ITEMS*/', json.dumps(nav_items(), ensure_ascii=False))
    write(os.path.join(DIST, 'index.html'), html.replace('</body>', nav_script('index.html') + '</body>'))

def build_paracha(pid, out, sec='parachiot'):
    src = read(S(sec, pid + '.js'))
    body = src.split('const SCENES', 1)[1]
    n = len(re.findall(r"refFr: '", body)) + len(re.findall(r"reuse\(AT\[\d+\](?![^)]*refFr)", body))
    if not 4 <= n <= 12: sys.exit(f'{pid} : {n} scènes, il en faut entre 4 et 12.')
    title = re.search(r"title: '([^']*)'", src).group(1)
    parts = [S('engine', p) for p in ENGINE] + [S('scenes', 'ancien-testament.js'), S('scenes', 'personnages.js'), S(sec, pid + '.js'), S('engine', 'app.js'), S('engine', 'print.js')]
    write(os.path.join(DIST, sec, out), page(title, comment_for(src), parts, sec + '/' + out))

def build_index():
    html = read(S('index', 'index.html')).replace('/*CORE*/', read(S('engine', 'core.js'))).replace('</body>', nav_script('parachiot/index.html') + '</body>')
    write(os.path.join(DIST, 'parachiot', 'index.html'), html)

if __name__ == '__main__':
    only = sys.argv[1:]
    if not only: build_home(); build_at(); build_index()
    for n, pid, out in PARACHIOT:
        if (not only or pid in only) and os.path.exists(S('parachiot', pid + '.js')): build_paracha(pid, out)
    for sec, sheets in SECTIONS:
        for mark, fid, out, *_ in sheets:
            if (not only or fid in only) and os.path.exists(S(sec, fid + '.js')): build_paracha(fid, out, sec)
