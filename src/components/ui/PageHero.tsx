import type { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Optional decorative SVG (skyline / education / contact) rendered along the bottom curve */
  decoration?: ReactNode;
}

/**
 * Shared curved page header used across inner pages (Team, Universities,
 * Contact, etc.). Deep-navy gradient with a rounded bottom edge and an
 * optional decorative SVG silhouette.
 */
export default function PageHero({ eyebrow, title, subtitle, decoration }: PageHeroProps) {
  return (
    <div className="relative w-full pt-32 md:pt-40 pb-36 md:pb-44 overflow-hidden">
      {/* Curved gradient backdrop */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[160%] md:w-[125%] h-full overflow-hidden"
        style={{
          background: 'linear-gradient(120deg, #0B2545 0%, #13315C 50%, #1E6FD9 110%)',
          borderBottomLeftRadius: '48%',
          borderBottomRightRadius: '48%',
        }}
      >
        {/* glow */}
        <div className="absolute top-6 right-1/4 w-[420px] h-[420px] rounded-full bg-primary/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-[320px] h-[320px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        {decoration}
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        {eyebrow && (
          <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">{eyebrow}</p>
        )}
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
