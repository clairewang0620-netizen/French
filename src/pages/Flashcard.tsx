
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// FIX: Point to the full dataset
import { VOCABULARY_DATA } from '../data/vocabulary';
import AudioButton from '../components/AudioButton';
import { ArrowLeft } from 'lucide-react';

const Flashcard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const word = VOCABULARY_DATA.find(w => w.id === id);

  if (!word) {
    return <div className="text-center p-10">未找到单词</div>;
  }

  return (
    <div className="space-y-6">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center text-gray-600 hover:text-french-blue transition-colors"
      >
        <ArrowLeft size={20} className="mr-1" /> 返回列表
      </button>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden min-h-[400px] flex flex-col items-center justify-center p-8 text-center relative">
        <div className="absolute top-4 right-4">
          <span className="bg-blue-100 text-french-blue px-3 py-1 rounded-full text-xs font-bold">
            {word.level}
          </span>
        </div>

        {/* Word Section */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">{word.french}</h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-gray-500 font-mono text-xl">{word.ipa}</span>
            <AudioButton text={word.french} size="lg" />
          </div>
          <p className="text-2xl text-gray-600 font-medium">{word.chinese}</p>
        </div>

        <div className="w-full h-px bg-gray-100 my-4" />

        {/* Example Section */}
        <div className="max-w-md w-full text-left bg-gray-50 p-6 rounded-xl">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">例句</h3>
          <div className="flex items-start gap-3">
             <AudioButton text={word.example.french} size="sm" className="mt-1 flex-shrink-0" />
             <div>
               <p className="text-lg text-gray-800 mb-1">{word.example.french}</p>
               <p className="text-gray-600">{word.example.chinese}</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
