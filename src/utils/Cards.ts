import type { CardProps } from '../types';

export const Cards: CardProps[] = [
  {
    title: 'Hidden RP',
    description: 'Custom FiveM roleplay server featuring optimized systems and immersive gameplay. Built with Lua and qb-core framework, integrated with MySQL/MariaDB databases for efficient data management. Modern user interfaces developed with Svelte and React, delivering a seamless and engaging experience for players in a dynamic roleplay environment.',
    technologies: ['Lua', 'Svelte', 'MariaDB'],
    thumbnail: 'thumbnails/hiddenrp.webp',
    links: [
      {
        title: "Showcase",
        url: "https://youtu.be/_NeYUP1XY5Q?si=JVmGAz_FZvDZ_oua",
        variant: "outline"
      }
    ],
  },
  {
    title: 'Personal Portfolio',
    description: 'Minimalist and modern web portfolio showcasing my projects and skills as a developer. Built with React, TypeScript, and Vite for maximum performance. Responsive design using Tailwind CSS, featuring smooth animations and dark mode support. Modular architecture with clean code that reflects frontend development best practices.',
    technologies: ['React', 'Vite', 'Tailwind'],
    thumbnail: 'thumbnails/portfolio.webp',
    links: [
      {
        title: "GitHub",
        url: "https://github.com/bosch0/Portfolio",
      },
      {
        title: "Demo",
        url: "https://boscho.vercel.app/",
        variant: "outline"
      }
    ],
  },
];