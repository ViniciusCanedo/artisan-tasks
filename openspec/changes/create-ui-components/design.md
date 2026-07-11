## Context

We are implementing a set of atomic UI components for the Kanban application using Nuxt 4 (Composition API with TypeScript) and Tailwind CSS. The design system follows an earthy editorial style with Playfair Display and Inter fonts.

## Goals / Non-Goals

**Goals:**
- Extend the Tailwind theme with editorial color tokens (`editorial-cream`, `editorial-sand`, `editorial-dark`, `editorial-accent`) and custom serif/sans fonts.
- Implement the requested Vue/Nuxt 4 components (`BaseButton`, `BaseInput`, `BaseSelect`, `BaseTextarea`, `BaseBadge`, `TaskCard`, `BaseModal`).
- Design a high-quality visual test verification page `/ui-verifier`.
- Write Playwright E2E tests for visual catalog verification.

**Non-Goals:**
- Database integrations, API calls, or state manager setups (strictly presentation and local states).

## Decisions

- **Tailwind Extension**: Define custom editorial colors and serif/sans fonts in `tailwind.config.ts` (extending default theme).
- **Nuxt 4 Directory Layout**: Place components inside `app/components/ui/` and the verifier page inside `app/pages/ui-verifier.vue`.
- **E2E Visual Test**: Place E2E test file in `tests/visual-verifier.spec.ts`.
- **GSAP Animations**: Use GSAP for smooth modal fade and entrance animation if needed, but rely on standard Tailwind transition classes where appropriate.

## Risks / Trade-offs

- **Layout Shifts**: Components might have layout shifts when rendering error messages or toggling modal. Mitigated by using fixed margins/paddings or transition heights.
