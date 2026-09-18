import React from 'react';
import { useGridSnap, useLocale } from '../hooks';
import { CV_URLS, LINKS, PROFILE } from '../constants';
import { Button, ExperienceCard } from '../components/ui';
import { ArrowDownIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from '../components/icons';

const socialClass =
  'inline-grid size-10 place-items-center rounded-md border border-transparent text-muted transition-colors hover:border-border-strong hover:text-accent [&_svg]:size-[18px]';

export const Home: React.FC = () => {
  const { t, locale } = useLocale();
  const sectionRef = useGridSnap<HTMLElement>();
  const topRef = useGridSnap<HTMLDivElement>();

  return (
    <section
      id="home"
      ref={sectionRef}
      className="pad-hero-bottom relative overflow-hidden bg-grid before:pointer-events-none before:absolute before:inset-x-[-10%] before:top-[-20%] before:h-[70%] before:bg-[radial-gradient(ellipse_at_30%_0%,var(--accent-glow)_0%,transparent_60%)] before:content-['']"
    >
      <div ref={topRef} className="pad-hero-top wrap relative grid items-center gap-[clamp(28px,4vw,56px)] md:grid-cols-[minmax(0,11fr)_minmax(0,10fr)]">
        <div>
          <p className="mb-[18px] font-mono text-[13px] tracking-[0.01em] text-accent">{t.hero.eyebrow}</p>
          <p className="mb-[22px] inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface py-1.5 pr-3 pl-2.5 font-mono text-[12.5px] text-muted">
            <span className="size-2 rounded-full bg-ok animate-[status-pulse_2.2s_infinite]" aria-hidden="true" />
            {t.hero.badge}
          </p>
          <h1 className="mb-3.5 font-display text-[clamp(44px,7vw,84px)] font-extrabold leading-[0.98] tracking-[-0.035em] text-balance">
            {PROFILE.name}
          </h1>
          <p className="mb-5 font-mono text-[clamp(17px,2.2vw,22px)] font-medium">
            {t.hero.role}
            <span
              className="ml-1 inline-block h-[1.05em] w-[0.55em] translate-y-[0.15em] bg-accent animate-[caret-blink_1.1s_steps(2,start)_infinite]"
              aria-hidden="true"
            />
          </p>
          <p className="mb-[30px] max-w-[56ch] text-[17px] text-muted">{t.hero.lead}</p>
          <div className="flex flex-wrap items-center gap-3">
            <Button href="#projects">
              {t.hero.ctaProjects}
              <ArrowDownIcon />
            </Button>
            <Button href={CV_URLS[locale]} variant="secondary">
              <DownloadIcon />
              {t.hero.ctaCv}
            </Button>
            <div className="ml-1.5 inline-flex gap-1.5">
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={socialClass}>
                <GitHubIcon className="fill-current" />
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={socialClass}>
                <LinkedInIcon className="fill-current" />
              </a>
              <a href={LINKS.mail} aria-label="Email" className={socialClass}>
                <MailIcon />
              </a>
            </div>
          </div>
        </div>

        <ExperienceCard />
      </div>

      <div className="wrap relative">
        <div className="flex flex-wrap gap-x-7 gap-y-2 border-t border-border pt-[22px] font-mono text-[13px] text-muted">
          {t.hero.stats.map((stat) => (
            <span key={stat} className="before:mr-2 before:text-accent before:content-['#']">
              {stat}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
