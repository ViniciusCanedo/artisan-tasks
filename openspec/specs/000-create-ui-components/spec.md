1. OverviewFeature name: Reusable Editorial UI Component Library & Visual Verifier PageOne-line summary: A cohesive, accessible, and responsive component library built with Vue 3, Nuxt 4, and Tailwind CSS, adhering to an earthy editorial design system, including a dedicated page for Playwright automated UI verification.  Why it matters / user problem it solves: Avoids visual inconsistencies across screens (Dashboard, Calendar, Boards), centralizes design system tokens, and guarantees bulletproof visual regression testing via Playwright.  Priority / deadline: High (Foundation layer for the entire application).2. ScopeIn scope:Configuration of the Tailwind CSS theme extensions matching the kanban-editorial-design-system.html design system (earthy tones, editorial serif typography, spacious padding).  Implementation of atomic atomic components: BaseButton, BaseInput, BaseSelect, BaseTextarea, BaseBadge, TaskCard, and BaseModal.Development of a standalone verification page (pages/ui-verifier.vue) displaying all component variations, states, and sizes side-by-side.Playwright UI configuration ready for visual regression capturing.Out of scope (explicitly excluded):Integration with external backend databases or live APIs (all components rely strictly on Vue props).Full application routing logic or drag-and-drop state machines (handled by feature-specific tasks later).3. User Stories / Use CasesAs a Frontend Engineer or AI coding assistant, I want a well-defined, documented set of atomic components so that I can assemble complex Kanban boards, modals, and calendars instantly without rewriting styling code.
As a QA/CI Pipeline, I want a dedicated page showcasing all components in all their configurations so that Playwright can snap accurate visual baseline tests in a single run.
Edge case(s) handled:Text overflowing inside cards or long strings in badges (will use safe truncation techniques).Modal stacking context and layout shifting when scrolling is toggled on body.4. UI / UX RequirementsReference design: Based on references/screens.jpeg and kanban-editorial-design-system.html. Earthy tones (sand, cream, soft brown, terracotta accent), highly editorial serif header fonts, spacious layouts, and minimal borders.  Layout description:Atomic elements: Kept modular and flexible via slots.Verifier Page Layout: A structured grid of columns showcasing components sorted by categories (e.g., Typography, Buttons, Inputs, Modals) with clear labels describing the current state.Responsive behavior:Mobile: Breakpoint 320px - 767px.  Tablet: Breakpoint 768px - 1024px.  Desktop: Breakpoint 1025px+.  States to handle:Default / Interactive: Active states, hover transitions, and crisp outline focus indicators.Disabled: Opaqued out, pointer-events disabled.Error: Subtle crimson border, accessible error text beneath inputs.Interactions & animations:Modals fade in smoothly; buttons have micro-transitions on hover. GSAP (gsap) can be imported for standard page loads/modal entrance animations if declarative Tailwind transitions aren't sufficient.Accessibility requirements: Fully semantic HTML tags (<button>, <label>), explicit ARIA attributes (aria-modal, aria-hidden) where applicable, and high-contrast focus rings (focus-visible:outline-*).5. Component StructureNew components to create:BaseButton.vuePurpose: Primary, secondary, and accent actions.Props: variant ('primary' | 'secondary' | 'accent' | 'danger'), size ('sm' | 'md' | 'lg'), disabled (boolean).BaseInput.vue / BaseTextarea.vue / BaseSelect.vuePurpose: Form inputs capturing titles, details, dates, and select options.  Props: modelValue (string/number), label (string), error (string), placeholder (string), options (Array for select).BaseBadge.vuePurpose: Priority tags (High, Medium, Low) and task counters.  Props: variant ('high' | 'medium' | 'low' | 'count'), text (string).TaskCard.vuePurpose: Individual cards on the Kanban view/Today view.  Props: title (string), description (string), priority ('high' | 'medium' | 'low'), time (string).  BaseModal.vuePurpose: Container modal for Task creation/editing/deletion.  Props: isOpen (boolean), title (string). Emits: close.Component hierarchy on the Verifier Page (pages/ui-verifier.vue):<UiVerifierLayout>
  <Section title="Buttons">
    <BaseButton variant="primary" />
    <BaseButton variant="secondary" />
  </Section>
  <Section title="Forms">
    <BaseInput error="Invalid field" />
  </Section>
  <Section title="Cards">
    <TaskCard />
  </Section>
