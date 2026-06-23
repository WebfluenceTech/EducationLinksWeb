import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import TiltedCard from '../ui/TiltedCard';
import { DESTINATIONS, DESTINATION_IMAGES } from '../../lib/constants';


const REGIONS = ['All', 'Europe', 'North America', 'Middle East', 'Oceania', 'Asia'] as const;
const CARD_GAP = 24;

function useVisibleCount() {
  const [count, setCount] = useState(() =>
    window.innerWidth < 640 ? 1 : window.innerWidth < 900 ? 2 : window.innerWidth < 1200 ? 3 : 4
  );
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCount(1);
      else if (window.innerWidth < 900) setCount(2);
      else if (window.innerWidth < 1200) setCount(3);
      else setCount(4);
    };
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return count;
}


export default function Destinations() {
  const navigate = useNavigate();
  const [activeRegion, setActiveRegion] = useState<string>('All');
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const visibleCount = useVisibleCount();

  const filtered = activeRegion === 'All'
    ? DESTINATIONS
    : DESTINATIONS.filter((d) => d.region === activeRegion);

  const maxIndex = Math.max(filtered.length - visibleCount, 0);

  const handleRegion = useCallback((region: string) => {
    setActiveRegion(region);
    setIndex(0);
  }, []);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <section id="destinations" className="scroll-offset section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow mb-4">Study destinations</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink leading-tight">
            Explore your dream destination
          </h2>
          <p className="mt-4 text-base text-ink-muted leading-relaxed">
            Study at world-class universities across 11+ countries. Find the
            perfect place to shape your future.
          </p>
        </div>

        {/* Filter + Controls row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 md:mb-10">
          <div className="flex flex-wrap gap-2">
            {REGIONS.map((region) => (
              <button
                key={region}
                onClick={() => handleRegion(region)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeRegion === region
                    ? 'bg-primary text-white shadow-glow'
                    : 'bg-canvas text-ink-muted border border-line hover:border-primary/30 hover:text-primary'
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
              className="flex items-center justify-center h-10 w-10 rounded-full border border-line bg-white text-ink hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              disabled={index >= maxIndex}
              className="flex items-center justify-center h-10 w-10 rounded-full border border-line bg-white text-ink hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
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
              transform: `translateX(calc(-${index} * (100% / ${visibleCount} + ${CARD_GAP / visibleCount}px)))`,
            }}
          >
            {filtered.map((dest) => (
              <div
                key={dest.name}
                className="flex flex-col items-center gap-3 shrink-0 cursor-pointer group"
                style={{ width: `calc((100% - ${(visibleCount - 1) * CARD_GAP}px) / ${visibleCount})` }}
                onClick={() => navigate(`/destinations/${encodeURIComponent(dest.name)}`)}
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
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent px-4 py-4">
                        <p className="text-white font-bold text-sm">
                          {dest.flag} {dest.name}
                        </p>
                        <p className="text-white/80 text-xs flex items-center gap-1 mt-0.5">
                          <MapPin className="h-3 w-3 shrink-0" />
                          {dest.universities}+ Universities
                        </p>
                      </div>
                    }
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-ink group-hover:text-primary transition-colors">{dest.name}</p>
                  <p className="text-xs text-ink-muted">{dest.region}</p>
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
                  i === index ? 'w-6 bg-primary' : 'w-2 bg-line hover:bg-ink-muted/40'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
