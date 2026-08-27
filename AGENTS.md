# AGENTS.md

This file applies to the entire repository. It is the working agreement for
coding agents and contributors modifying this portfolio.

## Project overview

This is a single-page portfolio built with Next.js 16 App Router, React 19,
strict TypeScript, and Tailwind CSS 3. Content is data-driven, images are served
through `next/image`, and the contact form sends mail through a Resend server
action.

Start with these files:

- `app/page.tsx` composes the homepage.
- `features/index.ts` exposes homepage features.
- `config/profile.ts` is the canonical source for identity and contact data.
- `config/site.ts` owns site-wide SEO configuration.
- `app/globals.css` and `tailwind.config.mjs` own global styling.

## Architecture and ownership

Use feature-based organization. Do not recreate global `data/`, `types/`, or
`actions/` dumping grounds.

```text
features/<feature>/
  actions/                 Server actions owned by the feature, when needed
  components/              Feature-only components
  <feature>.data.ts        Feature content and configuration
  <feature>.types.ts       Feature domain types
  index.ts                 Minimal public exports
```

Current features are `contact`, `experience`, `header`, `hero`, `portfolio`,
and `skills`.

Follow these dependency rules:

- Keep feature internals private unless another module genuinely needs them.
- Import files within the same feature using relative paths.
- Import shared modules with the `@/` alias.
- Expose feature entry points through the feature's `index.ts`.
- Put low-level reusable controls in `components/ui`.
- Put cross-feature composition primitives in `components/shared`.
- Keep app-wide visual chrome in `components/layout` and SEO rendering in
  `components/seo`.
- Keep domain types beside the feature that owns them. Do not add a catch-all
  root type file.
- Do not duplicate personal details across features; derive them from
  `config/profile.ts`.

Interactive sections use a container/view split where it remains useful:

- `*Section.tsx` owns state, filtering, effects, and data selection.
- `*View.tsx` receives typed props and focuses on presentation.
- Leaf components render reusable visual units such as cards and fields.

Do not force this pattern onto a trivial static component when it adds no
clarity.

## TypeScript and React

- Preserve strict typing and avoid `any`, unsafe assertions, and duplicated
  inline domain types.
- Prefer interfaces for domain-shaped objects and unions for closed category
  sets.
- Use Server Components by default. Add `"use client"` only when a component
  needs state, effects, browser APIs, or client event handlers.
- Keep secrets and service clients in server-only modules.
- Use stable content IDs as React keys; do not use array indexes for mutable
  collections.
- Preserve semantic HTML, keyboard behavior, focus states, `aria-*` labels,
  reduced-motion support, and descriptive image alt text.
- External links opened in a new tab must include `rel="noopener noreferrer"`.

## Content changes

Change content in the owning feature data file, not inside view markup.

For portfolio work:

- Edit `features/portfolio/portfolio.data.ts`.
- Update `portfolio.types.ts` when adding a new closed category.
- Add a filter only when at least one project uses it; never leave empty tabs.
- Use stable lowercase kebab-case project IDs.
- Use `category: "e-commerce"` for online shops and `category: "package"` for
  libraries or npm packages.
- Private projects should omit demo/source URLs by using `links: {}` and state
  clearly in the title that they are private or internal.
- Never invent public source or demo links. Add them only when verified.
- Keep technology names consistent across entries (`TypeScript`, `Node.js`,
  `Express.js`, `Next.js`, and `React`).

If a removed project is the last member of a filter category, remove that
filter too. Delete assets only after confirming they have no remaining
references.

## Styling and Tailwind

- Preserve the current dark, restrained visual language unless a redesign is
  explicitly requested.
- Reuse `PageSection`, `SectionHeader`, and the existing UI primitives before
  creating another abstraction.
- Use `cn` from `lib/utils.ts` for conditional class composition when template
  strings become difficult to read.
- Avoid constructing Tailwind class names dynamically from partial strings;
  Tailwind cannot reliably discover them.
- When adding a new top-level source directory containing Tailwind classes,
  add its glob to `content` in `tailwind.config.mjs`. Missing content paths can
  make the page render without most styling.
- Do not introduce another PostCSS or Tailwind configuration file. Update the
  existing configuration deliberately.

## Images and static assets

- Store project assets in `public/` and reference them with root-relative paths.
- Prefer WebP for photographic project cards. A good source target is 1200x800
  at roughly 80-85 quality.
- SVG is appropriate for lightweight abstract package/library covers.
- Use `next/image`, an accurately sized or aspect-ratio-controlled container,
  and a truthful `sizes` attribute.
- Keep image quality values within the allowlist in `next.config.mjs`.
- Do not add multi-megabyte PNG screenshots when an optimized WebP is suitable.
- Confirm new assets render correctly and remove superseded originals once no
  code references them.
- If the Open Graph image changes, update both `app/layout.tsx` and
  `app/sitemap.ts`.
- Do not use third-party images without confirming usage rights. Prefer owned,
  generated, or appropriately licensed visuals.

## Security and environment variables

- Never print, paste, log, commit, or expose API keys.
- `.env` and `.env*.local` must remain ignored. `.env.example` contains names
  and safe placeholders only.
- Never prefix a secret with `NEXT_PUBLIC_`; those values are bundled for the
  browser.
- The Resend client belongs in `features/contact/actions/send-email.ts`, which
  must remain server-only.
- Return generic user-facing errors from server actions; do not return provider
  responses, stack traces, environment values, or tokens.
- The current Resend variable is `API_KEY`. If it is renamed, update the server
  action, `.env.example`, local/deployment configuration, and documentation as
  one coordinated change.
- If secret scanning reports a credential, treat it as compromised even after
  deleting the file: revoke/rotate it and remember that it may remain in Git
  history.

When materially changing the contact endpoint, add or preserve server-side
input validation, abuse protection/rate limiting, and safe error handling.

## Dependencies

- Use npm and keep `package.json` and `package-lock.json` synchronized.
- Do not run `npm audit fix --force` or accept major dependency upgrades without
  reviewing the impact.
- After `npm install` or `npm audit fix`, inspect both manifests and the resolved
  versions in the lockfile. A lockfile-only change can still upgrade packages
  allowed by caret ranges.
- Avoid adding a dependency when the existing platform, React, Tailwind,
  Lucide, Radix primitives, or a small local helper already solves the problem.

## Verification

Use proportionate verification; a production build is not required after every
small edit.

For data, copy, or small typed changes, run:

```bash
npm run typecheck
npm run lint
git diff --check
```

Also inspect the affected UI or generated asset when changing layout, styles,
responsive behavior, or images.

Run a production build before deployment and after changes to routing, Next.js
configuration, dependencies, server/client boundaries, metadata, or the build
pipeline:

```bash
npm run build
```

Next.js uses Turbopack by default. In restricted agent sandboxes, Turbopack may
fail because it cannot bind an internal port, and `next/font` may fail when
Google Fonts is unreachable. These environment failures are not automatically
application failures. When a full verification is required and Turbopack is
blocked by the environment, use:

```bash
npm run build -- --webpack
```

Do not use the Webpack fallback routinely or hide genuine application errors
behind the sandbox explanation.

There is currently no automated test suite. Do not claim tests passed unless
tests exist and were actually run.

## Working tree and handoff

- Inspect `git status` before editing and preserve unrelated user changes.
- Keep edits scoped to the request. Do not reformat unrelated files.
- Remove empty directories and obsolete imports after moving files.
- Do not reset, discard, rewrite history, force-push, or commit unless the user
  explicitly requests it.
- Before handoff, summarize behavior changes, list meaningful files/assets,
  report the checks actually run, and mention any remaining warnings or risks.
