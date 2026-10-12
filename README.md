# Pavitra Murugesan — Portfolio

Personal portfolio of **Pavitra Murugesan**, Manufacturing AI Manager at Procter & Gamble (Industrial AI · MLOps · Edge AI).

Live: https://mpavu.github.io

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com) on top of the open-source
[DevPortfolio](https://github.com/RyanFitzgerald/devportfolio) template by Ryan Fitzgerald (MIT), extended with
case studies, an impact band, a "how I work" section, a "beyond work" section, dark mode and a mobile menu.

## Edit content

All text lives in [`src/content/site.json`](src/content/site.json). Empty a list to hide that section.

**Easiest: Pages CMS (no code).** Sign in with GitHub at [app.pagescms.org](https://app.pagescms.org), open this repo and
choose **Portfolio**. Every section is a form; **Save** commits to `main` and the site republishes in ~1–2 minutes.
The form layout is defined in [`.pages.yml`](.pages.yml).

- **CV download:** upload a PDF in the *CV file* field (without your phone number — the site is public).
- **Colours:** the palette (cream, blush, sky, tangerine, maroon) is defined in [`src/styles/global.css`](src/styles/global.css).

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages.
In the repo settings, set **Pages → Source** to **GitHub Actions**.

## License

MIT — see [LICENSE.md](LICENSE.md). Content (text, project descriptions) © Pavitra Murugesan.
