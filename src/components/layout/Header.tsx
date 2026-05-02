import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, Phone, Mail, MapPin, ChevronDown,
  Facebook, Instagram, Youtube,
  GraduationCap,
} from 'lucide-react';
import { COMPANY, DESTINATIONS } from '../../lib/constants';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Services', to: '/#services' },
  { label: 'Destinations', to: '/#destinations', hasMega: true },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

const regions = ['Europe', 'North America', 'Middle East', 'Oceania'] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location]);

  const handleNavClick = (to: string) => {
    setMobileOpen(false);
    if (to.startsWith('/#')) {
      const id = to.slice(2);
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-dark text-white text-sm hidden md:block">
        <div className="container-custom flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a href={`tel:${COMPANY.whatsapp}`} className="flex items-center gap-1.5 hover:text-brand-blue-light transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>{COMPANY.whatsapp}</span>
            </a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-1.5 hover:text-brand-blue-light transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span>{COMPANY.email}</span>
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              <span>Lahore | Sialkot</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue-light transition-colors" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
            <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue-light transition-colors" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
            <a href={COMPANY.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue-light transition-colors" aria-label="YouTube"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="container-custom flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => handleNavClick('/')}>
            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-brand-blue text-white">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="leading-tight">
              <span className="block text-lg font-bold font-heading">
                <span className="text-brand-red">Education</span>
                <span className="text-brand-blue">Links</span>
              </span>
              <span className="block text-[10px] tracking-wider text-brand-gray uppercase">Adding to your future</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasMega && setMegaOpen(true)}
                onMouseLeave={() => link.hasMega && setMegaOpen(false)}
              >
                <Link
                  to={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-brand-dark hover:text-brand-blue hover:bg-brand-light/60 transition-colors"
                >
                  {link.label}
                  {link.hasMega && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>

                {/* Mega Menu */}
                {link.hasMega && megaOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 w-[600px]">
                      <div className="grid grid-cols-2 gap-6">
                        {regions.map((region) => (
                          <div key={region}>
                            <h4 className="text-xs font-semibold text-brand-gray uppercase tracking-wider mb-3">{region}</h4>
                            <div className="space-y-1.5">
                              {DESTINATIONS.filter(d => d.region === region).map((dest) => (
                                <Link
                                  key={dest.name}
                                  to="/#destinations"
                                  onClick={() => handleNavClick('/#destinations')}
                                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm hover:bg-brand-light/60 transition-colors"
                                >
                                  <span className="text-base">{dest.flag}</span>
                                  <span>{dest.name}</span>
                                  <span className="ml-auto text-xs text-brand-gray">{dest.universities}+</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/apply"
              className="hidden sm:inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Apply Now
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div className={`lg:hidden fixed inset-0 top-16 z-40 transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
          <nav className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-white shadow-2xl overflow-y-auto">
            <div className="p-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-brand-dark hover:bg-brand-light/60 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 mt-4">
                <Link
                  to="/apply"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center bg-brand-red hover:bg-red-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors"
                >
                  Apply Now
                </Link>
              </div>
              <div className="pt-4 space-y-3 text-sm text-brand-gray">
                <a href={`tel:${COMPANY.whatsapp}`} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> {COMPANY.whatsapp}
                </a>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> {COMPANY.email}
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
