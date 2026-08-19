import { useMemo, useState } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import { useLanguage } from '../i18n/LanguageContext';

export default function Collection() {
  const { t } = useLanguage();
  const [sort, setSort] = useState('featured');
  const [selectedColours, setSelectedColours] = useState({});
  const [openId, setOpenId] = useState(null);

  const products = useMemo(() => {
    const list = PRODUCTS.slice();
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    return list;
  }, [sort]);

  const openProduct = PRODUCTS.find((p) => p.id === openId) || null;
  const openDetails = openProduct ? t.products[openProduct.id] : null;

  return (
    <>
      <section id="collection" data-pad="1" style={{ background: 'var(--ivory)', padding: '96px 80px 0' }}>
        <h2
          data-display-40="1"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 40, lineHeight: 1.1, color: 'var(--chocolate)', margin: '0 0 24px' }}
        >
          {t.collection.heading}
        </h2>
      </section>

      {/* Sticks below the header while the grid is in view. With fewer than eight
          products at launch we show the live count and drop filter chips rather
          than ship filters that barely filter. */}
      <div
        data-pad="1"
        style={{
          position: 'sticky',
          top: 61,
          zIndex: 40,
          background: 'var(--ivory)',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          padding: '12px 80px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px 24px',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'var(--font-body)',
        }}
      >
        <span aria-live="polite" style={{ fontSize: 13, fontWeight: 600, color: 'var(--chocolate)' }}>
          {t.collection.productCount(products.length)}
        </span>
        <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
          {t.collection.sortLabel}
          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setOpenId(null);
            }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: 0,
              textTransform: 'none',
              color: 'var(--chocolate)',
              background: 'var(--ivory)',
              border: '1px solid var(--line)',
              padding: '8px 12px',
              borderRadius: 0,
            }}
          >
            <option value="featured">{t.collection.sortFeatured}</option>
            <option value="price-asc">{t.collection.sortPriceAsc}</option>
            <option value="price-desc">{t.collection.sortPriceDesc}</option>
          </select>
        </label>
      </div>

      <section data-pad="1" style={{ background: 'var(--ivory)', padding: '40px 80px 96px' }}>
        <div data-cols4="1" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px 24px' }}>
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              selectedColour={selectedColours[p.id]}
              onSelectColour={(c) => setSelectedColours((s) => ({ ...s, [p.id]: c }))}
              open={openId === p.id}
              onToggleDetails={() => setOpenId((cur) => (cur === p.id ? null : p.id))}
            />
          ))}
        </div>

        {openProduct && openDetails && (
          <div
            data-cols3="1"
            style={{
              marginTop: 24,
              borderTop: '1px solid var(--line)',
              borderBottom: '1px solid var(--line)',
              padding: '24px 0',
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: '16px 40px',
              fontFamily: 'var(--font-body)',
            }}
          >
            <div style={{ gridColumn: '1/-1', display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'baseline' }}>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--camel)' }}>
                {openDetails.name}
              </span>
              <button
                type="button"
                onClick={() => setOpenId(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  fontFamily: 'var(--font-body)',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-muted)',
                  cursor: 'pointer',
                }}
              >
                {t.collection.close}
              </button>
            </div>
            {Object.keys(openDetails.details).map((key) => (
              <div key={key} style={{ display: 'flex', gap: 12, fontSize: 13, lineHeight: 1.6 }}>
                <span style={{ minWidth: 96, fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-muted)', paddingTop: 2 }}>
                  {t.collection.detailLabels[key]}
                </span>
                <span style={{ color: 'var(--chocolate)' }}>{openDetails.details[key]}</span>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
