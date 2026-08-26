import { useRef } from 'react';
import Reveal from './Reveal';
import ParallaxPhoto from './ParallaxPhoto';
import Photo from './Photo';
import SectionLabel from './SectionLabel';
import SplitLines from './SplitLines';
import CarouselRail from './CarouselRail';
import { useLanguage } from '../i18n/LanguageContext';

const CROPS = [
  { base: 'assets/images/commitment-crop-1', alt: 'A silk cardigan seam and woven MOi & LiN label, close up' },
  { base: 'assets/images/commitment-crop-2', alt: 'Detail of selvedge and buttonhole stitching' },
  { base: 'assets/images/commitment-crop-3', alt: 'A sewing machine embroidering the MOi & LiN monogram' },
];

export default function StoryCommitment() {
  const { t } = useLanguage();
  const railRef = useRef(null);

  return (
    <section data-story="1" data-pad="1" style={{ background: 'var(--chocolate)', padding: '144px 80px' }}>
      <div data-split="1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <SectionLabel onChocolate>{t.commitment.eyebrow}</SectionLabel>
          <SplitLines
            as="h2"
            data-display-64="1"
            text={t.commitment.headline}
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
            {t.commitment.body}
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
            {t.commitment.quiet}
          </Reveal>
        </div>
        <Reveal variant="image">
          <ParallaxPhoto
            base="assets/images/commitment-main"
            sizes="(max-width: 900px) 100vw, 45vw"
            style={{ aspectRatio: '3/4' }}
            role="img"
            aria-label="Hands at work in the Egyptian workshop"
          />
        </Reveal>
      </div>

      {/* Grid on desktop; a swipeable carousel on mobile (data-carousel="tight")
          rather than three full-width squares stacked one under another. */}
      <div
        ref={railRef}
        data-cols3="1"
        data-carousel="tight"
        tabIndex={0}
        role="group"
        aria-label={t.commitment.eyebrow}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 64 }}
      >
        {CROPS.map((c, i) => (
          <Reveal
            key={c.base}
            variant="image"
            delay={i * 120}
            data-zoom-parent="1"
            style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden', minWidth: 0 }}
            role="img"
            aria-label={c.alt}
          >
            <Photo
              base={c.base}
              sizes="(max-width: 900px) 68vw, 28vw"
              data-zoom-layer="1"
              style={{ width: '100%', height: '100%' }}
              imgStyle={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Soft brown wash ties the three crops together tonally */}
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(58,46,40,0.28)', pointerEvents: 'none' }} />
          </Reveal>
        ))}
      </div>
      <CarouselRail targetRef={railRef} onChocolate style={{ marginTop: 20 }} />
    </section>
  );
}
