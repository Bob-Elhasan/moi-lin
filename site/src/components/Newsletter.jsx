import { useState } from 'react';
import Reveal from './Reveal';
import SplitLines from './SplitLines';
import { useLanguage } from '../i18n/LanguageContext';

export default function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

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
      <div>
        <SplitLines
          as="h2"
          data-display-64="1"
          text={t.newsletter.headline}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 40,
            lineHeight: 1.1,
            color: 'var(--ivory)',
            margin: '0 0 24px',
            maxWidth: '26ch',
            textWrap: 'pretty',
          }}
        />
        <Reveal
          as="p"
          delay={200}
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 21,
            lineHeight: 1.45,
            color: 'var(--ink-muted-on-chocolate)',
            margin: 0,
            maxWidth: '44ch',
            textWrap: 'pretty',
          }}
        >
          {t.newsletter.quiet}
        </Reveal>
      </div>

      <Reveal data-capture-card="1" style={{ border: '1px solid var(--line-on-chocolate)', padding: 40, fontFamily: 'var(--font-body)' }}>
        <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--camel)', margin: '0 0 16px' }}>
          {t.newsletter.kicker}
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ivory)', margin: '0 0 24px', maxWidth: '40ch', textWrap: 'pretty' }}>
          {t.newsletter.body}
        </p>

        {subscribed ? (
          <p style={{ fontSize: 15, color: 'var(--ivory)', margin: 0, animation: 'hero-rise 500ms var(--ease) both' }}>
            {t.newsletter.subscribedMessage}
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
            }}
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'flex-end' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: '1 1 180px', minWidth: 0 }}>
              <label htmlFor="capture-email" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ivory)' }}>
                {t.newsletter.emailLabel}
              </label>
              <input
                id="capture-email"
                data-field="1"
                type="email"
                required
                placeholder={t.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 15,
                  color: 'var(--ivory)',
                  background: 'transparent',
                  border: '1px solid var(--line-on-chocolate)',
                  padding: '14px 16px',
                  borderRadius: 0,
                  minWidth: 0,
                  width: '100%',
                  transition: 'border-color 200ms var(--ease)',
                }}
              />
            </div>
            <button
              type="submit"
              data-btn="1"
              data-btn-ink="1"
              style={{
                '--btn-sweep': 'var(--camel)',
                '--btn-ink': 'var(--ivory)',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 'var(--tracking-button)',
                textTransform: 'uppercase',
                background: 'var(--ivory)',
                color: 'var(--chocolate)',
                border: 'none',
                padding: '16px 32px',
                cursor: 'pointer',
              }}
            >
              {t.newsletter.subscribeCta}
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
}
