import type { ReactNode } from 'react';

export interface TimeLineItem {
  title: string;
  icon: string;
  description: string;
}

export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

export interface SectionProps {
  id: string;
  title?: string;
  children?: ReactNode;
  className?: string;
}

interface Link {
  title: string;
  url: string;
  variant?: "primary" | "secondary" | "outline";
}

export interface CardProps {
  title: string;
  description: string;
  technologies: string[];
  thumbnail: string;
  links: Link[];
}