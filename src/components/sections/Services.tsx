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
  { title: 'Counseling', description: 'Personalized career-focused counseling aligned with your academic goals and aspirations.', icon: 'MessageCircle' },
  { title: 'Country & University', description: 'Access to 20+ universities across 10+ countries to find your perfect academic match.', icon: 'Globe' },
  { title: 'Test Preparation', description: 'Engaging IELTS and language preparation classes with free demo sessions included.', icon: 'BookOpen' },
  { title: 'Application & Admission', description: 'Flawless application preparation with meticulous attention to detail for guaranteed results.', icon: 'FileText' },
  { title: 'Scholarships Abroad', description: 'Access to a database of 3,700+ scholarships to help fund your international education.', icon: 'Award' },
  { title: 'Visa Assistance', description: 'Complete documentation support and guidance with exceptional visa success rates.', icon: 'ShieldCheck' },
  { title: 'Course Finder', description: 'AI-powered university and course matching tool to discover the best programs for you.', icon: 'Search' },
  { title: 'Admission Updates', description: 'Real-time application tracking and admission status updates throughout your journey.', icon: 'Bell' },
];

const VISIBLE = 4;

export default function Services() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const maxIndex = SERVICES.length - VISIBLE;

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <section
      id="services"
      className="scroll-offset min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #e8f4fd 0%, #f0f8ff 40%, #fef6f6 75%, #fdeaea 100%)' }}
    >
      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0395DA1A 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Top accent bar */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-red" />
      {/* Bottom faint line */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full blur-3xl" style={{ background: 'rgba(3,149,218,0.12)' }} />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[480px] w-[480px] rounded-full blur-3xl" style={{ background: 'rgba(232,40,48,0.09)' }} />
      <div className="pointer-events-none absolute top-1/2 right-1/4 h-64 w-64 rounded-full blur-3xl" style={{ background: 'rgba(3,149,218,0.08)' }} />

      {/* World map watermark */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-[length:80%_auto] pointer-events-none"
        style={{ backgroundImage: "url('/world-map.svg')", opacity: 0.05 }}
      />

      {/* Floating SVG — globe top right */}
      <svg className="pointer-events-none absolute top-10 right-16 opacity-[0.08] w-44 h-44 rotate-12" viewBox="0 0 64 64" fill="none" stroke="#0395DA" strokeWidth="1.2">
        <circle cx="32" cy="32" r="28"/>
        <ellipse cx="32" cy="32" rx="14" ry="28"/>
        <line x1="4" y1="32" x2="60" y2="32"/>
        <line x1="32" y1="4" x2="32" y2="60"/>
        <path d="M8 18 Q32 24 56 18"/>
        <path d="M8 46 Q32 40 56 46"/>
      </svg>

      {/* Floating SVG — open book bottom left */}
      <svg className="pointer-events-none absolute bottom-10 left-14 opacity-[0.07] w-36 h-36 -rotate-6" viewBox="0 0 64 64" fill="none" stroke="#E82830" strokeWidth="1.8">
        <path d="M32 16 C20 12 8 14 4 16 L4 52 C8 50 20 48 32 52 C44 48 56 50 60 52 L60 16 C56 14 44 12 32 16Z"/>
        <line x1="32" y1="16" x2="32" y2="52"/>
      </svg>

      {/* Floating SVG — graduation cap top left */}
      <svg className="pointer-events-none absolute top-16 left-20 opacity-[0.07] w-28 h-28 -rotate-12" viewBox="0 0 64 64" fill="#0395DA">
        <path d="M32 4L2 20l30 16 30-16L32 4z"/>
        <path d="M8 24v16c0 6.627 10.745 12 24 12s24-5.373 24-12V24L32 40 8 24z"/>
      </svg>

      <div className="container-custom relative z-10 flex-1 flex flex-col justify-between py-20 md:py-28">

        {/* Heading */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-brand-blue text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              What We Do?
            </p>
            <h2 className="font-script tracking-tight font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight">
              What We Do
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-brand-blue" />
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prev}
              disabled={index === 0}
              className="flex items-center justify-center h-11 w-11 rounded-full border border-brand-blue/25 bg-white text-brand-dark shadow-sm hover:bg-brand-blue hover:text-white hover:border-brand-blue disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              disabled={index === maxIndex}
              className="flex items-center justify-center h-11 w-11 rounded-full border border-brand-blue/25 bg-white text-brand-dark shadow-sm hover:bg-brand-blue hover:text-white hover:border-brand-blue disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div className="overflow-hidden flex-1 flex flex-col justify-center">
          <div
            ref={trackRef}
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${index} * (100% / ${VISIBLE} + 6px / ${VISIBLE} * (${VISIBLE} - 1))))` }}
          >
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon];
              return (
                <div
                  key={service.title}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white hover:border-brand-blue/25 hover:shadow-xl transition-all duration-300 flex flex-col shrink-0"
                  style={{ width: `calc((100% - ${(VISIBLE - 1) * 24}px) / ${VISIBLE})` }}
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue/8 border border-brand-blue/20 text-brand-blue">
                    {Icon && <Icon className="h-6 w-6" strokeWidth={1.5} />}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-brand-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-gray leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:gap-2 transition-all duration-200"
                  >
                    Learn More <span aria-hidden>→</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-brand-blue' : 'w-2.5 bg-brand-blue/25 hover:bg-brand-blue/50'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
