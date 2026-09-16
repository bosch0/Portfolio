import React from 'react';
import { PROFILE } from '../../constants';

export const Avatar: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`grid size-19 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-accent bg-surface-2 font-display text-[26px] font-extrabold tracking-[-0.03em] text-accent ${className}`}
    aria-hidden="true"
  >
    {PROFILE.avatar ? (
      <img
        src={PROFILE.avatar}
        alt=""
        width={76}
        height={76}
        className="size-full origin-[50%_45%] scale-[1.45] object-cover"
      />
    ) : (
      PROFILE.initials
    )}
  </div>
);
