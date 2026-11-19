import type { TextbookChapter, TextbookParagraph } from "../../types";

export const TEXTBOOK_CHAPTERS: TextbookChapter[] = [
  { id: "fr-ch-prononciation", number: 1, title: "Prononciation & orthographe", levelRange: "A1" },
  { id: "fr-ch-noms", number: 2, title: "Le nom: genre et nombre", levelRange: "A1" },
  { id: "fr-ch-articles", number: 3, title: "Les articles", levelRange: "A1" },
  { id: "fr-ch-present", number: 4, title: "Le présent", levelRange: "A1" },
  { id: "fr-ch-negation", number: 5, title: "Négation & questions", levelRange: "A1" },
  { id: "fr-ch-adjectifs", number: 6, title: "Les adjectifs", levelRange: "A1–A2" },
  { id: "fr-ch-possessifs", number: 7, title: "Possessifs & démonstratifs", levelRange: "A1–A2" },
  { id: "fr-ch-prepositions", number: 8, title: "Les prépositions", levelRange: "A2" },
  { id: "fr-ch-passe", number: 9, title: "Passé composé & imparfait", levelRange: "A2–B1" },
  { id: "fr-ch-futur", number: 10, title: "Le futur", levelRange: "A2" },
  { id: "fr-ch-pronoms", number: 11, title: "Les pronoms compléments", levelRange: "B1" },
  { id: "fr-ch-relatifs", number: 12, title: "Les pronoms relatifs", levelRange: "B1" },
  { id: "fr-ch-conditionnel", number: 13, title: "Conditionnel & hypothèse", levelRange: "B1–B2" },
  { id: "fr-ch-subjonctif", number: 14, title: "Le subjonctif", levelRange: "B2" },
  { id: "fr-ch-passif", number: 15, title: "Passif, gérondif, participe", levelRange: "B2" },
  { id: "fr-ch-discours", number: 16, title: "Discours indirect", levelRange: "B2" },
  { id: "fr-ch-ecrit", number: 17, title: "Écrit formel & lettres", levelRange: "B2–C1" },
  { id: "fr-ch-soutenu", number: 18, title: "Langue soutenue & littéraire", levelRange: "C1–C2" },
];

