import { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, Loader2 } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Toast from '../components/ui/Toast';
import { supabase } from '../lib/supabase';
import {
  DESTINATIONS, EDUCATION_LEVELS, STUDY_LEVELS, STUDY_FIELDS, INTAKES,
} from '../lib/constants';

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
  ielts_score: string;
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
  ielts_score: '', preferred_destination: '', preferred_program: '',
  preferred_intake: '', study_level: '', additional_notes: '',
};

const STEP_LABELS = ['Personal Info', 'Education', 'Study Preferences', 'Review & Submit'];

export default function ApplyPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<ApplicationData>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [agree, setAgree] = useState(false);

  const update = (field: keyof ApplicationData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const inputClass = 'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-dark placeholder:text-brand-gray-light focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors';

  const canNext = () => {
    if (step === 0) return form.first_name && form.last_name && form.email && form.phone;
    if (step === 1) return true;
    if (step === 2) return true;
    return agree;
  };

  const handleSubmit = async () => {
    setLoading(true);
    const payload = {
      ...form,
      graduation_year: form.graduation_year ? parseInt(form.graduation_year) : null,
    };
    const { data, error } = await supabase.from('applications').insert(payload).select('id').maybeSingle();
    setLoading(false);

    if (error) {
      setToast({ message: 'Something went wrong. Please try again.', type: 'error' });
    } else {
      setRefId(data?.id?.slice(0, 8).toUpperCase() || 'N/A');
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center section-padding">
        <div className="text-center max-w-md">
          <div className="flex items-center justify-center h-20 w-20 rounded-full bg-green-100 text-green-600 mx-auto mb-6">
            <Check className="h-10 w-10" />
          </div>
          <h2 className="text-2xl font-bold text-brand-dark mb-3">Application Submitted!</h2>
          <p className="text-brand-gray mb-2">
            Your application has been received. Our team will contact you within 48 hours.
          </p>
          <p className="text-sm text-brand-gray mb-6">
            Reference: <span className="font-mono font-semibold text-brand-blue">{refId}</span>
          </p>
          <a href="/" className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding bg-brand-light/30 min-h-screen">
      <div className="container-custom">
        <SectionHeading
          title="Apply Online"
          subtitle="Complete the form below to start your study abroad journey. It only takes a few minutes."
        />

        {/* Progress Bar */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-between">
            {STEP_LABELS.map((label, i) => (
              <div key={label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`flex items-center justify-center h-10 w-10 rounded-full text-sm font-semibold transition-colors ${
                    i <= step ? 'bg-brand-blue text-white' : 'bg-gray-200 text-brand-gray'
                  }`}>
                    {i < step ? <Check className="h-5 w-5" /> : i + 1}
                  </div>
                  <span className="mt-2 text-xs font-medium text-brand-gray hidden sm:block">{label}</span>
                </div>
                {i < STEP_LABELS.length - 1 && (
                  <div className={`hidden sm:block w-16 md:w-24 lg:w-32 h-0.5 mx-2 ${i < step ? 'bg-brand-blue' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-gray-100">
          {/* Step 1: Personal */}
          {step === 0 && (
            <div className="space-y-5">
              <h3 className="text-lg font-semibold text-brand-dark mb-1">Personal Information</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name *" required value={form.first_name} onChange={update('first_name')} className={inputClass} />
                <input type="text" placeholder="Last Name *" required value={form.last_name} onChange={update('last_name')} className={inputClass} />
                <input type="email" placeholder="Email Address *" required value={form.email} onChange={update('email')} className={inputClass} />
                <input type="tel" placeholder="Phone Number *" required value={form.phone} onChange={update('phone')} className={inputClass} />
                <input type="tel" placeholder="WhatsApp Number" value={form.whatsapp} onChange={update('whatsapp')} className={inputClass} />
                <input type="date" placeholder="Date of Birth" value={form.date_of_birth} onChange={update('date_of_birth')} className={inputClass} />
                <select value={form.gender} onChange={update('gender')} className={inputClass}>
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <input type="text" placeholder="Nationality" value={form.nationality} onChange={update('nationality')} className={inputClass} />
                <input type="text" placeholder="City" value={form.city} onChange={update('city')} className={inputClass} />
                <input type="text" placeholder="Full Address" value={form.address} onChange={update('address')} className={inputClass} />
              </div>
            </div>
          )}

          {/* Step 2: Education */}
          {step === 1 && (
            <div className="space-y-5">
              <h3 className="text-lg font-semibold text-brand-dark mb-1">Educational Background</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <select value={form.last_education} onChange={update('last_education')} className={inputClass}>
                  <option value="">Last Education Level</option>
                  {EDUCATION_LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
                <input type="text" placeholder="Institution Name" value={form.institution_name} onChange={update('institution_name')} className={inputClass} />
                <input type="number" placeholder="Graduation Year" value={form.graduation_year} onChange={update('graduation_year')} className={inputClass} min="1990" max="2030" />
                <input type="text" placeholder="GPA / Percentage" value={form.gpa_or_percentage} onChange={update('gpa_or_percentage')} className={inputClass} />
              </div>
            </div>
          )}

          {/* Step 3: Study Preferences */}
          {step === 2 && (
            <div className="space-y-5">
              <h3 className="text-lg font-semibold text-brand-dark mb-1">Study Preferences</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <select value={form.preferred_destination} onChange={update('preferred_destination')} className={inputClass}>
                  <option value="">Preferred Destination</option>
                  {DESTINATIONS.map((d) => <option key={d.name} value={d.name}>{d.flag} {d.name}</option>)}
                </select>
                <select value={form.study_level} onChange={update('study_level')} className={inputClass}>
                  <option value="">Study Level</option>
                  {STUDY_LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
                <select value={form.preferred_program} onChange={update('preferred_program')} className={inputClass}>
                  <option value="">Preferred Field of Study</option>
                  {STUDY_FIELDS.map((f) => <option key={f} value={f}>{f}</option>)}
                </select>
                <select value={form.preferred_intake} onChange={update('preferred_intake')} className={inputClass}>
                  <option value="">Preferred Intake</option>
                  {INTAKES.map((i) => <option key={i} value={i}>{i}</option>)}
                </select>
                <input type="text" placeholder="IELTS / English Test Score" value={form.ielts_score} onChange={update('ielts_score')} className={`${inputClass} sm:col-span-2`} />
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-brand-dark mb-1">Review Your Application</h3>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                {([
                  ['First Name', form.first_name], ['Last Name', form.last_name],
                  ['Email', form.email], ['Phone', form.phone],
                  ['WhatsApp', form.whatsapp], ['Date of Birth', form.date_of_birth],
                  ['Gender', form.gender], ['Nationality', form.nationality],
                  ['City', form.city], ['Education', form.last_education],
                  ['Institution', form.institution_name], ['Graduation Year', form.graduation_year],
                  ['GPA', form.gpa_or_percentage], ['IELTS Score', form.ielts_score],
                  ['Destination', form.preferred_destination], ['Study Level', form.study_level],
                  ['Program', form.preferred_program], ['Intake', form.preferred_intake],
                ] as [string, string][]).map(([label, value]) => (
                  <div key={label} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-brand-gray">{label}</span>
                    <span className="font-medium text-brand-dark">{value || '--'}</span>
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">Additional Notes</label>
                <textarea
                  rows={3}
                  placeholder="Any additional information..."
                  value={form.additional_notes}
                  onChange={update('additional_notes')}
                  className={inputClass}
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue"
                />
                <span className="text-sm text-brand-gray">
                  I agree to be contacted by Education Links regarding my application and consent to the processing of my personal data.
                </span>
              </label>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            <button
              onClick={() => setStep((s) => s - 1)}
              disabled={step === 0}
              className="flex items-center gap-2 text-sm font-medium text-brand-gray hover:text-brand-dark disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="h-4 w-4" /> Previous
            </button>

            {step < 3 ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={!canNext()}
                className="flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-semibold px-6 py-3 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!agree || loading}
                className="flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Submit Application'}
              </button>
            )}
          </div>
        </div>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
