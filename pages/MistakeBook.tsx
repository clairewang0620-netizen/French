import React from 'react';
import { useMistakes } from '../contexts/MistakeContext';
import { Trash2 } from 'lucide-react';

const MistakeBook: React.FC = () => {
  const { mistakes, removeMistake, clearMistakes } = useMistakes();

  if (mistakes.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">👏</span>
        </div>
        <h2 className="text-xl font-bold text-gray-800">太棒了！</h2>
        <p className="text-gray-500">目前没有错题记录。</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">错题本</h2>
        <button 
          onClick={clearMistakes}
          className="text-sm text-red-500 hover:text-red-700 underline"
        >
          清空记录
        </button>
      </div>

      <div className="space-y-4">
        {mistakes.map((record) => (
          <div key={record.questionId} className="bg-white p-6 rounded-xl shadow-sm border border-red-100 relative group">
             <button 
               onClick={() => removeMistake(record.questionId)}
               className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors"
               title="移除此题"
             >
               <Trash2 size={18} />
             </button>
             
             <div className="pr-8">
                <span className="inline-block px-2 py-0.5 bg-gray-100 text-xs text-gray-500 rounded mb-2">
                  {record.question.level}
                </span>
                <h3 className="text-lg font-bold text-gray-800 mb-4">{record.question.question}</h3>
                
                <div className="space-y-2 mb-4">
                  {record.question.options.map((opt, i) => (
                    <div 
                      key={i} 
                      className={`p-2 rounded text-sm ${
                        i === record.question.correctIndex 
                          ? 'bg-green-50 text-green-800 border border-green-200' 
                          : 'text-gray-500'
                      }`}
                    >
                      {opt} {i === record.question.correctIndex && '(正确答案)'}
                    </div>
                  ))}
                </div>

                <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                  <span className="font-bold">解析：</span>{record.question.explanation}
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MistakeBook;