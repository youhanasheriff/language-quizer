// ============================================================
// JLPT N5 Reading Passages
// 9 passages covering core N5 topics with comprehension questions
// ============================================================

const PASSAGES = [

  // ──────────────────────────────────────────────
  // 1. Self-Introduction
  // ──────────────────────────────────────────────
  {
    id: "self-intro",
    title: "じこしょうかい",
    titleEn: "Self-Introduction",
    level: "N5",
    text: "はじめまして。わたしはタンです。ベトナムから来（き）ました。今（いま）、東京（とうきょう）に住（す）んでいます。大学（だいがく）の学生（がくせい）です。日本語（にほんご）を勉強（べんきょう）しています。趣味（しゅみ）は写真（しゃしん）です。どうぞよろしくお願（ねが）いします。",
    sentences: [
      {
        jp: "はじめまして。",
        en: "Nice to meet you.",
        words: [
          { word: "はじめまして", reading: "hajimemashite", meaning: "Nice to meet you (first meeting greeting)" }
        ]
      },
      {
        jp: "わたしはタンです。",
        en: "I am Tan.",
        words: [
          { word: "わたし", reading: "watashi", meaning: "I, me" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "タン", reading: "tan", meaning: "Tan (name)" },
          { word: "です", reading: "desu", meaning: "am, is, are (polite copula)" }
        ]
      },
      {
        jp: "ベトナムから来（き）ました。",
        en: "I came from Vietnam.",
        words: [
          { word: "ベトナム", reading: "betonamu", meaning: "Vietnam" },
          { word: "から", reading: "kara", meaning: "from" },
          { word: "来ました", reading: "kimashita", meaning: "came (past tense of 来る)" }
        ]
      },
      {
        jp: "今（いま）、東京（とうきょう）に住（す）んでいます。",
        en: "Now, I live in Tokyo.",
        words: [
          { word: "今", reading: "ima", meaning: "now" },
          { word: "東京", reading: "toukyou", meaning: "Tokyo" },
          { word: "に", reading: "ni", meaning: "in, at (location particle)" },
          { word: "住んでいます", reading: "sundeimasu", meaning: "am living, reside" }
        ]
      },
      {
        jp: "大学（だいがく）の学生（がくせい）です。",
        en: "I am a university student.",
        words: [
          { word: "大学", reading: "daigaku", meaning: "university" },
          { word: "の", reading: "no", meaning: "possessive particle (of)" },
          { word: "学生", reading: "gakusei", meaning: "student" },
          { word: "です", reading: "desu", meaning: "am, is, are" }
        ]
      },
      {
        jp: "日本語（にほんご）を勉強（べんきょう）しています。",
        en: "I am studying Japanese.",
        words: [
          { word: "日本語", reading: "nihongo", meaning: "Japanese language" },
          { word: "を", reading: "o", meaning: "object marker particle" },
          { word: "勉強しています", reading: "benkyou shiteimasu", meaning: "am studying" }
        ]
      },
      {
        jp: "趣味（しゅみ）は写真（しゃしん）です。",
        en: "My hobby is photography.",
        words: [
          { word: "趣味", reading: "shumi", meaning: "hobby" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "写真", reading: "shashin", meaning: "photograph, photography" },
          { word: "です", reading: "desu", meaning: "am, is, are" }
        ]
      },
      {
        jp: "どうぞよろしくお願（ねが）いします。",
        en: "Please treat me well. (Pleased to meet you.)",
        words: [
          { word: "どうぞ", reading: "douzo", meaning: "please" },
          { word: "よろしく", reading: "yoroshiku", meaning: "well, favorably" },
          { word: "お願いします", reading: "onegaishimasu", meaning: "I request, please" }
        ]
      }
    ],
    questions: [
      {
        question: "タンさんはどこから来（き）ましたか。",
        questionEn: "Where did Tan come from?",
        options: ["中国（ちゅうごく）", "ベトナム", "韓国（かんこく）", "タイ"],
        answer: 1
      },
      {
        question: "タンさんは何（なに）を勉強（べんきょう）していますか。",
        questionEn: "What is Tan studying?",
        options: ["英語（えいご）", "数学（すうがく）", "日本語（にほんご）", "歴史（れきし）"],
        answer: 2
      },
      {
        question: "タンさんの趣味（しゅみ）は何（なん）ですか。",
        questionEn: "What is Tan's hobby?",
        options: ["音楽（おんがく）", "料理（りょうり）", "サッカー", "写真（しゃしん）"],
        answer: 3
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 2. Daily Routine
  // ──────────────────────────────────────────────
  {
    id: "daily-routine",
    title: "いちにち",
    titleEn: "Daily Routine",
    level: "N5",
    text: "わたしはサラです。毎朝（まいあさ）六時（ろくじ）に起（お）きます。顔（かお）を洗（あら）って、朝（あさ）ごはんを食（た）べます。七時半（しちじはん）に家（いえ）を出（で）ます。電車（でんしゃ）で学校（がっこう）に行（い）きます。四時（よじ）に学校（がっこう）が終（お）わります。家（いえ）に帰（かえ）って、宿題（しゅくだい）をします。十一時（じゅういちじ）に寝（ね）ます。",
    sentences: [
      {
        jp: "わたしはサラです。",
        en: "I am Sara.",
        words: [
          { word: "わたし", reading: "watashi", meaning: "I, me" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "サラ", reading: "sara", meaning: "Sara (name)" },
          { word: "です", reading: "desu", meaning: "am, is, are" }
        ]
      },
      {
        jp: "毎朝（まいあさ）六時（ろくじ）に起（お）きます。",
        en: "Every morning I wake up at six o'clock.",
        words: [
          { word: "毎朝", reading: "maiasa", meaning: "every morning" },
          { word: "六時", reading: "rokuji", meaning: "six o'clock" },
          { word: "に", reading: "ni", meaning: "at (time particle)" },
          { word: "起きます", reading: "okimasu", meaning: "wake up, get up" }
        ]
      },
      {
        jp: "顔（かお）を洗（あら）って、朝（あさ）ごはんを食（た）べます。",
        en: "I wash my face and eat breakfast.",
        words: [
          { word: "顔", reading: "kao", meaning: "face" },
          { word: "を", reading: "o", meaning: "object marker particle" },
          { word: "洗って", reading: "aratte", meaning: "wash (te-form, connecting)" },
          { word: "朝ごはん", reading: "asagohan", meaning: "breakfast" },
          { word: "を", reading: "o", meaning: "object marker particle" },
          { word: "食べます", reading: "tabemasu", meaning: "eat" }
        ]
      },
      {
        jp: "七時半（しちじはん）に家（いえ）を出（で）ます。",
        en: "I leave home at seven-thirty.",
        words: [
          { word: "七時半", reading: "shichiji han", meaning: "seven-thirty" },
          { word: "に", reading: "ni", meaning: "at (time particle)" },
          { word: "家", reading: "ie", meaning: "home, house" },
          { word: "を", reading: "o", meaning: "object marker particle (leaving a place)" },
          { word: "出ます", reading: "demasu", meaning: "leave, go out" }
        ]
      },
      {
        jp: "電車（でんしゃ）で学校（がっこう）に行（い）きます。",
        en: "I go to school by train.",
        words: [
          { word: "電車", reading: "densha", meaning: "train" },
          { word: "で", reading: "de", meaning: "by (means of transport particle)" },
          { word: "学校", reading: "gakkou", meaning: "school" },
          { word: "に", reading: "ni", meaning: "to (direction particle)" },
          { word: "行きます", reading: "ikimasu", meaning: "go" }
        ]
      },
      {
        jp: "四時（よじ）に学校（がっこう）が終（お）わります。",
        en: "School finishes at four o'clock.",
        words: [
          { word: "四時", reading: "yoji", meaning: "four o'clock" },
          { word: "に", reading: "ni", meaning: "at (time particle)" },
          { word: "学校", reading: "gakkou", meaning: "school" },
          { word: "が", reading: "ga", meaning: "subject marker particle" },
          { word: "終わります", reading: "owarimasu", meaning: "finish, end" }
        ]
      },
      {
        jp: "家（いえ）に帰（かえ）って、宿題（しゅくだい）をします。",
        en: "I go home and do homework.",
        words: [
          { word: "家", reading: "ie", meaning: "home, house" },
          { word: "に", reading: "ni", meaning: "to (direction particle)" },
          { word: "帰って", reading: "kaette", meaning: "return home (te-form, connecting)" },
          { word: "宿題", reading: "shukudai", meaning: "homework" },
          { word: "を", reading: "o", meaning: "object marker particle" },
          { word: "します", reading: "shimasu", meaning: "do" }
        ]
      },
      {
        jp: "十一時（じゅういちじ）に寝（ね）ます。",
        en: "I go to sleep at eleven o'clock.",
        words: [
          { word: "十一時", reading: "juuichiji", meaning: "eleven o'clock" },
          { word: "に", reading: "ni", meaning: "at (time particle)" },
          { word: "寝ます", reading: "nemasu", meaning: "go to sleep" }
        ]
      }
    ],
    questions: [
      {
        question: "サラさんは何時（なんじ）に起（お）きますか。",
        questionEn: "What time does Sara wake up?",
        options: ["五時（ごじ）", "六時（ろくじ）", "七時（しちじ）", "八時（はちじ）"],
        answer: 1
      },
      {
        question: "サラさんは何（なに）で学校（がっこう）に行（い）きますか。",
        questionEn: "How does Sara go to school?",
        options: ["バス", "自転車（じてんしゃ）", "電車（でんしゃ）", "歩（ある）いて"],
        answer: 2
      },
      {
        question: "サラさんは何時（なんじ）に寝（ね）ますか。",
        questionEn: "What time does Sara go to sleep?",
        options: ["九時（くじ）", "十時（じゅうじ）", "十一時（じゅういちじ）", "十二時（じゅうにじ）"],
        answer: 2
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 3. Shopping
  // ──────────────────────────────────────────────
  {
    id: "shopping",
    title: "かいもの",
    titleEn: "Shopping",
    level: "N5",
    text: "きのう、キムさんとデパートに行（い）きました。キムさんは新（あたら）しいかばんが欲（ほ）しかったです。三階（さんがい）でかばんを見（み）ました。赤（あか）いかばんと青（あお）いかばんがありました。赤（あか）いかばんは三千円（さんぜんえん）でした。青（あお）いかばんは五千円（ごせんえん）でした。キムさんは赤（あか）いかばんを買（か）いました。安（やす）くて、かわいかったからです。",
    sentences: [
      {
        jp: "きのう、キムさんとデパートに行（い）きました。",
        en: "Yesterday, I went to the department store with Kim.",
        words: [
          { word: "きのう", reading: "kinou", meaning: "yesterday" },
          { word: "キム", reading: "kimu", meaning: "Kim (name)" },
          { word: "さん", reading: "san", meaning: "Mr./Ms. (polite suffix)" },
          { word: "と", reading: "to", meaning: "with, and (particle)" },
          { word: "デパート", reading: "depaato", meaning: "department store" },
          { word: "に", reading: "ni", meaning: "to (direction particle)" },
          { word: "行きました", reading: "ikimashita", meaning: "went (past tense of 行く)" }
        ]
      },
      {
        jp: "キムさんは新（あたら）しいかばんが欲（ほ）しかったです。",
        en: "Kim wanted a new bag.",
        words: [
          { word: "新しい", reading: "atarashii", meaning: "new" },
          { word: "かばん", reading: "kaban", meaning: "bag" },
          { word: "が", reading: "ga", meaning: "subject marker particle" },
          { word: "欲しかったです", reading: "hoshikatta desu", meaning: "wanted (past tense of 欲しい)" }
        ]
      },
      {
        jp: "三階（さんがい）でかばんを見（み）ました。",
        en: "We looked at bags on the third floor.",
        words: [
          { word: "三階", reading: "sangai", meaning: "third floor" },
          { word: "で", reading: "de", meaning: "at, on (location of action particle)" },
          { word: "かばん", reading: "kaban", meaning: "bag" },
          { word: "を", reading: "o", meaning: "object marker particle" },
          { word: "見ました", reading: "mimashita", meaning: "looked at, saw (past tense of 見る)" }
        ]
      },
      {
        jp: "赤（あか）いかばんと青（あお）いかばんがありました。",
        en: "There was a red bag and a blue bag.",
        words: [
          { word: "赤い", reading: "akai", meaning: "red" },
          { word: "かばん", reading: "kaban", meaning: "bag" },
          { word: "と", reading: "to", meaning: "and (particle)" },
          { word: "青い", reading: "aoi", meaning: "blue" },
          { word: "かばん", reading: "kaban", meaning: "bag" },
          { word: "が", reading: "ga", meaning: "subject marker particle" },
          { word: "ありました", reading: "arimashita", meaning: "there was (past tense of ある)" }
        ]
      },
      {
        jp: "赤（あか）いかばんは三千円（さんぜんえん）でした。",
        en: "The red bag was 3,000 yen.",
        words: [
          { word: "赤い", reading: "akai", meaning: "red" },
          { word: "かばん", reading: "kaban", meaning: "bag" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "三千円", reading: "sanzen en", meaning: "3,000 yen" },
          { word: "でした", reading: "deshita", meaning: "was (past tense of です)" }
        ]
      },
      {
        jp: "青（あお）いかばんは五千円（ごせんえん）でした。",
        en: "The blue bag was 5,000 yen.",
        words: [
          { word: "青い", reading: "aoi", meaning: "blue" },
          { word: "かばん", reading: "kaban", meaning: "bag" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "五千円", reading: "gosen en", meaning: "5,000 yen" },
          { word: "でした", reading: "deshita", meaning: "was (past tense of です)" }
        ]
      },
      {
        jp: "キムさんは赤（あか）いかばんを買（か）いました。",
        en: "Kim bought the red bag.",
        words: [
          { word: "キム", reading: "kimu", meaning: "Kim (name)" },
          { word: "さん", reading: "san", meaning: "Mr./Ms." },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "赤い", reading: "akai", meaning: "red" },
          { word: "かばん", reading: "kaban", meaning: "bag" },
          { word: "を", reading: "o", meaning: "object marker particle" },
          { word: "買いました", reading: "kaimashita", meaning: "bought (past tense of 買う)" }
        ]
      },
      {
        jp: "安（やす）くて、かわいかったからです。",
        en: "Because it was cheap and cute.",
        words: [
          { word: "安くて", reading: "yasukute", meaning: "cheap and (te-form of 安い)" },
          { word: "かわいかった", reading: "kawaikatta", meaning: "was cute (past tense of かわいい)" },
          { word: "から", reading: "kara", meaning: "because" },
          { word: "です", reading: "desu", meaning: "is (polite sentence ender)" }
        ]
      }
    ],
    questions: [
      {
        question: "キムさんは何（なに）を買（か）いましたか。",
        questionEn: "What did Kim buy?",
        options: ["青（あお）いかばん", "赤（あか）いかばん", "白（しろ）いかばん", "黒（くろ）いかばん"],
        answer: 1
      },
      {
        question: "赤（あか）いかばんはいくらでしたか。",
        questionEn: "How much was the red bag?",
        options: ["千円（せんえん）", "二千円（にせんえん）", "三千円（さんぜんえん）", "五千円（ごせんえん）"],
        answer: 2
      },
      {
        question: "どうして赤（あか）いかばんを買（か）いましたか。",
        questionEn: "Why did Kim buy the red bag?",
        options: [
          "大（おお）きかったから",
          "安（やす）くて、かわいかったから",
          "友達（ともだち）が好（す）きだったから",
          "青（あお）いかばんがなかったから"
        ],
        answer: 1
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 4. Asking Directions
  // ──────────────────────────────────────────────
  {
    id: "asking-directions",
    title: "みちをきく",
    titleEn: "Asking Directions",
    level: "N5",
    text: "リさんは駅（えき）の前（まえ）にいます。郵便局（ゆうびんきょく）に行（い）きたいです。リさんは女（おんな）の人（ひと）に聞（き）きました。「すみません、郵便局（ゆうびんきょく）はどこですか。」女（おんな）の人（ひと）は言（い）いました。「この道（みち）をまっすぐ行（い）ってください。二（ふた）つ目（め）の信号（しんごう）を右（みぎ）に曲（ま）がってください。郵便局（ゆうびんきょく）は銀行（ぎんこう）の隣（となり）にあります。」リさんは「ありがとうございます」と言（い）いました。",
    sentences: [
      {
        jp: "リさんは駅（えき）の前（まえ）にいます。",
        en: "Lee is in front of the station.",
        words: [
          { word: "リ", reading: "ri", meaning: "Lee (name)" },
          { word: "さん", reading: "san", meaning: "Mr./Ms." },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "駅", reading: "eki", meaning: "station" },
          { word: "の", reading: "no", meaning: "possessive particle (of)" },
          { word: "前", reading: "mae", meaning: "front, before" },
          { word: "に", reading: "ni", meaning: "at (location particle)" },
          { word: "います", reading: "imasu", meaning: "exist, am (for living things)" }
        ]
      },
      {
        jp: "郵便局（ゆうびんきょく）に行（い）きたいです。",
        en: "He wants to go to the post office.",
        words: [
          { word: "郵便局", reading: "yuubinkyoku", meaning: "post office" },
          { word: "に", reading: "ni", meaning: "to (direction particle)" },
          { word: "行きたいです", reading: "ikitai desu", meaning: "want to go" }
        ]
      },
      {
        jp: "リさんは女（おんな）の人（ひと）に聞（き）きました。",
        en: "Lee asked a woman.",
        words: [
          { word: "リ", reading: "ri", meaning: "Lee (name)" },
          { word: "さん", reading: "san", meaning: "Mr./Ms." },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "女の人", reading: "onna no hito", meaning: "woman" },
          { word: "に", reading: "ni", meaning: "to (indirect object particle)" },
          { word: "聞きました", reading: "kikimashita", meaning: "asked (past tense of 聞く)" }
        ]
      },
      {
        jp: "「すみません、郵便局（ゆうびんきょく）はどこですか。」",
        en: "\"Excuse me, where is the post office?\"",
        words: [
          { word: "すみません", reading: "sumimasen", meaning: "excuse me, I'm sorry" },
          { word: "郵便局", reading: "yuubinkyoku", meaning: "post office" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "どこ", reading: "doko", meaning: "where" },
          { word: "ですか", reading: "desu ka", meaning: "is it? (polite question)" }
        ]
      },
      {
        jp: "女（おんな）の人（ひと）は言（い）いました。",
        en: "The woman said:",
        words: [
          { word: "女の人", reading: "onna no hito", meaning: "woman" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "言いました", reading: "iimashita", meaning: "said (past tense of 言う)" }
        ]
      },
      {
        jp: "「この道（みち）をまっすぐ行（い）ってください。」",
        en: "\"Please go straight on this road.\"",
        words: [
          { word: "この", reading: "kono", meaning: "this" },
          { word: "道", reading: "michi", meaning: "road, street" },
          { word: "を", reading: "o", meaning: "object/path marker particle" },
          { word: "まっすぐ", reading: "massugu", meaning: "straight" },
          { word: "行ってください", reading: "itte kudasai", meaning: "please go" }
        ]
      },
      {
        jp: "「二（ふた）つ目（め）の信号（しんごう）を右（みぎ）に曲（ま）がってください。」",
        en: "\"Please turn right at the second traffic light.\"",
        words: [
          { word: "二つ目", reading: "futatsu me", meaning: "second (counter)" },
          { word: "の", reading: "no", meaning: "possessive particle" },
          { word: "信号", reading: "shingou", meaning: "traffic light" },
          { word: "を", reading: "o", meaning: "at (turning point particle)" },
          { word: "右", reading: "migi", meaning: "right" },
          { word: "に", reading: "ni", meaning: "to, toward (direction)" },
          { word: "曲がってください", reading: "magatte kudasai", meaning: "please turn" }
        ]
      },
      {
        jp: "「郵便局（ゆうびんきょく）は銀行（ぎんこう）の隣（となり）にあります。」",
        en: "\"The post office is next to the bank.\"",
        words: [
          { word: "郵便局", reading: "yuubinkyoku", meaning: "post office" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "銀行", reading: "ginkou", meaning: "bank" },
          { word: "の", reading: "no", meaning: "possessive particle" },
          { word: "隣", reading: "tonari", meaning: "next to, beside" },
          { word: "に", reading: "ni", meaning: "at (location particle)" },
          { word: "あります", reading: "arimasu", meaning: "exists, is located (for non-living things)" }
        ]
      },
      {
        jp: "リさんは「ありがとうございます」と言（い）いました。",
        en: "Lee said, \"Thank you very much.\"",
        words: [
          { word: "リ", reading: "ri", meaning: "Lee (name)" },
          { word: "さん", reading: "san", meaning: "Mr./Ms." },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "ありがとうございます", reading: "arigatou gozaimasu", meaning: "thank you very much" },
          { word: "と", reading: "to", meaning: "quotation particle" },
          { word: "言いました", reading: "iimashita", meaning: "said" }
        ]
      }
    ],
    questions: [
      {
        question: "リさんはどこに行（い）きたいですか。",
        questionEn: "Where does Lee want to go?",
        options: ["銀行（ぎんこう）", "病院（びょういん）", "郵便局（ゆうびんきょく）", "スーパー"],
        answer: 2
      },
      {
        question: "信号（しんごう）をどちらに曲（ま）がりますか。",
        questionEn: "Which way should he turn at the traffic light?",
        options: ["左（ひだり）", "右（みぎ）", "まっすぐ", "後（うし）ろ"],
        answer: 1
      },
      {
        question: "郵便局（ゆうびんきょく）は何（なに）の隣（となり）にありますか。",
        questionEn: "What is the post office next to?",
        options: ["駅（えき）", "学校（がっこう）", "病院（びょういん）", "銀行（ぎんこう）"],
        answer: 3
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 5. At a Restaurant
  // ──────────────────────────────────────────────
  {
    id: "restaurant",
    title: "レストランで",
    titleEn: "At a Restaurant",
    level: "N5",
    text: "ラマさんとサラさんはレストランに入（はい）りました。店員（てんいん）さんが「いらっしゃいませ。何名（なんめい）さまですか。」と言（い）いました。「二人（ふたり）です」とラマさんが言（い）いました。メニューを見（み）ました。ラマさんはラーメンを注文（ちゅうもん）しました。サラさんはカレーを注文（ちゅうもん）しました。二人（ふたり）はお茶（ちゃ）も飲（の）みました。ラーメンは八百円（はっぴゃくえん）で、カレーは七百円（ななひゃくえん）でした。全部（ぜんぶ）で千五百円（せんごひゃくえん）でした。「おいしかったです」とサラさんが言（い）いました。",
    sentences: [
      {
        jp: "ラマさんとサラさんはレストランに入（はい）りました。",
        en: "Rama and Sara entered the restaurant.",
        words: [
          { word: "ラマ", reading: "rama", meaning: "Rama (name)" },
          { word: "さん", reading: "san", meaning: "Mr./Ms." },
          { word: "と", reading: "to", meaning: "and, with (particle)" },
          { word: "サラ", reading: "sara", meaning: "Sara (name)" },
          { word: "さん", reading: "san", meaning: "Mr./Ms." },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "レストラン", reading: "resutoran", meaning: "restaurant" },
          { word: "に", reading: "ni", meaning: "to (direction particle)" },
          { word: "入りました", reading: "hairimashita", meaning: "entered (past tense of 入る)" }
        ]
      },
      {
        jp: "店員（てんいん）さんが「いらっしゃいませ。何名（なんめい）さまですか。」と言（い）いました。",
        en: "The staff said, \"Welcome. How many people?\"",
        words: [
          { word: "店員", reading: "ten'in", meaning: "shop staff, clerk" },
          { word: "さん", reading: "san", meaning: "Mr./Ms." },
          { word: "が", reading: "ga", meaning: "subject marker particle" },
          { word: "いらっしゃいませ", reading: "irasshaimase", meaning: "welcome (to a shop/restaurant)" },
          { word: "何名さま", reading: "nanmei sama", meaning: "how many people (polite)" },
          { word: "ですか", reading: "desu ka", meaning: "is it? (question)" },
          { word: "と", reading: "to", meaning: "quotation particle" },
          { word: "言いました", reading: "iimashita", meaning: "said" }
        ]
      },
      {
        jp: "「二人（ふたり）です」とラマさんが言（い）いました。",
        en: "\"Two people,\" Rama said.",
        words: [
          { word: "二人", reading: "futari", meaning: "two people" },
          { word: "です", reading: "desu", meaning: "is (polite copula)" },
          { word: "と", reading: "to", meaning: "quotation particle" },
          { word: "ラマ", reading: "rama", meaning: "Rama (name)" },
          { word: "さん", reading: "san", meaning: "Mr./Ms." },
          { word: "が", reading: "ga", meaning: "subject marker particle" },
          { word: "言いました", reading: "iimashita", meaning: "said" }
        ]
      },
      {
        jp: "メニューを見（み）ました。",
        en: "They looked at the menu.",
        words: [
          { word: "メニュー", reading: "menyuu", meaning: "menu" },
          { word: "を", reading: "o", meaning: "object marker particle" },
          { word: "見ました", reading: "mimashita", meaning: "looked at, saw" }
        ]
      },
      {
        jp: "ラマさんはラーメンを注文（ちゅうもん）しました。",
        en: "Rama ordered ramen.",
        words: [
          { word: "ラマ", reading: "rama", meaning: "Rama (name)" },
          { word: "さん", reading: "san", meaning: "Mr./Ms." },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "ラーメン", reading: "raamen", meaning: "ramen (noodle soup)" },
          { word: "を", reading: "o", meaning: "object marker particle" },
          { word: "注文しました", reading: "chuumon shimashita", meaning: "ordered (past tense)" }
        ]
      },
      {
        jp: "サラさんはカレーを注文（ちゅうもん）しました。",
        en: "Sara ordered curry.",
        words: [
          { word: "サラ", reading: "sara", meaning: "Sara (name)" },
          { word: "さん", reading: "san", meaning: "Mr./Ms." },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "カレー", reading: "karee", meaning: "curry" },
          { word: "を", reading: "o", meaning: "object marker particle" },
          { word: "注文しました", reading: "chuumon shimashita", meaning: "ordered" }
        ]
      },
      {
        jp: "二人（ふたり）はお茶（ちゃ）も飲（の）みました。",
        en: "Both of them also drank tea.",
        words: [
          { word: "二人", reading: "futari", meaning: "two people, both" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "お茶", reading: "ocha", meaning: "tea (green tea)" },
          { word: "も", reading: "mo", meaning: "also, too" },
          { word: "飲みました", reading: "nomimashita", meaning: "drank (past tense of 飲む)" }
        ]
      },
      {
        jp: "ラーメンは八百円（はっぴゃくえん）で、カレーは七百円（ななひゃくえん）でした。",
        en: "The ramen was 800 yen, and the curry was 700 yen.",
        words: [
          { word: "ラーメン", reading: "raamen", meaning: "ramen" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "八百円", reading: "happyaku en", meaning: "800 yen" },
          { word: "で", reading: "de", meaning: "and (connecting clause)" },
          { word: "カレー", reading: "karee", meaning: "curry" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "七百円", reading: "nanahyaku en", meaning: "700 yen" },
          { word: "でした", reading: "deshita", meaning: "was" }
        ]
      },
      {
        jp: "全部（ぜんぶ）で千五百円（せんごひゃくえん）でした。",
        en: "The total was 1,500 yen.",
        words: [
          { word: "全部", reading: "zenbu", meaning: "all, total" },
          { word: "で", reading: "de", meaning: "in total (particle)" },
          { word: "千五百円", reading: "sengohyaku en", meaning: "1,500 yen" },
          { word: "でした", reading: "deshita", meaning: "was" }
        ]
      },
      {
        jp: "「おいしかったです」とサラさんが言（い）いました。",
        en: "\"It was delicious,\" Sara said.",
        words: [
          { word: "おいしかったです", reading: "oishikatta desu", meaning: "was delicious (past tense of おいしい)" },
          { word: "と", reading: "to", meaning: "quotation particle" },
          { word: "サラ", reading: "sara", meaning: "Sara (name)" },
          { word: "さん", reading: "san", meaning: "Mr./Ms." },
          { word: "が", reading: "ga", meaning: "subject marker particle" },
          { word: "言いました", reading: "iimashita", meaning: "said" }
        ]
      }
    ],
    questions: [
      {
        question: "ラマさんは何（なに）を注文（ちゅうもん）しましたか。",
        questionEn: "What did Rama order?",
        options: ["カレー", "すし", "ラーメン", "うどん"],
        answer: 2
      },
      {
        question: "全部（ぜんぶ）でいくらでしたか。",
        questionEn: "How much was the total?",
        options: ["千円（せんえん）", "千五百円（せんごひゃくえん）", "二千円（にせんえん）", "八百円（はっぴゃくえん）"],
        answer: 1
      },
      {
        question: "二人（ふたり）は何（なに）を飲（の）みましたか。",
        questionEn: "What did both of them drink?",
        options: ["コーヒー", "水（みず）", "ジュース", "お茶（ちゃ）"],
        answer: 3
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 6. Family
  // ──────────────────────────────────────────────
  {
    id: "family",
    title: "かぞく",
    titleEn: "Family",
    level: "N5",
    text: "わたしはキムです。家族（かぞく）は五人（ごにん）です。父（ちち）と母（はは）と兄（あに）と妹（いもうと）とわたしです。父（ちち）は会社員（かいしゃいん）です。毎日（まいにち）車（くるま）で会社（かいしゃ）に行（い）きます。母（はは）は先生（せんせい）です。小学校（しょうがっこう）で英語（えいご）を教（おし）えています。兄（あに）は二十三歳（にじゅうさんさい）で、大学生（だいがくせい）です。妹（いもうと）は十五歳（じゅうごさい）で、高校生（こうこうせい）です。わたしたちは毎晩（まいばん）一緒（いっしょ）に晩（ばん）ごはんを食（た）べます。",
    sentences: [
      {
        jp: "わたしはキムです。",
        en: "I am Kim.",
        words: [
          { word: "わたし", reading: "watashi", meaning: "I, me" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "キム", reading: "kimu", meaning: "Kim (name)" },
          { word: "です", reading: "desu", meaning: "am, is, are" }
        ]
      },
      {
        jp: "家族（かぞく）は五人（ごにん）です。",
        en: "My family is five people.",
        words: [
          { word: "家族", reading: "kazoku", meaning: "family" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "五人", reading: "gonin", meaning: "five people" },
          { word: "です", reading: "desu", meaning: "is" }
        ]
      },
      {
        jp: "父（ちち）と母（はは）と兄（あに）と妹（いもうと）とわたしです。",
        en: "It is my father, mother, older brother, younger sister, and me.",
        words: [
          { word: "父", reading: "chichi", meaning: "father (my own)" },
          { word: "と", reading: "to", meaning: "and (particle)" },
          { word: "母", reading: "haha", meaning: "mother (my own)" },
          { word: "と", reading: "to", meaning: "and" },
          { word: "兄", reading: "ani", meaning: "older brother (my own)" },
          { word: "と", reading: "to", meaning: "and" },
          { word: "妹", reading: "imouto", meaning: "younger sister (my own)" },
          { word: "と", reading: "to", meaning: "and" },
          { word: "わたし", reading: "watashi", meaning: "I, me" },
          { word: "です", reading: "desu", meaning: "is" }
        ]
      },
      {
        jp: "父（ちち）は会社員（かいしゃいん）です。",
        en: "My father is a company employee.",
        words: [
          { word: "父", reading: "chichi", meaning: "father (my own)" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "会社員", reading: "kaishain", meaning: "company employee, office worker" },
          { word: "です", reading: "desu", meaning: "is" }
        ]
      },
      {
        jp: "毎日（まいにち）車（くるま）で会社（かいしゃ）に行（い）きます。",
        en: "He goes to the company by car every day.",
        words: [
          { word: "毎日", reading: "mainichi", meaning: "every day" },
          { word: "車", reading: "kuruma", meaning: "car" },
          { word: "で", reading: "de", meaning: "by (means of transport particle)" },
          { word: "会社", reading: "kaisha", meaning: "company, office" },
          { word: "に", reading: "ni", meaning: "to (direction particle)" },
          { word: "行きます", reading: "ikimasu", meaning: "go" }
        ]
      },
      {
        jp: "母（はは）は先生（せんせい）です。",
        en: "My mother is a teacher.",
        words: [
          { word: "母", reading: "haha", meaning: "mother (my own)" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "先生", reading: "sensei", meaning: "teacher" },
          { word: "です", reading: "desu", meaning: "is" }
        ]
      },
      {
        jp: "小学校（しょうがっこう）で英語（えいご）を教（おし）えています。",
        en: "She teaches English at an elementary school.",
        words: [
          { word: "小学校", reading: "shougakkou", meaning: "elementary school" },
          { word: "で", reading: "de", meaning: "at (location of action particle)" },
          { word: "英語", reading: "eigo", meaning: "English language" },
          { word: "を", reading: "o", meaning: "object marker particle" },
          { word: "教えています", reading: "oshieteimasu", meaning: "is teaching" }
        ]
      },
      {
        jp: "兄（あに）は二十三歳（にじゅうさんさい）で、大学生（だいがくせい）です。",
        en: "My older brother is 23 years old and is a university student.",
        words: [
          { word: "兄", reading: "ani", meaning: "older brother (my own)" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "二十三歳", reading: "nijuusan sai", meaning: "23 years old" },
          { word: "で", reading: "de", meaning: "and (connecting clause)" },
          { word: "大学生", reading: "daigakusei", meaning: "university student" },
          { word: "です", reading: "desu", meaning: "is" }
        ]
      },
      {
        jp: "妹（いもうと）は十五歳（じゅうごさい）で、高校生（こうこうせい）です。",
        en: "My younger sister is 15 years old and is a high school student.",
        words: [
          { word: "妹", reading: "imouto", meaning: "younger sister (my own)" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "十五歳", reading: "juugo sai", meaning: "15 years old" },
          { word: "で", reading: "de", meaning: "and (connecting clause)" },
          { word: "高校生", reading: "koukousei", meaning: "high school student" },
          { word: "です", reading: "desu", meaning: "is" }
        ]
      },
      {
        jp: "わたしたちは毎晩（まいばん）一緒（いっしょ）に晩（ばん）ごはんを食（た）べます。",
        en: "We eat dinner together every evening.",
        words: [
          { word: "わたしたち", reading: "watashitachi", meaning: "we" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "毎晩", reading: "maiban", meaning: "every evening" },
          { word: "一緒に", reading: "issho ni", meaning: "together" },
          { word: "晩ごはん", reading: "bangohan", meaning: "dinner, evening meal" },
          { word: "を", reading: "o", meaning: "object marker particle" },
          { word: "食べます", reading: "tabemasu", meaning: "eat" }
        ]
      }
    ],
    questions: [
      {
        question: "キムさんの家族（かぞく）は何人（なんにん）ですか。",
        questionEn: "How many people are in Kim's family?",
        options: ["三人（さんにん）", "四人（よにん）", "五人（ごにん）", "六人（ろくにん）"],
        answer: 2
      },
      {
        question: "お母（かあ）さんの仕事（しごと）は何（なん）ですか。",
        questionEn: "What is the mother's job?",
        options: ["会社員（かいしゃいん）", "医者（いしゃ）", "先生（せんせい）", "店員（てんいん）"],
        answer: 2
      },
      {
        question: "お兄（にい）さんは何歳（なんさい）ですか。",
        questionEn: "How old is the older brother?",
        options: ["二十歳（はたち）", "二十一歳（にじゅういっさい）", "二十三歳（にじゅうさんさい）", "二十五歳（にじゅうごさい）"],
        answer: 2
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 7. Weather & Seasons
  // ──────────────────────────────────────────────
  {
    id: "weather-seasons",
    title: "てんきときせつ",
    titleEn: "Weather & Seasons",
    level: "N5",
    text: "日本（にほん）には四（よっ）つの季節（きせつ）があります。春（はる）は三月（さんがつ）から五月（ごがつ）までです。暖（あたた）かくて、桜（さくら）がきれいです。夏（なつ）はとても暑（あつ）いです。わたしは海（うみ）で泳（およ）ぐのが好（す）きです。秋（あき）は涼（すず）しくて、紅葉（こうよう）がきれいです。冬（ふゆ）は寒（さむ）いです。時々（ときどき）雪（ゆき）が降（ふ）ります。わたしは春（はる）が一番（いちばん）好（す）きです。",
    sentences: [
      {
        jp: "日本（にほん）には四（よっ）つの季節（きせつ）があります。",
        en: "Japan has four seasons.",
        words: [
          { word: "日本", reading: "nihon", meaning: "Japan" },
          { word: "に", reading: "ni", meaning: "in (location particle)" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "四つ", reading: "yottsu", meaning: "four (general counter)" },
          { word: "の", reading: "no", meaning: "possessive particle" },
          { word: "季節", reading: "kisetsu", meaning: "season" },
          { word: "が", reading: "ga", meaning: "subject marker particle" },
          { word: "あります", reading: "arimasu", meaning: "exist, there are" }
        ]
      },
      {
        jp: "春（はる）は三月（さんがつ）から五月（ごがつ）までです。",
        en: "Spring is from March to May.",
        words: [
          { word: "春", reading: "haru", meaning: "spring" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "三月", reading: "sangatsu", meaning: "March" },
          { word: "から", reading: "kara", meaning: "from" },
          { word: "五月", reading: "gogatsu", meaning: "May" },
          { word: "まで", reading: "made", meaning: "until, to" },
          { word: "です", reading: "desu", meaning: "is" }
        ]
      },
      {
        jp: "暖（あたた）かくて、桜（さくら）がきれいです。",
        en: "It is warm, and the cherry blossoms are beautiful.",
        words: [
          { word: "暖かくて", reading: "atatakakute", meaning: "warm and (te-form of 暖かい)" },
          { word: "桜", reading: "sakura", meaning: "cherry blossom" },
          { word: "が", reading: "ga", meaning: "subject marker particle" },
          { word: "きれい", reading: "kirei", meaning: "beautiful, pretty" },
          { word: "です", reading: "desu", meaning: "is" }
        ]
      },
      {
        jp: "夏（なつ）はとても暑（あつ）いです。",
        en: "Summer is very hot.",
        words: [
          { word: "夏", reading: "natsu", meaning: "summer" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "とても", reading: "totemo", meaning: "very" },
          { word: "暑い", reading: "atsui", meaning: "hot (weather)" },
          { word: "です", reading: "desu", meaning: "is" }
        ]
      },
      {
        jp: "わたしは海（うみ）で泳（およ）ぐのが好（す）きです。",
        en: "I like swimming in the sea.",
        words: [
          { word: "わたし", reading: "watashi", meaning: "I, me" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "海", reading: "umi", meaning: "sea, ocean" },
          { word: "で", reading: "de", meaning: "at (location of action particle)" },
          { word: "泳ぐ", reading: "oyogu", meaning: "to swim" },
          { word: "のが", reading: "no ga", meaning: "nominalizer + subject particle (doing ~)" },
          { word: "好きです", reading: "suki desu", meaning: "like" }
        ]
      },
      {
        jp: "秋（あき）は涼（すず）しくて、紅葉（こうよう）がきれいです。",
        en: "Autumn is cool, and the autumn leaves are beautiful.",
        words: [
          { word: "秋", reading: "aki", meaning: "autumn, fall" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "涼しくて", reading: "suzushikute", meaning: "cool and (te-form of 涼しい)" },
          { word: "紅葉", reading: "kouyou", meaning: "autumn leaves, fall foliage" },
          { word: "が", reading: "ga", meaning: "subject marker particle" },
          { word: "きれい", reading: "kirei", meaning: "beautiful, pretty" },
          { word: "です", reading: "desu", meaning: "is" }
        ]
      },
      {
        jp: "冬（ふゆ）は寒（さむ）いです。",
        en: "Winter is cold.",
        words: [
          { word: "冬", reading: "fuyu", meaning: "winter" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "寒い", reading: "samui", meaning: "cold (weather)" },
          { word: "です", reading: "desu", meaning: "is" }
        ]
      },
      {
        jp: "時々（ときどき）雪（ゆき）が降（ふ）ります。",
        en: "Sometimes it snows.",
        words: [
          { word: "時々", reading: "tokidoki", meaning: "sometimes" },
          { word: "雪", reading: "yuki", meaning: "snow" },
          { word: "が", reading: "ga", meaning: "subject marker particle" },
          { word: "降ります", reading: "furimasu", meaning: "fall (rain/snow)" }
        ]
      },
      {
        jp: "わたしは春（はる）が一番（いちばん）好（す）きです。",
        en: "I like spring the best.",
        words: [
          { word: "わたし", reading: "watashi", meaning: "I, me" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "春", reading: "haru", meaning: "spring" },
          { word: "が", reading: "ga", meaning: "subject marker particle" },
          { word: "一番", reading: "ichiban", meaning: "number one, the most" },
          { word: "好きです", reading: "suki desu", meaning: "like" }
        ]
      }
    ],
    questions: [
      {
        question: "春（はる）は何月（なんがつ）から何月（なんがつ）までですか。",
        questionEn: "From what month to what month is spring?",
        options: [
          "一月（いちがつ）から三月（さんがつ）まで",
          "三月（さんがつ）から五月（ごがつ）まで",
          "四月（しがつ）から六月（ろくがつ）まで",
          "二月（にがつ）から四月（しがつ）まで"
        ],
        answer: 1
      },
      {
        question: "夏（なつ）の天気（てんき）はどうですか。",
        questionEn: "How is the weather in summer?",
        options: ["寒（さむ）い", "涼（すず）しい", "暖（あたた）かい", "とても暑（あつ）い"],
        answer: 3
      },
      {
        question: "この人（ひと）はどの季節（きせつ）が一番（いちばん）好（す）きですか。",
        questionEn: "Which season does this person like the most?",
        options: ["春（はる）", "夏（なつ）", "秋（あき）", "冬（ふゆ）"],
        answer: 0
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 8. School Life
  // ──────────────────────────────────────────────
  {
    id: "school-life",
    title: "がっこうのせいかつ",
    titleEn: "School Life",
    level: "N5",
    text: "わたしはラマです。フジアカデミーの学生（がくせい）です。月曜日（げつようび）から金曜日（きんようび）まで学校（がっこう）に行（い）きます。朝（あさ）九時（くじ）から授業（じゅぎょう）が始（はじ）まります。午前中（ごぜんちゅう）は日本語（にほんご）のクラスがあります。十二時（じゅうにじ）に昼（ひる）ごはんを食（た）べます。友達（ともだち）のタンさんと食堂（しょくどう）で食（た）べます。午後（ごご）は漢字（かんじ）と会話（かいわ）の授業（じゅぎょう）があります。三時（さんじ）に授業（じゅぎょう）が終（お）わります。放課後（ほうかご）、図書館（としょかん）で勉強（べんきょう）します。",
    sentences: [
      {
        jp: "わたしはラマです。",
        en: "I am Rama.",
        words: [
          { word: "わたし", reading: "watashi", meaning: "I, me" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "ラマ", reading: "rama", meaning: "Rama (name)" },
          { word: "です", reading: "desu", meaning: "am, is, are" }
        ]
      },
      {
        jp: "フジアカデミーの学生（がくせい）です。",
        en: "I am a student at Fuji Academy.",
        words: [
          { word: "フジアカデミー", reading: "fuji akademii", meaning: "Fuji Academy (school name)" },
          { word: "の", reading: "no", meaning: "possessive particle (of)" },
          { word: "学生", reading: "gakusei", meaning: "student" },
          { word: "です", reading: "desu", meaning: "am" }
        ]
      },
      {
        jp: "月曜日（げつようび）から金曜日（きんようび）まで学校（がっこう）に行（い）きます。",
        en: "I go to school from Monday to Friday.",
        words: [
          { word: "月曜日", reading: "getsuyoubi", meaning: "Monday" },
          { word: "から", reading: "kara", meaning: "from" },
          { word: "金曜日", reading: "kin'youbi", meaning: "Friday" },
          { word: "まで", reading: "made", meaning: "until, to" },
          { word: "学校", reading: "gakkou", meaning: "school" },
          { word: "に", reading: "ni", meaning: "to (direction particle)" },
          { word: "行きます", reading: "ikimasu", meaning: "go" }
        ]
      },
      {
        jp: "朝（あさ）九時（くじ）から授業（じゅぎょう）が始（はじ）まります。",
        en: "Classes start from nine o'clock in the morning.",
        words: [
          { word: "朝", reading: "asa", meaning: "morning" },
          { word: "九時", reading: "kuji", meaning: "nine o'clock" },
          { word: "から", reading: "kara", meaning: "from" },
          { word: "授業", reading: "jugyou", meaning: "class, lesson" },
          { word: "が", reading: "ga", meaning: "subject marker particle" },
          { word: "始まります", reading: "hajimarimasu", meaning: "begin, start" }
        ]
      },
      {
        jp: "午前中（ごぜんちゅう）は日本語（にほんご）のクラスがあります。",
        en: "In the morning, there is a Japanese class.",
        words: [
          { word: "午前中", reading: "gozenchuu", meaning: "during the morning, in the morning" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "日本語", reading: "nihongo", meaning: "Japanese language" },
          { word: "の", reading: "no", meaning: "possessive particle" },
          { word: "クラス", reading: "kurasu", meaning: "class" },
          { word: "が", reading: "ga", meaning: "subject marker particle" },
          { word: "あります", reading: "arimasu", meaning: "there is, exists" }
        ]
      },
      {
        jp: "十二時（じゅうにじ）に昼（ひる）ごはんを食（た）べます。",
        en: "I eat lunch at twelve o'clock.",
        words: [
          { word: "十二時", reading: "juuniji", meaning: "twelve o'clock" },
          { word: "に", reading: "ni", meaning: "at (time particle)" },
          { word: "昼ごはん", reading: "hirugohan", meaning: "lunch" },
          { word: "を", reading: "o", meaning: "object marker particle" },
          { word: "食べます", reading: "tabemasu", meaning: "eat" }
        ]
      },
      {
        jp: "友達（ともだち）のタンさんと食堂（しょくどう）で食（た）べます。",
        en: "I eat with my friend Tan in the cafeteria.",
        words: [
          { word: "友達", reading: "tomodachi", meaning: "friend" },
          { word: "の", reading: "no", meaning: "possessive particle" },
          { word: "タン", reading: "tan", meaning: "Tan (name)" },
          { word: "さん", reading: "san", meaning: "Mr./Ms." },
          { word: "と", reading: "to", meaning: "with (particle)" },
          { word: "食堂", reading: "shokudou", meaning: "cafeteria, dining hall" },
          { word: "で", reading: "de", meaning: "at (location of action particle)" },
          { word: "食べます", reading: "tabemasu", meaning: "eat" }
        ]
      },
      {
        jp: "午後（ごご）は漢字（かんじ）と会話（かいわ）の授業（じゅぎょう）があります。",
        en: "In the afternoon, there are kanji and conversation classes.",
        words: [
          { word: "午後", reading: "gogo", meaning: "afternoon" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "漢字", reading: "kanji", meaning: "kanji (Chinese characters)" },
          { word: "と", reading: "to", meaning: "and (particle)" },
          { word: "会話", reading: "kaiwa", meaning: "conversation" },
          { word: "の", reading: "no", meaning: "possessive particle" },
          { word: "授業", reading: "jugyou", meaning: "class, lesson" },
          { word: "が", reading: "ga", meaning: "subject marker particle" },
          { word: "あります", reading: "arimasu", meaning: "there is, exists" }
        ]
      },
      {
        jp: "三時（さんじ）に授業（じゅぎょう）が終（お）わります。",
        en: "Classes end at three o'clock.",
        words: [
          { word: "三時", reading: "sanji", meaning: "three o'clock" },
          { word: "に", reading: "ni", meaning: "at (time particle)" },
          { word: "授業", reading: "jugyou", meaning: "class, lesson" },
          { word: "が", reading: "ga", meaning: "subject marker particle" },
          { word: "終わります", reading: "owarimasu", meaning: "end, finish" }
        ]
      },
      {
        jp: "放課後（ほうかご）、図書館（としょかん）で勉強（べんきょう）します。",
        en: "After school, I study at the library.",
        words: [
          { word: "放課後", reading: "houkago", meaning: "after school" },
          { word: "図書館", reading: "toshokan", meaning: "library" },
          { word: "で", reading: "de", meaning: "at (location of action particle)" },
          { word: "勉強します", reading: "benkyou shimasu", meaning: "study" }
        ]
      }
    ],
    questions: [
      {
        question: "授業（じゅぎょう）は何時（なんじ）に始（はじ）まりますか。",
        questionEn: "What time do classes start?",
        options: ["八時（はちじ）", "九時（くじ）", "十時（じゅうじ）", "七時（しちじ）"],
        answer: 1
      },
      {
        question: "ラマさんはだれと昼（ひる）ごはんを食（た）べますか。",
        questionEn: "Who does Rama eat lunch with?",
        options: ["サラさん", "キムさん", "タンさん", "リさん"],
        answer: 2
      },
      {
        question: "放課後（ほうかご）、ラマさんはどこで勉強（べんきょう）しますか。",
        questionEn: "Where does Rama study after school?",
        options: ["家（いえ）", "教室（きょうしつ）", "カフェ", "図書館（としょかん）"],
        answer: 3
      }
    ]
  },

  // ──────────────────────────────────────────────
  // 9. Hobbies & Weekend
  // ──────────────────────────────────────────────
  {
    id: "hobbies-weekend",
    title: "しゅみとしゅうまつ",
    titleEn: "Hobbies & Weekend",
    level: "N5",
    text: "先週（せんしゅう）の土曜日（どようび）はとても楽（たの）しかったです。朝（あさ）、公園（こうえん）でサラさんとジョギングをしました。天気（てんき）がよくて、気持（きも）ちがよかったです。午後（ごご）は家（いえ）で音楽（おんがく）を聞（き）きました。わたしの趣味（しゅみ）は音楽（おんがく）と料理（りょうり）です。晩（ばん）ごはんにカレーを作（つく）りました。日曜日（にちようび）は映画（えいが）を見（み）ました。日本（にほん）の映画（えいが）でした。少（すこ）し難（むずか）しかったですが、おもしろかったです。来週（らいしゅう）の週末（しゅうまつ）は友達（ともだち）とカラオケに行（い）きたいです。",
    sentences: [
      {
        jp: "先週（せんしゅう）の土曜日（どようび）はとても楽（たの）しかったです。",
        en: "Last Saturday was very fun.",
        words: [
          { word: "先週", reading: "senshuu", meaning: "last week" },
          { word: "の", reading: "no", meaning: "possessive particle" },
          { word: "土曜日", reading: "doyoubi", meaning: "Saturday" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "とても", reading: "totemo", meaning: "very" },
          { word: "楽しかったです", reading: "tanoshikatta desu", meaning: "was fun (past tense of 楽しい)" }
        ]
      },
      {
        jp: "朝（あさ）、公園（こうえん）でサラさんとジョギングをしました。",
        en: "In the morning, I jogged with Sara in the park.",
        words: [
          { word: "朝", reading: "asa", meaning: "morning" },
          { word: "公園", reading: "kouen", meaning: "park" },
          { word: "で", reading: "de", meaning: "at (location of action particle)" },
          { word: "サラ", reading: "sara", meaning: "Sara (name)" },
          { word: "さん", reading: "san", meaning: "Mr./Ms." },
          { word: "と", reading: "to", meaning: "with (particle)" },
          { word: "ジョギング", reading: "jogingu", meaning: "jogging" },
          { word: "を", reading: "o", meaning: "object marker particle" },
          { word: "しました", reading: "shimashita", meaning: "did (past tense of する)" }
        ]
      },
      {
        jp: "天気（てんき）がよくて、気持（きも）ちがよかったです。",
        en: "The weather was nice, and it felt good.",
        words: [
          { word: "天気", reading: "tenki", meaning: "weather" },
          { word: "が", reading: "ga", meaning: "subject marker particle" },
          { word: "よくて", reading: "yokute", meaning: "good and (te-form of いい/よい)" },
          { word: "気持ち", reading: "kimochi", meaning: "feeling" },
          { word: "が", reading: "ga", meaning: "subject marker particle" },
          { word: "よかったです", reading: "yokatta desu", meaning: "was good (past tense of いい)" }
        ]
      },
      {
        jp: "午後（ごご）は家（いえ）で音楽（おんがく）を聞（き）きました。",
        en: "In the afternoon, I listened to music at home.",
        words: [
          { word: "午後", reading: "gogo", meaning: "afternoon" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "家", reading: "ie", meaning: "home, house" },
          { word: "で", reading: "de", meaning: "at (location of action particle)" },
          { word: "音楽", reading: "ongaku", meaning: "music" },
          { word: "を", reading: "o", meaning: "object marker particle" },
          { word: "聞きました", reading: "kikimashita", meaning: "listened (past tense of 聞く)" }
        ]
      },
      {
        jp: "わたしの趣味（しゅみ）は音楽（おんがく）と料理（りょうり）です。",
        en: "My hobbies are music and cooking.",
        words: [
          { word: "わたし", reading: "watashi", meaning: "I, me" },
          { word: "の", reading: "no", meaning: "possessive particle" },
          { word: "趣味", reading: "shumi", meaning: "hobby" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "音楽", reading: "ongaku", meaning: "music" },
          { word: "と", reading: "to", meaning: "and (particle)" },
          { word: "料理", reading: "ryouri", meaning: "cooking, cuisine" },
          { word: "です", reading: "desu", meaning: "is" }
        ]
      },
      {
        jp: "晩（ばん）ごはんにカレーを作（つく）りました。",
        en: "I made curry for dinner.",
        words: [
          { word: "晩ごはん", reading: "bangohan", meaning: "dinner, evening meal" },
          { word: "に", reading: "ni", meaning: "for (purpose particle)" },
          { word: "カレー", reading: "karee", meaning: "curry" },
          { word: "を", reading: "o", meaning: "object marker particle" },
          { word: "作りました", reading: "tsukurimashita", meaning: "made (past tense of 作る)" }
        ]
      },
      {
        jp: "日曜日（にちようび）は映画（えいが）を見（み）ました。",
        en: "On Sunday, I watched a movie.",
        words: [
          { word: "日曜日", reading: "nichiyoubi", meaning: "Sunday" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "映画", reading: "eiga", meaning: "movie, film" },
          { word: "を", reading: "o", meaning: "object marker particle" },
          { word: "見ました", reading: "mimashita", meaning: "watched, saw" }
        ]
      },
      {
        jp: "日本（にほん）の映画（えいが）でした。",
        en: "It was a Japanese movie.",
        words: [
          { word: "日本", reading: "nihon", meaning: "Japan" },
          { word: "の", reading: "no", meaning: "possessive particle" },
          { word: "映画", reading: "eiga", meaning: "movie, film" },
          { word: "でした", reading: "deshita", meaning: "was (past tense of です)" }
        ]
      },
      {
        jp: "少（すこ）し難（むずか）しかったですが、おもしろかったです。",
        en: "It was a little difficult, but it was interesting.",
        words: [
          { word: "少し", reading: "sukoshi", meaning: "a little" },
          { word: "難しかったです", reading: "muzukashikatta desu", meaning: "was difficult (past tense of 難しい)" },
          { word: "が", reading: "ga", meaning: "but (conjunction)" },
          { word: "おもしろかったです", reading: "omoshirokatta desu", meaning: "was interesting (past tense of おもしろい)" }
        ]
      },
      {
        jp: "来週（らいしゅう）の週末（しゅうまつ）は友達（ともだち）とカラオケに行（い）きたいです。",
        en: "Next weekend, I want to go to karaoke with friends.",
        words: [
          { word: "来週", reading: "raishuu", meaning: "next week" },
          { word: "の", reading: "no", meaning: "possessive particle" },
          { word: "週末", reading: "shuumatsu", meaning: "weekend" },
          { word: "は", reading: "wa", meaning: "topic marker particle" },
          { word: "友達", reading: "tomodachi", meaning: "friend" },
          { word: "と", reading: "to", meaning: "with (particle)" },
          { word: "カラオケ", reading: "karaoke", meaning: "karaoke" },
          { word: "に", reading: "ni", meaning: "to (direction particle)" },
          { word: "行きたいです", reading: "ikitai desu", meaning: "want to go" }
        ]
      }
    ],
    questions: [
      {
        question: "土曜日（どようび）の朝（あさ）、何（なに）をしましたか。",
        questionEn: "What did they do on Saturday morning?",
        options: ["映画（えいが）を見（み）た", "料理（りょうり）をした", "ジョギングをした", "カラオケに行（い）った"],
        answer: 2
      },
      {
        question: "この人（ひと）の趣味（しゅみ）は何（なん）ですか。",
        questionEn: "What are this person's hobbies?",
        options: [
          "映画（えいが）とジョギング",
          "音楽（おんがく）と料理（りょうり）",
          "カラオケと写真（しゃしん）",
          "読書（どくしょ）と料理（りょうり）"
        ],
        answer: 1
      },
      {
        question: "日曜日（にちようび）に見（み）た映画（えいが）はどうでしたか。",
        questionEn: "How was the movie they watched on Sunday?",
        options: [
          "つまらなかった",
          "簡単（かんたん）だった",
          "少（すこ）し難（むずか）しかったが、おもしろかった",
          "とても悲（かな）しかった"
        ],
        answer: 2
      }
    ]
  }

];

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = { PASSAGES };
}
