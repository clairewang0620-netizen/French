
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
// import { MistakeProvider } from './contexts/MistakeContext';
import { VocabularyProvider } from './contexts/VocabularyContext';

// Pages
import HomePage from './pages/HomePage'; // Renamed to fix build casing issue
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
    // <MistakeProvider>
      <VocabularyProvider>
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
      </VocabularyProvider>
    // </MistakeProvider>
  );
};

export default App;
