# alexcozma.dev

Personal site and portfolio for Alex Cozma.

Live at [alexcozma.dev](https://alexcozma.dev).

## Stack

- [Astro](https://astro.build) — static output, content collections for projects and writing
- Cloudflare Workers — static assets served from the edge, configured in `wrangler.jsonc`
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

Pushes to `main` build and deploy automatically via Cloudflare Workers Builds.
Other branches get preview deployments at their own URLs.

Deploy settings live in `wrangler.jsonc` rather than the Cloudflare dashboard,
so they are version controlled alongside the site. `npm run deploy` publishes
the current build by hand.

## License

The source code is MIT licensed — see `LICENSE`. The site's written content and
the resume are not; see `LICENSE-CONTENT`. The Atkinson Hyperlegible font files
are the Braille Institute's work, used unaltered under their own license — see
`src/assets/fonts/LICENSE`.

## Colophon

Built with AI assistance (Claude Code).
