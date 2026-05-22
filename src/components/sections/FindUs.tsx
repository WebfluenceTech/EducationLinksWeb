import { useState } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { OFFICES } from '../../lib/constants';

export default function FindUs() {
  const [active, setActive] = useState(0);

  return (
    <section
      data-fp-scrollable
      className="h-full min-h-screen overflow-y-auto"
      style={{ background: 'linear-gradient(135deg, #dbeeff 0%, #f0f8ff 30%, #fff5f5 70%, #ffeaea 100%)' }}
    >
      <div className="container-custom py-10 md:py-14">

        {/* Heading */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3">
            Our Locations
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-brand-dark leading-tight">
            Find us
          </h2>
          <p className="mt-2 text-sm text-brand-gray">
            Visit any of our offices — we'd love to meet you in person.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">

          {/* Office tabs */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {OFFICES.map((office, i) => (
              <button
                key={office.name}
                onClick={() => setActive(i)}
                className={`text-left w-full rounded-xl px-5 py-4 border transition-all duration-200 ${
                  active === i
                    ? 'bg-white border-brand-blue/30 shadow-md'
                    : 'bg-white/50 border-white/60 hover:bg-white hover:border-brand-blue/20'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 shrink-0 h-8 w-8 rounded-lg flex items-center justify-center ${active === i ? 'bg-brand-blue text-white' : 'bg-brand-blue/10 text-brand-blue'}`}>
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-brand-dark">{office.name}</p>
                    <p className="text-xs text-brand-gray mt-0.5 leading-relaxed">{office.address}</p>
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs text-brand-blue hover:underline mt-2"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Directions
                    </a>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Map embed */}
          <div className="lg:col-span-3 rounded-xl overflow-hidden shadow-md border border-white/60 w-full h-[420px]">
            <iframe
              key={active}
              src={OFFICES[active].embedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={OFFICES[active].name}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
