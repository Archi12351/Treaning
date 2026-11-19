import { parseVocab } from "../vocabParse";

// English B1–C2: досуг, природа, общество, идиомы, академический язык, UK vs US.
export const EN_PART4 = [
  ...parseVocab("en-hobbies", "A2", `
to swim | плавать | I swim twice a week. | Я плаваю два раза в неделю. | 🏊
to dance | танцевать | Let's dance! | Давай потанцуем! | 💃
to sing | петь | She sings beautifully. | Она красиво поёт. | 🎤
to draw | рисовать | My son loves drawing. | Мой сын обожает рисовать.
to paint | рисовать красками | She paints landscapes. | Она пишет пейзажи. | 🎨
to cook (hobby) | готовить | I love cooking Italian food. | Обожаю готовить итальянскую еду.
to go hiking | ходить в походы | We go hiking in the mountains. | Мы ходим в походы в горы. | 🥾
to go camping | ходить в поход с палаткой | We went camping last summer. | Прошлым летом мы ходили в поход.
to go fishing | ходить на рыбалку | My dad goes fishing every Sunday. | Папа ходит на рыбалку каждое воскресенье. | 🎣
to take photos | фотографировать | I love taking photos. | Я люблю фотографировать. | 📷
to play the guitar | играть на гитаре | He plays the guitar. | Он играет на гитаре. | 🎸
to play the piano | играть на пианино | She plays the piano. | Она играет на пианино. | 🎹
board games | настольные игры | We play board games on Fridays. | По пятницам мы играем в настолки. | 🎲
video games | видеоигры | He plays video games all day. | Он весь день играет в видеоигры. | 🎮
the gym | спортзал | I go to the gym after work. | После работы я хожу в спортзал. | 🏋️
football / soccer | футбол | Do you play football? | Ты играешь в футбол? | ⚽
tennis | теннис | Let's play tennis. | Сыграем в теннис. | 🎾
the concert | концерт | We're going to a concert. | Мы идём на концерт.
the museum | музей | The museum is free. | Музей бесплатный.
the theatre | театр | We went to the theatre. | Мы ходили в театр. | 🎭
the cinema / movie theater | кинотеатр | Shall we go to the cinema? | Пойдём в кино? | 🎬
the party | вечеринка | Are you coming to the party? | Ты придёшь на вечеринку? | 🎉
#B1
the hobby | хобби | What are your hobbies? | Какие у тебя хобби?
to be into | увлекаться | I'm really into jazz. | Я очень увлекаюсь джазом.
to be keen on | быть увлечённым | She's keen on tennis. | Она увлекается теннисом.
the exhibition | выставка | A photo exhibition. | Фотовыставка.
the novel | роман | I'm reading a great novel. | Я читаю отличный роман. | 📕
the series | сериал | Have you watched this series? | Ты смотрел этот сериал?
the episode | серия | No spoilers, I'm on episode three! | Без спойлеров, я на третьей серии!
the volunteer | волонтёр | She works as a volunteer. | Она работает волонтёром.
`),

  ...parseVocab("en-weather", "A1", `
sunny | солнечный | It's sunny today. | Сегодня солнечно. | 🌞
rainy | дождливый | A rainy day. | Дождливый день. | 🌧️
cloudy | облачный | It's cloudy. | Облачно. | ☁️
windy | ветреный | It's very windy. | Очень ветрено. | 🌬️
snowy | снежный | A snowy winter. | Снежная зима. | 🌨️
foggy | туманный | It's foggy this morning. | Сегодня утром туман. | 🌫️
to rain | идти (о дожде) | It's raining. | Идёт дождь.
to snow | идти (о снеге) | It's snowing! | Идёт снег!
the weather | погода | What's the weather like? | Какая погода?
the snow | снег | The children play in the snow. | Дети играют в снегу. | ❄️
the wind | ветер | The wind is strong. | Сильный ветер.
the cloud | облако | Not a cloud in the sky. | На небе ни облачка.
the sky | небо | The sky is blue. | Небо голубое.
the degree | градус | It's twenty degrees. | Двадцать градусов. | 🌡️
cool | прохладный | It's cool in the evening. | Вечером прохладно.
#A2
the forecast | прогноз | The forecast says rain. | Прогноз обещает дождь.
the storm | буря, гроза | A storm is coming. | Надвигается буря. | ⛈️
the thunder | гром | Did you hear the thunder? | Слышал гром?
the lightning | молния | Lightning hit the tree. | Молния ударила в дерево. | ⚡
the rainbow | радуга | Look, a rainbow! | Смотри, радуга! | 🌈
the heatwave | жара (период) | There's a heatwave in Europe. | В Европе аномальная жара.
the ice | лёд | Careful, there's ice on the road. | Осторожно, на дороге лёд. | 🧊
humid | влажный | It's hot and humid. | Жарко и влажно.
the climate | климат | The climate is mild. | Климат мягкий.
the mountain | гора | We climbed a mountain. | Мы поднялись на гору. | ⛰️
the river | река | The river is very long. | Река очень длинная.
the lake | озеро | We swam in the lake. | Мы купались в озере.
the tree | дерево | A big old tree. | Большое старое дерево. | 🌳
the flower | цветок | Beautiful flowers. | Красивые цветы. | 🌸
the island | остров | A small island. | Маленький остров. | 🏝️
the coast | побережье | We drove along the coast. | Мы ехали вдоль побережья.
the countryside | сельская местность | I live in the countryside. | Я живу за городом.
#B1
the environment | окружающая среда | Protect the environment. | Защищайте окружающую среду. | 🌱
pollution | загрязнение | Air pollution is a problem. | Загрязнение воздуха — проблема.
climate change | изменение климата | Climate change is real. | Изменение климата реально.
global warming | глобальное потепление | Global warming melts the ice. | Глобальное потепление растапливает лёд.
to recycle | перерабатывать | We recycle plastic. | Мы перерабатываем пластик. | ♻️
renewable energy | возобновляемая энергия | Invest in renewable energy. | Вкладывайтесь в возобновляемую энергию.
the flood | наводнение | The flood destroyed homes. | Наводнение разрушило дома.
the drought | засуха | A long drought. | Долгая засуха.
endangered species | исчезающие виды | Pandas are an endangered species. | Панды — исчезающий вид.
sustainable | устойчивый | Sustainable development. | Устойчивое развитие.
the carbon footprint | углеродный след | Reduce your carbon footprint. | Сократите свой углеродный след.
`),

  ...parseVocab("en-animals", "A1", `
the dog | собака | My dog is friendly. | Моя собака дружелюбная. | 🐕
the cat | кошка | The cat is sleeping. | Кошка спит. | 🐈
the bird | птица | A bird is singing. | Поёт птица. | 🐦
the horse | лошадь | She rides a horse. | Она ездит на лошади. | 🐎
the cow | корова | Cows give milk. | Коровы дают молоко. | 🐄
the pig | свинья | The pig is in the mud. | Свинья в грязи. | 🐖
the sheep | овца | Wales has lots of sheep. | В Уэльсе много овец. | 🐑
the chicken (animal) | курица | The chickens lay eggs. | Куры несут яйца. | 🐔
the mouse / mice | мышь / мыши | A mouse in the kitchen! | Мышь на кухне! | 🐭
the rabbit | кролик | The rabbit eats carrots. | Кролик ест морковку. | 🐇
the lion | лев | The lion is the king of animals. | Лев — царь зверей. | 🦁
the bear | медведь | Bears sleep in winter. | Медведи спят зимой. | 🐻
the elephant | слон | Elephants are huge. | Слоны огромные. | 🐘
the monkey | обезьяна | The monkey is eating a banana. | Обезьяна ест банан. | 🐒
the snake | змея | I'm afraid of snakes. | Я боюсь змей. | 🐍
the fox | лиса | A fox in the garden. | Лиса в саду. | 🦊
the wolf | волк | Wolves live in packs. | Волки живут стаями. | 🐺
the squirrel | белка | Squirrels love nuts. | Белки любят орехи. | 🐿️
the duck | утка | Feed the ducks. | Покорми уток. | 🦆
the bee | пчела | Bees make honey. | Пчёлы делают мёд. | 🐝
the butterfly | бабочка | A colourful butterfly. | Яркая бабочка. | 🦋
the spider | паук | There's a spider in the bath! | В ванной паук! | 🕷️
the fish (animal) | рыба | Fish live in water. | Рыбы живут в воде. | 🐠
the dolphin | дельфин | Dolphins are clever. | Дельфины умные. | 🐬
the whale | кит | We saw a whale! | Мы видели кита! | 🐋
the pet | домашний питомец | Do you have a pet? | У тебя есть питомец?
to feed | кормить | Don't forget to feed the cat. | Не забудь покормить кошку.
#A2
the vet | ветеринар | Take the dog to the vet. | Отведи собаку к ветеринару.
to bark | лаять | The dog barks all night. | Собака лает всю ночь.
the zoo | зоопарк | Let's go to the zoo. | Пойдём в зоопарк.
the farm | ферма | My uncle has a farm. | У дяди ферма. | 🚜
`),

  ...parseVocab("en-jobs", "A2", `
the teacher | учитель | She's a teacher. | Она учительница. | 🧑‍🏫
the nurse | медсестра | The nurse was very kind. | Медсестра была очень доброй.
the engineer | инженер | He's an engineer. | Он инженер.
the lawyer | юрист | We need a lawyer. | Нам нужен юрист.
the police officer | полицейский | Ask a police officer. | Спроси полицейского. | 👮
the firefighter | пожарный | Firefighters are brave. | Пожарные смелые. | 🧑‍🚒
the waiter / waitress | официант / официантка | The waiter brought the menu. | Официант принёс меню.
the chef / cook | повар | The chef is French. | Повар — француз. | 🧑‍🍳
the shop assistant (job) | продавец | She's a shop assistant. | Она продавщица.
the cashier | кассир | The cashier gave me change. | Кассир дал мне сдачу.
the driver | водитель | He's a bus driver. | Он водитель автобуса.
the pilot | пилот | The pilot spoke to us. | Пилот обратился к нам. | 🧑‍✈️
the builder | строитель | The builders are noisy. | Строители шумят. | 👷
the plumber | сантехник | Call a plumber. | Вызови сантехника.
the electrician | электрик | The electrician fixed the lights. | Электрик починил свет.
the mechanic | механик | The mechanic checked my car. | Механик проверил машину.
the hairdresser | парикмахер | I'm going to the hairdresser. | Я иду к парикмахеру. | 💇
the farmer | фермер | The farmer grows wheat. | Фермер выращивает пшеницу. | 🧑‍🌾
the accountant | бухгалтер | Ask your accountant. | Спроси своего бухгалтера.
the programmer / developer | программист | She's a software developer. | Она разработчица ПО. | 🧑‍💻
the cleaner | уборщик | The cleaner comes on Mondays. | Уборщица приходит по понедельникам.
the scientist | учёный | He's a famous scientist. | Он известный учёный. | 🧑‍🔬
the journalist | журналист | The journalist asked questions. | Журналист задавал вопросы.
the translator | переводчик | I work as a translator. | Я работаю переводчиком.
the civil servant | госслужащий | He's a civil servant. | Он госслужащий.
the carer | сиделка | Carers are in demand. | Сиделки востребованы.
`),

  ...parseVocab("en-society", "B2", `
the government | правительство | The government announced new rules. | Правительство объявило новые правила.
the election | выборы | The election is in May. | Выборы в мае. | 🗳️
to vote | голосовать | Did you vote? | Ты голосовал?
the party (politics) | партия | Which party do you support? | Какую партию ты поддерживаешь?
Parliament | парламент | Parliament passed the law. | Парламент принял закон.
the Prime Minister | премьер-министр | The Prime Minister gave a speech. | Премьер-министр выступил с речью.
the President | президент | The President visited Europe. | Президент посетил Европу.
the law | закон | It's against the law. | Это противозаконно.
the rights | права | Know your rights. | Знай свои права.
equality | равенство | Gender equality matters. | Гендерное равенство важно.
discrimination | дискриминация | Discrimination is illegal. | Дискриминация незаконна.
poverty | бедность | Millions live in poverty. | Миллионы живут в бедности.
unemployment | безработица | Unemployment is falling. | Безработица снижается.
immigration | иммиграция | Immigration is a hot topic. | Иммиграция — острая тема.
the protest | протест | Thousands joined the protest. | Тысячи присоединились к протесту.
the crime | преступление | Crime is rising. | Преступность растёт.
the court | суд | The case went to court. | Дело дошло до суда.
the judge | судья | The judge was fair. | Судья был справедлив.
guilty | виновный | He was found guilty. | Его признали виновным.
innocent | невиновный | She's innocent. | Она невиновна.
the prison | тюрьма | He went to prison. | Он попал в тюрьму.
the welfare state | социальное государство | The welfare state supports people. | Социальное государство поддерживает людей.
the tax system | налоговая система | The tax system is complex. | Налоговая система сложная.
the media | СМИ | The media reported it. | СМИ сообщили об этом.
fake news | фейки | Fake news spreads fast. | Фейки быстро распространяются.
freedom of speech | свобода слова | Freedom of speech is a basic right. | Свобода слова — базовое право.
#C1
the policy | политика (курс) | A new housing policy. | Новая жилищная политика.
the bill (law) | законопроект | The bill was rejected. | Законопроект отклонили.
the referendum | референдум | Brexit was decided by a referendum. | Брексит решили на референдуме.
the opposition | оппозиция | The opposition criticised the plan. | Оппозиция раскритиковала план.
the coalition | коалиция | A coalition government. | Коалиционное правительство.
the inequality | неравенство | Income inequality is growing. | Неравенство доходов растёт.
polarisation | поляризация | Political polarisation. | Политическая поляризация.
accountability | подотчётность | We need more accountability. | Нужно больше подотчётности.
the stakeholder | заинтересованная сторона | All stakeholders were consulted. | Со всеми заинтересованными сторонами посоветовались.
`),

  ...parseVocab("en-feelings", "B1", `
the love | любовь | Love is all you need. | Всё, что нужно, — это любовь. | ❤️
the fear | страх | Fear of flying. | Страх полётов.
the joy | радость | She cried with joy. | Она плакала от радости.
the anger | гнев | He couldn't hide his anger. | Он не мог скрыть гнев.
the hope | надежда | There's still hope. | Ещё есть надежда.
the trust | доверие | Trust is important. | Доверие важно.
jealous | ревнивый, завистливый | He's jealous of his brother. | Он завидует брату.
lonely | одинокий | I feel lonely. | Мне одиноко.
grateful | благодарный | I'm very grateful. | Я очень благодарен.
relieved | испытывающий облегчение | I was relieved to hear that. | Я с облегчением это услышал.
upset | расстроенный | She's upset about the news. | Она расстроена новостью.
to miss someone | скучать | I miss you. | Я скучаю по тебе.
to fall in love | влюбиться | They fell in love in Paris. | Они влюбились друг в друга в Париже. | 😍
to break up | расстаться | They broke up last month. | Они расстались в прошлом месяце. | 💔
the relationship | отношения | They have a good relationship. | У них хорошие отношения.
the argument | ссора, спор | We had an argument. | Мы поссорились.
to get along | ладить | We get along well. | Мы хорошо ладим.
#B2
overwhelmed | перегруженный (эмоционально) | I feel overwhelmed. | Я чувствую, что не справляюсь.
frustrated | раздосадованный | I'm frustrated with this. | Меня это бесит.
thrilled | в восторге | I'm thrilled with the result. | Я в восторге от результата.
furious | в ярости | He was furious. | Он был в ярости.
heartbroken | с разбитым сердцем | She was heartbroken. | У неё было разбито сердце.
nostalgic | ностальгирующий | I feel nostalgic. | Меня тянет на ностальгию.
`),

  ...parseVocab("en-idioms", "B2", `
a piece of cake | проще простого | The exam was a piece of cake. | Экзамен был проще простого. | 🍰
break a leg! | ни пуха ни пера! | Break a leg tonight! | Ни пуха ни пера сегодня!
it's raining cats and dogs | льёт как из ведра | Take an umbrella, it's raining cats and dogs. | Возьми зонт, льёт как из ведра.
under the weather | приболевший | I'm feeling a bit under the weather. | Мне немного нездоровится.
once in a blue moon | очень редко | I see him once in a blue moon. | Я вижу его раз в сто лет.
to cost an arm and a leg | стоить целое состояние | That car cost an arm and a leg. | Эта машина стоила целое состояние.
to hit the nail on the head | попасть в точку | You hit the nail on the head. | Ты попал в точку.
to let the cat out of the bag | проболтаться | Who let the cat out of the bag? | Кто проболтался?
to call it a day | закончить на сегодня | Let's call it a day. | На сегодня хватит.
to be on the same page | быть на одной волне | Are we on the same page? | Мы понимаем друг друга?
to beat around the bush | ходить вокруг да около | Stop beating around the bush. | Хватит ходить вокруг да около.
to get cold feet | струсить | He got cold feet before the wedding. | Он струсил перед свадьбой.
to pull someone's leg | разыгрывать | I'm just pulling your leg. | Я просто шучу.
the ball is in your court | теперь твой ход | I've made an offer — the ball is in your court. | Я сделал предложение — теперь решать тебе.
to bite off more than you can chew | взять на себя слишком много | I bit off more than I could chew. | Я взвалил на себя слишком много.
to kill two birds with one stone | убить двух зайцев | That way we kill two birds with one stone. | Так мы убьём двух зайцев.
to see eye to eye | сходиться во мнениях | We don't see eye to eye. | Мы не сходимся во мнениях.
the last straw | последняя капля | That was the last straw. | Это была последняя капля.
to sit on the fence | занимать выжидательную позицию | Stop sitting on the fence and decide. | Хватит колебаться, решай.
to spill the beans | выдать секрет | Come on, spill the beans! | Ну давай, выкладывай!
better late than never | лучше поздно, чем никогда | You came! Better late than never. | Ты пришёл! Лучше поздно, чем никогда.
no pain, no gain | без труда не выловишь и рыбку из пруда | Training is hard, but no pain, no gain. | Тренироваться тяжело, но без труда ничего не бывает.
to go the extra mile | сделать больше, чем требуется | She always goes the extra mile. | Она всегда делает больше, чем нужно.
to be over the moon | быть на седьмом небе | I'm over the moon! | Я на седьмом небе! | 🌙
to have a lot on your plate | иметь много дел | I have a lot on my plate right now. | У меня сейчас куча дел.
to get the hang of | освоиться, наловчиться | You'll get the hang of it. | Ты наловчишься.
#C1
to cut corners | халтурить, экономить на качестве | Don't cut corners on safety. | Не экономьте на безопасности.
to jump on the bandwagon | присоединиться к модному течению | Everyone jumped on the bandwagon. | Все примкнули к тренду.
a blessing in disguise | не было бы счастья, да несчастье помогло | Losing that job was a blessing in disguise. | Потеря работы оказалась к лучшему.
to burn the midnight oil | работать допоздна | I burned the midnight oil before the exam. | Я сидел допоздна перед экзаменом.
to play devil's advocate | играть роль адвоката дьявола | Let me play devil's advocate. | Позволь сыграть адвоката дьявола.
to be in hot water | быть в беде | He's in hot water with his boss. | У него неприятности с начальником.
to keep someone in the loop | держать в курсе | Keep me in the loop. | Держи меня в курсе.
the elephant in the room | очевидная проблема, о которой молчат | Let's address the elephant in the room. | Давайте обсудим то, о чём все молчат.
`),

  ...parseVocab("en-academic", "C1", `
#B2
to argue | утверждать, спорить | The author argues that ... | Автор утверждает, что ...
the evidence | доказательства | There is no evidence. | Доказательств нет.
the research | исследование | Research shows that ... | Исследования показывают, что ...
the conclusion | вывод | What's your conclusion? | Какой твой вывод?
the cause | причина | The main cause of the problem. | Главная причина проблемы.
the effect | следствие, эффект | The effect was huge. | Эффект был огромным.
the advantage | преимущество | One advantage is the price. | Одно из преимуществ — цена.
the disadvantage | недостаток | The main disadvantage is noise. | Главный недостаток — шум.
in addition | кроме того | In addition, it's cheap. | Кроме того, это дёшево.
on the other hand | с другой стороны | On the other hand, it's risky. | С другой стороны, это рискованно.
in conclusion | в заключение | In conclusion, ... | В заключение, ...
for instance | например | For instance, Japan. | Например, Япония.
#C1
the hypothesis | гипотеза | The hypothesis was confirmed. | Гипотеза подтвердилась.
the assumption | предположение | That's a false assumption. | Это ложное предположение.
to analyse | анализировать | We analysed the data. | Мы проанализировали данные.
to assess | оценивать | Assess the risks. | Оцените риски.
to emphasise | подчёркивать | I'd like to emphasise this point. | Хочу подчеркнуть этот момент.
to illustrate | иллюстрировать | This example illustrates the problem. | Этот пример иллюстрирует проблему.
to justify | обосновывать | Can you justify your answer? | Можешь обосновать ответ?
to outline | обрисовывать | Let me outline the plan. | Позвольте обрисовать план.
significant | значимый | A significant increase. | Значительный рост.
relevant | уместный, относящийся к делу | That's not relevant. | Это к делу не относится.
crucial | решающий | It's crucial to act now. | Крайне важно действовать сейчас.
controversial | спорный | A controversial topic. | Спорная тема.
the approach | подход | A new approach. | Новый подход.
the framework | рамки, структура | A legal framework. | Правовая база.
the issue | вопрос, проблема | A key issue. | Ключевой вопрос.
the trend | тенденция | A growing trend. | Растущая тенденция.
the impact | влияние | The impact on society. | Влияние на общество.
the outcome | результат | The outcome was positive. | Итог был положительным.
whereby | посредством чего | A system whereby users pay monthly. | Система, при которой пользователи платят ежемесячно.
thereby | тем самым | He resigned, thereby avoiding scandal. | Он ушёл в отставку, тем самым избежав скандала.
notwithstanding | несмотря на | Notwithstanding the cost, it's worth it. | Несмотря на стоимость, оно того стоит.
#C2
to substantiate | подтверждать, обосновывать | Can you substantiate that claim? | Можете подтвердить это утверждение?
to undermine | подрывать | It undermines trust. | Это подрывает доверие.
to exacerbate | усугублять | It exacerbated the crisis. | Это усугубило кризис.
to mitigate | смягчать | Measures to mitigate risk. | Меры по снижению риска.
ubiquitous | повсеместный | Smartphones are ubiquitous. | Смартфоны повсюду.
unprecedented | беспрецедентный | An unprecedented event. | Беспрецедентное событие.
nuanced | тонкий, с нюансами | A nuanced argument. | Тонкий аргумент.
paradigm | парадигма | A paradigm shift. | Смена парадигмы.
inherent | присущий | Inherent risks. | Присущие риски.
tentative | предварительный | A tentative conclusion. | Предварительный вывод.
ambiguous | неоднозначный | The wording is ambiguous. | Формулировка неоднозначна.
meticulous | скрупулёзный | Meticulous research. | Скрупулёзное исследование.
pragmatic | прагматичный | A pragmatic solution. | Прагматичное решение.
detrimental | вредный | Detrimental to health. | Вредно для здоровья.
`),

  ...parseVocab("en-uk-us", "B1", `
flat (UK) — apartment (US) | квартира | They live in a flat in London. | Они живут в квартире в Лондоне.
lorry (UK) — truck (US) | грузовик | A big lorry blocked the road. | Большой грузовик перекрыл дорогу. | 🚚
crisps (UK) — chips (US) | чипсы | A packet of crisps. | Пачка чипсов.
chips (UK) — fries (US) | картофель фри | Fish and chips. | Рыба с картошкой фри. | 🍟
autumn (UK) — fall (US) | осень | Autumn leaves. | Осенние листья.
mobile (UK) — cell phone (US) | мобильный телефон | My mobile is dead. | У меня сел мобильный.
holiday (UK) — vacation (US) | отпуск | We're on holiday. | Мы в отпуске.
queue (UK) — line (US) | очередь | Join the queue. | Встань в очередь.
lift (UK) — elevator (US) | лифт | Take the lift. | Поезжай на лифте.
rubbish (UK) — garbage (US) | мусор | Take out the rubbish. | Вынеси мусор.
postcode (UK) — zip code (US) | почтовый индекс | What's your postcode? | Какой у вас индекс?
university (UK) — college (US) | университет | She's at university. | Она учится в университете.
mate (UK) — buddy (US) | приятель | Cheers, mate! | Спасибо, дружище!
brilliant (UK) — awesome (US) | отлично | That's brilliant! | Это великолепно!
colour (UK) — color (US) | цвет (орфография) | What colour is it? | Какого это цвета?
cinema (UK) — movie theater (US) | кинотеатр | Let's go to the cinema. | Пойдём в кино.
football (UK) — soccer (US) | футбол | Football is huge in England. | Футбол в Англии — это огромно.
trainers (UK) — sneakers (US) | кроссовки | New trainers. | Новые кроссовки.
petrol (UK) — gas (US) | бензин | Petrol prices are up. | Цены на бензин выросли.
`),
];
