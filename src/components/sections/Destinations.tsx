import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeading from '../ui/SectionHeading';
import { DESTINATIONS } from '../../lib/constants';

const REGIONS = ['All', 'Europe', 'North America', 'Middle East', 'Oceania'] as const;

const DESTINATION_IMAGES: Record<string, string> = {
  Finland: 'https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
  Sweden: 'https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
  Belgium: 'https://images.pexels.com/photos/2693212/pexels-photo-2693212.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
  Netherlands: 'https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
  France: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
  Denmark: 'https://images.pexels.com/photos/416024/pexels-photo-416024.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
  Ireland: 'https://images.pexels.com/photos/2382681/pexels-photo-2382681.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
  'North Cyprus': 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
  'South Cyprus': 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
  UK: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
  Canada: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
  USA: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
  UAE: 'https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
  Australia: 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
};

export default function Destinations() {
  const [activeRegion, setActiveRegion] = useState<string>('All');
  const { ref, isVisible } = useScrollAnimation();

  const filtered = activeRegion === 'All'
    ? DESTINATIONS
    : DESTINATIONS.filter((d) => d.region === activeRegion);

  return (
    <section id="destinations" className="scroll-offset section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Explore Your Dream Destination"
          subtitle="Study in world-class universities across 14+ countries. Find the perfect destination for your future."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {REGIONS.map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
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

        {/* Cards */}
        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {filtered.map((dest, i) => (
            <div
              key={dest.name}
              className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 60}ms` : '0ms' }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={DESTINATION_IMAGES[dest.name]}
                  alt={`Study in ${dest.name}`}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
                  {dest.flag} {dest.region}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-brand-dark">{dest.name}</h3>
                <div className="mt-1.5 flex items-center gap-1.5 text-sm text-brand-gray">
                  <MapPin className="h-3.5 w-3.5 text-brand-blue" />
                  {dest.universities}+ Partner Universities
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
