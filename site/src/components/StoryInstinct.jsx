import Reveal from './Reveal';
import ParallaxPhoto from './ParallaxPhoto';
import { useLanguage } from '../i18n/LanguageContext';

export default function StoryInstinct() {
  const { t } = useLanguage();
  return (
    <section
      id="story"
      data-story="1"
      data-split="1"
      data-pad="1"
      style={{
        background: 'var(--ecru)',
        padding: '144px 80px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 64,
        alignItems: 'center',
      }}
    >
      <Reveal>
        <ParallaxPhoto
          base="assets/images/instinct"
          sizes="(max-width: 900px) 100vw, 45vw"
          range={10}
          fit="contain"
          style={{ aspectRatio: '3/4' }}
          role="img"
          aria-label="Archival early 1990s European fashion backstage photograph"
        />
      </Reveal>
      <Reveal>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--camel)',
            margin: '0 0 24px',
          }}
        >
          {t.instinct.eyebrow}
        </p>
        <h2
          data-display-64="1"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 40,
            lineHeight: 1.1,
            color: 'var(--chocolate)',
            margin: '0 0 24px',
            maxWidth: '26ch',
            textWrap: 'pretty',
          }}
        >
          {t.instinct.headline}
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            lineHeight: 1.6,
            color: 'var(--chocolate)',
            margin: '0 0 24px',
            maxWidth: '56ch',
            textWrap: 'pretty',
          }}
        >
          {t.instinct.body}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 21,
            lineHeight: 1.45,
            color: 'var(--ink-muted)',
            margin: 0,
            maxWidth: '44ch',
            textWrap: 'pretty',
          }}
        >
          {t.instinct.quiet}
        </p>
      </Reveal>
    </section>
  );
}
