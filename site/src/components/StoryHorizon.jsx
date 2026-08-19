import Reveal from './Reveal';
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
      <Reveal
        style={{
          aspectRatio: '16/9',
          backgroundImage: 'url(assets/images/horizon.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          overflow: 'hidden',
        }}
        role="img"
        aria-label="A European interior with Egyptian fabric"
      />
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
          {t.horizon.eyebrow}
        </p>
        <h2
          data-display-64="1"
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
        >
          {t.horizon.headline}
        </h2>
        <p
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
        </p>
        <p
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
        </p>
      </Reveal>
    </section>
  );
}
