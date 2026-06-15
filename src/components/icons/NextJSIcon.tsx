import React from 'react';

export const NextJSIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="90" cy="90" r="90"/>
    <path
      style={{ fill: 'white' }}
      d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
    />
    <rect x="115" y="54" width="12" height="72" style={{ fill: 'white' }}/>
  </svg>
);
