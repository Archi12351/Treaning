import type { Exercise, GrammarTopic } from "../../types";
import { parseExercises } from "../exerciseParse";

// Дополнительные упражнения к восьми исходным темам (до 15 в каждой).
export const EN_EXTRA_EXERCISES: Record<string, Exercise[]> = {
  "en-present-simple": parseExercises("eps-x", "A1", `
choice | Water ___ at 100 degrees. | boil ~ boils ~ is boiling ~ boiled | boils | Научный факт — Present Simple, 3-е лицо: boils.
fill | She ___ (go) to the gym on Mondays. | goes | go → goes: после -o добавляем -es.
choice | They ___ watch TV in the morning. | don't ~ doesn't ~ aren't ~ not | don't | Отрицание для they — don't + глагол.
fill | My brother ___ (study) law. | studies | Согласная + y → -ies: study → studies.
choice | How often ___ he call you? | do ~ does ~ is ~ has | does | Вопрос с he — does.
choice | I ___ never late for work. | am ~ do ~ is ~ have | am | С глаголом be наречие частотности ставится после него: I am never late.
fill | The shop ___ (open) at 9 a.m. | opens | Расписание — Present Simple, 3-е лицо: opens.
choice | ___ your parents live near you? | Do ~ Does ~ Are ~ Is | Do | Your parents = they → Do.
fill | He ___ (watch) the news every evening. | watches | После -ch добавляем -es: watches.
`),
  "en-present-continuous": parseExercises("epc-x", "A1", `
choice | Look! It ___. | snows ~ is snowing ~ snow ~ snowing | is snowing | «Look!» — действие прямо сейчас.
fill | I ___ (not/work) today, I'm on holiday. | am not working | Отрицание: am not + -ing.
choice | ___ you listening to me? | Are ~ Do ~ Is ~ Does | Are | Вопрос в Continuous: Are you + -ing?
fill | They ___ (build) a new bridge this year. | are building | Временный процесс в этот период — Continuous.
choice | I ___ this song. | love ~ am loving ~ loving ~ loves | love | love — глагол состояния, обычно не в Continuous.
fill | She ___ (swim) in the pool right now. | is swimming | swim → swimming (удвоение согласной).
choice | We ___ to Paris tomorrow — we've got the tickets. | fly ~ are flying ~ flies ~ flying | are flying | Запланированное будущее — Present Continuous.
choice | He ___ what you mean. | doesn't understand ~ isn't understanding ~ not understand ~ don't understand | doesn't understand | understand — глагол состояния.
fill | Why ___ you ___ (laugh)? | are laughing | Вопрос: Why are you laughing?
`),
  "en-articles": parseExercises("ea-x", "A1", `
choice | I'd like ___ glass of water. | a ~ an ~ the ~ — | a | Один стакан, впервые упоминаем — a.
choice | ___ sun is shining. | The ~ A ~ An ~ — | The | Единственный в своём роде объект — the.
choice | She's ___ engineer. | an ~ a ~ the ~ — | an | Перед гласным звуком — an.
choice | I love ___ music. | — ~ the ~ a ~ an | — | Общее понятие, неисчисляемое — без артикля.
choice | Can you close ___ door, please? | the ~ a ~ an ~ — | the | Обоим понятно, какая дверь — the.
choice | It's ___ honour to meet you. | an ~ a ~ the ~ — | an | h не произносится [ɒnə] → an.
choice | He plays ___ guitar very well. | the ~ a ~ an ~ — | the | Музыкальные инструменты — с the.
choice | We went to ___ Netherlands. | the ~ — ~ a ~ an | the | Названия стран во множественном числе — с the.
choice | ___ breakfast is ready! | — ~ The ~ A ~ An | — | Приёмы пищи обычно без артикля.
`),
  "en-past-simple": parseExercises("eps2-x", "A2", `
fill | We ___ (see) a great film last night. | saw | see — неправильный глагол: saw.
choice | ___ you call her yesterday? | Did ~ Do ~ Were ~ Was | Did | Вопрос в Past Simple — Did + основа.
fill | She ___ (not/come) to the party. | didn't come | Отрицание: didn't + основа.
choice | I ___ tired after the trip. | was ~ were ~ did ~ am | was | Прошедшее be: I was.
fill | They ___ (buy) a new car last month. | bought | buy → bought.
choice | Where ___ you yesterday? | were ~ was ~ did ~ are | were | you were.
fill | He ___ (stop) the car suddenly. | stopped | stop → stopped (удвоение согласной).
choice | When ___ the film start? | did ~ does ~ was ~ has | did | Вопрос о прошлом событии — did.
fill | I ___ (write) three emails this morning — that was before lunch. | wrote | write → wrote.
`),
  "en-comparatives": parseExercises("ec-x", "A2", `
choice | Today is ___ than yesterday. | hotter ~ more hot ~ hottest ~ hoter | hotter | Короткое прилагательное: hot → hotter (удвоение t).
fill | This is the ___ (good) pizza in town. | best | good → better → the best.
choice | My car is ___ than yours. | older ~ more old ~ oldest ~ the older | older | old → older.
fill | Russian is ___ (difficult) than English. | more difficult | Длинное прилагательное: more difficult.
choice | He's the ___ person I know. | funniest ~ funnier ~ most funny ~ funnyest | funniest | funny → the funniest.
choice | This film is not as ___ as the book. | good ~ better ~ best ~ well | good | as + базовая форма + as.
fill | Things are getting ___ (bad). | worse | bad → worse → the worst.
choice | She runs ___ than me. | faster ~ more fast ~ fastest ~ more faster | faster | fast → faster.
fill | It's the ___ (far) I've ever walked. | farthest | far → farther/further → the farthest/furthest.
`),
  "en-modal-verbs": parseExercises("emv-x", "A2", `
choice | You ___ smoke here — it's forbidden. | mustn't ~ don't have to ~ needn't ~ can | mustn't | Запрет — mustn't.
choice | You ___ come if you don't want to. | don't have to ~ mustn't ~ can't ~ shouldn't | don't have to | Нет необходимости — don't have to.
fill | ___ I open the window? (вежливая просьба разрешения) | May | Вежливо спросить разрешение — May I…?
choice | She ___ speak three languages. | can ~ cans ~ can to ~ is can | can | can + глагол без to, без -s.
choice | You look tired. You ___ go to bed. | should ~ must to ~ can ~ need | should | Совет — should.
fill | I ___ (be able to) swim when I was five. | could | Умел в прошлом — could.
choice | It ___ rain later — take an umbrella. | might ~ must ~ can't ~ should to | might | Возможность — might.
choice | That ___ be Tom — he's in London today. | can't ~ mustn't ~ shouldn't ~ might not to | can't | Логическая невозможность — can't.
fill | We ___ (have to) wear a uniform at my old school. | had to | Прошедшая необходимость — had to.
`),
  "en-present-perfect": parseExercises("epp-x", "B1", `
choice | I ___ already ___ lunch. | have / eaten ~ has / eaten ~ have / ate ~ did / eat | have / eaten | already + Present Perfect.
fill | She ___ (never/be) to Japan. | has never been | Опыт в жизни: has never been.
choice | We ___ here since 2020. | have lived ~ live ~ lived ~ are living | have lived | since + Present Perfect.
choice | ___ you ever ___ sushi? | Have / tried ~ Did / try ~ Have / try ~ Do / tried | Have / tried | Опыт: Have you ever…?
fill | I ___ (lose) my keys — I can't get in. | have lost | Результат в настоящем: have lost.
choice | He ___ the report yesterday. | finished ~ has finished ~ have finished ~ finishing | finished | Конкретное время в прошлом (yesterday) — Past Simple.
choice | I've known him ___ ten years. | for ~ since ~ during ~ ago | for | Период — for.
fill | They ___ (just/arrive). | have just arrived | just + Present Perfect.
choice | How long ___ you ___ English? | have / studied ~ did / study ~ are / studying ~ do / study | have / studied | How long… — Present Perfect.
`),
  "en-conditionals": parseExercises("econd-x", "B1", `
choice | If you heat ice, it ___. | melts ~ will melt ~ would melt ~ melted | melts | Нулевой тип (факт): Present + Present.
fill | If it ___ (rain) tomorrow, we'll stay home. | rains | Первый тип: if + Present Simple.
choice | If I ___ you, I'd take the job. | were ~ am ~ will be ~ be | were | Второй тип: If I were you…
fill | What ___ you ___ (do) if you won the lottery? | would do | Второй тип: would + глагол.
choice | Unless you hurry, you ___ the train. | will miss ~ miss ~ would miss ~ missed | will miss | unless = if not, первый тип.
choice | If she had more time, she ___ a language. | would learn ~ will learn ~ learns ~ learned | would learn | Второй тип: would + глагол.
fill | I ___ (call) you if I hear any news. | will call | Первый тип: will + глагол.
choice | If I ___ his number, I would call him. | knew ~ know ~ will know ~ would know | knew | Нереальное настоящее — Past Simple в if-части.
choice | We'll go to the beach if it ___ sunny. | is ~ will be ~ would be ~ was | is | После if в первом типе — Present.
`),
};

