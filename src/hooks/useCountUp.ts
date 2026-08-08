/* ===== COUNT-UP ANIMATION HOOK ===== */
import { useEffect, useState } from 'react';

/**
 * Animates a number from 0 to `end` over `duration` ms when `trigger` is true.
 * Returns the current animated value as a string.
 */
export function useCountUp(
  end: number,
  trigger: boolean,
  duration = 2000,
  suffix = '',
  prefix = '',
): string {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const startTime = performance.now();
    let rafId: number;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * eased);
      setValue(current);
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [trigger, end, duration]);

  return `${prefix}${value.toLocaleString()}${suffix}`;
}
