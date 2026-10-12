# CLAUDE.md

Personal portfolio for Pavitra Murugesan, based on the DevPortfolio template (Astro + Tailwind CSS v4).

## Commands

```bash
npm run dev       # dev server
npm run build     # production build to dist/
```

## Architecture

- All content is in `src/content/site.json`, re-exported as `siteConfig` by `src/config.ts`. Components read from it and hide when their data is empty; guard optional fields because Pages CMS may save empty strings or lists.
- `.pages.yml` defines the Pages CMS forms. When you add or rename a key in site.json, update `.pages.yml` too, or Pages CMS may drop it on save.
- `src/pages/index.astro` assembles sections: Hero, Stats, About, CaseStudies, Principles, Experience, Projects, Skills, Education (incl. awards), BeyondWork, Contact.
- `SectionHeading.astro` is the shared "// label + title + accent bar" heading; `Icon.astro` holds Tabler icons.
- Palette lives in `src/styles/global.css`: brand colours (`cream`, `blush`, `sky`, `tangerine`, `maroon`, `night`) plus warm overrides of Tailwind's gray scale. `--accent`/`--on-accent` switch between light (maroon on cream) and dark mode (blush on night).
- Dark mode is class-based (`.dark` on `<html>`), stored in localStorage under `theme`.
- Deployed to GitHub Pages via `.github/workflows/deploy.yml` (withastro/action).

## Content rules

- The site is public: never add phone number, salary, or internal-only details.
- Business values must be marked as estimates and match the CV.
