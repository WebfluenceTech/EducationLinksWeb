interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, light, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-10 md:mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`font-heading text-3xl md:text-4xl font-bold leading-tight ${light ? 'text-white' : 'text-brand-dark'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-sm max-w-xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-brand-gray'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
