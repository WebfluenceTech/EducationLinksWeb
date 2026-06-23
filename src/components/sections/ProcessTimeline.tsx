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
      className="relative md:min-h-screen flex flex-col bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        width: '100vw', maxWidth: '100vw', boxSizing: 'border-box',
      }}
    >
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(120deg, rgba(11,37,69,0.94) 0%, rgba(19,49,92,0.88) 55%, rgba(30,111,217,0.6) 100%)' }}
      />

      <div className="relative z-10 w-full flex-1 flex flex-col py-16 md:py-28 container-custom">

        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.18em] mb-3 inline-block">
            Step by step
          </span>
          <h2 className="font-heading tracking-tight text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Your journey to studying abroad
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-accent" />
          <p className="mt-4 text-white/65 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
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
                      <div className="relative flex items-center justify-center h-20 w-20 sm:h-28 sm:w-28 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                        <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-accent text-ink text-xs sm:text-sm font-bold flex items-center justify-center shadow-lg">
                          {i + 1}
                        </div>
                        {Icon && <Icon className="h-8 w-8 sm:h-11 sm:w-11" />}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-[180px] sm:max-w-[220px] mx-auto">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Prev / Next + Dots row */}
          <div className="flex items-center justify-center gap-4 mt-6 md:mt-10">
            <button
              onClick={prev}
              disabled={current === 0}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-primary/80 transition disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
              aria-label="Previous step"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2.5">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-7 bg-accent' : 'w-2 bg-white/30 hover:bg-white/60'}`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-primary/80 transition disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
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
