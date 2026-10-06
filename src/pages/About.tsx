import React from 'react';
import { CV_URLS } from '../constants';
import { useLocale } from '../hooks';
import { Button, LetterText, Reveal } from '../components/ui';
import { ArrowRightIcon, CartIcon, DownloadIcon, GlobeIcon, GraduationIcon, PinIcon, PulseIcon } from '../components/icons';

interface FactCardProps {
  tone: string;
  Icon: React.FC<{ className?: string }>;
  label: string;
  title: string;
  detail: string;
  delay: number;
  wide?: boolean;
}

/** Fact card with a large faded line icon in the background that straightens up on hover. */
const FactCard: React.FC<FactCardProps> = ({ tone, Icon, label, title, detail, delay, wide = false }) => (
  <Reveal variant="pop" delay={delay} className={wide ? 'sm:col-span-2' : ''}>
    <div
      className={`group relative h-full overflow-hidden rounded-[24px] border-[3px] border-line p-5 shadow-hard transition-transform duration-[350ms] ease-[cubic-bezier(.3,1.7,.5,1)] hover:-translate-y-1.5 hover:-rotate-1 sm:px-6 sm:py-[22px] ${tone}`}
    >
      <Icon className="pointer-events-none absolute -right-3.5 -bottom-6 size-[150px] -rotate-[14deg] opacity-20 [stroke-width:1.5] transition-[rotate,scale,translate,opacity] duration-500 ease-[cubic-bezier(.3,1.6,.5,1)] group-hover:translate-x-[-8px] group-hover:translate-y-[-8px] group-hover:rotate-0 group-hover:scale-[1.15] group-hover:opacity-35" />
      <p className="relative font-mono text-xs uppercase">{label}</p>
      <p className="relative mt-2.5 font-display text-[21px] leading-[1.15] font-extrabold tracking-[-0.02em] sm:text-2xl">{title}</p>
      <p className="relative mt-2 max-w-[420px] text-[15px] leading-normal">{detail}</p>
    </div>
  </Reveal>
);

export const About: React.FC = () => {
  const { t, locale } = useLocale();
  const { facts } = t.about;

  return (
    <section id="about" aria-labelledby="about-title" className="wrap py-24 sm:py-28">
      <Reveal>
        <h2
          id="about-title"
          className="font-display text-[clamp(3.25rem,13vw,7.5rem)] leading-none font-extrabold tracking-[-0.05em]"
        >
          <LetterText text={t.about.title} />
          <span className="text-accent">.</span>
        </h2>
      </Reveal>

      <div className="mt-10 grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-7">
          <p className="font-display text-[clamp(1.75rem,4.4vw,2.9rem)] leading-[1.2] font-extrabold tracking-[-0.03em]">
            {t.about.statement.map((part, i) =>
              'mark' in part ? (
                <mark key={i} className="mark">
                  {part.text}
                </mark>
              ) : (
                <React.Fragment key={i}>{part.text}</React.Fragment>
              ),
            )}
          </p>
          <p className="mt-7 max-w-[620px] text-lg leading-relaxed sm:text-xl">{t.about.body}</p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <Button href="#contact">
              {t.header.cta}
              <ArrowRightIcon className="size-[18px]" />
            </Button>
            <Button href={CV_URLS[locale]} variant="card">
              {t.hero.ctaCv}
              <DownloadIcon className="size-[18px]" />
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5">
          <FactCard tone="bg-pink text-ink" Icon={GraduationIcon} delay={0} {...facts.education} />
          <FactCard tone="bg-yellow text-ink" Icon={CartIcon} delay={0.1} {...facts.ecommerce} />
          <FactCard tone="bg-mint text-ink" Icon={GlobeIcon} delay={0.2} {...facts.languages} />
          <FactCard tone="bg-sky text-ink" Icon={PinIcon} delay={0.3} {...facts.location} />
          <FactCard tone="bg-blue text-white" Icon={PulseIcon} delay={0.4} wide {...facts.internship} />
        </div>
      </div>
    </section>
  );
};
