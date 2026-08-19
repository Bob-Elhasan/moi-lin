import { useLanguage } from '../i18n/LanguageContext';

// The brand's four-cell credibility signature. Never animated, never iconified —
// it borrows the reference sites' service-bar slot but carries proof instead.
export default function ProofBar({ surface = 'ecru' }) {
  const { t } = useLanguage();
  const isChoc = surface === 'chocolate';
  return (
    <div style={{ borderBottom: isChoc ? 'none' : '1px solid var(--line)' }}>
      <div
        data-proof-row="1"
        style={{ display: 'flex', background: isChoc ? 'var(--chocolate)' : 'var(--ecru)', fontFamily: 'var(--font-body)' }}
      >
        {t.proof.map((c, i) => (
          <div
            key={c.label}
            data-proof-cell="1"
            data-proof-cell-choc={isChoc ? '1' : undefined}
            style={{
              flex: 1,
              padding: '24px',
              borderRight: i < t.proof.length - 1 ? `1px solid ${isChoc ? 'var(--line-on-chocolate)' : 'var(--line)'}` : 'none',
            }}
          >
            <div
              style={{
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: isChoc ? 'var(--ivory)' : 'var(--chocolate)',
              }}
            >
              {c.label}
            </div>
            <div style={{ fontSize: 11, marginTop: 4, color: isChoc ? 'var(--ink-muted-on-chocolate)' : 'var(--ink-muted)' }}>
              {c.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
