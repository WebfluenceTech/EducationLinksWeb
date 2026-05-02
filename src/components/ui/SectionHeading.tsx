interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, light, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-brand-dark'}`}>
        {title}
      </h2>
      <div className="mt-4 flex items-center gap-1.5 justify-center" style={centered ? undefined : { justifyContent: 'flex-start' }}>
        <span className="block h-1 w-8 rounded-full bg-brand-red" />
        <span className="block h-1 w-3 rounded-full bg-brand-blue" />
      </div>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-lg ${centered ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-brand-gray'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
