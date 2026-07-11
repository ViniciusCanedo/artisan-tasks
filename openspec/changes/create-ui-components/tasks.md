## 1. Environment & Theme Configuration

- [x] 1.1 Create/configure tailwind.config.ts with editorial theme extensions (colors, fonts).
- [x] 1.2 Update assets/css/main.css to include any custom font imports if needed (e.g., Google Fonts Playfair Display and Inter).

## 2. Component Implementation

- [x] 2.1 Implement components/ui/BaseButton.vue with variants, sizes, and disabled state.
- [x] 2.2 Implement components/ui/BaseInput.vue and BaseTextarea.vue with visual states (default, disabled, error).
- [x] 2.3 Implement components/ui/BaseSelect.vue with custom options list and visual states.
- [x] 2.4 Implement components/ui/BaseBadge.vue for tags and counts.
- [x] 2.5 Implement components/ui/TaskCard.vue for kanban/today view.
- [x] 2.6 Implement components/ui/BaseModal.vue with toggle states, accessible ARIA, close event, and GSAP transition.

## 3. Visual Verifier Page

- [x] 3.1 Create pages/ui-verifier.vue displaying all component variations side-by-side.
- [x] 3.2 Add interactive buttons, modals, inputs to the verifier page to allow testing hover, focus, error states, and modal open/close.

## 4. Playwright Testing & Verification

- [x] 4.1 Create tests/visual-verifier.spec.ts to verify the visual catalog.
- [x] 4.2 Run Playwright tests and verify everything builds, lint passes, and screenshots are captured successfully.
