import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PARTNER_UNIVERSITIES } from '../../lib/constants';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useCountUp } from '../../hooks/useCountUp';

type Uni = { name: string; domain: string; logoUrl?: string };

const SOURCES = (domain: string, logoUrl?: string) => [
  ...(logoUrl ? [logoUrl] : []),
  `https://logo.clearbit.com/${domain}`,
  `https://www.google.com/s2/favicons?sz=128&domain=${domain}`,
];

function LogoCard({ name, domain, logoUrl }: Uni) {
  const [srcIndex, setSrcIndex] = useState(0);
  const sources = SOURCES(domain, logoUrl);
  const failed = srcIndex >= sources.length;
  const initials = name.split(' ').filter(Boolean).map((w) => w[0]).join('').slice(0, 3).toUpperCase();

  return (
    <div className="shrink-0 flex flex-col items-center justify-center gap-2 bg-white border border-line rounded-2xl px-3 py-3 sm:px-5 sm:py-4 md:px-8 md:py-6 w-32 h-24 sm:w-48 sm:h-32 md:w-60 md:h-36 hover:border-primary/30 hover:shadow-card transition-all duration-300">
      {!failed ? (
        <img
          src={sources[srcIndex]}
          alt={name}
          onError={() => setSrcIndex((i) => i + 1)}
          className="max-h-8 sm:max-h-12 md:max-h-14 max-w-[70px] sm:max-w-[110px] md:max-w-[140px] object-contain"
        />
      ) : (
        <span className="text-sm font-extrabold text-primary tracking-wide text-center">
          {initials}
        </span>
      )}
      <span className="text-[11px] font-semibold text-ink-muted text-center leading-tight line-clamp-2">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ items, reverse }: { items: Uni[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden w-full">
      <div className={`flex gap-4 ${reverse ? 'animate-marquee-right' : 'animate-marquee-left'}`}>
        {doubled.map((uni, i) => (
          <LogoCard key={`${uni.domain}-${i}`} name={uni.name} domain={uni.domain} logoUrl={uni.logoUrl} />
        ))}
      </div>
    </div>
  );
}

const STATS = [
  { value: 50, suffix: '+', label: 'Partner universities' },
  { value: 10, suffix: '+', label: 'Countries' },
  { value: 95, suffix: '%', label: 'Visa success' },
];

function AnimatedStat({ value, suffix, label, isVisible }: { value: number; suffix: string; label: string; isVisible: boolean }) {
  const count = useCountUp(value, isVisible, 2000);
  return (
    <div>
      <p className="font-heading text-2xl md:text-3xl font-extrabold text-ink tabular-nums">
        {count}{suffix}
      </p>
      <p className="text-xs text-ink-muted mt-1">{label}</p>
    </div>
  );
}

export default function Universities() {
  const half = Math.ceil(PARTNER_UNIVERSITIES.length / 2);
  const row1 = PARTNER_UNIVERSITIES.slice(0, half);
  const row2 = PARTNER_UNIVERSITIES.slice(half);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2);

  return (
    <section className="section-padding overflow-hidden bg-canvas">
      <div className="container-custom flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14">

        {/* Left — heading */}
        <div className="shrink-0 lg:w-96">
          <span className="eyebrow mb-4">Our network</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink leading-tight">
            Trusted by 50+ leading universities
          </h2>
          <p className="mt-5 text-base text-ink-muted leading-relaxed max-w-sm">
            Our partnerships with top universities worldwide unlock the best
            opportunities for our students.
          </p>

          {/* Stats row */}
          <div ref={statsRef} className="mt-8 flex items-center gap-6 md:gap-8">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6 md:gap-8">
                {i > 0 && <span className="w-px h-10 bg-line" />}
                <AnimatedStat {...stat} isVisible={statsVisible} />
              </div>
            ))}
          </div>

          <Link to="/universities" className="btn-secondary mt-8">
            Browse all universities
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Right — marquee rows */}
        <div className="flex-1 min-w-0 relative flex flex-col justify-center gap-5">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-canvas to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-canvas to-transparent z-10 pointer-events-none" />
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
          <MarqueeRow items={row1} />
        </div>

      </div>
    </section>
  );
}
