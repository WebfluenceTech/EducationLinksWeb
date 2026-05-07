import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { DESTINATIONS, EDUCATION_LEVELS } from '../../lib/constants';
import { supabase } from '../../lib/supabase';
import Toast from '../ui/Toast';

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  last_education: string;
  ielts_score: string;
  preferred_destination: string;
}

const INITIAL: FormData = {
  name: '', email: '', phone: '', city: '',
  last_education: '', ielts_score: '', preferred_destination: '',
};

const field = 'w-full bg-transparent border-b border-white/20 focus:border-white focus:outline-none py-4 text-base text-white placeholder:text-white/30 transition-colors duration-200';
const select = `${field} appearance-none cursor-pointer`;

export default function InquiryForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const update = (f: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [f]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('inquiries').insert(form);
    setLoading(false);
    if (error) {
      setToast({ message: 'Something went wrong. Please try again.', type: 'error' });
    } else {
      setToast({ message: 'Thank you! Our team will contact you within 24 hours.', type: 'success' });
      setForm(INITIAL);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const offset = rect.top * 0.35;
      bgRef.current.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      {/* Parallax background wrapper to prevent scrollHeight expansion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={bgRef}
          className="absolute inset-0 will-change-transform"
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #0c2a4a 40%, #0395DA 100%)',
            top: '-15%',
            bottom: '-15%',
          }}
        >
          {/* Subtle decorative circles */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-white/[0.03] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] rounded-full bg-brand-blue/20" />
          <div className="absolute top-0 right-0 w-[250px] h-[250px] rounded-full bg-white/[0.04]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom py-24 md:py-40">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left — heading */}
          <div className="max-w-xl">
            <p className="text-brand-blue-light text-sm font-bold uppercase tracking-[0.3em] mb-6">
              Free Consultation
            </p>
            <h2 className="font-heading font-bold text-white leading-tight mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Start Your <br />
              <span className="text-brand-blue">Journey</span> Today
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10">
              Fill in your details and our expert counselors will reach out with a personalized study-abroad plan — completely free of charge and with no obligation.
            </p>

            <div className="space-y-6">
              {[
                ['No obligation', 'Completely free, cancel anytime'],
                ['Expert counselors', 'Dedicated advisor assigned to you'],
                ['24-hour response', 'We get back to you the same day'],
              ].map(([title, sub]) => (
                <div key={title} className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 rounded-full bg-brand-blue shrink-0 shadow-[0_0_10px_rgba(3,149,218,0.8)]" />
                  <div>
                    <p className="text-white text-base md:text-lg font-bold tracking-wide">{title}</p>
                    <p className="text-white/50 text-sm">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">

              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-2">
                  Full Name <span className="text-brand-blue">*</span>
                </label>
                <input type="text" required placeholder="e.g. Ali Raza" value={form.name} onChange={update('name')} className={field} />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-2">
                  Email <span className="text-brand-blue">*</span>
                </label>
                <input type="email" required placeholder="you@email.com" value={form.email} onChange={update('email')} className={field} />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-2">
                  Phone <span className="text-brand-blue">*</span>
                </label>
                <input type="tel" required placeholder="+92 300 0000000" value={form.phone} onChange={update('phone')} className={field} />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-2">City</label>
                <input type="text" placeholder="Lahore" value={form.city} onChange={update('city')} className={field} />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-2">Last Education</label>
                <select value={form.last_education} onChange={update('last_education')} className={select}>
                  <option value="" className="text-brand-dark">Select level</option>
                  {EDUCATION_LEVELS.map((l) => <option key={l} value={l} className="text-brand-dark">{l}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-2">IELTS Score</label>
                <input type="text" placeholder="e.g. 6.5" value={form.ielts_score} onChange={update('ielts_score')} className={field} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-2">Preferred Destination</label>
              <select value={form.preferred_destination} onChange={update('preferred_destination')} className={select}>
                <option value="" className="text-brand-dark">Select country</option>
                {DESTINATIONS.map((d) => (
                  <option key={d.name} value={d.name} className="text-brand-dark">{d.flag} {d.name}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group flex items-center justify-center gap-4 bg-white text-brand-dark font-bold text-base uppercase tracking-[0.2em] px-12 py-5 rounded-xl hover:bg-brand-blue hover:text-white transition-all duration-300 disabled:opacity-50 shadow-xl shadow-black/20"
            >
              {loading ? (
                <span className="h-4 w-4 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin" />
              ) : (
                <>
                  Get Free Consultation
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </>
              )}
            </button>
          </form>

        </div>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </section>
  );
}
