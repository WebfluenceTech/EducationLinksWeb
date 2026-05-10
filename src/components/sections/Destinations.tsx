import { useState, useRef, useEffect } from 'react';
import { MapPin, ChevronLeft, ChevronRight, X, GraduationCap } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import TiltedCard from '../ui/TiltedCard';
import { DESTINATIONS, UNIVERSITIES_BY_COUNTRY } from '../../lib/constants';

type Destination = typeof DESTINATIONS[number];

function UniCard({ uni }: { uni: { name: string; domain: string } }) {
  const [src, setSrc] = useState(`https://logo.clearbit.com/${uni.domain}`);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (!failed) {
      setSrc(`https://www.google.com/s2/favicons?domain=${uni.domain}&sz=128`);
      setFailed(true);
    }
  };

  const initials = uni.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-brand-blue/30 hover:shadow-md hover:shadow-brand-blue/5 transition-all duration-200 group bg-white">
      {/* Logo */}
      <div className="shrink-0 h-12 w-12 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center overflow-hidden shadow-sm">
        {failed && src.includes('favicon') ? (
          <img src={src} alt={uni.name} className="h-8 w-8 object-contain" onError={() => setFailed(true)} />
        ) : !failed ? (
          <img src={src} alt={uni.name} className="h-10 w-10 object-contain p-1" onError={handleError} />
        ) : (
          <span className="text-brand-blue font-bold text-base">{initials}</span>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-brand-dark truncate group-hover:text-brand-blue transition-colors">
          {uni.name}
        </p>
        <p className="text-xs text-brand-gray mt-0.5">{uni.domain}</p>
      </div>

    </div>
  );
}

const REGIONS = ['All', 'Europe', 'North America', 'Middle East', 'Oceania'] as const;

const DESTINATION_IMAGES: Record<string, string> = {
  Finland:        'https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
  Sweden:         'https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
  Belgium:        'https://images.pexels.com/photos/174260/pexels-photo-174260.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
  Netherlands:    'https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
  France:         'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
  Denmark:        'https://images.pexels.com/photos/416024/pexels-photo-416024.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
  Ireland:        'https://images.pexels.com/photos/2382681/pexels-photo-2382681.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
  'North Cyprus': 'https://images.pexels.com/photos/3573351/pexels-photo-3573351.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
  'South Cyprus': 'https://images.pexels.com/photos/3573351/pexels-photo-3573351.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
  UK:             'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
  Canada:         'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
  USA:            'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
  UAE:            'https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
  Australia:      'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
};

const VISIBLE = 4;
const CARD_GAP = 24; // px — matches gap-6

export default function Destinations() {
  const [activeRegion, setActiveRegion] = useState<string>('All');
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Destination | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const filtered = activeRegion === 'All'
    ? DESTINATIONS
    : DESTINATIONS.filter((d) => d.region === activeRegion);

  const maxIndex = Math.max(filtered.length - VISIBLE, 0);

  const handleRegion = (region: string) => {
    setActiveRegion(region);
    setIndex(0);
  };

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  const translateX = `calc(-${index} * (100% / ${VISIBLE} + ${CARD_GAP / VISIBLE}px * (${VISIBLE} - 1) / ${VISIBLE}))`;

  return (
    <section id="destinations" className="scroll-offset section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Explore Your Dream Destination"
          subtitle="Study in world-class universities across 14+ countries. Find the perfect destination for your future."
        />

        {/* Filter + Controls row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {REGIONS.map((region) => (
              <button
                key={region}
                onClick={() => handleRegion(region)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeRegion === region
                    ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/20'
                    : 'bg-brand-light text-brand-gray hover:bg-gray-200'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={prev}
              disabled={index === 0}
              className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 bg-white text-brand-dark hover:border-brand-blue hover:text-brand-blue disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              disabled={index >= maxIndex}
              className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 bg-white text-brand-dark hover:border-brand-blue hover:text-brand-blue disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              gap: `${CARD_GAP}px`,
              transform: `translateX(${index === 0 ? '0px' : `-${index * (100 / VISIBLE)}%`})`,
            }}
          >
            {filtered.map((dest) => (
              <div
                key={dest.name}
                className="flex flex-col items-center gap-3 shrink-0 cursor-pointer group"
                style={{ width: `calc((100% - ${(VISIBLE - 1) * CARD_GAP}px) / ${VISIBLE})` }}
                onClick={() => setSelected(dest)}
              >
                <div className="w-full" style={{ height: '280px' }}>
                  <TiltedCard
                    imageSrc={DESTINATION_IMAGES[dest.name]}
                    altText={`Study in ${dest.name}`}
                    captionText={`${dest.flag} ${dest.name}`}
                    containerHeight="280px"
                    containerWidth="100%"
                    imageHeight="280px"
                    imageWidth="100%"
                    rotateAmplitude={10}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent px-4 py-4 rounded-b-2xl">
                        <p className="text-white font-bold text-sm">
                          {dest.flag} {dest.name}
                        </p>
                        <p className="text-white/75 text-xs flex items-center gap-1 mt-0.5">
                          <MapPin className="h-3 w-3 shrink-0" />
                          {dest.universities}+ Universities
                        </p>
                      </div>
                    }
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-brand-dark">{dest.name}</p>
                  <p className="text-xs text-brand-gray">{dest.region}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        {maxIndex > 0 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-6 bg-brand-blue' : 'w-2 bg-gray-200 hover:bg-gray-300'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* University drawer */}
      <div
        className={`fixed inset-0 z-50 flex transition-all duration-300 ${selected ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: selected ? 'rgba(0,0,0,0.5)' : 'transparent', backdropFilter: selected ? 'blur(4px)' : 'none' }}
        onClick={() => setSelected(null)}
      >
        <div
          className={`ml-auto h-full w-full max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-300 ${selected ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Hero banner */}
          <div className="relative h-52 shrink-0">
            {selected && (
              <img
                src={DESTINATION_IMAGES[selected.name]}
                alt={selected.name}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />

            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 h-9 w-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Country info */}
            {selected && (
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white text-3xl font-bold leading-tight">
                  {selected.flag} {selected.name}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="flex items-center gap-1.5 text-white/80 text-sm">
                    <GraduationCap className="h-4 w-4" />
                    {(UNIVERSITIES_BY_COUNTRY[selected.name] ?? []).length} Partner Universities
                  </span>
                  <span className="flex items-center gap-1.5 text-white/80 text-sm">
                    <MapPin className="h-4 w-4" />
                    {selected.region}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* University cards — min-h-0 is required for overflow-y-auto to work inside a flex child */}
          <div className="flex-1 min-h-0 overflow-y-auto px-5 py-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-gray mb-4">Partner Universities</p>

            {selected && (UNIVERSITIES_BY_COUNTRY[selected.name] ?? []).length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <GraduationCap className="h-12 w-12 text-brand-gray/30 mb-3" />
                <p className="text-brand-gray text-sm">No partner universities listed yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-3">
                {selected && (UNIVERSITIES_BY_COUNTRY[selected.name] ?? []).map((uni) => (
                  <UniCard key={uni.domain} uni={uni} />
                ))}
              </div>
            )}
          </div>

          {/* Footer CTA */}
          <div className="px-5 py-4 border-t border-gray-100 shrink-0">
            <button className="w-full py-3 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blue/90 transition-colors">
              Apply to a University in {selected?.name}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
