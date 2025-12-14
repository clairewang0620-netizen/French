
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

// Updated Grammar Structure
export interface GrammarContentRow {
  subject: string;      // 主语 (e.g., "Je", " 定冠词")
  conjugation: string;  // 变位/形式 (e.g., "suis", "le/la/les")
  rule?: string;        // 规则说明 (可选)
  example_fr: string;   // 法语例句
  example_zh: string;   // 中文释义
}

export interface GrammarItem {
  id: string;
  topic: string;        // 大标题 (e.g., "动词 être")
  subtopic: string;     // 子标题 (e.g., "现在时变位")
  content: GrammarContentRow[]; // 内容列表
}

export interface Phrase {
  id: string;
  french: string;
  chinese: string;
  ipa?: string;
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
