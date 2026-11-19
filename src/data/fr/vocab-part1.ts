import { parseVocab } from "../vocabParse";

// Français A1–A2 : лексика для начала.
export const FR_PART1 = [
  ...parseVocab("fr-salutations", "A1", `
bonjour | здравствуйте, добрый день | Bonjour, madame ! | Здравствуйте, мадам! | 👋
bonsoir | добрый вечер | Bonsoir, tout le monde ! | Добрый вечер всем!
salut | привет; пока | Salut, ça va ? | Привет, как дела?
au revoir | до свидания | Au revoir et à demain ! | До свидания и до завтра!
à bientôt | до скорого | Merci, à bientôt ! | Спасибо, до скорого!
à demain | до завтра | À demain, au bureau. | До завтра, в офисе.
bonne nuit | спокойной ночи | Bonne nuit, dors bien ! | Спокойной ночи, спи хорошо! | 🌙
merci | спасибо | Merci beaucoup ! | Большое спасибо!
s'il vous plaît | пожалуйста (вежл.) | Un café, s'il vous plaît. | Кофе, пожалуйста.
s'il te plaît | пожалуйста (на «ты») | Aide-moi, s'il te plaît. | Помоги мне, пожалуйста.
de rien | не за что | Merci ! — De rien. | Спасибо! — Не за что.
excusez-moi | извините | Excusez-moi, où est la gare ? | Извините, где вокзал?
pardon | простите | Pardon, je suis en retard. | Простите, я опоздал.
oui | да | Oui, bien sûr. | Да, конечно.
non | нет | Non, merci. | Нет, спасибо.
ça va ? | как дела? | Salut Marc, ça va ? | Привет, Марк, как дела?
ça va bien | всё хорошо | Ça va bien, merci. Et toi ? | Всё хорошо, спасибо. А у тебя?
comment allez-vous ? | как поживаете? | Bonjour, comment allez-vous ? | Здравствуйте, как поживаете?
je m'appelle… | меня зовут… | Je m'appelle Anna. | Меня зовут Анна.
enchanté | очень приятно | Enchanté, moi c'est Paul. | Очень приятно, я Поль.
je viens de… | я из… | Je viens de Russie. | Я из России.
j'habite à… | я живу в… | J'habite à Lyon. | Я живу в Лионе.
quel âge as-tu ? | сколько тебе лет? | Quel âge as-tu ? — J'ai vingt ans. | Сколько тебе лет? — Мне двадцать.
le prénom | имя | Quel est votre prénom ? | Как ваше имя?
le nom de famille | фамилия | Écrivez votre nom de famille. | Напишите вашу фамилию.
l'adresse | адрес | Quelle est votre adresse ? | Какой у вас адрес?
le numéro de téléphone | номер телефона | Tu as mon numéro de téléphone ? | У тебя есть мой номер? | 📱
je ne comprends pas | я не понимаю | Désolé, je ne comprends pas. | Извините, я не понимаю.
vous pouvez répéter ? | можете повторить? | Vous pouvez répéter, s'il vous plaît ? | Можете повторить, пожалуйста?
parlez-vous anglais ? | вы говорите по-английски? | Excusez-moi, parlez-vous anglais ? | Извините, вы говорите по-английски?
bienvenue | добро пожаловать | Bienvenue à Paris ! | Добро пожаловать в Париж!
félicitations ! | поздравляю! | Félicitations pour ton diplôme ! | Поздравляю с дипломом! | 🎉
bon appétit ! | приятного аппетита! | Le dîner est prêt, bon appétit ! | Ужин готов, приятного аппетита!
bonne journée ! | хорошего дня! | Merci, bonne journée ! | Спасибо, хорошего дня!
bon week-end ! | хороших выходных! | Bon week-end, à lundi ! | Хороших выходных, до понедельника!
#A2
tutoyer | обращаться на «ты» | On peut se tutoyer ? | Можно на «ты»?
vouvoyer | обращаться на «вы» | Au travail, on vouvoie le directeur. | На работе к директору обращаются на «вы».
la bise | поцелуй в щёку при встрече | En France, on se fait la bise. | Во Франции при встрече целуются в щёку.
`),

  ...parseVocab("fr-famille", "A1", `
la famille | семья | J'ai une grande famille. | У меня большая семья. | 👨‍👩‍👧
la mère | мать | Ma mère est médecin. | Моя мама — врач.
le père | отец | Mon père travaille à Paris. | Мой папа работает в Париже.
les parents | родители | Mes parents habitent à Nice. | Мои родители живут в Ницце.
le frère | брат | J'ai deux frères. | У меня два брата.
la sœur | сестра | Ma sœur a dix ans. | Моей сестре десять лет.
le fils | сын | Leur fils est étudiant. | Их сын — студент.
la fille | дочь; девочка | Ils ont une fille. | У них дочь.
le mari | муж | Mon mari est français. | Мой муж француз.
la femme | жена; женщина | Sa femme est très gentille. | Его жена очень милая.
le grand-père | дедушка | Mon grand-père a quatre-vingts ans. | Моему дедушке восемьдесят. | 👴
la grand-mère | бабушка | Ma grand-mère fait de bons gâteaux. | Бабушка печёт вкусные пироги. | 👵
l'oncle | дядя | Mon oncle habite au Canada. | Мой дядя живёт в Канаде.
la tante | тётя | Ma tante est professeure. | Моя тётя — учительница.
le cousin / la cousine | двоюродный брат / сестра | Mon cousin vient ce soir. | Мой двоюродный брат придёт сегодня вечером.
l'enfant | ребёнок | Ils ont trois enfants. | У них трое детей.
le bébé | малыш | Le bébé dort. | Малыш спит. | 👶
le garçon | мальчик | Le garçon joue au foot. | Мальчик играет в футбол. | 👦
l'ami / l'amie | друг / подруга | C'est mon meilleur ami. | Это мой лучший друг.
le copain / la copine | приятель; парень / девушка | Sa copine est italienne. | Его девушка итальянка.
marié | женатый, замужняя | Elle est mariée depuis cinq ans. | Она замужем пять лет.
célibataire | холостой, незамужняя | Je suis célibataire. | Я не женат.
divorcé | разведённый | Ses parents sont divorcés. | Его родители в разводе.
le voisin / la voisine | сосед / соседка | Notre voisin est très sympa. | Наш сосед очень приятный.
#A2
le petit-fils / la petite-fille | внук / внучка | Sa petite-fille est née hier. | Его внучка родилась вчера.
le neveu | племянник | Mon neveu adore les dinosaures. | Мой племянник обожает динозавров.
la nièce | племянница | Ma nièce va à l'école. | Моя племянница ходит в школу.
le beau-père | свёкор, тесть; отчим | Mon beau-père est très drôle. | Мой тесть очень весёлый.
la belle-mère | свекровь, тёща; мачеха | Ma belle-mère vient dimanche. | Свекровь приезжает в воскресенье.
les jumeaux | близнецы | Les jumeaux se ressemblent beaucoup. | Близнецы очень похожи. | 👯
se marier | жениться, выходить замуж | Ils se marient en juin. | Они женятся в июне. | 💍
le mariage | свадьба; брак | Le mariage est à la mairie. | Свадьба проходит в мэрии. | 💒
enceinte | беременная | Ma sœur est enceinte. | Моя сестра беременна. | 🤰
grandir | расти | J'ai grandi à la campagne. | Я вырос в деревне.
ressembler à | быть похожим на | Tu ressembles à ta mère. | Ты похож на маму.
`),

  ...parseVocab("fr-nombres", "A1", `
zéro | ноль | Il fait zéro degré. | Ноль градусов.
un, deux, trois | один, два, три | Un, deux, trois, partez ! | Раз, два, три, марш!
dix | десять | J'ai dix euros. | У меня десять евро. | 🔟
vingt | двадцать | Elle a vingt ans. | Ей двадцать лет.
cinquante | пятьдесят | Ça coûte cinquante euros. | Это стоит пятьдесят евро.
soixante-dix | семьдесят | Mon grand-père a soixante-dix ans. | Моему дедушке семьдесят.
quatre-vingts | восемьдесят | Quatre-vingts personnes sont venues. | Пришли восемьдесят человек.
quatre-vingt-dix | девяносто | Il y a quatre-vingt-dix pages. | Там девяносто страниц.
cent | сто | Cent mètres à pied. | Сто метров пешком.
mille | тысяча | Mille mercis ! | Тысяча благодарностей!
premier / première | первый / первая | C'est mon premier jour. | Это мой первый день. | 1️⃣
deuxième | второй | Au deuxième étage. | На третьем этаже (во Франции — втором).
la moitié | половина | La moitié du gâteau. | Половина торта.
le quart | четверть | Il est trois heures et quart. | Четверть четвёртого.
l'heure | час; время | Quelle heure est-il ? | Который час? | ⏰
la minute | минута | J'arrive dans cinq minutes. | Буду через пять минут.
la couleur | цвет | Quelle est ta couleur préférée ? | Какой твой любимый цвет? | 🎨
rouge | красный | Une robe rouge. | Красное платье.
bleu | синий | Le ciel est bleu. | Небо голубое.
vert | зелёный | Les feuilles sont vertes. | Листья зелёные.
jaune | жёлтый | Un citron jaune. | Жёлтый лимон.
noir | чёрный | Un café noir. | Чёрный кофе.
blanc | белый | Un mur blanc. | Белая стена.
gris | серый | Il fait gris aujourd'hui. | Сегодня пасмурно.
marron | коричневый | Des chaussures marron. | Коричневые туфли.
rose | розовый | Une fleur rose. | Розовый цветок.
violet | фиолетовый | Un pull violet. | Фиолетовый свитер. | 💜
orange | оранжевый | Un sac orange. | Оранжевая сумка.
`),

  ...parseVocab("fr-temps", "A1", `
lundi | понедельник | Lundi, je travaille. | В понедельник я работаю.
mardi | вторник | Mardi, j'ai cours de français. | Во вторник у меня французский.
mercredi | среда | Le mercredi, les enfants n'ont pas école. | По средам у детей нет школы.
jeudi | четверг | On se voit jeudi ? | Увидимся в четверг?
vendredi | пятница | Vendredi soir, on sort. | В пятницу вечером мы идём гулять.
samedi | суббота | Samedi, je fais les courses. | В субботу я делаю покупки.
dimanche | воскресенье | Le dimanche, tout est fermé. | По воскресеньям всё закрыто.
le week-end | выходные | Bon week-end ! | Хороших выходных!
janvier | январь | En janvier, il fait froid. | В январе холодно. | ❄️
février | февраль | Février est court. | Февраль короткий.
mars | март | Le printemps commence en mars. | Весна начинается в марте.
avril | апрель | En avril, ne te découvre pas d'un fil. | В апреле не снимай ни нитки (поговорка).
mai | май | Le premier mai est férié. | Первое мая — выходной.
juin | июнь | En juin, les jours sont longs. | В июне дни длинные.
juillet | июль | Le 14 juillet, c'est la fête nationale. | 14 июля — национальный праздник. | 🎆
août | август | En août, tout le monde part en vacances. | В августе все уезжают в отпуск. | 🏖️
septembre | сентябрь | La rentrée est en septembre. | Учёба начинается в сентябре.
octobre | октябрь | En octobre, les feuilles tombent. | В октябре опадают листья. | 🍂
novembre | ноябрь | Novembre est souvent pluvieux. | Ноябрь часто дождливый.
décembre | декабрь | Noël est en décembre. | Рождество в декабре. | 🎄
le printemps | весна | Au printemps, les fleurs poussent. | Весной растут цветы. | 🌷
l'été | лето | En été, il fait chaud. | Летом жарко. | ☀️
l'automne | осень | En automne, il pleut. | Осенью идёт дождь.
l'hiver | зима | En hiver, on fait du ski. | Зимой катаются на лыжах. | ⛄
le matin | утро | Le matin, je bois un café. | Утром я пью кофе. | 🌅
l'après-midi | вторая половина дня | Cet après-midi, je suis libre. | Сегодня днём я свободен.
le soir | вечер | Ce soir, on dîne ensemble. | Сегодня вечером ужинаем вместе. | 🌆
la nuit | ночь | La nuit, la ville est calme. | Ночью город спокоен.
aujourd'hui | сегодня | Aujourd'hui, il fait beau. | Сегодня хорошая погода.
demain | завтра | À demain ! | До завтра!
hier | вчера | Hier, j'étais malade. | Вчера я болел.
maintenant | сейчас | Je n'ai pas le temps maintenant. | У меня сейчас нет времени.
toujours | всегда | Il est toujours à l'heure. | Он всегда вовремя.
souvent | часто | Je vais souvent au cinéma. | Я часто хожу в кино.
parfois | иногда | Parfois, je cuisine. | Иногда я готовлю.
jamais | никогда | Je ne fume jamais. | Я никогда не курю.
tôt | рано | Je me lève tôt. | Я встаю рано.
tard | поздно | Il est déjà tard. | Уже поздно.
la semaine | неделя | La semaine prochaine. | На следующей неделе.
le mois | месяц | Le mois dernier. | В прошлом месяце.
l'an / l'année | год | Bonne année ! | С Новым годом!
#A2
après-demain | послезавтра | Je pars après-demain. | Я уезжаю послезавтра.
avant-hier | позавчера | Je l'ai vu avant-hier. | Я видел его позавчера.
bientôt | скоро | On se voit bientôt. | Скоро увидимся.
tout de suite | сразу, немедленно | J'arrive tout de suite. | Сейчас приду.
en retard | с опозданием | Le train est en retard. | Поезд опаздывает.
à l'heure | вовремя | Sois à l'heure ! | Будь вовремя!
le jour férié | праздничный (выходной) день | Lundi est un jour férié. | Понедельник — праздничный день.
les vacances | отпуск, каникулы | Bonnes vacances ! | Хорошего отпуска! | 🌴
`),

  ...parseVocab("fr-nourriture", "A1", `
le pain | хлеб | Une baguette de pain, s'il vous plaît. | Багет, пожалуйста. | 🥖
la baguette | багет | Je prends deux baguettes. | Я возьму два багета.
le croissant | круассан | Un café et un croissant. | Кофе и круассан. | 🥐
le fromage | сыр | La France a plus de mille fromages. | Во Франции больше тысячи сыров. | 🧀
le beurre | сливочное масло | Du pain avec du beurre. | Хлеб с маслом. | 🧈
l'œuf | яйцо | Je mange deux œufs. | Я ем два яйца. | 🥚
le lait | молоко | Un verre de lait. | Стакан молока. | 🥛
la viande | мясо | Je ne mange pas de viande. | Я не ем мясо. | 🥩
le poulet | курица | Du poulet avec des frites. | Курица с картошкой фри. | 🍗
le poisson | рыба | Le poisson est frais. | Рыба свежая. | 🐟
le jambon | ветчина | Un sandwich au jambon. | Сэндвич с ветчиной.
les pâtes | макароны | Les enfants adorent les pâtes. | Дети обожают макароны. | 🍝
le riz | рис | Du riz et des légumes. | Рис с овощами. | 🍚
la soupe | суп | Une soupe à l'oignon. | Луковый суп. | 🍲
la salade | салат | Une salade verte. | Зелёный салат. | 🥗
le gâteau | торт, пирог | Un gâteau au chocolat. | Шоколадный торт. | 🍰
le chocolat | шоколад | J'adore le chocolat noir. | Обожаю тёмный шоколад. | 🍫
la glace | мороженое; лёд | Une glace à la vanille. | Ванильное мороженое. | 🍦
le sucre | сахар | Un café sans sucre. | Кофе без сахара.
le sel | соль | Passe-moi le sel. | Передай мне соль. | 🧂
l'eau | вода | Une carafe d'eau, s'il vous plaît. | Графин воды, пожалуйста. | 💧
le café | кофе; кафе | Un café, s'il vous plaît. | Кофе, пожалуйста. | ☕
le thé | чай | Un thé au citron. | Чай с лимоном. | 🍵
le jus | сок | Un jus d'orange. | Апельсиновый сок. | 🧃
le vin | вино | Un verre de vin rouge. | Бокал красного вина. | 🍷
la bière | пиво | Une bière pression. | Разливное пиво. | 🍺
le petit-déjeuner | завтрак | Le petit-déjeuner est à huit heures. | Завтрак в восемь.
le déjeuner | обед | On déjeune à midi. | Мы обедаем в полдень.
le dîner | ужин | Le dîner est prêt. | Ужин готов.
avoir faim | быть голодным | J'ai faim ! | Я голоден!
avoir soif | хотеть пить | J'ai soif. | Я хочу пить.
délicieux | очень вкусный | C'est délicieux ! | Это очень вкусно!
#A2
la carte / le menu | меню | La carte, s'il vous plaît. | Меню, пожалуйста.
l'addition | счёт | L'addition, s'il vous plaît ! | Счёт, пожалуйста! | 🧾
le pourboire | чаевые | Le service est compris, mais on laisse un petit pourboire. | Обслуживание включено, но оставляют небольшие чаевые.
l'entrée | закуска | En entrée, je prends la soupe. | На закуску я возьму суп.
le plat principal | основное блюдо | Quel est le plat du jour ? | Какое сегодня блюдо дня?
le dessert | десерт | Et comme dessert ? | А на десерт?
végétarien | вегетарианский | Vous avez des plats végétariens ? | У вас есть вегетарианские блюда? | 🥗
la recette | рецепт | Tu me donnes la recette ? | Дашь мне рецепт?
cuisiner | готовить | J'aime cuisiner. | Я люблю готовить.
goûter | пробовать | Tu veux goûter ? | Хочешь попробовать?
`),

  ...parseVocab("fr-fruits-legumes", "A1", `
la pomme | яблоко | Une pomme par jour. | Одно яблоко в день. | 🍎
la banane | банан | Les bananes sont mûres. | Бананы спелые. | 🍌
l'orange | апельсин | Un jus d'orange pressée. | Свежевыжатый апельсиновый сок. | 🍊
le citron | лимон | Un citron pour le thé. | Лимон к чаю. | 🍋
la fraise | клубника | Une tarte aux fraises. | Клубничный пирог. | 🍓
la cerise | вишня, черешня | Les cerises sont chères. | Черешня дорогая. | 🍒
le raisin | виноград | Du raisin blanc. | Белый виноград. | 🍇
la poire | груша | Une poire bien mûre. | Хорошо спелая груша. | 🍐
la pêche | персик | Les pêches de Provence. | Персики из Прованса. | 🍑
la tomate | помидор | Une salade de tomates. | Салат из помидоров. | 🍅
la pomme de terre | картофель | Des pommes de terre sautées. | Жареный картофель. | 🥔
la carotte | морковь | Les lapins aiment les carottes. | Кролики любят морковь. | 🥕
l'oignon | лук | Coupe l'oignon. | Нарежь лук. | 🧅
l'ail | чеснок | Un peu d'ail. | Немного чеснока. | 🧄
le concombre | огурец | Une salade de concombre. | Салат из огурцов. | 🥒
le chou | капуста | Une soupe au chou. | Капустный суп. | 🥬
le champignon | гриб | Une omelette aux champignons. | Омлет с грибами. | 🍄
le poivron | сладкий перец | Un poivron rouge. | Красный перец. | 🫑
les haricots verts | стручковая фасоль | Des haricots verts au beurre. | Фасоль с маслом.
les petits pois | зелёный горошек | Des petits pois et des carottes. | Горошек с морковью.
la salade (laitue) | салат-латук | Lave la salade. | Помой салат.
les fruits | фрукты | Mange des fruits ! | Ешь фрукты!
les légumes | овощи | Des légumes de saison. | Сезонные овощи.
frais | свежий | Le pain est frais. | Хлеб свежий.
mûr | спелый | Les tomates sont mûres. | Помидоры спелые.
`),

  ...parseVocab("fr-maison", "A1", `
la maison | дом | Une maison avec jardin. | Дом с садом. | 🏠
l'appartement | квартира | Un appartement de trois pièces. | Трёхкомнатная квартира.
la pièce | комната | L'appartement a quatre pièces. | В квартире четыре комнаты.
la chambre | спальня | Ma chambre est petite. | Моя спальня маленькая. | 🛏️
la cuisine | кухня | On mange dans la cuisine. | Мы едим на кухне.
le salon | гостиная | Le salon est grand. | Гостиная большая.
la salle de bains | ванная | La salle de bains est à côté. | Ванная рядом. | 🛁
les toilettes | туалет | Où sont les toilettes ? | Где туалет? | 🚽
le jardin | сад | Les enfants jouent dans le jardin. | Дети играют в саду. | 🏡
la porte | дверь | Ferme la porte. | Закрой дверь. | 🚪
la fenêtre | окно | Ouvre la fenêtre. | Открой окно. | 🪟
la clé | ключ | J'ai perdu ma clé. | Я потерял ключ. | 🔑
l'escalier | лестница | Prenez l'escalier. | Поднимитесь по лестнице.
l'étage | этаж | J'habite au troisième étage. | Я живу на третьем этаже.
le rez-de-chaussée | первый этаж | Le magasin est au rez-de-chaussée. | Магазин на первом этаже.
le lit | кровать | Le lit est confortable. | Кровать удобная.
la table | стол | Mets la table, s'il te plaît. | Накрой на стол, пожалуйста.
la chaise | стул | Prends une chaise. | Возьми стул. | 🪑
le canapé | диван | Il dort sur le canapé. | Он спит на диване. | 🛋️
l'armoire | шкаф | Mes vêtements sont dans l'armoire. | Моя одежда в шкафу.
le frigo | холодильник | Le lait est dans le frigo. | Молоко в холодильнике.
la douche | душ | Je prends une douche. | Я принимаю душ. | 🚿
la lampe | лампа | Allume la lampe. | Включи лампу. | 💡
#A2
l'ascenseur | лифт | L'ascenseur est en panne. | Лифт сломан. | 🛗
le chauffage | отопление | Le chauffage ne marche pas. | Отопление не работает.
le loyer | арендная плата | Le loyer est de 900 euros. | Аренда — 900 евро.
les charges | коммунальные платежи | Les charges sont comprises. | Коммунальные включены.
le propriétaire | владелец, арендодатель | Le propriétaire habite en bas. | Хозяин живёт внизу.
le locataire | жилец, арендатор | Les locataires se plaignent du bruit. | Жильцы жалуются на шум.
déménager | переезжать | On déménage le mois prochain. | Мы переезжаем в следующем месяце. | 📦
le ménage | уборка | Je fais le ménage le samedi. | По субботам я убираюсь. | 🧹
la vaisselle | посуда; мытьё посуды | C'est à toi de faire la vaisselle. | Твоя очередь мыть посуду.
la lessive | стирка | Je fais la lessive. | Я стираю.
les poubelles | мусор, мусорные баки | Sors les poubelles, s'il te plaît. | Вынеси мусор, пожалуйста. | 🗑️
le lave-linge | стиральная машина | Le lave-linge est neuf. | Стиральная машина новая.
le lave-vaisselle | посудомоечная машина | Vide le lave-vaisselle. | Разгрузи посудомойку.
le four | духовка | Le gâteau est au four. | Пирог в духовке.
la colocation | совместная аренда | Je vis en colocation avec deux amis. | Я снимаю квартиру с двумя друзьями.
le colocataire | сосед по квартире | Mon colocataire est espagnol. | Мой сосед по квартире — испанец.
meublé | меблированный | Un studio meublé. | Меблированная студия.
le bail | договор аренды | Nous avons signé le bail. | Мы подписали договор аренды.
la caution | залог; поручитель | La caution est d'un mois de loyer. | Залог — месячная арендная плата.
le garant | поручитель | Il faut un garant pour louer. | Чтобы снять жильё, нужен поручитель.
`),

  ...parseVocab("fr-ville", "A1", `
la ville | город | Paris est une grande ville. | Париж — большой город. | 🏙️
le village | деревня | Un petit village en Provence. | Маленькая деревня в Провансе.
la rue | улица | J'habite rue Victor-Hugo. | Я живу на улице Виктора Гюго.
la place | площадь; место | La place de la Concorde. | Площадь Согласия.
le magasin | магазин | Le magasin ferme à 19 heures. | Магазин закрывается в 19 часов.
le supermarché | супермаркет | Je vais au supermarché. | Я иду в супермаркет. | 🛒
la boulangerie | булочная | La boulangerie ouvre à 7 heures. | Булочная открывается в 7. | 🥖
la pharmacie | аптека | La pharmacie est au coin. | Аптека на углу. | 💊
la banque | банк | La banque est fermée le samedi. | Банк закрыт по субботам. | 🏦
la poste | почта | Je vais à la poste. | Я иду на почту. | 📮
la gare | вокзал | La gare est loin d'ici ? | Вокзал далеко отсюда?
l'hôpital | больница | L'hôpital est à côté. | Больница рядом. | 🏥
l'école | школа | L'école est fermée. | Школа закрыта. | 🏫
l'église | церковь | Une vieille église. | Старая церковь. | ⛪
le musée | музей | Le musée du Louvre. | Музей Лувр.
le parc | парк | On se promène au parc. | Мы гуляем в парке. | 🌳
le cinéma | кинотеатр | On va au cinéma ce soir ? | Пойдём сегодня в кино? | 🎬
le restaurant | ресторан | Un bon restaurant. | Хороший ресторан.
la mairie | мэрия | Le mariage est à la mairie. | Свадьба в мэрии.
le marché | рынок | Le marché a lieu le dimanche. | Рынок бывает по воскресеньям.
à gauche | налево | Tournez à gauche. | Поверните налево. | ⬅️
à droite | направо | La gare est à droite. | Вокзал справа. | ➡️
tout droit | прямо | Allez tout droit. | Идите прямо. | ⬆️
près de | рядом с | C'est près d'ici. | Это недалеко отсюда.
loin de | далеко от | C'est loin du centre. | Это далеко от центра.
à côté de | рядом с | La banque est à côté de la poste. | Банк рядом с почтой.
en face de | напротив | La pharmacie est en face. | Аптека напротив.
#A2
le quartier | район | C'est un quartier calme. | Это спокойный район.
le carrefour | перекрёсток | Au carrefour, tournez à droite. | На перекрёстке поверните направо.
le feu (rouge) | светофор | Attendez le feu vert. | Дождитесь зелёного. | 🚦
le trottoir | тротуар | Marche sur le trottoir. | Иди по тротуару.
le passage piéton | пешеходный переход | Traversez au passage piéton. | Переходите по переходу.
la mairie d'arrondissement | районная мэрия | Allez à la mairie d'arrondissement. | Обратитесь в мэрию округа.
`),
];
