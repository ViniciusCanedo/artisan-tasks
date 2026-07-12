# Atelier / Tasks - Kanban Task Management (Mobile-First)

**Atelier / Tasks** is an elegant, mobile-first task management application designed to help users organize complex projects and personal routines visually and structurally. Inspired by print typography and organic minimalism, it combines the flexibility of traditional Kanban boards with powerful recurring task management and time-focused views.

---

## 🚀 Key Features

- **Secure Authentication:** Individualized account system (Sign-up, Sign-in, session management) ensuring complete data privacy.
- **Kanban Board Manager:** Support for multiple boards, customizable columns, and drag-and-drop cards.
- **Routine & Recurrence Engine:** Easily configure recurring tasks (daily, weekly, or monthly repetition rules).
- **Temporal Views:**
  - **Day View:** A clean list of daily tasks, consolidating due Kanban cards and today's routines.
  - **Week View:** Panoramic view of the next 7 days, allowing quick task rescheduling.
  - **Month View (Calendar):** A calendar view with task indicators and detailed day expansion.
- **Premium Design (Atelier):** Touch-friendly interfaces, dark mode support, and smooth micro-interactions.

---

## 🛠️ Tech Stack

- **Framework:** [Nuxt 4](https://nuxt.com/) (using compatibility v4 features)
- **Runtime & Package Manager:** [Bun](https://bun.sh/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (configured via `@nuxtjs/tailwindcss`)
- **Animations:** [GSAP (GreenSock)](https://gsap.com/) for fluid transitions and micro-interactions
- **Testing:** [Playwright](https://playwright.dev/) for End-to-End (E2E) testing
- **Linter & Formatter:** ESLint & Prettier

---

## 📦 Setup & Installation

Make sure you have [Bun](https://bun.sh/) installed, then set up the project dependencies:

```bash
bun install
```

---

## 💻 Development

Start the local development server on `http://localhost:3000`:

```bash
bun run dev
```

---

## 🧪 Testing (Playwright)

To execute E2E tests, make sure the development server is running or configure Playwright to manage it automatically:

```bash
# Run all E2E tests
bunx playwright test

# Run tests with UI Mode
bunx playwright test --ui
```

---

## 🏗️ Production Build

Build the application for production:

```bash
bun run build
```

Locally preview the production build:

```bash
bun run preview
```

---

## 📐 Design Tokens (Atelier)

The styling architecture is governed by the following curated color palette and typography styles:

- **Colors:**
  - `Charcoal` (`#2D2D2D`): Primary dark tone for structure and typography.
  - `Off-white` (`#F9F8F6`): Editorial background.
  - `Sand` (`#EAE6D7`): Subtle borders, backgrounds, and tracks.
  - `Clay` (`#B99B85`): Accent tone for labels and minor borders.
  - `Terracotta` (`#C05E51`): Accent tone for highlights and primary interactive elements.
  - `Olive` (`#70755C`): Highlights for status/ongoing operations.
- **Typography:**
  - `Serif` (_Playfair Display_): Used for headings and branding elements to achieve an editorial feel.
  - `Sans` (_Inter_): Used for highly readable body copy, forms, and metadata.
