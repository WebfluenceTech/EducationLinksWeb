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
    <section className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #dbeeff 0%, #f0f8ff 30%, #fff5f5 70%, #ffeaea 100%)' }}>

      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0395DA22 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Top & bottom accent bars */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-red" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl" style={{ background: 'rgba(3,149,218,0.22)' }} />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full blur-3xl" style={{ background: 'rgba(232,40,48,0.18)' }} />
      <div className="pointer-events-none absolute top-1/3 left-1/4 h-64 w-64 rounded-full blur-3xl" style={{ background: 'rgba(3,149,218,0.12)' }} />

      {/* Floating SVG — globe top left */}
      <svg className="pointer-events-none absolute top-8 left-12 opacity-[0.07] w-32 h-32 -rotate-6" viewBox="0 0 64 64" fill="none" stroke="#0395DA" strokeWidth="1.5">
        <circle cx="32" cy="32" r="28"/>
        <ellipse cx="32" cy="32" rx="14" ry="28"/>
        <line x1="4" y1="32" x2="60" y2="32"/>
        <line x1="32" y1="4" x2="32" y2="60"/>
        <path d="M8 18 Q32 24 56 18"/>
        <path d="M8 46 Q32 40 56 46"/>
      </svg>

      {/* Floating SVG — graduation cap bottom right */}
      <svg className="pointer-events-none absolute bottom-8 right-12 opacity-[0.08] w-28 h-28 rotate-12" viewBox="0 0 64 64" fill="#E82830">
        <path d="M32 4L2 20l30 16 30-16L32 4z"/>
        <path d="M8 24v16c0 6.627 10.745 12 24 12s24-5.373 24-12V24L32 40 8 24z"/>
      </svg>

      <div className="flex-1 flex flex-col lg:flex-row lg:items-center gap-12 relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 xl:px-16">

        {/* Left — heading */}
        <div className="shrink-0 lg:w-80 xl:w-96">
          <p className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-4">Our Network</p>
          <h2 className="font-heading font-script tracking-tight text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark leading-tight">
            Trusted by 50+ Leading Universities
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-brand-blue" />
          <p className="mt-5 text-brand-gray text-base leading-relaxed max-w-sm">
            Our partnerships with top universities worldwide ensure the best opportunities for our students.
          </p>

          {/* Stats row */}
          <div className="mt-10 flex gap-8">
            <div>
              <p className="text-3xl font-extrabold text-brand-dark">50+</p>
              <p className="text-xs text-brand-gray mt-1">Partner Universities</p>
            </div>
            <div className="w-px bg-brand-blue/20" />
            <div>
              <p className="text-3xl font-extrabold text-brand-dark">10+</p>
              <p className="text-xs text-brand-gray mt-1">Countries</p>
            </div>
            <div className="w-px bg-brand-blue/20" />
            <div>
              <p className="text-3xl font-extrabold text-brand-dark">95%</p>
              <p className="text-xs text-brand-gray mt-1">Visa Success</p>
            </div>
          </div>
        </div>

        {/* Right — marquee rows */}
        <div className="flex-1 min-w-0 relative flex flex-col justify-center gap-6">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#dbeeff]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#ffeaea]/80 to-transparent z-10 pointer-events-none" />
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
          <MarqueeRow items={row1} />
        </div>

      </div>
    </section>
  );
}
