import React, { useState } from 'react';
import { STACK, type StackGroup } from '../constants';
import { useLocale } from '../hooks';
import { InfiniteCarousel, LetterText, Reveal, TechIcon } from '../components/ui';
import { BrowserCodeIcon, CheckIcon, DatabaseIcon, ServerIcon, SlidersIcon } from '../components/icons';

const GROUPS: { key: StackGroup; tone: string; Icon: React.FC<{ className?: string }> }[] = [
  { key: 'frontend', tone: 'bg-pink', Icon: BrowserCodeIcon },
  { key: 'backend', tone: 'bg-mint', Icon: ServerIcon },
  { key: 'database', tone: 'bg-yellow', Icon: DatabaseIcon },
  { key: 'tools', tone: 'bg-sky', Icon: SlidersIcon },
];

const toneOf = (group: StackGroup) => GROUPS.find((g) => g.key === group)!.tone;

const rowItems = (groups: StackGroup[]) => groups.flatMap((group) => STACK[group].map((tech) => ({ tech, group })));

export const Stack: React.FC = () => {
  const { t } = useLocale();
  const [selected, setSelected] = useState<StackGroup | null>(null);
  const labels = t.stack.techLabels as Record<string, string>;

  const tile = ({ tech, group }: { tech: string; group: StackGroup }) => {
    const dim = selected !== null && selected !== group;
    return (
      <div
        key={tech}
        className={`mr-4 flex flex-none items-center gap-3.5 rounded-full border-[2.5px] border-line p-3 pr-6 text-ink shadow-hard transition-[translate,rotate,scale,opacity,filter] duration-[350ms] ease-[cubic-bezier(.3,1.8,.5,1)] hover:-translate-y-2 hover:-rotate-2 hover:scale-[1.06] sm:mr-[18px] sm:gap-4 sm:p-3.5 sm:pr-7 ${toneOf(group)} ${
          dim ? 'opacity-30 grayscale' : ''
        }`}
      >
        <span className="grid size-14 shrink-0 place-items-center rounded-full bg-ink text-white [--icon-cutout:#0b0c14] sm:size-16">
          <TechIcon name={tech} className="size-7 fill-current sm:size-[34px]" />
        </span>
        <span>
          <span className="block font-display text-2xl leading-none font-extrabold tracking-[-0.03em] sm:text-[26px]">
            {labels[tech] ?? tech}
          </span>
          <span className="mt-1.5 block font-mono text-xs">{t.stack.groups[group].tag}</span>
        </span>
      </div>
    );
  };

  return (
    <section id="stack" aria-labelledby="stack-title" className="pt-24 pb-6 sm:pt-28">
      <div className="wrap">
        <Reveal className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <h2
            id="stack-title"
            className="font-display text-[clamp(3.25rem,13vw,7.5rem)] leading-none font-extrabold tracking-[-0.05em]"
          >
            <LetterText text={t.stack.title} />
            <span className="text-accent">.</span>
          </h2>
          <p className="max-w-[360px] font-mono text-[13px] sm:text-[15px]">{t.stack.intro}</p>
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map(({ key, tone, Icon }, i) => {
            const on = selected === key;
            const dim = selected !== null && !on;
            const group = t.stack.groups[key];
            return (
              <Reveal key={key} as="li" variant="pop" delay={i * 0.08}>
                <button
                  type="button"
                  aria-pressed={on}
                  title={`${t.stack.pressHint}: ${group.name}`}
                  onClick={() => setSelected(on ? null : key)}
                  className={`group relative block h-full w-full cursor-pointer overflow-hidden rounded-[24px] border-[3px] border-line p-5 text-left text-ink transition-[translate,box-shadow,filter,opacity] duration-[400ms] ease-[cubic-bezier(.3,1.7,.5,1)] hover:-translate-y-2 hover:shadow-[0_14px_0_var(--sh)] active:translate-y-[3px] active:shadow-[0_2px_0_var(--sh)] ${tone} ${
                    on ? '-translate-y-2 shadow-[0_14px_0_var(--sh)]' : 'shadow-hard'
                  } ${dim ? 'opacity-45 grayscale' : ''}`}
                >
                  <Icon
                    className={`pointer-events-none absolute -right-2.5 -bottom-6 size-36 -rotate-[14deg] [stroke-width:1.5] transition-[rotate,scale,translate,opacity] duration-500 ease-[cubic-bezier(.3,1.6,.5,1)] group-hover:translate-x-[-8px] group-hover:translate-y-[-8px] group-hover:rotate-0 group-hover:scale-[1.2] group-hover:opacity-40 ${
                      on ? 'opacity-35' : 'opacity-20'
                    }`}
                  />
                  <span className="relative flex items-start justify-between gap-2">
                    <span className="font-display text-[54px] leading-none font-extrabold tracking-[-0.04em]">
                      {STACK[key].length}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full border-2 border-line px-2.5 py-0.5 font-mono text-xs ${
                        on ? 'bg-ink text-white' : 'bg-white text-ink'
                      }`}
                    >
                      {on && <CheckIcon className="size-3" />}
                      {on ? t.stack.highlighted : t.stack.highlight}
                    </span>
                  </span>
                  <span className="relative mt-3.5 block font-display text-2xl font-extrabold tracking-[-0.03em]">
                    {group.name}
                  </span>
                  <span className="relative mt-1 block text-[15px] leading-snug">{group.desc}</span>
                </button>
              </Reveal>
            );
          })}
        </ul>
      </div>

      <InfiniteCarousel
        label={t.stack.carouselA}
        speed={30}
        className="mt-10 py-5"
        items={rowItems(['frontend', 'backend']).map(tile)}
      />
      <InfiniteCarousel
        label={t.stack.carouselB}
        speed={30}
        reverse
        className="pt-5 pb-6"
        items={rowItems(['database', 'tools']).map(tile)}
      />
    </section>
  );
};
