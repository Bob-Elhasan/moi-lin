import { useReveal } from '../hooks/useReveal';
import { useParallax } from '../hooks/useParallax';

function mergeRefs(refs) {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === 'function') ref(node);
      else ref.current = node;
    });
  };
}

// Wraps a story-section element with the design system's once-only scroll
// reveal. `delay` (ms) staggers a group of Reveals sharing one entrance —
// e.g. the three pillar columns or the three crop images. `parallax` adds a
// subtle background-position drift as the element crosses the viewport,
// for full-bleed story photography.
export default function Reveal({ as: Tag = 'div', style, delay = 0, parallax = false, parallaxRange = 14, children, ...rest }) {
  const { ref: revealRef, state } = useReveal();
  const parallaxRef = useParallax(parallaxRange);

  return (
    <Tag
      ref={parallax ? mergeRefs([revealRef, parallaxRef]) : revealRef}
      data-reveal={state}
      data-parallax={parallax ? '1' : undefined}
      style={{ ...style, '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
