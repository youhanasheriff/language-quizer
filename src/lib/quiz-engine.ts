import type { Question } from "@/data/types";
import { SENTENCES } from "@/data";
import { shuffle } from "./shuffle";
import { getFilteredKanji, getFilteredVocab, getFilteredGrammar } from "./filters";

export function buildKanjiQuestions(mode: string, filter: string): Question[] {
  const pool = shuffle(getFilteredKanji(filter));
  const count = Math.min(pool.length, 20);
  const allKanji = getFilteredKanji(filter);

  return pool.slice(0, count).map((k) => {
    if (mode === "kanji-meaning") {
      const distractors = shuffle(allKanji.filter((x) => x.k !== k.k)).slice(0, 3).map((x) => x.en);
      return { type: "mc" as const, display: k.k, displayClass: "kanji" as const, prompt: "What does this kanji mean?", hint: `${k.on} / ${k.kun}`.replace(/ \/ $/, ""), answer: k.en, options: shuffle([k.en, ...distractors]), detail: `${k.k} (${k.on}${k.kun ? " / " + k.kun : ""}) = ${k.en}` };
    } else if (mode === "meaning-kanji") {
      const distractors = shuffle(allKanji.filter((x) => x.k !== k.k)).slice(0, 3).map((x) => x.k);
      return { type: "mc" as const, display: k.en, displayClass: "vocab" as const, prompt: "Which kanji matches this meaning?", hint: "", answer: k.k, options: shuffle([k.k, ...distractors]), optionClass: "kanji-option", detail: `${k.en} = ${k.k} (${k.on})` };
    } else {
      const reading = k.kun || k.on;
      const distractors = shuffle(allKanji.filter((x) => x.k !== k.k)).slice(0, 3).map((x) => x.kun || x.on);
      return { type: "mc" as const, display: k.k, displayClass: "kanji" as const, prompt: "What is the reading of this kanji?", hint: k.en, answer: reading, options: shuffle([reading, ...distractors]), detail: `${k.k} = ${reading} (${k.en})` };
    }
  });
}

export function buildVocabQuestions(mode: string, filter: string): Question[] {
  const pool = shuffle(getFilteredVocab(filter));
  const count = Math.min(pool.length, 20);
  const allVocab = getFilteredVocab(filter);

  return pool.slice(0, count).map((v) => {
    if (mode === "vocab-meaning") {
      const distractors = shuffle(allVocab.filter((x) => x.japanese !== v.japanese)).slice(0, 3).map((x) => x.english);
      return { type: "mc" as const, display: v.japanese, displayClass: "vocab" as const, prompt: "What does this word mean?", hint: "", answer: v.english, options: shuffle([v.english, ...distractors]), detail: `${v.japanese} = ${v.english}` };
    } else {
      const distractors = shuffle(allVocab.filter((x) => x.japanese !== v.japanese)).slice(0, 3).map((x) => x.japanese);
      return { type: "mc" as const, display: v.english, displayClass: "vocab" as const, prompt: "Which is the correct Japanese word?", hint: "", answer: v.japanese, options: shuffle([v.japanese, ...distractors]), detail: `${v.english} = ${v.japanese}` };
    }
  });
}

const PARTICLES = ["は", "が", "を", "に", "で", "へ", "と", "も", "の", "から", "まで", "より", "か", "ね", "よ"];
const VERB_ENDINGS = ["ます", "ました", "ません", "ませんでした", "です", "でした", "ください", "ましょう", "ませんか", "たいです", "ています", "てください", "はいけません", "もいいです"];

