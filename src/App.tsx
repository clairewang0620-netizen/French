
/* Fix: 2025-12-14 06:10 - Updated App Imports */
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { MistakeProvider } from './contexts/MistakeContext';

// Pages - Using new names to fix build errors
import Landing from './pages/Landing'; 
import VocabularyList from './pages/VocabularyList';
import Flashcard from './pages/Flashcard';
import GrammarList from './pages/GrammarList';
import PhrasesList from './pages/PhrasesList';
import ReadingList from './pages/ReadingList';
import ReadingDetail from './pages/ReadingDetail';
import QuizIndex from './pages/QuizIndex'; 
import QuizSession from './pages/QuizSession'; 
import MistakeBook from './pages/MistakeBook';

const App: React.FC = () => {
  return (
    <MistakeProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            
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
            
            {/* Quiz */}
            <Route path="/quiz" element={<QuizIndex />} />
            <Route path="/quiz/:level" element={<QuizSession />} />
            
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
