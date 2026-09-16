import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

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

/** Which of the given section ids is currently "active" (crossing 35% of the viewport). */
export const useActiveSection = (ids: readonly string[]) => {
  const [active, setActive] = useState<string>(ids[0]);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const line = window.innerHeight * 0.35;
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section;
      }
      const scroller = document.scrollingElement ?? document.documentElement;
      if (scroller.scrollHeight - scroller.scrollTop - window.innerHeight < 4) {
        current = sections[sections.length - 1];
      }
      setActive(current.id);
    };
    const onScroll = () => {
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
    };
  }, [ids]);

  return active;
};

/**
 * Pads a block so its border-box height is a multiple of the background grid step,
 * keeping the next full-width divider on a grid line. The extra padding is exposed
 * as the `--snap` CSS variable, consumed by the `.pad-*` classes in App.css.
 */
export const useGridSnap = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === 'undefined') return;

    const step = parseFloat(getComputedStyle(el).getPropertyValue('--grid-step')) || 40;
    let extra = 0;
    const apply = () => {
      const base = el.getBoundingClientRect().height - extra;
      const next = (step - (base % step)) % step;
      if (Math.abs(next - extra) < 0.01) return;
      extra = next;
      el.style.setProperty('--snap', `${next.toFixed(2)}px`);
    };

    const ro = new ResizeObserver(apply);
    ro.observe(el);
    apply();
    // Web fonts swap after first layout; content boxes change but re-measure explicitly to be safe.
    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) apply();
    });
    return () => {
      cancelled = true;
      ro.disconnect();
      el.style.removeProperty('--snap');
    };
  }, []);

  return ref;
};

/** Copy text to the clipboard and report success for `resetAfter` ms. */
export const useCopy = (resetAfter = 1500) => {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        window.setTimeout(() => setCopied(false), resetAfter);
      } catch {
        setCopied(false);
      }
    },
    [resetAfter],
  );

  return { copied, copy };
};

export { useLocale } from './useLocale';
