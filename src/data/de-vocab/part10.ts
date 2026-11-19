import { parseVocab } from "../vocabParse";

// C2 — лексика высокого уровня, а также пополнение частотных тем.
export const PART10 = [
  ...parseVocab("c2_gehoben", "C2", `
die Bredouille | затруднительное положение | Durch den Fehler geriet er in die Bredouille. | Из-за ошибки он попал в переплёт.
die Chuzpe | наглость, дерзость | Er hatte die Chuzpe, mehr Geld zu verlangen. | У него хватило наглости потребовать больше денег.
die Contenance | самообладание | Trotz der Provokation bewahrte sie die Contenance. | Несмотря на провокацию, она сохраняла самообладание.
der Euphemismus | эвфемизм | „Freisetzung“ ist ein Euphemismus für Entlassung. | «Высвобождение» — эвфемизм для увольнения.
die Fassade | фасад, видимость | Hinter der freundlichen Fassade steckt viel Ehrgeiz. | За дружелюбным фасадом скрывается много честолюбия.
das Faible | слабость, пристрастие | Sie hat ein Faible für alte Filme. | У неё слабость к старым фильмам.
die Häme | злорадство, ехидство | Die Kritik war voller Häme. | Критика была полна злорадства.
die Hybris | высокомерие, гордыня | Seine Hybris wurde ihm zum Verhängnis. | Гордыня его и погубила.
die Ironie des Schicksals | ирония судьбы | Es war eine Ironie des Schicksals. | Это была ирония судьбы.
die Koryphäe | светило (знаток) | Sie ist eine Koryphäe auf ihrem Gebiet. | Она светило в своей области.
die Lethargie | апатия | Nach der Niederlage verfiel das Team in Lethargie. | После поражения команда впала в апатию.
die Maxime | принцип, максима | Ehrlichkeit ist seine oberste Maxime. | Честность — его высший принцип.
das Mitspracherecht | право голоса | Die Mitarbeiter fordern ein Mitspracherecht. | Сотрудники требуют права голоса.
die Nonchalance | непринуждённость | Mit großer Nonchalance überging er die Frage. | С большой непринуждённостью он проигнорировал вопрос.
der Opportunismus | приспособленчество | Man wirft ihm Opportunismus vor. | Его упрекают в приспособленчестве.
die Pedanterie | педантичность | Seine Pedanterie nervt die Kollegen. | Его педантичность раздражает коллег.
die Prämisse (C2) | исходное положение | Unter dieser Prämisse ist die Folgerung logisch. | При этой предпосылке вывод логичен.
die Quintessenz | суть, квинтэссенция | Die Quintessenz des Vortrags war klar. | Суть доклада была ясна.
das Ressentiment | затаённая неприязнь | Es gibt alte Ressentiments zwischen den Nachbarn. | Между соседями старая неприязнь.
die Sisyphusarbeit | сизифов труд | Das Aufräumen ist eine Sisyphusarbeit. | Уборка — сизифов труд.
die Spitzfindigkeit | казуистика, придирка | Das ist doch reine Spitzfindigkeit. | Это же чистое крючкотворство.
der Stellvertreterkrieg | война чужими руками | Der Konflikt gilt als Stellvertreterkrieg. | Конфликт считается войной по доверенности.
die Usance | обычай, практика (дел.) | Das entspricht den Usancen der Branche. | Это соответствует практике отрасли.
die Verve | воодушевление, задор | Sie vertrat ihre Position mit viel Verve. | Она отстаивала свою позицию с большим задором.
der Zeitgeist | дух времени | Der Film trifft den Zeitgeist. | Фильм отражает дух времени.
die Zäsur | перелом, рубеж | Die Pandemie war eine Zäsur. | Пандемия стала рубежом.
das Zugeständnis | уступка | Beide Seiten mussten Zugeständnisse machen. | Обеим сторонам пришлось пойти на уступки.
die Zwickmühle | безвыходное положение | Ich stecke in einer Zwickmühle. | Я в безвыходном положении.
anprangern | клеймить, обличать | Die Zeitung prangerte die Missstände an. | Газета обличала злоупотребления.
beschönigen | приукрашивать | Man sollte die Lage nicht beschönigen. | Не стоит приукрашивать ситуацию.
erörtern (C2) | подробно рассматривать | Der Ausschuss erörtert die Vorlage. | Комитет рассматривает законопроект.
konterkarieren | сводить на нет | Diese Maßnahme konterkariert unsere Bemühungen. | Эта мера сводит на нет наши усилия.
lavieren | лавировать | Der Politiker laviert zwischen den Lagern. | Политик лавирует между лагерями.
monieren | указывать на недостатки | Der Prüfer monierte mehrere Fehler. | Проверяющий указал на несколько ошибок.
relativieren | релятивизировать, смягчать | Er versuchte, seine Aussage zu relativieren. | Он пытался смягчить своё высказывание.
untermauern | подкреплять | Er untermauert seine These mit Zahlen. | Он подкрепляет тезис цифрами.
verklausulieren | излагать витиевато | Der Vertrag ist stark verklausuliert. | Договор написан очень витиевато.
vereiteln | срывать (план) | Die Polizei vereitelte den Anschlag. | Полиция предотвратила теракт.
zerreden | заболтать | Das Thema wurde völlig zerredet. | Тему совершенно заболтали.
ambivalent | двойственный | Ich habe ambivalente Gefühle. | У меня двоякие чувства.
eloquent | красноречивый | Sie ist eine eloquente Rednerin. | Она красноречивый оратор.
explizit | явный | Das wurde explizit verboten. | Это было явно запрещено.
implizit | подразумеваемый | Die Kritik war implizit. | Критика подразумевалась.
lakonisch | лаконичный | Seine Antwort war lakonisch. | Его ответ был лаконичным.
opportun | уместный, целесообразный | Das scheint mir nicht opportun. | Мне это не кажется целесообразным.
pragmatisch | прагматичный | Wir brauchen eine pragmatische Lösung. | Нам нужно прагматичное решение.
subtil | тонкий | Das ist ein subtiler Unterschied. | Это тонкое различие.
süffisant | самодовольный, ехидный | Er lächelte süffisant. | Он ехидно улыбнулся.
unverhohlen | неприкрытый | Er zeigte unverhohlene Freude. | Он выказал неприкрытую радость.
vehement | рьяный, решительный | Sie widersprach vehement. | Она решительно возразила.
akribisch | скрупулёзный | Er arbeitet akribisch. | Он работает скрупулёзно.
apodiktisch | категоричный | Seine Urteile sind oft apodiktisch. | Его суждения часто категоричны.
diffizil | щекотливый, сложный | Die Lage ist diffizil. | Ситуация деликатная.
eklatant | вопиющий | Das ist ein eklatanter Verstoß. | Это вопиющее нарушение.
evident | очевидный | Der Zusammenhang ist evident. | Связь очевидна.
fadenscheinig | неубедительный (о предлоге) | Das ist eine fadenscheinige Ausrede. | Это неубедительная отговорка.
geflissentlich | намеренно | Er überhörte die Frage geflissentlich. | Он намеренно пропустил вопрос мимо ушей.
hanebüchen | несусветный | Das ist hanebüchener Unsinn. | Это несусветная чушь.
ominös | зловещий, подозрительный | Ein ominöser Brief lag im Kasten. | В ящике лежало подозрительное письмо.
salopp | небрежный, развязный | Salopp gesagt: Das war Mist. | Грубо говоря, это была ерунда.
unumwunden | напрямик | Er gab unumwunden zu, dass er gelogen hatte. | Он прямо признал, что солгал.
vorbehaltlos | безоговорочный | Sie unterstützt ihn vorbehaltlos. | Она безоговорочно его поддерживает.
zermürbend | изматывающий | Das Warten war zermürbend. | Ожидание было изматывающим.
mitnichten | вовсе нет | Das ist mitnichten so einfach. | Это вовсе не так просто.
gleichwohl | тем не менее | Gleichwohl bleibt die Frage offen. | Тем не менее вопрос остаётся открытым.
nichtsdestotrotz | несмотря на это | Nichtsdestotrotz machen wir weiter. | Несмотря на это, мы продолжаем.
schlechterdings | просто-напросто | Das ist schlechterdings unmöglich. | Это просто-напросто невозможно.
`),

  ...parseVocab("zahlen", "A2", `
die Rechnung (Mathe) | вычисление | Die Rechnung stimmt nicht. | Расчёт неверный.
doppelt | двойной | Das kostet doppelt so viel. | Это стоит вдвое больше.
einmal | один раз | Ich war einmal in Paris. | Я был один раз в Париже.
zweimal | дважды | Ich habe zweimal angerufen. | Я звонил дважды.
die Menge | количество | Eine große Menge Wasser. | Большое количество воды.
die Größe (Maß) | величина, размер | Welche Größe hat das Zimmer? | Какого размера комната?
der Meter | метр | Der Tisch ist zwei Meter lang. | Стол длиной два метра.
der Kilometer | километр | Bis zur Stadt sind es zehn Kilometer. | До города десять километров.
der Zentimeter | сантиметр | Sie ist 170 Zentimeter groß. | Её рост 170 сантиметров.
die Breite | ширина | Die Breite des Bettes ist 1,40 Meter. | Ширина кровати 1,40 метра.
die Höhe | высота | Die Höhe des Turms beträgt 100 Meter. | Высота башни 100 метров.
die Länge | длина | Die Länge des Flusses ist beeindruckend. | Длина реки впечатляет.
das Dutzend | дюжина | Ein Dutzend Eier, bitte. | Дюжину яиц, пожалуйста.
die Milliarde | миллиард | Das Projekt kostet eine Milliarde Euro. | Проект стоит миллиард евро.
gerade (Zahl) | чётный | Vier ist eine gerade Zahl. | Четыре — чётное число.
ungerade | нечётный | Drei ist eine ungerade Zahl. | Три — нечётное число.
`),

  ...parseVocab("verben_wichtig", "A2", `
anfangen (A2) | начинать | Wann fängt die Schule an? | Когда начинается школа?
aufstehen (A2) | вставать | Am Wochenende stehe ich spät auf. | На выходных я встаю поздно.
kennenlernen | знакомиться | Ich möchte dich besser kennenlernen. | Я хочу узнать тебя получше.
mitnehmen | брать с собой | Nimm einen Schirm mit! | Возьми с собой зонт!
vorhaben | планировать | Was hast du heute vor? | Что ты сегодня планируешь?
klingeln | звонить (в дверь) | Es hat geklingelt. | Позвонили в дверь.
schmecken (A2) | быть вкусным | Das schmeckt super! | Это очень вкусно!
riechen | пахнуть, нюхать | Es riecht nach Kuchen. | Пахнет пирогом.
fühlen | чувствовать | Ich fühle mich wohl hier. | Мне здесь хорошо.
ändern | изменять | Ich muss meinen Plan ändern. | Мне нужно изменить план.
planen | планировать | Wir planen eine Reise. | Мы планируем поездку.
wünschen | желать | Ich wünsche dir alles Gute! | Желаю тебе всего хорошего!
zahlen | платить | Wir möchten zahlen, bitte. | Мы хотели бы расплатиться.
zumachen (A2) | закрывать | Die Läden machen um 20 Uhr zu. | Магазины закрываются в 20 часов.
dauern | длиться | Wie lange dauert der Kurs? | Сколько длится курс?
holen | приносить, доставать | Ich hole uns etwas zu trinken. | Я принесу нам что-нибудь выпить.
lassen | оставлять; позволять | Lass mich in Ruhe! | Оставь меня в покое!
meinen | иметь в виду, считать | Was meinst du damit? | Что ты имеешь в виду?
merken | замечать, запоминать | Das kann ich mir nicht merken. | Этого я не могу запомнить.
nutzen | использовать | Nutze die Zeit gut! | Используй время с толком!
packen (A2) | укладывать | Ich packe meinen Koffer. | Я собираю чемодан.
putzen (A2) | чистить, убирать | Ich putze die Fenster. | Я мою окна.
rauchen | курить | Rauchen verboten! | Курить запрещено! | 🚭
schneiden (A2) | резать | Schneid das Brot in Scheiben. | Нарежь хлеб ломтиками.
singen (A2) | петь | Sie singt sehr schön. | Она очень красиво поёт.
stören | мешать | Störe ich? | Я не помешаю?
studieren | учиться в вузе | Ich studiere Medizin. | Я учусь на медицинском.
tanzen (A2) | танцевать | Wollen wir tanzen? | Потанцуем?
telefonieren (A2) | звонить | Ich telefoniere gerade. | Я сейчас разговариваю по телефону.
trennen | разделять | Trenn bitte den Müll. | Сортируй, пожалуйста, мусор.
üben (A2) | тренироваться | Ich übe Klavier. | Я упражняюсь на пианино.
vorstellen (A2) | представлять | Darf ich Ihnen meine Frau vorstellen? | Разрешите представить вам мою жену.
`),
];
