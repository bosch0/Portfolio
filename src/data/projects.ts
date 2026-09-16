import type { Project } from '../types';
import { translations, type Locale } from '../i18n/translations';
import { LINKS } from '../constants';

export interface ProjectsData {
  featured: Project;
  /** Web projects shown in the main grid. */
  web: Project[];
  /** FiveM work, shown in a compact secondary block. */
  fivem: Project[];
}

export const getProjects = (locale: Locale): ProjectsData => {
  const { items, links } = translations[locale].projects;

  const featured: Project = {
    id: 'boutique-stays',
    title: items.boutiqueStays.title,
    description: items.boutiqueStays.description,
    features: [...items.boutiqueStays.features],
    year: 2026,
    kind: 'web',
    inDevelopment: true,
    closedSource: true,
    thumbnail: '/thumbnails/booking_app.webp',
    tech: ['Next.js 16', 'React', 'TypeScript', 'Supabase', 'Stripe', 'Resend'],
    links: [{ label: links.preview, url: 'https://boutique.boscho.tech/', icon: 'external', primary: true }],
  };

  const web: Project[] = [
    {
      id: 'md-converter',
      title: items.mdConverter.title,
      description: items.mdConverter.description,
      year: 2026,
      kind: 'web',
      thumbnail: '/thumbnails/md-converter.webp',
      tech: ['Svelte', 'TypeScript', 'Vite', 'Tailwind'],
      links: [
        { label: links.code, url: 'https://github.com/bosch0/.MD-Converter', icon: 'code' },
        { label: links.demo, url: 'https://md.boscho.tech/', icon: 'external' },
      ],
    },
    {
      id: 'portfolio',
      title: items.portfolio.title,
      description: items.portfolio.description,
      year: 2026,
      kind: 'web',
      thumbnail: '/thumbnails/portfolio.webp',
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind'],
      links: [{ label: links.code, url: LINKS.source, icon: 'code' }],
    },
  ];

  const fivem: Project[] = [
    {
      id: 'bcs-scripts',
      title: items.bcs.title,
      description: items.bcs.description,
      year: 2026,
      kind: 'store',
      thumbnail: '/thumbnails/bcs.webp',
      tech: ['Lua', 'ESX', 'QBCore', 'OX'],
      links: [{ label: links.web, url: LINKS.store, icon: 'external' }],
    },
    {
      id: 'paragon-roleplay',
      title: items.paragon.title,
      description: items.paragon.description,
      year: 2026,
      kind: 'fivem',
      inDevelopment: true,
      thumbnail: '/thumbnails/paragon.webp',
      tech: ['Lua', 'React', 'MariaDB'],
      links: [{ label: links.web, url: 'https://paragonrp.creative-store.es/', icon: 'external' }],
    },
    {
      id: 'onerpg',
      title: items.oneRpg.title,
      description: items.oneRpg.description,
      year: 2024,
      kind: 'fivem',
      thumbnail: '/thumbnails/onerpg.webp',
      tech: ['Lua', 'React', 'MariaDB'],
      links: [{ label: links.web, url: 'https://onerpg.net/', icon: 'external' }],
    },
    {
      id: 'hidden-rp',
      title: items.hiddenRp.title,
      description: items.hiddenRp.description,
      year: 2022,
      period: '2022 – 2024',
      kind: 'fivem',
      thumbnail: '/thumbnails/hiddenrp.webp',
      tech: ['Lua', 'Svelte', 'React', 'MariaDB'],
      links: [{ label: links.video, url: 'https://youtu.be/_NeYUP1XY5Q', icon: 'external' }],
    },
  ];

  return { featured, web, fivem };
};
