import React, { type CSSProperties } from 'react';
import { CV_URLS } from '../constants';
import { getProjects } from '../data/projects';
import { useLocale } from '../hooks';
import { Button, LetterText } from '../components/ui';
import { HeroPortrait } from '../components/home/HeroPortrait';
import { StatCard } from '../components/home/StatCard';
import { ArrowDownIcon, DownloadIcon } from '../components/icons';
import { Journey } from './Journey';

const delay = (s: number) => ({ '--d': `${s}s` }) as CSSProperties;

export const Home: React.FC = () => {
  const { t, locale } = useLocale();
  const { web, fivem } = getProjects(locale);
  const [first, second, third] = t.hero.lines;

  return (
    <>
      <section
        id="home"
        className="wrap grid items-center gap-12 pt-10 pb-16 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_clamp(320px,38vw,500px)] lg:gap-6 lg:pb-20"
      >
        <div>
          <p
            className="fade-up flex items-center gap-2.5 font-mono text-[13px] sm:text-[15px]"
            style={delay(0.05)}
          >
            <span aria-hidden="true" className="pulse-dot size-2 shrink-0 rounded-full bg-[#17a34a]" />
            {t.hero.eyebrow}
          </p>

          <h1 className="mt-5 font-display text-[clamp(2.75rem,14vw,6.5rem)] leading-[.92] font-extrabold tracking-[-0.05em] lg:text-[clamp(4.5rem,8.6vw,7.9rem)]">
            {[first, second, third].map((line, i) => (
              <span key={line} className="mask-line">
                <span style={delay(0.05 + i * 0.15)}>
                  <span className={i === 2 ? 'text-accent' : undefined}>
                    <LetterText text={line} />
                  </span>
                </span>
              </span>
            ))}
          </h1>

          <StatCard projectCount={web.length + fivem.length} className="mt-9 w-full max-w-[580px]" />

          <p className="fade-up mt-8 max-w-[620px] text-lg sm:text-xl" style={delay(0.7)}>
            {t.hero.lead}
          </p>

          <div className="fade-up mt-8 flex flex-wrap gap-4" style={delay(0.85)}>
            <Button href="#projects" size="lg">
              {t.hero.ctaProjects}
              <ArrowDownIcon className="size-5" />
            </Button>
            <Button href={CV_URLS[locale]} variant="card" size="lg">
              {t.hero.ctaCv}
              <DownloadIcon className="size-5" />
            </Button>
          </div>
        </div>

        <HeroPortrait />
      </section>

      <Journey />
    </>
  );
};
