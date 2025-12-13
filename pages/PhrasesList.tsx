import React from 'react';
import { PHRASES_DATA } from '../data/phrases';
import AudioButton from '../components/AudioButton';

const PhrasesList: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">600句常用口语</h2>
      <p className="text-gray-500 text-sm">点击喇叭图标听发音，模仿跟读。</p>

      <div className="grid grid-cols-1 gap-4">
        {PHRASES_DATA.map((phrase, index) => (
          <div key={phrase.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:border-blue-200 transition-colors">
            <div className="flex items-center gap-4">
               <span className="text-gray-300 font-bold w-6 text-center">{index + 1}</span>
               <div>
                 <p className="text-lg font-medium text-gray-800">{phrase.french}</p>
                 <p className="text-gray-500">{phrase.chinese}</p>
               </div>
            </div>
            <AudioButton text={phrase.french} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhrasesList;