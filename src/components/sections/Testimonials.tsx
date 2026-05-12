import { Star, MessageCircle } from 'lucide-react';
import Marquee from 'react-fast-marquee';

const QuoteIcon = () => (
  <svg width="22" height="18" viewBox="0 0 22 18" fill="none" className="text-brand-blue mb-3">
    <path d="M0 18V10.8C0 7.8 0.8 5.3 2.4 3.3C4 1.3 6.3 0.1 9.3 0L10.2 2C8.2 2.5 6.7 3.5 5.7 5C4.7 6.5 4.2 8 4.3 9.5H8.4V18H0ZM13.6 18V10.8C13.6 7.8 14.4 5.3 16 3.3C17.6 1.3 19.9 0.1 22.9 0L23.8 2C21.8 2.5 20.3 3.5 19.3 5C18.3 6.5 17.8 8 17.9 9.5H22V18H13.6Z" fill="currentColor" />
  </svg>
);

const testimonials = [
  {
    name: 'Ayesha Khan',
    role: 'Student',
    destination: 'Australia',
    quote:
      'Education Links guided me every step of the way — from choosing the right university to securing my visa. I am now studying at a top university in Australia and living my dream!',
    stat: '95%',
    statLabel: 'Visa success rate',
    flag: '🇦🇺',
  },
  {
    name: 'Ali Raza',
    role: 'Student',
    destination: 'United Kingdom',
    quote:
      'The team at Education Links found the best program within my budget. Their expertise helped me pursue my Master\'s degree in the UK. Highly recommended!',
    stat: '2X',
    statLabel: 'Faster application process',
    flag: '🇬🇧',
  },
  {
    name: 'Sara Malik',
    role: 'Student',
    destination: 'Canada',
    quote:
      'What seemed like an overwhelming process became smooth and manageable with Education Links. I am now enrolled at a top Canadian university thanks to their support.',
    flag: '🇨🇦',
  },
  {
    name: 'Usman Tariq',
    role: 'Student',
    destination: 'Finland',
    quote:
      'They nailed every detail — from scholarship applications to pre-departure briefings. The final result felt polished and professional. Could not have done it without them.',
    flag: '🇫🇮',
    featured: true,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #dbeeff 0%, #f0f8ff 30%, #fff5f5 70%, #ffeaea 100%)' }}>

      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0395DA22 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Top & bottom accent bars */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-red" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />

      {/* Prominent glow orbs — brand colours */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl" style={{ background: 'rgba(3,149,218,0.22)' }} />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl" style={{ background: 'rgba(232,40,48,0.18)' }} />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-64 w-64 rounded-full blur-3xl" style={{ background: 'rgba(3,149,218,0.12)' }} />

      {/* Floating academic SVG icons — brand blue */}
      {/* Graduation cap — top right */}
      <svg className="pointer-events-none absolute top-10 right-16 opacity-[0.08] w-28 h-28 rotate-12" viewBox="0 0 64 64" fill="#0395DA">
        <path d="M32 4L2 20l30 16 30-16L32 4z" />
        <path d="M8 24v16c0 6.627 10.745 12 24 12s24-5.373 24-12V24L32 40 8 24z" />
        <line x1="56" y1="20" x2="56" y2="38" stroke="#0395DA" strokeWidth="3" strokeLinecap="round" />
        <circle cx="56" cy="40" r="3" fill="#0395DA" />
      </svg>

      {/* Globe — bottom left */}
      <svg className="pointer-events-none absolute bottom-16 left-12 opacity-[0.07] w-32 h-32 -rotate-6" viewBox="0 0 64 64" fill="none" stroke="#0395DA" strokeWidth="1.5">
        <circle cx="32" cy="32" r="28" />
        <ellipse cx="32" cy="32" rx="14" ry="28" />
        <line x1="4" y1="32" x2="60" y2="32" />
        <line x1="32" y1="4" x2="32" y2="60" />
        <path d="M8 18 Q32 24 56 18" />
        <path d="M8 46 Q32 40 56 46" />
      </svg>

      {/* Open book — top left */}
      <svg className="pointer-events-none absolute top-20 left-16 opacity-[0.07] w-24 h-24 -rotate-12" viewBox="0 0 64 64" fill="none" stroke="#E82830" strokeWidth="1.8">
        <path d="M32 16 C20 12 8 14 4 16 L4 52 C8 50 20 48 32 52 C44 48 56 50 60 52 L60 16 C56 14 44 12 32 16Z" />
        <line x1="32" y1="16" x2="32" y2="52" />
      </svg>

      {/* Star — mid right */}
      <svg className="pointer-events-none absolute top-1/2 right-10 -translate-y-1/2 opacity-[0.08] w-16 h-16" viewBox="0 0 64 64" fill="#E82830">
        <path d="M32 4l7 14 16 2-11.5 11 3 16L32 40l-14.5 7 3-16L9 20l16-2z" />
      </svg>

      {/* Header — constrained */}
      <div className="container-custom relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="block h-px w-5 bg-brand-blue/40" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-dark/50">
              Testimonials
            </span>
            <span className="block h-px w-5 bg-brand-blue/40" />
          </div>
          <h2 className="font-script text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-2">
            Results that speak volume
          </h2>
          <p className="text-2xl md:text-3xl text-brand-blue font-semibold mb-4">
            Read success stories
          </p>
          <p className="text-brand-gray text-sm max-w-md mx-auto">
            Find out how our happy students are raving about us.
          </p>
        </div>
      </div>

      {/* Marquee — full viewport width */}
      <Marquee speed={50} pauseOnHover gradient={false} className="py-2 mb-8">

        {testimonials.map((t, i) => (
          <div
            key={i}
            className="mx-3 w-[320px] shrink-0 flex flex-col justify-between min-h-[300px] rounded-2xl p-7 shadow-md"
            style={
              t.featured
                ? { background: 'linear-gradient(135deg, #394236 0%, #1e2d1e 100%)' }
                : { background: '#ffffff' }
            }
          >
            <div>
              {t.stat && (
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${t.featured ? 'text-white' : 'text-brand-dark'}`}>
                    {t.stat}
                  </span>
                  <p className={`text-xs mt-0.5 font-medium ${t.featured ? 'text-white/50' : 'text-brand-gray'}`}>
                    {t.statLabel}
                  </p>
                </div>
              )}

              {t.featured ? (
                <svg width="18" height="15" viewBox="0 0 22 18" fill="none" className="text-white/50 mb-3">
                  <path d="M0 18V10.8C0 7.8 0.8 5.3 2.4 3.3C4 1.3 6.3 0.1 9.3 0L10.2 2C8.2 2.5 6.7 3.5 5.7 5C4.7 6.5 4.2 8 4.3 9.5H8.4V18H0ZM13.6 18V10.8C13.6 7.8 14.4 5.3 16 3.3C17.6 1.3 19.9 0.1 22.9 0L23.8 2C21.8 2.5 20.3 3.5 19.3 5C18.3 6.5 17.8 8 17.9 9.5H22V18H13.6Z" fill="currentColor" />
                </svg>
              ) : (
                <QuoteIcon />
              )}

              <p className={`text-sm leading-relaxed ${t.featured ? 'text-white/85' : 'text-brand-dark'}`}>
                "{t.quote}"
              </p>
            </div>

            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-2.5">
                <div className={`h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${t.featured ? 'bg-white/20 text-white' : 'bg-brand-blue/10 text-brand-blue'}`}>
                  {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <p className={`text-sm font-semibold leading-tight ${t.featured ? 'text-white' : 'text-brand-dark'}`}>{t.name}</p>
                  <p className={`text-xs leading-tight ${t.featured ? 'text-white/45' : 'text-brand-gray'}`}>Student — {t.destination}</p>
                </div>
              </div>
              <span className="text-xl">{t.flag}</span>
            </div>
          </div>
        ))}

      </Marquee>

      {/* Footer bar — constrained */}
      <div className="container-custom relative">
        <div className="bg-white rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3">
            <MessageCircle className="h-5 w-5 text-brand-blue shrink-0" />
            <p className="text-sm font-medium text-brand-dark">500+ satisfied students love our services</p>
          </div>
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm font-bold text-brand-dark ml-1">4.9</span>
            <span className="text-xs text-brand-gray ml-1">Based on 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
