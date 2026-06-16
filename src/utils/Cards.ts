import type { CardProps } from '../types';
import type { Locale } from '../i18n/translations';
import { translations } from '../i18n/translations';

export const getCards = (locale: Locale): CardProps[] => {
  const data = translations[locale].projectsData;

  return [
    {
      title: data.boutiqueStays.title,
      description: data.boutiqueStays.description,
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
      thumbnail: 'thumbnails/booking_app.webp',
      links: [
        {
          title: data.boutiqueStays.demo,
          url: 'https://booking-app-five-theta.vercel.app/',
          variant: 'outline',
          icon: 'Demo',
        },
      ],
    },
    {
      title: data.portfolio.title,
      description: data.portfolio.description,
      technologies: ['React', 'Vite', 'Tailwind'],
      thumbnail: 'thumbnails/portfolio.webp',
      links: [
        {
          title: data.portfolio.github,
          url: 'https://github.com/bosch0/Portfolio',
          icon: 'GitHub',
        },
        {
          title: data.portfolio.demo,
          url: 'https://boscho.vercel.app/',
          variant: 'outline',
          icon: 'Demo',
        },
      ],
    },
    {
      title: data.mdConverter.title,
      description: data.mdConverter.description,
      technologies: ['Svelte', 'TypeScript', 'Vite', 'Tailwind'],
      thumbnail: 'thumbnails/md-converter.webp',
      links: [
        {
          title: data.mdConverter.github,
          url: 'https://github.com/bosch0/.MD-Converter',
          icon: 'GitHub',
        },
        {
          title: data.mdConverter.demo,
          url: 'https://md-converter-phi.vercel.app/',
          variant: 'outline',
          icon: 'Demo',
        },
      ],
    },
    {
      title: data.hiddenRp.title,
      description: data.hiddenRp.description,
      technologies: ['Lua', 'Svelte', 'MariaDB'],
      thumbnail: 'thumbnails/hiddenrp.webp',
      links: [
        {
          title: data.hiddenRp.showcase,
          url: 'https://youtu.be/_NeYUP1XY5Q?si=JVmGAz_FZvDZ_oua',
          variant: 'outline',
          icon: 'Showcase',
        },
      ],
    },
    {
      title: data.oneRpg.title,
      description: data.oneRpg.description,
      technologies: ['Lua', 'Svelte', 'MariaDB', 'React'],
      thumbnail: 'thumbnails/onerpg.webp',
      showFullThumbnail: true,
      links: [
        {
          title: data.oneRpg.showcase,
          url: 'https://onerpg.net/',
          variant: 'outline',
          icon: 'Showcase',
        },
      ],
    },
  ];
};
