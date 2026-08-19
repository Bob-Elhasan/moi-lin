import { useLanguage } from '../i18n/LanguageContext';
import { useParallax } from '../hooks/useParallax';

const heroIn = (delay) => ({ '--hero-delay': `${delay}ms` });

export default function Hero() {
  const { t } = useLanguage();
  const parallaxRef = useParallax(20);

  return (
    <section
      id="top"
      data-hero="1"
      style={{
        background: 'var(--ecru)',
        display: 'grid',
        gridTemplateColumns: '1.05fr 0.95fr',
        alignItems: 'stretch',
        overflow: 'hidden',
      }}
    >
      <div
        data-hero-copy="1"
        style={{
          padding: '144px 80px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          fontFamily: 'var(--font-body)',
        }}
      >
        <p
          data-hero-in="1"
          style={{ ...heroIn(0), fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--camel)', margin: '0 0 24px' }}
        >
          {t.hero.eyebrow}
        </p>

        <h1
          data-display-88="1"
          data-hero-in="1"
          style={{
            ...heroIn(100),
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 64,
            lineHeight: 1.1,
            color: 'var(--chocolate)',
            margin: '0 0 16px',
            maxWidth: '20ch',
            textWrap: 'pretty',
          }}
        >
          {t.hero.headline}
        </h1>

        <p
          data-hero-in="1"
          style={{
            ...heroIn(220),
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 21,
            lineHeight: 1.4,
            color: 'var(--ink-muted)',
            margin: '0 0 24px',
            maxWidth: '32ch',
          }}
        >
          {t.hero.editorial}
        </p>

        <p
          data-hero-in="1"
          style={{ ...heroIn(320), fontSize: 15, lineHeight: 1.6, color: 'var(--chocolate)', margin: '0 0 40px', maxWidth: '46ch', textWrap: 'pretty' }}
        >
          {t.hero.body}
        </p>

        <div data-hero-in="1" style={{ ...heroIn(420), display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a
            href="#story"
            data-btn="1"
            style={{
              textDecoration: 'none',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              background: 'var(--chocolate)',
              color: 'var(--ivory)',
              padding: '16px 32px',
            }}
          >
            {t.hero.primaryCta}
          </a>
          <a
            href="#collection"
            data-btn="1"
            style={{
              textDecoration: 'none',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--camel)',
              border: '1px solid var(--camel)',
              padding: '15px 31px',
            }}
          >
            {t.hero.secondaryCta}
          </a>
        </div>
      </div>

      <div
        ref={parallaxRef}
        data-parallax="1"
        style={{
          minHeight: 640,
          backgroundImage: 'url(assets/images/hero.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transform: 'scale(1.08)',
        }}
        role="img"
        aria-label="Linen shirt in raking daylight against a plaster wall"
      />
    </section>
  );
}
