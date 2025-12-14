
import React from 'react';
// import { useMistakes } from '../contexts/MistakeContext';
import { AlertTriangle } from 'lucide-react';

const MistakeBook: React.FC = () => {
  // const { mistakes, removeMistake, clearMistakes } = useMistakes();

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="bg-orange-100 p-6 rounded-full mb-6">
        <AlertTriangle size={48} className="text-orange-500" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">错题本维护中</h2>
      <p className="text-gray-500 max-w-md">
        为了优化系统性能，错题本功能暂时关闭进行升级。
        您的学习记录不会丢失，请稍后再试。
      </p>
    </div>
  );
};

export default MistakeBook;
