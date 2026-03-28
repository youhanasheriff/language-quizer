"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { KANJI, GRAMMAR, VOCAB, SENTENCES } from "@/data";
import type { Question, VocabItem } from "@/data/types";
import { shuffle } from "@/lib/shuffle";
import { getFilteredKanji, getFilteredVocab, getFilteredGrammar, KANJI_CATS } from "@/lib/filters";
import { buildKanjiQuestions, buildVocabQuestions, buildSentenceQuestions, buildGrammarQuestions } from "@/lib/quiz-engine";

const MODES = [
  { id: "kanji-meaning", icon: "\u5b57", label: "Kanji \u2192 Meaning", count: KANJI.length },
  { id: "meaning-kanji", icon: "Abc", label: "Meaning \u2192 Kanji", count: KANJI.length },
  { id: "kanji-reading", icon: "\u8aad", label: "Kanji \u2192 Reading", count: KANJI.length },
  { id: "vocab-meaning", icon: "\u8a9e", label: "Vocab \u2192 Meaning", count: "700+" },
  { id: "meaning-vocab", icon: "EN", label: "Meaning \u2192 Vocab", count: "700+" },
  { id: "sentence-fill", icon: "\u6587", label: "Fill the Blank", count: "200+" },
  { id: "grammar-pattern", icon: "\u6587\u6cd5", label: "Grammar Pattern", count: GRAMMAR.length },
  { id: "grammar-meaning", icon: "\u4f8b", label: "Grammar Meaning", count: GRAMMAR.length },
];

