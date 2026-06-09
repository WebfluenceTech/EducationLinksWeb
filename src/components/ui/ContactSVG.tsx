export function ContactSVG({ className = "" }: { className?: string }) {
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
        {/* Large Envelope (Left) */}
        <g transform="translate(180, 100)" strokeWidth="1.5">
          <rect x="0" y="0" width="160" height="110" rx="8" />
          <path d="M0,0 L80,60 L160,0" />
          <path d="M0,110 L60,65" />
          <path d="M160,110 L100,65" />
        </g>

        {/* Paper Plane (Center-Left flying up) */}
        <g transform="translate(450, 200) rotate(-20)" strokeWidth="1.6">
          <polygon points="0,40 100,0 30,100" />
          <polygon points="30,100 60,60 100,0" />
          <polygon points="30,100 35,75 60,60" />
          {/* Dashed trail */}
          <path d="M-80,80 Q-40,90 0,40" strokeDasharray="5,8" strokeWidth="1.2" />
        </g>

        {/* Speech Bubbles (Center) */}
        <g transform="translate(680, 60)" strokeWidth="1.5">
          {/* Bubble 1 */}
          <path d="M20,60 C-10,60 -10,10 40,10 C90,10 90,60 60,60 L70,80 L45,60 Z" />
          <circle cx="25" cy="35" r="3" fill="currentColor" />
          <circle cx="40" cy="35" r="3" fill="currentColor" />
          <circle cx="55" cy="35" r="3" fill="currentColor" />
          
          {/* Bubble 2 */}
          <path d="M110,100 C150,100 150,50 100,50 C50,50 50,100 80,100 L70,120 L95,100 Z" />
        </g>

        {/* Smartphone (Right of center) */}
        <g transform="translate(950, 80) rotate(10)" strokeWidth="1.5">
          <rect x="0" y="0" width="80" height="160" rx="12" />
          <line x1="30" y1="10" x2="50" y2="10" />
          <rect x="10" y="30" width="60" height="100" rx="4" />
          <circle cx="40" cy="145" r="6" />
          {/* Incoming message on screen */}
          <rect x="15" y="40" width="30" height="15" rx="3" />
          <rect x="35" y="60" width="30" height="15" rx="3" />
          <rect x="15" y="80" width="40" height="15" rx="3" />
        </g>

        {/* Old Telephone Receiver (Far Right) */}
        <g transform="translate(1200, 180) rotate(-15)" strokeWidth="1.6">
          <path d="M20,20 C40,-10 100,-10 120,20 L135,5 C105,-35 35,-35 5,5 Z" />
          <ellipse cx="20" cy="25" rx="15" ry="8" transform="rotate(-45 20 25)" />
          <ellipse cx="120" cy="25" rx="15" ry="8" transform="rotate(45 120 25)" />
          {/* Cord */}
          <path d="M120,35 Q140,80 100,100 Q60,120 80,150 Q100,180 60,200" strokeDasharray="4,6" strokeWidth="1.2" />
        </g>

        {/* Decorative Stars / Sparkles */}
        {[
          [350, 80], [600, 220], [880, 50], [1150, 250], [1360, 120], [100, 280]
        ].map(([cx, cy], i) => (
          <g key={`star-${i}`} transform={`translate(${cx}, ${cy})`} strokeWidth="1.2">
            <line x1="0" y1="-10" x2="0" y2="10" />
            <line x1="-10" y1="0" x2="10" y2="0" />
            <line x1="-7" y1="-7" x2="7" y2="7" />
            <line x1="7" y1="-7" x2="-7" y2="7" />
          </g>
        ))}

        {/* Dashed Connection Lines */}
        <g strokeWidth="1" strokeDasharray="5 8" opacity="0.6">
          <path d="M340,150 Q400,280 500,240" />
          <path d="M780,100 Q880,40 950,110" />
          <path d="M1030,220 Q1120,280 1200,220" />
        </g>

        {/* Ground line */}
        <line x1="-50" y1="340" x2="1490" y2="340" strokeWidth="1" />
      </g>
    </svg>
  );
}
