const STATS = [
  { value: '17+', label: 'Years in business' },
  { value: '6k+', label: 'Students placed' },
  { value: '50+', label: 'University partners' },
  { value: '11+', label: 'Countries' },
];

const HIGHLIGHTS = [
  {
    title: 'Personalized guidance',
    description: 'Every student gets a dedicated counselor who understands their unique goals and aspirations.',
  },
  {
    title: 'End-to-end support',
    description: 'From university selection to visa approval — we handle every step of your journey.',
  },
  {
    title: 'Proven track record',
    description: '6,000+ successful placements and exceptional visa success rates since 2009.',
  },
  {
    title: 'Scholarship access',
    description: 'Access to 3,700+ scholarships to help fund your international education.',
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-offset section-padding" style={{ background: '#FFDCD8' }}>
      <div className="container-custom">

        {/* Top: label + headline + stats */}
        <div className="flex flex-col gap-8 pb-12 border-b border-gray-100 text-center items-center">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight">
              What Education Links Offers
            </h2>
            <p className="mt-4 text-sm text-brand-gray leading-relaxed max-w-xl mx-auto">
              Since 2009, Education Links has helped thousands of students build their futures at world-class universities across 11+ countries.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-3xl font-bold font-heading text-brand-dark">{s.value}</p>
                <p className="text-xs text-brand-gray mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: highlights as clean text rows */}
        <div className="pt-12 grid sm:grid-cols-2 gap-x-16 gap-y-8">
          {HIGHLIGHTS.map((item, i) => (
            <div key={item.title} className="flex gap-4">
              <span className="text-xs font-mono text-brand-gray/50 mt-1 shrink-0 w-5">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-brand-dark">{item.title}</h3>
                <p className="mt-1 text-sm text-brand-gray leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
