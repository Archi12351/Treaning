import type { GrammarTopic } from "../../types";
import { parseExercises } from "../exerciseParse";

export const GRAMMAR_TOPICS: GrammarTopic[] = [
  {
    id: "fr-etre-avoir",
    title: "Être & avoir",
    level: "A1",
    summary: "Два главных глагола: быть и иметь",
    explanation: [
      "être: je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont.",
      "avoir: j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont.",
      "Возраст — через avoir: J'ai 25 ans (не «je suis 25»). Также avoir faim/soif/froid/peur/raison.",
      "Перед гласной je → j' (j'ai, j'habite).",
    ],
    examples: [
      { de: "Je suis russe et j'ai trente ans.", ru: "Я русский, мне тридцать лет." },
      { de: "Nous avons un chat.", ru: "У нас есть кошка." },
      { de: "Vous êtes français ?", ru: "Вы француз?" },
    ],
    exercises: parseExercises("fea", "A1", `
choice | Je ___ étudiant. | suis ~ es ~ est ~ ai | suis | je suis.
choice | Tu ___ quel âge ? | as ~ es ~ a ~ ai | as | Возраст — avoir: tu as.
choice | Nous ___ à Paris. | sommes ~ avons ~ êtes ~ sont | sommes | nous sommes.
choice | Ils ___ deux enfants. | ont ~ sont ~ avons ~ a | ont | ils ont.
fill | Vous ___ (être) médecin ? | êtes | vous êtes.
choice | Elle ___ très gentille. | est ~ a ~ es ~ et | est | elle est (не путать с союзом et).
fill | J'___ (avoir) faim. | ai | j'ai faim.
choice | Mon père ___ 60 ans. | a ~ est ~ as ~ ont | a | Возраст — avoir.
choice | Vous ___ raison. | avez ~ êtes ~ as ~ ont | avez | avoir raison — быть правым.
fill | Nous ___ (avoir) une voiture. | avons | nous avons.
choice | Les enfants ___ fatigués. | sont ~ ont ~ est ~ êtes | sont | ils sont.
choice | J'___ froid. | ai ~ suis ~ es ~ a | ai | avoir froid — мёрзнуть.
fill | Tu ___ (être) d'où ? | es | tu es.
choice | Elles ___ contentes. | sont ~ ont ~ est ~ a | sont | elles sont.
choice | Il ___ peur des chiens. | a ~ est ~ as ~ ont | a | avoir peur — бояться.
`),
  },
  {
    id: "fr-articles",
    title: "Articles: le, un, du",
    level: "A1",
    summary: "Определённый, неопределённый и частичный артикль",
    explanation: [
      "Определённый: le (м.р.), la (ж.р.), l' (перед гласной), les (мн.ч.) — конкретный или общий предмет: J'aime le café.",
      "Неопределённый: un, une, des — один из многих, впервые упоминаем: J'ai un frère.",
      "Частичный: du, de la, de l', des — неопределённое количество (еда, напитки, абстракции): Je bois du café.",
      "После отрицания un/une/du/de la/des → de (d'): Je n'ai pas de voiture. Je ne bois pas de café.",
      "Слияние с предлогами: à + le = au, à + les = aux, de + le = du, de + les = des.",
    ],
    examples: [
      { de: "Je voudrais du pain et de l'eau.", ru: "Я бы хотел хлеба и воды." },
      { de: "Je n'ai pas d'enfants.", ru: "У меня нет детей." },
      { de: "Je vais au marché.", ru: "Я иду на рынок." },
    ],
    exercises: parseExercises("fart", "A1", `
choice | J'aime ___ chocolat. | le ~ du ~ un ~ de | le | Вкусы, общее понятие — определённый артикль.
choice | Je bois ___ eau. | de l' ~ le ~ un ~ des | de l' | Частичный артикль перед гласной — de l'.
choice | J'ai ___ sœur. | une ~ la ~ de la ~ un | une | Одна из многих — une.
choice | Je ne mange pas ___ viande. | de ~ la ~ de la ~ une | de | После отрицания — de.
fill | Je vais ___ cinéma. (à + le) | au | à + le = au.
choice | Tu veux ___ fromage ? | du ~ le ~ un ~ de | du | Некоторое количество — du.
choice | ___ enfants jouent dans le jardin. | Les ~ Des ~ Le ~ La | Les | Конкретные дети — les.
choice | C'est ___ maison de Pierre. | la ~ une ~ de la ~ des | la | Конкретный дом — la.
fill | Elle parle ___ professeurs. (à + les) | aux | à + les = aux.
choice | Il a ___ amis à Lyon. | des ~ les ~ du ~ de | des | Несколько (неопред.) — des.
choice | Je n'ai pas ___ argent. | d' ~ de l' ~ l' ~ des | d' | После отрицания — d' перед гласной.
fill | C'est le livre ___ professeur. (de + le) | du | de + le = du.
choice | Il fait ___ sport. | du ~ le ~ un ~ de | du | faire du sport.
choice | ___ hôtel est complet. | L' ~ Le ~ La ~ Un' | L' | Перед немой h — l'.
choice | On achète ___ pommes. | des ~ du ~ de la ~ les | des | Неопределённое количество (мн.) — des.
`),
  },
  {
    id: "fr-present-er",
    title: "Présent: глаголы на -er",
    level: "A1",
    summary: "Спряжение правильных глаголов 1-й группы",
    explanation: [
      "Основа + окончания: -e, -es, -e, -ons, -ez, -ent. parler → je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent.",
      "Окончания -e, -es, -ent не произносятся: parle, parles, parlent звучат одинаково.",
      "Особенности: manger → nous mangeons, commencer → nous commençons, acheter → j'achète, appeler → j'appelle.",
      "Отрицание обнимает глагол: ne … pas: Je ne parle pas anglais.",
    ],
    examples: [
      { de: "Nous habitons à Marseille.", ru: "Мы живём в Марселе." },
      { de: "Ils travaillent beaucoup.", ru: "Они много работают." },
      { de: "Je ne fume pas.", ru: "Я не курю." },
    ],
    exercises: parseExercises("fer", "A1", `
choice | Je ___ français. | parle ~ parles ~ parlons ~ parlent | parle | je parle.
choice | Nous ___ à Lyon. | habitons ~ habitez ~ habitent ~ habite | habitons | nous -ons.
fill | Vous ___ (travailler) où ? | travaillez | vous -ez.
choice | Ils ___ la télé. | regardent ~ regardez ~ regarde ~ regardons | regardent | ils -ent.
choice | Tu ___ le café ? | aimes ~ aime ~ aimez ~ aiment | aimes | tu -es.
fill | Nous ___ (manger) à midi. | mangeons | manger → mangeons (сохраняем e).
choice | Elle ___ une robe. | achète ~ achete ~ achètes ~ achetons | achète | acheter → j'achète, elle achète.
fill | Je ne ___ (fumer) pas. | fume | ne + глагол + pas.
choice | On ___ le bus. | attend ~ attendons ~ attends ~ attendent | attend | on = 3-е лицо ед.ч. (attendre — -re глагол).
choice | Nous ___ le cours à 9 h. | commençons ~ commencons ~ commencez ~ commencent | commençons | c → ç перед o.
fill | Tu ___ (écouter) la radio ? | écoutes | tu écoutes.
choice | Ils ___ beaucoup. | voyagent ~ voyageons ~ voyagez ~ voyage | voyagent | ils voyagent.
choice | Je m'___ Anna. | appelle ~ appele ~ appelles ~ appelons | appelle | appeler → je m'appelle (удвоение l).
fill | Vous ___ (aimer) le cinéma ? | aimez | vous aimez.
choice | Elle ne ___ pas le poisson. | mange ~ manges ~ mangent ~ mangeons | mange | elle mange.
`),
  },
  {
    id: "fr-present-irreg",
    title: "Présent: aller, faire, prendre, venir…",
    level: "A1",
    summary: "Самые частые неправильные глаголы",
    explanation: [
      "aller: je vais, tu vas, il va, nous allons, vous allez, ils vont.",
      "faire: je fais, tu fais, il fait, nous faisons, vous faites, ils font.",
      "prendre: je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent.",
      "venir: je viens, tu viens, il vient, nous venons, vous venez, ils viennent.",
      "pouvoir / vouloir / devoir: je peux / veux / dois — vous pouvez / voulez / devez — ils peuvent / veulent / doivent.",
    ],
    examples: [
      { de: "Je vais au travail en métro.", ru: "Я езжу на работу на метро." },
      { de: "Qu'est-ce que vous faites ce soir ?", ru: "Что вы делаете сегодня вечером?" },
      { de: "Ils viennent de Russie.", ru: "Они из России." },
    ],
    exercises: parseExercises("firr", "A1", `
choice | Je ___ à la plage. | vais ~ va ~ vas ~ allons | vais | aller: je vais.
choice | Vous ___ quoi ce week-end ? | faites ~ faisez ~ font ~ fais | faites | faire: vous faites.
fill | Ils ___ (aller) à Paris. | vont | aller: ils vont.
choice | Nous ___ le train. | prenons ~ prennons ~ prenez ~ prennent | prenons | prendre: nous prenons.
choice | Tu ___ d'où ? | viens ~ vient ~ venez ~ viennent | viens | venir: tu viens.
fill | Je ___ (pouvoir) vous aider ? | peux | pouvoir: je peux.
choice | Ils ___ partir. | veulent ~ voulent ~ veut ~ voulez | veulent | vouloir: ils veulent.
fill | Nous ___ (faire) du sport. | faisons | faire: nous faisons.
choice | Elle ___ un café. | prend ~ prends ~ prenent ~ prendre | prend | prendre: elle prend.
choice | Vous ___ venir demain ? | pouvez ~ peuvez ~ pouvons ~ peux | pouvez | pouvoir: vous pouvez.
fill | Ils ___ (venir) ce soir. | viennent | venir: ils viennent.
choice | Je ___ travailler demain. | dois ~ doit ~ devons ~ doivent | dois | devoir: je dois.
choice | On ___ au cinéma ? | va ~ vont ~ allons ~ vais | va | on va.
fill | Ils ___ (faire) les courses. | font | faire: ils font.
choice | Tu ___ un thé ? | veux ~ veut ~ voulez ~ voulons | veux | vouloir: tu veux.
`),
  },
  {
    id: "fr-negation-questions",
    title: "Négation & questions",
    level: "A1",
    summary: "ne…pas, ne…jamais; три способа задать вопрос",
    explanation: [
      "Отрицание: ne + глагол + pas. Также ne…jamais (никогда), ne…plus (больше не), ne…rien (ничего), ne…personne (никто).",
      "В разговоре ne часто опускают: Je sais pas.",
      "Вопрос: 1) интонацией — Tu viens ? 2) Est-ce que tu viens ? 3) инверсией — Viens-tu ? (формально).",
      "Вопросительные слова: où, quand, comment, pourquoi, combien, qui, que/quoi, quel.",
    ],
    examples: [
      { de: "Je ne mange jamais de viande.", ru: "Я никогда не ем мясо." },
      { de: "Est-ce que vous parlez anglais ?", ru: "Вы говорите по-английски?" },
      { de: "Où habitez-vous ?", ru: "Где вы живёте?" },
    ],
    exercises: parseExercises("fneg", "A1", `
choice | Je ___ parle pas allemand. | ne ~ pas ~ non ~ n' | ne | ne … pas.
fill | Il ne fume ___. (никогда) | jamais | ne … jamais.
choice | Je n'habite ___ à Paris. (больше не) | plus ~ pas plus ~ jamais ~ rien | plus | ne … plus — больше не.
choice | ___ tu viens ce soir ? | Est-ce que ~ Qu'est-ce que ~ Où ~ Quoi | Est-ce que | Общий вопрос — est-ce que.
choice | ___ habites-tu ? | Où ~ Quand ~ Qui ~ Quoi | Où | Где — où.
fill | Je ne vois ___. (никого) | personne | ne … personne.
choice | ___ coûte ce livre ? | Combien ~ Comment ~ Quand ~ Qui | Combien | Сколько — combien.
choice | Il ne dit ___. | rien ~ jamais ~ personne ~ plus | rien | ne … rien — ничего.
fill | ___ t'appelles-tu ? (как) | Comment | Comment t'appelles-tu ?
choice | ___ est-ce que tu fais ? | Qu' ~ Qui ~ Où ~ Quel | Qu' | Что — qu'est-ce que.
choice | ___ heure est-il ? | Quelle ~ Quel ~ Quels ~ Qu' | Quelle | heure — ж.р.: quelle.
fill | ___ tu pars si tôt ? (почему) | Pourquoi | Почему — pourquoi.
choice | Parlez-___ français ? | vous ~ tu ~ il ~ nous | vous | Инверсия: Parlez-vous ?
choice | Je n'ai ___ voiture. | pas de ~ pas une ~ pas la ~ pas du | pas de | После отрицания — de.
choice | ___ est ton acteur préféré ? | Qui ~ Que ~ Quoi ~ Où | Qui | О человеке — qui.
`),
  },
  {
    id: "fr-adjectifs-accord",
    title: "Adjectifs: род, число, место",
    level: "A2",
    summary: "Согласование прилагательных",
    explanation: [
      "Женский род обычно + -e: grand → grande. Если уже на -e — без изменений: jeune.",
      "Особые формы: -eux → -euse (heureux → heureuse), -if → -ive (sportif → sportive), -er → -ère (cher → chère), удвоение (bon → bonne, gentil → gentille).",
      "Множественное + -s: grands, grandes. -eau → -eaux, -al → -aux (national → nationaux).",
      "Большинство прилагательных стоит ПОСЛЕ существительного: une voiture rouge. Перед ним — короткие частые: beau, bon, grand, petit, jeune, vieux, nouveau, joli, mauvais.",
      "beau / nouveau / vieux перед гласной в м.р.: bel, nouvel, vieil (un bel homme).",
    ],
    examples: [
      { de: "Une petite maison blanche.", ru: "Маленький белый дом." },
      { de: "Elle est heureuse et très sportive.", ru: "Она счастливая и очень спортивная." },
    ],
    exercises: parseExercises("fadj", "A2", `
choice | Une robe ___. | noire ~ noir ~ noirs ~ noires | noire | Ж.р. ед.ч. — + e.
choice | Elle est ___. | heureuse ~ heureux ~ heureuxe ~ heureuses | heureuse | -eux → -euse.
fill | Des fleurs ___ (blanc). | blanches | blanc → blanche → blanches.
choice | Un ___ appartement. | bel ~ beau ~ belle ~ beaux | bel | Перед гласной м.р.: bel.
choice | Une ___ idée. | bonne ~ bon ~ bonnes ~ bone | bonne | bon → bonne.
choice | Ma sœur est très ___. | sportive ~ sportif ~ sportiv ~ sportives | sportive | -if → -ive.
fill | Des problèmes ___ (national). | nationaux | -al → -aux.
choice | Une voiture ___. | rouge ~ rouges ~ rougee ~ rouger | rouge | Уже на -e — без изменений.
choice | C'est une ___ amie. | vieille ~ vieux ~ vieil ~ vieilles | vieille | vieux → vieille.
choice | Les ___ chaussures. | nouvelles ~ nouveaux ~ nouvel ~ nouvelle | nouvelles | Ж.р. мн.ч. — nouvelles.
fill | La ville est ___ (beau). | belle | beau → belle.
choice | Une chemise ___. | chère ~ cher ~ chers ~ chères | chère | -er → -ère.
choice | Un homme ___. | grand ~ grande ~ grands ~ grandes | grand | М.р. ед.ч.
choice | Une fille ___. | gentille ~ gentile ~ gentil ~ gentils | gentille | gentil → gentille.
choice | J'ai acheté une ___ voiture ___. | petite / rouge ~ rouge / petite ~ petite / rouges ~ petit / rouge | petite / rouge | petit — перед, цвет — после.
`),
  },
  {
    id: "fr-passe-compose",
    title: "Passé composé",
    level: "A2",
    summary: "Основное прошедшее время разговорной речи",
    explanation: [
      "avoir/être в настоящем + participe passé: J'ai mangé. Elle est partie.",
      "Участие: -er → -é (parlé), -ir → -i (fini), -re → -u (vendu). Неправильные: fait, pris, mis, dit, écrit, vu, lu, bu, eu, été, pu, voulu.",
      "С être спрягаются глаголы движения/состояния (aller, venir, partir, arriver, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, devenir, revenir, rentrer) и все возвратные.",
      "С être причастие согласуется с подлежащим: Elle est allée. Ils sont partis.",
      "Отрицание: Je n'ai pas mangé.",
    ],
    examples: [
      { de: "Hier, j'ai vu un bon film.", ru: "Вчера я посмотрел хороший фильм." },
      { de: "Nous sommes arrivés à Paris lundi.", ru: "Мы приехали в Париж в понедельник." },
      { de: "Elle s'est levée tôt.", ru: "Она рано встала." },
    ],
    exercises: parseExercises("fpc", "A2", `
choice | Hier, j'___ mangé au restaurant. | ai ~ suis ~ as ~ est | ai | manger — с avoir.
choice | Elle ___ partie à 8 h. | est ~ a ~ es ~ ai | est | partir — с être.
fill | Nous avons ___ (finir) le travail. | fini | finir → fini.
choice | Ils sont ___ en retard. | arrivés ~ arrivé ~ arrivée ~ arrivées | arrivés | être + согласование (ils → -s).
fill | J'ai ___ (prendre) le métro. | pris | prendre → pris.
choice | Tu ___ vu ce film ? | as ~ es ~ a ~ est | as | voir — с avoir.
choice | Elle s'est ___ à 7 h. | levée ~ levé ~ levés ~ lever | levée | Возвратный — с être, согласование (elle → -e).
fill | Je n'ai pas ___ (faire) mes devoirs. | fait | faire → fait.
choice | Nous ___ allés au cinéma. | sommes ~ avons ~ êtes ~ ont | sommes | aller — с être.
fill | Il a ___ (écrire) une lettre. | écrit | écrire → écrit.
choice | Marie est ___ en 1990. | née ~ né ~ nés ~ naît | née | naître — être, ж.р.: née.
choice | Vous avez ___ la nouvelle ? | lu ~ lis ~ lit ~ lire | lu | lire → lu.
fill | Elles sont ___ (rester) à la maison. | restées | être + ж.р. мн.ч.: restées.
choice | J'___ eu de la chance. | ai ~ suis ~ as ~ a | ai | avoir → j'ai eu.
choice | Ils ont ___ du vin. | bu ~ buvé ~ boivé ~ boit | bu | boire → bu.
`),
  },
  {
    id: "fr-futur",
    title: "Futur proche & futur simple",
    level: "A2",
    summary: "aller + infinitif и будущее время",
    explanation: [
      "Futur proche: aller (в настоящем) + инфинитив — ближайшее/запланированное будущее: Je vais partir. Il va pleuvoir.",
      "Futur simple: инфинитив + -ai, -as, -a, -ons, -ez, -ont: je parlerai, nous finirons. У -re отпадает e: je prendrai.",
      "Неправильные основы: être → ser-, avoir → aur-, aller → ir-, faire → fer-, venir → viendr-, pouvoir → pourr-, vouloir → voudr-, voir → verr-, devoir → devr-, savoir → saur-.",
      "После quand о будущем — futur: Quand j'arriverai, je t'appellerai.",
    ],
    examples: [
      { de: "Ce soir, on va regarder un film.", ru: "Сегодня вечером мы посмотрим фильм." },
      { de: "L'année prochaine, j'irai en France.", ru: "В следующем году я поеду во Францию." },
    ],
    exercises: parseExercises("ffu", "A2", `
choice | Je ___ partir demain. | vais ~ va ~ vas ~ allons | vais | Futur proche: je vais + инф.
fill | Il ___ (aller, futur proche) pleuvoir. | va | il va + инф.
choice | Demain, nous ___ au musée. | irons ~ allerons ~ irez ~ allons aller | irons | aller → ir-: nous irons.
choice | Tu ___ content. | seras ~ sera ~ seras être ~ es | seras | être → ser-: tu seras.
fill | Je ___ (parler) avec lui demain. | parlerai | parler → je parlerai.
choice | Ils ___ beaucoup de travail. | auront ~ avront ~ auraient ~ ont | auront | avoir → aur-.
choice | Quand tu ___, appelle-moi. | arriveras ~ arrives ~ arrivais ~ arriver | arriveras | После quand о будущем — futur.
fill | Nous ___ (faire) une fête. | ferons | faire → fer-: nous ferons.
choice | Vous ___ venir ? | pourrez ~ pouvrez ~ pourriez ~ pouvez | pourrez | pouvoir → pourr-.
choice | Elle ___ demain. | viendra ~ venira ~ viendrait ~ vient | viendra | venir → viendr-.
fill | Je ___ (prendre) le train. | prendrai | prendre → je prendrai (без e).
choice | On ___ voir. | verra ~ voira ~ verrait ~ voit | verra | voir → verr-: on verra.
choice | Ils vont ___ à Paris. | habiter ~ habitent ~ habité ~ habiteront | habiter | aller + инфинитив.
fill | Tu ___ (devoir) partir tôt. | devras | devoir → devr-: tu devras.
choice | Je ___ la réponse demain. | saurai ~ savrai ~ sauraient ~ sais | saurai | savoir → saur-.
`),
  },
  {
    id: "fr-pronoms-cod-coi",
    title: "Pronoms: le, la, lui, leur, y, en",
    level: "B1",
    summary: "Местоимения-дополнения",
    explanation: [
      "Прямое дополнение (COD): me, te, le, la, l', nous, vous, les — Je le vois. Je les connais.",
      "Косвенное (COI, à + человек): me, te, lui, nous, vous, leur — Je lui parle. Je leur téléphone.",
      "y заменяет à + место/вещь: Je vais à Paris → J'y vais. en заменяет de + …/количество: Tu veux du café ? — Oui, j'en veux. J'en ai deux.",
      "Местоимение стоит перед глаголом: Je ne le vois pas. В passé composé — перед вспомогательным: Je l'ai vu. В повелительном утвердительном — после: Donne-le-moi.",
    ],
    examples: [
      { de: "Tu connais Marie ? — Oui, je la connais.", ru: "Ты знаешь Мари? — Да, знаю." },
      { de: "J'ai téléphoné à mes parents. Je leur ai dit la vérité.", ru: "Я позвонил родителям. Я сказал им правду." },
    ],
    exercises: parseExercises("fpro", "B1", `
choice | Tu vois Paul ? — Oui, je ___ vois. | le ~ lui ~ la ~ leur | le | COD, м.р. — le.
choice | Tu parles à Marie ? — Oui, je ___ parle. | lui ~ la ~ le ~ leur | lui | parler à + человек — lui.
choice | Tu vas à la poste ? — Oui, j'___ vais. | y ~ en ~ le ~ lui | y | à + место — y.
choice | Tu veux du thé ? — Oui, j'___ veux. | en ~ y ~ le ~ la | en | de + … — en.
fill | Je téléphone à mes parents. → Je ___ téléphone. | leur | à + люди (мн.) — leur.
choice | Tu as les clés ? — Oui, je ___ ai. | les ~ leur ~ en ~ y | les | COD мн.ч. — les.
choice | Tu as vu le film ? — Oui, je l'ai ___. | vu ~ vue ~ vus ~ voir | vu | le (м.р.) — без согласования.
choice | Combien de frères as-tu ? — J'___ ai deux. | en ~ y ~ les ~ leur | en | Количество — en.
fill | Tu connais ces filles ? — Non, je ne ___ connais pas. | les | COD мн.ч. — les.
choice | Elle ___ a donné un cadeau. (мне) | m' ~ me ~ moi ~ lui | m' | me перед гласной — m'.
choice | Tu penses à ton examen ? — Oui, j'___ pense. | y ~ en ~ lui ~ le | y | penser à + вещь — y.
choice | Donne-___ ! (мне) | moi ~ me ~ m' ~ je | moi | В утвердительном императиве — moi.
fill | Tu as acheté la robe ? — Oui, je l'ai ___ (acheter). | achetée | COD la перед avoir → согласование: achetée.
choice | Il parle de son travail ? — Oui, il ___ parle souvent. | en ~ y ~ le ~ lui | en | parler de + вещь — en.
choice | Je ne ___ ai pas vus. (их) | les ~ leur ~ en ~ y | les | COD мн.ч.
`),
  },
  {
    id: "fr-imparfait",
    title: "Imparfait vs passé composé",
    level: "B1",
    summary: "Фон, привычки и описания в прошлом",
    explanation: [
      "Imparfait: основа nous-формы настоящего (nous parl-ons) + -ais, -ais, -ait, -ions, -iez, -aient. Исключение: être → j'étais.",
      "Imparfait — описание, фон, состояние, привычка в прошлом: Quand j'étais petit, je jouais au foot.",
      "Passé composé — законченное действие, событие: Hier, j'ai joué au foot.",
      "Вместе: фон (imparfait) + событие (passé composé): Je dormais quand le téléphone a sonné.",
    ],
    examples: [
      { de: "Il faisait beau et nous étions à la plage.", ru: "Была хорошая погода, и мы были на пляже." },
      { de: "Quand je suis entré, ils regardaient la télé.", ru: "Когда я вошёл, они смотрели телевизор." },
    ],
    exercises: parseExercises("fimp", "B1", `
choice | Quand j'étais petit, je ___ à la campagne. | vivais ~ ai vécu ~ vis ~ vivrai | vivais | Привычка/фон в прошлом — imparfait.
choice | Hier, j'___ un accident. | ai vu ~ voyais ~ vois ~ verrai | ai vu | Конкретное событие — passé composé.
fill | Il ___ (faire) froid ce jour-là. | faisait | Описание — imparfait: il faisait.
choice | Je dormais quand le téléphone ___. | a sonné ~ sonnait ~ sonne ~ sonnera | a sonné | Событие на фоне — passé composé.
fill | Nous ___ (être) très fatigués. | étions | être → nous étions.
choice | Avant, il ___ beaucoup. | fumait ~ a fumé ~ fume ~ fumera | fumait | Привычка в прошлом — imparfait.
choice | Elle ___ la maison à 8 h et elle est partie. | a quitté ~ quittait ~ quitte ~ quittera | a quitté | Последовательность событий — passé composé.
fill | Tu ___ (avoir) quel âge en 2010 ? | avais | avoir → tu avais.
choice | Pendant que je cuisinais, il ___ la table. | mettait ~ a mis ~ met ~ mettra | mettait | Два параллельных процесса — imparfait.
choice | Soudain, quelqu'un ___ à la porte. | a frappé ~ frappait ~ frappe ~ frappera | a frappé | soudain — событие.
fill | On ___ (aller) à la plage tous les étés. | allait | Регулярность — imparfait.
choice | Il était une fois une princesse qui ___ dans un château. | vivait ~ a vécu ~ vit ~ vivra | vivait | Описание в сказке — imparfait.
choice | J'___ trois fois en Italie. | suis allé ~ allais ~ vais ~ irai | suis allé | Количество раз — passé composé.
fill | Quand nous ___ (arriver), il pleuvait. | sommes arrivés | Событие — passé composé.
choice | Le ciel ___ gris et il y avait du vent. | était ~ a été ~ est ~ sera | était | Описание — imparfait.
`),
  },
  {
    id: "fr-reflexifs",
    title: "Verbes pronominaux",
    level: "A2",
    summary: "Возвратные глаголы: se lever, s'appeler",
    explanation: [
      "Возвратное местоимение согласуется с подлежащим: je me, tu te, il se, nous nous, vous vous, ils se.",
      "Повседневные: se lever, se laver, s'habiller, se coucher, se réveiller, se promener, se dépêcher, s'appeler.",
      "Отрицание: Je ne me lève pas. Повелительное: Lève-toi ! Ne te lève pas !",
      "Passé composé — всегда с être: Je me suis levé(e).",
    ],
    examples: [
      { de: "Je me lève à sept heures.", ru: "Я встаю в семь часов." },
      { de: "Dépêche-toi !", ru: "Поторопись!" },
    ],
    exercises: parseExercises("fref", "A2", `
choice | Je ___ lève tôt. | me ~ te ~ se ~ nous | me | je me.
choice | Tu ___ appelles comment ? | t' ~ m' ~ s' ~ vous | t' | tu te → t' перед гласной.
fill | Nous ___ promenons au parc. | nous | nous nous.
choice | Ils ___ couchent tard. | se ~ me ~ nous ~ vous | se | ils se.
choice | Vous ___ dépêchez ? | vous ~ se ~ nous ~ te | vous | vous vous.
fill | Elle ___ habille vite. | s' | elle se → s' перед гласной.
choice | ___-toi ! (вставай) | Lève ~ Lèves ~ Lever ~ Levez | Lève | Императив: Lève-toi !
choice | Hier, je me ___ réveillé tard. | suis ~ ai ~ es ~ sommes | suis | Возвратные — с être.
choice | Elle s'est ___ à minuit. | couchée ~ couché ~ couchés ~ coucher | couchée | Согласование с elle.
fill | Je ne me ___ (sentir) pas bien. | sens | se sentir: je me sens.
choice | Ne ___ inquiète pas ! | t' ~ te ~ toi ~ s' | t' | Отрицательный императив: Ne t'inquiète pas.
choice | Nous nous ___ mariés en 2015. | sommes ~ avons ~ êtes ~ sont | sommes | С être.
fill | Ils se ___ (disputer) souvent. | disputent | ils se disputent.
choice | Comment vous ___-vous ? | appelez ~ appelle ~ appellez ~ appeler | appelez | vous vous appelez.
choice | Tu te ___ les mains ? | laves ~ lave ~ lavez ~ laver | laves | tu te laves.
`),
  },
  {
    id: "fr-comparaison",
    title: "Comparatif & superlatif",
    level: "A2",
    summary: "plus … que, le plus, meilleur",
    explanation: [
      "Сравнение: plus / moins / aussi + прил. + que: Paul est plus grand que Marc.",
      "С существительными: plus de / moins de / autant de + сущ. + que.",
      "Превосходная: le/la/les plus (moins) + прил.: la ville la plus belle.",
      "Исключения: bon → meilleur → le meilleur; bien → mieux → le mieux; mauvais → pire (или plus mauvais).",
    ],
    examples: [
      { de: "Le train est plus rapide que le bus.", ru: "Поезд быстрее автобуса." },
      { de: "C'est le meilleur restaurant de la ville.", ru: "Это лучший ресторан в городе." },
    ],
    exercises: parseExercises("fcmp", "A2", `
choice | Le TGV est ___ rapide que le bus. | plus ~ plus de ~ le plus ~ meilleur | plus | Сравнение: plus + прил. + que.
choice | Ce gâteau est ___ que l'autre. | meilleur ~ plus bon ~ mieux ~ bon | meilleur | bon → meilleur.
fill | Elle chante ___ que moi. (лучше, наречие) | mieux | bien → mieux.
choice | C'est la ville ___ belle de France. | la plus ~ plus ~ le plus ~ la meilleure | la plus | Превосходная ж.р.: la plus.
choice | Il a ___ livres que moi. | plus de ~ plus ~ plus des ~ le plus | plus de | С существительным — plus de.
choice | Marie est ___ grande que sa sœur. (такая же) | aussi ~ autant ~ si ~ plus | aussi | Равенство с прил. — aussi.
fill | C'est le ___ jour de ma vie. (лучший) | meilleur | le meilleur.
choice | J'ai ___ de travail que toi. (столько же) | autant ~ aussi ~ autant que ~ si | autant | Равенство с сущ. — autant de.
choice | Paris est plus grand ___ Lyon. | que ~ de ~ comme ~ qu' | que | plus … que.
choice | C'est le film ___ intéressant de l'année. | le plus ~ plus ~ la plus ~ meilleur | le plus | Превосходная м.р.: le plus.
fill | Ce vin est ___ cher que l'autre. (менее) | moins | moins … que.
choice | C'est ___ solution. (худшее) | la pire ~ la plus mauvais ~ le pire ~ pire | la pire | mauvais → pire; ж.р.: la pire.
choice | Il travaille ___ que moi. (больше) | plus ~ plus de ~ meilleur ~ le plus | plus | С глаголом — plus.
fill | C'est l'élève le ___ sérieux de la classe. | plus | le plus sérieux.
choice | Elle parle français ___ que son frère. | mieux ~ meilleur ~ plus bien ~ bon | mieux | Наречие bien → mieux.
`),
  },
  {
    id: "fr-conditionnel",
    title: "Conditionnel & si",
    level: "B1",
    summary: "Вежливость, пожелания, условные предложения",
    explanation: [
      "Conditionnel présent = основа futur + окончания imparfait: je voudrais, tu pourrais, il serait, nous aurions.",
      "Вежливость: Je voudrais un café. Pourriez-vous m'aider ?",
      "Si + présent → futur (реальное): Si tu viens, on ira au cinéma.",
      "Si + imparfait → conditionnel (нереальное настоящее): Si j'avais de l'argent, j'achèterais une maison.",
      "Si + plus-que-parfait → conditionnel passé (нереальное прошлое): Si j'avais su, je serais venu.",
      "После si никогда не ставится futur или conditionnel.",
    ],
    examples: [
      { de: "Si j'étais toi, je partirais.", ru: "На твоём месте я бы уехал." },
      { de: "Vous pourriez parler plus lentement ?", ru: "Не могли бы вы говорить медленнее?" },
    ],
    exercises: parseExercises("fcond", "B1", `
choice | Je ___ un café, s'il vous plaît. | voudrais ~ veux bien ~ voudrai ~ voulais | voudrais | Вежливая просьба — conditionnel.
choice | Si j'avais le temps, je ___ le français. | apprendrais ~ apprendrai ~ apprends ~ apprenais | apprendrais | si + imparfait → conditionnel.
fill | Si tu viens, nous ___ (aller) au parc. | irons | si + présent → futur.
choice | ___-vous m'aider ? | Pourriez ~ Pourrez ~ Pouvriez ~ Pouviez | Pourriez | Вежливо — conditionnel.
choice | Si j'___ riche, je voyagerais. | étais ~ serais ~ suis ~ serai | étais | После si — imparfait.
fill | À ta place, je ___ (dire) la vérité. | dirais | dire → je dirais.
choice | Si j'avais su, je ___ venu. | serais ~ suis ~ étais ~ serai | serais | Нереальное прошлое: conditionnel passé.
choice | Nous ___ aimé venir. | aurions ~ avons ~ aurons ~ avions | aurions | Сожаление: nous aurions aimé.
fill | Si tu ___ (pouvoir), tu viendrais ? | pouvais | si + imparfait.
choice | Il ___ mieux partir maintenant. | vaudrait ~ vaut ~ vaudra ~ valait | vaudrait | il vaudrait mieux — лучше бы.
choice | S'il pleut, je ___ à la maison. | resterai ~ resterais ~ restais ~ reste | resterai | si + présent → futur.
fill | J'___ (aimer) visiter Rome. | aimerais | aimer → j'aimerais.
choice | Si elle avait étudié, elle ___ réussi. | aurait ~ avait ~ aura ~ a | aurait | conditionnel passé: aurait réussi.
choice | Tu ___ dû me le dire ! | aurais ~ avais ~ auras ~ as | aurais | Упрёк: tu aurais dû.
fill | Si nous ___ (avoir) une voiture, nous partirions. | avions | si + imparfait.
`),
  },
  {
    id: "fr-relatifs",
    title: "Pronoms relatifs: qui, que, où, dont",
    level: "B1",
    summary: "Относительные местоимения",
    explanation: [
      "qui — подлежащее: L'homme qui parle est mon père.",
      "que (qu') — прямое дополнение: Le livre que je lis est bon.",
      "où — место и время: La ville où j'habite. Le jour où je suis né.",
      "dont — заменяет de + …: Le film dont je parle (parler de). La femme dont le fils est médecin.",
      "ce qui / ce que — «то, что»: Ce qui m'intéresse, c'est… Je comprends ce que tu dis.",
    ],
    examples: [
      { de: "C'est la ville où je suis né.", ru: "Это город, где я родился." },
      { de: "Voilà le collègue dont je t'ai parlé.", ru: "Вот коллега, о котором я тебе говорил." },
    ],
    exercises: parseExercises("frel", "B1", `
choice | La femme ___ parle est ma mère. | qui ~ que ~ dont ~ où | qui | Подлежащее — qui.
choice | Le film ___ j'ai vu était génial. | que ~ qui ~ dont ~ où | que | Прямое дополнение — que.
choice | La ville ___ j'habite est petite. | où ~ que ~ qui ~ dont | où | Место — où.
choice | Le livre ___ je parle est célèbre. | dont ~ que ~ qui ~ où | dont | parler de — dont.
fill | C'est le jour ___ nous nous sommes rencontrés. | où | Время — où.
choice | L'ami ___ je t'ai présenté vit à Nice. | que ~ qui ~ dont ~ où | que | présenter quelqu'un — COD → que.
choice | Je ne comprends pas ___ tu dis. | ce que ~ ce qui ~ que ~ qui | ce que | «то, что» (дополнение) — ce que.
choice | ___ m'intéresse, c'est l'histoire. | Ce qui ~ Ce que ~ Qui ~ Que | Ce qui | «то, что» (подлежащее) — ce qui.
fill | La maison ___ j'ai achetée est vieille. | que | Дополнение — que.
choice | C'est un homme ___ tout le monde respecte. | que ~ qui ~ dont ~ où | que | Дополнение — que.
choice | Voici la collègue ___ le mari est français. | dont ~ que ~ qui ~ où | dont | Принадлежность — dont.
choice | Le bus ___ va à la gare part à 8 h. | qui ~ que ~ où ~ dont | qui | Подлежащее — qui.
fill | C'est quelque chose ___ j'ai besoin. (avoir besoin de) | dont | avoir besoin de — dont.
choice | Le restaurant ___ nous avons dîné était cher. | où ~ que ~ qui ~ dont | où | Место — où.
choice | Dis-moi ___ tu veux. | ce que ~ ce qui ~ que ~ qu' | ce que | Дополнение — ce que.
`),
  },
  {
    id: "fr-subjonctif",
    title: "Subjonctif présent",
    level: "B2",
    summary: "il faut que, bien que, je veux que…",
    explanation: [
      "Образование: основа ils-формы настоящего (ils parl-ent) + -e, -es, -e, -ions, -iez, -ent: que je parle, que nous parlions.",
      "Неправильные: être (que je sois), avoir (que j'aie), aller (que j'aille), faire (que je fasse), pouvoir (que je puisse), savoir (que je sache), vouloir (que je veuille).",
      "После выражений необходимости, желания, эмоций, сомнения: il faut que, je veux que, je suis content que, je doute que.",
      "После союзов: bien que, pour que, avant que, à condition que, sans que.",
      "Если подлежащее одно — инфинитив: Je veux partir (не «je veux que je parte»).",
    ],
    examples: [
      { de: "Il faut que tu fasses tes devoirs.", ru: "Тебе нужно сделать уроки." },
      { de: "Bien qu'il soit tard, je travaille.", ru: "Хотя уже поздно, я работаю." },
    ],
    exercises: parseExercises("fsub", "B2", `
choice | Il faut que tu ___ ce dossier. | finisses ~ finis ~ finiras ~ finir | finisses | il faut que + subjonctif.
choice | Je veux que vous ___ à l'heure. | soyez ~ êtes ~ serez ~ étiez | soyez | être → que vous soyez.
fill | Bien qu'il ___ (pleuvoir), nous sortons. | pleuve | pleuvoir → qu'il pleuve.
choice | Je suis content que tu ___ là. | sois ~ es ~ seras ~ étais | sois | Эмоция → subjonctif.
choice | Il faut que j'___ à la préfecture. | aille ~ vais ~ irai ~ allais | aille | aller → que j'aille.
fill | Pour que tu ___ (comprendre), je parle lentement. | comprennes | comprendre → que tu comprennes.
choice | Je doute qu'il ___ la réponse. | sache ~ sait ~ saura ~ savait | sache | Сомнение → subjonctif; savoir → sache.
choice | Il faut que nous ___ attention. | fassions ~ faisons ~ ferons ~ faisions | fassions | faire → que nous fassions.
choice | Je pense qu'il ___ raison. | a ~ ait ~ aura ~ avait | a | После je pense que (утверждение) — индикатив.
fill | Avant que tu ___ (partir), appelle-moi. | partes | avant que + subjonctif.
choice | Je veux ___ demain. (я сам) | partir ~ que je parte ~ que je pars ~ parte | partir | Одно подлежащее — инфинитив.
choice | C'est dommage que tu ne ___ pas venir. | puisses ~ peux ~ pourras ~ pouvais | puisses | pouvoir → que tu puisses.
fill | Il est important que vous ___ (avoir) vos papiers. | ayez | avoir → que vous ayez.
choice | Je ne crois pas qu'elle ___ malade. | soit ~ est ~ sera ~ était | soit | Отрицание мнения → subjonctif.
choice | À condition que tu ___ sage. | sois ~ es ~ seras ~ serais | sois | à condition que + subjonctif.
`),
  },
  {
    id: "fr-passif-gerondif",
    title: "Passif & gérondif",
    level: "B2",
    summary: "être + participe; en + -ant",
    explanation: [
      "Пассив: être (в нужном времени) + participe passé, согласованное с подлежащим: La loi a été votée. Les résultats seront publiés.",
      "Исполнитель — par (иногда de для чувств/состояний): Il est aimé de tous.",
      "Часто вместо пассива — on: On m'a volé mon vélo.",
      "Gérondif: en + основа nous-формы + -ant (parlant, faisant). Одновременность, способ, условие: Il chante en cuisinant. C'est en forgeant qu'on devient forgeron.",
      "Исключения: étant, ayant, sachant.",
    ],
    examples: [
      { de: "Votre demande a été acceptée.", ru: "Ваше заявление одобрено." },
      { de: "Je l'ai rencontré en sortant du métro.", ru: "Я встретил его, выходя из метро." },
    ],
    exercises: parseExercises("fpas", "B2", `
choice | La tour Eiffel ___ construite en 1889. | a été ~ a ~ est été ~ avait | a été | Пассив passé composé: a été + participe.
fill | Les résultats ___ (publier, futur) demain. | seront publiés | Пассив futur: seront + participe.
choice | Ce livre a été écrit ___ Victor Hugo. | par ~ de ~ avec ~ pour | par | Исполнитель — par.
choice | Elle chante ___ la vaisselle. | en faisant ~ en fait ~ faisant en ~ à faire | en faisant | Gérondif: en faisant.
choice | Votre dossier ___ traité. (сейчас обрабатывается) | est ~ a ~ sera été ~ était été | est | Пассив présent.
fill | Il s'est blessé en ___ (jouer) au foot. | jouant | Gérondif: en jouant.
choice | ___ m'a volé mon portefeuille. | On ~ Il ~ Ça ~ Se | On | Неопределённо-личное on.
choice | La décision ___ prise hier. | a été ~ était ~ est été ~ sera | a été | Законченное действие — a été prise.
choice | C'est en ___ qu'on apprend. | pratiquant ~ pratique ~ pratiqué ~ pratiquer | pratiquant | en + -ant.
fill | Les voleurs ___ (arrêter, passé composé). | ont été arrêtés | ont été + согласование.
choice | ___ malade, il est resté chez lui. | Étant ~ Être ~ Été ~ En étant | Étant | Причастие être — étant.
choice | Elle est respectée ___ ses collègues. | de ~ par ~ avec ~ chez | de | С глаголами чувств часто de.
fill | J'ai appris la nouvelle en ___ (lire) le journal. | lisant | lire → lisant.
choice | Le musée ___ fermé le mardi. | est ~ a ~ sera été ~ était été | est | Состояние — est fermé.
choice | En ___ tôt, tu éviteras les bouchons. | partant ~ part ~ parti ~ partir | partant | Условие — gérondif.
`),
  },
  {
    id: "fr-discours-indirect",
    title: "Discours indirect",
    level: "B2",
    summary: "Il dit que…, Elle m'a demandé si…",
    explanation: [
      "После глагола в настоящем время не меняется: Il dit qu'il est fatigué.",
      "После глагола в прошедшем — согласование времён: présent → imparfait, passé composé → plus-que-parfait, futur → conditionnel.",
      "Вопросы: est-ce que → si; qu'est-ce que → ce que; qu'est-ce qui → ce qui. Порядок слов прямой.",
      "Приказы: dire de + инфинитив: Il m'a dit de partir.",
      "Указатели: aujourd'hui → ce jour-là, demain → le lendemain, hier → la veille.",
    ],
    examples: [
      { de: "Elle a dit qu'elle viendrait le lendemain.", ru: "Она сказала, что придёт на следующий день." },
      { de: "Il m'a demandé ce que je faisais.", ru: "Он спросил, что я делаю." },
    ],
    exercises: parseExercises("fdi", "B2", `
choice | « Je suis malade. » → Il a dit qu'il ___ malade. | était ~ est ~ sera ~ soit | était | présent → imparfait.
choice | « Je viendrai. » → Elle a dit qu'elle ___. | viendrait ~ viendra ~ vient ~ venait | viendrait | futur → conditionnel.
fill | « Est-ce que tu viens ? » → Il m'a demandé ___ je venais. | si | est-ce que → si.
choice | « Qu'est-ce que tu fais ? » → Il m'a demandé ___ je faisais. | ce que ~ qu'est-ce que ~ que ~ ce qui | ce que | qu'est-ce que → ce que.
choice | « J'ai fini. » → Il a dit qu'il ___ fini. | avait ~ a ~ aura ~ aurait | avait | passé composé → plus-que-parfait.
fill | « Partez ! » → Il nous a dit ___ partir. | de | Приказ: dire de + инф.
choice | « Je pars demain. » → Il a dit qu'il partait ___. | le lendemain ~ demain ~ la veille ~ hier | le lendemain | demain → le lendemain.
choice | Il dit qu'il ___ fatigué. (сейчас) | est ~ était ~ serait ~ soit | est | Главный глагол в настоящем — без сдвига.
choice | « Qu'est-ce qui se passe ? » → Elle a demandé ___ se passait. | ce qui ~ ce que ~ qu'est-ce qui ~ qui | ce qui | qu'est-ce qui → ce qui.
fill | « Ne fume pas. » → Il m'a dit de ne ___ fumer. | pas | dire de ne pas + инф.
choice | « Où habites-tu ? » → Elle m'a demandé où j'___. | habitais ~ habite ~ habiterai ~ habité | habitais | présent → imparfait.
choice | « Je l'ai vu hier. » → Il a dit qu'il l'avait vu ___. | la veille ~ hier ~ le lendemain ~ demain | la veille | hier → la veille.
fill | « Tu peux m'aider ? » → Il m'a demandé si je ___ l'aider. | pouvais | présent → imparfait.
choice | Elle m'a dit qu'elle ___ m'appeler plus tard. | allait ~ va ~ ira ~ aille | allait | va + inf → allait + inf.
choice | Il a annoncé que la réunion ___ annulée. | était ~ est ~ sera ~ soit | était | présent → imparfait.
`),
  },
  {
    id: "fr-style-soutenu",
    title: "Style soutenu: passé simple, inversion, ne explétif",
    level: "C1",
    summary: "Книжные времена и формальный стиль",
    explanation: [
      "Passé simple — литературное прошедшее: il parla, ils finirent, il fut, il eut, il fit, il vint. В речи заменяется passé composé.",
      "Subjonctif imparfait (qu'il fût, qu'il eût) встречается только в классической литературе.",
      "Ne explétif — «пустое» ne без отрицательного смысла: avant qu'il ne parte, je crains qu'il ne vienne, plus grand que je ne pensais.",
      "Инверсия после peut-être, sans doute, à peine, aussi (= поэтому) в начале фразы: Peut-être viendra-t-il.",
      "Номинализация и формальные связки: Suite à votre demande…, Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
    ],
    examples: [
      { de: "Il ouvrit la porte et sortit sans un mot.", ru: "Он открыл дверь и вышел, не сказав ни слова." },
      { de: "À peine fut-il arrivé qu'il repartit.", ru: "Едва он прибыл, как снова уехал." },
    ],
    exercises: parseExercises("fsout", "C1", `
choice | Il ___ la porte et partit. (passé simple, ouvrir) | ouvrit ~ ouvra ~ a ouvert ~ ouvrait | ouvrit | ouvrir → il ouvrit.
choice | Ils ___ très heureux. (passé simple, être) | furent ~ étaient ~ sont été ~ fûrent | furent | être → ils furent.
fill | Elle ___ (avoir, passé simple) peur. | eut | avoir → elle eut.
choice | Partez avant qu'il ne ___ trop tard. | soit ~ est ~ sera ~ serait | soit | avant que (ne) + subjonctif.
choice | Peut-être ___ demain. | viendra-t-il ~ il viendra-t-il ~ vient-il ~ viendrait-il pas | viendra-t-il | Инверсия после peut-être.
choice | Il est plus intelligent que je ne le ___. | pensais ~ pense pas ~ pensai ~ pensasse | pensais | ne explétif в сравнении.
fill | Je crains qu'il ne ___ (être) en retard. | soit | craindre que (ne) + subjonctif.
choice | À peine ___ arrivé qu'il repartit. | fut-il ~ il fut ~ était-il pas ~ il était | fut-il | À peine + инверсия.
choice | Il ___ un grand discours. (passé simple, faire) | fit ~ faisa ~ fut ~ faisait | fit | faire → il fit.
choice | Je vous prie d'___, Madame, l'expression de mes salutations distinguées. | agréer ~ agréez ~ accepter ~ recevoir | agréer | Формула вежливости в письме.
fill | Ils ___ (venir, passé simple) à Paris en 1900. | vinrent | venir → ils vinrent.
choice | ___ à votre courrier du 3 mai, je vous informe que… | Suite ~ Après ~ Depuis ~ Selon | Suite | Suite à — в ответ на (офиц.).
choice | Sans doute ___ raison. | a-t-il ~ il a-t-il ~ il a pas ~ ait-il | a-t-il | Инверсия после sans doute.
choice | Il parla longtemps, puis il ___. | se tut ~ se taisa ~ s'est tu pas ~ se taisait | se tut | se taire → il se tut.
fill | Le roi ___ (mourir, passé simple) en 1715. | mourut | mourir → il mourut.
`),
  },
];
