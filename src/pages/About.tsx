import React from 'react';
import { useLocale } from '../hooks';
import { STACK, type StackGroup } from '../constants';
import { Section, Reveal, ChipList, Timeline } from '../components/ui';
import { GraduationIcon, CartIcon, GlobeIcon, PinIcon } from '../components/icons';

const Label: React.FC<{ children: string; className?: string }> = ({ children, className = '' }) => (
  <h3 className={`mb-3.5 font-mono text-[12.5px] font-semibold tracking-[0.08em] text-faint uppercase ${className}`}>{children}</h3>
);

const Fact: React.FC<{ icon: React.ReactNode; title: string; detail: string }> = ({ icon, title, detail }) => (
  <div className="grid grid-cols-[22px_1fr] items-start gap-3 text-[14.5px]">
    <span className="mt-[3px] text-accent [&_svg]:size-[18px]">{icon}</span>
    <div>
      <b className="block font-semibold">{title}</b>
      <span className="text-muted">{detail}</span>
    </div>
  </div>
);

export const About: React.FC = () => {
  const { t } = useLocale();
  const groups = Object.keys(STACK) as StackGroup[];
  const { facts } = t.about;

  return (
    <Section id="about" path={t.about.path} title={t.about.title}>
      <div className="grid gap-[clamp(32px,5vw,64px)] md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <Reveal>
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-4 max-w-[62ch] text-muted">
              {paragraph}
            </p>
          ))}
          <Label className="mt-8">{t.about.logTitle}</Label>
          <Timeline />
        </Reveal>

        <Reveal as="aside" className="grid content-start gap-7">
          <div>
            <Label>{t.about.stackTitle}</Label>
            {groups.map((group) => (
              <div key={group} className="mb-4 last:mb-0">
                <div className="mb-2 font-mono text-xs text-accent">{t.about.groups[group]}</div>
                <ChipList items={STACK[group]} labels={t.about.techLabels} withIcon chipClassName="text-fg" />
              </div>
            ))}
          </div>
          <div>
            <Label>{t.about.factsTitle}</Label>
            <div className="grid gap-3.5">
              <Fact icon={<GraduationIcon />} title={facts.education.title} detail={facts.education.detail} />
              <Fact icon={<CartIcon />} title={facts.ecommerce.title} detail={facts.ecommerce.detail} />
              <Fact icon={<GlobeIcon />} title={facts.languages.title} detail={facts.languages.detail} />
              <Fact icon={<PinIcon />} title={facts.location.title} detail={facts.location.detail} />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};
