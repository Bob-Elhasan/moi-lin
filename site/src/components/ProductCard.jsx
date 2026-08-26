import { useState } from 'react';
import { SIZES, frameOf, hrefFor, swatchOf } from '../data/products';
import { useLanguage } from '../i18n/LanguageContext';
import Photo from './Photo';

// A card only ever renders at a fraction of the viewport — never the full
// desktop image width, and on the mobile carousel more like 85vw.
const PRODUCT_IMG_SIZES = '(max-width: 900px) 85vw, (max-width: 1300px) 30vw, 22vw';
const imgFillStyle = { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' };

// Real photography where it exists (thumb + a hover crop, crossfaded per the
// brief); the flat placeholder frame everywhere else until it does.
function ProductImage({ images, hovered, placeholderLabel }) {
  if (!images) {
    return (
      <>
        <div data-zoom-layer="1" style={{ position: 'absolute', inset: 0, background: placeholderLabel.background, transition: 'background-color 400ms var(--ease)' }} />
        <div
          style={{
            position: 'relative',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            padding: 16,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--chocolate)',
          }}
        >
          {placeholderLabel.text}
        </div>
      </>
    );
  }
  return (
    <div data-zoom-layer="1" style={{ position: 'absolute', inset: 0 }}>
      <Photo base={images.thumb} sizes={PRODUCT_IMG_SIZES} eager={images.eager} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} imgStyle={imgFillStyle} />
      {images.hover && (
        <Photo
          base={images.hover}
          sizes={PRODUCT_IMG_SIZES}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: hovered ? 1 : 0, transition: 'opacity 400ms var(--ease)' }}
          imgStyle={imgFillStyle}
        />
      )}
    </div>
  );
}

export default function ProductCard({ product, selectedColour, onSelectColour, open, onToggleDetails }) {
  const [hovered, setHovered] = useState(false);
  const { t } = useLanguage();
  const sel = selectedColour || product.colours[0];
  const href = hrefFor(product, sel);
  const name = t.products[product.id]?.name || product.id;
  const images = product.images?.[sel];

  return (
    <div data-card="1" style={{ fontFamily: 'var(--font-body)', display: 'flex', flexDirection: 'column', gap: 12, minWidth: 0 }}>
      {/* The image link carries only pictures, so it needs a name of its own —
          without one it announces as its bare URL. */}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={t.collection.onBodyLabel(name, t.colours[sel] || sel)}
        data-zoom-parent="1"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative',
          display: 'block',
          textDecoration: 'none',
          aspectRatio: '3/4',
          overflow: 'hidden',
        }}
      >
        <ProductImage
          images={images}
          hovered={hovered}
          placeholderLabel={{
            background: frameOf(sel, hovered),
            text: hovered ? t.collection.hoverLabel : t.collection.onBodyLabel(name, t.colours[sel] || sel),
          }}
        />
      </a>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'baseline' }}>
        <a href={href} target="_blank" rel="noreferrer" data-underline="1" style={{ fontSize: 15, fontWeight: 500, color: 'var(--chocolate)' }}>
          {name}
        </a>
        <span style={{ fontSize: 15, color: 'var(--ink-muted)' }}>€{product.price}</span>
      </div>

      <div role="group" aria-label={t.collection.colourGroupLabel} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        {product.colours.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={sel === c}
            onClick={() => onSelectColour(c)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--ink-muted)',
              outline: sel === c ? '1px solid var(--chocolate)' : 'none',
              outlineOffset: 3,
              transition: 'outline-color 200ms var(--ease)',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 14,
                height: 14,
                display: 'block',
                border: '1px solid var(--line)',
                background: swatchOf(c),
                transition: 'transform 200ms var(--ease)',
                transform: sel === c ? 'scale(1.15)' : 'scale(1)',
              }}
            />
            {t.colours[c] || c}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 10, fontSize: 11, fontWeight: 600, letterSpacing: '0.08em' }}>
        {SIZES.map((z) => {
          const out = product.unavailable.includes(z);
          return (
            <span key={z} style={{ color: out ? 'var(--ink-muted)' : 'var(--chocolate)', textDecoration: out ? 'line-through' : 'none' }}>
              {z}
              <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clipPath: 'inset(50%)' }}>
                {out ? t.collection.sizeUnavailable : t.collection.sizeAvailable}
              </span>
            </span>
          );
        })}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'center', marginTop: 4 }}>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          data-underline="1"
          style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--camel)' }}
        >
          {t.collection.shopAt(product.retailer)}
        </a>
        <button
          type="button"
          data-btn="1"
          data-btn-ink="1"
          onClick={onToggleDetails}
          aria-expanded={open}
          style={{
            '--btn-sweep': 'var(--chocolate)',
            '--btn-ink': 'var(--ivory)',
            flexShrink: 0,
            background: 'none',
            border: '1px solid var(--line)',
            color: 'var(--chocolate)',
            fontFamily: 'var(--font-body)',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: 'var(--tracking-button)',
            textTransform: 'uppercase',
            padding: '9px 14px',
            minHeight: 38,
            cursor: 'pointer',
          }}
        >
          {open ? t.collection.hideDetails : t.collection.details}
        </button>
      </div>
    </div>
  );
}
