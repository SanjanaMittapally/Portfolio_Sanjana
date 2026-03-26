# Sanjana Mittapally - Portfolio

This repo contains a statically exported Next.js portfolio inside `portfolio-sanjana/`.

## Local development

```bash
cd portfolio-sanjana
npm install
npm run dev
```

## Build (for static export)

```bash
cd portfolio-sanjana
npm ci
npm run build
```

The generated site is written to:

`portfolio-sanjana/out/`

## Deploy to GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds and publishes the `out/` directory to the `gh-pages` branch on every push to `main`.

Note: GitHub Pages URLs for project sites typically look like:

`https://<username>.github.io/<repo>/`

To make assets paths work correctly, the workflow sets `NEXT_PUBLIC_BASE_PATH` to the repo name.

## What you should replace

1. Add your resume PDF to `portfolio-sanjana/public/resume.pdf` (so “Download Resume” works).
2. Update `portfolio-sanjana/src/content/resume.ts` with your real LinkedIn and GitHub URLs (currently `"#"` placeholders).

