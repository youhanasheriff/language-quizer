"use client";

export interface Mode {
  id: string;
  icon: string;
  label: string;
  count: number;
}

interface ModeSelectorProps {
  modes: Mode[];
  current: string | null;
  onSelect: (id: string) => void;
}

export default function ModeSelector({
  modes,
  current,
  onSelect,
}: ModeSelectorProps) {
  return (
    <div className="grid auto-rows-fr grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4">
      {modes.map((mode) => {
        const isActive = current === mode.id;

        return (
          <button
            key={mode.id}
            onClick={() => onSelect(mode.id)}
            className={`flex flex-col items-center gap-2 rounded-xl border px-4 py-5 transition-all ${
              isActive
                ? "border-[#7c6cf0] bg-[#24243a]"
                : "border-[#2e2e4a] bg-[#1e1e2e] hover:border-[#7c6cf0]/50 hover:bg-[#24243a]/50"
            }`}
          >
            <span className="text-[28px] leading-none">{mode.icon}</span>
            <span className="text-sm font-bold text-[#e4e4ef]">
              {mode.label}
            </span>
            <span className="text-xs text-[#9999b3]">
              {mode.count} questions
            </span>
          </button>
        );
      })}
    </div>
  );
}
