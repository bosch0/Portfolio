import React from 'react';
import { useLocale, useTheme } from '../../hooks';
import { MoonIcon, SunIcon } from '../icons';

/** Light/dark switch: a yellow (light) or blue (dark) track with a knob carrying a sun or a white moon. */
export const ThemeToggle: React.FC = () => {
  const { t } = useLocale();
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={t.meta.theme}
      title={t.meta.theme}
      onClick={toggleTheme}
      className={`group relative block h-[34px] w-16 shrink-0 cursor-pointer rounded-full border-[2.5px] border-line transition-colors duration-300 ${
        isDark ? 'bg-blue' : 'bg-yellow'
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 grid size-[25px] place-items-center rounded-full bg-ink transition-transform duration-[350ms] ease-[cubic-bezier(.3,1.6,.5,1)] group-hover:scale-110 group-active:scale-95 ${
          isDark ? 'translate-x-[30px]' : ''
        }`}
      >
        {isDark ? <MoonIcon className="size-3.5 text-white" /> : <SunIcon className="size-3.5 text-yellow" />}
      </span>
    </button>
  );
};
