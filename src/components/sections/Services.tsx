import { useState, useEffect, useSyncExternalStore } from 'react';
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

function getCount() {
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 4;
}

function subscribe(cb: () => void) {
  window.addEventListener('resize', cb);
  return () => window.removeEventListener('resize', cb);
}

function useVisibleCount() {
  return useSyncExternalStore(subscribe, getCount, getCount);
}

export default function Services() {
  const [index, setIndex] = useState(0);
  const visibleCount = useVisibleCount();
  const maxIndex = SERVICES.length - visibleCount;

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  return (
    <section
      id="services"
      className="scroll-offset md:min-h-screen flex flex-col relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #e8f4fd 0%, #f0f8ff 40%, #fef6f6 75%, #fdeaea 100%)',
        width: '100vw',
        maxWidth: '100vw',
        boxSizing: 'border-box',
      }}
    >
      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0395DA1A 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-red" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
      <div className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full blur-3xl" style={{ background: 'rgba(3,149,218,0.12)' }} />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[480px] w-[480px] rounded-full blur-3xl" style={{ background: 'rgba(232,40,48,0.09)' }} />

      {/* Use px-4 sm:px-6 lg:px-8 directly — avoids container-custom width mismatch with 100vw */}
      <div className="relative z-10 flex-1 flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-28 gap-8 md:gap-12">

        {/* Heading */}
        <div className="text-center">
          <p className="text-brand-blue text-xs font-semibold uppercase tracking-widest mb-3">
            What We Do?
          </p>
          <h2 className="font-script tracking-tight font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight">
            What We Do
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-brand-blue mx-auto" />
        </div>

        {/* Carousel */}
        <div className="flex-1 flex flex-col justify-center gap-6">

          {/* Track — clips to exactly this container's width */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * (100 / visibleCount)}%)` }}
            >
              {SERVICES.map((service) => {
                const Icon = ICON_MAP[service.icon];
                return (
                  <div
                    key={service.title}
                    className="shrink-0 px-2"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-7 border border-white hover:border-brand-blue/25 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center h-full">
                      <div className="mb-3 flex h-11 w-11 md:h-13 md:w-13 items-center justify-center rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue shrink-0">
                        {Icon && <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />}
                      </div>
                      <h3 className="font-heading text-sm sm:text-base md:text-lg font-bold text-brand-dark mb-2">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-gray leading-relaxed flex-1">
                        {service.description}
                      </p>
                      <a
                        href="#contact"
                        className="mt-3 inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-brand-blue hover:gap-2 transition-all duration-200"
                      >
                        Learn More <span aria-hidden>→</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls — ← dots → */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              disabled={index === 0}
              className="flex items-center justify-center h-9 w-9 sm:h-11 sm:w-11 rounded-full border border-brand-blue/25 bg-white text-brand-dark shadow-sm hover:bg-brand-blue hover:text-white hover:border-brand-blue disabled:opacity-30 disabled:cursor-not-allowed transition-all shrink-0"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: Math.max(maxIndex + 1, 1) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-7 bg-brand-blue' : 'w-2 bg-brand-blue/25 hover:bg-brand-blue/50'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={index === maxIndex}
              className="flex items-center justify-center h-9 w-9 sm:h-11 sm:w-11 rounded-full border border-brand-blue/25 bg-white text-brand-dark shadow-sm hover:bg-brand-blue hover:text-white hover:border-brand-blue disabled:opacity-30 disabled:cursor-not-allowed transition-all shrink-0"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
