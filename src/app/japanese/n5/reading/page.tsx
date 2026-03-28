"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { PASSAGES } from "@/data";
import type { Passage } from "@/data/types";

const READING_MODES = [
  { id: "flashcard", icon: "\uD83D\uDCC4", label: "Flashcard", desc: "Read Japanese, reveal English" },
  { id: "interactive", icon: "\uD83D\uDD0D", label: "Word-by-Word", desc: "Tap words to see meanings" },
  { id: "comprehension", icon: "\u2753", label: "Comprehension", desc: "Read and answer questions" },
];

export default function ReadingPage() {
  const [mode, setMode] = useState<string | null>(null);
  const [passageIdx, setPassageIdx] = useState<number | null>(null);
  const [sentIdx, setSentIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [compQ, setCompQ] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [compAnswered, setCompAnswered] = useState(false);
  const [compSelected, setCompSelected] = useState<number | null>(null);
  const [tooltip, setTooltip] = useState<{ word: string; reading: string; meaning: string; x: number; y: number } | null>(null);
  const [sentTranslation, setSentTranslation] = useState(false);

  const passage: Passage | null = passageIdx !== null ? PASSAGES[passageIdx] : null;
  const sentence = passage?.sentences[sentIdx] ?? null;
  const compQuestion = passage?.questions[compQ] ?? null;
  const compComplete = passage ? compQ >= passage.questions.length : false;
  const compPct = passage && passage.questions.length > 0 ? Math.round((compScore / passage.questions.length) * 100) : 0;

  function selectPassage(idx: number) {
    setPassageIdx(idx);
    setSentIdx(0);
    setRevealed(false);
    setCompQ(0);
    setCompScore(0);
    setCompAnswered(false);
    setCompSelected(null);
    setSentTranslation(false);
    setTooltip(null);
  }

  function checkCompAnswer(idx: number) {
    if (compAnswered || !compQuestion) return;
    setCompAnswered(true);
    setCompSelected(idx);
    if (idx === compQuestion.answer) setCompScore((s) => s + 1);
  }

  function nextCompQ() {
    setCompQ((q) => q + 1);
    setCompAnswered(false);
    setCompSelected(null);
  }

  // Keyboard shortcuts
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (mode === "flashcard") {
        if ((e.key === " " || e.key === "Enter") && !revealed) { e.preventDefault(); setRevealed(true); }
        else if ((e.key === " " || e.key === "Enter") && revealed) { e.preventDefault(); setSentIdx((s) => Math.min(s + 1, (passage?.sentences.length ?? 1) - 1)); setRevealed(false); }
        if (e.key === "ArrowRight") { setSentIdx((s) => Math.min(s + 1, (passage?.sentences.length ?? 1) - 1)); setRevealed(false); }
        if (e.key === "ArrowLeft") { setSentIdx((s) => Math.max(s - 1, 0)); setRevealed(false); }
      }
      if (mode === "interactive") {
        if (e.key === "ArrowRight") { setSentIdx((s) => Math.min(s + 1, (passage?.sentences.length ?? 1) - 1)); setTooltip(null); setSentTranslation(false); }
        if (e.key === "ArrowLeft") { setSentIdx((s) => Math.max(s - 1, 0)); setTooltip(null); setSentTranslation(false); }
      }
      if (mode === "comprehension") {
        if (e.key >= "1" && e.key <= "4" && !compAnswered && compQuestion) {
          checkCompAnswer(parseInt(e.key) - 1);
        }
        if ((e.key === "Enter" || e.key === " ") && compAnswered) { e.preventDefault(); nextCompQ(); }
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

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
          <span>Reading</span>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-6 flex-1">
        {/* Mode Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {READING_MODES.map((m) => (
            <button
              key={m.id}
              onClick={() => { setMode(m.id); setPassageIdx(null); }}
              className={`bg-card border-2 rounded-xl p-4 text-center transition-all cursor-pointer hover:border-accent hover:-translate-y-0.5 ${
                mode === m.id ? "border-accent bg-bg3" : "border-border"
              }`}
            >
              <span className="block text-[28px] mb-1.5">{m.icon}</span>
              <span className="block font-semibold text-[13px]">{m.label}</span>
              <span className="block text-[11px] text-text2">{m.desc}</span>
            </button>
          ))}
        </div>

        {/* Passage List */}
        {mode && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 mb-6">
            {PASSAGES.map((p, i) => (
              <button
                key={p.id}
                onClick={() => selectPassage(i)}
                className={`bg-card border-2 rounded-xl py-3.5 px-4 text-left transition-all cursor-pointer hover:border-accent hover:-translate-y-0.5 ${
                  passageIdx === i ? "border-accent bg-bg3" : "border-border"
                }`}
              >
                <div className="font-semibold font-[family-name:var(--font-noto-sans-jp)]">{p.title}</div>
                <div className="text-xs text-text2 mt-0.5">{p.titleEn}</div>
              </button>
            ))}
          </div>
        )}

        {/* Reading Card */}
        {passage && mode && (
          <div className="bg-card border border-border rounded-[20px] p-9 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-blue to-accent" />

            {/* FLASHCARD MODE */}
            {mode === "flashcard" && sentence && (
              <>
                <div className="text-center text-[13px] text-text2 mb-4">
                  Sentence {sentIdx + 1} of {passage.sentences.length}
                </div>
                <div className="text-center text-2xl font-[family-name:var(--font-noto-sans-jp)] font-medium leading-relaxed mb-6 p-5">
                  {sentence.jp}
                </div>
                {!revealed ? (
                  <div className="text-center">
                    <button onClick={() => setRevealed(true)} className="bg-accent border-none rounded-[10px] px-10 py-3 text-white text-[15px] font-semibold cursor-pointer transition-all hover:bg-accent2 hover:scale-[1.03]">
                      Reveal Translation
                    </button>
                  </div>
                ) : (
                  <div className="bg-bg2 rounded-xl p-5 mt-4 animate-fade-up">
                    <div className="text-base">{sentence.en}</div>
                  </div>
                )}
                <div className="flex justify-center gap-3 mt-6">
                  <button onClick={() => { setSentIdx(Math.max(0, sentIdx - 1)); setRevealed(false); }} disabled={sentIdx === 0} className="bg-bg3 border border-border rounded-[10px] px-8 py-3 text-sm font-medium cursor-pointer transition-all hover:border-accent disabled:opacity-30 disabled:cursor-default">Previous</button>
                  <button onClick={() => { setSentIdx(Math.min(passage.sentences.length - 1, sentIdx + 1)); setRevealed(false); }} disabled={sentIdx >= passage.sentences.length - 1} className="bg-bg3 border border-border rounded-[10px] px-8 py-3 text-sm font-medium cursor-pointer transition-all hover:border-accent disabled:opacity-30 disabled:cursor-default">Next</button>
                </div>
              </>
            )}

            {/* INTERACTIVE MODE */}
            {mode === "interactive" && sentence && (
              <>
                <div className="text-center text-[13px] text-text2 mb-4">
                  Sentence {sentIdx + 1} of {passage.sentences.length}
                </div>
                <div className="text-center text-[26px] font-[family-name:var(--font-noto-sans-jp)] leading-[2.2] mb-6">
                  {sentence.words.map((w, i) => (
                    <span
                      key={i}
                      onClick={(e) => {
                        const rect = (e.target as HTMLElement).getBoundingClientRect();
                        setTooltip({ word: w.word, reading: w.reading, meaning: w.meaning, x: Math.min(rect.left, window.innerWidth - 200), y: rect.bottom + 8 });
                      }}
                      className="cursor-pointer px-1 py-0.5 rounded-md transition-all hover:bg-bg3"
                    >
                      {w.word}
                    </span>
                  ))}
                </div>
                <div className="text-center mb-3">
                  <button onClick={() => setSentTranslation(true)} className="bg-bg3 border-none rounded-[10px] px-5 py-2 text-[13px] cursor-pointer transition-all hover:bg-accent hover:text-white">Show Full Translation</button>
                </div>
                {sentTranslation && (
                  <div className="bg-bg2 rounded-xl p-4 animate-fade-up">
                    <div className="font-[family-name:var(--font-noto-sans-jp)] text-base">{sentence.jp}</div>
                    <div className="text-sm text-text2 mt-1">{sentence.en}</div>
                  </div>
                )}
                <div className="flex justify-center gap-3 mt-6">
                  <button onClick={() => { setSentIdx(Math.max(0, sentIdx - 1)); setTooltip(null); setSentTranslation(false); }} disabled={sentIdx === 0} className="bg-bg3 border border-border rounded-[10px] px-8 py-3 text-sm font-medium cursor-pointer transition-all hover:border-accent disabled:opacity-30 disabled:cursor-default">Previous</button>
                  <button onClick={() => { setSentIdx(Math.min(passage.sentences.length - 1, sentIdx + 1)); setTooltip(null); setSentTranslation(false); }} disabled={sentIdx >= passage.sentences.length - 1} className="bg-bg3 border border-border rounded-[10px] px-8 py-3 text-sm font-medium cursor-pointer transition-all hover:border-accent disabled:opacity-30 disabled:cursor-default">Next</button>
                </div>
              </>
            )}

            {/* COMPREHENSION MODE */}
            {mode === "comprehension" && (
              <>
                <div className="bg-bg2 rounded-xl p-6 mb-6 text-[22px] font-[family-name:var(--font-noto-sans-jp)] leading-[2]">
                  {passage.sentences.map((s) => s.jp).join("")}
                </div>

                {!compComplete && compQuestion ? (
                  <>
                    <div className="text-center text-[13px] text-text2 mb-4">
                      Question {compQ + 1} of {passage.questions.length}
                    </div>
                    <div className="font-[family-name:var(--font-noto-sans-jp)] text-lg mb-1.5">{compQuestion.question}</div>
                    <div className="text-sm text-text2 mb-4">{compQuestion.questionEn}</div>
                    <div className="grid grid-cols-2 gap-2.5 mb-5">
                      {compQuestion.options.map((opt, i) => {
                        const isCorrect = i === compQuestion.answer;
                        let cls = "bg-bg2 border-2 border-border hover:border-accent hover:bg-bg3";
                        if (compAnswered) {
                          if (compSelected === i && isCorrect) cls = "bg-correct-bg border-2 border-correct text-correct";
                          else if (compSelected === i) cls = "bg-wrong-bg border-2 border-wrong text-wrong";
                          else if (isCorrect) cls = "bg-correct-bg border-2 border-correct";
                          else cls = "bg-bg2 border-2 border-border opacity-50";
                        }
                        return (
                          <button key={i} onClick={() => checkCompAnswer(i)} disabled={compAnswered}
                            className={`rounded-xl p-4 font-[family-name:var(--font-noto-sans-jp)] text-base flex items-center justify-center min-h-[56px] transition-all cursor-pointer disabled:cursor-default ${cls}`}>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {compAnswered && (
                      <>
                        <div className={`p-4 rounded-xl text-[15px] animate-fade-up ${compSelected === compQuestion.answer ? "bg-correct-bg border border-correct text-correct" : "bg-wrong-bg border border-wrong text-wrong"}`}>
                          {compSelected === compQuestion.answer ? "Correct!" : "Wrong!"}
                        </div>
                        <div className="flex justify-center mt-5">
                          <button onClick={nextCompQ} className="bg-bg3 border border-border rounded-[10px] px-8 py-3 text-sm font-medium cursor-pointer transition-all hover:border-accent hover:bg-accent hover:text-white">Next Question</button>
                        </div>
                      </>
                    )}
                  </>
                ) : compComplete ? (
                  <div className="text-center">
                    <div className="text-5xl font-bold gradient-text mb-2">{compPct}%</div>
                    <p className="text-text2 mb-4">{compScore} / {passage.questions.length} correct</p>
                    <button onClick={() => { setCompQ(0); setCompScore(0); setCompAnswered(false); setCompSelected(null); }} className="bg-accent border-none rounded-[10px] px-10 py-3 text-white text-[15px] font-semibold cursor-pointer">Try Again</button>
                  </div>
                ) : null}
              </>
            )}
          </div>
        )}
      </main>

      {/* Word Tooltip */}
      {tooltip && (
        <div
          className="fixed z-[200] bg-bg2 border border-accent rounded-[10px] p-4 min-w-[160px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] animate-pop-in"
          style={{ left: tooltip.x, top: tooltip.y }}
          onClick={() => setTooltip(null)}
        >
          <div className="font-[family-name:var(--font-noto-sans-jp)] text-xl font-medium mb-1">{tooltip.word}</div>
          <div className="text-[13px] text-text2 mb-1">{tooltip.reading}</div>
          <div className="text-sm text-accent2">{tooltip.meaning}</div>
        </div>
      )}
    </>
  );
}
