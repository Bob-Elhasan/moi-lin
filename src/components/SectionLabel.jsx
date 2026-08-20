import ThreadRule from './ThreadRule';

// Thread + eyebrow, the page's recurring section opener. Every story section
// starts with this exact gesture so the eye learns it; the only thing that
// changes between them is the colour it sits on.
export default function SectionLabel({ children, onChocolate = false, delay = 0, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '0 0 24px', ...style }}>
      <ThreadRule delay={delay} color={onChocolate ? 'var(--camel)' : 'var(--camel)'} />
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: 'var(--tracking-label)',
          textTransform: 'uppercase',
          color: 'var(--camel)',
          margin: 0,
        }}
      >
        {children}
      </p>
    </div>
  );
}
