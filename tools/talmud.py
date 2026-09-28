#!/usr/bin/env python3
"""Sources de la section « Le Talmud » : table des traités, textes originaux, vérification des citations.

Une scène du Talmud porte une référence au format de Sefaria :
  'Shabbat 31a'                    Talmud de Babylone, un amoud (éd. de Vilna, Wikisource, CC-BY-SA)
  'Mishnah Peah 1:1'               Michna (éd. Romm, Vilna 1913, domaine public)
  'Pirkei Avot 1:1'                Pirké Avot (même édition)
  'Jerusalem Talmud Nedarim 9:4'   Talmud de Jérusalem, une halakha (éd. Guggenheimer, CC-BY)
Le texte est téléchargé une fois depuis l'API de Sefaria dans data/talmud/<section>.json.
La citation `quote` doit se trouver dans ce texte : on compare sans voyelles, sans ponctuation, sans balises.

  python3 tools/talmud.py 'Shabbat 31a'          # affiche le texte original, segment par segment, pour y choisir une citation
  python3 tools/talmud.py 'Pirkei Avot 1:1'
"""
import json, os, re, sys, urllib.parse, urllib.request
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, 'data', 'talmud')

# (ordre, [(nom Sefaria, nom français, nom hébreu, pages du Daf Yomi (premier, dernier) ou None)])
# Le Daf Yomi suit ces traités dans cet ordre ; Kinnim et Middot n'ont pas de Guemara (Michna seule).
ORDERS = [
    ('Zeraïm', 'Semences', 'זרעים', [
        ('Berakhot', 'Berakhot', 'ברכות', (2, 64)), ('Peah', 'Péa', 'פאה', None), ('Demai', 'Demaï', 'דמאי', None),
        ('Kilayim', 'Kilayim', 'כלאים', None), ('Sheviit', 'Chevi’it', 'שביעית', None), ('Terumot', 'Teroumot', 'תרומות', None),
        ('Maasrot', 'Maasrot', 'מעשרות', None), ('Maaser Sheni', 'Maasser chéni', 'מעשר שני', None), ('Challah', 'Hala', 'חלה', None),
        ('Orlah', 'Orla', 'ערלה', None), ('Bikkurim', 'Bikkourim', 'ביכורים', None)]),
    ('Moed', 'Temps fixés', 'מועד', [
        ('Shabbat', 'Chabbat', 'שבת', (2, 157)), ('Eruvin', 'Erouvin', 'עירובין', (2, 105)), ('Pesachim', 'Pessahim', 'פסחים', (2, 121)),
        ('Shekalim', 'Chekalim', 'שקלים', (2, 22)), ('Yoma', 'Yoma', 'יומא', (2, 88)), ('Sukkah', 'Souccah', 'סוכה', (2, 56)),
        ('Beitzah', 'Beitsa', 'ביצה', (2, 40)), ('Rosh Hashanah', 'Roch Hachana', 'ראש השנה', (2, 35)), ('Taanit', 'Taanit', 'תענית', (2, 31)),
        ('Megillah', 'Meguila', 'מגילה', (2, 32)), ('Moed Katan', 'Moed Katan', 'מועד קטן', (2, 29)), ('Chagigah', 'Haguiga', 'חגיגה', (2, 27))]),
    ('Nachim', 'Femmes', 'נשים', [
        ('Yevamot', 'Yevamot', 'יבמות', (2, 122)), ('Ketubot', 'Ketoubot', 'כתובות', (2, 112)), ('Nedarim', 'Nedarim', 'נדרים', (2, 91)),
        ('Nazir', 'Nazir', 'נזיר', (2, 66)), ('Sotah', 'Sota', 'סוטה', (2, 49)), ('Gittin', 'Guittin', 'גיטין', (2, 90)),
        ('Kiddushin', 'Kiddouchin', 'קידושין', (2, 82))]),
    ('Nezikin', 'Dommages', 'נזיקין', [
        ('Bava Kamma', 'Bava Kama', 'בבא קמא', (2, 119)), ('Bava Metzia', 'Bava Metsia', 'בבא מציעא', (2, 119)),
        ('Bava Batra', 'Bava Batra', 'בבא בתרא', (2, 176)), ('Sanhedrin', 'Sanhédrin', 'סנהדרין', (2, 113)), ('Makkot', 'Makkot', 'מכות', (2, 24)),
        ('Shevuot', 'Chevouot', 'שבועות', (2, 49)), ('Eduyot', 'Edouyot', 'עדיות', None), ('Avodah Zarah', 'Avoda Zara', 'עבודה זרה', (2, 76)),
        ('Pirkei Avot', 'Avot', 'אבות', None), ('Horayot', 'Horayot', 'הוריות', (2, 14))]),
    ('Kodachim', 'Choses saintes', 'קדשים', [
        ('Zevachim', 'Zevahim', 'זבחים', (2, 120)), ('Menachot', 'Menahot', 'מנחות', (2, 110)), ('Chullin', 'Houlin', 'חולין', (2, 142)),
        ('Bekhorot', 'Bekhorot', 'בכורות', (2, 61)), ('Arakhin', 'Arakhin', 'ערכין', (2, 34)), ('Temurah', 'Temoura', 'תמורה', (2, 34)),
        ('Keritot', 'Keritot', 'כריתות', (2, 28)), ('Meilah', 'Meïla', 'מעילה', (2, 22)), ('Kinnim', 'Kinnim', 'קינים', (23, 25)),
        ('Tamid', 'Tamid', 'תמיד', (26, 33)), ('Middot', 'Middot', 'מדות', (34, 37))]),
    ('Taharot', 'Puretés', 'טהרות', [
        ('Kelim', 'Kelim', 'כלים', None), ('Oholot', 'Ohalot', 'אהלות', None), ('Negaim', 'Negaïm', 'נגעים', None),
        ('Parah', 'Para', 'פרה', None), ('Tahorot', 'Taharot', 'טהרות', None), ('Mikvaot', 'Mikvaot', 'מקואות', None),
        ('Niddah', 'Nidda', 'נדה', (2, 73)), ('Makhshirin', 'Makhchirin', 'מכשירין', None), ('Zavim', 'Zavim', 'זבים', None),
        ('Tevul Yom', 'Tevoul Yom', 'טבול יום', None), ('Yadayim', 'Yadayim', 'ידים', None), ('Oktzin', 'Oukatsin', 'עוקצין', None)]),
]
TRACT = {t[0]: t for _, _, _, ts in ORDERS for t in ts}
MISHNA_ONLY = {'Kinnim', 'Middot'}  # au Daf Yomi, pas de Guemara

