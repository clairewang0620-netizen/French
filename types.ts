
export enum Level {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
  C1 = 'C1',
}

export interface Word {
  id: string;
  french: string;
  chinese: string;
  ipa: string;
  level: Level;
  example: {
    french: string;
    chinese: string;
  };
}

export interface GrammarContentRow {
  subject: string;
  conjugation: string;
  rule?: string;
  example_fr: string;
  example_zh: string;
}

export interface GrammarItem {
  id: string;
  title: string;
  level: Level;
  description?: string;
  rows: GrammarContentRow[];
}

export interface Phrase {
  id: string;
  french: string;
  chinese: string;
  category?: string;
}

export interface ReadingArticle {
  id: string;
  title: string;
  level: Level;
  content: string;
  translation: string;
  keywords: Array<{ french: string; chinese: string }>;
}

export interface QuizQuestion {
  id: string;
  level: Level;
  question: string;
  type: 'single' | 'boolean';
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface MistakeRecord {
  questionId: string;
  timestamp: number;
  question: QuizQuestion;
}
