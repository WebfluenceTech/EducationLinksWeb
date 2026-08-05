import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Phone, Mail, Facebook,
  Instagram, Youtube, Send, ArrowRight,
} from 'lucide-react';

import footerLogoSrc from '../../assets/footerlogo.png';
import { COMPANY, OFFICES } from '../../lib/constants';
import { supabase } from '../../lib/supabase';
import Toast from '../ui/Toast';

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/#about' },
  { label: 'Services', to: '/services' },
  { label: 'Study Destinations', to: '/#destinations' },
  { label: 'Apply Online', to: '/apply' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact Us', to: '/contact-us' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const { error } = await supabase.from('newsletter_subscribers').insert({ email: email.trim() });
    if (error) {
      if (error.code === '23505') {
        setToast({ message: 'You are already subscribed!', type: 'error' });
      } else {
        setToast({ message: 'Something went wrong. Please try again.', type: 'error' });
      }
    } else {
      setToast({ message: 'Successfully subscribed to our newsletter!', type: 'success' });
      setEmail('');
    }
  };

  return (
    <footer data-fp-scrollable className="text-white h-full overflow-y-auto font-heading border-t-2 border-brand-blue" style={{ backgroundColor: '#131820' }}>
      {/* ── Massive display brand name ── */}
      <div className="w-full overflow-hidden pt-10 pb-2 px-4 sm:px-6 lg:px-10 xl:px-16">
        <p
          className="whitespace-nowrap font-heading font-black leading-[0.9] tracking-tighter select-none"
          style={{ fontSize: 'clamp(3.2rem, 10.5vw, 10.5rem)' }}
        >
          <span className="text-white/90">Education</span>
          <span
            className="text-brand-blue"
            style={{ marginLeft: '0.12em', fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 600 }}
          >
            Links
          </span>
        </p>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* About */}
          <div>
            <Link to="/" className="inline-block mb-5">
              <img src={footerLogoSrc} alt="Education Links" className="h-16 w-auto object-contain" loading="lazy" decoding="async" />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Pakistan's leading study abroad consultancy since 2009. Helping students achieve their dreams of international education across 11+ destinations worldwide.
            </p>
            <div className="flex items-center gap-3">
              <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-9 w-9 bg-white/10 text-slate-300 hover:bg-brand-blue hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-9 w-9 bg-white/10 text-slate-300 hover:bg-brand-blue hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={COMPANY.social.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-9 w-9 bg-white/10 text-slate-300 hover:bg-brand-blue hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <ArrowRight className="h-3.5 w-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white mb-5">Our Offices</h3>
            <ul className="space-y-4">
              {OFFICES.map((office) => (
                <li key={office.name} className="flex gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-white">{office.name}</span>
                    <span className="block text-gray-400 leading-relaxed">{office.address}</span>
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-1 text-xs text-brand-blue-light hover:text-white transition-colors"
                    >
                      Get Directions &rarr;
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white mb-5">Get in Touch</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a href={`tel:${COMPANY.whatsapp}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 text-slate-400" /> {COMPANY.whatsapp}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 text-slate-400" /> {COMPANY.email}
                </a>
              </li>
            </ul>
            <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-white/90 mb-3">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 min-w-0 bg-white/[0.07] border border-white/10 px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:border-brand-blue focus:bg-white/10 transition-colors"
              />
              <button
                type="submit"
                className="bg-brand-blue hover:bg-brand-blue-dark text-white px-4 transition-colors active:scale-95"
                aria-label="Subscribe"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <span>&copy; {new Date().getFullYear()} Education Links. All rights reserved.</span>
          <span>
            Developed &amp; Maintained by{' '}
            <a
              href="https://www.webfluence.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brand-blue-light font-medium transition-colors underline underline-offset-4 decoration-brand-blue/50"
            >
              Team Webfluence
            </a>
          </span>
          <span>Pakistan's Trusted Study Abroad Partner Since 2009</span>
        </div>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </footer>
  );
}
