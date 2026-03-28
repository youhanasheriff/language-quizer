// ============================================================
// QUIZ LOGIC
// ============================================================

let VOCAB = [];
let SENTENCES = [];

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
  // Japanese particles and common word endings to split on
  const PARTICLES = ['は','が','を','に','で','へ','と','も','の','から','まで','より','か','ね','よ'];
  const VERB_ENDINGS = ['ます','ました','ません','ませんでした','です','でした','ください','ましょう','ませんか','たいです','ています','てください','はいけません','もいいです'];

  function splitJapanese(sent) {
    // Split sentence into chunks using particles as delimiters (keeping them)
    let parts = [];
    let remaining = sent.replace(/。$/, '');

    // Try to split by spaces first (some sentences have them)
    if (remaining.includes(' ')) {
      return remaining.split(/\s+/).filter(w => w.length >= 1);
    }

    // Split by particles — keep particle attached to preceding word
    // Strategy: find known vocab words and particles in the sentence
    let chunks = [];
    let i = 0;
    while (i < remaining.length) {
      let matched = false;
      // Try matching verb endings first (longer patterns)
      for (const ve of VERB_ENDINGS.sort((a,b) => b.length - a.length)) {
        if (remaining.substring(i).startsWith(ve)) {
          chunks.push(ve);
          i += ve.length;
          matched = true;
          break;
        }
      }
      if (matched) continue;
      // Try matching particles
      for (const p of PARTICLES.sort((a,b) => b.length - a.length)) {
        if (remaining.substring(i).startsWith(p) && i > 0) {
          chunks.push(p);
          i += p.length;
          matched = true;
          break;
        }
      }
      if (matched) continue;
      // Accumulate into current chunk
      if (chunks.length === 0 || PARTICLES.includes(chunks[chunks.length-1]) || VERB_ENDINGS.includes(chunks[chunks.length-1])) {
        chunks.push(remaining[i]);
      } else {
        chunks[chunks.length-1] += remaining[i];
      }
      i++;
    }
    return chunks.filter(c => c.length >= 1);
  }

  const pool = shuffle(SENTENCES).slice(0, 80);
  questions = [];

  for (const s of pool) {
    const sent = s.sentence;
    if (sent.length < 6) continue;

    const parts = splitJapanese(sent);
    // Need at least 3 parts to make a meaningful blank
    if (parts.length < 3) continue;

    // Pick a part to blank out — prefer particles and verb endings (more testable)
    const blankableParts = [];
    parts.forEach((p, idx) => {
      if (PARTICLES.includes(p)) blankableParts.push(idx);
      else if (VERB_ENDINGS.some(ve => p.includes(ve))) blankableParts.push(idx);
    });

    // If no good blankable parts, pick any non-first part
    let blankIdx;
    if (blankableParts.length > 0) {
      blankIdx = blankableParts[Math.floor(Math.random() * blankableParts.length)];
    } else {
      blankIdx = 1 + Math.floor(Math.random() * (parts.length - 1));
    }

    const blankWord = parts[blankIdx];
    if (blankWord.length < 1) continue;

    const display = parts.map((p, i) => i === blankIdx ? '＿＿＿' : p).join('');

    // Build distractors
    let distractors = [];
    if (PARTICLES.includes(blankWord)) {
      // Use other particles as distractors
      distractors = shuffle(PARTICLES.filter(p => p !== blankWord)).slice(0, 3);
    } else {
      // Use parts from other sentences as distractors
      const otherParts = new Set();
      for (const other of SENTENCES) {
        const op = splitJapanese(other.sentence);
        op.forEach(p => {
          if (p !== blankWord && p.length >= 1 && !PARTICLES.includes(p)) {
            otherParts.add(p);
          }
        });
      }
      distractors = shuffle([...otherParts]).slice(0, 3);
    }

    if (distractors.length < 3) continue;

    questions.push({
      type: 'mc',
      display: display,
      displayClass: 'sentence',
      prompt: 'Fill in the blank:',
      hint: '',
      answer: blankWord,
      options: shuffle([blankWord, ...distractors]),
      detail: sent
    });

    if (questions.length >= 20) break;
  }

  // Fallback: if still no questions, show error
  if (questions.length === 0) {
    questions.push({
      type: 'mc',
      display: 'No sentences available for this filter',
      displayClass: 'sentence',
      prompt: 'Try a different mode',
      hint: '',
      answer: 'OK',
      options: ['OK'],
      detail: ''
    });
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

  const pct = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
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

// Init
init();
backToMenu();
