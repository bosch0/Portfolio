import React from 'react';
import { useLocale } from '../../hooks';
import { NAVIGATION, LINKS, PROFILE } from '../../constants';
import { Brand } from './Header';
import { ExternalLinkIcon } from '../icons';

export const Footer: React.FC = () => {
  const { t } = useLocale();

  return (
    <footer className="border-t border-border bg-grid pt-7 pb-9 text-[13.5px] text-muted">
      <div className="wrap flex flex-wrap items-center gap-x-7 gap-y-3">
        <Brand className="text-sm" />
        <nav className="mx-auto flex flex-wrap gap-x-[18px] gap-y-1" aria-label="Footer">
          {NAVIGATION.filter((id) => id !== 'home').map((id) => (
            <a key={id} href={`#${id}`} className="hover:text-accent">
              {t.nav[id]}
            </a>
          ))}
          <a href={LINKS.store} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent">
            {t.footer.store}
            <ExternalLinkIcon className="size-3" />
          </a>
          <a href={LINKS.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent">
            {t.footer.source}
            <ExternalLinkIcon className="size-3" />
          </a>
        </nav>
        <span>
          © {new Date().getFullYear()} {PROFILE.name}
        </span>
        <span className="basis-full font-mono text-xs text-faint">{t.footer.made}</span>
      </div>
    </footer>
  );
};
