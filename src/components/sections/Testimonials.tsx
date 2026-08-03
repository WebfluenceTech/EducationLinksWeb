import { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { X } from 'lucide-react';

const successImages = [
  '/SuccessStories/success-01.webp',
  '/SuccessStories/success-02.webp',
  '/SuccessStories/success-03.webp',
  '/SuccessStories/success-04.webp',
  '/SuccessStories/success-05.webp',
  '/SuccessStories/success-06.webp',
  '/SuccessStories/success-07.webp',
  '/SuccessStories/success-08.webp',
  '/SuccessStories/success-09.webp',
  '/SuccessStories/success-10.webp',
];

export default function Testimonials() {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    if (selected) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [selected]);

  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="eyebrow mb-4">Success Stories</span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-brand-dark leading-[1.08] tracking-tight">
            Our students' achievements
          </h2>
          <p className="mt-4 text-base text-brand-gray max-w-xl mx-auto leading-relaxed">
            Real moments from students who turned their study abroad dreams into reality.
          </p>
        </div>
      </div>

      <Marquee speed={40} pauseOnHover gradient={false} className="py-2 mb-10">
        {successImages.map((src, i) => (
          <div
            key={i}
            className="mx-3 shrink-0 overflow-hidden ring-1 ring-slate-200/70 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer hover:-translate-y-1.5"
            style={{ width: 260, height: 200 }}
            onClick={() => setSelected(src)}
          >
            <img
              src={src}
              alt={`Success story ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </Marquee>

      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white px-7 py-5 shadow-card ring-1 ring-slate-200/70">
          <p className="text-base font-bold text-brand-dark flex items-center gap-2">
            <span className="relative inline-flex h-2.5 w-2.5"><span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 opacity-60 animate-ping" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" /></span>
            6,000+ satisfied students
          </p>
          <p className="text-sm text-brand-gray">Placements across Australia, UK, Canada, Finland &amp; more</p>
        </div>
      </div>

      {/* Lightbox modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.85)' }}
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-2 transition-colors"
            onClick={() => setSelected(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selected}
            alt="Success story"
            className="max-w-full max-h-[90vh] shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
