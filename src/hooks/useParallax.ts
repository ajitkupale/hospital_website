/* ===== PARALLAX SCROLL HOOK ===== */
import { useEffect, useState } from 'react';

/**
 * Returns a Y-offset value based on scroll position.
 * `speed` controls intensity: 0.1 = subtle, 0.5 = strong.
 */
export function useParallax(speed = 0.2): number {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        setOffset(window.scrollY * speed);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return offset;
}
