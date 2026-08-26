import { useEffect, useRef, useState } from 'react';

// Mobile swipe affordance for the scroll-snap rows. A warp thread whose taut
// camel section tracks how far through the row you are — it answers "is there
// more to the right?" without resorting to dots or arrow chrome that would sit
// badly against the rest of the page.
//
// Rendered as a sibling of the carousel and wired to it by ref, so the
// carousel markup itself stays a plain scroll container.
export default function CarouselRail({ targetRef, onChocolate = false, style }) {
  const thumbRef = useRef(null);
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const thumb = thumbRef.current;
      if (!thumb) return;
      const visible = el.clientWidth / (el.scrollWidth || 1);
      setScrollable(visible < 0.995);
      const max = el.scrollWidth - el.clientWidth;
      const progress = max > 0 ? el.scrollLeft / max : 0;
      // the thumb is scaled to the visible fraction, then slid across the
      // remaining track — one transform, no layout work per scroll frame
      const travel = (1 - visible) * el.clientWidth * progress;
      thumb.style.transform = `translateX(${travel}px) scaleX(${Math.min(1, visible)})`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    el.addEventListener('scroll', schedule, { passive: true });

    // The container's own box does not change when its *contents* reflow —
    // which is exactly what happens when the mobile media query swaps the
    // grid for auto-columns, and again as each image resolves. Watching the
    // children as well is what makes the rail appear at the right moment.
    let ro = null;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(schedule);
      ro.observe(el);
      Array.from(el.children).forEach((child) => ro.observe(child));
    }
    window.addEventListener('resize', schedule);
    window.addEventListener('load', schedule);

    return () => {
      el.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('load', schedule);
      ro?.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [targetRef]);

  // The markup is always mounted so the thumb ref stays stable across the
  // not-scrollable → scrollable transition; only its visibility changes.
  return (
    <div data-rail aria-hidden="true" style={{ ...style, visibility: scrollable ? 'visible' : 'hidden' }}>
      <div data-rail-track data-on-chocolate={onChocolate ? '1' : undefined}>
        <div ref={thumbRef} data-rail-thumb style={{ width: '100%' }} />
      </div>
    </div>
  );
}
