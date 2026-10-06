import React from 'react';
import type { ButtonProps, ButtonSize, ButtonVariant } from '../../types';

const base =
  'inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full border-[2.5px] font-extrabold no-underline ' +
  'transition-[translate,box-shadow,background-color] duration-150 ease-[ease] hover:translate-y-[3px] active:translate-y-[5px] active:shadow-none';

/** `--btn-sh` lets a variant recolour the offset shadow (default: the theme's shadow colour). */
const variants: Record<ButtonVariant, string> = {
  primary: 'border-line bg-blue text-white',
  yellow: 'border-line bg-yellow text-ink',
  card: 'border-line bg-card text-fg',
  ghost: 'border-line bg-transparent text-fg',
  light: 'border-white bg-transparent text-white [--btn-sh:#ffffff] hover:bg-white/10',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-[15px] shadow-[0_3px_0_var(--btn-sh,var(--sh))] hover:shadow-[0_1px_0_var(--btn-sh,var(--sh))]',
  md: 'px-6 py-3.5 text-base shadow-[0_5px_0_var(--btn-sh,var(--sh))] hover:shadow-[0_2px_0_var(--btn-sh,var(--sh))] sm:text-lg',
  lg: 'px-7 py-4 text-lg shadow-[0_5px_0_var(--btn-sh,var(--sh))] hover:shadow-[0_2px_0_var(--btn-sh,var(--sh))] sm:text-xl',
  xl: 'px-6 py-4 text-lg shadow-[0_5px_0_var(--btn-sh,var(--sh))] hover:shadow-[0_2px_0_var(--btn-sh,var(--sh))] sm:px-9 sm:py-5 sm:text-[26px]',
};

/** Pill button with a hard offset shadow that sinks on hover/press. Renders an `<a>` when given `href`. */
export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'md', className = '', ...rest }) => {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ('href' in rest && rest.href !== undefined) {
    const { href, ...anchor } = rest;
    const external = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...anchor}
        className={cls}
      >
        {children}
      </a>
    );
  }

  const { type = 'button', ...button } = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} {...button} className={cls}>
      {children}
    </button>
  );
};
