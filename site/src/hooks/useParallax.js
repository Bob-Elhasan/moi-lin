import { useEffect, useRef } from 'react';

// Subtle vertical drift on a background-image element as it crosses the
// viewport — a few percent of travel, never more. Disabled under
// prefers-reduced-motion (handled in CSS, but we also skip the work here).
export function useParallax(range = 14) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // progress: -1 when section bottom is at viewport top, +1 when section top is at viewport bottom
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      const offset = Math.max(-1, Math.min(1, progress)) * range;
      el.style.backgroundPosition = `center calc(50% + ${offset}px)`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [range]);

  return ref;
}
