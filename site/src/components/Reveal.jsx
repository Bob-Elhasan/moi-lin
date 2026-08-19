import { useReveal } from '../hooks/useReveal';

// Wraps a story-section element with the design system's once-only scroll reveal.
export default function Reveal({ as: Tag = 'div', style, children, ...rest }) {
  const { ref, state } = useReveal();
  return (
    <Tag ref={ref} data-reveal={state} style={style} {...rest}>
      {children}
    </Tag>
  );
}
