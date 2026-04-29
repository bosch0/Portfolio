import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { translations, type Locale, type Translation } from '../i18n/translations';
import { FALLBACK_LOCALE, isLocale, resolveLocale } from '../i18n/config';

const STORAGE_KEY = 'locale';

const detectLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return FALLBACK_LOCALE;
  }

  const storedLocale = window.localStorage.getItem(STORAGE_KEY);

  if (isLocale(storedLocale)) {
    return storedLocale;
  }

  return resolveLocale(window.navigator.language);
};

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translation;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

interface LocaleProviderProps {
  children: ReactNode;
}

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
  }, []);

  const value = useMemo<LocaleContextValue>(() => {
    return {
      locale,
      setLocale,
      t: translations[locale],
    };
  }, [locale, setLocale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }

  return context;
};
