# Dr. Hakan Yıldırım — Academic Portfolio

A bilingual academic portfolio for cybersecurity, electrical and electronic
engineering, and technology projects. English is the default language; Turkish
pages mirror the same route structure.

Live website: https://hakanyildirim72.github.io

## GitHub Pages

The `main` branch is published automatically through GitHub Actions. Every language
page and project detail is exported as static HTML, with interactive publication
filters retained. No sign-in or backend service is needed.

```bash
npm ci
npm run build:pages
```

The generated website is in `out/`. The existing `npm run build` command remains
available for the original Sites hosting environment.

## Content

Verified portfolio data lives in `lib/site-content.ts`. Add:

- publications to `publications`
- projects to `projects`
- university roles to `academicExperience`
- non-academic roles to `industryExperience`
- email, CV path, and profile links to `profile`

Project detail pages and publication filters are generated from these records.
Keep publication titles and bibliographic data in their original language.
Only add claims that can be checked against a CV, DOI record, institutional
profile, or another primary source.

Place the approved portrait and CV in `public/`. Set `profile.cvPath` after
the CV file is present. Replace the monogram panel with the portrait only after
an approved image is supplied.

## Local development

```bash
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` to the final public origin before publishing so the
sitemap contains the production address.
