import React, { useEffect, useRef, type CSSProperties } from 'react';
import type { OrbitItem, OrbitTone } from '../../constants';
import { useOnScreen, usePrefersReducedMotion } from '../../hooks';
import { TechIcon } from './TechIcon';

const TONES: Record<OrbitTone, string> = {
  pink: 'bg-pink text-ink',
  mint: 'bg-mint text-ink',
  yellow: 'bg-yellow text-ink',
  orange: 'bg-orange text-ink',
  sky: 'bg-sky text-ink',
  blue: 'bg-blue text-white',
};

interface RingProps {
  items: OrbitItem[];
  /** Radius and tile size, in container-width percent (cqw). */
  radius: number;
  size: number;
  start: number;
  /** Degrees per second; negative spins counter-clockwise. */
  speed: number;
}

const Ring: React.FC<RingProps> = ({ items, radius, size, start, speed }) => (
  <div
    className="orbit-ring"
    data-speed={speed}
    style={{ '--r': `${radius}cqw`, '--s': `${size}cqw` } as CSSProperties}
  >
    {items.map((item, i) => (
      <div
        key={item.tech}
        className="orbit-slot"
        style={{ '--p': `${Math.round(start + (360 / items.length) * i)}deg` } as CSSProperties}
      >
        <div className="orbit-tile">
          <div className={`orbit-badge ${TONES[item.tone]}`} title={item.tech} aria-hidden="true">
            <TechIcon name={item.tech} className="size-[52%] fill-current" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

interface TechOrbitProps {
  inner: OrbitItem[];
  outer: OrbitItem[];
  /** Accessible description of the whole decoration. */
  label: string;
  /** Rendered in the middle (photo, mail button…). */
  children: React.ReactNode;
  /** Dashed guide colour classes, so the guides read on both light and blue backgrounds. */
  guideClass?: string;
  className?: string;
}

/**
 * Two concentric rings of technology badges around a centre element.
 * Rotation runs in a single rAF loop that writes `--a` on each ring (tiles counter-rotate
 * in CSS so they stay upright) and eases down to a crawl while the pointer is over it.
 * Everything is sized in `cqw`, so the whole thing scales with its container.
 */
export const TechOrbit: React.FC<TechOrbitProps> = ({ inner, outer, label, children, guideClass = '', className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);
  const reduced = usePrefersReducedMotion();
  const hovering = useRef(false);

  useEffect(() => {
    const root = ref.current;
    if (!root || reduced) return;
    const rings = Array.from(root.querySelectorAll<HTMLElement>('.orbit-ring'));
    const state = rings.map((el, i) => ({ el, angle: i * 40, k: 1, speed: Number(el.dataset.speed) || 0 }));
    let raf = 0;
    let last = 0;
    const tick = (time: number) => {
      const dt = Math.min(0.1, last ? (time - last) / 1000 : 0.016);
      last = time;
      if (onScreen.current) {
        const target = hovering.current ? 0.18 : 1;
        for (const s of state) {
          s.k += (target - s.k) * Math.min(1, dt * 3.5);
          s.angle += s.speed * s.k * dt;
          s.el.style.setProperty('--a', `${s.angle.toFixed(2)}deg`);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced, onScreen]);

  return (
    <div
      ref={ref}
      role="group"
      aria-label={label}
      onPointerEnter={() => {
        hovering.current = true;
      }}
      onPointerLeave={() => {
        hovering.current = false;
      }}
      className={`orbit relative aspect-square w-full ${className}`}
    >
      <div
        aria-hidden="true"
        className={`absolute top-1/2 left-1/2 -mt-[29.2cqw] -ml-[29.2cqw] size-[58.4cqw] rounded-full border-2 border-dashed ${guideClass}`}
      />
      <div
        aria-hidden="true"
        className={`absolute top-1/2 left-1/2 -mt-[42cqw] -ml-[42cqw] size-[84cqw] rounded-full border-2 border-dashed opacity-60 ${guideClass}`}
      />
      {children}
      <Ring items={inner} radius={29.2} size={11.6} start={-90} speed={9.5} />
      <Ring items={outer} radius={42} size={10.8} start={-60} speed={-6.4} />
    </div>
  );
};
