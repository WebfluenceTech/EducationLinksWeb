import { useState } from 'react';
import { PARTNER_UNIVERSITIES } from '../../lib/constants';

function LogoCard({ name, domain }: { name: string; domain: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name.split(' ').map((w) => w[0]).join('').slice(0, 3).toUpperCase();

  return (
    <div className="group shrink-0 flex flex-col items-center justify-center gap-2.5 bg-white border border-gray-100 rounded-2xl px-6 py-4 w-48 h-28 hover:border-brand-blue/25 hover:shadow-md transition-all duration-300">
      {!failed ? (
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt={name}
          onError={() => setFailed(true)}
          className="max-h-11 max-w-[120px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      ) : (
        <span className="text-sm font-extrabold text-brand-blue tracking-wide">{initials}</span>
      )}
      <span className="text-[10px] font-medium text-brand-gray text-center leading-tight line-clamp-2">
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({ items, reverse }: { items: typeof PARTNER_UNIVERSITIES; reverse?: boolean }) {
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
      <div className="container-custom mb-10">
        <div className="text-center">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-2">Our Network</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-brand-dark">
            Trusted by 50+ Leading Universities
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-blue" />
          <p className="mt-4 text-brand-gray text-sm max-w-xl mx-auto leading-relaxed">
            Our partnerships with top universities worldwide ensure the best opportunities for our students.
          </p>
        </div>
      </div>

      <div className="relative space-y-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-light/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-light/30 to-transparent z-10 pointer-events-none" />
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
