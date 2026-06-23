import { useState } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { OFFICES } from '../../lib/constants';

export default function FindUs() {
  const [active, setActive] = useState(0);

  return (
    <section
      data-fp-scrollable
      className="h-full min-h-screen overflow-y-auto bg-white"
    >
      <div className="container-custom section-padding">

        {/* Heading */}
        <div className="mb-10 md:mb-12">
          <span className="eyebrow mb-4">Our Locations</span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-brand-dark leading-[1.08] tracking-tight">
            Find us
          </h2>
          <p className="mt-4 text-base text-brand-gray max-w-xl">
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
                className={`text-left w-full px-5 py-4 border transition-all duration-200 active:scale-[0.99] ${
                  active === i
                    ? 'bg-white border-brand-blue/40 shadow-card ring-1 ring-brand-blue/10'
                    : 'bg-surface border-slate-200 hover:border-brand-blue/30 hover:bg-white'
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
          <div className="lg:col-span-3 overflow-hidden shadow-soft ring-1 ring-slate-200 bg-white p-1.5 w-full h-[420px]">
            <iframe
              key={active}
              src={OFFICES[active].embedSrc}
              width="100%"
              height="100%"
              className=""
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
