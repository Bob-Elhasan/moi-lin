import { useLanguage } from '../i18n/LanguageContext';
import Reveal from './Reveal';

const COLUMN_HREFS = {
  shop: ['#collection', '#collection', '#collection', '#collection'],
  about: ['#story', '#story', '#story', '#story'],
  care: ['#collection', '#collection', '#collection', '#collection'],
};

export default function Footer() {
  const { t } = useLanguage();
  const columns = t.footer.columns;

  return (
    <Reveal as="footer" data-pad="1" style={{ background: 'var(--chocolate)', color: 'var(--ivory)', fontFamily: 'var(--font-body)', padding: '96px 80px 40px' }}>
      <div data-cols4="1" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }}>
        <div>
          {/* Logo-White.png carries ~11% transparent padding on every edge
              around the wordmark; cancel the left/right padding at this
              display height so the glyph's true edge lines up with the
              tagline below rather than the image's edge. */}
          <img
            src="assets/logos/Logo-White.png"
            alt="MOi & LiN"
            style={{ height: 64, width: 'auto', display: 'block', marginBottom: 16, marginLeft: 'calc(64px * -121 / 375)', marginRight: 'calc(64px * -121 / 375)' }}
          />
          <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 17, color: 'var(--ivory)', margin: 0 }}>
            {t.footer.tagline}
          </p>
        </div>
        {Object.entries(columns).map(([key, col]) => (
          <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 13, color: 'var(--ink-muted-on-chocolate)' }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ivory)' }}>{col.title}</span>
            {col.links.map((label, i) => (
              <a key={label} href={COLUMN_HREFS[key][i]} data-underline="1" style={{ color: 'var(--ink-muted-on-chocolate)' }}>
                {label}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div
        style={{
          borderTop: '1px solid var(--line-on-chocolate)',
          marginTop: 64,
          paddingTop: 24,
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px 40px',
          justifyContent: 'space-between',
          fontSize: 11,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--ink-muted-on-chocolate)',
        }}
      >
        <span>{t.footer.copyright(new Date().getFullYear())}</span>
        <span>{t.footer.region}</span>
      </div>
    </Reveal>
  );
}
