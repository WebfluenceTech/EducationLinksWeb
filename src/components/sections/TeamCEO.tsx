
export default function TeamCEO() {
  return (
    <section id="ceo" className="overflow-hidden w-full h-full flex items-center relative" style={{ background: 'linear-gradient(135deg, #e8f4fd 0%, #ffffff 40%, #fde8ea 100%)' }}>

      {/* Top accent bar */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-red z-10" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 h-full">

        {/* ── LEFT: photo + diagonal band ── */}
        <div className="relative flex items-center justify-center overflow-hidden py-12 px-8 lg:px-12">

          {/* Diagonal background band */}
          <div
            className="absolute top-0 bottom-0 left-[-15%] right-[-5%] pointer-events-none"
            style={{ background: '#FAFAFA', transform: 'skewX(-8deg)', transformOrigin: 'bottom left' }}
          />

          {/* Photo */}
          <div
            className="relative z-10 overflow-hidden shadow-xl"
            style={{ width: '62%', aspectRatio: '3 / 4' }}
          >
            <img
              src="/005.webp"
              alt="Sidique Minhas"
              className="w-full h-full object-cover object-top"
              style={{ transform: 'translateZ(0)' }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* ── RIGHT: content ── */}
        <div className="relative flex flex-col justify-center px-8 md:px-12 lg:px-14 py-12 overflow-hidden">

          {/* Faded "TEAM" watermark */}
          <span
            className="pointer-events-none absolute right-[-1rem] top-1/2 -translate-y-1/2 font-heading font-black uppercase text-brand-blue/5 select-none leading-none"
            style={{ fontSize: 'clamp(6rem, 14vw, 11rem)', writingMode: 'vertical-rl' }}
          >
            Team
          </span>

          {/* Heading */}
          <div className="relative z-10 mb-8">
            {/* "Meet" with highlight band */}
            <div className="relative inline-block mb-1">
              <div className="absolute inset-y-0 -left-3 -right-3 bg-brand-blue/10 pointer-events-none" />
              <h2
                className="relative font-heading font-bold text-brand-dark leading-tight"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
              >
                Meet
              </h2>
            </div>
            {/* "The Founder" with highlight band */}
            <div className="relative inline-block">
              <div className="absolute inset-y-0 -left-3 -right-3 bg-brand-blue/10 pointer-events-none" />
              <h2
                className="relative font-heading font-bold text-brand-dark leading-tight"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
              >
                The Founder
              </h2>
            </div>
          </div>

          {/* Name + role */}
          <div className="relative z-10 mb-5">
            <p className="font-heading font-bold text-brand-blue uppercase tracking-widest text-sm md:text-base">
              Sidique Minhas
            </p>
            <p className="text-brand-gray italic text-sm mt-0.5">Founder &amp; CEO</p>
          </div>

          {/* Bio */}
          <p className="relative z-10 text-brand-gray text-sm md:text-base leading-relaxed max-w-md">
            With over 17+ years of expertise in international education consultancy, Sidique Minhas
            has guided more than 6,000 students to prestigious universities worldwide. His vision
            has transformed Education Links into one of Pakistan's most trusted overseas education firms.
          </p>


        </div>
      </div>
    </section>
  );
}
