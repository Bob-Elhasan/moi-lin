import { useLanguage } from '../i18n/LanguageContext';

// Small, plain, text only — sits immediately above the grid, where purchase intent forms.
export default function ServiceStrip() {
  const { t } = useLanguage();
  return (
    <div
      data-pad="1"
      style={{
        background: 'var(--ivory)',
        borderBottom: '1px solid var(--line)',
        padding: '16px 80px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '24px 40px',
        justifyContent: 'center',
        fontFamily: 'var(--font-body)',
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--ink-muted)',
      }}
    >
      {t.service.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
