
import React from 'react';
import { Link } from 'react-router-dom';
import { Level } from '../types';
import { CheckCircle } from 'lucide-react';

const QuizHub: React.FC = () => {
  const levels = Object.values(Level);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">阶段测试</h2>
      <p className="text-gray-600">选择等级开始测试，错题将自动加入错题本。</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {levels.map((level) => (
          <Link key={level} to={`/quiz/${level}`} className="group">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-french-blue transition-colors flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-french-blue">
                  {level} 等级测试
                </h3>
                <p className="text-sm text-gray-500 mt-1">综合能力测验</p>
              </div>
              <CheckCircle className="text-gray-300 group-hover:text-french-blue" size={24} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuizHub;
