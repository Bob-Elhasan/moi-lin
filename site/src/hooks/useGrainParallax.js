import { useEffect } from 'react';
import { subscribeScroll } from './scrollBus';

// Drifts the page's weave grain at a fraction of scroll speed, so it reads as
// a layer sitting behind the page rather than a film stuck to the glass.
//
// The drift wraps at 420px — the least common multiple of the grain's two tile
// sizes (the 3px thread lattice and the 140px noise tile) — so the texture is
// pixel-identical either side of the wrap and the reset is invisible however
// far the page is scrolled.
const WRAP = 420;
const FACTOR = 0.28;

export function useGrainParallax() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = document.documentElement;
    const update = () => {
      const drift = (window.scrollY * FACTOR) % WRAP;
      root.style.setProperty('--grain-y', `${-drift}px`);
    };
    return subscribeScroll(update);
  }, []);
}
