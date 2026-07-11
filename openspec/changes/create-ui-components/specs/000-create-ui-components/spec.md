## ADDED Requirements

### Requirement: Implementation of Reusable UI Components
The system SHALL implement the atomic UI components BaseButton, BaseInput, BaseSelect, BaseTextarea, BaseBadge, TaskCard, and BaseModal under `components/ui/` complying with the earthy editorial design system.

#### Scenario: Components available for import
- **WHEN** compiling or rendering components
- **THEN** the components can be imported from `components/ui/` with TypeScript props

### Requirement: Standalone Visual Verifier Page
The system SHALL display all variations, sizes, and states of the components side-by-side on `/ui-verifier`.

#### Scenario: Navigating to ui-verifier
- **WHEN** user goes to `/ui-verifier`
- **THEN** the visual verifier page renders without console errors/warnings

### Requirement: Automated Playwright Visual Test
The system SHALL execute E2E visual tests to verify the design system layout integrity.

#### Scenario: Run visual verification tests
- **WHEN** running `bun playwright test tests/visual-verifier.spec.ts`
- **THEN** the tests pass and capture visual snapshots of `/ui-verifier`
