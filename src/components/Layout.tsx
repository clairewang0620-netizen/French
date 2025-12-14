
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Book, MessageCircle, GraduationCap, AlertTriangle, BookOpen, Home } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

// 🚀 v14.1 BUILD FIX - File moved to src/
const DEPLOY_VERSION = "v14.1-BUILD-FIX"; 

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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-french-blue text-white shadow-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold flex items-center gap-2">
            🇫🇷 法语大师 <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded font-bold shadow-sm">{DEPLOY_VERSION}</span>
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

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8 text-center text-sm">
        <p>© 2024 法语大师 FrenchMaster.</p>
        <p className="text-[10px] text-gray-600 mt-2 font-mono">Current Build: {DEPLOY_VERSION}</p>
      </footer>
    </div>
  );
};

export default Layout;
