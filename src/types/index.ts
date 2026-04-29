import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface TimeLineItem {
  title: string;
  icon: string;
  description: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
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
  icon?: string;
}

export interface CardProps {
  title: string;
  description: string;
  technologies: string[];
  thumbnail: string;
  showFullThumbnail?: boolean;
  links: Link[];
}