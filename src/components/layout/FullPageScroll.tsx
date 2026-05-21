import { useState, useEffect, useRef, useCallback, createContext, useContext } from 'react';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */
interface FPContextValue {
  activeIndex: number;
  goToSection: (i: number) => void;
  totalSections: number;
  isMobile: boolean;
}

const FPContext = createContext<FPContextValue>({
  activeIndex: 0,
  goToSection: () => {},
  totalSections: 0,
  isMobile: false,
});

export const useActiveSection = () => useContext(FPContext);

/* ------------------------------------------------------------------ */
/*  Section labels (shown on dot hover)                                */
/* ------------------------------------------------------------------ */
const LABELS = [
  'Home', 'Stats', 'About', 'Services', 'Destinations',
  'Process', 'Universities', 'CEO', 'Managers', 'Senior Team', 'Counsellers',
  'Testimonials', 'Inquiry', 'News', 'Footer',
];

/* ------------------------------------------------------------------ */
/*  Mapping from hash IDs → section indices                            */
/* ------------------------------------------------------------------ */
const HASH_MAP: Record<string, number> = {
  hero: 0, stats: 1, about: 2, services: 3, destinations: 4,
  process: 5, universities: 6,
  team: 7, ceo: 7, managers: 8, senior: 9, counsellers: 10,
  testimonials: 11, inquiry: 12, news: 13, footer: 14,
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
interface Props {
  children: ReactNode;
  sectionCount: number;
}

export default function FullPageScroll({ children, sectionCount }: Props) {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const isAnimating = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);
  const lastWheel = useRef(0);

  /* ---- navigate ---- */
  const goToSection = useCallback(
    (idx: number) => {
      if (idx < 0 || idx >= sectionCount || isAnimating.current) return;
      isAnimating.current = true;
      setActiveIndex(idx);
      setTimeout(() => { isAnimating.current = false; }, 650);
    },
    [sectionCount],
  );

  /* ---- wheel ---- */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // Allow internal scrolling for elements that need it
      const target = e.target as HTMLElement;
      const scrollable = target.closest('[data-fp-scrollable]') as HTMLElement | null;
      if (scrollable) {
        const { scrollTop, scrollHeight, clientHeight } = scrollable;
        const atTop = scrollTop <= 2;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 10;
        if ((e.deltaY > 0 && !atBottom) || (e.deltaY < 0 && !atTop)) return;
      }

      e.preventDefault();
      const now = Date.now();
      // Reduced debounce for touchpads/smooth mice
      if (now - lastWheel.current < 500 || isAnimating.current) return;
      if (Math.abs(e.deltaY) < 5) return;
      lastWheel.current = now;
      goToSection(activeIndex + (e.deltaY > 0 ? 1 : -1));
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [activeIndex, goToSection]);

  /* ---- touch ---- */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onStart = (e: TouchEvent) => { touchStartY.current = e.touches[0].clientY; };
    const onEnd = (e: TouchEvent) => {
      if (isAnimating.current) return;
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 60) goToSection(activeIndex + (diff > 0 ? 1 : -1));
    };

    el.addEventListener('touchstart', onStart, { passive: true });
    el.addEventListener('touchend', onEnd, { passive: true });
    return () => { el.removeEventListener('touchstart', onStart); el.removeEventListener('touchend', onEnd); };
  }, [activeIndex, goToSection]);

  /* ---- keyboard ---- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown'].includes(e.key)) { e.preventDefault(); goToSection(activeIndex + 1); }
      else if (['ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); goToSection(activeIndex - 1); }
      else if (e.key === 'Home') { e.preventDefault(); goToSection(0); }
      else if (e.key === 'End') { e.preventDefault(); goToSection(sectionCount - 1); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex, goToSection, sectionCount]);

  /* ---- lock body scroll (desktop only) ---- */
  useEffect(() => {
    if (isMobile) return;
    document.documentElement.classList.add('fp-active');
    document.body.classList.add('fp-active');
    return () => {
      document.documentElement.classList.remove('fp-active');
      document.body.classList.remove('fp-active');
    };
  }, [isMobile]);

  /* ---- measure container height and set CSS var for section sizing ---- */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateHeight = () => {
      const h = el.clientHeight;
      el.style.setProperty('--fp-section-h', `${h}px`);
    };

    updateHeight();
    const ro = new ResizeObserver(updateHeight);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* ---- expose goToSection via custom event for Header nav ---- */
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (typeof detail?.index === 'number') goToSection(detail.index);
      else if (typeof detail?.id === 'string' && detail.id in HASH_MAP) goToSection(HASH_MAP[detail.id]);
    };
    window.addEventListener('fp:goto', handler);
    return () => window.removeEventListener('fp:goto', handler);
  }, [goToSection]);

  /* ---- mobile: plain scroll layout ---- */
  if (isMobile) {
    return (
      <FPContext.Provider value={{ activeIndex: 0, goToSection: () => {}, totalSections: sectionCount, isMobile: true }}>
        {children}
      </FPContext.Provider>
    );
  }

  return (
    <FPContext.Provider value={{ activeIndex, goToSection, totalSections: sectionCount, isMobile: false }}>
      <div ref={containerRef} className="fp-viewport">
        {/* Sliding track */}
        <motion.div
          className="fp-track"
          animate={{ y: `${-activeIndex * 100}%` }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          {children}
        </motion.div>

        {/* Side dots */}
        <nav className="fp-dots" aria-label="Section navigation">
          {Array.from({ length: sectionCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSection(i)}
              className={`fp-dot${i === activeIndex ? ' fp-dot--active' : ''}`}
              aria-label={LABELS[i] ?? `Section ${i + 1}`}
            >
              <span className="fp-dot__tip">{LABELS[i] ?? `Section ${i + 1}`}</span>
            </button>
          ))}
        </nav>

        {/* Progress bar */}
        <div className="fp-progress">
          <motion.div
            className="fp-progress__bar"
            animate={{ scaleY: (activeIndex + 1) / sectionCount }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>
      </div>
    </FPContext.Provider>
  );
}
