import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({ condensed }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((v) => !v);
  const { t } = useLanguage();

  return (
    <>
      <div
        style={{
          background: 'var(--chocolate)',
          color: 'var(--ivory)',
          fontFamily: 'var(--font-body)',
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          textAlign: 'center',
          padding: '8px 24px',
        }}
      >
        {t.announcement}
      </div>

      <div
        data-pad="1"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 60,
          background: 'var(--ecru)',
          borderBottom: '1px solid var(--line)',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          padding: condensed ? '10px 80px' : '20px 80px',
          fontFamily: 'var(--font-body)',
          transition: 'padding 200ms var(--ease)',
        }}
      >
        <nav
          data-desktop-only="1"
          style={{ display: 'flex', gap: 24, fontSize: 13, fontWeight: 500, color: 'var(--chocolate)' }}
          aria-label="Categories"
        >
          {t.nav.categories.map((c) => (
            <a key={c} href="#collection" style={{ color: 'var(--chocolate)', textDecoration: 'none' }}>
              {c}
            </a>
          ))}
        </nav>

        <button
          data-mobile-only="1"
          type="button"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label={t.nav.menu}
          style={{
            justifySelf: 'start',
            background: 'none',
            border: '1px solid var(--line)',
            color: 'var(--chocolate)',
            fontFamily: 'var(--font-body)',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            padding: '10px 14px',
            cursor: 'pointer',
          }}
        >
          {t.nav.menu}
        </button>

        <a href="#top" style={{ justifySelf: 'center', textDecoration: 'none' }}>
          <img src="assets/logos/Logo-Dark.png" alt="MOi & LiN" style={{ height: 40, width: 'auto', display: 'block' }} />
        </a>

        <div style={{ display: 'flex', gap: 24, alignItems: 'center', justifySelf: 'end' }}>
          <div style={{ display: 'flex', gap: 20, fontSize: 13, fontWeight: 500, color: 'var(--chocolate)' }}>
            <button type="button" style={btnReset}>{t.nav.search}</button>
            <button data-desktop-only="1" type="button" style={btnReset}>{t.nav.account}</button>
            <button type="button" style={btnReset}>{t.nav.bag(0)}</button>
          </div>
          <div data-desktop-only="1" style={{ paddingLeft: 20, borderLeft: '1px solid var(--line)' }}>
            <LanguageSwitcher variant="light" />
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 80,
            background: 'var(--ecru)',
            padding: 24,
            fontFamily: 'var(--font-body)',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img src="assets/logos/Logo-Dark.png" alt="MOi & LiN" style={{ height: 22 }} />
            <button
              type="button"
              onClick={toggleMenu}
              style={{
                background: 'none',
                border: '1px solid var(--line)',
                color: 'var(--chocolate)',
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '10px 14px',
                cursor: 'pointer',
              }}
            >
              {t.nav.close}
            </button>
          </div>
          <nav
            style={{ display: 'flex', flexDirection: 'column', gap: 24, fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--chocolate)' }}
            aria-label="Categories"
          >
            {t.nav.categories.map((c) => (
              <a key={c} href="#collection" onClick={toggleMenu} style={{ color: 'var(--chocolate)', textDecoration: 'none' }}>
                {c}
              </a>
            ))}
          </nav>
          <LanguageSwitcher variant="light" />
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 16, fontSize: 13, color: 'var(--ink-muted)' }}>
            <span>{t.nav.account}</span>
            <span>{t.nav.sizeGuide}</span>
          </div>
        </div>
      )}
    </>
  );
}

const btnReset = {
  background: 'none',
  border: 'none',
  padding: 0,
  fontFamily: 'var(--font-body)',
  fontSize: 13,
  fontWeight: 500,
  color: 'var(--chocolate)',
  cursor: 'pointer',
};
