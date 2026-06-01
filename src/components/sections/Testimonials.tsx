import { Star } from 'lucide-react';
import Marquee from 'react-fast-marquee';

const testimonials = [
  {
    name: 'Ayesha Khan',
    destination: 'Australia',
    quote:
      'Education Links guided me every step of the way — from choosing the right university to securing my visa. I am now studying at a top university in Australia and living my dream!',
    flag: '🇦🇺',
  },
  {
    name: 'Ali Raza',
    destination: 'United Kingdom',
    quote:
      'The team at Education Links found the best program within my budget. Their expertise helped me pursue my Master\'s degree in the UK. Highly recommended!',
    flag: '🇬🇧',
  },
  {
    name: 'Sara Malik',
    destination: 'Canada',
    quote:
      'What seemed like an overwhelming process became smooth and manageable with Education Links. I am now enrolled at a top Canadian university thanks to their support.',
    flag: '🇨🇦',
  },
  {
    name: 'Usman Tariq',
    destination: 'Finland',
    quote:
      'They nailed every detail — from scholarship applications to pre-departure briefings. The final result felt polished and professional. Could not have done it without them.',
    flag: '🇫🇮',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding overflow-hidden" style={{ background: 'linear-gradient(135deg, #dbeeff 0%, #f0f8ff 30%, #fff5f5 70%, #ffeaea 100%)' }}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-brand-blue text-xs font-semibold uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark leading-tight">
            What our students say
          </h2>
          <p className="mt-3 text-sm text-brand-gray max-w-sm mx-auto">
            Stories from students who turned their study abroad dreams into reality.
          </p>
        </div>
      </div>

      <Marquee speed={45} pauseOnHover gradient={false} className="py-2 mb-10">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="mx-3 w-[300px] shrink-0 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, s) => (
                <Star key={s} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-brand-dark leading-relaxed mb-5">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center text-xs font-bold shrink-0">
                {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-dark leading-tight">{t.name}</p>
                <p className="text-xs text-brand-gray">{t.flag} {t.destination}</p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>

      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-xl px-6 py-4 shadow-sm">
          <p className="text-sm font-medium text-brand-dark">6000+ satisfied students</p>
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm font-bold text-brand-dark ml-1">4.9</span>
            <span className="text-xs text-brand-gray ml-1">based on 6000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
