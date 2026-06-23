import { UserCheck, LifeBuoy, Trophy, Wallet, CalendarDays, Users, Building2, Globe2 } from 'lucide-react';

const STATS = [
  { value: '17+', label: 'Years in Business', icon: CalendarDays, bg: '#C8DFF0' },
  { value: '6k+', label: 'Students Placed',   icon: Users,        bg: '#F2E4CC' },
  { value: '50+', label: 'University Partners',icon: Building2,    bg: '#E4E5E8' },
  { value: '11+', label: 'Countries',          icon: Globe2,       bg: '#C8DFF0' },
];

const HIGHLIGHTS = [
  {
    title: 'Personalized guidance',
    description: 'Every student gets a dedicated counselor who understands their unique goals and aspirations.',
    icon: UserCheck,
    bg: '#C8DFF0',
  },
  {
    title: 'End-to-end support',
    description: 'From university selection to visa approval — we handle every step of your journey.',
    icon: LifeBuoy,
    bg: '#F2E4CC',
  },
  {
    title: 'Proven track record',
    description: '6,000+ successful placements and exceptional visa success rates since 2009.',
    icon: Trophy,
    bg: '#E4E5E8',
  },
  {
    title: 'Scholarship access',
    description: 'Access to 3,700+ scholarships to help fund your international education.',
    icon: Wallet,
    bg: '#C8DFF0',
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-offset w-full bg-[#EEEDED]">
      <div className="container-custom py-14 md:py-20">

        {/* Header */}
        <div className="mb-10 md:mb-14 text-center mx-auto">
          <span className="eyebrow mb-3 justify-center">Why Education Links</span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-dark leading-[1.05] tracking-tight mt-4">
            Everything you need to study abroad,<br className="hidden sm:block" /> in one place
          </h2>
          <p className="mt-5 text-base md:text-lg text-brand-gray leading-relaxed max-w-2xl mx-auto">
            Since 2009, Education Links has helped thousands of students build their futures
            at world-class universities across 11+ countries.
          </p>
        </div>

        {/* Stats row — identical style to stats-banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
          {STATS.map(({ value, label, icon: Icon, bg }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center text-center gap-3 py-8 md:py-14 px-4"
              style={{ backgroundColor: bg }}
            >
              <span className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center text-brand-blue">
                <Icon className="h-6 w-6 md:h-9 md:w-9" strokeWidth={1.6} />
              </span>
              <span className="font-heading text-5xl md:text-6xl font-black leading-none tracking-tight text-brand-dark">
                {value}
              </span>
              <span className="text-[10px] md:text-[11px] font-bold text-brand-gray uppercase tracking-[0.14em]">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Feature cards — same pastel treatment */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {HIGHLIGHTS.map(({ title, description, icon: Icon, bg }) => (
            <div
              key={title}
              className="flex flex-col gap-4 p-6 md:p-10"
              style={{ backgroundColor: bg }}
            >
              <span className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center text-brand-blue">
                <Icon className="h-6 w-6 md:h-9 md:w-9" strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="font-heading text-base md:text-lg font-extrabold text-brand-dark leading-tight">
                  {title}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-brand-gray leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
