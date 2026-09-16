import React, { useEffect, useState } from 'react';
import { NAVIGATION } from '../../constants';
import { useActiveSection, useLocale } from '../../hooks';
import { LangSwitch } from './LangSwitch';
import { ThemeToggle, iconButtonClass } from './ThemeToggle';
import { MenuIcon, CloseIcon } from '../icons';

export const Brand: React.FC<{ className?: string }> = ({ className = '' }) => (
  <a href="#home" className={`inline-flex items-center gap-2 font-mono text-[15px] font-semibold tracking-[-0.01em] ${className}`}>
    <span className="size-2 rounded-full bg-accent shadow-[0_0_0_4px_var(--accent-soft)]" aria-hidden="true" />
    ~/boscho
  </a>
);

export const Header: React.FC = () => {
  const { t } = useLocale();
  const active = useActiveSection(NAVIGATION);
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

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 bg-grid backdrop-blur-md">
      <div className="wrap flex h-15 items-center gap-6">
        <Brand />

        <nav
          id="site-nav"
          aria-label={t.meta.menu}
          className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-15 flex-col gap-0.5 border-b border-border bg-surface px-[clamp(16px,4vw,40px)] pt-3 pb-4 md:static md:mx-auto md:flex md:flex-row md:gap-1 md:border-0 md:bg-transparent md:p-0`}
        >
          {NAVIGATION.map((id) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={close}
                aria-current={isActive ? 'true' : undefined}
                className={`relative rounded-md px-3 py-2.5 text-base font-medium transition-colors md:py-1.5 md:text-[14.5px] ${
                  isActive
                    ? 'text-accent md:text-fg md:after:absolute md:after:right-3 md:after:bottom-0.5 md:after:left-3 md:after:h-0.5 md:after:rounded-full md:after:bg-accent md:after:content-[""]'
                    : 'text-muted hover:text-fg'
                }`}
              >
                {t.nav[id]}
              </a>
            );
          })}
          <div className="mt-2 flex items-center gap-2.5 border-t border-border pt-3 md:hidden">
            <LangSwitch onChange={close} />
            <ThemeToggle onChange={close} />
          </div>
        </nav>

        <div className="ml-auto flex items-center gap-2.5">
          <div className="hidden md:block">
            <LangSwitch />
          </div>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <button
            type="button"
            className={`${iconButtonClass} md:hidden`}
            aria-label={t.meta.menu}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
};
