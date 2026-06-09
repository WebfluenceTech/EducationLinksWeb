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
      className="scroll-offset md:min-h-screen flex flex-col"
      style={{ background: '#FFE7CA', width: '100vw', maxWidth: '100vw', boxSizing: 'border-box' }}
    >
      <div className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 gap-8 md:gap-12">

        {/* Heading */}
        <div className="text-center">
          <p className="text-brand-blue text-xs font-semibold uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark leading-tight">
            Our Services
          </h2>
          <p className="mt-3 text-sm text-brand-gray max-w-md mx-auto">
            Everything you need to study abroad, handled by experts.
          </p>
        </div>

        {/* Carousel */}
        <div className="flex-1 flex flex-col justify-center gap-6">
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
                    <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-brand-blue/20 hover:shadow-md transition-all duration-200 flex flex-col items-center text-center h-full">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/8 text-brand-blue shrink-0">
                        {Icon && <Icon className="h-5 w-5" strokeWidth={1.5} />}
                      </div>
                      <h3 className="font-heading text-sm font-semibold text-brand-dark mb-2">
                        {service.title}
                      </h3>
                      <p className="text-xs text-brand-gray leading-relaxed flex-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              disabled={index === 0}
              className="flex items-center justify-center h-9 w-9 rounded-full border border-gray-200 bg-white text-brand-dark hover:border-brand-blue hover:text-brand-blue disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: Math.max(maxIndex + 1, 1) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-brand-blue' : 'w-1.5 bg-gray-300'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={index === maxIndex}
              className="flex items-center justify-center h-9 w-9 rounded-full border border-gray-200 bg-white text-brand-dark hover:border-brand-blue hover:text-brand-blue disabled:opacity-30 disabled:cursor-not-allowed transition-all"
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
