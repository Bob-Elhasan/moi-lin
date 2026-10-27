import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({ condensed, progress = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((v) => !v);

  // While the panel is open it owns the screen: the page behind must not
  // scroll, Escape must close, and Tab must cycle inside the panel rather
  // than walking onto the page underneath it.
  useEffect(() => {
    if (!menuOpen) return;

    document.body.setAttribute('data-scroll-locked', '');
    const panel = panelRef.current;
    const focusables = () =>
      Array.from(
        panel?.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])') ?? []
      ).filter((el) => el.offsetParent !== null);

    focusables()[0]?.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeMenu();
        return;
      }
      if (e.key !== 'Tab') return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.removeAttribute('data-scroll-locked');
      // send focus back where it came from, not to the top of the document
      toggleRef.current?.focus();
    };
  }, [menuOpen]);

  return (
    <>
      <a href="#story" data-skip-link="1">
        {t.nav.skipToContent}
      </a>

      <div
        style={{
          background: 'var(--chocolate)',
          color: 'var(--ivory)',
          fontFamily: 'var(--font-body)',
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: 'var(--tracking-label)',
          textTransform: 'uppercase',
          textAlign: 'center',
          padding: '8px 24px',
        }}
      >
        {t.announcement}
      </div>

      <div
        data-pad="1"
        data-material="ecru"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 60,
          background: 'rgba(240, 234, 218, 0.78)',
          backdropFilter: 'blur(18px) saturate(160%)',
          WebkitBackdropFilter: 'blur(18px) saturate(160%)',
          borderBottom: condensed ? '1px solid var(--line)' : '1px solid transparent',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          padding: condensed ? '10px 80px' : '20px 80px',
          fontFamily: 'var(--font-body)',
          transition: 'padding var(--dur-mid) var(--ease-settle)',
        }}
      >
        <nav
          data-desktop-only="1"
          style={{ display: 'flex', gap: 24, fontSize: 13, fontWeight: 500, color: 'var(--chocolate)' }}
          aria-label={t.nav.categoriesLabel}
        >
          {t.nav.categories.map((c) => (
            <a key={c} href="#collection" data-underline="1" style={{ color: 'var(--chocolate)' }}>
              {c}
            </a>
          ))}
        </nav>

        <button
          ref={toggleRef}
          data-mobile-only="1"
          type="button"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={t.nav.menu}
          style={{
            justifySelf: 'start',
            background: 'none',
            border: '1px solid var(--line)',
            color: 'var(--chocolate)',
            fontFamily: 'var(--font-body)',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 'var(--tracking-label)',
            textTransform: 'uppercase',
            padding: '12px 16px',
            minHeight: 44,
            cursor: 'pointer',
            transition: 'background-color var(--dur-quick) var(--ease), border-color var(--dur-quick) var(--ease)',
          }}
        >
          {t.nav.menu}
        </button>

        <a
          href="#top"
          aria-label={t.nav.home}
          style={{ justifySelf: 'center', textDecoration: 'none', transition: 'transform var(--dur-quick) var(--ease-settle)' }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img
            src="assets/logos/Logo-Dark.png"
            alt="MOi & LiN"
            style={{ height: condensed ? 32 : 40, width: 'auto', display: 'block', transition: 'height var(--dur-mid) var(--ease-settle)' }}
          />
        </a>

        <div style={{ display: 'flex', gap: 24, alignItems: 'center', justifySelf: 'end' }}>
          <div style={{ display: 'flex', gap: 20, fontSize: 13, fontWeight: 500, color: 'var(--chocolate)' }}>
            <button type="button" data-underline="1" data-tap="1" style={btnReset}>{t.nav.search}</button>
            <button data-desktop-only="1" type="button" data-underline="1" style={btnReset}>{t.nav.account}</button>
            <button type="button" data-underline="1" data-tap="1" style={btnReset}>{t.nav.bag(0)}</button>
          </div>
          <div data-desktop-only="1" style={{ paddingLeft: 20, borderLeft: '1px solid var(--line)' }}>
            <LanguageSwitcher variant="light" />
          </div>
        </div>

        {/* How far through the page you are, drawn as one warp thread along
            the header's bottom edge — the page is long, especially on a phone. */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: -1,
            height: 1,
            background: 'var(--camel)',
            transformOrigin: 'left center',
            transform: `scaleX(${progress})`,
            opacity: progress > 0.01 ? 1 : 0,
            transition: 'opacity var(--dur-mid) var(--ease)',
          }}
        />
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 80,
          background: 'var(--ecru)',
          padding: '24px 24px 32px',
          fontFamily: 'var(--font-body)',
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity var(--dur-mid) var(--ease-settle), transform var(--dur-mid) var(--ease-settle)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src="assets/logos/Logo-Dark.png" alt="MOi & LiN" style={{ height: 24 }} />
          <button
            type="button"
            onClick={closeMenu}
            style={{
              background: 'none',
              border: '1px solid var(--line)',
              color: 'var(--chocolate)',
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 'var(--tracking-label)',
              textTransform: 'uppercase',
              padding: '12px 16px',
              minHeight: 44,
              cursor: 'pointer',
            }}
          >
            {t.nav.close}
          </button>
        </div>

        <nav
          style={{ display: 'flex', flexDirection: 'column' }}
          aria-label={t.nav.categoriesLabel}
        >
          {t.nav.categories.map((c, i) => (
            <a
              key={c}
              href="#collection"
              onClick={closeMenu}
              style={{
                display: 'block',
                padding: '20px 0',
                borderBottom: '1px solid var(--line)',
                fontFamily: 'var(--font-display)',
                fontSize: 32,
                lineHeight: 1.1,
                color: 'var(--chocolate)',
                textDecoration: 'none',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(10px)',
                transition: `opacity 420ms var(--ease-settle) ${80 + i * 70}ms, transform 420ms var(--ease-settle) ${80 + i * 70}ms`,
              }}
            >
              {c}
            </a>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 15, color: 'var(--ink-muted)' }}>
            <button type="button" data-underline="1" data-tap="1" style={{ ...btnReset, fontSize: 15, color: 'var(--ink-muted)', alignSelf: 'flex-start' }}>
              {t.nav.account}
            </button>
            <button type="button" data-underline="1" data-tap="1" style={{ ...btnReset, fontSize: 15, color: 'var(--ink-muted)', alignSelf: 'flex-start' }}>
              {t.nav.sizeGuide}
            </button>
          </div>
          <div style={{ paddingTop: 20, borderTop: '1px solid var(--line)' }}>
            <LanguageSwitcher variant="light" />
          </div>
        </div>
      </div>
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
