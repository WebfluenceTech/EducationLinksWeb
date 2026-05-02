import {
  GraduationCap, Send, Mail, CheckCircle,
  CreditCard, FileCheck, Stamp, Plane, PartyPopper,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeading from '../ui/SectionHeading';

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
    <section className="section-padding bg-brand-light/50">
      <div className="container-custom">
        <SectionHeading
          title="Your Journey to Studying Abroad"
          subtitle="A simple 9-step process that takes you from dreaming to achieving your international education goals."
        />

        <div ref={ref} className="relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-brand-gray-light" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.icon];
              return (
                <div
                  key={step.title}
                  className={`relative flex gap-4 lg:flex-col lg:items-center lg:text-center transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
                >
                  <div className="relative z-10 flex items-center justify-center h-14 w-14 lg:h-20 lg:w-20 rounded-full bg-white border-2 border-brand-blue text-brand-blue shadow-md shadow-brand-blue/10 shrink-0">
                    <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-brand-red text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                    {Icon && <Icon className="h-6 w-6 lg:h-8 lg:w-8" />}
                  </div>

                  <div className="lg:mt-4">
                    <h3 className="text-sm font-semibold text-brand-dark">{step.title}</h3>
                    <p className="mt-1 text-xs text-brand-gray leading-relaxed">{step.description}</p>
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
