'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { TRANSLATIONS, type Lang, type TranslationKey } from './translations';

const STORAGE_KEY = 'merakilist-lang';

type LanguageContextValue = {
  lang: Lang;
  setLang: (next: Lang) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === 'fr' || stored === 'ar' || stored === 'en') {
        setLangState(stored);
      } else {
        const browser = (navigator.language || 'en').toLowerCase();
        if (browser.startsWith('fr')) setLangState('fr');
        else if (browser.startsWith('ar')) setLangState('ar');
      }
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch {}
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      const pack = TRANSLATIONS[lang] ?? TRANSLATIONS.en;
      return (pack as Record<string, string>)[key] ?? (TRANSLATIONS.en as Record<string, string>)[key] ?? key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used inside <LanguageProvider>');
  }
  return ctx;
}