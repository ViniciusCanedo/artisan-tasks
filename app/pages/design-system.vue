<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

// State for modal
const isModalOpen = ref(false)

// State for recurrence frequency
const recurrenceFreq = ref('daily')

// Modal toggle method
const toggleModal = (isOpen: boolean) => {
  isModalOpen.value = isOpen
}

// Scroll to section helper
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// GSAP Transition Hooks for modal
const beforeEnter = (el: Element) => {
  gsap.set(el, { opacity: 0 })
  const modalBox = el.querySelector('.modal-box')
  if (modalBox) {
    gsap.set(modalBox, { scale: 0.95, y: 15 })
  }
}

const enter = (el: Element, done: () => void) => {
  gsap.to(el, { opacity: 1, duration: 0.3, ease: 'power2.out' })
  const modalBox = el.querySelector('.modal-box')
  if (modalBox) {
    gsap.to(modalBox, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: 'back.out(1.5)',
      onComplete: done
    })
  } else {
    setTimeout(done, 300)
  }
}

const leave = (el: Element, done: () => void) => {
  gsap.to(el, { opacity: 0, duration: 0.25, ease: 'power2.in' })
  const modalBox = el.querySelector('.modal-box')
  if (modalBox) {
    gsap.to(modalBox, {
      scale: 0.95,
      y: 15,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: done
    })
  } else {
    setTimeout(done, 250)
  }
}

