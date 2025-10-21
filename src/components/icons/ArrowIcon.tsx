import React from 'react';

export const ArrowIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg className={`mt-1 ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 7L14.5 12L9.5 17" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
};