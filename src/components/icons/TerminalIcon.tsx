import React from 'react';

export const TerminalIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="2" y="3" width="20" height="18" rx="2" strokeWidth="1.5"/>
    <path d="M7 9L11 12L7 15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 15H17" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
