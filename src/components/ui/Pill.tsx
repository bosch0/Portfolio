import React from 'react';

interface PillProps {
  children: React.ReactNode;
  accent?: boolean;
  className?: string;
}

export const Pill: React.FC<PillProps> = ({ children, accent = false, className = '' }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full border px-[9px] py-[3px] font-mono text-[11.5px] font-medium ${
      accent
        ? "border-transparent bg-accent-soft text-accent before:size-1.5 before:rounded-full before:bg-accent before:content-['']"
        : 'border-border-strong text-muted'
    } ${className}`}
  >
    {children}
  </span>
);