export const TEXTBOOK_PARAGRAPHS: TextbookParagraph[] = [
  {
    id: "fr-p1-1", number: "1.1", chapterId: "fr-ch-prononciation", level: "A1",
    title: "Главные правила чтения",
    body: [
      "Конечные согласные обычно не читаются: petit [пти], Paris [пари], vous [ву]. Исключения часто — c, r, f, l (CaReFuL): avec, bonjour, neuf, sel.",
      "Конечная -e не читается: table [табль]. -ent в глаголах 3-го лица мн.ч. не читается: ils parlent [иль парль].",
      "Ударение всегда на последний слог: café, Paris, restaurant.",
      "ou = [у], oi = [уа], au/eau = [о], ai = [э], eu = [ё], u = [ю] (губы как для «у», язык как для «и»).",
      "Носовые: an/en [ɑ̃], in/ain [ɛ̃], on [ɔ̃], un [œ̃] — звук идёт в нос, «н» не произносится.",
    ],
    examples: [
      { de: "Bonjour, je voudrais un croissant.", ru: "Здравствуйте, я бы хотел круассан." },
      { de: "Il fait beau aujourd'hui.", ru: "Сегодня хорошая погода." },
    ],
  },
  {
    id: "fr-p1-2", number: "1.2", chapterId: "fr-ch-prononciation", level: "A1",
    title: "Liaison и élision",
    body: [
      "Liaison — связывание: немая конечная согласная читается перед гласной следующего слова: vous‿avez [вузаве], les‿enfants [лезанфан].",
      "s и x в связке звучат как [z], d — как [t]: un grand‿homme [ан грантом].",
      "Élision — выпадение гласной перед гласной или немой h: le + homme = l'homme, je + aime = j'aime, que + il = qu'il, si + il = s'il.",
      "Перед h aspiré (le héros, la honte) нет ни связки, ни элизии.",
    ],
  },
  {
    id: "fr-p2-1", number: "2.1", chapterId: "fr-ch-noms", level: "A1",
    title: "Род существительных",
    body: [
      "Во французском два рода — мужской и женский. Род нужно учить вместе со словом (с артиклем).",
      "Чаще женского рода: -tion, -sion (la nation), -té (la liberté), -ette (la baguette), -ure (la voiture), -ence/-ance (la chance).",
      "Чаще мужского рода: -ment (le gouvernement), -age (le fromage — но la page, la plage, l'image f.), -eau (le bateau — но l'eau f.), -isme.",
      "Род часто не совпадает с русским: la voiture (ж.р.), le problème (м.р.), la mer (ж.р.), le lait (м.р.).",
    ],
    exceptions: ["Ловушки: la page, la plage, la cage, l'image (ж.р., хотя на -age); le musée, le lycée (м.р., хотя на -ée)."],
  },
  {
    id: "fr-p2-2", number: "2.2", chapterId: "fr-ch-noms", level: "A1",
    title: "Множественное число",
    body: [
      "Обычно + -s (не читается): un livre → des livres.",
      "-s, -x, -z не меняются: le prix → les prix, le nez → les nez.",
      "-eau, -eu → + -x: le bateau → les bateaux, le jeu → les jeux. -al → -aux: le journal → les journaux.",
      "Особые: l'œil → les yeux, monsieur → messieurs, madame → mesdames.",
    ],
  },
  {
    id: "fr-p3-1", number: "3.1", chapterId: "fr-ch-articles", level: "A1",
    title: "Три артикля",
    body: [
      "Определённый le/la/l'/les — конкретное или общее понятие, вкусы: J'aime le fromage. Le livre de Pierre.",
      "Неопределённый un/une/des — один из, впервые упоминается: J'ai une voiture.",
      "Частичный du/de la/de l' — неисчисляемая часть: Je mange du pain. Il a de la chance.",
      "После отрицания и выражений количества (beaucoup de, un peu de, un kilo de) — просто de: Je n'ai pas de voiture. Beaucoup de gens.",
    ],
    table: {
      headers: ["", "м.р.", "ж.р.", "перед гласной", "мн.ч."],
      rows: [
        ["Определённый", "le", "la", "l'", "les"],
        ["Неопределённый", "un", "une", "un/une", "des"],
        ["Частичный", "du", "de la", "de l'", "des"],
      ],
    },
  },
  {
    id: "fr-p4-1", number: "4.1", chapterId: "fr-ch-present", level: "A1",
    title: "Три группы глаголов",
    body: [
      "1-я группа (-er, ~90% глаголов): parler — je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent.",
      "2-я группа (-ir с -iss-): finir — je finis, nous finissons, ils finissent.",
      "3-я группа — неправильные (être, avoir, aller, faire, prendre, venir, pouvoir, vouloir, devoir, savoir…). Их спряжение нужно выучить.",
      "Présent переводит и «делаю», и «делаю сейчас»: Je travaille = я работаю / я сейчас работаю. Для подчёркивания процесса: Je suis en train de travailler.",
    ],
    table: {
      headers: ["", "parler", "finir", "être", "avoir", "aller", "faire"],
      rows: [
        ["je", "parle", "finis", "suis", "ai", "vais", "fais"],
        ["tu", "parles", "finis", "es", "as", "vas", "fais"],
        ["il/elle", "parle", "finit", "est", "a", "va", "fait"],
        ["nous", "parlons", "finissons", "sommes", "avons", "allons", "faisons"],
        ["vous", "parlez", "finissez", "êtes", "avez", "allez", "faites"],
        ["ils/elles", "parlent", "finissent", "sont", "ont", "vont", "font"],
      ],
    },
  },
  {
    id: "fr-p5-1", number: "5.1", chapterId: "fr-ch-negation", level: "A1",
    title: "Отрицание и вопрос",
    body: [
      "ne … pas обнимает спрягаемый глагол: Je ne parle pas. В сложных временах — вспомогательный: Je n'ai pas mangé.",
      "Другие отрицания: ne … jamais, ne … plus, ne … rien, ne … personne, ne … que (только: Je n'ai que dix euros).",
      "Вопрос: интонацией (Tu viens ?), с est-ce que (Est-ce que tu viens ?), инверсией (Viens-tu ?). При инверсии с il/elle между гласными вставляется -t-: Parle-t-il français ?",
    ],
  },
  {
    id: "fr-p6-1", number: "6.1", chapterId: "fr-ch-adjectifs", level: "A1",
    title: "Согласование и место прилагательных",
    body: [
      "Прилагательное согласуется в роде и числе: un grand appartement, une grande maison, de grandes maisons.",
      "Обычно после существительного (цвет, национальность, форма): un livre intéressant, une femme française.",
      "Перед существительным — короткие частые (BAGS: Beauty, Age, Goodness, Size): beau, joli, jeune, vieux, nouveau, bon, mauvais, grand, petit.",
      "Иногда место меняет смысл: un grand homme (великий) / un homme grand (высокий); mon ancien collègue (бывший) / un meuble ancien (старинный).",
    ],
  },
  {
    id: "fr-p7-1", number: "7.1", chapterId: "fr-ch-possessifs", level: "A1",
    title: "Притяжательные и указательные",
    body: [
      "Притяжательные согласуются с предметом, а не с владельцем: son livre (его/её книга), sa voiture (его/её машина).",
      "Перед гласной в ж.р. — mon/ton/son: mon amie, son école.",
      "Указательные: ce (м.р.), cet (м.р. перед гласной), cette (ж.р.), ces (мн.ч.): ce livre, cet homme, cette ville, ces gens.",
    ],
    table: {
      headers: ["", "м.р.", "ж.р.", "мн.ч."],
      rows: [
        ["je", "mon", "ma", "mes"],
        ["tu", "ton", "ta", "tes"],
        ["il/elle", "son", "sa", "ses"],
        ["nous", "notre", "notre", "nos"],
        ["vous", "votre", "votre", "vos"],
        ["ils/elles", "leur", "leur", "leurs"],
      ],
    },
  },
  {
    id: "fr-p8-1", number: "8.1", chapterId: "fr-ch-prepositions", level: "A2",
    title: "Предлоги места и стран",
    body: [
      "à + город: à Paris, à Moscou. en + страна ж.р. или на гласную: en France, en Russie, en Iran. au + страна м.р.: au Canada, au Japon. aux + мн.ч.: aux États-Unis.",
      "chez + человек: chez le médecin, chez moi (у меня дома).",
      "dans — внутри: dans la boîte; sur — на: sur la table; sous — под; devant/derrière; à côté de; en face de; entre.",
      "Транспорт: en voiture, en train, en avion, en bus; но à pied, à vélo.",
    ],
  },
  {
    id: "fr-p9-1", number: "9.1", chapterId: "fr-ch-passe", level: "A2",
    title: "Passé composé",
    body: [
      "avoir/être + participe passé. Большинство глаголов — с avoir: J'ai mangé, Il a fini.",
      "С être: глаголы перемещения/изменения состояния (Dr & Mrs Vandertramp: devenir, revenir, monter, rester, sortir, venir, aller, naître, descendre, entrer, rentrer, tomber, retourner, arriver, mourir, partir) и все возвратные.",
      "С être причастие согласуется с подлежащим: Elle est arrivée, Ils sont partis.",
      "С avoir согласуется только с прямым дополнением, стоящим перед глаголом: Les photos que j'ai prises.",
    ],
  },
  {
    id: "fr-p9-2", number: "9.2", chapterId: "fr-ch-passe", level: "B1",
    title: "Imparfait и plus-que-parfait",
    body: [
      "Imparfait: nous-основа + -ais, -ais, -ait, -ions, -iez, -aient (nous avons → j'avais). Исключение: être → j'étais.",
      "Imparfait — описание, фон, привычки в прошлом; passé composé — законченные события.",
      "Plus-que-parfait: avoir/être в imparfait + participe — действие раньше другого прошедшего: Quand je suis arrivé, il était déjà parti.",
    ],
  },
  {
    id: "fr-p10-1", number: "10.1", chapterId: "fr-ch-futur", level: "A2",
    title: "Futur proche и futur simple",
    body: [
      "Futur proche (aller + инфинитив) — разговорное ближайшее будущее: Je vais téléphoner.",
      "Futur simple — инфинитив + -ai, -as, -a, -ons, -ez, -ont. Неправильные основы: ser-, aur-, ir-, fer-, pourr-, voudr-, viendr-, verr-, devr-, saur-, faudr- (il faudra).",
      "После quand, dès que, lorsque о будущем — futur (не présent, как в английском): Quand je serai à Paris, je t'appellerai.",
      "Futur antérieur (aurai fini) — завершится к моменту в будущем.",
    ],
  },
  {
    id: "fr-p11-1", number: "11.1", chapterId: "fr-ch-pronoms", level: "B1",
    title: "le, lui, y, en — порядок",
    body: [
      "COD: le, la, les; COI (à + человек): lui, leur; y — à + вещь/место; en — de + вещь/количество.",
      "Порядок перед глаголом: me/te/se/nous/vous → le/la/les → lui/leur → y → en. Il me le donne. Je le lui donne. Il y en a.",
      "В утвердительном императиве — после глагола, через дефис: Donne-le-moi ! Vas-y !",
    ],
  },
  {
    id: "fr-p12-1", number: "12.1", chapterId: "fr-ch-relatifs", level: "B1",
    title: "qui, que, où, dont, lequel",
    body: [
      "qui — подлежащее, que — прямое дополнение, où — место/время, dont — de + …",
      "После предлогов — lequel/laquelle/lesquels (avec lequel, pour laquelle), с à и de сливаются: auquel, duquel. Для людей после предлога можно qui: la personne avec qui je travaille.",
      "ce qui / ce que / ce dont — «то, что»: Ce dont j'ai besoin, c'est de repos.",
    ],
  },
  {
    id: "fr-p13-1", number: "13.1", chapterId: "fr-ch-conditionnel", level: "B1",
    title: "Conditionnel и фразы с si",
    body: [
      "Conditionnel présent = основа futur + окончания imparfait: je serais, j'aurais, j'irais, je ferais.",
      "Применение: вежливость (Je voudrais…), совет (Tu devrais…), предположение/слух в новостях (Le président serait malade — по сообщениям).",
      "Три типа si: si + présent → futur; si + imparfait → conditionnel présent; si + plus-que-parfait → conditionnel passé.",
    ],
    table: {
      headers: ["Тип", "si …", "главная часть", "Пример"],
      rows: [
        ["Реальный", "présent", "futur / présent", "Si tu veux, on ira."],
        ["Нереальный (сейчас)", "imparfait", "conditionnel présent", "Si j'étais riche, je voyagerais."],
        ["Нереальный (прошлое)", "plus-que-parfait", "conditionnel passé", "Si j'avais su, je serais venu."],
      ],
    },
  },
  {
    id: "fr-p14-1", number: "14.1", chapterId: "fr-ch-subjonctif", level: "B2",
    title: "Когда нужен subjonctif",
    body: [
      "Необходимость: il faut que, il est nécessaire que. Желание/воля: vouloir que, souhaiter que, exiger que.",
      "Эмоции: être content/triste/surpris que, avoir peur que, regretter que.",
      "Сомнение, отрицание мнения: douter que, ne pas penser que, ne pas croire que.",
      "Союзы: bien que, quoique, pour que, afin que, avant que, à condition que, sans que, jusqu'à ce que.",
      "НО après que, pendant que, parce que, je pense que — индикатив.",
    ],
  },
  {
    id: "fr-p15-1", number: "15.1", chapterId: "fr-ch-passif", level: "B2",
    title: "Пассив, gérondif, participe présent",
    body: [
      "Пассив: être + participe (согласуется): Le contrat a été signé. Во французском пассив реже, чем в английском — часто используют on или возвратную форму: Ça se vend bien.",
      "Gérondif (en + -ant) относится к подлежащему: одновременность, способ, условие.",
      "Participe présent (без en) — книжная замена qui + глагол: Les personnes ayant un visa… (= qui ont un visa). Не согласуется.",
    ],
  },
  {
    id: "fr-p16-1", number: "16.1", chapterId: "fr-ch-discours", level: "B2",
    title: "Косвенная речь",
    body: [
      "Если вводящий глагол в прошедшем: présent → imparfait, passé composé → plus-que-parfait, futur → conditionnel, futur proche → aller в imparfait.",
      "Вопросы: est-ce que → si, qu'est-ce que → ce que, qu'est-ce qui → ce qui; инверсия снимается.",
      "Повелительное → de + инфинитив: « Viens ! » → Il m'a dit de venir.",
      "Время и место: aujourd'hui → ce jour-là, hier → la veille, demain → le lendemain, ici → là.",
    ],
  },
  {
    id: "fr-p17-1", number: "17.1", chapterId: "fr-ch-ecrit", level: "B2",
    title: "Официальное письмо (lettre formelle)",
    body: [
      "Обращение: Madame, Monsieur, (если адресат неизвестен). Без «Cher» в официальной переписке с незнакомыми.",
      "Вступление: Je me permets de vous écrire au sujet de… / Suite à notre entretien téléphonique… / Je vous écris afin de…",
      "Просьба: Je vous serais reconnaissant(e) de bien vouloir… / Pourriez-vous m'indiquer…",
      "Заключение: Dans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
      "В e-mail проще: Bonjour Madame Dupont, … Cordialement, / Bien cordialement,",
    ],
    examples: [
      { de: "Je vous prie de trouver ci-joint mon dossier de candidature.", ru: "Прилагаю мои документы для участия в отборе." },
      { de: "Je reste à votre disposition pour tout renseignement complémentaire.", ru: "Остаюсь в вашем распоряжении для любой дополнительной информации." },
    ],
  },
  {
    id: "fr-p18-1", number: "18.1", chapterId: "fr-ch-soutenu", level: "C1",
    title: "Passé simple и литературный язык",
    body: [
      "Passé simple — время литературного повествования и истории: Napoléon naquit en 1769. В устной речи не используется.",
      "Окончания: -er → -ai, -as, -a, -âmes, -âtes, -èrent (il parla); -ir/-re → -is, -is, -it, -îmes, -îtes, -irent (il finit, il prit); -oir → -us… (il voulut, il put).",
      "Особые: être → il fut, avoir → il eut, faire → il fit, venir → il vint, voir → il vit, naître → il naquit, mourir → il mourut.",
      "Ne explétif (avant qu'il ne parte), инверсия после à peine / peut-être / sans doute / aussi — признаки высокого стиля.",
    ],
  },
  {
    id: "fr-p18-2", number: "18.2", chapterId: "fr-ch-soutenu", level: "C2",
    title: "Регистры: soutenu, courant, familier",
    body: [
      "Один смысл — три регистра: Je ne sais pas (courant) / Je l'ignore (soutenu) / Je sais pas, j'en sais rien (familier).",
      "Familier: bagnole (машина), boulot (работа), fric (деньги), mec (парень), bouffer (есть), verlan (meuf = femme, relou = lourd).",
      "Soutenu: demeurer (жить), se vêtir (одеваться), dorénavant (отныне), nonobstant (несмотря на).",
      "Умение переключать регистры — ключ к уровню C2: на собеседовании и в префектуре — soutenu/courant, с друзьями — familier.",
    ],
  },
];
