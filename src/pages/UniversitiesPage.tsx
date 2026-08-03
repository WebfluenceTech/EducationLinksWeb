import React, { useEffect, useState } from 'react';
import { EducationSVG } from '../components/ui/EducationSVG';
import { DESTINATIONS, UNIVERSITIES_BY_COUNTRY, FEATURED_PARTNER_UNIVERSITIES } from '../lib/constants';
import InquiryForm from '../components/sections/InquiryForm';
import { UniLogoCard } from '../components/ui/UniLogoCard';

/* ---------- page ---------- */
export default function UniversitiesPage({ defaultCountry }: { defaultCountry?: string }) {
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry ?? 'All');
  const [search, setSearch] = useState('');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Keep the filter in sync when navigating between country-specific routes
  // (e.g. /finland -> /ireland) without a full remount.
  useEffect(() => { setSelectedCountry(defaultCountry ?? 'All'); }, [defaultCountry]);

  // build flat list of { country, flag, ...uni }.
  // Partner universities are merged into their matching country (deduped by
  // domain/name) so any school featured as a partner also appears in the
  // filterable country list below — automatically, for future additions too.
  const allEntries = DESTINATIONS.flatMap(dest => {
    const merged = [...(UNIVERSITIES_BY_COUNTRY[dest.name] ?? [])];
    FEATURED_PARTNER_UNIVERSITIES
      .filter(p => p.country === dest.name)
      .forEach(p => {
        if (!merged.some(u => u.domain === p.domain || u.name === p.name)) {
          merged.push({ name: p.name, domain: p.domain, logoUrl: p.logoUrl });
        }
      });
    return merged.map(uni => ({
      ...uni,
      country: dest.name,
      flag: dest.flag,
    }));
  });

  const filtered = allEntries.filter(u => {
    const matchCountry = selectedCountry === 'All' || u.country === selectedCountry;
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase());
    return matchCountry && matchSearch;
  });

  // group by country for display
  const grouped: Record<string, typeof filtered> = {};
  filtered.forEach(u => {
    if (!grouped[u.country]) grouped[u.country] = [];
    grouped[u.country].push(u);
  });

  const totalCount = filtered.length;
  const countryLabel = selectedCountry === 'All' ? 'All Countries' : selectedCountry;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
        .font-nunito { font-family: 'Nunito', sans-serif; }
        .uni-select { appearance: none; -webkit-appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235E6C84' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; padding-right: 40px; }
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
            <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-3">Our Network</p>
            <h1 className="text-[2.4rem] md:text-5xl font-extrabold text-white mb-4 leading-tight">
              {defaultCountry ? (
                <>Top Universities<br />in {defaultCountry}</>
              ) : (
                <>List of Top Universities<br />To Study Abroad</>
              )}
            </h1>
            <p className="text-[1.05rem] text-white/85 max-w-xl mx-auto leading-relaxed">
              {defaultCountry
                ? `Explore our partner universities in ${defaultCountry} and find the program that fuels your passion & purpose.`
                : 'Choose a university that fuels your passion & purpose and that quenches your academic & career pursuits.'}
            </p>
          </div>
        </div>

        {/* ── Country Filter Card ── */}
        <div className="relative z-10 -mt-12 mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <h2 className="text-center text-lg font-bold text-[#172B4D] mb-5">Select Country</h2>
            <select
              value={selectedCountry}
              onChange={e => setSelectedCountry(e.target.value)}
              className="uni-select w-full border border-gray-200 rounded-xl px-4 py-3 text-[#172B4D] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2F95D0]/40 bg-white cursor-pointer"
            >
              <option value="All">All</option>
              {DESTINATIONS.map(d => (
                <option key={d.name} value={d.name}>
                  {d.flag} {d.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ── Results bar + Search ── */}
        <div className="mx-auto px-4 max-w-6xl mt-14 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-[#5E6C84]">
            Showing <span className="font-bold text-[#172B4D]">{totalCount}</span> {totalCount === 1 ? 'university' : 'universities'} in{' '}
            <span className="font-bold text-[#2F95D0]">{countryLabel}</span>
          </p>
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search Universities…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full border border-gray-200 rounded-xl pl-4 pr-10 py-2.5 text-sm text-[#172B4D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2F95D0]/40 bg-white"
            />
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" strokeWidth="2" />
              <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* ── University grid ── */}
        <div className="mx-auto px-4 max-w-6xl pb-24">
          {Object.keys(grouped).length === 0 ? (
            <div className="text-center py-24 text-[#5E6C84]">
              <svg className="mx-auto mb-4 h-12 w-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422A12.083 12.083 0 0121 13c0 5.523-4.477 10-9 10S3 18.523 3 13c0-.538.072-1.059.206-1.553L12 14z"/>
              </svg>
              <p className="text-lg font-semibold">No universities found</p>
              <p className="text-sm mt-1">Try adjusting your search or country filter</p>
            </div>
          ) : (
            Object.entries(grouped).map(([country, unis]) => {
              const dest = DESTINATIONS.find(d => d.name === country);
              return (
                <div key={country} className="mb-12">
                  <div className="flex items-center gap-3 mb-5 border-b border-gray-200 pb-3">
                    <span className="text-2xl">{dest?.flag}</span>
                    <h2 className="text-xl font-bold text-[#172B4D]">{country}</h2>
                    <span className="ml-auto text-xs font-semibold text-[#5E6C84] bg-gray-100 px-3 py-1 rounded-full">
                      {unis.length} {unis.length === 1 ? 'University' : 'Universities'}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {unis.map(u => (
                      <UniLogoCard key={u.name} name={u.name} domain={u.domain} logoUrl={u.logoUrl} country={country} />
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
        <InquiryForm />
      </div>
    </>
  );
}
