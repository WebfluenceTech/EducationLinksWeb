import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Member = { name: string; role: string; img: string };

const CEO: Member = { name: 'Sidique Minhas', role: 'Founder & CEO', img: '/005.jpg' };

const MANAGERS: Member[] = [
  { name: 'Dilawar Hussain', role: 'Branch Manager Sialkot',       img: '/001.jpg' },
  { name: 'Basit Ahmed',     role: 'Manager Head Office Lahore',    img: '/006.jpg' },
  { name: 'Nadia Nazir',     role: 'Manager, Business Development', img: '/009.jpg' },
  { name: 'Saba Shafique',   role: 'Branch Manager DHA Lahore',     img: '/010.jpg' },
];

const SENIOR: Member[] = [
  { name: 'Usman Munir',     role: 'Senior Counseller & Visa Processing — Finland',   img: '/002.jpg' },
  { name: 'M. Rizwan Azeem', role: 'Senior Education Counseller & Visa Processing',   img: '/003.jpg' },
  { name: 'Abu Talha',       role: 'Senior Counseller & Visa Officer — UK & Ireland', img: '/004.jpg' },
];

const COUNSELLERS: Member[] = [
  { name: 'Noor Fatima', role: 'Student Counseller — Finland',          img: '/007.jpg' },
  { name: 'Maryam Khan', role: 'Student Counseller — France & Belgium', img: '/008.jpg' },
  { name: 'Sadia',       role: 'Student Counseller — Finland',          img: '/011.jpg' },
];

// ─── Card ─────────────────────────────────────────────────────────────────────

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="group flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-md border border-gray-100 hover:border-brand-blue/30 transition-all duration-300 h-full">
      <div className="relative overflow-hidden flex-1 bg-gray-50 min-h-[140px]">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-contain object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="px-3 py-2 text-center shrink-0 border-t border-gray-100">
        <h3 className="font-heading font-bold text-brand-dark text-xs md:text-sm leading-tight">{member.name}</h3>
        <p className="mt-0.5 text-[10px] text-brand-blue font-medium leading-tight line-clamp-2">{member.role}</p>
        <div className="mt-1.5 flex items-center gap-1 justify-center">
          <span className="block h-0.5 w-5 rounded-full bg-brand-red group-hover:w-7 transition-all duration-300" />
          <span className="block h-0.5 w-1.5 rounded-full bg-brand-blue" />
        </div>
      </div>
    </div>
  );
}

// ─── Carousel ─────────────────────────────────────────────────────────────────

