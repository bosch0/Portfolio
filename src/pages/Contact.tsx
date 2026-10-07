import React, { useRef, type CSSProperties } from 'react';
import { CONTACT_ORBIT, CV_URLS, LINKS, PROFILE } from '../constants';
import { useCopy, useLocale } from '../hooks';
import { Button, LetterText, Reveal, TechOrbit } from '../components/ui';
import { AsteriskIcon, CheckIcon, DownloadIcon, MailIcon } from '../components/icons';
import { GitHubIcon, LinkedInIcon } from '../components/icons';

const CONFETTI_COLORS = ['#ffe45c', '#ff6bd6', '#7cf5b0', '#ffffff', '#ff8a4c', '#9cc4ff'];
const PIECES = 14;

const Confetti: React.FC = () => (
  <span aria-hidden="true" className="pointer-events-none absolute inset-0">
    {Array.from({ length: PIECES }, (_, i) => {
      const angle = (i / PIECES) * Math.PI * 2;
      const distance = 90 + (i % 3) * 45;
      return (
        <span
          key={i}
          className="confetti-piece"
          style={
            {
              background: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
              borderRadius: i % 2 ? '999px' : '2px',
              '--dx': `${Math.round(Math.cos(angle) * distance)}px`,
              '--dy': `${Math.round(Math.sin(angle) * distance)}px`,
              '--rot': `${i * 47}deg`,
            } as CSSProperties
          }
        />
      );
    })}
  </span>
);

const iconBox = 'grid size-[30px] shrink-0 place-items-center rounded-lg bg-ink text-white';

export const Contact: React.FC = () => {
  const { t, locale } = useLocale();
  const { copied, copy, burst } = useCopy();
  const magnet = useRef<HTMLDivElement>(null);
  const [first, second] = t.contact.ticker;

  const pull = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = magnet.current;
    if (!el || e.pointerType !== 'mouse') return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--tx', `${((e.clientX - (r.left + r.width / 2)) * 0.25).toFixed(1)}px`);
    el.style.setProperty('--ty', `${((e.clientY - (r.top + r.height / 2)) * 0.25).toFixed(1)}px`);
  };
  const release = () => {
    magnet.current?.style.setProperty('--tx', '0px');
    magnet.current?.style.setProperty('--ty', '0px');
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="wrap pt-4 pb-20 sm:pb-24">
      <Reveal>
        <div className="on-blue relative overflow-hidden rounded-[32px] border-[3px] border-line bg-blue px-5 pt-12 text-white shadow-hard-lg sm:rounded-[44px] sm:px-12 sm:pt-16 lg:px-16 lg:pt-[72px]">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-8">
            <div>
              <p className="font-mono text-[13px] sm:text-[15px]">{t.contact.eyebrow}</p>
              <h2
                id="contact-title"
                className="mt-2 font-display text-[clamp(3.25rem,14.5vw,8.5rem)] leading-[.9] font-extrabold tracking-[-0.05em] lg:text-[clamp(4rem,8vw,8.5rem)]"
              >
                <LetterText text={t.contact.title} />
              </h2>
              <p className="mt-6 max-w-[600px] text-lg leading-normal sm:text-2xl">{t.contact.lead}</p>

              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-6">
                <div ref={magnet} onPointerMove={pull} onPointerLeave={release} className="relative -m-4 grow sm:grow-0 p-4">
                  <span
                    className="relative flex transition-[translate] sm:inline-flex duration-200 ease-out"
                    style={{ translate: 'var(--tx, 0px) var(--ty, 0px)' }}
                  >
                    <Button href={LINKS.mail} variant="yellow" size="xl" className="w-full" aria-label={`${t.contact.mail} ${PROFILE.email}`}>
                      {PROFILE.email}
                    </Button>
                    <span className="pointer-events-none absolute -top-2.5 -right-1.5 inline-flex rotate-[5deg] items-center gap-1.5 rounded-full border-[2.5px] border-line bg-mint px-2.5 py-0.5 font-mono text-[11px] font-medium whitespace-nowrap text-ink shadow-hard-sm">
                      <span aria-hidden="true" className="pulse-dot size-1.5 rounded-full bg-ink" />
                      {t.contact.reply}
                    </span>
                  </span>
                </div>
                <span className="relative flex grow sm:grow-0">
                  <Button className="w-full" variant={copied ? 'yellow' : 'light'} onClick={() => copy(PROFILE.email)} aria-live="polite">
                    {copied && <CheckIcon className="size-[18px]" />}
                    {copied ? t.contact.copied : t.contact.copy}
                  </Button>
                  {burst > 0 && <Confetti key={burst} />}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <Button href={LINKS.linkedin} variant="card" className="grow sm:grow-0">
                  <span className={iconBox}>
                    <LinkedInIcon className="size-[17px] fill-current" />
                  </span>
                  LinkedIn
                </Button>
                <Button href={LINKS.github} variant="card" className="grow sm:grow-0">
                  <span className={iconBox}>
                    <GitHubIcon className="size-[17px] fill-current" />
                  </span>
                  GitHub
                </Button>
                <Button href={CV_URLS[locale]} variant="card" className="grow sm:grow-0">
                  <span className={iconBox}>
                    <DownloadIcon className="size-[17px]" />
                  </span>
                  {t.contact.cv}
                </Button>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[320px] lg:max-w-none">
              <TechOrbit
                inner={CONTACT_ORBIT.inner}
                outer={CONTACT_ORBIT.outer}
                label={t.contact.orbitLabel}
                guideClass="border-white/40"
              >
                <a
                  href={LINKS.mail}
                  aria-label={`${t.contact.mail} ${PROFILE.email}`}
                  className="absolute top-1/2 left-1/2 z-3 -mt-[17.6cqw] -ml-[17.6cqw] grid size-[35.2cqw] place-items-center rounded-full border-[3px] border-line bg-yellow text-ink shadow-hard-md transition-[transform,translate,rotate,scale,box-shadow] duration-300 ease-[cubic-bezier(.3,1.7,.5,1)] hover:-rotate-[8deg] hover:scale-[1.08] active:scale-95 active:shadow-[0_3px_0_var(--sh)]"
                >
                  <MailIcon className="size-[48%] [stroke-width:1.7]" />
                </a>
              </TechOrbit>
            </div>
          </div>

          <div aria-hidden="true" className="-mx-5 mt-12 overflow-hidden bg-ink py-4 text-yellow sm:-mx-12 sm:mt-14 lg:-mx-16">
            <div className="ticker-track font-display text-[32px] leading-none font-extrabold tracking-[-0.03em] whitespace-nowrap sm:text-[44px]">
              {[0, 1].map((group) => (
                <div key={group} className="flex shrink-0 items-center gap-[22px] pr-[22px]">
                  {Array.from({ length: 6 }, (_, i) => (
                    <React.Fragment key={i}>
                      <span>{first}</span>
                      <AsteriskIcon className="size-[.62em] stroke-[3.2]" />
                      <span>{second}</span>
                      <AsteriskIcon className="size-[.62em] stroke-[3.2]" />
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
