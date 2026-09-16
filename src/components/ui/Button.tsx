import React from 'react';
import type { ButtonProps } from '../../types';

const base =
  'inline-flex items-center gap-2 rounded-md border font-semibold transition-[background-color,border-color,color,transform] duration-150 hover:cursor-pointer disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0';

const variants = {
  primary: 'border-transparent bg-accent text-accent-ink hover:bg-accent-hover hover:-translate-y-px',
  secondary: 'border-border-strong bg-surface text-fg hover:border-accent hover:text-accent',
  ghost: 'border-transparent text-muted hover:text-accent',
} as const;

const sizes = {
  sm: 'px-3 py-[7px] text-sm',
  md: 'px-[18px] py-[11px] text-[15px]',
} as const;

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'md', className = '', ...rest }) => {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (rest.href !== undefined) {
    const { href, ...anchor } = rest;
    return (
      <a href={href} className={classes} {...anchor}>
        {children}
      </a>
    );
  }

  const { type = 'button', ...button } = rest;
  return (
    <button type={type} className={classes} {...button}>
      {children}
    </button>
  );
};
