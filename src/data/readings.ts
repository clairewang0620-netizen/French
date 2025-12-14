
import { ReadingArticle, Level } from '../types';

export const READING_DATA: ReadingArticle[] = [
  {
    id: 'r_a1_1',
    title: 'Ma famille',
    level: Level.A1,
    content: "Je m'appelle Thomas. J'ai vingt ans. J'habite à Paris avec ma famille. Mon père est professeur et ma mère est médecin. J'ai une sœur, elle s'appelle Claire. Nous avons aussi un chien qui s'appelle Milou.",
    translation: "我叫托马斯。我20岁。我和家人住在巴黎。我父亲是老师，母亲是医生。我有一个妹妹，她叫克莱尔。我们还有一只狗，叫米卢。",
    keywords: [
      { french: 'Habiter', chinese: '居住' },
      { french: 'Médecin', chinese: '医生' },
      { french: 'Chien', chinese: '狗' }
    ]
  },
  {
    id: 'r_a2_1',
    title: 'Les vacances',
    level: Level.A2,
    content: "L'été dernier, je suis allé en Provence. Le soleil brillait tous les jours. J'ai visité des champs de lavande et j'ai mangé de la bonne cuisine. C'était magnifique.",
    translation: "去年夏天，我去了普罗旺斯。每天阳光普照。我参观了薰衣草田，吃到了美味的食物。那真是太棒了。",
    keywords: [
      { french: 'Été', chinese: '夏天' },
      { french: 'Briller', chinese: '闪耀' },
      { french: 'Champs', chinese: '田野' }
    ]
  }
];
