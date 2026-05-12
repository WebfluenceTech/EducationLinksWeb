import { useState, useEffect, useSyncExternalStore, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TEAM = [
  { name: 'Sidique Minhas', role: 'Founder & CEO', img: '/005.jpg' },
  { name: 'Usman Munir', role: 'Senior Student Consoler & Visa Processing Finland', img: '/002.jpg' },
  { name: 'M.Rizwan Azeem', role: 'Senior Education Counseller , Admission and Visa Processing Offer', img: '/003.jpg' },
  { name: 'Abu Talha', role: 'Senior Counseller , Visa Processing Officer , UK and Ireland', img: '/004.jpg' },
  { name: 'Dilawar Hussain', role: 'Branch Manager Sialkot', img: '/001.jpg' },
  { name: 'Basit Ahmed', role: 'Manager Head Office Lahorex', img: '/006.jpg' },
  { name: 'Noor Fatima', role: 'Student Counseller Finland', img: '/007.jpg' },
  { name: 'Maryam Khan', role: 'Student Counseller France and Belgium', img: '/008.jpg' },
  { name: 'Nadia Nazir', role: 'Manager , Bussiness Development', img: '/009.jpg' },
  { name: 'Saba Shafique', role: 'Branch Manager DHA Lahore', img: '/010.jpg' },
  { name: 'Sadia', role: 'Student Counseller Finland', img: '/011.jpg' },
];

function getCount() {
  return window.innerWidth < 1024 ? 3 : 4;
}

function subscribe(cb: () => void) {
  window.addEventListener('resize', cb);
  return () => window.removeEventListener('resize', cb);
}

function useVisibleCount() {
  return useSyncExternalStore(subscribe, getCount, getCount);
}

export default function Team() {
  const [current, setCurrent] = useState(0);
  const visibleCount = useVisibleCount();
  const maxIndex = TEAM.length - visibleCount;

  const prev = useCallback(() => setCurrent(c => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent(c => Math.min(maxIndex, c + 1)), [maxIndex]);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(c => (c >= maxIndex ? 0 : c + 1));
    }, 3800);
    return () => clearInterval(id);
  }, [maxIndex]);

  useEffect(() => {
    setCurrent(c => Math.min(c, maxIndex));
  }, [maxIndex]);

  return (
    <section
      className="md:min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #dbeeff 0%, #f0f8ff 30%, #fff5f5 70%, #ffeaea 100%)', width: '100vw', maxWidth: '100vw', boxSizing: 'border-box' }}
    >
      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0395DA22 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-red" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
      <div className="pointer-events-none absolute -top-28 -left-28 h-[420px] w-[420px] rounded-full blur-3xl" style={{ background: 'rgba(3,149,218,0.15)' }} />
      <div className="pointer-events-none absolute -bottom-28 -right-28 h-[420px] w-[420px] rounded-full blur-3xl" style={{ background: 'rgba(232,40,48,0.12)' }} />

      <div className="relative z-10 flex-1 flex flex-col w-full container-custom py-10 md:py-28 gap-8 md:gap-12">

        {/* Heading */}
        <div className="w-full text-center">
          <p className="text-brand-blue text-xs font-bold uppercase tracking-widest mb-3">
            The People Behind Your Success
          </p>
          <h2 className="font-heading font-script tracking-tight text-3xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight">
            Meet Our Team
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand-blue" />
          <p className="mt-4 text-brand-gray text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A passionate team of consultants, advisors, and specialists dedicated to making your international education journey seamless and successful.
          </p>
        </div>

        {/* Carousel */}
        <div className="flex-1 flex flex-col justify-center gap-6">

          {/* Track */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${(current / visibleCount) * 100}%)` }}
            >
              {TEAM.map((member) => (
                <div
                  key={member.name}
                  className="shrink-0 px-1.5 sm:px-3"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-white hover:border-brand-blue/25 hover:shadow-2xl transition-all duration-300 flex flex-col">
                    {/* Photo */}
                    <div className="relative overflow-hidden h-36 md:h-64">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-contain sm:object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>

                    {/* Info */}
                    <div className="p-2 sm:p-4 text-center">
                      <h3 className="font-heading text-xs sm:text-sm md:text-base font-bold text-brand-dark leading-tight">{member.name}</h3>
                      <p className="mt-0.5 text-[10px] sm:text-xs text-brand-blue font-medium leading-tight line-clamp-2">{member.role}</p>
                      <div className="mt-2 mx-auto h-0.5 w-8 rounded-full bg-brand-blue/30 group-hover:w-12 group-hover:bg-brand-blue transition-all duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls — ← dots → */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              disabled={current === 0}
              className="flex items-center justify-center h-9 w-9 sm:h-12 sm:w-12 rounded-full bg-white border border-brand-blue/20 text-brand-dark shadow-md hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-7 bg-brand-blue' : 'w-2 bg-brand-blue/25 hover:bg-brand-blue/50'}`}
                  aria-label={`Go to member ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={current >= maxIndex}
              className="flex items-center justify-center h-9 w-9 sm:h-12 sm:w-12 rounded-full bg-white border border-brand-blue/20 text-brand-dark shadow-md hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
