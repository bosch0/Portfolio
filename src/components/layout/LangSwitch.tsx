import React from 'react';
import { useLocale } from '../../hooks';
import { SUPPORTED_LOCALES, getLocaleLabel } from '../../i18n/config';

export const LangSwitch: React.FC<{ onChange?: () => void }> = ({ onChange }) => {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className="inline-flex overflow-hidden rounded-md border border-border-strong font-mono text-[12.5px]"
      role="group"
      aria-label={t.meta.language}
    >
      {SUPPORTED_LOCALES.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            aria-pressed={active}
            aria-label={getLocaleLabel(code, locale)}
            onClick={() => {
              setLocale(code);
              onChange?.();
            }}
            className={`px-2.5 py-[5px] uppercase transition-colors hover:cursor-pointer ${
              active ? 'bg-accent font-semibold text-accent-ink' : 'text-muted hover:text-fg'
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
};
