import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VocabularyPage from './pages/VocabularyPage';
import VietnameseVocabularyPage from './pages/VietnameseVocabularyPage';
import HSKVocabularyPage from './pages/HSKVocabularyPage';
import ReadingPage from './pages/ReadingPage';
import PassageDetailPage from './pages/PassageDetailPage';
import FlashcardPage from './pages/FlashcardPage';
import HSKFlashcardPage from './pages/HSKFlashcardPage';
import OldFlashcardPage from './pages/OldFlashcardPage';

import Layout from './components/common/Layout';
import NotFoundPage from './pages/NotFoundPage';
import { AudioProvider } from './contexts/AudioContext';
import { VocabularyProvider } from './context/VocabularyContext';

function App() {
  return (
    <VocabularyProvider>
      <AudioProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="vocabulary" element={<VocabularyPage />} />
              <Route path="vietnamese" element={<VietnameseVocabularyPage />} />
              <Route path="hsk" element={<HSKVocabularyPage />} />
              <Route path="flashcards" element={<FlashcardPage />} />
              <Route path="hsk-flashcards" element={<HSKFlashcardPage />} />
              <Route path="old-flashcards" element={<OldFlashcardPage />} />
              <Route path="reading" element={<ReadingPage />} />
              <Route path="reading/:id" element={<PassageDetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </HashRouter>
      </AudioProvider>
    </VocabularyProvider>
  );
}

export default App;
