import { useCallback, useEffect, useRef, useState, useSyncExternalStore, type RefObject } from 'react';

const STORAGE_KEY = 'color-theme';

const readDark = () =>
  typeof document !== 'undefined' && document.documentElement.classList.contains('dark');

/**
 * The `dark` class is applied before first paint by the inline script in index.html;
 * this hook only reads it and keeps it in sync with the user's choice.
 */
export const useTheme = () => {
  const [isDark, setIsDark] = useState(readDark);

  const toggleTheme = useCallback(() => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light');
    } catch {
      /* storage unavailable: theme still applies for this visit */
    }
    setIsDark(next);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
      if (stored) return; // explicit choice wins over the OS
      document.documentElement.classList.toggle('dark', e.matches);
      setIsDark(e.matches);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return { isDark, toggleTheme };
};

/**
 * Which of the given section ids is currently "active" (crossing 35% of the viewport).
 * `select(id)` pins the highlight to a clicked link until the smooth scroll it triggers has
 * finished, so the highlight does not hop through the sections in between.
 */
export const useActiveSection = (ids: readonly string[]) => {
  const [active, setActive] = useState<string>('');
  const pinned = useRef(false);
  const releaseTimer = useRef(0);

  const select = useCallback((id: string) => {
    pinned.current = true;
    setActive(id);
    window.clearTimeout(releaseTimer.current);
    // Fallback in case the target is already in view and no scroll event ever fires.
    releaseTimer.current = window.setTimeout(() => {
      pinned.current = false;
    }, 3000);
  }, []);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      if (pinned.current) return;
      const line = window.innerHeight * 0.35;
      let current = '';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section.id;
      }
      const scroller = document.scrollingElement ?? document.documentElement;
      if (scroller.scrollHeight - scroller.scrollTop - window.innerHeight < 4) {
        current = sections[sections.length - 1].id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (pinned.current) {
        // Still scrolling towards the clicked section: release once the scroll settles.
        window.clearTimeout(releaseTimer.current);
        releaseTimer.current = window.setTimeout(() => {
          pinned.current = false;
        }, 160);
        return;
      }
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.clearTimeout(releaseTimer.current);
    };
  }, [ids]);

  return { active, select };
};

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

/** True when the user asked the OS to cut down on motion. */
export const usePrefersReducedMotion = () =>
  useSyncExternalStore(
    (notify) => {
      const mq = window.matchMedia(reducedMotionQuery);
      mq.addEventListener('change', notify);
      return () => mq.removeEventListener('change', notify);
    },
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false,
  );

/** Tracks (without re-rendering) whether an element is on screen, so animation loops can idle. */
export const useOnScreen = <T extends HTMLElement>(ref: RefObject<T | null>) => {
  const visible = useRef(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([entry]) => {
      visible.current = entry.isIntersecting;
    });
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);

  return visible;
};

/** Copy text to the clipboard and report success for `resetAfter` ms. */
export const useCopy = (resetAfter = 1800) => {
  const [copied, setCopied] = useState(false);
  const [burst, setBurst] = useState(0);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setBurst((n) => n + 1);
        window.setTimeout(() => setCopied(false), resetAfter);
      } catch {
        setCopied(false);
      }
    },
    [resetAfter],
  );

  return { copied, copy, burst };
};

export { useLocale } from './useLocale';
