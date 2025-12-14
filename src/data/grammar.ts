
import { GrammarItem, Level } from '../types';

export const GRAMMAR_DATA: GrammarItem[] = [
  // ================= A1 =================
  {
    id: 'g_a1_etre',
    title: '动词 Être (是) - 现在时',
    level: Level.A1,
    rows: [
      { subject: "Je", conjugation: "suis", example_fr: "Je suis étudiant.", example_zh: "我是学生。" },
      { subject: "Tu", conjugation: "es", example_fr: "Tu es chinois.", example_zh: "你是中国人。" },
      { subject: "Il/Elle", conjugation: "est", example_fr: "Il est français.", example_zh: "他是法国人。" },
      { subject: "Nous", conjugation: "sommes", example_fr: "Nous sommes amis.", example_zh: "我们是朋友。" },
      { subject: "Vous", conjugation: "êtes", example_fr: "Vous êtes professeur.", example_zh: "你们是老师。" },
      { subject: "Ils/Elles", conjugation: "sont", example_fr: "Elles sont étudiantes.", example_zh: "她们是学生。" }
    ]
  },
  {
    id: 'g_a1_avoir',
    title: '动词 Avoir (有) - 现在时',
    level: Level.A1,
    rows: [
      { subject: "J'", conjugation: "ai", example_fr: "J'ai un livre.", example_zh: "我有一本书。" },
      { subject: "Tu", conjugation: "as", example_fr: "Tu as une sœur.", example_zh: "你有一个姐姐。" },
      { subject: "Il/Elle", conjugation: "a", example_fr: "Elle a 20 ans.", example_zh: "她20岁。" },
      { subject: "Nous", conjugation: "avons", example_fr: "Nous avons du temps.", example_zh: "我们有时间。" },
      { subject: "Vous", conjugation: "avez", example_fr: "Vous avez raison.", example_zh: "你们是对的。" },
      { subject: "Ils/Elles", conjugation: "ont", example_fr: "Ils ont une voiture.", example_zh: "他们有一辆车。" }
    ]
  },
  {
    id: 'g_a1_articles',
    title: '冠词 (Articles)',
    level: Level.A1,
    rows: [
      { subject: "定冠词", conjugation: "le / la / les", example_fr: "Le livre est sur la table.", example_zh: "书在桌子上。" },
      { subject: "不定冠词", conjugation: "un / une / des", example_fr: "J'ai une pomme.", example_zh: "我有一个苹果。" }
    ]
  },

  // ================= A2 =================
  {
    id: 'g_a2_pc',
    title: '复合过去时 (Passé Composé)',
    level: Level.A2,
    rows: [
      { subject: "J'", conjugation: "ai mangé", rule: "Avoir + 过去分词", example_fr: "J'ai mangé une pomme.", example_zh: "我吃了一个苹果。" },
      { subject: "Tu", conjugation: "as fini", example_fr: "Tu as fini tes devoirs ?", example_zh: "你做完作业了吗？" },
      { subject: "Il", conjugation: "a regardé", example_fr: "Il a regardé la télé.", example_zh: "他看了电视。" },
      { subject: "Nous", conjugation: "avons acheté", example_fr: "Nous avons acheté du pain.", example_zh: "我们买了面包。" }
    ]
  },
  {
    id: 'g_a2_aller',
    title: '动词 Aller (去) - 现在时',
    level: Level.A2,
    rows: [
      { subject: "Je", conjugation: "vais", example_fr: "Je vais au cinéma.", example_zh: "我去电影院。" },
      { subject: "Tu", conjugation: "vas", example_fr: "Tu vas bien ?", example_zh: "你好吗？" },
      { subject: "Il/Elle", conjugation: "va", example_fr: "Il va à l'école.", example_zh: "他去学校。" },
      { subject: "Nous", conjugation: "allons", example_fr: "Nous allons manger.", example_zh: "我们要去吃饭。" },
      { subject: "Vous", conjugation: "allez", example_fr: "Où allez-vous ?", example_zh: "您去哪里？" },
      { subject: "Ils/Elles", conjugation: "vont", example_fr: "Ils vont partir.", example_zh: "他们要走了。" }
    ]
  },

  // ================= B1 =================
  {
    id: 'g_b1_imparfait',
    title: '未完成过去时 (Imparfait)',
    level: Level.B1,
    rows: [
      { subject: "Je", conjugation: "étais", rule: "描述过去的习惯/状态", example_fr: "Quand j'étais petit, je jouais au foot.", example_zh: "我小时候踢足球。" },
      { subject: "Il", conjugation: "faisait", example_fr: "Il faisait beau hier.", example_zh: "昨天天气很好。" }
    ]
  },
  {
    id: 'g_b1_conditionnel',
    title: '条件式现在时 (Conditionnel)',
    level: Level.B1,
    rows: [
      { subject: "Je (Vouloir)", conjugation: "voudrais", rule: "表示礼貌", example_fr: "Je voudrais un café, s'il vous plaît.", example_zh: "我想要一杯咖啡。" },
      { subject: "Tu (Pouvoir)", conjugation: "pourrais", example_fr: "Tu pourrais m'aider ?", example_zh: "你能帮我吗？" }
    ]
  },

  // ================= B2 =================
  {
    id: 'g_b2_subjonctif',
    title: '虚拟式现在时 (Subjonctif)',
    level: Level.B2,
    rows: [
      { subject: "Il faut que je", conjugation: "sois (Être)", rule: "表达必要性", example_fr: "Il faut que je sois prêt.", example_zh: "我必须准备好。" },
      { subject: "Je veux que tu", conjugation: "aies (Avoir)", rule: "表达愿望", example_fr: "Je veux que tu aies confiance.", example_zh: "我想让你有信心。" }
    ]
  },
  {
    id: 'g_b2_connecteurs',
    title: '逻辑连接词 (Connecteurs)',
    level: Level.B2,
    rows: [
      { subject: "Cependant", conjugation: "然而", example_fr: "Il est riche, cependant il n'est pas heureux.", example_zh: "他很有钱，然而他并不快乐。" },
      { subject: "Bien que", conjugation: "虽然", rule: "+ 虚拟式", example_fr: "Bien qu'il soit malade, il travaille.", example_zh: "虽然他病了，但他还在工作。" }
    ]
  },

  // ================= C1 =================
  {
    id: 'g_c1_passe_simple',
    title: '简单过去时 (Passé Simple)',
    level: Level.C1,
    rows: [
      { subject: "Il (Être)", conjugation: "fut", rule: "文学/历史书面语", example_fr: "Il fut un grand roi.", example_zh: "他曾是一位伟大的国王。" },
      { subject: "Ils (Parler)", conjugation: "parlèrent", example_fr: "Ils parlèrent toute la nuit.", example_zh: "他们谈了一整夜。" }
    ]
  }
];
