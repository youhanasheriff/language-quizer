// ============================================================
// DATA
// ============================================================
const KANJI = [
  {k:"一",on:"イチ",kun:"ひと(つ)",en:"One"},
  {k:"二",on:"ニ",kun:"ふた(つ)",en:"Two"},
  {k:"三",on:"サン",kun:"みっ(つ)",en:"Three"},
  {k:"四",on:"シ",kun:"よ(つ)・よん",en:"Four"},
  {k:"五",on:"ゴ",kun:"いつ(つ)",en:"Five"},
  {k:"六",on:"ロク",kun:"むっ(つ)",en:"Six"},
  {k:"七",on:"シチ",kun:"なな(つ)",en:"Seven"},
  {k:"八",on:"ハチ",kun:"やっ(つ)",en:"Eight"},
  {k:"九",on:"キュウ・ク",kun:"ここの(つ)",en:"Nine"},
  {k:"百",on:"ヒャク",kun:"",en:"Hundred"},
  {k:"千",on:"セン",kun:"",en:"Thousand"},
  {k:"万",on:"マン",kun:"",en:"Ten thousand"},
  {k:"円",on:"エン",kun:"",en:"Yen"},
  {k:"番",on:"バン",kun:"",en:"Number/turn"},
  {k:"日",on:"ニチ・ジツ",kun:"ひ・か",en:"Day/Sun"},
  {k:"月",on:"ゲツ・ガツ",kun:"つき",en:"Month/Moon"},
  {k:"年",on:"ネン",kun:"とし",en:"Year"},
  {k:"時",on:"ジ",kun:"とき",en:"Time/Hour"},
  {k:"間",on:"カン・ケン",kun:"あいだ・ま",en:"Interval/Between"},
  {k:"週",on:"シュウ",kun:"",en:"Week"},
  {k:"今",on:"コン",kun:"いま",en:"Now/This"},
  {k:"朝",on:"チョウ",kun:"あさ",en:"Morning"},
  {k:"昼",on:"チュウ",kun:"ひる",en:"Daytime/Noon"},
  {k:"夜",on:"ヤ",kun:"よる・よ",en:"Night"},
  {k:"去",on:"キョ・コ",kun:"さ(る)",en:"Past/Leave"},
  {k:"来",on:"ライ",kun:"く(る)",en:"Come/Next"},
  {k:"前",on:"ゼン",kun:"まえ",en:"Before/Front"},
  {k:"後",on:"ゴ・コウ",kun:"あと・うし(ろ)",en:"After/Behind"},
  {k:"毎",on:"マイ",kun:"",en:"Every"},
  {k:"人",on:"ジン・ニン",kun:"ひと",en:"Person"},
  {k:"私",on:"シ",kun:"わたし",en:"I/Private"},
  {k:"名",on:"メイ・ミョウ",kun:"な",en:"Name"},
  {k:"友",on:"ユウ",kun:"とも",en:"Friend"},
  {k:"家",on:"カ・ケ",kun:"いえ・や",en:"House/Home"},
  {k:"族",on:"ゾク",kun:"",en:"Clan/Family"},
  {k:"兄",on:"ケイ・キョウ",kun:"あに",en:"Older brother"},
  {k:"弟",on:"テイ・ダイ",kun:"おとうと",en:"Younger brother"},
  {k:"姉",on:"シ",kun:"あね",en:"Older sister"},
  {k:"妹",on:"マイ",kun:"いもうと",en:"Younger sister"},
  {k:"者",on:"シャ",kun:"もの",en:"Person (formal)"},
  {k:"自",on:"ジ・シ",kun:"みずか(ら)",en:"Self"},
  {k:"介",on:"カイ",kun:"",en:"Introduce"},
  {k:"紹",on:"ショウ",kun:"",en:"Introduce"},
  {k:"山",on:"サン",kun:"やま",en:"Mountain"},
  {k:"川",on:"セン",kun:"かわ",en:"River"},
  {k:"水",on:"スイ",kun:"みず",en:"Water"},
  {k:"火",on:"カ",kun:"ひ",en:"Fire"},
  {k:"土",on:"ド・ト",kun:"つち",en:"Earth/Soil"},
  {k:"木",on:"モク・ボク",kun:"き",en:"Tree/Wood"},
  {k:"花",on:"カ",kun:"はな",en:"Flower"},
  {k:"空",on:"クウ",kun:"そら",en:"Sky/Empty"},
  {k:"雨",on:"ウ",kun:"あめ",en:"Rain"},
  {k:"天",on:"テン",kun:"あめ・あま",en:"Heaven/Sky"},
  {k:"気",on:"キ・ケ",kun:"",en:"Spirit/Weather"},
  {k:"田",on:"デン",kun:"た",en:"Rice field"},
  {k:"北",on:"ホク",kun:"きた",en:"North"},
  {k:"南",on:"ナン",kun:"みなみ",en:"South"},
  {k:"東",on:"トウ",kun:"ひがし",en:"East"},
  {k:"西",on:"セイ・サイ",kun:"にし",en:"West"},
  {k:"右",on:"ウ・ユウ",kun:"みぎ",en:"Right"},
  {k:"左",on:"サ",kun:"ひだり",en:"Left"},
  {k:"上",on:"ジョウ",kun:"うえ",en:"Up/Above"},
  {k:"下",on:"カ・ゲ",kun:"した",en:"Down/Below"},
  {k:"外",on:"ガイ・ゲ",kun:"そと・ほか",en:"Outside"},
  {k:"中",on:"チュウ",kun:"なか",en:"Inside/Middle"},
  {k:"近",on:"キン",kun:"ちか(い)",en:"Near"},
  {k:"遠",on:"エン",kun:"とお(い)",en:"Far"},
  {k:"国",on:"コク",kun:"くに",en:"Country"},
  {k:"町",on:"チョウ",kun:"まち",en:"Town"},
  {k:"店",on:"テン",kun:"みせ",en:"Shop/Store"},
  {k:"駅",on:"エキ",kun:"",en:"Station"},
  {k:"園",on:"エン",kun:"その",en:"Garden/Park"},
  {k:"屋",on:"オク",kun:"や",en:"Shop/Roof"},
  {k:"院",on:"イン",kun:"",en:"Institution"},
  {k:"公",on:"コウ",kun:"おおやけ",en:"Public"},
  {k:"社",on:"シャ",kun:"やしろ",en:"Company/Shrine"},
  {k:"会",on:"カイ・エ",kun:"あ(う)",en:"Meet/Association"},
  {k:"学",on:"ガク",kun:"まな(ぶ)",en:"Study/Learning"},
  {k:"校",on:"コウ",kun:"",en:"School"},
  {k:"生",on:"セイ・ショウ",kun:"い(きる)・う(まれる)",en:"Life/Born/Student"},
  {k:"先",on:"セン",kun:"さき",en:"Previous/Teacher"},
  {k:"字",on:"ジ",kun:"あざ",en:"Character/Letter"},
  {k:"漢",on:"カン",kun:"",en:"Chinese (kanji)"},
  {k:"試",on:"シ",kun:"ため(す)",en:"Try/Test"},
  {k:"験",on:"ケン",kun:"",en:"Examine/Test"},
  {k:"本",on:"ホン",kun:"もと",en:"Book/Origin"},
  {k:"書",on:"ショ",kun:"か(く)",en:"Write/Book"},
  {k:"読",on:"ドク",kun:"よ(む)",en:"Read"},
  {k:"語",on:"ゴ",kun:"かた(る)",en:"Language/Word"},
  {k:"聞",on:"ブン・モン",kun:"き(く)",en:"Hear/Listen/Ask"},
  {k:"話",on:"ワ",kun:"はな(す)",en:"Talk/Story"},
  {k:"目",on:"モク",kun:"め",en:"Eye"},
  {k:"口",on:"コウ・ク",kun:"くち",en:"Mouth/Entrance"},
  {k:"手",on:"シュ",kun:"て",en:"Hand"},
  {k:"声",on:"セイ",kun:"こえ",en:"Voice"},
  {k:"病",on:"ビョウ",kun:"やまい",en:"Illness/Sick"},
  {k:"医",on:"イ",kun:"",en:"Medicine/Doctor"},
  {k:"行",on:"コウ・ギョウ",kun:"い(く)",en:"Go/Do"},
  {k:"帰",on:"キ",kun:"かえ(る)",en:"Return home"},
  {k:"入",on:"ニュウ",kun:"はい(る)",en:"Enter"},
  {k:"出",on:"シュツ",kun:"で(る)・だ(す)",en:"Exit/Put out"},
  {k:"見",on:"ケン",kun:"み(る)",en:"See/Look"},
  {k:"買",on:"バイ",kun:"か(う)",en:"Buy"},
  {k:"食",on:"ショク",kun:"た(べる)",en:"Eat/Food"},
  {k:"飲",on:"イン",kun:"の(む)",en:"Drink"},
  {k:"歩",on:"ホ",kun:"ある(く)",en:"Walk"},
  {k:"走",on:"ソウ",kun:"はし(る)",en:"Run"},
  {k:"休",on:"キュウ",kun:"やす(む)",en:"Rest"},
  {k:"使",on:"シ",kun:"つか(う)",en:"Use"},
  {k:"仕",on:"シ・ジ",kun:"つか(える)",en:"Serve/Work"},
  {k:"事",on:"ジ・ズ",kun:"こと",en:"Thing/Matter"},
  {k:"転",on:"テン",kun:"ころ(がる)",en:"Roll/Turn"},
  {k:"大",on:"ダイ・タイ",kun:"おお(きい)",en:"Big"},
  {k:"小",on:"ショウ",kun:"ちい(さい)",en:"Small"},
  {k:"長",on:"チョウ",kun:"なが(い)",en:"Long"},
  {k:"短",on:"タン",kun:"みじか(い)",en:"Short"},
  {k:"高",on:"コウ",kun:"たか(い)",en:"High/Expensive"},
  {k:"安",on:"アン",kun:"やす(い)",en:"Cheap/Safe"},
  {k:"多",on:"タ",kun:"おお(い)",en:"Many"},
  {k:"少",on:"ショウ",kun:"すく(ない)",en:"Few/Little"},
  {k:"新",on:"シン",kun:"あたら(しい)",en:"New"},
  {k:"古",on:"コ",kun:"ふる(い)",en:"Old (things)"},
  {k:"広",on:"コウ",kun:"ひろ(い)",en:"Wide"},
  {k:"強",on:"キョウ",kun:"つよ(い)",en:"Strong"},
  {k:"明",on:"メイ・ミョウ",kun:"あか(るい)",en:"Bright"},
  {k:"暗",on:"アン",kun:"くら(い)",en:"Dark"},
  {k:"白",on:"ハク",kun:"しろ(い)",en:"White"},
  {k:"赤",on:"セキ",kun:"あか(い)",en:"Red"},
  {k:"青",on:"セイ",kun:"あお(い)",en:"Blue"},
  {k:"黒",on:"コク",kun:"くろ(い)",en:"Black"},
  {k:"有",on:"ユウ",kun:"あ(る)",en:"Exist/Have"},
  {k:"楽",on:"ガク・ラク",kun:"たの(しい)",en:"Fun/Music"},
  {k:"車",on:"シャ",kun:"くるま",en:"Car/Vehicle"},
  {k:"電",on:"デン",kun:"",en:"Electricity"},
  {k:"道",on:"ドウ",kun:"みち",en:"Road/Way"},
  {k:"金",on:"キン・コン",kun:"かね",en:"Money/Gold"},
  {k:"銀",on:"ギン",kun:"",en:"Silver"},
  {k:"魚",on:"ギョ",kun:"さかな",en:"Fish"},
  {k:"分",on:"ブン・フン",kun:"わ(かる)",en:"Minute/Understand"}
];

