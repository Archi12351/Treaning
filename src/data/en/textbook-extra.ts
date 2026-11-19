import type { TextbookChapter, TextbookParagraph } from "../../types";

export const EN_EXTRA_CHAPTERS: TextbookChapter[] = [
  { id: "en-ch-pronunciation", number: 9, title: "Pronunciation & Spelling", levelRange: "A1" },
  { id: "en-ch-be-have", number: 10, title: "To be, have got, there is", levelRange: "A1" },
  { id: "en-ch-pronouns", number: 11, title: "Pronouns & Possessives", levelRange: "A1" },
  { id: "en-ch-quantifiers", number: 12, title: "Countable & Uncountable Nouns", levelRange: "A2" },
  { id: "en-ch-prepositions", number: 13, title: "Prepositions", levelRange: "A2" },
  { id: "en-ch-future", number: 14, title: "Future Forms", levelRange: "A2–B1" },
  { id: "en-ch-questions", number: 15, title: "Questions & Word Order", levelRange: "A2–B1" },
  { id: "en-ch-passive", number: 16, title: "The Passive", levelRange: "B1" },
  { id: "en-ch-relative", number: 17, title: "Relative Clauses", levelRange: "B1" },
  { id: "en-ch-reported", number: 18, title: "Reported Speech", levelRange: "B2" },
  { id: "en-ch-verb-patterns", number: 19, title: "Verb Patterns: -ing or to", levelRange: "B2" },
  { id: "en-ch-advanced", number: 20, title: "Inversion, Emphasis & Formal Style", levelRange: "C1–C2" },
];

