import { useState } from 'react';
import { MapPin, Phone, Mail, Send, MessageCircle, ExternalLink, Clock, CheckCircle2 } from 'lucide-react';
import Toast from '../components/ui/Toast';
import { ContactSVG } from '../components/ui/ContactSVG';
import PageHero from '../components/ui/PageHero';
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
    <div className="min-h-screen bg-canvas">

      <PageHero
        eyebrow="Get in touch"
        title="We'd love to hear from you"
        subtitle="Whether you have questions about studying abroad or need guidance on the right university — our team is ready to help."
        decoration={<ContactSVG className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full min-w-[1100px] text-white/90 pointer-events-none" />}
      />

      {/* ── Main Grid ── */}
      <div className="container-custom pb-16 md:pb-24 -mt-8">
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
            <div className="bg-white rounded-2xl p-6 border border-line shadow-sm space-y-5">
              <h3 className="text-base font-bold text-ink">Contact Details</h3>
              <div className="space-y-4">
                <a
                  href={`tel:${COMPANY.whatsapp}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary group-hover:bg-primary group-hover:text-white transition-all duration-200">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-ink-muted/70">Phone</p>
                    <p className="text-sm font-semibold text-ink group-hover:text-primary transition-colors">{COMPANY.whatsapp}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary group-hover:bg-primary group-hover:text-white transition-all duration-200">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-ink-muted/70">Email</p>
                    <p className="text-sm font-semibold text-ink group-hover:text-primary transition-colors">{COMPANY.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-ink-muted/70">Response Time</p>
                    <p className="text-sm font-semibold text-ink">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-white rounded-2xl p-6 border border-line shadow-sm space-y-5">
              <h3 className="text-base font-bold text-ink">Our Offices</h3>
              <div className="space-y-5">
                {OFFICES.map((office, i) => (
                  <div key={office.name} className={`flex gap-3 ${i < OFFICES.length - 1 ? 'pb-5 border-b border-line' : ''}`}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-dark mt-0.5">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-ink">{office.name}</p>
                      <p className="text-xs text-ink-muted leading-relaxed mt-1 mb-2">{office.address}</p>
                      <a
                        href={office.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-light transition-colors"
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
            <div className="bg-white rounded-2xl border border-line shadow-sm overflow-hidden">

              {/* Form Header */}
              <div className="px-8 pt-8 pb-6 border-b border-line">
                <h2 className="text-2xl font-extrabold text-ink">Send Us a Message</h2>
                <p className="text-sm text-ink-muted mt-1.5">Fill in the form below and we'll get back to you shortly.</p>
              </div>

              {submitted ? (
                <div className="px-8 py-16 flex flex-col items-center text-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-ink">Message Sent!</h3>
                  <p className="text-sm text-ink-muted max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="px-8 py-8 space-y-6">
                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold uppercase tracking-[0.12em] text-ink-muted/70">
                        Full Name <span className="text-accent-dark">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ali Hassan"
                        value={form.name}
                        onChange={update('name')}
                        className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-ink-muted/40 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold uppercase tracking-[0.12em] text-ink-muted/70">
                        Email Address <span className="text-accent-dark">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={update('email')}
                        className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-ink-muted/40 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-[0.12em] text-ink-muted/70">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+92 300 0000000"
                      value={form.phone}
                      onChange={update('phone')}
                      className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-ink-muted/40 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-[0.12em] text-ink-muted/70">
                      Your Message <span className="text-accent-dark">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us how we can help you..."
                      value={form.message}
                      onChange={update('message')}
                      className="w-full rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-ink-muted/40 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex items-center justify-center gap-2.5 w-full bg-primary hover:bg-primary-dark text-white font-bold text-sm uppercase tracking-widest py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
          <h2 className="text-xl font-bold text-ink mb-6">Find Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {OFFICES.map((office) => (
              <div key={office.name} className="bg-white rounded-2xl border border-line shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-line flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm text-ink">{office.name}</p>
                    <p className="text-xs text-ink-muted mt-0.5">{office.address}</p>
                  </div>
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 ml-4 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-light transition-colors"
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
  );
}
