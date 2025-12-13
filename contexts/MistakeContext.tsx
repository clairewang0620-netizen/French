import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MistakeRecord, QuizQuestion } from '../types';

interface MistakeContextType {
  mistakes: MistakeRecord[];
  addMistake: (question: QuizQuestion) => void;
  removeMistake: (questionId: string) => void;
  clearMistakes: () => void;
}

const MistakeContext = createContext<MistakeContextType | undefined>(undefined);

const STORAGE_KEY = 'french_master_mistakes';

export const MistakeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mistakes, setMistakes] = useState<MistakeRecord[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setMistakes(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse mistakes from local storage");
      }
    }
  }, []);

  const saveToStorage = (newMistakes: MistakeRecord[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newMistakes));
  };

  const addMistake = (question: QuizQuestion) => {
    setMistakes((prev) => {
      // Avoid duplicates
      if (prev.some((m) => m.questionId === question.id)) return prev;
      
      const newRecord: MistakeRecord = {
        questionId: question.id,
        timestamp: Date.now(),
        question,
      };
      const updated = [newRecord, ...prev];
      saveToStorage(updated);
      return updated;
    });
  };

  const removeMistake = (questionId: string) => {
    setMistakes((prev) => {
      const updated = prev.filter((m) => m.questionId !== questionId);
      saveToStorage(updated);
      return updated;
    });
  };

  const clearMistakes = () => {
    setMistakes([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <MistakeContext.Provider value={{ mistakes, addMistake, removeMistake, clearMistakes }}>
      {children}
    </MistakeContext.Provider>
  );
};

export const useMistakes = () => {
  const context = useContext(MistakeContext);
  if (!context) {
    throw new Error('useMistakes must be used within a MistakeProvider');
  }
  return context;
};