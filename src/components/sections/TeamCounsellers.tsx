import { TeamGrid } from '../ui/TeamMemberCard';
import type { TeamMember } from '../ui/TeamMemberCard';

const COUNSELLERS: TeamMember[] = [
  { name: 'Noor Fatima', role: 'Student Counseller — Finland',          img: '/007.jpg', bio: 'Helping students navigate Finnish universities with expert advice on applications, scholarships, and student life.' },
  { name: 'Maryam Khan', role: 'Student Counseller — France & Belgium', img: '/008.jpg', bio: 'Guiding students to top universities in France and Belgium, with a passion for European education pathways.' },
  { name: 'Sadia',       role: 'Student Counseller — Finland',          img: '/011.jpg', bio: 'Committed to making the Finland study journey smooth and successful for every student she works with.' },
];

export default function TeamCounsellers() {
  return (
    <section
      id="counsellers"
      className="section-padding overflow-hidden w-full h-full flex items-center relative"
      style={{ background: 'linear-gradient(135deg, #c8e8f9 0%, #eaf6ff 35%, #ffffff 65%, #fcd6d8 100%)' }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle, #0395DA22 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-red" />

      <div className="container-custom relative z-10 w-full">
        <div className="text-center mb-8 md:mb-10">
          <p className="text-brand-blue text-xs font-bold uppercase tracking-widest mb-2">Meet Our Team</p>
          <h2 className="font-heading font-bold text-brand-dark text-3xl md:text-4xl lg:text-5xl leading-tight">
            Student Counsellers
          </h2>
          <div className="flex items-center gap-1.5 justify-center mt-3">
            <span className="block h-1 w-8 rounded-full bg-brand-red" />
            <span className="block h-1 w-3 rounded-full bg-brand-blue" />
          </div>
          <p className="mt-3 text-brand-gray text-sm md:text-base max-w-xl mx-auto">
            Passionate advisors committed to guiding every student to their ideal destination.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <TeamGrid members={COUNSELLERS} cols={3} />
        </div>
      </div>
    </section>
  );
}
