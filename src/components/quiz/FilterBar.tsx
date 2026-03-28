"use client";

interface Filter {
  id: string;
  label: string;
}

interface FilterBarProps {
  filters: Filter[];
  current: string;
  onSelect: (id: string) => void;
}

export default function FilterBar({
  filters,
  current,
  onSelect,
}: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = current === filter.id;

        return (
          <button
            key={filter.id}
            onClick={() => onSelect(filter.id)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
              isActive
                ? "bg-[#7c6cf0] text-white"
                : "bg-[#1a1a24] text-[#9999b3] hover:bg-[#24243a] hover:text-[#e4e4ef]"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
