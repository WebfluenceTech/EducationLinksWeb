import { useState, useRef, useEffect } from 'react';
import {
  MessageCircle, Globe, BookOpen, FileText,
  Award, ShieldCheck, Search, Bell, ChevronLeft, ChevronRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  MessageCircle, Globe, BookOpen, FileText,
  Award, ShieldCheck, Search, Bell,
};

const SERVICES = [
  { title: 'Counseling', description: 'Personalized career-focused counseling aligned with your academic goals and aspirations.', icon: 'MessageCircle' },
  { title: 'Country & University', description: 'Access to 20+ universities across 10+ countries to find your perfect academic match.', icon: 'Globe' },
  { title: 'Test Preparation', description: 'Engaging IELTS and language preparation classes with free demo sessions included.', icon: 'BookOpen' },
  { title: 'Application & Admission', description: 'Flawless application preparation with meticulous attention to detail for guaranteed results.', icon: 'FileText' },
  { title: 'Scholarships Abroad', description: 'Access to a database of 3,700+ scholarships to help fund your international education.', icon: 'Award' },
  { title: 'Visa Assistance', description: 'Complete documentation support and guidance with exceptional visa success rates.', icon: 'ShieldCheck' },
  { title: 'Course Finder', description: 'AI-powered university and course matching tool to discover the best programs for you.', icon: 'Search' },
  { title: 'Admission Updates', description: 'Real-time application tracking and admission status updates throughout your journey.', icon: 'Bell' },
];

export default function Services() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const trackRef = useRef<HTMLDivElement>(null);

  // Handle responsive visible count
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(4);
    };
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  const maxIndex = Math.max(0, SERVICES.length - visibleCount);
  
  // Ensure index is within bounds after resize
  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [index, maxIndex]);

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  const gap = 20;
  const translateX = index * (100 / visibleCount);

  return (
    <section id="services" className="scroll-offset py-20 md:py-32 relative overflow-hidden bg-[#f8f9fa]">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#0395DA 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="container-custom relative z-10">

        {/* Heading Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-brand-blue text-sm font-bold uppercase tracking-[0.3em] mb-4">
              Our Services
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-brand-dark leading-tight">
              What We Do
            </h2>
            <div className="mt-4 h-1.5 w-20 bg-brand-blue rounded-full" />
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              disabled={index === 0}
              className="flex items-center justify-center h-12 w-12 rounded-full border border-gray-200 bg-white text-brand-dark hover:border-brand-blue hover:text-brand-blue disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm active:scale-95"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={next}
              disabled={index === maxIndex}
              className="flex items-center justify-center h-12 w-12 rounded-full border border-gray-200 bg-white text-brand-dark hover:border-brand-blue hover:text-brand-blue disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm active:scale-95"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Carousel track wrapper */}
        <div className="overflow-visible lg:overflow-hidden -mx-4 px-4 sm:mx-0 sm:px-0">
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 cubic-bezier(0.22, 1, 0.36, 1)"
            style={{ 
              gap: `${gap}px`,
              transform: `translateX(calc(-${translateX}% - ${(index * gap) / visibleCount}px))` 
            }}
          >
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon];
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-brand-blue/30 hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-500 flex flex-col shrink-0 group"
                  style={{ width: `calc((100% - ${(visibleCount - 1) * gap}px) / ${visibleCount})` }}
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/5 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    {Icon && <Icon className="h-7 w-7" strokeWidth={1.5} />}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-gray leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="mt-8 pt-6 border-t border-gray-50">
                    <button
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:gap-3 transition-all duration-200"
                    >
                      Learn More <span aria-hidden>→</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dot indicators */}
        {maxIndex > 0 && (
          <div className="flex items-center justify-center gap-2.5 mt-12">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-500 ${i === index ? 'w-10 bg-brand-blue' : 'w-2.5 bg-gray-200 hover:bg-gray-300'
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
