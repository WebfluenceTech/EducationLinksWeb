import { useState } from 'react';
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
    <div className="shrink-0 flex flex-col items-center justify-center gap-2 bg-white border border-gray-100 rounded-xl px-3 py-3 sm:px-5 sm:py-4 md:px-8 md:py-6 w-32 h-24 sm:w-48 sm:h-32 md:w-64 md:h-36 hover:border-brand-blue/30 hover:shadow-lg transition-all duration-300">
      {!failed ? (
        <img
          src={sources[srcIndex]}
          alt={name}
          onError={() => setSrcIndex((i) => i + 1)}
          className="max-h-8 sm:max-h-12 md:max-h-14 max-w-[70px] sm:max-w-[110px] md:max-w-[140px] object-contain"
        />
      ) : (
        <span className="text-sm font-extrabold text-brand-blue tracking-wide text-center">
          {initials}
        </span>
      )}
      <span className="text-xs font-semibold text-brand-gray text-center leading-tight line-clamp-2">
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
  { value: 50, suffix: '+', label: 'Partner Universities' },
  { value: 10, suffix: '+', label: 'Countries' },
  { value: 95, suffix: '%', label: 'Visa Success' },
];

function AnimatedStat({ value, suffix, label, isVisible }: { value: number; suffix: string; label: string; isVisible: boolean }) {
  const count = useCountUp(value, isVisible, 2000);
  return (
    <div>
      <p className="text-2xl md:text-3xl font-extrabold text-brand-dark">
        {count}{suffix}
      </p>
      <p className="text-xs text-brand-gray mt-1">{label}</p>
    </div>
  );
}

export default function Universities() {
  const half = Math.ceil(PARTNER_UNIVERSITIES.length / 2);
  const row1 = PARTNER_UNIVERSITIES.slice(0, half);
  const row2 = PARTNER_UNIVERSITIES.slice(half);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2);

  return (
    <section className="md:min-h-screen flex flex-col overflow-hidden" style={{ background: '#FFF', width: '100vw', maxWidth: '100vw', boxSizing: 'border-box' }}>

      <div className="flex-1 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 py-10 md:py-28 px-4 sm:px-6 lg:px-8 xl:px-16">

        {/* Left — heading */}
        <div className="shrink-0 lg:w-80 xl:w-96">
          <p className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-4">Our Network</p>
          <h2 className="font-heading tracking-tight text-3xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight">
            Trusted by 50+ Leading Universities
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-brand-blue" />
          <p className="mt-5 text-brand-gray text-base leading-relaxed max-w-sm">
            Our partnerships with top universities worldwide ensure the best opportunities for our students.
          </p>

          {/* Stats row */}
          <div ref={statsRef} className="mt-6 md:mt-10 flex gap-6 md:gap-8">
            {STATS.map((stat, i) => (
              <>
                {i > 0 && <div key={`divider-${i}`} className="w-px bg-brand-blue/20" />}
                <AnimatedStat key={stat.label} {...stat} isVisible={statsVisible} />
              </>
            ))}
          </div>
        </div>

        {/* Right — marquee rows */}
        <div className="flex-1 min-w-0 relative flex flex-col justify-center gap-6">
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
          <MarqueeRow items={row1} />
        </div>

      </div>
    </section>
  );
}
