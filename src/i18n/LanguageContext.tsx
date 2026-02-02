import { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from 'react';
import { en } from './locales/en';
import { es } from './locales/es';

type Locale = 'en' | 'es';
type Translations = typeof en;

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => unknown;
}

const locales: Record<Locale, Translations> = { en, es };

const getBrowserLocale = (): Locale => {
  const stored = localStorage.getItem('locale');
  if (stored === 'en' || stored === 'es') return stored;
  const lang = navigator.language || navigator.languages?.[0] || 'en';
  return lang.startsWith('es') ? 'es' : 'en';
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getBrowserLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  }, []);

  const t = useCallback(
    (key: string): unknown => {
      const keys = key.split('.');
      let result: unknown = locales[locale];
      for (const k of keys) {
        if (result == null || typeof result !== 'object') return key;
        result = (result as Record<string, unknown>)[k];
      }
      return result ?? key;
    },
    [locale],
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
