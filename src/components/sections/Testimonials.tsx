import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../../lib/constants';

const AVATAR_COLORS = ['bg-brand-blue', 'bg-brand-red', 'bg-slate-700'];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive((p) => (p + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <section
      className="section-padding bg-white overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">

          {/* Left — heading */}
          <div>
            <p className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Testimonials
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-8">
              Don't take our word for it. Hear it from our students.
            </h2>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="flex items-center justify-center h-11 w-11 rounded-full border border-gray-200 text-brand-dark hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-all duration-200"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="flex items-center justify-center h-11 w-11 rounded-full border border-gray-200 text-brand-dark hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-all duration-200"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2 ml-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active ? 'w-6 bg-brand-blue' : 'w-2 bg-gray-200'
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right — carousel */}
          <div className="relative overflow-hidden">
            <div
              className="flex gap-5 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${active} * (100% + 20px) * 0.88))` }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={t.name}
                  onClick={() => setActive(i)}
                  className={`shrink-0 w-[88%] rounded-2xl border p-8 cursor-pointer transition-all duration-300 ${
                    i === active
                      ? 'bg-white border-gray-200 shadow-xl shadow-gray-100'
                      : 'bg-[#f8f9fa] border-transparent opacity-60 scale-95'
                  }`}
                >
                  {/* Avatar + meta */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`flex items-center justify-center h-11 w-11 rounded-full text-white text-sm font-bold shrink-0 ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}>
                      {t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand-dark">{t.name}</p>
                      <p className="text-xs text-brand-gray">Studying in {t.destination}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-brand-dark text-sm leading-relaxed mb-8">
                    "{t.quote}"
                  </p>

                  {/* Signature */}
                  <div className="border-t border-gray-100 pt-5">
                    <p className="font-heading text-xl font-semibold text-brand-dark italic">
                      {t.name}
                    </p>
                    <p className="text-xs text-brand-gray mt-0.5">
                      Student — {t.destination}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
