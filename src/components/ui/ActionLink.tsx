import React from 'react';
import { ExternalLinkIcon } from '../icons';

interface ActionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

/** Yellow pill with a dark round icon at its end, used for outbound links on dark surfaces. */
export const ActionLink: React.FC<ActionLinkProps> = ({ href, children, className = '', onClick }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    className={`inline-flex cursor-pointer items-center gap-3.5 rounded-full bg-yellow py-[7px] pr-[7px] pl-[22px] font-extrabold text-ink no-underline transition-[translate,scale,background-color] duration-[250ms,250ms,450ms] ease-[cubic-bezier(.3,1.6,.5,1),cubic-bezier(.3,1.6,.5,1),ease] hover:-translate-y-[3px] hover:bg-[#fff4b0] active:scale-[.96] ${className}`}
  >
    {children}
    <span className="grid size-[34px] place-items-center rounded-full bg-ink text-yellow">
      <ExternalLinkIcon className="size-[17px]" />
    </span>
  </a>
);