let VOCAB = [];
let SENTENCES = [];
// Inline data will be loaded in init()

const GRAMMAR = [
  {id:"L1-1",lesson:1,title:"Introducing Yourself",pattern:"わたし は [Name] です。",example:"わたし は タン です。がくせい です。",meaning:"I am Tan. I am a student."},
  {id:"L1-1",lesson:1,title:"Introducing Others",pattern:"こちら は [Name] さん です。",example:"こちら は サラ さん です。かいしゃいん です。",meaning:"This is Sara. She is a company employee."},
  {id:"L1-1",lesson:1,title:"も Particle (Also)",pattern:"[Name] も [Noun] です。",example:"いのうえ さん も かいしゃいん です。",meaning:"Inoue is also a company employee."},
  {id:"L1-1",lesson:1,title:"Question か and Negative じゃありません",pattern:"[Noun] ですか。→ はい/いいえ、じゃありません",example:"がくせい ですか。いいえ、がくせい じゃありません。",meaning:"Are you a student? No, I am not a student."},
  {id:"L1-2",lesson:1,title:"Greetings by Time of Day",pattern:"おはよう / こんにちは / こんばんは",example:"おはようございます。いいてんきですね。",meaning:"Good morning. Nice weather, isn't it?"},
  {id:"L1-2",lesson:1,title:"～ですね (Agreement Pattern)",pattern:"[Statement] ですね。→ そうですね。",example:"いいてんきですね。— そうですね。",meaning:"Nice weather, isn't it? — Yes, it is."},
  {id:"L1-2",lesson:1,title:"Asking for Repetition",pattern:"すみません。もういちど、おねがいします。",example:"すみません。もういちど、おねがいします。",meaning:"Excuse me. One more time, please."},
  {id:"L1-3",lesson:1,title:"から きました (Came from ~)",pattern:"[Country/City] から きました。",example:"ベトナムから きました。",meaning:"I came from Vietnam."},
  {id:"L1-3",lesson:1,title:"いつ～きましたか (When did you come?)",pattern:"いつ [Place] へ きましたか。",example:"いつ にほんへ きましたか。",meaning:"When did you come to Japan?"},
  {id:"L1-3",lesson:1,title:"Verb ます/ません Forms",pattern:"～ますか → はい、～ます / いいえ、～ません",example:"コーヒーを のみますか。いいえ、のみません。",meaning:"Do you drink coffee? No, I don't drink it."},
  {id:"L2-1",lesson:2,title:"いくらですか (How Much?)",pattern:"[Item] は いくら ですか。",example:"これは いくら ですか。— 500えん です。",meaning:"How much is this? — It's 500 yen."},
  {id:"L2-1",lesson:2,title:"これ/それ/あれ/どれ (Demonstratives)",pattern:"これ(near me)/それ(near you)/あれ(far)/どれ(which)",example:"それは いくら ですか。",meaning:"How much is that (near you)?"},
  {id:"L2-1",lesson:2,title:"いくつですか (How Many?)",pattern:"[Item] を いくつ ですか。",example:"りんごを みっつ ください。",meaning:"Three apples, please."},
  {id:"L2-1",lesson:2,title:"を ください (Please Give Me ~)",pattern:"[Item] を [Counter] ください。",example:"ハンバーガー を ひとつ ください。",meaning:"One hamburger, please."},
  {id:"L2-1",lesson:2,title:"と Particle (And)",pattern:"[A] と [B] ください。",example:"ハンバーガー と ポテト ください。",meaning:"A hamburger and fries, please."},
  {id:"L2-2",lesson:2,title:"なんがいですか (What Floor?)",pattern:"[Place] は なんがい ですか。",example:"とけいうりばは なんがいですか。",meaning:"What floor is the watch section?"},
  {id:"L2-2",lesson:2,title:"Position/Location Words",pattern:"[Item] は [Reference] の うえ/した/まえ etc. に あります",example:"かばんは つくえの うえに あります。",meaning:"The bag is on top of the desk."},
  {id:"L2-3",lesson:2,title:"この/その/あの/どの (Demonstrative Adj.)",pattern:"この(this)/その(that)/あの(that over there)/どの(which)",example:"あの くつ みせてください。",meaning:"Please show me those shoes (over there)."},
  {id:"L2-3",lesson:2,title:"い-Adjective Descriptions",pattern:"[Noun] は [い-Adj] です。",example:"この かばんは おおきいです。",meaning:"This bag is big."},
  {id:"L2-3",lesson:2,title:"い-Adjective Negative Form",pattern:"[い-Adj (drop い)] + くないです",example:"おもいですか。いいえ、おもくないです。",meaning:"Is it heavy? No, it's not heavy."},
  {id:"L3-1",lesson:3,title:"へ Particle (Direction) + で (Means)",pattern:"[Transport] で [Place] へ いきます",example:"バスで よこはまへ いきます。",meaning:"I go to Yokohama by bus."},
  {id:"L3-1",lesson:3,title:"たい Form (Want to ~)",pattern:"[Verb stem] + たいです / たくないです",example:"ケーキが たべたいです。",meaning:"I want to eat cake."},
  {id:"L3-2",lesson:3,title:"ここ/そこ/あそこ/どこ (Location)",pattern:"ここ(here)/そこ(there)/あそこ(over there)/どこ(where)",example:"ゆうびんきょくは どこですか。— あそこです。",meaning:"Where is the post office? — Over there."},
  {id:"L3-2",lesson:3,title:"なんじですか (What Time?)",pattern:"いま なんじ ですか。→ [Time] です。",example:"いま なんじですか。— ２じです。",meaning:"What time is it now? — It's 2 o'clock."},
  {id:"L3-3",lesson:3,title:"から～まで (From ~ To ~)",pattern:"[A] から [B] まで どれぐらいですか",example:"ここから とうきょうまで どれぐらい かかりますか。",meaning:"How long does it take from here to Tokyo?"},
  {id:"L3-3",lesson:3,title:"に います (Existence of people)",pattern:"[Person] は [Place] に います",example:"せんせいは きょうしつに います。",meaning:"The teacher is in the classroom."},
  {id:"L4-1",lesson:4,title:"を + します (Activity)",pattern:"[Activity] を します",example:"サッカーを します。",meaning:"I play soccer."},
  {id:"L4-1",lesson:4,title:"なんじに (At what time?)",pattern:"なんじに [Verb] ますか → [Time] に [Verb] ます",example:"まいにち なんじに おきますか。— ６じに おきます。",meaning:"What time do you wake up every day? — At 6."},
  {id:"L4-1",lesson:4,title:"で (Location particle)",pattern:"[Place] で [Verb] ます",example:"がっこうで べんきょうします。",meaning:"I study at school."},
  {id:"L4-2",lesson:4,title:"Past Tense ました/ませんでした",pattern:"[Verb] ました (did) / ませんでした (didn't)",example:"きのう テレビを みましたか。— はい、みました。",meaning:"Did you watch TV yesterday? — Yes, I did."},
  {id:"L4-2",lesson:4,title:"だれが (Who did?)",pattern:"だれが [Verb] ましたか → [Person] が [Verb] ました",example:"だれが つくりましたか。— わたしが つくりました。",meaning:"Who made it? — I made it."},
  {id:"L4-3",lesson:4,title:"どこにありますか (Where is it?)",pattern:"[Object] は どこに ありますか → [Place] に あります",example:"ほうちょうは どこにありますか。— ひきだしの中にあります。",meaning:"Where is the knife? — It's in the drawer."},
  {id:"L5-1",lesson:5,title:"～ませんか (Invitation)",pattern:"[Verb] ませんか / [Verb] ましょう",example:"いっしょに たべに いきませんか。",meaning:"Shall we go eat together?"},
  {id:"L5-1",lesson:5,title:"～に行きます (Go to do ~)",pattern:"[Place] へ [Verb stem] に いきます",example:"えいがを みに いきます。",meaning:"I go to watch a movie."},
  {id:"L5-2",lesson:5,title:"～にします (Deciding)",pattern:"[Item] に します",example:"わたしは コーヒーに します。",meaning:"I'll have coffee."},
  {id:"L5-3",lesson:5,title:"～がほしいです (Want something)",pattern:"[Noun] が ほしいです",example:"あたらしい くつが ほしいです。",meaning:"I want new shoes."},
  {id:"L6-1",lesson:6,title:"から (Because / Reason)",pattern:"[Reason] ですから、[Result]",example:"ちかいですから、あるいて いきます。",meaning:"Because it's close, I'll walk."},
  {id:"L6-1",lesson:6,title:"だれも/どこも/なにも (Nobody/Nowhere/Nothing)",pattern:"だれも/どこも/なにも + Negative verb",example:"だれも いません。",meaning:"Nobody is here."},
  {id:"L6-2",lesson:6,title:"な-Adjective Conjugation",pattern:"な-Adj + な + Noun / な-Adj じゃありません",example:"きれいな はな です。",meaning:"It's a beautiful flower."},
  {id:"L6-2",lesson:6,title:"どんな (What kind of?)",pattern:"どんな [Noun] ですか",example:"どんな まちですか。— しずかな まちです。",meaning:"What kind of town? — A quiet town."},
  {id:"L6-3",lesson:6,title:"い-Adjective Past Tense",pattern:"[い → かった] です / [い → くなかった] です",example:"きのうの パーティーは たのしかったです。",meaning:"Yesterday's party was fun."},
  {id:"L6-3",lesson:6,title:"な-Adjective Past Tense",pattern:"でした / じゃありませんでした",example:"その まちは しずかでした。",meaning:"That town was quiet."},
  {id:"L7-1",lesson:7,title:"Casual/Dictionary Form of Verbs",pattern:"ます → る/う form (e.g., たべます → たべる)",example:"あした やすむ。",meaning:"I'll rest tomorrow. (casual)"},
  {id:"L7-2",lesson:7,title:"Casual Negative ～ない",pattern:"[Verb] ません → [Verb] ない",example:"あした いかない。",meaning:"I won't go tomorrow. (casual)"},
  {id:"L7-3",lesson:7,title:"Casual Adjective (drop です)",pattern:"おいしい (not おいしいです) / しずか (not しずかです)",example:"この ケーキ、おいしい！",meaning:"This cake is delicious! (casual)"},
  {id:"L8-1",lesson:8,title:"Casual Past Tense of Verbs",pattern:"[Verb] ました → [Verb] た/だ",example:"こうりゅう会に 行った？",meaning:"Did you go to the exchange meeting? (casual)"},
  {id:"L9-1",lesson:9,title:"～ないでください (Please don't ~)",pattern:"[Verb ない-form] + でください",example:"ここで たばこを すわないでください。",meaning:"Please don't smoke here."},
  {id:"L9-1",lesson:9,title:"て-Form + ください (Please ~)",pattern:"[Verb て-form] + ください",example:"ここに なまえを かいてください。",meaning:"Please write your name here."},
  {id:"L9-1",lesson:9,title:"～までに (By ~, Before ~)",pattern:"[Time] までに [Verb]",example:"8時45分までに 会社へ いきます。",meaning:"I go to the company by 8:45."},
  {id:"L9-2",lesson:9,title:"て-Form + はいけません (Must not ~)",pattern:"[Verb て-form] + はいけません",example:"ここで たばこを すってはいけません。",meaning:"You must not smoke here."},
  {id:"L9-2",lesson:9,title:"て-Form + もいいですか (May I ~?)",pattern:"[Verb て-form] + もいいですか",example:"しゃしんを とってもいいですか。",meaning:"May I take a photo?"},
  {id:"L9-2",lesson:9,title:"で Particle (Means/Tool)",pattern:"[Tool/Means] で [Verb]",example:"えんぴつで かいてください。",meaning:"Please write with a pencil."},
  {id:"L9-3",lesson:9,title:"て-Form + います (Ongoing action)",pattern:"[Verb て-form] + います",example:"いま テレビを みています。",meaning:"I am watching TV now."},
  {id:"L9-3",lesson:9,title:"もう/まだ (Already/Not yet)",pattern:"もう [Verb] ました / まだ [Verb] ていません",example:"もう ごはんを たべましたか。— まだ たべていません。",meaning:"Have you eaten yet? — Not yet."},
  {id:"L10-1",lesson:10,title:"Describing People with ている",pattern:"[Clothing verb て-form] + います",example:"あの コートを きている ひとです。",meaning:"That's the person wearing the coat."},
  {id:"L10-3",lesson:10,title:"N1はN2がAです (Topic-Attribute)",pattern:"[Topic] は [Attribute] が [Adjective] です",example:"おおさかは たべものが おいしいです。",meaning:"In Osaka, the food is delicious."},
  {id:"L10-3",lesson:10,title:"～が、～ (But/Although)",pattern:"[Sentence A] が、[Sentence B]",example:"にぎやかですが、おもしろいです。",meaning:"It's lively, but interesting."},
  {id:"L10-3",lesson:10,title:"～とおもいます (I think ~)",pattern:"[Plain form] と おもいます",example:"にほんは きれいだ と おもいます。",meaning:"I think Japan is beautiful."}
];

