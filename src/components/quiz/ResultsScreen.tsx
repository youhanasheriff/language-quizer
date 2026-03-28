"use client";

export interface MissedItem {
  japanese: string;
  english: string;
}

export interface QuizResults {
  correct: number;
  wrong: number;
  total: number;
  missed: MissedItem[];
}

interface ResultsScreenProps {
  results: QuizResults;
  onRestart: () => void;
  onBackToMenu: () => void;
}

export default function ResultsScreen({
  results,
  onRestart,
  onBackToMenu,
}: ResultsScreenProps) {
  const percentage = Math.round((results.correct / results.total) * 100);

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Percentage */}
      <div className="text-center">
        <p className="bg-gradient-to-r from-[#7c6cf0] to-[#60a5fa] bg-clip-text text-7xl font-bold text-transparent sm:text-8xl">
          {percentage}%
        </p>
        <p className="mt-2 text-lg text-[#9999b3]">Correct Answers</p>
      </div>

      {/* Stats row */}
      <div className="flex gap-8">
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl font-bold text-[#4ade80]">
            {results.correct}
          </span>
          <span className="text-xs text-[#9999b3]">Correct</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl font-bold text-[#f87171]">
            {results.wrong}
          </span>
          <span className="text-xs text-[#9999b3]">Wrong</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl font-bold text-[#60a5fa]">
            {results.total}
          </span>
          <span className="text-xs text-[#9999b3]">Total</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex w-full max-w-sm flex-col gap-3 sm:flex-row">
        <button
          onClick={onRestart}
          className="flex-1 rounded-lg bg-[#7c6cf0] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6b5ce0]"
        >
          Try Again
        </button>
        <button
          onClick={onBackToMenu}
          className="flex-1 rounded-lg border border-[#2e2e4a] bg-[#1a1a24] px-6 py-3 text-sm font-semibold text-[#e4e4ef] transition-colors hover:bg-[#24243a]"
        >
          Change Mode
        </button>
      </div>

      {/* Missed items */}
      {results.missed.length > 0 && (
        <div className="w-full max-w-lg">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#9999b3]">
            Missed Items
          </h3>
          <div className="flex flex-col gap-2">
            {results.missed.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg bg-[#1a1a24] px-4 py-3"
              >
                <span className="text-base text-[#e4e4ef] font-[family-name:var(--font-noto-sans-jp)]">
                  {item.japanese}
                </span>
                <span className="text-sm text-[#9999b3]">{item.english}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