// Reveal animation on mount
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
          })
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<template>
  <div
    class="flex flex-col md:flex-row min-h-screen bg-offwhite text-charcoal antialiased font-sans"
  >
    <!-- Desktop Sidebar Navigation -->
    <aside
      class="hidden md:flex flex-col w-64 h-screen sticky top-0 border-r border-sand bg-offwhite p-8 z-40"
    >
      <div class="mb-12">
        <h1 class="font-serif text-2xl font-semibold tracking-wide">Atelier.</h1>
        <p class="text-[10px] text-clay mt-1 uppercase tracking-widest font-semibold">
          Task System
        </p>
      </div>
      <nav class="flex-1 space-y-6">
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-charcoal mb-3">Tokens</h3>
          <ul class="space-y-2 text-sm text-charcoal/70">
            <li>
              <button
                @click="scrollToSection('typography')"
                class="hover:text-terracotta transition-colors text-left w-full"
              >
                Typography
              </button>
            </li>
            <li>
              <button
                @click="scrollToSection('colors')"
                class="hover:text-terracotta transition-colors text-left w-full"
              >
                Colors
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-charcoal mb-3">
            Components
          </h3>
          <ul class="space-y-2 text-sm text-charcoal/70">
            <li>
              <button
                @click="scrollToSection('buttons')"
                class="hover:text-terracotta transition-colors text-left w-full"
              >
                Buttons & Inputs
              </button>
            </li>
            <li>
              <button
                @click="scrollToSection('cards')"
                class="hover:text-terracotta transition-colors text-left w-full"
              >
                Cards
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-charcoal mb-3">Views</h3>
          <ul class="space-y-2 text-sm text-charcoal/70">
            <li>
              <button
                @click="scrollToSection('kanban')"
                class="hover:text-terracotta transition-colors text-left w-full"
              >
                Kanban Board
              </button>
            </li>
            <li>
              <button
                @click="scrollToSection('calendar')"
                class="hover:text-terracotta transition-colors text-left w-full"
              >
                Time Views
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div class="mt-auto">
        <button
          @click="toggleModal(true)"
          id="btn-new-task-desktop"
          class="w-full bg-charcoal text-offwhite py-3 px-4 rounded-organic font-medium text-sm hover:bg-terracotta transition-colors flex items-center justify-center gap-2 shadow-editorial"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          New Task
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main
      class="flex-1 pb-24 md:pb-12 w-full max-w-5xl mx-auto p-6 md:p-12 lg:p-16 overflow-x-hidden"
    >
      <header class="mb-16 md:mb-24 reveal opacity-1 transform translate-y-0">
        <h2 class="font-serif text-4xl md:text-5xl font-medium leading-tight mb-4 text-charcoal">
          Design System
        </h2>
        <p class="text-lg text-charcoal/60 font-light max-w-xl">
          A cohesive, editorial framework for focused task management. Inspired by print typography
          and organic minimalism.
        </p>
      </header>

      <!-- 1. Tokens -->
      <section id="tokens" class="mb-24 reveal">
        <div class="border-b border-sand pb-4 mb-8">
          <h3 class="font-serif text-2xl text-charcoal">01. Tokens</h3>
        </div>

        <!-- Colors -->
        <div id="colors" class="mb-12">
          <h4 class="text-sm font-semibold uppercase tracking-wider text-charcoal/50 mb-6">
            Color Palette
          </h4>
          <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div class="space-y-2">
              <div class="h-24 rounded-organic bg-charcoal shadow-sm"></div>
              <p class="text-xs font-medium">Charcoal</p>
            </div>
            <div class="space-y-2">
              <div class="h-24 rounded-organic bg-offwhite border border-sand shadow-sm"></div>
              <p class="text-xs font-medium">Off-white</p>
            </div>
            <div class="space-y-2">
              <div class="h-24 rounded-organic bg-sand shadow-sm"></div>
              <p class="text-xs font-medium">Sand</p>
            </div>
            <div class="space-y-2">
              <div class="h-24 rounded-organic bg-clay shadow-sm"></div>
              <p class="text-xs font-medium">Clay</p>
            </div>
            <div class="space-y-2">
              <div class="h-24 rounded-organic bg-terracotta shadow-sm"></div>
              <p class="text-xs font-medium">Terracotta</p>
            </div>
            <div class="space-y-2">
              <div class="h-24 rounded-organic bg-olive shadow-sm"></div>
              <p class="text-xs font-medium">Olive</p>
            </div>
          </div>
        </div>

        <!-- Typography -->
        <div id="typography">
          <h4 class="text-sm font-semibold uppercase tracking-wider text-charcoal/50 mb-6">
            Typography
          </h4>
          <div class="space-y-8 max-w-2xl">
            <div
              class="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 border-b border-sand pb-4"
            >
              <span class="text-xs text-clay w-24">Heading 1</span>
              <h1 class="font-serif text-4xl md:text-5xl font-medium">Project Overview</h1>
            </div>
            <div
              class="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 border-b border-sand pb-4"
            >
              <span class="text-xs text-clay w-24">Heading 2</span>
              <h2 class="font-serif text-2xl md:text-3xl italic">Daily Reflections</h2>
            </div>
            <div
              class="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 border-b border-sand pb-4"
            >
              <span class="text-xs text-clay w-24">Body Text</span>
              <p class="font-sans text-base text-charcoal leading-relaxed font-light">
                The quick brown fox jumps over the lazy dog. A clean, highly legible sans-serif for
                functional reading and interface elements.
              </p>
            </div>
            <div
              class="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 border-b border-sand pb-4"
            >
              <span class="text-xs text-clay w-24">Metadata</span>
              <p class="font-sans text-xs uppercase tracking-widest text-charcoal/60 font-semibold">
                October 12, 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Components -->
      <section id="components" class="mb-24 reveal">
        <div class="border-b border-sand pb-4 mb-8">
          <h3 class="font-serif text-2xl text-charcoal">02. Components</h3>
        </div>

        <!-- Buttons -->
        <div id="buttons" class="mb-12">
          <h4 class="text-sm font-semibold uppercase tracking-wider text-charcoal/50 mb-6">
            Buttons
          </h4>
          <div class="flex flex-wrap gap-4 items-center">
            <button
              class="bg-charcoal text-offwhite px-6 py-2.5 rounded-organic font-medium text-sm hover:bg-terracotta transition-colors shadow-editorial"
            >
              Primary
            </button>
            <button
              class="bg-offwhite border border-charcoal/20 text-charcoal px-6 py-2.5 rounded-organic font-medium text-sm hover:border-charcoal transition-colors"
            >
              Secondary
            </button>
            <button
              class="text-charcoal px-4 py-2.5 rounded-organic font-medium text-sm hover:bg-sand transition-colors"
            >
              Ghost Action
            </button>
            <button
              class="bg-charcoal text-offwhite px-4 py-2.5 rounded-organic font-medium text-sm hover:bg-charcoal/90 transition-colors flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              With Icon
            </button>
            <button
              class="bg-sand/50 text-charcoal/30 px-6 py-2.5 rounded-organic font-medium text-sm cursor-not-allowed"
              disabled
            >
              Disabled
            </button>
          </div>
        </div>

        <!-- Inputs -->
        <div id="inputs" class="mb-12">
          <h4 class="text-sm font-semibold uppercase tracking-wider text-charcoal/50 mb-6">
            Form Elements
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            <div class="space-y-1">
              <label class="block text-xs font-semibold text-charcoal uppercase tracking-wider"
                >Task Title</label
              >
              <input
                type="text"
                placeholder="Enter task name..."
                class="w-full bg-transparent border-b border-charcoal/20 py-2 text-charcoal font-medium text-lg focus:outline-none focus:border-terracotta transition-colors placeholder:text-charcoal/30"
              />
            </div>
            <div class="space-y-1">
              <label class="block text-xs font-semibold text-charcoal uppercase tracking-wider"
                >Category</label
              >
              <div class="relative">
                <select
                  class="w-full bg-offwhite border border-sand rounded-organic px-4 py-2.5 text-sm text-charcoal focus:outline-none focus:border-charcoal transition-colors appearance-none shadow-sm"
                >
                  <option>Editorial</option>
                  <option>Production</option>
                  <option>Review</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-charcoal/50"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="space-y-1 md:col-span-2">
              <label class="block text-xs font-semibold text-charcoal uppercase tracking-wider"
                >Description</label
              >
              <textarea
                rows="3"
                placeholder="Add context to this task..."
                class="w-full bg-offwhite border border-sand rounded-organic px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-charcoal transition-colors shadow-sm resize-none"
              ></textarea>
            </div>
            <div class="space-y-1">
              <label class="block text-xs font-semibold text-charcoal uppercase tracking-wider"
                >Error State</label
              >
              <input
                type="text"
                value="Invalid entry"
                class="w-full bg-transparent border-b border-terracotta py-2 text-terracotta font-medium text-lg focus:outline-none focus:border-terracotta transition-colors"
              />
              <p class="text-xs text-terracotta mt-1">This field is required.</p>
            </div>
          </div>
        </div>

        <!-- Cards -->
        <div id="cards">
          <h4 class="text-sm font-semibold uppercase tracking-wider text-charcoal/50 mb-6">
            Cards
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Task Card -->
            <div
              class="bg-offwhite rounded-organic p-5 shadow-editorial hover:shadow-editorial-hover transition-shadow border border-sand/50 cursor-pointer group"
            >
              <div class="flex justify-between items-start mb-3">
                <span
                  class="text-[10px] uppercase tracking-widest font-semibold text-terracotta bg-terracotta/10 px-2 py-1 rounded-sm"
                >
                  Editorial
                </span>
                <span class="w-2 h-2 rounded-full bg-clay"></span>
              </div>
              <h5
                class="font-serif text-lg font-medium text-charcoal mb-2 group-hover:text-terracotta transition-colors"
              >
                Review Winter Issue Proofs
              </h5>
              <p class="text-xs text-charcoal/60 line-clamp-2 mb-4 font-light">
                Check final color grading on spread 12-14 and verify caption alignment.
              </p>
              <div class="flex items-center justify-between mt-auto">
                <div class="flex items-center gap-2">
                  <div
                    class="w-6 h-6 rounded-full bg-sand border border-offwhite flex items-center justify-center text-[10px] font-semibold"
                  >
                    AZ
                  </div>
                </div>
                <span class="text-xs font-medium text-charcoal/40">Today</span>
              </div>
            </div>

            <!-- Project Card -->
            <div
              class="bg-charcoal rounded-organic p-6 shadow-editorial text-offwhite flex flex-col justify-between cursor-pointer"
            >
              <div>
                <p class="text-xs text-offwhite/50 uppercase tracking-widest font-semibold mb-2">
                  Q4 Initiative
                </p>
                <h5 class="font-serif text-xl font-medium mb-1">Brand Redesign</h5>
                <p class="text-sm text-offwhite/70 font-light mb-6">12 tasks remaining</p>
              </div>
              <div class="w-full bg-offwhite/10 h-1 rounded-full overflow-hidden">
                <div class="bg-sand h-full w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Feature UI Examples -->
      <section id="features" class="mb-24 reveal">
        <div class="border-b border-sand pb-4 mb-8">
          <h3 class="font-serif text-2xl text-charcoal">03. Feature Views</h3>
        </div>

        <!-- Kanban Board -->
        <div id="kanban" class="mb-16">
          <div class="flex items-end justify-between mb-6">
            <div>
              <h4 class="font-serif text-2xl text-charcoal">Board View</h4>
              <p class="text-sm text-charcoal/50 font-light">Current Sprint</p>
            </div>
            <button
              class="text-sm text-charcoal font-medium hover:text-terracotta transition-colors"
            >
              Filter
            </button>
          </div>

          <!-- Board Grid -->
          <div class="flex gap-6 overflow-x-auto pb-6 kanban-scroll items-start">
            <!-- Column: To Do -->
            <div class="flex-shrink-0 w-72 md:w-80 flex flex-col gap-4">
              <div class="flex items-center justify-between border-b border-charcoal/10 pb-2">
                <h5 class="text-xs font-semibold uppercase tracking-widest text-charcoal">To Do</h5>
                <span class="text-xs text-charcoal/40 bg-sand/50 px-2 rounded-full">3</span>
              </div>

              <div
                class="bg-offwhite rounded-organic p-4 shadow-editorial border border-sand/50 cursor-pointer border-l-2 border-l-terracotta"
              >
                <h5 class="font-serif text-base font-medium mb-1">Finalize Moodboard</h5>
                <p class="text-xs text-charcoal/60 font-light mb-3">
                  Compile references for the new studio space.
                </p>
                <span class="text-xs font-medium text-charcoal/40">Oct 14</span>
              </div>

              <div
                class="bg-offwhite rounded-organic p-4 shadow-editorial border border-sand/50 cursor-pointer"
              >
                <h5 class="font-serif text-base font-medium mb-1">Draft Newsletter</h5>
                <p class="text-xs text-charcoal/60 font-light mb-3">
                  November updates and new collection tease.
                </p>
                <span class="text-xs font-medium text-charcoal/40">Oct 16</span>
              </div>
            </div>

            <!-- Column: In Progress -->
            <div class="flex-shrink-0 w-72 md:w-80 flex flex-col gap-4">
              <div class="flex items-center justify-between border-b border-charcoal/10 pb-2">
                <h5 class="text-xs font-semibold uppercase tracking-widest text-charcoal">
                  In Progress
                </h5>
                <span class="text-xs text-charcoal/40 bg-sand/50 px-2 rounded-full">1</span>
              </div>

              <div
                class="bg-offwhite rounded-organic p-4 shadow-editorial border border-sand/50 cursor-pointer border-l-2 border-l-olive"
              >
                <div class="flex justify-between items-start mb-1">
                  <h5 class="font-serif text-base font-medium">Review Winter Issue</h5>
                  <span class="w-2 h-2 rounded-full bg-olive animate-pulse"></span>
                </div>
                <p class="text-xs text-charcoal/60 font-light mb-3">
                  Check final color grading on spread 12-14.
                </p>
                <div class="flex items-center gap-1">
                  <div
                    class="w-5 h-5 rounded-full bg-sand text-[8px] flex items-center justify-center font-bold"
                  >
                    AZ
                  </div>
                  <div
                    class="w-5 h-5 rounded-full bg-clay text-[8px] flex items-center justify-center font-bold text-offwhite"
                  >
                    MR
                  </div>
                </div>
              </div>
            </div>

            <!-- Column: Done -->
            <div class="flex-shrink-0 w-72 md:w-80 flex flex-col gap-4 opacity-70">
              <div class="flex items-center justify-between border-b border-charcoal/10 pb-2">
                <h5 class="text-xs font-semibold uppercase tracking-widest text-charcoal">Done</h5>
                <span class="text-xs text-charcoal/40 bg-sand/50 px-2 rounded-full">1</span>
              </div>

              <div
                class="bg-transparent rounded-organic p-4 border border-sand border-dashed cursor-pointer"
              >
                <h5 class="font-serif text-base font-medium text-charcoal/60 line-through">
                  Client Meeting
                </h5>
                <p class="text-xs text-charcoal/40 font-light mt-1">Discussed Q1 deliverables.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Calendar & List Views -->
        <div id="calendar" class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Daily View -->
          <div>
            <div class="mb-6 flex justify-between items-end">
              <h4 class="font-serif text-2xl text-charcoal">Today</h4>
              <p class="text-sm font-semibold uppercase tracking-widest text-terracotta font-sans">
                12 Oct
              </p>
            </div>

            <div class="relative pl-6 border-l border-sand space-y-8">
              <!-- Item 1 -->
              <div class="relative">
                <div
                  class="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-offwhite border-2 border-terracotta"
                ></div>
                <span
                  class="text-xs font-semibold uppercase tracking-widest text-charcoal/40 mb-1 block"
                  >09:00 AM</span
                >
                <div class="bg-offwhite rounded-organic p-4 shadow-sm border border-sand/30">
                  <h5 class="font-serif font-medium">Morning Sync</h5>
                  <p class="text-xs text-charcoal/60 mt-1 font-light">Design team check-in.</p>
                </div>
              </div>
              <!-- Item 2 -->
              <div class="relative">
                <div
                  class="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-sand border-2 border-sand"
                ></div>
                <span
                  class="text-xs font-semibold uppercase tracking-widest text-charcoal/40 mb-1 block"
                  >11:30 AM</span
                >
                <div class="bg-offwhite rounded-organic p-4 shadow-sm border border-sand/30">
                  <h5 class="font-serif font-medium">Review Prototypes</h5>
                </div>
              </div>
            </div>
          </div>

          <!-- Recurring / Minimal Form -->
          <div class="bg-offwhite rounded-organic p-8 shadow-editorial border border-sand/50">
            <h4 class="font-serif text-xl text-charcoal mb-6 border-b border-sand pb-3">
              Set Recurrence
            </h4>

            <div class="space-y-6">
              <div class="flex gap-4">
                <label class="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="freq"
                    value="daily"
                    v-model="recurrenceFreq"
                    class="peer sr-only"
                  />
                  <div
                    class="text-center py-3 border border-sand rounded-organic peer-checked:border-charcoal peer-checked:bg-charcoal peer-checked:text-offwhite transition-colors text-sm font-medium text-charcoal/70"
                  >
                    Daily
                  </div>
                </label>
                <label class="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="freq"
                    value="weekly"
                    v-model="recurrenceFreq"
                    class="peer sr-only"
                  />
                  <div
                    class="text-center py-3 border border-sand rounded-organic peer-checked:border-charcoal peer-checked:bg-charcoal peer-checked:text-offwhite transition-colors text-sm font-medium text-charcoal/70"
                  >
                    Weekly
                  </div>
                </label>
                <label class="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="freq"
                    value="monthly"
                    v-model="recurrenceFreq"
                    class="peer sr-only"
                  />
                  <div
                    class="text-center py-3 border border-sand rounded-organic peer-checked:border-charcoal peer-checked:bg-charcoal peer-checked:text-offwhite transition-colors text-sm font-medium text-charcoal/70"
                  >
                    Monthly
                  </div>
                </label>
              </div>

              <div class="space-y-1">
                <label class="block text-xs font-semibold text-charcoal uppercase tracking-wider"
                  >End Date</label
                >
                <input
                  type="date"
                  class="w-full bg-transparent border-b border-charcoal/20 py-2 text-charcoal font-medium focus:outline-none focus:border-terracotta transition-colors text-sm"
                />
              </div>

              <button
                class="w-full bg-charcoal text-offwhite py-3 rounded-organic font-medium text-sm hover:bg-terracotta transition-colors"
              >
                Save Configuration
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Mobile Bottom Navigation (Visible only on small screens) -->
    <nav
      class="md:hidden fixed bottom-0 w-full bg-offwhite border-t border-sand pb-safe z-40 shadow-[0_-4px_20px_rgba(45,45,45,0.05)]"
    >
      <div class="flex justify-around items-center h-16 px-4">
        <button
          @click="scrollToSection('kanban')"
          class="flex flex-col items-center gap-1 text-terracotta w-16"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <span class="text-[10px] font-semibold">Board</span>
        </button>
        <button
          @click="scrollToSection('calendar')"
          class="flex flex-col items-center gap-1 text-charcoal/40 hover:text-charcoal transition-colors w-16"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span class="text-[10px] font-medium">Calendar</span>
        </button>

        <!-- Floating Action Button -->
        <button
          @click="toggleModal(true)"
          id="btn-new-task-mobile"
          class="relative -top-5 bg-charcoal text-offwhite w-14 h-14 rounded-full flex items-center justify-center shadow-editorial hover:scale-105 transition-transform border-4 border-offwhite"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>

        <button
          @click="scrollToSection('tokens')"
          class="flex flex-col items-center gap-1 text-charcoal/40 hover:text-charcoal transition-colors w-16"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span class="text-[10px] font-medium">Tokens</span>
        </button>
        <button
          @click="scrollToSection('components')"
          class="flex flex-col items-center gap-1 text-charcoal/40 hover:text-charcoal transition-colors w-16"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span class="text-[10px] font-medium">Profile</span>
        </button>
      </div>
    </nav>

    <!-- Create Task Modal -->
    <Transition @before-enter="beforeEnter" @enter="enter" @leave="leave" :css="false">
      <div
        v-if="isModalOpen"
        id="task-modal"
        class="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        @click.self="toggleModal(false)"
      >
        <div
          class="modal-box bg-offwhite w-full max-w-lg rounded-organic shadow-2xl p-6 md:p-8 relative"
        >
          <button
            @click="toggleModal(false)"
            id="btn-close-modal"
            class="absolute top-4 right-4 text-charcoal/40 hover:text-charcoal"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h3 class="font-serif text-3xl text-charcoal mb-6 border-b border-sand pb-4">New Task</h3>

          <form @submit.prevent="toggleModal(false)" class="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Task title"
                id="input-task-title"
                class="w-full bg-transparent border-b border-charcoal/20 py-2 font-serif text-2xl text-charcoal focus:outline-none focus:border-terracotta transition-colors placeholder:text-charcoal/30"
                required
              />
            </div>

            <div class="grid grid-cols-2 gap-6">
              <div class="space-y-1">
                <label
                  class="block text-[10px] font-semibold text-charcoal uppercase tracking-widest"
                  >Column</label
                >
                <div class="relative">
                  <select
                    class="w-full bg-transparent border-b border-charcoal/20 py-2 text-sm text-charcoal focus:outline-none focus:border-charcoal appearance-none"
                  >
                    <option>To Do</option>
                    <option>In Progress</option>
                    <option>Done</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center text-charcoal/50"
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="space-y-1">
                <label
                  class="block text-[10px] font-semibold text-charcoal uppercase tracking-widest"
                  >Due Date</label
                >
                <input
                  type="date"
                  class="w-full bg-transparent border-b border-charcoal/20 py-2 text-sm text-charcoal focus:outline-none focus:border-charcoal"
                />
              </div>
            </div>

            <div class="pt-4 flex justify-end gap-3">
              <button
                type="button"
                @click="toggleModal(false)"
                id="btn-cancel-modal"
                class="text-charcoal px-4 py-2 font-medium text-sm hover:bg-sand rounded-organic transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                id="btn-submit-modal"
                class="bg-charcoal text-offwhite px-6 py-2 rounded-organic font-medium text-sm hover:bg-terracotta transition-colors shadow-editorial"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </div>
</template>
