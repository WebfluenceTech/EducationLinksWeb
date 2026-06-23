import { useState } from 'react';
import { Link } from 'react-router-dom';

export function UniLogoCard({ name, domain, logoUrl, country }: { name: string; domain: string; logoUrl?: string; country?: string }) {
  const sources = [
    ...(logoUrl ? [logoUrl] : []),
    `https://logo.clearbit.com/${domain}`,
    `https://www.google.com/s2/favicons?sz=128&domain=${domain}`,
  ];
  const [srcIdx, setSrcIdx] = useState(0);
  const failed = srcIdx >= sources.length;
  const initials = name.split(' ').filter(Boolean).map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className="flex flex-col bg-white border border-line rounded-2xl hover:shadow-card hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-soft h-full group">
      {/* Top logo area */}
      <div className="h-28 p-5 flex items-center justify-start border-b border-line bg-white">
        {!failed ? (
          <img
            src={sources[srcIdx]}
            alt={name}
            onError={() => setSrcIdx(i => i + 1)}
            className="max-h-full max-w-[80%] object-contain mix-blend-multiply"
          />
        ) : (
          <span className="text-primary font-extrabold text-2xl tracking-widest">{initials}</span>
        )}
      </div>

      {/* Info area */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[15px] font-bold text-ink mb-1.5 leading-snug line-clamp-2">{name}</h3>
        <p className="text-[12px] text-ink-muted mb-2 truncate">{country || 'International'}</p>
        <a href={`https://${domain}`} target="_blank" rel="noopener noreferrer" className="text-[13px] font-semibold text-ink-soft hover:text-primary transition-colors truncate">
          www.{domain}
        </a>

        <div className="mt-6 pt-1 mt-auto">
          <Link to="/apply" className="block w-full py-2.5 rounded-xl bg-primary text-white text-[13px] font-semibold hover:bg-primary-dark transition-colors shadow-soft text-center">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
