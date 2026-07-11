## Why

We need a central, reusable UI component library that implements the earthy editorial design system to ensure visual consistency across the entire application and support robust visual E2E testing.

## What Changes

- Add earthy editorial design tokens to Tailwind configuration.
- Implement atomic UI components: `BaseButton`, `BaseInput`, `BaseSelect`, `BaseTextarea`, `BaseBadge`, `TaskCard`, and `BaseModal`.
- Create a visual verifier page `/ui-verifier` showcasing all components and their configurations.
- Configure Playwright to support visual regression testing of the components.

## Capabilities

### New Capabilities

### Modified Capabilities

- `000-create-ui-components`: Implement the existing spec for reusable UI components.

## Impact

- `tailwind.config.ts`: Extended with theme tokens.
- `app/components/ui/`: New UI components.
- `app/pages/ui-verifier.vue`: Visual verifier page.
- `tests/visual-verifier.spec.ts`: E2E visual test script.
