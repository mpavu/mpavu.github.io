# CLAUDE.md

Personal portfolio for Pavitra Murugesan, based on the DevPortfolio template (Astro + Tailwind CSS v4).

## Commands

```bash
npm run dev       # dev server
npm run build     # production build to dist/
```

## Architecture

- All content is in `src/config.ts` (`siteConfig`). Components read from it and hide when their data is empty.
- `src/pages/index.astro` assembles sections: Hero, Stats, About, CaseStudies, Principles, Experience, Projects, Skills, Education (incl. awards), BeyondWork, Contact.
- `SectionHeading.astro` is the shared "// label + title + accent bar" heading; `Icon.astro` holds Tabler icons.
- Accent colour is the `--accent` CSS variable set on `<html>` from `siteConfig.accentColor`.
- Dark mode is class-based (`.dark` on `<html>`), stored in localStorage under `theme`.
- Deployed to GitHub Pages via `.github/workflows/deploy.yml` (withastro/action).

## Content rules

- The site is public: never add phone number, salary, or internal-only details.
- Business values must be marked as estimates and match the CV.
