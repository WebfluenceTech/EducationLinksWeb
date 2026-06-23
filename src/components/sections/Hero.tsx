import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, GraduationCap, Globe2, ShieldCheck } from 'lucide-react';

function scrollToDestinations() {
  document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const STATS = [
  { value: '6,000+', label: 'Students placed' },
  { value: '15+', label: 'Years of guidance' },
  { value: '50+', label: 'Partner universities' },
];

const TRUST = [
  { icon: GraduationCap, text: 'ICEF-certified counselors' },
  { icon: Globe2, text: '11+ global destinations' },
  { icon: ShieldCheck, text: '95% visa success rate' },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-ink pt-28 md:pt-36 pb-20 md:pb-28">
      {/* Background image + gradient veil */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(120deg, rgba(11,37,69,0.96) 0%, rgba(19,49,92,0.88) 45%, rgba(30,111,217,0.62) 100%)' }}
        />
      </div>

      {/* Decorative glows */}
      <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-primary/25 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/4 w-[420px] h-[420px] rounded-full bg-accent/10 blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left — copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full mb-7 tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 animate-pulse" />
              Trusted by 6,000+ students since 2009
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-white leading-[1.08] tracking-tight">
              Your gateway to a{' '}
              <span className="text-accent">world-class</span>{' '}
              education abroad
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/75 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Pakistan's largest study-abroad consultancy. Expert, end-to-end
              guidance for top universities across Europe, the UK, Canada,
              Australia and beyond.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start items-center gap-3">
              <button onClick={scrollToDestinations} className="btn-primary w-full sm:w-auto">
                Explore destinations
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 backdrop-blur-sm text-white font-semibold px-6 py-3.5 text-sm transition-all hover:bg-white/15 hover:-translate-y-0.5"
              >
                <PhoneCall className="h-4 w-4" />
                Free consultation
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-9 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3">
              {TRUST.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-white/70">
                  <Icon className="h-4 w-4 text-accent shrink-0" strokeWidth={2} />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — stat panel */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-white/15 bg-white/[0.07] backdrop-blur-xl p-7 md:p-8 shadow-lift">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-5">
                Why students choose us
              </p>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {STATS.map((s) => (
                  <div key={s.label} className="text-center sm:text-left">
                    <div className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-none">{s.value}</div>
                    <div className="mt-1.5 text-[10px] sm:text-[11px] md:text-xs text-white/60 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-white/80 leading-relaxed">
                  "From shortlisting universities to landing your visa, a dedicated
                  counselor stays with you at every step."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave into canvas */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-10" style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ height: '70px' }}>
          <path d="M0,40 C360,110 1080,-20 1440,40 L1440,90 L0,90 Z" fill="#F7F9FC" />
        </svg>
      </div>
    </section>
  );
}
