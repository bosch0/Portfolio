import React from 'react';
import { getTimeline } from '../../data/timeline';
import { useLocale } from '../../hooks';

export const Timeline: React.FC = () => {
  const { locale } = useLocale();
  const items = getTimeline(locale);

  return (
    <ol className="relative m-0 grid list-none gap-3.5 p-0 pl-6 before:absolute before:top-2 before:bottom-2 before:left-1 before:w-px before:bg-border-strong before:content-['']">
      {items.map((item) => (
        <li
          key={item.period}
          className={`relative grid grid-cols-[84px_1fr] items-baseline gap-3 text-[14.5px] before:absolute before:top-[7px] before:-left-6 before:size-[9px] before:rounded-full before:border-2 before:content-[''] ${
            item.current
              ? 'before:border-accent before:bg-accent before:shadow-[0_0_0_4px_var(--accent-soft)]'
              : 'before:border-border-strong before:bg-bg'
          }`}
        >
          <time className="font-mono text-[12.5px] text-accent tabular-nums">{item.period}</time>
          <span className={item.current ? 'text-fg' : 'text-muted'}>{item.text}</span>
        </li>
      ))}
    </ol>
  );
};
