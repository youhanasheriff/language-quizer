import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JLPT N5",
  description:
    "JLPT N5 practice: 139 Kanji, 700+ Vocabulary, 58 Grammar Rules, 9 Reading Passages.",
};

export default function N5Page() {
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
          <Link href="/japanese" className="hover:text-accent">
            Japanese
          </Link>
          <span className="opacity-40">/</span>
          <span>JLPT N5</span>
        </nav>
      </header>

      <main className="max-w-[960px] mx-auto px-6 py-10 flex-1">
        <h2 className="text-[28px] font-bold mb-2">JLPT N5</h2>
        <p className="text-text2 text-[15px] mb-8">
          Choose your practice mode
        </p>

        <Link
          href="/japanese/n5/quiz"
          className="block bg-card border-2 border-border rounded-2xl p-8 mb-4 transition-all duration-200 hover:border-accent hover:-translate-y-0.5"
        >
          <h3 className="text-xl font-bold mb-2">Quiz Practice</h3>
          <p className="text-text2 text-sm mb-3">
            Test your knowledge with multiple choice questions across 8
            different modes
          </p>
          <div className="flex gap-2 flex-wrap">
            {["139 Kanji", "704 Vocabulary", "58 Grammar Rules", "Fill the Blank"].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-bg3 px-2.5 py-1 rounded-md text-[11px] text-text2"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </Link>

        <Link
          href="/japanese/n5/reading"
          className="block bg-card border-2 border-border rounded-2xl p-8 transition-all duration-200 hover:border-accent hover:-translate-y-0.5"
        >
          <h3 className="text-xl font-bold mb-2">Reading Practice</h3>
          <p className="text-text2 text-sm mb-3">
            Improve your reading with flashcards, comprehension questions, and
            interactive word-by-word breakdowns
          </p>
          <div className="flex gap-2 flex-wrap">
            {["9 Passages", "Flashcard Mode", "Comprehension", "Word-by-Word"].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-bg3 px-2.5 py-1 rounded-md text-[11px] text-text2"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </Link>
      </main>

      <footer className="text-center py-8 text-text2 text-[13px] opacity-50">
        Built by Youhana Sheriff
      </footer>
    </>
  );
}
