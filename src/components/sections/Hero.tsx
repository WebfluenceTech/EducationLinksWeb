import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useCountUp } from '../../hooks/useCountUp';

const STATS = [
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 11, suffix: '+', label: 'Study Destinations' },
  { value: 50, suffix: '+', label: 'University Partners' },
  { value: 50, suffix: 'K+', label: 'Alumni Network' },
];

function StatCard({ value, suffix, label, isVisible }: { value: number; suffix: string; label: string; isVisible: boolean }) {
  const count = useCountUp(value, isVisible);
  return (
    <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg shadow-black/5 text-center">
      <div className="text-3xl md:text-4xl font-bold font-heading text-brand-blue">
        {count}{suffix}
      </div>
      <div className="mt-1 text-sm text-brand-gray font-medium">{label}</div>
    </div>
  );
}

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="University campus"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/50" />
      </div>

      {/* Content */}
      <div className="relative container-custom py-24 md:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse" />
            Trusted by 50,000+ students since 2009
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Your Gateway to{' '}
            <span className="text-brand-blue-light">World-Class</span>{' '}
            Education Abroad
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
            Pakistan's largest study abroad consultancy. Expert guidance for universities across Europe, UK, Canada, Australia, and more.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/#destinations"
              onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-brand-blue/30"
            >
              Explore Destinations
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:bg-white/10"
            >
              <PlayCircle className="h-5 w-5" />
              Free Consultation
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div ref={ref} className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
