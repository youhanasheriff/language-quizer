import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Language Quizer",
  description:
    "Practice languages with quizzes and reading exercises. Japanese JLPT N5 available now.",
};

const languages = [
  {
    code: "JP",
    name: "Japanese",
    desc: "JLPT N5 ~ N1",
    meta: "139 Kanji, 700+ Vocab, 58 Grammar Rules",
    href: "/japanese",
    active: true,
  },
  { code: "KR", name: "Korean", desc: "TOPIK I ~ II", active: false },
  { code: "AR", name: "Arabic", desc: "Beginner ~ Advanced", active: false },
  { code: "ZH", name: "Chinese", desc: "HSK 1 ~ 6", active: false },
];

export default function HomePage() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-bg2 border-b border-border px-6 py-4 backdrop-blur-xl">
        <Link href="/" className="text-xl font-bold gradient-text">
          Language Quizer
        </Link>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 flex-1">
        <h2 className="text-[28px] font-bold mb-2">Choose a Language</h2>
        <p className="text-text2 text-[15px] mb-8">
          Select the language you want to practice
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {languages.map((lang) =>
            lang.active ? (
              <Link
                key={lang.code}
                href={lang.href!}
                className="bg-card border-2 border-border rounded-2xl p-7 text-center transition-all duration-200 hover:border-accent hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(124,108,240,0.15)]"
              >
                <div className="w-16 h-16 rounded-2xl bg-bg3 flex items-center justify-center mx-auto mb-4 text-[22px] font-extrabold text-accent tracking-wide">
                  {lang.code}
                </div>
                <div className="text-xl font-bold mb-1">{lang.name}</div>
                <div className="text-[13px] text-text2 mb-3">{lang.desc}</div>
                <div className="text-[11px] text-text2 opacity-70">
                  {lang.meta}
                </div>
              </Link>
            ) : (
              <div
                key={lang.code}
                className="bg-card border-2 border-border rounded-2xl p-7 text-center opacity-45 cursor-not-allowed relative"
              >
                <div className="w-16 h-16 rounded-2xl bg-bg3 flex items-center justify-center mx-auto mb-4 text-[22px] font-extrabold text-accent tracking-wide">
                  {lang.code}
                </div>
                <div className="text-xl font-bold mb-1">{lang.name}</div>
                <div className="text-[13px] text-text2">{lang.desc}</div>
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
