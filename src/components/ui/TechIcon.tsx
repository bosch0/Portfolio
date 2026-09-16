import React from 'react';
import * as Icons from '../icons';

type IconComponent = React.FC<{ className?: string }>;

const ICONS: Record<string, IconComponent> = {
  React: Icons.ReactIcon,
  'Next.js': Icons.NextJSIcon,
  Svelte: Icons.SvelteIcon,
  TypeScript: Icons.TypeScriptIcon,
  JavaScript: Icons.JavaScriptIcon,
  'Tailwind CSS': Icons.TailwindIcon,
  'Node.js': Icons.NodeJSIcon,
  Express: Icons.ExpressIcon,
  Prisma: Icons.PrismaIcon,
  Lua: Icons.LuaIcon,
  PostgreSQL: Icons.PostgreSQLIcon,
  Supabase: Icons.SupabaseIcon,
  MariaDB: Icons.MariaDBIcon,
  Git: Icons.GitIcon,
  GitHub: Icons.GitHubIcon,
  Bash: Icons.BashIcon,
  'Linux (Ubuntu Server)': Icons.LinuxIcon,
  Vite: Icons.ViteIcon,
  Stripe: Icons.StripeIcon,
  Vercel: Icons.VercelIcon,
  AI: Icons.AIIcon,
  PHP: Icons.PHPIcon,
  Java: Icons.JavaIcon,
};

/** Monochrome technology icon; renders nothing for unknown names. */
export const TechIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const Icon = ICONS[name];
  return Icon ? <Icon className={className} /> : null;
};
