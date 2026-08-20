import { useEffect, useRef } from 'react';

// Subtle vertical drift on an image as it crosses the viewport — a few
// percent of travel, never more. Applies `transform: scale(base) translateY()`
// directly on the element (works for <img> or a background div alike).
// Skipped under prefers-reduced-motion, on small viewports, and on touch —
// scroll-tied JS work that mostly goes unseen on a fast mobile scroll.
export function useParallax(range = 14, baseScale = 1.1) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(max-width: 900px)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // progress: -1 when section bottom is at viewport top, +1 when section top is at viewport bottom
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      const offset = Math.max(-1, Math.min(1, progress)) * range;
      el.style.transform = `scale(${baseScale}) translateY(${offset}px)`;
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
  }, [range, baseScale]);

  return ref;
}
