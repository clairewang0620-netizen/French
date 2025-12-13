import { Word, Level } from '../types';

// Mock data: In a real app, this would be 50 items per level. 
// Provided here are samples to demonstrate functionality.

export const VOCABULARY_DATA: Word[] = [
  // A1
  {
    id: 'a1_1',
    french: 'Bonjour',
    chinese: '你好',
    ipa: '/bɔ̃.ʒuʁ/',
    level: Level.A1,
    example: { french: 'Bonjour, comment allez-vous ?', chinese: '你好，您好吗？' }
  },
  {
    id: 'a1_2',
    french: 'Chat',
    chinese: '猫',
    ipa: '/ʃa/',
    level: Level.A1,
    example: { french: 'Le chat est noir.', chinese: '这只猫是黑色的。' }
  },
  {
    id: 'a1_3',
    french: 'Manger',
    chinese: '吃',
    ipa: '/mɑ̃.ʒe/',
    level: Level.A1,
    example: { french: 'Je veux manger une pomme.', chinese: '我想吃一个苹果。' }
  },
  {
    id: 'a1_4',
    french: 'Livre',
    chinese: '书',
    ipa: '/livʁ/',
    level: Level.A1,
    example: { french: 'J\'aime lire ce livre.', chinese: '我喜欢读这本书。' }
  },
  {
    id: 'a1_5',
    french: 'Amour',
    chinese: '爱',
    ipa: '/a.muʁ/',
    level: Level.A1,
    example: { french: 'C\'est une belle histoire d\'amour.', chinese: '这是一个美丽的爱情故事。' }
  },
  // A2
  {
    id: 'a2_1',
    french: 'Voyage',
    chinese: '旅行',
    ipa: '/vwa.jaʒ/',
    level: Level.A2,
    example: { french: 'Le voyage a été long.', chinese: '旅途很长。' }
  },
  {
    id: 'a2_2',
    french: 'Hier',
    chinese: '昨天',
    ipa: '/jɛʁ/',
    level: Level.A2,
    example: { french: 'Hier, il a plu.', chinese: '昨天下雨了。' }
  },
  // B1
  {
    id: 'b1_1',
    french: 'Développement',
    chinese: '发展',
    ipa: '/de.vəl.ɔp.mɑ̃/',
    level: Level.B1,
    example: { french: 'Le développement économique est rapide.', chinese: '经济发展很快。' }
  },
  // B2
  {
    id: 'b2_1',
    french: 'Nonobstant',
    chinese: '尽管',
    ipa: '/nɔ.nɔb.stɑ̃/',
    level: Level.B2,
    example: { french: 'Nonobstant les difficultés, il a réussi.', chinese: '尽管有困难，他还是成功了。' }
  },
  // C1
  {
    id: 'c1_1',
    french: 'Éphémère',
    chinese: '短暂的',
    ipa: '/e.fe.mɛʁ/',
    level: Level.C1,
    example: { french: 'La beauté est éphémère.', chinese: '美是短暂的。' }
  }
];