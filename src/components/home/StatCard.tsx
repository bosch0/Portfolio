import React, { useEffect, useState, type CSSProperties } from 'react';
import { useLocale, usePrefersReducedMotion } from '../../hooks';
import { ArrowRightIcon } from '../icons';

interface StatCardProps {
  /** Replaces the `{count}` placeholder in the stats copy. */
  projectCount: number;
  className?: string;
}

const INTERVAL_MS = 3400;

/**
 * Blue card that cycles through a few headline numbers. The whole card is clickable (next),
 * the round arrow does the same for keyboard users, and the dots jump to a given item.
 */
export const StatCard: React.FC<StatCardProps> = ({ projectCount, className = '' }) => {
  const { t } = useLocale();
  const reduced = usePrefersReducedMotion();
  const slides = t.hero.stats.items;
  const [index, setIndex] = useState(0);
  // Bumped on every manual change so the auto-advance timer starts over.
  const [round, setRound] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduced, slides.length, round]);

  const go = (next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
    setRound((r) => r + 1);
  };

  return (
    <div
      role="group"
      aria-label={t.hero.stats.label}
      onClick={() => go(index + 1)}
      style={{ '--d': '.55s' } as CSSProperties}
      className={`fade-up group/stat relative h-[120px] cursor-pointer overflow-hidden rounded-[28px] border-[3px] border-line bg-blue text-white shadow-hard-md transition-[transform,translate,rotate,scale,box-shadow] duration-150 hover:translate-y-[3px] hover:shadow-[0_5px_0_var(--sh)] active:translate-y-1.5 active:shadow-[0_2px_0_var(--sh)] sm:h-[136px] ${className}`}
    >
      <div
        className="transition-transform duration-[750ms] ease-[cubic-bezier(.6,0,.15,1)]"
        style={{ transform: `translateY(-${(index * 100) / slides.length}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            aria-hidden={i !== index}
            className="flex h-[120px] items-center gap-2 pr-[88px] pl-4 sm:h-[136px] sm:gap-[18px] sm:pr-[150px] sm:pl-[30px]"
          >
            <span className="w-[84px] shrink-0 text-center font-display text-[44px] leading-none font-extrabold tracking-[-0.05em] text-yellow sm:w-[150px] sm:text-[76px]">
              {slide.value.replace('{count}', String(projectCount))}
            </span>
            <span className="min-w-0">
              <b className="block text-base leading-[1.1] font-extrabold tracking-[-0.02em] sm:text-2xl">{slide.title}</b>
              <i className="mt-1.5 block font-mono text-[11px] leading-snug opacity-85 not-italic sm:text-[13px]">{slide.detail}</i>
            </span>
          </div>
        ))}
      </div>

      <div className="absolute inset-y-0 right-3 flex items-center gap-3 sm:right-[22px] sm:gap-5">
        <button
          type="button"
          aria-label={t.hero.stats.next}
          onClick={(e) => {
            e.stopPropagation();
            go(index + 1);
          }}
          className="relative block size-11 shrink-0 cursor-pointer overflow-hidden rounded-full border-[3px] border-line bg-yellow text-ink shadow-hard-sm transition-[background-color,transform,box-shadow] duration-200 group-hover/stat:bg-[#fff4b0] active:translate-y-[3px] active:shadow-[0_1px_0_var(--sh)] sm:size-14"
        >
          <ArrowRightIcon className="absolute top-1/2 left-1/2 -mt-3 -ml-3 size-6 stroke-3 transition-transform duration-500 ease-[cubic-bezier(.6,0,.2,1)] group-hover/stat:translate-x-12" />
          <ArrowRightIcon className="absolute top-1/2 left-1/2 -mt-3 -ml-3 size-6 -translate-x-12 stroke-3 transition-transform duration-500 ease-[cubic-bezier(.6,0,.2,1)] group-hover/stat:translate-x-0" />
        </button>
        <div className="flex flex-col gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`${t.hero.stats.goTo} ${i + 1}`}
              aria-current={i === index}
              onClick={(e) => {
                e.stopPropagation();
                go(i);
              }}
              className={`w-2.5 cursor-pointer rounded-full transition-[height,background-color] duration-[450ms] ease-[cubic-bezier(.3,1.6,.5,1)] ${
                i === index ? 'h-[30px] bg-yellow' : 'h-2.5 bg-white/40 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