export const EN_EXTRA_PARAGRAPHS: TextbookParagraph[] = [
  {
    id: "en-p9-1", number: "9.1", chapterId: "en-ch-pronunciation", level: "A1",
    title: "Звуки, которых нет в русском",
    body: [
      "th: глухой [θ] (think, three) и звонкий [ð] (this, mother) — кончик языка между зубами, не «с»/«з».",
      "w [w] — губы трубочкой, не «в»: water, window. v [v] — как русское «в»: very.",
      "Долгие и краткие гласные различают слова: ship [ɪ] — sheep [iː], full [ʊ] — fool [uː].",
      "Звонкие согласные на конце слова НЕ оглушаются: bed ≠ bet, bag ≠ back.",
      "r в британском варианте после гласной не произносится (car [kɑː]), в американском — произносится.",
    ],
    examples: [
      { de: "I think this is the third thing.", ru: "Думаю, это третья вещь." },
      { de: "Is it a ship or a sheep?", ru: "Это корабль или овца?" },
    ],
  },
  {
    id: "en-p9-2", number: "9.2", chapterId: "en-ch-pronunciation", level: "A1",
    title: "Окончание -s и -ed",
    body: [
      "-s/-es читается [s] после глухих (cats, works), [z] после звонких и гласных (dogs, plays), [ɪz] после шипящих (buses, watches).",
      "-ed читается [t] после глухих (worked, stopped), [d] после звонких (played, lived), [ɪd] после t/d (wanted, needed).",
    ],
    table: {
      headers: ["Окончание", "[t]/[s]", "[d]/[z]", "[ɪd]/[ɪz]"],
      rows: [
        ["-ed", "worked, washed", "played, opened", "wanted, ended"],
        ["-s", "books, likes", "pens, goes", "boxes, changes"],
      ],
    },
  },
  {
    id: "en-p10-1", number: "10.1", chapterId: "en-ch-be-have", level: "A1",
    title: "Глагол to be",
    body: [
      "В английском в предложении всегда есть глагол. Там, где по-русски «Я врач», по-английски нужен be: I am a doctor.",
      "Возраст, профессия, состояние, место — через be: I'm 30. She's tired. We're at home.",
      "Вопрос — перестановка: Are you ready? Отрицание — not: It isn't far.",
    ],
    table: {
      headers: ["Лицо", "+", "−", "?"],
      rows: [
        ["I", "I am (I'm)", "I'm not", "Am I?"],
        ["he/she/it", "is ('s)", "isn't", "Is he?"],
        ["we/you/they", "are ('re)", "aren't", "Are you?"],
      ],
    },
    exceptions: ["Короткие ответы без сокращения в утверждении: Yes, I am (не Yes, I'm)."],
  },
  {
    id: "en-p10-2", number: "10.2", chapterId: "en-ch-be-have", level: "A1",
    title: "have / have got и there is / there are",
    body: [
      "«У меня есть» = I have (амер., универсально) или I've got (брит., разговорное).",
      "Вопрос и отрицание: Do you have…? / I don't have… либо Have you got…? / I haven't got…",
      "Сообщить о наличии чего-то где-то: There is a café nearby. There are two parks. Не путать с it is: It is a nice café.",
    ],
    examples: [
      { de: "Do you have a pen? — Sorry, I don't.", ru: "У тебя есть ручка? — Извини, нет." },
      { de: "There's a problem with my visa.", ru: "С моей визой проблема." },
    ],
  },
  {
    id: "en-p11-1", number: "11.1", chapterId: "en-ch-pronouns", level: "A1",
    title: "Личные, объектные и притяжательные местоимения",
    body: [
      "После глагола и предлога — объектная форма: She loves him. Come with me.",
      "Притяжательное прилагательное стоит перед существительным (my car), местоимение — вместо него (it's mine).",
      "Возвратные: myself, yourself, himself… — I cut myself. Но многие русские возвратные глаголы в английском без -self: I wash, I feel, we meet.",
    ],
    table: {
      headers: ["Подлежащее", "Объект", "Перед сущ.", "Без сущ."],
      rows: [
        ["I", "me", "my", "mine"],
        ["you", "you", "your", "yours"],
        ["he", "him", "his", "his"],
        ["she", "her", "her", "hers"],
        ["it", "it", "its", "—"],
        ["we", "us", "our", "ours"],
        ["they", "them", "their", "theirs"],
      ],
    },
  },
  {
    id: "en-p12-1", number: "12.1", chapterId: "en-ch-quantifiers", level: "A2",
    title: "Исчисляемые и неисчисляемые",
    body: [
      "Неисчисляемые не имеют множественного числа и артикля a/an: water, money, advice, information, news, furniture, luggage, homework, weather.",
      "Чтобы посчитать — единица измерения: a piece of advice, a glass of water, a loaf of bread.",
      "many/few — с исчисляемыми, much/little — с неисчисляемыми, a lot of — с любыми.",
    ],
    exceptions: [
      "Ловушки для русскоговорящих: «советы», «новости», «деньги», «информация», «мебель», «багаж» в английском — неисчисляемые и единственного числа: The news is good. My luggage is heavy.",
      "people — множественное: People are friendly.",
    ],
  },
  {
    id: "en-p13-1", number: "13.1", chapterId: "en-ch-prepositions", level: "A2",
    title: "in / on / at: время и место",
    body: [
      "Время: at 5 pm, at night, at the weekend (брит.); on Monday, on 1 May, on my birthday; in May, in 2024, in summer, in the morning.",
      "Место: at the door, at work, at school (точка/функция); on the table, on the wall, on the second floor (поверхность); in the room, in London, in the car (внутри).",
      "Без предлога: next week, last year, this morning, tomorrow, home (go home).",
    ],
    examples: [
      { de: "I'll be at the office on Monday morning.", ru: "Я буду в офисе в понедельник утром." },
      { de: "She arrived in Berlin last night.", ru: "Она прилетела в Берлин вчера вечером." },
    ],
    exceptions: ["arrive in (город/страна), arrive at (здание/станция); никогда arrive to."],
  },
  {
    id: "en-p13-2", number: "13.2", chapterId: "en-ch-prepositions", level: "B1",
    title: "Глаголы и прилагательные с предлогами",
    body: [
      "Предлог часто не совпадает с русским: depend on (зависеть от), listen to (слушать), wait for (ждать), pay for (платить за), apply for (подавать на), be interested in, be good at, be afraid of, be married to.",
      "После предлога глагол — в форме -ing: I'm interested in moving abroad.",
    ],
  },
  {
    id: "en-p14-1", number: "14.1", chapterId: "en-ch-future", level: "A2",
    title: "will, going to, Present Continuous",
    body: [
      "will — решение в момент речи, обещание, мнение о будущем: I'll take it. I think he'll win.",
      "going to — план, принятый заранее, или вывод из очевидного: I'm going to apply for a visa. Watch out — you're going to fall!",
      "Present Continuous — договорённость (с кем-то, на время): We're meeting the landlord at 6.",
      "После when, if, as soon as, before, until о будущем — Present Simple: I'll call you when I arrive (не when I will arrive).",
    ],
  },
  {
    id: "en-p14-2", number: "14.2", chapterId: "en-ch-future", level: "B1",
    title: "Future Continuous и Future Perfect",
    body: [
      "Future Continuous (will be doing) — процесс в момент будущего: This time tomorrow I'll be flying to London.",
      "Future Perfect (will have done) — действие завершится к моменту в будущем: By June I'll have finished the course.",
    ],
  },
  {
    id: "en-p15-1", number: "15.1", chapterId: "en-ch-questions", level: "A2",
    title: "Порядок слов в вопросах",
    body: [
      "Схема: (вопросительное слово) + вспомогательный глагол + подлежащее + смысловой глагол: Where do you live? What did she say? Have you finished?",
      "Если вопрос к подлежащему, вспомогательный глагол не нужен: Who called you? What happened?",
      "Косвенные (вежливые) вопросы — прямой порядок: Could you tell me where the station is? Do you know what time it opens?",
      "Разделительные вопросы: You're from Moscow, aren't you? She doesn't eat meat, does she?",
    ],
    examples: [
      { de: "Who told you that? — Anna did.", ru: "Кто тебе это сказал? — Анна." },
      { de: "Could you tell me how much it costs?", ru: "Не подскажете, сколько это стоит?" },
    ],
  },
  {
    id: "en-p16-1", number: "16.1", chapterId: "en-ch-passive", level: "B1",
    title: "Образование пассива",
    body: [
      "be (в нужном времени) + V3: The form must be signed. The decision has been made. You will be informed.",
      "Пассив типичен для официальных писем и инструкций — важно узнавать его в письмах от ведомств и работодателей.",
      "have something done — когда услугу выполняет кто-то другой: I had my hair cut. We're having the flat painted.",
    ],
    table: {
      headers: ["Время", "Актив", "Пассив"],
      rows: [
        ["Present Simple", "They check the documents.", "The documents are checked."],
        ["Past Simple", "They checked the documents.", "The documents were checked."],
        ["Present Perfect", "They have checked…", "…have been checked."],
        ["Future", "They will check…", "…will be checked."],
        ["Modal", "You must sign it.", "It must be signed."],
      ],
    },
  },
  {
    id: "en-p17-1", number: "17.1", chapterId: "en-ch-relative", level: "B1",
    title: "who, which, that, whose, where",
    body: [
      "who/that — люди, which/that — предметы, whose — принадлежность, where — место, when — время.",
      "Определительные (без запятых) уточняют, о ком речь; неопределительные (с запятыми) добавляют информацию и не допускают that.",
      "Местоимение-дополнение можно опустить: The flat (that) we saw was too small.",
    ],
  },
  {
    id: "en-p18-1", number: "18.1", chapterId: "en-ch-reported", level: "B2",
    title: "Сдвиг времён и указателей",
    body: [
      "После said/told/asked время «отступает назад»: present → past, past → past perfect, will → would, can → could, must → had to.",
      "Если сказанное остаётся верным, сдвиг не обязателен: He said he lives in Paris.",
      "Указатели: now → then, today → that day, yesterday → the day before, tomorrow → the next day, here → there, this → that.",
    ],
    table: {
      headers: ["Прямая речь", "Косвенная речь"],
      rows: [
        ["\"I work here.\"", "He said he worked there."],
        ["\"I'll help.\"", "She said she would help."],
        ["\"Did you see it?\"", "He asked if I had seen it."],
        ["\"Don't touch it!\"", "She told me not to touch it."],
      ],
    },
  },
  {
    id: "en-p19-1", number: "19.1", chapterId: "en-ch-verb-patterns", level: "B2",
    title: "Глагол + -ing или to + глагол",
    body: [
      "+ -ing: enjoy, mind, avoid, finish, suggest, consider, keep, practise, can't stand, look forward to, be used to.",
      "+ to: want, need, decide, hope, plan, agree, refuse, promise, manage, afford, seem, would like.",
      "+ объект + to: ask/tell/advise/allow/want someone to do.",
      "Меняют смысл: stop, remember, forget, try, regret, go on.",
    ],
    examples: [
      { de: "I'm used to getting up early.", ru: "Я привык рано вставать." },
      { de: "I used to live in Kyiv.", ru: "Раньше я жил в Киеве." },
    ],
    exceptions: ["be used to doing (привык) ≠ used to do (раньше делал, сейчас нет)."],
  },
  {
    id: "en-p20-1", number: "20.1", chapterId: "en-ch-advanced", level: "C1",
    title: "Инверсия и эмфаза",
    body: [
      "Отрицательные и ограничительные наречия в начале требуют инверсии: Never have I…, Rarely does…, Not only did…, Only then did…, Under no circumstances should…",
      "Условия без if: Should you have any questions… Had I known… Were it not for…",
      "Выделение: It was the price that put me off. What I really need is time. All I want is a quiet life.",
      "Do для усиления в утверждении: I do understand. She did call you!",
    ],
  },
  {
    id: "en-p20-2", number: "20.2", chapterId: "en-ch-advanced", level: "C2",
    title: "Формальный и неформальный стиль",
    body: [
      "Формальный английский предпочитает латинские слова и пассив: obtain (get), require (need), commence (start), assist (help), it is recommended that…",
      "Неформальный — фразовые глаголы и сокращения: get, need, start, help out, I'd, gonna (только устно).",
      "В деловых письмах: I am writing to enquire about… / I would be grateful if you could… / Please do not hesitate to contact me.",
      "Hedging (смягчение) в академической речи: It would appear that…, This may suggest…, There is some evidence that…",
    ],
  },
];
