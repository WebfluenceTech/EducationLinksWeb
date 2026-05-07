import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import BackToTop from './components/ui/BackToTop';
import HomePage from './pages/HomePage';
import ApplyPage from './pages/ApplyPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <ScrollToTop />
      <div className={`flex flex-col ${isHome ? 'fp-layout' : 'min-h-screen'}`}>
        <Header />
        <main className={isHome ? '' : 'flex-1'}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/apply" element={<ApplyPage />} />
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









