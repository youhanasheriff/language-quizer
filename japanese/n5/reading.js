// ============================================================
// READING PRACTICE LOGIC
// ============================================================

let currentReadingMode = null;
let currentPassage = null;
let currentSentenceIdx = 0;
let compQuestionIdx = 0;
let compScore = 0;
let compAnswered = false;

const READING_MODES = [
  {id: 'flashcard', icon: '\u{1F4C4}', label: 'Flashcard', desc: 'Read Japanese, reveal English'},
  {id: 'interactive', icon: '\u{1F50D}', label: 'Word-by-Word', desc: 'Tap words to see meanings'},
  {id: 'comprehension', icon: '\u{2753}', label: 'Comprehension', desc: 'Read and answer questions'},
];

function initReading() {
  renderReadingModes();
}

function renderReadingModes() {
  const el = document.getElementById('reading-modes');
  el.innerHTML = READING_MODES.map(m => `
    <button class="mode-btn" onclick="selectReadingMode('${m.id}')">
      <span class="icon">${m.icon}</span>
      <span class="label">${m.label}</span>
      <span class="count">${m.desc}</span>
    </button>
  `).join('');
}

function selectReadingMode(mode) {
  currentReadingMode = mode;
  document.querySelectorAll('.mode-btn').forEach((b, i) => {
    b.classList.toggle('active', READING_MODES[i].id === mode);
  });
  renderPassageList();
  document.getElementById('reading-card').style.display = 'none';
}

function renderPassageList() {
  const el = document.getElementById('passage-list');
  if (typeof PASSAGES === 'undefined' || !PASSAGES.length) {
    el.innerHTML = '<p style="color:var(--text2)">No passages loaded.</p>';
    return;
  }
  el.innerHTML = PASSAGES.map((p, i) => `
    <button class="passage-btn" onclick="selectPassage(${i})">
      <div class="p-title">${p.title}</div>
      <div class="p-subtitle">${p.titleEn}</div>
    </button>
  `).join('');
}

function selectPassage(idx) {
  currentPassage = PASSAGES[idx];
  currentSentenceIdx = 0;
  compQuestionIdx = 0;
  compScore = 0;
  compAnswered = false;

  document.querySelectorAll('.passage-btn').forEach((b, i) => {
    b.classList.toggle('active', i === idx);
  });

  document.getElementById('reading-card').style.display = 'block';
  document.getElementById('passage-title').textContent =
    currentPassage.title + ' - ' + currentPassage.titleEn;

  switch (currentReadingMode) {
    case 'flashcard': renderFlashcard(); break;
    case 'interactive': renderInteractive(); break;
    case 'comprehension': renderComprehension(); break;
  }
}

// ============================================================
// FLASHCARD MODE
// ============================================================
function renderFlashcard() {
  const p = currentPassage;
  const s = p.sentences[currentSentenceIdx];
  const total = p.sentences.length;

  document.getElementById('reading-counter').textContent =
    `Sentence ${currentSentenceIdx + 1} of ${total}`;

  const content = document.getElementById('reading-content');
  content.innerHTML = `
    <div class="flashcard-text">${s.jp}</div>
    <div style="text-align:center">
      <button class="submit-btn" onclick="revealFlashcard()" id="reveal-btn">Reveal Translation</button>
    </div>
    <div class="flashcard-reveal" id="flashcard-reveal">
      <div class="en">${s.en}</div>
    </div>
  `;

  document.getElementById('nav-row').innerHTML = `
    <button class="next-btn show" onclick="prevSentence()" ${currentSentenceIdx === 0 ? 'disabled style="opacity:0.3"' : ''}>Previous</button>
    <button class="next-btn show" onclick="nextSentence()" ${currentSentenceIdx >= total - 1 ? 'disabled style="opacity:0.3"' : ''}>Next</button>
  `;
}

