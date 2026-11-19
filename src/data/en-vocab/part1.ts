import { parseVocab } from "../vocabParse";

// English A1–A2: базовая лексика.
export const EN_PART1 = [
  ...parseVocab("en-greetings", "A1", `
good morning | доброе утро | Good morning! Did you sleep well? | Доброе утро! Хорошо спал? | 🌅
good afternoon | добрый день | Good afternoon, how can I help you? | Добрый день, чем могу помочь?
good evening | добрый вечер | Good evening, ladies and gentlemen. | Добрый вечер, дамы и господа.
good night | спокойной ночи | Good night, sweet dreams! | Спокойной ночи, сладких снов! | 🌙
see you later | увидимся позже | I have to go, see you later! | Мне пора, увидимся позже!
how are you? | как дела? | Hi Tom, how are you? | Привет, Том, как дела?
I'm fine, thanks | хорошо, спасибо | I'm fine, thanks. And you? | Хорошо, спасибо. А ты?
you're welcome | пожалуйста (в ответ на спасибо) | Thanks for your help! — You're welcome. | Спасибо за помощь! — Пожалуйста.
welcome | добро пожаловать | Welcome to London! | Добро пожаловать в Лондон!
Mr / Mrs / Ms | господин / госпожа | Good morning, Mrs Smith. | Доброе утро, миссис Смит.
to introduce | представлять | Let me introduce my colleague. | Позвольте представить моего коллегу.
the country | страна | Which country are you from? | Из какой ты страны? | 🌍
the city | город | London is a big city. | Лондон — большой город. | 🏙️
to live | жить | I live in Manchester. | Я живу в Манчестере.
the address | адрес | What's your address? | Какой у тебя адрес?
the phone number | номер телефона | Can I have your phone number? | Можно твой номер телефона? | 📱
the birthday | день рождения | When is your birthday? | Когда у тебя день рождения? | 🎂
I don't understand | я не понимаю | Sorry, I don't understand. | Извините, я не понимаю.
could you repeat that? | не могли бы вы повторить? | Sorry, could you repeat that, please? | Извините, не могли бы вы повторить?
to spell | произносить по буквам | How do you spell your name? | Как пишется ваше имя?
congratulations! | поздравляю! | Congratulations on your new job! | Поздравляю с новой работой! | 🎉
good luck! | удачи! | Good luck with your exam! | Удачи на экзамене! | 🍀
cheers! | будем здоровы!; спасибо (брит.) | Cheers, mate! | Спасибо, дружище! | 🥂
have a nice day! | хорошего дня! | Thank you, have a nice day! | Спасибо, хорошего дня!
#A2
long time no see | сто лет не виделись | Hey Anna! Long time no see! | Привет, Анна! Сто лет не виделись!
what's up? | как жизнь?, что нового? | Hey, what's up? | Привет, что нового?
take care | береги себя | Bye, take care! | Пока, береги себя!
it's a pleasure | очень приятно | It's a pleasure to meet you. | Очень приятно с вами познакомиться.
`),

  ...parseVocab("en-family", "A1", `
the parents | родители | My parents live in York. | Мои родители живут в Йорке. | 👨‍👩‍👧
the child / children | ребёнок / дети | They have three children. | У них трое детей.
the baby | малыш | The baby is sleeping. | Малыш спит. | 👶
the grandmother | бабушка | My grandmother is 85. | Моей бабушке 85. | 👵
the grandfather | дедушка | My grandfather was a pilot. | Мой дедушка был пилотом. | 👴
the grandson / granddaughter | внук / внучка | Her granddaughter is a doctor. | Её внучка — врач.
the uncle | дядя | My uncle lives in Canada. | Мой дядя живёт в Канаде.
the aunt | тётя | My aunt is very funny. | Моя тётя очень весёлая.
the cousin | двоюродный брат / сестра | My cousin is the same age as me. | Мой двоюродный брат моего возраста.
the nephew | племянник | My nephew loves football. | Мой племянник обожает футбол.
the niece | племянница | My niece is four years old. | Моей племяннице четыре года.
the boy | мальчик | The boy is playing in the garden. | Мальчик играет в саду. | 👦
the girl | девочка | The girl has long hair. | У девочки длинные волосы. | 👧
the man / men | мужчина / мужчины | Who is that man? | Кто тот мужчина?
the woman / women | женщина / женщины | The woman at the desk is my boss. | Женщина за столом — моя начальница.
the people | люди | There are many people here. | Здесь много людей.
single | холостой, незамужняя | Are you married or single? | Вы женаты или холосты?
divorced | разведённый | His parents are divorced. | Его родители в разводе.
the boyfriend / girlfriend | парень / девушка | Her boyfriend is from Italy. | Её парень из Италии.
young | молодой | My mum is still young. | Моя мама ещё молодая.
old | старый | My dog is very old. | Моя собака очень старая.
#A2
the in-laws | родственники супруга | We're visiting my in-laws this weekend. | На выходных мы едем к родственникам мужа.
the stepfather | отчим | Her stepfather is very kind. | Её отчим очень добрый.
only child | единственный ребёнок | I'm an only child. | Я единственный ребёнок в семье.
twins | близнецы | The twins look exactly alike. | Близнецы выглядят совершенно одинаково. | 👯
to grow up | расти, вырастать | I grew up in a small town. | Я вырос в маленьком городке.
to look like | быть похожим | You look like your mother. | Ты похож на маму.
to take after | пойти в кого-то | She takes after her father. | Она пошла в отца.
the relative | родственник | All our relatives came to the wedding. | На свадьбу приехали все наши родственники.
to get married | жениться, выйти замуж | They got married last year. | Они поженились в прошлом году. | 💍
the wedding | свадьба | The wedding is in June. | Свадьба в июне. | 💒
pregnant | беременная | My sister is pregnant. | Моя сестра беременна. | 🤰
`),

  ...parseVocab("en-numbers", "A1", `
zero | ноль | The score is two–zero. | Счёт два — ноль.
ten | десять | I have ten pounds. | У меня десять фунтов. | 🔟
twenty | двадцать | She's twenty years old. | Ей двадцать лет.
thirty | тридцать | The class has thirty students. | В классе тридцать учеников.
a thousand | тысяча | It costs a thousand dollars. | Это стоит тысячу долларов.
a million | миллион | The city has a million people. | В городе миллион жителей.
first | первый | This is my first visit. | Это мой первый визит. | 1️⃣
second | второй | We live on the second floor. | Мы живём на втором (третьем) этаже.
third | третий | Today is the third of May. | Сегодня третье мая.
half | половина | Half of the cake is gone. | Половины торта уже нет.
a quarter | четверть | It's a quarter past three. | Четверть четвёртого.
o'clock | ровно (о часах) | It's five o'clock. | Сейчас ровно пять. | 🕔
the hour | час | The film lasts two hours. | Фильм длится два часа.
the minute | минута | Wait a minute! | Подожди минутку!
the day | день | Have a good day! | Хорошего дня!
the year | год | I've lived here for a year. | Я живу здесь год.
yellow | жёлтый | The taxi is yellow. | Такси жёлтое. | 💛
black | чёрный | I drink my coffee black. | Я пью чёрный кофе.
white | белый | The walls are white. | Стены белые.
brown | коричневый | She has brown eyes. | У неё карие глаза.
grey / gray | серый | The sky is grey today. | Небо сегодня серое.
pink | розовый | She likes pink flowers. | Ей нравятся розовые цветы.
purple | фиолетовый | Purple is my favourite colour. | Фиолетовый — мой любимый цвет. | 💜
orange (colour) | оранжевый | The leaves turn orange in autumn. | Осенью листья становятся оранжевыми.
dark | тёмный | It gets dark early in winter. | Зимой рано темнеет.
light | светлый | She's wearing a light blue dress. | На ней светло-голубое платье.
#A2
the date | дата | What's the date today? | Какое сегодня число?
the percent | процент | Prices went up by five percent. | Цены выросли на пять процентов.
a couple of | пара, несколько | I'll be back in a couple of days. | Я вернусь через пару дней.
dozen | дюжина | A dozen eggs, please. | Дюжину яиц, пожалуйста.
`),

  ...parseVocab("en-time", "A1", `
Tuesday | вторник | I have English on Tuesday. | Во вторник у меня английский.
Wednesday | среда | Wednesday is my day off. | Среда — мой выходной.
Thursday | четверг | See you on Thursday! | Увидимся в четверг!
Friday | пятница | Thank God it's Friday! | Слава богу, пятница!
Saturday | суббота | On Saturday we go shopping. | В субботу мы ходим за покупками.
Sunday | воскресенье | I sleep late on Sunday. | В воскресенье я долго сплю.
the weekend | выходные | What are you doing at the weekend? | Что делаешь на выходных?
January | январь | January is cold. | Январь холодный. | ❄️
February | февраль | February is the shortest month. | Февраль — самый короткий месяц.
March | март | Spring starts in March. | Весна начинается в марте.
April | апрель | It often rains in April. | В апреле часто идёт дождь.
May | май | My birthday is in May. | Мой день рождения в мае.
June | июнь | The days are long in June. | В июне дни длинные.
July | июль | We go to the beach in July. | В июле мы едем на пляж. | 🏖️
August | август | August was very hot. | Август был очень жарким.
September | сентябрь | School starts in September. | Школа начинается в сентябре.
October | октябрь | Halloween is in October. | Хэллоуин в октябре. | 🎃
November | ноябрь | November is often grey. | Ноябрь часто серый.
December | декабрь | We celebrate Christmas in December. | В декабре мы празднуем Рождество. | 🎄
spring | весна | Flowers bloom in spring. | Весной цветут цветы. | 🌷
summer | лето | Summer is my favourite season. | Лето — моё любимое время года. | ☀️
autumn / fall | осень | Autumn is beautiful in New England. | Осень в Новой Англии прекрасна. | 🍂
winter | зима | We go skiing in winter. | Зимой мы катаемся на лыжах. | ⛄
the morning | утро | I drink coffee in the morning. | Утром я пью кофе.
the afternoon | время после полудня | Let's meet in the afternoon. | Давай встретимся днём.
the evening | вечер | What are you doing this evening? | Что делаешь сегодня вечером?
the night | ночь | It was a cold night. | Ночь была холодной.
now | сейчас | I'm busy now. | Я сейчас занят.
soon | скоро | See you soon! | До скорого!
later | позже | I'll call you later. | Я позвоню тебе позже.
early | рано | I get up early. | Я рано встаю.
late | поздно | Sorry I'm late. | Извини, что опоздал.
always | всегда | He's always on time. | Он всегда вовремя.
usually | обычно | I usually walk to work. | Обычно я хожу на работу пешком.
often | часто | We often go to the cinema. | Мы часто ходим в кино.
sometimes | иногда | Sometimes I cook at home. | Иногда я готовлю дома.
rarely | редко | I rarely drink coffee. | Я редко пью кофе.
never | никогда | I've never been to Japan. | Я никогда не был в Японии.
every day | каждый день | I study English every day. | Я учу английский каждый день.
#A2
the day after tomorrow | послезавтра | I'm leaving the day after tomorrow. | Я уезжаю послезавтра.
the day before yesterday | позавчера | I saw him the day before yesterday. | Я видел его позавчера.
recently | недавно | I've recently moved. | Я недавно переехал.
on time | вовремя | The train arrived on time. | Поезд прибыл вовремя.
in time | заблаговременно, успеть | We got there just in time. | Мы успели как раз вовремя.
the century | век | The house was built in the 19th century. | Дом построен в XIX веке.
the future | будущее | What are your plans for the future? | Какие у тебя планы на будущее?
the past | прошлое | That's all in the past. | Это всё в прошлом.
the delay | задержка | There is a delay of twenty minutes. | Задержка двадцать минут.
the holiday (UK) / vacation (US) | отпуск, каникулы | We're on holiday next week. | На следующей неделе мы в отпуске. | 🌴
the bank holiday | официальный выходной (брит.) | Monday is a bank holiday. | Понедельник — официальный выходной.
`),

  ...parseVocab("en-food", "A1", `
the roll | булочка | A cheese roll, please. | Булочку с сыром, пожалуйста. | 🥐
the egg | яйцо | I have two eggs for breakfast. | На завтрак я ем два яйца. | 🥚
the cheese | сыр | I love French cheese. | Я обожаю французский сыр. | 🧀
the butter | сливочное масло | Bread and butter, please. | Хлеб с маслом, пожалуйста. | 🧈
the rice | рис | Chicken with rice. | Курица с рисом. | 🍚
the pasta | паста, макароны | The children love pasta. | Дети обожают макароны. | 🍝
the potato | картофель | Mashed potatoes are my favourite. | Картофельное пюре — моё любимое. | 🥔
the chicken | курица | Roast chicken for dinner. | На ужин жареная курица. | 🍗
the fish | рыба | Fish and chips is a British classic. | Рыба с картошкой — британская классика. | 🐟
the soup | суп | The soup is too hot. | Суп слишком горячий. | 🍲
the salad | салат | I'll have a green salad. | Я возьму зелёный салат. | 🥗
the sandwich | сэндвич | I eat a sandwich for lunch. | На обед я ем сэндвич. | 🥪
the cake | торт, пирог | This chocolate cake is amazing. | Этот шоколадный торт потрясающий. | 🍰
the biscuit (UK) / cookie (US) | печенье | Would you like a biscuit with your tea? | Хочешь печенье к чаю? | 🍪
the chocolate | шоколад | I love dark chocolate. | Обожаю тёмный шоколад. | 🍫
the ice cream | мороженое | Two ice creams, please. | Два мороженых, пожалуйста. | 🍦
the tea | чай | A cup of tea with milk, please. | Чашку чая с молоком, пожалуйста. | 🍵
the juice | сок | Orange juice, please. | Апельсиновый сок, пожалуйста. | 🧃
the beer | пиво | A pint of beer, please. | Пинту пива, пожалуйста. | 🍺
the wine | вино | A glass of red wine. | Бокал красного вина. | 🍷
the salt | соль | Pass me the salt, please. | Передай мне соль, пожалуйста. | 🧂
the pepper | перец | Salt and pepper? | Соль и перец?
lunch | обед | What time is lunch? | Во сколько обед?
dinner | ужин | Dinner is ready! | Ужин готов!
thirsty | испытывающий жажду | I'm really thirsty. | Я очень хочу пить.
sweet | сладкий | This tea is too sweet. | Этот чай слишком сладкий.
salty | солёный | The chips are very salty. | Картошка очень солёная.
spicy | острый | I love spicy food. | Я люблю острую еду. | 🌶️
the cup | чашка | A cup of coffee, please. | Чашку кофе, пожалуйста. | ☕
the glass | стакан | A glass of water, please. | Стакан воды, пожалуйста.
the bottle | бутылка | A bottle of water costs a pound. | Бутылка воды стоит фунт. | 🍾
the plate | тарелка | The plate is empty. | Тарелка пустая. | 🍽️
#A2
the menu | меню | Could we see the menu, please? | Можно меню?
the bill (UK) / check (US) | счёт | Can we have the bill, please? | Можно счёт, пожалуйста? | 🧾
the tip | чаевые | In the US you leave a 20% tip. | В США оставляют 20% чаевых.
the starter | закуска | For a starter I'll have the soup. | На закуску я возьму суп.
the main course | основное блюдо | What would you like for the main course? | Что вы будете на основное?
the dessert | десерт | No dessert for me, thanks. | Мне без десерта, спасибо.
vegetarian | вегетарианский | Do you have vegetarian dishes? | У вас есть вегетарианские блюда?
the dish | блюдо | This is my favourite dish. | Это моё любимое блюдо.
full (after eating) | сытый | No more, thanks, I'm full. | Больше не надо, спасибо, я наелся.
takeaway (UK) / takeout (US) | еда навынос | Let's get a takeaway tonight. | Давай сегодня закажем еду навынос. | 🥡
to taste | пробовать; иметь вкус | It tastes great! | На вкус отлично!
the recipe | рецепт | Can you give me the recipe? | Дашь мне рецепт? | 📖
to boil | варить, кипятить | Boil the eggs for five minutes. | Варите яйца пять минут.
to fry | жарить | Fry the onions in oil. | Обжарьте лук в масле. | 🍳
to bake | печь | My mum bakes bread every week. | Мама печёт хлеб каждую неделю.
the flour | мука | You need flour for the cake. | Для торта нужна мука.
the oil | масло (растительное) | Use olive oil. | Используйте оливковое масло.
`),

  ...parseVocab("en-fruit-veg", "A1", `
the banana | банан | Bananas are good for sport. | Бананы полезны для спорта. | 🍌
the orange | апельсин | I'd like two oranges. | Мне два апельсина. | 🍊
the lemon | лимон | Tea with lemon, please. | Чай с лимоном, пожалуйста. | 🍋
the pear | груша | This pear is very juicy. | Эта груша очень сочная. | 🍐
the strawberry | клубника | Strawberries and cream at Wimbledon. | Клубника со сливками на Уимблдоне. | 🍓
the cherry | вишня, черешня | Cherries are expensive this year. | Черешня в этом году дорогая. | 🍒
the grapes | виноград | A bunch of grapes. | Гроздь винограда. | 🍇
the watermelon | арбуз | Watermelon is perfect in summer. | Арбуз идеален летом. | 🍉
the peach | персик | The peaches are ripe. | Персики спелые. | 🍑
the pineapple | ананас | Pizza with pineapple? Never! | Пицца с ананасом? Никогда! | 🍍
the tomato | помидор | Slice the tomatoes. | Нарежьте помидоры. | 🍅
the cucumber | огурец | A salad with cucumber. | Салат с огурцом. | 🥒
the carrot | морковь | Rabbits love carrots. | Кролики обожают морковь. | 🥕
the onion | лук | Chop the onion finely. | Мелко нарежьте лук. | 🧅
the garlic | чеснок | I put garlic in everything. | Я кладу чеснок во всё. | 🧄
the cabbage | капуста | Cabbage soup is cheap and healthy. | Капустный суп дешёвый и полезный. | 🥬
the mushroom | гриб | Mushroom soup, please. | Грибной суп, пожалуйста. | 🍄
the pepper (vegetable) | сладкий перец | Red peppers are sweet. | Красный перец сладкий. | 🫑
the corn | кукуруза | Corn on the cob. | Кукуруза в початке. | 🌽
the beans | фасоль, бобы | Beans on toast is a British breakfast. | Фасоль на тосте — британский завтрак.
the peas | горох | Fish, chips and mushy peas. | Рыба, картошка и гороховое пюре.
the lettuce | салат-латук | Wash the lettuce. | Помойте салат.
the nut | орех | Nuts are healthy. | Орехи полезны. | 🥜
fresh | свежий | The bread is fresh. | Хлеб свежий.
ripe | спелый | The bananas aren't ripe yet. | Бананы ещё не спелые.
the fruit | фрукты | Eat more fruit! | Ешь больше фруктов! | 🍎
`),

  ...parseVocab("en-home", "A1", `
the house | дом | They live in a big house. | Они живут в большом доме. | 🏠
the room | комната | My room is small. | Моя комната маленькая.
the hall | прихожая | Leave your shoes in the hall. | Оставь обувь в прихожей.
the toilet | туалет | Where's the toilet, please? | Где туалет? | 🚽
the stairs | лестница | Go up the stairs. | Поднимитесь по лестнице.
the garden | сад | We have a small garden. | У нас маленький сад. | 🏡
the key | ключ | I can't find my keys. | Я не могу найти ключи. | 🔑
the door | дверь | Close the door, please. | Закрой дверь, пожалуйста. | 🚪
the window | окно | Open the window, it's hot. | Открой окно, жарко. | 🪟
the wall | стена | There's a picture on the wall. | На стене картина.
the floor | пол; этаж | The phone is on the floor. | Телефон на полу.
the ceiling | потолок | The ceilings are very high. | Потолки очень высокие.
the roof | крыша | The roof needs repairing. | Крышу нужно отремонтировать.
the bed | кровать | The bed is very comfortable. | Кровать очень удобная. | 🛏️
the table | стол | Dinner is on the table. | Ужин на столе.
the chair | стул | Take a chair. | Возьми стул. | 🪑
the sofa / couch | диван | He's asleep on the sofa. | Он спит на диване. | 🛋️
the wardrobe | платяной шкаф | My clothes are in the wardrobe. | Моя одежда в шкафу.
the fridge | холодильник | Put the milk in the fridge. | Положи молоко в холодильник.
the cooker / stove | плита | The soup is on the cooker. | Суп на плите.
the oven | духовка | The cake is in the oven. | Торт в духовке.
the washing machine | стиральная машина | The washing machine is broken. | Стиральная машина сломалась.
the lamp | лампа | Turn on the lamp. | Включи лампу. | 💡
the mirror | зеркало | Look in the mirror. | Посмотри в зеркало. | 🪞
the shower | душ | I'm in the shower! | Я в душе! | 🚿
the bath | ванна | I prefer a hot bath. | Я предпочитаю горячую ванну. | 🛁
the towel | полотенце | Here's a clean towel. | Вот чистое полотенце.
#A2
the lift (UK) / elevator (US) | лифт | Take the lift to the fifth floor. | Поднимитесь на лифте на пятый этаж. | 🛗
the ground floor | первый этаж (брит.) | The shop is on the ground floor. | Магазин на первом этаже.
the heating | отопление | The heating isn't working. | Отопление не работает.
the dishwasher | посудомоечная машина | Load the dishwasher, please. | Загрузи посудомойку, пожалуйста.
the microwave | микроволновка | Heat it up in the microwave. | Разогрей в микроволновке.
the kettle | чайник | Put the kettle on! | Поставь чайник!
the bin (UK) / trash can (US) | мусорное ведро | Put it in the bin. | Выброси в ведро. | 🗑️
to take out the rubbish | выносить мусор | Can you take out the rubbish? | Можешь вынести мусор?
to do the washing-up | мыть посуду | It's your turn to do the washing-up. | Твоя очередь мыть посуду.
to do the laundry | стирать | I do the laundry on Sundays. | Я стираю по воскресеньям.
to iron | гладить | I hate ironing shirts. | Ненавижу гладить рубашки.
to vacuum / hoover | пылесосить | I vacuum the flat once a week. | Я пылесошу квартиру раз в неделю.
to tidy up | прибираться | Tidy up your room! | Прибери свою комнату! | 🧹
the landlord | арендодатель | The landlord fixed the heating. | Арендодатель починил отопление.
the tenant | жилец | The tenants complained about the noise. | Жильцы пожаловались на шум.
the bills | коммунальные счета | Are bills included in the rent? | Коммунальные включены в аренду?
the deposit | залог | The deposit is one month's rent. | Залог — арендная плата за месяц.
to move (house) | переезжать | We're moving next month. | Мы переезжаем в следующем месяце. | 📦
the neighbourhood | район, окрестности | It's a quiet neighbourhood. | Это тихий район.
#B1
the flatmate / roommate | сосед по квартире | My flatmate is a nurse. | Моя соседка по квартире — медсестра.
furnished | меблированный | The flat is fully furnished. | Квартира полностью меблирована.
the lease | договор аренды | We signed a one-year lease. | Мы подписали договор аренды на год.
the estate agent / realtor | агент по недвижимости | The estate agent showed us three flats. | Агент показал нам три квартиры.
damp | сырой | The basement is damp. | В подвале сыро.
the mould | плесень | There's mould in the bathroom. | В ванной плесень.
`),

  ...parseVocab("en-shopping", "A1", `
the supermarket | супермаркет | I go to the supermarket on Saturdays. | Я хожу в супермаркет по субботам. | 🛒
the market | рынок | The market is open on Sundays. | Рынок открыт по воскресеньям.
the bakery | пекарня | The bakery opens at seven. | Пекарня открывается в семь. | 🥖
the butcher's | мясная лавка | I buy meat at the butcher's. | Я покупаю мясо в мясной лавке.
the post office | почта | Where's the post office? | Где почта? | 📮
the shopping centre / mall | торговый центр | Let's go to the mall. | Пойдём в торговый центр. | 🛍️
the cash | наличные | Do you take cash? | Вы принимаете наличные? | 💵
the card | карта (банковская) | Can I pay by card? | Можно оплатить картой? | 💳
the change | сдача; мелочь | Keep the change. | Сдачи не надо.
the bag | пакет, сумка | Do you need a bag? | Вам нужен пакет?
how much is it? | сколько стоит? | How much is this T-shirt? | Сколько стоит эта футболка?
to buy | покупать | I want to buy a present. | Я хочу купить подарок.
to sell | продавать | They sell fresh fish. | Они продают свежую рыбу.
open | открытый | The shop is open until eight. | Магазин открыт до восьми.
closed | закрытый | Sorry, we're closed. | Извините, мы закрыты.
#A2
the queue (UK) / line (US) | очередь | There's a long queue at the checkout. | На кассе длинная очередь.
the checkout | касса | Please pay at the checkout. | Оплатите, пожалуйста, на кассе.
the discount | скидка | Students get a 10% discount. | Студентам скидка 10%.
the sale | распродажа | Everything is in the sale. | Всё по распродаже.
on offer | по акции | Apples are on offer today. | Сегодня яблоки по акции.
to try on | примерять | Can I try this on? | Можно это примерить?
the fitting room | примерочная | The fitting rooms are over there. | Примерочные вон там.
to fit | подходить по размеру | These jeans don't fit. | Эти джинсы не подходят по размеру.
to suit | идти, быть к лицу | That colour suits you. | Этот цвет тебе идёт.
to return | возвращать | I'd like to return this jacket. | Я хотел бы вернуть эту куртку.
the refund | возврат денег | Can I get a refund? | Можно вернуть деньги?
the customer | покупатель | The customer is always right. | Клиент всегда прав.
the shop assistant | продавец-консультант | The shop assistant was very helpful. | Продавец очень помог.
to order online | заказать онлайн | I ordered it online. | Я заказал это онлайн.
the delivery | доставка | Delivery is free. | Доставка бесплатная. | 🚚
the parcel / package | посылка | A parcel came for you. | Тебе пришла посылка. | 📦
#B1
the warranty | гарантия | It has a two-year warranty. | На это гарантия два года.
the complaint | жалоба | I'd like to make a complaint. | Я хотел бы подать жалобу.
faulty | неисправный | The charger is faulty. | Зарядка неисправна.
a bargain | выгодная покупка | It was a real bargain! | Это была настоящая находка!
the brand | бренд | What brand is it? | Какой это бренд?
second-hand | подержанный | I bought a second-hand bike. | Я купил подержанный велосипед.
`),

  ...parseVocab("en-clothes", "A2", `
the T-shirt | футболка | A white T-shirt. | Белая футболка. | 👕
the shirt | рубашка | He's wearing a blue shirt. | На нём синяя рубашка.
the trousers (UK) / pants (US) | брюки | These trousers are too long. | Эти брюки слишком длинные. | 👖
the jeans | джинсы | I live in jeans. | Я не вылезаю из джинсов.
the dress | платье | What a beautiful dress! | Какое красивое платье! | 👗
the skirt | юбка | She's wearing a short skirt. | На ней короткая юбка.
the jumper (UK) / sweater | свитер | Take a jumper, it's cold. | Возьми свитер, холодно.
the coat | пальто | Hang your coat here. | Повесь пальто сюда. | 🧥
the suit | костюм | He wore a suit to the interview. | На собеседование он надел костюм.
the tie | галстук | Do I need a tie? | Мне нужен галстук? | 👔
the socks | носки | I've lost a sock again. | Я опять потерял носок. | 🧦
the boots | ботинки, сапоги | Wear your boots, it's snowing. | Надень ботинки, идёт снег. | 👢
the trainers (UK) / sneakers (US) | кроссовки | New trainers for running. | Новые кроссовки для бега. | 👟
the hat | шляпа, шапка | Put on your hat. | Надень шапку. | 👒
the scarf | шарф | A warm woollen scarf. | Тёплый шерстяной шарф. | 🧣
the gloves | перчатки | I've forgotten my gloves. | Я забыл перчатки. | 🧤
the belt | ремень | A leather belt. | Кожаный ремень.
the pyjamas | пижама | The kids are in their pyjamas. | Дети в пижамах.
the glasses | очки | I need new glasses. | Мне нужны новые очки. | 👓
the watch | наручные часы | What a nice watch! | Какие красивые часы! | ⌚
the umbrella | зонт | Don't forget your umbrella. | Не забудь зонт. | ☂️
to put on | надевать | Put on your coat! | Надень пальто!
to take off | снимать | Take off your shoes, please. | Сними, пожалуйста, обувь.
to get dressed | одеваться | Get dressed, we're late! | Одевайся, мы опаздываем!
tight | тесный | The shoes are too tight. | Туфли слишком тесные.
loose | свободный | I like loose clothes. | Я люблю свободную одежду.
fashionable | модный | She's always fashionable. | Она всегда модная.
cotton | хлопок | A cotton shirt. | Хлопковая рубашка.
leather | кожа | A leather jacket. | Кожаная куртка.
wool | шерсть | Wool keeps you warm. | Шерсть греет.
`),

  ...parseVocab("en-body", "A1", `
the face | лицо | Wash your face. | Умой лицо.
the hair | волосы | She has long hair. | У неё длинные волосы.
the nose | нос | My nose is running. | У меня насморк. | 👃
the mouth | рот | Open your mouth, please. | Откройте рот, пожалуйста. | 👄
the ear | ухо | My ear hurts. | У меня болит ухо. | 👂
the tooth / teeth | зуб / зубы | Brush your teeth! | Почисти зубы! | 🦷
the neck | шея | I have a stiff neck. | У меня затекла шея.
the shoulder | плечо | My shoulder hurts. | У меня болит плечо.
the arm | рука (от плеча) | He broke his arm. | Он сломал руку. | 💪
the finger | палец | I cut my finger. | Я порезал палец.
the back | спина | I have back pain. | У меня болит спина.
the stomach | живот, желудок | My stomach hurts. | У меня болит живот.
the leg | нога | My legs are tired. | У меня устали ноги. | 🦵
the knee | колено | I hurt my knee. | Я ушиб колено.
the foot / feet | стопа / стопы | My feet are cold. | У меня замёрзли ноги. | 🦶
the heart | сердце | Her heart is beating fast. | Её сердце бьётся быстро. | ❤️
the skin | кожа | She has sensitive skin. | У неё чувствительная кожа.
the blood | кровь | He gave blood. | Он сдал кровь. | 🩸
#A2
tall | высокий (о росте) | He's very tall. | Он очень высокий.
short | низкий; короткий | She's quite short. | Она довольно невысокая.
slim | стройный | She's tall and slim. | Она высокая и стройная.
overweight | с лишним весом | The doctor says I'm overweight. | Врач говорит, что у меня лишний вес.
the beard | борода | My dad has a beard. | У моего папы борода. | 🧔
curly | кудрявый | She has curly hair. | У неё кудрявые волосы.
bald | лысый | My uncle is bald. | Мой дядя лысый.
good-looking | привлекательный | He's very good-looking. | Он очень симпатичный.
`),
];
