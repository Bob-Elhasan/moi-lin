import { useEffect, useRef } from 'react';
import { subscribeScroll } from './scrollBus';

// Scroll-scrubbed draw progress, as opposed to the once-only entrance in
// useReveal: the value is recomputed from the element's position on every
// frame, so scrolling back up runs the animation backwards. Written straight
// to a CSS custom property rather than through state — this updates every
// frame and has no business re-rendering React.
//
// `start`/`end` are viewport fractions measured from the top: progress is 0
// while the element's top sits at `start` of the viewport height and reaches
// 1 once it has risen to `end`.
export function useScrollDraw({ start = 0.95, end = 0.55, property = '--draw-rest' } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.setProperty(property, '0%');
      return;
    }

    const update = () => {
      const vh = window.innerHeight || 1;
      const top = el.getBoundingClientRect().top;
      const span = (start - end) * vh || 1;
      const progress = Math.min(1, Math.max(0, (start * vh - top) / span));
      el.style.setProperty(property, `${(1 - progress) * 100}%`);
    };

    return subscribeScroll(update);
  }, [start, end, property]);

  return ref;
}
