import {
  MessageCircle, Globe, BookOpen, FileText,
  Award, ShieldCheck, Search, Bell,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const ICON_MAP: Record<string, LucideIcon> = {
  MessageCircle, Globe, BookOpen, FileText,
  Award, ShieldCheck, Search, Bell,
};

const SERVICES = [
  { title: 'Counseling', description: 'Personalized, career-focused counseling aligned with your academic goals.', icon: 'MessageCircle' },
  { title: 'Country & University', description: 'Access 50+ universities across 10+ countries to find your perfect match.', icon: 'Globe' },
  { title: 'Test Preparation', description: 'Engaging IELTS and language prep classes with free demo sessions.', icon: 'BookOpen' },
  { title: 'Application & Admission', description: 'Flawless application preparation with meticulous attention to detail.', icon: 'FileText' },
  { title: 'Scholarships Abroad', description: 'A database of 3,700+ scholarships to help fund your education.', icon: 'Award' },
  { title: 'Visa Assistance', description: 'Complete documentation support with exceptional visa success rates.', icon: 'ShieldCheck' },
  { title: 'Course Finder', description: 'Smart university and course matching to discover the best programs.', icon: 'Search' },
  { title: 'Admission Updates', description: 'Real-time application tracking and status updates throughout.', icon: 'Bell' },
];

export default function Services() {
  return (
    <section id="services" className="scroll-offset section-padding bg-canvas-alt">
      <div className="container-custom">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <span className="eyebrow mb-4">What we do</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink leading-tight">
            Everything you need to study abroad
          </h2>
          <p className="mt-4 text-base text-ink-muted leading-relaxed">
            A complete suite of services, handled by experts — so you can focus
            on your future, not the paperwork.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <div
                key={service.title}
                className="group card-surface p-6 hover:-translate-y-1 hover:shadow-card hover:border-primary/20"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {Icon && <Icon className="h-6 w-6" strokeWidth={1.75} />}
                </div>
                <h3 className="font-heading text-base font-bold text-ink mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA strip */}
        <div className="mt-12 rounded-3xl bg-ink overflow-hidden relative">
          <div className="absolute -top-16 -right-10 w-64 h-64 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-5 px-7 py-8 md:px-10">
            <div className="text-center sm:text-left">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white">
                Not sure where to begin?
              </h3>
              <p className="mt-1.5 text-sm text-white/70">
                Talk to a counselor and get a personalized study plan — free.
              </p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0 bg-accent text-ink hover:bg-accent-dark shadow-none hover:shadow-soft">
              Get free guidance
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
