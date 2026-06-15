# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server (Vite)
pnpm build        # Type-check then build for production (tsc -b && vite build)
pnpm lint         # Run ESLint
pnpm preview      # Preview production build locally
```

## Architecture

Single-page portfolio app built with React 19, TypeScript, Vite, and Tailwind CSS v4.

**Page structure** — `App.tsx` composes four full-page sections in order: `Home`, `Projects`, `Experience`, `Contact`, wrapped by `Header` and `Footer`. Navigation uses anchor links (`#home`, `#projects`, etc.) driven by the `NAVIGATION` constant in `src/constants/index.ts`.

**i18n system** — All user-facing text lives in `src/i18n/translations.ts` as a typed `as const` object keyed by locale (`en` | `es`). `Locale` and `Translation` types are derived directly from that object. The `useLocale` hook (in `src/hooks/useLocale.tsx`) provides a `LocaleProvider` context that detects locale from `localStorage` → `navigator.language` → fallback `en`, and exposes `{ locale, setLocale, t }`. Every component that needs translated text calls `useLocale()` and accesses `t.<section>.<key>`. To add a new locale, add a new top-level key to `translations` matching the full shape.

**Theme** — `useTheme` (in `src/hooks/index.ts`) manages dark mode via `localStorage` key `color-theme` and toggles the `dark` class on `<html>`. Tailwind's dark mode variant relies on this class.

**Project cards** — `src/utils/Cards.ts` exports `getCards(locale)` which pulls translated strings from `translations[locale].projectsData` and returns typed `CardProps[]`. Thumbnails are served as static assets from `public/thumbnails/`.

**Timeline** — `src/utils/TimeLine.ts` similarly extracts `timeLineData` from translations for the Experience section.

**Reusable UI** — `src/components/ui/` contains `Button`, `Section`, and `Card/Card.tsx` + `Card/Carousel.tsx`. Public APIs are re-exported from `src/components/ui/index.ts` and `src/components/layout/index.ts`. Icons live in `src/components/icons/` and are individually named SVG components re-exported from their `index.ts`.

**Types** — Shared types (`CardProps`, `ButtonProps`, `SectionProps`, `TimeLineItem`) are in `src/types/index.ts`.
