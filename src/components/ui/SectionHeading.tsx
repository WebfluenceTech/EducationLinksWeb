interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, eyebrow, light, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className={`eyebrow mb-4 ${light ? '!text-accent' : ''}`}>{eyebrow}</span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-ink-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
