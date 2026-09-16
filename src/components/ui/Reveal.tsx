import React, { useLayoutEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'aside';
}

/**
 * Fades content in the first time it enters the viewport.
 * Content already on screen at mount renders visible immediately, so nothing
 * is ever parked at opacity 0 for a viewer who never scrolls.
 */
export const Reveal: React.FC<RevealProps> = ({ children, className = '', as = 'div' }) => {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window) || el.getBoundingClientRect().top < window.innerHeight) {
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
      { rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    const fallback = window.setTimeout(() => setShown(true), 2500);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`${className} transition-[opacity,transform,border-color,box-shadow] duration-500 ease-out ${shown ? 'opacity-100' : 'translate-y-2.5 opacity-0'}`}
    >
      {children}
    </Tag>
  );
};
