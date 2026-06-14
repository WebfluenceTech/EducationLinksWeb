import { useState } from 'react';
import { MapPin, Phone, Mail, Send, MessageCircle, ExternalLink, Clock, CheckCircle2 } from 'lucide-react';
import Toast from '../components/ui/Toast';
import { ContactSVG } from '../components/ui/ContactSVG';
import { supabase } from '../lib/supabase';
import { COMPANY, OFFICES } from '../lib/constants';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('contact_messages').insert(form);
    setLoading(false);
    if (error) {
      setToast({ message: 'Something went wrong. Please try again.', type: 'error' });
    } else {
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
        .font-nunito { font-family: 'Nunito', sans-serif; }
      `}</style>
    <div className="font-nunito min-h-screen bg-[#F7F8FA]">

      {/* Curved Header Background */}
      <div className="relative w-full pt-32 pb-44 mb-16 overflow-hidden">
        {/* The actual curve */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-full overflow-hidden" 
          style={{ backgroundColor: '#2F95D0', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}
        >
          <ContactSVG className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full min-w-[1100px] text-white pointer-events-none" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 mx-auto px-4 max-w-6xl text-center mt-8">
          <p className="text-white/80 text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Get In Touch
          </p>
          <h1 className="text-[2.5rem] md:text-5xl font-bold text-white mb-4">
            We'd Love to Hear From You
          </h1>
          <p className="text-[1.1rem] text-white/90 max-w-2xl mx-auto">
            Whether you have questions about studying abroad or need guidance on the right university — our team is ready to help.
          </p>
        </div>
      </div>

      {/* ── Main Grid ── */}
      <div className="container-custom py-12 md:py-20">
        <div className="grid lg:grid-cols-5 gap-8 xl:gap-12 items-start">

          {/* ── LEFT: Info Panel ── */}
          <div className="lg:col-span-2 space-y-5">

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${COMPANY.whatsapp.replace(/\+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-base">Chat on WhatsApp</p>
                <p className="text-green-100 text-sm mt-0.5">Quick response guaranteed</p>
              </div>
              <ExternalLink className="ml-auto h-4 w-4 text-white/60 group-hover:text-white transition-colors" />
            </a>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-5">
              <h3 className="font-nunito text-base font-bold text-brand-dark">Contact Details</h3>
              <div className="space-y-4">
                <a
                  href={`tel:${COMPANY.whatsapp}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/8 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-200">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gray/60">Phone</p>
                    <p className="text-sm font-semibold text-brand-dark group-hover:text-brand-blue transition-colors">{COMPANY.whatsapp}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/8 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-200">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gray/60">Email</p>
                    <p className="text-sm font-semibold text-brand-dark group-hover:text-brand-blue transition-colors">{COMPANY.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/8 text-brand-blue">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gray/60">Response Time</p>
                    <p className="text-sm font-semibold text-brand-dark">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-5">
              <h3 className="font-nunito text-base font-bold text-brand-dark">Our Offices</h3>
              <div className="space-y-5">
                {OFFICES.map((office, i) => (
                  <div key={office.name} className={`flex gap-3 ${i < OFFICES.length - 1 ? 'pb-5 border-b border-gray-100' : ''}`}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-red/8 text-brand-red mt-0.5">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-dark">{office.name}</p>
                      <p className="text-xs text-brand-gray leading-relaxed mt-1 mb-2">{office.address}</p>
                      <a
                        href={office.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-brand-blue-light transition-colors"
                      >
                        Get Directions <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

              {/* Form Header */}
              <div className="px-8 pt-8 pb-6 border-b border-gray-100">
                <h2 className="font-nunito text-2xl font-extrabold text-brand-dark">Send Us a Message</h2>
                <p className="text-sm text-brand-gray mt-1.5">Fill in the form below and we'll get back to you shortly.</p>
              </div>

              {submitted ? (
                <div className="px-8 py-16 flex flex-col items-center text-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="font-nunito text-xl font-bold text-brand-dark">Message Sent!</h3>
                  <p className="text-sm text-brand-gray max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-light transition-colors"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="px-8 py-8 space-y-6">
                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold uppercase tracking-[0.12em] text-brand-gray/70">
                        Full Name <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ali Hassan"
                        value={form.name}
                        onChange={update('name')}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-brand-dark placeholder:text-brand-gray/40 focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/10 transition-all duration-200"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold uppercase tracking-[0.12em] text-brand-gray/70">
                        Email Address <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={update('email')}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-brand-dark placeholder:text-brand-gray/40 focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/10 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-[0.12em] text-brand-gray/70">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+92 300 0000000"
                      value={form.phone}
                      onChange={update('phone')}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-brand-dark placeholder:text-brand-gray/40 focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/10 transition-all duration-200"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-[0.12em] text-brand-gray/70">
                      Your Message <span className="text-brand-red">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us how we can help you..."
                      value={form.message}
                      onChange={update('message')}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-brand-dark placeholder:text-brand-gray/40 focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/10 transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex items-center justify-center gap-2.5 w-full bg-brand-blue hover:bg-brand-dark text-white font-bold text-sm uppercase tracking-widest py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ── Maps Row ── */}
        <div className="mt-12 md:mt-16">
          <h2 className="font-nunito text-xl font-bold text-brand-dark mb-6">Find Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {OFFICES.map((office) => (
              <div key={office.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm text-brand-dark">{office.name}</p>
                    <p className="text-xs text-brand-gray mt-0.5">{office.address}</p>
                  </div>
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 ml-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:text-brand-blue-light transition-colors"
                  >
                    Directions <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <iframe
                  src={office.embedSrc}
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={office.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
    </>
  );
}
