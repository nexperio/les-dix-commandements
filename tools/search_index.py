"""Index de recherche : lit les scènes dans les sources JS (sans exécuter le moteur) et en tire
le texte cherchable de chaque carte (titre, référence, verset, commentaire, bénédictions).

Une scène est soit un objet `{ title: '…', book: '…', … }`, soit `reuse(AT[n], { …surcharges })`,
qui reprend une scène de L'Ancien Testament en remplaçant certains champs.
"""
import re

STR = r"'(?:[^'\\]|\\.)*'"
START = re.compile(r"reuse\(AT\[(\d+)\]|title: (" + STR + r"), book:")
TAG = re.compile(r'<[^>]+>')

def unq(s):
    return re.sub(r"\\(u[0-9a-fA-F]{4}|.)", lambda m: chr(int(m.group(1)[1:], 16)) if m.group(1)[0] == 'u' and len(m.group(1)) == 5 else m.group(1), s[1:-1])

def strings_in_list(src, key):
    """Chaînes du tableau `key: [ '…', '…' ]` (premier trouvé), sinon None."""
    m = re.search(key + r": \[", src)
    if not m: return None
    out, i = [], m.end()
    while True:
        s = re.match(r"\s*(" + STR + r")\s*,?", src[i:])
        if not s: return out
        out.append(unq(s.group(1))); i += s.end()

def fields(chunk):
    """Champs d'en-tête d'une scène (ou d'un objet de surcharge)."""
    head = re.split(r"\bmore: \[|\bbrakha: \[|\bback\(|\bchars:", chunk, 1)[0]
    d = {}
    for k in ('title', 'book', 'refFr', 'fr'):
        m = re.search(r"\b" + k + r": (" + STR + ")", head)
        if m: d[k] = unq(m.group(1))
    m = re.search(r"\bch: (\d+)", head)
    if m: d['ch'] = int(m.group(1))
    m = re.search(r"\bfeast: (null|" + STR + ")", head)
    if m: d['feast'] = None if m.group(1) == 'null' else unq(m.group(1))
    more = strings_in_list(chunk, r"\bmore")
    if more is not None: d['more'] = more
    b = re.search(r"\bbrakha: \[(.*?)\n  \]", chunk, re.S)
    if b:
        d['brakha'] = [unq(x) for x in re.findall(r"\b(?:label|ph|fr|note): (" + STR + ")", b.group(1))]
    return d

def scenes(src, at=None):
    """Scènes d'une feuille, dans l'ordre du tableau SCENES (ou AT)."""
    body = re.split(r"const (?:SCENES|AT) = \[", src, 1)[1]
    ms = list(START.finditer(body))
    out = []
    for j, m in enumerate(ms):
        chunk = body[m.start():ms[j + 1].start() if j + 1 < len(ms) else len(body)]
        if m.group(1) is not None:
            d = dict(at[int(m.group(1))]); d.update(fields(chunk[m.end() - m.start():]))
        else:
            d = fields(chunk)
        out.append(d)
    return out

def record(sheet, href, i, d):
    clean = lambda s: TAG.sub('', s or '')
    return {'s': sheet, 'u': href, 'i': i, 't': d.get('title', ''), 'r': d.get('refFr', ''), 'b': d.get('book', ''),
            'c': d.get('ch', 0), 'f': d.get('feast') or '', 'v': d.get('fr', ''),
            'm': ' '.join(clean(p) for p in d.get('more', [])), 'k': ' · '.join(clean(p) for p in d.get('brakha', []))}
