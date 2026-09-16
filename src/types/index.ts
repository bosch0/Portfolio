import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md';

interface ButtonBase {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export type ButtonProps = ButtonBase &
  (
    | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'children'>)
    | ({ href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>)
  );

export interface SectionProps {
  id: string;
  path: string;
  title: string;
  intro?: string;
  children?: ReactNode;
  className?: string;
}

export type ProjectKind = 'web' | 'store' | 'fivem';
export type LinkIcon = 'code' | 'external';

export interface ProjectLink {
  label: string;
  url: string;
  icon: LinkIcon;
  primary?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  year: number;
  /** Shown instead of `year` when the project spans several years (e.g. "2022 – 2024"). */
  period?: string;
  kind: ProjectKind;
  inDevelopment?: boolean;
  /** Source is not public (client work); the card explains it instead of linking to a repo. */
  closedSource?: boolean;
  thumbnail: string;
  thumbnailFit?: 'cover' | 'contain';
  tech: string[];
  links: ProjectLink[];
  features?: string[];
}

export interface TimelineItem {
  period: string;
  text: string;
  current?: boolean;
}
