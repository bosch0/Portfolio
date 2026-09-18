import React from 'react';
import { PROFILE } from '../../constants';

const SIZES = {
  md: { box: 'size-19 border-2 text-[26px]', px: 76 },
  sm: { box: 'size-10 border-2 text-[15px]', px: 40 },
} as const;

export const Avatar: React.FC<{ size?: keyof typeof SIZES; className?: string }> = ({ size = 'md', className = '' }) => {
  const s = SIZES[size];
  return (
    <div
      className={`grid shrink-0 place-items-center overflow-hidden rounded-full border-accent bg-surface-2 font-display font-extrabold tracking-[-0.03em] text-accent ${s.box} ${className}`}
      aria-hidden="true"
    >
      {PROFILE.avatar ? (
        <img
          src={PROFILE.avatar}
          alt=""
          width={s.px}
          height={s.px}
          className="size-full origin-[50%_45%] scale-[1.45] object-cover"
        />
      ) : (
        PROFILE.initials
      )}
    </div>
  );
};
