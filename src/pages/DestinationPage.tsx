import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { MapPin, GraduationCap, ArrowLeft, Globe } from 'lucide-react';
import { DESTINATIONS, UNIVERSITIES_BY_COUNTRY, DESTINATION_IMAGES } from '../lib/constants';
import { UniLogoCard } from '../components/ui/UniLogoCard';
import InquiryForm from '../components/sections/InquiryForm';

export default function DestinationPage() {
  const { countryName } = useParams<{ countryName: string }>();
  const navigate = useNavigate();

  const dest = DESTINATIONS.find(
    (d) => d.name.toLowerCase() === (countryName ?? '').toLowerCase()
  );

  useEffect(() => { window.scrollTo(0, 0); }, [countryName]);

  if (!dest) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC] text-center px-4">
        <p className="text-6xl mb-4">🌍</p>
        <h1 className="text-3xl font-bold text-[#172B4D] mb-2">Destination Not Found</h1>
        <p className="text-[#5E6C84] mb-8">We couldn't find a destination matching "{countryName}".</p>
        <Link to="/#destinations" className="px-6 py-3 bg-[#2F95D0] text-white rounded-xl font-semibold hover:bg-[#2580bb] transition-colors">
          Browse All Destinations
        </Link>
      </div>
    );
  }

  const universities = UNIVERSITIES_BY_COUNTRY[dest.name] ?? [];
  const heroImg = DESTINATION_IMAGES[dest.name];

  return (
    <>
      {/* ── Hero ── */}
      <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden mt-16 md:mt-[116px]">
        {/* Background photo */}
        {heroImg && (
          <img
            src={heroImg.replace('w=500&h=400', 'w=1600&h=700')}
            alt={dest.name}
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
          Back
        </button>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 md:px-16">
          <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-2">
            {dest.region}
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            {dest.flag} {dest.name}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-white/80 text-sm">
            <span className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              {universities.length} Partner Universities
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {dest.region}
            </span>
            <span className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              International Students Welcome
            </span>
          </div>
        </div>
      </div>

      {/* ── Quick stats strip ── */}
      <div className="bg-[#2F95D0] text-white">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap gap-8 items-center justify-between">
          <p className="text-lg font-bold tracking-tight">
            Study in {dest.name} — Find Your Perfect University
          </p>
          <a
            href="#inquiry"
            className="shrink-0 px-6 py-2.5 bg-white text-[#2F95D0] font-bold text-sm rounded-xl hover:bg-gray-100 transition-colors shadow"
          >
            Apply Now →
          </a>
        </div>
      </div>

      {/* ── Universities section ── */}
      <div className="bg-[#F8FAFC] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{dest.flag}</span>
            <h2 className="text-2xl font-extrabold text-[#172B4D]">
              Partner Universities in {dest.name}
            </h2>
          </div>
          <p className="text-[#5E6C84] mb-10 ml-12">
            {universities.length} universities ready to welcome you
          </p>

          {universities.length === 0 ? (
            <div className="text-center py-24 text-[#5E6C84]">
              <GraduationCap className="mx-auto mb-4 h-12 w-12 text-gray-300" />
              <p className="text-lg font-semibold">No universities listed yet.</p>
              <p className="text-sm mt-1">Check back soon or contact us for more information.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {universities.map((u) => (
                <UniLogoCard
                  key={u.name}
                  name={u.name}
                  domain={u.domain}
                  logoUrl={u.logoUrl}
                  country={dest.name}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Inquiry form ── */}
      <InquiryForm />
    </>
  );
}
