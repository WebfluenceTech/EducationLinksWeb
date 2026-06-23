interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 md:mb-14 flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'} ${className}`}
    >
      {eyebrow && (
        <span
          className={`eyebrow mb-4 ${light ? 'text-brand-blue-light before:bg-brand-blue-light/60' : ''}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold leading-[1.08] tracking-tight ${light ? 'text-white' : 'text-brand-dark'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/65' : 'text-brand-gray'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
