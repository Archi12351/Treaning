import { parseVocab } from "../vocabParse";

// Профессии, ремесло, дети, отношения, разговорный язык, региональная
// лексика (Австрия/Швейцария), официальные письма, частотные глаголы B2–C1.
export const PART9 = [
  ...parseVocab("berufe", "A2", `
der Arzt / die Ärztin | врач | Sie ist Ärztin im Krankenhaus. | Она врач в больнице. | 🧑‍⚕️
der Lehrer / die Lehrerin | учитель / учительница | Meine Mutter ist Lehrerin. | Моя мама учительница. | 🧑‍🏫
der Bäcker | пекарь | Der Bäcker steht um drei Uhr auf. | Пекарь встаёт в три часа. | 🧑‍🍳
der Metzger | мясник | Der Metzger verkauft frisches Fleisch. | Мясник продаёт свежее мясо.
der Zahnarzt (Beruf) | стоматолог | Er arbeitet als Zahnarzt. | Он работает стоматологом.
der Apotheker | фармацевт | Der Apotheker berät mich. | Фармацевт меня консультирует.
der Busfahrer | водитель автобуса | Der Busfahrer ist sehr freundlich. | Водитель автобуса очень дружелюбный.
der Pilot | пилот | Der Pilot begrüßt die Passagiere. | Пилот приветствует пассажиров. | 🧑‍✈️
der Briefträger | почтальон | Der Briefträger bringt die Post. | Почтальон приносит почту.
der Handwerker | мастер, ремесленник | Wir brauchen einen Handwerker für das Bad. | Нам нужен мастер для ванной.
der Klempner | сантехник | Der Klempner repariert die Heizung. | Сантехник чинит отопление.
der Maler | маляр; художник | Der Maler streicht die Wände. | Маляр красит стены.
der Tischler | столяр | Der Tischler baut einen Schrank. | Столяр делает шкаф.
der Gärtner | садовник | Der Gärtner pflegt den Park. | Садовник ухаживает за парком.
der Journalist (Beruf) | журналист | Sie arbeitet als Journalistin. | Она работает журналисткой.
der Programmierer | программист | Er ist Programmierer bei einer IT-Firma. | Он программист в IT-фирме. | 🧑‍💻
der Buchhalter | бухгалтер | Der Buchhalter prüft die Rechnungen. | Бухгалтер проверяет счета.
der Steuerberater (Beruf) | налоговый консультант | Sie arbeitet als Steuerberaterin. | Она работает налоговым консультантом.
der Erzieher | воспитатель | Die Erzieherin spielt mit den Kindern. | Воспитательница играет с детьми.
der Altenpfleger | сиделка (для пожилых) | Altenpfleger werden dringend gesucht. | Сиделки для пожилых очень востребованы.
der Sozialarbeiter | социальный работник | Der Sozialarbeiter hilft Familien. | Социальный работник помогает семьям.
der Beamte | госслужащий | Lehrer sind in Deutschland oft Beamte. | Учителя в Германии часто госслужащие.
der Soldat | солдат | Er war zwei Jahre Soldat. | Он два года был солдатом.
der Richter (Beruf) | судья | Sie ist Richterin am Amtsgericht. | Она судья участкового суда.
der Wissenschaftler (Beruf) | учёный | Er arbeitet als Wissenschaftler. | Он работает учёным.
der Übersetzer | переводчик | Ich arbeite als Übersetzer für Russisch. | Я работаю переводчиком с русского.
der Dolmetscher | устный переводчик | Beim Termin hilft ein Dolmetscher. | На встрече помогает устный переводчик.
die Reinigungskraft | уборщик | Die Reinigungskraft kommt abends. | Уборщица приходит вечером.
die Kassiererin | кассир | Die Kassiererin gibt mir das Wechselgeld. | Кассир даёт мне сдачу.
der Lagerarbeiter | работник склада | Er arbeitet als Lagerarbeiter. | Он работает на складе.
der Lieferant (Beruf) | курьер, доставщик | Der Lieferant bringt das Paket. | Курьер приносит посылку.
der Tierarzt | ветеринар | Wir bringen die Katze zum Tierarzt. | Мы везём кошку к ветеринару.
der Fotograf | фотограф | Der Fotograf macht Hochzeitsfotos. | Фотограф делает свадебные фото.
der Musiker | музыкант | Er ist professioneller Musiker. | Он профессиональный музыкант.
der Beruf | профессия | Was sind Sie von Beruf? | Кто вы по профессии?
`),

  ...parseVocab("handwerk_werkzeug", "B1", `
das Werkzeug | инструмент | Das Werkzeug liegt im Keller. | Инструменты лежат в подвале. | 🧰
der Hammer | молоток | Gib mir bitte den Hammer. | Дай мне, пожалуйста, молоток. | 🔨
der Nagel | гвоздь | Ich brauche einen Nagel für das Bild. | Мне нужен гвоздь для картины.
die Schraube | шуруп, винт | Die Schraube ist locker. | Шуруп расшатался. | 🔩
der Schraubenzieher | отвёртка | Wo ist der Schraubenzieher? | Где отвёртка? | 🪛
die Zange | плоскогубцы | Mit der Zange geht es leichter. | С плоскогубцами легче.
die Bohrmaschine | дрель | Darf ich deine Bohrmaschine ausleihen? | Можно одолжить твою дрель?
bohren | сверлить | Am Sonntag darf man nicht bohren. | В воскресенье сверлить нельзя.
die Säge | пила | Mit der Säge schneide ich das Holz. | Пилой я распиливаю дерево. | 🪚
die Leiter | лестница-стремянка | Halte bitte die Leiter fest. | Подержи, пожалуйста, стремянку. | 🪜
der Dübel | дюбель | Für die Wand brauchst du Dübel. | Для стены нужны дюбели.
das Holz | дерево (материал) | Der Tisch ist aus Holz. | Стол из дерева. | 🪵
das Metall | металл | Das Regal ist aus Metall. | Полка из металла.
der Kleber | клей | Der Kleber hält sehr gut. | Клей держит очень хорошо.
die Farbe (zum Streichen) | краска | Wir brauchen weiße Farbe für die Wand. | Нам нужна белая краска для стены.
streichen | красить | Wir streichen das Kinderzimmer blau. | Мы красим детскую в синий цвет.
der Pinsel | кисть | Der Pinsel ist zu breit. | Кисть слишком широкая. | 🖌️
tapezieren | клеить обои | Wir tapezieren das Wohnzimmer. | Мы клеим обои в гостиной.
montieren | монтировать, устанавливать | Der Techniker montiert die Lampe. | Техник устанавливает лампу.
aufbauen (Möbel) | собирать (мебель) | Ich baue den Schrank selbst auf. | Я сам собираю шкаф.
die Anleitung | инструкция | Lies zuerst die Anleitung! | Сначала прочитай инструкцию!
der Baumarkt | строительный магазин | Ich fahre schnell zum Baumarkt. | Я быстро съезжу в строительный магазин.
undicht | негерметичный, протекающий | Das Fenster ist undicht. | Окно пропускает воздух.
verstopft | засорённый | Das Waschbecken ist verstopft. | Раковина засорилась.
die Sicherung | предохранитель | Die Sicherung ist rausgeflogen. | Выбило пробки.
`),

  ...parseVocab("kinder_erziehung", "B1", `
das Kleinkind | маленький ребёнок | Das Kleinkind lernt gerade laufen. | Малыш как раз учится ходить.
die Windel | подгузник | Ich muss die Windel wechseln. | Мне нужно поменять подгузник.
der Kinderwagen | детская коляска | Der Kinderwagen passt nicht in den Aufzug. | Коляска не помещается в лифт.
der Schnuller | соска | Das Baby will seinen Schnuller. | Малыш хочет свою соску.
das Spielzeug | игрушка | Räum dein Spielzeug auf! | Убери свои игрушки! | 🧸
die Kita | детский сад (ясли) | Unsere Tochter geht in die Kita. | Наша дочь ходит в детский сад.
die Tagesmutter | няня (дневная) | Die Tagesmutter betreut drei Kinder. | Дневная няня присматривает за тремя детьми.
der Babysitter | няня (приходящая) | Wir suchen einen Babysitter für Samstag. | Мы ищем няню на субботу.
erziehen | воспитывать | Sie erziehen ihre Kinder zweisprachig. | Они воспитывают детей двуязычными.
die Erziehung | воспитание | Erziehung ist nicht einfach. | Воспитание — дело непростое.
loben | хвалить | Lob dein Kind, wenn es etwas gut macht. | Хвали ребёнка, когда он что-то делает хорошо.
schimpfen | ругать | Die Mutter schimpft mit dem Kind. | Мама ругает ребёнка.
verbieten (Kinder) | запрещать | Wir verbieten unseren Kindern das Handy beim Essen. | Мы запрещаем детям телефон за едой.
das Taschengeld | карманные деньги | Er bekommt zehn Euro Taschengeld pro Woche. | Он получает десять евро карманных в неделю.
der Elternabend | родительское собрание | Heute Abend ist Elternabend. | Сегодня вечером родительское собрание.
die Einschulung | поступление в школу | Die Einschulung ist im September. | Ребёнок идёт в школу в сентябре.
die Schultüte | кулёк со сладостями (первоклассника) | Zur Einschulung bekommt jedes Kind eine Schultüte. | В первый школьный день каждый ребёнок получает кулёк со сладостями.
die Pubertät | пубертат | Unser Sohn ist mitten in der Pubertät. | Наш сын в самом разгаре переходного возраста.
der Jugendliche | подросток | Jugendliche verbringen viel Zeit online. | Подростки проводят много времени онлайн.
zweisprachig | двуязычный | Unsere Kinder wachsen zweisprachig auf. | Наши дети растут двуязычными.
die Muttersprache | родной язык | Meine Muttersprache ist Russisch. | Мой родной язык — русский.
alleinerziehend | воспитывающий ребёнка в одиночку | Sie ist alleinerziehend mit zwei Kindern. | Она одна воспитывает двоих детей.
das Sorgerecht | право опеки | Beide Eltern haben das Sorgerecht. | Оба родителя имеют право опеки.
#B2
die Kinderbetreuung | присмотр за детьми | Die Kinderbetreuung ist hier sehr teuer. | Присмотр за детьми здесь очень дорогой.
die Vereinbarkeit von Familie und Beruf | совмещение семьи и работы | Die Vereinbarkeit von Familie und Beruf ist schwierig. | Совмещать семью и работу трудно.
`),

  ...parseVocab("beziehungen", "B1", `
sich kennenlernen | знакомиться | Wir haben uns im Urlaub kennengelernt. | Мы познакомились в отпуске.
das Date | свидание | Ich habe heute Abend ein Date. | У меня сегодня вечером свидание.
die Verabredung | договорённость о встрече | Ich habe eine Verabredung mit Anna. | У меня встреча с Анной.
zusammen sein | встречаться (о паре) | Sie sind seit zwei Jahren zusammen. | Они вместе уже два года.
zusammenziehen | съезжаться | Wir ziehen nächsten Monat zusammen. | В следующем месяце мы съезжаемся.
die Verlobung | помолвка | Die Verlobung war eine Überraschung. | Помолвка стала сюрпризом.
verlobt | помолвленный | Sie sind seit Mai verlobt. | Они помолвлены с мая.
der Heiratsantrag | предложение руки и сердца | Er hat ihr einen Heiratsantrag gemacht. | Он сделал ей предложение. | 💍
die Ehe (B1) | брак | Ihre Ehe hält schon 40 Jahre. | Их браку уже 40 лет.
die Scheidung | развод | Die Scheidung war schwierig. | Развод был тяжёлым.
sich scheiden lassen | разводиться | Sie haben sich scheiden lassen. | Они развелись.
der Streit | ссора | Wir hatten einen Streit. | У нас была ссора.
sich vertragen | ладить | Die Geschwister vertragen sich gut. | Брат с сестрой хорошо ладят.
das Missverständnis | недоразумение | Das war nur ein Missverständnis. | Это было лишь недоразумение.
die Fernbeziehung | отношения на расстоянии | Wir führen eine Fernbeziehung. | У нас отношения на расстоянии.
treu | верный | Ein Hund ist ein treuer Freund. | Собака — верный друг.
untreu | неверный | Er war ihr untreu. | Он ей изменял.
der Bekannte | знакомый | Er ist nur ein Bekannter, kein Freund. | Он просто знакомый, не друг.
der Kumpel | приятель | Ich gehe mit meinen Kumpels Fußball spielen. | Я иду играть в футбол с приятелями.
die Clique | компания (друзей) | Unsere Clique trifft sich jeden Freitag. | Наша компания встречается каждую пятницу.
#B2
die Zweisamkeit | жизнь вдвоём, уединение вдвоём | Sie genießen ihre Zweisamkeit. | Они наслаждаются временем вдвоём.
die Bindungsangst | боязнь серьёзных отношений | Er hat Bindungsangst. | Он боится серьёзных отношений.
auf Augenhöhe | на равных | Sie führen eine Beziehung auf Augenhöhe. | У них отношения на равных.
die Patchworkfamilie | смешанная семья | Wir sind eine typische Patchworkfamilie. | Мы типичная смешанная семья.
`),

  ...parseVocab("umgangssprache", "B1", `
krass | жёстко, круто (разг.) | Das ist ja krass! | Вот это жесть!
geil | круто (молодёжн.) | Das Konzert war echt geil! | Концерт был просто огонь!
cool | классно | Das finde ich cool. | По-моему, это классно.
chillen | отдыхать, расслабляться | Wir chillen heute einfach zu Hause. | Мы сегодня просто отдыхаем дома.
quatschen | болтать | Wir haben stundenlang gequatscht. | Мы болтали часами.
der Quatsch | ерунда | Red keinen Quatsch! | Не неси чушь!
die Kohle (Geld) | бабки, деньги (разг.) | Ich habe keine Kohle mehr. | У меня больше нет бабок.
pleite | на мели | Am Monatsende bin ich immer pleite. | В конце месяца я всегда на мели.
der Typ | парень, тип | Wer ist der Typ da drüben? | Кто тот парень вон там?
die Klamotten | шмотки | Ich brauche neue Klamotten. | Мне нужны новые шмотки.
die Bude | хата, жильё (разг.) | Komm doch mal in meine Bude. | Заходи как-нибудь ко мне на хату.
pennen | дрыхнуть | Ich habe bis Mittag gepennt. | Я дрых до обеда.
abhauen | сваливать | Lass uns abhauen! | Давай свалим!
nerven | доставать, бесить | Du nervst! | Ты меня достал!
der Bock (Lust) | желание (разг.) | Ich habe keinen Bock auf Arbeit. | У меня нет никакого желания работать.
Na und? | ну и что? | Er ist reich. — Na und? | Он богатый. — Ну и что?
Alles klar! | всё ясно, понял! | Wir treffen uns um acht. — Alles klar! | Встречаемся в восемь. — Понял!
Echt? | правда? | Du hast gewonnen? Echt? | Ты выиграл? Правда?
Keine Ahnung. | без понятия | Wo ist Tom? — Keine Ahnung. | Где Том? — Без понятия.
Mist! | чёрт! (досада) | Mist, ich habe den Zug verpasst! | Чёрт, я опоздал на поезд!
Na ja. | ну, так себе | Wie war der Film? — Na ja. | Как фильм? — Так себе.
Genau! | точно! | Genau, das meine ich! | Точно, это я и имею в виду!
Ach so! | ах вот как! | Ach so, jetzt verstehe ich. | А, теперь понятно.
Mal sehen. | посмотрим | Kommst du morgen? — Mal sehen. | Придёшь завтра? — Посмотрим.
Spinnst du? | ты с ума сошёл? | Du willst bei dem Wetter schwimmen? Spinnst du? | Ты хочешь купаться в такую погоду? С ума сошёл?
Halt die Klappe! | заткнись! (грубо) | Halt endlich die Klappe! | Да заткнись ты уже!
das Handy (umgangssprachlich) | мобильник | Leg mal dein Handy weg. | Отложи-ка свой мобильник.
das Feierabendbier | пиво после работы | Wir trinken noch ein Feierabendbier. | Выпьем по пиву после работы.
die Glotze | ящик (телевизор) | Er sitzt den ganzen Tag vor der Glotze. | Он целыми днями сидит перед ящиком.
der Zoff | ссора, разборки | Es gab Zoff mit den Nachbarn. | Были разборки с соседями.
`),

  ...parseVocab("dach_regional", "B1", `
der Paradeiser (AT) | помидор (австр.) | In Wien sagt man Paradeiser statt Tomate. | В Вене говорят «парадайзер» вместо «томат».
die Erdäpfel (AT) | картофель (австр.) | Zum Schnitzel gibt es Erdäpfelsalat. | К шницелю подают картофельный салат.
der Topfen (AT) | творог (австр.) | Topfenstrudel ist eine Wiener Spezialität. | Творожный штрудель — венский деликатес.
die Marille (AT) | абрикос (австр.) | Marillenknödel sind sehr lecker. | Абрикосовые кнедлики очень вкусные.
das Sackerl (AT) | пакет (австр.) | Brauchen Sie ein Sackerl? | Вам нужен пакетик?
Servus! (AT/BY) | привет/пока (австр./бавар.) | Servus, wie geht's dir? | Привет, как дела?
Grüß Gott! (AT/BY) | здравствуйте (юг) | Grüß Gott, Frau Huber! | Здравствуйте, госпожа Хубер!
der Jänner (AT) | январь (австр.) | Im Jänner ist es in Wien kalt. | В январе в Вене холодно.
heuer (AT/BY) | в этом году (юж.) | Heuer fahren wir nach Kärnten. | В этом году мы едем в Каринтию.
die Matura (AT/CH) | аттестат зрелости (австр./швейц.) | Sie hat die Matura mit Auszeichnung bestanden. | Она сдала выпускные экзамены с отличием.
der Kasten (AT) | шкаф (австр.) | Die Jacke hängt im Kasten. | Куртка висит в шкафу.
Grüezi! (CH) | здравствуйте (швейц.) | Grüezi mitenand! | Здравствуйте все!
Merci vielmals! (CH) | большое спасибо (швейц.) | Merci vielmals für die Hilfe! | Большое спасибо за помощь!
das Velo (CH) | велосипед (швейц.) | Ich fahre mit dem Velo zur Arbeit. | Я езжу на работу на велосипеде.
das Natel (CH) | мобильный телефон (швейц.) | Ruf mich auf dem Natel an. | Позвони мне на мобильный.
parkieren (CH) | парковаться (швейц.) | Hier darf man nicht parkieren. | Здесь нельзя парковаться.
das Trottoir (CH) | тротуар (швейц.) | Die Kinder spielen auf dem Trottoir. | Дети играют на тротуаре.
der Franken (CH) | швейцарский франк | Das kostet zwanzig Franken. | Это стоит двадцать франков.
der Kanton (CH) | кантон | Die Schweiz hat 26 Kantone. | В Швейцарии 26 кантонов.
die Gemeinde | община, муниципалитет | In der Schweiz meldet man sich bei der Gemeinde an. | В Швейцарии регистрируются в общине.
Moin! (Norddeutschland) | привет (север) | Moin, wie geht's? | Привет, как дела?
das Brötchen / die Semmel / der Weck | булочка (север/юг/запад) | In Bayern sagt man Semmel statt Brötchen. | В Баварии говорят «земмель» вместо «брётхен».
`),

  ...parseVocab("briefe_formell", "B1", `
Sehr geehrte Damen und Herren, | Уважаемые дамы и господа, | Sehr geehrte Damen und Herren, ich schreibe Ihnen wegen ... | Уважаемые дамы и господа, я пишу вам по поводу ...
Sehr geehrter Herr ..., | Уважаемый господин ..., | Sehr geehrter Herr Wagner, vielen Dank für Ihre Antwort. | Уважаемый господин Вагнер, большое спасибо за ваш ответ.
Mit freundlichen Grüßen | С уважением | Mit freundlichen Grüßen, Anna Petrowa | С уважением, Анна Петрова
Liebe Grüße | С наилучшими пожеланиями (неформ.) | Liebe Grüße aus Berlin! | Привет из Берлина!
der Betreff | тема (письма) | Was schreibe ich in den Betreff? | Что написать в теме письма?
die Anfrage | запрос | Vielen Dank für Ihre Anfrage. | Спасибо за ваш запрос.
anbei | в приложении | Anbei sende ich Ihnen die Unterlagen. | В приложении высылаю вам документы.
bezugnehmend auf | ссылаясь на | Bezugnehmend auf unser Telefonat ... | Ссылаясь на наш телефонный разговор ...
Ich bitte um Rückmeldung. | прошу дать ответ | Ich bitte um eine kurze Rückmeldung. | Прошу дать краткий ответ.
Für Rückfragen stehe ich gern zur Verfügung. | готов ответить на вопросы | Für Rückfragen stehe ich Ihnen gern zur Verfügung. | Буду рад ответить на ваши вопросы.
Ich würde mich freuen, wenn ... | я был бы рад, если ... | Ich würde mich freuen, wenn Sie mich zurückrufen. | Я был бы рад, если бы вы мне перезвонили.
Vielen Dank im Voraus. | заранее спасибо | Vielen Dank im Voraus für Ihre Hilfe. | Заранее благодарю за помощь.
der Einspruch | возражение, протест | Hiermit lege ich Einspruch gegen den Bescheid ein. | Настоящим заявляю протест против решения.
hiermit | настоящим | Hiermit kündige ich meinen Vertrag. | Настоящим расторгаю свой договор.
fristgerecht | в установленный срок | Ich kündige fristgerecht zum 31. März. | Расторгаю договор в установленный срок — к 31 марта.
die Kündigungsbestätigung | подтверждение расторжения | Bitte senden Sie mir eine Kündigungsbestätigung. | Пожалуйста, пришлите мне подтверждение расторжения.
die Beschwerde | жалоба | Ich möchte eine Beschwerde einreichen. | Я хочу подать жалобу.
das Schreiben | письмо (офиц.) | Vielen Dank für Ihr Schreiben vom 5. Mai. | Благодарю за ваше письмо от 5 мая.
unverzüglich | безотлагательно | Bitte antworten Sie unverzüglich. | Пожалуйста, ответьте безотлагательно.
umgehend | немедленно | Wir werden uns umgehend darum kümmern. | Мы немедленно этим займёмся.
`),

  ...parseVocab("verben_wichtig", "B2", `
ermöglichen | делать возможным | Das Stipendium ermöglicht ihr das Studium. | Стипендия даёт ей возможность учиться.
erfordern | требовать (о вещах) | Diese Arbeit erfordert viel Geduld. | Эта работа требует много терпения.
betreffen | касаться | Das Problem betrifft uns alle. | Проблема касается всех нас.
beeinträchtigen | ухудшать, мешать | Lärm beeinträchtigt die Konzentration. | Шум мешает концентрации.
bewältigen | справляться | Wir haben die Krise gut bewältigt. | Мы хорошо справились с кризисом.
bewirken | вызывать, добиваться | Seine Worte haben viel bewirkt. | Его слова многого добились.
bevorzugen | предпочитать | Ich bevorzuge den Zug. | Я предпочитаю поезд.
gewährleisten | гарантировать, обеспечивать | Die Sicherheit muss gewährleistet sein. | Безопасность должна быть обеспечена.
umsetzen | реализовывать | Wir setzen den Plan sofort um. | Мы сразу реализуем план.
verdeutlichen | пояснять | Das Beispiel verdeutlicht das Problem. | Пример поясняет проблему.
verfolgen | преследовать (цель), следить | Wir verfolgen ein klares Ziel. | Мы преследуем ясную цель.
vermitteln | передавать (знания), посредничать | Der Lehrer vermittelt Wissen. | Учитель передаёт знания.
verursachen | вызывать, причинять | Der Sturm verursachte große Schäden. | Буря причинила большой ущерб.
voraussehen | предвидеть | Das konnte niemand voraussehen. | Этого никто не мог предвидеть.
zögern | колебаться | Er zögerte keinen Moment. | Он не колебался ни секунды.
zugeben | признавать | Er gibt seinen Fehler zu. | Он признаёт свою ошибку.
zurückführen auf | объяснять чем-то | Das ist auf Stress zurückzuführen. | Это объясняется стрессом.
beanspruchen | требовать, занимать | Das Projekt beansprucht viel Zeit. | Проект отнимает много времени.
gestalten | оформлять, формировать | Wir gestalten unsere Zukunft selbst. | Мы сами формируем своё будущее.
ergreifen | хватать, предпринимать | Er ergriff die Chance. | Он воспользовался шансом.
erweitern | расширять | Ich möchte meinen Wortschatz erweitern. | Я хочу расширить свой словарный запас.
verringern | уменьшать | Wir müssen die Kosten verringern. | Нам нужно сократить расходы.
erhöhen | повышать | Die Firma erhöht die Preise. | Фирма повышает цены.
senken | снижать | Die Bank senkt die Zinsen. | Банк снижает ставки.
fördern | поощрять, поддерживать | Der Staat fördert erneuerbare Energien. | Государство поддерживает возобновляемую энергию.
hindern | мешать | Niemand hindert dich daran. | Никто тебе не мешает.
schätzen | ценить; оценивать | Ich schätze deine Hilfe sehr. | Я очень ценю твою помощь.
überwinden | преодолевать | Sie hat ihre Angst überwunden. | Она преодолела свой страх.
übertreiben | преувеличивать | Du übertreibst! | Ты преувеличиваешь!
unterscheiden | различать | Kannst du die Zwillinge unterscheiden? | Ты можешь различить близнецов?
#C1
ausschließen | исключать | Das kann man nicht ausschließen. | Этого нельзя исключать.
einräumen | признавать, уступать | Er räumte ein, dass er sich geirrt hatte. | Он признал, что ошибался.
erwägen | обдумывать | Wir erwägen einen Umzug. | Мы обдумываем переезд.
gewähren | предоставлять | Die Bank gewährt einen Kredit. | Банк предоставляет кредит.
nachgehen | заниматься; отставать (о часах) | Er geht seiner Arbeit nach. | Он занимается своей работой.
veranlassen | побуждать, распоряжаться | Was hat ihn dazu veranlasst? | Что его к этому побудило?
vernachlässigen | пренебрегать | Er vernachlässigt seine Gesundheit. | Он пренебрегает своим здоровьем.
beabsichtigen | намереваться | Ich beabsichtige, im Herbst umzuziehen. | Я намереваюсь переехать осенью.
bekräftigen | подтверждать, подкреплять | Der Minister bekräftigte seine Position. | Министр подтвердил свою позицию.
`),

  ...parseVocab("adjektive_wichtig", "C1", `
#B2
bemerkenswert | примечательный | Das ist eine bemerkenswerte Leistung. | Это примечательное достижение.
beträchtlich | значительный | Die Summe ist beträchtlich. | Сумма значительная.
fragwürdig | сомнительный | Seine Methoden sind fragwürdig. | Его методы сомнительны.
gründlich | основательный, тщательный | Er hat das Zimmer gründlich geputzt. | Он тщательно убрал комнату.
heikel | щекотливый | Das ist ein heikles Thema. | Это щекотливая тема.
kostspielig | дорогостоящий | Der Umbau war kostspielig. | Перестройка была дорогостоящей.
mühsam | трудоёмкий | Das war eine mühsame Arbeit. | Это была трудоёмкая работа.
selbstverständlich | само собой разумеющийся | Das ist doch selbstverständlich! | Это же само собой разумеется!
überflüssig | лишний | Diese Diskussion ist überflüssig. | Эта дискуссия излишня.
unverzichtbar | незаменимый | Sie ist für das Team unverzichtbar. | Она незаменима для команды.
vorläufig | предварительный | Das ist nur ein vorläufiges Ergebnis. | Это лишь предварительный результат.
wesentlich | существенный | Es gibt einen wesentlichen Unterschied. | Есть существенная разница.
zweifelhaft | сомнительный | Der Erfolg ist zweifelhaft. | Успех сомнителен.
#C1
ausgeprägt | выраженный | Er hat einen ausgeprägten Sinn für Humor. | У него ярко выраженное чувство юмора.
beharrlich | упорный | Sie arbeitet beharrlich an ihrem Ziel. | Она упорно работает над своей целью.
erschöpfend | исчерпывающий | Die Antwort war erschöpfend. | Ответ был исчерпывающим.
gravierend | серьёзный, тяжёлый | Das ist ein gravierender Fehler. | Это серьёзная ошибка.
hinfällig | недействительный, отпавший | Der Plan ist damit hinfällig. | Тем самым план отпадает.
mutmaßlich | предполагаемый | Der mutmaßliche Täter wurde gefasst. | Предполагаемый преступник пойман.
sachlich | деловой, объективный | Bleiben wir bitte sachlich. | Давайте будем объективны.
tiefgreifend | глубокий, радикальный | Es gab tiefgreifende Reformen. | Были проведены глубокие реформы.
unumgänglich | неизбежный | Eine Reform ist unumgänglich. | Реформа неизбежна.
verblüffend | поразительный | Die Ähnlichkeit ist verblüffend. | Сходство поразительное.
zutreffend | верный, соответствующий | Zutreffendes bitte ankreuzen. | Нужное отметить крестиком.
`),

  ...parseVocab("gesundheit", "B2", `
die Prävention | профилактика | Prävention ist besser als Behandlung. | Профилактика лучше лечения.
das Wohlbefinden | благополучие, хорошее самочувствие | Sport steigert das Wohlbefinden. | Спорт улучшает самочувствие.
die Lebenserwartung | продолжительность жизни | Die Lebenserwartung steigt. | Продолжительность жизни растёт.
die Sucht | зависимость | Spielsucht ist eine ernste Krankheit. | Игромания — серьёзная болезнь.
süchtig | зависимый | Er ist süchtig nach seinem Handy. | Он зависим от телефона.
der Entzug | лечение от зависимости | Er macht einen Entzug. | Он проходит лечение от зависимости.
das Übergewicht | лишний вес | Übergewicht ist ein Risikofaktor. | Лишний вес — фактор риска.
die Schlafstörung | нарушение сна | Viele leiden unter Schlafstörungen. | Многие страдают нарушениями сна.
der Kreislauf | кровообращение | Mein Kreislauf ist heute schwach. | У меня сегодня слабое давление.
der Herzinfarkt | инфаркт | Er hatte einen Herzinfarkt. | У него был инфаркт.
der Schlaganfall | инсульт | Nach dem Schlaganfall musste sie neu sprechen lernen. | После инсульта ей пришлось заново учиться говорить.
der Krebs | рак | Rauchen erhöht das Krebsrisiko. | Курение повышает риск рака.
die Pflege | уход | Die Pflege alter Menschen ist anstrengend. | Уход за пожилыми людьми утомителен.
das Pflegeheim | дом престарелых | Die Oma lebt im Pflegeheim. | Бабушка живёт в доме престарелых.
das Gesundheitswesen | здравоохранение | Das Gesundheitswesen ist überlastet. | Система здравоохранения перегружена.
die Impfpflicht | обязательная вакцинация | Es gibt eine Impfpflicht gegen Masern. | Есть обязательная вакцинация от кори.
die Organspende | донорство органов | Hast du einen Organspendeausweis? | У тебя есть карта донора органов?
#C1
die Volkskrankheit | распространённая болезнь | Diabetes ist eine Volkskrankheit. | Диабет — массовое заболевание.
die Zweitmeinung | второе мнение (врача) | Holen Sie sich eine Zweitmeinung ein. | Обратитесь за вторым мнением.
psychosomatisch | психосоматический | Die Beschwerden sind psychosomatisch. | Жалобы психосоматические.
`),

  ...parseVocab("reisen", "B1", `
die Reiseroute | маршрут путешествия | Hast du die Reiseroute schon geplant? | Ты уже спланировал маршрут?
die Rundreise | тур по нескольким местам | Wir machen eine Rundreise durch Italien. | Мы совершаем тур по Италии.
der Rucksacktourist | турист с рюкзаком | Viele Rucksacktouristen übernachten im Hostel. | Многие туристы с рюкзаками ночуют в хостелах.
die Reisewarnung | предупреждение о поездках | Für das Land gibt es eine Reisewarnung. | Для этой страны действует предупреждение о поездках.
der Jetlag | джетлаг | Nach dem Flug hatte ich starken Jetlag. | После перелёта у меня был сильный джетлаг.
das Reiseziel | цель поездки | Was ist euer nächstes Reiseziel? | Куда вы поедете в следующий раз?
die Hauptsaison | высокий сезон | In der Hauptsaison ist alles teurer. | В высокий сезон всё дороже.
die Nebensaison | низкий сезон | In der Nebensaison ist es ruhiger. | В низкий сезон спокойнее.
ausgebucht | всё забронировано | Das Hotel ist ausgebucht. | В отеле нет мест.
die Stornierung | отмена брони | Die Stornierung ist kostenlos. | Отмена брони бесплатна.
stornieren | отменять (бронь) | Ich muss die Reise stornieren. | Мне нужно отменить поездку.
die Einreisebestimmungen | правила въезда | Informieren Sie sich über die Einreisebestimmungen. | Узнайте правила въезда.
#B2
der Massentourismus | массовый туризм | Der Massentourismus schadet der Natur. | Массовый туризм вредит природе.
der sanfte Tourismus | экологичный туризм | Sanfter Tourismus schont die Umwelt. | Экологичный туризм бережёт природу.
die Gastfreundlichkeit | гостеприимство | Die Gastfreundlichkeit der Menschen war beeindruckend. | Гостеприимство людей впечатляло.
`),

  ...parseVocab("essen", "B1", `
das Hauptgericht | основное блюдо | Als Hauptgericht empfehle ich das Schnitzel. | На основное рекомендую шницель.
die Beilage | гарнир | Als Beilage gibt es Pommes oder Reis. | На гарнир картошка фри или рис.
das Schnitzel | шницель | Das Wiener Schnitzel ist aus Kalbfleisch. | Венский шницель делают из телятины.
die Bratwurst | жареная колбаска | Auf dem Markt essen wir eine Bratwurst. | На рынке мы едим жареную колбаску. | 🌭
die Brezel | крендель | Zum Bier gibt es eine Brezel. | К пиву подают крендель. | 🥨
das Sauerkraut | квашеная капуста | Sauerkraut ist typisch deutsch. | Квашеная капуста — типично немецкое блюдо.
der Eintopf | густой суп, рагу | Im Winter koche ich gern Eintopf. | Зимой я люблю готовить айнтопф.
die Spätzle | шпецле (клёцки) | Käsespätzle kommen aus Schwaben. | Шпецле с сыром родом из Швабии.
der Knödel | кнедлик | Zum Braten gibt es Knödel. | К жаркому подают кнедлики.
das Abendbrot | ужин (бутерброды) | Zum Abendbrot essen wir Brot mit Käse. | На ужин у нас хлеб с сыром.
der Imbiss | закусочная | Wir essen schnell am Imbiss. | Мы быстро перекусываем в закусочной.
der Döner | дёнер (шаурма) | Einen Döner mit allem, bitte. | Дёнер со всем, пожалуйста. | 🥙
zum Mitnehmen | навынос | Einen Kaffee zum Mitnehmen, bitte. | Кофе навынос, пожалуйста.
hier essen | есть здесь | Zum Hieressen oder zum Mitnehmen? | Здесь или с собой?
die Lebensmittel | продукты питания | Die Lebensmittel sind teurer geworden. | Продукты подорожали.
das Haltbarkeitsdatum | срок годности | Das Haltbarkeitsdatum ist abgelaufen. | Срок годности истёк.
bio | органический | Ich kaufe nur Bio-Gemüse. | Я покупаю только органические овощи.
glutenfrei | без глютена | Haben Sie glutenfreies Brot? | У вас есть хлеб без глютена?
laktosefrei | без лактозы | Ich trinke nur laktosefreie Milch. | Я пью только безлактозное молоко.
`),
];
