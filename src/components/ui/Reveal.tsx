import React, { useLayoutEffect, useRef, useState, type CSSProperties } from 'react';

type RevealVariant = 'up' | 'left' | 'right' | 'pop';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'aside' | 'li';
  variant?: RevealVariant;
  /** Seconds to wait before the entrance starts. */
  delay?: number;
}

const HIDDEN: Record<RevealVariant, CSSProperties> = {
  up: { opacity: 0, transform: 'translateY(48px)' },
  left: { opacity: 0, transform: 'translateX(-64px)' },
  right: { opacity: 0, transform: 'translateX(64px)' },
  pop: { opacity: 0, transform: 'scale(0.3) rotate(-16deg)' },
};

/**
 * Animates content in the first time it enters the viewport.
 * Content already on screen at mount renders visible immediately, so nothing
 * is ever parked at opacity 0 for a viewer who never scrolls.
 * Exposes `data-shown` so descendants can react (e.g. the highlighter marker).
 */
export const Reveal: React.FC<RevealProps> = ({ children, className = '', as = 'div', variant = 'up', delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window) || el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    const fallback = window.setTimeout(() => setShown(true), 4000);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  // All allowed tags share the props used here; the cast keeps the ref typing simple.
  const Tag = as as 'div';
  const spring = variant === 'pop';
  return (
    <Tag
      ref={ref}
      data-shown={shown}
      className={`${className} transition-[opacity,transform] duration-700 ${
        spring ? 'ease-[cubic-bezier(.3,1.9,.5,1)]' : 'ease-[cubic-bezier(.2,.8,.2,1)]'
      }`}
      style={shown ? { transitionDelay: `${delay}s` } : { ...HIDDEN[variant], transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
};