function revealFlashcard() {
  document.getElementById('flashcard-reveal').classList.add('show');
  document.getElementById('reveal-btn').style.display = 'none';
}

function prevSentence() {
  if (currentSentenceIdx > 0) {
    currentSentenceIdx--;
    renderFlashcard();
  }
}

function nextSentence() {
  if (currentSentenceIdx < currentPassage.sentences.length - 1) {
    currentSentenceIdx++;
    renderFlashcard();
  }
}

// ============================================================
// INTERACTIVE WORD-BY-WORD MODE
// ============================================================
function renderInteractive() {
  const p = currentPassage;
  const total = p.sentences.length;

  document.getElementById('reading-counter').textContent =
    `Sentence ${currentSentenceIdx + 1} of ${total}`;

  const s = p.sentences[currentSentenceIdx];

  // Build word spans
  const wordSpans = s.words.map((w, i) =>
    `<span class="word-span" data-idx="${i}" onclick="showWordTooltip(event, ${currentSentenceIdx}, ${i})">${w.word}</span>`
  ).join('');

  const content = document.getElementById('reading-content');
  content.innerHTML = `
    <div class="interactive-text">${wordSpans}</div>
    <div style="text-align:center;margin-bottom:12px">
      <button class="submit-btn" style="background:var(--bg3);font-size:13px;padding:8px 20px;" onclick="showSentenceTranslation()">Show Full Translation</button>
    </div>
    <div class="sentence-translation" id="sent-trans">
      <div class="st-jp">${s.jp}</div>
      <div class="st-en">${s.en}</div>
    </div>
  `;

  document.getElementById('nav-row').innerHTML = `
    <button class="next-btn show" onclick="prevInteractive()" ${currentSentenceIdx === 0 ? 'disabled style="opacity:0.3"' : ''}>Previous</button>
    <button class="next-btn show" onclick="nextInteractive()" ${currentSentenceIdx >= total - 1 ? 'disabled style="opacity:0.3"' : ''}>Next</button>
  `;
}

function showWordTooltip(event, sentIdx, wordIdx) {
  const s = currentPassage.sentences[sentIdx];
  const w = s.words[wordIdx];
  const tooltip = document.getElementById('word-tooltip');

  document.getElementById('tt-word').textContent = w.word;
  document.getElementById('tt-reading').textContent = w.reading || '';
  document.getElementById('tt-meaning').textContent = w.meaning;

  // Position near the clicked word
  const rect = event.target.getBoundingClientRect();
  tooltip.style.left = Math.min(rect.left, window.innerWidth - 200) + 'px';
  tooltip.style.top = (rect.bottom + 8) + 'px';
  tooltip.classList.add('show');

  // Highlight tapped word
  document.querySelectorAll('.word-span').forEach(s => s.classList.remove('tapped'));
  event.target.classList.add('tapped');

  // Close on click elsewhere
  setTimeout(() => {
    document.addEventListener('click', closeTooltip, {once: true});
  }, 10);
}

function closeTooltip(e) {
  if (!e.target.classList.contains('word-span')) {
    document.getElementById('word-tooltip').classList.remove('show');
    document.querySelectorAll('.word-span').forEach(s => s.classList.remove('tapped'));
  }
}

function showSentenceTranslation() {
  document.getElementById('sent-trans').classList.add('show');
}

function prevInteractive() {
  if (currentSentenceIdx > 0) {
    currentSentenceIdx--;
    document.getElementById('word-tooltip').classList.remove('show');
    renderInteractive();
  }
}

function nextInteractive() {
  if (currentSentenceIdx < currentPassage.sentences.length - 1) {
    currentSentenceIdx++;
    document.getElementById('word-tooltip').classList.remove('show');
    renderInteractive();
  }
}

