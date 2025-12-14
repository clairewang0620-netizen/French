
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QUIZ_DATA } from '../data/quizzes';
import { useMistakes } from '../contexts/MistakeContext';
import { Level } from '../types';
import { ArrowLeft, Check, X } from 'lucide-react';

const QuizExam: React.FC = () => {
  const { level } = useParams<{ level: string }>();
  const navigate = useNavigate();
  const { addMistake } = useMistakes();

  // Filter questions for this level
  const questions = QUIZ_DATA.filter(q => q.level === (level as Level));
  
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  if (questions.length === 0) {
    return <div className="p-10 text-center">该等级暂无试题。</div>;
  }

  const question = questions[currentIdx];

  const handleOptionSelect = (idx: number) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    const isCorrect = selectedOption === question.correctIndex;
    setIsSubmitted(true);
    
    if (isCorrect) {
      setScore(s => s + 1);
    } else {
      addMistake(question);
    }
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(curr => curr + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg text-center space-y-6">
        <h2 className="text-2xl font-bold">测试完成！</h2>
        <div className="text-6xl font-bold text-french-blue mb-4">
          {score} <span className="text-2xl text-gray-400">/ {questions.length}</span>
        </div>
        <p className="text-gray-600">错题已自动加入错题本。</p>
        <button 
          onClick={() => navigate('/quiz')}
          className="bg-french-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 w-full"
        >
          返回测试列表
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between text-sm text-gray-500">
        <button onClick={() => navigate('/quiz')} className="flex items-center hover:text-french-blue">
          <ArrowLeft size={16} className="mr-1" /> 退出
        </button>
        <span>进度: {currentIdx + 1} / {questions.length}</span>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6">{question.question}</h3>
        
        <div className="space-y-3">
          {question.options.map((opt, idx) => {
            let itemStyle = "border-gray-200 hover:bg-gray-50";
            if (selectedOption === idx && !isSubmitted) {
               itemStyle = "border-blue-500 bg-blue-50 text-blue-700 ring-1 ring-blue-500";
            }
            if (isSubmitted) {
              if (idx === question.correctIndex) {
                itemStyle = "border-green-500 bg-green-50 text-green-700";
              } else if (idx === selectedOption) {
                itemStyle = "border-red-500 bg-red-50 text-red-700";
              } else {
                itemStyle = "opacity-50 border-gray-100";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx)}
                disabled={isSubmitted}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-center justify-between ${itemStyle}`}
              >
                <span>{opt}</span>
                {isSubmitted && idx === question.correctIndex && <Check size={20} />}
                {isSubmitted && idx === selectedOption && idx !== question.correctIndex && <X size={20} />}
              </button>
            );
          })}
        </div>

        {isSubmitted && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm text-gray-700">
            <span className="font-bold">解析：</span> {question.explanation}
          </div>
        )}
      </div>

      <button
        onClick={isSubmitted ? handleNext : handleSubmit}
        disabled={selectedOption === null}
        className={`w-full py-4 rounded-xl font-bold text-lg shadow-md transition-all ${
          selectedOption === null 
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
            : 'bg-french-blue text-white hover:bg-blue-700'
        }`}
      >
        {isSubmitted ? (currentIdx === questions.length - 1 ? '查看结果' : '下一题') : '提交答案'}
      </button>
    </div>
  );
};

export default QuizExam;
