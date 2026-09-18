import React from 'react';
import { useCopy, useGridSnap, useLocale } from '../hooks';
import { CV_URLS, LINKS, PROFILE } from '../constants';
import { Button, Path, Reveal } from '../components/ui';
import { DownloadIcon, GitHubIcon, LinkedInIcon } from '../components/icons';

export const Contact: React.FC = () => {
  const { t, locale } = useLocale();
  const { copied, copy } = useCopy();
  const ref = useGridSnap<HTMLElement>();

  return (
    <section id="contact" ref={ref} className="pad-section scroll-mt-16 border-t border-border bg-grid">
      <div className="wrap">
        <Reveal className="relative overflow-hidden rounded-lg border border-border bg-surface p-[clamp(28px,5vw,56px)] text-center shadow-card before:pointer-events-none before:absolute before:inset-x-[-10%] before:-bottom-[60%] before:h-[80%] before:bg-[radial-gradient(ellipse_at_50%_100%,var(--accent-glow)_0%,transparent_60%)] before:content-['']">
          <div className="relative">
            <Path className="mb-3.5 block">{t.contact.path}</Path>
            <h2 className="mb-4 font-display text-[clamp(36px,6vw,64px)] font-bold leading-[1.05] tracking-[-0.03em] text-balance">
              {t.contact.title}
            </h2>
            <p className="mx-auto mb-[26px] max-w-[56ch] text-[17px] text-muted">{t.contact.lead}</p>

            <div className="mb-[18px] inline-flex max-w-full items-stretch overflow-hidden rounded-md border border-border-strong font-mono text-[15px]">
              <a href={LINKS.mail} className="bg-surface-2 px-4 py-[11px] text-fg wrap-anywhere hover:text-accent">
                {PROFILE.email}
              </a>
              <button
                type="button"
                onClick={() => copy(PROFILE.email)}
                className={`border-l border-border-strong px-3.5 font-mono text-[12.5px] whitespace-nowrap transition-colors hover:cursor-pointer ${
                  copied ? 'text-ok' : 'text-muted hover:text-accent'
                }`}
                aria-live="polite"
              >
                {copied ? t.contact.copied : t.contact.copy}
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5">
              <Button href={LINKS.linkedin} variant="secondary" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="fill-current" />
                LinkedIn
              </Button>
              <Button href={LINKS.github} variant="secondary" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="fill-current" />
                GitHub
              </Button>
              <Button href={CV_URLS[locale]}>
                <DownloadIcon />
                {t.contact.cv}
              </Button>
            </div>

            <p className="mt-[26px] font-mono text-[12.5px] text-faint">{t.contact.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
