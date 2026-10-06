import React, { useRef } from 'react';
import type { Project, PosterTone } from '../../types';
import { useLocale } from '../../hooks';
import { Button, Reveal, StatusChip, TechIcon } from '../ui';
import { ExternalLinkIcon } from '../icons';

const TONES: Record<PosterTone, string> = {
  pink: 'bg-pink',
  mint: 'bg-mint',
  yellow: 'bg-yellow',
};

interface WebPosterProps {
  project: Project;
  index: number;
}

/**
 * A big project "poster": the screenshot sits in a browser frame over a pastel block, both drifting with the
 * pointer. Clicking the screenshot opens the project; text and tech icons sit beside it.
 */
export const WebPoster: React.FC<WebPosterProps> = ({ project, index }) => {
  const { t } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const flip = index % 2 === 1;
  const pending = project.status === 'development' || project.status === 'developmentClient';

  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    el.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };
  const leave = () => {
    ref.current?.style.setProperty('--mx', '0');
    ref.current?.style.setProperty('--my', '0');
  };

  return (
    <article className="grid items-center gap-8 md:grid-cols-12 md:gap-10">
      <Reveal variant={flip ? 'right' : 'left'} className={`md:col-span-7 ${flip ? 'md:order-2' : ''}`}>
        <div ref={ref} onPointerMove={move} onPointerLeave={leave} className="group/poster relative p-3.5 sm:p-7">
          <div
            aria-hidden="true"
            className={`px-back absolute inset-0 rounded-[28px] border-[3px] border-line sm:rounded-[32px] ${TONES[project.tone ?? 'yellow']}`}
          />
          <a
            href={project.mainLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-front relative block overflow-hidden rounded-[18px] border-[3px] border-line bg-ink no-underline shadow-[0_12px_0_var(--sh)]"
          >
            <span className="sr-only">{project.title}</span>
            <span className="flex items-center gap-1.5 border-b-[3px] border-line bg-card px-3.5 py-2.5">
              <i aria-hidden="true" className="size-[11px] rounded-full bg-[#ff6b6b]" />
              <i aria-hidden="true" className="size-[11px] rounded-full bg-[#ffd43b]" />
              <i aria-hidden="true" className="size-[11px] rounded-full bg-[#51cf66]" />
              <span className="ml-3 truncate font-mono text-xs text-fg">{project.host}</span>
            </span>
            <span className="relative block overflow-hidden">
              <img
                src={project.thumbnail}
                alt=""
                loading="lazy"
                width={1280}
                height={800}
                className="block aspect-[16/10] w-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover/poster:scale-[1.06]"
              />
              <span className="absolute right-3 bottom-3 inline-flex translate-y-5 items-center gap-2 rounded-full border-[2.5px] border-line bg-yellow px-4 py-2 font-extrabold text-ink opacity-0 shadow-hard-sm transition-[transform,translate,rotate,scale,opacity] duration-[350ms] ease-[cubic-bezier(.3,1.6,.5,1)] group-focus-within/poster:translate-y-0 group-focus-within/poster:opacity-100 group-hover/poster:translate-y-0 group-hover/poster:opacity-100 pointer-coarse:translate-y-0 pointer-coarse:opacity-100 sm:right-4 sm:bottom-4 sm:px-5 sm:py-2.5 sm:text-base">
                {project.mainLink.label}
                <ExternalLinkIcon className="size-4" />
              </span>
            </span>
          </a>
        </div>
      </Reveal>

      <Reveal variant={flip ? 'left' : 'right'} className={`md:col-span-5 ${flip ? 'md:order-1' : ''}`}>
        <p className="font-display text-[28px] font-extrabold text-accent">{String(index + 1).padStart(2, '0')}</p>
        <h3 className="mt-1 font-display text-[clamp(2.5rem,8vw,5.5rem)] leading-[.92] font-extrabold tracking-[-0.05em] md:text-[clamp(2.5rem,5.4vw,5.5rem)]">
          {project.title}
        </h3>
        <StatusChip pending={pending} className="mt-5">
          {t.projects.status[project.status]}
        </StatusChip>
        <p className="mt-5 text-lg leading-normal">{project.description}</p>
        <ul className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 [--icon-cutout:var(--bg)]" aria-label={project.tech.join(', ')}>
          {project.tech.map((tech) => (
            <li key={tech} title={tech}>
              <TechIcon
                name={tech}
                className="size-[26px] fill-current text-fg transition-transform duration-300 ease-[cubic-bezier(.3,1.8,.5,1)] hover:-translate-y-1 hover:-rotate-[8deg] hover:scale-[1.2]"
              />
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3.5">
          {project.links.map((link, i) => (
            <Button key={link.url} href={link.url} variant={i === 0 ? 'primary' : 'card'}>
              {link.label}
              <ExternalLinkIcon className="size-[18px]" />
            </Button>
          ))}
        </div>
      </Reveal>
    </article>
  );
};
