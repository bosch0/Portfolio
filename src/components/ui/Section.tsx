import React from 'react';
import type { SectionProps } from '../../types';
import { useGridSnap } from '../../hooks';
import { Reveal } from './Reveal';

export const Path: React.FC<{ children: string; className?: string }> = ({ children, className = '' }) => (
  <span className={`font-mono text-[13px] text-accent before:text-faint before:content-['$_cd_'] ${className}`}>
    {children}
  </span>
);

export const Section: React.FC<SectionProps> = ({ id, path, title, intro, children, className = '' }) => {
  const ref = useGridSnap<HTMLElement>();

  return (
  <section id={id} ref={ref} className={`pad-section scroll-mt-16 border-t border-border bg-grid ${className}`}>
    <div className="wrap">
      <Reveal className="mb-9 flex flex-wrap items-baseline gap-x-6 gap-y-1.5">
        <Path>{path}</Path>
        <h2 className="basis-full font-display text-[clamp(30px,4vw,44px)] font-bold leading-[1.05] tracking-[-0.03em] text-balance">
          {title}
        </h2>
        {intro && <p className="m-0 max-w-[60ch] text-muted">{intro}</p>}
      </Reveal>
      {children}
    </div>
  </section>
  );
};
