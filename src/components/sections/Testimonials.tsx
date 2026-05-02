import { useState, useEffect, useCallback } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { TESTIMONIALS } from '../../lib/constants';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const t = TESTIMONIALS[active];

  return (
    <section className="section-padding bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container-custom">
        <SectionHeading
          title="What Our Students Say"
          subtitle="Hear from the students who trusted us with their dreams and are now studying at top universities worldwide."
        />

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-brand-blue/5 border border-gray-100 text-center">
            <Quote className="h-10 w-10 text-brand-blue/20 mx-auto mb-6" />

            <p className="text-lg md:text-xl text-brand-dark leading-relaxed font-medium italic">
              "{t.quote}"
            </p>

            <div className="mt-6 flex justify-center gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <div className="mt-4">
              <div className="text-base font-semibold text-brand-dark">{t.name}</div>
              <div className="text-sm text-brand-gray">Studying in {t.destination}</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 hover:bg-brand-blue hover:border-brand-blue hover:text-white text-brand-gray transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === active ? 'w-8 bg-brand-blue' : 'w-2.5 bg-gray-200 hover:bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 hover:bg-brand-blue hover:border-brand-blue hover:text-white text-brand-gray transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
