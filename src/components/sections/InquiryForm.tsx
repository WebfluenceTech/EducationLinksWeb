import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { DESTINATIONS, EDUCATION_LEVELS } from '../../lib/constants';
import { supabase } from '../../lib/supabase';
import Toast from '../ui/Toast';

const LANGUAGE_TESTS = ['IELTS', 'Duolingo', 'PTE', 'Oxford ELTT', 'Other', 'None'] as const;
type LanguageTest = typeof LANGUAGE_TESTS[number];

const SCORE_PLACEHOLDER: Record<LanguageTest, string> = {
  IELTS: 'e.g. 6.5',
  Duolingo: 'e.g. 110',
  PTE: 'e.g. 58',
  'Oxford ELTT': 'e.g. B2',
  Other: 'Enter your score',
  None: '',
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  last_education: string;
  language_test: string;
  language_score: string;
  other_qualifications: string;
  preferred_destination: string;
}

const INITIAL: FormData = {
  name: '', email: '', phone: '', city: '',
  last_education: '', language_test: '', language_score: '', other_qualifications: '', preferred_destination: '',
};

const field = 'w-full bg-transparent border-b border-slate-300 focus:border-brand-blue focus:outline-none py-3 text-sm text-brand-dark placeholder:text-brand-gray-light transition-colors duration-200';
const select = `${field} appearance-none cursor-pointer`;

export default function InquiryForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const update = (f: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((prev) => {
    const next = { ...prev, [f]: e.target.value };
    if (f === 'language_test') next.language_score = '';
    return next;
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { language_test, language_score, other_qualifications, ...rest } = form;
    const payload = {
      ...rest,
      ielts_score: !language_test || language_test === 'None'
        ? 'None'
        : language_score
          ? `${language_test}: ${language_score}`
          : language_test,
      other_qualifications,
    };
    const { error } = await supabase.from('inquiries').insert(payload);
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
    <section id="inquiry" ref={sectionRef} data-fp-scrollable className="relative overflow-y-auto h-full min-h-screen bg-surface-soft">
      {/* Parallax background wrapper to prevent scrollHeight expansion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={bgRef}
          className="absolute inset-0 will-change-transform"
          style={{ top: '-15%', bottom: '-15%' }}
        >
          {/* Subtle decorative circles */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-blue/[0.05] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] rounded-full bg-brand-blue/[0.06]" />
          <div className="absolute top-0 right-0 w-[250px] h-[250px] rounded-full bg-brand-blue/[0.04]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — heading (hidden on small mobile, visible md+) */}
          <div className="hidden sm:block lg:sticky lg:top-10">
            <span className="eyebrow mb-4">
              Free Consultation
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-brand-dark leading-[1.08] tracking-tight mb-6">
              Start Your <br />
              <span className="text-brand-blue">Journey</span> Today
            </h2>
            <p className="text-brand-gray text-base leading-relaxed max-w-sm">
              Fill in your details and our expert counselors will reach out with a personalized study-abroad plan — completely free.
            </p>

            <div className="mt-10 space-y-4">
              {[
                ['No obligation', 'Completely free, cancel anytime'],
                ['Expert counselors', 'Dedicated advisor assigned to you'],
                ['24-hour response', 'We get back to you the same day'],
              ].map(([title, sub]) => (
                <div key={title} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-blue shrink-0" />
                  <div>
                    <p className="text-brand-dark text-sm font-semibold">{title}</p>
                    <p className="text-brand-gray text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Mobile-only heading */}
            <div className="sm:hidden mb-2">
              <span className="eyebrow mb-2">Free Consultation</span>
              <h2 className="font-heading text-3xl font-extrabold text-brand-dark leading-[1.08] tracking-tight">
                Start Your <span className="text-brand-blue">Journey</span> Today
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-brand-gray mb-1">
                  Full Name <span className="text-brand-blue">*</span>
                </label>
                <input type="text" required placeholder="e.g. First Name, Last Name" value={form.name} onChange={update('name')} className={field} />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-brand-gray mb-1">
                  Email <span className="text-brand-blue">*</span>
                </label>
                <input type="email" required placeholder="you@email.com" value={form.email} onChange={update('email')} className={field} />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-brand-gray mb-1">
                  Phone <span className="text-brand-blue">*</span>
                </label>
                <input type="tel" required placeholder="+92 300 0000000" value={form.phone} onChange={update('phone')} className={field} />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-brand-gray mb-1">City</label>
                <input type="text" placeholder="e.g. Your City" value={form.city} onChange={update('city')} className={field} />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-brand-gray mb-1">Last Education</label>
                <select value={form.last_education} onChange={update('last_education')} className={select}>
                  <option value="" className="text-brand-dark">Select level</option>
                  {EDUCATION_LEVELS.map((l) => <option key={l} value={l} className="text-brand-dark">{l}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-brand-gray mb-1">Language Test</label>
                <select value={form.language_test} onChange={update('language_test')} className={select}>
                  <option value="" className="text-brand-dark">Select test</option>
                  {LANGUAGE_TESTS.map((t) => <option key={t} value={t} className="text-brand-dark">{t}</option>)}
                </select>
              </div>

              {form.language_test && form.language_test !== 'None' && (
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-brand-gray mb-1">
                    {form.language_test} Score
                  </label>
                  <input
                    type="text"
                    placeholder={SCORE_PLACEHOLDER[form.language_test as LanguageTest]}
                    value={form.language_score}
                    onChange={update('language_score')}
                    className={field}
                  />
                </div>
              )}

              <div className="sm:col-span-2">
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-brand-gray mb-1">Other Qualifications</label>
                <input
                  type="text"
                  placeholder="e.g. Diplomas, Certifications, Professional qualifications"
                  value={form.other_qualifications}
                  onChange={update('other_qualifications')}
                  className={field}
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-brand-gray mb-1">Preferred Destination</label>
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
              className="btn-primary group px-8 py-4 text-sm uppercase tracking-widest"
            >
              {loading ? (
                <span className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
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
