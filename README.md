# KSX SEO Toolkit

Eight browser-based tools for meta tags, search previews, Open Graph tags, robots.txt, XML sitemaps, JSON-LD, word frequency, and an on-page checklist. Inputs are processed in the browser; checklist and theme preferences are saved in local storage. No account or server is required.

## Getting started

Install Node.js 22.12 or newer in the 22.x series, Node.js 24.x, or Node.js 26 or newer, then run:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Run `npm test` for the automated checks and `npm run build` to create `dist/`. Run `npm run dev -- --host` only when you intend to expose the development server to your network.

## Deployment

Run `npm run build` and upload the contents of `dist/` to a static host such as GitHub Pages, Netlify, or Cloudflare Pages. Set the build command to `npm run build` and the output directory to `dist` where the provider offers build settings. The relative asset paths also support a GitHub Pages repository subdirectory. Publication requires your own hosting account and action.

## Limitations

Search previews are approximations; search engines choose their own display. Generated markup should be reviewed and validated for your site's needs. The sitemap accepts HTTP(S) URLs from one origin and does not crawl pages. Keyword counts are simple word frequencies, not a measure of content quality. The schema generator supplies basic fields; some schema types need additional properties for specific search features. Checklist items are general guidance.

## Contributing and license

See [CONTRIBUTING.md](CONTRIBUTING.md). Licensed under the MIT license; replace the placeholder copyright holder in [LICENSE](LICENSE) before distribution.
