import React from 'react';
import { useTheme, useLocale } from '../../hooks';
import { SunIcon, MoonIcon } from '../icons';

export const iconButtonClass =
  'inline-grid size-[34px] place-items-center rounded-md border border-border-strong text-muted transition-colors hover:cursor-pointer hover:border-faint hover:text-fg [&_svg]:size-[17px]';

export const ThemeToggle: React.FC<{ onChange?: () => void }> = ({ onChange }) => {
  const { isDark, toggleTheme } = useTheme();
  const { t } = useLocale();

  return (
    <button
      type="button"
      className={iconButtonClass}
      aria-label={t.meta.theme}
      title={t.meta.theme}
      onClick={() => {
        toggleTheme();
        onChange?.();
      }}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
