import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, Phone, Mail, MapPin, ChevronDown,
  Facebook, Instagram, Youtube, ArrowRight,
} from 'lucide-react';
import logoSrc from '../../assets/footerlogo.png';
import { COMPANY, DESTINATIONS } from '../../lib/constants';

const NAV_LINKS_BEFORE_TEAM = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Services', to: '/#services' },
  { label: 'Our Team', to: '/team' },
];

const NAV_LINKS_AFTER_TEAM = [
  { label: 'Universities', to: '/universities' },
  { label: 'Destinations', to: '/#destinations', hasMega: true },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

const NAV_LINKS = [...NAV_LINKS_BEFORE_TEAM, ...NAV_LINKS_AFTER_TEAM];

const regions = ['Europe', 'North America', 'Middle East', 'Oceania', 'Asia'] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll when mobile drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (to: string) => {
    setMobileOpen(false);
    setMegaOpen(false);
    if (to.startsWith('/#')) {
      const id = to.slice(2);
      if (location.pathname === '/') {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 font-body">
      {/* Top utility bar */}
      <div className="bg-ink text-white/90 text-xs hidden md:block">
        <div className="container-custom flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a href={`tel:${COMPANY.whatsapp}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>{COMPANY.whatsapp}</span>
            </a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span>{COMPANY.email}</span>
            </a>
            <span className="flex items-center gap-1.5 text-white/60">
              <MapPin className="h-3.5 w-3.5" />
              <span>Lahore &middot; Sialkot</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/50">Trusted study-abroad partner since {COMPANY.established}</span>
            <span className="h-3 w-px bg-white/20" />
            <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
            <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
            <a href={COMPANY.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="YouTube"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-soft'
            : 'bg-white/70 backdrop-blur-md'
        }`}
      >
        <div className="container-custom relative flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center gap-2.5" onClick={() => handleNavClick('/')}>
            <img src={logoSrc} alt="Education Links" className="h-11 md:h-12 w-auto object-contain" />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-heading font-extrabold text-ink text-base tracking-tight">Education Links</span>
              <span className="text-[10px] font-medium text-ink-muted tracking-wide mt-0.5">{COMPANY.tagline}</span>
            </span>
          </Link>

          {/* Certification — centered on mobile */}
          <img src="/certification.png" alt="ICEF Certified Agency" className="block lg:hidden absolute left-1/2 -translate-x-1/2 h-9 w-auto object-contain opacity-90" />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS_BEFORE_TEAM.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-ink-soft hover:text-primary hover:bg-primary-soft transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {NAV_LINKS_AFTER_TEAM.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasMega && setMegaOpen(true)}
                onMouseLeave={() => link.hasMega && setMegaOpen(false)}
              >
                <Link
                  to={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium text-ink-soft hover:text-primary hover:bg-primary-soft transition-colors"
                >
                  {link.label}
                  {link.hasMega && <ChevronDown className={`h-3.5 w-3.5 transition-transform ${megaOpen ? 'rotate-180' : ''}`} />}
                </Link>

                {link.hasMega && megaOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                    <div className="bg-white rounded-2xl shadow-lift border border-line p-6 w-[640px] animate-fade-in-up">
                      <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                        {regions.map((region) => {
                          const items = DESTINATIONS.filter(d => d.region === region);
                          if (!items.length) return null;
                          return (
                            <div key={region}>
                              <h4 className="text-[11px] font-bold text-primary uppercase tracking-[0.14em] mb-2.5">{region}</h4>
                              <div className="grid grid-cols-1 gap-0.5">
                                {items.map((dest) => (
                                  <Link
                                    key={dest.name}
                                    to={`/destinations/${encodeURIComponent(dest.name)}`}
                                    onClick={() => { setMegaOpen(false); setMobileOpen(false); }}
                                    className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-sm text-ink-soft hover:bg-canvas hover:text-primary transition-colors"
                                  >
                                    <span className="text-base leading-none">{dest.flag}</span>
                                    <span className="font-medium">{dest.name}</span>
                                    <span className="ml-auto text-xs text-ink-muted">{dest.universities}+</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <img src="/certification.png" alt="ICEF Certified Agency" className="hidden lg:block h-11 w-auto object-contain" />
            <Link
              to="/apply"
              className="hidden sm:inline-flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-glow hover:-translate-y-0.5 transition-all"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-ink hover:bg-primary-soft transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`lg:hidden fixed inset-0 top-16 z-40 transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <nav className={`absolute right-0 top-0 bottom-0 w-80 max-w-[88%] bg-white shadow-2xl overflow-y-auto transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-ink-soft hover:bg-canvas hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-line mt-4">
              <Link
                to="/apply"
                onClick={() => { setMobileOpen(false); }}
                className="flex items-center justify-center gap-1.5 w-full bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-3.5 rounded-xl shadow-glow transition-colors"
              >
                Apply Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="pt-5 space-y-3 text-sm text-ink-muted">
              <a href={`tel:${COMPANY.whatsapp}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" /> {COMPANY.whatsapp}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" /> {COMPANY.email}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
