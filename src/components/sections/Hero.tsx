function goToDestinations() {
  // Works in full-page-scroll mode (if active)…
  window.dispatchEvent(new CustomEvent('fp:goto', { detail: { id: 'destinations' } }));
  // …and on the normal homepage, scroll to the section directly.
  document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#EEEDED]">
      {/* Baked poster (headline, copy and stat cards live inside the image) */}
      <img
        src="/hero-poster.jpg"
        alt="Smart learning for a smarter future — personalized courses, expert mentors and flexible learning"
        className="block w-full h-auto select-none"
        draggable={false}
      />

      {/* Real CTA — positioned where the button sits in the design */}
      <button
        onClick={goToDestinations}
        className="absolute left-[5.5%] top-[51.5%] inline-flex items-center whitespace-nowrap bg-[#15181F] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-blue active:scale-[0.98] text-[clamp(0.5rem,1.35vw,1.05rem)] px-[2.2vw] py-[1.15vw]"
      >
        Explore Study Destinations
      </button>
    </section>
  );
}
