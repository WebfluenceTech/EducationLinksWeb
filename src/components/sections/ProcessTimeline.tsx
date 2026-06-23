import { useState, useEffect, useSyncExternalStore, useCallback } from 'react';
import {
  GraduationCap, Send, Mail, CheckCircle,
  CreditCard, FileCheck, Stamp, Plane, PartyPopper,
  ChevronLeft, ChevronRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  GraduationCap, Send, Mail, CheckCircle,
  CreditCard, FileCheck, Stamp, Plane, PartyPopper,
};

const STEPS = [
  { title: 'Select Program', description: 'Choose your desired program and destination', icon: 'GraduationCap' },
  { title: 'Submit Application', description: 'Complete and submit your application package', icon: 'Send' },
  { title: 'Receive Offer Letter', description: 'Get your conditional offer from the university', icon: 'Mail' },
  { title: 'Fulfill Conditions', description: 'Meet all requirements specified in your offer', icon: 'CheckCircle' },
  { title: 'Pay Tuition Deposit', description: 'Secure your spot with the tuition deposit', icon: 'CreditCard' },
  { title: 'Unconditional Offer', description: 'Receive your final unconditional offer letter', icon: 'FileCheck' },
  { title: 'Apply for Visa', description: 'Submit your visa application with our guidance', icon: 'Stamp' },
  { title: 'Book Flight', description: 'Arrange your travel and accommodation', icon: 'Plane' },
  { title: 'Start Program', description: 'Begin your exciting journey abroad!', icon: 'PartyPopper' },
];

function getCount() {
  const w = window.innerWidth;
  if (w < 640) return 1;
  if (w < 1024) return 2;
  return 3;
}

function subscribe(cb: () => void) {
  window.addEventListener('resize', cb);
  return () => window.removeEventListener('resize', cb);
}

function useVisibleCount() {
  return useSyncExternalStore(subscribe, getCount, getCount);
}

export default function ProcessTimeline() {
  const [current, setCurrent] = useState(0);
  const visibleCount = useVisibleCount();
  const total = STEPS.length;
  const maxIndex = total - visibleCount;

  const prev = useCallback(() => setCurrent(c => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent(c => Math.min(maxIndex, c + 1)), [maxIndex]);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(c => (c >= maxIndex ? 0 : c + 1));
    }, 3500);
    return () => clearInterval(id);
  }, [maxIndex]);

  useEffect(() => {
    setCurrent(c => Math.min(c, maxIndex));
  }, [maxIndex]);

  return (
    <section
      className="relative section-padding flex flex-col overflow-hidden bg-white"
      style={{ width: '100vw', maxWidth: '100vw', boxSizing: 'border-box' }}
    >
      <div className="relative z-10 w-full flex-1 flex flex-col container-custom">

        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <span className="eyebrow mb-4">Step by Step</span>
          <h2 className="font-heading tracking-tight text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-brand-dark leading-[1.08]">
            Your Journey to Studying Abroad
          </h2>
          <p className="mt-4 text-brand-gray text-base max-w-xl mx-auto leading-relaxed">
            A simple 9-step process that takes you from dreaming to achieving your international education goals.
          </p>
        </div>

        {/* Carousel */}
        <div className="flex-1 flex flex-col justify-center">

          {/* Track wrapper */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${(current / visibleCount) * 100}%)` }}
            >
              {STEPS.map((step, i) => {
                const Icon = ICON_MAP[step.icon];
                return (
                  <div
                    key={step.title}
                    className="shrink-0 px-2 sm:px-4"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    <div className="flex flex-col items-center text-center gap-4 py-6">
                      {/* Icon circle */}
                      <div className="relative flex items-center justify-center h-20 w-20 sm:h-24 sm:w-24 rounded-3xl bg-white border border-slate-200/80 shadow-card text-brand-blue">
                        <div className="absolute -top-2 -right-2 h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-brand-blue text-white text-xs sm:text-sm font-bold flex items-center justify-center ring-4 ring-surface">
                          {i + 1}
                        </div>
                        {Icon && <Icon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.75} />}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-brand-dark mb-2">{step.title}</h3>
                        <p className="text-xs sm:text-sm text-brand-gray leading-relaxed max-w-[180px] sm:max-w-[220px] mx-auto">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Prev / Next + Dots row */}
          <div className="flex items-center justify-center gap-4 mt-8 md:mt-12">
            <button
              onClick={prev}
              disabled={current === 0}
              className="flex items-center justify-center h-11 w-11 border border-slate-200 bg-white text-brand-dark hover:border-brand-blue hover:text-brand-blue hover:bg-brand-blue/5 transition disabled:opacity-30 disabled:cursor-not-allowed shrink-0 active:scale-95"
              aria-label="Previous step"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2.5">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-7 bg-brand-blue' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="flex items-center justify-center h-11 w-11 border border-slate-200 bg-white text-brand-dark hover:border-brand-blue hover:text-brand-blue hover:bg-brand-blue/5 transition disabled:opacity-30 disabled:cursor-not-allowed shrink-0 active:scale-95"
              aria-label="Next step"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
