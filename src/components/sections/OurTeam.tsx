import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TEAM } from '../../lib/constants';

export default function OurTeam() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive((p) => (p + 1) % TEAM.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + TEAM.length) % TEAM.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <section
      id="our-team"
      className="section-padding bg-slate-50 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-[4fr_8fr] gap-12 lg:gap-16 items-center">
          
          {/* Left — Content */}
          <div>
            <p className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Our Professionals
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-6 font-script tracking-tight">
              Meet the Experts Behind Your Success.
            </h2>
            <p className="text-brand-gray text-lg mb-8 max-w-md">
              Our dedicated team of counselors and visa experts are here to guide you through every step of your international education journey.
            </p>

            {/* Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="flex items-center justify-center h-12 w-12 rounded-full border border-gray-200 bg-white text-brand-dark hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-all duration-300 shadow-sm"
                  aria-label="Previous team member"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={next}
                  className="flex items-center justify-center h-12 w-12 rounded-full border border-gray-200 bg-white text-brand-dark hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-all duration-300 shadow-sm"
                  aria-label="Next team member"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Progress Dots */}
              <div className="flex items-center gap-1.5 ml-4">
                {TEAM.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? 'w-6 bg-brand-blue' : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to team member ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right — Carousel */}
          <div className="relative">
            <div className="overflow-hidden py-10 -my-10">
              <div
                className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(calc(-${active} * (300px + 24px)))` }}
              >
                {TEAM.map((member, i) => (
                  <div
                    key={member.name}
                    className={`shrink-0 w-[300px] h-[400px] rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 ${
                      i === active ? 'ring-4 ring-brand-blue/20 scale-105 z-10 shadow-2xl' : 'opacity-70 scale-95'
                    }`}
                    onClick={() => setActive(i)}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0395DA&color=fff&size=512`;
                      }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-bold text-xl mb-1">{member.name}</h3>
                      <p className="text-blue-100 text-sm leading-snug">{member.role}</p>
                      
                      {/* Hover reveal line */}
                      <div className="mt-4 w-0 h-0.5 bg-brand-red group-hover:w-12 transition-all duration-500 delay-100" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
