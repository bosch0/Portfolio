import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocale } from '../../hooks';
import { ActionLink } from './ActionLink';
import { CloseIcon } from '../icons';
import { ViewerContext, type ViewerContextValue, type ViewerItem } from './viewerContext';

const CLOSE_MS = 320;

/**
 * Full-screen viewer for project images. While it is open the page cannot scroll, `<html>` carries
 * `data-viewer="open"` (the header reacts to it in CSS), Esc / backdrop / button close it and
 * focus returns to whatever opened it.
 */
export const ImageViewerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useLocale();
  const [item, setItem] = useState<ViewerItem | null>(null);
  const [shown, setShown] = useState(false);
  const trigger = useRef<HTMLElement | null>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const timer = useRef(0);

  const open = useCallback((next: ViewerItem) => {
    trigger.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    window.clearTimeout(timer.current);
    setItem(next);
    // Two frames so the closed styles are painted once and the transition can run.
    requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)));
  }, []);

  const close = useCallback(() => {
    setShown(false);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setItem(null);
      trigger.current?.focus({ preventScroll: true });
    }, CLOSE_MS);
  }, []);

  // The header animates away/back from this attribute.
  useEffect(() => {
    const root = document.documentElement;
    if (shown) root.setAttribute('data-viewer', 'open');
    else root.removeAttribute('data-viewer');
    return () => root.removeAttribute('data-viewer');
  }, [shown]);

  // Lock page scroll for as long as the viewer is mounted, compensating the scrollbar width.
  useEffect(() => {
    if (!item) return;
    const root = document.documentElement;
    const body = document.body;
    const prev = { overflow: root.style.overflow, padding: body.style.paddingRight };
    const gap = window.innerWidth - root.clientWidth;
    root.style.overflow = 'hidden';
    if (gap > 0) body.style.paddingRight = `${gap}px`;
    return () => {
      root.style.overflow = prev.overflow;
      body.style.paddingRight = prev.padding;
    };
  }, [item]);

  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
        return;
      }
      if (e.key !== 'Tab' || !dialog.current) return;
      const focusable = dialog.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [item, close]);

  useEffect(() => {
    if (shown) closeButton.current?.focus({ preventScroll: true });
  }, [shown]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const value = useMemo<ViewerContextValue>(() => ({ open }), [open]);
  const { viewer } = t.projects;

  return (
    <ViewerContext.Provider value={value}>
      {children}
      {item && (
        <div
          role="presentation"
          onClick={close}
          className={`fixed inset-0 z-300 flex cursor-zoom-out items-center justify-center overflow-hidden bg-black/90 p-4 text-white transition-opacity duration-300 sm:p-8 ${
            shown ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            ref={dialog}
            role="dialog"
            aria-modal="true"
            aria-label={`${viewer.label} ${item.title}`}
            onClick={(e) => e.stopPropagation()}
            className={`w-full max-w-[1100px] cursor-default transition-[transform,translate,rotate,scale,opacity] duration-[450ms] ease-[cubic-bezier(.3,1.5,.5,1)] ${
              shown ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-10 scale-[.6] opacity-0'
            }`}
          >
            <div className="relative z-0 overflow-hidden rounded-[22px] bg-black ring-1 ring-white/15">
              <img src={item.image} alt={item.title} className="block max-h-[68vh] w-full object-contain" />
            </div>
            <div
              className={`relative z-1 mt-4 flex flex-wrap items-center justify-between gap-4 transition-[opacity,transform] delay-150 duration-[600ms] ease-[cubic-bezier(.3,1.4,.5,1)] ${
                shown ? 'translate-y-0 opacity-100' : 'translate-y-7 opacity-0'
              }`}
            >
              <div>
                <p className="font-display text-2xl leading-none font-extrabold tracking-[-0.03em] sm:text-3xl">{item.title}</p>
                <p className="mt-2 flex items-center gap-2 font-mono text-[13px] text-white/70">
                  <span aria-hidden="true" className="size-2 rounded-full bg-mint" />
                  {item.status} · {item.year}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <ActionLink href={item.link.url}>{item.link.label}</ActionLink>
                <button
                  ref={closeButton}
                  type="button"
                  onClick={close}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white/15 px-6 py-3 font-extrabold text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-white/30"
                >
                  <CloseIcon className="size-4" />
                  {viewer.close}
                </button>
              </div>
            </div>
            <p className="mt-3.5 text-center font-mono text-xs text-white/60">{viewer.hint}</p>
          </div>
        </div>
      )}
    </ViewerContext.Provider>
  );
};
