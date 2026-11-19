import { parseVocab } from "../vocabParse";

// Глаголы: частотные, отделяемые, возвратные, глаголы с предлогами.
export const PART2 = [
  ...parseVocab("verben_wichtig", "A1", `
sein | быть | Ich bin müde. | Я устал.
haben | иметь | Wir haben zwei Kinder. | У нас двое детей.
werden | становиться | Er will Arzt werden. | Он хочет стать врачом.
können | мочь, уметь | Kannst du schwimmen? | Ты умеешь плавать?
müssen | быть должным | Ich muss heute arbeiten. | Мне сегодня надо работать.
wollen | хотеть | Wir wollen nach Italien fahren. | Мы хотим поехать в Италию.
sollen | быть должным (по чужой воле) | Der Arzt sagt, ich soll mehr schlafen. | Врач говорит, что мне нужно больше спать.
dürfen | иметь разрешение | Darf ich hier rauchen? | Здесь можно курить?
mögen | любить, нравиться | Ich mag Schokolade. | Я люблю шоколад.
möchten | хотеть бы | Ich möchte einen Kaffee. | Я бы хотел кофе.
sagen | сказать | Was hast du gesagt? | Что ты сказал?
spielen | играть | Die Kinder spielen Fußball. | Дети играют в футбол. | ⚽
arbeiten | работать | Ich arbeite in einer Bank. | Я работаю в банке.
lernen (A1) | учить, учиться | Ich lerne jeden Tag Deutsch. | Я каждый день учу немецкий.
kaufen | покупать | Ich kaufe Brot und Milch. | Я покупаю хлеб и молоко. | 🛒
verkaufen | продавать | Er verkauft sein altes Auto. | Он продаёт свою старую машину.
schreiben | писать | Ich schreibe eine E-Mail. | Я пишу электронное письмо. | ✍️
hören | слушать, слышать | Ich höre gern Musik. | Я люблю слушать музыку. | 🎧
schlafen | спать | Das Baby schläft. | Ребёнок спит. | 😴
fahren | ехать | Wir fahren mit dem Zug. | Мы едем на поезде.
laufen | бегать; идти | Ich laufe jeden Morgen fünf Kilometer. | Я каждое утро бегаю пять километров. | 🏃
fliegen | летать | Wir fliegen nach Spanien. | Мы летим в Испанию. | ✈️
öffnen | открывать | Kannst du das Fenster öffnen? | Можешь открыть окно?
schließen | закрывать | Bitte schließen Sie die Tür. | Пожалуйста, закройте дверь.
lieben | любить | Ich liebe dich. | Я тебя люблю. | ❤️
kennen | знать (быть знакомым) | Kennst du diesen Mann? | Ты знаешь этого человека?
leben | жить | Sie lebt seit Jahren in Berlin. | Она уже много лет живёт в Берлине.
zeigen | показывать | Zeig mir bitte dein Foto. | Покажи мне, пожалуйста, своё фото.
bringen | приносить | Bring bitte Brot mit. | Принеси, пожалуйста, хлеба.
suchen | искать | Ich suche meinen Schlüssel. | Я ищу свой ключ. | 🔍
stehen | стоять | Der Tisch steht in der Ecke. | Стол стоит в углу.
sitzen | сидеть | Wir sitzen im Garten. | Мы сидим в саду.
liegen | лежать | Das Buch liegt auf dem Tisch. | Книга лежит на столе.
legen | класть | Leg das Handy bitte weg. | Убери, пожалуйста, телефон.
stellen | ставить | Stell die Flasche in den Kühlschrank. | Поставь бутылку в холодильник.
bleiben | оставаться | Wir bleiben heute zu Hause. | Мы сегодня остаёмся дома.
lachen | смеяться | Wir haben viel gelacht. | Мы много смеялись. | 😂
weinen | плакать | Das Kind weint. | Ребёнок плачет. | 😢
reisen | путешествовать | Ich reise gern. | Я люблю путешествовать.
besuchen | навещать, посещать | Morgen besuche ich meine Oma. | Завтра я навещу бабушку.
mieten | снимать (жильё) | Wir mieten eine Wohnung. | Мы снимаем квартиру.
glauben | верить, полагать | Ich glaube, du hast recht. | Думаю, ты прав.
verstehen | понимать | Ich verstehe dich gut. | Я тебя хорошо понимаю.
#A2
vergessen | забывать | Ich habe seinen Namen vergessen. | Я забыл его имя.
erklären | объяснять | Kannst du mir das erklären? | Можешь мне это объяснить?
erzählen | рассказывать | Erzähl mal, wie war der Urlaub? | Расскажи, как прошёл отпуск?
bekommen | получать | Ich habe eine Nachricht bekommen. | Я получил сообщение.
gehören | принадлежать | Wem gehört diese Tasche? | Кому принадлежит эта сумка?
gefallen | нравиться | Die Stadt gefällt mir sehr. | Город мне очень нравится.
passieren | случаться | Was ist passiert? | Что случилось?
versuchen | пытаться | Ich versuche es noch einmal. | Я попробую ещё раз.
benutzen | использовать | Darf ich dein Handy benutzen? | Можно воспользоваться твоим телефоном?
schicken | посылать | Ich schicke dir die Fotos. | Я пришлю тебе фотографии.
treffen | встречать | Ich treffe meine Freunde im Café. | Я встречаюсь с друзьями в кафе.
wechseln | менять | Ich muss Geld wechseln. | Мне нужно поменять деньги.
tragen | носить, нести | Sie trägt eine Brille. | Она носит очки.
waschen | мыть, стирать | Ich wasche die Wäsche. | Я стираю бельё.
vermieten | сдавать в аренду | Sie vermietet ein Zimmer. | Она сдаёт комнату.
verlieren | терять | Ich habe meinen Schlüssel verloren. | Я потерял ключ.
gewinnen | выигрывать | Unsere Mannschaft hat gewonnen. | Наша команда выиграла. | 🏆
hoffen | надеяться | Ich hoffe, es geht dir gut. | Надеюсь, у тебя всё хорошо.
feiern | праздновать | Wir feiern heute meinen Geburtstag. | Сегодня мы празднуем мой день рождения. | 🥳
schenken | дарить | Was schenkst du deiner Mutter? | Что ты подаришь маме? | 🎁
reparieren | ремонтировать | Kannst du mein Fahrrad reparieren? | Можешь починить мой велосипед? | 🔧
rufen | звать, кричать | Ruf mich, wenn du fertig bist. | Позови меня, когда будешь готов.
ziehen | тянуть; переезжать | Wir ziehen nach München. | Мы переезжаем в Мюнхен.
schieben | толкать | Wir müssen das Auto schieben. | Нам нужно толкать машину.
werfen | бросать | Wirf den Ball! | Брось мяч!
fallen | падать | Das Glas ist auf den Boden gefallen. | Стакан упал на пол.
springen | прыгать | Die Katze springt auf den Tisch. | Кошка прыгает на стол.
steigen | подниматься | Die Preise steigen. | Цены растут.
sterben | умирать | Sein Großvater ist letztes Jahr gestorben. | Его дедушка умер в прошлом году.
erleben | переживать, испытывать | Wir haben viel erlebt. | Мы многое пережили.
entscheiden | решать | Du musst dich jetzt entscheiden. | Ты должен решить сейчас.
erreichen | достигать, дозвониться | Ich kann ihn nicht erreichen. | Я не могу до него дозвониться.
verbringen | проводить (время) | Wir verbringen den Sommer am Meer. | Мы проводим лето на море.
#B1
behaupten | утверждать | Er behauptet, er sei krank. | Он утверждает, что болен.
bemerken | замечать | Hast du etwas bemerkt? | Ты что-нибудь заметил?
beschreiben | описывать | Beschreiben Sie bitte das Bild. | Опишите, пожалуйста, картинку.
bestätigen | подтверждать | Bitte bestätigen Sie den Termin. | Пожалуйста, подтвердите встречу.
empfehlen | рекомендовать | Ich kann dir das Buch empfehlen. | Могу порекомендовать тебе эту книгу.
erwarten | ожидать | Ich erwarte einen Anruf. | Я жду звонка.
vergleichen | сравнивать | Vergleich die Preise! | Сравни цены!
verbessern | улучшать | Ich will mein Deutsch verbessern. | Я хочу улучшить свой немецкий.
vermeiden | избегать | Vermeiden Sie Stress. | Избегайте стресса.
verlangen | требовать | Er verlangt eine Erklärung. | Он требует объяснения.
überzeugen | убеждать | Du hast mich überzeugt. | Ты меня убедил.
unterstützen | поддерживать | Meine Familie unterstützt mich. | Моя семья меня поддерживает.
verändern | изменять | Das hat mein Leben verändert. | Это изменило мою жизнь.
entwickeln | развивать | Die Firma entwickelt neue Produkte. | Фирма разрабатывает новые продукты.
erfahren | узнавать | Wann erfahre ich das Ergebnis? | Когда я узнаю результат?
erlauben | разрешать | Rauchen ist hier nicht erlaubt. | Курить здесь не разрешено.
verbieten | запрещать | Parken ist hier verboten. | Парковка здесь запрещена. | 🚫
vorschlagen | предлагать | Ich schlage vor, dass wir gehen. | Я предлагаю уйти.
zustimmen | соглашаться | Ich stimme dir völlig zu. | Я полностью с тобой согласен.
ablehnen | отклонять | Er hat das Angebot abgelehnt. | Он отклонил предложение.
`),

  ...parseVocab("trennbare_verben", "A2", `
anrufen | звонить по телефону | Ich rufe dich morgen an. | Я позвоню тебе завтра. | 📞
ankommen | прибывать | Der Zug kommt um acht Uhr an. | Поезд прибывает в восемь.
abfahren | отправляться | Wann fährt der Bus ab? | Когда отправляется автобус?
einkaufen | делать покупки | Am Samstag kaufe ich ein. | В субботу я хожу за покупками.
einladen | приглашать | Ich lade dich zum Essen ein. | Я приглашаю тебя на ужин.
mitkommen | идти вместе | Kommst du mit ins Kino? | Пойдёшь с нами в кино?
mitbringen | приносить с собой | Bring bitte einen Salat mit. | Принеси, пожалуйста, салат.
fernsehen | смотреть телевизор | Abends sehe ich fern. | Вечером я смотрю телевизор. | 📺
aufräumen | убирать (наводить порядок) | Räum bitte dein Zimmer auf! | Убери, пожалуйста, свою комнату! | 🧹
abholen | забирать | Ich hole dich vom Bahnhof ab. | Я заберу тебя с вокзала.
aussteigen | выходить (из транспорта) | Wir steigen an der nächsten Haltestelle aus. | Мы выходим на следующей остановке.
einsteigen | садиться (в транспорт) | Bitte schnell einsteigen! | Пожалуйста, быстро садитесь!
umsteigen | пересаживаться | In Köln müssen Sie umsteigen. | В Кёльне вам нужно сделать пересадку.
anfangen | начинать | Der Film fängt um acht an. | Фильм начинается в восемь.
aufhören | прекращать | Hör auf zu rauchen! | Брось курить!
zumachen | закрывать | Mach bitte das Fenster zu. | Закрой, пожалуйста, окно.
aufmachen | открывать | Kannst du die Tür aufmachen? | Можешь открыть дверь?
anmachen | включать | Mach bitte das Licht an. | Включи, пожалуйста, свет. | 💡
ausmachen | выключать; договариваться | Mach den Fernseher aus! | Выключи телевизор!
einschlafen | засыпать | Ich kann nicht einschlafen. | Я не могу заснуть.
aufwachen | просыпаться | Ich wache jeden Tag um sechs auf. | Я каждый день просыпаюсь в шесть.
zurückkommen | возвращаться | Wann kommst du zurück? | Когда ты вернёшься?
weggehen | уходить | Er ist schon weggegangen. | Он уже ушёл.
ausgehen | выходить (развлекаться) | Am Freitag gehen wir aus. | В пятницу мы идём куда-нибудь.
vorbeikommen | заходить | Komm doch mal vorbei! | Заходи как-нибудь!
zuhören | слушать (внимательно) | Hör mir bitte zu! | Послушай меня, пожалуйста!
mitmachen | участвовать | Machst du beim Spiel mit? | Ты участвуешь в игре?
abwaschen | мыть посуду | Wer wäscht heute ab? | Кто сегодня моет посуду?
anziehen (A2) | надевать | Zieh dir eine Jacke an! | Надень куртку!
aufschreiben | записывать | Schreib dir die Nummer auf. | Запиши себе номер.
ausfüllen | заполнять | Bitte füllen Sie das Formular aus. | Пожалуйста, заполните анкету. | 📝
#B1
ausgeben | тратить | Ich gebe zu viel Geld aus. | Я трачу слишком много денег.
ausleihen | брать на время | Ich leihe mir ein Buch aus. | Я беру книгу на время.
zurückgeben | возвращать | Gib mir das Buch bitte zurück. | Верни мне, пожалуйста, книгу.
vorbereiten | подготавливать | Ich bereite mich auf die Prüfung vor. | Я готовлюсь к экзамену.
nachdenken | размышлять | Ich muss darüber nachdenken. | Мне нужно над этим подумать.
teilnehmen | принимать участие | Ich nehme an einem Kurs teil. | Я участвую в курсе.
stattfinden | состояться | Das Konzert findet im Park statt. | Концерт состоится в парке.
vorstellen | представлять | Ich stelle dir meinen Freund vor. | Я представлю тебе своего друга.
festlegen | устанавливать, фиксировать | Wir haben den Termin festgelegt. | Мы назначили дату.
abschließen | запирать; завершать | Hast du die Tür abgeschlossen? | Ты запер дверь?
anbieten | предлагать | Darf ich Ihnen etwas anbieten? | Могу я вам что-нибудь предложить?
ankündigen | объявлять | Der Chef hat Änderungen angekündigt. | Начальник объявил об изменениях.
aufpassen | быть внимательным, присматривать | Pass auf, das Auto! | Осторожно, машина!
auspacken | распаковывать | Wir packen die Koffer aus. | Мы распаковываем чемоданы.
einpacken | упаковывать | Pack einen Pullover ein! | Возьми с собой свитер!
eintragen | вписывать | Tragen Sie Ihren Namen hier ein. | Впишите сюда ваше имя.
herausfinden | выяснять | Ich will herausfinden, was passiert ist. | Я хочу выяснить, что случилось.
hinzufügen | добавлять | Fügen Sie etwas Salz hinzu. | Добавьте немного соли.
mitteilen | сообщать | Wir teilen Ihnen das Ergebnis mit. | Мы сообщим вам результат.
nachfragen | переспрашивать, уточнять | Ich frage noch einmal nach. | Я уточню ещё раз.
umziehen | переезжать | Wir ziehen nächsten Monat um. | Мы переезжаем в следующем месяце. | 📦
zunehmen | прибавлять в весе; увеличиваться | Ich habe im Urlaub zugenommen. | В отпуске я поправился.
abnehmen | худеть; снимать (трубку) | Er hat fünf Kilo abgenommen. | Он похудел на пять килограммов.
annehmen | принимать; предполагать | Ich nehme das Angebot an. | Я принимаю предложение.
aufgeben | сдаваться; отказываться | Gib nicht auf! | Не сдавайся!
ausprobieren | опробовать | Wir probieren ein neues Rezept aus. | Мы пробуем новый рецепт.
einrichten | обставлять; настраивать | Wir richten die neue Wohnung ein. | Мы обставляем новую квартиру.
#B2
durchführen | проводить, осуществлять | Wir führen eine Umfrage durch. | Мы проводим опрос.
herstellen | производить | Die Firma stellt Möbel her. | Фирма производит мебель.
nachweisen | доказывать, подтверждать | Sie müssen Ihre Sprachkenntnisse nachweisen. | Вы должны подтвердить знание языка.
voraussetzen | предполагать (как условие) | Die Stelle setzt Erfahrung voraus. | Эта должность предполагает опыт.
zurücktreten | уходить в отставку | Der Minister ist zurückgetreten. | Министр ушёл в отставку.
`),

  ...parseVocab("reflexive_verben", "B1", `
#A2
sich waschen | мыться | Ich wasche mich jeden Morgen. | Я умываюсь каждое утро.
sich anziehen | одеваться | Das Kind zieht sich allein an. | Ребёнок одевается сам.
sich setzen | садиться | Setzen Sie sich bitte! | Садитесь, пожалуйста!
sich beeilen | торопиться | Beeil dich, wir sind spät dran! | Поторопись, мы опаздываем!
sich freuen | радоваться | Ich freue mich sehr! | Я очень рад!
sich treffen | встречаться | Wir treffen uns um sieben. | Мы встречаемся в семь.
sich fühlen | чувствовать себя | Ich fühle mich nicht gut. | Я плохо себя чувствую.
sich erkälten | простужаться | Ich habe mich erkältet. | Я простудился. | 🤧
sich verletzen | пораниться | Er hat sich beim Sport verletzt. | Он поранился во время спорта.
sich duschen | принимать душ | Ich dusche mich nach dem Training. | Я принимаю душ после тренировки. | 🚿
sich kämmen | причёсываться | Sie kämmt sich vor dem Spiegel. | Она причёсывается перед зеркалом.
sich putzen (die Zähne) | чистить (зубы) | Putz dir die Zähne! | Почисти зубы! | 🪥
#B1
sich interessieren für | интересоваться | Ich interessiere mich für Geschichte. | Я интересуюсь историей.
sich freuen auf | с нетерпением ждать | Ich freue mich auf den Urlaub. | Я жду не дождусь отпуска.
sich freuen über | радоваться чему-то | Sie freut sich über das Geschenk. | Она радуется подарку.
sich ärgern über | злиться на | Ich ärgere mich über den Lärm. | Меня злит шум.
sich erinnern an | вспоминать | Erinnerst du dich an unseren Urlaub? | Помнишь наш отпуск?
sich gewöhnen an | привыкать к | Ich habe mich an das Wetter gewöhnt. | Я привык к погоде.
sich bewerben um | подавать заявку на | Er bewirbt sich um eine Stelle. | Он подаёт заявку на вакансию.
sich entschuldigen | извиняться | Ich möchte mich entschuldigen. | Я хотел бы извиниться.
sich beschweren über | жаловаться на | Die Gäste beschweren sich über das Essen. | Гости жалуются на еду.
sich unterhalten | беседовать | Wir haben uns lange unterhalten. | Мы долго беседовали.
sich verabreden | договариваться о встрече | Wir haben uns fürs Kino verabredet. | Мы договорились сходить в кино.
sich verabschieden | прощаться | Er hat sich nicht verabschiedet. | Он не попрощался.
sich bedanken | благодарить | Ich bedanke mich für die Einladung. | Благодарю за приглашение.
sich anmelden | записываться, регистрироваться | Ich melde mich für den Kurs an. | Я записываюсь на курс.
sich vorbereiten auf | готовиться к | Sie bereitet sich auf die Prüfung vor. | Она готовится к экзамену.
sich kümmern | заботиться | Wer kümmert sich um den Hund? | Кто позаботится о собаке?
sich entscheiden | решаться | Ich habe mich für das blaue Kleid entschieden. | Я выбрала синее платье.
sich verlieben | влюбляться | Er hat sich in sie verliebt. | Он в неё влюбился. | 😍
sich streiten | ссориться | Die Kinder streiten sich oft. | Дети часто ссорятся.
sich trennen | расставаться | Sie haben sich getrennt. | Они расстались. | 💔
sich verspäten | опаздывать | Entschuldigung, ich habe mich verspätet. | Извините, я опоздал.
sich wundern | удивляться | Ich wundere mich über sein Verhalten. | Я удивляюсь его поведению.
sich langweilen (B1) | скучать | Im Unterricht langweile ich mich. | На уроке мне скучно.
sich sorgen um | беспокоиться о | Sie sorgt sich um ihre Kinder. | Она беспокоится о своих детях.
sich verlaufen | заблудиться | Wir haben uns in der Altstadt verlaufen. | Мы заблудились в старом городе.
sich informieren über | узнавать о | Ich informiere mich über die Kurse. | Я узнаю о курсах.
sich beschäftigen mit | заниматься чем-то | Sie beschäftigt sich mit Fotografie. | Она занимается фотографией.
sich konzentrieren auf | сосредотачиваться на | Konzentrier dich auf deine Arbeit! | Сосредоточься на работе!
#B2
sich auseinandersetzen mit | разбираться с, анализировать | Wir müssen uns mit dem Problem auseinandersetzen. | Нам нужно разобраться с этой проблемой.
sich bemühen um | стараться, добиваться | Er bemüht sich um eine Lösung. | Он старается найти решение.
sich befinden | находиться | Das Büro befindet sich im dritten Stock. | Офис находится на четвёртом этаже.
sich ereignen | происходить | Der Unfall ereignete sich gestern Abend. | Авария произошла вчера вечером.
sich ergeben | получаться, вытекать | Daraus ergibt sich ein Problem. | Из этого вытекает проблема.
sich herausstellen | оказываться | Es stellte sich heraus, dass er recht hatte. | Оказалось, что он был прав.
sich weigern | отказываться | Er weigert sich zu zahlen. | Он отказывается платить.
sich einigen auf | договориться о | Wir haben uns auf einen Kompromiss geeinigt. | Мы договорились о компромиссе.
sich äußern zu | высказываться о | Der Minister wollte sich nicht dazu äußern. | Министр не захотел это комментировать.
sich anpassen an | приспосабливаться к | Kinder passen sich schnell an. | Дети быстро приспосабливаются.
sich engagieren für | выступать за, участвовать | Sie engagiert sich für den Umweltschutz. | Она активно занимается защитой природы.
`),

  ...parseVocab("verben_praep", "B1", `
denken an | думать о | Ich denke oft an dich. | Я часто думаю о тебе.
warten auf | ждать кого-то | Wir warten auf den Bus. | Мы ждём автобус.
sprechen über | говорить о | Lass uns über das Problem sprechen. | Давай поговорим о проблеме.
sprechen mit | говорить с | Ich muss mit dem Chef sprechen. | Мне нужно поговорить с начальником.
träumen von | мечтать о | Sie träumt von einer Weltreise. | Она мечтает о кругосветном путешествии.
Angst haben vor | бояться | Das Kind hat Angst vor dem Hund. | Ребёнок боится собаки.
achten auf | обращать внимание на | Achte auf die Rechtschreibung! | Следи за орфографией!
antworten auf | отвечать на | Er hat nicht auf meine Frage geantwortet. | Он не ответил на мой вопрос.
bitten um | просить о | Darf ich Sie um Hilfe bitten? | Могу я попросить вас о помощи?
danken für | благодарить за | Ich danke dir für deine Hilfe. | Спасибо тебе за помощь.
fragen nach | спрашивать о | Er hat nach dem Weg gefragt. | Он спросил дорогу.
gehören zu | относиться к | Das gehört zu meinen Aufgaben. | Это входит в мои обязанности.
glauben an | верить в | Ich glaube an dich. | Я верю в тебя.
helfen bei | помогать в | Kannst du mir beim Umzug helfen? | Можешь помочь мне с переездом?
lachen über | смеяться над | Alle lachten über den Witz. | Все смеялись над шуткой.
schreiben an | писать кому-то | Ich schreibe einen Brief an meine Oma. | Я пишу письмо бабушке.
sich verlassen auf | полагаться на | Auf ihn kann man sich verlassen. | На него можно положиться.
teilnehmen an | участвовать в | Viele nahmen an der Demo teil. | Многие участвовали в демонстрации.
abhängen von | зависеть от | Das hängt vom Wetter ab. | Это зависит от погоды.
erzählen von | рассказывать о | Erzähl mir von deiner Reise! | Расскажи мне о своей поездке!
halten von | быть мнения о | Was hältst du von der Idee? | Что ты думаешь об этой идее?
gratulieren zu | поздравлять с | Ich gratuliere dir zum Geburtstag! | Поздравляю тебя с днём рождения!
passen zu | подходить к | Die Schuhe passen gut zu dem Kleid. | Туфли хорошо подходят к платью.
riechen nach | пахнуть чем-то | Hier riecht es nach Kaffee. | Здесь пахнет кофе.
schmecken nach | иметь вкус чего-то | Das schmeckt nach Zitrone. | На вкус как лимон.
suchen nach | искать что-то | Ich suche nach einer Lösung. | Я ищу решение.
sorgen für | заботиться о, обеспечивать | Wer sorgt für die Getränke? | Кто позаботится о напитках?
#B2
bestehen aus | состоять из | Die Gruppe besteht aus zehn Personen. | Группа состоит из десяти человек.
bestehen auf | настаивать на | Er besteht auf einer Entschuldigung. | Он настаивает на извинении.
sich beziehen auf | ссылаться на | Ich beziehe mich auf Ihr Schreiben. | Ссылаюсь на ваше письмо.
führen zu | приводить к | Stress kann zu Krankheiten führen. | Стресс может привести к болезням.
hindern an | мешать в | Der Regen hinderte uns am Weiterfahren. | Дождь помешал нам ехать дальше.
leiden an / unter | страдать от | Viele leiden unter Schlafstörungen. | Многие страдают от нарушений сна.
neigen zu | быть склонным к | Er neigt zu Übertreibungen. | Он склонен преувеличивать.
rechnen mit | рассчитывать на | Wir rechnen mit Ihrer Unterstützung. | Мы рассчитываем на вашу поддержку.
verfügen über | располагать | Die Wohnung verfügt über einen Balkon. | В квартире есть балкон.
verzichten auf | отказываться от | Ich verzichte auf Zucker. | Я отказываюсь от сахара.
zweifeln an | сомневаться в | Ich zweifle an seiner Ehrlichkeit. | Я сомневаюсь в его честности.
sich wenden an | обращаться к | Wenden Sie sich bitte an die Rezeption. | Обратитесь, пожалуйста, на ресепшен.
beitragen zu | способствовать | Jeder kann zum Umweltschutz beitragen. | Каждый может внести вклад в защиту среды.
sich handeln um | идти речь о | Es handelt sich um ein Missverständnis. | Речь идёт о недоразумении.
`),
];
