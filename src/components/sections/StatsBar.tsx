import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useCountUp } from '../../hooks/useCountUp';

const STATS = [
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 11, suffix: '+', label: 'Study Destinations' },
  { value: 50, suffix: '+', label: 'University Partners' },
  { value: 50, suffix: 'K+', label: 'Alumni Network' },
];

function StatItem({
  value, suffix, label, isVisible,
}: {
  value: number; suffix: string; label: string; isVisible: boolean;
}) {
  const count = useCountUp(value, isVisible);

  return (
    <div
      className={`flex flex-col items-center text-center py-12 md:py-16 px-0 min-w-0 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
    >
      {/* Giant number */}
      <span
        className="font-heading font-extrabold leading-none text-brand-blue whitespace-nowrap"
        style={{ fontSize: 'clamp(1rem, 6.5vw, 77.5rem)' }}
      >
        {count}{suffix}
      </span>

      {/* Label */}
      <span
        className="mt-4 font-semibold text-brand-blue/55 uppercase tracking-widest text-xs"
      >
        {label}
      </span>
    </div>
  );
}

export default function StatsBar() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="bg-white border-b border-gray-100">
      <div ref={ref} className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="min-w-0 overflow-hidden"
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
            >
              <StatItem {...stat} isVisible={isVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
