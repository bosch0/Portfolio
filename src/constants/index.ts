export const NAVIGATION = ['home', 'projects', 'about', 'contact'] as const;
export type SectionId = (typeof NAVIGATION)[number];

export const PROFILE = {
  name: 'Iván Bosch de Haro',
  initials: 'IB',
  email: 'ibdh07@gmail.com',
  /** Set to e.g. '/avatar.webp' once a photo is added to /public. Falls back to initials. */
  avatar: '/avatar.webp' as string,
} as const;

export const LINKS = {
  github: 'https://github.com/bosch0',
  linkedin: 'https://www.linkedin.com/in/iv%C3%A1n-bosch/',
  store: 'https://store.boscho.tech',
  source: 'https://github.com/bosch0/Portfolio',
  mail: `mailto:${PROFILE.email}`,
} as const;

/** PDFs expected under /public/cv/. */
export const CV_URLS = {
  es: '/cv/ivan-bosch-es.pdf',
  en: '/cv/ivan-bosch-en.pdf',
} as const;

export const STACK = {
  frontend: ['React', 'Next.js', 'Svelte', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'Prisma', 'PHP', 'Java', 'Lua'],
  database: ['PostgreSQL', 'Supabase', 'MariaDB'],
  tools: ['Git', 'GitHub', 'Bash', 'Linux (Ubuntu Server)', 'Vite', 'Stripe', 'Vercel', 'AI'],
} as const;
export type StackGroup = keyof typeof STACK;
