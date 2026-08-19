import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';

// Word-glyphs from the logo lockup, used inline in place of styled text
// (per teammate review: "Use the Moi/Lin in the Logo instead of Text").
function Glyph({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        height: '0.85em',
        width: 'auto',
        display: 'inline-block',
        verticalAlign: 'baseline',
        transform: 'translateY(0.1em)',
      }}
    />
  );
}

export default function NameSection() {
  const { t } = useLanguage();
  return (
    <section data-story="1" data-pad="1" style={{ background: 'var(--ecru)', padding: '144px 80px' }}>
      <Reveal style={{ maxWidth: '60ch', margin: '0 auto', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--camel)',
            margin: '0 0 40px',
          }}
        >
          {t.name.eyebrow}
        </p>

        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 28,
            lineHeight: 1.35,
            color: 'var(--chocolate)',
            margin: '0 0 40px',
            textWrap: 'pretty',
          }}
        >
          {t.name.moiPrefix}
          <Glyph src="assets/logos/moi-only.png" alt="Moi" />
          {t.name.moiSuffix}
          <br />
          <i>{t.name.moiWord}</i>
          <br />
          {t.name.moiBody}
        </p>

        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 28,
            lineHeight: 1.35,
            color: 'var(--chocolate)',
            margin: 0,
            textWrap: 'pretty',
          }}
        >
          {t.name.linPrefix}
          <Glyph src="assets/logos/lin-only.png" alt="Lin" />
          {t.name.linSuffix}
          <br />
          <i>{t.name.linWord}</i>
          <br />
          {t.name.linBody}
        </p>
      </Reveal>

      <Reveal style={{ maxWidth: '900px', margin: '96px auto 0', textAlign: 'center' }}>
        <div
          aria-hidden="true"
          style={{ width: 40, height: 1, background: 'var(--camel)', margin: '0 auto 40px' }}
        />
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 40,
            lineHeight: 1.25,
            color: 'var(--chocolate)',
            margin: 0,
            textWrap: 'pretty',
          }}
        >
          {t.name.closing}
        </p>
      </Reveal>
    </section>
  );
}
