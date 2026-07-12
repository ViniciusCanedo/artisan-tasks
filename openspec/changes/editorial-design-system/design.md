## Context

The `tasks-artisan` application is built on Nuxt 4, Tailwind CSS, and GSAP. It currently lacks a standardized design theme and contains initial boilerplate files. We have been given a reference file `references/kanban-editorial-design-system.html` containing an editorial style ("Atelier") with custom typography, colors, components, and layouts.

## Goals / Non-Goals

**Goals:**

- Extend the global Tailwind theme with Atelier design system tokens (colors, typography, border radius, shadows).
- Update the global styles to support custom editorial scrollbars and base document variables.
- Refactor the scaffolded layouts/views (`app.vue`, `layouts/default.vue`) to allow pages to render without pre-styled boilerplate wrappers.
- Create `/design-system` as a Nuxt 4 page showcasing all tokens, components, and views from the reference HTML file.
- Use GSAP for interactive animations such as modal transitions and element scroll-reveal effects.

**Non-Goals:**

- Creating a persistent backend database structure for the showcased Kanban board or recurrence configurations.
- Changing components unrelated to the design system.

## Decisions

### Decision 1: Create a root `tailwind.config.ts`

- **Rationale**: Having a dedicated config file keeps the tailwind theme extensions clean, separated from `nuxt.config.ts`, and enables full TypeScript autocomplete for tailwind styles.
- **Alternatives considered**: Merging it directly in `nuxt.config.ts`. This was rejected because it clutter the main configuration file.

### Decision 2: Import Google Fonts in `app/assets/css/main.css`

- **Rationale**: Setting up Google Fonts (`Playfair Display` and `Inter`) via CSS `@import` keeps the font dependencies co-located with our core stylesheets.
- **Alternatives considered**: Defining headers in `nuxt.config.ts` head metadata. Global CSS import is simpler and easier to maintain.

### Decision 3: Use GSAP for Modal and Reveal effects

- **Rationale**: Aligning with the project guidelines (`AGENTS.md`), we will use GSAP instead of vanilla CSS transitions or raw DOM classes for animations, ensuring high performance.
- **Alternatives considered**: Vanilla JS element scroll event listeners (from reference). Using Vue refs and GSAP ScrollTrigger or onMounted timelines is much cleaner and performant.

## Risks / Trade-offs

- **[Risk] Font load delay (FOUT)** &rarr; **Mitigation**: Google Fonts will load with `display=swap`. Standard system-ui and Georgia fonts will serve as local fallbacks.
- **[Risk] Breaking layout of other/future pages** &rarr; **Mitigation**: We will simplify `app.vue` and `layouts/default.vue` to only act as simple wrappers without layout-specific styles, giving pages full control over their visual container.
