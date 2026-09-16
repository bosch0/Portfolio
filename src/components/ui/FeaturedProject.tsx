import React from 'react';
import type { Project } from '../../types';
import { useLocale } from '../../hooks';
import { Pill } from './Pill';
import { ChipList } from './Chip';
import { Reveal } from './Reveal';
import { ProjectLinkButton, ClosedSourceNote, cardHoverClass, thumbHoverClass } from './ProjectCard';
import { ZoomableImage } from './ZoomableImage';

export const FeaturedProject: React.FC<{ project: Project }> = ({ project }) => {
  const { t } = useLocale();

  return (
    <Reveal
      as="article"
      className={`mb-5 grid overflow-hidden rounded-lg border border-border bg-surface shadow-card md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] ${cardHoverClass}`}
    >
      <div className="overflow-hidden border-b border-border bg-surface-2 md:border-r md:border-b-0">
        <ZoomableImage
          src={project.thumbnail}
          alt={project.title}
          className={`aspect-video size-full object-cover ${thumbHoverClass}`}
        />
      </div>
      <div className="flex flex-col gap-3.5 p-[clamp(22px,3vw,34px)]">
        <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs text-faint">
          {project.inDevelopment && <Pill accent>{t.projects.inDevelopment}</Pill>}
          <Pill>{t.projects.featured}</Pill>
          <span>{project.period ?? project.year}</span>
        </div>
        <h3 className="font-display text-[26px] font-bold leading-[1.1] tracking-[-0.02em] transition-colors duration-300 group-hover:text-accent">
          {project.title}
        </h3>
        <p className="m-0 text-[15px] text-muted">{project.description}</p>
        {project.features && (
          <ul className="m-0 grid list-none gap-1.5 p-0 text-[14.5px]">
            {project.features.map((feature) => (
              <li key={feature} className="relative pl-[18px] before:absolute before:left-0.5 before:font-mono before:font-semibold before:text-accent before:content-['›']">
                {feature}
              </li>
            ))}
          </ul>
        )}
        <ChipList items={project.tech} />
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-1.5">
          {project.links.map((link) => (
            <ProjectLinkButton key={link.url} link={link} />
          ))}
          {project.closedSource && <ClosedSourceNote />}
        </div>
      </div>
    </Reveal>
  );
};
