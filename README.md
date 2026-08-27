# Shayan Heidary — Portfolio

A single-page developer portfolio built with Next.js, React, TypeScript, and
Tailwind CSS. It presents work experience, skills, selected projects, and a
contact form backed by Resend.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## Architecture

The codebase uses feature-based ownership. A feature keeps its components,
content, types, and server actions together instead of spreading them across
global folders.

```text
app/                    Next.js routes, metadata, and global styles
features/
  contact/
    actions/            Contact-specific server actions
    components/
    contact.data.ts
    contact.types.ts
  experience/
  header/
  hero/
  portfolio/
  skills/
components/
  layout/               App-wide visual layout
  seo/                  Shared SEO rendering
  shared/               Cross-feature components
  ui/                   Low-level design-system primitives
config/                 Site-wide SEO and profile configuration
lib/                    Shared utilities
public/                 Static assets
```

Each feature exposes its public UI through an `index.ts`. Internal feature
files use relative imports, making feature boundaries clear and keeping domain
types close to the code that owns them.

## Environment

Copy `.env.example` to `.env` and provide the required values. The contact form
uses `API_KEY` for Resend, while `NEXT_PUBLIC_SITE_URL` and
`GOOGLE_SITE_VERIFICATION` customize SEO metadata when supplied.
