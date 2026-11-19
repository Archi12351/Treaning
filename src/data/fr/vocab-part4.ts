import { parseVocab } from "../vocabParse";

// Français : профессии, учёба, чувства, культура, экстренные случаи, частотные B1–C1 слова.
export const FR_PART4 = [
  ...parseVocab("fr-metiers", "A2", `
le professeur | преподаватель | Le professeur explique la leçon. | Преподаватель объясняет урок. | 🧑‍🏫
l'infirmier / l'infirmière | медбрат / медсестра | L'infirmière est très gentille. | Медсестра очень добрая.
l'ingénieur | инженер | Il est ingénieur chez Airbus. | Он инженер в Airbus.
l'avocat (métier) | адвокат | Elle est avocate à Paris. | Она адвокат в Париже.
le policier | полицейский | Demandez au policier. | Спросите полицейского. | 👮
le pompier | пожарный | Les pompiers sont arrivés. | Приехали пожарные. | 🧑‍🚒
le serveur / la serveuse | официант / официантка | Le serveur apporte la carte. | Официант приносит меню.
le cuisinier | повар | Le cuisinier prépare le plat. | Повар готовит блюдо. | 🧑‍🍳
le boulanger | пекарь | Le boulanger se lève à quatre heures. | Пекарь встаёт в четыре. | 🥖
le vendeur (métier) | продавец | Il est vendeur dans un magasin. | Он продавец в магазине.
le chauffeur | водитель | Le chauffeur de bus. | Водитель автобуса.
le plombier | сантехник | Appelle le plombier. | Позвони сантехнику.
l'électricien | электрик | L'électricien répare la prise. | Электрик чинит розетку.
le coiffeur | парикмахер | Je vais chez le coiffeur. | Я иду к парикмахеру. | 💇
le comptable | бухгалтер | Le comptable vérifie les factures. | Бухгалтер проверяет счета.
le développeur | разработчик | Elle est développeuse web. | Она веб-разработчица. | 🧑‍💻
l'agriculteur | фермер | L'agriculteur cultive du blé. | Фермер выращивает пшеницу. | 🧑‍🌾
le journaliste | журналист | Le journaliste pose des questions. | Журналист задаёт вопросы.
le fonctionnaire | госслужащий | Il est fonctionnaire. | Он госслужащий.
l'artisan | ремесленник | Un artisan menuisier. | Мастер-столяр.
le traducteur | переводчик | Je travaille comme traducteur. | Я работаю переводчиком.
l'aide-soignant | санитар, помощник медсестры | Les aides-soignants sont très demandés. | Санитары очень востребованы.
le médecin généraliste | врач общей практики | Le médecin généraliste est le premier contact. | Врач общей практики — первый контакт.
le pharmacien (métier) | фармацевт | Le pharmacien me conseille. | Фармацевт даёт мне совет.
le facteur | почтальон | Le facteur passe à dix heures. | Почтальон приходит в десять.
`),

  ...parseVocab("fr-ecole", "A2", `
l'école (éducation) | школа | Les enfants vont à l'école. | Дети ходят в школу.
le collège | средняя школа (11–15 лет) | Mon fils entre au collège. | Мой сын идёт в среднюю школу.
le lycée | лицей (15–18 лет) | Elle est au lycée. | Она учится в лицее.
l'université / la fac | университет | Il étudie à la fac. | Он учится в университете.
l'étudiant | студент | Je suis étudiant en droit. | Я студент-юрист.
l'élève | ученик | Les élèves écoutent. | Ученики слушают.
le cours | урок, занятие | Le cours commence à 9 heures. | Занятие начинается в 9.
les devoirs | домашнее задание | J'ai beaucoup de devoirs. | У меня много домашки.
l'examen | экзамен | Je passe un examen demain. | Завтра я сдаю экзамен.
la note | оценка | J'ai eu une bonne note. | Я получил хорошую оценку.
le bac | экзамен на аттестат зрелости | Elle a eu son bac avec mention. | Она сдала бак с отличием.
le diplôme | диплом | J'ai un diplôme d'ingénieur. | У меня диплом инженера.
le cahier | тетрадь | Ouvrez vos cahiers. | Откройте тетради.
le stylo | ручка | Tu as un stylo ? | У тебя есть ручка? | 🖊️
le dictionnaire | словарь | Cherche dans le dictionnaire. | Поищи в словаре.
la rentrée | начало учебного года | La rentrée est le 1er septembre. | Учебный год начинается 1 сентября.
#B1
passer un examen | сдавать экзамен | Je passe le DELF B1 en juin. | В июне я сдаю DELF B1.
réussir un examen | сдать экзамен | Il a réussi son examen. | Он сдал экзамен.
la bourse | стипендия | Elle a obtenu une bourse. | Она получила стипендию.
la licence | бакалавриат | Une licence en économie. | Бакалавр экономики.
le master | магистратура | Je fais un master à Lyon. | Я учусь в магистратуре в Лионе.
l'inscription | запись, регистрация | L'inscription est ouverte. | Запись открыта.
la reconnaissance des diplômes | признание дипломов | La reconnaissance des diplômes étrangers prend du temps. | Признание иностранных дипломов занимает время.
la formation | обучение, подготовка | Une formation professionnelle. | Профессиональное обучение.
`),

  ...parseVocab("fr-sentiments", "B1", `
#A2
heureux | счастливый | Je suis très heureux. | Я очень счастлив. | 😊
la peur | страх | J'ai peur des chiens. | Я боюсь собак. | 😨
la colère | гнев | Il est en colère. | Он злится. | 😠
l'amour | любовь | L'amour de ma vie. | Любовь всей моей жизни. | ❤️
l'amitié | дружба | Une belle amitié. | Прекрасная дружба.
surpris | удивлённый | Je suis surpris ! | Я удивлён!
#B1
la joie | радость | Elle pleure de joie. | Она плачет от радости.
la tristesse | грусть | Une grande tristesse. | Большая грусть.
la jalousie | ревность | La jalousie détruit le couple. | Ревность разрушает пару.
la confiance | доверие | J'ai confiance en toi. | Я тебе доверяю.
la honte | стыд | J'ai honte. | Мне стыдно.
manquer à | скучать (кто-то кому-то не хватает) | Tu me manques. | Я по тебе скучаю.
tomber amoureux | влюбиться | Il est tombé amoureux d'elle. | Он в неё влюбился. | 😍
se disputer | ссориться | Ils se disputent souvent. | Они часто ссорятся.
se réconcilier | мириться | Ils se sont réconciliés. | Они помирились.
rompre | расставаться | Ils ont rompu. | Они расстались. | 💔
le couple | пара | Un jeune couple. | Молодая пара.
seul | один, одинокий | Je me sens seul. | Мне одиноко.
soulagé | испытывающий облегчение | Je suis soulagé. | У меня отлегло.
énervé | раздражённый | Il est énervé. | Он раздражён.
reconnaissant | благодарный | Je vous suis reconnaissant. | Я вам признателен.
#B2
la nostalgie | ностальгия | J'ai la nostalgie de mon enfance. | Я скучаю по детству.
bouleversé | потрясённый | Elle était bouleversée. | Она была потрясена.
vexé | обиженный | Il est vexé. | Он обиделся.
`),

  ...parseVocab("fr-culture", "B1", `
le livre | книга | Un livre passionnant. | Увлекательная книга. | 📕
le roman | роман | Un roman de Victor Hugo. | Роман Виктора Гюго.
l'écrivain | писатель | Un écrivain célèbre. | Знаменитый писатель.
le poème | стихотворение | Un poème de Baudelaire. | Стихотворение Бодлера.
le tableau | картина | Un tableau de Monet. | Картина Моне. | 🖼️
le peintre | художник | Les peintres impressionnistes. | Художники-импрессионисты.
la chanson | песня | Une chanson d'Édith Piaf. | Песня Эдит Пиаф. | 🎵
le chanteur | певец | Un chanteur populaire. | Популярный певец. | 🎤
le film | фильм | Un film d'auteur. | Авторский фильм. | 🎬
le réalisateur | режиссёр | Le réalisateur a gagné un prix. | Режиссёр получил премию.
l'acteur / l'actrice | актёр / актриса | Une actrice connue. | Известная актриса.
les sous-titres | субтитры | Un film avec sous-titres. | Фильм с субтитрами.
le spectacle | спектакль, шоу | Un beau spectacle. | Прекрасное шоу.
le patrimoine | наследие | Le patrimoine culturel. | Культурное наследие.
le château | замок | Les châteaux de la Loire. | Замки Луары. | 🏰
la cathédrale | собор | La cathédrale Notre-Dame. | Собор Парижской Богоматери.
#B2
l'œuvre | произведение | Une œuvre d'art. | Произведение искусства.
la critique | критика, рецензия | Le film a reçu de bonnes critiques. | Фильм получил хорошие отзывы.
le siècle des Lumières | эпоха Просвещения | Voltaire est un philosophe des Lumières. | Вольтер — философ Просвещения.
la Révolution française | Французская революция | La Révolution française a commencé en 1789. | Французская революция началась в 1789 году.
la francophonie | франкофония | La francophonie compte des centaines de millions de locuteurs. | Франкофония насчитывает сотни миллионов говорящих.
`),

  ...parseVocab("fr-urgences", "B1", `
#A2
au secours ! | помогите! | Au secours ! Il y a un accident ! | Помогите! Авария!
l'urgence | экстренный случай | C'est une urgence ! | Это срочно! | 🆘
la police | полиция | Appelez la police ! | Вызовите полицию! | 🚓
le commissariat | полицейский участок | Où est le commissariat ? | Где полицейский участок?
#B1
le SAMU | скорая медицинская помощь (15) | Pour une urgence médicale, appelez le 15. | При медицинской экстренной ситуации звоните 15.
le vol (crime) | кража | Je voudrais signaler un vol. | Я хочу заявить о краже.
porter plainte | подать заявление (в полицию) | J'ai porté plainte. | Я подал заявление.
le voleur | вор | Le voleur s'est enfui. | Вор сбежал.
le témoin | свидетель | Y a-t-il des témoins ? | Есть свидетели?
blessé | раненый | Il y a des blessés ? | Есть раненые?
l'incendie | пожар | Un incendie dans l'immeuble. | Пожар в здании. | 🔥
la sortie de secours | запасной выход | Où est la sortie de secours ? | Где запасной выход?
les objets trouvés | бюро находок | Demandez aux objets trouvés. | Спросите в бюро находок.
le cambriolage | ограбление квартиры | Il y a eu un cambriolage. | Квартиру ограбили.
l'arnaque | мошенничество | C'est une arnaque ! | Это мошенничество!
`),

  ...parseVocab("fr-verbes", "B2", `
s'agir de | идти речь о | Il s'agit d'un malentendu. | Речь идёт о недоразумении.
se rendre compte | осознавать | Je me suis rendu compte de mon erreur. | Я осознал свою ошибку.
s'en aller | уходить | Je m'en vais. | Я ухожу.
s'occuper de | заниматься, заботиться | Je m'occupe des enfants. | Я занимаюсь детьми.
se débrouiller | справляться, выкручиваться | Je me débrouille en français. | Я справляюсь по-французски.
avoir besoin de | нуждаться | J'ai besoin d'aide. | Мне нужна помощь.
avoir envie de | хотеть | J'ai envie d'un café. | Мне хочется кофе.
avoir l'air | выглядеть | Tu as l'air fatigué. | Ты выглядишь усталым.
avoir raison | быть правым | Tu as raison. | Ты прав.
avoir tort | быть неправым | Il a tort. | Он неправ.
faire attention | быть внимательным | Fais attention à la voiture ! | Осторожно, машина!
tenir à | дорожить; очень хотеть | Je tiens à te remercier. | Я очень хочу тебя поблагодарить.
compter sur | рассчитывать на | Tu peux compter sur moi. | Можешь на меня рассчитывать.
dépendre de | зависеть от | Ça dépend du temps. | Это зависит от погоды.
profiter de | пользоваться, наслаждаться | Profite de tes vacances ! | Наслаждайся отпуском!
se servir de | пользоваться | Je me sers de cet outil. | Я пользуюсь этим инструментом.
prévoir | предусматривать, планировать | Qu'est-ce que tu prévois ce week-end ? | Что планируешь на выходных?
obtenir | получать | J'ai obtenu mon visa. | Я получил визу.
fournir | предоставлять | Fournissez les documents. | Предоставьте документы.
exiger | требовать | Le propriétaire exige un garant. | Хозяин требует поручителя.
#C1
s'avérer | оказываться | Le projet s'est avéré difficile. | Проект оказался трудным.
mettre en place | вводить, организовывать | Mettre en place un système. | Внедрить систему.
faire face à | сталкиваться, противостоять | Faire face à une crise. | Противостоять кризису.
tenir compte de | учитывать | Il faut tenir compte du budget. | Нужно учитывать бюджет.
se rendre à | отправиться | Se rendre à la préfecture. | Явиться в префектуру.
`),

  ...parseVocab("fr-adverbes", "A2", `
très | очень | C'est très bien. | Это очень хорошо.
trop | слишком | C'est trop cher. | Это слишком дорого.
assez | достаточно; довольно | Il fait assez froid. | Довольно холодно.
beaucoup | много | Merci beaucoup ! | Большое спасибо!
peu | мало | Il mange peu. | Он мало ест.
un peu | немного | Je parle un peu français. | Я немного говорю по-французски.
déjà | уже | J'ai déjà mangé. | Я уже поел.
encore | ещё | Encore un café ? | Ещё кофе?
aussi | тоже | Moi aussi ! | Я тоже!
ici | здесь | Viens ici. | Иди сюда.
là-bas | там | La gare est là-bas. | Вокзал там.
partout | везде | J'ai cherché partout. | Я искал везде.
ensemble | вместе | On travaille ensemble. | Мы работаем вместе.
vite | быстро | Viens vite ! | Иди быстрее!
bien | хорошо | Tu parles bien français. | Ты хорошо говоришь по-французски.
mal | плохо | J'ai mal dormi. | Я плохо спал.
peut-être | может быть | Peut-être demain. | Может быть, завтра.
bien sûr | конечно | Bien sûr ! | Конечно!
d'accord | согласен, ладно | D'accord, on y va. | Ладно, пошли.
vraiment | действительно | C'est vraiment beau. | Это действительно красиво.
#B1
malheureusement | к сожалению | Malheureusement, je ne peux pas. | К сожалению, я не могу.
heureusement | к счастью | Heureusement, personne n'est blessé. | К счастью, никто не пострадал.
d'abord | сначала | D'abord, on mange. | Сначала поедим.
enfin | наконец | Enfin le week-end ! | Наконец выходные!
soudain | вдруг | Soudain, la lumière s'éteint. | Вдруг гаснет свет.
presque | почти | J'ai presque fini. | Я почти закончил.
environ | примерно | Environ une heure. | Примерно час.
au moins | по крайней мере | Au moins, il a essayé. | По крайней мере, он попытался.
quand même | всё-таки | Merci quand même ! | Всё равно спасибо!
d'habitude | обычно | D'habitude, je me lève tôt. | Обычно я встаю рано.
#B2
volontiers | охотно | Volontiers ! | С удовольствием!
davantage | больше | Il faut travailler davantage. | Нужно работать больше.
désormais | отныне | Désormais, tout sera différent. | Отныне всё будет иначе.
autrement | иначе | Dépêche-toi, autrement on rate le train. | Поторопись, иначе опоздаем на поезд.
`),

  ...parseVocab("fr-mots-pratiques", "A1", `
qui | кто | Qui est-ce ? | Кто это?
que / quoi | что | Qu'est-ce que c'est ? | Что это?
où | где, куда | Où habites-tu ? | Где ты живёшь?
quand (question) | когда | Quand pars-tu ? | Когда ты уезжаешь?
pourquoi | почему | Pourquoi tu ris ? | Почему ты смеёшься?
comment | как | Comment ça va ? | Как дела?
combien | сколько | Combien de personnes ? | Сколько человек?
quel / quelle | какой / какая | Quelle heure est-il ? | Который час?
avec | с | Un café avec du lait. | Кофе с молоком.
sans | без | Sans sucre, s'il vous plaît. | Без сахара, пожалуйста.
pour | для | C'est pour toi. | Это для тебя.
chez | у, к (кому-то) | Je suis chez moi. | Я дома.
dans | в | Dans la boîte. | В коробке.
sur | на | Sur la table. | На столе.
sous | под | Sous le lit. | Под кроватью.
devant | перед | Devant la maison. | Перед домом.
derrière | за, позади | Derrière l'église. | За церковью.
entre | между | Entre la banque et la poste. | Между банком и почтой.
il y a | есть, имеется; назад | Il y a un problème. | Есть проблема.
quelque chose | что-то | Tu veux quelque chose ? | Хочешь что-нибудь?
rien | ничего | Je ne sais rien. | Я ничего не знаю.
quelqu'un | кто-то | Quelqu'un a appelé. | Кто-то звонил.
personne | никто | Personne n'est venu. | Никто не пришёл.
tout | всё | Tout va bien. | Всё хорошо.
chaque | каждый | Chaque jour. | Каждый день.
`),
];
