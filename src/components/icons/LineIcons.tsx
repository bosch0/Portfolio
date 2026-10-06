import React from 'react';

type IconProps = { className?: string };

const Line: React.FC<IconProps & { children: React.ReactNode }> = ({ className, children }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    {children}
  </svg>
);

export const SunIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <circle cx="12" cy="12" r="4.5" fill="currentColor" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
  </Line>
);

export const MoonIcon: React.FC<IconProps> = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={p.className}>
    <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Line>
);

export const CloseIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <path d="M5 5l14 14M19 5L5 19" />
  </Line>
);

export const DownloadIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <path d="M12 4v11" />
    <path d="M6.5 10.5 12 16l5.5-5.5" />
    <path d="M5 20h14" />
  </Line>
);

export const ArrowDownIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <path d="M12 4v15" />
    <path d="M5.5 12.5 12 19l6.5-6.5" />
  </Line>
);

export const ArrowRightIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <path d="M4 12h15" />
    <path d="M12.5 5.5 19 12l-6.5 6.5" />
  </Line>
);

/** The usual "opens elsewhere" glyph: a box with an arrow leaving its corner. */
export const ExternalLinkIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <path d="M14 4h6v6" />
    <path d="M20 4l-9 9" />
    <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </Line>
);

export const ExpandIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" />
  </Line>
);

export const CheckIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <path d="M4.5 12.5l5 5L19.5 7" />
  </Line>
);

export const AsteriskIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />
  </Line>
);

export const GraduationIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <path d="M2 9l10-5 10 5-10 5z" />
    <path d="M6 11.5v4.5c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" />
    <path d="M22 9v6" />
  </Line>
);

export const GlobeIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c3.2 3 3.2 15 0 18" />
    <path d="M12 3c-3.2 3-3.2 15 0 18" />
  </Line>
);

export const PinIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </Line>
);

export const MailIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="M3.5 7.2l8.5 6 8.5-6" />
  </Line>
);

export const LockIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </Line>
);

/** Shopping bag (e-commerce). */
export const CartIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <path d="M5 8h14l1.2 12H3.8z" />
    <path d="M8.5 8V6.5a3.5 3.5 0 0 1 7 0V8" />
  </Line>
);

export const PulseIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <path d="M2 12h5l2.5-7 5 14 2.5-7H22" />
  </Line>
);

export const BrowserCodeIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <path d="M3 9h18" />
    <path d="M6.5 6.6h.01M9.5 6.6h.01" />
    <path d="M8 14l-2 1.5L8 17M16 14l2 1.5-2 1.5M13 13l-2 5" />
  </Line>
);

export const ServerIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <rect x="3" y="4" width="18" height="6.5" rx="1.8" />
    <rect x="3" y="13.5" width="18" height="6.5" rx="1.8" />
    <path d="M7 7.25h.01M7 16.75h.01M11 7.25h6M11 16.75h6" />
  </Line>
);

export const DatabaseIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
    <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
  </Line>
);

export const SlidersIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <path d="M4 7h9M17 7h3M4 17h3M11 17h9" />
    <circle cx="15" cy="7" r="2" />
    <circle cx="9" cy="17" r="2" />
  </Line>
);
