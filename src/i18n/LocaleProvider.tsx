import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { translations, type Locale } from './translations';
import { FALLBACK_LOCALE, isLocale, resolveLocale } from './config';
import { LocaleContext, type LocaleContextValue } from './context';

const STORAGE_KEY = 'locale';

const detectLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return FALLBACK_LOCALE;
  }

  let stored: string | null = null;
  try {
    stored = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    /* storage unavailable */
  }

  if (isLocale(stored)) {
    return stored;
  }

  return resolveLocale(window.navigator.language);
};

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* storage unavailable */
    }
    // Keep the document-level metadata in the active language (tab title, search snippet).
    const { meta } = translations[locale];
    document.documentElement.lang = locale;
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
  }, [locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t: translations[locale] }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};