// ============================================================
// STATE
// ============================================================
let currentMode = null;
let currentFilter = 'all';
let questions = [];
let currentQ = 0;
let score = 0;
let streakCount = 0;
let maxStreak = 0;
let answered = false;
let missed = [];
let totalQuestions = 15;

const MODES = [
  {id:'kanji-meaning', icon:'\u5b57', label:'Kanji \u2192 Meaning', count:KANJI.length, desc:'See kanji, pick English meaning'},
  {id:'meaning-kanji', icon:'Abc', label:'Meaning \u2192 Kanji', count:KANJI.length, desc:'See meaning, pick the kanji'},
  {id:'kanji-reading', icon:'\u8aad', label:'Kanji \u2192 Reading', count:KANJI.length, desc:'See kanji, pick the reading'},
  {id:'vocab-meaning', icon:'\u8a9e', label:'Vocab \u2192 Meaning', count:'700+', desc:'Japanese word to English'},
  {id:'meaning-vocab', icon:'EN', label:'Meaning \u2192 Vocab', count:'700+', desc:'English to Japanese word'},
  {id:'sentence-fill', icon:'\u6587', label:'Fill the Blank', count:'200+', desc:'Complete the sentence'},
  {id:'grammar-pattern', icon:'\u6587\u6cd5', label:'Grammar Pattern', count:GRAMMAR.length, desc:'Match grammar rule to example'},
  {id:'grammar-meaning', icon:'\u4f8b', label:'Grammar Meaning', count:GRAMMAR.length, desc:'What does the sentence mean?'},
];

// ============================================================
// INIT
// ============================================================
async function init() {
  // Load inline data (no fetch needed — works from file:// protocol)
  VOCAB = VOCAB_INLINE.map(v => ({japanese: v.j, english: v.e}));
  SENTENCES = SENT_INLINE.map(s => ({sentence: s}));
  renderModes();
}

function renderModes() {
  const el = document.getElementById('modes');
  el.innerHTML = MODES.map(m => `
    <button class="mode-btn" onclick="selectMode('${m.id}')">
      <span class="icon" style="font-family:'Noto Sans JP',sans-serif">${m.icon}</span>
      <span class="label">${m.label}</span>
      <span class="count">${typeof m.count === 'number' ? m.count + ' items' : m.count + ' items'}</span>
    </button>
  `).join('');
}

function selectMode(mode) {
  currentMode = mode;
  document.querySelectorAll('.mode-btn').forEach((b,i) => {
    b.classList.toggle('active', MODES[i].id === mode);
  });
  renderFilters();
  startQuiz();
}

function renderFilters() {
  const el = document.getElementById('filters');
  let filters = [{id:'all', label:'All'}];

  if (currentMode && currentMode.startsWith('kanji')) {
    filters.push(
      {id:'numbers', label:'Numbers'},
      {id:'time', label:'Time'},
      {id:'people', label:'People'},
      {id:'nature', label:'Nature'},
      {id:'directions', label:'Directions'},
      {id:'places', label:'Places'},
      {id:'school', label:'School'},
      {id:'actions', label:'Actions'},
      {id:'adjectives', label:'Adjectives'},
    );
  } else if (currentMode && currentMode.includes('vocab')) {
    filters.push(
      {id:'hiragana', label:'Hiragana words'},
      {id:'katakana', label:'Katakana words'},
    );
  } else if (currentMode && currentMode.startsWith('grammar')) {
    filters.push(
      {id:'L1', label:'Lesson 1'},
      {id:'L2', label:'Lesson 2'},
      {id:'L3', label:'Lesson 3'},
      {id:'L4', label:'Lesson 4'},
      {id:'L5', label:'Lesson 5'},
      {id:'L6', label:'Lesson 6'},
      {id:'L7', label:'Lesson 7'},
      {id:'L8', label:'Lesson 8'},
      {id:'L9', label:'Lesson 9'},
      {id:'L10', label:'Lesson 10'},
    );
  }

  el.innerHTML = filters.map(f => `
    <button class="filter-btn ${f.id === currentFilter ? 'active' : ''}" onclick="setFilter('${f.id}')">${f.label}</button>
  `).join('');
}

function setFilter(f) {
  currentFilter = f;
  renderFilters();
  startQuiz();
}

// ============================================================
// KANJI CATEGORIES
// ============================================================
const KANJI_CATS = {
  numbers: k => ['One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Hundred','Thousand','Ten thousand','Yen','Number/turn'].some(w => k.en.includes(w)),
  time: k => ['Day','Month','Year','Time','Hour','Interval','Week','Now','Morning','Daytime','Night','Past','Come/Next','Before','After','Every','Noon'].some(w => k.en.includes(w)),
  people: k => ['Person','I/','Name','Friend','House','Family','brother','sister','Self','Introduce','Clan'].some(w => k.en.includes(w)),
  nature: k => ['Mountain','River','Water','Fire','Earth','Tree','Flower','Sky','Rain','Heaven','Weather','Spirit','Rice field','Empty'].some(w => k.en.includes(w)),
  directions: k => ['North','South','East','West','Right','Left','Up','Down','Outside','Inside','Middle','Near','Far'].some(w => k.en.includes(w)),
  places: k => ['Country','Town','Shop','Station','Garden','Park','Roof','Institution','Public','Company','Shrine','Meet','Store'].some(w => k.en.includes(w)),
  school: k => ['Study','School','Life','Born','Student','Teacher','Previous','Character','Letter','Chinese','Test','Examine','Book','Write','Read','Language','Hear','Listen','Talk','Story','Origin','Word'].some(w => k.en.includes(w)),
  actions: k => ['Go','Return','Enter','Exit','See','Buy','Eat','Drink','Walk','Run','Rest','Use','Serve','Work','Thing','Roll','Turn','Put','Look','Do'].some(w => k.en.includes(w)),
  adjectives: k => ['Big','Small','Long','Short','High','Expensive','Cheap','Safe','Many','Few','New','Old','Wide','Strong','Bright','Dark','White','Red','Blue','Black','Exist','Have','Fun','Music','Little'].some(w => k.en.includes(w)),
};

function getFilteredKanji() {
  if (currentFilter === 'all') return [...KANJI];
  const fn = KANJI_CATS[currentFilter];
  return fn ? KANJI.filter(fn) : [...KANJI];
}

function getFilteredVocab() {
  if (currentFilter === 'katakana') return VOCAB.filter(v => /^[\u30A0-\u30FF\u30FC]+$/.test(v.japanese.trim()));
  if (currentFilter === 'hiragana') return VOCAB.filter(v => /^[\u3040-\u309F\u30FC（）～・]+$/.test(v.japanese.replace(/\s/g,'').trim()));
  return [...VOCAB];
}

function getFilteredGrammar() {
  if (currentFilter === 'all') return [...GRAMMAR];
  const lessonNum = parseInt(currentFilter.replace('L', ''));
  return GRAMMAR.filter(g => g.lesson === lessonNum);
}

// ============================================================
// QUIZ LOGIC
// ============================================================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz() {
  score = 0; streakCount = 0; maxStreak = 0; currentQ = 0; answered = false; missed = [];
  document.getElementById('score').textContent = '0';
  document.getElementById('streak').textContent = '0';
  document.getElementById('results-screen').classList.remove('show');
  document.getElementById('quiz-card').style.display = 'flex';

  switch(currentMode) {
    case 'kanji-meaning':
    case 'meaning-kanji':
    case 'kanji-reading':
      buildKanjiQuestions();
      break;
    case 'vocab-meaning':
    case 'meaning-vocab':
      buildVocabQuestions();
      break;
    case 'sentence-fill':
      buildSentenceQuestions();
      break;
    case 'grammar-pattern':
    case 'grammar-meaning':
      buildGrammarQuestions();
      break;
  }

  totalQuestions = questions.length;
  showQuestion();
}

