# Nirvya Landing

Public marketing site for Nirvya Health, built with Next.js 14 and exported as static HTML.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static site is written to `out/`. For Cloudflare Pages, use `npm run build` as the build command and `out` as the output directory.

Set `NEXT_PUBLIC_APP_URL` when the doctor console is hosted somewhere other than `https://app.nirvyalabs.com`.
