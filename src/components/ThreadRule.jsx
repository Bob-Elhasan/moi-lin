import { useReveal } from '../hooks/useReveal';

// The brand's signature section marker: a single warp thread pulled taut
// across the start of a section. It draws itself left-to-right when the
// section arrives, then holds. Used above every eyebrow label so the page
// has one recurring gesture rather than a different flourish per section.
export default function ThreadRule({ width = 56, delay = 0, color, style, ...rest }) {
  const { ref, state } = useReveal();
  return (
    <span
      ref={ref}
      data-thread={state}
      aria-hidden="true"
      style={{ width, background: color, '--reveal-delay': `${delay}ms`, ...style }}
      {...rest}
    />
  );
}
