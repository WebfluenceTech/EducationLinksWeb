import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle, Globe, BookOpen, FileText,
  Award, ShieldCheck, Search, Bell, ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ContactSVG } from '../components/ui/ContactSVG';

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

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
        .font-nunito { font-family: 'Nunito', sans-serif; }
      `}</style>
      <div className="font-nunito min-h-screen bg-white">

        {/* Curved Header Background */}
        <div className="relative w-full pt-32 pb-44 mb-16 overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-full overflow-hidden"
            style={{ backgroundColor: '#2F95D0', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}
          >
            <ContactSVG className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full min-w-[1100px] text-white pointer-events-none" />
          </div>

          <div className="container-custom relative z-10 mx-auto px-4 max-w-6xl text-center mt-8">
            <p className="text-white/80 text-xs font-bold uppercase tracking-[0.25em] mb-4">
              What We Do
            </p>
            <h1 className="text-[2.5rem] md:text-5xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-[1.1rem] text-white/90 max-w-2xl mx-auto">
              Everything you need to study abroad, handled by experts who have done it 6,000+ times.
            </p>
          </div>
        </div>

        {/* ── Services Grid ── */}
        <div className="container-custom pb-16 md:pb-24">
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

          {/* ── CTA banner ── */}
          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-between gap-5 bg-brand-dark px-8 py-8 md:px-12 md:py-10">
            <div className="text-center sm:text-left">
              <h2 className="font-heading text-xl md:text-2xl font-extrabold text-white">
                Not sure where to start?
              </h2>
              <p className="mt-1.5 text-sm text-white/70">
                Talk to one of our counsellors and get a free personalised study plan.
              </p>
            </div>
            <Link
              to="/contact-us"
              className="group inline-flex shrink-0 items-center gap-2 bg-brand-blue text-white text-sm font-semibold px-6 py-3.5 transition-colors hover:bg-brand-blue-dark"
            >
              Get Free Counselling
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
