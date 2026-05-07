import {
  GraduationCap, Send, Mail, CheckCircle,
  CreditCard, FileCheck, Stamp, Plane, PartyPopper,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

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

export default function ProcessTimeline() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className="py-20 md:py-32 relative"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay so content stays readable */}
      <div className="absolute inset-0 bg-slate-900/75" />

      <div className="relative z-10 container-custom">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-brand-blue text-sm font-bold uppercase tracking-[0.3em] mb-4">
            Step by Step
          </p>
          <h2 className="font-heading tracking-tight text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Your Journey to Studying Abroad
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 bg-brand-blue" />
          <p className="mt-6 text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A simple 9-step process that takes you from dreaming to achieving your international education goals.
          </p>
        </div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connector line on desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-white/15" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.icon];
              return (
                <div
                  key={step.title}
                  className={`relative flex gap-6 lg:flex-col lg:items-center lg:text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                  style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
                >
                  {/* Icon circle */}
                  <div className="relative z-10 flex items-center justify-center h-16 w-16 lg:h-24 lg:w-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shrink-0 hover:border-brand-blue/50 transition-colors duration-300">
                    <div className="absolute -top-1 -right-1 h-7 w-7 rounded-full bg-brand-blue text-white text-sm font-bold flex items-center justify-center shadow-lg">
                      {i + 1}
                    </div>
                    {Icon && <Icon className="h-8 w-8 lg:h-10 lg:w-10" />}
                  </div>

                  {/* Text */}
                  <div className="lg:mt-6">
                    <h3 className="text-lg font-bold text-white tracking-wide uppercase">{step.title}</h3>
                    <p className="mt-2 text-sm text-white/60 leading-relaxed max-w-xs mx-auto">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
