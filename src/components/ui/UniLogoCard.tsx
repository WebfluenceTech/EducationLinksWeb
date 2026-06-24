import React, { useState } from 'react';

export function UniLogoCard({ name, domain, logoUrl, country }: { name: string; domain: string; logoUrl?: string; country?: string }) {
  const sources = [
    ...(logoUrl ? [logoUrl] : []),
    // Clearbit's logo API was shut down, so fall back to favicon services.
    `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=128`,
    `https://www.google.com/s2/favicons?sz=128&domain=${domain}`,
  ];
  const [srcIdx, setSrcIdx] = useState(0);
  const failed = srcIdx >= sources.length;
  const initials = name.split(' ').filter(Boolean).map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className="flex flex-col bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-sm h-full group">
      {/* Top logo area */}
      <div className="h-28 p-5 flex items-center justify-start border-b border-gray-100 bg-white">
        {!failed ? (
          <img
            src={sources[srcIdx]}
            alt={name}
            onError={() => setSrcIdx(i => i + 1)}
            className="max-h-full max-w-[80%] object-contain mix-blend-multiply"
          />
        ) : (
           <span className="text-[#2F95D0] font-extrabold text-2xl tracking-widest">{initials}</span>
        )}
      </div>

      {/* Info area */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[15px] font-bold text-[#172B4D] mb-1.5 leading-snug line-clamp-2">{name}</h3>
        <p className="text-[12px] text-[#5E6C84] mb-2 truncate">{country || 'International'}</p>
        <a href={`https://${domain}`} target="_blank" rel="noopener noreferrer" className="text-[13px] font-semibold text-[#172B4D] hover:text-[#2F95D0] transition-colors truncate">
          www.{domain}
        </a>
        
        <div className="mt-6 pt-1 mt-auto">
          <a href="#inquiry" className="block w-full py-2 bg-[#FF7A59] text-white text-[13px] font-medium hover:bg-[#f56642] transition-colors shadow-sm text-center">
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}
