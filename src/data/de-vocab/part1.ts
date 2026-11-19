import { parseVocab } from "../vocabParse";

// A1–A2: базовая лексика — дополнение существующих тем и новые бытовые темы.
export const PART1 = [
  ...parseVocab("begruessung", "A1", `
Hallo, wie geht's? | привет, как дела? | Hallo Tom, wie geht's? | Привет, Том, как дела? | 👋
Mir geht es gut. | у меня всё хорошо | Danke, mir geht es gut. | Спасибо, у меня всё хорошо. | 😊
Freut mich! | очень приятно! | Ich bin Anna. — Freut mich! | Я Анна. — Очень приятно!
Bis später! | до скорого! | Ich muss los, bis später! | Мне пора, до скорого!
Bis morgen! | до завтра! | Schönen Abend noch, bis morgen! | Хорошего вечера, до завтра!
Herzlich willkommen! | добро пожаловать! | Herzlich willkommen in Berlin! | Добро пожаловать в Берлин!
der Herr | господин | Guten Tag, Herr Müller! | Добрый день, господин Мюллер!
die Frau (Anrede) | госпожа | Frau Schmidt ist heute nicht da. | Госпожи Шмидт сегодня нет.
sich vorstellen | представляться | Darf ich mich kurz vorstellen? | Можно я коротко представлюсь?
duzen | обращаться на «ты» | Wollen wir uns duzen? | Давай перейдём на «ты»?
siezen | обращаться на «вы» | Im Büro siezen wir uns. | В офисе мы обращаемся друг к другу на «вы».
Wie bitte? | простите, что? (переспросить) | Wie bitte? Können Sie das wiederholen? | Простите? Можете повторить?
Ich verstehe nicht. | я не понимаю | Entschuldigung, ich verstehe nicht. | Извините, я не понимаю.
Sprechen Sie Englisch? | вы говорите по-английски? | Sprechen Sie vielleicht Englisch? | Вы, случайно, не говорите по-английски?
das Land | страна | Aus welchem Land kommst du? | Из какой ты страны? | 🌍
die Stadt | город | Ich wohne in einer kleinen Stadt. | Я живу в маленьком городе. | 🏙️
geboren | рождённый | Ich bin 1995 in Moskau geboren. | Я родился в 1995 году в Москве.
der Geburtstag | день рождения | Wann hast du Geburtstag? | Когда у тебя день рождения? | 🎂
die E-Mail-Adresse | адрес электронной почты | Wie ist Ihre E-Mail-Adresse? | Какой у вас адрес электронной почты? | 📧
buchstabieren | произносить по буквам | Können Sie Ihren Namen buchstabieren? | Можете назвать фамилию по буквам?
Gern geschehen. | не за что | Danke für die Hilfe! — Gern geschehen. | Спасибо за помощь! — Не за что.
Kein Problem. | без проблем | Kannst du morgen kommen? — Kein Problem. | Можешь прийти завтра? — Без проблем.
Viel Glück! | удачи! | Viel Glück bei der Prüfung! | Удачи на экзамене! | 🍀
Gute Besserung! | выздоравливай! | Du bist krank? Gute Besserung! | Ты болеешь? Выздоравливай!
Herzlichen Glückwunsch! | поздравляю! | Herzlichen Glückwunsch zum Geburtstag! | Поздравляю с днём рождения! | 🎉
Prost! | будем здоровы! (тост) | Auf deine Gesundheit, prost! | За твоё здоровье, будем! | 🥂
Guten Appetit! | приятного аппетита! | Das Essen ist fertig, guten Appetit! | Еда готова, приятного аппетита!
Schönes Wochenende! | хороших выходных! | Tschüss und schönes Wochenende! | Пока и хороших выходных!
`),

  ...parseVocab("familie", "A1", `
die Eltern | родители | Meine Eltern wohnen in Hamburg. | Мои родители живут в Гамбурге. | 👨‍👩‍👧
der Mann (Ehemann) | муж | Das ist mein Mann Peter. | Это мой муж Петер.
die Frau (Ehefrau) | жена | Seine Frau arbeitet als Ärztin. | Его жена работает врачом.
die Großmutter / die Oma | бабушка | Meine Oma backt den besten Kuchen. | Моя бабушка печёт лучший пирог. | 👵
der Großvater / der Opa | дедушка | Mein Opa ist 80 Jahre alt. | Моему дедушке 80 лет. | 👴
die Enkelin | внучка | Die Enkelin besucht ihre Großeltern. | Внучка навещает бабушку с дедушкой.
der Neffe | племянник | Mein Neffe geht schon in die Schule. | Мой племянник уже ходит в школу.
die Nichte | племянница | Meine Nichte ist drei Jahre alt. | Моей племяннице три года.
der Schwiegervater | свёкор, тесть | Mein Schwiegervater hilft uns oft. | Мой тесть часто нам помогает.
die Schwiegermutter | свекровь, тёща | Die Schwiegermutter kommt am Sonntag. | Тёща приезжает в воскресенье.
der Partner / die Partnerin | партнёр / партнёрша | Mein Partner kocht sehr gern. | Мой партнёр очень любит готовить.
geschieden | разведённый | Seine Eltern sind seit zehn Jahren geschieden. | Его родители в разводе уже десять лет.
verwitwet | овдовевший | Meine Tante ist seit zwei Jahren verwitwet. | Моя тётя овдовела два года назад.
die Hochzeit | свадьба | Die Hochzeit ist im Juni. | Свадьба в июне. | 💒
heiraten | жениться, выходить замуж | Sie wollen nächstes Jahr heiraten. | Они хотят пожениться в следующем году. | 💍
der Junge | мальчик | Der Junge spielt im Garten. | Мальчик играет в саду. | 👦
das Mädchen | девочка | Das Mädchen liest ein Buch. | Девочка читает книгу. | 👧
der Mensch | человек | Er ist ein sehr netter Mensch. | Он очень приятный человек.
die Leute | люди | Auf der Party waren viele Leute. | На вечеринке было много людей.
der Erwachsene | взрослый | Erwachsene zahlen fünf Euro Eintritt. | Взрослые платят за вход пять евро.
die Familie | семья | Wir sind eine große Familie. | Мы большая семья.
das Einzelkind | единственный ребёнок | Ich bin ein Einzelkind. | Я единственный ребёнок в семье.
die Zwillinge | близнецы | Die Zwillinge sehen sich sehr ähnlich. | Близнецы очень похожи друг на друга. | 👯
der Verwandte | родственник | Zu Weihnachten kommen alle Verwandten. | На Рождество приезжают все родственники.
ähnlich sehen | быть похожим | Du siehst deinem Vater sehr ähnlich. | Ты очень похож на своего отца.
jung | молодой | Meine Mutter ist noch jung. | Моя мама ещё молодая.
#A2
die Schwägerin | невестка, золовка, свояченица | Meine Schwägerin wohnt in Wien. | Моя невестка живёт в Вене.
der Schwager | шурин, деверь, зять | Mein Schwager ist Lehrer. | Мой шурин — учитель.
der Stiefvater | отчим | Ihr Stiefvater ist sehr nett. | Её отчим очень добрый.
die Patentante | крёстная | Meine Patentante schenkt mir immer Bücher. | Моя крёстная всегда дарит мне книги.
sich kümmern um | заботиться о | Sie kümmert sich um ihre kranke Mutter. | Она заботится о своей больной маме.
aufwachsen | вырастать | Ich bin auf dem Land aufgewachsen. | Я вырос в деревне.
die Kindheit | детство | Ich hatte eine glückliche Kindheit. | У меня было счастливое детство.
der Haushalt | домашнее хозяйство | Wir teilen uns die Arbeit im Haushalt. | Мы делим работу по дому.
schwanger | беременная | Meine Schwester ist schwanger. | Моя сестра беременна. | 🤰
`),

  ...parseVocab("zahlen", "A1", `
null | ноль | Es steht null zu null. | Счёт ноль — ноль.
zehn | десять | Ich habe zehn Euro. | У меня есть десять евро. | 🔟
zwanzig | двадцать | Sie ist zwanzig Jahre alt. | Ей двадцать лет.
dreißig | тридцать | Der Kurs hat dreißig Teilnehmer. | В курсе тридцать участников.
fünfzig | пятьдесят | Das kostet fünfzig Euro. | Это стоит пятьдесят евро.
die Zahl | число | Schreib die Zahl bitte auf. | Запиши, пожалуйста, число.
die Hälfte | половина | Ich nehme die Hälfte. | Я возьму половину.
das Viertel | четверть | Es ist Viertel nach drei. | Сейчас четверть четвёртого.
halb | половина (о времени) | Wir treffen uns um halb acht. | Встречаемся в половине восьмого.
die Uhr | часы; час (время) | Es ist acht Uhr. | Сейчас восемь часов. | ⏰
die Stunde | час | Der Film dauert zwei Stunden. | Фильм длится два часа.
die Minute | минута | Ich komme in fünf Minuten. | Я приду через пять минут.
die Sekunde | секунда | Warte eine Sekunde! | Подожди секунду!
der Tag | день | Der Tag war sehr lang. | День был очень длинным.
die Farbe | цвет | Welche Farbe magst du? | Какой цвет тебе нравится? | 🎨
grau | серый | Der Himmel ist heute grau. | Небо сегодня серое.
rosa | розовый | Sie trägt ein rosa Kleid. | Она в розовом платье.
lila | фиолетовый | Die Blumen sind lila. | Цветы фиолетовые.
hell | светлый | Das Zimmer ist sehr hell. | Комната очень светлая.
dunkel | тёмный | Im Winter wird es früh dunkel. | Зимой рано темнеет.
der erste | первый | Das ist mein erster Tag hier. | Это мой первый день здесь. | 1️⃣
der zweite | второй | Wir wohnen im zweiten Stock. | Мы живём на втором этаже.
der dritte | третий | Heute ist der dritte Mai. | Сегодня третье мая.
das Datum | дата | Welches Datum haben wir heute? | Какое сегодня число?
zählen | считать | Das Kind kann bis hundert zählen. | Ребёнок умеет считать до ста.
rechnen | считать, вычислять | Ich rechne kurz nach. | Я быстро пересчитаю.
plus | плюс | Zwei plus zwei ist vier. | Два плюс два — четыре.
minus | минус | Zehn minus drei ist sieben. | Десять минус три — семь.
das Prozent | процент | Die Preise sind um fünf Prozent gestiegen. | Цены выросли на пять процентов.
das Paar | пара | Ich brauche ein Paar Socken. | Мне нужна пара носков.
ein paar | несколько | Ich bleibe ein paar Tage. | Я останусь на несколько дней.
`),

  ...parseVocab("zeit_kalender", "A1", `
der Dienstag | вторник | Am Dienstag habe ich Deutschkurs. | Во вторник у меня курс немецкого.
der Mittwoch | среда | Mittwoch ist mein freier Tag. | Среда — мой выходной.
der Donnerstag | четверг | Wir sehen uns am Donnerstag. | Увидимся в четверг.
der Samstag | суббота | Am Samstag gehe ich einkaufen. | В субботу я иду за покупками.
der Sonntag | воскресенье | Am Sonntag schlafe ich lange. | В воскресенье я долго сплю.
das Wochenende | выходные | Was machst du am Wochenende? | Что ты делаешь на выходных?
der Januar | январь | Im Januar ist es sehr kalt. | В январе очень холодно. | ❄️
der Februar | февраль | Der Februar hat 28 Tage. | В феврале 28 дней.
der März | март | Im März beginnt der Frühling. | В марте начинается весна.
der April | апрель | Im April regnet es oft. | В апреле часто идёт дождь.
der Mai | май | Mein Geburtstag ist im Mai. | Мой день рождения в мае.
der Juni | июнь | Im Juni sind die Tage lang. | В июне дни длинные.
der Juli | июль | Im Juli fahren wir ans Meer. | В июле мы едем на море. | 🏖️
der August | август | Der August war sehr heiß. | Август был очень жарким.
der September | сентябрь | Im September beginnt die Schule. | В сентябре начинается школа.
der Oktober | октябрь | Im Oktober fallen die Blätter. | В октябре опадают листья. | 🍂
der November | ноябрь | Der November ist oft grau. | Ноябрь часто серый.
der Dezember | декабрь | Im Dezember feiern wir Weihnachten. | В декабре мы празднуем Рождество. | 🎄
der Frühling | весна | Im Frühling blühen die Blumen. | Весной цветут цветы. | 🌷
der Sommer | лето | Der Sommer war dieses Jahr sehr warm. | Лето в этом году было очень тёплым. | ☀️
der Herbst | осень | Im Herbst wird es kühler. | Осенью становится прохладнее.
der Winter | зима | Im Winter fahren wir Ski. | Зимой мы катаемся на лыжах. | ⛄
der Morgen | утро | Am Morgen trinke ich Kaffee. | Утром я пью кофе. | 🌅
der Vormittag | первая половина дня | Am Vormittag arbeite ich. | До обеда я работаю.
der Mittag | полдень | Zu Mittag essen wir in der Kantine. | В обед мы едим в столовой.
der Nachmittag | вторая половина дня | Am Nachmittag gehe ich spazieren. | После обеда я иду гулять.
der Abend | вечер | Am Abend sehe ich fern. | Вечером я смотрю телевизор. | 🌆
die Nacht | ночь | In der Nacht ist es ruhig. | Ночью тихо. | 🌙
übermorgen | послезавтра | Übermorgen habe ich frei. | Послезавтра у меня выходной.
vorgestern | позавчера | Vorgestern war ich beim Arzt. | Позавчера я был у врача.
jetzt | сейчас | Ich habe jetzt keine Zeit. | У меня сейчас нет времени.
bald | скоро | Wir sehen uns bald wieder. | Скоро снова увидимся.
später | позже | Ich rufe dich später an. | Я позвоню тебе позже.
früh | рано | Ich stehe jeden Tag früh auf. | Я каждый день рано встаю.
spät | поздно | Es ist schon spät. | Уже поздно.
immer | всегда | Er ist immer pünktlich. | Он всегда пунктуален.
oft | часто | Wir gehen oft ins Kino. | Мы часто ходим в кино.
manchmal | иногда | Manchmal koche ich selbst. | Иногда я сам готовлю.
selten | редко | Ich trinke selten Alkohol. | Я редко пью алкоголь.
nie | никогда | Ich war noch nie in Japan. | Я никогда не был в Японии.
täglich | ежедневно | Der Bus fährt täglich. | Автобус ходит ежедневно.
der Kalender | календарь | Ich schreibe den Termin in meinen Kalender. | Я записываю встречу в календарь. | 📅
der Feiertag | праздник, выходной день | Am Montag ist ein Feiertag. | В понедельник праздничный день.
pünktlich | пунктуальный, вовремя | Der Zug ist pünktlich angekommen. | Поезд прибыл вовремя.
#A2
das Jahrhundert | век, столетие | Das Haus stammt aus dem 19. Jahrhundert. | Дом построен в XIX веке.
das Jahrzehnt | десятилетие | Im letzten Jahrzehnt hat sich viel verändert. | За последнее десятилетие многое изменилось.
die Vergangenheit | прошлое | Das ist Vergangenheit. | Это в прошлом.
die Zukunft | будущее | Was planst du für die Zukunft? | Что ты планируешь на будущее?
die Gegenwart | настоящее | Wir leben in der Gegenwart. | Мы живём в настоящем.
damals | тогда, в то время | Damals hatten wir kein Handy. | Тогда у нас не было мобильных.
neulich | недавно | Neulich habe ich ihn im Park gesehen. | Недавно я видел его в парке.
inzwischen | тем временем, уже | Inzwischen spreche ich gut Deutsch. | Теперь я уже хорошо говорю по-немецки.
rechtzeitig | своевременно | Bitte kommen Sie rechtzeitig. | Пожалуйста, приходите вовремя.
die Verspätung | опоздание, задержка | Der Zug hat zehn Minuten Verspätung. | Поезд опаздывает на десять минут.
`),

  ...parseVocab("essen", "A1", `
das Brötchen | булочка | Zum Frühstück esse ich zwei Brötchen. | На завтрак я съедаю две булочки. | 🥐
die Wurst | колбаса | Möchtest du Wurst oder Käse? | Хочешь колбасу или сыр? | 🌭
der Schinken | ветчина | Ein Brot mit Schinken, bitte. | Бутерброд с ветчиной, пожалуйста.
das Hähnchen | курица (блюдо) | Heute gibt es Hähnchen mit Reis. | Сегодня курица с рисом. | 🍗
das Rindfleisch | говядина | Ich esse kein Rindfleisch. | Я не ем говядину.
das Schweinefleisch | свинина | Schweinefleisch ist in Deutschland beliebt. | Свинина популярна в Германии.
die Nudeln | макароны, лапша | Die Kinder essen gern Nudeln. | Дети любят макароны. | 🍝
die Pizza | пицца | Wollen wir Pizza bestellen? | Закажем пиццу? | 🍕
das Mittagessen | обед | Das Mittagessen ist um zwölf. | Обед в двенадцать.
das Abendessen | ужин | Was gibt es zum Abendessen? | Что на ужин?
der Tee | чай | Ich trinke Tee mit Zitrone. | Я пью чай с лимоном. | 🍵
das Bier | пиво | Ein Bier, bitte! | Одно пиво, пожалуйста! | 🍺
der Wein | вино | Wir trinken ein Glas Wein. | Мы выпиваем по бокалу вина. | 🍷
das Mineralwasser | минеральная вода | Ein Mineralwasser ohne Kohlensäure, bitte. | Минеральную воду без газа, пожалуйста.
die Limonade | лимонад | Die Kinder trinken Limonade. | Дети пьют лимонад.
der Joghurt | йогурт | Ich esse jeden Morgen Joghurt. | Я каждое утро ем йогурт.
die Sahne | сливки | Kaffee mit Sahne, bitte. | Кофе со сливками, пожалуйста.
die Schokolade | шоколад | Ich liebe dunkle Schokolade. | Я обожаю тёмный шоколад. | 🍫
das Eis | мороженое; лёд | Im Sommer essen wir viel Eis. | Летом мы едим много мороженого. | 🍦
der Nachtisch | десерт | Was gibt es zum Nachtisch? | Что на десерт?
süß | сладкий | Der Kuchen ist sehr süß. | Пирог очень сладкий.
salzig | солёный | Die Suppe ist zu salzig. | Суп слишком солёный.
scharf | острый | Ich esse gern scharf. | Я люблю острое. | 🌶️
sauer | кислый | Die Zitrone ist sauer. | Лимон кислый.
bitter | горький | Der Kaffee schmeckt bitter. | Кофе горький на вкус.
durstig | испытывающий жажду | Ich bin durstig. | Я хочу пить.
schmecken | быть вкусным, иметь вкус | Schmeckt dir das Essen? | Тебе нравится еда?
essen | есть, кушать | Wir essen um sieben Uhr. | Мы едим в семь часов.
trinken | пить | Was möchtest du trinken? | Что ты хочешь выпить?
das Glas | стакан, бокал | Ein Glas Wasser, bitte. | Стакан воды, пожалуйста.
die Tasse | чашка | Möchtest du eine Tasse Kaffee? | Хочешь чашку кофе? | ☕
die Flasche | бутылка | Eine Flasche Wasser kostet einen Euro. | Бутылка воды стоит один евро. | 🍾
der Teller | тарелка | Der Teller ist leer. | Тарелка пустая. | 🍽️
#A2
die Speisekarte | меню | Könnten wir bitte die Speisekarte haben? | Можно нам меню?
die Rechnung | счёт | Die Rechnung, bitte! | Счёт, пожалуйста! | 🧾
das Trinkgeld | чаевые | In Deutschland gibt man etwa zehn Prozent Trinkgeld. | В Германии дают около десяти процентов чаевых.
vegetarisch | вегетарианский | Haben Sie auch vegetarische Gerichte? | У вас есть вегетарианские блюда? | 🥗
vegan | веганский | Sie ernährt sich vegan. | Она питается веганской пищей.
das Gericht | блюдо | Das ist mein Lieblingsgericht. | Это моё любимое блюдо.
die Vorspeise | закуска | Als Vorspeise nehme ich einen Salat. | На закуску я возьму салат.
die Hauptspeise | основное блюдо | Was nehmen Sie als Hauptspeise? | Что вы возьмёте на основное?
satt | сытый | Danke, ich bin satt. | Спасибо, я наелся.
die Allergie | аллергия | Ich habe eine Allergie gegen Nüsse. | У меня аллергия на орехи.
die Mahlzeit | приём пищи | Drei Mahlzeiten am Tag sind genug. | Трёх приёмов пищи в день достаточно.
probieren | пробовать | Darf ich mal probieren? | Можно попробовать?
`),

  ...parseVocab("obst_gemuese", "A1", `
die Birne | груша | Die Birne ist schön reif. | Груша хорошо созрела. | 🍐
die Orange | апельсин | Ich presse frischen Saft aus Orangen. | Я выжимаю свежий сок из апельсинов. | 🍊
die Zitrone | лимон | Tee mit Zitrone, bitte. | Чай с лимоном, пожалуйста. | 🍋
die Erdbeere | клубника | Im Juni gibt es frische Erdbeeren. | В июне бывает свежая клубника. | 🍓
die Kirsche | вишня, черешня | Die Kirschen sind sehr süß. | Черешня очень сладкая. | 🍒
die Traube | виноград | Ich kaufe ein Kilo Trauben. | Я покупаю килограмм винограда. | 🍇
die Wassermelone | арбуз | Im Sommer essen wir gern Wassermelone. | Летом мы любим есть арбуз. | 🍉
die Ananas | ананас | Die Ananas kommt aus Costa Rica. | Ананас из Коста-Рики. | 🍍
der Pfirsich | персик | Der Pfirsich ist weich und saftig. | Персик мягкий и сочный. | 🍑
die Pflaume | слива | Oma macht Kuchen mit Pflaumen. | Бабушка печёт пирог со сливами.
die Himbeere | малина | Himbeeren wachsen in unserem Garten. | Малина растёт в нашем саду.
die Nuss | орех | Nüsse sind sehr gesund. | Орехи очень полезны. | 🥜
die Gurke | огурец | Ich mache einen Salat mit Gurke. | Я делаю салат с огурцом. | 🥒
die Paprika | сладкий перец | Die rote Paprika ist süß. | Красный перец сладкий. | 🫑
der Kohl | капуста | Kohl ist im Winter günstig. | Зимой капуста дешёвая. | 🥬
der Brokkoli | брокколи | Die Kinder mögen keinen Brokkoli. | Дети не любят брокколи. | 🥦
die Bohne | фасоль, боб | Grüne Bohnen passen gut zu Fleisch. | Зелёная фасоль хорошо подходит к мясу.
die Erbse | горох | Erbsensuppe ist ein typisches Gericht. | Гороховый суп — типичное блюдо.
der Mais | кукуруза | Wir grillen Mais im Sommer. | Летом мы жарим кукурузу на гриле. | 🌽
der Pilz | гриб | Im Herbst sammeln wir Pilze. | Осенью мы собираем грибы. | 🍄
die Aubergine | баклажан | Die Aubergine braten wir in Öl. | Баклажан мы обжариваем в масле. | 🍆
die Zucchini | кабачок | Zucchini wachsen schnell. | Кабачки быстро растут.
der Spinat | шпинат | Spinat enthält viel Eisen. | Шпинат содержит много железа.
der Kürbis | тыква | Im Herbst koche ich Kürbissuppe. | Осенью я варю тыквенный суп. | 🎃
die Avocado | авокадо | Die Avocado ist noch nicht reif. | Авокадо ещё не созрел. | 🥑
reif | спелый | Die Bananen sind schon reif. | Бананы уже спелые.
frisch | свежий | Das Gemüse ist ganz frisch. | Овощи совсем свежие.
das Obst | фрукты | Obst ist gesund. | Фрукты полезны. | 🍎
das Kilo | килограмм | Ein Kilo Äpfel, bitte. | Килограмм яблок, пожалуйста.
das Stück | штука, кусок | Ich nehme ein Stück Kuchen. | Я возьму кусок пирога.
`),

  ...parseVocab("kleidung", "A2", `
das Kleid | платье | Sie trägt ein blaues Kleid. | Она носит синее платье. | 👗
das T-Shirt | футболка | Das T-Shirt ist aus Baumwolle. | Футболка из хлопка. | 👕
der Pullover | свитер | Im Winter trage ich einen warmen Pullover. | Зимой я ношу тёплый свитер.
der Mantel | пальто | Der Mantel ist mir zu groß. | Пальто мне велико. | 🧥
die Jeans | джинсы | Ich habe mir neue Jeans gekauft. | Я купил себе новые джинсы. | 👖
die Socke | носок | Wo ist meine zweite Socke? | Где мой второй носок? | 🧦
die Mütze | шапка | Setz deine Mütze auf, es ist kalt! | Надень шапку, холодно!
der Hut | шляпа | Der Hut steht dir gut. | Шляпа тебе идёт. | 👒
der Schal | шарф | Der Schal ist aus Wolle. | Шарф из шерсти. | 🧣
die Handschuhe | перчатки | Ich habe meine Handschuhe verloren. | Я потерял свои перчатки. | 🧤
der Gürtel | ремень | Der Gürtel ist aus Leder. | Ремень из кожи.
die Unterwäsche | нижнее бельё | Unterwäsche findest du im ersten Stock. | Нижнее бельё на втором этаже.
der Anzug | костюм | Zum Vorstellungsgespräch trägt er einen Anzug. | На собеседование он надевает костюм.
die Krawatte | галстук | Muss ich eine Krawatte tragen? | Мне нужно надеть галстук? | 👔
die Bluse | блузка | Die Bluse passt gut zum Rock. | Блузка хорошо сочетается с юбкой.
der Stiefel | сапог | Im Winter trage ich Stiefel. | Зимой я ношу сапоги. | 👢
die Sandalen | сандалии | Im Sommer trage ich Sandalen. | Летом я ношу сандалии. | 🩴
der Schlafanzug | пижама | Die Kinder ziehen ihren Schlafanzug an. | Дети надевают пижамы.
die Brille | очки | Ich brauche eine neue Brille. | Мне нужны новые очки. | 👓
die Uhr (Armbanduhr) | наручные часы | Er schaut auf seine Uhr. | Он смотрит на свои часы. | ⌚
der Ring | кольцо | Sie trägt einen goldenen Ring. | Она носит золотое кольцо. | 💍
die Halskette | цепочка, ожерелье | Die Halskette war ein Geschenk. | Ожерелье было подарком.
der Regenschirm | зонт | Vergiss deinen Regenschirm nicht! | Не забудь свой зонт! | ☂️
ausziehen | снимать (одежду) | Bitte ziehen Sie die Schuhe aus. | Пожалуйста, снимите обувь.
sich umziehen | переодеваться | Ich muss mich noch schnell umziehen. | Мне ещё нужно быстро переодеться.
anprobieren | примерять | Kann ich die Hose anprobieren? | Можно примерить брюки?
passen | подходить по размеру | Die Schuhe passen mir nicht. | Туфли мне не подходят.
stehen (Kleidung) | идти (об одежде) | Die Farbe steht dir sehr gut. | Этот цвет тебе очень идёт.
eng | тесный, узкий | Die Hose ist zu eng. | Брюки слишком узкие.
weit | широкий, свободный | Der Pullover ist schön weit. | Свитер приятно свободный.
die Umkleidekabine | примерочная | Die Umkleidekabine ist dort hinten. | Примерочная вон там сзади.
die Mode | мода | Sie interessiert sich sehr für Mode. | Она очень интересуется модой.
modisch | модный | Er ist immer modisch gekleidet. | Он всегда модно одет.
die Baumwolle | хлопок | Das Hemd ist aus reiner Baumwolle. | Рубашка из чистого хлопка.
das Leder | кожа (материал) | Die Tasche ist aus echtem Leder. | Сумка из натуральной кожи.
die Wolle | шерсть | Die Socken sind aus Wolle. | Носки из шерсти.
`),

  ...parseVocab("stadt_orte", "A1", `
das Kino | кинотеатр | Wollen wir heute ins Kino gehen? | Пойдём сегодня в кино? | 🎬
das Theater | театр | Wir gehen am Freitag ins Theater. | В пятницу мы идём в театр. | 🎭
das Restaurant | ресторан | Das Restaurant ist sehr gut. | Ресторан очень хороший.
das Café | кафе | Wir treffen uns im Café. | Встречаемся в кафе. | ☕
die Kirche | церковь | Die Kirche ist sehr alt. | Церковь очень старая. | ⛪
der Park | парк | Die Kinder spielen im Park. | Дети играют в парке. | 🌳
der Markt | рынок | Samstags gehe ich auf den Markt. | По субботам я хожу на рынок.
der Platz | площадь; место | Der Marktplatz ist im Zentrum. | Рыночная площадь в центре.
das Zentrum | центр | Wir wohnen im Zentrum. | Мы живём в центре.
die Schule | школа | Die Schule ist gleich um die Ecke. | Школа прямо за углом. | 🏫
der Kindergarten | детский сад | Mein Sohn geht in den Kindergarten. | Мой сын ходит в детский сад.
das Schwimmbad | бассейн | Im Sommer gehen wir ins Schwimmbad. | Летом мы ходим в бассейн. | 🏊
der Spielplatz | детская площадка | Der Spielplatz ist neben dem Haus. | Детская площадка рядом с домом.
die Bäckerei | булочная, пекарня | Die Bäckerei öffnet um sechs Uhr. | Пекарня открывается в шесть часов. | 🥖
die Metzgerei | мясная лавка | In der Metzgerei kaufe ich Wurst. | В мясной лавке я покупаю колбасу.
das Kaufhaus | универмаг | Das Kaufhaus hat fünf Etagen. | В универмаге пять этажей.
die Tankstelle | заправка | Die nächste Tankstelle ist zwei Kilometer entfernt. | Ближайшая заправка в двух километрах. | ⛽
das Krankenhaus | больница | Das Krankenhaus ist in der Nähe. | Больница поблизости. | 🏥
die Polizei | полиция | Ruf sofort die Polizei! | Немедленно вызови полицию! | 🚓
das Hochhaus | высотное здание | Wir wohnen in einem Hochhaus. | Мы живём в многоэтажке.
die Brücke | мост | Die Brücke führt über den Fluss. | Мост ведёт через реку. | 🌉
die Ecke | угол | Das Café ist an der Ecke. | Кафе на углу.
die Kreuzung | перекрёсток | An der Kreuzung links abbiegen. | На перекрёстке поверните налево.
links | налево, слева | Gehen Sie hier links. | Идите здесь налево. | ⬅️
rechts | направо, справа | Die Post ist rechts. | Почта справа. | ➡️
geradeaus | прямо | Gehen Sie immer geradeaus. | Идите всё время прямо. | ⬆️
weit | далеко | Ist es weit bis zum Bahnhof? | До вокзала далеко?
nah | близко | Der Supermarkt ist ganz nah. | Супермаркет совсем близко.
in der Nähe | поблизости | Gibt es hier in der Nähe eine Bank? | Здесь поблизости есть банк?
der Weg | путь, дорога | Können Sie mir den Weg zeigen? | Можете показать мне дорогу?
#A2
der Stadtteil | район города | In welchem Stadtteil wohnst du? | В каком районе ты живёшь?
die Fußgängerzone | пешеходная зона | In der Fußgängerzone gibt es viele Geschäfte. | В пешеходной зоне много магазинов.
der Stadtplan | карта города | Hast du einen Stadtplan? | У тебя есть карта города? | 🗺️
die Altstadt | старый город | Die Altstadt ist sehr schön. | Старый город очень красивый.
die Sehenswürdigkeiten besichtigen | осматривать достопримечательности | Morgen besichtigen wir die Sehenswürdigkeiten. | Завтра мы осматриваем достопримечательности.
der Friedhof | кладбище | Der Friedhof liegt hinter der Kirche. | Кладбище находится за церковью.
das Schloss | замок, дворец | Das Schloss ist aus dem 17. Jahrhundert. | Замок XVII века. | 🏰
der Dom | собор | Der Kölner Dom ist weltberühmt. | Кёльнский собор известен во всём мире.
das Denkmal | памятник | Das Denkmal steht auf dem Marktplatz. | Памятник стоит на рыночной площади. | 🗽
der Bürgersteig | тротуар | Fahr nicht auf dem Bürgersteig! | Не езди по тротуару!
`),

  ...parseVocab("kleine_woerter", "A1", `
wer | кто | Wer ist das? | Кто это?
was | что | Was machst du? | Что ты делаешь?
wo | где | Wo wohnst du? | Где ты живёшь?
woher | откуда | Woher kommen Sie? | Откуда вы?
wohin | куда | Wohin fährst du? | Куда ты едешь?
wann | когда | Wann beginnt der Kurs? | Когда начинается курс?
warum | почему | Warum lernst du Deutsch? | Почему ты учишь немецкий?
wie | как | Wie heißt du? | Как тебя зовут?
wie viel | сколько | Wie viel kostet das? | Сколько это стоит?
welcher | который, какой | Welcher Bus fährt zum Zentrum? | Какой автобус идёт в центр?
und | и | Ich trinke Kaffee und Tee. | Я пью кофе и чай.
oder | или | Möchtest du Tee oder Kaffee? | Хочешь чай или кофе?
aber | но | Das Auto ist schön, aber teuer. | Машина красивая, но дорогая.
denn | потому что | Ich bleibe zu Hause, denn ich bin krank. | Я остаюсь дома, потому что болею.
weil | потому что (придат.) | Ich lerne Deutsch, weil ich in Berlin arbeite. | Я учу немецкий, потому что работаю в Берлине.
dass | что (союз) | Ich weiß, dass du recht hast. | Я знаю, что ты прав.
wenn | если; когда | Wenn es regnet, bleibe ich zu Hause. | Если идёт дождь, я остаюсь дома.
auch | тоже | Ich komme auch mit. | Я тоже иду с вами.
nur | только | Ich habe nur fünf Euro. | У меня только пять евро.
sehr | очень | Das ist sehr gut. | Это очень хорошо.
zu (zu viel) | слишком | Das ist zu teuer. | Это слишком дорого.
schon | уже | Bist du schon fertig? | Ты уже готов?
noch | ещё | Ich habe noch Zeit. | У меня ещё есть время.
nicht | не | Ich rauche nicht. | Я не курю.
kein | никакой, не (перед сущ.) | Ich habe kein Auto. | У меня нет машины.
ja | да | Ja, gerne! | Да, с удовольствием!
nein | нет | Nein, danke. | Нет, спасибо.
doch | да (в ответ на отрицание) | Kommst du nicht? — Doch, ich komme! | Ты не придёшь? — Да нет же, приду!
vielleicht | может быть | Vielleicht komme ich morgen. | Может быть, я приду завтра.
hier | здесь | Ich wohne hier. | Я живу здесь.
dort | там | Dort ist der Bahnhof. | Там вокзал.
mit | с | Ich fahre mit dem Bus. | Я еду на автобусе.
ohne | без | Kaffee ohne Zucker, bitte. | Кофе без сахара, пожалуйста.
für | для | Das Geschenk ist für dich. | Подарок для тебя.
von | от, из | Ich komme gerade von der Arbeit. | Я как раз иду с работы.
nach | после; в (о направлении) | Nach dem Essen gehen wir spazieren. | После еды мы идём гулять.
bei | у, при | Ich wohne bei meinen Eltern. | Я живу у родителей.
zwischen | между | Die Bank ist zwischen der Post und dem Café. | Банк между почтой и кафе.
neben | рядом с | Er sitzt neben mir. | Он сидит рядом со мной.
unter | под | Die Katze schläft unter dem Tisch. | Кошка спит под столом.
über | над; о | Die Lampe hängt über dem Tisch. | Лампа висит над столом.
vor | перед; назад (о времени) | Ich warte vor dem Kino. | Я жду перед кинотеатром.
hinter | за, позади | Der Garten ist hinter dem Haus. | Сад за домом.
gegenüber | напротив | Die Apotheke ist gegenüber. | Аптека напротив.
alle | все | Alle sind schon da. | Все уже здесь.
etwas | что-то; немного | Möchtest du etwas essen? | Хочешь что-нибудь поесть?
nichts | ничего | Ich habe nichts gesagt. | Я ничего не сказал.
jemand | кто-то | Jemand hat angerufen. | Кто-то звонил.
niemand | никто | Niemand war zu Hause. | Никого не было дома.
viel | много | Ich habe viel Arbeit. | У меня много работы.
wenig | мало | Wir haben wenig Zeit. | У нас мало времени.
#A2
trotzdem | тем не менее | Es regnet, trotzdem gehen wir spazieren. | Идёт дождь, тем не менее мы идём гулять.
deshalb | поэтому | Ich bin müde, deshalb gehe ich ins Bett. | Я устал, поэтому иду спать.
obwohl | хотя | Obwohl er krank ist, arbeitet er. | Хотя он болен, он работает.
ob | ли | Ich weiß nicht, ob er kommt. | Я не знаю, придёт ли он.
seit | с (какого-то времени) | Ich wohne seit 2020 in Köln. | Я живу в Кёльне с 2020 года.
während | во время | Während des Essens spricht man nicht. | Во время еды не разговаривают.
wegen | из-за | Wegen des Regens bleiben wir zu Hause. | Из-за дождя мы остаёмся дома.
ungefähr | примерно | Die Fahrt dauert ungefähr eine Stunde. | Поездка длится примерно час.
fast | почти | Ich bin fast fertig. | Я почти готов.
genug | достаточно | Hast du genug Geld? | У тебя достаточно денег?
ziemlich | довольно | Das Wetter ist ziemlich kalt. | Погода довольно холодная.
eigentlich | собственно, вообще-то | Eigentlich wollte ich zu Hause bleiben. | Вообще-то я хотел остаться дома.
sonst | иначе; обычно | Beeil dich, sonst verpassen wir den Zug! | Поторопись, иначе опоздаем на поезд!
außerdem | кроме того | Außerdem habe ich keine Zeit. | Кроме того, у меня нет времени.
`),

  ...parseVocab("tiere", "A1", `
der Fisch (Tier) | рыба | Im Teich schwimmen viele Fische. | В пруду плавает много рыб. | 🐟
das Huhn | курица | Die Hühner legen jeden Tag Eier. | Куры каждый день несут яйца. | 🐔
die Ente | утка | Die Kinder füttern die Enten. | Дети кормят уток. | 🦆
das Kaninchen | кролик | Mein Kaninchen heißt Hoppel. | Моего кролика зовут Хоппель. | 🐇
der Hamster | хомяк | Der Hamster schläft am Tag. | Хомяк спит днём. | 🐹
die Ziege | коза | Die Ziege gibt Milch. | Коза даёт молоко. | 🐐
der Esel | осёл | Der Esel trägt schwere Säcke. | Осёл несёт тяжёлые мешки.
der Tiger | тигр | Der Tiger ist ein gefährliches Tier. | Тигр — опасное животное. | 🐅
die Giraffe | жираф | Die Giraffe hat einen langen Hals. | У жирафа длинная шея. | 🦒
das Zebra | зебра | Das Zebra hat schwarze und weiße Streifen. | У зебры чёрные и белые полосы. | 🦓
der Wolf | волк | Der Wolf lebt im Wald. | Волк живёт в лесу. | 🐺
der Fuchs | лиса | Der Fuchs ist sehr schlau. | Лиса очень хитрая. | 🦊
das Reh | косуля | Im Wald haben wir ein Reh gesehen. | В лесу мы видели косулю.
das Eichhörnchen | белка | Das Eichhörnchen sammelt Nüsse. | Белка собирает орехи. | 🐿️
der Igel | ёж | Der Igel schläft im Winter. | Ёж зимой спит. | 🦔
die Biene | пчела | Die Bienen machen Honig. | Пчёлы делают мёд. | 🐝
der Schmetterling | бабочка | Ein Schmetterling sitzt auf der Blume. | На цветке сидит бабочка. | 🦋
die Spinne | паук | Ich habe Angst vor Spinnen. | Я боюсь пауков. | 🕷️
die Fliege | муха | Eine Fliege ist in der Küche. | На кухне муха.
die Mücke | комар | Die Mücken stechen am Abend. | Комары кусаются вечером. | 🦟
der Delfin | дельфин | Delfine sind sehr intelligent. | Дельфины очень умные. | 🐬
der Wal | кит | Der Wal ist das größte Tier der Welt. | Кит — самое большое животное в мире. | 🐋
der Hai | акула | Im Meer gibt es Haie. | В море есть акулы. | 🦈
die Schildkröte | черепаха | Die Schildkröte ist sehr langsam. | Черепаха очень медленная. | 🐢
der Frosch | лягушка | Der Frosch springt ins Wasser. | Лягушка прыгает в воду. | 🐸
das Haustier | домашнее животное | Hast du ein Haustier? | У тебя есть домашнее животное?
füttern | кормить | Ich muss noch die Katze füttern. | Мне ещё нужно покормить кошку.
#A2
der Zoo | зоопарк | Am Sonntag gehen wir in den Zoo. | В воскресенье мы идём в зоопарк.
der Bauernhof | ферма | Auf dem Bauernhof gibt es viele Tiere. | На ферме много животных. | 🚜
das Futter | корм | Das Futter für den Hund ist alle. | Корм для собаки закончился.
bellen | лаять | Der Hund bellt die ganze Nacht. | Собака лает всю ночь.
die Pfote | лапа | Der Hund gibt Pfote. | Собака даёт лапу. | 🐾
der Schwanz | хвост | Der Hund wedelt mit dem Schwanz. | Собака виляет хвостом.
das Fell | шерсть, мех | Die Katze hat ein weiches Fell. | У кошки мягкая шерсть.
die Feder | перо | Der Vogel hat bunte Federn. | У птицы разноцветные перья. | 🪶
`),

  ...parseVocab("koerper", "A1", `
der Körper | тело | Sport ist gut für den Körper. | Спорт полезен для тела.
das Haar | волосы | Sie hat lange blonde Haare. | У неё длинные светлые волосы.
der Zahn | зуб | Mir tut ein Zahn weh. | У меня болит зуб. | 🦷
die Zunge | язык (орган) | Zeigen Sie mir bitte die Zunge. | Покажите, пожалуйста, язык. | 👅
der Hals | шея; горло | Ich habe Halsschmerzen. | У меня болит горло.
die Schulter | плечо | Meine Schulter tut weh. | У меня болит плечо.
der Rücken | спина | Ich habe Rückenschmerzen. | У меня болит спина.
der Bauch | живот | Mein Bauch tut weh. | У меня болит живот.
der Finger | палец (руки) | Ich habe mich in den Finger geschnitten. | Я порезал палец.
das Knie | колено | Er hat sich am Knie verletzt. | Он поранил колено.
der Zeh | палец ноги | Ich habe mir den Zeh gestoßen. | Я ударил палец на ноге.
die Haut | кожа | Sie hat sehr empfindliche Haut. | У неё очень чувствительная кожа.
das Herz | сердце | Das Herz schlägt schnell. | Сердце бьётся быстро. | ❤️
das Blut | кровь | Er hat Blut gespendet. | Он сдал кровь. | 🩸
die Lippe | губа | Meine Lippen sind trocken. | У меня сухие губы. | 👄
die Stirn | лоб | Er hat Fieber, seine Stirn ist heiß. | У него температура, лоб горячий.
die Wange | щека | Sie gibt ihm einen Kuss auf die Wange. | Она целует его в щёку.
der Ellbogen | локоть | Nimm die Ellbogen vom Tisch! | Убери локти со стола!
das Gehirn | мозг | Das Gehirn braucht viel Energie. | Мозгу нужно много энергии. | 🧠
die Lunge | лёгкое | Rauchen schadet der Lunge. | Курение вредит лёгким. | 🫁
der Magen | желудок | Ich habe einen empfindlichen Magen. | У меня чувствительный желудок.
#A2
dick | толстый | Der Hund ist ein bisschen zu dick. | Собака немного толстовата.
dünn | худой, тонкий | Er ist sehr dünn geworden. | Он очень похудел.
schlank | стройный | Sie ist groß und schlank. | Она высокая и стройная.
blond | светловолосый | Seine Schwester ist blond. | Его сестра блондинка.
der Bart | борода | Mein Vater trägt einen Bart. | Мой отец носит бороду. | 🧔
lockig | кудрявый | Sie hat lockige Haare. | У неё кудрявые волосы.
die Glatze | лысина | Mein Onkel hat eine Glatze. | У моего дяди лысина.
aussehen | выглядеть | Du siehst heute müde aus. | Ты сегодня выглядишь уставшим.
`),

  ...parseVocab("wetter", "A1", `
sonnig | солнечный | Morgen wird es sonnig. | Завтра будет солнечно. | 🌞
regnerisch | дождливый | Der Herbst ist oft regnerisch. | Осень часто дождливая.
bewölkt | облачный | Heute ist es bewölkt. | Сегодня облачно. | ☁️
windig | ветреный | An der Küste ist es oft windig. | На побережье часто ветрено. | 🌬️
heiß | жаркий | Im August ist es sehr heiß. | В августе очень жарко. | 🥵
kühl | прохладный | Am Abend wird es kühl. | Вечером становится прохладно.
das Wetter | погода | Wie ist das Wetter heute? | Какая сегодня погода?
regnen | идти (о дожде) | Es regnet schon den ganzen Tag. | Дождь идёт уже весь день. | 🌧️
schneien | идти (о снеге) | Es schneit! | Идёт снег! | 🌨️
der Grad | градус | Es sind zwanzig Grad. | Двадцать градусов. | 🌡️
der Himmel | небо | Der Himmel ist blau. | Небо голубое.
der Mond | луна | Heute ist Vollmond. | Сегодня полнолуние. | 🌕
der Stern | звезда | Nachts sieht man viele Sterne. | Ночью видно много звёзд. | ⭐
der Regenbogen | радуга | Nach dem Regen kommt ein Regenbogen. | После дождя появляется радуга. | 🌈
das Eis (gefroren) | лёд | Vorsicht, auf der Straße ist Eis! | Осторожно, на дороге лёд! | 🧊
#A2
die Wettervorhersage | прогноз погоды | Laut Wettervorhersage regnet es morgen. | По прогнозу завтра дождь.
der Blitz | молния | Der Blitz hat in den Baum eingeschlagen. | Молния ударила в дерево. | ⚡
der Donner | гром | Hast du den Donner gehört? | Ты слышал гром?
der Nebel | туман | Am Morgen war dichter Nebel. | Утром был густой туман. | 🌫️
das Glatteis | гололёд | Wegen Glatteis gab es viele Unfälle. | Из-за гололёда было много аварий.
die Hitze | жара | Die Hitze ist kaum auszuhalten. | Жару едва можно вынести.
die Kälte | холод | Ich mag die Kälte nicht. | Я не люблю холод.
der Hagel | град | Der Hagel hat die Autos beschädigt. | Град повредил машины.
feucht | влажный | Die Luft ist sehr feucht. | Воздух очень влажный.
trocken | сухой | Der Sommer war sehr trocken. | Лето было очень сухим.
das Klima | климат | Das Klima hier ist mild. | Климат здесь мягкий.
die Überschwemmung | наводнение | Nach dem Sturm gab es Überschwemmungen. | После бури были наводнения.
`),
];
