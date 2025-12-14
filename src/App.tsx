
/* Fix: 2025-12-14 06:15 - Resolving QuizList Error by using QuizHub */
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { MistakeProvider } from './contexts/MistakeContext';

// Pages - Using NEW NAMES to strictly avoid old file references
import LandingPage from './pages/LandingPage'; 
import VocabularyList from './pages/VocabularyList';
import Flashcard from './pages/Flashcard';
import GrammarList from './pages/GrammarList';
import PhrasesList from './pages/PhrasesList';
import ReadingList from './pages/ReadingList';
import ReadingDetail from './pages/ReadingDetail';
import QuizHub from './pages/QuizHub';  // Formerly QuizList
import QuizExam from './pages/QuizExam'; // Formerly QuizDetail
import MistakeBook from './pages/MistakeBook';

const App: React.FC = () => {
  return (
    <MistakeProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            
            {/* Vocabulary */}
            <Route path="/vocabulary" element={<VocabularyList />} />
            <Route path="/vocabulary/:level/:id" element={<Flashcard />} />
            
            {/* Grammar */}
            <Route path="/grammar" element={<GrammarList />} />
            
            {/* Phrases */}
            <Route path="/phrases" element={<PhrasesList />} />
            
            {/* Reading */}
            <Route path="/reading" element={<ReadingList />} />
            <Route path="/reading/:id" element={<ReadingDetail />} />
            
            {/* Quiz - Note the component names are updated */}
            <Route path="/quiz" element={<QuizHub />} />
            <Route path="/quiz/:level" element={<QuizExam />} />
            
            {/* Mistakes */}
            <Route path="/mistakes" element={<MistakeBook />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </HashRouter>
    </MistakeProvider>
  );
};

export default App;
