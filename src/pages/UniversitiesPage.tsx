import { useEffect, useState } from 'react';
import { Search, GraduationCap } from 'lucide-react';
import { EducationSVG } from '../components/ui/EducationSVG';
import { DESTINATIONS, UNIVERSITIES_BY_COUNTRY } from '../lib/constants';
import InquiryForm from '../components/sections/InquiryForm';
import { UniLogoCard } from '../components/ui/UniLogoCard';
import PageHero from '../components/ui/PageHero';

export default function UniversitiesPage() {
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const allEntries = DESTINATIONS.flatMap(dest =>
    (UNIVERSITIES_BY_COUNTRY[dest.name] ?? []).map(uni => ({
      ...uni,
      country: dest.name,
      flag: dest.flag,
    }))
  );

  const filtered = allEntries.filter(u => {
    const matchCountry = selectedCountry === 'All' || u.country === selectedCountry;
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase());
    return matchCountry && matchSearch;
  });

  const grouped: Record<string, typeof filtered> = {};
  filtered.forEach(u => {
    if (!grouped[u.country]) grouped[u.country] = [];
    grouped[u.country].push(u);
  });

  const totalCount = filtered.length;
  const countryLabel = selectedCountry === 'All' ? 'All Countries' : selectedCountry;

  const selectClass =
    "uni-select w-full border border-line rounded-xl px-4 py-3 text-ink text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white cursor-pointer";

  return (
    <div className="min-h-screen bg-canvas">
      <style>{`
        .uni-select { appearance: none; -webkit-appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%233E5879' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; padding-right: 40px; }
      `}</style>

      <PageHero
        eyebrow="Our network"
        title={<>List of top universities<br />to study abroad</>}
        subtitle="Choose a university that fuels your passion & purpose and quenches your academic & career pursuits."
        decoration={<EducationSVG className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full min-w-[1100px] text-white/90 pointer-events-none" />}
      />

      {/* Country filter card */}
      <div className="relative z-10 -mt-16 mx-auto px-4 max-w-2xl">
        <div className="card-surface shadow-card p-7">
          <h2 className="text-center font-heading text-lg font-bold text-ink mb-5">Select country</h2>
          <select
            value={selectedCountry}
            onChange={e => setSelectedCountry(e.target.value)}
            className={selectClass}
          >
            <option value="All">All countries</option>
            {DESTINATIONS.map(d => (
              <option key={d.name} value={d.name}>{d.flag} {d.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results bar + search */}
      <div className="mx-auto px-4 max-w-6xl mt-10 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-sm text-ink-muted">
          Showing <span className="font-bold text-ink">{totalCount}</span> {totalCount === 1 ? 'university' : 'universities'} in{' '}
          <span className="font-bold text-primary">{countryLabel}</span>
        </p>
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Search universities…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full border border-line rounded-xl pl-4 pr-10 py-2.5 text-sm text-ink placeholder-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted" />
        </div>
      </div>

      {/* University grid */}
      <div className="mx-auto px-4 max-w-6xl pb-24">
        {Object.keys(grouped).length === 0 ? (
          <div className="text-center py-24 text-ink-muted">
            <GraduationCap className="mx-auto mb-4 h-12 w-12 text-line" />
            <p className="text-lg font-semibold text-ink">No universities found</p>
            <p className="text-sm mt-1">Try adjusting your search or country filter</p>
          </div>
        ) : (
          Object.entries(grouped).map(([country, unis]) => {
            const dest = DESTINATIONS.find(d => d.name === country);
            return (
              <div key={country} className="mb-12">
                <div className="flex items-center gap-3 mb-5 border-b border-line pb-3">
                  <span className="text-2xl">{dest?.flag}</span>
                  <h2 className="font-heading text-xl font-bold text-ink">{country}</h2>
                  <span className="ml-auto text-xs font-semibold text-ink-muted bg-white border border-line px-3 py-1 rounded-full">
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
  );
}
