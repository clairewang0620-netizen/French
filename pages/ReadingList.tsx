import React from 'react';
import { Link } from 'react-router-dom';
import { READING_DATA } from '../data/readings';
import { BookOpen } from 'lucide-react';

const ReadingList: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">法语阅读</h2>

      <div className="grid grid-cols-1 gap-4">
        {READING_DATA.map((article) => (
          <Link key={article.id} to={`/reading/${article.id}`}>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                <BookOpen size={24} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-bold text-gray-800">{article.title}</h3>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">{article.level}</span>
                </div>
                <p className="text-gray-500 text-sm truncate w-64 md:w-full">{article.content}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ReadingList;