<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

interface Props {
  isOpen: boolean
  title: string
  inline?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
  title: '',
  inline: false
})

const emit = defineEmits<{
  (e: 'close'): void
}>()

const overlay = ref<HTMLElement | null>(null)
const card = ref<HTMLElement | null>(null)

// Handle escape key
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

// Watch isOpen to toggle body scrolling & keydown listeners
watch(
  () => props.isOpen,
  (open) => {
    if (typeof window === 'undefined') return
    if (open) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  if (typeof window === 'undefined') return
  document.removeEventListener('keydown', handleKeyDown)
  document.body.style.overflow = ''
})

// GSAP Transition Hooks
const beforeEnter = (el: Element) => {
  if (props.inline) return
  const overlayEl = el.querySelector('[data-modal-overlay]')
  const cardEl = el.querySelector('[data-modal-card]')
  if (overlayEl) gsap.set(overlayEl, { opacity: 0 })
  if (cardEl) gsap.set(cardEl, { opacity: 0, y: -30, scale: 0.95 })
}

const enter = (el: Element, done: () => void) => {
  if (props.inline) {
    done()
    return
  }
  const overlayEl = el.querySelector('[data-modal-overlay]')
  const cardEl = el.querySelector('[data-modal-card]')

  const tl = gsap.timeline({ onComplete: done })
  if (overlayEl) {
    tl.to(overlayEl, { opacity: 1, duration: 0.25, ease: 'power2.out' }, 0)
  }
  if (cardEl) {
    tl.to(cardEl, { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'back.out(1.4)' }, 0.05)
  }
}

const leave = (el: Element, done: () => void) => {
  if (props.inline) {
    done()
    return
  }
  const overlayEl = el.querySelector('[data-modal-overlay]')
  const cardEl = el.querySelector('[data-modal-card]')

  const tl = gsap.timeline({ onComplete: done })
  if (cardEl) {
    tl.to(cardEl, { opacity: 0, y: -20, scale: 0.95, duration: 0.25, ease: 'power2.in' }, 0)
  }
  if (overlayEl) {
    tl.to(overlayEl, { opacity: 0, duration: 0.25, ease: 'power2.in' }, 0.05)
  }
}
</script>

<template>
  <Transition :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <div
      v-if="isOpen || inline"
      :class="
        inline
          ? 'relative w-full'
          : 'fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto'
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <!-- Overlay Backdrop -->
      <div
        v-if="!inline"
        ref="overlay"
        data-modal-overlay
        class="fixed inset-0 bg-editorial-dark/60 backdrop-blur-xs"
        @click="emit('close')"
      />

      <!-- Modal Card -->
      <div
        ref="card"
        data-modal-card
        :class="
          inline
            ? 'w-full bg-editorial-cream border border-editorial-dark/10 rounded shadow-md overflow-hidden flex flex-col'
            : 'relative w-full max-w-lg bg-editorial-cream border border-editorial-dark/10 rounded shadow-xl overflow-hidden z-10 flex flex-col'
        "
      >
        <!-- Header -->
        <div class="flex items-center justify-between p-5 border-b border-editorial-dark/5">
          <h2 id="modal-title" class="font-serif font-bold text-xl text-editorial-dark">
            {{ title }}
          </h2>
          <button
            class="p-1 rounded-full text-editorial-dark/60 hover:text-editorial-dark hover:bg-editorial-dark/5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-editorial-accent"
            aria-label="Close modal"
            @click="emit('close')"
          >
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Content -->
        <div class="p-6 overflow-y-auto">
          <slot />
        </div>

        <!-- Footer -->
        <div
          v-if="$slots.footer"
          class="flex items-center justify-end gap-3 p-5 bg-editorial-sand/40 border-t border-editorial-dark/5"
        >
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Transition>
</template>
