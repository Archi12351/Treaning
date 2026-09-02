import type { TextbookChapter, TextbookParagraph } from "../../types";

export const TEXTBOOK_CHAPTERS: TextbookChapter[] = [
  { id: "en-ch-verbs-present", number: 1, title: "Present Tenses", levelRange: "A1" },
  { id: "en-ch-articles", number: 2, title: "Articles: a, an, the", levelRange: "A1" },
  { id: "en-ch-plurals", number: 3, title: "Plural Nouns", levelRange: "A1" },
  { id: "en-ch-past", number: 4, title: "Past Tenses", levelRange: "A2" },
  { id: "en-ch-comparison", number: 5, title: "Comparatives & Superlatives", levelRange: "A2" },
  { id: "en-ch-modals", number: 6, title: "Modal Verbs", levelRange: "A2" },
  { id: "en-ch-perfect", number: 7, title: "Present Perfect", levelRange: "B1" },
  { id: "en-ch-conditionals", number: 8, title: "Conditional Sentences", levelRange: "B1" },
];

export const TEXTBOOK_PARAGRAPHS: TextbookParagraph[] = [
  {
    id: "en-p1",
    number: "1.1",
    chapterId: "en-ch-verbs-present",
    title: "Present Simple vs Present Continuous",
    level: "A1",
    body: [
      "Present Simple используется для фактов, привычек и регулярных действий: I work, she works.",
      "В 3-м лице единственного числа (he/she/it) к глаголу добавляется -s: work → works, go → goes.",
      "Present Continuous (am/is/are + -ing) используется для действий, происходящих прямо сейчас: I am working.",
      "Глаголы состояния (know, like, want, believe, love) обычно НЕ используются в Continuous.",
    ],
    examples: [
      { de: "I usually walk to work, but today I am taking the bus.", ru: "Обычно я хожу на работу пешком, но сегодня еду на автобусе." },
      { de: "She knows the answer.", ru: "Она знает ответ." },
    ],
    exceptions: [
      "'have' в значении 'иметь' обычно не используется в Continuous, но 'have' в значении 'принимать пищу' — можно: I'm having lunch.",
    ],
  },
  {
    id: "en-p2",
    number: "2.1",
    chapterId: "en-ch-articles",
    title: "Когда использовать a/an, the или ничего",
    level: "A1",
    body: [
      "'a' перед согласным звуком, 'an' перед гласным звуком: a book, an hour.",
      "Неопределённый артикль — когда предмет упомянут впервые или неважно какой именно.",
      "Определённый артикль 'the' — когда речь о чём-то конкретном и уже известном обоим собеседникам.",
      "Артикль обычно не ставится перед неисчисляемыми существительными и множественным числом в общем смысле: I like music, I like dogs.",
    ],
    examples: [
      { de: "I bought a book. The book was very interesting.", ru: "Я купил книгу. Книга была очень интересной." },
      { de: "She is an honest person.", ru: "Она честный человек." },
    ],
  },
  {
    id: "en-p3",
    number: "3.1",
    chapterId: "en-ch-plurals",
    title: "Образование множественного числа",
    level: "A1",
    body: [
      "Обычно множественное число образуется добавлением -s: cat → cats, book → books.",
      "После шипящих (s, ss, sh, ch, x, z) добавляется -es: box → boxes, watch → watches.",
      "Существительные на согласную + y меняют y на i и добавляют -es: city → cities.",
      "Есть неправильные формы, которые нужно запомнить.",
    ],
    examples: [
      { de: "I have two children and three cats.", ru: "У меня двое детей и три кошки." },
    ],
    table: {
      headers: ["Единственное", "Множественное"],
      rows: [
        ["man", "men"],
        ["woman", "women"],
        ["child", "children"],
        ["foot", "feet"],
        ["tooth", "teeth"],
        ["mouse", "mice"],
      ],
    },
  },
  {
    id: "en-p4",
    number: "4.1",
    chapterId: "en-ch-past",
    title: "Past Simple: правильные и неправильные глаголы",
    level: "A2",
    body: [
      "Правильные глаголы образуют Past Simple добавлением -ed: work → worked, play → played.",
      "Неправильные глаголы имеют особые формы, которые нужно запоминать наизусть: go → went, see → saw, eat → ate.",
      "Вопросы и отрицания строятся с did/didn't + основа глагола (без -ed).",
    ],
    examples: [
      { de: "I visited my grandmother last weekend.", ru: "Я навестил бабушку в прошлые выходные." },
      { de: "Did you see that film? — No, I didn't.", ru: "Ты видел этот фильм? — Нет, не видел." },
    ],
    exceptions: [
      "После did/didn't глагол всегда стоит в начальной форме, даже если он неправильный: Did you go (не went)?",
    ],
  },
  {
    id: "en-p5",
    number: "5.1",
    chapterId: "en-ch-comparison",
    title: "Сравнительная и превосходная степень",
    level: "A2",
    body: [
      "Короткие прилагательные (1 слог): -er / the -est. tall → taller → the tallest.",
      "Длинные прилагательные (2+ слога): more / the most. expensive → more expensive → the most expensive.",
      "Прилагательные на -y меняют y на i: happy → happier → the happiest.",
    ],
    examples: [
      { de: "This is the most beautiful city I've ever seen.", ru: "Это самый красивый город, который я когда-либо видел." },
    ],
    table: {
      headers: ["Прилагательное", "Сравнительная", "Превосходная"],
      rows: [
        ["good", "better", "the best"],
        ["bad", "worse", "the worst"],
        ["far", "further", "the furthest"],
      ],
    },
  },
  {
    id: "en-p6",
    number: "6.1",
    chapterId: "en-ch-modals",
    title: "Основные модальные глаголы",
    level: "A2",
    body: [
      "can — способность/разрешение: I can swim.",
      "must / mustn't — обязанность / строгий запрет: You must wear a helmet. You mustn't smoke here.",
      "should — совет: You should see a doctor.",
      "may / might — предположение или вежливое разрешение: It may rain later.",
    ],
    examples: [
      { de: "You don't have to come if you don't want to.", ru: "Тебе не обязательно приходить, если не хочешь." },
    ],
    exceptions: [
      "'mustn't' (нельзя) и 'don't have to' (не обязательно) имеют совершенно разный смысл — частая ошибка учащихся.",
    ],
  },
  {
    id: "en-p7",
    number: "7.1",
    chapterId: "en-ch-perfect",
    title: "Present Perfect: опыт и связь с настоящим",
    level: "B1",
    body: [
      "Present Perfect = have/has + Participle II (3-я форма глагола).",
      "Используется для жизненного опыта без указания точного времени: I have been to Italy.",
      "Используется для действий, начавшихся в прошлом и продолжающихся сейчас, со словами since/for.",
      "Present Simple используется с конкретным указанием времени в прошлом (yesterday, in 2020) — тогда как Present Perfect — нет.",
    ],
    examples: [
      { de: "I have already finished my homework.", ru: "Я уже закончил домашнее задание." },
      { de: "We have known each other for ten years.", ru: "Мы знакомы уже десять лет." },
    ],
  },
  {
    id: "en-p8",
    number: "8.1",
    chapterId: "en-ch-conditionals",
    title: "Условные предложения: First и Second Conditional",
    level: "B1",
    body: [
      "First Conditional (реальное будущее условие): If + Present Simple, will + инфинитив.",
      "Second Conditional (гипотетическая, маловероятная ситуация): If + Past Simple, would + инфинитив.",
      "В Second Conditional для всех лиц (включая I/he/she) часто используется 'were' вместо 'was'.",
    ],
    examples: [
      { de: "If I have time tomorrow, I will call you.", ru: "Если у меня будет время завтра, я тебе позвоню." },
      { de: "If I were you, I would apologize.", ru: "На твоём месте я бы извинился." },
    ],
  },
];
