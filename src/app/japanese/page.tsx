import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Japanese (JLPT)",
  description:
    "Practice Japanese for JLPT N5 through N1. Kanji, vocabulary, grammar, and reading.",
};

const levels = [
  {
    level: "N5",
    name: "JLPT N5 - Beginner",
    desc: "Basic Japanese — greetings, self-introduction, daily life",
    stats: "139 Kanji, 700+ Vocabulary, 58 Grammar Rules, 10 Lessons",
    color: "from-[#4ade80] to-[#22c55e] text-[#052e16]",
    href: "/japanese/n5",
    active: true,
  },
  {
    level: "N4",
    name: "JLPT N4 - Elementary",
    desc: "Basic conversations, more kanji, grammar patterns",
    color: "from-[#60a5fa] to-[#3b82f6] text-[#0c1f3f]",
    active: false,
  },
  {
    level: "N3",
    name: "JLPT N3 - Intermediate",
    desc: "Everyday situations, reading comprehension",
    color: "from-[#fbbf24] to-[#f59e0b] text-[#422006]",
    active: false,
  },
  {
    level: "N2",
    name: "JLPT N2 - Upper Intermediate",
    desc: "Complex grammar, newspaper articles, business Japanese",
    color: "from-[#f87171] to-[#ef4444] text-[#3b0a0a]",
    active: false,
  },
  {
    level: "N1",
    name: "JLPT N1 - Advanced",
    desc: "Near-native comprehension, academic and professional use",
    color: "from-[#c084fc] to-[#a855f7] text-[#2e0854]",
    active: false,
  },
];

export default function JapanesePage() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-bg2 border-b border-border px-6 py-4 backdrop-blur-xl flex items-center justify-between">
        <Link href="/" className="text-xl font-bold gradient-text">
          Language Quizer
        </Link>
        <nav className="flex gap-2 text-[13px] text-text2">
          <Link href="/" className="hover:text-accent">
            Languages
          </Link>
          <span className="opacity-40">/</span>
          <span>Japanese</span>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 flex-1">
        <h2 className="text-[28px] font-bold mb-2">Japanese (JLPT)</h2>
        <p className="text-text2 text-[15px] mb-8">
          Select your JLPT level to start practicing
        </p>

        <div className="flex flex-col gap-3">
          {levels.map((lv) =>
            lv.active ? (
              <Link
                key={lv.level}
                href={lv.href!}
                className="bg-card border-2 border-border rounded-2xl p-6 flex items-center gap-5 transition-all duration-200 hover:border-accent hover:-translate-y-0.5"
              >
                <div
                  className={`w-14 h-14 rounded-[14px] flex items-center justify-center text-lg font-extrabold shrink-0 bg-gradient-to-br ${lv.color}`}
                >
                  {lv.level}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{lv.name}</h3>
                  <p className="text-[13px] text-text2">{lv.desc}</p>
                  <div className="text-[11px] text-text2 opacity-70 mt-1.5">
                    {lv.stats}
                  </div>
                </div>
              </Link>
            ) : (
              <div
                key={lv.level}
                className="bg-card border-2 border-border rounded-2xl p-6 flex items-center gap-5 opacity-35 cursor-not-allowed relative"
              >
                <div
                  className={`w-14 h-14 rounded-[14px] flex items-center justify-center text-lg font-extrabold shrink-0 bg-gradient-to-br ${lv.color}`}
                >
                  {lv.level}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{lv.name}</h3>
                  <p className="text-[13px] text-text2">{lv.desc}</p>
                  <div className="text-[11px] text-text2 opacity-70 mt-1.5">
                    Coming Soon
                  </div>
                </div>
                <span className="absolute top-3 right-3 bg-bg3 px-2.5 py-1 rounded-md text-[10px] font-semibold text-text2 uppercase tracking-wider">
                  Coming Soon
                </span>
              </div>
            )
          )}
        </div>
      </main>

      <footer className="text-center py-8 text-text2 text-[13px] opacity-50">
        Built by Youhana Sheriff
      </footer>
    </>
  );
}
