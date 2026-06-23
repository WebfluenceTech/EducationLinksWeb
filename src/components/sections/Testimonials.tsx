import { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { X } from 'lucide-react';

const successImages = [
  '/SuccessStories/image.png',
  '/SuccessStories/image copy.png',
  '/SuccessStories/image copy 2.png',
  '/SuccessStories/image copy 3.png',
  '/SuccessStories/image copy 4.png',
  '/SuccessStories/image copy 5.png',
  '/SuccessStories/image copy 6.png',
  '/SuccessStories/image copy 7.png',
  '/SuccessStories/image copy 8.png',
  '/SuccessStories/image copy 9.png',
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
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="eyebrow mb-4">Success stories</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink leading-tight">
            Our students' achievements
          </h2>
          <p className="mt-4 text-base text-ink-muted">
            Real moments from students who turned their study-abroad dreams into reality.
          </p>
        </div>
      </div>

      <Marquee speed={40} pauseOnHover gradient={false} className="py-2 mb-10">
        {successImages.map((src, i) => (
          <button
            key={i}
            className="mx-3 shrink-0 rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-200 cursor-pointer hover:scale-[1.03] border border-line"
            style={{ width: 260, height: 200 }}
            onClick={() => setSelected(src)}
            aria-label={`View success story ${i + 1}`}
          >
            <img
              src={src}
              alt={`Success story ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </Marquee>

      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-line bg-canvas px-6 py-5 shadow-soft">
          <p className="text-sm font-semibold text-ink">6,000+ satisfied students</p>
          <p className="text-sm text-ink-muted">Placements across Australia, UK, Canada, Finland &amp; more</p>
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
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={() => setSelected(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selected}
            alt="Success story"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