function buildKanjiQuestions() {
  const pool = shuffle(getFilteredKanji());
  const count = Math.min(pool.length, 20);
  questions = pool.slice(0, count).map(k => {
    const allKanji = getFilteredKanji();
    let distractors;

    if (currentMode === 'kanji-meaning') {
      distractors = shuffle(allKanji.filter(x => x.k !== k.k)).slice(0, 3).map(x => x.en);
      return {type:'mc', display:k.k, displayClass:'kanji', prompt:'What does this kanji mean?', hint:`${k.on} / ${k.kun}`.replace(/ \/ $/,''), answer:k.en, options:shuffle([k.en, ...distractors]), detail:`${k.k} (${k.on}${k.kun?' / '+k.kun:''}) = ${k.en}`};
    } else if (currentMode === 'meaning-kanji') {
      distractors = shuffle(allKanji.filter(x => x.k !== k.k)).slice(0, 3).map(x => x.k);
      return {type:'mc', display:k.en, displayClass:'vocab', prompt:'Which kanji matches this meaning?', hint:'', answer:k.k, options:shuffle([k.k, ...distractors]), optionClass:'kanji-option', detail:`${k.en} = ${k.k} (${k.on})`};
    } else {
      const reading = k.kun || k.on;
      distractors = shuffle(allKanji.filter(x => x.k !== k.k)).slice(0, 3).map(x => x.kun || x.on);
      return {type:'mc', display:k.k, displayClass:'kanji', prompt:'What is the reading of this kanji?', hint:k.en, answer:reading, options:shuffle([reading, ...distractors]), detail:`${k.k} = ${reading} (${k.en})`};
    }
  });
}

function buildVocabQuestions() {
  const pool = shuffle(getFilteredVocab());
  const count = Math.min(pool.length, 20);
  questions = pool.slice(0, count).map(v => {
    const allVocab = getFilteredVocab();
    let distractors;

    if (currentMode === 'vocab-meaning') {
      distractors = shuffle(allVocab.filter(x => x.japanese !== v.japanese)).slice(0, 3).map(x => x.english);
      return {type:'mc', display:v.japanese, displayClass:'vocab', prompt:'What does this word mean?', hint:'', answer:v.english, options:shuffle([v.english, ...distractors]), detail:`${v.japanese} = ${v.english}`};
    } else {
      distractors = shuffle(allVocab.filter(x => x.japanese !== v.japanese)).slice(0, 3).map(x => x.japanese);
      return {type:'mc', display:v.english, displayClass:'vocab', prompt:'Which is the correct Japanese word?', hint:'', answer:v.japanese, options:shuffle([v.japanese, ...distractors]), detail:`${v.english} = ${v.japanese}`};
    }
  });
}

function buildSentenceQuestions() {
  const pool = shuffle(SENTENCES).slice(0, 60);
  questions = [];

  for (const s of pool) {
    const words = s.sentence.split(/\s+/).filter(w => w.length >= 2);
    if (words.length < 3) continue;

    const blankIdx = Math.floor(Math.random() * words.length);
    const blankWord = words[blankIdx];
    const display = words.map((w,i) => i === blankIdx ? '＿＿＿' : w).join(' ');

    // Find distractors from other sentences
    const otherWords = shuffle(
      SENTENCES.flatMap(x => x.sentence.split(/\s+/).filter(w => w.length >= 2 && w !== blankWord))
    ).slice(0, 3);

    if (otherWords.length < 3) continue;

    questions.push({
      type: 'mc',
      display: display,
      displayClass: 'sentence',
      prompt: 'Fill in the blank:',
      hint: '',
      answer: blankWord,
      options: shuffle([blankWord, ...otherWords]),
      detail: s.sentence
    });

    if (questions.length >= 20) break;
  }
}

function buildGrammarQuestions() {
  const pool = shuffle(getFilteredGrammar());
  const count = Math.min(pool.length, 20);
  const allGrammar = getFilteredGrammar();

  questions = pool.slice(0, count).map(g => {
    if (currentMode === 'grammar-pattern') {
      // Show example sentence, pick the grammar rule name
      const distractors = shuffle(allGrammar.filter(x => x.title !== g.title)).slice(0, 3).map(x => x.title);
      return {
        type: 'mc',
        display: g.example,
        displayClass: 'sentence',
        prompt: 'Which grammar pattern is used here?',
        hint: `Lesson ${g.lesson}`,
        answer: g.title,
        options: shuffle([g.title, ...distractors]),
        detail: `${g.title}\nPattern: ${g.pattern}\n${g.example} — ${g.meaning}`
      };
    } else {
      // Show Japanese example, pick the English meaning
      const distractors = shuffle(allGrammar.filter(x => x.meaning !== g.meaning)).slice(0, 3).map(x => x.meaning);
      return {
        type: 'mc',
        display: g.example,
        displayClass: 'sentence',
        prompt: 'What does this sentence mean?',
        hint: `${g.title} (Lesson ${g.lesson})`,
        answer: g.meaning,
        options: shuffle([g.meaning, ...distractors]),
        detail: `${g.example}\n${g.meaning}\nGrammar: ${g.title}`
      };
    }
  });
}

function showQuestion() {
  if (currentQ >= questions.length) { showResults(); return; }

  const q = questions[currentQ];
  answered = false;

  document.getElementById('q-num').textContent = `Question ${currentQ + 1} of ${questions.length}`;
  document.getElementById('q-progress').textContent = `${currentQ + 1}/${questions.length}`;
  document.getElementById('progress-bar').style.width = `${(currentQ / questions.length) * 100}%`;
  document.getElementById('q-prompt').textContent = q.prompt;

  const textEl = document.getElementById('q-text');
  textEl.className = 'question-text ' + q.displayClass + ' pop-in';
  textEl.textContent = q.display;

  document.getElementById('q-hint').textContent = q.hint || '';

  const fb = document.getElementById('feedback');
  fb.className = 'feedback';
  document.getElementById('next-btn').classList.remove('show');

  if (q.type === 'mc') {
    document.getElementById('text-input-area').style.display = 'none';
    const optEl = document.getElementById('options');
    optEl.style.display = 'grid';
    optEl.innerHTML = q.options.map((opt, i) => `
      <button class="option-btn" onclick="checkAnswer(this, ${i})" data-idx="${i}"
        style="${q.optionClass === 'kanji-option' ? 'font-size:36px;font-family:Noto Sans JP,sans-serif;' : ''}">
        <span style="opacity:0.4;margin-right:8px;font-size:12px;">${i+1}</span> ${opt}
      </button>
    `).join('');
  } else {
    document.getElementById('options').style.display = 'none';
    document.getElementById('text-input-area').style.display = 'block';
    const input = document.getElementById('answer-input');
    input.value = '';
    input.className = '';
    input.focus();
  }
}

function checkAnswer(btn, idx) {
  if (answered) return;
  answered = true;

  const q = questions[currentQ];
  const selected = q.options[idx];
  const isCorrect = selected === q.answer;

  document.querySelectorAll('.option-btn').forEach(b => b.classList.add('disabled'));

  if (isCorrect) {
    btn.classList.add('correct');
    score++;
    streakCount++;
    if (streakCount > maxStreak) maxStreak = streakCount;
    showFeedback(true, q.detail);
  } else {
    btn.classList.add('wrong');
    streakCount = 0;
    // Highlight correct answer
    document.querySelectorAll('.option-btn').forEach((b, bIdx) => {
      if (q.options[bIdx] === q.answer) {
        b.classList.add('show-correct');
      }
    });
    missed.push(q);
    showFeedback(false, q.detail);
  }

  document.getElementById('score').textContent = score;
  document.getElementById('streak').textContent = streakCount;
  document.getElementById('next-btn').classList.add('show');
}

function checkTypedAnswer() {
  if (answered) return;
  const q = questions[currentQ];
  const input = document.getElementById('answer-input');
  const val = input.value.trim();

  if (!val) return;
  answered = true;

  const isCorrect = val === q.answer || val.toLowerCase() === q.answer.toLowerCase();
  if (isCorrect) {
    input.classList.add('correct');
    score++;
    streakCount++;
    if (streakCount > maxStreak) maxStreak = streakCount;
    showFeedback(true, q.detail);
  } else {
    input.classList.add('wrong');
    streakCount = 0;
    missed.push(q);
    showFeedback(false, `Correct answer: ${q.answer}\n${q.detail}`);
  }

  document.getElementById('score').textContent = score;
  document.getElementById('streak').textContent = streakCount;
  document.getElementById('next-btn').classList.add('show');
}

function showFeedback(correct, detail) {
  const fb = document.getElementById('feedback');
  fb.className = `feedback show ${correct ? 'correct' : 'wrong'}`;
  fb.innerHTML = `
    <div>${correct ? 'Correct!' : 'Wrong!'}</div>
    <div class="detail">${detail}</div>
  `;
}

function nextQuestion() {
  currentQ++;
  showQuestion();
}

function showResults() {
  document.getElementById('quiz-card').style.display = 'none';
  const rs = document.getElementById('results-screen');
  rs.classList.add('show');

  const pct = Math.round((score / questions.length) * 100);
  document.getElementById('results-score').textContent = pct + '%';
  document.getElementById('r-correct').textContent = score;
  document.getElementById('r-wrong').textContent = questions.length - score;
  document.getElementById('r-total').textContent = questions.length;

  document.getElementById('progress-bar').style.width = '100%';

  if (missed.length > 0) {
    document.getElementById('missed-list').style.display = 'block';
    document.getElementById('missed-items').innerHTML = missed.map(q => `
      <div class="missed-item">
        <span class="jp">${q.display}</span>
        <span class="en">${q.answer}</span>
      </div>
    `).join('');
  } else {
    document.getElementById('missed-list').style.display = 'none';
  }
}

function restartQuiz() { startQuiz(); }
function backToMenu() {
  currentMode = null;
  currentFilter = 'all';
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('results-screen').classList.remove('show');
  document.getElementById('quiz-card').style.display = 'flex';
  document.getElementById('q-num').textContent = '';
  document.getElementById('q-prompt').textContent = 'Select a quiz mode above to begin';
  document.getElementById('q-text').textContent = '';
  document.getElementById('q-text').className = 'question-text';
  document.getElementById('q-hint').textContent = '';
  document.getElementById('options').innerHTML = '';
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('next-btn').classList.remove('show');
  document.getElementById('q-progress').textContent = '';
  document.getElementById('progress-bar').style.width = '0';
  document.getElementById('filters').innerHTML = '';
}

// ============================================================
// KEYBOARD SHORTCUTS
// ============================================================
document.addEventListener('keydown', e => {
  if (e.key >= '1' && e.key <= '4' && !answered) {
    const btns = document.querySelectorAll('.option-btn');
    const idx = parseInt(e.key) - 1;
    if (btns[idx]) { btns[idx].click(); }
  }
  if (e.key === 'Enter' && !answered && document.getElementById('text-input-area').style.display !== 'none') {
    e.preventDefault();
    checkTypedAnswer();
  } else if ((e.key === 'Enter' || e.key === ' ') && answered) {
    e.preventDefault();
    nextQuestion();
  }
});

