import { useReveal } from '../hooks/useReveal';

// A running stitch across the seam between two sections — the same
// needle-and-thread vocabulary as ThreadRule, drawn the full width of the
// page instead of as a single accent. A quiet rhythm mark as the page
// scrolls, not a hard rule: it borrows the background of the section that
// follows it so it reads as a seam rather than a divider.
export default function StitchSeam({ background = 'var(--ecru)', style, ...rest }) {
  const { ref, state } = useReveal();
  return (
    <div
      ref={ref}
      data-stitch={state}
      aria-hidden="true"
      style={{ background, height: 24, display: 'flex', alignItems: 'center', overflow: 'hidden', ...style }}
      {...rest}
    >
      <svg width="100%" height="9" preserveAspectRatio="none" style={{ display: 'block' }}>
        <line x1="0" y1="4.5" x2="100%" y2="4.5" stroke="var(--camel)" strokeWidth="1" strokeDasharray="2 7" strokeLinecap="round" />
      </svg>
    </div>
  );
}
