import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import BackToTop from './components/ui/BackToTop';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import TeamPage from './pages/TeamPage';
import ServicesPage from './pages/ServicesPage';
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
            <Route path="/our-team" element={<TeamPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/universities" element={<UniversitiesPage />} />
            <Route path="/finland" element={<UniversitiesPage defaultCountry="Finland" />} />
            <Route path="/ireland" element={<UniversitiesPage defaultCountry="Ireland" />} />
            <Route path="/partner-universities" element={<PartnerUniversitiesPage />} />
            <Route path="/destinations/:countryName" element={<DestinationPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            {/* Backward-compatible redirects from old paths */}
            <Route path="/team" element={<Navigate to="/our-team" replace />} />
            <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
            <Route path="/company-introduction" element={<Navigate to="/#about" replace />} />
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
