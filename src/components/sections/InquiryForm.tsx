import { useState } from 'react';
import { Send, Clock, Phone, Shield } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
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

export default function InquiryForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const update = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

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

  const inputClass = 'w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-dark placeholder:text-brand-gray-light focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors';
  const selectClass = `${inputClass} appearance-none`;

  return (
    <section className="section-padding bg-brand-blue relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative">
        <SectionHeading
          title="Get Instant Admission Information"
          subtitle="Fill out this quick form and our expert counselors will reach out to you with personalized guidance."
          light
        />

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl">
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name *" required value={form.name} onChange={update('name')} className={inputClass} />
              <input type="email" placeholder="Email Address *" required value={form.email} onChange={update('email')} className={inputClass} />
              <input type="tel" placeholder="Phone Number *" required value={form.phone} onChange={update('phone')} className={inputClass} />
              <input type="text" placeholder="City" value={form.city} onChange={update('city')} className={inputClass} />
              <select value={form.last_education} onChange={update('last_education')} className={selectClass}>
                <option value="">Last Education</option>
                {EDUCATION_LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
              </select>
              <input type="text" placeholder="IELTS Score (if any)" value={form.ielts_score} onChange={update('ielts_score')} className={inputClass} />
              <select value={form.preferred_destination} onChange={update('preferred_destination')} className={`${selectClass} sm:col-span-2`}>
                <option value="">Preferred Destination</option>
                {DESTINATIONS.map((d) => <option key={d.name} value={d.name}>{d.flag} {d.name}</option>)}
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white font-semibold py-3.5 rounded-xl transition-colors disabled:opacity-60"
            >
              {loading ? (
                <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Get Free Consultation
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-brand-gray">
              <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5" /> No obligation</span>
              <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> Free consultation</span>
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Response within 24 hours</span>
            </div>
          </form>
        </div>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </section>
  );
}
