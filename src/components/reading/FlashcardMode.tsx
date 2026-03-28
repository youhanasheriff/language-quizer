"use client";

import { useState } from "react";

export interface FlashcardSentence {
  japanese: string;
  english: string;
  romaji?: string;
}

export interface FlashcardPassage {
  title: string;
  sentences: FlashcardSentence[];
}

interface FlashcardModeProps {
  passage: FlashcardPassage;
  sentenceIdx: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function FlashcardMode({
  passage,
  sentenceIdx,
  onPrevious,
  onNext,
}: FlashcardModeProps) {
  const [revealed, setRevealed] = useState(false);
  const sentence = passage.sentences[sentenceIdx];
  const total = passage.sentences.length;
  const isFirst = sentenceIdx === 0;
  const isLast = sentenceIdx === total - 1;

  function handleNext() {
    setRevealed(false);
    onNext();
  }

  function handlePrevious() {
    setRevealed(false);
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

        {/* Japanese text */}
        <p className="text-center text-[24px] leading-[2] text-[#e4e4ef] font-[family-name:var(--font-noto-sans-jp)]">
          {sentence.japanese}
        </p>

        {/* Reveal button */}
        {!revealed && (
          <button
            onClick={() => setRevealed(true)}
            className="mx-auto rounded-lg bg-[#7c6cf0] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6b5ce0]"
          >
            Reveal Translation
          </button>
        )}

        {/* Translation area */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            revealed
              ? "max-h-40 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-lg bg-[#1a1a24] px-4 py-3">
            <p className="text-center text-base text-[#e4e4ef]">
              {sentence.english}
            </p>
            {sentence.romaji && (
              <p className="mt-1 text-center text-sm text-[#9999b3]">
                {sentence.romaji}
              </p>
            )}
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
