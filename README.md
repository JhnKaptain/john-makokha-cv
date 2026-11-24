# John Makokha — CV website

Live: **https://jhnkaptain.github.io/john-makokha-cv/**

A one-page CV (React + Vite) with a **Download CV (PDF)** button and a Word version.

## Updating the CV

- **Text on the page** (summary, education, skills, work, referees): edit `src/data.js`.
- **The downloadable CV**: replace both files in `public/`:
  - `John_Makokha_CV.docx`, the Word version;
  - `John_Makokha_CV.pdf`, exported from that Word file (File → Save As → PDF). Keep these exact names.
- **Photo**: replace `public/profile.jpg` with a real JPEG photo (square works best, at least 400×400).
- **Company / school pictures**: `public/logos/`.

## Publishing

Merging into `main` publishes the site automatically (GitHub Actions → "Publish CV site"),
usually within 2 minutes. To publish by hand instead: `npm ci && npm run deploy`.

## Running it on a computer

```bash
npm ci
npm run dev
```
