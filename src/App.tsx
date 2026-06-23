import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import BackToTop from './components/ui/BackToTop';
import HomePage from './pages/HomePage';
import ApplyPage from './pages/ApplyPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import TeamPage from './pages/TeamPage';
import UniversitiesPage from './pages/UniversitiesPage';
import DestinationPage from './pages/DestinationPage';

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col w-full min-h-screen" style={{ overflowX: 'clip' }}>
        <Header />
        <main className="w-full flex-1" style={{ overflowX: 'clip' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/universities" element={<UniversitiesPage />} />
            <Route path="/destinations/:countryName" element={<DestinationPage />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <BackToTop />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
