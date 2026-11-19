import { parseVocab } from "../vocabParse";

// Français B1–C2 : работа, госуслуги, деньги, технологии, путешествия, общество, идиомы.
export const FR_PART3 = [
  ...parseVocab("fr-travail", "B1", `
#A2
le travail | работа | Je cherche du travail. | Я ищу работу.
le bureau | офис; письменный стол | Je suis au bureau. | Я в офисе.
le collègue | коллега | Mes collègues sont sympas. | Мои коллеги приятные.
le patron / la patronne | начальник / начальница | Le patron est en vacances. | Шеф в отпуске.
l'entreprise | предприятие | Une grande entreprise. | Крупное предприятие.
le salaire | зарплата | Le salaire est versé le 30. | Зарплату перечисляют 30-го.
à temps plein | полный рабочий день | Je travaille à temps plein. | Я работаю полный день.
à temps partiel | неполный рабочий день | Elle travaille à temps partiel. | Она работает неполный день.
#B1
l'emploi | занятость, работа | Il a trouvé un emploi. | Он нашёл работу.
le poste | должность | Un poste de comptable. | Должность бухгалтера.
l'offre d'emploi | вакансия | J'ai vu une offre d'emploi. | Я видел вакансию.
le CV | резюме | Envoyez-nous votre CV. | Пришлите нам резюме.
la lettre de motivation | мотивационное письмо | Écrivez une lettre de motivation. | Напишите мотивационное письмо.
l'entretien d'embauche | собеседование | J'ai un entretien demain. | У меня завтра собеседование.
embaucher | нанимать | Ils embauchent des développeurs. | Они нанимают разработчиков.
licencier | увольнять | Il a été licencié. | Его уволили.
démissionner | увольняться | J'ai démissionné. | Я уволился.
le contrat | контракт | Signez le contrat. | Подпишите контракт.
le CDI | бессрочный трудовой договор | J'ai enfin un CDI ! | У меня наконец бессрочный договор!
le CDD | срочный трудовой договор | Un CDD de six mois. | Срочный договор на полгода.
la période d'essai | испытательный срок | La période d'essai dure trois mois. | Испытательный срок три месяца.
le stage | стажировка | Je fais un stage. | Я прохожу стажировку.
les congés payés | оплачиваемый отпуск | Cinq semaines de congés payés. | Пять недель оплачиваемого отпуска.
la réunion | совещание | La réunion commence à 10 heures. | Совещание начинается в 10.
le chômage | безработица | Il est au chômage. | Он безработный.
France Travail | государственная служба занятости | Inscrivez-vous à France Travail. | Встаньте на учёт в France Travail.
la retraite | пенсия | Mon père est à la retraite. | Мой отец на пенсии.
le télétravail | удалённая работа | Je fais du télétravail le vendredi. | По пятницам я работаю удалённо. | 🏠
le syndicat | профсоюз | Le syndicat appelle à la grève. | Профсоюз призывает к забастовке.
la fiche de paie | расчётный лист | Vérifiez votre fiche de paie. | Проверьте расчётный лист.
le SMIC | минимальная зарплата | Il est payé au SMIC. | Он получает минимальную зарплату.
#B2
la promotion (travail) | повышение | Elle a obtenu une promotion. | Её повысили.
la rupture conventionnelle | расторжение договора по соглашению | Ils ont signé une rupture conventionnelle. | Они расторгли договор по соглашению сторон.
la charge de travail | рабочая нагрузка | La charge de travail est énorme. | Нагрузка огромная.
le burn-out | выгорание | Il a fait un burn-out. | У него было выгорание.
le préavis | срок уведомления | Le préavis est d'un mois. | Срок уведомления — месяц.
`),

  ...parseVocab("fr-administration", "B1", `
la préfecture | префектура | Rendez-vous à la préfecture. | Встреча в префектуре.
le titre de séjour | вид на жительство | Je dois renouveler mon titre de séjour. | Мне нужно продлить ВНЖ.
le récépissé | временная справка (о подаче) | En attendant, vous recevez un récépissé. | Пока ждёте, вам выдают временную справку.
le visa | виза | Un visa long séjour. | Долгосрочная виза.
la carte de résident | карта резидента (10 лет) | Après cinq ans, on peut demander une carte de résident. | Через пять лет можно запросить карту резидента.
la naturalisation | натурализация | Il a déposé une demande de naturalisation. | Он подал на натурализацию.
la nationalité | гражданство | Elle a la nationalité française. | У неё французское гражданство.
la mairie (admin) | мэрия | Allez à la mairie pour l'acte de naissance. | За свидетельством о рождении — в мэрию.
la CAF | касса семейных пособий | La CAF verse l'aide au logement. | CAF выплачивает пособие на жильё.
l'APL | пособие на аренду жилья | J'ai droit aux APL. | Мне положено пособие на аренду.
la CPAM | касса медицинского страхования | Envoyez le formulaire à la CPAM. | Отправьте форму в CPAM.
les impôts | налоги | Je déclare mes impôts en ligne. | Я подаю налоговую декларацию онлайн.
la déclaration de revenus | декларация о доходах | La déclaration de revenus est en mai. | Декларацию о доходах подают в мае.
le numéro fiscal | налоговый номер | Votre numéro fiscal est sur l'avis d'impôt. | Налоговый номер указан в уведомлении.
l'avis d'imposition | налоговое уведомление | J'ai reçu mon avis d'imposition. | Я получил налоговое уведомление.
le numéro de sécurité sociale | номер соцстрахования | Il faut un numéro de sécurité sociale. | Нужен номер соцстрахования.
le justificatif de domicile | подтверждение адреса | Une facture d'électricité comme justificatif de domicile. | Счёт за электричество как подтверждение адреса.
la pièce d'identité | удостоверение личности | Présentez une pièce d'identité. | Предъявите удостоверение личности. | 🪪
le passeport (admin) | паспорт | Mon passeport expire bientôt. | Мой паспорт скоро истекает. | 🛂
l'acte de naissance | свидетельство о рождении | Un acte de naissance traduit. | Переведённое свидетельство о рождении.
la traduction assermentée | присяжный (заверенный) перевод | Il faut une traduction assermentée. | Нужен заверенный перевод.
l'apostille | апостиль | Le document doit porter une apostille. | На документе должен быть апостиль.
le formulaire | бланк | Remplissez ce formulaire. | Заполните этот бланк. | 📝
remplir | заполнять | Remplissez en majuscules. | Заполняйте печатными буквами.
signer | подписывать | Signez ici. | Подпишите здесь. | ✍️
la signature | подпись | Votre signature, s'il vous plaît. | Вашу подпись, пожалуйста.
la photocopie | ксерокопия | Apportez une photocopie. | Принесите ксерокопию.
l'original | оригинал | L'original et une copie. | Оригинал и копия.
le dossier | досье, пакет документов | Votre dossier est incomplet. | Ваш пакет документов неполный.
déposer une demande | подать заявление | J'ai déposé ma demande en ligne. | Я подал заявление онлайн.
renouveler | продлевать | Je dois renouveler mon passeport. | Мне нужно продлить паспорт.
le délai | срок | Le délai est de deux mois. | Срок — два месяца.
le rendez-vous en ligne | онлайн-запись | Prenez rendez-vous en ligne. | Запишитесь онлайн.
le guichet | окошко (приёма) | Allez au guichet numéro 3. | Подойдите к окну номер 3.
le timbre fiscal | гербовая марка (пошлина) | Achetez un timbre fiscal en ligne. | Купите гербовую марку онлайн.
#B2
le recours | обжалование | Vous pouvez faire un recours. | Вы можете обжаловать.
le refus | отказ | Il a reçu un refus. | Он получил отказ.
l'OFII | Управление по иммиграции и интеграции | Convocation à l'OFII pour la visite médicale. | Вызов в OFII на медосмотр.
le contrat d'intégration républicaine | договор республиканской интеграции | Il a signé le contrat d'intégration républicaine. | Он подписал договор республиканской интеграции.
le regroupement familial | воссоединение семьи | Une demande de regroupement familial. | Заявление на воссоединение семьи.
le passeport talent | «паспорт таланта» (ВНЖ для специалистов) | Elle a obtenu un passeport talent. | Она получила «паспорт таланта».
la procuration | доверенность | Il a fait une procuration à sa femme. | Он оформил доверенность на жену.
`),

  ...parseVocab("fr-argent", "B1", `
le compte bancaire | банковский счёт | Ouvrir un compte bancaire. | Открыть банковский счёт.
le RIB | банковские реквизиты | Envoyez-moi votre RIB. | Пришлите мне ваши реквизиты.
le virement | перевод | Je fais un virement. | Я делаю перевод.
le prélèvement | автосписание | Le loyer est payé par prélèvement. | Аренда оплачивается автосписанием.
retirer de l'argent | снимать деньги | Je retire de l'argent au distributeur. | Я снимаю деньги в банкомате.
le distributeur | банкомат | Il y a un distributeur près d'ici ? | Здесь есть банкомат? | 🏧
le code | ПИН-код | Tapez votre code. | Введите ПИН-код.
le solde | баланс | Mon solde est négatif. | У меня отрицательный баланс.
le découvert | овердрафт | Je suis à découvert. | Я ушёл в минус.
le prêt | кредит, заём | Un prêt immobilier. | Ипотечный кредит.
le crédit | кредит | Acheter à crédit. | Купить в кредит.
les intérêts | проценты | Les taux d'intérêt augmentent. | Процентные ставки растут.
économiser | экономить, копить | J'économise pour un voyage. | Я коплю на путешествие.
le livret A | сберегательный счёт (Livret A) | J'ai mis de l'argent sur mon livret A. | Я положил деньги на Livret A.
dépenser | тратить | Je dépense trop. | Я слишком много трачу.
la dette | долг | Il a des dettes. | У него долги.
le budget | бюджет | Un budget serré. | Ограниченный бюджет.
l'assurance | страховка | L'assurance habitation est obligatoire. | Страховка жилья обязательна.
l'assurance habitation | страхование жилья | Le propriétaire demande une attestation d'assurance habitation. | Хозяин требует справку о страховке жилья.
le brut / le net | брутто / нетто | 3000 euros brut, environ 2340 net. | 3000 брутто, около 2340 нетто.
`),

  ...parseVocab("fr-numerique", "B1", `
#A2
l'ordinateur | компьютер | Mon ordinateur est lent. | Мой компьютер медленный. | 💻
le portable | мобильный телефон; ноутбук | J'ai oublié mon portable. | Я забыл телефон. | 📱
l'application | приложение | Téléchargez l'application. | Скачайте приложение.
le mot de passe | пароль | J'ai oublié mon mot de passe. | Я забыл пароль. | 🔑
le site | сайт | Le site de la préfecture. | Сайт префектуры.
le courriel / le mail | электронное письмо | Je t'envoie un mail. | Я пришлю тебе письмо. | 📧
le wifi | вайфай | Quel est le code wifi ? | Какой пароль от вайфая? | 📶
#B1
télécharger | скачивать | Télécharge le fichier. | Скачай файл.
se connecter | войти (в систему) | Je n'arrive pas à me connecter. | Не могу войти.
l'identifiant | логин | Entrez votre identifiant. | Введите логин.
le compte (en ligne) | аккаунт | Créez un compte. | Создайте аккаунт.
le fichier | файл | Enregistre le fichier. | Сохрани файл. | 📄
la pièce jointe | вложение | Voir la pièce jointe. | См. вложение. | 📎
enregistrer | сохранять | N'oublie pas d'enregistrer. | Не забудь сохранить.
supprimer | удалять | Supprime ce message. | Удали это сообщение.
le chargeur | зарядка | Tu as un chargeur ? | У тебя есть зарядка? | 🔌
la batterie | аккумулятор | Ma batterie est vide. | У меня сел аккумулятор. | 🔋
les réseaux sociaux | соцсети | Elle passe des heures sur les réseaux sociaux. | Она часами сидит в соцсетях.
la mise à jour | обновление | Une mise à jour est disponible. | Доступно обновление.
le lien | ссылка | Clique sur le lien. | Нажми на ссылку. | 🔗
#B2
l'intelligence artificielle | искусственный интеллект | L'intelligence artificielle change le travail. | ИИ меняет работу. | 🤖
les données personnelles | персональные данные | Protégez vos données personnelles. | Защищайте свои персональные данные.
FranceConnect | госвход (единый вход на госпорталы) | Connectez-vous avec FranceConnect. | Войдите через FranceConnect.
la cybersécurité | кибербезопасность | La cybersécurité est essentielle. | Кибербезопасность необходима.
`),

  ...parseVocab("fr-voyage", "A2", `
le voyage | путешествие | Bon voyage ! | Счастливого пути!
l'hôtel | отель | Un hôtel près de la gare. | Отель рядом с вокзалом. | 🏨
la réservation | бронь | J'ai une réservation au nom de Petrov. | У меня бронь на имя Петров.
réserver | бронировать | J'ai réservé une chambre. | Я забронировал номер.
la chambre double | двухместный номер | Une chambre double pour deux nuits. | Двухместный номер на две ночи.
la valise | чемодан | Ma valise est lourde. | Мой чемодан тяжёлый. | 🧳
les bagages | багаж | Où puis-je laisser mes bagages ? | Где я могу оставить багаж?
le passeport | паспорт | Votre passeport, s'il vous plaît. | Ваш паспорт, пожалуйста.
la plage | пляж | On va à la plage. | Мы идём на пляж. | 🏖️
la mer | море | La mer est calme. | Море спокойное. | 🌊
la montagne | горы | On part à la montagne. | Мы едем в горы. | ⛰️
le touriste | турист | Il y a beaucoup de touristes. | Много туристов.
visiter | посещать (место) | On visite le château. | Мы осматриваем замок.
le plan | карта города | Vous avez un plan de la ville ? | У вас есть карта города? | 🗺️
l'office de tourisme | туристический офис | Demandez à l'office de tourisme. | Спросите в туристическом офисе.
#B1
le vol | рейс | Le vol est annulé. | Рейс отменён.
la carte d'embarquement | посадочный талон | Votre carte d'embarquement. | Ваш посадочный талон.
la porte d'embarquement | выход на посадку | Porte 12. | Выход 12.
la douane | таможня | Rien à déclarer à la douane. | На таможне нечего декларировать.
le décalage horaire | разница во времени | J'ai du mal avec le décalage horaire. | Мне тяжело из-за смены часовых поясов.
le gîte | загородный дом (для отдыха) | On loue un gîte en Bretagne. | Мы снимаем дом в Бретани.
complet | всё занято | L'hôtel est complet. | В отеле нет мест.
annuler | отменять | Je dois annuler ma réservation. | Мне нужно отменить бронь.
`),

  ...parseVocab("fr-loisirs", "A2", `
le sport | спорт | Je fais du sport. | Я занимаюсь спортом.
jouer au foot | играть в футбол | On joue au foot le samedi. | По субботам мы играем в футбол. | ⚽
nager | плавать | J'aime nager. | Я люблю плавать. | 🏊
courir | бегать | Je cours tous les matins. | Я бегаю каждое утро. | 🏃
la randonnée | поход | On fait une randonnée. | Мы идём в поход. | 🥾
le cinéma (loisirs) | кино | J'adore le cinéma français. | Обожаю французское кино.
la musique | музыка | J'écoute de la musique. | Я слушаю музыку. | 🎵
lire (loisirs) | читать | J'aime lire le soir. | Люблю читать вечером.
danser | танцевать | On va danser ? | Пойдём танцевать? | 💃
chanter | петь | Elle chante très bien. | Она очень хорошо поёт. | 🎤
peindre | рисовать красками | Il peint des paysages. | Он пишет пейзажи. | 🎨
le jeu vidéo | видеоигра | Il joue aux jeux vidéo. | Он играет в видеоигры. | 🎮
la fête | праздник; вечеринка | Tu viens à la fête ? | Ты придёшь на вечеринку? | 🎉
le concert | концерт | Un concert en plein air. | Концерт под открытым небом.
l'exposition | выставка | Une exposition au musée d'Orsay. | Выставка в музее Орсе.
le théâtre | театр | On va au théâtre. | Мы идём в театр. | 🎭
#B1
le loisir | досуг, хобби | Quels sont tes loisirs ? | Какие у тебя увлечения?
s'intéresser à | интересоваться | Je m'intéresse à l'histoire. | Я интересуюсь историей.
être passionné de | увлекаться | Il est passionné de photo. | Он увлекается фотографией.
le bénévolat | волонтёрство | Elle fait du bénévolat. | Она занимается волонтёрством.
`),

  ...parseVocab("fr-meteo-nature", "A1", `
le temps (météo) | погода | Quel temps fait-il ? | Какая погода?
il fait beau | хорошая погода | Il fait beau aujourd'hui. | Сегодня хорошая погода. | 🌞
il fait chaud | жарко | Il fait très chaud. | Очень жарко. | 🥵
il fait froid | холодно | Il fait froid en hiver. | Зимой холодно.
il pleut | идёт дождь | Il pleut depuis ce matin. | Дождь идёт с утра. | 🌧️
il neige | идёт снег | Il neige ! | Идёт снег! | 🌨️
le soleil | солнце | Le soleil brille. | Светит солнце. | ☀️
la pluie | дождь | Sous la pluie. | Под дождём.
le vent | ветер | Il y a du vent. | Ветрено. | 🌬️
le nuage | облако | Des nuages gris. | Серые облака. | ☁️
#A2
l'orage | гроза | Un orage arrive. | Надвигается гроза. | ⛈️
la météo | прогноз погоды | La météo annonce de la pluie. | Прогноз обещает дождь.
le degré | градус | Il fait vingt degrés. | Двадцать градусов. | 🌡️
la forêt | лес | Une promenade en forêt. | Прогулка в лесу. | 🌲
la rivière | река | La rivière est froide. | Река холодная.
le lac | озеро | Le lac d'Annecy. | Озеро Анси.
l'arbre | дерево | Un grand arbre. | Большое дерево. | 🌳
la fleur | цветок | De belles fleurs. | Красивые цветы. | 🌸
le chien | собака | Mon chien s'appelle Rex. | Мою собаку зовут Рекс. | 🐕
le chat | кошка | Le chat dort. | Кошка спит. | 🐈
l'oiseau | птица | Un oiseau chante. | Поёт птица. | 🐦
le cheval | лошадь | Elle monte à cheval. | Она ездит верхом. | 🐎
#B1
l'environnement | окружающая среда | Protéger l'environnement. | Защищать окружающую среду. | 🌱
le réchauffement climatique | глобальное потепление | Le réchauffement climatique s'accélère. | Глобальное потепление ускоряется.
la pollution | загрязнение | La pollution de l'air. | Загрязнение воздуха.
recycler | перерабатывать | On recycle le verre. | Мы перерабатываем стекло. | ♻️
le tri sélectif | раздельный сбор мусора | Le tri sélectif est obligatoire. | Раздельный сбор обязателен.
les énergies renouvelables | возобновляемые источники энергии | Investir dans les énergies renouvelables. | Вкладываться в возобновляемую энергию.
la canicule | сильная жара | Alerte canicule à Paris. | В Париже объявлена угроза сильной жары.
`),

  ...parseVocab("fr-societe", "B2", `
le gouvernement | правительство | Le gouvernement a annoncé une réforme. | Правительство объявило реформу.
le président | президент | Le président de la République. | Президент Республики.
le Premier ministre | премьер-министр | Le Premier ministre démissionne. | Премьер-министр уходит в отставку.
l'Assemblée nationale | Национальное собрание | Le texte est voté à l'Assemblée nationale. | Текст принят в Национальном собрании.
les élections | выборы | Les élections présidentielles. | Президентские выборы. | 🗳️
voter | голосовать | Tu as voté ? | Ты проголосовал?
le parti | партия | Un parti politique. | Политическая партия.
la loi | закон | La loi est entrée en vigueur. | Закон вступил в силу.
la manifestation | демонстрация | Une manifestation contre la réforme. | Демонстрация против реформы.
la laïcité | светскость (отделение религии от государства) | La laïcité est un principe républicain. | Светскость — республиканский принцип.
l'égalité | равенство | Liberté, égalité, fraternité. | Свобода, равенство, братство.
la liberté d'expression | свобода слова | La liberté d'expression est protégée. | Свобода слова защищена.
le chômage (société) | безработица | Le taux de chômage baisse. | Уровень безработицы снижается.
la pauvreté | бедность | Lutter contre la pauvreté. | Бороться с бедностью.
l'immigration | иммиграция | Le débat sur l'immigration. | Дебаты об иммиграции.
l'intégration | интеграция | L'intégration passe par la langue. | Интеграция начинается с языка.
la retraite (société) | пенсионная система | La réforme des retraites. | Пенсионная реформа.
la justice | правосудие | Faire confiance à la justice. | Доверять правосудию.
le tribunal | суд | L'affaire passe au tribunal. | Дело рассматривается в суде.
l'avocat | адвокат | J'ai besoin d'un avocat. | Мне нужен адвокат.
#C1
la mondialisation | глобализация | Les effets de la mondialisation. | Последствия глобализации.
les inégalités | неравенство | Les inégalités se creusent. | Неравенство растёт.
le pouvoir d'achat | покупательная способность | Le pouvoir d'achat recule. | Покупательная способность падает.
la décentralisation | децентрализация | La décentralisation renforce les régions. | Децентрализация усиливает регионы.
l'abstention | неявка на выборы | Un taux d'abstention record. | Рекордный уровень неявки.
`),

  ...parseVocab("fr-connecteurs", "B1", `
#A2
mais | но | C'est bon, mais cher. | Хорошо, но дорого.
parce que | потому что | Je reste, parce que je suis malade. | Я остаюсь, потому что болен.
donc | поэтому, значит | Il pleut, donc je reste. | Идёт дождь, поэтому я остаюсь.
alors | тогда, итак | Alors, on y va ? | Ну что, идём?
puis / ensuite | потом, затем | D'abord on mange, ensuite on sort. | Сначала едим, потом выходим.
quand | когда | Quand tu arrives, appelle-moi. | Когда приедешь, позвони мне.
si | если | Si tu veux, on y va. | Если хочешь, пойдём.
#B1
pourtant | однако | Il est riche, pourtant il n'est pas heureux. | Он богат, однако несчастлив.
cependant | тем не менее | Cependant, il faut être prudent. | Тем не менее нужно быть осторожным.
par contre | зато, а вот | Le loyer est cher, par contre le quartier est calme. | Аренда дорогая, зато район спокойный.
grâce à | благодаря | Grâce à toi, j'ai réussi. | Благодаря тебе я справился.
à cause de | из-за | À cause de la grève, je suis en retard. | Из-за забастовки я опоздал.
bien que | хотя (+ subjonctif) | Bien qu'il soit tard, il travaille. | Хотя уже поздно, он работает.
pour que | чтобы (+ subjonctif) | Je parle lentement pour que tu comprennes. | Я говорю медленно, чтобы ты понял.
afin de | с целью | Afin de réussir, il travaille dur. | Чтобы преуспеть, он много работает.
au lieu de | вместо | Au lieu de travailler, il dort. | Вместо того чтобы работать, он спит.
d'ailleurs | впрочем, кстати | D'ailleurs, je n'avais pas faim. | Впрочем, я и не был голоден.
en effet | действительно | En effet, c'est une bonne idée. | Действительно, это хорошая идея.
#B2
néanmoins | тем не менее | Le projet est risqué ; néanmoins, il mérite d'être tenté. | Проект рискованный; тем не менее стоит попробовать.
toutefois | однако | Toutefois, des questions restent ouvertes. | Однако вопросы остаются открытыми.
en revanche | напротив, зато | En revanche, les résultats sont bons. | Зато результаты хорошие.
par conséquent | следовательно | Par conséquent, nous devons agir. | Следовательно, мы должны действовать.
c'est pourquoi | вот почему | C'est pourquoi je suis parti. | Вот почему я уехал.
quoique | хотя | Quoiqu'il soit jeune, il est sage. | Хотя он молод, он мудр.
à condition que | при условии что | J'accepte, à condition que tu viennes. | Я согласен при условии, что ты придёшь.
de sorte que | так что | Il a parlé fort, de sorte que tous l'ont entendu. | Он говорил громко, так что все услышали.
#C1
en dépit de | вопреки | En dépit des difficultés, il a réussi. | Несмотря на трудности, он преуспел.
quant à | что касается | Quant à moi, je reste. | Что касается меня, я остаюсь.
dans la mesure où | поскольку, в той мере, в какой | Dans la mesure où c'est possible. | Насколько это возможно.
or | однако, между тем | Or, la situation a changé. | Между тем ситуация изменилась.
`),

  ...parseVocab("fr-expressions", "B2", `
avoir le cafard | хандрить | J'ai le cafard ce soir. | У меня сегодня хандра.
coûter les yeux de la tête | стоить целое состояние | Cette voiture coûte les yeux de la tête. | Эта машина стоит целое состояние.
poser un lapin | не прийти на встречу | Il m'a posé un lapin ! | Он меня продинамил!
avoir la flemme | лень | J'ai la flemme de sortir. | Мне лень выходить.
c'est la fin des haricots | это конец всему | Plus de café ? C'est la fin des haricots ! | Кофе кончился? Всё пропало!
tomber dans les pommes | упасть в обморок | Il est tombé dans les pommes. | Он упал в обморок.
mettre son grain de sel | вставить свои пять копеек | Il faut toujours qu'il mette son grain de sel. | Ему всегда надо вставить свои пять копеек.
avoir un poil dans la main | быть лентяем | Il a un poil dans la main. | Он тот ещё лентяй.
appeler un chat un chat | называть вещи своими именами | Appelons un chat un chat. | Давайте называть вещи своими именами.
ce n'est pas la mer à boire | это не так уж трудно | Allez, ce n'est pas la mer à boire ! | Да ладно, это не так уж сложно!
être dans la lune | витать в облаках | Tu es encore dans la lune ! | Ты опять витаешь в облаках!
casser les pieds | надоедать | Tu me casses les pieds ! | Ты меня достал!
avoir du pain sur la planche | иметь много работы | J'ai du pain sur la planche. | У меня куча работы.
quand les poules auront des dents | когда рак на горе свистнет | Il rangera sa chambre quand les poules auront des dents. | Он уберёт комнату, когда рак на горе свистнет.
il pleut des cordes | льёт как из ведра | Prends un parapluie, il pleut des cordes. | Возьми зонт, льёт как из ведра.
faire la grasse matinée | долго спать утром | Le dimanche, je fais la grasse matinée. | По воскресеньям я сплю допоздна.
avoir le coup de foudre | влюбиться с первого взгляда | Ils ont eu le coup de foudre. | Они влюбились с первого взгляда. | 😍
mettre les pieds dans le plat | ляпнуть бестактность | Il a mis les pieds dans le plat. | Он ляпнул бестактность.
donner sa langue au chat | сдаваться (не угадать) | Je donne ma langue au chat ! | Сдаюсь, говори ответ!
#C1
avoir la moutarde qui monte au nez | закипать от злости | J'ai senti la moutarde me monter au nez. | Я почувствовал, что закипаю.
se mettre le doigt dans l'œil | сильно ошибаться | Tu te mets le doigt dans l'œil ! | Ты сильно ошибаешься!
tirer les vers du nez | выведать секрет | Elle m'a tiré les vers du nez. | Она выведала у меня секрет.
`),

  ...parseVocab("fr-soutenu", "C1", `
#B2
l'enjeu | ставка, вызов | L'enjeu est considérable. | Ставки высоки.
le défi | вызов | Un véritable défi. | Настоящий вызов.
l'hypothèse | гипотеза | Une hypothèse plausible. | Правдоподобная гипотеза.
la démarche | подход, процедура | Les démarches administratives. | Административные процедуры.
souligner | подчёркивать | Je tiens à souligner ce point. | Я хочу подчеркнуть этот момент.
#C1
néanmoins (C1) | тем не менее | Il convient néanmoins de rester prudent. | Тем не менее следует проявлять осторожность.
il convient de | следует | Il convient de noter que… | Следует отметить, что…
en l'occurrence | в данном случае | En l'occurrence, il s'agit d'une erreur. | В данном случае речь идёт об ошибке.
le cas échéant | в случае необходимости | Le cas échéant, contactez-nous. | В случае необходимости свяжитесь с нами.
à l'égard de | по отношению к | Son attitude à l'égard des collègues. | Его отношение к коллегам.
remettre en cause | ставить под сомнение | Cela remet en cause notre stratégie. | Это ставит под сомнение нашу стратегию.
mettre en œuvre | осуществлять | Mettre en œuvre une réforme. | Проводить реформу.
pallier | компенсировать, восполнять | Pallier le manque de personnel. | Восполнить нехватку персонала.
susciter | вызывать | Cela suscite des inquiétudes. | Это вызывает опасения.
étayer | подкреплять | Étayer un argument par des faits. | Подкреплять аргумент фактами.
nuancer | смягчать, уточнять | Il faut nuancer ce propos. | Это высказывание нужно уточнить.
primordial | первостепенный | C'est primordial. | Это первостепенно.
pertinent | уместный | Une remarque pertinente. | Уместное замечание.
#C2
l'aléa | случайность, непредвиденное | Les aléas de la vie. | Превратности жизни.
la gageure | дерзкое предприятие | C'était une gageure. | Это было рискованное предприятие.
l'apanage | исключительная привилегия | Ce n'est pas l'apanage des riches. | Это не привилегия богатых.
inéluctable | неизбежный | Un déclin inéluctable. | Неизбежный упадок.
fallacieux | обманчивый | Un argument fallacieux. | Обманчивый аргумент.
péremptoire | безапелляционный | Un ton péremptoire. | Безапелляционный тон.
`),
];
