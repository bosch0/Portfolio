import React from 'react';

type IconProps = { className?: string };

const Line: React.FC<IconProps & { children: React.ReactNode }> = ({ className, children }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
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
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </Line>
);

export const MoonIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </Line>
);

export const MenuIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Line>
);

export const CloseIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Line>
);

export const DownloadIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <path d="M12 3v12M7 10l5 5 5-5M4 19h16" />
  </Line>
);

export const ArrowDownIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <path d="M12 5v14M5 12l7 7 7-7" />
  </Line>
);

export const ExternalLinkIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Line>
);

export const GraduationIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <path d="m2 9 10-5 10 5-10 5z" />
    <path d="M6 11.5V17c0 1 3 3 6 3s6-2 6-3v-5.5" />
  </Line>
);

export const GlobeIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
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
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Line>
);

export const LockIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </Line>
);

export const CartIcon: React.FC<IconProps> = (p) => (
  <Line {...p}>
    <path d="M3 4h2l2.4 11.2a1 1 0 0 0 1 .8h9.6a1 1 0 0 0 1-.8L21 8H6.5" />
    <circle cx="9.5" cy="20" r="1" />
    <circle cx="17.5" cy="20" r="1" />
  </Line>
);
