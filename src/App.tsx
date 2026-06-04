import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import BackToTop from './components/ui/BackToTop';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import { useIsMobile } from './hooks/useIsMobile';

function AppLayout() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const isHome = location.pathname === '/';
  const useFpLayout = isHome && !isMobile;

  return (
    <>
      <ScrollToTop />
      <div className={`flex flex-col w-full ${useFpLayout ? 'fp-layout' : 'min-h-screen'}`} style={{ overflowX: 'clip' }}>
        <Header />
        <main className={`w-full ${useFpLayout ? '' : 'flex-1'}`} style={{ overflowX: 'clip', paddingTop: useFpLayout ? undefined : isMobile ? '64px' : '80px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        {/* Footer is part of FullPageScroll on homepage */}
        {!isHome && <Footer />}
      </div>
      {!isHome && <BackToTop />}
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
