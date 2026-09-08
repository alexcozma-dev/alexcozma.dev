# alexcozma-site

Personal site and portfolio for Alex Cozma.

Live at [alexcozma.dev](https://alexcozma.dev).

## Stack

- [Astro](https://astro.build) — static output, content collections for projects and writing
- Cloudflare Pages — hosting and CDN
- MDX, RSS, and sitemap via the official Astro integrations
- Atkinson Hyperlegible, self-hosted

## Development

```sh
npm install
npm run dev      # dev server on localhost:4321
npm run build    # static build to dist/
npm run preview  # serve the build locally
```

## Deploys

Pushes to `main` build and deploy automatically via Cloudflare Pages.
