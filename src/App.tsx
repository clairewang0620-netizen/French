
/* FrenchMaster App Entry - Updated Imports */
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { MistakeProvider } from './contexts/MistakeContext';

// Pages
import HomePage from './pages/HomePage'; // Using HomePage to avoid case-sensitivity build errors
import VocabularyList from './pages/VocabularyList';
import Flashcard from './pages/Flashcard';
import GrammarList from './pages/GrammarList';
import PhrasesList from './pages/PhrasesList';
import ReadingList from './pages/ReadingList';
import ReadingDetail from './pages/ReadingDetail';
import QuizList from './pages/QuizList';
import QuizDetail from './pages/QuizDetail';
import MistakeBook from './pages/MistakeBook';

const App: React.FC = () => {
  return (
    <MistakeProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
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
            <Route path="/quiz" element={<QuizList />} />
            <Route path="/quiz/:level" element={<QuizDetail />} />
            
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
