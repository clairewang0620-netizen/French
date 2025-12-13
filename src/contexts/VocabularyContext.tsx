import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Word, Level } from '../types';

interface VocabularyContextType {
  words: Word[];
  loading: boolean;
  error: string | null;
}

const VocabularyContext = createContext<VocabularyContextType | undefined>(undefined);

// Force cache invalidation on deployment - CHANGE THIS STRING TO FORCE UPDATE
const BUILD_VERSION = "vocab-60-runtime-2025-01-16-v2";

export const VocabularyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVocabulary = async () => {
      try {
        // Fetch from public folder with version query param to bypass Cloudflare cache
        const response = await fetch(`/data/vocabulary.json?v=${BUILD_VERSION}`);
        if (!response.ok) {
          throw new Error('Failed to load vocabulary data');
        }
        
        const data = await response.json();
        
        // Transform JSON structure to internal Word interface
        const allWords: Word[] = [];
        
        Object.keys(data).forEach((lvlKey) => {
           const level = lvlKey as Level;
           const list = data[lvlKey];
           list.forEach((item: any) => {
             allWords.push({
               id: item.id,
               french: item.word,
               chinese: item.meaning_zh,
               ipa: item.ipa,
               level: level,
               example: {
                 french: item.example_fr,
                 chinese: item.example_zh
               }
             });
           });
        });

        setWords(allWords);
        console.log(`Loaded ${allWords.length} words. Build: ${BUILD_VERSION}`);
      } catch (err) {
        console.error(err);
        setError("无法加载词汇数据，请刷新重试");
      } finally {
        setLoading(false);
      }
    };

    fetchVocabulary();
  }, []);

  return (
    <VocabularyContext.Provider value={{ words, loading, error }}>
      {children}
    </VocabularyContext.Provider>
  );
};

export const useVocabulary = () => {
  const context = useContext(VocabularyContext);
  if (!context) {
    throw new Error('useVocabulary must be used within a VocabularyProvider');
  }
  return context;
};