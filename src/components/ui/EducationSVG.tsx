export function EducationSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 380"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g opacity="0.22">

        {/* ───── LARGE GLOBE (center-left) ───── */}
        <g transform="translate(180, 60)" strokeWidth="1.4">
          <circle cx="80" cy="80" r="78" />
          {/* Latitude lines */}
          <path d="M2,80 Q80,55 158,80" />
          <path d="M2,80 Q80,105 158,80" />
          <path d="M10,48 Q80,30 150,48" />
          <path d="M10,112 Q80,130 150,112" />
          <path d="M30,25 Q80,12 130,25" />
          <path d="M30,135 Q80,148 130,135" />
          {/* Longitude lines */}
          <path d="M80,2 C55,35 55,125 80,158" />
          <path d="M80,2 C105,35 105,125 80,158" />
          <path d="M80,2 C25,50 25,110 80,158" />
          <path d="M80,2 C135,50 135,110 80,158" />
          {/* Equator */}
          <line x1="2" y1="80" x2="158" y2="80" />
          {/* Prime meridian */}
          <line x1="80" y1="2" x2="80" y2="158" />
          {/* Stand */}
          <line x1="80" y1="158" x2="80" y2="185" />
          <line x1="50" y1="185" x2="110" y2="185" />
          <ellipse cx="80" cy="185" rx="30" ry="6" />
        </g>

        {/* ───── GRADUATION CAP (far left) ───── */}
        <g transform="translate(30, 180)" strokeWidth="1.6">
          {/* Board top */}
          <polygon points="70,0 140,30 70,60 0,30" />
          {/* Cap body */}
          <path d="M20,38 C20,38 20,80 70,90 C120,80 120,38 120,38" />
          {/* Tassel string */}
          <line x1="140" y1="30" x2="160" y2="30" />
          <line x1="160" y1="30" x2="160" y2="75" />
          {/* Tassel end */}
          <line x1="155" y1="75" x2="155" y2="90" />
          <line x1="160" y1="75" x2="160" y2="92" />
          <line x1="165" y1="75" x2="165" y2="88" />
          <ellipse cx="160" cy="74" rx="8" ry="4" />
        </g>

        {/* ───── OPEN BOOK (left of center) ───── */}
        <g transform="translate(420, 210)" strokeWidth="1.4">
          {/* Left page */}
          <path d="M80,0 C50,-5 10,5 0,10 L0,130 C10,125 50,115 80,120 Z" />
          {/* Right page */}
          <path d="M80,0 C110,-5 150,5 160,10 L160,130 C150,125 110,115 80,120 Z" />
          {/* Spine */}
          <line x1="80" y1="0" x2="80" y2="120" />
          {/* Text lines — left page */}
          {[25, 42, 59, 76, 93].map((y, i) => (
            <line key={`ll-${i}`} x1="14" y1={y} x2="68" y2={y - 3} />
          ))}
          {/* Text lines — right page */}
          {[25, 42, 59, 76, 93].map((y, i) => (
            <line key={`rl-${i}`} x1="92" y1={y} x2="146" y2={y - 3} />
          ))}
          {/* Chapter heading lines */}
          <line x1="22" y1="14" x2="58" y2="11" strokeWidth="2.5" />
          <line x1="92" y1="14" x2="128" y2="11" strokeWidth="2.5" />
        </g>

        {/* ───── GRADUATION CAP (large, center) ───── */}
        <g transform="translate(640, 40)" strokeWidth="1.5">
          <polygon points="110,0 220,45 110,90 0,45" />
          <path d="M35,58 C35,58 35,130 110,145 C185,130 185,58 185,58" />
          <line x1="220" y1="45" x2="248" y2="45" />
          <line x1="248" y1="45" x2="248" y2="108" />
          <line x1="240" y1="108" x2="240" y2="128" />
          <line x1="248" y1="108" x2="248" y2="130" />
          <line x1="256" y1="108" x2="256" y2="125" />
          <ellipse cx="248" cy="107" rx="11" ry="5" />
        </g>

        {/* ───── PENCIL (right side) ───── */}
        <g transform="translate(1020, 50) rotate(20)" strokeWidth="1.4">
          {/* Body */}
          <rect x="0" y="0" width="28" height="200" />
          {/* Tip */}
          <polygon points="0,200 28,200 14,240" />
          <line x1="0" y1="200" x2="14" y2="220" />
          <line x1="28" y1="200" x2="14" y2="220" />
          <line x1="6" y1="208" x2="22" y2="208" />
          {/* Eraser band */}
          <rect x="0" y="0" width="28" height="18" />
          <line x1="0" y1="10" x2="28" y2="10" />
          {/* Wood stripes */}
          <line x1="0" y1="28" x2="28" y2="28" />
          {/* Center line */}
          <line x1="14" y1="18" x2="14" y2="200" />
        </g>

        {/* ───── SMALL GLOBE (right) ───── */}
        <g transform="translate(1140, 80)" strokeWidth="1.3">
          <circle cx="60" cy="60" r="58" />
          <path d="M2,60 Q60,40 118,60" />
          <path d="M2,60 Q60,80 118,60" />
          <path d="M12,35 Q60,20 108,35" />
          <path d="M12,85 Q60,100 108,85" />
          <path d="M60,2 C40,25 40,95 60,118" />
          <path d="M60,2 C80,25 80,95 60,118" />
          <line x1="2" y1="60" x2="118" y2="60" />
          <line x1="60" y1="2" x2="60" y2="118" />
          {/* Pointer / location pin */}
          <circle cx="85" cy="38" r="8" />
          <line x1="85" y1="46" x2="85" y2="58" />
        </g>

        {/* ───── OPEN BOOK (far right, small) ───── */}
        <g transform="translate(1280, 200)" strokeWidth="1.3">
          <path d="M60,0 C38,-4 8,4 0,8 L0,100 C8,96 38,88 60,92 Z" />
          <path d="M60,0 C82,-4 112,4 120,8 L120,100 C112,96 82,88 60,92 Z" />
          <line x1="60" y1="0" x2="60" y2="92" />
          {[20, 34, 48, 62, 76].map((y, i) => (
            <line key={`bl-${i}`} x1="10" y1={y} x2="52" y2={y - 2} />
          ))}
          {[20, 34, 48, 62, 76].map((y, i) => (
            <line key={`br-${i}`} x1="68" y1={y} x2="110" y2={y - 2} />
          ))}
          <line x1="14" y1="10" x2="46" y2="8" strokeWidth="2.2" />
          <line x1="68" y1="10" x2="100" y2="8" strokeWidth="2.2" />
        </g>

        {/* ───── STARS / sparkles ───── */}
        {[
          [370, 90], [550, 250], [780, 280], [950, 130], [1080, 300], [1360, 80],
        ].map(([cx, cy], i) => (
          <g key={`star-${i}`} transform={`translate(${cx}, ${cy})`} strokeWidth="1.2">
            <line x1="0" y1="-10" x2="0" y2="10" />
            <line x1="-10" y1="0" x2="10" y2="0" />
            <line x1="-7" y1="-7" x2="7" y2="7" />
            <line x1="7" y1="-7" x2="-7" y2="7" />
          </g>
        ))}

        {/* ───── small graduation caps ───── */}
        <g transform="translate(870, 200)" strokeWidth="1.2">
          <polygon points="35,0 70,14 35,28 0,14" />
          <path d="M10,18 C10,18 10,42 35,48 C60,42 60,18 60,18" />
          <line x1="70" y1="14" x2="82" y2="14" />
          <line x1="82" y1="14" x2="82" y2="38" />
          <line x1="79" y1="38" x2="85" y2="38" />
        </g>

        {/* ───── Dotted connecting lines (dashed decorative) ───── */}
        <g strokeWidth="1" strokeDasharray="5 8" opacity="0.6">
          <path d="M160,160 Q280,120 360,200" />
          <path d="M600,165 Q680,230 780,250" />
          <path d="M940,165 Q1020,100 1100,140" />
          <path d="M1200,140 Q1270,170 1280,200" />
        </g>

        {/* ───── Ground line ───── */}
        <line x1="-50" y1="340" x2="1490" y2="340" strokeWidth="1" />

      </g>
    </svg>
  );
}
