"use client";

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  number: number;
  total: number;
  prompt: string;
  text: string;
  type: "kanji" | "vocab" | "sentence" | "grammar";
  readingHint?: string;
  options: QuizOption[];
}

export interface QuizFeedback {
  correct: boolean;
  detail?: string;
}

interface QuizCardProps {
  question: QuizQuestion;
  selectedOption: string | null;
  correctOption: string | null;
  feedback: QuizFeedback | null;
  progress: number;
  onCheckAnswer: (optionId: string) => void;
  onNextQuestion: () => void;
}

function getTextSizeClass(type: QuizQuestion["type"]): string {
  switch (type) {
    case "kanji":
      return "text-[96px] leading-none";
    case "vocab":
      return "text-[48px] leading-tight";
    case "sentence":
      return "text-[28px] leading-normal";
    case "grammar":
      return "text-[28px] leading-normal";
    default:
      return "text-[48px] leading-tight";
  }
}

export default function QuizCard({
  question,
  selectedOption,
  correctOption,
  feedback,
  progress,
  onCheckAnswer,
  onNextQuestion,
}: QuizCardProps) {
  const answered = selectedOption !== null;

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

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#2e2e4a] bg-[#1e1e2e]">
      {/* Gradient top border */}
      <div className="h-[3px] bg-gradient-to-r from-[#7c6cf0] to-[#60a5fa]" />

      {/* Progress bar */}
      <div className="h-1 bg-[#1a1a24]">
        <div
          className="h-full bg-[#4ade80] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex flex-col gap-6 p-6 sm:p-8">
        {/* Question number */}
        <p className="text-xs font-semibold uppercase tracking-widest text-[#9999b3]">
          Question {question.number} of {question.total}
        </p>

        {/* Prompt */}
        <p className="text-sm text-[#9999b3]">{question.prompt}</p>

        {/* Question text */}
        <p
          className={`text-center text-[#e4e4ef] font-[family-name:var(--font-noto-sans-jp)] ${getTextSizeClass(question.type)}`}
        >
          {question.text}
        </p>

        {/* Reading hint */}
        {question.readingHint && (
          <p className="text-center text-[18px] text-[#9999b3] font-[family-name:var(--font-noto-sans-jp)]">
            {question.readingHint}
          </p>
        )}

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
            Next Question
          </button>
        )}
      </div>
    </div>
  );
}