// ============================================================
// COMPREHENSION MODE
// ============================================================
function renderComprehension() {
  const p = currentPassage;

  if (!p.questions || p.questions.length === 0) {
    document.getElementById('reading-content').innerHTML =
      '<p style="color:var(--text2);text-align:center">No comprehension questions for this passage.</p>';
    document.getElementById('nav-row').innerHTML = '';
    document.getElementById('reading-counter').textContent = '';
    return;
  }

  // Show full passage first, then questions
  const fullText = p.sentences.map(s => s.jp).join('');

  if (compQuestionIdx >= p.questions.length) {
    // Show results
    const pct = Math.round((compScore / p.questions.length) * 100);
    document.getElementById('reading-counter').textContent = 'Complete!';
    document.getElementById('reading-content').innerHTML = `
      <div class="comp-passage">${fullText}</div>
      <div style="text-align:center">
        <div class="results-score" style="font-size:48px">${pct}%</div>
        <p style="color:var(--text2);margin-bottom:16px">${compScore} / ${p.questions.length} correct</p>
        <button class="submit-btn" onclick="compQuestionIdx=0;compScore=0;renderComprehension()">Try Again</button>
      </div>
    `;
    document.getElementById('nav-row').innerHTML = '';
    return;
  }

  const q = p.questions[compQuestionIdx];
  compAnswered = false;

  document.getElementById('reading-counter').textContent =
    `Question ${compQuestionIdx + 1} of ${p.questions.length}`;

  document.getElementById('reading-content').innerHTML = `
    <div class="comp-passage">${fullText}</div>
    <div class="comp-question">${q.question}</div>
    <div class="comp-question-en">${q.questionEn || ''}</div>
    <div class="comp-options" id="comp-options">
      ${q.options.map((opt, i) => `
        <button class="option-btn" onclick="checkCompAnswer(this, ${i})" data-idx="${i}">${opt}</button>
      `).join('')}
    </div>
    <div class="feedback" id="comp-feedback"></div>
  `;

  document.getElementById('nav-row').innerHTML = '';
}

function checkCompAnswer(btn, idx) {
  if (compAnswered) return;
  compAnswered = true;

  const q = currentPassage.questions[compQuestionIdx];
  const isCorrect = idx === q.answer;

  document.querySelectorAll('#comp-options .option-btn').forEach((b, i) => {
    b.classList.add('disabled');
    if (i === q.answer) b.classList.add('show-correct');
  });

  if (isCorrect) {
    btn.classList.add('correct');
    compScore++;
  } else {
    btn.classList.add('wrong');
  }

  const fb = document.getElementById('comp-feedback');
  fb.className = `feedback show ${isCorrect ? 'correct' : 'wrong'}`;
  fb.innerHTML = `<div>${isCorrect ? 'Correct!' : 'Wrong!'}</div>`;

  document.getElementById('nav-row').innerHTML = `
    <button class="next-btn show" onclick="compQuestionIdx++;renderComprehension()">Next Question</button>
  `;
}

// ============================================================
// KEYBOARD SHORTCUTS
// ============================================================
document.addEventListener('keydown', e => {
  if (currentReadingMode === 'flashcard') {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      const reveal = document.getElementById('flashcard-reveal');
      if (reveal && !reveal.classList.contains('show')) {
        revealFlashcard();
      } else {
        nextSentence();
      }
    }
    if (e.key === 'ArrowRight') nextSentence();
    if (e.key === 'ArrowLeft') prevSentence();
  }
  if (currentReadingMode === 'interactive') {
    if (e.key === 'ArrowRight') nextInteractive();
    if (e.key === 'ArrowLeft') prevInteractive();
  }
  if (currentReadingMode === 'comprehension' && compAnswered) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      compQuestionIdx++;
      renderComprehension();
    }
  }
  if (currentReadingMode === 'comprehension' && !compAnswered) {
    if (e.key >= '1' && e.key <= '4') {
      const btns = document.querySelectorAll('#comp-options .option-btn');
      const idx = parseInt(e.key) - 1;
      if (btns[idx]) btns[idx].click();
    }
  }
});

// Init
initReading();
