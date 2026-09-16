import React from 'react';
import type { Project, ProjectLink } from '../../types';
import { useLocale } from '../../hooks';
import { Pill } from './Pill';
import { ChipList } from './Chip';
import { Reveal } from './Reveal';
import { GitHubIcon, ExternalLinkIcon, LockIcon } from '../icons';
import { ZoomableImage } from './ZoomableImage';

const linkClass =
  'group/link inline-flex items-center gap-1.5 rounded-md border px-3 py-[7px] text-sm font-semibold transition-colors [&_svg]:size-3.5 [&_svg]:transition-transform [&_svg]:duration-300';

/**
 * Shared hover treatment for project cards: lift, orange edge glow and a slow zoom on the thumbnail.
 * The transition itself comes from the wrapping `Reveal`, which animates transform/border/shadow.
 */
export const cardHoverClass =
  'group hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_0_1px_var(--accent-soft),0_24px_48px_-24px_var(--accent-glow)]';

export const thumbHoverClass = 'transition-transform duration-700 ease-out group-hover:scale-[1.045]';

export const ProjectLinkButton: React.FC<{ link: ProjectLink }> = ({ link }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className={`${linkClass} ${
      link.primary
        ? 'border-transparent bg-accent text-accent-ink hover:bg-accent-hover'
        : 'border-border-strong text-fg hover:border-accent hover:text-accent'
    }`}
  >
    {link.icon === 'code' && <GitHubIcon className="fill-current" />}
    {link.label}
    {link.icon === 'external' && <ExternalLinkIcon className="group-hover/link:-translate-y-px group-hover/link:translate-x-px" />}
  </a>
);

/** Explains why there is no repository link (client work). */
export const ClosedSourceNote: React.FC = () => {
  const { t } = useLocale();
  return (
    <span className="inline-flex items-center gap-1.5 self-center font-mono text-[12px] text-faint [&_svg]:size-3.5">
      <LockIcon />
      {t.projects.closedSource}
    </span>
  );
};

export const ProjectMeta: React.FC<{ project: Project }> = ({ project }) => {
  const { t } = useLocale();
  return (
    <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs text-faint">
      {project.inDevelopment && <Pill accent>{t.projects.inDevelopment}</Pill>}
      <Pill>{t.projects.kinds[project.kind]}</Pill>
      <span>{project.period ?? project.year}</span>
    </div>
  );
};

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <Reveal
    as="article"
    className={`flex flex-col overflow-hidden rounded-lg border border-border bg-surface ${cardHoverClass}`}
  >
    <div className="grid aspect-video grid-cols-[minmax(0,1fr)] grid-rows-[minmax(0,1fr)] place-items-center overflow-hidden border-b border-border bg-surface-2">
      <ZoomableImage
        src={project.thumbnail}
        alt={project.title}
        buttonClassName="min-h-0"
        className={`size-full min-h-0 ${thumbHoverClass} ${project.thumbnailFit === 'contain' ? 'object-contain p-3.5' : 'object-cover'}`}
      />
    </div>
    <div className="flex flex-1 flex-col gap-3 px-5.5 pt-5 pb-5.5">
      <ProjectMeta project={project} />
      <h3 className="font-display text-[22px] font-bold leading-[1.1] tracking-[-0.02em] transition-colors duration-300 group-hover:text-accent">
        {project.title}
      </h3>
      <p className="m-0 text-[15px] text-muted">{project.description}</p>
      <ChipList items={project.tech} />
      <div className="mt-auto flex flex-wrap gap-2 pt-1.5">
        {project.links.map((link) => (
          <ProjectLinkButton key={link.url} link={link} />
        ))}
        {project.closedSource && <ClosedSourceNote />}
      </div>
    </div>
  </Reveal>
);

/**
 * Smaller card for secondary work (FiveM): thumbnail on the side, one-line meta,
 * short description and a single text link. Deliberately quieter than `ProjectCard`.
 */
export const CompactProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <Reveal
    as="article"
    className={`grid grid-cols-[112px_minmax(0,1fr)] gap-4 overflow-hidden rounded-lg border border-border bg-surface p-3.5 sm:grid-cols-[148px_minmax(0,1fr)] ${cardHoverClass}`}
  >
    <div className="aspect-video self-start overflow-hidden rounded-md border border-border bg-surface-2">
      <ZoomableImage src={project.thumbnail} alt={project.title} className={`size-full object-cover ${thumbHoverClass}`} />
    </div>
    <div className="flex min-w-0 flex-col gap-1.5">
      <ProjectMeta project={project} />
      <h3 className="font-display text-[18px] font-bold leading-[1.15] tracking-[-0.02em] transition-colors duration-300 group-hover:text-accent">
        {project.title}
      </h3>
      <p className="m-0 text-[14px] text-muted">{project.description}</p>
      <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-xs text-faint">
        <span className="truncate">{project.tech.join(' · ')}</span>
        {project.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-fg hover:text-accent [&_svg]:size-3"
          >
            {link.label}
            <ExternalLinkIcon />
          </a>
        ))}
      </div>
    </div>
  </Reveal>
);
