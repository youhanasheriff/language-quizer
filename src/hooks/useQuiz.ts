'use client';

import { useState, useCallback, useMemo } from 'react';
import type { Question } from '@/data/types';
import {
  buildKanjiQuestions,
  buildVocabQuestions,
  buildSentenceQuestions,
  buildGrammarQuestions,
} from '@/lib/quiz-engine';

interface QuizState {
  currentMode: string | null;
  currentFilter: string;
  questions: Question[];
  currentQ: number;
  score: number;
  streakCount: number;
  maxStreak: number;
  answered: boolean;
  missed: Question[];
}

const initialState: QuizState = {
  currentMode: null,
  currentFilter: 'all',
  questions: [],
  currentQ: 0,
  score: 0,
  streakCount: 0,
  maxStreak: 0,
  answered: false,
  missed: [],
};

export function useQuiz() {
  const [state, setState] = useState<QuizState>(initialState);

  const startQuiz = useCallback((mode: string, filter: string) => {
    let questions: Question[];

    switch (mode) {
      case 'kanji-meaning':
      case 'meaning-kanji':
      case 'kanji-reading':
        questions = buildKanjiQuestions(mode, filter);
        break;
      case 'vocab-meaning':
      case 'meaning-vocab':
        questions = buildVocabQuestions(mode, filter);
        break;
      case 'sentence-fill':
        questions = buildSentenceQuestions();
        break;
      case 'grammar-pattern':
      case 'grammar-meaning':
        questions = buildGrammarQuestions(mode, filter);
        break;
      default:
        questions = [];
    }

    setState({
      currentMode: mode,
      currentFilter: filter,
      questions,
      currentQ: 0,
      score: 0,
      streakCount: 0,
      maxStreak: 0,
      answered: false,
      missed: [],
    });
  }, []);

  const selectMode = useCallback((mode: string) => {
    startQuiz(mode, state.currentFilter);
  }, [startQuiz, state.currentFilter]);

  const setFilter = useCallback((filter: string) => {
    if (state.currentMode) {
      startQuiz(state.currentMode, filter);
    } else {
      setState((prev) => ({ ...prev, currentFilter: filter }));
    }
  }, [startQuiz, state.currentMode]);

  const checkAnswer = useCallback((idx: number) => {
    if (state.answered) return;

    setState((prev) => {
      const q = prev.questions[prev.currentQ];
      const selected = q.options[idx];
      const isCorrect = selected === q.answer;

      const newStreak = isCorrect ? prev.streakCount + 1 : 0;
      const newMaxStreak = isCorrect
        ? Math.max(prev.maxStreak, newStreak)
        : prev.maxStreak;

      return {
        ...prev,
        answered: true,
        score: isCorrect ? prev.score + 1 : prev.score,
        streakCount: newStreak,
        maxStreak: newMaxStreak,
        missed: isCorrect ? prev.missed : [...prev.missed, q],
      };
    });
  }, [state.answered]);

  const nextQuestion = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentQ: prev.currentQ + 1,
      answered: false,
    }));
  }, []);

  const restartQuiz = useCallback(() => {
    if (state.currentMode) {
      startQuiz(state.currentMode, state.currentFilter);
    }
  }, [startQuiz, state.currentMode, state.currentFilter]);

  const backToMenu = useCallback(() => {
    setState(initialState);
  }, []);

  const currentQuestion: Question | null = useMemo(() => {
    if (state.currentQ < state.questions.length) {
      return state.questions[state.currentQ];
    }
    return null;
  }, [state.currentQ, state.questions]);

  const progress = useMemo(() => {
    if (state.questions.length === 0) return 0;
    return Math.round((state.currentQ / state.questions.length) * 100);
  }, [state.currentQ, state.questions.length]);

  const isComplete = useMemo(() => {
    return state.questions.length > 0 && state.currentQ >= state.questions.length;
  }, [state.currentQ, state.questions.length]);

  const results = useMemo(() => {
    const total = state.questions.length;
    const pct = total > 0 ? Math.round((state.score / total) * 100) : 0;
    return {
      score: state.score,
      total,
      percentage: pct,
      missed: state.missed,
      maxStreak: state.maxStreak,
    };
  }, [state.score, state.questions.length, state.missed, state.maxStreak]);

  return {
    // State
    currentMode: state.currentMode,
    currentFilter: state.currentFilter,
    questions: state.questions,
    currentQ: state.currentQ,
    score: state.score,
    streakCount: state.streakCount,
    maxStreak: state.maxStreak,
    answered: state.answered,
    missed: state.missed,

    // Derived
    currentQuestion,
    progress,
    isComplete,
    results,

    // Actions
    selectMode,
    setFilter,
    checkAnswer,
    nextQuestion,
    restartQuiz,
    backToMenu,
  };
}
