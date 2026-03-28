"use client";

interface WordTooltipProps {
  word: string;
  reading: string;
  meaning: string;
  position: { x: number; y: number };
  visible: boolean;
}

export default function WordTooltip({
  word,
  reading,
  meaning,
  position,
  visible,
}: WordTooltipProps) {
  if (!visible) return null;

  return (
    <div
      className="fixed z-50 w-max max-w-xs -translate-x-1/2 -translate-y-full rounded-lg border border-[#7c6cf0] bg-[#1a1a24] px-4 py-3 shadow-lg shadow-black/40"
      style={{
        left: position.x,
        top: position.y - 8,
      }}
    >
      {/* Arrow */}
      <div
        className="absolute left-1/2 top-full -translate-x-1/2 border-[6px] border-transparent border-t-[#7c6cf0]"
      />

      <p className="text-center text-[20px] text-[#e4e4ef] font-[family-name:var(--font-noto-sans-jp)]">
        {word}
      </p>
      <p className="mt-0.5 text-center text-[13px] text-[#9999b3]">
        {reading}
      </p>
      <p className="mt-1 text-center text-[14px] text-[#60a5fa]">{meaning}</p>
    </div>
  );
}
