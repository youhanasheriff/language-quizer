"use client";

import { useState } from "react";

export interface InteractiveWord {
  text: string;
  reading?: string;
  meaning?: string;
}

export interface InteractiveSentence {
  words: InteractiveWord[];
  translation: string;
}

export interface InteractivePassage {
  title: string;
  sentences: InteractiveSentence[];
}

interface InteractiveModeProps {
  passage: InteractivePassage;
  sentenceIdx: number;
  onWordClick: (word: InteractiveWord, position: { x: number; y: number }) => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function InteractiveMode({
  passage,
  sentenceIdx,
  onWordClick,
  onPrevious,
  onNext,
}: InteractiveModeProps) {
  const [showTranslation, setShowTranslation] = useState(false);
  const [tappedWordIdx, setTappedWordIdx] = useState<number | null>(null);
  const sentence = passage.sentences[sentenceIdx];
  const total = passage.sentences.length;
  const isFirst = sentenceIdx === 0;
  const isLast = sentenceIdx === total - 1;

  function handleWordClick(
    word: InteractiveWord,
    index: number,
    event: React.MouseEvent<HTMLSpanElement>
  ) {
    const rect = event.currentTarget.getBoundingClientRect();
    setTappedWordIdx(index);
    onWordClick(word, {
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
  }

  function handleNext() {
    setShowTranslation(false);
    setTappedWordIdx(null);
    onNext();
  }

  function handlePrevious() {
    setShowTranslation(false);
    setTappedWordIdx(null);
    onPrevious();
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#2e2e4a] bg-[#1e1e2e]">
      {/* Gradient top border */}
      <div className="h-[3px] bg-gradient-to-r from-[#7c6cf0] to-[#60a5fa]" />

      <div className="flex flex-col gap-6 p-6 sm:p-8">
        {/* Sentence counter */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#9999b3]">
          Sentence {sentenceIdx + 1} of {total}
        </p>

        {/* Japanese text with clickable words */}
        <div className="flex flex-wrap justify-center gap-1 text-[24px] leading-[2] font-[family-name:var(--font-noto-sans-jp)]">
          {sentence.words.map((word, index) => (
            <span
              key={index}
              onClick={(e) => handleWordClick(word, index, e)}
              className={`cursor-pointer rounded px-1 transition-colors ${
                tappedWordIdx === index
                  ? "bg-[#7c6cf0] text-white"
                  : "text-[#e4e4ef] hover:bg-[#24243a]"
              }`}
            >
              {word.text}
            </span>
          ))}
        </div>

        {/* Show full translation button */}
        {!showTranslation && (
          <button
            onClick={() => setShowTranslation(true)}
            className="mx-auto rounded-lg bg-[#7c6cf0] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6b5ce0]"
          >
            Show Full Translation
          </button>
        )}

        {/* Translation area */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            showTranslation
              ? "max-h-40 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-lg bg-[#1a1a24] px-4 py-3">
            <p className="text-center text-base text-[#e4e4ef]">
              {sentence.translation}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={handlePrevious}
            disabled={isFirst}
            className={`rounded-lg border border-[#2e2e4a] px-5 py-2.5 text-sm font-medium transition-colors ${
              isFirst
                ? "cursor-not-allowed opacity-30"
                : "bg-[#1a1a24] text-[#e4e4ef] hover:bg-[#24243a]"
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={isLast}
            className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
              isLast
                ? "cursor-not-allowed bg-[#7c6cf0]/30 text-white/50"
                : "bg-[#7c6cf0] text-white hover:bg-[#6b5ce0]"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
