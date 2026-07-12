## Why

The tasks-artisan application lacks a unified visual identity and design system, causing inconsistency in user interfaces and a poor mobile experience. By converting the "Atelier" Editorial Design System reference to a page in NuxtJS and integrating its configurations globally into Tailwind, we will establish a solid visual standard for the entire application, enabling organic, mobile-first, and high-fidelity UI developments.

## What Changes

- Add Atelier Design System colors, typography, border radius, and box shadows to Tailwind configurations.
- Update `app/assets/css/main.css` to load fonts and add design system custom utilities like scrollbar styles and animations.
- Clean up `app.vue` and `default.vue` layout to prevent UI pollution from scaffolded placeholders and use the new design system styles.
- Create a new Nuxt page at `app/pages/design-system.vue` showcasing all components, tokens, and views from the reference file `references/kanban-editorial-design-system.html`.
- Add GSAP animations for the scroll reveal effect instead of relying on custom window scroll event listeners, keeping it in line with our performance and animation guidelines.

## Capabilities

### New Capabilities

- `editorial-design-system`: The design system tokens, components (buttons, inputs, cards), and layout page mapped directly from the reference HTML file.

### Modified Capabilities

## Impact

- **Tailwind Config**: Creation of `tailwind.config.ts` in the root to extend colors, fonts, shadow, border radius, and transitions.
- **Global Styles**: Modified `app/assets/css/main.css` to import Playfair Display and Inter fonts, configure the base theme color, scrollbars, and helper classes.
- **Main Layouts/Pages**:
  - `app/app.vue`: Simplified to only render `NuxtPage` inside `NuxtLayout` without centered flex wrappers or scaffolded texts.
  - `app/layouts/default.vue`: Streamlined to be a clean wrapper without the placeholder header, allowing pages to control their headers and layouts.
  - `app/pages/design-system.vue`: A fully functional page implementing all features from `references/kanban-editorial-design-system.html`.
- **Dependencies**: Uses `gsap` for animations.
