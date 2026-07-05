# AGENTS.md

Project overview for AI agents and developers working on this codebase.

## Project Overview

A single-page marketing site for Välimees OÜ, an Estonian forestry/grounds-work company. It shows the company
wordmark/logo, an about section, a gallery of completed jobs, customer reviews, and a contact section with a
Netlify Forms-powered contact form. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer      | Technology                       |
| ---------- | --------------------------------- |
| Framework  | TanStack Start                    |
| Frontend   | React 19, TanStack Router v1      |
| Build      | Vite 7                            |
| Styling    | Tailwind CSS 4                    |
| Forms      | Netlify Forms                     |
| Language   | TypeScript 5.9 (strict mode)      |
| Deployment | Netlify                           |

## Directory Structure

```
├── public
│   ├── favicon.ico
│   └── __forms.html        # Static form skeleton for Netlify's build-time form detection
├── src
│   ├── components
│   │   ├── Header.tsx       # Sticky nav bar with wordmark logo
│   │   ├── Hero.tsx         # Hero section with headline and CTA
│   │   ├── About.tsx        # About-us copy and stats
│   │   ├── Gallery.tsx      # Photo grid of completed jobs
│   │   ├── Reviews.tsx      # Customer testimonials
│   │   ├── Contact.tsx      # Contact details + Netlify Forms contact form
│   │   └── Footer.tsx
│   ├── routes
│   │   ├── __root.tsx       # Root layout: HTML shell, meta/SEO tags
│   │   └── index.tsx        # Assembles the page from section components
│   ├── router.tsx           # TanStack Router setup
│   └── styles.css           # Tailwind import, fonts, CSS variables, animations
├── netlify.toml              # Build command (vite build), publish dir (dist/client), dev server settings
├── vite.config.ts            # TanStack Start, React, Tailwind, Netlify plugins
└── tsconfig.json              # `@/*` path alias for `src/*`
```

## Key Concepts

### File-Based Routing (TanStack Router)

- `__root.tsx` — root layout, wraps all pages, holds `<head>` metadata
- `index.tsx` — the `/` route, the entire site is currently a single page composed of section components

### Contact Form (Netlify Forms)

The contact form in `Contact.tsx` submits via AJAX (`fetch('/__forms.html', ...)`) rather than a full page POST,
because this is an SSR app and a POST to `/` would be intercepted by the TanStack Start server handler instead of
reaching Netlify's form-processing middleware. `public/__forms.html` is a hidden static form used only so Netlify's
build bot can detect and register the form at deploy time — it is never shown to visitors. If the form's fields
change, update both `Contact.tsx` and `public/__forms.html` so the field names stay in sync.

### Styling

- Tailwind utility classes throughout
- Design tokens (`--color-bark`, `--color-moss`, `--color-rust`, etc.) defined as CSS variables in `styles.css`
- Display font: "Big Shoulders Display" (`.font-display`); body font: "IBM Plex Sans"
- Photos in `Gallery.tsx` and `Hero.tsx`/`About.tsx` use `picsum.photos` placeholder images — replace with real job
  photos when available by swapping the `src` values (see `.netlify/assets` for any uploaded photos before adding
  new ones)

## Conventions

- Components: PascalCase, one section per file in `src/components/`
- Copy is written in Estonian, matching the target audience
- TypeScript strict mode; import paths use the `@/` alias
