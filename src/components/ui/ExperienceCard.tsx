import React from 'react';
import { useLocale } from '../../hooks';
import { Avatar } from './Avatar';
import { ChipList } from './Chip';

/**
 * Hero side card: a short timeline (freelance → EIG → NaturalSoft → FCT slot).
 * The last item is the open internship slot a company can fill, so it is highlighted.
 */
export const ExperienceCard: React.FC = () => {
  const { t } = useLocale();
  const card = t.hero.card;
  const last = card.items.length - 1;

  return (
    <div
      className="overflow-hidden rounded-lg border border-border bg-surface text-[14px] leading-normal shadow-card"
      role="group"
      aria-label={t.meta.summary}
    >
      <div className="flex items-center gap-3 border-b border-border px-[22px] py-[15px]">
        <Avatar size="sm" />
        <p className="m-0 font-display text-[18px] font-bold tracking-[-0.02em]">{card.title}</p>
        <span className="ml-auto font-mono text-[12.5px] text-muted">{card.range}</span>
      </div>
      <ol className="relative m-0 grid list-none gap-4 px-[22px] pt-[18px] pb-5 before:absolute before:top-[26px] before:bottom-[30px] before:left-[84px] before:w-px before:bg-border-strong before:content-['']">
        {card.items.map((item, index) => {
          const open = index === last;
          return (
            <li
              key={item.title}
              className={`relative grid grid-cols-[52px_1fr] gap-[22px] before:absolute before:top-2 before:left-[57px] before:z-[1] before:size-[9px] before:rounded-full before:border-2 before:content-[''] ${
                open
                  ? 'before:border-ok before:bg-ok before:animate-[status-pulse_2.2s_infinite]'
                  : 'before:border-border-strong before:bg-surface'
              }`}
            >
              <time className={`pt-0.5 text-right font-mono text-[12.5px] ${open ? 'text-ok' : 'text-accent'}`}>
                {item.period}
              </time>
              <div className={open ? '-mx-3 -my-2.5 rounded-md bg-accent-soft px-3 py-2.5' : ''}>
                <p className={`m-0 font-semibold ${open ? 'text-accent' : 'text-fg'}`}>{item.title}</p>
                <p className="m-0 text-[13.5px] text-muted">{item.text}</p>
                {item.stack.length > 0 && (
                  <div className="mt-1.5">
                    <ChipList items={item.stack} />
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
