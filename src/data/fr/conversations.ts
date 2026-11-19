import type { ConversationTopic } from "../../types";
import { dialogue } from "../dialogueParse";

export const CONVERSATIONS: ConversationTopic[] = [
  // ───────────── Повседневные ─────────────
  dialogue({ id: "fr-presentation-a1", title: "Se présenter", ru: "Знакомство", level: "A1", icon: "👋", avatar: "🙂" }, `
B: Bonjour ! Comment tu t'appelles ? | Привет! Как тебя зовут?
U: Je m'appelle Anna. | Меня зовут Анна. | Moi, c'est Anna.
B: Enchanté, Anna. Tu viens d'où ? | Очень приятно, Анна. Откуда ты?
U: Je viens de Russie. | Я из России. | Je suis russe.
B: Tu habites à Paris ? | Ты живёшь в Париже?
U: Oui, j'habite à Paris depuis un mois. | Да, я живу в Париже месяц. | Oui, j'habite ici.
B: Qu'est-ce que tu fais dans la vie ? | Чем ты занимаешься?
U: Je suis ingénieure. | Я инженер. | Je travaille comme ingénieure.
B: Tu parles bien français ! | Ты хорошо говоришь по-французски!
U: Merci, j'apprends encore. | Спасибо, я ещё учусь. | Merci, un peu.
`),
  dialogue({ id: "fr-boulangerie-a1", title: "À la boulangerie", ru: "В булочной", level: "A1", icon: "🥖", avatar: "🧑‍🍳" }, `
B: Bonjour madame, qu'est-ce que je vous sers ? | Здравствуйте, мадам, что вам подать?
U: Bonjour, une baguette, s'il vous plaît. | Здравствуйте, багет, пожалуйста. | Une baguette, s'il vous plaît.
B: Une baguette tradition ? | Традиционный багет?
U: Oui, et deux croissants. | Да, и два круассана. | Oui, avec deux croissants.
B: Avec ceci ? | Что-нибудь ещё?
U: C'est tout, merci. Ça fait combien ? | Это всё, спасибо. Сколько с меня? | Combien je vous dois ?
B: Ça fait trois euros quarante. | С вас три евро сорок.
U: Je peux payer par carte ? | Можно картой? | Par carte, c'est possible ?
B: Bien sûr. Merci, bonne journée ! | Конечно. Спасибо, хорошего дня!
U: Merci, vous aussi ! | Спасибо, и вам! | Bonne journée !
`),
  dialogue({ id: "fr-cafe-a1", title: "Au café", ru: "В кафе", level: "A1", icon: "☕", avatar: "🧑‍🍳" }, `
B: Bonjour, vous désirez ? | Здравствуйте, что желаете?
U: Un café et un verre d'eau, s'il vous plaît. | Кофе и стакан воды, пожалуйста. | Un café, s'il vous plaît.
B: Un expresso ou un café crème ? | Эспрессо или кофе со сливками?
U: Un café crème, s'il vous plaît. | Кофе со сливками, пожалуйста. | Un crème.
B: Vous voulez manger quelque chose ? | Хотите что-нибудь поесть?
U: Oui, un croissant, s'il vous plaît. | Да, круассан, пожалуйста. | Non, merci.
B: Très bien, je vous apporte ça. | Хорошо, сейчас принесу.
U: L'addition, s'il vous plaît. | Счёт, пожалуйста. | Je peux avoir l'addition ?
B: Voilà, quatre euros cinquante. | Вот, четыре евро пятьдесят.
U: Voilà, gardez la monnaie. | Вот, сдачи не надо. | Merci, au revoir.
`),
  dialogue({ id: "fr-chemin-a2", title: "Demander son chemin", ru: "Спросить дорогу", level: "A2", icon: "🗺️", avatar: "🧑" }, `
U: Excusez-moi, où est la gare, s'il vous plaît ? | Извините, где вокзал? | Pardon, la gare, c'est où ?
B: Allez tout droit, puis tournez à gauche au feu. | Идите прямо, потом на светофоре налево.
U: C'est loin d'ici ? | Это далеко отсюда? | C'est loin ?
B: Non, c'est à dix minutes à pied. | Нет, десять минут пешком.
U: Il y a un bus ? | Туда ходит автобус? | Je peux prendre le bus ?
B: Oui, le 38, l'arrêt est en face de la pharmacie. | Да, 38-й, остановка напротив аптеки.
U: Merci beaucoup ! | Большое спасибо! | Merci !
B: Je vous en prie. Bonne journée ! | Пожалуйста. Хорошего дня!
`),
  dialogue({ id: "fr-restaurant-a2", title: "Au restaurant", ru: "В ресторане", level: "A2", icon: "🍽️", avatar: "🧑‍🍳" }, `
B: Bonsoir, vous avez réservé ? | Добрый вечер, вы бронировали?
U: Oui, une table pour deux au nom de Petrov. | Да, столик на двоих на имя Петров. | Oui, au nom de Petrov.
B: Suivez-moi. Voici la carte. | Следуйте за мной. Вот меню.
U: Quel est le plat du jour ? | Какое блюдо дня? | Qu'est-ce que vous recommandez ?
B: Un bœuf bourguignon avec des pommes de terre. | Говядина по-бургундски с картофелем.
U: Je vais prendre ça, s'il vous plaît. | Я возьму это, пожалуйста. | Je le prends.
B: Et comme boisson ? | А из напитков?
U: Une carafe d'eau et un verre de vin rouge. | Графин воды и бокал красного вина. | De l'eau, s'il vous plaît.
B: Vous prendrez un dessert ? | Будете десерт?
U: Oui, une crème brûlée, s'il vous plaît. | Да, крем-брюле, пожалуйста. | Non merci, juste un café.
B: Très bien. | Хорошо.
U: Pourriez-vous nous apporter l'addition à la fin ? | Принесите нам, пожалуйста, счёт в конце. | L'addition à la fin, s'il vous plaît.
`),
  dialogue({ id: "fr-hotel-a2", title: "À l'hôtel", ru: "В отеле", level: "A2", icon: "🏨", avatar: "🧑‍💼" }, `
B: Bonjour, bienvenue. Vous avez une réservation ? | Здравствуйте, добро пожаловать. У вас есть бронь?
U: Oui, une chambre double pour trois nuits. | Да, двухместный номер на три ночи. | Oui, pour trois nuits.
B: Votre nom, s'il vous plaît ? | Ваша фамилия?
U: Ivanova. | Иванова. | Je m'appelle Ivanova.
B: Parfait. Votre pièce d'identité, s'il vous plaît. | Отлично. Ваш документ, пожалуйста.
U: Voici mon passeport. Le petit-déjeuner est compris ? | Вот паспорт. Завтрак включён? | Le petit-déjeuner est inclus ?
B: Oui, de 7 h à 10 h au rez-de-chaussée. | Да, с 7 до 10 на первом этаже.
U: À quelle heure faut-il libérer la chambre ? | Во сколько нужно освободить номер? | Le départ est à quelle heure ?
B: Avant midi. Voici votre clé, chambre 214. | До полудня. Вот ключ, номер 214.
U: Merci. Quel est le code wifi ? | Спасибо. Какой пароль от вайфая? | Il y a le wifi ?
B: Il est écrit sur la carte. Bon séjour ! | Он написан на карточке. Приятного пребывания!
`),
  dialogue({ id: "fr-medecin-b1", title: "Chez le médecin", ru: "У врача", level: "B1", icon: "🩺", avatar: "🧑‍⚕️" }, `
B: Bonjour, asseyez-vous. Qu'est-ce qui vous amène ? | Здравствуйте, садитесь. Что вас привело?
U: J'ai mal à la gorge et de la fièvre depuis deux jours. | У меня два дня болит горло и температура. | J'ai mal à la gorge et j'ai de la fièvre.
B: Vous toussez aussi ? | Вы ещё и кашляете?
U: Oui, un peu, surtout la nuit. | Да, немного, особенно ночью. | Oui, un peu.
B: Vous prenez des médicaments en ce moment ? | Вы сейчас принимаете какие-нибудь лекарства?
U: Non, je ne prends rien. | Нет, ничего не принимаю. | Non, rien.
B: Vous êtes allergique à quelque chose ? | У вас есть на что-то аллергия?
U: Oui, je suis allergique à la pénicilline. | Да, у меня аллергия на пенициллин. | Non, à rien.
B: Bien. C'est une angine. Je vous prescris un autre antibiotique. | Хорошо. Это ангина. Я выпишу вам другой антибиотик.
U: Il faut le prendre combien de fois par jour ? | Сколько раз в день его принимать? | Je le prends quand ?
B: Deux fois par jour pendant six jours. Voici l'ordonnance. | Дважды в день в течение шести дней. Вот рецепт.
U: Merci. Vous pouvez me donner un arrêt de travail ? | Спасибо. Можете выписать мне больничный? | J'ai besoin d'un arrêt maladie.
B: Oui, pour trois jours. N'oubliez pas votre carte Vitale. | Да, на три дня. Не забудьте карту Vitale.
`),
  dialogue({ id: "fr-appartement-b1", title: "Visiter un appartement", ru: "Просмотр квартиры", level: "B1", icon: "🏠", avatar: "🧑‍💼" }, `
B: Bonjour, vous venez pour la visite ? | Здравствуйте, вы на просмотр?
U: Oui, c'est bien ça. Le loyer est de combien ? | Да, верно. Какая аренда? | Oui. Quel est le loyer ?
B: 950 euros charges comprises. | 950 евро с коммунальными.
U: L'appartement est meublé ? | Квартира меблирована? | Il y a des meubles ?
B: Non, mais la cuisine est équipée. | Нет, но кухня оборудована.
U: Quel est le montant de la caution ? | Какой залог? | Il faut payer une caution ?
B: Un mois de loyer hors charges. Vous avez un garant ? | Месячная аренда без коммунальных. У вас есть поручитель?
U: Non, mais je peux utiliser la garantie Visale. | Нет, но я могу воспользоваться гарантией Visale. | Je n'ai pas de garant.
B: Très bien, c'est accepté. Il nous faut aussi vos trois dernières fiches de paie. | Хорошо, это принимается. Нам ещё нужны ваши три последних расчётных листа.
U: Pas de problème. Il est disponible quand ? | Без проблем. Когда она свободна? | Je peux emménager quand ?
B: Dès le premier du mois prochain. | С первого числа следующего месяца.
U: Parfait, je voudrais déposer un dossier. | Отлично, я хотел бы подать документы. | Je suis intéressé.
`),
  dialogue({ id: "fr-entretien-b1", title: "Entretien d'embauche", ru: "Собеседование", level: "B1", icon: "💼", avatar: "🧑‍💼" }, `
B: Bonjour, merci d'être venu. Parlez-moi un peu de vous. | Здравствуйте, спасибо, что пришли. Расскажите немного о себе.
U: J'ai un master en informatique et cinq ans d'expérience comme développeur. | У меня магистратура по информатике и пять лет опыта разработчиком. | Je suis développeur depuis cinq ans.
B: Pourquoi voulez-vous travailler chez nous ? | Почему вы хотите работать у нас?
U: Vos projets m'intéressent beaucoup et j'aimerais évoluer dans une équipe internationale. | Ваши проекты мне очень интересны, и я хотел бы развиваться в международной команде. | J'aime vos projets.
B: Quels sont vos points forts ? | Ваши сильные стороны?
U: Je suis organisé, curieux et j'aime travailler en équipe. | Я организован, любознателен и люблю работать в команде. | Je suis sérieux et motivé.
B: Et vos points faibles ? | А слабые?
U: Mon français n'est pas encore parfait, mais je prends des cours. | Мой французский ещё не идеален, но я хожу на курсы. | Je dois encore améliorer mon français.
B: Quelles sont vos prétentions salariales ? | Каковы ваши ожидания по зарплате?
U: Autour de 45 000 euros brut par an. | Около 45 000 евро брутто в год. | Environ 45 000 euros par an.
B: Très bien. Nous vous recontacterons la semaine prochaine. | Хорошо. Мы свяжемся с вами на следующей неделе.
U: Merci beaucoup pour cet entretien. | Большое спасибо за собеседование. | Merci, au revoir.
`),
  dialogue({ id: "fr-reunion-c1", title: "Réunion de travail", ru: "Рабочее совещание", level: "C1", icon: "📊", avatar: "🧑‍💼" }, `
B: Commençons. Le premier point à l'ordre du jour concerne le budget du trimestre. | Начнём. Первый пункт повестки — бюджет квартала.
U: Si je peux me permettre, je voudrais d'abord faire un point sur la situation actuelle. | Если позволите, сначала я хотел бы кратко обрисовать текущую ситуацию. | Je propose de commencer par un état des lieux.
B: Je vous en prie. | Прошу.
U: Nous dépassons le budget d'environ huit pour cent, principalement à cause des frais logistiques. | Мы превышаем бюджет примерно на восемь процентов, в основном из-за логистических расходов. | Nous avons un dépassement de huit pour cent.
B: C'est préoccupant. Que proposez-vous ? | Это тревожно. Что вы предлагаете?
U: Il conviendrait de renégocier avec nos fournisseurs et de reporter certains investissements. | Следовало бы пересмотреть условия с поставщиками и отложить некоторые инвестиции. | Renégocier les contrats et reporter des dépenses.
B: Le report des investissements ne risque-t-il pas de nous pénaliser à long terme ? | А не навредит ли нам перенос инвестиций в долгосрочной перспективе?
U: C'est un risque, certes, mais il me paraît raisonnable à court terme. | Это, конечно, риск, но в краткосрочной перспективе он кажется мне разумным. | Oui, mais c'est un compromis acceptable.
B: D'accord. Pourriez-vous rédiger une proposition détaillée d'ici vendredi ? | Хорошо. Сможете подготовить подробное предложение к пятнице?
U: Bien entendu, je la diffuserai jeudi soir. | Разумеется, разошлю в четверг вечером. | Oui, je l'enverrai jeudi.
`),
  dialogue({ id: "fr-debat-c2", title: "Débat de société", ru: "Общественная дискуссия", level: "C2", icon: "🗳️", avatar: "🧑‍🏫" }, `
B: D'aucuns affirment que le télétravail aurait affaibli le lien social dans l'entreprise. Qu'en pensez-vous ? | Иные утверждают, что удалёнка ослабила социальные связи в компании. Что вы думаете?
U: Je dirais qu'il l'a moins affaibli que transformé : il faut désormais le construire délibérément. | Я бы сказал, что она их не столько ослабила, сколько преобразила: теперь их нужно выстраивать осознанно. | À mon sens, il l'a transformé plutôt qu'affaibli.
B: Mais la créativité spontanée n'en pâtit-elle pas inévitablement ? | Но разве спонтанная креативность от этого неизбежно не страдает?
U: Dans une certaine mesure, certes, encore que l'accès à un vivier de talents élargi compense en partie cette perte. | В определённой мере — да, хотя доступ к более широкому кругу специалистов отчасти компенсирует эту потерю. | En partie, mais on recrute plus largement.
B: Et qu'en est-il des jeunes salariés ? | А как насчёт молодых сотрудников?
U: Là, je vous concède le point : l'accompagnement à distance est indéniablement plus ardu. | Здесь я с вами соглашусь: наставничество на расстоянии бесспорно сложнее. | C'est vrai, c'est le point faible.
B: Vous plaidez donc pour un modèle hybride ? | То есть вы выступаете за гибридную модель?
U: Grosso modo, oui, pourvu qu'il soit pensé en fonction des tâches plutôt qu'imposé uniformément. | В общих чертах — да, при условии, что она строится вокруг задач, а не навязывается всем одинаково. | Oui, à condition qu'il soit flexible.
B: Une position nuancée. Je vous remercie. | Взвешенная позиция. Благодарю вас.
U: C'est moi qui vous remercie ; le débat est loin d'être clos. | Это я вас благодарю; дискуссия далека от завершения. | Merci à vous.
`),

  // ───────────── Госуслуги (France) ─────────────
  dialogue({ id: "fr-mairie-a2", title: "À la mairie", ru: "В мэрии: справка и запись", level: "A2", icon: "🏛️", avatar: "👩‍💼", category: "official" }, `
B: Bonjour, je peux vous aider ? | Здравствуйте, чем могу помочь?
U: Bonjour, je voudrais inscrire mon fils à l'école. | Здравствуйте, я хотел бы записать сына в школу. | Je voudrais une inscription scolaire.
B: Il a quel âge ? | Сколько ему лет?
U: Il a six ans. | Ему шесть лет. | Six ans.
B: Il me faut le livret de famille ou son acte de naissance, un justificatif de domicile et son carnet de vaccination. | Мне нужна семейная книжка или его свидетельство о рождении, подтверждение адреса и прививочная карта.
U: J'ai son acte de naissance traduit et une facture d'électricité. | У меня есть его переведённое свидетельство о рождении и счёт за электричество. | Voici les documents.
B: Parfait. Et le carnet de vaccination ? | Отлично. А прививочная карта?
U: Je l'apporterai demain, d'accord ? | Я принесу её завтра, хорошо? | Je peux l'envoyer par mail ?
B: Pas de souci. Vous recevrez le certificat d'inscription par courrier. | Без проблем. Справку о записи вы получите по почте.
U: Merci beaucoup, bonne journée. | Большое спасибо, хорошего дня. | Merci, au revoir.
`),
  dialogue({ id: "fr-banque-a2", title: "Ouvrir un compte", ru: "Открытие банковского счёта", level: "A2", icon: "🏦", avatar: "👨‍💼", category: "official" }, `
B: Bonjour, que puis-je faire pour vous ? | Здравствуйте, что я могу для вас сделать?
U: Je voudrais ouvrir un compte bancaire. | Я хотел бы открыть банковский счёт. | Je veux ouvrir un compte.
B: Bien sûr. Vous avez une pièce d'identité et un justificatif de domicile ? | Конечно. У вас есть удостоверение личности и подтверждение адреса?
U: Oui, voici mon passeport, mon titre de séjour et mon bail. | Да, вот паспорт, вид на жительство и договор аренды. | Voici mes documents.
B: Vous avez aussi un justificatif de revenus ? | Есть подтверждение дохода?
U: Oui, mon contrat de travail. | Да, мой трудовой договор. | J'ai mon contrat.
B: Très bien. Vous voulez une carte bancaire ? | Хорошо. Вам нужна банковская карта?
U: Oui, et l'application mobile, s'il vous plaît. | Да, и мобильное приложение, пожалуйста. | Oui, avec l'appli.
B: La carte arrive sous dix jours et le code secret par courrier séparé. | Карта придёт в течение десяти дней, ПИН-код — отдельным письмом.
U: Je peux avoir mon RIB tout de suite ? | Можно сразу получить реквизиты? | J'ai besoin de mon RIB pour mon employeur.
B: Oui, je vous l'imprime. | Да, сейчас распечатаю.
U: Merci, c'est parfait. | Спасибо, прекрасно. | Merci beaucoup.
`),
  dialogue({ id: "fr-prefecture-b1", title: "À la préfecture", ru: "Продление ВНЖ в префектуре", level: "B1", icon: "🛂", avatar: "👨‍💼", category: "official" }, `
B: Bonjour, vous avez rendez-vous ? | Здравствуйте, вы записаны?
U: Oui, à 10 h pour le renouvellement de mon titre de séjour. | Да, на 10 часов, по продлению вида на жительство. | Oui, pour renouveler mon titre de séjour.
B: Quel est le motif de votre séjour ? | На каком основании вы находитесь во Франции?
U: Je suis salarié, j'ai un CDI dans une entreprise lyonnaise. | Я работаю по бессрочному договору в лионской компании. | Je travaille, j'ai un CDI.
B: Il me faut votre contrat, vos trois dernières fiches de paie et un justificatif de domicile de moins de trois mois. | Мне нужен ваш договор, три последних расчётных листа и подтверждение адреса давностью менее трёх месяцев.
U: Voilà. J'ai aussi mon avis d'imposition. | Вот. У меня есть ещё налоговое уведомление. | Voici tout le dossier.
B: Parfait. Vous avez acheté le timbre fiscal ? | Отлично. Вы купили гербовую марку?
U: Oui, en ligne, voici le reçu. | Да, онлайн, вот квитанция. | Oui, le voici.
B: Je prends vos empreintes. Vous recevrez un SMS quand la carte sera prête. | Я снимаю отпечатки пальцев. Когда карта будет готова, вам придёт СМС.
U: Combien de temps ça prend, environ ? | Сколько примерно это займёт? | C'est long ?
B: Quelques semaines. En attendant, voici votre attestation de prolongation. | Несколько недель. Пока вот ваша справка о продлении.
U: Je peux voyager avec ce document ? | Могу ли я путешествовать с этим документом? | Elle me permet de travailler ?
B: Vous pouvez travailler, mais pour voyager, renseignez-vous avant : ce n'est pas toujours possible. | Работать можно, а насчёт поездок уточните заранее: это не всегда возможно.
U: D'accord, merci pour votre aide. | Хорошо, спасибо за помощь. | Merci beaucoup.
`),
  dialogue({ id: "fr-caf-b1", title: "Demande d'APL à la CAF", ru: "Пособие на жильё в CAF", level: "B1", icon: "🏠", avatar: "👩‍💼", category: "official" }, `
B: Bonjour, CAF, je vous écoute. | Здравствуйте, CAF, слушаю вас.
U: Bonjour, je voudrais faire une demande d'aide au logement. | Здравствуйте, я хотел бы подать заявление на пособие на жильё. | Je voudrais demander les APL.
B: Vous êtes locataire ? | Вы снимаете жильё?
U: Oui, je loue un studio à Lille depuis septembre. | Да, я снимаю студию в Лилле с сентября. | Oui, je suis locataire.
B: Vous êtes étudiant ou salarié ? | Вы студент или работаете?
U: Je suis étudiant en master. | Я студент магистратуры. | Je suis étudiant.
B: La demande se fait en ligne sur caf.fr. Il vous faudra votre bail, votre RIB et votre titre de séjour. | Заявление подаётся онлайн на caf.fr. Понадобятся договор аренды, реквизиты и вид на жительство.
U: Est-ce que le propriétaire doit remplir quelque chose ? | Арендодатель должен что-то заполнить? | Mon propriétaire doit faire une démarche ?
B: Oui, une attestation de loyer, qu'il peut faire en ligne lui aussi. | Да, справку об аренде — он тоже может сделать это онлайн.
U: L'aide est versée quand ? | Когда выплачивают пособие? | Je reçois l'argent quand ?
B: Le premier mois n'est pas payé ; ensuite, c'est versé chaque mois, autour du 5. | За первый месяц не платят; дальше — ежемесячно, около 5-го числа.
U: D'accord, merci pour ces informations. | Хорошо, спасибо за информацию. | Merci beaucoup.
`),
  dialogue({ id: "fr-cpam-b1", title: "Carte Vitale à la CPAM", ru: "Медстраховка: карта Vitale", level: "B1", icon: "💳", avatar: "🧑‍⚕️", category: "official" }, `
B: Bonjour, qu'est-ce que je peux faire pour vous ? | Здравствуйте, чем могу помочь?
U: Je viens d'arriver en France et je voudrais ma carte Vitale. | Я только что приехал во Францию и хотел бы получить карту Vitale. | J'ai besoin d'une carte Vitale.
B: Vous travaillez en France ? | Вы работаете во Франции?
U: Oui, depuis deux mois, avec un CDI. | Да, два месяца, по бессрочному договору. | Oui, je suis salarié.
B: Il faut d'abord obtenir votre numéro de sécurité sociale. Vous avez votre acte de naissance ? | Сначала нужно получить номер соцстрахования. У вас есть свидетельство о рождении?
U: Oui, avec une traduction assermentée. | Да, с заверенным переводом. | Oui, traduit en français.
B: Très bien. En attendant, on vous donne une attestation de droits. | Хорошо. Пока вам выдадут справку о правах.
U: Et pour les consultations chez le médecin ? | А как быть с приёмами у врача? | Je peux aller chez le médecin ?
B: Oui. Pensez à déclarer un médecin traitant pour être mieux remboursé. | Да. Не забудьте указать лечащего врача — так возмещение будет больше.
U: Je dois aussi prendre une mutuelle ? | Мне нужна ещё и дополнительная страховка? | La mutuelle est obligatoire ?
B: Votre employeur doit vous en proposer une ; c'est fortement conseillé. | Работодатель обязан её предложить; это настоятельно рекомендуется.
U: Merci, c'est beaucoup plus clair maintenant. | Спасибо, теперь гораздо понятнее. | Merci beaucoup.
`),
  dialogue({ id: "fr-france-travail-b1", title: "À France Travail", ru: "В службе занятости", level: "B1", icon: "📋", avatar: "👩‍💼", category: "official" }, `
B: Bonjour, c'est votre premier rendez-vous ? | Здравствуйте, это ваша первая встреча?
U: Oui, mon CDD est terminé et je cherche un emploi. | Да, мой срочный договор закончился, и я ищу работу. | Oui, je suis au chômage.
B: Vous êtes inscrit en ligne ? | Вы зарегистрировались онлайн?
U: Oui, je me suis inscrit la semaine dernière. | Да, я зарегистрировался на прошлой неделе. | Oui, c'est fait.
B: Vous avez travaillé combien de temps ? | Сколько времени вы работали?
U: Huit mois dans une entreprise de logistique. | Восемь месяцев в логистической компании. | Huit mois.
B: Alors vous avez droit à l'allocation chômage. Vous avez votre attestation employeur ? | Тогда вы имеете право на пособие по безработице. У вас есть справка от работодателя?
U: Oui, la voici. Je voudrais aussi améliorer mon français. | Да, вот она. Ещё я хотел бы улучшить французский. | Je peux suivre une formation ?
B: Nous pouvons financer une formation linguistique. Je vous mets en relation avec un conseiller. | Мы можем оплатить языковое обучение. Я свяжу вас с консультантом.
U: Super ! Qu'est-ce que je dois faire chaque mois ? | Отлично! Что мне нужно делать каждый месяц? | Quelles sont mes obligations ?
B: Vous actualisez votre situation en ligne chaque mois et vous cherchez activement un emploi. | Каждый месяц обновляете данные онлайн и активно ищете работу.
U: Compris, merci beaucoup. | Понятно, большое спасибо. | D'accord, merci.
`),
  dialogue({ id: "fr-commissariat-b1", title: "Porter plainte", ru: "Заявление о краже в полицию", level: "B1", icon: "🚓", avatar: "👮", category: "official" }, `
B: Bonjour, qu'est-ce qui vous arrive ? | Здравствуйте, что у вас случилось?
U: On m'a volé mon téléphone dans le métro. | У меня украли телефон в метро. | Je veux porter plainte pour un vol.
B: Quand et où exactement ? | Когда и где именно?
U: Ce matin, vers 8 h, sur la ligne 1, à Châtelet. | Сегодня утром, около 8, на первой линии, на станции Шатле. | Ce matin dans le métro.
B: Vous avez vu le voleur ? | Вы видели вора?
U: Non, je ne m'en suis rendu compte qu'en sortant. | Нет, я заметил только на выходе. | Non, je n'ai rien vu.
B: Vous avez le numéro IMEI du téléphone ? | У вас есть IMEI телефона?
U: Oui, il est sur la boîte. Je l'ai pris en photo. | Да, он на коробке. Я её сфотографировал. | Oui, le voici.
B: Très bien. Je prends votre plainte. Vous pourrez donner le récépissé à votre assurance. | Хорошо. Я принимаю ваше заявление. Квитанцию можно передать в страховую.
U: Est-ce que je peux aussi faire la démarche en ligne la prochaine fois ? | А в следующий раз можно подать заявление онлайн? | On peut faire une pré-plainte en ligne ?
B: Oui, il existe une pré-plainte en ligne pour les vols sans auteur connu. | Да, для краж без известного преступника есть предварительное заявление онлайн.
U: Merci beaucoup pour votre aide. | Большое спасибо за помощь. | Merci.
`),
  dialogue({ id: "fr-impots-b2", title: "Au centre des impôts", ru: "В налоговой: первая декларация", level: "B2", icon: "🧾", avatar: "🧑‍💼", category: "official" }, `
B: Bonjour, je vous écoute. | Здравствуйте, слушаю вас.
U: Bonjour, je suis arrivé en France l'année dernière et je dois faire ma première déclaration de revenus. | Здравствуйте, я приехал во Францию в прошлом году и должен подать первую декларацию о доходах. | C'est ma première déclaration d'impôts.
B: Pour une première déclaration, il faut la remplir sur papier ou nous contacter pour obtenir un numéro fiscal. | Первую декларацию нужно подать на бумаге или связаться с нами, чтобы получить налоговый номер.
U: J'ai le formulaire 2042. Faut-il déclarer mes revenus perçus en Russie ? | У меня есть форма 2042. Нужно ли декларировать доходы, полученные в России? | Je dois déclarer mes revenus de l'étranger ?
B: Si vous êtes résident fiscal français, oui, tous vos revenus mondiaux, avec la convention fiscale pour éviter la double imposition. | Если вы налоговый резидент Франции — да, весь доход по миру, с учётом конвенции об избежании двойного налогообложения.
U: Et le prélèvement à la source, comment ça marche ? | А как работает удержание налога у источника? | Mon employeur prélève déjà l'impôt ?
B: Votre employeur applique un taux neutre en attendant votre premier avis d'imposition ; ensuite, votre taux personnel sera appliqué. | Пока нет первого налогового уведомления, работодатель применяет нейтральную ставку; потом — вашу персональную.
U: Je comprends. Je dois aussi déclarer mon compte bancaire étranger ? | Понятно. Мне нужно декларировать и иностранный банковский счёт? | Et mes comptes à l'étranger ?
B: Oui, avec le formulaire 3916, sinon vous risquez une amende. | Да, по форме 3916, иначе вам грозит штраф.
U: Merci, je n'étais pas au courant. Je m'en occupe. | Спасибо, я не знал. Займусь этим. | Merci pour ces précisions.
`),
  dialogue({ id: "fr-etat-des-lieux-b2", title: "État des lieux de sortie", ru: "Выезд из квартиры и залог", level: "B2", icon: "🔑", avatar: "🧔", category: "official" }, `
B: Je vais devoir retenir une partie de la caution pour le ménage. | Мне придётся удержать часть залога за уборку.
U: Ça m'étonne, j'ai fait nettoyer l'appartement par une entreprise avant de partir. | Меня это удивляет — перед отъездом я заказал профессиональную уборку. | Mais l'appartement a été nettoyé.
B: Le four était encore sale lors de l'état des lieux. | При осмотре духовка была ещё грязной.
U: J'ai la facture de l'entreprise et des photos prises le dernier jour. | У меня есть счёт компании и фотографии, сделанные в последний день. | J'ai des photos et une facture.
B: Je maintiens ma position. | Я остаюсь при своём мнении.
U: Dans ce cas, je vous rappelle que vous devez me restituer la caution sous un mois, sauf dégradations justifiées. | В таком случае напоминаю, что вы обязаны вернуть залог в течение месяца, если нет обоснованных повреждений. | La loi vous oblige à rendre la caution sous un mois.
B: Vous ne pouvez pas accepter une retenue plus faible ? | А на меньшее удержание вы не согласитесь?
U: Je suis prêt à en discuter, à condition que vous me fournissiez des justificatifs. | Готов обсудить при условии, что вы предоставите подтверждающие документы. | Seulement avec des justificatifs.
B: Bon, je vous envoie les photos de l'état des lieux. | Ладно, я пришлю фото с осмотра.
U: Merci. Sinon, je saisirai la commission départementale de conciliation. | Спасибо. Иначе я обращусь в департаментскую согласительную комиссию. | Sinon, je ferai appel à la commission de conciliation.
`),
  dialogue({ id: "fr-naturalisation-c1", title: "Entretien de naturalisation", ru: "Собеседование на гражданство", level: "C1", icon: "🇫🇷", avatar: "👩‍⚖️", category: "official" }, `
B: Bonjour. Depuis combien de temps résidez-vous en France ? | Здравствуйте. Как давно вы проживаете во Франции?
U: Depuis six ans. Je suis arrivé avec un passeport talent, puis j'ai obtenu une carte de résident. | Шесть лет. Я приехал по «паспорту таланта», потом получил карту резидента. | Depuis six ans, en situation régulière.
B: Pourquoi souhaitez-vous devenir français ? | Почему вы хотите стать французом?
U: Ma vie est ici : je travaille, je paie mes impôts et je me sens profondément attaché aux valeurs de la République. | Моя жизнь здесь: я работаю, плачу налоги и глубоко привязан к ценностям Республики. | Parce que je me sens chez moi en France.
B: Quelles sont, selon vous, ces valeurs ? | Какие, по-вашему, это ценности?
U: La devise « Liberté, Égalité, Fraternité », ainsi que la laïcité et l'égalité entre les femmes et les hommes. | Девиз «Свобода, Равенство, Братство», а также светскость и равенство мужчин и женщин. | Liberté, égalité, fraternité et laïcité.
B: Pouvez-vous m'expliquer ce que signifie la laïcité ? | Можете объяснить, что означает светскость?
U: C'est la séparation des Églises et de l'État : l'État est neutre et garantit la liberté de conscience de chacun. | Это разделение церкви и государства: государство нейтрально и гарантирует свободу совести каждого. | L'État ne favorise aucune religion.
B: Qui est le président de la République et quelle est la durée de son mandat ? | Кто президент Республики и какова продолжительность его мандата?
U: Le mandat présidentiel est de cinq ans ; c'est le quinquennat. | Президентский мандат длится пять лет — это «пятилетка». | Le mandat dure cinq ans.
B: Très bien. Votre dossier sera transmis au ministère, qui rendra sa décision. | Хорошо. Ваше дело будет передано в министерство, которое вынесет решение.
U: Je vous remercie. Combien de temps faut-il compter, approximativement ? | Благодарю. На какой срок примерно стоит рассчитывать? | Merci. Quel est le délai ?
B: En général, entre douze et dix-huit mois. | Обычно от двенадцати до восемнадцати месяцев.
`),
];
