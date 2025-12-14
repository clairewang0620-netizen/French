import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { READING_DATA } from '../data/readings';
import AudioButton from '../components/AudioButton';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

const ReadingDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = READING_DATA.find(a => a.id === id);
  const [showTranslation, setShowTranslation] = useState(false);

  if (!article) return <div className="text-center p-10">文章不存在</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-gray-600 hover:text-french-blue"
        >
          <ArrowLeft size={20} className="mr-1" /> 返回
        </button>
        <span className="text-sm font-bold bg-gray-200 px-2 py-1 rounded">{article.level}</span>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-french-blue">{article.title}</h1>
          <AudioButton text={article.content} label="朗读全文" />
        </div>

        <p className="text-lg leading-relaxed text-gray-800 mb-6 font-serif whitespace-pre-line">
          {article.content}
        </p>

        <div className="border-t border-gray-100 pt-4">
          <button 
            onClick={() => setShowTranslation(!showTranslation)}
            className="flex items-center text-sm text-gray-500 hover:text-gray-700 mb-2"
          >
            {showTranslation ? <EyeOff size={16} className="mr-1" /> : <Eye size={16} className="mr-1" />}
            {showTranslation ? '隐藏翻译' : '查看翻译'}
          </button>
          
          {showTranslation && (
            <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">{article.translation}</p>
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4 border-l-4 border-green-500 pl-3">核心词汇</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {article.keywords.map((kw, i) => (
            <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded">
               <div className="flex items-center gap-2">
                 <AudioButton text={kw.french} size="sm" />
                 <span className="font-medium">{kw.french}</span>
               </div>
               <span className="text-gray-500 text-sm">{kw.chinese}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadingDetail;