import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Level } from '../types';
import AudioButton from '../components/AudioButton';
import { useVocabulary } from '../contexts/VocabularyContext';

const VocabularyList: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<Level>(Level.A1);
  const { words, loading, error } = useVocabulary();

  const levels = Object.values(Level);
  const filteredWords = words.filter(w => w.level === activeLevel);

  if (loading) {
    return <div className="p-8 text-center text-gray-500">正在加载单词数据...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="space-y-6">
      {/* ================= EXISTING VOCABULARY SECTION ================= */}
      <div className="flex justify-between items-center">
         <h2 className="text-2xl font-bold text-gray-800">单词学习</h2>
         <span className="text-xs text-gray-400 font-mono">Count: {filteredWords.length}</span>
      </div>
      
      {/* Level Tabs */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {levels.map((lvl) => (
          <button
            key={lvl}
            onClick={() => setActiveLevel(lvl)}
            className={`px-4 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
              activeLevel === lvl 
                ? 'bg-french-blue text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {lvl} 等级
          </button>
        ))}
      </div>

      {/* Word List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-12">
        {filteredWords.length === 0 ? (
          <div className="p-8 text-center text-gray-500">该等级暂无单词数据。</div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredWords.map((word) => (
              <div key={word.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <AudioButton text={word.french} />
                  <div>
                    <p className="text-lg font-bold text-gray-800">{word.french}</p>
                    <p className="text-sm text-gray-500 font-mono">{word.ipa}</p>
                  </div>
                </div>
                <Link 
                  to={`/vocabulary/${word.level}/${word.id}`}
                  className="px-4 py-2 text-sm bg-blue-50 text-french-blue rounded-lg font-medium hover:bg-blue-100"
                >
                  详情
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= NEW GRAMMAR SECTION (HARDCODED) ================= */}
      <section className="bg-blue-50 rounded-2xl p-6 border-2 border-french-blue/20">
        <h2 className="text-2xl font-bold text-french-blue mb-6 flex items-center gap-2">
          📚 Grammar – A1 基础语法（新增）
        </h2>

        <div className="space-y-6">
          
          {/* 1. Être */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">1. 动词 Être (是) – 现在时</h3>
            <div className="space-y-3">
              {[
                { subj: "je suis", ex: "Je suis étudiant.", zh: "我是学生。" },
                { subj: "tu es", ex: "Tu es chinois.", zh: "你是中国人。" },
                { subj: "il est", ex: "Il est français.", zh: "他是法国人。" },
                { subj: "nous sommes", ex: "Nous sommes amis.", zh: "我们是朋友。" },
                { subj: "vous êtes", ex: "Vous êtes professeur.", zh: "你们是老师。" },
                { subj: "ils sont", ex: "Ils sont étudiants.", zh: "他们是学生。" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-50 last:border-0 pb-2 last:pb-0">
                  <span className="font-bold text-french-blue w-32">{item.subj}</span>
                  <div className="flex items-center gap-2 flex-1">
                    <AudioButton text={item.ex} size="sm" />
                    <span className="text-gray-800">{item.ex}</span>
                    <span className="text-gray-400 text-sm">({item.zh})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Avoir */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">2. 动词 Avoir (有) – 现在时</h3>
            <div className="space-y-3">
              {[
                { subj: "j’ai", ex: "J’ai un livre.", zh: "我有一本书。" },
                { subj: "tu as", ex: "Tu as une sœur.", zh: "你有一个姐姐。" },
                { subj: "il a", ex: "Il a 20 ans.", zh: "他20岁。" },
                { subj: "nous avons", ex: "Nous avons du temps.", zh: "我们有时间。" },
                { subj: "vous avez", ex: "Vous avez raison.", zh: "你们是对的。" },
                { subj: "ils ont", ex: "Ils ont une voiture.", zh: "他们有一辆车。" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-50 last:border-0 pb-2 last:pb-0">
                  <span className="font-bold text-french-blue w-32">{item.subj}</span>
                  <div className="flex items-center gap-2 flex-1">
                    <AudioButton text={item.ex} size="sm" />
                    <span className="text-gray-800">{item.ex}</span>
                    <span className="text-gray-400 text-sm">({item.zh})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Articles */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">3. 冠词</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-bold text-gray-600 mb-2">定冠词 (Specific)</p>
                <div className="flex items-center gap-2">
                  <span className="text-french-blue font-bold text-xl">le / la / les</span>
                  <AudioButton text="le la les" size="sm" />
                </div>
                <p className="text-sm text-gray-500 mt-1">Le livre est sur la table.</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-bold text-gray-600 mb-2">不定冠词 (General)</p>
                <div className="flex items-center gap-2">
                  <span className="text-french-blue font-bold text-xl">un / une / des</span>
                  <AudioButton text="un une des" size="sm" />
                </div>
                <p className="text-sm text-gray-500 mt-1">J’ai une pomme.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default VocabularyList;