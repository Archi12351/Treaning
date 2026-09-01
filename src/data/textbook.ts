import type { TextbookChapter, TextbookParagraph } from "../types";

export const TEXTBOOK_CHAPTERS: TextbookChapter[] = [
  { id: "aussprache", number: 1, title: "Aussprache und Alphabet", levelRange: "A1" },
  { id: "nomen", number: 2, title: "Nomen: Genus, Plural, Deklination", levelRange: "A1–A2" },
  { id: "artikel-pronomen", number: 3, title: "Artikel und Pronomen", levelRange: "A1–B1" },
  { id: "kasus", number: 4, title: "Die vier Fälle (Kasus)", levelRange: "A1–B1" },
  { id: "verben-praesens", number: 5, title: "Verben: Präsens", levelRange: "A1" },
  { id: "vergangenheit", number: 6, title: "Perfekt, Präteritum, Plusquamperfekt", levelRange: "A2–B1" },
  { id: "futur", number: 7, title: "Futur I und Futur II", levelRange: "B1" },
  { id: "modalverben-buch", number: 8, title: "Modalverben", levelRange: "A2" },
  { id: "verbtypen", number: 9, title: "Trennbare, untrennbare und reflexive Verben", levelRange: "A2–B1" },
  { id: "adjektive-buch", number: 10, title: "Adjektive: Deklination und Komparation", levelRange: "A2–B1" },
  { id: "praepositionen", number: 11, title: "Präpositionen und ihre Fälle", levelRange: "A2–B1" },
  { id: "satzbau", number: 12, title: "Satzbau und Wortstellung", levelRange: "A2–B1" },
  { id: "verneinung", number: 13, title: "Verneinung: nicht und kein", levelRange: "A2" },
  { id: "nebensaetze-buch", number: 14, title: "Nebensätze und Konnektoren", levelRange: "B1–C1" },
  { id: "passiv-buch", number: 15, title: "Passiv", levelRange: "B1–C1" },
  { id: "konjunktiv-buch", number: 16, title: "Konjunktiv II, Konjunktiv I und indirekte Rede", levelRange: "B1–C1" },
  { id: "erweitert", number: 17, title: "Infinitiv-, Partizipialkonstruktionen und Nominalisierung", levelRange: "B2–C1" },
  { id: "zahlen-datum", number: 18, title: "Zahlen, Datum und Uhrzeit", levelRange: "A1" },
  { id: "unregelmaessig", number: 19, title: "Unregelmäßige Verben — Referenztabelle", levelRange: "A1–C2" },
  { id: "rechtschreibung", number: 20, title: "Rechtschreibung und Zeichensetzung", levelRange: "A2–B1" },
];

