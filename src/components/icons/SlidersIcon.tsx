import React from 'react';

export const SlidersIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <line x1="3" y1="6" x2="21" y2="6" />
      <circle cx="17" cy="6" r="2.5" fill="currentColor" stroke="none" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <circle cx="7" cy="12" r="2.5" fill="currentColor" stroke="none" />
      <line x1="3" y1="18" x2="21" y2="18" />
      <circle cx="14" cy="18" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
};
