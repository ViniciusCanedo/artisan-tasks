## 1. Theme Configuration

- [x] 1.1 Create `tailwind.config.ts` in root with the Atelier design system theme tokens (colors, fontFamily, boxShadow, borderRadius)
- [x] 1.2 Modify `app/assets/css/main.css` to import Google Fonts and define custom classes (kanban scrollbar, base styles)

## 2. Layout Refactor

- [x] 2.1 Simplify `app/app.vue` to only render NuxtLayout and NuxtPage
- [x] 2.2 Update `app/layouts/default.vue` to be a minimal slot wrapper without scaffolded text and header

## 3. Design System Page Implementation

- [x] 3.1 Create page `app/pages/design-system.vue` with layout, tokens view, components, and mockup views
- [x] 3.2 Implement interactive Create Task modal state and mobile menu toggling using Vue ref state
- [x] 3.3 Add GSAP scroll reveal animations for elements with the `.reveal` class

## 4. E2E Testing and Verification

- [x] 4.1 Create Playwright E2E test suite in `tests/design-system.spec.ts` to verify the page features, modal interaction, and responsive layouts
- [x] 4.2 Run ESLint/Prettier check and execute Playwright tests to ensure all pass successfully
