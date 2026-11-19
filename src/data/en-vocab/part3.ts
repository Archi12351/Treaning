import { parseVocab } from "../vocabParse";

// English B1–B2: работа, деньги, госуслуги, здоровье, транспорт, путешествия, технологии.
export const EN_PART3 = [
  ...parseVocab("en-work", "B1", `
#A2
the job | работа (должность) | I love my job. | Я люблю свою работу.
the office | офис | The office is in the centre. | Офис в центре.
the boss | начальник | My boss is on holiday. | Мой начальник в отпуске.
the company | компания | She works for a big company. | Она работает в большой компании.
full-time | полный рабочий день | I work full-time. | Я работаю полный день.
part-time | неполный рабочий день | He has a part-time job. | У него подработка.
the shift | смена | I'm on the night shift. | Я в ночную смену.
#B1
the CV (UK) / résumé (US) | резюме | Send us your CV. | Пришлите нам ваше резюме.
the cover letter | сопроводительное письмо | Write a short cover letter. | Напишите короткое сопроводительное письмо.
to apply for | подавать заявку на | I applied for the job. | Я подал заявку на вакансию.
the vacancy | вакансия | There's a vacancy in marketing. | Есть вакансия в маркетинге.
the employer | работодатель | My employer pays for training. | Мой работодатель оплачивает обучение.
the employee | работник | The company has 300 employees. | В компании 300 сотрудников.
the contract | контракт | Read the contract carefully. | Внимательно прочтите контракт.
the probation period | испытательный срок | The probation period is three months. | Испытательный срок — три месяца.
to hire | нанимать | They hired five new people. | Они наняли пять новых сотрудников.
to fire / to sack | увольнять | He was fired last week. | Его уволили на прошлой неделе.
to resign / to quit | увольняться | I resigned yesterday. | Я вчера уволился.
the promotion | повышение | She got a promotion. | Её повысили.
the pay rise (UK) / raise (US) | прибавка к зарплате | I asked for a pay rise. | Я попросил прибавку.
the wage | зарплата (почасовая/недельная) | The minimum wage went up. | Минимальная зарплата выросла.
overtime | сверхурочные | I worked ten hours of overtime. | Я отработал десять часов сверхурочно.
the day off | выходной | Tomorrow is my day off. | Завтра у меня выходной.
sick leave | больничный | I'm on sick leave. | Я на больничном.
maternity leave | декретный отпуск | She's on maternity leave. | Она в декрете.
to work from home | работать из дома | I work from home on Fridays. | По пятницам я работаю из дома. | 🏠
the colleague (B1) | коллега | My colleagues are great. | У меня отличные коллеги.
the manager | менеджер, руководитель | Ask the manager. | Спросите менеджера.
the team (B1) | команда | Our team won an award. | Наша команда получила награду.
the deadline (B1) | крайний срок | The deadline is Friday. | Дедлайн — пятница.
the task | задача | I have many tasks today. | У меня сегодня много задач.
the training | обучение | New staff get two weeks of training. | Новые сотрудники проходят двухнедельное обучение.
the internship | стажировка | She's doing an internship. | Она проходит стажировку.
unemployed | безработный | He's been unemployed for months. | Он безработный уже несколько месяцев.
self-employed | самозанятый | I'm self-employed. | Я работаю на себя.
retired | на пенсии | My parents are retired. | Мои родители на пенсии.
the pension | пенсия | He gets a good pension. | У него хорошая пенсия.
the union | профсоюз | The union called a strike. | Профсоюз объявил забастовку.
the strike | забастовка | Train drivers are on strike. | Машинисты бастуют.
#B2
the workload | рабочая нагрузка | My workload is too heavy. | У меня слишком большая нагрузка.
burnout | выгорание | He suffered from burnout. | Он страдал от выгорания.
to meet a deadline | уложиться в срок | We met the deadline. | Мы уложились в срок.
to be in charge of | отвечать за | She's in charge of sales. | Она отвечает за продажи.
the notice period | срок уведомления | My notice period is one month. | Срок уведомления — месяц.
redundancy | сокращение | Fifty jobs face redundancy. | Под сокращение попадают пятьдесят мест.
the reference | рекомендация | Can you give me a reference? | Можете дать мне рекомендацию?
`),

  ...parseVocab("en-office", "B1", `
the meeting (B1) | совещание | The meeting starts at ten. | Совещание начинается в десять.
the agenda | повестка | What's on the agenda? | Что на повестке?
the minutes | протокол | Who's taking the minutes? | Кто ведёт протокол?
the presentation | презентация | I'm giving a presentation tomorrow. | Завтра я делаю презентацию.
the report | отчёт | The report is due on Monday. | Отчёт нужно сдать в понедельник.
the client | клиент | The client is happy. | Клиент доволен.
the invoice | счёт-фактура | Please send the invoice. | Пришлите, пожалуйста, счёт.
to schedule | назначать | Let's schedule a call. | Давай назначим звонок.
to postpone | откладывать | The meeting was postponed. | Совещание отложили.
to cancel | отменять | I have to cancel our meeting. | Мне придётся отменить встречу.
to follow up | связаться повторно | I'll follow up by email. | Я напишу дополнительно по почте.
to forward | пересылать | I'll forward you the email. | Я перешлю тебе письмо.
the attachment | вложение | Please see the attachment. | Смотрите вложение. | 📎
to cc | ставить в копию | Please cc me. | Поставьте меня в копию.
the printer | принтер | The printer is out of paper. | В принтере нет бумаги. | 🖨️
the stationery | канцтовары | The stationery is in the cupboard. | Канцтовары в шкафу.
the conference call | конференц-звонок | We have a conference call at three. | В три у нас конференц-звонок.
the business trip | командировка | I'm on a business trip. | Я в командировке.
the feedback | обратная связь | Thanks for the feedback. | Спасибо за отзыв.
the department | отдел | Which department do you work in? | В каком отделе ты работаешь?
the headquarters | штаб-квартира | The headquarters are in London. | Штаб-квартира в Лондоне.
Dear Sir or Madam | Уважаемые господа (в письме) | Dear Sir or Madam, I am writing to ... | Уважаемые господа, пишу вам ...
Kind regards | С уважением | Kind regards, Anna | С уважением, Анна
Best wishes | С наилучшими пожеланиями | Best wishes, Tom | Всего хорошего, Том
I look forward to hearing from you | жду вашего ответа | I look forward to hearing from you soon. | С нетерпением жду вашего ответа.
please find attached | во вложении | Please find attached my CV. | Во вложении моё резюме.
`),

  ...parseVocab("en-official", "B1", `
the council | муниципалитет | Contact the local council. | Обратитесь в местный муниципалитет.
the council tax | муниципальный налог (брит.) | Council tax is paid monthly. | Муниципальный налог платят ежемесячно.
the GP (general practitioner) | семейный врач (брит.) | Register with a GP. | Прикрепитесь к семейному врачу.
the NHS number | номер NHS (брит.) | You'll get an NHS number by post. | Номер NHS придёт по почте.
the National Insurance number | номер соцстрахования (брит.) | You need a National Insurance number to work. | Для работы нужен номер соцстрахования.
HMRC | налоговая служба Великобритании | HMRC sent me a letter. | Налоговая прислала мне письмо.
the IRS | налоговая служба США | File your taxes with the IRS. | Подайте декларацию в IRS.
the Social Security Number | номер соцстрахования (США) | Apply for a Social Security Number. | Подайте заявку на номер соцстрахования.
the DMV | отдел транспортных средств (США) | I need to go to the DMV for my licence. | Мне нужно в DMV за правами.
the embassy | посольство | Apply for a visa at the embassy. | Подайте на визу в посольство.
the consulate | консульство | The consulate is closed today. | Консульство сегодня закрыто.
the visa | виза | My visa expires in May. | Моя виза истекает в мае.
the residence permit | вид на жительство | I need to renew my residence permit. | Мне нужно продлить вид на жительство.
the work permit | разрешение на работу | Do you have a work permit? | У вас есть разрешение на работу?
the green card | грин-карта | She got her green card. | Она получила грин-карту.
the citizenship | гражданство | He applied for British citizenship. | Он подал на британское гражданство.
the passport | паспорт | My passport is valid for five years. | Мой паспорт действителен пять лет. | 🛂
the ID card | удостоверение личности | Show your ID card. | Покажите удостоверение.
the driving licence (UK) / driver's license (US) | водительские права | I lost my driving licence. | Я потерял права. | 🪪
the birth certificate | свидетельство о рождении | Bring your birth certificate. | Принесите свидетельство о рождении.
the marriage certificate | свидетельство о браке | We need a copy of the marriage certificate. | Нам нужна копия свидетельства о браке.
the proof of address | подтверждение адреса | A utility bill is proof of address. | Счёт за коммуналку подтверждает адрес.
the application form | бланк заявления | Fill in the application form. | Заполните бланк заявления. | 📝
to apply (B1) | подавать заявление | You can apply online. | Можно подать заявление онлайн.
the appointment | запись, приём | I have an appointment at nine. | У меня запись на девять.
to book an appointment | записаться на приём | I'd like to book an appointment. | Я хотел бы записаться на приём.
the fee | пошлина, сбор | The fee is £50. | Пошлина — 50 фунтов.
to renew | продлевать | I need to renew my passport. | Мне нужно продлить паспорт.
to expire | истекать | It expires next month. | Срок истекает в следующем месяце.
valid | действительный | Is my visa still valid? | Моя виза ещё действительна?
the signature | подпись | Your signature here, please. | Ваша подпись здесь. | ✍️
to sign | подписывать | Please sign the form. | Пожалуйста, подпишите бланк.
the copy | копия | Bring a copy and the original. | Принесите копию и оригинал.
the certified translation | заверенный перевод | You need a certified translation. | Нужен заверенный перевод.
the benefits | пособия | He's on benefits. | Он живёт на пособие.
Universal Credit | универсальный кредит (пособие, брит.) | You can apply for Universal Credit online. | На Universal Credit можно подать онлайн.
the Jobcentre | центр занятости (брит.) | I have an appointment at the Jobcentre. | У меня встреча в центре занятости.
the tax return | налоговая декларация | Have you filed your tax return? | Ты подал декларацию?
the tax code | налоговый код | My tax code is wrong. | Мой налоговый код неправильный.
the deadline (official) | крайний срок | The deadline is 31 January. | Крайний срок — 31 января.
#B2
the biometrics | биометрия | Book a biometrics appointment. | Запишитесь на сдачу биометрии.
the eligibility | право, соответствие требованиям | Check your eligibility first. | Сначала проверьте, подходите ли вы.
the dependant | иждивенец | Can I bring my dependants? | Могу ли я привезти иждивенцев?
the sponsor | спонсор (работодатель для визы) | My employer is my visa sponsor. | Мой работодатель — спонсор визы.
to appeal | обжаловать | You can appeal the decision. | Решение можно обжаловать.
the reference number | номер обращения | Quote your reference number. | Укажите номер обращения.
proof of income | подтверждение дохода | They asked for proof of income. | Они попросили подтверждение дохода.
the naturalisation | натурализация | The naturalisation process takes months. | Процесс натурализации занимает месяцы.
`),

  ...parseVocab("en-money", "B1", `
#A2
the money | деньги | I don't have much money. | У меня немного денег. | 💰
the pound | фунт | It costs ten pounds. | Это стоит десять фунтов. | 💷
the dollar | доллар | Five dollars, please. | Пять долларов, пожалуйста. | 💵
the coin | монета | I need coins for parking. | Мне нужны монеты для парковки. | 🪙
the cash machine / ATM | банкомат | Is there an ATM nearby? | Здесь есть банкомат? | 🏧
#B1
the bank account | банковский счёт | I want to open a bank account. | Я хочу открыть счёт.
the current account (UK) / checking account (US) | текущий счёт | Your salary goes into your current account. | Зарплата приходит на текущий счёт.
the savings account | сберегательный счёт | I have a savings account. | У меня есть сберегательный счёт.
to withdraw | снимать | I withdrew £100. | Я снял 100 фунтов.
to deposit | вносить | Deposit the cheque. | Внесите чек.
the transfer | перевод | I made a bank transfer. | Я сделал банковский перевод.
the balance | баланс | Check your balance. | Проверьте баланс.
the statement | выписка | Download your bank statement. | Скачайте выписку со счёта.
the direct debit | автоплатёж | I pay the rent by direct debit. | Аренду я плачу автоплатежом.
the overdraft | овердрафт | I'm in my overdraft. | Я ушёл в овердрафт.
the loan | заём, кредит | We took out a loan. | Мы взяли кредит.
the mortgage | ипотека | They have a mortgage. | У них ипотека.
the interest | проценты | The interest rate is 5%. | Процентная ставка 5%.
the debt | долг | He's in debt. | Он в долгах.
the credit score | кредитный рейтинг | A good credit score helps. | Хороший кредитный рейтинг помогает.
the budget | бюджет | We're on a tight budget. | У нас ограниченный бюджет.
afford | позволить себе | I can't afford it. | Я не могу себе этого позволить.
the exchange rate | обменный курс | What's the exchange rate? | Какой курс обмена?
the currency | валюта | What currency do they use? | Какую валюту там используют?
the income | доход | Their income is low. | У них низкий доход.
the expenses | расходы | Keep track of your expenses. | Следите за расходами.
the tax | налог | Income tax is 20%. | Подоходный налог — 20%.
before tax / gross | до вычета налогов | I earn £40,000 before tax. | Я зарабатываю 40 тысяч фунтов до налогов.
after tax / net | после налогов | After tax it's about £2,600 a month. | После налогов около 2600 в месяц.
the insurance | страховка | Do you have car insurance? | У тебя есть автостраховка?
the subscription | подписка | I cancelled my subscription. | Я отменил подписку.
the receipt (B1) | квитанция, чек | Keep the receipt. | Сохраните чек.
#B2
the investment | инвестиция | It's a good investment. | Это хорошее вложение.
the shares / stocks | акции | He bought shares in Apple. | Он купил акции Apple. | 📈
the inflation | инфляция | Inflation is rising. | Инфляция растёт.
the recession | рецессия | The country is in recession. | Страна в рецессии.
to go bankrupt | обанкротиться | The company went bankrupt. | Компания обанкротилась.
the pension scheme | пенсионная программа | Join the pension scheme. | Вступите в пенсионную программу.
`),

  ...parseVocab("en-health", "A2", `
the doctor | врач | I need to see a doctor. | Мне нужно к врачу. | 🧑‍⚕️
the dentist | стоматолог | I'm going to the dentist. | Я иду к стоматологу. | 🦷
the hospital | больница | He's in hospital. | Он в больнице. | 🏥
the chemist's (UK) / pharmacy | аптека | Get it from the chemist's. | Купи это в аптеке. | 💊
the medicine | лекарство | Take this medicine twice a day. | Принимайте это лекарство дважды в день.
the pill | таблетка | Take one pill after meals. | Принимайте по одной таблетке после еды.
the prescription | рецепт | You need a prescription. | Нужен рецепт.
the headache | головная боль | I have a headache. | У меня болит голова.
the toothache | зубная боль | I have toothache. | У меня болит зуб.
the stomach ache | боль в животе | He has a stomach ache. | У него болит живот.
the sore throat | боль в горле | I have a sore throat. | У меня болит горло.
the cold | простуда | I've got a cold. | Я простудился. | 🤧
the flu | грипп | She has the flu. | У неё грипп.
the fever / temperature | температура | He has a high temperature. | У него высокая температура. | 🤒
the cough | кашель | I have a bad cough. | У меня сильный кашель.
to hurt | болеть | My leg hurts. | У меня болит нога.
the pain | боль | I have pain in my back. | У меня боль в спине.
to feel sick | тошнить | I feel sick. | Меня тошнит. | 🤢
dizzy | испытывающий головокружение | I feel dizzy. | У меня кружится голова.
the injury | травма | It's a minor injury. | Это лёгкая травма.
the plaster (UK) / Band-Aid (US) | пластырь | Do you have a plaster? | У тебя есть пластырь? | 🩹
the ambulance | скорая помощь | Call an ambulance! | Вызовите скорую! | 🚑
the emergency | экстренный случай | It's an emergency! | Это срочно! | 🆘
A&E (UK) / ER (US) | приёмный покой | We went to A&E. | Мы поехали в отделение неотложной помощи.
#B1
the appointment (doctor) | приём | I'd like to make an appointment. | Я хотел бы записаться на приём.
the symptoms | симптомы | What are your symptoms? | Какие у вас симптомы?
the allergy | аллергия | I have a nut allergy. | У меня аллергия на орехи.
allergic to | с аллергией на | I'm allergic to penicillin. | У меня аллергия на пенициллин.
the blood pressure | давление | Your blood pressure is high. | У вас высокое давление.
the blood test | анализ крови | You need a blood test. | Вам нужно сдать кровь.
the X-ray | рентген | We'll do an X-ray. | Мы сделаем рентген.
the injection | укол | It's just a small injection. | Это просто маленький укол. | 💉
the vaccine | вакцина | Have you had the vaccine? | Вы сделали прививку?
the side effects | побочные эффекты | Are there any side effects? | Есть побочные эффекты?
the surgery | операция; кабинет врача (брит.) | He needs surgery. | Ему нужна операция.
to recover | выздоравливать | She's recovering well. | Она хорошо восстанавливается.
the treatment | лечение | The treatment is free. | Лечение бесплатное.
the specialist | специалист | The GP referred me to a specialist. | Семейный врач направил меня к специалисту.
to refer | направлять | I'll refer you to a specialist. | Я направлю вас к специалисту.
the health insurance | медицинская страховка | Health insurance is expensive in the US. | В США медстраховка дорогая.
#B2
chronic | хронический | He has a chronic illness. | У него хроническое заболевание.
the diagnosis | диагноз | The diagnosis was clear. | Диагноз был ясен.
the mental health | психическое здоровье | Mental health matters. | Психическое здоровье важно.
the anxiety | тревожность | She suffers from anxiety. | Она страдает тревожностью.
the therapy | терапия | Therapy helped me a lot. | Терапия мне очень помогла.
`),

  ...parseVocab("en-transport", "A1", `
the car | машина | I go by car. | Я езжу на машине. | 🚗
the bus | автобус | The bus is late. | Автобус опаздывает. | 🚌
the train | поезд | The train leaves at six. | Поезд уходит в шесть. | 🚆
the underground / tube / subway | метро | Take the tube to Oxford Circus. | Поезжайте на метро до Оксфорд-серкус. | 🚇
the taxi / cab | такси | Let's take a taxi. | Давай возьмём такси. | 🚕
the plane | самолёт | The plane lands at noon. | Самолёт садится в полдень. | ✈️
the bike | велосипед | I ride my bike to work. | Я езжу на работу на велосипеде. | 🚲
the station | станция, вокзал | Where's the station? | Где вокзал?
the airport | аэропорт | The airport is far. | Аэропорт далеко.
the bus stop | остановка | Wait at the bus stop. | Жди на остановке. | 🚏
the ticket | билет | A ticket to Oxford, please. | Билет до Оксфорда, пожалуйста. | 🎫
left | налево | Turn left. | Поверните налево. | ⬅️
right (direction) | направо | Turn right at the lights. | На светофоре направо. | ➡️
straight on | прямо | Go straight on. | Идите прямо. | ⬆️
#A2
the single ticket | билет в одну сторону | A single to London, please. | Билет в Лондон в одну сторону.
the return ticket | билет туда и обратно | A return ticket is cheaper. | Билет туда-обратно дешевле.
the platform | платформа | The train leaves from platform 4. | Поезд отправляется с четвёртой платформы.
the timetable / schedule | расписание | Check the timetable. | Посмотри расписание.
to miss | опоздать на | I missed the bus. | Я опоздал на автобус.
to catch | успеть на | I caught the last train. | Я успел на последний поезд.
the traffic | движение, пробки | The traffic is terrible. | Пробки ужасные.
the traffic jam | пробка | We were stuck in a traffic jam. | Мы застряли в пробке.
the petrol (UK) / gas (US) | бензин | Petrol is expensive. | Бензин дорогой. | ⛽
the petrol station | заправка | Stop at the petrol station. | Остановись на заправке.
to park | парковаться | You can't park here. | Здесь нельзя парковаться. | 🅿️
the car park (UK) / parking lot (US) | парковка | The car park is full. | Парковка заполнена.
the motorway (UK) / highway (US) | шоссе, автомагистраль | Take the motorway. | Поезжай по автомагистрали. | 🛣️
the crossroads | перекрёсток | Turn left at the crossroads. | На перекрёстке налево.
the roundabout | круговое движение | Take the second exit at the roundabout. | На круге второй съезд.
the pavement (UK) / sidewalk (US) | тротуар | Walk on the pavement. | Иди по тротуару.
the zebra crossing / crosswalk | пешеходный переход | Cross at the zebra crossing. | Переходи по зебре.
#B1
the speed limit | ограничение скорости | The speed limit is 30 mph. | Ограничение — 30 миль в час.
the fine | штраф | I got a parking fine. | Я получил штраф за парковку.
the accident | авария | There was an accident on the M25. | На M25 была авария. | 💥
the breakdown | поломка | We had a breakdown on the motorway. | У нас сломалась машина на трассе.
the roadworks | дорожные работы | Delays due to roadworks. | Задержки из-за дорожных работ. | 🚧
the diversion / detour | объезд | Follow the diversion signs. | Следуйте знакам объезда.
the MOT | техосмотр (брит.) | My car needs an MOT. | Моей машине нужен техосмотр.
the commute | дорога на работу | My commute takes an hour. | Дорога на работу занимает час.
to give someone a lift / ride | подвезти | Can you give me a lift? | Подвезёшь меня?
the Oyster card | проездная карта (Лондон) | Top up your Oyster card. | Пополните карту Oyster.
`),

  ...parseVocab("en-travel", "A2", `
the holiday / trip | поездка | We had a great trip. | У нас была отличная поездка.
the hotel | отель | We stayed in a nice hotel. | Мы жили в хорошем отеле. | 🏨
the reception | ресепшен | Ask at reception. | Спросите на ресепшене. | 🛎️
the booking / reservation | бронь | I have a booking under Smith. | У меня бронь на фамилию Смит.
to book | бронировать | I booked a room online. | Я забронировал номер онлайн.
the single room | одноместный номер | A single room for two nights. | Одноместный номер на две ночи.
the double room | двухместный номер | We'd like a double room. | Нам двухместный номер.
the luggage | багаж | Where can I leave my luggage? | Где можно оставить багаж? | 🧳
the suitcase | чемодан | My suitcase is heavy. | Мой чемодан тяжёлый.
the backpack | рюкзак | I travel with a backpack. | Я путешествую с рюкзаком. | 🎒
to pack | собирать вещи | Have you packed? | Ты собрался?
the sightseeing | осмотр достопримечательностей | We went sightseeing. | Мы осматривали достопримечательности.
the tourist | турист | The city is full of tourists. | Город полон туристов.
the guide | гид | The guide was very friendly. | Гид был очень дружелюбным.
the map | карта | Do you have a map? | У вас есть карта? | 🗺️
the beach | пляж | Let's go to the beach. | Пойдём на пляж. | 🏖️
the souvenir | сувенир | I bought souvenirs. | Я купил сувениры.
abroad (A2) | за границу | We're going abroad. | Мы едем за границу.
#B1
the flight | рейс | The flight was delayed. | Рейс задержали.
the boarding pass | посадочный талон | Show your boarding pass. | Покажите посадочный талон.
the gate | выход на посадку | Go to gate 12. | Пройдите к выходу 12.
hand luggage | ручная кладь | Only hand luggage. | Только ручная кладь.
the security check | досмотр | Liquids at security check. | Жидкости на досмотре.
customs | таможня | Nothing to declare at customs. | На таможне нечего декларировать.
passport control | паспортный контроль | Passport control was quick. | Паспортный контроль прошёл быстро.
the connecting flight | стыковочный рейс | I missed my connecting flight. | Я пропустил стыковочный рейс.
jet lag | джетлаг | I have terrible jet lag. | У меня ужасный джетлаг.
travel insurance | туристическая страховка | Buy travel insurance. | Купите туристическую страховку.
the destination | пункт назначения | What's your final destination? | Какой ваш конечный пункт?
fully booked | всё занято | The hotel is fully booked. | Мест в отеле нет.
to cancel a booking | отменить бронь | I need to cancel my booking. | Мне нужно отменить бронь.
the hostel | хостел | We stayed in a hostel. | Мы остановились в хостеле.
the campsite | кемпинг | The campsite is by the lake. | Кемпинг у озера. | ⛺
`),

  ...parseVocab("en-tech", "B1", `
#A2
the computer | компьютер | My computer is slow. | Мой компьютер медленный. | 💻
the laptop | ноутбук | I work on my laptop. | Я работаю на ноутбуке.
the phone / mobile / cell phone | телефон | My phone is dead. | У меня сел телефон. | 📱
the app | приложение | Download the app. | Скачайте приложение.
the password | пароль | I forgot my password. | Я забыл пароль. | 🔑
the website | сайт | Check the website. | Загляните на сайт.
the email | электронное письмо | Send me an email. | Пришли мне письмо. | 📧
the Wi-Fi | вайфай | What's the Wi-Fi password? | Какой пароль от вайфая? | 📶
the screen | экран | The screen is cracked. | Экран треснул.
the keyboard | клавиатура | The keyboard doesn't work. | Клавиатура не работает. | ⌨️
#B1
to download | скачивать | Download the file. | Скачай файл.
to upload | загружать | Upload your photo. | Загрузите фото.
to log in | войти | I can't log in. | Не могу войти.
to log out | выйти | Don't forget to log out. | Не забудь выйти.
the account | аккаунт | Create an account. | Создайте аккаунт.
the username | имя пользователя | Enter your username. | Введите имя пользователя.
to install | устанавливать | Install the update. | Установите обновление.
the update | обновление | A new update is available. | Доступно новое обновление.
to delete | удалять | Delete the old files. | Удали старые файлы.
the file | файл | Save the file. | Сохрани файл. | 📄
the folder | папка | Put it in a folder. | Положи в папку. | 📁
to save | сохранять | Save your work. | Сохраняй работу.
the charger | зарядка | Can I borrow your charger? | Можно твою зарядку? | 🔌
the battery | батарея | My battery is low. | Батарея садится. | 🔋
the signal | сигнал | There's no signal here. | Здесь нет сигнала.
to crash | зависать, падать | The app keeps crashing. | Приложение постоянно падает.
the settings | настройки | Change it in the settings. | Измени в настройках. | ⚙️
social media | соцсети | She's always on social media. | Она вечно в соцсетях.
to post | публиковать | He posted a photo. | Он выложил фото.
the link | ссылка | Click the link. | Нажми на ссылку. | 🔗
the search engine | поисковая система | Use a search engine. | Воспользуйся поисковиком.
to google | гуглить | Just google it. | Просто погугли.
the screenshot | скриншот | Send me a screenshot. | Пришли скриншот.
#B2
the privacy | конфиденциальность | Privacy is important online. | Конфиденциальность важна в сети.
the data | данные | They collect personal data. | Они собирают персональные данные.
the cloud | облако | Store it in the cloud. | Храни в облаке. | ☁️
the software | ПО | The software is outdated. | ПО устарело.
the artificial intelligence (AI) | искусственный интеллект | AI is changing the world. | ИИ меняет мир. | 🤖
the algorithm | алгоритм | The algorithm decides what you see. | Алгоритм решает, что ты видишь.
the cybersecurity | кибербезопасность | Cybersecurity is a growing field. | Кибербезопасность — растущая сфера.
the two-factor authentication | двухфакторная аутентификация | Turn on two-factor authentication. | Включи двухфакторную аутентификацию.
`),
];
