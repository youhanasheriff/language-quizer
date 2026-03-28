"use client";

export interface ComprehensionOption {
  id: string;
  text: string;
}

export interface ComprehensionQuestion {
  questionJp: string;
  questionEn: string;
  options: ComprehensionOption[];
}

export interface ComprehensionPassage {
  title: string;
  fullText: string;
  questions: ComprehensionQuestion[];
}

export interface ComprehensionFeedback {
  correct: boolean;
  detail?: string;
}

interface ComprehensionModeProps {
  passage: ComprehensionPassage;
  questionIdx: number;
  score: number;
  selectedOption: string | null;
  correctOption: string | null;
  feedback: ComprehensionFeedback | null;
  finished: boolean;
  totalCorrect: number;
  onCheckAnswer: (optionId: string) => void;
  onNextQuestion: () => void;
}

export default function ComprehensionMode({
  passage,
  questionIdx,
  score,
  selectedOption,
  correctOption,
  feedback,
  finished,
  totalCorrect,
  onCheckAnswer,
  onNextQuestion,
}: ComprehensionModeProps) {
  const answered = selectedOption !== null;
  const question = passage.questions[questionIdx];
  const totalQuestions = passage.questions.length;

  function getOptionClasses(optionId: string): string {
    const base =
      "flex items-center gap-3 rounded-lg border px-4 py-3 text-left transition-all";

    if (!answered) {
      return `${base} border-[#2e2e4a] bg-[#1a1a24] hover:border-[#7c6cf0] hover:bg-[#24243a] cursor-pointer`;
    }

    if (optionId === correctOption) {
      return `${base} border-[#4ade80] bg-[#4ade80]/10`;
    }

    if (optionId === selectedOption && optionId !== correctOption) {
      return `${base} border-[#f87171] bg-[#f87171]/10`;
    }

    return `${base} border-[#2e2e4a] bg-[#1a1a24] opacity-50`;
  }

  if (finished) {
    const percentage = Math.round((totalCorrect / totalQuestions) * 100);

    return (
      <div className="overflow-hidden rounded-2xl border border-[#2e2e4a] bg-[#1e1e2e]">
        <div className="h-[3px] bg-gradient-to-r from-[#7c6cf0] to-[#60a5fa]" />
        <div className="flex flex-col items-center gap-6 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9999b3]">
            Comprehension Complete
          </p>
          <p className="bg-gradient-to-r from-[#7c6cf0] to-[#60a5fa] bg-clip-text text-6xl font-bold text-transparent">
            {percentage}%
          </p>
          <p className="text-[#9999b3]">
            {totalCorrect} of {totalQuestions} correct
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#2e2e4a] bg-[#1e1e2e]">
      {/* Gradient top border */}
      <div className="h-[3px] bg-gradient-to-r from-[#7c6cf0] to-[#60a5fa]" />

      <div className="flex flex-col gap-6 p-6 sm:p-8">
        {/* Score indicator */}
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9999b3]">
            Question {questionIdx + 1} of {totalQuestions}
          </p>
          <p className="text-xs text-[#9999b3]">
            Score: <span className="font-bold text-[#4ade80]">{score}</span>
          </p>
        </div>

        {/* Full passage text */}
        <div className="rounded-lg bg-[#1a1a24] px-5 py-4">
          <p className="text-[22px] leading-[2] text-[#e4e4ef] font-[family-name:var(--font-noto-sans-jp)]">
            {passage.fullText}
          </p>
        </div>

        {/* Question */}
        <div className="flex flex-col gap-1">
          <p className="text-[18px] text-[#e4e4ef] font-[family-name:var(--font-noto-sans-jp)]">
            {question.questionJp}
          </p>
          <p className="text-[14px] text-[#9999b3]">{question.questionEn}</p>
        </div>

        {/* Options grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {question.options.map((option, index) => (
            <button
              key={option.id}
              disabled={answered}
              onClick={() => onCheckAnswer(option.id)}
              className={getOptionClasses(option.id)}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#24243a] text-xs font-bold text-[#9999b3]">
                {index + 1}
              </span>
              <span className="text-sm text-[#e4e4ef]">{option.text}</span>
            </button>
          ))}
        </div>

        {/* Feedback */}
        {feedback && (
          <div
            className={`rounded-lg px-4 py-3 text-sm ${
              feedback.correct
                ? "border border-[#4ade80]/30 bg-[#4ade80]/10 text-[#4ade80]"
                : "border border-[#f87171]/30 bg-[#f87171]/10 text-[#f87171]"
            }`}
          >
            <p className="font-semibold">
              {feedback.correct ? "Correct!" : "Incorrect"}
            </p>
            {feedback.detail && (
              <p className="mt-1 opacity-80">{feedback.detail}</p>
            )}
          </div>
        )}

        {/* Next button */}
        {answered && (
          <button
            onClick={onNextQuestion}
            className="w-full rounded-lg bg-[#7c6cf0] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6b5ce0]"
          >
            {questionIdx === totalQuestions - 1
              ? "See Results"
              : "Next Question"}
          </button>
        )}
      </div>
    </div>
  );
}
