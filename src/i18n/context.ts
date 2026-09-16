import { createContext } from 'react';
import type { Locale, Translation } from './translations';

export interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translation;
}

export const LocaleContext = createContext<LocaleContextValue | null>(null);