function Carousel({ members, perPage, interval = 3500 }: { members: Member[]; perPage: number; interval?: number }) {
  const [idx, setIdx] = useState(0);
  const max = Math.max(0, members.length - perPage);

  const prev = useCallback(() => setIdx(i => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIdx(i => Math.min(max, i + 1)), [max]);

  useEffect(() => {
    if (max === 0) return;
    const id = setInterval(() => setIdx(i => (i >= max ? 0 : i + 1)), interval);
    return () => clearInterval(id);
  }, [max, interval]);

  return (
    <div className="flex flex-col gap-1.5 h-full">
      <div className="overflow-hidden flex-1">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(idx / perPage) * 100}%)` }}
        >
          {members.map(m => (
            <div key={m.name} className="shrink-0 px-1" style={{ width: `${100 / perPage}%` }}>
              <MemberCard member={m} />
            </div>
          ))}
        </div>
      </div>

      {max > 0 && (
        <div className="flex items-center justify-center gap-2 shrink-0">
          <button onClick={prev} disabled={idx === 0}
            className="flex items-center justify-center h-6 w-6 bg-white border border-brand-blue/20 text-brand-dark shadow-sm hover:bg-brand-blue hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronLeft className="h-3 w-3" />
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: max + 1 }).map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className={`h-1 rounded-full transition-all duration-300 ${i === idx ? 'w-4 bg-brand-blue' : 'w-1 bg-brand-blue/25'}`} />
            ))}
          </div>
          <button onClick={next} disabled={idx >= max}
            className="flex items-center justify-center h-6 w-6 bg-white border border-brand-blue/20 text-brand-dark shadow-sm hover:bg-brand-blue hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronRight className="h-3 w-3" />
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Tier label ───────────────────────────────────────────────────────────────

function TierLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-brand-blue bg-brand-blue/8 border border-brand-blue/20 px-2.5 py-0.5 rounded-full whitespace-nowrap">
        {text}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-brand-blue/20 to-transparent" />
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function Team() {
  return (
    <section className="section-padding bg-white overflow-hidden w-full">
      <div className="container-custom flex flex-col gap-4 h-full">

        {/* Compact heading */}
        <div className="text-center shrink-0">
          <p className="text-brand-blue text-[10px] font-bold uppercase tracking-widest mb-1">The People Behind Your Success</p>
          <h2 className="font-heading font-bold text-brand-dark text-2xl md:text-3xl lg:text-4xl leading-tight">
            Meet Our Team
          </h2>
          <div className="flex items-center gap-1.5 justify-center mt-2">
            <span className="block h-1 w-8 rounded-full bg-brand-red" />
            <span className="block h-1 w-3 rounded-full bg-brand-blue" />
          </div>
        </div>

        {/* ── Main layout: CEO left | 3 carousel rows right ── */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-4 md:gap-6 min-h-0">

          {/* LEFT — CEO tall card */}
          <div className="group bg-white overflow-hidden shadow-md hover:shadow-xl border border-gray-100 hover:border-brand-blue/30 transition-all duration-300 flex flex-col h-full relative">
            {/* CEO badge */}
            <span className="absolute top-3 left-3 z-10 bg-brand-blue text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow">
              CEO
            </span>
            {/* Full-height image */}
            <div className="flex-1 relative overflow-hidden bg-gray-50 min-h-[200px]">
              <img
                src={CEO.img}
                alt={CEO.name}
                className="w-full h-full object-contain object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Name at bottom */}
            <div className="px-4 py-3 shrink-0 border-t border-gray-100 text-center">
              <h3 className="font-heading font-bold text-brand-dark text-sm md:text-base">{CEO.name}</h3>
              <p className="text-xs text-brand-blue font-medium mt-0.5">{CEO.role}</p>
              <div className="mt-2 flex items-center gap-1 justify-center">
                <span className="block h-0.5 w-8 rounded-full bg-brand-red group-hover:w-10 transition-all duration-300" />
                <span className="block h-0.5 w-3 rounded-full bg-brand-blue" />
              </div>
            </div>
          </div>

          {/* RIGHT — 3 stacked carousel rows */}
          <div className="flex flex-col gap-3 min-h-0 h-full">

            {/* Row 1 — Managers */}
            <div className="flex-1 flex flex-col gap-1.5 min-h-0">
              <TierLabel text="Management" />
              <div className="flex-1 min-h-0">
                <Carousel members={MANAGERS} perPage={2} interval={3200} />
              </div>
            </div>

            {/* Divider */}
            <div className="shrink-0 h-px bg-gray-100" />

            {/* Row 2 — Senior Counsellers */}
            <div className="flex-1 flex flex-col gap-1.5 min-h-0">
              <TierLabel text="Senior Counsellers & Visa Processing Officers" />
              <div className="flex-1 min-h-0">
                <Carousel members={SENIOR} perPage={3} interval={3800} />
              </div>
            </div>

            {/* Divider */}
            <div className="shrink-0 h-px bg-gray-100" />

            {/* Row 3 — Student Counsellers */}
            <div className="flex-1 flex flex-col gap-1.5 min-h-0">
              <TierLabel text="Student Counsellers" />
              <div className="flex-1 min-h-0">
                <Carousel members={COUNSELLERS} perPage={3} interval={4200} />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
