import React from 'react';
import { getProjects } from '../data/projects';
import { useLocale } from '../hooks';
import { InfiniteCarousel, LetterText, Reveal } from '../components/ui';
import { FiveMCard } from '../components/projects/FiveMCard';
import { WebPoster } from '../components/projects/WebPoster';

const titleClass =
  'font-display text-[clamp(3.25rem,13vw,7.5rem)] leading-none font-extrabold tracking-[-0.05em]';

export const Projects: React.FC = () => {
  const { t, locale } = useLocale();
  const { web, fivem } = getProjects(locale);

  return (
    <>
      <section id="projects" className="wrap pt-6 pb-24 sm:pt-10 sm:pb-28" aria-labelledby="projects-title">
        <Reveal className="mb-12 flex flex-wrap items-center gap-x-6 gap-y-2 sm:mb-16">
          <h2 id="projects-title" className={titleClass}>
            <LetterText text={t.projects.web.title} />
          </h2>
          <p className="max-w-[340px] font-mono text-[13px] sm:text-[15px]">{t.projects.web.intro}</p>
        </Reveal>
        <div className="space-y-20 sm:space-y-28">
          {web.map((project, i) => (
            <WebPoster key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      <section
        id="fivem"
        aria-labelledby="fivem-title"
        className="on-band border-y-[3px] border-(--band-line) bg-band py-20 text-white sm:py-28"
      >
        <div className="wrap">
          <Reveal className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <h2 id="fivem-title" className={titleClass}>
              <LetterText text={t.projects.fivem.title} />
              <span className="text-yellow">.</span>
            </h2>
            <p className="max-w-[400px] font-mono text-[13px] text-[#b5b8cc] sm:text-[15px]">{t.projects.fivem.intro}</p>
          </Reveal>
        </div>
        <InfiniteCarousel
          label={t.projects.fivem.carousel}
          speed={34}
          className="mt-10 py-5 sm:mt-14"
          items={fivem.map((project) => (
            <FiveMCard key={project.id} project={project} />
          ))}
        />
      </section>
    </>
  );
};
