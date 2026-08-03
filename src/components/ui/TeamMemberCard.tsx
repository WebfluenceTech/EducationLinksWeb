import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export type TeamMember = {
  name: string;
  role: string;
  img: string;
  bio?: string;
};

const DEFAULT_BIO =
  'Dedicated professional committed to helping students achieve their international education goals with personalised guidance.';

// ─── Single card — fixed 1:1 image ratio, consistent height everywhere ────────

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-300 overflow-hidden">
      {/* Photo — always square, same size on every card */}
      <div className="m-3 mb-0 overflow-hidden bg-brand-blue/5 shrink-0" style={{ aspectRatio: '1 / 1' }}>
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover object-top"
          style={{ transform: 'translateZ(0)' }}
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col px-4 pt-3 pb-4 gap-2">
        {/* Name left, role right — same row */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading font-bold text-brand-dark text-sm leading-tight">{member.name}</h3>
          <span className="text-brand-blue text-[11px] font-semibold shrink-0 text-right leading-tight">{member.role}</span>
        </div>

        {/* Bio */}
        <p className="text-brand-gray text-xs leading-relaxed line-clamp-3">
          {member.bio ?? DEFAULT_BIO}
        </p>

      </div>
    </div>
  );
}

// ─── Responsive layout ────────────────────────────────────────────────────────
// Mobile/tablet (< lg): single-card carousel with arrows + dots
// Desktop (≥ lg): full CSS grid, all cards visible at once

const COLS_CLASS: Record<number, string> = {
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
};

export function TeamGrid({ members, cols = 3 }: { members: TeamMember[]; cols?: 3 | 4 }) {
  const [idx, setIdx] = useState(0);
  const max = members.length - 1;

  const prev = useCallback(() => setIdx(i => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIdx(i => Math.min(max, i + 1)), [max]);

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i >= max ? 0 : i + 1)), 3500);
    return () => clearInterval(id);
  }, [max]);

  return (
    <>
      {/* ── Mobile carousel (hidden on lg+) ── */}
      <div className="lg:hidden">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {members.map(m => (
              <div key={m.name} className="shrink-0 w-full px-1">
                <TeamMemberCard member={m} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-4">
          <button onClick={prev} disabled={idx === 0}
            className="flex items-center justify-center h-8 w-8 bg-white border border-brand-blue/20 shadow-sm hover:bg-brand-blue hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-1.5">
            {members.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'w-5 bg-brand-blue' : 'w-1.5 bg-brand-blue/25'}`} />
            ))}
          </div>
          <button onClick={next} disabled={idx >= max}
            className="flex items-center justify-center h-8 w-8 bg-white border border-brand-blue/20 shadow-sm hover:bg-brand-blue hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* ── Desktop grid (hidden below lg) ── */}
      <div className={`hidden lg:grid ${COLS_CLASS[cols] ?? 'lg:grid-cols-3'} gap-5 md:gap-6`}>
        {members.map(m => (
          <TeamMemberCard key={m.name} member={m} />
        ))}
      </div>
    </>
  );
}
