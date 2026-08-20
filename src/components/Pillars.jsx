import Reveal from './Reveal';
import SplitLines from './SplitLines';
import ThreadRule from './ThreadRule';
import { useLanguage } from '../i18n/LanguageContext';

export default function Pillars() {
  const { t } = useLanguage();
  const items = t.pillars.items;
  return (
    <section data-story="1" data-pad="1" style={{ background: 'var(--ecru)', padding: '144px 80px' }}>
      <ThreadRule style={{ marginBottom: 24 }} />
      <SplitLines
        as="h2"
        data-display-64="1"
        text={t.pillars.heading}
        delay={80}
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 400,
          fontSize: 40,
          lineHeight: 1.1,
          color: 'var(--chocolate)',
          margin: '0 0 64px',
          maxWidth: '32ch',
          textWrap: 'pretty',
        }}
      />
      <div data-cols3="1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }}>
        {items.map((p, i) => (
          <Reveal
            key={p.title}
            delay={i * 130}
            style={{
              padding: i === 0 ? '0 40px 0 0' : i === items.length - 1 ? '0 0 0 40px' : '0 40px',
              borderRight: i < items.length - 1 ? '1px solid var(--line)' : 'none',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 28,
                lineHeight: 1.2,
                color: 'var(--chocolate)',
                margin: '0 0 16px',
              }}
            >
              <b>{p.title}</b>
              <br />
              {p.sub}
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--chocolate)', margin: 0, textWrap: 'pretty' }}>
              {p.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
