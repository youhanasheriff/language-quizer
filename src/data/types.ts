export interface Kanji {
  k: string;
  on: string;
  kun: string;
  en: string;
}

export interface GrammarRule {
  id: string;
  lesson: number;
  title: string;
  pattern: string;
  example: string;
  meaning: string;
}

export interface VocabItem {
  japanese: string;
  english: string;
}

export interface WordBreakdown {
  word: string;
  reading: string;
  meaning: string;
}

export interface PassageSentence {
  jp: string;
  en: string;
  words: WordBreakdown[];
}

export interface ComprehensionQuestion {
  question: string;
  questionEn: string;
  options: string[];
  answer: number;
}

export interface Passage {
  id: string;
  title: string;
  titleEn: string;
  level: string;
  text: string;
  sentences: PassageSentence[];
  questions: ComprehensionQuestion[];
}

export interface Question {
  type: 'mc';
  display: string;
  displayClass: 'kanji' | 'vocab' | 'sentence';
  prompt: string;
  hint: string;
  answer: string;
  options: string[];
  optionClass?: string;
  detail: string;
}
