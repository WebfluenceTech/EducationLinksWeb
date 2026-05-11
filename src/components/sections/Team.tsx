import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Mail } from 'lucide-react';

const TEAM = [
  { name: 'Sidique Minhas', role: 'Founder & CEO', img: '/005.jpg' },
  { name: 'Usman Munir', role: 'Senior Student Consoler & Visa Processing Finland', img: '/002.jpg' },
  { name: 'M.Rizwan Azeem', role: 'Senior Education Counseller , Admission and Visa Processing Offer', img: '/003.jpg' },
  { name: 'Abu Talha', role: 'Senior Counseller , Visa Processing Officer , UK and Ireland', img: '/004.jpg' },
  { name: 'Dilawar Hussain', role: 'Branch Manager Sialkot', img: '/001.jpg' },
  { name: 'Basit Ahmed', role: 'Manager Head Office Lahorex', img: '/006.jpg' },
  { name: 'Noor Fatima', role: 'Student Counseller Finland', img: '/007.jpg' },
  { name: 'Maryam Khan', role: 'Student Counseller France and Belgium', img: '/008.jpg' },
  { name: 'Nadia Nazir', role: 'Manager , Bussiness Development ', img: '/009.jpg' },
  { name: 'Saba Shafique', role: 'Branch Manager DHA Lahore', img: '/010.jpg' },
  { name: 'Sadia ', role: 'Student Counseller Finland', img: '/011.jpg' },
];



const VISIBLE = 4;

function useVisibleCount() {
  const [count, setCount] = useState(VISIBLE);
  useEffect(() => {
    function update() {
      if (window.innerWidth < 640) setCount(1);
      else if (window.innerWidth < 900) setCount(2);
      else if (window.innerWidth < 1200) setCount(3);
      else setCount(VISIBLE);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return count;
}

export default function Team() {
  const [current, setCurrent] = useState(0);
  const visibleCount = useVisibleCount();
  const maxIndex = TEAM.length - visibleCount;

  const prev = useCallback(() => setCurrent(c => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent(c => Math.min(maxIndex, c + 1)), [maxIndex]);

  // auto-advance
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
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #dbeeff 0%, #f0f8ff 30%, #fff5f5 70%, #ffeaea 100%)' }}
    >
      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0395DA22 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Accent bars */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-red" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-28 -left-28 h-[420px] w-[420px] rounded-full blur-3xl" style={{ background: 'rgba(3,149,218,0.15)' }} />
      <div className="pointer-events-none absolute -bottom-28 -right-28 h-[420px] w-[420px] rounded-full blur-3xl" style={{ background: 'rgba(232,40,48,0.12)' }} />

      {/* Floating SVG — graduation cap top right */}
      <svg className="pointer-events-none absolute top-10 right-16 opacity-[0.07] w-36 h-36 rotate-12" viewBox="0 0 64 64" fill="#0395DA">
        <path d="M32 4L2 20l30 16 30-16L32 4z" />
        <path d="M8 24v16c0 6.627 10.745 12 24 12s24-5.373 24-12V24L32 40 8 24z" />
      </svg>

      {/* Floating SVG — star bottom left */}
      <svg className="pointer-events-none absolute bottom-14 left-14 opacity-[0.07] w-24 h-24" viewBox="0 0 64 64" fill="#E82830">
        <path d="M32 4l7 14 16 2-11.5 11 3 16L32 40l-14.5 7 3-16L9 20l16-2z" />
      </svg>

      <div className="relative z-10 flex-1 flex flex-col justify-between container-custom py-20 md:py-28">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-4">
            The People Behind Your Success
          </p>
          <h2 className="font-heading font-script tracking-tight text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight">
            Meet Our Team
          </h2>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-brand-blue" />
          <p className="mt-5 text-brand-gray text-base max-w-2xl mx-auto leading-relaxed">
            A passionate team of consultants, advisors, and specialists dedicated to making your international education journey seamless and successful.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex-1 flex flex-col justify-center">
          {/* Overflow window */}
          <div className="overflow-hidden px-1">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${(current / visibleCount) * 100}%)` }}
            >
              {TEAM.map((member) => (
                <div
                  key={member.name}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white hover:border-brand-blue/25 hover:shadow-2xl transition-all duration-400 flex flex-col">
                    {/* Photo */}
                    <div className="relative overflow-hidden h-72">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      {/* Social icons on hover */}
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                        <a
                          href="#"
                          className="flex items-center justify-center h-9 w-9 rounded-full bg-white/90 text-brand-blue hover:bg-brand-blue hover:text-white transition-all"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                        <a
                          href="#"
                          className="flex items-center justify-center h-9 w-9 rounded-full bg-white/90 text-brand-blue hover:bg-brand-blue hover:text-white transition-all"
                          aria-label="Email"
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6 text-center">
                      <h3 className="font-heading text-lg font-bold text-brand-dark">{member.name}</h3>
                      <p className="mt-1 text-sm text-brand-blue font-medium">{member.role}</p>
                      <div className="mt-3 mx-auto h-0.5 w-10 rounded-full bg-brand-blue/30 group-hover:w-16 group-hover:bg-brand-blue transition-all duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute -left-5 top-1/2 -translate-y-1/2 flex items-center justify-center h-12 w-12 rounded-full bg-white border border-brand-blue/20 text-brand-dark shadow-md hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            disabled={current >= maxIndex}
            className="absolute -right-5 top-1/2 -translate-y-1/2 flex items-center justify-center h-12 w-12 rounded-full bg-white border border-brand-blue/20 text-brand-dark shadow-md hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2.5 mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-brand-blue' : 'w-2.5 bg-brand-blue/25 hover:bg-brand-blue/50'}`}
              aria-label={`Go to member ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
