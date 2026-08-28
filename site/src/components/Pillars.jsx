import { useState } from 'react';
import Reveal from './Reveal';
import SplitLines from './SplitLines';
import ThreadRule from './ThreadRule';
import { useLanguage } from '../i18n/LanguageContext';
import { useMediaQuery } from '../hooks/useMediaQuery';

const headingStyle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 400,
  fontSize: 28,
  lineHeight: 1.2,
  color: 'var(--chocolate)',
  margin: '0 0 16px',
};

const bodyStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: 15,
  lineHeight: 1.6,
  color: 'var(--chocolate)',
  margin: 0,
  textWrap: 'pretty',
};

// Desktop: three columns divided by hairlines, as the design system has it.
function PillarColumns({ items }) {
  return (
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
          <h3 style={headingStyle}>
            <b>{p.title}</b>
            <br />
            {p.sub}
          </h3>
          <p style={bodyStyle}>{p.body}</p>
        </Reveal>
      ))}
    </div>
  );
}

// Mobile: the same three values as full-width cards that expand in place.
// Stacking the desktop columns left three ragged blocks whose asymmetric
// side padding never lined up; as cards each one occupies the full measure,
// shares one left edge, and only opens the body the visitor asks for.
function PillarCards({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div data-pillar-cards="1">
      {items.map((p, i) => {
        const open = openIndex === i;
        return (
          <Reveal key={p.title} delay={i * 90} data-pillar-card="1" data-open={open ? '1' : undefined}>
            <h3 style={{ margin: 0 }}>
              <button
                type="button"
                data-pillar-trigger="1"
                aria-expanded={open}
                aria-controls={`pillar-panel-${i}`}
                onClick={() => setOpenIndex(open ? -1 : i)}
              >
                <span data-pillar-titles="1">
                  <b style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21, lineHeight: 1.2, color: 'var(--chocolate)' }}>
                    {p.title}
                  </b>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 19, lineHeight: 1.25, color: 'var(--ink-muted)' }}>
                    {p.sub}
                  </span>
                </span>
                {/* a needle-thin plus that closes to a minus — the same hairline
                    vocabulary as the thread rules, not a chevron from a UI kit */}
                <span data-pillar-mark="1" aria-hidden="true" />
              </button>
            </h3>
            <div id={`pillar-panel-${i}`} data-pillar-panel="1" role="region" aria-hidden={!open}>
              <div data-pillar-panel-inner="1">
                <p style={bodyStyle}>{p.body}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export default function Pillars() {
  const { t } = useLanguage();
  const items = t.pillars.items;
  const isMobile = useMediaQuery('(max-width: 900px)');

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
      {isMobile ? <PillarCards items={items} /> : <PillarColumns items={items} />}
    </section>
  );
}
