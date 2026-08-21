# Determinisma Komputado

Fully deterministic and verifiable AI — every inference reproducible, every output auditable.

A static landing page built with [Astro](https://astro.build) and hosted on Cloudflare.

## Getting started

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # outputs static site to dist/
npm run preview  # preview the production build locally
```

## Deploy to Cloudflare

1. Push this repo to GitHub or GitLab.
2. In the [Cloudflare dashboard](https://dash.cloudflare.com), go to **Workers & Pages → Create application**.
3. Choose **Connect Git**, select this repo, and use these build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy — your site goes live on a `*.workers.dev` URL instantly.

## Structure

```
src/
  layouts/
    Layout.astro      # HTML shell + global styles
  components/
    Header.astro
    Hero.astro
    Principles.astro
    HowItWorks.astro
    Verify.astro
    CTA.astro
    Footer.astro
  pages/
    index.astro       # the single page
public/
    favicon.svg
```
