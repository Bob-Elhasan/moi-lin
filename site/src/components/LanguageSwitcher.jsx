import { LANGUAGES, useLanguage } from '../i18n/LanguageContext';

// Segmented EN / FR / DE control. Language names are always shown in their
// own language (standard convention) — only the aria-label follows the
// current locale.
export default function LanguageSwitcher({ variant = 'light' }) {
  const { lang, setLang, t } = useLanguage();
  const dim = variant === 'dark' ? 'var(--ink-muted-on-chocolate)' : 'var(--ink-muted)';
  const active = variant === 'dark' ? 'var(--ivory)' : 'var(--chocolate)';

  return (
    <div role="group" aria-label={t.languageSwitcher.label} style={{ display: 'flex', gap: 10 }}>
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          title={l.label}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            fontWeight: lang === l.code ? 700 : 500,
            color: lang === l.code ? active : dim,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          {l.code}
        </button>
      ))}
    </div>
  );
}
