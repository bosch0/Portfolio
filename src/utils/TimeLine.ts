import type { TimeLineItem } from '../types';
import { translations, type Locale } from '../i18n/translations';

export const getTimeLine = (locale: Locale): TimeLineItem[] => {
  const items = translations[locale].timeLineData;

  return [
    {
      title: items[0].title,
      icon: 'codetag',
      description: items[0].description,
    },
    {
      title: items[1].title,
      icon: 'terminal',
      description: items[1].description,
    },
    {
      title: items[2].title,
      icon: 'layers',
      description: items[2].description,
    },
    {
      title: items[3].title,
      icon: 'server',
      description: items[3].description,
    },
  ];
};