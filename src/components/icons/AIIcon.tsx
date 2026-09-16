import React from 'react';

/** Sparkles glyph, the common shorthand for AI-assisted tooling. */
export const AIIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
    <title>AI</title>
    <path d="M10 3c.5 3.9 2.6 6 6.5 6.5-3.9.5-6 2.6-6.5 6.5-.5-3.9-2.6-6-6.5-6.5C7.4 9 9.5 6.9 10 3z" />
    <path d="M18 13c.3 2.2 1.5 3.4 3.7 3.7-2.2.3-3.4 1.5-3.7 3.7-.3-2.2-1.5-3.4-3.7-3.7 2.2-.3 3.4-1.5 3.7-3.7z" />
  </svg>
);
