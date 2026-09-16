import React from 'react';
import { TechIcon } from './TechIcon';

interface ChipProps {
  children: string;
  /** Icon lookup key when the visible text differs from the technology name. */
  icon?: string;
  /** Show the technology's monochrome icon when one exists. */
  withIcon?: boolean;
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({ children, icon, withIcon = false, className = '' }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-[4px] border border-border bg-surface-2 px-2 py-[3px] font-mono text-xs text-muted ${className}`}
  >
    {withIcon && <TechIcon name={icon ?? children} className="size-3.5 shrink-0 fill-current opacity-80" />}
    {children}
  </span>
);

interface ChipListProps {
  items: readonly string[];
  withIcon?: boolean;
  chipClassName?: string;
  /** Optional display names keyed by item (e.g. translated labels). */
  labels?: Readonly<Record<string, string>>;
}

export const ChipList: React.FC<ChipListProps> = ({ items, withIcon, chipClassName, labels }) => (
  <div className="flex flex-wrap gap-1.5">
    {items.map((item) => (
      <Chip key={item} icon={item} withIcon={withIcon} className={chipClassName}>
        {labels?.[item] ?? item}
      </Chip>
    ))}
  </div>
);
