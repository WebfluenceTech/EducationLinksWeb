import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall } from 'lucide-react';

function goToDestinations() {
  window.dispatchEvent(new CustomEvent('fp:goto', { detail: { id: 'destinations' } }));
}

export default function Hero() {
  return (
    <section
      className="relative w-full h-full flex items-center overflow-hidden"
      style={{ background: '#2F95D0' }}
    >
      {/* Background image — subtle, behind blue overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        style={{ borderRadius: 'inherit' }}>
        <img
          src="https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        {/* Blue brand overlay so text stays readable */}
        <div className="absolute inset-0" style={{ background: 'rgba(2, 148, 218, 0.82)' }} />
      </div>

      {/* Soft light glow top-right */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 70% 20%, rgba(255,255,255,0.10) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 w-full container-custom py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* ── Left: Text ── */}
          <div className="flex-1 text-center md:text-left max-w-xl">

            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-white shrink-0" />
              Trusted by 6,000+ students since 2009
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              Your Gateway to{' '}
              <span className="text-white">
                World&#8209;Class
              </span>{' '}
              Education Abroad
            </h1>

            <p className="mt-5 text-base md:text-lg text-white/75 leading-relaxed font-light">
              Pakistan's largest study abroad consultancy. Expert guidance for
              universities across Europe, UK, Canada, Australia, and more.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center md:justify-start items-center gap-3">
              <button
                onClick={goToDestinations}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-brand-blue font-bold px-7 py-3.5 rounded-xl text-sm transition-all hover:bg-white/90 hover:shadow-xl hover:shadow-black/20"
              >
                Explore Destinations
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all"
              >
                <PhoneCall className="h-4 w-4" />
                Free Consultation
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-8 border-t border-white/15 pt-8">
              {[
                { value: '6,000+', label: 'Students Placed' },
                { value: '15+', label: 'Years Experience' },
                { value: '50+', label: 'Partner Universities' },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-xs text-white/60 mt-0.5 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>

      {/* SVG wave — white arc at the bottom, exactly like reference */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: '90px' }}
        >
          <path
            d="M0,0 C360,100 1080,100 1440,0 L1440,90 L0,90 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
