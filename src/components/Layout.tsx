
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Book, MessageCircle, GraduationCap, AlertTriangle, BookOpen, Home, RefreshCw } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

// 修改此版本号以在部署后直观验证
const DEPLOY_VERSION = "v6.0-FINAL"; 

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
    if (window.confirm("确定要清除所有缓存并强制刷新吗？")) {
      // 1. 清除 LocalStorage
      localStorage.clear();
      // 2. 清除 SessionStorage
      sessionStorage.clear();
      // 3. 强制从服务器重新加载 (true 参数)
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-french-blue text-white shadow-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold flex items-center gap-2">
            🇫🇷 法语大师 <span className="text-xs bg-red-500 px-1 rounded opacity-80">{DEPLOY_VERSION}</span>
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
        
        {/* 强制刷新区域 - 只有在遇到缓存问题时才需要用这个 */}
        <div className="mt-6 p-4 bg-gray-900 mx-auto max-w-xs rounded-lg border border-gray-700">
          <p className="text-xs text-gray-500 mb-2">遇到内容未更新？</p>
          <button 
            onClick={handleForceRefresh}
            className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded text-xs font-bold transition-colors"
          >
            <RefreshCw size={14} />
            点我强制清除缓存并刷新
          </button>
          <p className="text-[10px] text-gray-600 mt-2 font-mono">Current Build: {DEPLOY_VERSION}</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
