
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Book, MessageCircle, GraduationCap, AlertTriangle, BookOpen, Home, RefreshCw, Zap } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

// !!! 部署后请寻找此版本号 !!!
const DEPLOY_VERSION = "v7.0-FIXED"; 

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: '首页', icon: <Home size={20} /> },
    { path: '/vocabulary', label: '背单词', icon: <Book size={20} /> },
    { path: '/grammar', label: '语法', icon: <GraduationCap size={20} /> },
    { path: '/phrases', label: '口语600句', icon: <MessageCircle size={20} /> },
    { path: '/reading', label: '阅读', icon: <BookOpen size={20} /> },
    { path: '/quiz', label: '阶段测试', icon: <GraduationCap size={20} /> },
    { path: '/mistakes', label: '错题本', icon: <AlertTriangle size={20} /> },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleForceRefresh = () => {
    if (window.confirm("确定要强制刷新吗？这将清除所有缓存。")) {
      // Unregister Service Worker if any
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function(registrations) {
          for(let registration of registrations) {
            registration.unregister();
          }
        });
      }
      localStorage.clear();
      sessionStorage.clear();
      // Force reload from server, ignoring cache
      window.location.href = window.location.href.split('?')[0] + '?t=' + new Date().getTime();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-french-blue text-white shadow-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold flex items-center gap-2">
            🇫🇷 法语大师 <span className="text-xs bg-yellow-400 text-blue-900 px-2 py-0.5 rounded font-bold shadow-sm animate-pulse">{DEPLOY_VERSION}</span>
          </Link>
          
          <button onClick={toggleMenu} className="md:hidden p-2 hover:bg-blue-700 rounded">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`hover:text-blue-200 transition-colors ${location.pathname === item.path ? 'border-b-2 border-white' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 w-full z-40 border-b border-gray-200">
          <div className="flex flex-col p-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 py-3 px-4 rounded hover:bg-gray-100 ${location.pathname === item.path ? 'text-french-blue font-bold bg-blue-50' : 'text-gray-700'}`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-6">
        {children}
      </main>

      {/* Footer & Debug Control */}
      <footer className="bg-gray-800 text-gray-400 py-8 text-center text-sm">
        <p>© 2024 法语大师 FrenchMaster.</p>
        
        {/* 核弹级刷新按钮 */}
        <div className="mt-8 mx-auto max-w-xs">
          <button 
            onClick={handleForceRefresh}
            className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-red-600 text-gray-300 hover:text-white py-3 px-4 rounded-lg text-xs font-bold transition-all duration-300 border border-gray-600 hover:border-red-500"
          >
            <Zap size={14} className={DEPLOY_VERSION.includes('FIXED') ? 'text-yellow-400' : ''} />
            强制更新 (若未显示 {DEPLOY_VERSION} 请点此)
          </button>
          <p className="text-[10px] text-gray-600 mt-2 font-mono">Build ID: {DEPLOY_VERSION}</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
