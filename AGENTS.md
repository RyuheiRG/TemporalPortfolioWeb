## Development

- **Package manager**: pnpm (enforced by `packageManager` and `.npmrc`).
- **Dev server**: `pnpm dev` → http://localhost:4321. Background: `astro dev --background` with `astro dev stop|status|logs`.
- **Build**: `pnpm build` → outputs to `dist/` (static).
- **Preview**: `pnpm preview` → serves `dist/`.
- **Typecheck**: `pnpm check` runs `astro check && tsc --noEmit` (also `pnpm typecheck`).

## Architecture

- **Stack**: Astro 7 + React 19 + Tailwind CSS 3, static output.
- **Deploy target**: GitHub Pages — `base: '/LandingPageTopicosU3/'`, `site: https://RyuheiRG.github.io` in `astro.config.mjs`. Astro applies base to internal links/assets automatically.
- **Images**: Use `astro:assets` with files in `src/assets/` (provide `width/height`, prefer `loading="lazy"` and `decoding="async"`). `sharp` is installed.
- **Islands**: Minimal hydration — only `Navbar` (React) uses `client:load`. All other sections/components are `.astro`.
- **Styling**: Tailwind-first with CSS tokens in `src/styles/global.css` (rosa pastel + negro puro). Theme extended in `tailwind.config.mjs`.
- **Paths**: `@/*` alias maps to `src/*` (tsconfig.json).
- **SEO**: `BaseLayout.astro` centralizes meta, OpenGraph, Twitter, canonical, and Google Fonts. `robots.txt` and sitemaps are generated via `src/pages/*.ts`.

## Key Files

- `astro.config.mjs` — build/output, base/site, integrations
- `src/layouts/BaseLayout.astro` — document head/SEO
- `src/components/react/Navbar.tsx` — only interactive island
- `src/styles/global.css` — design tokens
- `src/config/site.ts` — site metadata
- `dist/` — build output (do not edit)

## Gotchas

- Do not change `base` without updating canonical/OG URLs in `BaseLayout.astro` and `siteConfig`.
- The Events section was intentionally removed. Do not reintroduce it or migrate event assets.
- Keep JS sent to client minimal; prefer `.astro` for static content.
- Run `pnpm check` before committing changes.
