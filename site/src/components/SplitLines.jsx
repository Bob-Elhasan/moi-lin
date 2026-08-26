import { useEffect, useLayoutEffect, useRef, useState } from 'react';

// Display headlines reveal one line at a time from behind a mask, the way a
// bolt of cloth is drawn across a table. This is the only place the page
// spends real motion budget, and it is reserved for the largest type.
//
// Where the lines fall is a function of the rendered width and the loaded
// font, so it can only be measured, never guessed: the text is first laid out
// as one span per word, the words are grouped by their offsetTop, and the
// masked structure is built from those groups. Measuring happens in a layout
// effect so the swap never reaches the screen, and re-runs when the box
// resizes, when the display face finishes loading and reflows the text, or
// when the copy itself changes — which it does on every language switch.
export default function SplitLines({ as: Tag = 'h2', text, stagger = 90, delay = 0, style, ...rest }) {
  const ref = useRef(null);
  const [measured, setMeasured] = useState({ key: null, lines: null });
  const [state, setState] = useState('out');

  const words = String(text).split(/\s+/).filter(Boolean);
  const key = words.join(' ');
  // A measurement only counts for the text it was taken from; anything else
  // drops straight back to the measuring pass on this render.
  const lines = measured.key === key ? measured.lines : null;

  useLayoutEffect(() => {
    if (lines) return;
    const el = ref.current;
    if (!el) return;
    const spans = el.querySelectorAll('[data-word]');
    if (!spans.length) return;

    const groups = [];
    let top = null;
    spans.forEach((span) => {
      const y = span.offsetTop;
      // a new line starts wherever a word's top edge drops below the last one
      if (top === null || y - top > 2) {
        groups.push([]);
        top = y;
      }
      groups[groups.length - 1].push(span.dataset.word);
    });
    setMeasured({ key, lines: groups.map((g) => g.join(' ')) });
  }, [lines, key]);

  // Re-measure whenever the line breaks could have changed.
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    let width = el.offsetWidth;
    const remeasure = () => setMeasured({ key: null, lines: null });
    const ro = new ResizeObserver(() => {
      if (el.offsetWidth !== width) {
        width = el.offsetWidth;
        remeasure();
      }
    });
    ro.observe(el);
    document.fonts?.ready.then(remeasure);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setState('in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Measuring pass: same type, same box, plain words — identical layout to
  // what the masked version produces, so the swap is invisible.
  if (!lines) {
    return (
      <Tag ref={ref} style={style} {...rest}>
        {words.map((w, i) => (
          <span data-word={w} key={i}>
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} data-lines={state} style={style} {...rest}>
      {lines.map((line, i) => (
        <span className="line-mask" key={i}>
          {/* trailing space keeps the lines from running together as one word
              when the headline is read out as a single string */}
          <span className="line-inner" style={{ '--line-delay': `${delay + i * stagger}ms` }}>
            {i < lines.length - 1 ? `${line} ` : line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
