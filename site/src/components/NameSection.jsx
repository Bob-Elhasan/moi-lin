import Reveal from './Reveal';
import SectionLabel from './SectionLabel';
import SplitLines from './SplitLines';
import ThreadRule from './ThreadRule';
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
      <SectionLabel style={{ justifyContent: 'center', margin: '0 0 40px' }}>{t.name.eyebrow}</SectionLabel>

      <Reveal style={{ maxWidth: '60ch', margin: '0 auto', textAlign: 'center' }}>
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

      <div style={{ maxWidth: '900px', margin: '96px auto 0', textAlign: 'center' }}>
        <ThreadRule width={40} style={{ margin: '0 auto 40px' }} />
        <SplitLines
          as="p"
          data-display-40="1"
          text={t.name.closing}
          delay={120}
          stagger={110}
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
        />
      </div>
    </section>
  );
}
