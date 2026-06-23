import { useState } from 'react';
import { Check, Loader2 } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Toast from '../components/ui/Toast';
import { supabase } from '../lib/supabase';
import {
  DESTINATIONS, EDUCATION_LEVELS, STUDY_LEVELS, STUDY_FIELDS, INTAKES,
} from '../lib/constants';

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

interface ApplicationData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  whatsapp: string;
  date_of_birth: string;
  gender: string;
  nationality: string;
  city: string;
  address: string;
  last_education: string;
  institution_name: string;
  graduation_year: string;
  gpa_or_percentage: string;
  other_qualifications: string;
  language_test: string;
  language_score: string;
  preferred_destination: string;
  preferred_program: string;
  preferred_intake: string;
  study_level: string;
  additional_notes: string;
}

const INITIAL: ApplicationData = {
  first_name: '', last_name: '', email: '', phone: '', whatsapp: '',
  date_of_birth: '', gender: '', nationality: '', city: '', address: '',
  last_education: '', institution_name: '', graduation_year: '', gpa_or_percentage: '',
  other_qualifications: '', language_test: '', language_score: '',
  preferred_destination: '', preferred_program: '',
  preferred_intake: '', study_level: '', additional_notes: '',
};

export default function ApplyPage() {
  const [form, setForm] = useState<ApplicationData>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [agree, setAgree] = useState(false);

  const update = (field: keyof ApplicationData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === 'language_test') next.language_score = '';
      return next;
    });
  };

  const inputClass = 'w-full bg-transparent border-0 border-b-2 border-line focus:border-primary focus:outline-none py-2.5 text-sm text-ink placeholder:text-ink-muted/50 transition-colors duration-200';
  const selectClass = `${inputClass} appearance-none cursor-pointer`;
  const labelClass = 'text-xs font-semibold text-ink-muted uppercase tracking-wider mb-1 block';
  const sectionHeadingClass = 'font-heading text-lg font-bold text-ink tracking-wide pb-2 border-b border-line col-span-full';

  const canSubmit = form.first_name && form.last_name && form.email && form.phone && agree;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    const payload = {
      ...form,
      graduation_year: form.graduation_year ? parseInt(form.graduation_year) : null,
      ielts_score: !form.language_test || form.language_test === 'None'
        ? 'None'
        : form.language_score
          ? `${form.language_test}: ${form.language_score}`
          : form.language_test,
    };
    const { error } = await supabase.from('student_inquiries').insert(payload);
    setLoading(false);

    if (error) {
      setToast({ message: 'Something went wrong. Please try again.', type: 'error' });
    } else {
      setRefId(Math.random().toString(36).slice(2, 10).toUpperCase());
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center section-padding bg-canvas pt-32">
        <div className="text-center max-w-md">
          <div className="flex items-center justify-center h-20 w-20 rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-6">
            <Check className="h-10 w-10" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-ink mb-3">Application Submitted!</h2>
          <p className="text-ink-muted mb-2">
            Your application has been received. Our team will contact you within 48 hours.
          </p>
          <p className="text-sm text-ink-muted mb-6">
            Reference: <span className="font-mono font-semibold text-primary">{refId}</span>
          </p>
          <a href="/" className="btn-primary">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  const showScore = form.language_test && form.language_test !== 'None';

  return (
    <div className="bg-canvas min-h-screen">
      <PageHero
        eyebrow="Start your journey"
        title="Apply online"
        subtitle="Complete the form below to start your study-abroad journey. It only takes a few minutes."
      />
      <div className="container-custom pb-20 -mt-12">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white rounded-3xl px-4 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 shadow-card border border-line">
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">

            {/* Personal Information */}
            <p className={sectionHeadingClass}>· Personal Information ·</p>

            <div>
              <label className={labelClass}><span className="text-primary">·</span> First Name *</label>
              <input type="text" placeholder="First Name" required value={form.first_name} onChange={update('first_name')} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}><span className="text-primary">·</span> Last Name *</label>
              <input type="text" placeholder="Last Name" required value={form.last_name} onChange={update('last_name')} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}><span className="text-primary">·</span> Email Address *</label>
              <input type="email" placeholder="Email Address" required value={form.email} onChange={update('email')} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}><span className="text-primary">·</span> Phone Number *</label>
              <input type="tel" placeholder="Phone Number" required value={form.phone} onChange={update('phone')} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>WhatsApp Number</label>
              <input type="tel" placeholder="WhatsApp Number" value={form.whatsapp} onChange={update('whatsapp')} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Date of Birth</label>
              <input type="date" value={form.date_of_birth} onChange={update('date_of_birth')} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Gender</label>
              <select value={form.gender} onChange={update('gender')} className={selectClass}>
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Nationality</label>
              <input type="text" placeholder="Nationality" value={form.nationality} onChange={update('nationality')} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>City</label>
              <input type="text" placeholder="City" value={form.city} onChange={update('city')} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Full Address</label>
              <input type="text" placeholder="Full Address" value={form.address} onChange={update('address')} className={inputClass} />
            </div>

            {/* Educational Background */}
            <p className={sectionHeadingClass}>· Educational Background ·</p>

            <div>
              <label className={labelClass}>Last Education Level</label>
              <select value={form.last_education} onChange={update('last_education')} className={selectClass}>
                <option value="">Select level</option>
                {EDUCATION_LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass}>Institution Name</label>
              <input type="text" placeholder="Institution Name" value={form.institution_name} onChange={update('institution_name')} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Graduation Year</label>
              <input type="number" placeholder="e.g. 2023" value={form.graduation_year} onChange={update('graduation_year')} className={inputClass} min="1990" max="2030" />
            </div>
            <div>
              <label className={labelClass}>GPA / Percentage</label>
              <input type="text" placeholder="e.g. 3.5 / 85%" value={form.gpa_or_percentage} onChange={update('gpa_or_percentage')} className={inputClass} />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>Other Qualifications</label>
              <input type="text" placeholder="e.g. Diplomas, Certifications, Professional qualifications" value={form.other_qualifications} onChange={update('other_qualifications')} className={inputClass} />
            </div>

            {/* Language Test */}
            <p className={sectionHeadingClass}>· Language Proficiency ·</p>

            <div>
              <label className={labelClass}>Language Test</label>
              <select value={form.language_test} onChange={update('language_test')} className={selectClass}>
                <option value="">Select test</option>
                {LANGUAGE_TESTS.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            {showScore && (
              <div>
                <label className={labelClass}>
                  {form.language_test} Score
                </label>
                <input
                  type="text"
                  placeholder={SCORE_PLACEHOLDER[form.language_test as LanguageTest]}
                  value={form.language_score}
                  onChange={update('language_score')}
                  className={inputClass}
                />
              </div>
            )}

            {/* Study Preferences */}
            <p className={sectionHeadingClass}>· Study Preferences ·</p>

            <div>
              <label className={labelClass}>Preferred Destination</label>
              <select value={form.preferred_destination} onChange={update('preferred_destination')} className={selectClass}>
                <option value="">Select destination</option>
                {DESTINATIONS.map((d) => <option key={d.name} value={d.name}>{d.flag} {d.name}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass}>Study Level</label>
              <select value={form.study_level} onChange={update('study_level')} className={selectClass}>
                <option value="">Select level</option>
                {STUDY_LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass}>Field of Study</label>
              <select value={form.preferred_program} onChange={update('preferred_program')} className={selectClass}>
                <option value="">Select field</option>
                {STUDY_FIELDS.map((f) => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass}>Preferred Intake</label>
              <select value={form.preferred_intake} onChange={update('preferred_intake')} className={selectClass}>
                <option value="">Select intake</option>
                {INTAKES.map((i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>Additional Notes</label>
              <textarea
                rows={3}
                placeholder="Any additional information or special requirements..."
                value={form.additional_notes}
                onChange={update('additional_notes')}
                className="w-full bg-transparent border-0 border-b-2 border-line focus:border-primary focus:outline-none py-2.5 text-sm text-ink placeholder:text-ink-muted/50 transition-colors duration-200 resize-none"
              />
            </div>

            {/* Consent */}
            <div className="sm:col-span-2 pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-line text-primary focus:ring-primary"
                />
                <span className="text-sm text-ink-muted">
                  I agree to be contacted by Education Links regarding my application and consent to the processing of my personal data.
                </span>
              </label>
            </div>

            {/* Submit */}
            <div className="sm:col-span-2 flex justify-end pt-4 border-t border-line">
              <button
                type="submit"
                disabled={!canSubmit || loading}
                className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-10 py-3 rounded-xl uppercase tracking-widest text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Submit Application'}
              </button>
            </div>

          </div>
        </form>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