// ============================================================
// INLINE VOCAB + SENTENCE DATA
// ============================================================
const VOCAB_INLINE = [
  {j:"はじめまして",e:"Nice to meet you"},
  {j:"こんにちは",e:"Hello"},
  {j:"あ",e:"Ah"},
  {j:"どうぞよろしくおねがいします",e:"Pleased to meet you"},
  {j:"そうですか",e:"I see"},
  {j:"すみません",e:"Excuse me"},
  {j:"はい",e:"Yes"},
  {j:"いいえ",e:"No"},
  {j:"～さん",e:"Mr./Ms."},
  {j:"わたし",e:"I"},
  {j:"あのひと",e:"That person"},
  {j:"だれですか",e:"Who are you? / Who are they?"},
  {j:"かた",e:"Person (polite)"},
  {j:"こちら",e:"This (person, polite)"},
  {j:"がくせい",e:"Student"},
  {j:"だいがくせい",e:"University student"},
  {j:"かいしゃいん",e:"Company employee, office worker"},
  {j:"きょうし",e:"Teacher"},
  {j:"せんせい",e:"Teacher (respectful title)"},
  {j:"おくに",e:"Country"},
  {j:"どちら",e:"Which / Where (polite)"},
  {j:"にほん",e:"Japan"},
  {j:"がっこう",e:"School"},
  {j:"にほんご",e:"Japanese (language)"},
  {j:"にほんじん",e:"Japanese (nationality)"},
  {j:"おしごと",e:"Work, Job"},
  {j:"おはようございます",e:"Good Morning"},
  {j:"こんばんは",e:"Good Evening"},
  {j:"さようなら",e:"Good Bye"},
  {j:"おやすみなさい",e:"Good night"},
  {j:"しつれいします",e:"Sorry to be leaving before you"},
  {j:"おつかれさまでした",e:"Good job / Good work / Thanks for your hard work"},
  {j:"いってらっしゃい",e:"Off you go / See you later"},
  {j:"いってきます",e:"I'm off / I'm going"},
  {j:"どうぞ",e:"Here you are"},
  {j:"ありがとうございます",e:"Thank you"},
  {j:"ごめんなさい",e:"I'm sorry"},
  {j:"いいてんきですね",e:"The weather is nice, isn't it?"},
  {j:"そうですね",e:"That's right / Yes it is"},
  {j:"そうです",e:"That's right"},
  {j:"え",e:"Sorry? / Huh?"},
  {j:"もういちど",e:"One more time"},
  {j:"おねがいします",e:"Please"},
  {j:"あさ",e:"Morning"},
  {j:"ひる",e:"Daytime"},
  {j:"よる",e:"Night"},
  {j:"てんき",e:"Weather"},
  {j:"あめ",e:"Rain"},
  {j:"あつい",e:"Hot"},
  {j:"さむい",e:"Cold"},
  {j:"ゆっくり",e:"Slowly"},
  {j:"えいご",e:"English"},
  {j:"きます・きました",e:"Come from / Came from"},
  {j:"のみます",e:"Drink"},
  {j:"たべます",e:"Eat"},
  {j:"すきです",e:"Like"},
  {j:"せんしゅう",e:"Last week"},
  {j:"きょねん",e:"Last year"},
  {j:"～がつ",e:"Month (counter)"},
  {j:"ああ",e:"Ah"},
  {j:"あのう",e:"Um / Excuse me"},
  {j:"わあ",e:"Wow"},
  {j:"これ",e:"This"},
  {j:"コーヒー",e:"Coffee"},
  {j:"あまいもの",e:"Sweets"},
  {j:"ケーキ",e:"Cake"},
  {j:"クッキー",e:"Cookie"},
  {j:"チョコレート",e:"Chocolate"},
  {j:"おさけ",e:"Alcohol"},
  {j:"ビール",e:"Beer"},
  {j:"ワイン",e:"Wine"},
  {j:"にほんしゅ",e:"Sake, Japanese rice wine"},
  {j:"しょうちゅう",e:"Shochu (Japanese white distilled liquor)"},
  {j:"てんいん",e:"Clerk, Staff"},
  {j:"いらっしゃいませ",e:"Welcome (greeting when entering a shop)"},
  {j:"ぜんぶで",e:"Altogether, In total"},
  {j:"じゃあ",e:"Okay, Well"},
  {j:"～にします",e:"Have/take this (one)"},
  {j:"ハンバーガー",e:"Hamburger"},
  {j:"チーズバーガー",e:"Cheese Burger"},
  {j:"ポテト",e:"French Fries"},
  {j:"サンドイッチ",e:"Sandwich"},
  {j:"おにぎり",e:"Rice Ball"},
  {j:"プリン",e:"Pudding"},
  {j:"アイスクリーム",e:"Ice Cream"},
  {j:"コロッケ",e:"Croquette"},
  {j:"ドーナッツ",e:"Donut"},
  {j:"ポップコーン",e:"Popcorn"},
  {j:"オレンジジュース",e:"Orange Juice"},
  {j:"こうちゃ",e:"Black Tea"},
  {j:"コーラ",e:"Coke, Coca Cola"},
  {j:"りんご",e:"Apple"},
  {j:"みかん",e:"Mandarin Orange"},
  {j:"レモン",e:"Lemon"},
  {j:"パイナップル",e:"Pineapple"},
  {j:"メロン",e:"Melon"},
  {j:"はな",e:"Flower"},
  {j:"シャツ",e:"Shirt"},
  {j:"いす",e:"Chair"},
  {j:"テレビ",e:"Television"},
  {j:"みず",e:"Water"},
  {j:"ほん",e:"Book"},
  {j:"くるま",e:"Car"},
  {j:"かばん",e:"Bag"},
  {j:"ボール",e:"Ball"},
  {j:"コップ",e:"Cup"},
  {j:"つくえ",e:"Desk"},
  {j:"くつ",e:"Shoes"},
  {j:"うりば",e:"Counter / Sales section"},
  {j:"～かい",e:"Floor"},
  {j:"なんがい",e:"Which floor"},
  {j:"ビジネスシューズ",e:"Business shoes"},
  {j:"スニーカー",e:"Sneakers"},
  {j:"くつした",e:"Socks"},
  {j:"セーター",e:"Sweater"},
  {j:"かさ",e:"Umbrella"},
  {j:"ぼうし",e:"Hat"},
  {j:"ネクタイ",e:"Necktie"},
  {j:"めがね",e:"Glasses"},
  {j:"とけい",e:"Watch"},
  {j:"あちら",e:"Over there (polite)"},
  {j:"となり",e:"Next to"},
  {j:"まえ",e:"In front, Before"},
  {j:"うしろ",e:"Behind"},
  {j:"ちか",e:"Basement"},
  {j:"しょくひん",e:"Food"},
  {j:"パン",e:"Bread"},
  {j:"たまご",e:"Egg"},
  {j:"やさい",e:"Vegetables"},
  {j:"にく",e:"Meat"},
  {j:"ぎゅうにゅう",e:"Milk"},
  {j:"さかな",e:"Fish"},
  {j:"くだもの",e:"Fruit"},
  {j:"ぶどう",e:"Grapes"},
  {j:"バナナ",e:"Banana"},
  {j:"ちゅうしゃじょう",e:"Parking Lot"},
  {j:"わかりました",e:"Okay, I see, Got it"},
  {j:"どうも",e:"Thanks"},
  {j:"トイレ",e:"Toilet, Bathroom"},
  {j:"かいだん",e:"Stairs"},
  {j:"くろ・くろい",e:"Black"},
  {j:"しろ・しろい",e:"White"},
  {j:"あか・あかい",e:"Red"},
  {j:"ちゃいろ・ちゃいろい",e:"Brown"},
  {j:"きいろ・きいろい",e:"Yellow"},
  {j:"あお・あおい",e:"Blue"},
  {j:"いろ",e:"Color"},
  {j:"おおきい",e:"Big"},
  {j:"ちいさい",e:"Small"},
  {j:"ながい",e:"Long"},
  {j:"みじかい",e:"Short"},
  {j:"おもい",e:"Heavy"},
  {j:"かるい",e:"Light"},
  {j:"たかい",e:"Expensive"},
  {j:"やすい",e:"Cheap"},
  {j:"おいしい",e:"Delicious"},
  {j:"おもしろい",e:"Interesting, Funny"},
  {j:"みせてください",e:"Please show me"},
  {j:"どうですか",e:"How about...?"},
  {j:"ちょうどいいです",e:"It's just right"},
  {j:"いいですね",e:"That's good / It's good"},
  {j:"もうすこし",e:"A little more"},
  {j:"ちょっと",e:"A little"},
  {j:"また",e:"Again"},
  {j:"タオル",e:"Towel"},
  {j:"パソコン",e:"Computer"},
  {j:"じてんしゃ",e:"Bicycle"},
  {j:"ゲーム",e:"Game"},
  {j:"ジャケット",e:"Jacket"},
  {j:"うみ",e:"Sea"},
  {j:"ひと",e:"Person"},
  {j:"びよういん",e:"Beauty Clinic"},
  {j:"いきます",e:"Go"},
  {j:"みます",e:"See, Watch"},
  {j:"でんしゃ",e:"Train"},
  {j:"バス",e:"Bus"},
  {j:"ちかてつ",e:"Subway"},
  {j:"バイク",e:"Bike"},
  {j:"タクシー",e:"Taxi"},
  {j:"しんかんせん",e:"Bullet Train"},
  {j:"あるいて",e:"Walk (on foot)"},
  {j:"うち",e:"House"},
  {j:"えき",e:"Station"},
  {j:"かいしゃ",e:"Company"},
  {j:"ここ",e:"Here"},
  {j:"にちようび",e:"Sunday"},
  {j:"どようび",e:"Saturday"},
  {j:"らいしゅう",e:"Next Week"},
  {j:"まいにち",e:"Every day"},
  {j:"きょう",e:"Today"},
  {j:"～じ",e:"O'clock"},
  {j:"～ふん・～ぷん",e:"Minute(s)"},
  {j:"ぐらい",e:"About (approximate)"},
  {j:"えいが",e:"Movie"},
  {j:"ゆき",e:"Snow"},
  {j:"バスてい",e:"Bus Stop"},
  {j:"ゆうびんきょく",e:"Post Office"},
  {j:"～や",e:"Shop"},
  {j:"ほんや",e:"Bookstore"},
  {j:"スーパー",e:"Supermarket"},
  {j:"コンビニ",e:"Convenience Store"},
  {j:"ぎんこう",e:"Bank"},
  {j:"はなや",e:"Flower Shop"},
  {j:"カフェ",e:"Cafe"},
  {j:"こうえん",e:"Park"},
  {j:"びょういん",e:"Hospital"},
  {j:"デパート",e:"Departmental Store"},
  {j:"おんなの ひと",e:"Woman"},
  {j:"うんてんしゅ",e:"Driver"},
  {j:"この ちかく",e:"Nearby"},
  {j:"むかい",e:"Opposite"},
  {j:"つぎの",e:"Next"},
  {j:"ぼうえき",e:"Trade"},
  {j:"いま",e:"Now"},
  {j:"～はん",e:"Half past"},
  {j:"～ばん",e:"Number"},
  {j:"えっと",e:"Um"},
  {j:"ええ",e:"Yes, Yeah"},
  {j:"～ばんせん",e:"Platform number"},
  {j:"のります",e:"Ride, Get on"},
  {j:"ひこうき",e:"Airplane"},
  {j:"えきいん",e:"Station staff"},
  {j:"かかります",e:"Take (time)"},
  {j:"～かん",e:"For (duration)"},
  {j:"もしもし",e:"Hello (on the phone)"},
  {j:"これから",e:"From now"},
  {j:"いえ",e:"House"},
  {j:"コピーき",e:"Photocopier, Copy machine"},
  {j:"ロビー",e:"Lobby"},
  {j:"べんきょうします",e:"Study"},
  {j:"おきます",e:"Wake up"},
  {j:"ねます",e:"Sleep"},
  {j:"かえります",e:"Go home"},
  {j:"かきます",e:"Write"},
  {j:"ききます",e:"Listen, Hear"},
  {j:"よみます",e:"Read"},
  {j:"かいます",e:"Buy"},
  {j:"きます",e:"Wear"},
  {j:"はなします",e:"Talk, Speak"},
  {j:"りょうりをつくります",e:"Cook"},
  {j:"しゃしんをとります",e:"Take a picture"},
  {j:"かいものします",e:"Go shopping"},
  {j:"さんぽします",e:"Go for a walk"},
  {j:"およぎます",e:"Swim"},
  {j:"サッカー",e:"Soccer"},
  {j:"します",e:"Do, Play"},
  {j:"ジョギングします",e:"Jog"},
  {j:"シャワーをあびます",e:"Take a shower"},
  {j:"ショッピング",e:"Shopping"},
  {j:"ダンス",e:"Dance"},
  {j:"れんしゅう",e:"Practice"},
  {j:"つり",e:"Fishing"},
  {j:"いつも",e:"Always"},
  {j:"まいあさ",e:"Every morning"},
  {j:"まいしゅう",e:"Every week"},
  {j:"あした",e:"Tomorrow"},
  {j:"ごぜん",e:"AM"},
  {j:"ごご",e:"PM"},
  {j:"しゅうまつ",e:"Weekend"},
  {j:"ひ",e:"Day"},
  {j:"はやい",e:"Early"},
  {j:"そのあと",e:"After that"},
  {j:"きもちがいいです",e:"Feel good"},
  {j:"またあとで",e:"See you later"},
  {j:"がんばってください",e:"Please do your best"},
  {j:"よく",e:"Often"},
  {j:"カード",e:"Card"},
  {j:"おんがく",e:"Music"},
  {j:"しゃしん",e:"Picture"},
  {j:"ばんごはん",e:"Dinner"},
  {j:"あさごはん",e:"Breakfast"},
  {j:"アルバイト",e:"Part-time job"},
  {j:"じゅぎょう",e:"Lesson, Class"},
  {j:"やすみ",e:"Day off, Holiday"},
  {j:"みせ",e:"Store"},
  {j:"ジム",e:"Gym"},
  {j:"プール",e:"Pool"},
  {j:"かわ",e:"River"},
  {j:"としょかん",e:"Library"},
  {j:"おべんとう",e:"Lunch box, Packed lunch"},
  {j:"しんぶん",e:"Newspaper"},
  {j:"ともだち",e:"Friend"},
  {j:"おみやげ",e:"Souvenir"},
  {j:"え",e:"Picture"},
  {j:"テスト",e:"Test"},
  {j:"スキー",e:"Ski"},
  {j:"はは",e:"Mother"},
  {j:"せんたくします",e:"Wash, Do the laundry"},
  {j:"でかけます",e:"Go out"},
  {j:"でんわします",e:"Call, Phone"},
  {j:"おんせんにはいります",e:"Go in a hot spring"},
  {j:"いいます",e:"Say"},
  {j:"まえ",e:"Before, Earlier"},
  {j:"きのう",e:"Yesterday"},
  {j:"そうじ",e:"Cleaning"},
  {j:"ギョーザ",e:"Gyoza, Dumplings"},
  {j:"ギョーザのかわ",e:"Dumpling skin"},
  {j:"カレー",e:"Curry"},
  {j:"ほうちょう",e:"Knife"},
  {j:"おさら",e:"Plate, Dish"},
  {j:"はさみ",e:"Scissors"},
  {j:"きります",e:"Cut"},
  {j:"もっていきます",e:"Take"},
  {j:"よやくします",e:"Reserve, Book"},
  {j:"あらいます",e:"Wash"},
  {j:"ふきます",e:"Wipe, Dry"},
  {j:"しめます",e:"Close"},
  {j:"けします",e:"Turn off"},
  {j:"はっぴょうします",e:"Make a presentation"},
  {j:"なか",e:"Inside"},
  {j:"そと",e:"Outside"},
  {j:"よこ",e:"Side, Horizontal"},
  {j:"みぎ",e:"Right"},
  {j:"ひだり",e:"Left"},
  {j:"うえ",e:"Top"},
  {j:"した",e:"Down"},
  {j:"わたしたち",e:"We"},
  {j:"ひきだし",e:"Drawer"},
  {j:"のみもの",e:"Drink"},
  {j:"きっぷ",e:"Ticket"},
  {j:"ホテル",e:"Hotel"},
  {j:"まど",e:"Window"},
  {j:"でんき",e:"Power, Lights"},
  {j:"はっぴょう",e:"Presentation"},
  {j:"アニメ",e:"Anime"},
  {j:"はなし",e:"Talk"},
  {j:"カレンダー",e:"Calendar"},
  {j:"カメラ",e:"Camera"},
  {j:"はこ",e:"Box"},
  {j:"レジ",e:"Register"},
  {j:"かご",e:"Basket"},
  {j:"ほんだな",e:"Bookshelf"},
  {j:"スタンド",e:"Stand"},
  {j:"テーブル",e:"Table"},
  {j:"ごみぶくろ",e:"Trash bag"},
  {j:"まるい",e:"Round"},
  {j:"こんどの",e:"Next time"},
  {j:"いっしょに",e:"Together"},
  {j:"ごちそうさまでした",e:"Thank you for the food"},
  {j:"さあ",e:"Well, Okay"},
  {j:"みなさん",e:"Everyone, Everybody"},
  {j:"がんばりましょう",e:"Let's do one's best"},
  {j:"おなかがすきました",e:"Be hungry"},
  {j:"なんめいさま",e:"How many people"},
  {j:"では",e:"Okay, Well"},
  {j:"こちら",e:"This way"},
  {j:"ほんとうです",e:"Really"},
  {j:"きんえんせき",e:"Non-smoking seat"},
  {j:"きつえんせき",e:"Smoking seat"},
  {j:"はなび",e:"Fireworks"},
  {j:"おでかけ",e:"Going out"},
  {j:"くうこう",e:"Airport"},
  {j:"ヨガ",e:"Yoga"},
  {j:"むかえます",e:"Pick up"},
  {j:"~にん",e:"People"},
  {j:"いろいろ",e:"Many things, Various things"},
  {j:"それと",e:"And"},
  {j:"そうですね",e:"Let's see"},
  {j:"しょうしょうおまちください",e:"One moment, please"},
  {j:"かしこまりました",e:"Understood"},
  {j:"おちゃ",e:"Green tea"},
  {j:"ストロベリー",e:"Strawberry"},
  {j:"ランチ",e:"Lunch"},
  {j:"チキン",e:"Chicken"},
  {j:"アボカド",e:"Avocado"},
  {j:"てんぷら",e:"Tempura"},
  {j:"スパゲッティー",e:"Spaghetti"},
  {j:"とうふ",e:"Tofu"},
  {j:"ハンバーガー",e:"Hamburger"},
  {j:"カレーライス",e:"Curry and rice"},
  {j:"ピザ",e:"Pizza"},
  {j:"ラーメン",e:"Ramen"},
  {j:"そば",e:"Soba, Buckwheat noodles"},
  {j:"メニュー",e:"Menu"},
  {j:"からい",e:"Spicy"},
  {j:"あまい",e:"Sweet"},
  {j:"すっぱい",e:"Sour"},
  {j:"にがい",e:"Bitter"},
  {j:"しおからい",e:"Salty"},
  {j:"いちご",e:"Strawberry"},
  {j:"わさび",e:"Wasabi"},
  {j:"さとう",e:"Sugar"},
  {j:"ミルク",e:"Milk"},
  {j:"おはし",e:"Chopsticks"},
  {j:"いただきます",e:"Let's eat (said before meals)"},
  {j:"とってください",e:"Pass (please)"},
  {j:"とても",e:"Very, Really"},
  {j:"しょうゆ",e:"Soy sauce"},
  {j:"なつやすみ",e:"Summer holiday"},
  {j:"おかね",e:"Money"},
  {j:"おたんじょうび",e:"Birthday"},
  {j:"りょこうします",e:"Travel"},
  {j:"けっこんします",e:"Get married"},
  {j:"おわります",e:"Finish"},
  {j:"のぼります",e:"Climb"},
  {j:"かります",e:"Rent, Borrow"},
  {j:"とおい",e:"Far"},
  {j:"ちかい",e:"Close, Near"},
  {j:"いい",e:"Good"},
  {j:"わるい",e:"Bad"},
  {j:"あたらしい",e:"New"},
  {j:"ふるい",e:"Old"},
  {j:"おそい",e:"Slow"},
  {j:"たのしい",e:"Fun"},
  {j:"むずかしい",e:"Difficult"},
  {j:"いそがしい",e:"Busy"},
  {j:"いたい",e:"Hurt"},
  {j:"れんきゅう",e:"Long weekend, Long holiday"},
  {j:"おまつり",e:"Festival"},
  {j:"しけん",e:"Test"},
  {j:"にもつ",e:"Luggage, Baggage"},
  {j:"あね",e:"Big sister"},
  {j:"は",e:"Teeth"},
  {j:"へや",e:"Room"},
  {j:"けさ",e:"This morning"},
  {j:"きょうしつ",e:"Classroom"},
  {j:"たいふう",e:"Typhoon"},
  {j:"やま",e:"Mountain"},
  {j:"ダイビング",e:"Diving"},
  {j:"あまり",e:"Not very, Not really (used with negative)"},
  {j:"おおい",e:"A lot, Many"},
  {j:"すくない",e:"Few"},
  {j:"たいへんですね",e:"That sounds tough"},
  {j:"どうしてですか",e:"Why is that?"},
  {j:"ゆうめいな",e:"Famous"},
  {j:"きれいな",e:"Pretty, Clean"},
  {j:"げんきな",e:"Lively, Energetic"},
  {j:"しんせつな",e:"Nice, Friendly"},
  {j:"へんな",e:"Strange"},
  {j:"べんりな",e:"Convenient"},
  {j:"たいせつな",e:"Important"},
  {j:"ひまな",e:"Free (not busy)"},
  {j:"たいへんな",e:"Difficult, Hard, Tough"},
  {j:"かんたんな",e:"Easy, Simple"},
  {j:"にぎやかな",e:"Lively"},
  {j:"しずかな",e:"Quiet"},
  {j:"すきな",e:"Favourite"},
  {j:"きらいな",e:"Hate"},
  {j:"じょうずな",e:"Good at"},
  {j:"へたな",e:"Bad at"},
  {j:"ところ",e:"Place"},
  {j:"まち",e:"Town"},
  {j:"おてら",e:"Temple"},
  {j:"にわ",e:"Yard"},
  {j:"たべもの",e:"Food"},
  {j:"まっちゃ",e:"Powdered green tea"},
  {j:"おかし",e:"Snacks"},
  {j:"かお",e:"Face"},
  {j:"もの",e:"Things"},
  {j:"じかん",e:"Time"},
  {j:"そふ",e:"Grandfather"},
  {j:"プレゼント",e:"Present, Gift"},
  {j:"スポーツ",e:"Sports"},
  {j:"おしろ",e:"Castle"},
  {j:"たてもの",e:"Building"},
  {j:"びじゅうかん",e:"Art museum"},
  {j:"みそかつ",e:"Fried pork cutlet with miso sauce"},
  {j:"たくさん",e:"A lot, Many"},
  {j:"にんきがあります",e:"It's popular"},
  {j:"しゅっちょうします",e:"Make a business trip"},
  {j:"りょこう",e:"Travel, Trip"},
  {j:"パーティー",e:"Party"},
  {j:"コンサート",e:"Concert"},
  {j:"おととい",e:"The day before yesterday"},
  {j:"せんげつ",e:"Last month"},
  {j:"あめがふります",e:"Rain"},
  {j:"ひっこします",e:"Move (house)"},
  {j:"ただいま",e:"I'm back, I'm home"},
  {j:"おかえりなさい",e:"Welcome back (home)"},
  {j:"ひろい",e:"Big, Wide, Spacious"},
  {j:"ゆきまつり",e:"Snow festival"},
  {j:"ジャズ",e:"Jazz"},
  {j:"カラオケ",e:"Karaoke"},
  {j:"バーベキュー",e:"Barbeque"},
  {j:"はなみ",e:"Flower viewing"},
  {j:"かいもの",e:"Shopping"},
  {j:"ゴルフ",e:"Golf"},
  {j:"キャンプ",e:"Camp"},
  {j:"ミュージカル",e:"Musical"},
  {j:"ぼく",e:"I (used by male/boy)"},
  {j:"せつめいします",e:"Explain"},
  {j:"あいます",e:"Meet"},
  {j:"すわります",e:"Sit"},
  {j:"いそぎます",e:"Hurry"},
  {j:"まちます",e:"Wait"},
  {j:"よびます",e:"Call"},
  {j:"あけます",e:"Open"},
  {j:"おります",e:"Get off"},
  {j:"さきに",e:"Ahead, First"},
  {j:"バーベキューたいかい",e:"Barbeque party"},
  {j:"まんが",e:"Japanese comics"},
  {j:"しあい",e:"Match"},
  {j:"のみかい",e:"Drinking party"},
  {j:"こうりゅうパーティー",e:"Cultural exchange party"},
  {j:"うん",e:"Yes (casual)"},
  {j:"ううん",e:"No (casual)"},
  {j:"たのしみ(な)",e:"Exciting"},
  {j:"こんばん",e:"Tonight, This evening"},
  {j:"分かります",e:"Understand, Know"},
  {j:"つきます",e:"Arrive"},
  {j:"じゃがいも",e:"Potato"},
  {j:"バター",e:"Butter"},
  {j:"すじこ",e:"Salted salmon roe"},
  {j:"あつい",e:"Hot"},
  {j:"かたい",e:"Hard"},
  {j:"グラス",e:"Glass"},
  {j:"みんな",e:"Everyone"},
  {j:"スポーツセンター",e:"Sports center"},
  {j:"今週",e:"This week"},
  {j:"あさって",e:"Day after tomorrow"},
  {j:"もうすぐ",e:"Soon"},
  {j:"はやく",e:"Hurry, Quickly"},
  {j:"ほんとうだ",e:"You're right, Oh yeah"},
  {j:"いくら",e:"How much"},
  {j:"もう一つ",e:"One more"},
  {j:"こうりゅうかい",e:"Cultural exchange meeting/party"},
  {j:"たちます",e:"Stand"},
  {j:"なまえ",e:"Name"},
  {j:"しゅくだい",e:"Homework"},
  {j:"だします",e:"Give, Assign"},
  {j:"エアコン",e:"Air Conditioner"},
  {j:"あそびます",e:"Play, Hang out"},
  {j:"うたいます",e:"Sing"},
  {j:"もちます",e:"Carry, Hold"},
  {j:"しにます",e:"Die"},
  {j:"やすみます",e:"Take a holiday, Rest"},
  {j:"かします",e:"Lend"},
  {j:"あるきます",e:"Walk"},
  {j:"あたたかい",e:"Warm"},
  {j:"すずしい",e:"Cool"},
  {j:"どうぶつえん",e:"Zoo"},
  {j:"パンダ",e:"Panda"},
  {j:"すごく",e:"Very"},
  {j:"かわいい",e:"Cute"},
  {j:"えきまえ",e:"In front of station"},
  {j:"レストラン",e:"Restaurant"},
  {j:"スピーチコンテスト",e:"Speech contest"},
  {j:"もうしこみしょ",e:"Application form"},
  {j:"こども",e:"Child"},
  {j:"すてます",e:"Throw away"},
  {j:"プラスチック",e:"Plastic"},
  {j:"なまごみ",e:"Raw garbage"},
  {j:"ごみ",e:"Garbage"},
  {j:"さわります",e:"Touch"},
  {j:"はいります",e:"Enter"},
  {j:"でます",e:"Go out"},
  {j:"ドア",e:"Door"},
  {j:"じしょ",e:"Dictionary"},
  {j:"わすれます",e:"Forget"},
  {j:"ロッカー",e:"Locker"},
  {j:"かぎ",e:"Key"},
  {j:"なくします",e:"Lose"},
  {j:"おなじ",e:"Same"},
  {j:"まちがえます",e:"Make a mistake"},
  {j:"おきます",e:"Put, Place"},
  {j:"おぼえます",e:"Remember, Memorize"},
  {j:"くすり",e:"Medicine"},
  {j:"おおや",e:"Landlord"},
  {j:"げつまつ",e:"End of the month"},
  {j:"やちん",e:"Rent"},
  {j:"はらいます",e:"Pay"},
  {j:"かちょう",e:"Department chief, Section head"},
  {j:"しゃいん",e:"Company employee"},
  {j:"レポート",e:"Report"},
  {j:"ツアー",e:"Tour"},
  {j:"せんたく",e:"Laundry"},
  {j:"つかいます",e:"Use"},
  {j:"きょうかしょ",e:"Textbook"},
  {j:"いれます",e:"Put in"},
  {j:"ボールペン",e:"Ballpoint pen"},
  {j:"えんぴつ",e:"Pencil"},
  {j:"たばこ",e:"Cigarette"},
  {j:"たばこをすいます",e:"Smoke"},
  {j:"とめます",e:"Stop"},
  {j:"わたります",e:"Cross"},
  {j:"うんてんします",e:"Drive"},
  {j:"かんごし",e:"Nurse"},
  {j:"はしります",e:"Run"},
  {j:"でんわ",e:"Telephone, Phone"},
  {j:"コピーします",e:"Copy"},
  {j:"じゅうしょ",e:"Address"},
  {j:"せいねんがっぴ",e:"Date of birth"},
  {j:"でんわばんごう",e:"Phone number"},
  {j:"じかんです",e:"Time's up"},
  {j:"あつめます",e:"Collect, Take"},
  {j:"だめ(な)",e:"Can't, Not allowed"},
  {j:"かたづけます",e:"Clean up"},
  {j:"すぐ",e:"Right away, Quickly"},
  {j:"はじめます",e:"Start"},
  {j:"やめます",e:"Stop, Quit"},
  {j:"おそい",e:"Late"},
  {j:"はじまります",e:"Start (intransitive)"},
  {j:"だいじょうぶ(な)",e:"Okay, No problem"},
  {j:"どうしよう",e:"What should I do?"},
  {j:"まにあいます",e:"Be on time"},
  {j:"グレー",e:"Gray"},
  {j:"スーツ",e:"Suit"},
  {j:"めがねをかけます",e:"Put on glasses"},
  {j:"システム",e:"System"},
  {j:"システムぶ",e:"System Department"},
  {j:"しょうかいします",e:"Introduce"},
  {j:"いいですよ",e:"Sure"},
  {j:"どうりょう",e:"Coworker"},
  {j:"コート",e:"Coat"},
  {j:"Tシャツ",e:"T-shirt"},
  {j:"きもの",e:"Kimono"},
  {j:"かぶります",e:"Wear, Put on (hat)"},
  {j:"ズボン",e:"Pants"},
  {j:"はきます",e:"Wear, Put on (lower body)"},
  {j:"スカート",e:"Skirt"},
  {j:"ブーツ",e:"Boots"},
  {j:"ネクタイをします",e:"Wear a tie"},
  {j:"ベルト",e:"Belt"},
  {j:"ゆびわ",e:"Ring"},
  {j:"ネックレス",e:"Necklace"},
  {j:"ブレスレット",e:"Bracelet"},
  {j:"マフラー",e:"Scarf"},
  {j:"ワンピース",e:"Dress"},
  {j:"ノート",e:"Notebook"},
  {j:"みなみ",e:"South"},
  {j:"りっぱな",e:"Nice, Handsome, Splendid"},
  {j:"うるさい",e:"Noisy, Loud"},
  {j:"ぜひ",e:"Please, By all means"},
  {j:"ビル",e:"Building"},
  {j:"くうき",e:"Air"},
  {j:"きたない",e:"Dirty"},
  {j:"じんこう",e:"Population"},
  {j:"たかい",e:"High, Tall"},
  {j:"せがたかい",e:"Tall (person's height)"},
  {j:"ひくい",e:"Low, Short"},
  {j:"せがひくい",e:"Short (person's height)"},
  {j:"うた",e:"Song"},
  {j:"かみ",e:"Hair"},
  {j:"め",e:"Eye"},
  {j:"ねだん",e:"Price"},
  {j:"テレビ",e:"TV"},
  {j:"コンピューター",e:"Computer"},
  {j:"レストラン",e:"Restaurant"},
  {j:"パン",e:"Bread"},
  {j:"ジュース",e:"Juice"},
  {j:"コーヒー",e:"Coffee"},
  {j:"ホテル",e:"Hotel"},
  {j:"タクシー",e:"Taxi"},
  {j:"バス",e:"Bus"},
  {j:"シャツ",e:"Shirt"},
  {j:"トイレ",e:"Toilet"},
  {j:"エレベーター",e:"Elevator"},
  {j:"カポーツ",e:"Sports"},
  {j:"サッカー",e:"Soccer"},
  {j:"アイスクリーム",e:"Ice cream"},
  {j:"ビール",e:"Beer"},
  {j:"ラジオ",e:"Radio"},
  {j:"デパート",e:"Department Store"},
  {j:"スカート",e:"Skirt"},
  {j:"バイク",e:"Motorbike"},
  {j:"インド",e:"India"},
  {j:"スーパー",e:"Supermarket"},
  {j:"ペン",e:"Pen"},
  {j:"ブルー",e:"Blue"},
  {j:"メガネ",e:"Glasses"},
  {j:"アメリカ",e:"America"},
  {j:"ニュース",e:"News"},
  {j:"ソファ",e:"Sofa"},
  {j:"スマホ",e:"Smartphone"},
  {j:"アルバイト",e:"Part-time job"},
  {j:"カメラ",e:"Camera"},
  {j:"ゲーム",e:"Game"},
  {j:"チョコレート",e:"Chocolate"},
  {j:"ケーキ",e:"Cake"},
  {j:"わたし は インド から きました。",e:"I came from India."},
  {j:"これ は テレビ です。",e:"This is a television."},
  {j:"あした、スーパー へ いきます。",e:"I will go to the supermarket tomorrow."},
  {j:"いま、コーヒー を のみます。",e:"Now, I will drink coffee."},
  {j:"わたし の ペン は ブルー です。",e:"My pen is blue."},
  {j:"かのじょ は アイスクリーム が すき です。",e:"She likes ice cream."},
  {j:"これ は コンピューター の ほん です。",e:"This is a computer book."},
  {j:"せんせい は メガネ を かけて います。",e:"The teacher is wearing glasses."},
  {j:"わたし の ともだち は アメリカじん です。",e:"My friend is American."},
  {j:"けさ、ニュース を みました。",e:"I watched the news this morning."},
  {j:"いぬ が ソファ の うえ に います。",e:"The dog is on the sofa."},
  {j:"にほん の レストラン で ごはん を たべました。",e:"I ate food at a Japanese restaurant."},
  {j:"かれ は サッカー が じょうず です。",e:"He is good at soccer."},
  {j:"わたし は スマホ を つかいます。",e:"I use a smartphone."},
  {j:"あね は アルバイト を しています。",e:"My older sister has a part-time job."},
  {j:"きのう、カメラ で しゃしん を とりました。",e:"Yesterday, I took photos with a camera."},
  {j:"ともだち は ゲーム が だいすき です。",e:"My friend loves games."},
  {j:"いま、エレベーター に のります。",e:"I'm getting on the elevator now."},
  {j:"これ は チョコレート の ケーキ です。",e:"This is a chocolate cake."},
  {j:"わたし は まいにち ニュース を よみます。",e:"I read the news every day."},
  {j:"わたし は いえ に います。",e:"I am at home."},
  {j:"かのじょ は へや で ねます。",e:"She sleeps in the room."},
  {j:"いま ごはん を たべます。",e:"I eat rice/meal now."},
  {j:"あなた は がっこう へ いきます。",e:"You go to school."},
  {j:"あなた は ともだち です か？",e:"Are you a friend?"},
  {j:"おとうさん は くるま に のります。",e:"Father rides in the car."},
  {j:"がっこう で にほんご べんきょう します。",e:"I study Japanese at school."},
  {j:"せんせい は きょうしつ に います。",e:"The teacher is in the classroom."},
  {j:"わたし の つくえ は ここ です。",e:"My desk is here."},
  {j:"きょう は いい てんき です。",e:"Today is nice weather."},
  {j:"あした は こうえん に いきます。",e:"Tomorrow I will go to the park."},
  {j:"いま なんじ です か？",e:"What time is it now?"},
  {j:"それ は なん です か？",e:"What is that?"},
  {j:"どこ に いきます か？",e:"Where are you going?"},
  {j:"なに を たべます か？",e:"What will you eat?"},
];

