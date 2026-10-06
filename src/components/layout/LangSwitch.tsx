import React from 'react';
import { useLocale } from '../../hooks';
import { SUPPORTED_LOCALES } from '../../i18n/config';

/** ES / EN segmented control with a pill that slides to the active language. */
export const LangSwitch: React.FC = () => {
  const { locale, setLocale, t } = useLocale();
  const index = Math.max(0, SUPPORTED_LOCALES.indexOf(locale));

  return (
    <div role="group" aria-label={t.meta.language} className="relative flex rounded-full border-[2.5px] border-line bg-card p-[3px]">
      <span
        aria-hidden="true"
        className="absolute inset-y-[3px] left-[3px] rounded-full bg-(--knob) transition-transform duration-[350ms] ease-[cubic-bezier(.3,1.5,.5,1)]"
        style={{ width: `calc((100% - 6px) / ${SUPPORTED_LOCALES.length})`, transform: `translateX(${index * 100}%)` }}
      />
      {SUPPORTED_LOCALES.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-pressed={active}
            onClick={() => setLocale(code)}
            className={`relative z-1 min-w-10 cursor-pointer rounded-full px-3 py-1 text-center text-sm font-extrabold uppercase transition-colors ${
              active ? 'text-white hover:text-yellow' : 'text-fg hover:text-accent'
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
};
