import { motion } from 'motion/react';
import { useActiveSection } from './FullPageScroll';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  index: number;
  className?: string;
}

/**
 * Wraps a section inside the FullPageScroll track.
 * Animates its content in/out when it becomes the active section.
 */
export default function FullPageSection({ children, index, className = '' }: Props) {
  const { activeIndex } = useActiveSection();
  const isActive = activeIndex === index;
  const distance = Math.abs(activeIndex - index);

  return (
    <div className={`fp-section ${className}`}>
      <motion.div
        className="fp-section__inner overflow-y-auto"
        data-fp-scrollable
        initial={false}
        animate={
          isActive
            ? { opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }
            : { opacity: 0, scale: 0.96, filter: 'blur(6px)', y: distance > 1 ? 40 : 20 }
        }
        transition={
          isActive
            ? { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }
            : { duration: 0.4, ease: 'easeIn' }
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
