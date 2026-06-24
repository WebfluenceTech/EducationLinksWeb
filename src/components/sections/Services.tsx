import {
  MessageCircle, Globe, BookOpen, FileText,
  Award, ShieldCheck, Search, Bell,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  MessageCircle, Globe, BookOpen, FileText,
  Award, ShieldCheck, Search, Bell,
};

const SERVICES = [
  { title: 'Counselling', description: 'Personalised, career-focused guidance aligned with your academic goals.', icon: 'MessageCircle' },
  { title: 'Country & University', description: '50+ universities across 10+ countries to find your perfect match.', icon: 'Globe' },
  { title: 'Test Preparation', description: 'IELTS and language preparation classes with free demo sessions.', icon: 'BookOpen' },
  { title: 'Application & Admission', description: 'Flawless application preparation with meticulous attention to detail.', icon: 'FileText' },
  { title: 'Scholarships Abroad', description: 'Access a database of 3,700+ scholarships to fund your studies.', icon: 'Award' },
  { title: 'Visa Assistance', description: 'Complete documentation support with exceptional success rates.', icon: 'ShieldCheck' },
  { title: 'Course Finder', description: 'Smart university and course matching to discover the best programs.', icon: 'Search' },
  { title: 'Admission Updates', description: 'Real-time application tracking and status updates on your journey.', icon: 'Bell' },
];

/* Pastel tints sampled from the stats section — blue · cream · gray bands */
const TINTS = ['#D3EAF8', '#FCEFDE', '#E6E7EC', '#D2E9F7'];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-offset section-padding bg-white"
      style={{ width: '100vw', maxWidth: '100vw', boxSizing: 'border-box' }}
    >
      <div className="container-custom flex flex-col gap-10 md:gap-14">

        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow mb-4 justify-center">What We Do</span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-dark leading-[1.05] tracking-tight">
            Our Services
          </h2>
          <p className="mt-5 text-base md:text-lg text-brand-gray leading-relaxed max-w-2xl mx-auto">
            Everything you need to study abroad, handled by experts who have done it 6,000+ times.
          </p>
        </div>

        {/* Grid — mirrors the stats section: flat tinted cards in color bands */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <div
                key={service.title}
                style={{ backgroundColor: TINTS[i % TINTS.length] }}
                className="group flex flex-col items-center text-center px-7 py-9 transition-transform duration-300 hover:-translate-y-1"
              >
                {Icon && (
                  <Icon
                    className="h-10 w-10 text-brand-blue transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.75}
                  />
                )}
                <h3 className="mt-6 font-heading text-lg font-extrabold uppercase tracking-tight text-brand-dark">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-brand-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
