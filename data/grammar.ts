import { GrammarItem, Level } from '../types';

export const GRAMMAR_DATA: GrammarItem[] = [
  {
    id: 'g_a1_1',
    title: '定冠词与不定冠词',
    level: Level.A1,
    description: '法语中名词有阴阳性之分。阳性单数用 le/un，阴性单数用 la/une，复数用 les/des。',
    rows: [
      { subject: '定冠词', conjugation: 'Le/La', example_fr: 'Le garçon', example_zh: '那个男孩 (定冠词)' },
      { subject: '不定冠词', conjugation: 'Un/Une', example_fr: 'Une fille', example_zh: '一个女孩 (不定冠词)' }
    ]
  },
  {
    id: 'g_a1_2',
    title: '第一组动词变位 (-er)',
    level: Level.A1,
    description: '以 -er 结尾的动词（aller 除外）是最规则的。去掉 er 加上：-e, -es, -e, -ons, -ez, -ent。',
    rows: [
      { subject: 'Je', conjugation: 'parle', example_fr: 'Je parle', example_zh: '我说话' },
      { subject: 'Nous', conjugation: 'parlons', example_fr: 'Nous parlons', example_zh: '我们说话' }
    ]
  },
  {
    id: 'g_a2_1',
    title: '复合过去时 (Passé Composé)',
    level: Level.A2,
    description: '表示过去发生的动作。结构：助动词(avoir/être) + 过去分词。',
    rows: [
      { subject: 'J\'', conjugation: 'ai mangé', example_fr: 'J\'ai mangé', example_zh: '我吃过了' },
      { subject: 'Il', conjugation: 'est allé', example_fr: 'Il est allé', example_zh: '他去了' }
    ]
  }
];