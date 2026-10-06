import React, { useEffect, useState, type CSSProperties } from 'react';
import { NAVIGATION } from '../../constants';
import { useActiveSection, useLocale } from '../../hooks';
import { Button } from '../ui';
import { LangSwitch } from './LangSwitch';
import { ThemeToggle } from './ThemeToggle';
import { ArrowRightIcon, CloseIcon, MenuIcon } from '../icons';

/**
 * Logo. The slash is a single bar that morphs into the underline in two beats: first it tips upright
 * and collapses into a dot at its lower end (dropping to the baseline), then the dot stretches
 * leftwards under the word. The reverse plays on leave. Beat one animates height / rotation / drop,
 * beat two width / position, which is why each property has its own duration and delay.
 */
const SLASH_REST =
  'bottom-[.44em] left-[calc(100%-.27em)] h-[.74em] w-[.15em] rotate-[20deg] ' +
  // leaving: stretch back to a dot first (fast), then grow upright (delayed)
  '[transition-property:height,rotate,bottom,width,left] [transition-duration:400ms,400ms,400ms,300ms,300ms] [transition-delay:220ms,220ms,220ms,0ms,0ms] ' +
  '[transition-timing-function:cubic-bezier(.4,0,.2,1),cubic-bezier(.4,0,.2,1),cubic-bezier(.4,0,.2,1),cubic-bezier(.4,0,.2,1),cubic-bezier(.4,0,.2,1)]';
export const Brand: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { t } = useLocale();
  return (
    <a
      href="#home"
      title={t.meta.backToTop}
      className={`group inline-flex font-display text-2xl font-extrabold tracking-[-0.03em] no-underline ${className}`}
    >
      <span className="relative inline-block pr-[.42em] pb-1">
        boscho
        <span
          aria-hidden="true"
          className={`absolute rounded-full bg-accent ${SLASH_REST} group-hover:bottom-0 group-hover:left-0 group-hover:h-1 group-hover:w-[calc(100%-.42em)] group-hover:rotate-0 group-hover:[transition-duration:280ms,280ms,280ms,560ms,560ms] group-hover:[transition-delay:0ms,0ms,0ms,320ms,320ms] group-hover:[transition-timing-function:cubic-bezier(.4,0,.2,1),cubic-bezier(.4,0,.2,1),cubic-bezier(.4,0,.2,1),cubic-bezier(.3,1.4,.5,1),cubic-bezier(.3,1.4,.5,1)] group-focus-visible:bottom-0 group-focus-visible:left-0 group-focus-visible:h-1 group-focus-visible:w-[calc(100%-.42em)] group-focus-visible:rotate-0 group-focus-visible:[transition-duration:280ms,280ms,280ms,560ms,560ms] group-focus-visible:[transition-delay:0ms,0ms,0ms,320ms,320ms]`}
        />
      </span>
    </a>
  );
};

/** Position of an element in the header's drop-out choreography (see `.hx` in App.css). */
const slot = (i: number) => ({ '--i': i }) as CSSProperties;

export const Header: React.FC = () => {
  const { t } = useLocale();
  const { active, select } = useActiveSection(NAVIGATION);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // The outline is a pseudo-element that springs in/out (scale + fade) instead of a border-colour flip.
  const linkClass = (isActive: boolean) =>
    `relative block rounded-full px-[18px] py-2 font-medium no-underline transition-[background-color,color,translate] duration-200 ease-[cubic-bezier(.3,1.8,.5,1)] hover:-translate-y-0.5 active:translate-y-px before:pointer-events-none before:absolute before:inset-0 before:scale-75 before:rounded-full before:border-2 before:border-line before:opacity-0 before:transition-[opacity,scale] before:duration-300 before:ease-[cubic-bezier(.3,1.8,.5,1)] before:content-[''] hover:before:scale-100 hover:before:opacity-100 ${
      isActive ? 'bg-fg text-bg' : 'text-fg'
    }`;

  return (
    <header className="hd">
      <div className="hd-clip">
        <div className="hd-bg" />
        <div className="wrap relative flex h-[60px] items-center gap-3 sm:h-16">
          <span className="hx" style={slot(1)}>
            <Brand />
          </span>

          <nav aria-label={t.meta.menu} className="mx-auto hidden items-center gap-1 lg:flex">
            {NAVIGATION.map((id, i) => (
              <span key={id} className="hx" style={slot(i + 2)}>
                <a
                  href={`#${id}`}
                  onClick={() => select(id)}
                  aria-current={active === id ? 'location' : undefined}
                  className={linkClass(active === id)}
                >
                  {t.nav[id]}
                </a>
              </span>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <span className="hx hidden lg:inline-block" style={slot(7)}>
              <LangSwitch />
            </span>
            <span className="hx hidden lg:inline-block" style={slot(8)}>
              <ThemeToggle />
            </span>
            <span className="hx hidden xl:inline-block" style={slot(9)}>
              <Button href="#contact" size="sm" onClick={() => select('contact')}>
                {t.header.cta}
                <ArrowRightIcon className="size-4" />
              </Button>
            </span>
            <span className="hx lg:hidden" style={slot(7)}>
              <button
                type="button"
                aria-label={t.meta.menu}
                aria-expanded={open}
                aria-controls="mobile-nav"
                onClick={() => setOpen((v) => !v)}
                className="grid size-11 cursor-pointer place-items-center rounded-full border-[2.5px] border-line bg-card text-fg shadow-hard-sm transition-[transform,translate,rotate,scale,box-shadow] duration-150 active:translate-y-0.5 active:shadow-none"
              >
                {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
              </button>
            </span>
          </div>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label={t.meta.menu}
          className="hd-menu wrap absolute inset-x-0 top-full flex flex-col gap-1 border-b-[3px] border-line bg-bg pt-3 pb-5 lg:hidden"
        >
          {NAVIGATION.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => {
                select(id);
                close();
              }}
              aria-current={active === id ? 'location' : undefined}
              className={`${linkClass(active === id)} py-3 text-lg`}
            >
              {t.nav[id]}
            </a>
          ))}
          <div className="mt-3 flex flex-wrap items-center gap-3 border-t-2 border-line/20 pt-4">
            <LangSwitch />
            <ThemeToggle />
            <Button
              href="#contact"
              size="sm"
              className="ml-auto"
              onClick={() => {
                select('contact');
                close();
              }}
            >
              {t.header.cta}
              <ArrowRightIcon className="size-4" />
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};
