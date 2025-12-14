
import React, { useState } from 'react';
import { Level } from '../types';
import { GRAMMAR_DATA } from '../data/grammar';
import AudioButton from '../components/AudioButton';

const GrammarList: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<Level>(Level.A1);
  const activeItems = GRAMMAR_DATA.filter(item => item.level === activeLevel);
  const levels = Object.values(Level);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
         <h2 className="text-2xl font-bold text-gray-800">基础语法</h2>
         <span className="text-xs text-gray-400 font-mono">v14.0 Full</span>
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
            {lvl}
          </button>
        ))}
      </div>

      {/* Grammar Cards List */}
      <div className="space-y-6">
        {activeItems.length === 0 ? (
          <div className="p-8 text-center text-gray-500 bg-white rounded-xl border border-gray-100">
            该等级暂无语法内容。
          </div>
        ) : (
          activeItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Card Header */}
              <div className="bg-blue-50 px-6 py-4 border-b border-blue-100">
                <h3 className="text-xl font-bold text-french-blue">{item.title}</h3>
              </div>
              
              {/* Content Table */}
              <div className="p-4 overflow-x-auto">
                <table className="w-full text-left min-w-[500px]">
                  <thead>
                    <tr className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                      <th className="pb-2 w-1/6">主语 / 项目</th>
                      <th className="pb-2 w-1/6">变位 / 形式</th>
                      <th className="pb-2 w-2/3">例句</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {item.rows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors group">
                        <td className="py-3 pr-2 font-medium text-gray-700">{row.subject}</td>
                        <td className="py-3 pr-2 font-bold text-french-blue">{row.conjugation}</td>
                        <td className="py-3">
                           <div className="flex items-start gap-3">
                             <AudioButton text={row.example_fr} size="sm" className="mt-0.5 flex-shrink-0" />
                             <div>
                               <p className="text-gray-800 font-medium">{row.example_fr}</p>
                               <p className="text-sm text-gray-500">{row.example_zh}</p>
                               {row.rule && <p className="text-xs text-orange-500 mt-1">💡 {row.rule}</p>}
                             </div>
                           </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GrammarList;
