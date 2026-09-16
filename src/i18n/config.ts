import { translations, type Locale } from './translations';

/** Spanish first: the main audience is companies in Granada. */
export const FALLBACK_LOCALE: Locale = 'es';

export const SUPPORTED_LOCALES = Object.keys(translations) as Locale[];

const normalizeLocale = (value: string) => value.toLowerCase();

const getPrimaryLocale = (value: string) => normalizeLocale(value).split('-')[0];

export const isLocale = (value: string | null | undefined): value is Locale => {
  return typeof value === 'string' && (SUPPORTED_LOCALES as readonly string[]).includes(value);
};

export const resolveLocale = (value: string | null | undefined): Locale => {
  if (!value) {
    return FALLBACK_LOCALE;
  }

  const normalizedValue = normalizeLocale(value);
  const exactMatch = SUPPORTED_LOCALES.find((locale) => normalizeLocale(locale) === normalizedValue);

  if (exactMatch) {
    return exactMatch;
  }

  const primaryLocale = getPrimaryLocale(normalizedValue);
  const partialMatch = SUPPORTED_LOCALES.find((locale) => getPrimaryLocale(locale) === primaryLocale);

  return partialMatch ?? FALLBACK_LOCALE;
};

export const getLocaleLabel = (targetLocale: Locale, displayLocale: Locale = FALLBACK_LOCALE): string => {
  if (typeof Intl === 'undefined' || typeof Intl.DisplayNames === 'undefined') {
    return targetLocale.toUpperCase();
  }

  const displayNames = new Intl.DisplayNames([displayLocale], { type: 'language' });

  return displayNames.of(targetLocale) ?? targetLocale.toUpperCase();
};
