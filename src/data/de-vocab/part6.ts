import { parseVocab } from "../vocabParse";

// Учёба, досуг, культура, праздники, география, природа, экстренные службы, право.
export const PART6 = [
  ...parseVocab("schule", "A2", `
die Tafel | доска (школьная) | Der Lehrer schreibt an die Tafel. | Учитель пишет на доске.
der Kugelschreiber | шариковая ручка | Hast du einen Kugelschreiber? | У тебя есть ручка? | 🖊️
der Bleistift | карандаш | Schreib mit Bleistift. | Пиши карандашом. | ✏️
der Radiergummi | ластик | Kann ich deinen Radiergummi haben? | Можно твой ластик?
das Lineal | линейка | Zeichne die Linie mit dem Lineal. | Начерти линию по линейке. | 📏
die Schere | ножницы | Die Schere ist sehr scharf. | Ножницы очень острые. | ✂️
das Wörterbuch | словарь | Schlag das Wort im Wörterbuch nach. | Посмотри слово в словаре.
das Zeugnis | табель, аттестат | Er hat ein gutes Zeugnis bekommen. | Он получил хороший табель.
das Fach | предмет (школьный) | Mein Lieblingsfach ist Mathe. | Мой любимый предмет — математика.
die Mathematik | математика | Mathematik ist nicht mein Ding. | Математика — не моё. | ➗
die Geschichte (Fach) | история (предмет) | In Geschichte lernen wir über Rom. | На истории мы изучаем Рим.
die Erdkunde | география | In Erdkunde lernen wir die Hauptstädte. | На географии мы учим столицы.
die Biologie | биология | Biologie finde ich spannend. | Биология мне интересна.
die Chemie | химия | Die Chemieprüfung war schwer. | Экзамен по химии был трудным. | 🧪
die Physik | физика | Er studiert Physik. | Он изучает физику.
der Sportunterricht | урок физкультуры | Heute haben wir Sportunterricht. | Сегодня у нас физкультура.
die Grundschule | начальная школа | Meine Tochter geht in die Grundschule. | Моя дочь ходит в начальную школу.
das Gymnasium | гимназия | Nach der vierten Klasse wechselt er aufs Gymnasium. | После четвёртого класса он переходит в гимназию.
das Abitur | аттестат зрелости (абитур) | Sie macht dieses Jahr Abitur. | Она в этом году сдаёт абитур.
die Ferien | каникулы | In den Ferien fahren wir weg. | На каникулах мы уезжаем.
der Stundenplan | расписание уроков | Hast du schon den neuen Stundenplan? | У тебя уже есть новое расписание?
die Klassenarbeit | контрольная работа | Morgen schreiben wir eine Klassenarbeit. | Завтра мы пишем контрольную.
der Fehler | ошибка | Du hast nur einen Fehler gemacht. | Ты сделал только одну ошибку.
üben | упражняться | Ich übe jeden Tag Vokabeln. | Я каждый день повторяю слова.
die Übung | упражнение | Macht bitte Übung drei. | Сделайте, пожалуйста, упражнение три.
#B1
bestehen (Prüfung) | сдать (экзамен) | Ich habe die Prüfung bestanden! | Я сдал экзамен!
durchfallen | провалить (экзамен) | Er ist durch die Prüfung gefallen. | Он провалил экзамен.
die Vorlesung | лекция | Die Vorlesung beginnt um neun. | Лекция начинается в девять.
das Seminar | семинар | Im Seminar diskutieren wir viel. | На семинаре мы много обсуждаем.
der Professor | профессор | Der Professor ist sehr bekannt. | Профессор очень известен.
das Semester | семестр | Ich bin im dritten Semester. | Я на третьем семестре.
die Hausarbeit | курсовая работа | Ich schreibe eine Hausarbeit über Goethe. | Я пишу курсовую о Гёте.
die Bachelorarbeit | бакалаврская работа | Sie schreibt gerade ihre Bachelorarbeit. | Она сейчас пишет бакалаврскую работу.
der Studiengang | специальность, программа | Welchen Studiengang hast du gewählt? | Какую специальность ты выбрал?
sich einschreiben | записаться (в вуз) | Ich habe mich an der Uni eingeschrieben. | Я поступил в университет.
die Mensa | студенческая столовая | Wir essen in der Mensa. | Мы едим в студенческой столовой.
das Studentenwohnheim | студенческое общежитие | Er wohnt im Studentenwohnheim. | Он живёт в студенческом общежитии.
die Bibliothek (B1) | библиотека | In der Bibliothek ist es ruhig. | В библиотеке тихо. | 📚
das Zeugnis anerkennen | признавать аттестат | Mein Zeugnis wurde anerkannt. | Мой аттестат признали.
die Volkshochschule | народный университет (курсы) | Ich mache einen Kurs an der Volkshochschule. | Я хожу на курсы в народный университет.
#B2
die Promotion | защита докторской | Sie arbeitet an ihrer Promotion. | Она работает над диссертацией.
die Fachhochschule | высшая профессиональная школа | Er studiert an einer Fachhochschule. | Он учится в высшей профессиональной школе.
der Studienabschluss | диплом об окончании вуза | Mit diesem Studienabschluss findet man leicht Arbeit. | С этим дипломом легко найти работу.
das BAföG | студенческая стипендия (БАфёГ) | Viele Studenten bekommen BAföG. | Многие студенты получают BAföG.
die Studiengebühren | плата за обучение | In Deutschland gibt es kaum Studiengebühren. | В Германии почти нет платы за обучение.
`),

  ...parseVocab("freizeit", "A2", `
spazieren gehen | гулять | Wir gehen im Park spazieren. | Мы гуляем в парке.
Musik hören | слушать музыку | In der Freizeit höre ich Musik. | В свободное время я слушаю музыку.
ins Kino gehen | ходить в кино | Gehen wir heute ins Kino? | Пойдём сегодня в кино?
kochen (Hobby) | готовить (хобби) | Mein Hobby ist Kochen. | Моё хобби — готовка.
zeichnen | рисовать (карандашом) | Das Kind zeichnet ein Haus. | Ребёнок рисует дом.
Gitarre spielen | играть на гитаре | Er spielt seit zehn Jahren Gitarre. | Он играет на гитаре уже десять лет. | 🎸
Klavier spielen | играть на пианино | Meine Schwester spielt Klavier. | Моя сестра играет на пианино. | 🎹
das Computerspiel | компьютерная игра | Er spielt den ganzen Tag Computerspiele. | Он весь день играет в компьютерные игры. | 🎮
das Brettspiel | настольная игра | Am Abend spielen wir ein Brettspiel. | Вечером мы играем в настольную игру. | 🎲
Karten spielen | играть в карты | Die Großeltern spielen gern Karten. | Бабушка с дедушкой любят играть в карты. | 🃏
Schach | шахматы | Kannst du Schach spielen? | Ты умеешь играть в шахматы? | ♟️
basteln | мастерить | Die Kinder basteln Laternen. | Дети мастерят фонарики.
stricken | вязать | Oma strickt mir einen Pullover. | Бабушка вяжет мне свитер. | 🧶
gärtnern | садоводничать | Am Wochenende gärtnere ich gern. | На выходных я люблю работать в саду.
die Party | вечеринка | Kommst du zu meiner Party? | Придёшь на мою вечеринку? | 🎉
das Picknick | пикник | Wir machen ein Picknick im Park. | Мы устраиваем пикник в парке. | 🧺
der Ausflug | экскурсия, поездка | Am Sonntag machen wir einen Ausflug. | В воскресенье мы едем на экскурсию.
die Freizeit | свободное время | Was machst du in deiner Freizeit? | Что ты делаешь в свободное время?
der Biergarten | пивной сад | Im Sommer sitzen wir im Biergarten. | Летом мы сидим в пивном саду. | 🍺
die Kneipe | пивная, бар | Wir treffen uns in der Kneipe. | Встречаемся в баре.
der Club | клуб | Am Samstag gehen wir in einen Club. | В субботу мы идём в клуб.
#B1
das Ehrenamt (B1) | волонтёрство | Sie engagiert sich im Ehrenamt. | Она занимается волонтёрством.
der Chor | хор | Ich singe in einem Chor. | Я пою в хоре.
die Volkshochschule (Kurs) | курсы для взрослых | Ich mache einen Töpferkurs. | Я хожу на курс гончарного дела.
das Abenteuer | приключение | Die Reise war ein echtes Abenteuer. | Поездка была настоящим приключением.
die Leidenschaft | страсть | Fotografie ist meine Leidenschaft. | Фотография — моя страсть.
sich erholen (B1) | отдыхать, восстанавливаться | Im Urlaub erhole ich mich gut. | В отпуске я хорошо отдыхаю.
`),

  ...parseVocab("kultur_kunst", "B1", `
#A2
das Lied | песня | Das Lied gefällt mir sehr. | Эта песня мне очень нравится. | 🎵
der Sänger | певец | Der Sänger hat eine tolle Stimme. | У певца отличный голос. | 🎤
die Band | группа (музыкальная) | Meine Lieblingsband spielt heute. | Моя любимая группа сегодня выступает.
das Instrument | инструмент | Spielst du ein Instrument? | Ты играешь на каком-нибудь инструменте?
der Roman | роман | Ich lese gerade einen spannenden Roman. | Я сейчас читаю увлекательный роман. | 📕
der Schauspieler | актёр | Der Schauspieler ist sehr berühmt. | Актёр очень знаменит.
die Serie | сериал | Welche Serie schaust du gerade? | Какой сериал ты сейчас смотришь?
#B1
der Künstler | художник, деятель искусства | Der Künstler stellt seine Bilder aus. | Художник выставляет свои картины. | 👨‍🎨
das Gemälde | картина (живопись) | Das Gemälde ist sehr wertvoll. | Картина очень ценная.
die Skulptur | скульптура | Im Park steht eine moderne Skulptur. | В парке стоит современная скульптура.
die Galerie | галерея | Die Galerie zeigt moderne Kunst. | Галерея показывает современное искусство.
die Oper | опера | Wir gehen heute Abend in die Oper. | Сегодня вечером мы идём в оперу.
das Orchester | оркестр | Das Orchester spielt Beethoven. | Оркестр играет Бетховена. | 🎻
der Dirigent | дирижёр | Der Dirigent ist weltberühmt. | Дирижёр всемирно известен.
die Bühne | сцена | Die Schauspieler stehen auf der Bühne. | Актёры стоят на сцене.
die Aufführung | представление, постановка | Die Aufführung war ausverkauft. | Все билеты на спектакль были распроданы.
die Vorstellung (Theater) | спектакль, сеанс | Die Vorstellung beginnt um 20 Uhr. | Спектакль начинается в 20 часов.
das Publikum | публика | Das Publikum hat lange applaudiert. | Публика долго аплодировала. | 👏
der Eintritt | вход, плата за вход | Der Eintritt ist frei. | Вход свободный.
die Eintrittskarte | входной билет | Ich habe zwei Eintrittskarten gekauft. | Я купил два билета. | 🎟️
der Schriftsteller | писатель | Thomas Mann ist ein bekannter Schriftsteller. | Томас Манн — известный писатель.
das Gedicht | стихотворение | Die Kinder lernen ein Gedicht auswendig. | Дети учат стихотворение наизусть.
der Dichter | поэт | Goethe war ein großer Dichter. | Гёте был великим поэтом.
die Literatur | литература | Sie studiert deutsche Literatur. | Она изучает немецкую литературу.
der Krimi | детектив | Sonntags schauen wir den Tatort-Krimi. | По воскресеньям мы смотрим детектив «Место преступления».
der Regisseur | режиссёр | Der Regisseur hat einen Preis gewonnen. | Режиссёр получил премию.
der Untertitel | субтитры | Ich schaue Filme mit Untertiteln. | Я смотрю фильмы с субтитрами.
die Handlung | сюжет | Die Handlung des Films ist kompliziert. | Сюжет фильма сложный.
die Hauptrolle | главная роль | Wer spielt die Hauptrolle? | Кто играет главную роль?
#B2
die Kritik | критика, рецензия | Der Film hat gute Kritiken bekommen. | Фильм получил хорошие отзывы.
die Inszenierung | постановка | Die neue Inszenierung ist umstritten. | Новая постановка вызывает споры.
das Werk | произведение | Das ist sein bekanntestes Werk. | Это его самое известное произведение.
der Bestseller | бестселлер | Ihr Buch ist ein Bestseller geworden. | Её книга стала бестселлером.
die Epoche | эпоха | Die Romantik ist eine wichtige Epoche. | Романтизм — важная эпоха.
das Kulturerbe | культурное наследие | Die Altstadt gehört zum Weltkulturerbe. | Старый город входит в список всемирного наследия.
`),

  ...parseVocab("feste", "A2", `
Weihnachten | Рождество | Frohe Weihnachten! | Счастливого Рождества! | 🎄
Ostern | Пасха | Zu Ostern suchen die Kinder Eier. | На Пасху дети ищут яйца. | 🐣
Silvester | канун Нового года | An Silvester gibt es ein Feuerwerk. | В новогоднюю ночь бывает фейерверк. | 🎆
Neujahr | Новый год | Frohes neues Jahr! | С Новым годом!
der Heiligabend | Сочельник | Am Heiligabend bekommen die Kinder Geschenke. | В Сочельник дети получают подарки.
der Adventskalender | адвент-календарь | Jeden Tag öffne ich ein Türchen im Adventskalender. | Каждый день я открываю окошко адвент-календаря.
der Weihnachtsmarkt | рождественская ярмарка | Auf dem Weihnachtsmarkt trinken wir Glühwein. | На рождественской ярмарке мы пьём глинтвейн.
der Glühwein | глинтвейн | Der Glühwein ist sehr heiß. | Глинтвейн очень горячий.
der Weihnachtsbaum | ёлка | Wir schmücken den Weihnachtsbaum. | Мы украшаем ёлку.
das Geschenk | подарок | Danke für das schöne Geschenk! | Спасибо за прекрасный подарок! | 🎁
der Karneval / der Fasching | карнавал | Im Februar feiert man in Köln Karneval. | В феврале в Кёльне празднуют карнавал. | 🎭
das Oktoberfest | Октоберфест | Das Oktoberfest findet in München statt. | Октоберфест проходит в Мюнхене.
der Tag der Deutschen Einheit | День немецкого единства | Am 3. Oktober ist der Tag der Deutschen Einheit. | 3 октября — День немецкого единства.
der Muttertag | День матери | Zum Muttertag schenke ich Blumen. | На День матери я дарю цветы.
die Feier | праздник, торжество | Die Feier war sehr schön. | Праздник был очень красивым.
das Fest | праздник | Das Fest dauert drei Tage. | Праздник длится три дня.
die Einladung | приглашение | Danke für die Einladung! | Спасибо за приглашение!
die Kerze | свеча | Wir zünden eine Kerze an. | Мы зажигаем свечу. | 🕯️
das Feuerwerk | фейерверк | Das Feuerwerk war wunderschön. | Фейерверк был великолепным.
die Tradition | традиция | Das ist eine alte Tradition. | Это старая традиция.
#B1
der Brauch | обычай | Das ist ein alter Brauch. | Это старый обычай.
das Jubiläum | юбилей | Die Firma feiert ihr 100-jähriges Jubiläum. | Фирма празднует 100-летний юбилей.
die Taufe | крещение | Die Taufe ist am Sonntag. | Крещение в воскресенье.
die Beerdigung | похороны | Zur Beerdigung kamen viele Menschen. | На похороны пришло много людей.
der Polterabend | девичник/мальчишник (битьё посуды) | Beim Polterabend wird Geschirr zerschlagen. | На «польтерабенде» бьют посуду.
der Sankt-Martins-Tag | День святого Мартина | Am Sankt-Martins-Tag laufen Kinder mit Laternen. | В день святого Мартина дети ходят с фонариками.
das Erntedankfest | праздник урожая | Im Herbst feiert man das Erntedankfest. | Осенью празднуют праздник урожая.
`),

  ...parseVocab("geografie", "A2", `
Deutschland | Германия | Deutschland hat 16 Bundesländer. | В Германии 16 федеральных земель. | 🇩🇪
Österreich | Австрия | Österreich ist ein schönes Land. | Австрия — красивая страна. | 🇦🇹
die Schweiz | Швейцария | In der Schweiz spricht man vier Sprachen. | В Швейцарии говорят на четырёх языках. | 🇨🇭
Russland | Россия | Ich komme aus Russland. | Я из России. | 🇷🇺
die Ukraine | Украина | Sie kommt aus der Ukraine. | Она из Украины. | 🇺🇦
Frankreich | Франция | Paris ist die Hauptstadt von Frankreich. | Париж — столица Франции. | 🇫🇷
Italien | Италия | In Italien isst man viel Pasta. | В Италии едят много пасты. | 🇮🇹
Spanien | Испания | Im Sommer fahren wir nach Spanien. | Летом мы едем в Испанию. | 🇪🇸
England | Англия | Er studiert in England. | Он учится в Англии.
die USA | США | Meine Tante lebt in den USA. | Моя тётя живёт в США. | 🇺🇸
die Türkei | Турция | Wir machen Urlaub in der Türkei. | Мы отдыхаем в Турции. | 🇹🇷
Polen | Польша | Polen ist ein Nachbarland von Deutschland. | Польша — соседняя страна Германии. | 🇵🇱
China | Китай | China hat sehr viele Einwohner. | В Китае очень много жителей. | 🇨🇳
Europa | Европа | Deutschland liegt in der Mitte Europas. | Германия находится в центре Европы. | 🇪🇺
Asien | Азия | Asien ist der größte Kontinent. | Азия — крупнейший континент.
Afrika | Африка | Er war schon dreimal in Afrika. | Он уже трижды был в Африке.
Amerika | Америка | Kolumbus kam 1492 nach Amerika. | Колумб прибыл в Америку в 1492 году.
der Kontinent | континент | Es gibt sieben Kontinente. | Существует семь континентов.
die Hauptstadt | столица | Berlin ist die Hauptstadt Deutschlands. | Берлин — столица Германии.
das Bundesland | федеральная земля | Bayern ist das größte Bundesland. | Бавария — самая большая федеральная земля.
der Norden | север | Hamburg liegt im Norden. | Гамбург находится на севере. | 🧭
der Süden | юг | Im Süden ist es wärmer. | На юге теплее.
der Osten | восток | Dresden liegt im Osten. | Дрезден находится на востоке.
der Westen | запад | Köln liegt im Westen. | Кёльн находится на западе.
der Einwohner | житель | Die Stadt hat eine Million Einwohner. | В городе миллион жителей.
das Dorf | деревня | Meine Großeltern wohnen in einem Dorf. | Мои бабушка и дедушка живут в деревне.
auf dem Land | в сельской местности | Ich möchte auf dem Land leben. | Я хочу жить за городом.
der Deutsche / die Deutsche | немец / немка | Er ist Deutscher. | Он немец.
der Russe / die Russin | русский / русская | Sie ist Russin. | Она русская.
#B1
die Nordsee | Северное море | An der Nordsee gibt es Ebbe und Flut. | На Северном море бывают приливы и отливы.
die Ostsee | Балтийское море | Wir fahren an die Ostsee. | Мы едем на Балтику.
die Alpen | Альпы | Im Winter fahren wir in die Alpen. | Зимой мы едем в Альпы. | 🏔️
der Rhein | Рейн | Der Rhein ist ein langer Fluss. | Рейн — длинная река.
die Donau | Дунай | Die Donau fließt durch Wien. | Дунай протекает через Вену.
der Bodensee | Боденское озеро | Der Bodensee grenzt an drei Länder. | Боденское озеро граничит с тремя странами.
das Nachbarland | соседняя страна | Deutschland hat neun Nachbarländer. | У Германии девять соседних стран.
die Bevölkerung | население | Die Bevölkerung wächst. | Население растёт.
die Landschaft | ландшафт, пейзаж | Die Landschaft ist wunderschön. | Пейзаж прекрасный.
das Gebirge | горы, горный массив | Der Harz ist ein Gebirge in Deutschland. | Гарц — горный массив в Германии.
das Tal | долина | Das Dorf liegt in einem Tal. | Деревня лежит в долине.
die Wüste | пустыня | Die Sahara ist die größte Wüste. | Сахара — крупнейшая пустыня. | 🏜️
der Ozean | океан | Der Pazifik ist der größte Ozean. | Тихий океан — самый большой. | 🌊
`),

  ...parseVocab("natur_pflanzen", "A2", `
die Blume | цветок | Ich schenke dir eine Blume. | Я дарю тебе цветок. | 🌸
die Rose | роза | Die Rose riecht gut. | Роза хорошо пахнет. | 🌹
die Tulpe | тюльпан | Tulpen kommen aus Holland. | Тюльпаны из Голландии. | 🌷
die Sonnenblume | подсолнух | Die Sonnenblume ist sehr groß. | Подсолнух очень высокий. | 🌻
das Gras | трава | Die Kinder sitzen im Gras. | Дети сидят на траве.
das Blatt | лист | Im Herbst fallen die Blätter. | Осенью падают листья. | 🍁
der Ast | ветка | Der Vogel sitzt auf einem Ast. | Птица сидит на ветке.
die Wurzel | корень | Der Baum hat tiefe Wurzeln. | У дерева глубокие корни.
die Eiche | дуб | Die Eiche ist ein deutscher Baum. | Дуб — немецкое дерево.
die Tanne | ель, пихта | Im Wald stehen viele Tannen. | В лесу много елей. | 🌲
die Wiese | луг | Die Kühe stehen auf der Wiese. | Коровы стоят на лугу.
das Feld | поле | Auf dem Feld wächst Weizen. | На поле растёт пшеница.
der Hügel | холм | Hinter dem Haus ist ein Hügel. | За домом холм.
der Stein | камень | Das Kind wirft einen Stein ins Wasser. | Ребёнок бросает камень в воду. | 🪨
der Sand | песок | Der Sand ist heiß. | Песок горячий.
die Erde | земля; Земля | Die Erde dreht sich um die Sonne. | Земля вращается вокруг Солнца. | 🌍
die Luft | воздух | Die Luft hier ist sehr frisch. | Воздух здесь очень свежий.
das Feuer | огонь | Das Feuer ist ausgegangen. | Огонь погас. | 🔥
die Natur | природа | Ich bin gern in der Natur. | Я люблю бывать на природе.
wachsen | расти | Die Pflanzen wachsen schnell. | Растения быстро растут.
blühen | цвести | Im Mai blühen die Bäume. | В мае цветут деревья.
#B1
der Nationalpark | национальный парк | Der Nationalpark ist geschützt. | Национальный парк охраняется.
die Pflanzenwelt | растительный мир | Die Pflanzenwelt der Alpen ist einzigartig. | Растительный мир Альп уникален.
die Tierwelt | животный мир | Die Tierwelt ist bedroht. | Животный мир под угрозой.
der Vulkan | вулкан | Der Vulkan ist noch aktiv. | Вулкан ещё действующий. | 🌋
das Erdbeben | землетрясение | Das Erdbeben war sehr stark. | Землетрясение было очень сильным.
die Ebbe | отлив | Bei Ebbe kann man im Watt wandern. | Во время отлива можно гулять по ваттам.
die Flut | прилив | Die Flut kommt in zwei Stunden. | Прилив будет через два часа.
der Wasserfall | водопад | Der Wasserfall ist 30 Meter hoch. | Водопад высотой 30 метров.
die Höhle | пещера | Wir besichtigen eine Höhle. | Мы осматриваем пещеру.
`),

  ...parseVocab("notfall_polizei", "B1", `
#A2
der Notfall | экстренный случай | Im Notfall rufen Sie die 112. | В экстренном случае звоните 112. | 🆘
Hilfe! | помогите! | Hilfe! Ein Unfall! | Помогите! Авария!
die Feuerwehr | пожарная служба | Die Feuerwehr kam sofort. | Пожарные приехали сразу. | 🚒
der Krankenwagen | машина скорой помощи | Der Krankenwagen ist unterwegs. | Скорая уже в пути. | 🚑
die Polizeiwache | полицейский участок | Wo ist die nächste Polizeiwache? | Где ближайший полицейский участок?
gestohlen | украденный | Mein Fahrrad wurde gestohlen. | Мой велосипед украли.
#B1
der Diebstahl | кража | Ich möchte einen Diebstahl melden. | Я хочу заявить о краже.
der Dieb | вор | Der Dieb ist geflohen. | Вор сбежал.
der Einbruch | взлом | Bei uns gab es einen Einbruch. | У нас был взлом.
die Anzeige erstatten | подать заявление (в полицию) | Ich möchte Anzeige erstatten. | Я хочу подать заявление.
der Zeuge | свидетель | Gibt es Zeugen? | Есть свидетели?
der Täter | преступник | Der Täter wurde festgenommen. | Преступник задержан.
das Opfer | жертва | Das Opfer wurde verletzt. | Пострадавший был ранен.
verletzt | раненый | Ist jemand verletzt? | Кто-нибудь ранен?
bewusstlos | без сознания | Der Mann ist bewusstlos. | Мужчина без сознания.
die Erste Hilfe | первая помощь | Kannst du Erste Hilfe leisten? | Ты умеешь оказывать первую помощь?
der Brand | пожар | Der Brand wurde schnell gelöscht. | Пожар быстро потушили.
löschen (Feuer) | тушить | Die Feuerwehr löscht das Feuer. | Пожарные тушат огонь.
der Notausgang | запасной выход | Der Notausgang ist dort. | Запасной выход вон там.
der Feuerlöscher | огнетушитель | Wo ist der Feuerlöscher? | Где огнетушитель? | 🧯
die Fundsachen | бюро находок | Fragen Sie im Fundbüro nach. | Спросите в бюро находок.
verloren gehen | потеряться | Mein Koffer ist verloren gegangen. | Мой чемодан потерялся.
der Betrug | мошенничество | Das ist eindeutig Betrug. | Это явное мошенничество.
die Belästigung | домогательство, приставание | Belästigung ist strafbar. | Домогательство наказуемо.
die Gewalt | насилие | Gewalt ist keine Lösung. | Насилие — не решение.
#B2
die Ermittlung | расследование | Die Polizei hat die Ermittlungen aufgenommen. | Полиция начала расследование.
der Verdächtige | подозреваемый | Der Verdächtige schweigt. | Подозреваемый молчит.
festnehmen | задерживать | Die Polizei hat zwei Männer festgenommen. | Полиция задержала двух мужчин.
der Tatort | место преступления | Die Polizei sperrt den Tatort ab. | Полиция оцепляет место преступления.
die Fahndung | розыск | Die Fahndung läuft auf Hochtouren. | Розыск идёт полным ходом.
`),

  ...parseVocab("recht_justiz", "B2", `
das Gesetz | закон | Das neue Gesetz tritt im Januar in Kraft. | Новый закон вступает в силу в январе.
das Recht | право | Jeder hat das Recht auf Bildung. | Каждый имеет право на образование.
das Gericht (Justiz) | суд | Der Fall kommt vor Gericht. | Дело дойдёт до суда.
der Richter | судья | Der Richter hat das Urteil verkündet. | Судья огласил приговор.
der Rechtsanwalt | адвокат | Ich brauche einen Rechtsanwalt. | Мне нужен адвокат.
der Staatsanwalt | прокурор | Der Staatsanwalt erhebt Anklage. | Прокурор выдвигает обвинение.
die Klage | иск | Er hat Klage gegen seinen Arbeitgeber erhoben. | Он подал иск против работодателя.
klagen | подавать в суд | Sie will gegen den Vermieter klagen. | Она хочет подать в суд на арендодателя.
das Urteil | приговор, решение суда | Das Urteil ist noch nicht rechtskräftig. | Приговор ещё не вступил в силу.
die Strafe | наказание, штраф | Er musste eine hohe Strafe zahlen. | Ему пришлось заплатить большой штраф.
das Bußgeld | административный штраф | Für zu schnelles Fahren gibt es ein Bußgeld. | За превышение скорости штраф.
der Angeklagte | обвиняемый | Der Angeklagte bestreitet die Tat. | Обвиняемый отрицает свою вину.
schuldig | виновный | Er wurde für schuldig erklärt. | Его признали виновным.
unschuldig | невиновный | Sie ist unschuldig. | Она невиновна.
der Beweis | доказательство | Es gibt keine Beweise. | Нет доказательств.
die Aussage | показание | Der Zeuge hat eine Aussage gemacht. | Свидетель дал показания.
das Gefängnis | тюрьма | Er wurde zu zwei Jahren Gefängnis verurteilt. | Его приговорили к двум годам тюрьмы.
verurteilen | осуждать, приговаривать | Das Gericht verurteilte ihn zu einer Geldstrafe. | Суд приговорил его к денежному штрафу.
freisprechen | оправдывать | Der Angeklagte wurde freigesprochen. | Обвиняемого оправдали.
die Berufung | апелляция | Der Anwalt hat Berufung eingelegt. | Адвокат подал апелляцию.
der Vertrag (Recht) | договор | Der Vertrag ist rechtlich bindend. | Договор юридически обязывающий.
die Verfassung | конституция | Das Grundgesetz ist die deutsche Verfassung. | Основной закон — конституция Германии.
das Grundgesetz | Основной закон (ФРГ) | Die Würde des Menschen steht im Grundgesetz. | Достоинство человека закреплено в Основном законе.
die Rechtsberatung | юридическая консультация | Die Rechtsberatung ist kostenlos. | Юридическая консультация бесплатная.
die Rechtsschutzversicherung | страхование юридических расходов | Die Rechtsschutzversicherung zahlt den Anwalt. | Страховка юридических расходов оплачивает адвоката.
der Datenschutz (Recht) | защита персональных данных | Das verstößt gegen den Datenschutz. | Это нарушает закон о защите данных.
gegen das Gesetz verstoßen | нарушать закон | Er hat gegen das Gesetz verstoßen. | Он нарушил закон.
#C1
die Rechtsprechung | правосудие, судебная практика | Die Rechtsprechung ist in diesem Punkt eindeutig. | Судебная практика в этом вопросе однозначна.
der Anspruch | притязание, право требования | Sie haben Anspruch auf Schadenersatz. | Вы имеете право на возмещение ущерба.
der Schadenersatz | возмещение ущерба | Er fordert Schadenersatz. | Он требует возмещения ущерба.
rechtswidrig | противоправный | Die Kündigung war rechtswidrig. | Увольнение было незаконным.
die Haftung | ответственность (юр.) | Die Firma übernimmt keine Haftung. | Фирма не несёт ответственности.
die Verjährung | срок давности | Die Tat ist bereits verjährt. | Срок давности по делу уже истёк.
der Vergleich (Recht) | мировое соглашение | Die Parteien haben sich auf einen Vergleich geeinigt. | Стороны пришли к мировому соглашению.
`),
];
