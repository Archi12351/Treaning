import { gloss, questions, type ReadingText } from "./types";

export const TEXTS_EN: ReadingText[] = [
  {
    id: "en-t-tom", level: "A1", icon: "👨", title: "Meet Tom", ru: "Знакомьтесь, Том",
    paragraphs: [
      "Hi! My name is Tom. I'm 30 years old and I'm from Manchester. I live in a small flat with my cat, Max.",
      "I work in a bank. I start work at nine o'clock and finish at five. I usually go to work by bus.",
      "In the evening, I cook dinner and watch TV. At the weekend, I play football with my friends.",
    ],
    glossary: gloss("flat = квартира; usually = обычно; by bus = на автобусе; at the weekend = на выходных"),
    questions: questions(`
Где живёт Том? | В маленькой квартире ~ В большом доме ~ У родителей | В маленькой квартире
Где работает Том? | В банке ~ В школе ~ В больнице | В банке
Как Том ездит на работу? | На автобусе ~ На машине ~ Пешком | На автобусе
Что Том делает на выходных? | Играет в футбол ~ Работает ~ Готовит | Играет в футбол
`),
  },
  {
    id: "en-t-cafe", level: "A1", icon: "☕", title: "A Busy Café", ru: "Оживлённое кафе",
    paragraphs: [
      "The Corner Café opens at seven in the morning. It is very busy before nine because people buy coffee on the way to work.",
      "The café sells tea, coffee, sandwiches and cakes. The most popular cake is the carrot cake.",
      "On Sundays the café is closed, but on Saturdays there is live music in the afternoon.",
    ],
    glossary: gloss("busy = оживлённый, занятой; on the way to = по пути на; the most popular = самый популярный; live music = живая музыка"),
    questions: questions(`
Во сколько открывается кафе? | В семь ~ В девять ~ В восемь | В семь
Какой торт самый популярный? | Морковный ~ Шоколадный ~ Яблочный | Морковный
Когда кафе закрыто? | В воскресенье ~ В субботу ~ В понедельник | В воскресенье
Что бывает в субботу? | Живая музыка ~ Скидки ~ Ничего | Живая музыка
`),
  },
  {
    id: "en-t-gp", level: "A2", icon: "🩺", category: "official", title: "Registering with a GP", ru: "Как прикрепиться к врачу в Великобритании",
    paragraphs: [
      "When you move to the UK, you should register with a GP (a family doctor) near your home. You can find a local surgery on the NHS website.",
      "Registration is free. You don't need proof of address or immigration status to register, but some surgeries may ask for them.",
      "After you register, you can book appointments online or by phone. In an emergency, call 999. For urgent problems that are not emergencies, call 111.",
    ],
    glossary: gloss("register with = прикрепиться к; surgery = клиника, кабинет врача; proof of address = подтверждение адреса; book an appointment = записаться на приём; urgent = срочный"),
    questions: questions(`
Кто такой GP? | Семейный врач ~ Хирург ~ Фармацевт | Семейный врач
Сколько стоит регистрация? | Бесплатно ~ 10 фунтов ~ Зависит от клиники | Бесплатно
Куда звонить в экстренной ситуации? | 999 ~ 111 ~ 112 | 999
Куда звонить, если срочно, но не экстренно? | 111 ~ 999 ~ В клинику | 111
`),
  },
  {
    id: "en-t-letter", level: "B1", icon: "📩", category: "official", title: "Council Tax Bill", ru: "Счёт за муниципальный налог",
    paragraphs: [
      "Dear Resident, this is your Council Tax bill for the year 1 April to 31 March. Your property is in Band C, and the total amount due is £1,840.",
      "As you have told us that you live alone, a 25% single person discount has been applied. The amount you need to pay is therefore £1,380.",
      "You can pay in ten monthly instalments by Direct Debit, starting on 1 April. If you would prefer to pay in twelve instalments, please contact us before the first payment date.",
      "If your circumstances change, for example if someone moves in with you, you must tell us within 21 days.",
    ],
    glossary: gloss("band = категория (стоимости жилья); amount due = сумма к оплате; discount = скидка; instalment = платёж в рассрочку; circumstances = обстоятельства"),
    questions: questions(`
Why did the resident get a discount? | They live alone ~ They are a student ~ They pay early | They live alone
How much does the resident have to pay? | £1,380 ~ £1,840 ~ £460 | £1,380
How can they pay in twelve instalments? | Contact the council before the first payment ~ Do nothing ~ Pay by cash | Contact the council before the first payment
When must they report a change of circumstances? | Within 21 days ~ Within a year ~ Never | Within 21 days
`),
  },
  {
    id: "en-t-commute", level: "B1", icon: "🚆", title: "The Daily Commute", ru: "Ежедневная дорога на работу",
    paragraphs: [
      "For millions of people in big cities, the daily commute is a major part of life. In London, the average commute takes about 45 minutes each way.",
      "Some people use this time well: they read, listen to podcasts or even learn a language. Others find it stressful, especially when trains are delayed or overcrowded.",
      "Since the pandemic, many companies allow staff to work from home a few days a week, which has made commuting less frequent for office workers.",
    ],
    glossary: gloss("commute = дорога на работу и обратно; each way = в одну сторону; overcrowded = переполненный; staff = персонал; frequent = частый"),
    questions: questions(`
How long is the average commute in London? | About 45 minutes each way ~ Two hours ~ Ten minutes | About 45 minutes each way
What do some people do while commuting? | Listen to podcasts ~ Sleep at work ~ Cook | Listen to podcasts
When is commuting especially stressful? | When trains are delayed ~ At the weekend ~ In summer | When trains are delayed
What changed after the pandemic? | People commute less often ~ Trains became free ~ Nothing | People commute less often
`),
  },
  {
    id: "en-t-ai", level: "B2", icon: "🤖", title: "Will AI Replace Teachers?", ru: "Заменит ли ИИ учителей?",
    paragraphs: [
      "AI tutors can now explain grammar, correct essays and hold conversations at any hour. For learners, this is undeniably convenient, and in some studies, students using AI feedback improved faster than those who didn't.",
      "However, many educators argue that learning is not merely the transfer of information. Motivation, accountability and human encouragement play a crucial role, particularly for beginners.",
      "The most likely future, experts suggest, is a combination: AI handles repetitive practice and instant feedback, while teachers focus on mentoring, discussion and keeping students motivated.",
    ],
    glossary: gloss("undeniably = бесспорно; merely = лишь; accountability = ответственность (перед кем-то); crucial = решающий; repetitive = повторяющийся"),
    questions: questions(`
What advantage of AI tutors is mentioned? | They are available at any hour ~ They are free ~ They replace exams | They are available at any hour
What do many educators argue? | Learning is more than transferring information ~ AI is useless ~ Teachers are too expensive | Learning is more than transferring information
Who needs human encouragement in particular? | Beginners ~ Experts ~ Teachers | Beginners
What future do experts suggest? | A combination of AI and teachers ~ Only AI ~ Only teachers | A combination of AI and teachers
`),
  },
  {
    id: "en-t-visa", level: "C1", icon: "🛂", category: "official", title: "Skilled Worker Visa: Key Rules", ru: "Виза квалифицированного работника",
    paragraphs: [
      "The Skilled Worker route allows employers in the UK to recruit people from overseas for eligible roles. Applicants must have a confirmed job offer from a Home Office–licensed sponsor and meet a minimum salary threshold, which varies depending on the occupation.",
      "In addition, applicants must demonstrate English language proficiency, typically at level B1 or above, and, in most cases, pay the Immigration Health Surcharge, which grants access to the NHS.",
      "The visa can lead to settlement, known as Indefinite Leave to Remain, after five years of continuous residence, provided the holder continues to meet the requirements throughout that period.",
    ],
    glossary: gloss("eligible = подходящий по требованиям; sponsor = спонсор (работодатель с лицензией); threshold = порог; proficiency = владение; surcharge = доплата, сбор; settlement = право на постоянное проживание"),
    questions: questions(`
What must applicants have? | A job offer from a licensed sponsor ~ A UK bank account ~ A British spouse | A job offer from a licensed sponsor
What English level is typically required? | B1 or above ~ C2 ~ None | B1 or above
What does the Immigration Health Surcharge give access to? | The NHS ~ Universities ~ Social housing | The NHS
When can the visa lead to settlement? | After five years of continuous residence ~ After one year ~ Never | After five years of continuous residence
`),
  },
];
