import { useEffect } from 'react';
import { Quote } from 'lucide-react';
import { SkylineSVG } from '../components/ui/SkylineSVG';
import PageHero from '../components/ui/PageHero';

const TEAM_HIERARCHY = [
  {
    category: 'Founder & CEO',
    members: [
      { name: 'Sidique Minhas', role: 'Founder & CEO', img: '/005.jpg', color: '#FFC400' },
    ],
  },
  {
    category: 'Management Team',
    members: [
      { name: 'Dilawar Hussain', role: 'Branch Manager Sialkot', img: '/001.jpg', color: '#00E676' },
      { name: 'Basit Ahmed', role: 'Manager Head Office Lahore', img: '/006.jpg', color: '#FF8A65' },
      { name: 'Nadia Nazir', role: 'Manager, Business Development', img: '/009.jpg', color: '#1DE9B6' },
      { name: 'Saba Shafique', role: 'Branch Manager DHA Lahore', img: '/010.jpg', color: '#2979FF' },
    ],
  },
  {
    category: 'Senior Counsellers & Visa Processing Officers',
    members: [
      { name: 'Usman Munir', role: 'Senior Counseller & Visa Processing', img: '/002.jpg', color: '#FFC400' },
      { name: 'M. Rizwan Azeem', role: 'Senior Education Counseller', img: '/003.jpg', color: '#FF8A65' },
      { name: 'Abu Talha', role: 'Senior Counseller — UK & Ireland', img: '/004.jpg', color: '#00E676' },
    ],
  },
  {
    category: 'Student Counsellers',
    members: [
      { name: 'Noor Fatima', role: 'Student Counseller — Finland', img: '/007.jpg', color: '#2979FF' },
      { name: 'Maryam Khan', role: 'Student Counseller — France & Belgium', img: '/008.jpg', color: '#1DE9B6' },
      { name: 'Sadia', role: 'Student Counseller — Finland', img: '/011.jpg', color: '#FFC400' },
    ],
  },
];

function MemberCard({ member }: { member: { name: string; role: string; img: string; color: string } }) {
  return (
    <div className="flex flex-col text-left group">
      <div
        className="w-full aspect-square overflow-hidden rounded-2xl mb-4 relative shadow-soft border border-line"
        style={{ backgroundColor: member.color }}
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>
      <h3 className="font-heading text-lg font-bold text-ink mb-1">{member.name}</h3>
      <p className="text-[11px] font-bold text-ink-muted uppercase tracking-[0.06em]">{member.role}</p>
    </div>
  );
}

export default function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="Meet the team"
        title="Our leadership team"
        subtitle="With over 17+ years of combined experience, we've got a well-seasoned team at the helm."
        decoration={<SkylineSVG className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full min-w-[1100px] text-white/90 pointer-events-none" />}
      />

      <div className="container-custom max-w-6xl pb-24 -mt-8">
        {TEAM_HIERARCHY.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-20 last:mb-0">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-ink mb-8 text-left border-b border-line pb-4">
              {group.category}
            </h2>

            {groupIndex === 0 ? (
              <div className="flex flex-col sm:flex-row gap-10 items-start">
                {group.members.map((member, i) => (
                  <div key={i} className="w-full sm:w-72 flex-shrink-0">
                    <MemberCard member={member} />
                  </div>
                ))}
                {/* Founder quote */}
                <div className="flex flex-col justify-center text-left pt-2 flex-1 rounded-3xl bg-canvas border border-line p-7 shadow-soft">
                  <Quote className="h-8 w-8 text-primary/30 mb-3" />
                  <p className="text-ink text-lg leading-relaxed mb-4">
                    "Education is the most powerful tool you can use to change the world — and we exist to make sure every student gets access to the best of it, no matter where they come from."
                  </p>
                  <p className="text-ink-muted text-sm font-medium">— Sidique Minhas, Founder &amp; CEO</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                {group.members.map((member, i) => (
                  <MemberCard key={i} member={member} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
