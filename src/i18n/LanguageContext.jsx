import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import en from './en';
import fr from './fr';
import de from './de';

const DICTS = { en, fr, de };

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
];

const STORAGE_KEY = 'moilin-lang';

const LanguageContext = createContext(null);

function detectInitialLang() {
  if (typeof window === 'undefined') return 'en';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved && DICTS[saved]) return saved;
  const browser = (window.navigator.language || 'en').slice(0, 2);
  return DICTS[browser] ? browser : 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: DICTS[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
