import React from 'react';
import type { Project } from '../../types';
import { useLocale } from '../../hooks';
import { ActionLink, TechIcon, useImageViewer } from '../ui';
import { ExpandIcon } from '../icons';

/** One FiveM project: the image opens the full-screen viewer, the pill at the bottom opens the project. */
export const FiveMCard: React.FC<{ project: Project }> = ({ project }) => {
  const { t } = useLocale();
  const viewer = useImageViewer();
  const pending = project.status === 'development';

  return (
    <article className="mr-5 flex w-[min(82vw,420px)] flex-none flex-col overflow-hidden rounded-[28px] border-2 border-[#303034] bg-[#161618] text-[#f4f4f4] transition-[transform,translate,rotate,scale,border-color] duration-[350ms] ease-[cubic-bezier(.3,1.6,.5,1)] hover:-translate-y-2.5 hover:border-yellow sm:mr-6">
      <button
        type="button"
        aria-label={`${t.projects.fivem.enlargeLabel} ${project.title}`}
        onClick={() =>
          viewer.open({
            title: project.title,
            image: project.thumbnail,
            status: t.projects.status[project.status],
            year: project.period ?? String(project.year),
            link: project.mainLink,
          })
        }
        className="group/zoom relative block h-[200px] w-full cursor-zoom-in overflow-hidden bg-black sm:h-[240px]"
      >
        <img
          src={project.thumbnail}
          alt=""
          loading="lazy"
          draggable={false}
          className="size-full object-cover transition-transform duration-[600ms] group-hover/zoom:scale-110"
        />
        <span className="absolute right-3.5 bottom-3.5 inline-flex translate-y-4 scale-90 items-center gap-2 rounded-full border-[2.5px] border-[#0b0c14] bg-yellow px-4 py-2 text-sm font-extrabold text-ink opacity-0 transition-[transform,translate,rotate,scale,opacity] duration-300 ease-[cubic-bezier(.3,1.6,.5,1)] group-hover/zoom:translate-y-0 group-hover/zoom:scale-100 group-hover/zoom:opacity-100 group-focus-visible/zoom:translate-y-0 group-focus-visible/zoom:scale-100 group-focus-visible/zoom:opacity-100 pointer-coarse:translate-y-0 pointer-coarse:scale-100 pointer-coarse:opacity-100">
          <ExpandIcon className="size-4" />
          {t.projects.fivem.enlarge}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-5 pb-6 sm:px-6">
        <div className="flex items-center justify-between gap-3 font-mono text-xs">
          <span className="inline-flex items-center gap-2" style={{ color: pending ? '#ffc93d' : '#7cf5b0' }}>
            <span aria-hidden="true" className="size-2 rounded-full" style={{ background: 'currentColor' }} />
            {t.projects.status[project.status]}
          </span>
          <span className="text-[#b5b8cc]">{project.period ?? project.year}</span>
        </div>
        <h3 className="mt-3 font-display text-[28px] leading-none font-extrabold tracking-[-0.04em] sm:text-3xl">{project.title}</h3>
        <p className="mt-2.5 text-[15px] leading-normal text-[#b5b8cc]">{project.description}</p>
        <ul className="mt-3.5 mb-6 flex items-center gap-2.5" aria-label={project.tech.join(', ')}>
          {project.tech.map((tech) => (
            <li key={tech} title={tech}>
              <TechIcon
                name={tech}
                className="size-7 fill-current transition-transform duration-300 ease-[cubic-bezier(.3,1.8,.5,1)] hover:-translate-y-1 hover:-rotate-[8deg] hover:scale-[1.2]"
              />
            </li>
          ))}
        </ul>
        <ActionLink href={project.mainLink.url} className="mt-auto self-start">
          {project.mainLink.label}
        </ActionLink>
      </div>
    </article>
  );
};
