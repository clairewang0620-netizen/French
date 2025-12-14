
/* Fix: 2025-12-14 06:10 - Landing Page */
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, MessageCircle, GraduationCap, BookOpen } from 'lucide-react';

const Landing: React.FC = () => {
  const cards = [
    { to: '/vocabulary', title: '单词学习', desc: 'A1-C1 分级词汇，配音标发音', icon: <Book className="w-8 h-8 text-white" />, color: 'bg-blue-500' },
    { to: '/phrases', title: '口语600句', desc: '常用生活口语，点击即读', icon: <MessageCircle className="w-8 h-8 text-white" />, color: 'bg-green-500' },
    { to: '/grammar', title: '基础语法', desc: '清晰易懂的语法梳理', icon: <GraduationCap className="w-8 h-8 text-white" />, color: 'bg-purple-500' },
    { to: '/reading', title: '法语阅读', desc: '精选短文，带翻译与朗读', icon: <BookOpen className="w-8 h-8 text-white" />, color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-french-blue mb-4">Bonjour! 开始你的法语之旅</h1>
        <p className="text-gray-600 text-lg">专为中国学习者打造，简洁、高效、纯净。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <Link to={card.to} key={card.to} className="block group">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 flex items-start gap-4 h-full border border-gray-100">
              <div className={`${card.color} p-4 rounded-lg shadow-sm group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h2>
                <p className="text-gray-500">{card.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
        <h3 className="font-bold text-french-blue mb-2">💡 每日小贴士</h3>
        <p className="text-gray-700">法语发音中，词末的辅音字母通常不发音（CaReFuL 字母除外）。多听多读是关键！</p>
      </div>
    </div>
  );
};

export default Landing;
