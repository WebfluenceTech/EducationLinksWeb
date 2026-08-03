import React, { useEffect } from 'react';
import { SkylineSVG } from '../components/ui/SkylineSVG';

const TEAM_HIERARCHY = [
  {
    category: 'Founder & CEO',
    members: [
      { name: 'Sidique Minhas', role: 'Founder & CEO', img: '/005.webp', color: '#FFC400' } // Yellow
    ]
  },
  {
    category: 'Management Team',
    members: [
      { name: 'Dilawar Hussain', role: 'Branch Manager Sialkot', img: '/001.webp', color: '#00E676' }, // Green
      { name: 'Basit Ahmed', role: 'Manager Head Office Lahore', img: '/006.webp', color: '#FF8A65' }, // Salmon
      { name: 'Nadia Nazir', role: 'Manager, Business Development', img: '/009.webp', color: '#1DE9B6' }, // Mint
      { name: 'Saba Shafique', role: 'Branch Manager DHA Lahore', img: '/010.webp', color: '#2979FF' } // Blue
    ]
  },
  {
    category: 'Senior Counsellers & Visa Processing Officers',
    members: [
      { name: 'Usman Munir', role: 'Senior Counseller & Visa Processing', img: '/002.webp', color: '#FFC400' },
      { name: 'M. Rizwan Azeem', role: 'Senior Education Counseller', img: '/003.webp', color: '#FF8A65' },
      { name: 'Abu Talha', role: 'Senior Counseller — UK & Ireland', img: '/004.webp', color: '#00E676' },
    ]
  },
  {
    category: 'Student Counsellers',
    members: [
      { name: 'Noor Fatima', role: 'Student Counseller — Finland', img: '/007.webp', color: '#2979FF' },
      { name: 'Maryam Khan', role: 'Student Counseller — France & Belgium', img: '/008.webp', color: '#1DE9B6' },
      { name: 'Sadia', role: 'Student Counseller — Finland', img: '/011.webp', color: '#FFC400' },
    ]
  }
];

export default function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
        .font-nunito {
          font-family: 'Nunito', sans-serif;
        }
      `}</style>
      <div className="font-nunito min-h-screen bg-white">
        {/* Curved Header Background */}
        <div className="relative w-full pt-44 pb-52 mb-16 overflow-hidden">
          {/* The actual curve */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-full overflow-hidden" 
            style={{ backgroundColor: '#2F95D0', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}
          >
            <SkylineSVG className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full min-w-[1100px] text-white pointer-events-none" />
          </div>

          {/* Content */}
          <div className="container-custom relative z-10 mx-auto px-4 max-w-6xl text-center mt-8">
            <h1 className="text-[2.5rem] md:text-5xl font-bold text-white mb-4">Our leadership team</h1>
            <p className="text-[1.1rem] text-white/90 max-w-2xl mx-auto">
              With over 17+ years of combined experience, we've got a well-seasoned team at the helm.
            </p>
          </div>
        </div>


        <div className="container-custom mx-auto px-4 max-w-6xl text-center pb-20">

          {TEAM_HIERARCHY.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-24 last:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-[#172B4D] mb-8 text-left border-b border-gray-100 pb-4">
                {group.category}
              </h2>

              {/* CEO row: photo left, quote right */}
              {groupIndex === 0 ? (
                <div className="flex flex-col sm:flex-row gap-10 items-start">
                  {group.members.map((member, i) => (
                    <div key={i} className="flex flex-col text-left group w-full sm:w-72 flex-shrink-0">
                      <div
                        className="w-full aspect-square overflow-hidden mb-5 relative"
                        style={{ backgroundColor: member.color }}
                      >
                        <img
                          src={member.img}
                          alt={member.name}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-[#172B4D] mb-1.5">{member.name}</h3>
                      <p className="text-[11px] font-bold text-[#5E6C84] uppercase tracking-[0.05em]">{member.role}</p>
                    </div>
                  ))}
                  {/* Founder Quote */}
                  <div className="flex flex-col justify-center text-left pt-4">
                    <p className="text-[#172B4D] text-lg leading-relaxed mb-4">
                      "Education is the most powerful tool you can use to change the world — and we exist to make sure every student gets access to the best of it, no matter where they come from."
                    </p>
                    <p className="text-[#5E6C84] text-sm">
                      — Sidique Minhas, Founder & CEO
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                  {group.members.map((member, i) => (
                    <div key={i} className="flex flex-col text-left group">
                      <div
                        className="w-full aspect-square overflow-hidden mb-5 relative"
                        style={{ backgroundColor: member.color }}
                      >
                        <img
                          src={member.img}
                          alt={member.name}
                          className="w-full h-full object-cover object-top mix-blend-normal transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-[#172B4D] mb-1.5">{member.name}</h3>
                      <p className="text-[11px] font-bold text-[#5E6C84] uppercase tracking-[0.05em]">{member.role}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
