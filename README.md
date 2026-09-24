# Dr. Hakan Yıldırım — Academic Portfolio

A bilingual academic portfolio for cybersecurity, electrical and electronic
engineering, and technology projects. English is the default language; Turkish
pages mirror the same route structure.

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
