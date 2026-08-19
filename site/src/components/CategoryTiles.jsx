import { useLanguage } from '../i18n/LanguageContext';
import Photo from './Photo';

const BACKGROUNDS = ['var(--dusty-blue)', '#94A7B4', '#CDB08A'];
// Real photography where it exists (manifest base path); the flat
// placeholder colour otherwise.
const IMAGES = ['assets/images/tiles/ivory-edit', 'assets/images/tiles/quiet-blue', 'assets/images/tiles/warm-neutrals'];
const TILE_SIZES = '(max-width: 900px) 78vw, 30vw';

function CategoryTile({ name, descriptor, background, image }) {
  return (
    <a
      href="#collection"
      data-zoom-parent="1"
      style={{
        position: 'relative',
        display: 'block',
        aspectRatio: '3/4',
        overflow: 'hidden',
        textDecoration: 'none',
        minWidth: 0,
      }}
    >
      {image ? (
        <Photo
          base={image}
          sizes={TILE_SIZES}
          data-zoom-layer="1"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          imgStyle={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <div data-zoom-layer="1" style={{ position: 'absolute', inset: 0, background }} />
      )}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(58,46,40,0.6), rgba(58,46,40,0) 50%)',
        }}
      />
      <div style={{ position: 'absolute', left: 20, right: 20, bottom: 20, color: 'var(--ivory)' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, lineHeight: 1.1 }}>{name}</div>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginTop: 8,
          }}
        >
          {descriptor}
        </div>
      </div>
    </a>
  );
}

// Commerce zone: dense, plain, no entrance-reveal animation — the surface
// lift to ivory is the signal the visitor has moved from reading to
// shopping. Hover-only interaction feedback (image zoom) is fine here;
// scroll-triggered reveals are not (a grid that fades in reads as unreliable).
// On mobile the row becomes a swipeable carousel instead of a 2-up grid.
export default function CategoryTiles() {
  const { t } = useLanguage();
  return (
    <section data-pad="1" style={{ background: 'var(--ivory)', padding: '96px 80px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: 24,
          marginBottom: 40,
          flexWrap: 'wrap',
        }}
      >
        <h2
          data-display-40="1"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 40, lineHeight: 1.1, color: 'var(--chocolate)', margin: 0 }}
        >
          {t.tiles.heading}
        </h2>
        <a href="#collection" data-underline="1" style={{ color: 'var(--camel)', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
          {t.tiles.viewAll}
        </a>
      </div>
      <div data-cols3="1" data-carousel="1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
        {t.tiles.items.map((tile, i) => (
          <CategoryTile key={tile.name} {...tile} background={BACKGROUNDS[i]} image={IMAGES[i]} />
        ))}
      </div>
    </section>
  );
}
