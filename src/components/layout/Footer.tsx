import React from 'react';
import { useLocale } from '../../hooks';
import { NAVIGATION, LINKS, PROFILE } from '../../constants';
import { Brand } from './Header';
import { ExternalLinkIcon } from '../icons';

export const Footer: React.FC = () => {
  const { t } = useLocale();
  const link = 'inline-flex items-center gap-1.5 no-underline transition-colors hover:text-accent';

  return (
    <footer className="border-t-[3px] border-line pt-8 pb-10 text-sm text-muted">
      <div className="wrap flex flex-wrap items-center gap-x-8 gap-y-4">
        <Brand className="text-xl text-fg" />
        <nav className="mx-auto flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
          {NAVIGATION.map((id) => (
            <a key={id} href={`#${id}`} className={link}>
              {t.nav[id]}
            </a>
          ))}
          <a href={LINKS.store} target="_blank" rel="noopener noreferrer" className={link}>
            {t.footer.store}
            <ExternalLinkIcon className="size-3.5" />
          </a>
          <a href={LINKS.source} target="_blank" rel="noopener noreferrer" className={link}>
            {t.footer.source}
            <ExternalLinkIcon className="size-3.5" />
          </a>
        </nav>
        <span>
          © {new Date().getFullYear()} {PROFILE.name}
        </span>
        <span className="basis-full font-mono text-xs">{t.footer.made}</span>
      </div>
    </footer>
  );
};
