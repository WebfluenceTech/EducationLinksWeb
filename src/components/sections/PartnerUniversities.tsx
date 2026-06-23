import { useState } from 'react';
import { FEATURED_UNIVERSITIES } from '../../lib/constants';

function LogoCard({ name, domain }: { name: string; domain: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name.split(' ').map((w) => w[0]).join('').slice(0, 3).toUpperCase();

  return (
    <div className="shrink-0 flex items-center justify-center bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-blue/20 transition-all duration-300 w-44 h-28 px-5">
      {!failed ? (
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt={name}
          onError={() => setFailed(true)}
          className="max-h-14 max-w-[130px] object-contain"
        />
      ) : (
        <span className="text-xs font-bold text-brand-blue text-center leading-snug">{initials}</span>
      )}
    </div>
  );
}

export default function PartnerUniversities() {
  const doubled = [...FEATURED_UNIVERSITIES, ...FEATURED_UNIVERSITIES];

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Faint world map */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-[length:90%_auto] pointer-events-none"
        style={{ backgroundImage: "url('/world-map.svg')", opacity: 0.05 }}
      />

      <div className="relative">
        {/* Heading */}
        <div className="text-center mb-10 px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-brand-dark">
            Popular And Partner Universities
          </h2>
        </div>

        {/* Marquee row */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex gap-5 animate-marquee-left">
            {doubled.map((uni, i) => (
              <LogoCard key={`${uni.domain}-${i}`} name={uni.name} domain={uni.domain} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
