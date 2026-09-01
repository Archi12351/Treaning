export interface VerbForms {
  infinitiv: string;
  praeteritum: string;
  partizip2: string;
  ru: string;
}

export const IRREGULAR_VERBS: VerbForms[] = [
  { infinitiv: "sein", praeteritum: "war", partizip2: "ist gewesen", ru: "быть" },
  { infinitiv: "haben", praeteritum: "hatte", partizip2: "hat gehabt", ru: "иметь" },
  { infinitiv: "werden", praeteritum: "wurde", partizip2: "ist geworden", ru: "становиться" },
  { infinitiv: "gehen", praeteritum: "ging", partizip2: "ist gegangen", ru: "идти" },
  { infinitiv: "kommen", praeteritum: "kam", partizip2: "ist gekommen", ru: "приходить" },
  { infinitiv: "fahren", praeteritum: "fuhr", partizip2: "ist gefahren", ru: "ехать" },
  { infinitiv: "fliegen", praeteritum: "flog", partizip2: "ist geflogen", ru: "лететь" },
  { infinitiv: "sehen", praeteritum: "sah", partizip2: "hat gesehen", ru: "видеть" },
  { infinitiv: "geben", praeteritum: "gab", partizip2: "hat gegeben", ru: "давать" },
  { infinitiv: "nehmen", praeteritum: "nahm", partizip2: "hat genommen", ru: "брать" },
  { infinitiv: "essen", praeteritum: "aß", partizip2: "hat gegessen", ru: "есть" },
  { infinitiv: "trinken", praeteritum: "trank", partizip2: "hat getrunken", ru: "пить" },
  { infinitiv: "sprechen", praeteritum: "sprach", partizip2: "hat gesprochen", ru: "говорить" },
  { infinitiv: "lesen", praeteritum: "las", partizip2: "hat gelesen", ru: "читать" },
  { infinitiv: "schreiben", praeteritum: "schrieb", partizip2: "hat geschrieben", ru: "писать" },
  { infinitiv: "finden", praeteritum: "fand", partizip2: "hat gefunden", ru: "находить" },
  { infinitiv: "helfen", praeteritum: "half", partizip2: "hat geholfen", ru: "помогать" },
  { infinitiv: "wissen", praeteritum: "wusste", partizip2: "hat gewusst", ru: "знать" },
  { infinitiv: "denken", praeteritum: "dachte", partizip2: "hat gedacht", ru: "думать" },
  { infinitiv: "bringen", praeteritum: "brachte", partizip2: "hat gebracht", ru: "приносить" },
  { infinitiv: "schlafen", praeteritum: "schlief", partizip2: "hat geschlafen", ru: "спать" },
  { infinitiv: "tragen", praeteritum: "trug", partizip2: "hat getragen", ru: "нести, носить" },
  { infinitiv: "treffen", praeteritum: "traf", partizip2: "hat getroffen", ru: "встречать" },
  { infinitiv: "bleiben", praeteritum: "blieb", partizip2: "ist geblieben", ru: "оставаться" },
  { infinitiv: "beginnen", praeteritum: "begann", partizip2: "hat begonnen", ru: "начинать" },
  { infinitiv: "verstehen", praeteritum: "verstand", partizip2: "hat verstanden", ru: "понимать" },
  { infinitiv: "steigen", praeteritum: "stieg", partizip2: "ist gestiegen", ru: "подниматься" },
  { infinitiv: "verlieren", praeteritum: "verlor", partizip2: "hat verloren", ru: "терять" },
  { infinitiv: "gewinnen", praeteritum: "gewann", partizip2: "hat gewonnen", ru: "выигрывать" },
  { infinitiv: "waschen", praeteritum: "wusch", partizip2: "hat gewaschen", ru: "мыть" },
];

export interface NounForms {
  singular: string;
  plural: string;
  ru: string;
}

export const NOUN_PLURALS: NounForms[] = [
  { singular: "das Kind", plural: "die Kinder", ru: "ребёнок" },
  { singular: "der Mann", plural: "die Männer", ru: "мужчина" },
  { singular: "die Frau", plural: "die Frauen", ru: "женщина" },
  { singular: "das Buch", plural: "die Bücher", ru: "книга" },
  { singular: "der Tisch", plural: "die Tische", ru: "стол" },
  { singular: "das Haus", plural: "die Häuser", ru: "дом" },
  { singular: "die Stadt", plural: "die Städte", ru: "город" },
  { singular: "der Vater", plural: "die Väter", ru: "отец" },
  { singular: "die Mutter", plural: "die Mütter", ru: "мать" },
  { singular: "das Auto", plural: "die Autos", ru: "машина" },
  { singular: "der Lehrer", plural: "die Lehrer", ru: "учитель" },
  { singular: "die Lampe", plural: "die Lampen", ru: "лампа" },
  { singular: "der Tag", plural: "die Tage", ru: "день" },
  { singular: "das Jahr", plural: "die Jahre", ru: "год" },
  { singular: "die Sprache", plural: "die Sprachen", ru: "язык" },
  { singular: "der Freund", plural: "die Freunde", ru: "друг" },
  { singular: "das Kleid", plural: "die Kleider", ru: "платье" },
  { singular: "der Arzt", plural: "die Ärzte", ru: "врач" },
  { singular: "die Hand", plural: "die Hände", ru: "рука" },
  { singular: "der Zug", plural: "die Züge", ru: "поезд" },
  { singular: "das Wort", plural: "die Wörter", ru: "слово" },
  { singular: "die Nacht", plural: "die Nächte", ru: "ночь" },
  { singular: "der Student", plural: "die Studenten", ru: "студент" },
  { singular: "das Bild", plural: "die Bilder", ru: "картина" },
  { singular: "die Tür", plural: "die Türen", ru: "дверь" },
];

export interface AdjForms {
  positive: string;
  komparativ: string;
  superlativ: string;
  ru: string;
}

export const ADJ_COMPARISON: AdjForms[] = [
  { positive: "gut", komparativ: "besser", superlativ: "am besten", ru: "хороший" },
  { positive: "viel", komparativ: "mehr", superlativ: "am meisten", ru: "много" },
  { positive: "gern", komparativ: "lieber", superlativ: "am liebsten", ru: "охотно" },
  { positive: "hoch", komparativ: "höher", superlativ: "am höchsten", ru: "высокий" },
  { positive: "nah", komparativ: "näher", superlativ: "am nächsten", ru: "близкий" },
  { positive: "groß", komparativ: "größer", superlativ: "am größten", ru: "большой" },
  { positive: "klein", komparativ: "kleiner", superlativ: "am kleinsten", ru: "маленький" },
  { positive: "alt", komparativ: "älter", superlativ: "am ältesten", ru: "старый" },
  { positive: "jung", komparativ: "jünger", superlativ: "am jüngsten", ru: "молодой" },
  { positive: "lang", komparativ: "länger", superlativ: "am längsten", ru: "длинный" },
  { positive: "kurz", komparativ: "kürzer", superlativ: "am kürzesten", ru: "короткий" },
  { positive: "warm", komparativ: "wärmer", superlativ: "am wärmsten", ru: "тёплый" },
  { positive: "kalt", komparativ: "kälter", superlativ: "am kältesten", ru: "холодный" },
  { positive: "teuer", komparativ: "teurer", superlativ: "am teuersten", ru: "дорогой" },
  { positive: "dunkel", komparativ: "dunkler", superlativ: "am dunkelsten", ru: "тёмный" },
];
