import type { ConversationTopic } from "../../types";
import { dialogue } from "../dialogueParse";

export const EN_EXTRA_CONVERSATIONS: ConversationTopic[] = [
  // ───────────── Бытовые ─────────────
  dialogue({ id: "en-supermarket-a1", title: "At the Supermarket", ru: "В супермаркете", level: "A1", icon: "🛒", avatar: "🧑‍💼" }, `
B: Hello! Can I help you? | Здравствуйте! Вам помочь?
U: Yes, please. Where is the milk? | Да, пожалуйста. Где молоко? | Where can I find the milk?
B: It's in aisle three, next to the cheese. | В третьем ряду, рядом с сыром.
U: Thank you. And where is the bread? | Спасибо. А где хлеб? | Where's the bread?
B: The bread is at the front, near the entrance. | Хлеб впереди, у входа.
U: Great. Do you sell coffee? | Отлично. У вас есть кофе? | Do you have coffee?
B: Yes, aisle five. Anything else? | Да, пятый ряд. Что-нибудь ещё?
U: No, that's all. Thanks a lot! | Нет, это всё. Большое спасибо! | No, thanks.
B: You're welcome. Have a nice day! | Пожалуйста. Хорошего дня!
U: You too! | И вам! | Thanks, you too!
`),
  dialogue({ id: "en-hotel-a2", title: "Checking into a Hotel", ru: "Заселение в отель", level: "A2", icon: "🏨", avatar: "🧑‍💼" }, `
B: Good evening, welcome to the Grand Hotel. Do you have a reservation? | Добрый вечер, добро пожаловать в «Гранд Отель». У вас есть бронь?
U: Yes, I booked a double room for three nights. | Да, я забронировал двухместный номер на три ночи. | Yes, I have a reservation for three nights.
B: May I have your name, please? | Можно вашу фамилию?
U: It's Petrov, P-E-T-R-O-V. | Петров, П-Е-Т-Р-О-В. | My name is Petrov.
B: Thank you. Could I see your passport? | Спасибо. Можно ваш паспорт?
U: Here you are. Is breakfast included? | Вот, пожалуйста. Завтрак включён? | Here it is. Does the price include breakfast?
B: Yes, breakfast is from seven to ten in the restaurant. | Да, завтрак с семи до десяти в ресторане.
U: What time is check-out? | Во сколько выезд? | When do I need to check out?
B: Check-out is at eleven. Your room is 305, on the third floor. | Выезд в одиннадцать. Ваш номер 305, на третьем этаже.
U: What's the Wi-Fi password? | Какой пароль от вайфая? | Is there Wi-Fi in the room?
B: It's on your key card. Enjoy your stay! | Он на вашей ключ-карте. Приятного отдыха!
U: Thank you very much. | Большое спасибо. | Thanks!
`),
  dialogue({ id: "en-restaurant-a2", title: "At a Restaurant", ru: "В ресторане", level: "A2", icon: "🍽️", avatar: "🧑‍🍳" }, `
B: Hi, table for how many? | Здравствуйте, столик на сколько человек?
U: For two, please. | На двоих, пожалуйста. | Two people, please.
B: Here's the menu. Can I get you something to drink? | Вот меню. Что-нибудь выпить?
U: Two glasses of water and a lemonade, please. | Два стакана воды и лимонад, пожалуйста. | Just water, please.
B: Are you ready to order? | Готовы сделать заказ?
U: Yes. I'll have the chicken salad, please. | Да. Мне салат с курицей, пожалуйста. | I'd like the chicken salad.
B: Would you like any sides with that? | Желаете гарнир?
U: Could I have some chips? | Можно картошку фри? | Some fries, please.
B: Of course. Is there anything you're allergic to? | Конечно. У вас есть аллергия на что-нибудь?
U: Yes, I'm allergic to nuts. | Да, у меня аллергия на орехи. | No, nothing.
B: No problem, I'll tell the chef. | Без проблем, я передам повару.
U: Thanks. Could we have the bill at the end, please? | Спасибо. В конце принесите, пожалуйста, счёт. | Thanks a lot.
`),
  dialogue({ id: "en-airport-a2", title: "At the Airport", ru: "В аэропорту", level: "A2", icon: "✈️", avatar: "🧑‍✈️" }, `
B: Good morning. Where are you flying today? | Доброе утро. Куда летите?
U: To New York. | В Нью-Йорк. | I'm flying to New York.
B: Can I see your passport and ticket? | Можно ваш паспорт и билет?
U: Here you are. | Вот, пожалуйста. | Here they are.
B: Are you checking in any bags? | Будете сдавать багаж?
U: Yes, one suitcase. | Да, один чемодан. | Just one bag.
B: Did you pack your bag yourself? | Вы сами собирали сумку?
U: Yes, I did. | Да, сам. | Yes.
B: Would you like a window or an aisle seat? | Место у окна или у прохода?
U: A window seat, please. | У окна, пожалуйста. | Window, please.
B: Here's your boarding pass. Boarding starts at gate 22 at ten fifteen. | Вот посадочный талон. Посадка у выхода 22 в 10:15.
U: Thank you. Is the flight on time? | Спасибо. Рейс по расписанию? | Is there any delay?
B: Yes, it's on time. Have a good flight! | Да, по расписанию. Хорошего полёта!
`),
  dialogue({ id: "en-pharmacy-a2", title: "At the Pharmacy", ru: "В аптеке", level: "A2", icon: "💊", avatar: "🧑‍⚕️" }, `
B: Hello, how can I help? | Здравствуйте, чем помочь?
U: I have a bad cold and a sore throat. | У меня сильная простуда и болит горло. | I've got a cold.
B: Do you have a temperature? | У вас температура?
U: A little, about thirty-eight. | Небольшая, около тридцати восьми. | Yes, a bit.
B: These tablets are good for the fever, and these lozenges are for your throat. | Эти таблетки от температуры, а эти пастилки — для горла.
U: How often should I take them? | Как часто их принимать? | How many a day?
B: One tablet every six hours, no more than four a day. | По одной таблетке каждые шесть часов, не больше четырёх в день.
U: Can I take them with other medicine? | Можно их принимать с другими лекарствами? | Is it OK with other pills?
B: What else are you taking? | Что ещё вы принимаете?
U: Nothing at the moment. | Сейчас ничего. | Nothing else.
B: Then it's fine. If you don't feel better in three days, see a doctor. | Тогда всё в порядке. Если через три дня не станет лучше, обратитесь к врачу.
U: Thank you, I will. | Спасибо, так и сделаю. | Thanks a lot.
`),
  dialogue({ id: "en-flat-viewing-b1", title: "Viewing a Flat", ru: "Просмотр квартиры", level: "B1", icon: "🏠", avatar: "🧑‍💼" }, `
B: Hi, you must be here for the viewing. Come in! | Здравствуйте, вы, наверное, на просмотр. Проходите!
U: Thanks. How much is the rent per month? | Спасибо. Сколько аренда в месяц? | What's the monthly rent?
B: It's twelve hundred pounds a month, bills not included. | Тысяча двести фунтов в месяц, без коммунальных.
U: Roughly how much are the bills? | А примерно сколько коммунальные? | How much are the utilities?
B: Around a hundred and fifty, plus council tax. | Около ста пятидесяти, плюс муниципальный налог.
U: Is the flat furnished? | Квартира меблирована? | Does it come with furniture?
B: Yes, fully furnished, and there's a washing machine. | Да, полностью, и есть стиральная машина.
U: How much is the deposit? | Какой залог? | What about the deposit?
B: Five weeks' rent. It's protected in a deposit scheme. | Арендная плата за пять недель. Он хранится в специальной гарантийной системе.
U: When would it be available? | С какого числа она свободна? | When can I move in?
B: From the first of next month. We'd need references and proof of income. | С первого числа следующего месяца. Нам нужны рекомендации и подтверждение дохода.
U: That's fine. I'd like to apply. | Хорошо. Я хотел бы подать заявку. | I'm interested, what's the next step?
`),
  dialogue({ id: "en-complaint-b1", title: "Making a Complaint", ru: "Жалоба по телефону", level: "B1", icon: "📞", avatar: "🎧" }, `
B: Thank you for calling customer service. How can I help? | Спасибо за звонок в службу поддержки. Чем могу помочь?
U: Hi, I ordered a laptop two weeks ago and it still hasn't arrived. | Здравствуйте, я заказал ноутбук две недели назад, а он до сих пор не пришёл. | My order hasn't arrived yet.
B: I'm sorry to hear that. Can I have your order number? | Мне жаль. Можно номер заказа?
U: Yes, it's 4-5-7-2-1. | Да, 45721. | Sure, it's 45721.
B: I can see it was sent to the wrong address. | Я вижу, что его отправили не по тому адресу.
U: That's frustrating. What can you do about it? | Это неприятно. Что вы можете сделать? | How can you fix this?
B: We can send a new one by express delivery, arriving tomorrow. | Мы можем отправить новый экспресс-доставкой, он придёт завтра.
U: That would be great. Will I have to pay for the express delivery? | Было бы отлично. Мне придётся платить за экспресс-доставку? | Is the express delivery free?
B: No, it's free of charge, and we'll give you a ten percent refund as well. | Нет, бесплатно, и мы вернём вам ещё десять процентов.
U: Thank you, I appreciate it. | Спасибо, я ценю это. | That's very kind, thanks.
`),
  dialogue({ id: "en-business-c1", title: "Business Meeting", ru: "Деловая встреча", level: "C1", icon: "📊", avatar: "🧑‍💼" }, `
B: Shall we get started? The main item on the agenda is the Q3 budget. | Начнём? Главный пункт повестки — бюджет на третий квартал.
U: Sure. I'd like to begin by outlining where we stand. | Конечно. Хочу начать с того, где мы сейчас находимся. | Let me give a quick overview first.
B: Please go ahead. | Прошу.
U: We're currently about eight percent over budget, mainly due to rising logistics costs. | Сейчас мы примерно на восемь процентов превышаем бюджет, в основном из-за роста логистических расходов. | We've overspent by around eight percent because of logistics.
B: That's concerning. What do you propose? | Это тревожно. Что вы предлагаете?
U: I'd suggest renegotiating with our suppliers and postponing the office refurbishment. | Я бы предложил пересмотреть условия с поставщиками и отложить ремонт офиса. | We could renegotiate contracts and delay the refurbishment.
B: Wouldn't postponing the refurbishment affect staff morale? | Не скажется ли перенос ремонта на настроении сотрудников?
U: Possibly, but I think it's a reasonable trade-off in the short term. | Возможно, но в краткосрочной перспективе это разумный компромисс. | It might, but it's a fair compromise for now.
B: Fair enough. Could you put together a detailed proposal by Friday? | Справедливо. Подготовите подробное предложение к пятнице?
U: Absolutely, I'll circulate it to everyone by Thursday evening. | Конечно, разошлю всем к вечеру четверга. | Sure, I'll send it round by Thursday.
`),
  dialogue({ id: "en-debate-c2", title: "A Debate on Remote Work", ru: "Дискуссия об удалённой работе", level: "C2", icon: "🗣️", avatar: "🧑‍🏫" }, `
B: Some argue that remote work has eroded company culture. Where do you stand? | Некоторые утверждают, что удалёнка разрушила корпоративную культуру. Какова ваша позиция?
U: I'd say it hasn't eroded it so much as transformed it — culture now has to be built deliberately. | Я бы сказал, что она её не разрушила, а преобразила — теперь культуру нужно выстраивать осознанно. | In my view it changed rather than destroyed it.
B: But isn't spontaneous collaboration inevitably lost? | Но разве спонтанное сотрудничество не теряется неизбежно?
U: To some extent, yes, though that's arguably offset by access to a far wider talent pool. | В какой-то мере да, хотя это, пожалуй, компенсируется доступом к гораздо более широкому кругу специалистов. | Partly, but hiring globally makes up for it.
B: And what about the impact on junior employees? | А как насчёт влияния на младших сотрудников?
U: That's where I'd concede the point — mentoring is undeniably harder at a distance. | Здесь я соглашусь — наставничество на расстоянии бесспорно сложнее. | I admit that's a real weakness.
B: So would you advocate a hybrid model? | То есть вы выступаете за гибридную модель?
U: Broadly speaking, yes, provided it's designed around tasks rather than imposed uniformly. | В целом да, при условии что она строится вокруг задач, а не навязывается всем одинаково. | Yes, as long as it's flexible.
B: A nuanced position. Thank you. | Взвешенная позиция. Спасибо.
U: My pleasure — it's a debate that's far from settled. | Не за что — эта дискуссия ещё далека от завершения. | Thank you, it's a fascinating topic.
`),

  // ───────────── Госуслуги ─────────────
  dialogue({ id: "en-gp-register-a2", title: "Registering with a GP", ru: "Прикрепление к семейному врачу (NHS)", level: "A2", icon: "🩺", avatar: "👩‍⚕️", category: "official" }, `
B: Good morning, Riverside Surgery. How can I help? | Доброе утро, клиника «Риверсайд». Чем могу помочь?
U: Hello, I've just moved here and I'd like to register with a GP. | Здравствуйте, я только что переехал и хочу прикрепиться к семейному врачу. | I want to register at this surgery.
B: Of course. Do you live in our catchment area? | Конечно. Вы живёте в нашем районе обслуживания?
U: Yes, I live on Park Road. | Да, я живу на Парк-роуд. | Yes, my address is on Park Road.
B: Great. You can fill in the registration form online or on paper. | Отлично. Анкету можно заполнить онлайн или на бумаге.
U: Do I need to show my passport? | Мне нужно показать паспорт? | What documents do I need?
B: It's helpful, but you don't need ID or proof of address to register. | Это полезно, но для регистрации не обязательно удостоверение или подтверждение адреса.
U: Do I have to pay to see a doctor? | Нужно платить за приём у врача? | Is it free?
B: No, GP appointments on the NHS are free. Prescriptions in England cost a fixed charge. | Нет, приём у семейного врача по NHS бесплатный. Лекарства по рецепту в Англии — фиксированная плата.
U: How do I book an appointment? | Как записаться на приём? | How can I make an appointment?
B: Through the NHS App or by phoning us after eight in the morning. | Через приложение NHS или по телефону после восьми утра.
U: Thank you, that's very helpful. | Спасибо, очень помогли. | Thanks a lot.
`),
  dialogue({ id: "en-bank-a2", title: "Opening a Bank Account", ru: "Открытие банковского счёта", level: "A2", icon: "🏦", avatar: "👨‍💼", category: "official" }, `
B: Hello, how can I help you today? | Здравствуйте, чем могу помочь?
U: I'd like to open a current account. | Я хотел бы открыть текущий счёт. | I want to open a bank account.
B: Sure. Can I see some ID and proof of address? | Конечно. Можно удостоверение личности и подтверждение адреса?
U: Here's my passport. I only have a tenancy agreement for my address. | Вот мой паспорт. Для адреса у меня только договор аренды. | This is my passport and my rental contract.
B: That's fine. Are you employed? | Подходит. Вы работаете?
U: Yes, I started a new job last week. | Да, на прошлой неделе я начал новую работу. | Yes, I work for a tech company.
B: Would you like a debit card and online banking? | Вам нужна дебетовая карта и онлайн-банк?
U: Yes, please. Are there any monthly fees? | Да, пожалуйста. Есть ежемесячная плата? | Does the account cost anything?
B: No, this account is free. Your card will arrive within a week. | Нет, этот счёт бесплатный. Карта придёт в течение недели.
U: Great. Can I set up a direct debit for my rent? | Отлично. Можно настроить автоплатёж за аренду? | Can I pay rent automatically?
B: Yes, you can do that in the app once your account is active. | Да, в приложении, когда счёт будет активирован.
U: Perfect, thank you. | Прекрасно, спасибо. | Thanks!
`),
  dialogue({ id: "en-council-tax-b1", title: "Council Tax", ru: "Муниципальный налог (council tax)", level: "B1", icon: "🏛️", avatar: "🧑‍💼", category: "official" }, `
B: Council tax department, how can I help? | Отдел муниципального налога, чем могу помочь?
U: Hi, I've just moved into a flat and I need to set up council tax. | Здравствуйте, я только что въехал в квартиру и мне нужно оформить муниципальный налог. | I need to register for council tax.
B: What's the address and the date you moved in? | Какой адрес и дата въезда?
U: Flat 2, 14 Green Street. I moved in on the first of March. | Квартира 2, Грин-стрит, 14. Я въехал первого марта. | 14 Green Street, from March 1st.
B: Do you live there alone? | Вы живёте там один?
U: Yes, I live alone. | Да, один. | Just me.
B: Then you're entitled to a twenty-five percent single person discount. | Тогда вам положена скидка 25% для одиноко проживающих.
U: That's good to know. How can I pay? | Хорошо знать. Как платить? | What are the payment options?
B: Most people pay by direct debit in ten monthly instalments. | Большинство платит автоплатежом десятью ежемесячными взносами.
U: Can I spread it over twelve months instead? | А можно растянуть на двенадцать месяцев? | Is twelve instalments possible?
B: Yes, just let us know and we'll send you a new bill. | Да, просто сообщите, и мы пришлём новый счёт.
U: Please do. Thank you for your help. | Да, пожалуйста. Спасибо за помощь. | Yes, twelve please. Thanks.
`),
  dialogue({ id: "en-police-b1", title: "Reporting a Theft", ru: "Заявление о краже в полицию", level: "B1", icon: "🚓", avatar: "👮", category: "official" }, `
B: Hello, what's the problem? | Здравствуйте, что случилось?
U: My bike was stolen outside the station this morning. | Сегодня утром у вокзала украли мой велосипед. | Someone stole my bicycle.
B: I'm sorry. Was it locked? | Сочувствую. Он был пристёгнут?
U: Yes, but the lock was cut. | Да, но замок перерезали. | Yes, they cut the lock.
B: Can you describe the bike? | Можете описать велосипед?
U: It's a black mountain bike with a red seat. | Это чёрный горный велосипед с красным сиденьем. | Black, with a red saddle.
B: Do you know the frame number? | Вы знаете номер рамы?
U: Yes, I registered it — I've got a photo of the receipt. | Да, я его регистрировал — у меня есть фото чека. | It's on my receipt.
B: Good. I'll give you a crime reference number for your insurance. | Хорошо. Я дам вам номер дела для страховой.
U: Is there any chance you'll find it? | Есть шанс, что вы его найдёте? | Will you be able to find it?
B: Sometimes, especially if it's registered. Check online second-hand sites too. | Иногда находим, особенно зарегистрированные. Проверяйте и сайты подержанных вещей.
U: I will. Thanks for your help. | Обязательно. Спасибо за помощь. | OK, thank you.
`),
  dialogue({ id: "en-dmv-b1", title: "At the DMV (USA)", ru: "Водительские права в DMV (США)", level: "B1", icon: "🪪", avatar: "🧑‍💼", category: "official" }, `
B: Next! What can I do for you? | Следующий! Чем могу помочь?
U: I recently moved to California and I'd like to get a driver's license. | Я недавно переехал в Калифорнию и хочу получить водительские права. | I need a California driver's license.
B: Do you have a license from another country? | У вас есть права другой страны?
U: Yes, but I understand I have to take the tests here. | Да, но, насколько я понимаю, здесь нужно сдать экзамены. | Yes, from Russia.
B: That's right — the written knowledge test, a vision test and a behind-the-wheel test. | Верно — письменный тест на знания, проверка зрения и практическое вождение.
U: What documents do I need to bring? | Какие документы нужны? | What do I need to bring?
B: Proof of identity, your Social Security number, and two proofs of California residency. | Удостоверение личности, номер соцстрахования и два подтверждения проживания в Калифорнии.
U: Would a lease agreement and a utility bill work? | Подойдут договор аренды и счёт за коммунальные услуги? | Can I use my lease and an electricity bill?
B: Yes, both are fine. The application fee is around forty dollars. | Да, оба подходят. Сбор за заявление около сорока долларов.
U: Can I take the written test today? | Можно сдать письменный тест сегодня? | Is the written test possible today?
B: Yes, if you finish the application. You can also take it in other languages. | Да, если заполните заявление. Его можно сдать и на других языках.
U: Great, I'll do it now. Thank you! | Отлично, сделаю это сейчас. Спасибо! | Thanks, I'll start right away.
`),
  dialogue({ id: "en-ssn-b1", title: "Social Security Office (USA)", ru: "Номер соцстрахования (США)", level: "B1", icon: "🗂️", avatar: "👩‍💼", category: "official" }, `
B: Good afternoon. What brings you in today? | Добрый день. По какому вы вопросу?
U: I'd like to apply for a Social Security number. I have a work visa. | Я хотел бы получить номер соцстрахования. У меня рабочая виза. | I need a Social Security number.
B: Have you filled out form SS-5? | Вы заполнили форму SS-5?
U: Yes, here it is, along with my passport and visa. | Да, вот она, вместе с паспортом и визой. | Here's the form and my documents.
B: I also need your I-94 arrival record. | Мне также нужна ваша запись о въезде I-94.
U: I printed it from the website. Is that okay? | Я распечатал её с сайта. Подойдёт? | Here's a printout of my I-94.
B: That's fine. How long ago did you arrive? | Подойдёт. Как давно вы приехали?
U: About two weeks ago. | Около двух недель назад. | Two weeks ago.
B: Good. Your card will be mailed to you within two weeks. | Хорошо. Карточку пришлют по почте в течение двух недель.
U: Can I start working before it arrives? | Могу ли я начать работать до того, как она придёт? | Can I work without the card for now?
B: Yes, your employer can verify your eligibility in the meantime. | Да, работодатель пока может подтвердить ваше право на работу.
U: Thank you, that's a relief. | Спасибо, это облегчение. | Great, thanks.
`),
  dialogue({ id: "en-jobcentre-b2", title: "At the Jobcentre", ru: "В центре занятости (Universal Credit)", level: "B2", icon: "📋", avatar: "🧑‍💼", category: "official" }, `
B: Hello, I'm your work coach. Let's talk about your Universal Credit claim. | Здравствуйте, я ваш консультант. Давайте обсудим ваше заявление на Universal Credit.
U: Thanks. I lost my job last month and I'm actively looking for work. | Спасибо. В прошлом месяце я потерял работу и активно ищу новую. | I was made redundant and I'm job hunting.
B: What kind of work are you looking for? | Какую работу вы ищете?
U: Ideally something in logistics, as I have five years' experience. | В идеале что-то в логистике — у меня пять лет опыта. | Logistics, it's my background.
B: We'll set up a Claimant Commitment. You'll need to spend around thirty-five hours a week on job search. | Мы оформим обязательства заявителя. Вам нужно будет тратить около 35 часов в неделю на поиск работы.
U: Does that include training courses? | Курсы обучения туда входят? | Can courses count towards that?
B: Yes, relevant training can count. Are you interested in improving your English or IT skills? | Да, профильное обучение засчитывается. Хотите подтянуть английский или компьютерные навыки?
U: Yes, an English course would really help with interviews. | Да, курс английского очень помог бы на собеседованиях. | I'd love to do an English course.
B: I'll refer you. Remember to report any changes in your circumstances. | Я дам направление. Не забывайте сообщать о любых изменениях в вашей ситуации.
U: Understood. When is my first payment? | Понятно. Когда первая выплата? | When will I get paid?
B: Usually about five weeks after you applied. You can request an advance if you need it. | Обычно примерно через пять недель после подачи. Если нужно, можно запросить аванс.
U: That's good to know. Thanks for your help. | Хорошо знать. Спасибо за помощь. | Thank you.
`),
  dialogue({ id: "en-hmrc-b2", title: "Calling HMRC", ru: "Звонок в налоговую (HMRC)", level: "B2", icon: "🧾", avatar: "🎧", category: "official" }, `
B: HMRC, how can I help? | Налоговая служба, чем могу помочь?
U: Hello, I think I'm on the wrong tax code — I'm paying too much tax. | Здравствуйте, кажется, у меня неправильный налоговый код — я переплачиваю налог. | My tax code seems wrong.
B: Can I take your National Insurance number? | Назовите, пожалуйста, ваш номер соцстрахования.
U: Yes, it's QQ 12 34 56 C. | Да, QQ 12 34 56 C. | Sure, QQ123456C.
B: I can see you're on an emergency tax code. Did you start a new job recently? | Вижу, у вас временный (экстренный) налоговый код. Вы недавно сменили работу?
U: Yes, two months ago, and I didn't have a P45 from my previous employer. | Да, два месяца назад, и у меня не было формы P45 от прошлого работодателя. | Yes, I started without a P45.
B: I'll update your code now. Your employer will be notified. | Я сейчас обновлю ваш код. Работодатель получит уведомление.
U: Will I get the overpaid tax back? | Мне вернут переплаченный налог? | Will I be refunded?
B: Yes, it'll be refunded automatically through your salary within the next couple of months. | Да, его автоматически вернут через зарплату в ближайшие пару месяцев.
U: Great. Do I need to do anything else? | Отлично. Мне нужно сделать что-то ещё? | Is there anything else I should do?
B: No, but you can check your tax code anytime in your personal tax account online. | Нет, но вы можете в любое время проверить код в личном налоговом кабинете онлайн.
U: Thank you very much for sorting that out. | Большое спасибо, что разобрались. | Thanks for your help.
`),
  dialogue({ id: "en-deposit-dispute-b2", title: "Deposit Dispute with a Landlord", ru: "Спор о залоге с арендодателем", level: "B2", icon: "🔑", avatar: "🧔", category: "official" }, `
B: I'm afraid I'll have to keep part of your deposit for cleaning. | Боюсь, мне придётся удержать часть залога за уборку.
U: I'm surprised — I had the flat professionally cleaned before I left. | Я удивлён — перед выездом я заказал профессиональную уборку. | But I paid for professional cleaning.
B: The oven was still dirty, according to the check-out report. | Согласно акту выезда, духовка была грязной.
U: I have a receipt from the cleaning company and photos taken on the last day. | У меня есть чек клининговой компании и фото, сделанные в последний день. | I've got photos and a receipt.
B: Well, I'm still not satisfied. | Ну, меня это всё равно не устраивает.
U: In that case, I'd like to raise a dispute with the deposit protection scheme. | В таком случае я хочу открыть спор через систему защиты залога. | Then I'll use the deposit scheme's dispute service.
B: That will take weeks. Can't we just agree on a smaller amount? | Это займёт недели. Может, договоримся на меньшую сумму?
U: I'd be willing to consider it, but only if you can show me evidence of the damage. | Я готов рассмотреть, но только если вы покажете доказательства ущерба. | Only with evidence.
B: Fine, I'll send you the photos from the inspection. | Хорошо, пришлю фото с осмотра.
U: Thank you. Please put everything in writing so we have a record. | Спасибо. Пожалуйста, изложите всё письменно, чтобы осталась запись. | Please email me the details.
`),
  dialogue({ id: "en-citizenship-c1", title: "Citizenship Interview", ru: "Собеседование на гражданство (США)", level: "C1", icon: "🇺🇸", avatar: "👩‍⚖️", category: "official" }, `
B: Good morning. Please raise your right hand. Do you swear that everything you say today is the truth? | Доброе утро. Поднимите правую руку. Клянётесь ли вы, что всё сказанное сегодня — правда?
U: I do. | Клянусь. | Yes, I do.
B: How long have you been a permanent resident? | Как давно у вас статус постоянного жителя?
U: For just over five years — I received my green card in 2021. | Чуть больше пяти лет — грин-карту я получил в 2021 году. | Five years, since 2021.
B: Have you travelled outside the United States for more than six months at a time? | Вы выезжали из США больше чем на шесть месяцев подряд?
U: No, my longest trip abroad was about three weeks. | Нет, самая долгая поездка длилась около трёх недель. | No, never more than a few weeks.
B: Let's move on to the civics test. What is the supreme law of the land? | Перейдём к тесту по обществоведению. Каков высший закон страны?
U: The Constitution. | Конституция. | The U.S. Constitution.
B: Name one right or freedom from the First Amendment. | Назовите одно право или свободу из Первой поправки.
U: Freedom of speech. | Свобода слова. | Freedom of religion.
B: Correct. Now please read this sentence aloud. | Верно. Теперь прочитайте вслух это предложение.
U: Citizens have the right to vote. | Граждане имеют право голосовать. | Citizens can vote.
B: Congratulations, you've passed. You'll receive a notice for the oath ceremony. | Поздравляю, вы прошли. Вы получите уведомление о церемонии присяги.
U: Thank you so much — this means a great deal to me. | Огромное спасибо — это очень много для меня значит. | Thank you, I'm delighted.
`),
];
