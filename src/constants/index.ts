/** Section ids, in page order. They drive the header links and the active-section highlight. */
export const NAVIGATION = ['projects', 'fivem', 'stack', 'about', 'contact'] as const;
export type SectionId = (typeof NAVIGATION)[number];

export type OrbitTone = 'pink' | 'mint' | 'yellow' | 'orange' | 'sky' | 'blue';
export interface OrbitItem {
  /** Name understood by `TechIcon`. */
  tech: string;
  tone: OrbitTone;
}

/** Technologies orbiting the profile photo (inner ring spins clockwise, outer one counter-clockwise). */
export const HERO_ORBIT: { inner: OrbitItem[]; outer: OrbitItem[] } = {
  inner: [
    { tech: 'React', tone: 'pink' },
    { tech: 'TypeScript', tone: 'mint' },
    { tech: 'Angular', tone: 'sky' },
    { tech: 'Next.js', tone: 'yellow' },
    { tech: 'Lua', tone: 'orange' },
    { tech: 'Svelte', tone: 'pink' },
  ],
  outer: [
    { tech: 'Node.js', tone: 'sky' },
    { tech: 'PostgreSQL', tone: 'pink' },
    { tech: 'Supabase', tone: 'mint' },
    { tech: 'Tailwind CSS', tone: 'yellow' },
    { tech: 'Stripe', tone: 'blue' },
    { tech: 'Vite', tone: 'orange' },
  ],
};

/** Second orbit, around the mail button in the contact block (the techs not shown in the hero). */
export const CONTACT_ORBIT: { inner: OrbitItem[]; outer: OrbitItem[] } = {
  inner: [
    { tech: 'JavaScript', tone: 'yellow' },
    { tech: 'Express', tone: 'pink' },
    { tech: 'Prisma', tone: 'mint' },
    { tech: 'Git', tone: 'orange' },
    { tech: 'Java', tone: 'sky' },
  ],
  outer: [
    { tech: 'PHP', tone: 'blue' },
    { tech: 'MariaDB', tone: 'yellow' },
    { tech: 'GitHub', tone: 'mint' },
    { tech: 'Linux (Ubuntu Server)', tone: 'pink' },
    { tech: 'Bash', tone: 'sky' },
    { tech: 'Vercel', tone: 'orange' },
  ],
};

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
  frontend: ['React', 'Next.js', 'Svelte', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'Prisma', 'PHP', 'Java', 'Lua'],
  database: ['PostgreSQL', 'Supabase', 'MariaDB'],
  tools: ['Git', 'GitHub', 'Bash', 'Linux (Ubuntu Server)', 'Vite', 'Stripe', 'Vercel', 'AI'],
} as const;
export type StackGroup = keyof typeof STACK;
