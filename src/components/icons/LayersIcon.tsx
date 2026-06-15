import React from 'react';

export const LayersIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M2 17L12 22L22 17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2L22 7L12 12L2 7L12 2Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
