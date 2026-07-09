import { useEffect, useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { supabase, type Announcement } from '../../lib/supabase';
import SectionHeading from '../ui/SectionHeading';

const FALLBACK_IMAGE =
  'https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function AnnouncementCard({ item, index, isVisible }: { item: Announcement; index: number; isVisible: boolean }) {
  const cardClass = `group block bg-white overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-brand-blue/5 transition-all duration-500 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
  }`;
  const style = { transitionDelay: isVisible ? `${index * 100}ms` : '0ms' };

  const inner = (
    <>
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image_url || FALLBACK_IMAGE}
          alt={item.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1.5 text-xs text-brand-gray mb-3">
          <Calendar className="h-3.5 w-3.5" />
          {formatDate(item.published_at)}
        </div>
        <h3 className="text-base font-semibold text-brand-dark group-hover:text-brand-blue transition-colors mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-brand-gray leading-relaxed mb-4 line-clamp-3">{item.body}</p>
        {item.link_url && (
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue group-hover:gap-2.5 transition-all">
            Read More <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </div>
    </>
  );

  // External announcement link if the CRM provided one, otherwise route to contact.
  if (item.link_url) {
    return (
      <a href={item.link_url} target="_blank" rel="noopener noreferrer" className={cardClass} style={style}>
        {inner}
      </a>
    );
  }

  return (
    <div className={cardClass} style={style}>
      {inner}
    </div>
  );
}

export default function Announcements() {
  const { ref, isVisible } = useScrollAnimation();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    (async () => {
      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

      if (!active) return;
      if (error) {
        console.error('Failed to load announcements:', error.message);
      } else {
        setAnnouncements(data ?? []);
      }
      setLoading(false);
    })();

    return () => {
      active = false;
    };
  }, []);

  // Nothing to show and finished loading — keep the page clean by omitting the section.
  if (!loading && announcements.length === 0) return null;

  return (
    <section id="announcements" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Announcements"
          subtitle="Official updates, intake openings, and deadlines announced by our team."
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? [0, 1, 2].map((i) => (
                <div key={i} className="border border-gray-100 overflow-hidden">
                  <div className="h-48 w-full animate-pulse bg-gray-100" />
                  <div className="p-5 space-y-3">
                    <div className="h-3 w-24 animate-pulse bg-gray-100" />
                    <div className="h-4 w-3/4 animate-pulse bg-gray-100" />
                    <div className="h-3 w-full animate-pulse bg-gray-100" />
                    <div className="h-3 w-5/6 animate-pulse bg-gray-100" />
                  </div>
                </div>
              ))
            : announcements.map((item, i) => (
                <AnnouncementCard key={item.id} item={item} index={i} isVisible={isVisible} />
              ))}
        </div>
      </div>
    </section>
  );
}
