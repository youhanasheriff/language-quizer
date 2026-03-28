'use client';

import { useEffect } from 'react';

interface QuizShortcutHandlers {
  type: 'quiz';
  answered: boolean;
  checkAnswer: (idx: number) => void;
  nextQuestion: () => void;
  optionCount: number;
}

interface ReadingFlashcardHandlers {
  type: 'reading-flashcard';
  flashcardRevealed: boolean;
  revealFlashcard: () => void;
  nextSentence: () => void;
  prevSentence: () => void;
}

interface ReadingInteractiveHandlers {
  type: 'reading-interactive';
  nextSentence: () => void;
  prevSentence: () => void;
}

interface ReadingComprehensionHandlers {
  type: 'reading-comprehension';
  compAnswered: boolean;
  checkCompAnswer: (idx: number) => void;
  nextCompQuestion: () => void;
  optionCount: number;
}

type ShortcutHandlers =
  | QuizShortcutHandlers
  | ReadingFlashcardHandlers
  | ReadingInteractiveHandlers
  | ReadingComprehensionHandlers;

export function useKeyboardShortcuts(handlers: ShortcutHandlers | null) {
  useEffect(() => {
    if (!handlers) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (!handlers) return;

      switch (handlers.type) {
        case 'quiz': {
          // Number keys 1-4 to select answer
          if (e.key >= '1' && e.key <= '4' && !handlers.answered) {
            const idx = parseInt(e.key) - 1;
            if (idx < handlers.optionCount) {
              handlers.checkAnswer(idx);
            }
          }
          // Enter or Space to advance after answering
          if ((e.key === 'Enter' || e.key === ' ') && handlers.answered) {
            e.preventDefault();
            handlers.nextQuestion();
          }
          break;
        }

        case 'reading-flashcard': {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            if (!handlers.flashcardRevealed) {
              handlers.revealFlashcard();
            } else {
              handlers.nextSentence();
            }
          }
          if (e.key === 'ArrowRight') handlers.nextSentence();
          if (e.key === 'ArrowLeft') handlers.prevSentence();
          break;
        }

        case 'reading-interactive': {
          if (e.key === 'ArrowRight') handlers.nextSentence();
          if (e.key === 'ArrowLeft') handlers.prevSentence();
          break;
        }

        case 'reading-comprehension': {
          if (!handlers.compAnswered) {
            if (e.key >= '1' && e.key <= '4') {
              const idx = parseInt(e.key) - 1;
              if (idx < handlers.optionCount) {
                handlers.checkCompAnswer(idx);
              }
            }
          } else {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handlers.nextCompQuestion();
            }
          }
          break;
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handlers]);
}
