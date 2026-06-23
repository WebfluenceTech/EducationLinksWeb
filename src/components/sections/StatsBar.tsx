import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useCountUp } from '../../hooks/useCountUp';
import { CalendarClock, Globe2, Building2, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const STATS: { value: number; suffix: string; label: string; icon: LucideIcon }[] = [
  { value: 17, suffix: '+', label: 'Years of experience', icon: CalendarClock },
  { value: 11, suffix: '+', label: 'Study destinations', icon: Globe2 },
  { value: 50, suffix: '+', label: 'University partners', icon: Building2 },
  { value: 50, suffix: 'K+', label: 'Alumni network', icon: Users },
];

function StatItem({
  value, suffix, label, icon: Icon, isVisible,
}: {
  value: number; suffix: string; label: string; icon: LucideIcon; isVisible: boolean;
}) {
  const count = useCountUp(value, isVisible);

  return (
    <div className="flex flex-col items-center text-center gap-3 px-4 py-8 md:py-10">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <span className="font-heading font-extrabold leading-none text-ink text-4xl md:text-5xl tabular-nums">
        {count}{suffix}
      </span>
      <span className="text-xs md:text-sm font-medium text-ink-muted uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}

export default function StatsBar() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="relative -mt-8 z-20">
      <div className="container-custom">
        <div ref={ref} className="card-surface shadow-card overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-line">
            {STATS.map((stat) => (
              <StatItem key={stat.label} {...stat} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
