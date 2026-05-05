import { useState, useRef } from 'react';
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
  { title: 'Counseling',               description: 'Personalized career-focused counseling aligned with your academic goals and aspirations.', icon: 'MessageCircle' },
  { title: 'Country & University',     description: 'Access to 20+ universities across 10+ countries to find your perfect academic match.', icon: 'Globe' },
  { title: 'Test Preparation',         description: 'Engaging IELTS and language preparation classes with free demo sessions included.', icon: 'BookOpen' },
  { title: 'Application & Admission',  description: 'Flawless application preparation with meticulous attention to detail for guaranteed results.', icon: 'FileText' },
  { title: 'Scholarships Abroad',      description: 'Access to a database of 3,700+ scholarships to help fund your international education.', icon: 'Award' },
  { title: 'Visa Assistance',          description: 'Complete documentation support and guidance with exceptional visa success rates.', icon: 'ShieldCheck' },
  { title: 'Course Finder',            description: 'AI-powered university and course matching tool to discover the best programs for you.', icon: 'Search' },
  { title: 'Admission Updates',        description: 'Real-time application tracking and admission status updates throughout your journey.', icon: 'Bell' },
];

const VISIBLE = 4; // cards visible at once

export default function Services() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const maxIndex = SERVICES.length - VISIBLE;

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <section id="services" className="scroll-offset section-padding bg-[#f8f9fa] relative overflow-hidden">
      {/* World map watermark */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-[length:85%_auto] pointer-events-none"
        style={{ backgroundImage: "url('/world-map.svg')", opacity: 0.045 }}
      />

      <div className="container-custom relative z-10">

        {/* Heading */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-brand-blue text-xs font-semibold uppercase tracking-[0.2em] mb-2">
              What We Do?
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-dark">
              What We Do
            </h2>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={prev}
              disabled={index === 0}
              className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 bg-white text-brand-dark hover:border-brand-blue hover:text-brand-blue disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              disabled={index === maxIndex}
              className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 bg-white text-brand-dark hover:border-brand-blue hover:text-brand-blue disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${index} * (100% / ${VISIBLE} + 5px / ${VISIBLE} * (${VISIBLE} - 1))))` }}
          >
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon];
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-brand-blue/20 hover:shadow-lg transition-all duration-300 flex flex-col shrink-0"
                  style={{ width: `calc((100% - ${(VISIBLE - 1) * 20}px) / ${VISIBLE})` }}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-brand-blue/20 text-brand-blue">
                    {Icon && <Icon className="h-5 w-5" strokeWidth={1.5} />}
                  </div>
                  <h3 className="font-heading text-base font-semibold text-brand-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-gray leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:gap-2 transition-all duration-200"
                  >
                    Learn More <span aria-hidden>→</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-brand-blue' : 'w-2 bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
