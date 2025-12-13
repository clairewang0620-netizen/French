import { GrammarItem, Level } from '../types';

export const GRAMMAR_DATA: GrammarItem[] = [
  {
    id: 'g_a1_1',
    title: '定冠词与不定冠词',
    level: Level.A1,
    content: '法语中名词有阴阳性之分。阳性单数用 le/un，阴性单数用 la/une，复数用 les/des。',
    examples: [
      { french: 'Le garçon', chinese: '那个男孩 (定冠词)' },
      { french: 'Une fille', chinese: '一个女孩 (不定冠词)' }
    ]
  },
  {
    id: 'g_a1_2',
    title: '第一组动词变位 (-er)',
    level: Level.A1,
    content: '以 -er 结尾的动词（aller 除外）是最规则的。去掉 er 加上：-e, -es, -e, -ons, -ez, -ent。',
    examples: [
      { french: 'Je parle', chinese: '我说话' },
      { french: 'Nous parlons', chinese: '我们说话' }
    ]
  },
  {
    id: 'g_a2_1',
    title: '复合过去时 (Passé Composé)',
    level: Level.A2,
    content: '表示过去发生的动作。结构：助动词(avoir/être) + 过去分词。',
    examples: [
      { french: 'J\'ai mangé', chinese: '我吃过了' },
      { french: 'Il est allé', chinese: '他去了' }
    ]
  }
];