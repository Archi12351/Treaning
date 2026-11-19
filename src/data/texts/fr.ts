import { gloss, questions, type ReadingText } from "./types";

export const TEXTS_FR: ReadingText[] = [
  {
    id: "fr-t-marie", level: "A1", icon: "👩", title: "Je m'appelle Marie", ru: "Меня зовут Мари",
    paragraphs: [
      "Bonjour ! Je m'appelle Marie. J'ai vingt-cinq ans et j'habite à Bordeaux.",
      "Je suis étudiante en médecine. Le matin, je vais à l'université à vélo. Le soir, je travaille dans une pharmacie.",
      "Le week-end, j'aime aller au marché et cuisiner avec mes amis.",
    ],
    glossary: gloss("j'habite = я живу; étudiante en médecine = студентка-медик; à vélo = на велосипеде; le marché = рынок; cuisiner = готовить"),
    questions: questions(`
Где живёт Мари? | В Бордо ~ В Париже ~ В Лионе | В Бордо
Что изучает Мари? | Медицину ~ Право ~ Историю | Медицину
Как Мари добирается до университета? | На велосипеде ~ На метро ~ Пешком | На велосипеде
Где Мари работает вечером? | В аптеке ~ В кафе ~ В магазине | В аптеке
`),
  },
  {
    id: "fr-t-boulangerie", level: "A1", icon: "🥖", title: "La boulangerie du quartier", ru: "Булочная в квартале",
    paragraphs: [
      "Dans mon quartier, il y a une petite boulangerie. Elle ouvre à sept heures et ferme à vingt heures. Elle est fermée le lundi.",
      "Tous les matins, j'achète une baguette et un croissant. La baguette coûte un euro vingt.",
      "La boulangère est très gentille. Elle connaît tous ses clients.",
    ],
    glossary: gloss("le quartier = район; ouvre = открывается; ferme = закрывается; la boulangère = булочница; connaît = знает"),
    questions: questions(`
В какой день булочная закрыта? | В понедельник ~ В воскресенье ~ В субботу | В понедельник
Во сколько она открывается? | В семь ~ В восемь ~ В двадцать | В семь
Сколько стоит багет? | 1,20 евро ~ 2 евро ~ 0,90 евро | 1,20 евро
Какая булочница? | Очень милая ~ Строгая ~ Новая | Очень милая
`),
  },
  {
    id: "fr-t-caf", level: "A2", icon: "📩", category: "official", title: "Courrier de la CAF", ru: "Письмо из CAF",
    paragraphs: [
      "Madame, Monsieur, nous avons bien reçu votre demande d'aide au logement. Pour l'étudier, il nous manque une pièce : l'attestation de loyer signée par votre propriétaire.",
      "Vous pouvez nous l'envoyer en ligne, dans votre espace personnel sur caf.fr, avant le 15 octobre.",
      "Attention : sans ce document, votre demande ne pourra pas être traitée. L'aide est versée chaque mois, à partir du mois suivant votre entrée dans le logement.",
    ],
    glossary: gloss("il nous manque = нам не хватает; la pièce = документ; l'attestation de loyer = справка об аренде; l'espace personnel = личный кабинет; traitée = рассмотрена; versée = выплачена"),
    questions: questions(`
Какого документа не хватает? | Справки об аренде от хозяина ~ Паспорта ~ Справки о доходах | Справки об аренде от хозяина
Как его отправить? | Онлайн в личном кабинете ~ Только почтой ~ Принести лично | Онлайн в личном кабинете
До какого числа? | До 15 октября ~ До конца года ~ До 1 октября | До 15 октября
С какого момента выплачивается пособие? | Со следующего месяца после въезда ~ С первого дня ~ Через год | Со следующего месяца после въезда
`),
  },
  {
    id: "fr-t-greve", level: "B1", icon: "🚇", title: "Grève dans les transports", ru: "Забастовка транспорта",
    paragraphs: [
      "Jeudi, une grève touchera les transports en commun à Paris. Selon la RATP, seulement un métro sur trois circulera aux heures de pointe, et certaines lignes de RER seront fortement perturbées.",
      "Les syndicats protestent contre la réforme des conditions de travail. Ils demandent également une hausse des salaires face à l'inflation.",
      "Les usagers sont invités à privilégier le télétravail quand c'est possible, ou à utiliser le vélo. Une application permet de suivre le trafic en temps réel.",
    ],
    glossary: gloss("la grève = забастовка; les heures de pointe = часы пик; perturbé = нарушенный; le syndicat = профсоюз; la hausse = повышение; l'usager = пассажир, пользователь; privilégier = отдавать предпочтение"),
    questions: questions(`
Combien de métros circuleront aux heures de pointe ? | Un sur trois ~ Tous ~ Aucun | Un sur trois
Contre quoi protestent les syndicats ? | La réforme des conditions de travail ~ Les touristes ~ Le prix du vélo | La réforme des conditions de travail
Que demandent-ils aussi ? | Une hausse des salaires ~ Plus de vacances ~ Moins de trains | Une hausse des salaires
Que conseille-t-on aux usagers ? | Le télétravail ou le vélo ~ Rester au lit ~ Prendre l'avion | Le télétravail ou le vélo
`),
  },
  {
    id: "fr-t-titre", level: "B1", icon: "🛂", category: "official", title: "Renouveler son titre de séjour", ru: "Продление вида на жительство",
    paragraphs: [
      "La demande de renouvellement d'un titre de séjour doit être faite dans les deux mois qui précèdent sa date d'expiration. Pour la plupart des titres, elle se fait désormais en ligne, sur le site de l'ANEF.",
      "Le demandeur doit joindre plusieurs justificatifs : passeport, justificatif de domicile récent, photos d'identité et documents prouvant le motif du séjour, par exemple un contrat de travail.",
      "Une fois le dossier déposé, une attestation de prolongation d'instruction est délivrée. Elle permet de rester en France de façon régulière pendant l'examen de la demande.",
    ],
    glossary: gloss("le renouvellement = продление; précéder = предшествовать; joindre = приложить; le justificatif = подтверждающий документ; le motif = основание; l'instruction = рассмотрение (дела)"),
    questions: questions(`
Quand faut-il demander le renouvellement ? | Dans les deux mois avant l'expiration ~ Après l'expiration ~ Un an avant | Dans les deux mois avant l'expiration
Où fait-on la demande pour la plupart des titres ? | En ligne sur le site de l'ANEF ~ À la mairie ~ À la CAF | En ligne sur le site de l'ANEF
Quel document peut prouver le motif du séjour ? | Un contrat de travail ~ Un billet de train ~ Une carte de bibliothèque | Un contrat de travail
À quoi sert l'attestation de prolongation ? | Rester en France régulièrement pendant l'examen ~ Voyager partout ~ Obtenir la nationalité | Rester en France régulièrement pendant l'examen
`),
  },
  {
    id: "fr-t-ecrans", level: "B2", icon: "📱", title: "Les enfants et les écrans", ru: "Дети и экраны",
    paragraphs: [
      "En France, un rapport commandé par le gouvernement recommande de limiter fortement l'exposition des jeunes enfants aux écrans : pas d'écran avant trois ans, et un usage encadré ensuite.",
      "Les auteurs soulignent les effets d'une exposition excessive sur le sommeil, la concentration et le développement du langage. Ils pointent aussi la responsabilité des plateformes, dont les applications sont conçues pour capter l'attention.",
      "Certains parents jugent ces recommandations irréalistes dans une société où les écrans sont omniprésents. D'autres y voient au contraire un appui bienvenu pour fixer des règles à la maison.",
    ],
    glossary: gloss("le rapport = доклад; encadré = контролируемый; souligner = подчёркивать; pointer = указывать на; conçu pour = созданный для; omniprésent = вездесущий; un appui = поддержка"),
    questions: questions(`
Que recommande le rapport avant trois ans ? | Pas d'écran ~ Une heure par jour ~ Seulement la télévision | Pas d'écran
Sur quoi l'exposition excessive a-t-elle des effets ? | Le sommeil et la concentration ~ La taille ~ Les notes en sport | Le sommeil et la concentration
Qui est aussi pointé du doigt ? | Les plateformes ~ Les enseignants ~ Les médecins | Les plateformes
Comment certains parents voient-ils ces recommandations ? | Comme un appui pour fixer des règles ~ Comme une loi obligatoire ~ Comme une publicité | Comme un appui pour fixer des règles
`),
  },
  {
    id: "fr-t-laicite", level: "C1", icon: "⚖️", title: "La laïcité à la française", ru: "Французская светскость",
    paragraphs: [
      "Consacrée par la loi de 1905 sur la séparation des Églises et de l'État, la laïcité constitue l'un des piliers de la République française. Elle garantit la liberté de conscience et impose à l'État une stricte neutralité religieuse.",
      "Cette neutralité s'applique aux agents publics, qui ne peuvent manifester leurs convictions religieuses dans l'exercice de leurs fonctions, mais non aux usagers des services publics, qui demeurent libres de leurs convictions.",
      "Souvent mal comprise à l'étranger, la laïcité ne vise pas à combattre les religions, mais à organiser leur coexistence pacifique dans l'espace public.",
    ],
    glossary: gloss("consacré par = закреплённый; le pilier = столп, опора; l'agent public = госслужащий; manifester = проявлять; l'usager = пользователь (услуг); demeurer = оставаться; viser à = быть направленным на"),
    questions: questions(`
Quelle loi a consacré la laïcité ? | La loi de 1905 ~ La Constitution de 1789 ~ Une loi de 2004 | La loi de 1905
À qui s'applique l'obligation de neutralité ? | Aux agents publics ~ À tous les citoyens ~ Aux touristes | Aux agents publics
Les usagers des services publics doivent-ils être neutres ? | Non, ils restent libres de leurs convictions ~ Oui, toujours ~ Seulement à l'école | Non, ils restent libres de leurs convictions
Quel est le but de la laïcité selon le texte ? | Organiser la coexistence pacifique ~ Combattre les religions ~ Favoriser une religion | Organiser la coexistence pacifique
`),
  },
];
