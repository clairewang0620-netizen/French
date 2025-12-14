
/* Fix: 2025-12-14 06:10 - Correct Import */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VOCABULARY_DATA } from '../data/vocabulary';
import { Level } from '../types';
import AudioButton from '../components/AudioButton';

const VocabularyList: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<Level>(Level.A1);

  const levels = Object.values(Level);
  const words = VOCABULARY_DATA.filter(w => w.level === activeLevel);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">单词学习 ({words.length})</h2>
      
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
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {words.length === 0 ? (
          <div className="p-8 text-center text-gray-500">该等级暂无单词数据。</div>
        ) : (
          <div className="divide-y divide-gray-100">
            {words.map((word) => (
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
    </div>
  );
};

export default VocabularyList;