const SENT_INLINE = [
  "こんにちは。はじめまして。サラです。",
  "あ、はじめまして。タンです。どうぞよろしくおねがいします。",
  "どうぞよろしくおねがいします。",
  "タンさん、おくにはどちらですか。",
  "ベトナムです。",
  "サラさんは？",
  "わたしはフランスです。",
  "そうですか。",
  "タンさん、おしごとは？",
  "わたしはにほんごがっこうの がくせいです。",
  "あ、そうですか。",
  "サラさんもがくせいですか。",
  "いいえ、がくせいじゃありません。",
  "かいしゃいんです。",
  "おはようございます。",
  "いいてんきですね。",
  "そうですね。",
  "がっこうですか。",
  "え？すみません。もういちど、おねがいします。",
  "がっこう？",
  "あ、はい。そうです。",
  "いってらっしゃい。",
  "いってきます。",
  "こんにちは。はじめまして。",
  "どうぞよろしくおねがいします。",
  "あ、はじめまして。たなかです。",
  "よろしくおねがいします。",
  "せんしゅうベトナムからきました。",
  "ベトナムのどちらですか。",
  "ホーチミンです。",
  "ああ、そうですか。",
  "あのう、たなかさんはコーヒーを のみますか。",
  "はい、のみます。すきです。",
  "これ、ベトナムのコーヒーです。どうぞ。",
  "わあ、ありがとうございます。",
  "いらっしゃいませ。",
  "これ、ください。",
  "はい、チーズバーガーですね。いくつですか。",
  "ふたつください。",
  "オレンジジュースもふたつください。",
  "はい。ぜんぶで５６０えんです。",
  "え、すみません。いくらですか。",
  "すみません。",
  "はい。いらっしゃいませ。",
  "くつうりばはどこですか。",
  "くつうりばは４かいです。",
  "ありがとうございます。",
  "すみません。ビジネスシューズはどこにありますか。",
  "ビジネスシューズはあちらです。スニーカーのとなりです。",
  "すみません。あのかばん、みせてください。",
  "しろいかばんですか。",
  "いいえ、くろいのです。",
  "はい。どうぞ。",
  "ちょっとおもいですね。",
  "かるいの、ありませんか。",
  "はい、あります。どうぞ。",
  "あ、これはちいさいですね。",
  "すみません。またきます。",
  "ありがとうございました。",
  "わあ！これ、どこですか。",
  "えびすですよ。",
  "にちようびいきませんか。",
  "はい、いきたいです！",
  "じゃあ、いきましょう！",
  "なんでいきますか。",
  "わたしはでんしゃでいきます。",
  "キムさんは？",
  "わたしはあるいていきます。",
  "え！あるいて？",
  "はい。えびすはうちからあるいて１０ぷんぐらいです。",
  "そうですか。",
  "じゃあ、にちようび。",
  "すみません。",
  "このちかくにバスていはありますか。",
  "あそこにゆうびんきょくがありますね。",
  "あのゆうびんきょくのまえですよ。",
  "あ、ありがとうございます。",
  "あのう、つぎのバスはなんじに きますか。",
  "えっと、３じ１５ふんですよ。",
  "ありがとうございます。",
  "このバスはろっぽんぎへいきますか。",
  "はい、いきますよ。",
  "すみません。",
  "えびすまでいくらですか。",
  "そうですか。",
  "ここからえびすまでどれぐらい かかりますか。",
  "なんばんせんですか。",
  "わかりました。",
  "ありがとうございます。",
  "はい。もしもし。",
  "マリーさん、いまどこにいますか。",
  "いけぶくろ に います。",
  "これから でんしゃ に のります。",
  "おはようございます。",
  "ラマさん、いつもはやいですね。",
  "何じにおきますか。",
  "まいあさ６じから７じまでジョギングします。",
  "そのあと、シャワーをあびます。",
  "きもちがいいですよ。",
  "そうですか。",
  "いいですね。",
  "じゃあ、またあとで。",
  "私はこれから９じまでべんきょうします。",
  "がんばってください。",
  "これ、だれのおべんとうですか。",
  "私のです。",
  "だれがつくりましたか。",
  "私がつくりました。",
  "いのうえさんのは？",
  "ははがつくりました。",
  "まいにちりょうりをしますか。",
  "今はします。",
  "でも、まえはしませんでした。",
  "コンビニでよくおべんとうをかいました。",
  "これ、どうぞ。",
  "まい週つくります。",
  "こんどのどようび いっしょにつくりませんか。",
  "私はやさいをきりますね。",
  "おねがいします。",
  "私たちはギョーザのかわをつくりましょう。",
  "ほうちょうはどこにありますか。",
  "そのひきだしの中にあります。",
  "なかむらさん、それ、ちょっとおおきいです。",
  "すみません。",
  "田中さん、れんきゅうは何をしますか。",
  "きょうとへ行きます。",
  "きょうとでおまつりを見ます。",
  "きょうとはとおいですね。",
  "あまりとおくないです。",
  "しんかんせんで2時間ぐらいですよ。",
  "タンさんはどこか行きますか。",
  "いいえ、どこも行きません。",
  "しけんがありますから、うちでべんきょうします。",
  "たいへんですね。",
  "きょうとはどんなところですか。",
  "ふるいまちです。",
  "おてらがたくさんあります。",
  "ここにしゃしんがありますよ。",
  "それはゆうめいなおてらですね。",
  "きんかくじです。",
  "これ、きれいなにわですね。",
  "これもゆうめいなおてらですか。",
  "いいえ、あまりゆうめいじゃありません。",
  "でも、とてもきれいです。",
  "おいしいたべものもいろいろありますよ。",
  "まっちゃのおかしがにんきがあります。",
  "私も行きたいです。",
  "ただいま。",
  "おかえりなさい。",
  "りょこうはどうでしたか。",
  "たのしかったです。",
  "よかったですね。",
  "でも、てんきがよくなかったです。",
  "あめでしたか。",
  "いいえ、あめはふりませんでした。",
  "しゃしんをとりましたか。",
  "はい、たくさんとりました。",
  "人がおおいですね。",
  "おまつりですか。",
  "とてもにぎやかでした。",
  "これ、おみやげです。",
  "どうぞ。",
  "まっちゃのおかしですね。",
  "ありがとうございます。",
  "あしたはお休みですね。",
  "さようなら。",
  "しゅうまつ何をしますか。",
  "私はタンさんとサッカーをします。",
  "土よう日にジャズのコンサートに行きます。",
  "いいですね。",
  "しゅうまつ何する？",
  "ぼくはタンさんとサッカーする。",
  "私はキムさんといっしょにカラオケに行く。",
  "カラオケ！いいね。",
  "日よう日はバーベキュー大会ですね。",
  "タンさん、行きますか。",
  "はい、行きます。",
  "私も行きます。",
  "たのしみですね。",
  "日よう日、バーベキュー大会だね。",
  "行く？",
  "うん、行く。",
  "私は行かない。",
  "え、行かないの？",
  "どうして？",
  "アルバイトがあるから。",
  "これ、何？",
  "分からない。",
  "何かな。",
  "先生、これ、何ですか。",
  "ああ、それはじゃがいもですよ。",
  "バターといっしょに食べます。",
  "おいしいですよ。",
  "うわあ、はやく食べたいなあ。",
  "あれ、これ、へんだ。",
  "じゃがいもじゃないよ。",
  "そうだね。私のはへんじゃないよ。",
  "タンさん、それもじゃがいもですよ。",
  "あ、ほんとうだ。おいしい。",
  "おはよう。",
  "バーベキュー、行った？",
  "うん、行った。",
  "どうだった？",
  "たのしかった。たくさん食べたよ。",
  "よかったね。",
  "ラマさんもバーベキュー行った？",
  "ううん、ぼくは行かなかった。",
  "友だちとサッカーしたよ。",
  "私はアルバイト。",
  "日よう日だから、いそがしかった。",
  "ああ、たいへんだったね。",
  "きのう、キムさんはアルバイトだった？",
  "ううん、休みだった。",
  "でも、さむかったから、どこも行かなかった。",
  "ぼくはサッカーを見に行ったよ。",
  "ふうん、どうだった？",
  "おもしろかった。いいしあいだった。",
  "私はテレビでゆきまつりを見たよ。",
  "きれいだった。",
  "ああ、ゆきまつり。",
  "見に行きたいね。",
];

// Init
init();
backToMenu();
