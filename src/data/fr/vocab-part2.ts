import { parseVocab } from "../vocabParse";

// Français : глаголы, прилагательные, тело, одежда, покупки, транспорт, здоровье.
export const FR_PART2 = [
  ...parseVocab("fr-verbes", "A1", `
être | быть | Je suis étudiant. | Я студент.
avoir | иметь | J'ai une voiture. | У меня есть машина.
aller | идти, ехать | Je vais à Paris. | Я еду в Париж.
faire | делать | Qu'est-ce que tu fais ? | Что ты делаешь?
venir | приходить | Tu viens avec nous ? | Ты идёшь с нами?
pouvoir | мочь | Je peux vous aider ? | Могу я вам помочь?
vouloir | хотеть | Je veux un café. | Я хочу кофе.
devoir | быть должным | Je dois partir. | Мне надо уходить.
savoir | знать (уметь) | Je ne sais pas. | Я не знаю.
connaître | знать (быть знакомым) | Tu connais Marie ? | Ты знаешь Мари?
dire | говорить, сказать | Qu'est-ce qu'il dit ? | Что он говорит?
parler | говорить (на языке) | Je parle un peu français. | Я немного говорю по-французски.
prendre | брать | Je prends le bus. | Я еду на автобусе.
mettre | класть, надевать | Mets ton manteau. | Надень пальто.
voir | видеть | Je vois la mer ! | Я вижу море!
regarder | смотреть | On regarde un film. | Мы смотрим фильм.
écouter | слушать | J'écoute de la musique. | Я слушаю музыку. | 🎧
manger | есть | On mange à midi. | Мы едим в полдень.
boire | пить | Tu veux boire quelque chose ? | Хочешь что-нибудь выпить?
dormir | спать | Le bébé dort. | Малыш спит. | 😴
travailler | работать | Je travaille dans une banque. | Я работаю в банке.
habiter | жить | J'habite à Lyon. | Я живу в Лионе.
aimer | любить, нравиться | J'aime le chocolat. | Я люблю шоколад. | ❤️
acheter | покупать | J'achète du pain. | Я покупаю хлеб.
payer | платить | Je paie par carte. | Я плачу картой.
chercher | искать | Je cherche mes clés. | Я ищу ключи. | 🔍
trouver | находить | J'ai trouvé un appartement. | Я нашёл квартиру.
donner | давать | Donne-moi la main. | Дай мне руку.
ouvrir | открывать | Ouvre la porte. | Открой дверь.
fermer | закрывать | Ferme la fenêtre. | Закрой окно.
attendre | ждать | J'attends le bus. | Я жду автобус.
partir | уезжать, уходить | Le train part à huit heures. | Поезд уходит в восемь.
arriver | прибывать | J'arrive demain. | Я приезжаю завтра.
apprendre | учить, учиться | J'apprends le français. | Я учу французский. | 📚
comprendre | понимать | Je ne comprends pas. | Я не понимаю.
écrire | писать | J'écris un e-mail. | Я пишу письмо. | ✍️
lire | читать | Je lis un livre. | Я читаю книгу.
aider | помогать | Tu peux m'aider ? | Можешь мне помочь?
demander | спрашивать, просить | Je vais demander. | Я спрошу.
répondre | отвечать | Réponds à la question. | Ответь на вопрос.
#A2
oublier | забывать | J'ai oublié mon parapluie. | Я забыл зонт.
se souvenir de | помнить | Tu te souviens de lui ? | Ты его помнишь?
penser | думать | Je pense que oui. | Думаю, да.
croire | верить, полагать | Je crois qu'il a raison. | Думаю, он прав.
essayer | пытаться, примерять | Essaie encore ! | Попробуй ещё раз!
choisir | выбирать | Choisis une carte. | Выбери карту.
finir | заканчивать | Je finis à 18 heures. | Я заканчиваю в 18 часов.
commencer | начинать | Le film commence à 20 heures. | Фильм начинается в 20 часов.
perdre | терять | J'ai perdu mon portefeuille. | Я потерял кошелёк.
gagner | выигрывать; зарабатывать | Il gagne bien sa vie. | Он хорошо зарабатывает. | 🏆
envoyer | отправлять | Envoie-moi un message. | Пришли мне сообщение.
recevoir | получать | J'ai reçu ta lettre. | Я получил твоё письмо.
rencontrer | встречать | J'ai rencontré Marie au café. | Я встретил Мари в кафе.
rester | оставаться | Je reste à la maison. | Я остаюсь дома.
sortir | выходить | On sort ce soir ? | Пойдём куда-нибудь вечером?
rentrer | возвращаться домой | Je rentre tard. | Я возвращаюсь поздно.
monter | подниматься | Montez au deuxième étage. | Поднимитесь на третий этаж.
descendre | спускаться; выходить | Je descends au prochain arrêt. | Я выхожу на следующей остановке.
louer | снимать, арендовать | Nous louons un appartement. | Мы снимаем квартиру.
se lever | вставать | Je me lève à sept heures. | Я встаю в семь.
se coucher | ложиться спать | Je me couche tard. | Я поздно ложусь.
s'habiller | одеваться | Habille-toi, on part ! | Одевайся, мы уходим!
se dépêcher | торопиться | Dépêche-toi ! | Поторопись!
s'appeler | называться, зваться | Comment tu t'appelles ? | Как тебя зовут?
#B1
réussir | преуспеть, сдать | J'ai réussi mon examen. | Я сдал экзамен.
échouer | провалиться | Il a échoué au permis. | Он не сдал на права.
proposer | предлагать | Je propose une solution. | Я предлагаю решение.
expliquer | объяснять | Tu peux m'expliquer ? | Можешь мне объяснить?
conseiller | советовать | Je te conseille ce livre. | Советую тебе эту книгу.
se plaindre | жаловаться | Les voisins se plaignent du bruit. | Соседи жалуются на шум.
s'inscrire | записываться | Je me suis inscrit au cours. | Я записался на курс.
améliorer | улучшать | Je veux améliorer mon français. | Я хочу улучшить свой французский.
éviter | избегать | Évite le sucre. | Избегай сахара.
permettre | позволять | Fumer n'est pas permis ici. | Курить здесь запрещено.
`),

  ...parseVocab("fr-adjectifs", "A1", `
grand | большой, высокий | Une grande maison. | Большой дом.
petit | маленький | Un petit chien. | Маленькая собака.
bon | хороший, вкусный | Un bon restaurant. | Хороший ресторан.
mauvais | плохой | Il fait mauvais. | Погода плохая.
beau | красивый | Il fait beau aujourd'hui. | Сегодня хорошая погода.
joli | милый, красивый | Une jolie robe. | Красивое платье.
nouveau | новый | Un nouveau téléphone. | Новый телефон.
vieux | старый | Un vieux livre. | Старая книга.
jeune | молодой | Elle est jeune. | Она молодая.
cher | дорогой | C'est trop cher. | Это слишком дорого.
facile | лёгкий | C'est facile ! | Это легко!
difficile | трудный | Le français est difficile ? | Французский трудный?
content | довольный | Je suis content de te voir. | Я рад тебя видеть. | 😊
triste | грустный | Pourquoi tu es triste ? | Почему ты грустишь? | 😢
fatigué | усталый | Je suis très fatigué. | Я очень устал.
malade | больной | Je suis malade. | Я болен. | 🤒
chaud | горячий, тёплый | Le café est chaud. | Кофе горячий.
froid | холодный | L'eau est froide. | Вода холодная.
gentil | милый, добрый | Elle est très gentille. | Она очень милая.
sympa | симпатичный, приятный | Ton ami est sympa. | Твой друг приятный.
intéressant | интересный | Un livre intéressant. | Интересная книга.
ennuyeux | скучный | Le film est ennuyeux. | Фильм скучный.
libre | свободный | Tu es libre ce soir ? | Ты свободен вечером?
occupé | занятой | Je suis occupé. | Я занят.
ouvert | открытый | Le magasin est ouvert. | Магазин открыт.
fermé | закрытый | La banque est fermée. | Банк закрыт.
#A2
rapide | быстрый | Un train rapide. | Скорый поезд.
lent | медленный | Internet est lent. | Интернет медленный.
calme | спокойный | Un quartier calme. | Спокойный район.
bruyant | шумный | Les voisins sont bruyants. | Соседи шумные.
propre | чистый | La cuisine est propre. | Кухня чистая.
sale | грязный | Tes chaussures sont sales. | У тебя грязная обувь.
plein | полный | Le bus est plein. | Автобус полон.
vide | пустой | Le frigo est vide. | Холодильник пуст.
important | важный | C'est très important. | Это очень важно.
dangereux | опасный | C'est dangereux. | Это опасно. | ⚠️
poli | вежливый | Sois poli ! | Будь вежлив!
drôle | смешной | Il est très drôle. | Он очень смешной.
timide | застенчивый | Elle est un peu timide. | Она немного застенчивая.
paresseux | ленивый | Je suis paresseux aujourd'hui. | Я сегодня ленюсь.
#B1
fiable | надёжный | Un ami fiable. | Надёжный друг.
honnête | честный | Sois honnête avec moi. | Будь со мной честен.
généreux | щедрый | Il est très généreux. | Он очень щедрый.
déçu | разочарованный | Je suis déçu. | Я разочарован.
inquiet | обеспокоенный | Je suis inquiet pour lui. | Я за него волнуюсь.
fier | гордый | Je suis fier de toi. | Я горжусь тобой.
épuisé | измотанный | Je suis épuisé. | Я выбился из сил.
`),

  ...parseVocab("fr-corps-vetements", "A1", `
la tête | голова | J'ai mal à la tête. | У меня болит голова.
le visage | лицо | Un joli visage. | Красивое лицо.
les cheveux | волосы | Elle a les cheveux longs. | У неё длинные волосы.
l'œil / les yeux | глаз / глаза | Il a les yeux bleus. | У него голубые глаза. | 👁️
le nez | нос | J'ai le nez qui coule. | У меня насморк. | 👃
la bouche | рот | Ouvrez la bouche. | Откройте рот. | 👄
la dent | зуб | J'ai mal aux dents. | У меня болят зубы. | 🦷
l'oreille | ухо | J'ai mal à l'oreille. | У меня болит ухо. | 👂
le cou | шея | J'ai mal au cou. | У меня болит шея.
le dos | спина | J'ai mal au dos. | У меня болит спина.
le ventre | живот | J'ai mal au ventre. | У меня болит живот.
le bras | рука (от плеча) | Il s'est cassé le bras. | Он сломал руку. | 💪
la main | рука (кисть) | Lave-toi les mains. | Помой руки. | ✋
le doigt | палец | Je me suis coupé le doigt. | Я порезал палец.
la jambe | нога | J'ai mal à la jambe. | У меня болит нога. | 🦵
le pied | стопа, нога | Je vais à pied. | Я иду пешком. | 🦶
le genou | колено | Il a mal au genou. | У него болит колено.
le cœur | сердце | Mon cœur bat vite. | Моё сердце бьётся быстро. | ❤️
#A2
les vêtements | одежда | Des vêtements chauds. | Тёплая одежда.
le pantalon | брюки | Un pantalon noir. | Чёрные брюки. | 👖
la chemise | рубашка | Une chemise blanche. | Белая рубашка.
le t-shirt | футболка | Un t-shirt en coton. | Хлопковая футболка. | 👕
la robe | платье | Une robe d'été. | Летнее платье. | 👗
la jupe | юбка | Une jupe courte. | Короткая юбка.
le pull | свитер | Mets un pull, il fait froid. | Надень свитер, холодно.
la veste | куртка, пиджак | Une veste en cuir. | Кожаная куртка.
le manteau | пальто | Un manteau d'hiver. | Зимнее пальто. | 🧥
les chaussures | обувь | Des chaussures confortables. | Удобная обувь. | 👟
les chaussettes | носки | Des chaussettes en laine. | Шерстяные носки. | 🧦
le chapeau | шляпа | Un chapeau de paille. | Соломенная шляпа. | 👒
l'écharpe | шарф | Une écharpe chaude. | Тёплый шарф. | 🧣
les lunettes | очки | J'ai besoin de lunettes. | Мне нужны очки. | 👓
le sac | сумка | Un sac à main. | Дамская сумочка. | 👜
le parapluie | зонт | N'oublie pas ton parapluie. | Не забудь зонт. | ☂️
porter | носить | Elle porte une robe rouge. | На ней красное платье.
essayer (vêtements) | примерять | Je peux essayer ce pull ? | Можно примерить этот свитер?
la taille | размер | Quelle est votre taille ? | Какой у вас размер?
la cabine d'essayage | примерочная | La cabine est au fond. | Примерочная в глубине.
`),

  ...parseVocab("fr-achats", "A2", `
le prix | цена | Quel est le prix ? | Какая цена?
combien ça coûte ? | сколько это стоит? | Combien coûte ce sac ? | Сколько стоит эта сумка?
l'argent | деньги | Je n'ai pas d'argent. | У меня нет денег. | 💰
l'euro | евро | Ça fait dix euros. | С вас десять евро. | 💶
la monnaie | сдача; мелочь | Gardez la monnaie. | Сдачи не надо.
en espèces | наличными | Je paie en espèces. | Я плачу наличными.
par carte | картой | Je peux payer par carte ? | Можно оплатить картой? | 💳
le ticket de caisse | кассовый чек | Voici votre ticket. | Вот ваш чек.
la caisse | касса | Passez à la caisse. | Пройдите на кассу.
les soldes | распродажа | Les soldes commencent en janvier. | Распродажи начинаются в январе.
la réduction | скидка | Il y a une réduction de 20 %. | Скидка 20%.
une promotion | акция | Les pommes sont en promotion. | Яблоки по акции.
le client | клиент | Le client est roi. | Клиент — король.
le vendeur / la vendeuse | продавец | La vendeuse est sympa. | Продавщица приятная.
rembourser | возмещать | Vous pouvez me rembourser ? | Вы можете вернуть мне деньги?
échanger | обменивать | Je voudrais échanger ce pull. | Я хотел бы обменять этот свитер.
la livraison | доставка | La livraison est gratuite. | Доставка бесплатная. | 🚚
le colis | посылка | J'attends un colis. | Я жду посылку. | 📦
commander en ligne | заказать онлайн | J'ai commandé en ligne. | Я заказал онлайн.
#B1
la garantie | гарантия | Deux ans de garantie. | Два года гарантии.
la réclamation | претензия | Je voudrais faire une réclamation. | Я хотел бы подать претензию.
d'occasion | подержанный | Une voiture d'occasion. | Подержанная машина.
une bonne affaire | выгодная покупка | C'est une bonne affaire ! | Это выгодная покупка!
`),

  ...parseVocab("fr-transports", "A1", `
la voiture | машина | Je vais au travail en voiture. | Я езжу на работу на машине. | 🚗
le bus | автобус | Le bus est en retard. | Автобус опаздывает. | 🚌
le métro | метро | Je prends le métro. | Я еду на метро. | 🚇
le train | поезд | Le train pour Marseille. | Поезд в Марсель. | 🚆
le TGV | скоростной поезд | Le TGV roule à 300 km/h. | TGV едет со скоростью 300 км/ч.
le tram | трамвай | Le tram passe toutes les cinq minutes. | Трамвай ходит каждые пять минут. | 🚊
l'avion | самолёт | L'avion décolle à midi. | Самолёт взлетает в полдень. | ✈️
le vélo | велосипед | Je vais à vélo. | Я езжу на велосипеде. | 🚲
le taxi | такси | Appelle un taxi ! | Вызови такси! | 🚕
à pied | пешком | J'y vais à pied. | Я иду туда пешком. | 🚶
l'aéroport | аэропорт | L'aéroport Charles-de-Gaulle. | Аэропорт Шарль-де-Голль.
l'arrêt de bus | автобусная остановка | L'arrêt est en face. | Остановка напротив. | 🚏
le billet | билет | Un billet pour Lyon, s'il vous plaît. | Билет до Лиона, пожалуйста. | 🎫
#A2
l'aller simple | билет в одну сторону | Un aller simple pour Nice. | Билет в Ниццу в одну сторону.
l'aller-retour | туда и обратно | Un aller-retour, s'il vous plaît. | Туда и обратно, пожалуйста.
le quai | платформа | Le train part du quai 5. | Поезд отходит с пятой платформы.
la voie | путь | Voie B. | Путь B.
composter | компостировать | N'oubliez pas de composter votre billet. | Не забудьте прокомпостировать билет.
la correspondance | пересадка | Correspondance pour la ligne 4. | Пересадка на четвёртую линию.
l'horaire | расписание | Regarde les horaires. | Посмотри расписание.
rater | опоздать на | J'ai raté le train. | Я опоздал на поезд.
les bouchons | пробки | Il y a des bouchons sur l'autoroute. | На трассе пробки.
l'autoroute | автомагистраль | L'autoroute est payante. | Платная автомагистраль. | 🛣️
le péage | платный пункт | On paie au péage. | Платим на пункте оплаты.
l'essence | бензин | Le prix de l'essence. | Цена бензина. | ⛽
la station-service | заправка | Arrête-toi à la station-service. | Остановись на заправке.
se garer | парковаться | Je ne trouve pas où me garer. | Не могу найти, где припарковаться. | 🅿️
le permis de conduire | водительские права | J'ai mon permis depuis dix ans. | У меня права уже десять лет. | 🪪
#B1
l'amende | штраф | J'ai eu une amende. | Я получил штраф.
l'accident | авария | Il y a eu un accident. | Произошла авария. | 💥
la panne | поломка | Ma voiture est en panne. | Моя машина сломалась.
le contrôle technique | техосмотр | Le contrôle technique est obligatoire. | Техосмотр обязателен.
la carte grise | свидетельство о регистрации авто | Montrez-moi la carte grise. | Покажите техпаспорт.
le pass Navigo | проездной (Париж) | Mon pass Navigo est mensuel. | У меня месячный проездной Navigo.
la grève | забастовка | Grève des transports demain ! | Завтра забастовка транспорта!
`),

  ...parseVocab("fr-sante", "A2", `
le médecin | врач | Je dois voir un médecin. | Мне нужно к врачу. | 🧑‍⚕️
le docteur | доктор | Le docteur arrive. | Доктор идёт.
le dentiste | стоматолог | J'ai rendez-vous chez le dentiste. | У меня запись к стоматологу. | 🦷
l'hôpital (santé) | больница | Il est à l'hôpital. | Он в больнице.
les urgences | неотложная помощь | On est allés aux urgences. | Мы поехали в отделение неотложной помощи.
le rendez-vous | запись, встреча | Je voudrais prendre rendez-vous. | Я хотел бы записаться на приём.
avoir mal à | болеть (о части тела) | J'ai mal à la gorge. | У меня болит горло.
la fièvre | температура | J'ai de la fièvre. | У меня температура. | 🤒
le rhume | простуда | J'ai un rhume. | У меня простуда. | 🤧
la grippe | грипп | Il a la grippe. | У него грипп.
la toux | кашель | Une toux sèche. | Сухой кашель.
le médicament | лекарство | Prenez ce médicament. | Принимайте это лекарство. | 💊
le comprimé | таблетка | Un comprimé trois fois par jour. | По таблетке три раза в день.
l'ordonnance | рецепт | Il faut une ordonnance. | Нужен рецепт.
le pharmacien | фармацевт | Demandez au pharmacien. | Спросите фармацевта.
la blessure | травма | Une blessure légère. | Лёгкая травма.
l'ambulance | скорая помощь | Appelez une ambulance ! | Вызовите скорую! | 🚑
#B1
le médecin traitant | лечащий (семейный) врач | Il faut déclarer un médecin traitant. | Нужно указать своего лечащего врача.
la carte Vitale | карта медстрахования | N'oubliez pas votre carte Vitale. | Не забудьте карту Vitale.
la mutuelle | дополнительная медстраховка | La mutuelle rembourse le reste. | Остальное возмещает доп. страховка.
la Sécurité sociale | система социального страхования | La Sécu rembourse 70 %. | Соцстрах возмещает 70%.
l'arrêt maladie | больничный | Le médecin m'a donné un arrêt maladie. | Врач выписал мне больничный.
le spécialiste | специалист | Il m'envoie chez un spécialiste. | Он направляет меня к специалисту.
la prise de sang | анализ крови | Faites une prise de sang à jeun. | Сдайте кровь натощак.
l'allergie | аллергия | J'ai une allergie aux noix. | У меня аллергия на орехи.
le vaccin | вакцина | Le vaccin est gratuit. | Вакцина бесплатная. | 💉
guérir | выздоравливать | Il est guéri. | Он выздоровел.
la tension | давление | Votre tension est un peu haute. | У вас давление немного высокое.
#B2
la maladie chronique | хроническое заболевание | Il souffre d'une maladie chronique. | Он страдает хроническим заболеванием.
le diagnostic | диагноз | Le diagnostic est clair. | Диагноз ясен.
le dépassement d'honoraires | доплата сверх тарифа (врачу) | Ce médecin pratique des dépassements d'honoraires. | Этот врач берёт доплату сверх тарифа.
`),
];