export const EN_NEW_TOPICS: GrammarTopic[] = [
  {
    id: "en-to-be",
    title: "To be & have got",
    level: "A1",
    summary: "Глагол be (am/is/are) и have got — основа любой фразы",
    explanation: [
      "Глагол to be: I am, you/we/they are, he/she/it is. Сокращения: I'm, you're, she's.",
      "Вопрос — инверсия: Are you ready? Is she at home? Отрицание — not: I'm not, he isn't, they aren't.",
      "have got (брит.) = have (иметь): I've got a car. Has she got a dog? В американском чаще: Do you have…?",
      "В русском «у меня есть» → в английском I have / I've got.",
    ],
    examples: [
      { de: "I'm a doctor and my wife is a teacher.", ru: "Я врач, а моя жена учительница." },
      { de: "Are they from Canada? — No, they aren't.", ru: "Они из Канады? — Нет." },
      { de: "Have you got any children?", ru: "У вас есть дети?" },
    ],
    exercises: parseExercises("etb", "A1", `
choice | I ___ from Russia. | am ~ is ~ are ~ be | am | I am.
choice | She ___ a nurse. | is ~ am ~ are ~ be | is | he/she/it is.
choice | We ___ at home now. | are ~ is ~ am ~ be | are | we are.
fill | ___ you hungry? | Are | Вопрос с you — Are.
fill | He ___ (not/be) married. | isn't | Отрицание: is not → isn't.
choice | They ___ got two cats. | have ~ has ~ are ~ is | have | they have got.
choice | ___ she got a car? | Has ~ Have ~ Is ~ Does | Has | Has she got…?
fill | I ___ (not/have got) a bike. | haven't got | haven't got.
choice | My parents ___ teachers. | are ~ is ~ am ~ be | are | Множественное — are.
choice | It ___ cold today. | is ~ are ~ am ~ has | is | Погода: It is cold.
fill | What ___ your name? | is | What is your name?
choice | How old ___ you? | are ~ is ~ have ~ do | are | Возраст — через be: How old are you?
choice | I ___ 25 years old. | am ~ have ~ is ~ has | am | В английском возраст — с be: I am 25.
fill | ___ he got any brothers? | Has | Has he got…?
choice | The keys ___ on the table. | are ~ is ~ am ~ be | are | keys — множественное.
`),
  },
  {
    id: "en-there-is",
    title: "There is / there are, some / any",
    level: "A1",
    summary: "Как сказать, что что-то где-то есть, и как говорить о количестве",
    explanation: [
      "There is + единственное число / неисчисляемое: There is a bank near here. There is some milk.",
      "There are + множественное: There are two bedrooms.",
      "some — в утверждениях, any — в вопросах и отрицаниях: Are there any shops? There aren't any eggs.",
      "В просьбах и предложениях — some: Would you like some tea?",
    ],
    examples: [
      { de: "There's a supermarket on the corner.", ru: "На углу есть супермаркет." },
      { de: "Are there any good restaurants here?", ru: "Здесь есть хорошие рестораны?" },
      { de: "There isn't any coffee left.", ru: "Кофе не осталось." },
    ],
    exercises: parseExercises("eti", "A1", `
choice | There ___ a park near my house. | is ~ are ~ be ~ am | is | a park — единственное.
choice | There ___ three chairs in the room. | are ~ is ~ be ~ has | are | Множественное — are.
choice | Is there ___ milk in the fridge? | any ~ some ~ a ~ many | any | Вопрос — any.
choice | There are ___ apples on the table. | some ~ any ~ a ~ an | some | Утверждение — some.
fill | ___ there any questions? | Are | Вопрос, множественное — Are there…?
choice | There isn't ___ sugar. | any ~ some ~ a ~ many | any | Отрицание — any.
choice | Would you like ___ cake? | some ~ any ~ a ~ many | some | Предложение — some.
fill | There ___ (not/be) any buses at night. | aren't | Отрицание, множественное — aren't.
choice | How many people ___ there in your family? | are ~ is ~ have ~ do | are | How many… are there?
choice | There ___ some water on the floor. | is ~ are ~ be ~ have | is | water — неисчисляемое.
fill | Is there a bank here? — Yes, there ___. | is | Краткий ответ: Yes, there is.
choice | There are ___ good films this week. | some ~ any ~ a ~ much | some | Утверждение — some.
choice | Are there ___ shops open on Sunday? | any ~ some ~ an ~ much | any | Вопрос — any.
fill | There ___ a lot of traffic today. | is | traffic — неисчисляемое: there is.
choice | I need ___ eggs for the cake. | some ~ any ~ an ~ a | some | Утверждение — some.
`),
  },
  {
    id: "en-pronouns",
    title: "Pronouns & possessives",
    level: "A1",
    summary: "I/me/my/mine, притяжательный 's",
    explanation: [
      "Личные: I, you, he, she, it, we, they. Объектные: me, you, him, her, it, us, them (после глагола и предлога).",
      "Притяжательные прилагательные (перед сущ.): my, your, his, her, its, our, their. Местоимения (без сущ.): mine, yours, his, hers, ours, theirs.",
      "Принадлежность человеку: Anna's car, my parents' house (множественное на -s — только апостроф).",
      "its (его/её о предмете) ≠ it's (it is).",
    ],
    examples: [
      { de: "This is my bag, not yours.", ru: "Это моя сумка, не твоя." },
      { de: "Can you help me? — Sure, I'll help you.", ru: "Можешь мне помочь? — Конечно, помогу." },
      { de: "That's Tom's sister.", ru: "Это сестра Тома." },
    ],
    exercises: parseExercises("epr", "A1", `
choice | Can you call ___ tomorrow? | me ~ I ~ my ~ mine | me | После глагола — объектное местоимение me.
choice | This is ___ book. | my ~ me ~ mine ~ I | my | Перед существительным — my.
choice | Is this phone ___? | yours ~ your ~ you ~ you're | yours | Без существительного — yours.
choice | ___ name is Kate. | Her ~ She ~ Hers ~ She's | Her | Перед существительным — her.
fill | I like Tom. I see ___ every day. | him | Объектная форма he — him.
choice | The dog wagged ___ tail. | its ~ it's ~ his ~ it | its | Принадлежность предмета/животного — its.
choice | That's ___ car. | Anna's ~ Annas ~ Anna ~ Annas' | Anna's | Притяжательный падеж — 's.
choice | We love ___ new flat. | our ~ us ~ ours ~ we | our | Перед существительным — our.
fill | They invited ___ (we) to dinner. | us | Объектная форма we — us.
choice | The house is ___. | theirs ~ their ~ them ~ they | theirs | Без существительного — theirs.
choice | ___ is raining. | It ~ Its ~ It's ~ This | It | Безличное подлежащее — It.
fill | This bag isn't mine, it's ___ (she). | hers | Притяжательное местоимение — hers.
choice | My ___ room is upstairs. | parents' ~ parent's ~ parents ~ parentses | parents' | Множественное на -s — только апостроф.
choice | Give it to ___. | them ~ they ~ their ~ theirs | them | После предлога — them.
fill | ___ your keys on the table? (Is it/Are these) | Are these | keys — множественное: Are these…?
`),
  },
  {
    id: "en-future",
    title: "Future: will, going to, Present Continuous",
    level: "A2",
    summary: "Три способа говорить о будущем — и когда какой",
    explanation: [
      "will — спонтанное решение, обещание, предсказание без доказательств: I'll help you. I think it will rain.",
      "be going to — план/намерение или предсказание по очевидным признакам: I'm going to buy a car. Look at the clouds — it's going to rain.",
      "Present Continuous — договорённость с конкретным временем: I'm meeting Tom at six.",
      "Present Simple — расписание: The train leaves at 7:15.",
    ],
    examples: [
      { de: "I'm tired. I think I'll go to bed.", ru: "Я устал. Пожалуй, пойду спать." },
      { de: "We're going to move to Berlin next year.", ru: "Мы собираемся переехать в Берлин в следующем году." },
      { de: "I'm seeing the doctor on Friday.", ru: "В пятницу я иду к врачу." },
    ],
    exercises: parseExercises("efu", "A2", `
choice | The phone is ringing. — I ___ answer it. | 'll ~ am going to ~ answer ~ am answering | 'll | Спонтанное решение — will.
choice | Look at those clouds! It ___ rain. | is going to ~ will ~ rains ~ is raining | is going to | Предсказание по признакам — going to.
choice | I ___ my grandma on Sunday — it's all arranged. | am visiting ~ will visit ~ visit ~ visited | am visiting | Договорённость — Present Continuous.
fill | The train ___ (leave) at 8:05. | leaves | Расписание — Present Simple.
choice | Don't worry, I ___ tell anyone. | won't ~ am not going ~ don't ~ not will | won't | Обещание — will/won't.
fill | We ___ (going to/buy) a new sofa next month. | are going to buy | План — are going to + глагол.
choice | I think Brazil ___ win the match. | will ~ is going ~ wins ~ is winning | will | Мнение о будущем — will.
choice | What ___ you do after university? | are / going to ~ will / going ~ do / going to ~ is / going to | are / going to | Планы: What are you going to do?
fill | ___ you help me with this box? (просьба) | Will | Просьба — Will you…?
choice | She ___ have a baby in May. | is going to ~ will to ~ goes to ~ is go to | is going to | Уже известный факт/план — going to.
choice | Shall I ___ the window? | open ~ to open ~ opening ~ opened | open | Shall I + глагол — предложение помощи.
fill | I promise I ___ (call) you tonight. | will call | Обещание — will.
choice | By the way, the meeting ___ at 3 tomorrow. | starts ~ will starting ~ is start ~ start | starts | Расписание — Present Simple.
choice | We ___ dinner with the Smiths tonight. | are having ~ will having ~ have to ~ having | are having | Договорённость — Present Continuous.
fill | Perhaps it ___ (be) sunny tomorrow. | will be | Предположение — will.
`),
  },
  {
    id: "en-countable",
    title: "Much, many, a lot of, a few, a little",
    level: "A2",
    summary: "Исчисляемые и неисчисляемые существительные",
    explanation: [
      "Исчисляемые (apple, car, friend) — есть множественное число; неисчисляемые (water, money, information, advice, news) — нет.",
      "many / a few / few — с исчисляемыми; much / a little / little — с неисчисляемыми.",
      "a lot of / lots of — с любыми, особенно в утверждениях. much/many чаще в вопросах и отрицаниях.",
      "a few / a little = «немного (достаточно)»; few / little = «мало (недостаточно)».",
    ],
    examples: [
      { de: "How much money do you need?", ru: "Сколько денег тебе нужно?" },
      { de: "There aren't many people here.", ru: "Здесь немного людей." },
      { de: "Can I give you a piece of advice?", ru: "Можно дам тебе совет?" },
    ],
    exercises: parseExercises("eco", "A2", `
choice | How ___ water do you drink? | much ~ many ~ few ~ a few | much | water — неисчисляемое.
choice | How ___ brothers have you got? | many ~ much ~ little ~ a little | many | brothers — исчисляемое.
choice | I've got ___ friends in London. | a few ~ a little ~ much ~ little | a few | friends — исчисляемое: a few.
choice | There's ___ milk left — enough for coffee. | a little ~ a few ~ many ~ few | a little | Неисчисляемое, достаточно — a little.
fill | She has ___ of money. (много) | a lot | a lot of — с любыми.
choice | Can you give me some ___? | advice ~ advices ~ an advice ~ a advices | advice | advice — неисчисляемое.
choice | We don't have ___ time. | much ~ many ~ a few ~ few | much | time — неисчисляемое.
choice | I have ___ information about it. | some ~ an ~ a ~ many | some | information — неисчисляемое.
choice | ___ people came — the room was almost empty. | Few ~ A few ~ Little ~ A little | Few | Мало (недостаточно) — few.
fill | The news ___ (be) bad. | is | news — неисчисляемое, единственное число.
choice | There are too ___ cars in the city. | many ~ much ~ little ~ a little | many | cars — исчисляемое.
choice | I need ___ furniture for my flat. | some ~ a ~ many ~ few | some | furniture — неисчисляемое.
fill | How ___ does it cost? | much | Цена — How much…?
choice | He drinks too ___ coffee. | much ~ many ~ few ~ a few | much | coffee — неисчисляемое.
choice | There's very ___ hope now. | little ~ few ~ many ~ a few | little | Мало (неисчисляемое) — little.
`),
  },
  {
    id: "en-prepositions",
    title: "Prepositions: in, on, at",
    level: "A2",
    summary: "Предлоги времени и места",
    explanation: [
      "Время: at — точное время и праздники (at 5 o'clock, at Christmas, at night); on — дни и даты (on Monday, on 3 May); in — месяцы, годы, сезоны, части дня (in July, in 2024, in the morning).",
      "Место: at — точка (at the bus stop, at work, at home); on — поверхность (on the table, on the wall, on the 2nd floor); in — внутри (in the box, in London, in the car).",
      "on the bus/train/plane, но in a car/taxi.",
    ],
    examples: [
      { de: "See you at 7 on Friday.", ru: "Увидимся в 7 в пятницу." },
      { de: "She was born in 1995 in Moscow.", ru: "Она родилась в 1995 году в Москве." },
      { de: "I'm at work now.", ru: "Я сейчас на работе." },
    ],
    exercises: parseExercises("epre", "A2", `
choice | The meeting is ___ Monday. | on ~ in ~ at ~ by | on | Дни недели — on.
choice | I was born ___ 1990. | in ~ on ~ at ~ by | in | Годы — in.
choice | The film starts ___ 8 p.m. | at ~ in ~ on ~ by | at | Точное время — at.
choice | There's a picture ___ the wall. | on ~ in ~ at ~ of | on | Поверхность — on.
choice | She lives ___ Paris. | in ~ at ~ on ~ to | in | Город — in.
choice | I'll see you ___ the station. | at ~ in ~ on ~ by | at | Точка встречи — at.
fill | We go skiing ___ winter. | in | Сезоны — in.
choice | He's ___ the bus. | on ~ in ~ at ~ by | on | Общественный транспорт — on.
choice | What do you do ___ the weekend? (брит.) | at ~ in ~ on ~ by | at | Британский: at the weekend (амер.: on the weekend).
fill | My birthday is ___ 12 May. | on | Даты — on.
choice | I usually read ___ the evening. | in ~ at ~ on ~ by | in | Части дня — in the evening.
choice | Are you ___ home tonight? | at ~ in ~ on ~ to | at | at home.
fill | Get ___ the car, we're leaving! | in | in a car.
choice | The keys are ___ my bag. | in ~ on ~ at ~ by | in | Внутри — in.
choice | We arrived ___ London ___ midnight. | in / at ~ at / in ~ to / at ~ in / in | in / at | arrive in + город; at midnight.
`),
  },
  {
    id: "en-past-continuous",
    title: "Past Continuous vs Past Simple",
    level: "B1",
    summary: "Фон и событие в прошлом: was doing / did",
    explanation: [
      "Past Continuous (was/were + -ing) — процесс в определённый момент прошлого: At 8 I was having dinner.",
      "Классическая схема: длительный фон (Past Continuous) прерывается коротким событием (Past Simple): I was walking home when it started to rain.",
      "while + Past Continuous — два параллельных процесса: While I was cooking, he was watching TV.",
      "Последовательность событий — только Past Simple: He came in, took off his coat and sat down.",
    ],
    examples: [
      { de: "What were you doing at 10 last night?", ru: "Что ты делал вчера в 10 вечера?" },
      { de: "I was sleeping when the phone rang.", ru: "Я спал, когда зазвонил телефон." },
    ],
    exercises: parseExercises("epco", "B1", `
choice | I ___ TV when you called. | was watching ~ watched ~ am watching ~ watch | was watching | Процесс, прерванный звонком — Past Continuous.
choice | She ___ her leg while she was skiing. | broke ~ was breaking ~ breaks ~ has broken | broke | Короткое событие — Past Simple.
fill | At 7 a.m. we ___ (drive) to the airport. | were driving | Процесс в момент прошлого.
choice | While I ___, my phone was stolen. | was shopping ~ shopped ~ am shopping ~ shop | was shopping | while + Past Continuous.
choice | When I arrived, they ___ dinner. | were having ~ had ~ have ~ are having | were having | Фон в момент прибытия.
fill | What ___ you ___ (do) at midnight? | were doing | Вопрос: What were you doing?
choice | He opened the door, ___ in and sat down. | came ~ was coming ~ comes ~ coming | came | Цепочка событий — Past Simple.
choice | It ___ when we left the house. | was raining ~ rained ~ rains ~ is raining | was raining | Фон — Past Continuous.
fill | I ___ (not/listen), sorry. What did you say? | wasn't listening | Отрицание: wasn't + -ing.
choice | While she was reading, the kids ___. | were playing ~ played ~ play ~ are playing | were playing | Два параллельных процесса.
choice | The lights ___ out while we were eating. | went ~ were going ~ go ~ goes | went | Короткое событие.
fill | They ___ (wait) for the bus when the accident happened. | were waiting | Процесс, прерванный событием.
choice | I ___ him yesterday at the station. | saw ~ was seeing ~ see ~ have seen | saw | Факт в прошлом — Past Simple.
choice | Sorry, I ___ to you — what was the question? | wasn't listening ~ didn't listen ~ don't listen ~ not listened | wasn't listening | Процесс в тот момент.
fill | Where ___ you ___ (go) when I saw you this morning? | were going | Процесс в момент встречи.
`),
  },
  {
    id: "en-passive",
    title: "Passive voice",
    level: "B1",
    summary: "Страдательный залог: is made, was built, has been sold",
    explanation: [
      "Пассив = be (в нужном времени) + 3-я форма глагола: English is spoken here. The house was built in 1900.",
      "Используется, когда важно действие, а не исполнитель, или исполнитель неизвестен. Исполнитель — через by: The book was written by Orwell.",
      "Времена: is done, is being done, was done, has been done, will be done, must be done.",
      "Частая формула в официальных письмах: Your application has been received. You will be contacted.",
    ],
    examples: [
      { de: "Your passport will be ready in two weeks.", ru: "Ваш паспорт будет готов через две недели." },
      { de: "My bike has been stolen!", ru: "У меня украли велосипед!" },
    ],
    exercises: parseExercises("epa", "B1", `
choice | This bridge ___ in 1890. | was built ~ built ~ is building ~ has built | was built | Пассив прошедшего: was + built.
fill | English ___ (speak) all over the world. | is spoken | Пассив настоящего: is + spoken.
choice | The letters ___ every morning. | are delivered ~ deliver ~ are delivering ~ delivered | are delivered | Регулярное действие, пассив.
choice | My car ___ yet. | hasn't been repaired ~ didn't repair ~ isn't repairing ~ hasn't repaired | hasn't been repaired | Present Perfect пассив.
fill | The results ___ (announce) tomorrow. | will be announced | Будущее: will be + V3.
choice | "Hamlet" was written ___ Shakespeare. | by ~ from ~ with ~ of | by | Исполнитель — by.
choice | The room ___ right now. | is being cleaned ~ is cleaning ~ cleans ~ is cleaned | is being cleaned | Длительный пассив: is being + V3.
fill | Your application ___ (receive). (Present Perfect) | has been received | has been + V3.
choice | Mobile phones must ___ off. | be switched ~ switch ~ switched ~ being switched | be switched | После модального: be + V3.
choice | Where ___ these shoes made? | were ~ did ~ are ~ have | were | Вопрос в пассиве прошедшего: were… made.
fill | The thief ___ (catch) last night. | was caught | was + caught.
choice | Coffee ___ in Brazil. | is grown ~ grows ~ is growing ~ grown | is grown | Пассив: is grown.
choice | The meeting ___ until Friday. | has been postponed ~ has postponed ~ postponed ~ is postponing | has been postponed | Present Perfect пассив.
fill | You ___ (will/contact) by email. | will be contacted | will be + V3.
choice | A new hospital ___ in our town at the moment. | is being built ~ is built ~ builds ~ was building | is being built | Процесс сейчас, пассив.
`),
  },
  {
    id: "en-relative",
    title: "Relative clauses: who, which, that, whose",
    level: "B1",
    summary: "Определительные придаточные",
    explanation: [
      "who — о людях, which — о предметах, that — о людях и предметах (в разговорной речи), whose — чей, where — где, when — когда.",
      "Если who/which/that — дополнение, его можно опустить: The film (that) we saw was great.",
      "Неопределительные придаточные (с запятыми) дают доп. информацию; в них нельзя that и нельзя опускать местоимение: My brother, who lives in Rome, is a chef.",
    ],
    examples: [
      { de: "The woman who called you is my boss.", ru: "Женщина, которая тебе звонила, — мой начальник." },
      { de: "That's the man whose car was stolen.", ru: "Это тот мужчина, у которого угнали машину." },
    ],
    exercises: parseExercises("erel", "B1", `
choice | The man ___ lives next door is a doctor. | who ~ which ~ whose ~ where | who | О человеке — who.
choice | The book ___ I'm reading is great. | that ~ who ~ whose ~ where | that | О предмете — that/which.
choice | That's the hotel ___ we stayed. | where ~ which ~ who ~ whose | where | Место — where.
choice | She's the girl ___ brother is a pilot. | whose ~ who ~ which ~ that | whose | Принадлежность — whose.
fill | The bus ___ goes to the airport leaves at 7. (предмет) | which | О предмете — which/that.
choice | My sister, ___ lives in Spain, is visiting us. | who ~ that ~ which ~ whose | who | Неопределительное придаточное — who (не that).
choice | I remember the day ___ we met. | when ~ where ~ which ~ who | when | Время — when.
fill | Do you know anyone ___ speaks Japanese? | who | О человеке — who/that.
choice | The film, ___ was released in 2020, won an Oscar. | which ~ that ~ who ~ what | which | Неопределительное, предмет — which.
choice | This is the shop ___ sells second-hand books. | that ~ who ~ where ~ whose | that | Подлежащее придаточного — that/which.
choice | Is this the key ___ you lost? | — ~ who ~ whose ~ where | — | Дополнение можно опустить.
fill | The people ___ we met on holiday were very friendly. | who | О людях — who/that (можно опустить).
choice | He told me something ___ surprised me. | that ~ what ~ who ~ whose | that | something that…
choice | Berlin, ___ I lived for five years, is my favourite city. | where ~ which ~ that ~ when | where | Место — where.
fill | What's the name of the woman ___ son plays in the band? | whose | Принадлежность — whose.
`),
  },
  {
    id: "en-past-perfect",
    title: "Past Perfect & Present Perfect Continuous",
    level: "B2",
    summary: "had done — предпрошедшее; have been doing — длящееся до сих пор",
    explanation: [
      "Past Perfect (had + V3) — действие, случившееся раньше другого прошедшего: When I arrived, the train had left.",
      "Present Perfect Continuous (have been + -ing) — процесс начался в прошлом и продолжается/только что закончился: I've been waiting for an hour. You look tired — have you been running?",
      "Сравни: I've written three emails (результат, количество) / I've been writing emails all morning (процесс, длительность).",
    ],
    examples: [
      { de: "She had never seen snow before she moved to Canada.", ru: "До переезда в Канаду она никогда не видела снега." },
      { de: "How long have you been learning English?", ru: "Как долго ты учишь английский?" },
    ],
    exercises: parseExercises("eppe", "B2", `
choice | When we got to the cinema, the film ___. | had started ~ started ~ has started ~ was starting | had started | Действие раньше другого в прошлом — Past Perfect.
fill | I ___ (wait) for you for two hours! | have been waiting | Длительность до сих пор — Present Perfect Continuous.
choice | She was nervous because she ___ before. | hadn't flown ~ didn't fly ~ hasn't flown ~ wasn't flying | hadn't flown | Опыт до момента в прошлом.
choice | It ___ all day — the streets are wet. | has been raining ~ rained ~ had rained ~ is raining | has been raining | Процесс с видимым результатом сейчас.
fill | By the time I called, he ___ (already/leave). | had already left | Past Perfect.
choice | How long ___ you ___ here? | have / been working ~ did / work ~ had / worked ~ are / working | have / been working | How long… — Present Perfect Continuous.
choice | I ___ three cups of coffee today. | have drunk ~ have been drinking ~ had drunk ~ drank | have drunk | Количество/результат — Present Perfect Simple.
fill | They ___ (live) in Rome for ten years before they moved to Paris. | had lived | Период до другого события в прошлом.
choice | Your eyes are red. ___ you ___? | Have / been crying ~ Did / cry ~ Had / cried ~ Are / crying | Have / been crying | Видимый результат недавнего процесса.
choice | After she ___ the report, she went home. | had finished ~ has finished ~ finishes ~ was finishing | had finished | Сначала одно, потом другое — Past Perfect.
fill | We ___ (not/see) each other for years when we met last week. | hadn't seen | Past Perfect отрицание.
choice | I ___ this book for weeks and I'm still on page 50. | have been reading ~ have read ~ read ~ had read | have been reading | Процесс, ещё не закончен.
choice | He told me he ___ the job. | had got ~ has got ~ gets ~ is getting | had got | Косвенная речь о прошлом — Past Perfect.
fill | She's exhausted — she ___ (study) since 6 a.m. | has been studying | since + Present Perfect Continuous.
choice | The shop ___ by the time we arrived. | had closed ~ closed ~ has closed ~ closes | had closed | Раньше нашего прибытия.
`),
  },
  {
    id: "en-reported",
    title: "Reported speech",
    level: "B2",
    summary: "Косвенная речь: He said (that)…, She asked if…",
    explanation: [
      "После прошедшего глагола (said, told, asked) время «сдвигается назад»: am → was, will → would, did/have done → had done, can → could.",
      "say something / tell somebody something: He said that he was tired. He told me that he was tired.",
      "Вопросы: прямой порядок слов, if/whether для общих вопросов: She asked where I lived. He asked if I was OK.",
      "Просьбы и приказы: tell/ask + someone + to do: She told me to wait.",
      "Указатели меняются: today → that day, tomorrow → the next day, here → there.",
    ],
    examples: [
      { de: "\"I'm busy.\" → He said he was busy.", ru: "«Я занят». → Он сказал, что занят." },
      { de: "\"Where do you work?\" → She asked me where I worked.", ru: "Она спросила, где я работаю." },
    ],
    exercises: parseExercises("erep", "B2", `
choice | "I'm tired." → She said she ___ tired. | was ~ is ~ were ~ has been | was | am → was.
choice | "I will call you." → He said he ___ call me. | would ~ will ~ shall ~ can | would | will → would.
choice | He ___ me that he was leaving. | told ~ said ~ spoke ~ talked | told | tell + кому.
choice | She ___ that she liked the film. | said ~ told ~ asked ~ spoke | said | said без дополнения-лица.
fill | "Do you speak German?" → He asked me ___ I spoke German. | if | Общий вопрос — if/whether.
choice | "Where do you live?" → She asked me where I ___. | lived ~ live ~ did live ~ do live | lived | Прямой порядок + сдвиг времени.
fill | "Close the door." → He told me ___ (close) the door. | to close | tell + someone + to do.
choice | "I saw him yesterday." → She said she had seen him ___. | the day before ~ yesterday ~ tomorrow ~ the next day | the day before | yesterday → the day before.
choice | "I can swim." → He said he ___ swim. | could ~ can ~ can to ~ was can | could | can → could.
fill | "Don't be late." → She told us ___ to be late. | not | Отрицательная просьба: told us not to…
choice | "We have finished." → They said they ___. | had finished ~ have finished ~ finished ~ were finished | had finished | have done → had done.
choice | He asked me what time ___. | it was ~ was it ~ is it ~ it is being | it was | Прямой порядок слов в косвенном вопросе.
fill | "I'm leaving tomorrow." → He said he was leaving ___ ___ ___. | the next day | tomorrow → the next day.
choice | She asked ___ I wanted tea or coffee. | whether ~ that ~ what ~ which | whether | Выбор — whether.
choice | "Can you help me?" → He asked me ___ him. | to help ~ help ~ helping ~ that I help | to help | Просьба: asked me to help.
`),
  },
  {
    id: "en-third-conditional",
    title: "Third conditional, mixed conditionals & wish",
    level: "B2",
    summary: "Нереальное прошлое: If I had known… / I wish…",
    explanation: [
      "Третий тип — нереальное прошлое: If + had done, would have done. If I had known, I would have helped.",
      "Смешанный тип — прошлое условие и настоящий результат: If I had studied medicine, I would be a doctor now.",
      "I wish + Past Simple — сожаление о настоящем: I wish I lived closer.",
      "I wish + Past Perfect — сожаление о прошлом: I wish I hadn't said that.",
      "I wish + would — раздражение чужим поведением: I wish you would stop.",
    ],
    examples: [
      { de: "If we had left earlier, we wouldn't have missed the flight.", ru: "Если бы мы выехали раньше, мы бы не опоздали на рейс." },
      { de: "I wish I spoke French.", ru: "Жаль, что я не говорю по-французски." },
    ],
    exercises: parseExercises("e3c", "B2", `
choice | If I ___ about the party, I would have come. | had known ~ knew ~ have known ~ would know | had known | Третий тип: If + had + V3.
fill | If she had asked me, I ___ (help) her. | would have helped | would have + V3.
choice | I wish I ___ more time. | had ~ have ~ would have ~ will have | had | Сожаление о настоящем — Past Simple.
choice | I wish I ___ that email. | hadn't sent ~ didn't send ~ don't send ~ wouldn't send | hadn't sent | Сожаление о прошлом — Past Perfect.
choice | If he had taken the job, he ___ rich now. | would be ~ would have been ~ will be ~ is | would be | Смешанный: прошлое условие → настоящий результат.
fill | We ___ (not/get) lost if we had taken a map. | wouldn't have got | wouldn't have + V3.
choice | I wish you ___ making that noise! | would stop ~ stopped ~ stop ~ had stopped | would stop | Раздражение — wish + would.
choice | If I ___ you, I'd apologise. | were ~ had been ~ am ~ would be | were | Второй тип, совет.
fill | If it ___ (not/rain), we would have played tennis. | hadn't rained | Третий тип, if-часть.
choice | She ___ the exam if she had studied harder. | would have passed ~ would pass ~ passed ~ had passed | would have passed | Третий тип.
choice | If only I ___ listened to you! | had ~ have ~ would ~ did | had | If only + Past Perfect — сожаление о прошлом.
fill | I wish I ___ (can) drive. | could | Сожаление о настоящем: wish + could.
choice | If I had been born in Spain, I ___ Spanish fluently. | would speak ~ would have spoken ~ spoke ~ will speak | would speak | Смешанный тип.
choice | Had I known, I ___ differently. | would have acted ~ would act ~ acted ~ had acted | would have acted | Инверсия = If I had known.
fill | If you hadn't reminded me, I ___ (forget). | would have forgotten | would have + V3.
`),
  },
  {
    id: "en-gerund-infinitive",
    title: "Gerund or infinitive",
    level: "B2",
    summary: "enjoy doing / want to do / stop doing vs stop to do",
    explanation: [
      "После enjoy, mind, avoid, finish, suggest, keep, consider, can't stand — герундий (-ing): I enjoy reading.",
      "После want, decide, hope, plan, agree, refuse, promise, manage, would like — инфинитив с to: I decided to leave.",
      "После предлогов — всегда -ing: I'm interested in learning. Thank you for coming. I look forward to hearing from you.",
      "Меняют смысл: stop doing (перестать) / stop to do (остановиться, чтобы); remember doing (помнить, что делал) / remember to do (не забыть сделать); try doing (попробовать как способ) / try to do (стараться).",
    ],
    examples: [
      { de: "I don't mind waiting.", ru: "Я не против подождать." },
      { de: "Remember to lock the door!", ru: "Не забудь запереть дверь!" },
    ],
    exercises: parseExercises("egi", "B2", `
choice | I enjoy ___ in the sea. | swimming ~ to swim ~ swim ~ swam | swimming | enjoy + -ing.
choice | She decided ___ abroad. | to study ~ studying ~ study ~ studied | to study | decide + to.
fill | Would you mind ___ (open) the window? | opening | mind + -ing.
choice | I look forward to ___ from you. | hearing ~ hear ~ heard ~ to hear | hearing | to здесь предлог → -ing.
choice | He stopped ___ — he quit last year. | smoking ~ to smoke ~ smoke ~ smoked | smoking | stop doing — перестать.
choice | We stopped ___ some water on the way. | to buy ~ buying ~ buy ~ bought | to buy | stop to do — остановиться, чтобы.
fill | Remember ___ (call) your mum tonight! | to call | remember to do — не забыть сделать.
choice | I remember ___ him at a party years ago. | meeting ~ to meet ~ meet ~ met | meeting | remember doing — помнить, что было.
choice | She's good at ___ languages. | learning ~ to learn ~ learn ~ learnt | learning | После предлога — -ing.
fill | They agreed ___ (help) us. | to help | agree + to.
choice | I can't afford ___ a new car. | to buy ~ buying ~ buy ~ bought | to buy | afford + to.
choice | Have you finished ___ the report? | writing ~ to write ~ write ~ written | writing | finish + -ing.
fill | He refused ___ (answer) the question. | to answer | refuse + to.
choice | It's no use ___ about it now. | worrying ~ to worry ~ worry ~ worried | worrying | It's no use + -ing.
choice | I'm thinking of ___ my job. | changing ~ to change ~ change ~ changed | changing | После предлога of — -ing.
`),
  },
  {
    id: "en-inversion",
    title: "Inversion & emphasis",
    level: "C1",
    summary: "Never have I…, Not only…but also, It was… that…",
    explanation: [
      "После отрицательных/ограничительных наречий в начале фразы — инверсия (вспомогательный глагол перед подлежащим): Never have I seen such a mess. Rarely does he complain.",
      "Not only … but also: Not only did she win, but she also broke the record.",
      "No sooner … than / Hardly … when: No sooner had we arrived than it started to rain.",
      "Условия без if: Should you need help, call me. Had I known, I'd have come. Were I you, I'd wait.",
      "Расщеплённые предложения для выделения: It was Tom who called. What I need is a holiday.",
    ],
    examples: [
      { de: "Under no circumstances should you open this door.", ru: "Ни при каких обстоятельствах не открывайте эту дверь." },
      { de: "What surprised me most was his honesty.", ru: "Больше всего меня удивила его честность." },
    ],
    exercises: parseExercises("einv", "C1", `
choice | Never ___ such a beautiful place. | have I seen ~ I have seen ~ I saw ~ did I saw | have I seen | Never в начале → инверсия.
choice | Not only ___ late, but he also forgot the tickets. | was he ~ he was ~ he is ~ did he was | was he | Not only + инверсия.
fill | No sooner ___ we sat down than the phone rang. | had | No sooner had… than.
choice | ___ you need any help, please let me know. | Should ~ If ~ Would ~ Had | Should | Should = If (формально).
choice | Rarely ___ such honesty in politics. | do we see ~ we see ~ we do see ~ see we | do we see | Rarely + инверсия с do.
choice | ___ I known, I would have helped. | Had ~ If ~ Did ~ Would | Had | Had I known = If I had known.
fill | It was my sister ___ broke the vase, not me. | who | Выделение: It was … who …
choice | Under no circumstances ___ leave the building. | should you ~ you should ~ you must ~ do you | should you | Under no circumstances + инверсия.
choice | ___ I need now is a long holiday. | What ~ That ~ Which ~ It | What | Псевдорасщеплённое: What I need is…
choice | Hardly ___ the house when it began to snow. | had we left ~ we had left ~ did we leave ~ we left | had we left | Hardly had… when.
choice | Only after the meeting ___ the truth. | did I learn ~ I learned ~ I did learn ~ learned I | did I learn | Only after… + инверсия.
fill | Little ___ he know what was waiting for him. | did | Little did he know…
choice | ___ I you, I would accept the offer. | Were ~ Was ~ If ~ Had | Were | Were I you = If I were you.
choice | Not until I left home ___ how much my parents did for me. | did I realise ~ I realised ~ realised I ~ I did realise | did I realise | Not until… + инверсия в главной части.
choice | So tired ___ that he fell asleep at dinner. | was he ~ he was ~ did he ~ he did | was he | So + прил. в начале → инверсия.
`),
  },
];
