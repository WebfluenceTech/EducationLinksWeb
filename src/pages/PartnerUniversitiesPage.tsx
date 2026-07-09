import { useEffect } from 'react';
import { EducationSVG } from '../components/ui/EducationSVG';
import { FEATURED_PARTNER_UNIVERSITIES } from '../lib/constants';
import { UniLogoCard } from '../components/ui/UniLogoCard';
import InquiryForm from '../components/sections/InquiryForm';

/* ---------- page ---------- */
export default function PartnerUniversitiesPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  // group featured partners by country, preserving first-seen order
  const grouped: Record<string, typeof FEATURED_PARTNER_UNIVERSITIES> = {};
  FEATURED_PARTNER_UNIVERSITIES.forEach(u => {
    (grouped[u.country] ??= []).push(u);
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
        .font-nunito { font-family: 'Nunito', sans-serif; }
      `}</style>

      <div className="font-nunito min-h-screen bg-[#F8FAFC]">

        {/* ── Hero / Semi-circle header ── */}
        <div className="relative w-full pt-32 pb-40 mb-0 overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-full overflow-hidden"
            style={{ backgroundColor: '#2F95D0', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}
          >
            <EducationSVG className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full min-w-[1100px] text-white pointer-events-none" />
          </div>

          <div className="relative z-10 mx-auto px-4 max-w-3xl text-center mt-4">
            <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-3">Official Partners</p>
            <h1 className="text-[2.4rem] md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Our Partner Universities
            </h1>
            <p className="text-[1.05rem] text-white/85 max-w-xl mx-auto leading-relaxed">
              Institutions we partner with directly — students applying through us enjoy priority
              applications, faster offers and dedicated end-to-end support.
            </p>
          </div>
        </div>

        {/* ── Partner grid grouped by country ── */}
        <div className="relative z-10 mx-auto px-4 max-w-6xl mt-6 pb-24">
          {Object.entries(grouped).map(([country, unis]) => (
            <div key={country} className="mb-12">
              <div className="flex items-center gap-3 mb-5 border-b border-gray-200 pb-3">
                <h2 className="text-xl font-bold text-[#172B4D]">{country}</h2>
                <span className="ml-auto text-xs font-semibold text-[#5E6C84] bg-gray-100 px-3 py-1 rounded-full">
                  {unis.length} {unis.length === 1 ? 'University' : 'Universities'}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {unis.map(u => (
                  <UniLogoCard key={u.name} name={u.name} domain={u.domain} logoUrl={u.logoUrl} country={u.country} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <InquiryForm />
      </div>
    </>
  );
}
