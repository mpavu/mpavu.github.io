# Pavitra Murugesan — Portfolio

Personal portfolio of **Pavitra Murugesan**, Manufacturing AI Manager at Procter & Gamble (Industrial AI · MLOps · Edge AI).

Live: https://mpavu.github.io

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com) on top of the open-source
[DevPortfolio](https://github.com/RyanFitzgerald/devportfolio) template by Ryan Fitzgerald (MIT), extended with
case studies, an impact band, a "how I work" section, a "beyond work" section, dark mode and a mobile menu.

## Edit content

All text lives in [`src/config.ts`](src/config.ts). Remove an array (or empty it) to hide that section.

- **CV download:** put a PDF in `public/` (without your phone number — the site is public) and set `resume: "/your-file.pdf"`.
- **Accent colour:** change `accentColor`.

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