VERSIONS = {
    'bavli': ('Wikisource Talmud Bavli', 'Talmud de Babylone, éd. de Vilna (texte Wikisource, CC-BY-SA)'),
    'mishna': ('Mishnah, ed. Romm, Vilna 1913', 'Michna, éd. Romm, Vilna 1913 (domaine public)'),
    'yeru': ('The Jerusalem Talmud, edition by Heinrich W. Guggenheimer. Berlin, De Gruyter, 1999-2015', 'Talmud de Jérusalem, éd. H. W. Guggenheimer (CC-BY)'),
}

def parse(ref):
    """'Shabbat 31a' → ('bavli', 'Shabbat', '31a', 'Shabbat.31a', None) ; la section est ce qu'on télécharge, l'index le segment visé."""
    m = re.match(r'^Jerusalem Talmud (.+) (\d+):(\d+)$', ref)
    if m: return 'yeru', m.group(1), f'{m.group(2)}:{m.group(3)}', f'Jerusalem Talmud {m.group(1)}.{m.group(2)}.{m.group(3)}', None
    m = re.match(r'^(?:Mishnah (.+)|(Pirkei Avot)) (\d+):(\d+)$', ref)
    if m:
        t = m.group(1) or m.group(2)
        return 'mishna', t, f'{m.group(3)}:{m.group(4)}', ('' if t == 'Pirkei Avot' else 'Mishnah ') + f'{t}.{m.group(3)}', int(m.group(4)) - 1
    m = re.match(r'^(.+) (\d+[ab])$', ref)
    if m and m.group(1) in TRACT: return 'bavli', m.group(1), m.group(2), f'{m.group(1)}.{m.group(2)}', None
    return None

