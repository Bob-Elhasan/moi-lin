import { useReveal } from '../hooks/useReveal';

// Wraps a story-section element with the design system's once-only scroll
// reveal. `delay` (ms) staggers a group of Reveals sharing one entrance —
// e.g. the three pillar columns or the three crop images.
export default function Reveal({ as: Tag = 'div', style, delay = 0, children, ...rest }) {
  const { ref, state } = useReveal();
  return (
    <Tag ref={ref} data-reveal={state} style={{ ...style, '--reveal-delay': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}
