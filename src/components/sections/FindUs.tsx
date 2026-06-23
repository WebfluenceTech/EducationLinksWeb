import { useState } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { OFFICES } from '../../lib/constants';

export default function FindUs() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-canvas-alt section-padding">
      <div className="container-custom">

        {/* Heading */}
        <div className="mb-10">
          <span className="eyebrow mb-3">Our locations</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink leading-tight">
            Find us
          </h2>
          <p className="mt-3 text-base text-ink-muted">
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
                className={`text-left w-full rounded-2xl px-5 py-4 border transition-all duration-200 ${
                  active === i
                    ? 'bg-white border-primary/40 shadow-card'
                    : 'bg-white/60 border-line hover:bg-white hover:border-primary/20'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 shrink-0 h-9 w-9 rounded-xl flex items-center justify-center ${active === i ? 'bg-primary text-white' : 'bg-primary-soft text-primary'}`}>
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-ink">{office.name}</p>
                    <p className="text-xs text-ink-muted mt-0.5 leading-relaxed">{office.address}</p>
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline mt-2"
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
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-card border border-line w-full h-[420px]">
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
