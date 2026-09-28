# Poultriz — Landing Page

A marketing landing page for Poultriz, built with Next.js 14 (App Router),
TypeScript, and Tailwind CSS. No external UI libraries — icons are hand-drawn
inline SVG, fonts are loaded via `next/font/google` (Fraunces + Work Sans).

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Deploy

This is a standard Next.js app, so it deploys cleanly to Vercel (recommended,
same company as Next.js — zero config), Netlify, or any Node host:

```bash
npx vercel
```

## Structure

```
app/
  layout.tsx      -- fonts, metadata
  page.tsx         -- the whole landing page
  globals.css      -- Tailwind base + a few global rules (focus states,
                      selection color, reduced-motion handling)
tailwind.config.ts -- color palette and type scale tokens
```

## Editing content

Everything is in `app/page.tsx`, top to bottom in the order it appears:
header, hero, numbers band, feature list, batch comparison, download
section, footer. Screenshots are in `public/screens/`.

## Design tokens

| Token  | Hex       | Used for                       |
|--------|-----------|--------------------------------|
| forest | `#0F2A1A` | Dark bands, primary buttons    |
| lime   | `#B9E37D` | Accent (matches the app's own) |
| paper  | `#F5F6EF` | Page background                |
| ink    | `#0F1A13` | Body text                      |
| leaf   | `#2F7D3E` | Focus rings                    |

Fonts: Manrope (headings) and Public Sans (body), loaded with next/font.
Screens live in `public/screens/`; swap them for fresh screenshots any time.

## Download buttons

Set your Android link at the top of `app/page.tsx`:

```ts
const ANDROID_URL = "#"; // paste your APK / Play Store link here
```

The iOS button opens a "coming soon" popup. When iOS is ready, replace
`onIos` on the two `<DownloadButtons />` with a link, the same way.