export default function QuizPage() {
  const [currentMode, setCurrentMode] = useState<string | null>(null);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [missed, setMissed] = useState<Question[]>([]);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const question = questions[currentQ] ?? null;
  const isComplete = currentQ >= questions.length && questions.length > 0;
  const pct = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  function selectMode(mode: string) {
    setCurrentMode(mode);
    setCurrentFilter("all");
    startQuiz(mode, "all");
  }

  function startQuiz(mode: string, filter: string) {
    let qs: Question[] = [];
    switch (mode) {
      case "kanji-meaning":
      case "meaning-kanji":
      case "kanji-reading":
        qs = buildKanjiQuestions(mode, filter);
        break;
      case "vocab-meaning":
      case "meaning-vocab":
        qs = buildVocabQuestions(mode, filter);
        break;
      case "sentence-fill":
        qs = buildSentenceQuestions();
        break;
      case "grammar-pattern":
      case "grammar-meaning":
        qs = buildGrammarQuestions(mode, filter);
        break;
    }
    setQuestions(qs);
    setCurrentQ(0);
    setScore(0);
    setStreak(0);
    setAnswered(false);
    setMissed([]);
    setSelectedIdx(null);
  }

  function handleFilter(f: string) {
    setCurrentFilter(f);
    if (currentMode) startQuiz(currentMode, f);
  }

  function checkAnswer(idx: number) {
    if (answered || !question) return;
    setAnswered(true);
    setSelectedIdx(idx);
    const isCorrect = question.options[idx] === question.answer;
    if (isCorrect) {
      setScore((s) => s + 1);
      setStreak((s) => s + 1);
    } else {
      setStreak(0);
      setMissed((m) => [...m, question]);
    }
  }

  function nextQuestion() {
    setCurrentQ((q) => q + 1);
    setAnswered(false);
    setSelectedIdx(null);
  }

  function backToMenu() {
    setCurrentMode(null);
    setCurrentFilter("all");
    setQuestions([]);
    setCurrentQ(0);
    setScore(0);
    setStreak(0);
  }

  // Keyboard shortcuts
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key >= "1" && e.key <= "4" && !answered && question) {
        const idx = parseInt(e.key) - 1;
        if (idx < question.options.length) checkAnswer(idx);
      }
      if ((e.key === "Enter" || e.key === " ") && answered) {
        e.preventDefault();
        nextQuestion();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  // Filters
  const filters: { id: string; label: string }[] = [{ id: "all", label: "All" }];
  if (currentMode?.startsWith("kanji")) {
    filters.push(
      { id: "numbers", label: "Numbers" }, { id: "time", label: "Time" },
      { id: "people", label: "People" }, { id: "nature", label: "Nature" },
      { id: "directions", label: "Directions" }, { id: "places", label: "Places" },
      { id: "school", label: "School" }, { id: "actions", label: "Actions" },
      { id: "adjectives", label: "Adjectives" }
    );
  } else if (currentMode?.includes("vocab")) {
    filters.push({ id: "hiragana", label: "Hiragana" }, { id: "katakana", label: "Katakana" });
  } else if (currentMode?.startsWith("grammar")) {
    for (let i = 1; i <= 10; i++) filters.push({ id: `L${i}`, label: `Lesson ${i}` });
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-bg2 border-b border-border px-6 py-4 backdrop-blur-xl flex items-center justify-between">
        <Link href="/" className="text-xl font-bold gradient-text">Language Quizer</Link>
        <nav className="flex gap-2 text-[13px] text-text2">
          <Link href="/" className="hover:text-accent">Languages</Link>
          <span className="opacity-40">/</span>
          <Link href="/japanese" className="hover:text-accent">Japanese</Link>
          <span className="opacity-40">/</span>
          <Link href="/japanese/n5" className="hover:text-accent">JLPT N5</Link>
          <span className="opacity-40">/</span>
          <span>Quiz</span>
        </nav>
        <div className="flex gap-5 text-sm text-text2">
          <span>Score: <span className="font-semibold text-text">{score}</span></span>
          <span>Streak: <span className="font-semibold text-gold">{streak}</span></span>
          {questions.length > 0 && <span className="font-semibold text-text">{currentQ + (isComplete ? 0 : 1)}/{questions.length}</span>}
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-6 flex-1">
        {/* Mode Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
          {MODES.map((m) => (
            <button
              key={m.id}
              onClick={() => selectMode(m.id)}
              className={`bg-card border-2 rounded-xl p-4 text-center transition-all duration-200 cursor-pointer hover:border-accent hover:-translate-y-0.5 ${
                currentMode === m.id ? "border-accent bg-bg3" : "border-border"
              }`}
            >
              <span className="block text-[28px] mb-1.5 font-[family-name:var(--font-noto-sans-jp)]">{m.icon}</span>
              <span className="block font-semibold text-[13px]">{m.label}</span>
              <span className="block text-[11px] text-text2">{m.count} items</span>
            </button>
          ))}
        </div>

        {/* Filters */}
        {currentMode && (
          <div className="flex gap-2 flex-wrap mb-5">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => handleFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs border transition-all cursor-pointer ${
                  currentFilter === f.id
                    ? "bg-accent border-accent text-white"
                    : "bg-bg2 border-border text-text2 hover:border-accent hover:text-text"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}

        {/* Quiz Card */}
        {!isComplete && (
          <div className="bg-card border border-border rounded-[20px] p-10 text-center relative overflow-hidden min-h-[420px] flex flex-col items-center justify-center">
            {/* Gradient top line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-blue to-accent" />
            {/* Progress bar */}
            {questions.length > 0 && (
              <div
                className="absolute top-[3px] left-0 h-[3px] bg-correct rounded-r-sm transition-all duration-400"
                style={{ width: `${(currentQ / questions.length) * 100}%` }}
              />
            )}

            {question ? (
              <>
                <div className="text-xs text-text2 mb-3 tracking-[2px] uppercase">
                  Question {currentQ + 1} of {questions.length}
                </div>
                <div className="text-sm text-text2 mb-4">{question.prompt}</div>
                <div
                  className={`font-[family-name:var(--font-noto-sans-jp)] font-medium mb-9 leading-snug animate-pop-in ${
                    question.displayClass === "kanji"
                      ? "text-[96px] font-light leading-none mb-3"
                      : question.displayClass === "vocab"
                      ? "text-5xl"
                      : "text-[28px]"
                  }`}
                >
                  {question.display}
                </div>
                {question.hint && (
                  <div className="text-lg text-text2 mb-8 font-[family-name:var(--font-noto-sans-jp)]">
                    {question.hint}
                  </div>
                )}

                {/* Options */}
                <div className="grid grid-cols-2 gap-3 w-full max-w-[560px]">
                  {question.options.map((opt, i) => {
                    const isCorrectOption = opt === question.answer;
                    let cls = "bg-bg2 border-2 border-border hover:border-accent hover:bg-bg3 hover:scale-[1.02]";
                    if (answered) {
                      if (selectedIdx === i && isCorrectOption) cls = "bg-correct-bg border-2 border-correct text-correct";
                      else if (selectedIdx === i && !isCorrectOption) cls = "bg-wrong-bg border-2 border-wrong text-wrong";
                      else if (isCorrectOption) cls = "bg-correct-bg border-2 border-correct";
                      else cls = "bg-bg2 border-2 border-border opacity-50";
                    }
                    return (
                      <button
                        key={i}
                        onClick={() => checkAnswer(i)}
                        disabled={answered}
                        className={`rounded-xl p-4 font-[family-name:var(--font-noto-sans-jp)] text-base flex items-center justify-center min-h-[56px] transition-all cursor-pointer disabled:cursor-default ${cls} ${
                          question.optionClass === "kanji-option" ? "text-4xl font-[family-name:var(--font-noto-sans-jp)]" : ""
                        }`}
                      >
                        <span className="opacity-40 mr-2 text-xs">{i + 1}</span> {opt}
                      </button>
                    );
                  })}
                </div>

                {/* Feedback */}
                {answered && (
                  <div
                    className={`mt-5 p-4 rounded-xl text-[15px] w-full max-w-[560px] animate-fade-up ${
                      question.options[selectedIdx!] === question.answer
                        ? "bg-correct-bg border border-correct text-correct"
                        : "bg-wrong-bg border border-wrong text-wrong"
                    }`}
                  >
                    <div>{question.options[selectedIdx!] === question.answer ? "Correct!" : "Wrong!"}</div>
                    <div className="text-[13px] mt-1.5 opacity-80">{question.detail}</div>
                  </div>
                )}

                {/* Next Button */}
                {answered && (
                  <button
                    onClick={nextQuestion}
                    className="mt-5 bg-bg3 border border-border rounded-[10px] px-8 py-3 text-sm font-medium cursor-pointer transition-all hover:border-accent hover:bg-accent hover:text-white"
                  >
                    Next Question
                  </button>
                )}
              </>
            ) : (
              <p className="text-text2">Select a quiz mode above to begin</p>
            )}
          </div>
        )}

        {/* Results Screen */}
        {isComplete && (
          <div className="text-center animate-fade-up">
            <div className="text-[72px] font-bold gradient-text mb-2">{pct}%</div>
            <div className="text-text2 text-base mb-6">Correct Answers</div>
            <div className="flex gap-8 justify-center mb-8">
              <div className="text-center">
                <div className="text-[28px] font-bold text-correct">{score}</div>
                <div className="text-xs text-text2 mt-1">Correct</div>
              </div>
              <div className="text-center">
                <div className="text-[28px] font-bold text-wrong">{questions.length - score}</div>
                <div className="text-xs text-text2 mt-1">Wrong</div>
              </div>
              <div className="text-center">
                <div className="text-[28px] font-bold text-blue">{questions.length}</div>
                <div className="text-xs text-text2 mt-1">Total</div>
              </div>
            </div>
            <button
              onClick={() => currentMode && startQuiz(currentMode, currentFilter)}
              className="bg-accent border-none rounded-[10px] px-10 py-3 text-white text-[15px] font-semibold cursor-pointer transition-all hover:bg-accent2 hover:scale-[1.03]"
            >
              Try Again
            </button>
            <button
              onClick={backToMenu}
              className="bg-bg3 border-none rounded-[10px] px-10 py-3 text-text text-[15px] font-semibold cursor-pointer ml-3 transition-all hover:bg-accent hover:text-white"
            >
              Change Mode
            </button>

            {missed.length > 0 && (
              <div className="bg-bg2 rounded-xl p-5 text-left mt-5">
                <h3 className="text-sm text-text2 mb-3">Review Missed Questions</h3>
                {missed.map((q, i) => (
                  <div key={i} className="py-2 border-b border-border last:border-none flex justify-between text-sm">
                    <span className="font-[family-name:var(--font-noto-sans-jp)] font-medium">{q.display}</span>
                    <span className="text-text2">{q.answer}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      <div className="fixed bottom-4 right-4 text-[11px] text-text2 bg-bg2 px-3 py-1.5 rounded-md border border-border">
        <kbd className="bg-bg3 px-1.5 py-0.5 rounded text-[11px] font-mono border border-border">1</kbd>-
        <kbd className="bg-bg3 px-1.5 py-0.5 rounded text-[11px] font-mono border border-border">4</kbd> Answer{" "}
        <kbd className="bg-bg3 px-1.5 py-0.5 rounded text-[11px] font-mono border border-border">Enter</kbd>/
        <kbd className="bg-bg3 px-1.5 py-0.5 rounded text-[11px] font-mono border border-border">Space</kbd> Next
      </div>
    </>
  );
}
