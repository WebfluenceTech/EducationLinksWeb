import { TeamGrid } from '../ui/TeamMemberCard';
import type { TeamMember } from '../ui/TeamMemberCard';

const SENIOR: TeamMember[] = [
  { name: 'Usman Munir',     role: 'Senior Counseller & Visa Processing', img: '/002.webp', bio: 'Specialising in Ireland, Usman has guided hundreds of students through successful university admissions and visa approvals.' },
  { name: 'M. Rizwan Azeem', role: 'Senior Education Counseller',         img: '/003.webp', bio: 'Expert in admissions and visa processing, Rizwan ensures a seamless journey from application to departure.' },
  { name: 'Abu Talha',       role: 'Senior Counseller — UK & Ireland',    img: '/004.webp', bio: 'Specialising in UK and Ireland pathways, Abu Talha brings deep expertise in visa processing and university selection.' },
];

export default function TeamSenior() {
  return (
    <section id="senior" className="section-padding overflow-hidden w-full h-full flex items-center relative" style={{ background: 'linear-gradient(135deg, #e8f4fd 0%, #f5fbff 40%, #ffffff 65%, #fde8ea 100%)' }}>
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-red" />
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl opacity-20" style={{ background: 'rgba(3,149,218,0.25)' }} />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full blur-3xl opacity-15" style={{ background: 'rgba(232,40,48,0.18)' }} />

      <div className="container-custom relative z-10 w-full">
        <div className="text-center mb-8 md:mb-10">
          <p className="text-brand-blue text-xs font-bold uppercase tracking-widest mb-2">Meet Our Team</p>
          <h2 className="font-heading font-bold text-brand-dark text-3xl md:text-4xl lg:text-5xl leading-tight">
            Senior Counsellers &amp;<br className="hidden md:block" /> Visa Processing Officers
          </h2>
          <div className="flex items-center gap-1.5 justify-center mt-3">
            <span className="block h-1 w-8 rounded-full bg-brand-red" />
            <span className="block h-1 w-3 rounded-full bg-brand-blue" />
          </div>
          <p className="mt-3 text-brand-gray text-sm md:text-base max-w-xl mx-auto">
            Specialists dedicated to seamless university admissions and visa approvals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <TeamGrid members={SENIOR} cols={3} />
        </div>
      </div>
    </section>
  );
}