function splitJapanese(sent: string): string[] {
  const remaining = sent.replace(/。$/, "");

  if (remaining.includes(" ")) {
    return remaining.split(/\s+/).filter((w) => w.length >= 1);
  }

  const chunks: string[] = [];
  let i = 0;
  while (i < remaining.length) {
    let matched = false;
    for (const ve of [...VERB_ENDINGS].sort((a, b) => b.length - a.length)) {
      if (remaining.substring(i).startsWith(ve)) {
        chunks.push(ve);
        i += ve.length;
        matched = true;
        break;
      }
    }
    if (matched) continue;
    for (const p of [...PARTICLES].sort((a, b) => b.length - a.length)) {
      if (remaining.substring(i).startsWith(p) && i > 0) {
        chunks.push(p);
        i += p.length;
        matched = true;
        break;
      }
    }
    if (matched) continue;
    if (chunks.length === 0 || PARTICLES.includes(chunks[chunks.length - 1]) || VERB_ENDINGS.includes(chunks[chunks.length - 1])) {
      chunks.push(remaining[i]);
    } else {
      chunks[chunks.length - 1] += remaining[i];
    }
    i++;
  }
  return chunks.filter((c) => c.length >= 1);
}

export function buildSentenceQuestions(): Question[] {
  const pool = shuffle(SENTENCES).slice(0, 80);
  const questions: Question[] = [];

  for (const sent of pool) {
    if (sent.length < 6) continue;
    const parts = splitJapanese(sent);
    if (parts.length < 3) continue;

    const blankableParts: number[] = [];
    parts.forEach((p, idx) => {
      if (PARTICLES.includes(p)) blankableParts.push(idx);
      else if (VERB_ENDINGS.some((ve) => p.includes(ve))) blankableParts.push(idx);
    });

    let blankIdx: number;
    if (blankableParts.length > 0) {
      blankIdx = blankableParts[Math.floor(Math.random() * blankableParts.length)];
    } else {
      blankIdx = 1 + Math.floor(Math.random() * (parts.length - 1));
    }

    const blankWord = parts[blankIdx];
    if (blankWord.length < 1) continue;

    const display = parts.map((p, i) => (i === blankIdx ? "\uFF3F\uFF3F\uFF3F" : p)).join("");

    let distractors: string[];
    if (PARTICLES.includes(blankWord)) {
      distractors = shuffle(PARTICLES.filter((p) => p !== blankWord)).slice(0, 3);
    } else {
      const otherParts = new Set<string>();
      for (const other of SENTENCES) {
        splitJapanese(other).forEach((p) => {
          if (p !== blankWord && p.length >= 1 && !PARTICLES.includes(p)) otherParts.add(p);
        });
      }
      distractors = shuffle([...otherParts]).slice(0, 3);
    }

    if (distractors.length < 3) continue;

    questions.push({
      type: "mc",
      display,
      displayClass: "sentence",
      prompt: "Fill in the blank:",
      hint: "",
      answer: blankWord,
      options: shuffle([blankWord, ...distractors]),
      detail: sent,
    });

    if (questions.length >= 20) break;
  }

  if (questions.length === 0) {
    questions.push({
      type: "mc",
      display: "No sentences available",
      displayClass: "sentence",
      prompt: "Try a different mode",
      hint: "",
      answer: "OK",
      options: ["OK"],
      detail: "",
    });
  }

  return questions;
}

export function buildGrammarQuestions(mode: string, filter: string): Question[] {
  const pool = shuffle(getFilteredGrammar(filter));
  const count = Math.min(pool.length, 20);
  const allGrammar = getFilteredGrammar(filter);

  return pool.slice(0, count).map((g) => {
    if (mode === "grammar-pattern") {
      const distractors = shuffle(allGrammar.filter((x) => x.title !== g.title)).slice(0, 3).map((x) => x.title);
      return { type: "mc" as const, display: g.example, displayClass: "sentence" as const, prompt: "Which grammar pattern is used here?", hint: `Lesson ${g.lesson}`, answer: g.title, options: shuffle([g.title, ...distractors]), detail: `${g.title}\nPattern: ${g.pattern}\n${g.example} — ${g.meaning}` };
    } else {
      const distractors = shuffle(allGrammar.filter((x) => x.meaning !== g.meaning)).slice(0, 3).map((x) => x.meaning);
      return { type: "mc" as const, display: g.example, displayClass: "sentence" as const, prompt: "What does this sentence mean?", hint: `${g.title} (Lesson ${g.lesson})`, answer: g.meaning, options: shuffle([g.meaning, ...distractors]), detail: `${g.example}\n${g.meaning}\nGrammar: ${g.title}` };
    }
  });
}
