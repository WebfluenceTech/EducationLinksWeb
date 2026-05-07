import { Calendar, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionHeading from '../ui/SectionHeading';

const NEWS = [
  {
    title: 'Getting Smarter In Sweden',
    excerpt: 'Discover why Sweden is becoming one of the top destinations for international students seeking world-class education and innovation.',
    date: 'January 15, 2025',
    image: 'https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
  },
  {
    title: 'Shared Goals Across Europe',
    excerpt: 'How European universities are collaborating to offer more opportunities and exchange programs for international students.',
    date: 'January 8, 2025',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
  },
  {
    title: 'February 1 Application Deadline',
    excerpt: 'Important reminder: Several top universities in Finland and Denmark have their application deadline on February 1. Apply now!',
    date: 'December 20, 2024',
    image: 'https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
  },
];

export default function LatestNews() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Latest News & Updates"
          subtitle="Stay informed about the latest in international education, deadlines, and opportunities across the globe."
        />

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {NEWS.map((item, i) => (
            <article
              key={item.title}
              className={`group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1523050337458-5bd812eb5e59?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop';
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-bold text-brand-blue uppercase tracking-wider shadow-sm">
                  <Calendar className="h-3 w-3" />
                  {item.date}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-blue transition-colors mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-gray leading-relaxed mb-6 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue group-hover:gap-3 transition-all">
                    Read Full Story <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
