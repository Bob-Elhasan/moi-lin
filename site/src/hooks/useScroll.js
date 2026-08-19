import { useEffect, useState } from 'react';

// Tracks whether the page has scrolled past the header (condense nav) and
// whether the visitor is past the product grid but above the footer
// (show the mobile sticky "shop" bar).
export function useScrollState() {
  const [condensed, setCondensed] = useState(false);
  const [pastGrid, setPastGrid] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setCondensed(window.scrollY > 40);

      const grid = document.getElementById('collection');
      const foot = document.querySelector('footer');
      if (grid && foot) {
        const g = grid.getBoundingClientRect();
        const f = foot.getBoundingClientRect();
        setPastGrid(g.top < window.innerHeight * 0.5 && f.top > window.innerHeight);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { condensed, pastGrid };
}
