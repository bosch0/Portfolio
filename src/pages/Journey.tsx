import React, { useEffect, useRef, useState } from 'react';
import { useLocale, usePrefersReducedMotion } from '../hooks';
import { LetterText, Reveal, TechIcon } from '../components/ui';

const NODE_TONES = ['bg-yellow', 'bg-mint', 'bg-pink'] as const;
/** The marker walks 1 → 2 → 3 → 2 → 1 …, hopping between the stations. */
const WALK = [0, 1, 2, 1] as const;
const HOP_STEP_MS = 2600;

/** "Mi camino": three stations (2021 / 2022 / 2027) on a line, with a marker that hops between them. */
export const Journey: React.FC = () => {
  const { t } = useLocale();
  const reduced = usePrefersReducedMotion();
  const steps = t.journey.steps;
  const [step, setStep] = useState(0);
  const [hop, setHop] = useState(false);
  const walkIndex = useRef(0);

  useEffect(() => {
    if (reduced) return;
    let hopTimer = 0;
    const id = window.setInterval(() => {
      walkIndex.current = (walkIndex.current + 1) % WALK.length;
      setStep(WALK[walkIndex.current]);
      setHop(true);
      window.clearTimeout(hopTimer);
      hopTimer = window.setTimeout(() => setHop(false), 600);
    }, HOP_STEP_MS);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(hopTimer);
    };
  }, [reduced]);

  // Station centres: column width = (100% - 2 gaps) / 3, the node sits 42px into its column.
  const markerLeft = `calc((100% - 72px) / 3 * ${step} + ${36 * step}px + 42px)`;

  return (
    <section id="journey" className="wrap pt-10 pb-24 sm:pt-14 sm:pb-28" aria-labelledby="journey-title">
      <Reveal className="mb-12 flex flex-wrap items-center gap-x-6 gap-y-2 sm:mb-14">
        <h2
          id="journey-title"
          className="font-display text-[clamp(2.75rem,9vw,5.25rem)] leading-none font-extrabold tracking-[-0.05em]"
        >
          <LetterText text={t.journey.title} />
        </h2>
        <p className="max-w-[360px] font-mono text-[13px] sm:text-[15px]">{t.journey.intro}</p>
      </Reveal>

      <div>
        {/* Track: desktop only. Nodes sit on the line, the marker walks along it. */}
        <div aria-hidden="true" className="relative mb-7 hidden h-12 md:block">
          <div
            className="absolute inset-x-0 top-1/2 -mt-0.5 h-1 origin-left bg-line"
            style={{ animation: 'draw-line 1.4s .2s cubic-bezier(.6,0,.2,1) both' }}
          />
          <div className="absolute inset-0 grid grid-cols-3 gap-9">
            {steps.map((s, i) => (
              <div key={s.year} className="relative">
                <span
                  className={`absolute top-1/2 left-7 -mt-3.5 size-7 rounded-full border-[3px] border-line transition-transform duration-500 ease-[cubic-bezier(.3,2,.5,1)] ${NODE_TONES[i]}`}
                  style={{ transform: `scale(${step === i ? 1.45 : 1})` }}
                />
              </div>
            ))}
          </div>
          <span
            className="absolute top-1/2 -mt-3 -ml-3 size-6 rounded-full border-[3px] border-line bg-pink"
            style={{
              left: markerLeft,
              transform: `translateY(${hop ? -30 : 0}px) scale(${hop ? 1.25 : 1})`,
              transition: `left 1.3s cubic-bezier(.6,0,.15,1), ${
                hop ? 'transform .4s cubic-bezier(.2,.9,.3,1)' : 'transform .95s cubic-bezier(.4,0,.2,1)'
              }`,
            }}
          />
        </div>

        <ol className="relative grid gap-7 before:absolute before:top-3 before:bottom-3 before:left-[11px] before:w-[3px] before:bg-line md:grid-cols-3 md:gap-9 md:before:hidden">
          {steps.map((s, i) => {
            const last = i === steps.length - 1;
            return (
              <Reveal key={s.year} as="li" variant="pop" delay={i * 0.15} className="relative pl-10 md:pl-0">
                <span
                  aria-hidden="true"
                  className={`absolute top-8 left-0 size-6 rounded-full border-[3px] border-line md:hidden ${NODE_TONES[i]}`}
                />
                <div
                  className={`flex h-full flex-col rounded-[28px] border-[3px] border-line p-6 shadow-hard-md transition-transform duration-300 ease-[cubic-bezier(.3,1.6,.5,1)] hover:-translate-y-2.5 hover:-rotate-1 sm:p-7 ${
                    last ? 'on-blue bg-blue text-white' : 'bg-card text-fg'
                  }`}
                >
                  <p
                    className={`stroke-text font-display text-[clamp(3.5rem,8vw,4.75rem)] leading-none font-extrabold tracking-[-0.05em] ${
                      last ? 'on-blue' : ''
                    }`}
                  >
                    <LetterText text={s.year} />
                  </p>
                  <p className="mt-1.5 font-display text-[32px] font-extrabold tracking-[-0.04em] sm:text-[40px]">{s.verb}</p>
                  <p className="mt-3 text-[17px] leading-normal">{s.text}</p>
                  {s.stack.length > 0 && (
                    <ul className="mt-auto flex flex-wrap items-center gap-2 pt-4" aria-label={s.stack.join(', ')}>
                      {s.stack.map((tech) => (
                        <li key={tech} aria-hidden="true">
                          <TechIcon name={tech} className="size-6 fill-current" />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
