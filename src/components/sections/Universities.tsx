import SectionHeading from '../ui/SectionHeading';
import { PARTNER_UNIVERSITIES } from '../../lib/constants';

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`flex gap-4 ${reverse ? 'animate-marquee-right' : 'animate-marquee-left'}`}>
        {doubled.map((uni, i) => (
          <div
            key={`${uni}-${i}`}
            className="shrink-0 bg-white border border-gray-100 rounded-xl px-5 py-3 text-sm font-medium text-brand-dark hover:border-brand-blue/30 hover:shadow-md transition-all whitespace-nowrap"
          >
            {uni}
          </div>
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
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom mb-10">
        <SectionHeading
          title="Trusted by 50+ Leading Universities"
          subtitle="Our partnerships with top universities worldwide ensure the best opportunities for our students."
        />
      </div>
      <div className="relative space-y-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
