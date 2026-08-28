import { useScrollDraw } from '../hooks/useScrollDraw';

// A running stitch across the seam between two sections — the same
// needle-and-thread vocabulary as ThreadRule, drawn the full width of the
// page instead of as a single accent. A quiet rhythm mark as the page
// scrolls, not a hard rule: it borrows the background of the section that
// follows it so it reads as a seam rather than a divider.
//
// The stitch is drawn by scroll position rather than revealed once: the
// needle advances as the seam rises through the viewport and runs backwards
// if the visitor scrolls back up, so the thread is always exactly as far
// along as the page is.
export default function StitchSeam({ background = 'var(--ecru)', style, ...rest }) {
  const ref = useScrollDraw({ start: 0.95, end: 0.6, property: '--stitch-rest' });
  return (
    <div
      ref={ref}
      data-stitch="1"
      aria-hidden="true"
      style={{ background, height: 24, display: 'flex', alignItems: 'center', overflow: 'hidden', ...style }}
      {...rest}
    >
      <div data-stitch-draw="1" style={{ width: '100%' }}>
        <svg width="100%" height="9" preserveAspectRatio="none" style={{ display: 'block' }}>
          <line x1="0" y1="4.5" x2="100%" y2="4.5" stroke="var(--camel)" strokeWidth="1" strokeDasharray="2 7" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
