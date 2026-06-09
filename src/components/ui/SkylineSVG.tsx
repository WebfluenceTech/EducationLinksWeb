export function SkylineSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 420"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
      stroke="currentColor"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g opacity="0.25">

        {/* ============ EIFFEL TOWER (left) ============ */}
        <g transform="translate(60, 50)">
          {/* Base legs */}
          <path d="M0,320 Q30,260 55,180" />
          <path d="M110,320 Q80,260 55,180" />
          {/* First platform */}
          <line x1="10" y1="260" x2="100" y2="260" />
          <line x1="15" y1="255" x2="95" y2="255" />
          {/* Leg arches */}
          <path d="M18,320 C18,290 55,280 55,260" />
          <path d="M92,320 C92,290 55,280 55,260" />
          {/* Second platform */}
          <line x1="25" y1="200" x2="85" y2="200" />
          <line x1="28" y1="195" x2="82" y2="195" />
          {/* Tapered tower */}
          <path d="M30,195 Q40,150 55,100" />
          <path d="M80,195 Q70,150 55,100" />
          {/* Third platform */}
          <line x1="37" y1="155" x2="73" y2="155" />
          {/* Top spire */}
          <line x1="55" y1="100" x2="55" y2="0" />
          <line x1="50" y1="95" x2="60" y2="95" />
          <line x1="48" y1="80" x2="62" y2="80" />
          {/* Top antenna ball */}
          <circle cx="55" cy="0" r="4" />
          {/* Cross bracing */}
          {[280, 240, 210, 175].map((y, i) => (
            <line key={i} x1={15 + i * 3} y1={y} x2={95 - i * 3} y2={y - 20} />
          ))}
          {[280, 240, 210, 175].map((y, i) => (
            <line key={`r-${i}`} x1={95 - i * 3} y1={y} x2={15 + i * 3} y2={y - 20} />
          ))}
        </g>

        {/* ============ BIG BEN / CLOCK TOWER (left-center) ============ */}
        <g transform="translate(250, 80)">
          {/* Base plinth */}
          <rect x="0" y="310" width="120" height="30" />
          {/* Main tower body */}
          <rect x="15" y="100" width="90" height="210" />
          {/* Gothic window details */}
          {[130, 185, 240].map((y, i) => (
            <path key={i} d={`M30,${y + 30} L30,${y} C30,${y - 15} 50,${y - 15} 50,${y} L50,${y + 30}`} />
          ))}
          {[130, 185, 240].map((y, i) => (
            <path key={`r-${i}`} d={`M70,${y + 30} L70,${y} C70,${y - 15} 90,${y - 15} 90,${y} L90,${y + 30}`} />
          ))}
          {/* Belfry section */}
          <rect x="10" y="60" width="100" height="40" />
          <line x1="0" y1="70" x2="120" y2="70" />
          {/* Clock face */}
          <circle cx="60" cy="80" r="28" />
          <circle cx="60" cy="80" r="22" />
          <line x1="60" y1="80" x2="60" y2="62" />
          <line x1="60" y1="80" x2="75" y2="73" />
          {/* Spire */}
          <polygon points="5,60 60,-20 115,60" />
          <line x1="60" y1="-20" x2="60" y2="-80" />
          <line x1="50" y1="-50" x2="70" y2="-50" />
          {/* Corner turrets */}
          <rect x="-8" y="80" width="18" height="30" />
          <polygon points="-10,80 2,60 14,80" />
          <rect x="110" y="80" width="18" height="30" />
          <polygon points="108,80 120,60 132,80" />
        </g>

        {/* ============ TAJ MAHAL (center) ============ */}
        <g transform="translate(560, 60)">
          {/* Base platform */}
          <rect x="-20" y="310" width="360" height="20" />
          <rect x="0" y="290" width="320" height="22" />
          {/* Main building */}
          <rect x="60" y="160" width="200" height="130" />
          {/* Arch entrance */}
          <path d="M120,290 L120,200 C120,165 200,165 200,200 L200,290" />
          {/* Main dome */}
          <path d="M100,160 Q160,60 220,160" />
          {/* Dome bulb */}
          <path d="M145,80 C145,65 175,65 175,80" />
          <line x1="160" y1="65" x2="160" y2="40" />
          <circle cx="160" cy="38" r="5" />
          {/* Finials */}
          {[100, 130, 190, 220].map((x, i) => (
            <g key={i}>
              <line x1={x} y1={160} x2={x} y2={140} />
              <circle cx={x} cy={138} r={4} />
            </g>
          ))}
          {/* Side chhatris (pavilions) */}
          {[0, 240].map((x, i) => (
            <g key={i}>
              <rect x={x + 20} y={220} width={40} height={70} />
              <path d={`M${x + 15},220 C${x + 15},185 ${x + 65},185 ${x + 65},220`} />
              <line x1={x + 40} y1={185} x2={x + 40} y2={165} />
              <circle cx={x + 40} cy={163} r={4} />
            </g>
          ))}
          {/* Minarets */}
          {[-30, 330].map((x, i) => (
            <g key={i}>
              <rect x={x} y={100} width={20} height={210} />
              <path d={`M${x - 5},100 C${x - 5},65 ${x + 25},65 ${x + 25},100`} />
              <line x1={x + 10} y1={65} x2={x + 10} y2={30} />
              <circle cx={x + 10} cy={28} r={4} />
              {[140, 175, 210].map((y, j) => (
                <line key={j} x1={x - 5} y1={y} x2={x + 25} y2={y} />
              ))}
            </g>
          ))}
          {/* Decorative lattice on building */}
          {[90, 115, 215, 240].map((x, i) => (
            <rect key={i} x={x} y={180} width={12} height={80} />
          ))}
        </g>

        {/* ============ SYDNEY OPERA HOUSE (right-center) ============ */}
        <g transform="translate(980, 160)">
          {/* Base */}
          <rect x="0" y="240" width="280" height="20" />
          <rect x="-20" y="255" width="320" height="15" />
          {/* Shell 1 (largest) */}
          <path d="M30,240 C30,140 170,80 200,240" />
          <path d="M50,240 C50,150 160,100 180,240" />
          {/* Shell 2 (medium) */}
          <path d="M140,240 C140,170 220,120 240,240" />
          <path d="M155,240 C155,180 215,140 230,240" />
          {/* Shell 3 (small) */}
          <path d="M210,240 C210,200 255,170 265,240" />
          {/* Rib lines on shells */}
          {[80, 110, 140, 170].map((y, i) => (
            <path key={i} d={`M${50 + i * 12},240 C${50 + i * 12},${y} ${170 - i * 5},${y - 30} ${190 - i * 8},240`} />
          ))}
        </g>

        {/* ============ COLOSSEUM (far right) ============ */}
        <g transform="translate(1200, 120)">
          {/* Outer wall ellipse */}
          <path d="M0,280 C0,200 220,200 220,280" />
          <line x1="0" y1="280" x2="0" y2="330" />
          <line x1="220" y1="280" x2="220" y2="330" />
          {/* Base */}
          <line x1="-10" y1="330" x2="230" y2="330" />
          {/* Arched windows - top tier */}
          {[...Array(7)].map((_, i) => (
            <path key={i} d={`M${10 + i * 30},280 L${10 + i * 30},240 C${10 + i * 30},225 ${30 + i * 30},225 ${30 + i * 30},240 L${30 + i * 30},280`} />
          ))}
          {/* Arched windows - middle tier */}
          {[...Array(7)].map((_, i) => (
            <path key={i} d={`M${10 + i * 30},240 L${10 + i * 30},200 C${10 + i * 30},185 ${30 + i * 30},185 ${30 + i * 30},200 L${30 + i * 30},240`} />
          ))}
          {/* Arched windows - bottom tier */}
          {[...Array(7)].map((_, i) => (
            <path key={i} d={`M${10 + i * 30},200 L${10 + i * 30},160 C${10 + i * 30},145 ${30 + i * 30},145 ${30 + i * 30},160 L${30 + i * 30},200`} />
          ))}
          {/* Horizontal dividers */}
          <line x1="2" y1="280" x2="218" y2="280" />
          <line x1="4" y1="240" x2="216" y2="240" />
          <line x1="6" y1="200" x2="214" y2="200" />
          <line x1="8" y1="162" x2="212" y2="162" />
          {/* Top attic */}
          <path d="M8,162 C8,140 212,140 212,162" />
        </g>

        {/* ============ LEANING TOWER OF PISA (far left accent) ============ */}
        <g transform="translate(-20, 120) rotate(-4)">
          {/* Base */}
          <rect x="0" y="330" width="110" height="20" />
          {/* Tiers */}
          {[...Array(7)].map((_, i) => {
            const y = 270 - i * 40;
            return (
              <g key={i}>
                <line x1="-5" y1={y + 40} x2="115" y2={y + 40} />
                {[...Array(5)].map((_, j) => (
                  <path key={j} d={`M${5 + j * 22},${y + 40} L${5 + j * 22},${y + 10} C${5 + j * 22},${y - 2} ${22 + j * 22},${y - 2} ${22 + j * 22},${y + 10} L${22 + j * 22},${y + 40}`} />
                ))}
              </g>
            );
          })}
          {/* Top belfry */}
          <path d="M15,30 C15,-10 95,-10 95,30" />
          <line x1="15" y1="30" x2="15" y2="50" />
          <line x1="95" y1="30" x2="95" y2="50" />
          <line x1="10" y1="50" x2="100" y2="50" />
          <line x1="55" y1="-10" x2="55" y2="-30" />
          <circle cx="55" cy="-32" r="4" />
        </g>

        {/* ============ STATUE OF LIBERTY (small, far left bg) ============ */}
        <g transform="translate(180, 100)" opacity="0.7">
          {/* Pedestal */}
          <rect x="0" y="290" width="50" height="40" />
          <rect x="-5" y="280" width="60" height="12" />
          {/* Body */}
          <path d="M10,280 C10,240 40,240 40,280" />
          <path d="M15,240 C15,200 35,200 35,240" />
          <path d="M18,200 L18,170 C18,155 32,155 32,170 L32,200" />
          {/* Crown */}
          <line x1="25" y1="155" x2="25" y2="130" />
          {[0, -15, 15, -10, 10].map((dx, i) => (
            <line key={i} x1={25} y1={155} x2={25 + dx} y2={135} />
          ))}
          {/* Torch arm */}
          <path d="M35,200 L55,180" />
          <line x1="55" y1="180" x2="55" y2="150" />
          <path d="M50,150 C50,140 60,140 60,150" />
        </g>

        {/* Ground line */}
        <line x1="-50" y1="380" x2="1490" y2="380" />

        {/* Ground fill with dots/grass */}
        {[...Array(30)].map((_, i) => (
          <path key={i} d={`M${i * 50},380 Q${i * 50 + 10},370 ${i * 50 + 20},380`} />
        ))}

      </g>
    </svg>
  );
}