export const TEXTBOOK_PARAGRAPHS: TextbookParagraph[] = [
  // 1. Aussprache und Alphabet
  {
    id: "1.1", number: "1.1", chapterId: "aussprache", title: "Das Alphabet und die Umlaute", level: "A1",
    body: [
      "Das deutsche Alphabet hat 26 Buchstaben plus vier Sonderzeichen: ä, ö, ü (Umlaute) und ß (Eszett/scharfes S).",
      "Umlaute verändern die Aussprache des Vokals: a→ä (wie в русском «э»), o→ö (нет прямого аналога — губы как для «о», звук как «е»), u→ü (губы как для «у», звук как «и»).",
      "ß заменяет двойное s после долгого гласного или дифтонга: die Straße, groß. После краткого гласного пишется ss: dass, Fluss.",
      "В Швейцарии ß обычно не используется — везде пишут ss.",
    ],
    examples: [
      { de: "schön, müde, Mädchen", ru: "красивый, усталый, девочка" },
      { de: "die Straße vs. das Wasser (kurz → ss ist möglich, hier langer Vokal → ß)", ru: "улица vs. вода" },
    ],
    exceptions: ["После реформы правописания 1996 г. правило ss/ß строго зависит от долготы гласного, а не от диалекта."],
  },
  {
    id: "1.2", number: "1.2", chapterId: "aussprache", title: "Основные правила произношения", level: "A1",
    body: [
      "ei произносится как «ай»: mein, Zeit. ie — как долгое «и»: Liebe, hier.",
      "sp и st в начале слова/корня произносятся как «шп» и «шт»: Sprache → «шпрахе», Stadt → «штадт».",
      "sch всегда произносится как «ш»: Schule, Tisch.",
      "ch после a, o, u, au — глухой гортанный звук (как русское «х»): Buch, auch. После остальных гласных и согласных — мягкий «хь»-подобный звук: ich, München.",
      "v чаще всего произносится как «ф»: Vater. w произносится как «в»: Wasser. z — как «ц»: Zeit.",
      "Ударение в большинстве немецких слов падает на первый слог корня, но в словах с неотделяемыми приставками (be-, ge-, ver-, er-, ent-, zer-) ударение переходит на корень: verstehen, bekommen.",
    ],
    examples: [
      { de: "Ich spreche Deutsch in der Stadt.", ru: "Я говорю по-немецки в городе." },
      { de: "Wie viel kostet das Wasser?", ru: "Сколько стоит вода?" },
    ],
  },

  // 2. Nomen
  {
    id: "2.1", number: "2.1", chapterId: "nomen", title: "Genus (род существительных)", level: "A1",
    body: [
      "Каждое существительное имеет один из трёх родов: der (мужской), die (женский), das (средний). Род почти всегда нужно запоминать вместе со словом — логики, аналогичной русскому языку, часто нет.",
      "Полезные закономерности: мужской род обычно у слов на -er, -ig, -ling, названий дней/месяцев/сторон света (der Montag, der Norden). Женский род — у слов на -e, -heit, -keit, -ung, -schaft, -ion, -tät, -in (die Freiheit, die Zeitung, die Freundin). Средний род — у слов на -chen, -lein, -ment, -um, большинства заимствований на -a/-o (das Mädchen, das Zentrum).",
      "Все существительные с суффиксом -chen/-lein среднего рода независимо от смысла: das Mädchen (девочка) — средний род, хотя обозначает лицо женского пола.",
    ],
    exceptions: [
      "der Käse, der Name — мужской род вопреки окончанию на -e.",
      "das Auge, das Ende — средний род, хотя оканчиваются на -e.",
      "die Person, die Wache — женский род без явных признаков.",
    ],
    examples: [
      { de: "der Lehrer, die Lehrerin, das Lehrbuch", ru: "учитель, учительница, учебник" },
    ],
  },
  {
    id: "2.2", number: "2.2", chapterId: "nomen", title: "Plural (образование множественного числа)", level: "A2",
    body: [
      "У немецких существительных нет единого правила множественного числа — есть пять основных типов окончаний: -e, -er, -(e)n, -s и нулевое окончание, часто с умлаутом корневого гласного.",
      "Тип -e (+умлаут у многих): der Tisch → die Tische, der Sohn → die Söhne.",
      "Тип -er (+умлаут, если возможно): das Kind → die Kinder, das Buch → die Bücher.",
      "Тип -(e)n: почти все существительные женского рода: die Frau → die Frauen, die Lampe → die Lampen.",
      "Тип -s: заимствованные слова: das Auto → die Autos, das Hotel → die Hotels.",
      "Нулевое окончание (иногда с умлаутом): der Lehrer → die Lehrer, der Vater → die Väter.",
      "В Dativ множественного числа все существительные получают дополнительное -n, если основа ещё не оканчивается на -n или -s: den Kindern, den Frauen, но den Autos.",
    ],
    table: {
      headers: ["Тип", "Пример ед.ч.", "Пример мн.ч."],
      rows: [
        ["-e (+Umlaut)", "der Sohn", "die Söhne"],
        ["-er (+Umlaut)", "das Buch", "die Bücher"],
        ["-(e)n", "die Frau", "die Frauen"],
        ["-s", "das Auto", "die Autos"],
        ["— (+Umlaut)", "der Vater", "die Väter"],
      ],
    },
  },
  {
    id: "2.3", number: "2.3", chapterId: "nomen", title: "Слабые существительные и словосложение", level: "B1",
    body: [
      "Небольшая группа существительных мужского рода (schwache Nomen) получает окончание -(e)n во всех падежах кроме Nominativ единственного числа: der Mensch, den/dem/des Menschen; der Junge, der Name, der Kollege, der Herr (Herrn), der Student.",
      "Немецкий язык активно образует сложные существительные (Komposita): род определяется по последнему слову: die Bahn + der Hof → der Bahnhof; das Haus + die Tür → die Haustür.",
      "Уменьшительные суффиксы -chen и -lein делают слово средним и добавляют умлаут: der Hund → das Hündchen, die Katze → das Kätzchen.",
    ],
    examples: [
      { de: "Ich sehe den Studenten. Das Auto des Studenten ist neu.", ru: "Я вижу студента. Машина студента новая." },
    ],
    exceptions: ["der Name → des Namens (особая форма Genitiv с -ns вместо -n)."],
  },

  // 3. Artikel und Pronomen
  {
    id: "3.1", number: "3.1", chapterId: "artikel-pronomen", title: "Bestimmter, unbestimmter und Null-Artikel", level: "A1",
    body: [
      "Определённый артикль (der/die/das) используется для известного, конкретного или уже упомянутого предмета.",
      "Неопределённый артикль (ein/eine) — для нового, неизвестного, одного из многих. Во множественном числе неопределённый артикль отсутствует (нулевой артикль).",
      "Нулевой артикль также используется с именами собственными, странами (кроме нескольких: die Schweiz, die Türkei, der Iran), профессиями после sein/werden без прилагательного, абстрактными и вещественными существительными в общем смысле.",
    ],
    examples: [
      { de: "Ich sehe einen Hund. Der Hund bellt.", ru: "Я вижу собаку. Собака лает." },
      { de: "Sie ist Ärztin. Ich trinke gern Kaffee.", ru: "Она врач. Я люблю пить кофе." },
    ],
  },
  {
    id: "3.2", number: "3.2", chapterId: "artikel-pronomen", title: "Personalpronomen und Possessivpronomen", level: "A1",
    body: [
      "Личные местоимения изменяются по падежам: Nominativ ich/du/er/sie/es/wir/ihr/sie/Sie; Akkusativ mich/dich/ihn/sie/es/uns/euch/sie/Sie; Dativ mir/dir/ihm/ihr/ihm/uns/euch/ihnen/Ihnen.",
      "Притяжательные местоимения (mein, dein, sein, ihr, unser, euer, ihr/Ihr) склоняются как неопределённый артикль ein.",
    ],
    table: {
      headers: ["Nominativ", "Akkusativ", "Dativ"],
      rows: [
        ["ich", "mich", "mir"],
        ["du", "dich", "dir"],
        ["er / sie / es", "ihn / sie / es", "ihm / ihr / ihm"],
        ["wir", "uns", "uns"],
        ["ihr", "euch", "euch"],
        ["sie / Sie", "sie / Sie", "ihnen / Ihnen"],
      ],
    },
    examples: [
      { de: "Ich gebe dir mein Buch.", ru: "Я даю тебе свою книгу." },
    ],
  },
  {
    id: "3.3", number: "3.3", chapterId: "artikel-pronomen", title: "Demonstrativ-, Indefinit- und Interrogativpronomen", level: "B1",
    body: [
      "Указательные местоимения dieser/diese/dieses («этот») склоняются как определённый артикль.",
      "Неопределённые местоимения: man (безличное «кто-то, вообще люди»), jemand/niemand (кто-то/никто), etwas/nichts (что-то/ничего), jeder (каждый), alle/einige/manche (все/некоторые).",
      "Вопросительные местоимения: wer (кто, склоняется: wer/wen/wem/wessen), was (что, не склоняется), welcher/welche/welches (какой — склоняется как dieser).",
    ],
    examples: [
      { de: "Man spricht hier Deutsch.", ru: "Здесь говорят по-немецки." },
      { de: "Welches Buch möchtest du lesen?", ru: "Какую книгу ты хочешь прочитать?" },
    ],
  },

  // 4. Kasus
  {
    id: "4.1", number: "4.1", chapterId: "kasus", title: "Обзор четырёх падежей", level: "A1",
    body: [
      "Nominativ (именительный) — подлежащее, вопрос «кто? что?»: Der Mann liest.",
      "Akkusativ (винительный) — прямое дополнение, вопрос «кого? что?»: Ich sehe den Mann.",
      "Dativ (дательный) — косвенное дополнение, вопрос «кому? чему?»: Ich gebe dem Mann ein Buch.",
      "Genitiv (родительный) — принадлежность, вопрос «кого? чего? чей?»: das Auto des Mannes. В разговорной речи часто заменяется на von + Dativ: das Auto von dem Mann.",
    ],
    table: {
      headers: ["Kasus", "der/die/das", "ein/eine"],
      rows: [
        ["Nominativ", "der / die / das / die", "ein / eine / ein"],
        ["Akkusativ", "den / die / das / die", "einen / eine / ein"],
        ["Dativ", "dem / der / dem / den(+n)", "einem / einer / einem"],
        ["Genitiv", "des(+s/es) / der / des(+s/es) / der", "eines / einer / eines"],
      ],
    },
  },
  {
    id: "4.2", number: "4.2", chapterId: "kasus", title: "Глаголы с фиксированным падежом", level: "B1",
    body: [
      "Ряд глаголов требует Dativ, а не Akkusativ, даже если в русском переводе кажется, что нужен винительный: helfen, danken, gefallen, gehören, antworten, glauben, folgen, gratulieren, passen.",
      "Некоторые глаголы управляют Genitiv (в основном в официальном/книжном стиле): sich erinnern (обычно уже с an+Akk. в разговорной речи), bedürfen, sich schämen (+ an/für в разговорном варианте).",
      "Двойное дополнение Akkusativ + Dativ типично для глаголов передачи: geben, zeigen, schicken, schenken — сначала обычно называют Dativ (лицо), затем Akkusativ (предмет), если оба выражены существительными: Ich gebe dem Kind das Buch. Если один из них местоимение — оно обычно ставится раньше.",
    ],
    examples: [
      { de: "Ich helfe meinem Bruder.", ru: "Я помогаю своему брату." },
      { de: "Das gefällt mir sehr.", ru: "Мне это очень нравится." },
    ],
  },

  // 5. Verben Präsens
  {
    id: "5.1", number: "5.1", chapterId: "verben-praesens", title: "Спряжение в Präsens", level: "A1",
    body: [
      "Регулярное спряжение: корень + -e / -st / -t / -en / -t / -en для ich/du/er-sie-es/wir/ihr/sie-Sie.",
      "Если корень оканчивается на -d, -t, -m, -n (после согласного) — вставляется соединительное -e-: du arbeitest, er findet.",
      "Если корень оканчивается на -s, -ß, -z, -x — во 2-м лице ед. числа окончание сокращается до -t: du heißt (не heißst), du tanzt.",
      "Сильные глаголы меняют корневую гласную в du/er-sie-es формах: e→i (geben→du gibst), e→ie (lesen→du liest), a→ä (schlafen→du schläfst), au→äu (laufen→du läufst).",
    ],
    exceptions: [
      "sein: ich bin, du bist, er ist, wir sind, ihr seid, sie sind — полностью неправильный.",
      "haben: du hast, er hat (сокращение -b- выпадает).",
      "wissen: ich weiß, du weißt, er weiß (как модальный глагол в ед.ч.).",
    ],
    examples: [
      { de: "Du gibst mir das Buch. Er liest jeden Abend.", ru: "Ты даёшь мне книгу. Он читает каждый вечер." },
    ],
  },

  // 6. Vergangenheit
  {
    id: "6.1", number: "6.1", chapterId: "vergangenheit", title: "Perfekt", level: "A2",
    body: [
      "Perfekt — основное прошедшее время устной речи: haben/sein (Präsens) + Partizip II в конце предложения.",
      "haben берут: переходные глаголы (с прямым дополнением), реflexive-глаголы, большинство остальных.",
      "sein берут: глаголы движения с изменением места (gehen, fahren, fliegen, laufen), глаголы изменения состояния (werden, wachsen, sterben, aufwachen, einschlafen), а также sein, bleiben, passieren.",
      "Partizip II: регулярные глаголы ge-корень-t (gemacht); сильные глаголы ge-корень(часто изменённый)-en (gesehen, gegangen); глаголы на -ieren без ge- (studiert); глаголы с неотделяемой приставкой без ge- (verstanden, bekommen); глаголы с отделяемой приставкой — ge- между приставкой и корнем (aufgestanden, eingekauft).",
    ],
    table: {
      headers: ["Infinitiv", "Partizip II", "Hilfsverb"],
      rows: [
        ["machen", "gemacht", "haben"],
        ["gehen", "gegangen", "sein"],
        ["studieren", "studiert", "haben"],
        ["verstehen", "verstanden", "haben"],
        ["aufstehen", "aufgestanden", "sein"],
      ],
    },
  },
  {
    id: "6.2", number: "6.2", chapterId: "vergangenheit", title: "Präteritum и Plusquamperfekt", level: "B1",
    body: [
      "Präteritum — «книжное» прошедшее для текстов, новостей и рассказов. В устной речи почти всегда заменяется Perfekt, кроме sein, haben, werden и модальных глаголов, которые в Präteritum используются и устно.",
      "Регулярные глаголы: корень + -te(+окончание лица): ich machte, du machtest, er machte, wir machten.",
      "Сильные глаголы меняют корневую гласную без -te, формы нужно запоминать по таблице неправильных глаголов (глава 19): gehen→ging, sehen→sah, kommen→kam.",
      "Plusquamperfekt (предпрошедшее) описывает событие, случившееся раньше другого прошедшего события: hatte/war + Partizip II. Nachdem er gegessen hatte, ging er ins Bett.",
    ],
    examples: [
      { de: "Es war einmal eine Prinzessin, die in einem Schloss wohnte.", ru: "Жила-была принцесса, которая жила в замке." },
      { de: "Nachdem ich die Prüfung bestanden hatte, feierte ich mit Freunden.", ru: "После того как я сдал экзамен, я отпраздновал с друзьями." },
    ],
  },

  // 7. Futur
  {
    id: "7.1", number: "7.1", chapterId: "futur", title: "Futur I и Futur II", level: "B1",
    body: [
      "Futur I: werden (Präsens) + Infinitiv в конце предложения. Используется для будущих событий и предположений о настоящем: Ich werde morgen kommen. Er wird jetzt zu Hause sein (предположение).",
      "В разговорной речи будущее часто выражают просто через Präsens с обстоятельством времени: Ich komme morgen.",
      "Futur II: werden + Partizip II + haben/sein (в инфинитиве) — обозначает действие, которое к определённому моменту в будущем уже завершится, или предположение о прошлом: Bis morgen werde ich die Arbeit beendet haben. Er wird das schon gehört haben (предположение о прошлом).",
    ],
    examples: [
      { de: "Nächstes Jahr werde ich nach Japan reisen.", ru: "В следующем году я поеду в Японию." },
      { de: "Sie wird wohl den Zug verpasst haben.", ru: "Она, наверное, опоздала на поезд (предположение)." },
    ],
  },

  // 8. Modalverben
  {
    id: "8.1", number: "8.1", chapterId: "modalverben-buch", title: "Формы и значения модальных глаголов", level: "A2",
    body: [
      "können — способность/возможность («мочь, уметь»), dürfen — разрешение («можно, иметь право»), müssen — необходимость («должен»), sollen — совет/поручение извне («следует, должен по чужой воле»), wollen — желание/намерение («хотеть»), mögen/möchten — симпатия/вежливое желание.",
      "Модальные глаголы в Präsens спрягаются неправильно и не имеют окончания в 1-м и 3-м лице ед. числа: ich kann/muss/darf/will/soll, er kann/muss/darf/will/soll.",
      "Смысловой глагол стоит в инфинитиве без zu в конце предложения.",
      "Отрицание: nicht dürfen = запрет, nicht müssen = необязательность — это частая ошибка у изучающих, важно различать смысл.",
    ],
    table: {
      headers: ["", "können", "müssen", "dürfen", "wollen", "sollen", "möchten"],
      rows: [
        ["ich", "kann", "muss", "darf", "will", "soll", "möchte"],
        ["du", "kannst", "musst", "darfst", "willst", "sollst", "möchtest"],
        ["er/sie/es", "kann", "muss", "darf", "will", "soll", "möchte"],
        ["wir", "können", "müssen", "dürfen", "wollen", "sollen", "möchten"],
      ],
    },
  },

  // 9. Verbtypen
  {
    id: "9.1", number: "9.1", chapterId: "verbtypen", title: "Trennbare и untrennbare Verben", level: "A2",
    body: [
      "Отделяемые приставки (всегда под ударением): ab-, an-, auf-, aus-, ein-, mit-, nach-, vor-, weg-, zu-, zurück-, zusammen-. В Präsens/Präteritum приставка отделяется и уходит в конец предложения.",
      "Неотделяемые приставки (никогда не под ударением): be-, ge-, er-, ver-, zer-, ent-, emp-, miss-. Они никогда не отделяются и не получают ge- в Partizip II.",
      "«Двойные» приставки durch-, über-, um-, unter-, wieder-, wider- могут быть и отделяемыми, и неотделяемыми в зависимости от глагола, часто меняя значение: übersetzen (переводить, неотделяемая) vs. übersetzen (перевозить на другой берег, отделяемая: er setzt über).",
    ],
    examples: [
      { de: "Ich stehe jeden Tag um sieben auf.", ru: "Я встаю каждый день в семь." },
      { de: "Er hat den Text sehr gut übersetzt.", ru: "Он очень хорошо перевёл текст." },
    ],
  },
  {
    id: "9.2", number: "9.2", chapterId: "verbtypen", title: "Reflexive Verben", level: "B1",
    body: [
      "Возвратные глаголы используются с возвратным местоимением: sich freuen, sich interessieren, sich erinnern, sich beeilen.",
      "Возвратное местоимение стоит в Akkusativ, если нет другого прямого дополнения: Ich freue mich. Если есть прямое дополнение — местоимение в Dativ: Ich wasche mir die Hände (руки — прямое дополнение, «себе» — Dativ).",
      "Многие глаголы могут употребляться и как обычные (переходные), и как возвратные с разным значением: Ich ärgere ihn (я его злю) vs. Ich ärgere mich (я злюсь).",
    ],
    table: {
      headers: ["Person", "Akkusativ", "Dativ"],
      rows: [
        ["ich", "mich", "mir"],
        ["du", "dich", "dir"],
        ["er/sie/es", "sich", "sich"],
        ["wir", "uns", "uns"],
        ["ihr", "euch", "euch"],
        ["sie/Sie", "sich", "sich"],
      ],
    },
  },

  // 10. Adjektive
  {
    id: "10.1", number: "10.1", chapterId: "adjektive-buch", title: "Adjektivdeklination: полная система", level: "B1",
    body: [
      "После определённого артикля/dieser/jeder (schwache Deklination) прилагательное почти всегда получает -e или -en: сильное окончание несёт уже артикль.",
      "После неопределённого артикля/kein/possessiv (gemischte Deklination) в Nominativ Singular и Akkusativ Singular (кроме мужского рода) прилагательное берёт на себя родовое окончание, в остальных случаях — как после определённого артикля.",
      "Без артикля (starke Deklination) прилагательное само несёт полное окончание падежа и рода, как если бы оно было артиклем.",
    ],
    table: {
      headers: ["Kasus", "nach der/die/das", "nach ein/eine", "ohne Artikel"],
      rows: [
        ["Nom. m.", "der gute Mann", "ein guter Mann", "guter Wein"],
        ["Nom. f.", "die gute Frau", "eine gute Frau", "gute Milch"],
        ["Nom. n.", "das gute Kind", "ein gutes Kind", "gutes Brot"],
        ["Akk. m.", "den guten Mann", "einen guten Mann", "guten Wein"],
        ["Dat. alle", "dem/der guten...", "einem/einer guten...", "gutem/guter..."],
      ],
    },
  },
  {
    id: "10.2", number: "10.2", chapterId: "adjektive-buch", title: "Komparation: сравнительная и превосходная степень", level: "A2",
    body: [
      "Комператив: прилагательное + -er (+ часто умлаут для односложных): schnell → schneller, groß → größer.",
      "Суперлатив: am + прилагательное + -sten (в позиции сказуемого) или прилагательное + -st(e/en) перед существительным: am schnellsten, der schnellste Läufer.",
      "Прилагательные на -d/-t/-s/-ß/-sch/-z получают -esten в суперлативе: am kürzesten, am heißesten.",
    ],
    exceptions: [
      "gut → besser → am besten / der beste",
      "viel → mehr → am meisten / der meiste",
      "gern → lieber → am liebsten",
      "hoch → höher → am höchsten (h выпадает перед -er/-st)",
      "nah → näher → am nächsten",
    ],
    examples: [
      { de: "Berlin ist groß, München ist größer, aber Tokio ist am größten.", ru: "Берлин большой, Мюнхен больше, а Токио самый большой." },
    ],
  },

  // 11. Präpositionen
  {
    id: "11.1", number: "11.1", chapterId: "praepositionen", title: "Präpositionen mit festem Kasus", level: "A2",
    body: [
      "Всегда с Akkusativ: durch, für, gegen, ohne, um, entlang (часто после существительного): durch den Park, für dich, ohne Zucker.",
      "Всегда с Dativ: aus, bei, mit, nach, seit, von, zu, gegenüber, außer: aus Deutschland, bei mir, seit einem Jahr.",
      "Всегда с Genitiv (в основном книжный стиль): während, trotz, wegen, statt/anstatt, außerhalb, innerhalb, aufgrund. В разговорной речи trotz/wegen нередко употребляются с Dativ.",
    ],
    examples: [
      { de: "Trotz des schlechten Wetters gingen wir spazieren.", ru: "Несмотря на плохую погоду, мы пошли гулять." },
      { de: "Wegen der Verspätung habe ich den Zug verpasst.", ru: "Из-за опоздания я не успел на поезд." },
    ],
  },
  {
    id: "11.2", number: "11.2", chapterId: "praepositionen", title: "Wechselpräpositionen: an, auf, in, hinter, neben, über, unter, vor, zwischen", level: "B1",
    body: [
      "Девять предлогов места меняют падеж в зависимости от вопроса: Wo? (где? — состояние, местонахождение) → Dativ. Wohin? (куда? — направление, движение с изменением места) → Akkusativ.",
      "Сравни: Das Buch liegt auf dem Tisch (Dativ, где?) — Ich lege das Buch auf den Tisch (Akkusativ, куда?).",
      "Это одна из самых частых ошибок изучающих: важно определить, есть ли в предложении смысл перемещения/изменения местоположения.",
    ],
    examples: [
      { de: "Die Katze schläft unter dem Bett. (Wo?)", ru: "Кошка спит под кроватью. (Где?)" },
      { de: "Die Katze läuft unter das Bett. (Wohin?)", ru: "Кошка бежит под кровать. (Куда?)" },
    ],
  },

  // 12. Satzbau
  {
    id: "12.1", number: "12.1", chapterId: "satzbau", title: "Позиция глагола: Hauptsatz и Nebensatz", level: "A2",
    body: [
      "В утвердительном главном предложении спрягаемый глагол всегда на 2-м месте — независимо от того, что стоит на 1-м месте (подлежащее, обстоятельство, дополнение).",
      "В вопросах без вопросительного слова (Ja/Nein-Fragen) глагол стоит на 1-м месте: Kommst du morgen?",
      "В придаточном предложении (weil, dass, wenn, obwohl...) спрягаемый глагол уходит в самый конец предложения.",
      "При модальных глаголах, Perfekt, Passiv и др. составных формах образуется Satzklammer (глагольная рамка): спрягаемая часть на 2-м месте, неизменяемая часть (инфинитив/партицип) — в конце.",
    ],
    examples: [
      { de: "Morgen fahre ich nach Berlin.", ru: "Завтра я еду в Берлин." },
      { de: "Ich weiß, dass er heute nicht kommen kann.", ru: "Я знаю, что он сегодня не может прийти." },
    ],
  },
  {
    id: "12.2", number: "12.2", chapterId: "satzbau", title: "TeKaMoLo и порядок дополнений", level: "B1",
    body: [
      "Когда в предложении несколько обстоятельств, они обычно идут в порядке TeKaMoLo: Temporal (когда) – Kausal (почему) – Modal (как) – Lokal (где/куда).",
      "Порядок дополнений: если оба существительные — сначала Dativ, потом Akkusativ. Если одно из них местоимение — местоимение идёт раньше. Если оба местоимения — сначала Akkusativ, потом Dativ.",
    ],
    examples: [
      { de: "Ich fahre morgen wegen der Arbeit mit dem Zug nach Berlin.", ru: "Я еду завтра из-за работы на поезде в Берлин. (Te-Ka-Mo-Lo)" },
      { de: "Ich gebe dem Kind das Buch. → Ich gebe es ihm.", ru: "Я даю ребёнку книгу. → Я даю её ему." },
    ],
  },

  // 13. Verneinung
  {
    id: "13.1", number: "13.1", chapterId: "verneinung", title: "nicht и kein", level: "A2",
    body: [
      "kein/keine отрицает существительное с неопределённым или нулевым артиклем: Ich habe kein Auto. Ich habe keine Zeit.",
      "nicht отрицает существительное с определённым артиклем, глагол, прилагательное, наречие или всё предложение: Ich habe das Auto nicht. Ich komme nicht.",
      "Позиция nicht: если отрицается всё предложение — обычно в конце (перед вторым глаголом, если он есть). Если отрицается конкретный элемент — nicht ставится прямо перед ним.",
    ],
    examples: [
      { de: "Ich verstehe das nicht.", ru: "Я этого не понимаю." },
      { de: "Ich fahre nicht mit dem Bus, sondern mit dem Auto.", ru: "Я еду не на автобусе, а на машине." },
    ],
  },

  // 14. Nebensaetze
  {
    id: "14.1", number: "14.1", chapterId: "nebensaetze-buch", title: "Kausale, konditionale и temporale Nebensätze", level: "B1",
    body: [
      "Kausal (причина): weil, da (da чаще в начале предложения, более книжное) — Ich bleibe zu Hause, weil ich krank bin.",
      "Konditional (условие): wenn — Wenn es regnet, bleibe ich zu Hause. Falls используется для менее вероятных/гипотетических условий.",
      "Temporal (время): wenn (повторяющееся действие/настоящее-будущее), als (однократное действие в прошлом), während (одновременность), bevor/nachdem (до/после), bis, seitdem.",
      "Als используется только для одного законченного события в прошлом: Als ich Kind war, wohnte ich in Moskau. Wenn — для повторяющихся: Wenn ich Zeit hatte, besuchte ich meine Oma.",
    ],
    examples: [
      { de: "Bevor ich schlafen gehe, lese ich immer ein Buch.", ru: "Перед тем как лечь спать, я всегда читаю книгу." },
      { de: "Als ich 18 wurde, zog ich in eine eigene Wohnung.", ru: "Когда мне исполнилось 18, я переехал в свою квартиру." },
    ],
  },
  {
    id: "14.2", number: "14.2", chapterId: "nebensaetze-buch", title: "Konzessiv, konsekutiv, final и Konnektoren", level: "C1",
    body: [
      "Konzessiv (уступка): obwohl, obgleich (союзы, глагол в конец) vs. trotzdem, dennoch (наречия, требуют инверсии в главном предложении).",
      "Konsekutiv (следствие): sodass / so...dass. Final (цель): damit (разные субъекты) / um...zu (один субъект).",
      "Двойные коннекторы: zwar...aber, einerseits...andererseits, sowohl...als auch, weder...noch, entweder...oder, nicht nur...sondern auch, je...desto/umso.",
      "Relativsätze (определительные придаточные): относительное местоимение согласуется в роде/числе с определяемым словом, а падеж определяется его функцией внутри придаточного. С предлогом: Präposition + Relativpronomen (mit dem, für die...). Родительный: dessen (м./ср.р.) / deren (ж.р./мн.ч.).",
    ],
    examples: [
      { de: "Obwohl es regnete, gingen wir spazieren. — Es regnete. Trotzdem gingen wir spazieren.", ru: "Хотя шёл дождь, мы гуляли. — Шёл дождь. Тем не менее мы гуляли." },
      { de: "Je mehr man übt, desto besser wird man.", ru: "Чем больше практикуешься, тем лучше становишься." },
    ],
  },

  // 15. Passiv
  {
    id: "15.1", number: "15.1", chapterId: "passiv-buch", title: "Vorgangspassiv и Zustandspassiv", level: "B1",
    body: [
      "Vorgangspassiv (werden-Passiv) описывает процесс/действие: werden + Partizip II. Das Haus wird gebaut.",
      "Zustandspassiv (sein-Passiv) описывает уже достигнутый результат/состояние: sein + Partizip II. Das Haus ist gebaut.",
      "Исполнитель действия (Agens): von + Dativ для лиц/одушевлённых причин, durch + Akkusativ для безличных причин/средств: Das Fenster wurde vom Sturm zerstört vs. durch den Sturm.",
      "Полная таблица времён Passiv: Präsens — wird gebaut; Präteritum — wurde gebaut; Perfekt — ist gebaut worden; Plusquamperfekt — war gebaut worden; Futur I — wird gebaut werden.",
    ],
    examples: [
      { de: "Der Brief wurde gestern geschrieben und ist heute schon verschickt worden.", ru: "Письмо было написано вчера, и сегодня оно уже отправлено." },
    ],
  },
  {
    id: "15.2", number: "15.2", chapterId: "passiv-buch", title: "Passiv с модальными глаголами и Passiversatzformen", level: "C1",
    body: [
      "Passiv с модальным глаголом: спрягаемый модальный глагол + Partizip II + werden в конце: Die Aufgabe muss erledigt werden.",
      "Passiversatzformen (замены пассива без werden): sich lassen + Infinitiv («можно сделать»): Das Problem lässt sich lösen. sein + zu + Infinitiv («нужно/можно сделать»): Die Aufgabe ist zu erledigen. Прилагательные на -bar/-lich: lösbar, verständlich.",
    ],
    examples: [
      { de: "Diese Frage lässt sich leicht beantworten.", ru: "На этот вопрос легко ответить." },
      { de: "Das Formular ist bis Freitag auszufüllen.", ru: "Форму нужно заполнить до пятницы." },
    ],
  },

  // 16. Konjunktiv
  {
    id: "16.1", number: "16.1", chapterId: "konjunktiv-buch", title: "Konjunktiv II: нереальность, вежливость, советы", level: "B1",
    body: [
      "Образование: würde + Infinitiv (продуктивная форма для большинства глаголов) или простые формы: wäre, hätte, könnte, müsste, dürfte, sollte, wüsste, käme, ginge.",
      "Irreale Bedingungssätze (нереальные условия): Wenn ich Zeit hätte, würde ich mehr lesen.",
      "Konjunktiv II прошедшего времени: hätte/wäre + Partizip II — Wenn ich das gewusst hätte, wäre ich nicht gekommen.",
      "Вежливость и советы: Könnten Sie mir helfen? An deiner Stelle würde ich das nicht machen.",
    ],
    examples: [
      { de: "Ich hätte gern einen Kaffee.", ru: "Я бы хотел кофе." },
    ],
  },
  {
    id: "16.2", number: "16.2", chapterId: "konjunktiv-buch", title: "Konjunktiv I и indirekte Rede", level: "C1",
    body: [
      "Konjunktiv I используется в косвенной речи, особенно в новостях и официальном стиле: er/sie/es + основа + -e (sei, habe, könne, wolle, komme).",
      "Если форма Konjunktiv I совпадает с индикативом, используют Konjunktiv II как замену: Sie sagen, sie hätten (не haben) keine Zeit.",
      "Вопросы в косвенной речи: ob для да/нет-вопросов, вопросительное слово сохраняется для остальных — глагол уходит в конец.",
      "sein в Konjunktiv I полностью неправильный: ich sei, du sei(e)st, er sei, wir seien, ihr seiet, sie seien.",
    ],
    examples: [
      { de: "Er sagte, er sei sehr beschäftigt und habe keine Zeit.", ru: "Он сказал, что очень занят и у него нет времени." },
      { de: "Sie fragte, ob ich morgen Zeit hätte.", ru: "Она спросила, есть ли у меня время завтра." },
    ],
  },

  // 17. Erweiterte Strukturen
  {
    id: "17.1", number: "17.1", chapterId: "erweitert", title: "Infinitiv- и Partizipialkonstruktionen", level: "B2",
    body: [
      "um...zu + Infinitiv (цель, один субъект): Sie lernt, um die Prüfung zu bestehen. damit используется при разных субъектах.",
      "ohne...zu / statt...zu + Infinitiv: Er ging, ohne sich zu verabschieden.",
      "haben/sein + zu + Infinitiv выражает модальность: Die Regeln sind zu beachten (нужно соблюдать).",
      "Partizip I как прилагательное = одновременность/активность (der lachende Mann); Partizip II как прилагательное = завершённость/пассивность (das geschriebene Buch). Partizipialkonstruktionen сокращают придаточные: Die 2020 veröffentlichte Studie zeigt... (вместо: die Studie, die 2020 veröffentlicht wurde).",
    ],
    examples: [
      { de: "Die im Labor durchgeführten Tests bestätigten die Hypothese.", ru: "Проведённые в лаборатории тесты подтвердили гипотезу." },
    ],
  },
  {
    id: "17.2", number: "17.2", chapterId: "erweitert", title: "Nominalisierung", level: "C1",
    body: [
      "Превращение глагола/прилагательного в существительное — признак официального и письменного стиля: entwickeln → die Entwicklung; möglich → die Möglichkeit; ankommen → die Ankunft.",
      "Продуктивные суффиксы и их род: -ung (die), -heit/-keit (die), -tion/-tät (die), -nis (das/die), -tum (das), -er (der, для лиц/приборов).",
      "Nominalisierte Infinitive всегда среднего рода: das Lesen, das Schwimmen — Beim Lesen entspanne ich mich.",
    ],
    examples: [
      { de: "Die Untersuchung des Problems dauerte mehrere Monate.", ru: "Исследование проблемы длилось несколько месяцев." },
    ],
  },

  // 18. Zahlen, Datum, Uhrzeit
  {
    id: "18.1", number: "18.1", chapterId: "zahlen-datum", title: "Kardinal- und Ordinalzahlen", level: "A1",
    body: [
      "Количественные числительные: eins, zwei, drei... zehn, elf, zwölf, dreizehn...zwanzig, einundzwanzig (сначала единицы, потом десятки — «одна-и-двадцать»), hundert, tausend.",
      "Порядковые числительные образуются с -te (4–19) или -ste (от 20): der vierte, der zwanzigste. Исключения: der erste, der dritte, der siebte, der achte.",
      "Даты называют через порядковое числительное с определённым артиклем в Genitiv/Dativ: der 3. Oktober (der dritte Oktober), am 3. Oktober (am dritten Oktober).",
    ],
    examples: [
      { de: "Heute ist der erste Mai.", ru: "Сегодня первое мая." },
      { de: "Ich habe am zwölften Juli Geburtstag.", ru: "У меня день рождения двенадцатого июля." },
    ],
  },
  {
    id: "18.2", number: "18.2", chapterId: "zahlen-datum", title: "Die Uhrzeit", level: "A1",
    body: [
      "Официальный формат (24-часовой, объявления, расписания): Es ist vierzehn Uhr dreißig (14:30).",
      "Разговорный формат (12-часовой): Es ist halb drei (2:30 — «половина третьего», т.е. половина ДО третьего часа, не после!), Viertel nach zwei (2:15), Viertel vor drei (2:45), zehn nach zwei (2:10), zehn vor drei (2:50).",
    ],
    exceptions: ["halb drei = 2:30, а не 3:30 — частая ошибка у русскоговорящих, так как логика обратная русскому «половина третьего»."],
    examples: [
      { de: "Wir treffen uns um Viertel nach acht.", ru: "Мы встречаемся в четверть девятого." },
    ],
  },

  // 19. Unregelmäßige Verben
  {
    id: "19.1", number: "19.1", chapterId: "unregelmaessig", title: "Die wichtigsten unregelmäßigen Verben", level: "A2",
    body: [
      "Формы неправильных (сильных) глаголов не подчиняются общим правилам и их нужно запоминать по трём основным формам: Infinitiv – Präteritum – Partizip II.",
      "В таблице ниже собраны самые частотные неправильные глаголы уровня A1–C1.",
    ],
    table: {
      headers: ["Infinitiv", "Präteritum", "Partizip II", "Перевод"],
      rows: [
        ["sein", "war", "ist gewesen", "быть"],
        ["haben", "hatte", "hat gehabt", "иметь"],
        ["werden", "wurde", "ist geworden", "становиться"],
        ["gehen", "ging", "ist gegangen", "идти"],
        ["kommen", "kam", "ist gekommen", "приходить"],
        ["fahren", "fuhr", "ist gefahren", "ехать"],
        ["fliegen", "flog", "ist geflogen", "лететь"],
        ["sehen", "sah", "hat gesehen", "видеть"],
        ["geben", "gab", "hat gegeben", "давать"],
        ["nehmen", "nahm", "hat genommen", "брать"],
        ["essen", "aß", "hat gegessen", "есть"],
        ["trinken", "trank", "hat getrunken", "пить"],
        ["sprechen", "sprach", "hat gesprochen", "говорить"],
        ["lesen", "las", "hat gelesen", "читать"],
        ["schreiben", "schrieb", "hat geschrieben", "писать"],
        ["finden", "fand", "hat gefunden", "находить"],
        ["helfen", "half", "hat geholfen", "помогать"],
        ["wissen", "wusste", "hat gewusst", "знать"],
        ["denken", "dachte", "hat gedacht", "думать"],
        ["bringen", "brachte", "hat gebracht", "приносить"],
        ["schlafen", "schlief", "hat geschlafen", "спать"],
        ["tragen", "trug", "hat getragen", "нести, носить"],
        ["treffen", "traf", "hat getroffen", "встречать"],
        ["bleiben", "blieb", "ist geblieben", "оставаться"],
        ["beginnen", "begann", "hat begonnen", "начинать"],
        ["verstehen", "verstand", "hat verstanden", "понимать"],
        ["ziehen", "zog", "hat/ist gezogen", "тянуть / переезжать"],
        ["steigen", "stieg", "ist gestiegen", "подниматься"],
        ["verlieren", "verlor", "hat verloren", "терять"],
        ["gewinnen", "gewann", "hat gewonnen", "выигрывать"],
      ],
    },
  },

  // 20. Rechtschreibung
  {
    id: "20.1", number: "20.1", chapterId: "rechtschreibung", title: "Groß- und Kleinschreibung", level: "A2",
    body: [
      "Все существительные пишутся с заглавной буквы независимо от места в предложении: das Haus, eine Idee.",
      "Субстантивированные (превращённые в существительные) прилагательные, причастия и инфинитивы также пишутся с заглавной: das Gute, der Reisende, das Lesen.",
      "Вежливая форма Sie/Ihnen/Ihr всегда с заглавной буквы. Обычные личные местоимения (ich, du, er...) — со строчной.",
    ],
    examples: [
      { de: "Können Sie mir bitte helfen?", ru: "Не могли бы вы мне помочь?" },
    ],
  },
  {
    id: "20.2", number: "20.2", chapterId: "rechtschreibung", title: "Основы пунктуации", level: "B1",
    body: [
      "Запятая обязательна перед придаточным предложением (перед dass, weil, wenn, obwohl и т.д.) и между однородными главными предложениями, соединёнными без союза или союзами aber/sondern/denn.",
      "Перед und и oder, соединяющими два главных предложения, запятая не обязательна (но допустима для ясности).",
      "Инфинитивные обороты с zu (um...zu, ohne...zu, statt...zu) выделяются запятой, если состоят из нескольких слов.",
    ],
    examples: [
      { de: "Ich weiß, dass du recht hast, aber ich kann nichts ändern.", ru: "Я знаю, что ты прав, но я ничего не могу изменить." },
    ],
  },
];
