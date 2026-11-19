import { parseVocab } from "../vocabParse";

// Прилагательные, наречия, дом и быт, покупки.
export const PART3 = [
  ...parseVocab("adjektive_wichtig", "A1", `
lang | длинный | Der Weg ist sehr lang. | Дорога очень длинная.
kurz | короткий | Der Film war kurz. | Фильм был коротким.
billig | дешёвый | Das T-Shirt war billig. | Футболка была дешёвой.
richtig | правильный | Die Antwort ist richtig. | Ответ правильный. | ✅
falsch | неправильный | Das ist leider falsch. | К сожалению, это неправильно. | ❌
glücklich | счастливый | Sie ist sehr glücklich. | Она очень счастлива.
traurig | грустный | Warum bist du so traurig? | Почему ты такой грустный? | 😔
nett | милый, приятный | Die Nachbarn sind sehr nett. | Соседи очень приятные.
freundlich | дружелюбный | Die Verkäuferin war freundlich. | Продавщица была дружелюбной.
lustig | весёлый, смешной | Der Film war sehr lustig. | Фильм был очень смешным.
voll | полный | Der Bus ist voll. | Автобус полный.
leer | пустой | Die Flasche ist leer. | Бутылка пустая.
offen | открытый | Das Geschäft ist offen. | Магазин открыт.
geschlossen | закрытый | Am Sonntag ist alles geschlossen. | В воскресенье всё закрыто.
sauber | чистый | Die Küche ist sauber. | Кухня чистая.
schmutzig | грязный | Die Schuhe sind schmutzig. | Ботинки грязные.
schwer | тяжёлый; трудный | Der Koffer ist sehr schwer. | Чемодан очень тяжёлый.
leicht | лёгкий | Die Übung ist leicht. | Упражнение лёгкое.
ruhig | спокойный, тихий | Unsere Straße ist sehr ruhig. | Наша улица очень тихая.
gesund (Adj.) | здоровый | Obst ist gesund. | Фрукты полезны.
krank (Adj.) | больной | Mein Kind ist krank. | Мой ребёнок болен.
frei | свободный | Ist der Platz noch frei? | Это место свободно?
besetzt | занятый | Die Toilette ist besetzt. | Туалет занят.
fertig | готовый | Das Essen ist fertig. | Еда готова.
kaputt | сломанный | Mein Handy ist kaputt. | Мой телефон сломан.
toll | классный | Das ist eine tolle Idee! | Это классная идея!
super | супер | Das Konzert war super! | Концерт был супер!
wunderbar | чудесный | Wir hatten einen wunderbaren Abend. | У нас был чудесный вечер.
hässlich | уродливый | Das Gebäude ist ziemlich hässlich. | Здание довольно уродливое.
stark | сильный | Er ist sehr stark. | Он очень сильный. | 💪
schwach | слабый | Ich fühle mich schwach. | Я чувствую слабость.
reich | богатый | Er ist sehr reich. | Он очень богат.
arm | бедный | Die Familie ist arm. | Семья бедная.
#A2
gefährlich | опасный | Die Straße ist gefährlich. | Эта улица опасна. | ⚠️
sicher | безопасный; уверенный | Bist du sicher? | Ты уверен?
möglich | возможный | Ist das möglich? | Это возможно?
unmöglich | невозможный | Das ist leider unmöglich. | К сожалению, это невозможно.
notwendig | необходимый | Ist das wirklich notwendig? | Это действительно необходимо?
nützlich | полезный | Das Wörterbuch ist sehr nützlich. | Словарь очень полезен.
praktisch | практичный | Die Tasche ist sehr praktisch. | Сумка очень практичная.
bekannt | известный | Der Schauspieler ist sehr bekannt. | Этот актёр очень известен.
berühmt | знаменитый | Sie ist eine berühmte Sängerin. | Она знаменитая певица. | 🌟
fremd | чужой, незнакомый | Ich bin hier fremd. | Я здесь не местный.
höflich | вежливый | Sei bitte höflich! | Будь, пожалуйста, вежлив!
unhöflich | невежливый | Das war sehr unhöflich. | Это было очень невежливо.
ehrlich | честный | Sei ehrlich zu mir. | Будь честен со мной.
fleißig | прилежный | Sie ist eine fleißige Schülerin. | Она прилежная ученица.
faul | ленивый | Heute bin ich faul. | Сегодня я ленюсь. | 🦥
klug | умный | Er ist ein kluges Kind. | Он умный ребёнок.
dumm | глупый | Das war eine dumme Idee. | Это была глупая идея.
nervös | нервный | Vor der Prüfung bin ich nervös. | Перед экзаменом я нервничаю.
zufrieden | довольный | Bist du mit dem Ergebnis zufrieden? | Ты доволен результатом?
wütend | злой, разъярённый | Er war total wütend. | Он был в ярости. | 😠
überrascht | удивлённый | Ich war sehr überrascht. | Я был очень удивлён.
verliebt | влюблённый | Sie sind sehr verliebt. | Они очень влюблены.
allein | один, одинокий | Ich wohne allein. | Я живу один.
zusammen | вместе | Wir gehen zusammen ins Kino. | Мы вместе идём в кино.
verschieden | разный | Wir haben verschiedene Meinungen. | У нас разные мнения.
gleich | одинаковый; сразу | Wir sind gleich alt. | Мы одного возраста.
typisch | типичный | Das ist typisch deutsch! | Это типично по-немецки!
normal | нормальный | Das ist ganz normal. | Это совершенно нормально.
perfekt | идеальный | Dein Deutsch ist fast perfekt. | Твой немецкий почти идеален.
bequem (A2) | удобный | Das Sofa ist sehr bequem. | Диван очень удобный.
#B1
anstrengend | утомительный | Die Reise war sehr anstrengend. | Поездка была очень утомительной.
spannend | захватывающий | Der Krimi ist sehr spannend. | Детектив очень захватывающий.
aufregend | волнующий | Der erste Arbeitstag war aufregend. | Первый рабочий день был волнующим.
erfolgreich | успешный | Sie ist eine erfolgreiche Unternehmerin. | Она успешная предпринимательница.
selbstständig | самостоятельный | Er arbeitet sehr selbstständig. | Он работает очень самостоятельно.
geduldig | терпеливый | Die Lehrerin ist sehr geduldig. | Учительница очень терпеливая.
ungeduldig | нетерпеливый | Sei nicht so ungeduldig! | Не будь таким нетерпеливым!
zuverlässig | надёжный | Er ist ein zuverlässiger Freund. | Он надёжный друг.
ordentlich | аккуратный | Sein Zimmer ist immer ordentlich. | Его комната всегда в порядке.
pünktlich (Adj.) | пунктуальный | Die Deutschen gelten als pünktlich. | Немцы считаются пунктуальными.
streng | строгий | Unser Lehrer ist sehr streng. | Наш учитель очень строгий.
großzügig | щедрый | Mein Onkel ist sehr großzügig. | Мой дядя очень щедрый.
schüchtern | застенчивый | Das Mädchen ist etwas schüchtern. | Девочка немного застенчивая.
eifersüchtig | ревнивый | Er ist sehr eifersüchtig. | Он очень ревнивый.
begeistert | восхищённый | Wir sind von der Stadt begeistert. | Мы в восторге от города.
enttäuscht | разочарованный | Ich bin von dem Film enttäuscht. | Я разочарован фильмом.
erstaunlich | удивительный | Das Ergebnis ist erstaunlich. | Результат удивителен.
ausgezeichnet | отличный | Das Essen war ausgezeichnet. | Еда была отличной.
durchschnittlich | средний | Er ist ein durchschnittlicher Schüler. | Он средний ученик.
regelmäßig | регулярный | Ich treibe regelmäßig Sport. | Я регулярно занимаюсь спортом.
ähnlich | похожий | Unsere Probleme sind ähnlich. | Наши проблемы похожи.
deutlich | ясный, отчётливый | Sprich bitte deutlicher. | Говори, пожалуйста, отчётливее.
genau | точный | Weißt du die genaue Uhrzeit? | Ты знаешь точное время?
ehemalig | бывший | Das ist mein ehemaliger Chef. | Это мой бывший начальник.
öffentlich | общественный, публичный | Öffentliche Verkehrsmittel sind hier gut. | Общественный транспорт здесь хороший.
privat | частный, личный | Das ist meine private Nummer. | Это мой личный номер.
#B2
umfangreich | обширный | Er hat umfangreiche Kenntnisse. | У него обширные знания.
vielfältig | разнообразный | Das Angebot ist sehr vielfältig. | Предложение очень разнообразно.
offensichtlich | очевидный | Das ist doch offensichtlich! | Это же очевидно!
erheblich | значительный | Die Kosten sind erheblich gestiegen. | Расходы значительно выросли.
zahlreich | многочисленный | Zahlreiche Gäste kamen zur Feier. | На праздник пришли многочисленные гости.
vorsichtig | осторожный | Fahr bitte vorsichtig! | Езжай, пожалуйста, осторожно!
`),

  ...parseVocab("adverbien", "A2", `
gern | охотно | Ich lese gern. | Я люблю читать.
lieber | охотнее, лучше | Ich trinke lieber Tee. | Я лучше выпью чаю.
am liebsten | больше всего (нравится) | Am liebsten esse ich Pizza. | Больше всего я люблю пиццу.
leider | к сожалению | Leider habe ich keine Zeit. | К сожалению, у меня нет времени.
natürlich | конечно | Natürlich helfe ich dir. | Конечно, я тебе помогу.
wirklich | действительно | Das ist wirklich schön. | Это действительно красиво.
bestimmt | наверняка | Er kommt bestimmt gleich. | Он наверняка скоро придёт.
sofort | сразу, немедленно | Komm sofort her! | Иди сюда немедленно!
gleich (A2) | сейчас, скоро | Ich komme gleich. | Я сейчас приду.
endlich | наконец | Endlich ist Wochenende! | Наконец-то выходные!
zuerst | сначала | Zuerst lesen wir den Text. | Сначала мы читаем текст.
dann | потом | Dann machen wir eine Pause. | Потом мы сделаем перерыв.
danach | после этого | Danach gehen wir essen. | После этого мы пойдём поесть.
zuletzt | в конце, в последний раз | Zuletzt habe ich ihn im Mai gesehen. | В последний раз я видел его в мае.
plötzlich | вдруг | Plötzlich ging das Licht aus. | Вдруг погас свет.
wieder | снова | Es regnet schon wieder. | Опять идёт дождь.
noch einmal | ещё раз | Sag das bitte noch einmal. | Скажи это, пожалуйста, ещё раз.
zusammen (Adv.) | вместе | Wir lernen zusammen. | Мы учимся вместе.
überall | везде | Ich habe überall gesucht. | Я искал везде.
irgendwo | где-нибудь | Ich habe meine Brille irgendwo liegen lassen. | Я где-то оставил очки.
nirgendwo | нигде | Ich finde meinen Schlüssel nirgendwo. | Я нигде не могу найти ключ.
draußen | снаружи, на улице | Die Kinder spielen draußen. | Дети играют на улице.
drinnen | внутри | Lass uns drinnen bleiben. | Давай останемся внутри.
oben | наверху | Das Schlafzimmer ist oben. | Спальня наверху.
unten | внизу | Die Küche ist unten. | Кухня внизу.
vorne | впереди | Setz dich nach vorne! | Садись вперёд!
hinten | сзади | Hinten ist noch Platz. | Сзади ещё есть место.
heute Abend | сегодня вечером | Was machst du heute Abend? | Что делаешь сегодня вечером?
morgens | по утрам | Morgens trinke ich Kaffee. | По утрам я пью кофе.
abends | по вечерам | Abends lese ich. | По вечерам я читаю.
nachts | по ночам | Nachts ist es hier sehr ruhig. | Ночью здесь очень тихо.
#B1
allerdings | однако; впрочем | Das ist allerdings teuer. | Это, однако, дорого.
jedenfalls | во всяком случае | Jedenfalls hat er angerufen. | Во всяком случае, он позвонил.
übrigens | кстати | Übrigens, ich habe eine neue Arbeit. | Кстати, у меня новая работа.
wahrscheinlich | вероятно | Wahrscheinlich regnet es morgen. | Вероятно, завтра будет дождь.
hoffentlich | надеюсь | Hoffentlich klappt alles. | Надеюсь, всё получится.
sicherlich | несомненно | Das ist sicherlich richtig. | Это несомненно правильно.
kaum | едва, почти не | Ich habe kaum geschlafen. | Я почти не спал.
ebenfalls | также | Ich wünsche Ihnen ebenfalls alles Gute. | И вам также всего хорошего.
besonders | особенно | Das Essen war besonders lecker. | Еда была особенно вкусной.
völlig | совершенно | Ich bin völlig erschöpft. | Я совершенно измотан.
ganz | совсем; весь | Das ist ganz einfach. | Это совсем просто.
einigermaßen | более-менее | Mir geht es einigermaßen gut. | Мне более-менее хорошо.
vorher | заранее, до этого | Ruf bitte vorher an. | Позвони, пожалуйста, заранее.
nachher | потом, после | Bis nachher! | До встречи!
bisher | до сих пор | Bisher ist alles gut gelaufen. | До сих пор всё шло хорошо.
mittlerweile | тем временем, уже | Mittlerweile wohne ich in Wien. | Теперь я уже живу в Вене.
sowieso | всё равно, и так | Ich wollte sowieso gehen. | Я и так хотел уйти.
unbedingt | обязательно | Du musst unbedingt kommen! | Ты обязательно должен прийти!
gemeinsam | совместно | Wir lösen das Problem gemeinsam. | Мы решим проблему вместе.
absichtlich | намеренно | Er hat das absichtlich gemacht. | Он сделал это намеренно.
zufällig | случайно | Ich habe ihn zufällig getroffen. | Я случайно его встретил.
#B2
keineswegs | ни в коем случае | Das ist keineswegs selbstverständlich. | Это вовсе не само собой разумеется.
durchaus | вполне | Das ist durchaus möglich. | Это вполне возможно.
gewissermaßen | в некотором роде | Er ist gewissermaßen der Chef. | Он в некотором роде начальник.
schließlich | в конце концов | Schließlich hat er nachgegeben. | В конце концов он уступил.
tatsächlich | действительно, фактически | Er ist tatsächlich gekommen. | Он действительно пришёл.
zumindest | по крайней мере | Zumindest hat er sich entschuldigt. | По крайней мере, он извинился.
ohnehin | и так, всё равно | Das Problem besteht ohnehin. | Эта проблема и так существует.
vermutlich | предположительно | Er ist vermutlich krank. | Он, вероятно, болен.
`),

  ...parseVocab("zuhause", "A1", `
das Haus | дом | Wir haben ein Haus mit Garten. | У нас дом с садом. | 🏠
das Zimmer | комната | Die Wohnung hat drei Zimmer. | В квартире три комнаты.
der Flur | прихожая, коридор | Die Schuhe stehen im Flur. | Обувь стоит в прихожей.
die Toilette | туалет | Wo ist die Toilette? | Где туалет? | 🚽
die Treppe | лестница | Die Treppe ist sehr steil. | Лестница очень крутая.
der Keller | подвал | Die Fahrräder sind im Keller. | Велосипеды в подвале.
der Garten | сад | Im Garten wachsen Tomaten. | В саду растут помидоры. | 🏡
die Garage | гараж | Das Auto steht in der Garage. | Машина стоит в гараже.
der Schlüssel | ключ | Wo ist mein Schlüssel? | Где мой ключ? | 🔑
das Licht | свет | Mach bitte das Licht aus. | Выключи, пожалуйста, свет.
die Wand | стена | An der Wand hängt ein Bild. | На стене висит картина.
der Boden | пол | Das Spielzeug liegt auf dem Boden. | Игрушка лежит на полу.
die Decke | потолок; одеяло | Die Decke ist sehr hoch. | Потолок очень высокий.
das Dach | крыша | Das Dach ist undicht. | Крыша протекает.
der Stock (Etage) | этаж | Ich wohne im dritten Stock. | Я живу на четвёртом этаже.
die Klingel | звонок (дверной) | Die Klingel funktioniert nicht. | Звонок не работает. | 🔔
der Briefkasten | почтовый ящик | Im Briefkasten ist ein Brief. | В почтовом ящике письмо. | 📬
wohnen (A1) | жить, проживать | Wir wohnen in der Stadtmitte. | Мы живём в центре города.
#A2
das Erdgeschoss | первый этаж | Die Bäckerei ist im Erdgeschoss. | Пекарня на первом этаже.
der Aufzug | лифт | Der Aufzug ist leider kaputt. | Лифт, к сожалению, сломан. | 🛗
die Heizung | отопление | Die Heizung ist kalt. | Батарея холодная.
das Badezimmer putzen | убирать ванную | Heute putze ich das Badezimmer. | Сегодня я убираю ванную.
die Wäsche | бельё (для стирки) | Ich muss noch die Wäsche waschen. | Мне ещё нужно постирать бельё.
bügeln | гладить | Ich bügle meine Hemden. | Я глажу свои рубашки.
staubsaugen | пылесосить | Am Samstag sauge ich Staub. | В субботу я пылесошу.
der Müll | мусор | Bring bitte den Müll raus. | Вынеси, пожалуйста, мусор. | 🗑️
die Mülltonne | мусорный бак | Die Mülltonne ist voll. | Мусорный бак полный.
spülen | мыть посуду; полоскать | Wer spült heute? | Кто сегодня моет посуду?
gießen | поливать | Vergiss nicht, die Blumen zu gießen. | Не забудь полить цветы. | 🪴
der Hausmeister | завхоз, управдом | Der Hausmeister repariert die Heizung. | Управдом чинит отопление.
der Vermieter | арендодатель | Der Vermieter wohnt im Erdgeschoss. | Арендодатель живёт на первом этаже.
der Mieter | арендатор | Die Mieter beschweren sich über den Lärm. | Жильцы жалуются на шум.
die Nebenkosten | коммунальные платежи | Die Nebenkosten sind sehr hoch. | Коммунальные платежи очень высокие.
die Kaution | залог | Die Kaution beträgt drei Monatsmieten. | Залог составляет три месячные арендные платы.
der Strom | электричество | Der Strom ist teurer geworden. | Электричество подорожало. | ⚡
das Gas | газ | Wir kochen mit Gas. | Мы готовим на газе.
die Hausordnung | правила проживания в доме | Laut Hausordnung ist ab 22 Uhr Ruhe. | По правилам дома после 22 часов тишина.
die Ruhezeit | время тишины | Bitte halten Sie die Ruhezeiten ein. | Пожалуйста, соблюдайте время тишины.
#B1
die Wohngemeinschaft (WG) | съёмная квартира с соседями | Ich wohne in einer WG mit drei Studenten. | Я живу в квартире с тремя студентами.
der Mitbewohner | сосед по квартире | Mein Mitbewohner kocht sehr gut. | Мой сосед по квартире очень хорошо готовит.
der Umzug | переезд | Der Umzug war sehr anstrengend. | Переезд был очень утомительным.
renovieren | ремонтировать | Wir renovieren das Bad. | Мы делаем ремонт в ванной.
die Einrichtung | обстановка | Die Einrichtung ist modern. | Обстановка современная.
möbliert | меблированный | Die Wohnung ist möbliert. | Квартира меблирована.
der Schimmel | плесень | Im Bad ist Schimmel. | В ванной плесень.
lüften | проветривать | Bitte lüften Sie regelmäßig. | Пожалуйста, регулярно проветривайте.
`),

  ...parseVocab("moebel", "A2", `
der Sessel | кресло | Opa sitzt im Sessel. | Дедушка сидит в кресле. | 🛋️
der Schreibtisch | письменный стол | Am Schreibtisch mache ich Hausaufgaben. | За письменным столом я делаю уроки.
das Bücherregal | книжная полка | Das Bücherregal ist voll. | Книжная полка полна. | 📚
die Kommode | комод | Die Socken sind in der Kommode. | Носки в комоде.
der Kleiderschrank | шкаф для одежды | Der Kleiderschrank ist zu klein. | Шкаф для одежды слишком мал.
der Vorhang | штора | Mach bitte die Vorhänge zu. | Задёрни, пожалуйста, шторы.
die Gardine | тюль, занавеска | Die Gardinen sind weiß. | Занавески белые.
das Bild | картина | Das Bild hängt schief. | Картина висит криво. | 🖼️
die Pflanze | растение | Wir haben viele Pflanzen in der Wohnung. | У нас в квартире много растений. | 🪴
die Bettdecke | одеяло | Die Bettdecke ist sehr warm. | Одеяло очень тёплое.
das Kopfkissen | подушка | Ich brauche ein neues Kopfkissen. | Мне нужна новая подушка.
das Laken | простыня | Ich wechsle die Laken jede Woche. | Я меняю простыни каждую неделю.
das Handtuch | полотенце | Hier ist ein frisches Handtuch. | Вот свежее полотенце.
die Badewanne | ванна | Die Badewanne ist zu klein. | Ванна слишком маленькая. | 🛁
die Dusche | душ | Die Dusche ist kaputt. | Душ сломан. | 🚿
das Waschbecken | раковина | Das Waschbecken ist verstopft. | Раковина засорилась.
der Wasserhahn | кран | Der Wasserhahn tropft. | Кран капает.
die Spülmaschine | посудомоечная машина | Räum bitte die Spülmaschine aus. | Разгрузи, пожалуйста, посудомойку.
der Backofen | духовка | Der Kuchen ist im Backofen. | Пирог в духовке.
die Mikrowelle | микроволновка | Ich mache das Essen in der Mikrowelle warm. | Я разогреваю еду в микроволновке.
der Wasserkocher | электрочайник | Der Wasserkocher ist kaputt. | Электрочайник сломался.
die Kaffeemaschine | кофеварка | Die Kaffeemaschine macht guten Kaffee. | Кофеварка делает хороший кофе.
der Toaster | тостер | Das Brot ist im Toaster. | Хлеб в тостере.
der Föhn | фен | Wo ist der Föhn? | Где фен?
der Fernseher | телевизор | Der Fernseher ist neu. | Телевизор новый. | 📺
die Fernbedienung | пульт | Wo ist die Fernbedienung? | Где пульт?
der Mülleimer | мусорное ведро | Der Mülleimer steht unter der Spüle. | Мусорное ведро стоит под раковиной.
der Besen | веник, метла | Hol bitte den Besen. | Принеси, пожалуйста, веник. | 🧹
der Eimer | ведро | Ein Eimer Wasser, bitte. | Ведро воды, пожалуйста. | 🪣
das Bügeleisen | утюг | Das Bügeleisen ist noch heiß. | Утюг ещё горячий.
die Glühbirne | лампочка | Die Glühbirne ist kaputt. | Лампочка перегорела. | 💡
der Topf | кастрюля | Der Topf steht auf dem Herd. | Кастрюля стоит на плите.
die Pfanne | сковорода | Brate die Eier in der Pfanne. | Пожарь яйца на сковороде. | 🍳
die Schüssel | миска | Gib den Salat in eine Schüssel. | Положи салат в миску.
das Besteck | столовые приборы | Das Besteck liegt in der Schublade. | Столовые приборы в ящике.
die Schublade | выдвижной ящик | Die Schublade klemmt. | Ящик заедает.
#B1
die Gefriertruhe | морозильный ларь | Das Fleisch ist in der Gefriertruhe. | Мясо в морозильнике.
der Trockner | сушилка | Die Wäsche ist im Trockner. | Бельё в сушилке.
die Klimaanlage | кондиционер | Die Klimaanlage ist zu laut. | Кондиционер слишком громкий.
der Rauchmelder | датчик дыма | In jeder Wohnung muss ein Rauchmelder sein. | В каждой квартире должен быть датчик дыма.
die Verlängerungsschnur | удлинитель | Ich brauche eine Verlängerungsschnur. | Мне нужен удлинитель. | 🔌
`),

  ...parseVocab("einkaufen", "A1", `
der Euro | евро | Das kostet zwei Euro. | Это стоит два евро. | 💶
der Cent | цент | Das macht 50 Cent. | С вас 50 центов.
das Geld | деньги | Ich habe kein Geld dabei. | У меня нет с собой денег. | 💰
kosten | стоить | Was kostet das? | Сколько это стоит?
der Einkaufswagen | тележка для покупок | Ich brauche einen Einkaufswagen. | Мне нужна тележка. | 🛒
der Korb | корзина | Leg das Brot in den Korb. | Положи хлеб в корзину. | 🧺
die Tüte | пакет | Brauchen Sie eine Tüte? | Вам нужен пакет? | 🛍️
die Packung | упаковка | Eine Packung Milch, bitte. | Одну упаковку молока, пожалуйста.
die Dose | банка (жестяная) | Eine Dose Tomaten kostet 80 Cent. | Банка помидоров стоит 80 центов. | 🥫
das Angebot | предложение, скидка | Heute sind Äpfel im Angebot. | Сегодня яблоки по акции.
#A2
die Kreditkarte | кредитная карта | Kann ich mit Kreditkarte zahlen? | Можно оплатить кредиткой? | 💳
bar bezahlen | платить наличными | Ich bezahle bar. | Я заплачу наличными.
die EC-Karte | дебетовая карта | Zahlen Sie mit EC-Karte? | Платите дебетовой картой?
der Kassenbon | кассовый чек | Brauchen Sie den Kassenbon? | Вам нужен чек?
der Rabatt | скидка | Es gibt 20 Prozent Rabatt. | Скидка 20 процентов.
reduziert | уценённый | Die Jacke ist reduziert. | Куртка уценена.
das Sonderangebot | спецпредложение | Das ist ein Sonderangebot. | Это спецпредложение.
die Abteilung | отдел | Wo ist die Abteilung für Damenmode? | Где отдел женской одежды?
die Größe (Kleidung) | размер | Haben Sie das in Größe 40? | У вас есть это 40-го размера?
der Verkäufer (A2) | продавец | Der Verkäufer hat mir geholfen. | Продавец мне помог.
der Kunde | клиент, покупатель | Der Kunde ist König. | Клиент всегда прав.
die Schlange (anstehen) | очередь | An der Kasse ist eine lange Schlange. | На кассе длинная очередь.
das Pfand | залог за тару | Auf die Flasche gibt es 25 Cent Pfand. | За бутылку залог 25 центов. | ♻️
der Flohmarkt | блошиный рынок | Am Sonntag gehen wir auf den Flohmarkt. | В воскресенье мы идём на блошиный рынок.
online bestellen | заказывать онлайн | Ich bestelle die Schuhe online. | Я заказываю туфли онлайн.
die Lieferung | доставка | Die Lieferung dauert drei Tage. | Доставка занимает три дня. | 🚚
das Paket | посылка | Ein Paket ist für dich gekommen. | Тебе пришла посылка. | 📦
#B1
die Garantie | гарантия | Das Gerät hat zwei Jahre Garantie. | На прибор гарантия два года.
die Reklamation | рекламация, жалоба | Ich habe eine Reklamation. | У меня претензия.
zurückschicken | отправлять обратно | Ich schicke die Hose zurück. | Я отправлю брюки обратно.
das Geld zurückbekommen | получить деньги обратно | Kann ich mein Geld zurückbekommen? | Могу ли я получить деньги обратно?
der Umtausch | обмен | Umtausch nur mit Kassenbon. | Обмен только с чеком.
die Filiale | филиал | Die Bank hat eine Filiale in der Stadtmitte. | У банка есть филиал в центре.
die Marke | марка, бренд | Welche Marke ist das? | Какой это бренд?
die Qualität | качество | Die Qualität ist sehr gut. | Качество очень хорошее.
preiswert | недорогой, выгодный | Das Restaurant ist preiswert. | Ресторан недорогой.
`),

  ...parseVocab("kueche", "A2", `
der Essig | уксус | Ein Salat mit Öl und Essig. | Салат с маслом и уксусом.
das Mehl | мука | Für den Kuchen brauche ich Mehl. | Для пирога мне нужна мука.
die Hefe | дрожжи | Ohne Hefe geht der Teig nicht. | Без дрожжей тесто не поднимется.
der Teig | тесто | Der Teig muss eine Stunde ruhen. | Тесто должно отдохнуть час.
das Rezept | рецепт | Kannst du mir das Rezept geben? | Можешь дать мне рецепт? | 📖
die Zutat | ингредиент | Welche Zutaten brauchen wir? | Какие ингредиенты нам нужны?
kochen (Wasser) | кипятить, варить | Das Wasser kocht. | Вода кипит.
schälen | чистить (овощи) | Schäl bitte die Kartoffeln. | Почисти, пожалуйста, картошку.
mischen | смешивать | Mischen Sie Mehl und Zucker. | Смешайте муку и сахар.
rühren | мешать | Ständig rühren! | Постоянно помешивать!
würzen | приправлять | Würz die Suppe mit Salz. | Приправь суп солью.
grillen | жарить на гриле | Am Wochenende grillen wir. | На выходных мы жарим барбекю.
aufwärmen | разогревать | Ich wärme die Suppe auf. | Я разогреваю суп.
die Gewürze | специи | Ich koche gern mit Gewürzen. | Я люблю готовить со специями.
die Petersilie | петрушка | Etwas Petersilie darüber streuen. | Посыпать сверху петрушкой.
das Schneidebrett | разделочная доска | Das Schneidebrett ist aus Holz. | Разделочная доска деревянная.
der Deckel | крышка | Leg den Deckel auf den Topf. | Накрой кастрюлю крышкой.
#B1
gar | готовый (о еде) | Ist das Fleisch schon gar? | Мясо уже готово?
roh | сырой | Das Gemüse kann man roh essen. | Эти овощи можно есть сырыми.
gebraten | жареный | Ich mag gebratenen Fisch. | Я люблю жареную рыбу.
gekocht | варёный | Möchtest du ein gekochtes Ei? | Хочешь варёное яйцо?
das Gramm | грамм | Man braucht 200 Gramm Butter. | Нужно 200 граммов масла.
der Liter | литр | Ein Liter Milch reicht. | Литра молока хватит.
der Esslöffel | столовая ложка | Ein Esslöffel Zucker genügt. | Достаточно столовой ложки сахара.
`),
];
