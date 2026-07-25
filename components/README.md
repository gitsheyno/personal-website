# Component architecture

The homepage uses a container/presentation split so layout and styling can
change without moving state or content logic.

## Folders

- `layout/` contains page-wide chrome such as the header and background.
- `sections/` contains one folder per homepage section.
- `shared/` contains layout primitives shared by multiple sections.
- `ui/` contains low-level design-system components.

## Section pattern

Interactive sections follow the same naming convention:

- `*Section.tsx` is the container. It owns state and selects data.
- `*View.tsx` is presentation-only. It receives typed props.
- smaller files such as `ProjectCard.tsx` render one reusable visual unit.

Static content lives in `/data`, and the shared content models live in
`/types`. To restyle the page, start with `shared/PageSection.tsx`, the relevant
`*View.tsx`, or a leaf card. To change content, edit the matching file in
`/data` without touching the component markup.
