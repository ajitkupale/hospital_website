/* ===== ENHANCED SCROLL REVEAL HOOK ===== */
import { useEffect, useRef, useState } from 'react';

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'scale';

interface ScrollRevealOptions {
  threshold?: number;
  direction?: RevealDirection;
  /** Extra delay (ms) on top of default animation */
  delay?: number;
}

export function useScrollReveal(thresholdOrOptions: number | ScrollRevealOptions = 0.15) {
  const opts: ScrollRevealOptions =
    typeof thresholdOrOptions === 'number'
      ? { threshold: thresholdOrOptions }
      : thresholdOrOptions;

  const { threshold = 0.15 } = opts;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}
