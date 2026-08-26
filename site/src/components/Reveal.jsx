import { useReveal } from '../hooks/useReveal';

// Wraps a story-section element with the design system's once-only scroll
// reveal. `delay` (ms) staggers a group of Reveals sharing one entrance —
// e.g. the three pillar columns or the three crop images. `variant="image"`
// swaps the copy rise for the settle-out-of-over-scale used on photography.
export default function Reveal({ as: Tag = 'div', style, delay = 0, variant, children, ...rest }) {
  const { ref, state } = useReveal();
  return (
    <Tag
      ref={ref}
      data-reveal={state}
      data-reveal-variant={variant}
      style={{ ...style, '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
