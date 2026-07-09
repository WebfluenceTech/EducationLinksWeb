import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import BackToTop from './components/ui/BackToTop';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import TeamPage from './pages/TeamPage';
import UniversitiesPage from './pages/UniversitiesPage';
import PartnerUniversitiesPage from './pages/PartnerUniversitiesPage';
import DestinationPage from './pages/DestinationPage';
import { useIsMobile } from './hooks/useIsMobile';

function AppLayout() {
  const location = useLocation();
  const isMobile = useIsMobile();

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
            <Route path="/partner-universities" element={<PartnerUniversitiesPage />} />
            <Route path="/destinations/:countryName" element={<DestinationPage />} />
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
