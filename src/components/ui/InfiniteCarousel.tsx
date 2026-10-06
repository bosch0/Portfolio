import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useOnScreen, usePrefersReducedMotion } from '../../hooks';

interface InfiniteCarouselProps {
  /** One keyed element per slide. The list is repeated internally to loop seamlessly. */
  items: React.ReactNode[];
  /** Accessible name of the scrollable region. */
  label: string;
  /** Auto-scroll speed in px per second. */
  speed?: number;
  /** Scroll towards the left instead of the right. */
  reverse?: boolean;
  className?: string;
}

const COPIES = 4;

/**
 * Endless horizontal strip that drifts on its own and stays fully user-driven:
 * wheel / trackpad / touch scroll natively, the mouse can drag it, and keyboard arrows work
 * because the region is focusable. Auto-scroll pauses while hovered or focused and is
 * disabled for users who prefer reduced motion. Only the first copy is exposed to assistive tech and to Tab.
 */
export const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  items,
  label,
  speed = 32,
  reverse = false,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);
  const reduced = usePrefersReducedMotion();
  const paused = useRef(false);
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);
  const touchResume = useRef(0);
  const [dragging, setDragging] = useState(false);

  const period = () => (innerRef.current ? innerRef.current.scrollWidth / COPIES : 0);

  /** Keeps scrollLeft inside the two middle copies so there is always content on both sides. */
  const wrap = () => {
    const el = ref.current;
    const p = period();
    if (!el || !p) return;
    if (el.scrollLeft >= p * 2) el.scrollLeft -= p;
    else if (el.scrollLeft < p) el.scrollLeft += p;
  };

  useLayoutEffect(() => {
    if (ref.current) ref.current.scrollLeft = period();
  }, []);

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    let last = 0;
    let acc = 0;
    const tick = (time: number) => {
      const dt = Math.min(0.1, last ? (time - last) / 1000 : 0.016);
      last = time;
      const el = ref.current;
      if (el && onScreen.current && !paused.current && !drag.current) {
        acc += speed * dt;
        const whole = Math.floor(acc);
        if (whole >= 1) {
          el.scrollLeft += (reverse ? -1 : 1) * whole;
          acc -= whole;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced, speed, reverse, onScreen]);

  const resumeAfterTouch = () => {
    window.clearTimeout(touchResume.current);
    touchResume.current = window.setTimeout(() => {
      paused.current = false;
    }, 2000);
  };

  useEffect(() => () => window.clearTimeout(touchResume.current), []);

  // The repeated copies stay clickable (the strip can rest on any of them) but are hidden from
  // assistive tech and skipped by Tab, so keyboard users only meet each control once.
  useEffect(() => {
    const copies = innerRef.current?.children;
    if (!copies) return;
    for (let i = 1; i < copies.length; i++) {
      copies[i].querySelectorAll('a[href], button').forEach((el) => el.setAttribute('tabindex', '-1'));
    }
  });

  const endDrag = () => {
    const d = drag.current;
    if (!d) return;
    drag.current = null;
    setDragging(false);
    if (d.moved) {
      // Swallow the click that follows a drag so cards underneath do not activate.
      suppressClick.current = true;
      window.setTimeout(() => {
        suppressClick.current = false;
      }, 60);
    }
  };

  return (
    <div
      ref={ref}
      role="region"
      aria-label={label}
      tabIndex={0}
      onScroll={wrap}
      onPointerEnter={(e) => {
        if (e.pointerType === 'mouse') paused.current = true;
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === 'mouse') paused.current = false;
        endDrag();
      }}
      onFocusCapture={() => {
        paused.current = true;
      }}
      onBlurCapture={() => {
        paused.current = false;
      }}
      onPointerDown={(e) => {
        if (e.pointerType === 'touch') {
          // Let the finger (and the momentum scroll after it) win over the auto-drift.
          paused.current = true;
          window.clearTimeout(touchResume.current);
          return;
        }
        if (e.pointerType !== 'mouse' || e.button !== 0) return;
        drag.current = { x: e.clientX, left: e.currentTarget.scrollLeft, moved: false };
      }}
      onPointerMove={(e) => {
        const d = drag.current;
        if (!d) return;
        const dx = e.clientX - d.x;
        if (!d.moved && Math.abs(dx) > 5) {
          d.moved = true;
          setDragging(true);
          e.currentTarget.setPointerCapture(e.pointerId);
        }
        if (d.moved) e.currentTarget.scrollLeft = d.left - dx;
      }}
      onPointerUp={(e) => {
        endDrag();
        if (e.pointerType === 'touch') resumeAfterTouch();
      }}
      onPointerCancel={(e) => {
        endDrag();
        if (e.pointerType === 'touch') resumeAfterTouch();
      }}
      onClickCapture={(e) => {
        if (suppressClick.current) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
      className={`no-scrollbar overflow-x-auto select-none ${dragging ? 'cursor-grabbing' : 'cursor-grab'} ${className}`}
    >
      <div ref={innerRef} className="flex w-max">
        {Array.from({ length: COPIES }, (_, copy) => (
          <div key={copy} className="flex" aria-hidden={copy > 0 || undefined}>
            {items}
          </div>
        ))}
      </div>
    </div>
  );
};
