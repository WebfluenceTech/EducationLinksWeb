import { UserCheck, Workflow, Trophy, Wallet, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const HIGHLIGHTS: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Personalized guidance',
    description: 'A dedicated counselor who understands your unique goals and aspirations.',
    icon: UserCheck,
  },
  {
    title: 'End-to-end support',
    description: 'From university selection to visa approval — we handle every step.',
    icon: Workflow,
  },
  {
    title: 'Proven track record',
    description: '6,000+ successful placements and exceptional visa success rates since 2009.',
    icon: Trophy,
  },
  {
    title: 'Scholarship access',
    description: 'Tap into 3,700+ scholarships to help fund your international education.',
    icon: Wallet,
  },
];

const POINTS = ['Free first consultation', 'No hidden fees', 'Offices in Lahore & Sialkot'];

export default function About() {
  return (
    <section id="about" className="scroll-offset section-padding bg-canvas">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-4xl overflow-hidden shadow-card border border-line">
              <img
                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=900&h=1000&fit=crop"
                alt="Students collaborating on campus"
                className="w-full h-[440px] md:h-[520px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating credibility card */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white rounded-2xl shadow-lift border border-line p-5 max-w-[230px]">
              <div className="font-heading text-3xl font-extrabold text-primary leading-none">95%</div>
              <p className="mt-1.5 text-sm font-medium text-ink">Visa success rate</p>
              <p className="text-xs text-ink-muted mt-0.5">across all destinations</p>
            </div>
            {/* Accent badge top-left */}
            <div className="absolute -top-5 -left-2 sm:left-6 bg-accent text-ink rounded-2xl shadow-lift px-5 py-3">
              <div className="font-heading text-2xl font-extrabold leading-none">15+</div>
              <p className="text-[11px] font-semibold uppercase tracking-wide mt-1">Years</p>
            </div>
          </div>

          {/* Right — content */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow mb-4">Who we are</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink leading-tight">
              Guiding ambitious students to global universities
            </h2>
            <p className="mt-5 text-base text-ink-muted leading-relaxed">
              Since 2009, Education Links has helped thousands of students build their
              futures at world-class universities across 11+ countries — with honest
              advice, expert counseling, and unwavering support.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {HIGHLIGHTS.map(({ title, description, icon: Icon }) => (
                <div key={title} className="rounded-2xl border border-line bg-white p-5 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary mb-3">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-heading text-base font-bold text-ink">{title}</h3>
                  <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">{description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
              {POINTS.map((p) => (
                <span key={p} className="flex items-center gap-2 text-sm font-medium text-ink-soft">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  {p}
                </span>
              ))}
            </div>

            <Link to="/contact" className="btn-primary mt-8">
              Book a free consultation
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
