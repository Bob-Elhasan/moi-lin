import { useState } from 'react';
import { SIZES, frameOf, hrefFor, swatchOf } from '../data/products';
import { useLanguage } from '../i18n/LanguageContext';

export default function ProductCard({ product, selectedColour, onSelectColour, open, onToggleDetails }) {
  const [hovered, setHovered] = useState(false);
  const { t } = useLanguage();
  const sel = selectedColour || product.colours[0];
  const href = hrefFor(product, sel);
  const name = t.products[product.id]?.name || product.id;

  return (
    <div data-card="1" style={{ fontFamily: 'var(--font-body)', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
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
        <div data-zoom-layer="1" style={{ position: 'absolute', inset: 0, background: frameOf(sel, hovered), transition: 'background-color 400ms var(--ease)' }} />
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
          {hovered ? t.collection.hoverLabel : t.collection.onBodyLabel(name, t.colours[sel] || sel)}
        </div>
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
          onClick={onToggleDetails}
          aria-expanded={open}
          style={{
            background: 'none',
            border: '1px solid var(--line)',
            color: 'var(--chocolate)',
            fontFamily: 'var(--font-body)',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '7px 12px',
            cursor: 'pointer',
          }}
        >
          {open ? t.collection.hideDetails : t.collection.details}
        </button>
      </div>
    </div>
  );
}
