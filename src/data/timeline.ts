import type { TimelineItem } from '../types';
import { translations, type Locale } from '../i18n/translations';

export const getTimeline = (locale: Locale): TimelineItem[] => {
  const log = translations[locale].about.log;

  return log.map((item, index) => ({
    period: item.period,
    text: item.text,
    current: index === log.length - 1,
  }));
};