</UiVerifierLayout>
6. Data & API ContractsData shapes consumed by components (TypeScript Interfaces):TypeScriptexport type PriorityType = 'high' | 'medium' | 'low';

export interface ITask {
  id: string;
  title: string;
  description?: string;
  date: string;
  time?: string;
  priority: PriorityType;
  status: 'todo' | 'in_progress' | 'done';
}
API endpoints consumed: N/A (Components are purely presentation-driven via Vue props).State management: Controlled locally or passed downwards via component props to mimic full predictability during Playwright visual assertions.7. Tech Stack & ConventionsFramework/library: Nuxt 4 (Directory structure following the standard v4 conventions, Vue 3 Composition API with <script setup>).Styling approach: Tailwind CSS via @nuxtjs/tailwindcss. Custom color palette extensions must be defined in tailwind.config.ts.File naming & folder structure convention:Components inside: components/ui/ -> e.g., BaseButton.vue, TaskCard.vue.Verifier Page: pages/ui-verifier.vue.TypeScript// Sample tailwind.config.ts extension requirement
export default {
  theme: {
    extend: {
      colors: {
        editorial: {
          cream: '#F4EFEA',   // Main background tone from screen references
          sand: '#EFE9E0',    // Secondary navigation blocks
          dark: '#2A2421',    // Primary body text/typography
          accent: '#C86A4B',  // Terracotta primary action buttons
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  }
}
8. Validation & Business RulesForm Fields validation visually handled:When error prop is a truthy string, inputs must toggle class variants (border-red-600 text-red-900 focus:ring-red-600).Layout Boundaries: Buttons within cards must automatically clip or wrap cleanly if container size narrows down.9. Acceptance Criteria[ ] All atomic design-system tokens mapped accurately into tailwind.config.ts.[ ] Components use semantic tag names (<button>, <aside>, <time>).  [ ] Component variations render side-by-side cleanly without breaking alignment grid layouts.[ ] Modals are verifiable by having a visible toggle state on the test verifier page (e.g. standard state, and an inline-forced wrapper state for easy rendering screenshots).[ ] Explicit compliance with the Nuxt 4 directory layout pattern.[ ] Component renders correctly on mobile (< 768px) and desktop.  [ ] No console errors/warnings during rendering or script loads.10. Non-Functional RequirementsPerformance: Ensure no massive layout shifts occur when components dynamically toggle active states.Developer Experience (DX): All props explicitly typed with TypeScript interfaces.11. Out-of-the-Box ConstraintsDo NOT: Add heavy third-party styling extensions or headless component framework libraries unless requested. Maintain design layout fidelity using tailwind native configurations.Must use: @nuxtjs/tailwindcss classes explicitly.12. Testing ExpectationsVisual E2E testing Framework: Playwright (@playwright/test).What to test: Create a test file tests/visual-verifier.spec.ts that navigates to /ui-verifier and takes a snapshot of the component catalog layout page to cross-check structural regression.TypeScriptimport { test, expect } from '@playwright/test';

test('UI Component Library Visual Verification', async ({ page }) => {
  await page.goto('/ui-verifier');
  await expect(page).toHaveScreenshot('component-catalog.png', {
    fullPage: true,
  });
});
13. Deliverables[ ] Extended tailwind.config.ts configuration.[ ] Modular components under components/ui/ (BaseButton, BaseInput, BaseSelect, BaseTextarea, BaseBadge, TaskCard, BaseModal).[ ] Unified visual grid validator page under pages/ui-verifier.vue.[ ] Playwright E2E visual test script under tests/visual-verifier.spec.ts.