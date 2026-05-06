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
    <section data-fp-scrollable className="section-padding bg-white h-full overflow-y-auto">
      <div className="container-custom">
        <SectionHeading
          title="Latest News & Updates"
          subtitle="Stay informed about the latest in international education, deadlines, and opportunities."
        />

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {NEWS.map((item, i) => (
            <article
              key={item.title}
              className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1523050337458-5bd812eb5e59?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop';
                  }}
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-brand-gray mb-3">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.date}
                </div>
                <h3 className="text-base font-semibold text-brand-dark group-hover:text-brand-blue transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-gray leading-relaxed mb-4">{item.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue group-hover:gap-2.5 transition-all">
                  Read More <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
