import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'yellow' | 'card' | 'ghost' | 'light';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

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

export type ProjectKind = 'web' | 'store' | 'fivem';
export type ProjectStatus = 'developmentClient' | 'development' | 'demo' | 'openSource' | 'store' | 'production';
/** Pastel block drawn behind a web project screenshot. */
export type PosterTone = 'pink' | 'mint' | 'yellow';

export interface ProjectLink {
  label: string;
  url: string;
  /** `code` links to a repository, `external` to a live site or video. */
  kind: 'code' | 'external';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  year: number;
  /** Shown instead of `year` when the project spans several years (e.g. "2022 – 2024"). */
  period?: string;
  kind: ProjectKind;
  status: ProjectStatus;
  thumbnail: string;
  tech: string[];
  links: ProjectLink[];
  /** Web projects: text shown in the fake browser bar. */
  host?: string;
  /** Web projects: colour of the block behind the screenshot. */
  tone?: PosterTone;
  /** The link a click on the screenshot / card opens. */
  mainLink: ProjectLink;
}
