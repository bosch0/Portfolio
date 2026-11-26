import type { Project, ProjectLink } from '../types';
import { translations, type Locale } from '../i18n/translations';
import { LINKS } from '../constants';

export interface ProjectsData {
  /** Big alternating posters: the first one is the featured project. */
  web: Project[];
  /** FiveM work, shown in its own carousel. */
  fivem: Project[];
}

export const getProjects = (locale: Locale): ProjectsData => {
  const { items, links } = translations[locale].projects;

  const external = (label: string, url: string): ProjectLink => ({ label, url, kind: 'external' });
  const code = (label: string, url: string): ProjectLink => ({ label, url, kind: 'code' });

  const boutique = external(links.viewDemo, 'https://boutique.boscho.tech/');
  const mdDemo = external(links.demo, 'https://md.boscho.tech/');
  const portfolioCode = code(links.code, LINKS.source);

  const web: Project[] = [
    {
      id: 'boutique-stays',
      title: items.boutiqueStays.title,
      description: items.boutiqueStays.description,
      year: 2026,
      kind: 'web',
      status: 'developmentClient',
      thumbnail: '/thumbnails/booking_app.webp',
      tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Stripe'],
      host: 'boutique.boscho.tech',
      tone: 'pink',
      links: [boutique],
      mainLink: { ...boutique, label: links.openDemo },
    },
    {
      id: 'md-converter',
      title: items.mdConverter.title,
      description: items.mdConverter.description,
      year: 2026,
      kind: 'web',
      status: 'demo',
      thumbnail: '/thumbnails/md-converter.webp',
      tech: ['Svelte', 'TypeScript', 'Vite', 'Tailwind CSS'],
      host: 'md.boscho.tech',
      tone: 'mint',
      links: [mdDemo, code(links.code, 'https://github.com/bosch0/.MD-Converter')],
      mainLink: { ...mdDemo, label: links.openDemo },
    },
    {
      id: 'portfolio',
      title: items.portfolio.title,
      description: items.portfolio.description,
      year: 2026,
      kind: 'web',
      status: 'openSource',
      thumbnail: '/thumbnails/portfolio.webp',
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      host: 'github.com/bosch0/Portfolio',
      tone: 'yellow',
      links: [portfolioCode],
      mainLink: { ...portfolioCode, label: links.viewCode },
    },
  ];

  const fivemProject = (
    p: Pick<Project, 'id' | 'title' | 'description' | 'year' | 'kind' | 'status' | 'thumbnail' | 'tech' | 'period'>,
    link: ProjectLink,
  ): Project => ({ ...p, links: [link], mainLink: link });

  const fivem: Project[] = [
    fivemProject(
      {
        id: 'bcs-scripts',
        title: items.bcs.title,
        description: items.bcs.description,
        year: 2026,
        kind: 'store',
        status: 'store',
        thumbnail: '/thumbnails/bcs.webp',
        tech: ['Lua'],
      },
      external(links.store, LINKS.store),
    ),
    fivemProject(
      {
        id: 'paragon-roleplay',
        title: items.paragon.title,
        description: items.paragon.description,
        year: 2026,
        kind: 'fivem',
        status: 'development',
        thumbnail: '/thumbnails/paragon.webp',
        tech: ['Lua', 'React', 'MariaDB'],
      },
      external(links.web, 'https://paragonrp.creative-store.es/'),
    ),
    fivemProject(
      {
        id: 'onerpg',
        title: items.oneRpg.title,
        description: items.oneRpg.description,
        year: 2024,
        kind: 'fivem',
        status: 'production',
        thumbnail: '/thumbnails/onerpg.webp',
        tech: ['Lua', 'React', 'MariaDB'],
      },
      external(links.web, 'https://onerpg.net/'),
    ),
    fivemProject(
      {
        id: 'hidden-rp',
        title: items.hiddenRp.title,
        description: items.hiddenRp.description,
        year: 2022,
        period: '2022 – 2024',
        kind: 'fivem',
        status: 'production',
        thumbnail: '/thumbnails/hiddenrp.webp',
        tech: ['Lua', 'Svelte', 'React', 'MariaDB'],
      },
      external(links.video, 'https://youtu.be/_NeYUP1XY5Q'),
    ),
  ];

  return { web, fivem };
};
