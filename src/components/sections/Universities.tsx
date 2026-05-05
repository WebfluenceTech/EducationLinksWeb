import { useState } from 'react';
import { PARTNER_UNIVERSITIES } from '../../lib/constants';

type Uni = { name: string; domain: string };

const SOURCES = (domain: string) => [
  `https://logo.clearbit.com/${domain}`,
  `https://www.google.com/s2/favicons?sz=128&domain=${domain}`,
];

function LogoCard({ name, domain }: Uni) {
  const [srcIndex, setSrcIndex] = useState(0);
  const sources = SOURCES(domain);
  const failed = srcIndex >= sources.length;
  const initials = name.split(' ').filter(Boolean).map((w) => w[0]).join('').slice(0, 3).toUpperCase();

  return (
    <div className="shrink-0 flex flex-col items-center justify-center gap-3 bg-white border border-gray-100 rounded-2xl px-8 py-6 w-64 h-36 hover:border-brand-blue/30 hover:shadow-lg transition-all duration-300">
      {!failed ? (
        <img
          src={sources[srcIndex]}
          alt={name}
          onError={() => setSrcIndex((i) => i + 1)}
          className="max-h-14 max-w-[140px] object-contain"
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
          <LogoCard key={`${uni.domain}-${i}`} name={uni.name} domain={uni.domain} />
        ))}
      </div>
    </div>
  );
}

export default function Universities() {
  const half = Math.ceil(PARTNER_UNIVERSITIES.length / 2);
  const row1 = PARTNER_UNIVERSITIES.slice(0, half);
  const row2 = PARTNER_UNIVERSITIES.slice(half);

  return (
    <section className="section-padding bg-brand-light/30 overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-center gap-10">

        {/* Left — sticky heading */}
        <div className="shrink-0 lg:w-72 xl:w-80 px-4 sm:px-6 lg:pl-8 xl:pl-16">
          <p className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-3">Our Network</p>
          <h2 className="font-heading text-3xl xl:text-4xl font-extrabold text-brand-dark leading-tight font-script tracking-tight text-3xl">
            Trusted by 50+ Leading Universities
          </h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-brand-blue" />
          <p className="mt-4 text-brand-gray text-sm leading-relaxed ">
            Our partnerships with top universities worldwide ensure the best opportunities for our students.
          </p>
        </div>

        {/* Right — marquee */}
        <div className="flex-1 min-w-0 relative space-y-4">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brand-light/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brand-light/30 to-transparent z-10 pointer-events-none" />
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </div>

      </div>
    </section>
  );
}
