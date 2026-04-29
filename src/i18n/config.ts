import { translations, type Locale } from './translations';

export const FALLBACK_LOCALE: Locale = 'en';

export const SUPPORTED_LOCALES = Object.keys(translations) as Locale[];

type LocaleIcon = 'uk' | 'spain';

export const LOCALE_ICONS: Partial<Record<Locale, LocaleIcon>> = {
  en: 'uk',
  es: 'spain',
};

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