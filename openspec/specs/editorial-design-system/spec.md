# Capability: Editorial Design System

## Purpose
Define the global layout, design tokens, component styles, and responsive navigation structure based on the Atelier editorial design system.

## Requirements

### Requirement: Tailwind Theme Extension

The system SHALL integrate the Atelier Design System tokens globally via Tailwind CSS configurations.

#### Scenario: Custom Tailwind configuration matches Atelier specification

- **WHEN** Tailwind utility classes are compiled
- **THEN** the colors `terracotta`, `sand`, `clay`, `olive`, `charcoal`, and `offwhite` are registered, `Playfair Display` is registered as `font-serif`, `Inter` is registered as `font-sans`, custom shadows `editorial` and `editorial-hover` are active, and `rounded-organic` maps to `0.35rem`.

### Requirement: Design System Page

The system SHALL expose a showcase route at `/design-system` containing all tokens, components, and layout views defined in the specification.

#### Scenario: Render all reference sections

- **WHEN** the user visits `/design-system`
- **THEN** the page displays Sidebar navigation (on desktop), Tokens (Colors and Typography), Components (Buttons, Form Elements, Cards), and Feature Views (Kanban Board, Today view, Set Recurrence form).

#### Scenario: Interaction with Create Task Modal

- **WHEN** the user clicks "New Task" (in desktop sidebar) or the floating action button (in mobile bottom navigation)
- **THEN** the "New Task" modal opens with a smooth fade-in and scale-up animation powered by GSAP.

#### Scenario: Responsive navigation layout

- **WHEN** the viewport width is less than 768px
- **THEN** the sidebar is hidden and the mobile bottom navigation is displayed at the bottom of the screen.
