import { useEffect, useState } from 'react';

// Reactive media query, for the few places where mobile needs different markup
// rather than different styling — an accordion instead of three columns, say,
// which CSS alone cannot express without shipping both DOM trees.
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}
