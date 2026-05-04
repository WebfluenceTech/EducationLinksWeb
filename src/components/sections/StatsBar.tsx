import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useCountUp } from '../../hooks/useCountUp';

const STATS = [
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 11, suffix: '+', label: 'Study Destinations' },
  { value: 50, suffix: '+', label: 'University Partners' },
  { value: 50, suffix: 'K+', label: 'Alumni Network' },
];

function StatItem({ value, suffix, label, isVisible }: { value: number; suffix: string; label: string; isVisible: boolean }) {
  const count = useCountUp(value, isVisible);
  return (
    <div className="flex flex-col items-center text-center px-6 py-8">
      <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-brand-blue leading-none">
        {count}{suffix}
      </div>
      <div className="mt-3 text-base md:text-lg text-brand-gray font-medium tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}

export default function StatsBar() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="bg-white border-b border-gray-100 shadow-sm">
      <div ref={ref} className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
