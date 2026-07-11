<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '../components/ui/BaseButton.vue'
import BaseInput from '../components/ui/BaseInput.vue'
import BaseTextarea from '../components/ui/BaseTextarea.vue'
import BaseSelect from '../components/ui/BaseSelect.vue'
import BaseBadge from '../components/ui/BaseBadge.vue'
import TaskCard from '../components/ui/TaskCard.vue'
import BaseModal from '../components/ui/BaseModal.vue'

// Local state for testing interaction
const isModalOpen = ref(false)
const testInputValue = ref('')
const testSelectValue = ref('medium')
const testTextareaValue = ref('')

const selectOptions = [
  { value: 'low', label: 'Low Priority' },
  { value: 'medium', label: 'Medium Priority' },
  { value: 'high', label: 'High Priority' }
]
</script>

<template>
  <div
    class="min-h-screen bg-editorial-cream text-editorial-dark py-12 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto"
  >
    <!-- Header -->
    <header class="border-b border-editorial-dark/15 pb-8 mb-12 text-left">
      <h1 class="font-serif font-bold text-4xl sm:text-5xl leading-tight tracking-tight">
        Editorial UI Verifier Catalog
      </h1>
      <p class="font-sans text-sm sm:text-base text-editorial-dark/70 mt-2 max-w-2xl">
        A visual catalog showcase of the Earthy Editorial design system components, states, sizes,
        and layout boundaries.
      </p>
    </header>

    <div class="grid grid-cols-1 gap-12">
      <!-- 1. Buttons Category -->
      <section
        class="border border-editorial-dark/10 bg-editorial-sand/30 p-6 sm:p-8 rounded flex flex-col gap-6 text-left"
      >
        <h2 class="font-serif font-semibold text-2xl border-b border-editorial-dark/10 pb-2">
          1. Buttons (BaseButton)
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3
              class="font-serif text-sm font-semibold text-editorial-dark/60 uppercase tracking-wider mb-4"
            >
              Variants
            </h3>
            <div class="flex flex-wrap gap-4 items-center">
              <BaseButton variant="primary">Primary Button</BaseButton>
              <BaseButton variant="secondary">Secondary Button</BaseButton>
              <BaseButton variant="accent">Accent Button</BaseButton>
              <BaseButton variant="danger">Danger Button</BaseButton>
            </div>
          </div>
          <div>
            <h3
              class="font-serif text-sm font-semibold text-editorial-dark/60 uppercase tracking-wider mb-4"
            >
              Sizes & Disabled
            </h3>
            <div class="flex flex-wrap gap-4 items-center">
              <BaseButton size="sm">Small</BaseButton>
              <BaseButton size="md">Medium</BaseButton>
              <BaseButton size="lg">Large</BaseButton>
              <BaseButton disabled>Disabled Button</BaseButton>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Form Inputs Category -->
      <section
        class="border border-editorial-dark/10 bg-editorial-sand/30 p-6 sm:p-8 rounded flex flex-col gap-6 text-left"
      >
        <h2 class="font-serif font-semibold text-2xl border-b border-editorial-dark/10 pb-2">
          2. Form Inputs (BaseInput, BaseTextarea, BaseSelect)
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Text Inputs -->
          <div class="flex flex-col gap-4">
            <h3
              class="font-serif text-sm font-semibold text-editorial-dark/60 uppercase tracking-wider"
            >
              Inputs
            </h3>
            <BaseInput
              v-model="testInputValue"
              label="Task Title"
              placeholder="e.g., Design landing page"
            />
            <BaseInput label="Disabled Input" disabled placeholder="Cannot type here" />
            <BaseInput
              label="Input with Error"
              error="Title is a required field."
              placeholder="Error visual state"
            />
          </div>

          <!-- Select Inputs -->
          <div class="flex flex-col gap-4">
            <h3
              class="font-serif text-sm font-semibold text-editorial-dark/60 uppercase tracking-wider"
            >
              Select
            </h3>
            <BaseSelect v-model="testSelectValue" label="Task Priority" :options="selectOptions" />
            <BaseSelect label="Disabled Select" disabled :options="['Option 1', 'Option 2']" />
            <BaseSelect
              label="Select with Error"
              error="Please select a valid option."
              :options="selectOptions"
            />
          </div>

          <!-- Textarea Inputs -->
          <div class="flex flex-col gap-4">
            <h3
              class="font-serif text-sm font-semibold text-editorial-dark/60 uppercase tracking-wider"
            >
              Textarea
            </h3>
            <BaseTextarea
              v-model="testTextareaValue"
              label="Description"
              placeholder="Enter task details..."
            />
            <BaseTextarea label="Disabled Textarea" disabled placeholder="Cannot edit details" />
            <BaseTextarea
              label="Textarea with Error"
              error="Description is too long."
              placeholder="Error text state"
            />
          </div>
        </div>
      </section>

      <!-- 3. Badges Category -->
      <section
        class="border border-editorial-dark/10 bg-editorial-sand/30 p-6 sm:p-8 rounded flex flex-col gap-6 text-left"
      >
        <h2 class="font-serif font-semibold text-2xl border-b border-editorial-dark/10 pb-2">
          3. Badges (BaseBadge)
        </h2>
        <div class="flex flex-wrap gap-6 items-center">
          <div class="flex flex-col gap-2">
            <span class="text-xs text-editorial-dark/60 font-serif">High Priority</span>
            <BaseBadge variant="high">High</BaseBadge>
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-xs text-editorial-dark/60 font-serif">Medium Priority</span>
            <BaseBadge variant="medium">Medium</BaseBadge>
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-xs text-editorial-dark/60 font-serif">Low Priority</span>
            <BaseBadge variant="low">Low</BaseBadge>
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-xs text-editorial-dark/60 font-serif">Task Count</span>
            <BaseBadge variant="count">12</BaseBadge>
          </div>
        </div>
      </section>

      <!-- 4. Task Cards Category -->
      <section
        class="border border-editorial-dark/10 bg-editorial-sand/30 p-6 sm:p-8 rounded flex flex-col gap-6 text-left"
      >
        <h2 class="font-serif font-semibold text-2xl border-b border-editorial-dark/10 pb-2">
          4. Task Cards (TaskCard)
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TaskCard
            title="Design Editorial Moodboard"
            description="Create a Figma board with color scheme, editorial serif typography references, and spacing guides."
            priority="high"
            time="09:00 - 11:30"
          />
          <TaskCard
            title="Refactor Kanban Column Scrolling"
            description="Fix layout shifting on Chrome mobile when scrolling the card deck."
            priority="medium"
            time="14:00 - 15:30"
          />
          <TaskCard
            title="Update Project Documentation"
            description="Write developer instructions for creating new spec proposals using OPENSPEC."
            priority="low"
            time="17:00 - 18:00"
          />
        </div>
      </section>

      <!-- 5. Modals Category (Interactive + Inline Visual Test) -->
      <section
        class="border border-editorial-dark/10 bg-editorial-sand/30 p-6 sm:p-8 rounded flex flex-col gap-6 text-left"
      >
        <h2 class="font-serif font-semibold text-2xl border-b border-editorial-dark/10 pb-2">
          5. Modals (BaseModal)
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <!-- Interactive Trigger -->
          <div class="flex flex-col gap-4">
            <h3
              class="font-serif text-sm font-semibold text-editorial-dark/60 uppercase tracking-wider"
            >
              Interactive Test
            </h3>
            <p class="text-sm text-editorial-dark/70">
              Click the button below to open an interactive modal with full overlay, accessibility
              tags, and GSAP transition.
            </p>
            <div>
              <BaseButton variant="primary" @click="isModalOpen = true">
                Open Dialog Modal
              </BaseButton>
            </div>
            <!-- Live Modal -->
            <BaseModal :is-open="isModalOpen" title="New Kanban Task" @close="isModalOpen = false">
              <div class="flex flex-col gap-4">
                <BaseInput label="Title" placeholder="Task title..." />
                <BaseTextarea label="Notes" placeholder="Additional details..." />
              </div>
              <template #footer>
                <BaseButton variant="secondary" @click="isModalOpen = false">Cancel</BaseButton>
                <BaseButton variant="primary" @click="isModalOpen = false">Save Task</BaseButton>
              </template>
            </BaseModal>
          </div>

          <!-- Inline-Forced Modal (Always visible for easy visual regression snapshotting) -->
          <div class="flex flex-col gap-4">
            <h3
              class="font-serif text-sm font-semibold text-editorial-dark/60 uppercase tracking-wider"
            >
              Inline Forced State (For E2E screenshots)
            </h3>
            <div class="border border-editorial-dark/10 rounded-lg p-2 bg-editorial-dark/5">
              <BaseModal inline :is-open="true" title="Pre-rendered Inline Modal">
                <p class="text-sm text-editorial-dark/80">
                  This modal is pre-rendered inline in the page hierarchy to enable consistent
                  visual regression screenshots.
                </p>
                <template #footer>
                  <BaseButton variant="secondary" size="sm">Dismiss</BaseButton>
                  <BaseButton variant="accent" size="sm">Proceed</BaseButton>
                </template>
              </BaseModal>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
