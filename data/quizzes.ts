import { QuizQuestion, Level } from '../types';

export const QUIZ_DATA: QuizQuestion[] = [
  {
    id: 'q_a1_1',
    level: Level.A1,
    type: 'single',
    question: "法语单词 'Chat' 的意思是？",
    options: ['狗', '猫', '鸟', '鱼'],
    correctIndex: 1,
    explanation: "'Chat' 在法语中是 '猫' 的意思。"
  },
  {
    id: 'q_a1_2',
    level: Level.A1,
    type: 'boolean',
    question: "在法语中，'Bonjour' 只能在晚上说。",
    options: ['正确', '错误'],
    correctIndex: 1,
    explanation: "'Bonjour' 通常用于白天（早上到下午）。晚上说 'Bonsoir'。"
  },
  {
    id: 'q_a2_1',
    level: Level.A2,
    type: 'single',
    question: "动词 'Aller' (去) 的第一人称单数变位是？",
    options: ['Je alle', 'Je vais', 'Je va', 'J\'irai'],
    correctIndex: 1,
    explanation: "Aller 是不规则动词，Je vais 是正确形式。"
  },
  {
    id: 'q_b1_1',
    level: Level.B1,
    type: 'single',
    question: "哪个词是 'Heureux' (快乐) 的反义词？",
    options: ['Content', 'Triste', 'Joyeux', 'Ravi'],
    correctIndex: 1,
    explanation: "'Triste' 意为悲伤。"
  }
];