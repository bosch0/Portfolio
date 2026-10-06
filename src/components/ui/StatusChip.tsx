import React from 'react';

interface StatusChipProps {
  children: React.ReactNode;
  /** Amber dot (work in progress) instead of the green one. */
  pending?: boolean;
  className?: string;
}

/** Small outlined pill with a pulsing status dot. */
export const StatusChip: React.FC<StatusChipProps> = ({ children, pending = false, className = '' }) => (
  <span
    className={`inline-flex w-max max-w-full items-center gap-2 rounded-full border-2 border-line bg-card px-3.5 py-1 font-mono text-[13px] text-fg ${className}`}
  >
    <span
      aria-hidden="true"
      className={`pulse-dot size-2 shrink-0 rounded-full ${pending ? 'bg-[#e8a200]' : 'bg-[#17a34a]'}`}
    />
    {children}
  </span>
);
