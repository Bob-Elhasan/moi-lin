import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';

const CROPS = [
  { src: 'assets/images/commitment-crop-1.jpg', alt: 'Raw flax before spinning' },
  { src: 'assets/images/commitment-crop-2.jpg', alt: 'Detail of selvedge and buttonhole stitching' },
  { src: 'assets/images/commitment-crop-3.jpg', alt: 'A Nile Delta flax field in low sun' },
];

export default function StoryCommitment() {
  const { t } = useLanguage();
  return (
    <section data-story="1" data-pad="1" style={{ background: 'var(--chocolate)', padding: '144px 80px' }}>
      <div data-split="1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
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
            {t.commitment.eyebrow}
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
            {t.commitment.headline}
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
            {t.commitment.body}
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
            {t.commitment.quiet}
          </p>
        </Reveal>
        <Reveal
          parallax
          style={{
            aspectRatio: '3/4',
            backgroundImage: 'url(assets/images/commitment-main.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          role="img"
          aria-label="Hands at work in the Cairo workshop"
        />
      </div>

      <div data-cols3="1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 64 }}>
        {CROPS.map((c, i) => (
          <Reveal
            key={c.src}
            delay={i * 120}
            data-zoom-parent="1"
            style={{ aspectRatio: '1/1', overflow: 'hidden' }}
            role="img"
            aria-label={c.alt}
          >
            <div
              data-zoom-layer="1"
              style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${c.src})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
