import Reveal from './Reveal';
import ParallaxPhoto from './ParallaxPhoto';
import SectionLabel from './SectionLabel';
import SplitLines from './SplitLines';
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
      <Reveal variant="image">
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

      {/* The copy column arrives in sequence rather than as one block: thread,
          headline lines, body, closing note. Same order the eye reads it. */}
      <div>
        <SectionLabel>{t.instinct.eyebrow}</SectionLabel>
        <SplitLines
          as="h2"
          data-display-64="1"
          text={t.instinct.headline}
          delay={80}
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
        />
        <Reveal
          as="p"
          delay={220}
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
        </Reveal>
        <Reveal
          as="p"
          delay={320}
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
        </Reveal>
      </div>
    </section>
  );
}
