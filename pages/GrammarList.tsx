import React from 'react';
import { GRAMMAR_DATA } from '../data/grammar';
import AudioButton from '../components/AudioButton';

const GrammarList: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">基础语法</h2>
      
      <div className="grid gap-6">
        {GRAMMAR_DATA.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-french-blue">{item.title}</h3>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded font-bold">{item.level}</span>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6 border-l-4 border-blue-200 pl-4">
              {item.content}
            </p>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-bold text-gray-500 mb-3">示例：</h4>
              <div className="space-y-3">
                {item.examples.map((ex, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <AudioButton text={ex.french} size="sm" />
                    <div>
                      <p className="font-medium text-gray-800">{ex.french}</p>
                      <p className="text-sm text-gray-500">{ex.chinese}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrammarList;