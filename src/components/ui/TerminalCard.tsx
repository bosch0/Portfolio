import React from 'react';
import { useLocale } from '../../hooks';
import { Avatar } from './Avatar';

type RowKind = 'str' | 'list' | 'ok';

const Bracket: React.FC<{ children: string }> = ({ children }) => <span className="text-muted">{children}</span>;

const Value: React.FC<{ kind: RowKind; children: string }> = ({ kind, children }) => {
  if (kind === 'ok') return <span className="text-ok">{children}</span>;
  if (kind === 'list')
    return (
      <span className="text-fg">
        <Bracket>[</Bracket>
        {children}
        <Bracket>]</Bracket>
      </span>
    );
  return <span className="text-accent">{children}</span>;
};

/**
 * Hero side card: the output of `cat experiencia.json`, i.e. the experience a company
 * cares about (internship, freelance work, availability) in a compact JSON-like layout.
 */
export const TerminalCard: React.FC = () => {
  const { t } = useLocale();
  const term = t.hero.term;

  return (
    <div
      className="overflow-hidden rounded-lg border border-border bg-surface font-mono text-[13px] leading-[1.65] shadow-card"
      role="group"
      aria-label={t.meta.summary}
    >
      <div className="flex items-center gap-1.5 border-b border-border bg-surface-2 px-3.5 py-2.5 text-xs text-faint">
        <i className="inline-block size-2.5 rounded-full bg-accent" />
        <i className="inline-block size-2.5 rounded-full bg-border-strong" />
        <i className="inline-block size-2.5 rounded-full bg-border-strong" />
        <span className="ml-auto">{term.window}</span>
      </div>
      <div className="px-5 pt-[18px] pb-5">
        <div className="mb-3.5 text-muted">
          <b className="font-semibold text-accent">➜</b> <em className="not-italic text-fg">~</em> {term.command}
        </div>
        <div className="grid grid-cols-[76px_1fr] items-start gap-[18px]">
          <Avatar />
          <div className="min-w-0">
            <Bracket>{'{'}</Bracket>
            {term.entries.map((entry, index) => (
              <div key={entry.key} className="pl-3">
                <div className="text-fg">
                  "{entry.key}"<Bracket>{': {'}</Bracket>
                </div>
                <dl className="m-0 grid min-w-0 grid-cols-[max-content_1fr] gap-x-3 gap-y-0 pl-3">
                  {entry.rows.map((row) => (
                    <React.Fragment key={row.k}>
                      <dt className="text-faint after:content-[':']">{row.k}</dt>
                      <dd className="m-0 min-w-0 wrap-anywhere">
                        <Value kind={row.kind}>{row.v}</Value>
                      </dd>
                    </React.Fragment>
                  ))}
                </dl>
                <Bracket>{index < term.entries.length - 1 ? '},' : '}'}</Bracket>
              </div>
            ))}
            <Bracket>{'}'}</Bracket>
          </div>
        </div>
      </div>
    </div>
  );
};
