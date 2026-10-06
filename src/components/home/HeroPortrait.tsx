import React, { useRef } from 'react';
import { HERO_ORBIT, PROFILE } from '../../constants';
import { useLocale } from '../../hooks';
import { TechOrbit } from '../ui';

/** Profile photo inside two orbits of technology badges; the photo and its disc follow the pointer slightly. */
export const HeroPortrait: React.FC = () => {
  const { t } = useLocale();
  const ref = useRef<HTMLDivElement>(null);

  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    el.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };
  const leave = () => {
    ref.current?.style.setProperty('--mx', '0');
    ref.current?.style.setProperty('--my', '0');
  };

  return (
    <div ref={ref} onPointerMove={move} onPointerLeave={leave} className="pop-in mx-auto w-full max-w-[min(100%,440px)] lg:max-w-none">
      <TechOrbit
        inner={HERO_ORBIT.inner}
        outer={HERO_ORBIT.outer}
        label={t.hero.orbitLabel}
        guideClass="border-(--ring)"
      >
        <div
          aria-hidden="true"
          className="cl-back absolute top-1/2 left-1/2 -mt-[23cqw] -ml-[23cqw] size-[46cqw] rounded-full border-[3px] border-line bg-yellow"
        />
        <img
          src={PROFILE.avatar}
          alt={t.hero.avatarAlt}
          width={460}
          height={460}
          className="cl-front absolute top-1/2 left-1/2 -mt-[23cqw] -ml-[23cqw] size-[46cqw] rounded-full border-[3px] border-line object-cover shadow-hard-md"
        />
        <span className="bob absolute top-[9%] right-[2%] hidden rotate-3 sm:block rounded-full border-[2.5px] border-line bg-mint px-3.5 py-1 font-mono text-xs font-medium whitespace-nowrap text-ink shadow-hard-sm sm:text-[13px]">
          {t.hero.badge}
        </span>
      </TechOrbit>
    </div>
  );
};