def fetch(section, kind):
    """Texte hébreu d'une section, mis en cache dans data/talmud/."""
    path = os.path.join(DATA, re.sub(r'[^\w.]+', '_', section) + '.json')
    if os.path.exists(path): return json.load(open(path, encoding='utf-8'))
    ver = VERSIONS[kind][0]
    url = 'https://www.sefaria.org/api/v3/texts/' + urllib.parse.quote(section.replace(' ', '_')) + '?version=' + urllib.parse.quote('hebrew|' + ver)
    j = json.load(urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'les-dix-commandements/1.0'})))
    if not j.get('versions'): raise SystemExit(f'{section} : texte introuvable sur Sefaria ({ver}).')
    flat = lambda t: [s for x in t for s in flat(x)] if isinstance(t, list) else [t]
    d = {'ref': j['ref'], 'heRef': j['heRef'], 'kind': kind, 'source': VERSIONS[kind][1], 'text': flat(j['versions'][0]['text'])}
    os.makedirs(DATA, exist_ok=True)
    json.dump(d, open(path, 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
    return d

def text_for(ref):
    """{'ref', 'heRef', 'source', 'segs': [segments visés]} pour une référence de scène, ou None si ce n'est pas une référence talmudique."""
    p = parse(ref)
    if not p: return None
    kind, tract, loc, section, idx = p
    d = fetch(section, kind)
    segs = d['text'] if idx is None else d['text'][idx:idx + 1]
    he = d['heRef'] if idx is None else f"{d['heRef']}:{heb_num(idx + 1)}"
    return {'ref': ref, 'heRef': he, 'source': d['source'], 'kind': kind, 'tract': tract, 'loc': loc, 'segs': segs}

TAGS = re.compile(r'<[^>]+>')
def norm(s):
    """Sans balises, sans voyelles ni cantillation, sans ponctuation : lettres hébraïques et espaces."""
    s = TAGS.sub(' ', s)
    s = re.sub(r'[֑-ׇ]', '', s)
    s = re.sub(r'[^א-ת0-9]+', ' ', s)
    return ' '.join(s.split())

def heb_num(n):
    ones, tens = ' אבגדהוזחט', ' יכלמנסעפצ'
    if n == 15: return 'ט״ו'
    if n == 16: return 'ט״ז'
    s = (tens[n // 10] if n >= 10 else '') + (ones[n % 10] if n % 10 else '')
    s = s.strip()
    return s + '׳' if len(s) == 1 else s[:-1] + '״' + s[-1]

def check(ref, quote):
    """True si la citation se trouve dans le texte de la référence."""
    t = text_for(ref)
    return t is not None and norm(quote) != '' and norm(quote) in norm(' '.join(t['segs']))

def display(ref):
    """Référence lisible en français : 'Chabbat 31a', 'Michna Péa 1, 1', 'Avot 1, 1', 'Talmud de Jérusalem Nedarim 9, 4'."""
    kind, tract, loc, *_ = parse(ref)
    fr = TRACT[tract][1] if tract in TRACT else tract
    loc = loc.replace(':', ', ')
    return {'bavli': f'{fr} {loc}', 'mishna': (f'Avot {loc}' if tract == 'Pirkei Avot' else f'Michna {fr} {loc}'), 'yeru': f'Talmud de Jérusalem, {fr} {loc}'}[kind]

if __name__ == '__main__':
    for ref in sys.argv[1:]:
        t = text_for(ref)
        if not t: print(f'{ref} : référence non reconnue'); continue
        print(f"{t['ref']}  ·  {t['heRef']}  ·  {t['source']}\n")
        for i, s in enumerate(t['segs']): print(f'[{i}] {TAGS.sub("", s).strip()}\n')
