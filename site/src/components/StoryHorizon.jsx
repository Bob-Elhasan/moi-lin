import Reveal from './Reveal';
import ParallaxPhoto from './ParallaxPhoto';
import SectionLabel from './SectionLabel';
import SplitLines from './SplitLines';
import { useLanguage } from '../i18n/LanguageContext';

export default function StoryHorizon() {
  const { t } = useLanguage();
  return (
    <section
      data-story="1"
      data-pad="1"
      data-split="1"
      style={{
        background: 'var(--chocolate)',
        padding: '144px 80px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 64,
        alignItems: 'center',
      }}
    >
      <Reveal variant="image">
        <ParallaxPhoto
          base="assets/images/horizon"
          sizes="(max-width: 900px) 100vw, 45vw"
          style={{ aspectRatio: '16/9' }}
          role="img"
          aria-label="A European interior with Egyptian fabric"
        />
      </Reveal>

      <div>
        <SectionLabel onChocolate>{t.horizon.eyebrow}</SectionLabel>
        <SplitLines
          as="h2"
          data-display-64="1"
          text={t.horizon.headline}
          delay={80}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 40,
            lineHeight: 1.1,
            color: 'var(--ivory)',
            margin: '0 0 24px',
            maxWidth: '24ch',
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
            color: 'var(--ivory)',
            margin: '0 0 24px',
            maxWidth: '54ch',
            textWrap: 'pretty',
          }}
        >
          {t.horizon.body}
        </Reveal>
        <Reveal
          as="p"
          delay={320}
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 21,
            lineHeight: 1.45,
            color: 'var(--ink-muted-on-chocolate)',
            margin: 0,
            maxWidth: '46ch',
            textWrap: 'pretty',
          }}
        >
          {t.horizon.quiet}
        </Reveal>
      </div>
    </section>
  );
}
