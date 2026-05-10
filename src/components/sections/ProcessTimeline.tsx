import { useState, useEffect, useCallback } from 'react';
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

function useVisibleCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    function update() {
      if (window.innerWidth < 640) setCount(1);
      else if (window.innerWidth < 1024) setCount(2);
      else setCount(3);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return count;
}

export default function ProcessTimeline() {
  const [current, setCurrent] = useState(0);
  const visibleCount = useVisibleCount();
  const total = STEPS.length;
  const maxIndex = total - visibleCount;

  const prev = useCallback(() => setCurrent(c => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent(c => Math.min(maxIndex, c + 1)), [maxIndex]);

  // auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(c => (c >= maxIndex ? 0 : c + 1));
    }, 3500);
    return () => clearInterval(id);
  }, [maxIndex]);

  // clamp when viewport resizes
  useEffect(() => {
    setCurrent(c => Math.min(c, maxIndex));
  }, [maxIndex]);

  return (
    <section
      className="relative min-h-screen flex flex-col"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-slate-900/75" />

      <div className="relative z-10 container-custom flex-1 flex flex-col justify-between py-20 md:py-28">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Step by Step
          </p>
          <h2 className="font-heading font-script tracking-tight text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Your Journey to Studying Abroad
          </h2>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-brand-blue" />
          <p className="mt-6 text-white/60 text-base max-w-2xl mx-auto leading-relaxed">
            A simple 9-step process that takes you from dreaming to achieving your international education goals.
          </p>
        </div>

        {/* Carousel — grows to fill remaining space */}
        <div className="relative flex-1 flex flex-col justify-center">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-px bg-white/15" />

          {/* Overflow window */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${(current / visibleCount) * 100}%)` }}
            >
              {STEPS.map((step, i) => {
                const Icon = ICON_MAP[step.icon];
                return (
                  <div
                    key={step.title}
                    className="shrink-0 px-4"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    <div className="flex flex-col items-center text-center gap-6 py-8">
                      {/* Icon circle */}
                      <div className="relative flex items-center justify-center h-28 w-28 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                        <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-brand-blue text-white text-sm font-bold flex items-center justify-center shadow-lg">
                          {i + 1}
                        </div>
                        {Icon && <Icon className="h-11 w-11" />}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-sm text-white/60 leading-relaxed max-w-[220px] mx-auto">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 flex items-center justify-center h-12 w-12 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-brand-blue/70 transition disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous step"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            disabled={current >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 flex items-center justify-center h-12 w-12 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-brand-blue/70 transition disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next step"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-3 mt-16">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-brand-blue' : 'w-2.5 bg-white/30 hover:bg-white/60'}`}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
