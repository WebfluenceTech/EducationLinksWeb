import { useState } from 'react';
import { MapPin, Phone, Mail, Send, MessageCircle, ExternalLink } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Toast from '../components/ui/Toast';
import { supabase } from '../lib/supabase';
import { COMPANY, OFFICES } from '../lib/constants';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
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
      setToast({ message: 'Message sent! We will get back to you shortly.', type: 'success' });
      setForm({ name: '', email: '', phone: '', message: '' });
    }
  };

  const inputClass = 'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-dark placeholder:text-brand-gray-light focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors';

  return (
    <div className="section-padding bg-brand-light/30 min-h-screen">
      <div className="container-custom">
        <SectionHeading
          title="Contact Us"
          subtitle="Have questions? Reach out to us and our team will be happy to help you with your study abroad plans."
        />

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-brand-dark mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name *" required value={form.name} onChange={update('name')} className={inputClass} />
                <input type="email" placeholder="Email Address *" required value={form.email} onChange={update('email')} className={inputClass} />
              </div>
              <input type="tel" placeholder="Phone Number" value={form.phone} onChange={update('phone')} className={inputClass} />
              <textarea rows={5} placeholder="Your Message *" required value={form.message} onChange={update('message')} className={inputClass} />
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 w-full bg-brand-blue hover:bg-brand-blue-light text-white font-semibold py-3.5 rounded-xl transition-colors disabled:opacity-60"
              >
                {loading ? (
                  <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Send Message <Send className="h-4 w-4" /></>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${COMPANY.whatsapp.replace(/\+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl p-5 transition-colors"
            >
              <MessageCircle className="h-8 w-8 shrink-0" />
              <div>
                <div className="font-semibold">Chat on WhatsApp</div>
                <div className="text-sm text-green-100">Quick response guaranteed</div>
              </div>
            </a>

            {/* Contact Cards */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 space-y-5">
              <h3 className="text-base font-semibold text-brand-dark">Contact Information</h3>
              <a href={`tel:${COMPANY.whatsapp}`} className="flex items-center gap-3 text-sm text-brand-gray hover:text-brand-blue transition-colors">
                <Phone className="h-5 w-5 text-brand-blue shrink-0" /> {COMPANY.whatsapp}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-brand-gray hover:text-brand-blue transition-colors">
                <Mail className="h-5 w-5 text-brand-blue shrink-0" /> {COMPANY.email}
              </a>
            </div>

            {/* Office Locations with Map Links */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 space-y-5">
              <h3 className="text-base font-semibold text-brand-dark">Our Offices</h3>
              {OFFICES.map((office) => (
                <div key={office.name} className="flex gap-3 text-sm">
                  <MapPin className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-brand-dark">{office.name}</span>
                    <span className="block text-brand-gray leading-relaxed mb-1.5">{office.address}</span>
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-brand-blue hover:text-brand-blue-light transition-colors"
                    >
                      Get Directions <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Maps Section */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold text-brand-dark mb-8 text-center">Find Us on the Map</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFICES.map((office) => (
              <a
                key={office.name}
                href={office.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:shadow-brand-blue/10 transition-all group"
              >
                <div className="relative h-56 bg-gradient-to-br from-brand-blue/10 to-brand-light flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-brand-blue/30 mx-auto mb-3" />
                    <p className="text-sm text-brand-gray font-medium">Click to view on map</p>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-sm font-semibold text-brand-dark group-hover:text-brand-blue transition-colors">{office.name}</h4>
                  <p className="text-xs text-brand-gray mt-2 leading-relaxed">{office.address}</p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-brand-blue group-hover:gap-2 transition-all">
                    <MapPin className="h-3.5 w-3.5" /> Open in Google Maps
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
