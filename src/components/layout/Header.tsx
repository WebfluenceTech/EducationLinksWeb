import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import logoSrc from '../../assets/logo.png';
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

const regions = ['Europe', 'North America', 'Middle East', 'Oceania'] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location]);

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname === to;

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

  const navLinkClass = (to: string) =>
    `group flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
      isActive(to)
        ? 'text-white bg-white/[0.10]'
        : 'text-white/55 hover:text-white hover:bg-white/[0.06]'
    }`;

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4">
      <div className="mx-auto flex max-w-6xl justify-center">
        {/* ── Floating pill ── */}
        <div className="flex w-full items-center gap-1.5 rounded-full bg-[#1b1b1b] p-1.5 shadow-[0_22px_50px_-18px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.06] sm:p-2 lg:w-auto">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => handleNavClick('/')}
            aria-label="Education Links — home"
            className="flex h-10 shrink-0 items-center rounded-full bg-[#EEEDED] px-3 transition-transform duration-200 hover:scale-[1.03] sm:h-11 sm:px-4"
          >
            <img src={logoSrc} alt="Education Links" className="h-6 w-auto object-contain sm:h-7" />
          </Link>

          {/* Desktop nav */}
          <nav className="mx-1 hidden items-center lg:flex">
            {NAV_LINKS_BEFORE_TEAM.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className={navLinkClass(link.to)}
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
                  className={navLinkClass(link.to)}
                >
                  {link.label}
                  {link.hasMega && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${megaOpen ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>

                {link.hasMega && megaOpen && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4">
                    <div className="w-[620px] border border-slate-100 bg-white p-6 shadow-soft animate-fade-in-up">
                      <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                        {regions.map((region) => (
                          <div key={region}>
                            <h4 className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-gray">
                              {region}
                            </h4>
                            <div className="space-y-0.5">
                              {DESTINATIONS.filter((d) => d.region === region).map((dest) => (
                                <Link
                                  key={dest.name}
                                  to={`/destinations/${encodeURIComponent(dest.name)}`}
                                  onClick={() => { setMegaOpen(false); setMobileOpen(false); }}
                                  className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-brand-dark transition-colors hover:bg-surface-soft hover:text-brand-blue"
                                >
                                  <span className="text-base">{dest.flag}</span>
                                  <span>{dest.name}</span>
                                  <span className="ml-auto text-xs font-semibold text-brand-gray-light">{dest.universities}+</span>
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

          {/* push CTA / toggle to the right on mobile */}
          <div className="flex-1 lg:hidden" />

          {/* ICEF certification badge */}
          <div className="ml-1 flex h-10 shrink-0 items-center rounded-full bg-white px-2.5 lg:hidden xl:flex sm:h-11">
            <img
              src="/certification.png"
              alt="ICEF Certified Agency — REG # 3608"
              className="h-6 w-auto object-contain sm:h-7"
            />
          </div>

          {/* CTA pill */}
          <a
            href="/#inquiry"
            onClick={() => handleNavClick('/#inquiry')}
            className="ml-1 hidden items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#15181F] transition-colors hover:bg-brand-blue hover:text-white sm:inline-flex"
          >
            Apply Now
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`lg:hidden ${mobileOpen ? '' : 'pointer-events-none'}`}>
        <div
          className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />
        <nav
          className={`fixed right-0 top-0 bottom-0 z-40 w-80 max-w-[85%] overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="space-y-1 p-6 pt-24">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className={`block px-4 py-3 text-base font-semibold transition-colors ${
                  isActive(link.to) ? 'bg-surface-soft text-brand-blue' : 'text-brand-dark hover:bg-surface-soft'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 border-t border-slate-100 pt-4">
              <a
                href="/#inquiry"
                onClick={() => { setMobileOpen(false); handleNavClick('/#inquiry'); }}
                className="btn-primary w-full"
              >
                Apply Now
              </a>
            </div>
            <div className="space-y-3 pt-5 text-sm text-brand-gray">
              <a href={`tel:${COMPANY.whatsapp}`} className="flex items-center gap-2.5 transition-colors hover:text-brand-blue">
                <Phone className="h-4 w-4 text-brand-blue" /> {COMPANY.whatsapp}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2.5 transition-colors hover:text-brand-blue">
                <Mail className="h-4 w-4 text-brand-blue" /> {COMPANY.email}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
