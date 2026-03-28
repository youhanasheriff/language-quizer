'use client';

import { useState, useCallback, useMemo } from 'react';
import type { Passage } from '@/data/types';
import { PASSAGES } from '@/data';

export type ReadingMode = 'flashcard' | 'interactive' | 'comprehension';

interface ReadingState {
  currentMode: ReadingMode | null;
  currentPassageIdx: number | null;
  currentSentenceIdx: number;
  compQuestionIdx: number;
  compScore: number;
  compAnswered: boolean;
  flashcardRevealed: boolean;
  sentenceTranslationShown: boolean;
}

const initialState: ReadingState = {
  currentMode: null,
  currentPassageIdx: null,
  currentSentenceIdx: 0,
  compQuestionIdx: 0,
  compScore: 0,
  compAnswered: false,
  flashcardRevealed: false,
  sentenceTranslationShown: false,
};

export function useReading() {
  const [state, setState] = useState<ReadingState>(initialState);

  const currentPassage: Passage | null = useMemo(() => {
    if (state.currentPassageIdx !== null) {
      return PASSAGES[state.currentPassageIdx] ?? null;
    }
    return null;
  }, [state.currentPassageIdx]);

  const selectMode = useCallback((mode: ReadingMode) => {
    setState((prev) => ({
      ...prev,
      currentMode: mode,
      currentPassageIdx: null,
      currentSentenceIdx: 0,
      compQuestionIdx: 0,
      compScore: 0,
      compAnswered: false,
      flashcardRevealed: false,
      sentenceTranslationShown: false,
    }));
  }, []);

  const selectPassage = useCallback((idx: number) => {
    setState((prev) => ({
      ...prev,
      currentPassageIdx: idx,
      currentSentenceIdx: 0,
      compQuestionIdx: 0,
      compScore: 0,
      compAnswered: false,
      flashcardRevealed: false,
      sentenceTranslationShown: false,
    }));
  }, []);

  const nextSentence = useCallback(() => {
    if (!currentPassage) return;
    setState((prev) => {
      if (prev.currentSentenceIdx < currentPassage.sentences.length - 1) {
        return {
          ...prev,
          currentSentenceIdx: prev.currentSentenceIdx + 1,
          flashcardRevealed: false,
          sentenceTranslationShown: false,
        };
      }
      return prev;
    });
  }, [currentPassage]);

  const prevSentence = useCallback(() => {
    setState((prev) => {
      if (prev.currentSentenceIdx > 0) {
        return {
          ...prev,
          currentSentenceIdx: prev.currentSentenceIdx - 1,
          flashcardRevealed: false,
          sentenceTranslationShown: false,
        };
      }
      return prev;
    });
  }, []);

  const revealFlashcard = useCallback(() => {
    setState((prev) => ({ ...prev, flashcardRevealed: true }));
  }, []);

  const showSentenceTranslation = useCallback(() => {
    setState((prev) => ({ ...prev, sentenceTranslationShown: true }));
  }, []);

  const checkCompAnswer = useCallback((idx: number) => {
    if (state.compAnswered || !currentPassage) return;

    const q = currentPassage.questions[state.compQuestionIdx];
    if (!q) return;

    const isCorrect = idx === q.answer;

    setState((prev) => ({
      ...prev,
      compAnswered: true,
      compScore: isCorrect ? prev.compScore + 1 : prev.compScore,
    }));

    return isCorrect;
  }, [state.compAnswered, state.compQuestionIdx, currentPassage]);

  const nextCompQuestion = useCallback(() => {
    setState((prev) => ({
      ...prev,
      compQuestionIdx: prev.compQuestionIdx + 1,
      compAnswered: false,
    }));
  }, []);

  const retryComprehension = useCallback(() => {
    setState((prev) => ({
      ...prev,
      compQuestionIdx: 0,
      compScore: 0,
      compAnswered: false,
    }));
  }, []);

  const backToPassageList = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentPassageIdx: null,
      currentSentenceIdx: 0,
      compQuestionIdx: 0,
      compScore: 0,
      compAnswered: false,
      flashcardRevealed: false,
      sentenceTranslationShown: false,
    }));
  }, []);

  const backToModeSelect = useCallback(() => {
    setState(initialState);
  }, []);

  const currentSentence = useMemo(() => {
    if (!currentPassage) return null;
    return currentPassage.sentences[state.currentSentenceIdx] ?? null;
  }, [currentPassage, state.currentSentenceIdx]);

  const currentCompQuestion = useMemo(() => {
    if (!currentPassage) return null;
    return currentPassage.questions[state.compQuestionIdx] ?? null;
  }, [currentPassage, state.compQuestionIdx]);

  const isCompComplete = useMemo(() => {
    if (!currentPassage) return false;
    return state.compQuestionIdx >= currentPassage.questions.length;
  }, [currentPassage, state.compQuestionIdx]);

  const compResults = useMemo(() => {
    if (!currentPassage) return null;
    const total = currentPassage.questions.length;
    const pct = total > 0 ? Math.round((state.compScore / total) * 100) : 0;
    return { score: state.compScore, total, percentage: pct };
  }, [currentPassage, state.compScore]);

  return {
    // State
    currentMode: state.currentMode,
    currentPassage,
    currentSentenceIdx: state.currentSentenceIdx,
    compQuestionIdx: state.compQuestionIdx,
    compScore: state.compScore,
    compAnswered: state.compAnswered,
    flashcardRevealed: state.flashcardRevealed,
    sentenceTranslationShown: state.sentenceTranslationShown,

    // Derived
    passages: PASSAGES,
    currentSentence,
    currentCompQuestion,
    isCompComplete,
    compResults,

    // Actions
    selectMode,
    selectPassage,
    nextSentence,
    prevSentence,
    revealFlashcard,
    showSentenceTranslation,
    checkCompAnswer,
    nextCompQuestion,
    retryComprehension,
    backToPassageList,
    backToModeSelect,
  };
}
