import React from 'react';
import { useLocale } from '../hooks';
import { getProjects } from '../data/projects';
import { Section, FeaturedProject, ProjectCard, CompactProjectCard, Reveal } from '../components/ui';

export const Projects: React.FC = () => {
  const { t, locale } = useLocale();
  const { featured, web, fivem } = getProjects(locale);

  return (
    <Section id="projects" path={t.projects.path} title={t.projects.title} intro={t.projects.intro}>
      <FeaturedProject project={featured} />
      <div className="grid gap-5 sm:grid-cols-2">
        {web.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Reveal className="mt-12 mb-5 max-w-[62ch]">
        <p className="mb-1.5 font-mono text-[13px] text-accent">{t.projects.fivem.eyebrow}</p>
        <h3 className="mb-2 font-display text-[clamp(22px,2.6vw,28px)] font-bold leading-[1.1] tracking-[-0.02em]">
          {t.projects.fivem.title}
        </h3>
        <p className="m-0 text-[15px] text-muted">{t.projects.fivem.intro}</p>
      </Reveal>
      <div className="grid gap-4 lg:grid-cols-2">
        {fivem.map((project) => (
          <CompactProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};
