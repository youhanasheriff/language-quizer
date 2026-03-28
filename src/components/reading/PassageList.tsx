"use client";

export interface PassagePreview {
  title: string;
  titleEn: string;
}

interface PassageListProps {
  passages: PassagePreview[];
  current: number | null;
  onSelect: (idx: number) => void;
}

export default function PassageList({
  passages,
  current,
  onSelect,
}: PassageListProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3">
      {passages.map((passage, index) => {
        const isActive = current === index;

        return (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`flex flex-col gap-1 rounded-xl border px-4 py-4 text-left transition-all ${
              isActive
                ? "border-[#7c6cf0] bg-[#24243a]"
                : "border-[#2e2e4a] bg-[#1e1e2e] hover:border-[#7c6cf0]/50 hover:bg-[#24243a]/50"
            }`}
          >
            <span className="text-base font-bold text-[#e4e4ef] font-[family-name:var(--font-noto-sans-jp)]">
              {passage.title}
            </span>
            <span className="text-xs text-[#9999b3]">{passage.titleEn}</span>
          </button>
        );
      })}
    </div>
  );
}
