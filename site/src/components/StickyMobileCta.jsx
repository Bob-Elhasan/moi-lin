import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

// Mobile-only. Appears once the visitor passes the first product section,
// never during story sections, releases at the footer, stays dismissed for
// the session once closed.
export default function StickyMobileCta({ visible }) {
  const { t } = useLanguage();
  const [dismissed, setDismissed] = useState(() => sessionStorage.getItem('moilin-cta-dismissed') === '1');

  if (!visible || dismissed) return null;

  return (
    <div
      data-mobile-only="1"
      data-sticky-cta="1"
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 70,
        background: 'var(--chocolate)',
        alignItems: 'center',
        gap: 12,
        padding: '12px 16px',
        fontFamily: 'var(--font-body)',
      }}
    >
      <a
        href="#collection"
        style={{
          flex: 1,
          textAlign: 'center',
          textDecoration: 'none',
          background: 'var(--ivory)',
          color: 'var(--chocolate)',
          fontWeight: 700,
          fontSize: 13,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '14px 16px',
        }}
      >
        {t.stickyCta.label}
      </a>
      <button
        type="button"
        onClick={() => {
          sessionStorage.setItem('moilin-cta-dismissed', '1');
          setDismissed(true);
        }}
        aria-label={t.stickyCta.dismiss}
        style={{
          background: 'none',
          border: '1px solid var(--line-on-chocolate)',
          color: 'var(--ivory)',
          fontFamily: 'var(--font-body)',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          padding: '13px 14px',
          cursor: 'pointer',
        }}
      >
        {t.stickyCta.dismiss}
      </button>
    </div>
  );
}
