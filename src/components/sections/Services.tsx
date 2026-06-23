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
  { title: 'Country & University', description: 'Access to 50+ universities across 10+ countries to find your perfect academic match.', icon: 'Globe' },
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
      className="scroll-offset section-padding bg-white"
      style={{ width: '100vw', maxWidth: '100vw', boxSizing: 'border-box' }}
    >
      <div className="container-custom flex flex-col gap-10 md:gap-14">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <span className="eyebrow mb-4">What We Do</span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-brand-dark leading-[1.08] tracking-tight">
              Our Services
            </h2>
            <p className="mt-4 text-base text-brand-gray leading-relaxed">
              Everything you need to study abroad, handled by experts who have done it 6,000+ times.
            </p>
          </div>

          {/* Controls (desktop, aligned right) */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <button
              onClick={prev}
              disabled={index === 0}
              className="flex items-center justify-center h-11 w-11 border border-slate-200 bg-white text-brand-dark hover:border-brand-blue hover:text-brand-blue hover:bg-brand-blue/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              disabled={index === maxIndex}
              className="flex items-center justify-center h-11 w-11 border border-slate-200 bg-white text-brand-dark hover:border-brand-blue hover:text-brand-blue hover:bg-brand-blue/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="flex flex-col gap-8">
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
                    className="shrink-0 px-2.5"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    <div className="group card-soft p-7 flex flex-col h-full hover:-translate-y-1.5 hover:shadow-card-hover hover:border-brand-blue/20">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue shrink-0 transition-colors group-hover:bg-brand-blue group-hover:text-white">
                        {Icon && <Icon className="h-6 w-6" strokeWidth={2} />}
                      </div>
                      <h3 className="font-heading text-lg font-bold text-brand-dark mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-brand-gray leading-relaxed flex-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots + mobile controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              disabled={index === 0}
              className="md:hidden flex items-center justify-center h-10 w-10 border border-slate-200 bg-white text-brand-dark disabled:opacity-30 transition-all active:scale-95"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: Math.max(maxIndex + 1, 1) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-7 bg-brand-blue' : 'w-1.5 bg-slate-300 hover:bg-slate-400'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={index === maxIndex}
              className="md:hidden flex items-center justify-center h-10 w-10 border border-slate-200 bg-white text-brand-dark disabled:opacity-30 transition-all active:scale-95"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
