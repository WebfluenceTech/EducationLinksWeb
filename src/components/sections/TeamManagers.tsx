import { TeamGrid } from '../ui/TeamMemberCard';
import type { TeamMember } from '../ui/TeamMemberCard';

const MANAGERS: TeamMember[] = [
  { name: 'Dilawar Hussain', role: 'Branch Manager Sialkot',       img: '/001.jpg', bio: 'Leading our Sialkot branch with dedication, ensuring every student receives top-tier guidance and placement support.' },
  { name: 'Basit Ahmed',     role: 'Manager Head Office Lahore',    img: '/006.jpg', bio: 'Overseeing head office operations in Lahore, driving excellence in student services and team performance.' },
  { name: 'Nadia Nazir',     role: 'Manager, Business Development', img: '/009.jpg', bio: 'Expanding our partnerships and outreach to bring more opportunities and university connections to our students.' },
  { name: 'Saba Shafique',   role: 'Branch Manager DHA Lahore',     img: '/010.jpg', bio: 'Managing the DHA Lahore branch with a focus on personalised counselling and exceptional student outcomes.' },
];

export default function TeamManagers() {
  return (
    <section
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
            Management Team
          </h2>
          <div className="flex items-center gap-1.5 justify-center mt-3">
            <span className="block h-1 w-8 rounded-full bg-brand-red" />
            <span className="block h-1 w-3 rounded-full bg-brand-blue" />
          </div>
          <p className="mt-3 text-brand-gray text-sm md:text-base max-w-xl mx-auto">
            Experienced managers driving excellence across our offices nationwide.
          </p>
        </div>

        <TeamGrid members={MANAGERS} cols={4} />
      </div>
    </section>
  );
}
