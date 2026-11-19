import { parseVocab } from "../vocabParse";

// English: глаголы, фразовые глаголы, прилагательные, наречия, связки.
export const EN_PART2 = [
  ...parseVocab("en-verbs", "A1", `
to be | быть | I am a student. | Я студент.
to have | иметь | I have a car. | У меня есть машина.
to do | делать | What do you do? | Чем ты занимаешься?
to make | делать, изготавливать | I'll make some tea. | Я сделаю чай.
to go | идти, ехать | We go to school by bus. | Мы ездим в школу на автобусе.
to come | приходить | Come here! | Иди сюда!
to see | видеть | I can see the sea. | Я вижу море.
to look | смотреть | Look at this! | Посмотри на это!
to watch | смотреть (следить) | We watch TV in the evening. | Вечером мы смотрим телевизор. | 📺
to listen | слушать | Listen to me! | Послушай меня! | 🎧
to hear | слышать | Can you hear me? | Ты меня слышишь?
to speak | говорить (на языке) | Do you speak English? | Ты говоришь по-английски?
to say | сказать | What did you say? | Что ты сказал?
to tell | рассказать, сказать кому-то | Tell me about your trip. | Расскажи мне о поездке.
to talk | разговаривать | We talked for hours. | Мы разговаривали часами.
to ask | спрашивать, просить | Can I ask a question? | Можно задать вопрос?
to answer | отвечать | Please answer the question. | Пожалуйста, ответьте на вопрос.
to know | знать | I don't know. | Я не знаю.
to think | думать | I think you're right. | Думаю, ты прав.
to want | хотеть | I want a coffee. | Я хочу кофе.
to need | нуждаться | I need help. | Мне нужна помощь.
to like | нравиться | I like music. | Мне нравится музыка.
to love | любить | I love you. | Я тебя люблю. | ❤️
to work | работать | I work in an office. | Я работаю в офисе.
to study | учиться, изучать | She studies medicine. | Она изучает медицину. | 📚
to learn | учить | I'm learning English. | Я учу английский.
to write | писать | Write your name here. | Напишите здесь своё имя. | ✍️
to read (A1) | читать | I read every evening. | Я читаю каждый вечер.
to eat | есть | Let's eat! | Давай есть!
to drink | пить | What would you like to drink? | Что будете пить?
to sleep | спать | I sleep eight hours. | Я сплю восемь часов. | 😴
to buy (A1) | покупать | I buy bread every day. | Я покупаю хлеб каждый день.
to give | давать | Give me your hand. | Дай мне руку.
to take | брать | Take an umbrella. | Возьми зонт.
to bring | приносить | Bring your friends! | Приводи друзей!
to open | открывать | Open the door. | Открой дверь.
to close | закрывать | Close your eyes. | Закрой глаза.
to start | начинать | The film starts at eight. | Фильм начинается в восемь.
to finish | заканчивать | I finish work at five. | Я заканчиваю работу в пять.
to wait | ждать | Wait for me! | Подожди меня!
to help | помогать | Can you help me? | Можешь мне помочь?
to play | играть | Kids play in the park. | Дети играют в парке. | ⚽
to run | бежать | I run every morning. | Я бегаю каждое утро. | 🏃
to walk | идти пешком | I walk to work. | Я хожу на работу пешком. | 🚶
to sit | сидеть | Sit down, please. | Садитесь, пожалуйста.
to stand | стоять | Stand up! | Встаньте!
to live (A1) | жить | Where do you live? | Где ты живёшь?
to call | звонить; называть | I'll call you tomorrow. | Я позвоню тебе завтра. | 📞
to pay | платить | I'll pay. | Я заплачу.
#A2
to forget | забывать | Don't forget your keys! | Не забудь ключи!
to remember | помнить | I remember that day. | Я помню тот день.
to explain | объяснять | Can you explain this? | Можешь это объяснить?
to understand | понимать | I don't understand. | Я не понимаю.
to try | пытаться, пробовать | Try again! | Попробуй ещё раз!
to use | использовать | Can I use your phone? | Можно воспользоваться твоим телефоном?
to send | отправлять | Send me a message. | Пришли мне сообщение.
to meet | встречать, знакомиться | Nice to meet you. | Приятно познакомиться.
to lose | терять, проигрывать | I lost my wallet. | Я потерял кошелёк.
to win | выигрывать | Our team won! | Наша команда выиграла! | 🏆
to find | находить | I can't find my phone. | Не могу найти телефон.
to hope | надеяться | I hope you're well. | Надеюсь, у тебя всё хорошо.
to change | менять | I want to change my ticket. | Я хочу поменять билет.
to choose | выбирать | Choose one. | Выбери одно.
to decide | решать | Have you decided? | Ты решил?
to happen | случаться | What happened? | Что случилось?
to agree | соглашаться | I agree with you. | Я с тобой согласен.
to borrow | брать взаймы | Can I borrow your pen? | Можно одолжить твою ручку?
to lend | давать взаймы | Can you lend me ten pounds? | Можешь одолжить мне десять фунтов?
to spend | тратить; проводить | I spent too much money. | Я потратил слишком много денег.
to save | копить; спасать | I'm saving for a car. | Я коплю на машину.
to earn | зарабатывать | He earns a lot. | Он много зарабатывает.
to rent | снимать, арендовать | We rent a flat. | Мы снимаем квартиру.
to travel | путешествовать | I love to travel. | Обожаю путешествовать. | ✈️
to visit | навещать, посещать | Visit us soon! | Приезжай к нам скорее!
to stay | оставаться, останавливаться | We stayed in a hotel. | Мы остановились в отеле.
to leave | уходить, уезжать | The train leaves at six. | Поезд отходит в шесть.
to arrive | прибывать | We arrived late. | Мы прибыли поздно.
to carry | нести | Can you carry this bag? | Можешь понести эту сумку?
to fall | падать | Be careful, don't fall! | Осторожно, не упади!
to break | ломать | I broke my phone. | Я разбил телефон.
to fix | чинить | Can you fix my bike? | Можешь починить велосипед? | 🔧
to celebrate | праздновать | Let's celebrate! | Давай отпразднуем! | 🥳
#B1
to suggest | предлагать | I suggest we leave now. | Предлагаю уйти сейчас.
to recommend | рекомендовать | I recommend this book. | Рекомендую эту книгу.
to expect | ожидать | I didn't expect that. | Я этого не ожидал.
to compare | сравнивать | Compare the prices. | Сравни цены.
to improve | улучшать | I want to improve my English. | Я хочу улучшить свой английский.
to avoid | избегать | Avoid sugar. | Избегайте сахара.
to allow | разрешать | Smoking is not allowed. | Курить запрещено. | 🚭
to prevent | предотвращать | Wash your hands to prevent infection. | Мойте руки, чтобы предотвратить инфекцию.
to require | требовать | The job requires experience. | Работа требует опыта.
to manage | справляться; управлять | I managed to finish on time. | Мне удалось закончить вовремя.
to mention | упоминать | He didn't mention it. | Он об этом не упомянул.
to refuse | отказываться | She refused to help. | Она отказалась помочь.
to admit | признавать | He admitted his mistake. | Он признал свою ошибку.
to deny | отрицать | He denied everything. | Он всё отрицал.
to complain | жаловаться | Stop complaining! | Хватит жаловаться!
to apologise | извиняться | I apologise for the delay. | Приношу извинения за задержку.
to convince | убеждать | You've convinced me. | Ты меня убедил.
to deserve | заслуживать | You deserve a break. | Ты заслуживаешь отдыха.
to achieve | достигать | She achieved her goal. | Она достигла своей цели.
to develop | развивать | The company develops software. | Компания разрабатывает ПО.
`),

  ...parseVocab("en-phrasal", "A2", `
to get up | вставать | I get up at seven. | Я встаю в семь.
to wake up | просыпаться | I woke up late. | Я проснулся поздно.
to turn on | включать | Turn on the light. | Включи свет. | 💡
to turn off | выключать | Turn off your phone. | Выключи телефон.
to look for | искать | I'm looking for my keys. | Я ищу ключи. | 🔍
to look after | присматривать | Can you look after my cat? | Можешь присмотреть за моей кошкой?
to find out | выяснять | I need to find out the truth. | Мне нужно выяснить правду.
to give up | бросать, сдаваться | Don't give up! | Не сдавайся!
to go out | выходить (развлечься) | Let's go out tonight. | Давай сходим куда-нибудь сегодня.
to come back | возвращаться | When will you come back? | Когда ты вернёшься?
to sit down | садиться | Please sit down. | Пожалуйста, садитесь.
to fill in | заполнять | Fill in this form, please. | Заполните, пожалуйста, эту анкету. | 📝
to pick up | забирать; поднимать | I'll pick you up at six. | Я заберу тебя в шесть.
to call back | перезванивать | I'll call you back. | Я тебе перезвоню.
to hurry up | торопиться | Hurry up! | Поторопись!
to check in | регистрироваться (отель, рейс) | We checked in at the hotel. | Мы заселились в отель.
to check out | выезжать (из отеля) | We check out at noon. | Мы выезжаем в полдень.
to get on | садиться (в транспорт) | Get on the bus. | Садись в автобус.
to get off | выходить (из транспорта) | Get off at the next stop. | Выходи на следующей остановке.
to slow down | замедлиться | Slow down, please! | Помедленнее, пожалуйста!
#B1
to put off | откладывать | Don't put it off until tomorrow. | Не откладывай на завтра.
to carry on | продолжать | Carry on, please. | Продолжайте, пожалуйста.
to run out of | заканчиваться (о запасе) | We've run out of milk. | У нас закончилось молоко.
to set up | основывать, настраивать | She set up her own business. | Она открыла собственный бизнес.
to break down | ломаться | My car broke down. | Моя машина сломалась.
to get on with | ладить с | I get on well with my boss. | Я хорошо лажу с начальником.
to look forward to | с нетерпением ждать | I'm looking forward to the holidays. | Жду не дождусь каникул.
to turn down | отклонять; убавлять | She turned down the offer. | Она отклонила предложение.
to take up | начать заниматься | I've taken up yoga. | Я начал заниматься йогой.
to come up with | придумать | He came up with a great idea. | Он придумал отличную идею.
to deal with | справляться с | I'll deal with it. | Я с этим разберусь.
to figure out | понять, разобраться | I can't figure it out. | Не могу разобраться.
to point out | указывать | She pointed out a mistake. | Она указала на ошибку.
to sort out | улаживать | We need to sort this out. | Нам нужно это уладить.
to work out | тренироваться; получаться | It all worked out in the end. | В итоге всё получилось.
to show up | появляться | He didn't show up. | Он не появился.
to get over | оправиться | She got over the flu. | Она оправилась от гриппа.
to drop off | подвозить, высаживать | Can you drop me off at the station? | Можешь высадить меня у вокзала?
to hand in | сдавать (работу) | Hand in your homework. | Сдайте домашнюю работу.
to take off (plane) | взлетать | The plane took off on time. | Самолёт взлетел вовремя. | 🛫
#B2
to bring up | воспитывать; поднимать (тему) | She brought up three children. | Она вырастила троих детей.
to call off | отменять | The match was called off. | Матч отменили.
to cut down on | сокращать | I'm cutting down on sugar. | Я сокращаю сахар.
to fall out with | поссориться | I fell out with my sister. | Я поссорился с сестрой.
to get away with | сойти с рук | He got away with it. | Ему это сошло с рук.
to look into | изучать, расследовать | We'll look into the problem. | Мы изучим проблему.
to make up | выдумывать; мириться | They made up after the fight. | Они помирились после ссоры.
to put up with | терпеть | I can't put up with the noise. | Я не могу терпеть этот шум.
to rule out | исключать | We can't rule it out. | Мы не можем это исключить.
to stand out | выделяться | Her work stands out. | Её работа выделяется.
to take over | брать на себя, поглощать | The company was taken over. | Компанию поглотили.
to wear out | изнашивать; изматывать | I'm worn out. | Я вымотан.
`),

  ...parseVocab("en-adjectives", "A1", `
big | большой | A big house. | Большой дом.
small | маленький | A small car. | Маленькая машина.
new | новый | My new phone. | Мой новый телефон.
good | хороший | Good idea! | Хорошая идея!
bad | плохой | Bad weather. | Плохая погода.
beautiful | красивый | What a beautiful day! | Какой прекрасный день!
happy | счастливый | I'm so happy! | Я так счастлив! | 😊
sad | грустный | Why are you sad? | Почему ты грустишь? | 😢
easy | лёгкий | The test was easy. | Тест был лёгким.
difficult | трудный | English isn't difficult. | Английский не трудный.
long | длинный | A long road. | Длинная дорога.
fast | быстрый | A fast car. | Быстрая машина.
slow | медленный | The internet is slow. | Интернет медленный.
hot | горячий, жаркий | It's hot today. | Сегодня жарко. | 🥵
cheap (A1) | дешёвый | Cheap tickets. | Дешёвые билеты.
nice | милый, приятный | She's very nice. | Она очень милая.
friendly | дружелюбный | The people here are friendly. | Люди здесь дружелюбные.
funny | смешной | That's so funny! | Это так смешно! | 😂
busy | занятой | I'm busy today. | Я сегодня занят.
free | свободный; бесплатный | Entry is free. | Вход бесплатный.
full | полный | The bus is full. | Автобус полон.
empty | пустой | The fridge is empty. | Холодильник пуст.
clean | чистый | Clean hands. | Чистые руки.
dirty | грязный | Your shoes are dirty. | У тебя грязная обувь.
right | правильный | That's right! | Правильно! | ✅
wrong | неправильный | Wrong answer. | Неправильный ответ. | ❌
#A2
important | важный | It's very important. | Это очень важно.
interesting | интересный | An interesting book. | Интересная книга.
boring (A2) | скучный | The film was boring. | Фильм был скучным.
dangerous | опасный | It's dangerous to swim here. | Здесь опасно купаться. | ⚠️
safe | безопасный | Is it safe? | Это безопасно?
quiet | тихий | A quiet street. | Тихая улица.
loud | громкий | The music is too loud. | Музыка слишком громкая.
strong | сильный | Strong coffee. | Крепкий кофе.
weak | слабый | I feel weak. | Я чувствую слабость.
rich | богатый | A rich man. | Богатый человек.
poor | бедный | A poor country. | Бедная страна.
polite | вежливый | Be polite! | Будь вежлив!
rude | грубый | Don't be rude! | Не груби!
lazy | ленивый | I'm lazy today. | Сегодня я ленюсь. | 🦥
clever / smart | умный | She's very clever. | Она очень умная.
nervous | нервный | I'm nervous about the exam. | Я нервничаю из-за экзамена.
angry | злой | Why are you angry? | Почему ты злишься? | 😠
surprised | удивлённый | I was surprised. | Я был удивлён.
afraid | испуганный | I'm afraid of dogs. | Я боюсь собак.
proud | гордый | I'm proud of you. | Я горжусь тобой.
famous | знаменитый | A famous actor. | Знаменитый актёр. | 🌟
different | разный, другой | We're very different. | Мы очень разные.
the same | одинаковый | We have the same car. | У нас одинаковые машины.
possible | возможный | Is it possible? | Это возможно?
#B1
reliable | надёжный | A reliable friend. | Надёжный друг.
honest | честный | Be honest with me. | Будь со мной честен.
patient | терпеливый | Be patient. | Будь терпелив.
generous | щедрый | He's very generous. | Он очень щедрый.
shy | застенчивый | She's a bit shy. | Она немного застенчивая.
confident | уверенный | He's very confident. | Он очень уверен в себе.
ambitious | амбициозный | She's ambitious. | Она амбициозна.
selfish | эгоистичный | Don't be selfish. | Не будь эгоистом.
stressful | напряжённый | A stressful job. | Нервная работа.
exhausted | измотанный | I'm exhausted. | Я выбился из сил.
disappointed | разочарованный | I'm disappointed. | Я разочарован.
embarrassed | смущённый | I felt embarrassed. | Мне было неловко.
excited | взволнованный (радостно) | I'm so excited! | Я в предвкушении!
worried | обеспокоенный | I'm worried about him. | Я за него волнуюсь.
annoyed | раздражённый | I'm annoyed with you. | Я на тебя раздражён.
amazing | потрясающий | That's amazing! | Это потрясающе!
awful | ужасный | The weather is awful. | Погода ужасная.
convenient | удобный | Is Monday convenient? | Понедельник удобен?
available | доступный, свободный | Are you available tomorrow? | Ты свободен завтра?
necessary | необходимый | Is it necessary? | Это необходимо?
#B2
reluctant | неохотный | He was reluctant to help. | Он неохотно помогал.
straightforward | простой, прямолинейный | The process is straightforward. | Процесс простой.
thorough | тщательный | A thorough check. | Тщательная проверка.
outstanding | выдающийся | An outstanding result. | Выдающийся результат.
considerable | значительный | A considerable amount. | Значительная сумма.
obvious | очевидный | It's obvious. | Это очевидно.
reasonable | разумный | A reasonable price. | Разумная цена.
`),

  ...parseVocab("en-adverbs", "A2", `
very | очень | Very good! | Очень хорошо!
really | действительно | I really like it. | Мне это действительно нравится.
quite | довольно | It's quite cold. | Довольно холодно.
too | слишком; тоже | It's too expensive. | Это слишком дорого.
enough | достаточно | Is it big enough? | Достаточно ли это большое?
almost | почти | I'm almost ready. | Я почти готов.
only | только | Only five minutes. | Только пять минут.
also | также | I also speak French. | Я также говорю по-французски.
already | уже | I've already eaten. | Я уже поел.
still | всё ещё | I'm still waiting. | Я всё ещё жду.
yet | ещё (в отриц.); уже (в вопр.) | Have you finished yet? | Ты уже закончил?
just | только что; просто | I've just arrived. | Я только что приехал.
again | снова | Try again. | Попробуй снова.
together | вместе | Let's go together. | Пойдём вместе.
alone | один | I live alone. | Я живу один.
here | здесь | Come here. | Иди сюда.
there | там | Put it there. | Положи туда.
everywhere | везде | I looked everywhere. | Я искал везде.
somewhere | где-то | It's somewhere here. | Это где-то здесь.
abroad | за границей | She works abroad. | Она работает за границей.
upstairs | наверху | The bathroom is upstairs. | Ванная наверху.
downstairs | внизу | Breakfast is downstairs. | Завтрак внизу.
unfortunately | к сожалению | Unfortunately, I can't come. | К сожалению, я не смогу прийти.
of course | конечно | Of course you can! | Конечно, можно!
probably | вероятно | It'll probably rain. | Вероятно, будет дождь.
maybe / perhaps | может быть | Maybe tomorrow. | Может, завтра.
suddenly | вдруг | Suddenly it started to rain. | Вдруг начался дождь.
finally | наконец | Finally, the weekend! | Наконец-то выходные!
immediately | немедленно | Call him immediately. | Позвони ему немедленно.
#B1
actually | на самом деле | Actually, I'm from Leeds. | Вообще-то я из Лидса.
by the way | кстати | By the way, I saw Tom. | Кстати, я видел Тома.
anyway | в любом случае | Anyway, let's go. | В любом случае, пошли.
hopefully | надеюсь | Hopefully it'll be sunny. | Надеюсь, будет солнечно.
apparently | по-видимому | Apparently, he's left. | Похоже, он ушёл.
eventually | в конце концов | Eventually, he agreed. | В конце концов он согласился.
especially | особенно | I love fruit, especially apples. | Я люблю фрукты, особенно яблоки.
completely | полностью | I completely forgot. | Я совершенно забыл.
hardly | едва | I can hardly hear you. | Я тебя едва слышу.
nearly | почти | It's nearly midnight. | Почти полночь.
on purpose | нарочно | He did it on purpose. | Он сделал это нарочно.
by accident | случайно | I deleted it by accident. | Я удалил это случайно.
#B2
nevertheless | тем не менее | It was hard; nevertheless, we finished. | Было трудно; тем не менее мы закончили.
whereas | тогда как | He's tall, whereas his brother is short. | Он высокий, тогда как брат низкий.
therefore | поэтому | I think, therefore I am. | Я мыслю, следовательно, существую.
moreover | более того | Moreover, it's cheap. | Более того, это дёшево.
furthermore | кроме того | Furthermore, the plan is risky. | Кроме того, план рискованный.
otherwise | иначе | Hurry, otherwise we'll be late. | Поторопись, иначе опоздаем.
meanwhile | тем временем | Meanwhile, the kids were sleeping. | Тем временем дети спали.
consequently | следовательно | He didn't study; consequently, he failed. | Он не учился, и поэтому провалился.
despite | несмотря на | Despite the rain, we went out. | Несмотря на дождь, мы вышли.
although | хотя | Although it was late, he called. | Хотя было поздно, он позвонил.
unless | если не | I'll come unless it rains. | Я приду, если не будет дождя.
in spite of | вопреки | In spite of everything, we're happy. | Несмотря ни на что, мы счастливы.
as long as | пока, при условии что | You can stay as long as you're quiet. | Можешь остаться, если будешь тихо себя вести.
`),
];
