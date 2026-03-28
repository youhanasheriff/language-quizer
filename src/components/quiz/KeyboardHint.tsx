"use client";

export default function KeyboardHint() {
  return (
    <div className="fixed bottom-4 right-4 z-40 hidden items-center gap-3 rounded-full border border-[#2e2e4a] bg-[#1a1a24]/90 px-4 py-2 text-xs text-[#9999b3] backdrop-blur-sm lg:flex">
      <span className="flex items-center gap-1.5">
        <kbd className="rounded border border-[#2e2e4a] bg-[#24243a] px-1.5 py-0.5 font-mono text-[10px] text-[#e4e4ef]">
          1
        </kbd>
        <span>-</span>
        <kbd className="rounded border border-[#2e2e4a] bg-[#24243a] px-1.5 py-0.5 font-mono text-[10px] text-[#e4e4ef]">
          4
        </kbd>
        <span>Answer</span>
      </span>
      <span className="text-[#2e2e4a]">|</span>
      <span className="flex items-center gap-1.5">
        <kbd className="rounded border border-[#2e2e4a] bg-[#24243a] px-1.5 py-0.5 font-mono text-[10px] text-[#e4e4ef]">
          Enter
        </kbd>
        <span>/</span>
        <kbd className="rounded border border-[#2e2e4a] bg-[#24243a] px-1.5 py-0.5 font-mono text-[10px] text-[#e4e4ef]">
          Space
        </kbd>
        <span>Next</span>
      </span>
    </div>
  );
}
