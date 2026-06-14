import { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading';

const CATEGORIES = ['All', 'Campus Life', 'Events', 'Student Success'] as const;

const GALLERY_ITEMS = [
  { src: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Students studying together', category: 'Campus Life' },
  { src: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'University graduation ceremony', category: 'Student Success' },
  { src: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Education seminar event', category: 'Events' },
  { src: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Campus library', category: 'Campus Life' },
  { src: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Beautiful university building', category: 'Campus Life' },
  { src: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Students celebrating admission', category: 'Student Success' },
  { src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Team meeting at Education Links', category: 'Events' },
  { src: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Students walking on campus', category: 'Campus Life' },
  { src: 'https://images.pexels.com/photos/7944022/pexels-photo-7944022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Graduation day', category: 'Student Success' },
  { src: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Education fair', category: 'Events' },
  { src: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Collaborative study session', category: 'Campus Life' },
  { src: 'https://images.pexels.com/photos/901964/pexels-photo-901964.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', alt: 'Celebrating success', category: 'Student Success' },
];

export default function GalleryPage() {
  const [active, setActive] = useState<string>('All');

  const filtered = active === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === active);

  return (
    <div className="bg-brand-light/30 min-h-screen pt-16 md:pt-[116px] pb-16 md:pb-24">
      <div className="container-custom">
        <SectionHeading
          title="Gallery"
          subtitle="A glimpse into campus life, events, and the success stories of our students worldwide."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/20'
                  : 'bg-white text-brand-gray hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-brand-blue text-white text-xs font-medium px-3 py-1 rounded-full mb-2">{item.category}</span>
                  <p className="text-white text-sm font-medium">{item.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
