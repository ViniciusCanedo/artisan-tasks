<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'accent' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-editorial-accent text-editorial-cream hover:bg-opacity-90 active:scale-98'
    case 'secondary':
      return 'bg-editorial-sand text-editorial-dark border border-editorial-dark/10 hover:bg-editorial-cream/50 active:scale-98'
    case 'accent':
      return 'bg-editorial-dark text-editorial-cream hover:bg-opacity-90 active:scale-98'
    case 'danger':
      return 'bg-red-700 text-white hover:bg-red-800 active:scale-98'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3 py-1.5 text-xs'
    case 'md':
      return 'px-4 py-2 text-sm'
    case 'lg':
      return 'px-5 py-2.5 text-base'
  }
})
</script>

<template>
  <button
    :disabled="disabled"
    class="inline-flex items-center justify-center font-medium rounded transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-editorial-accent disabled:opacity-50 disabled:pointer-events-none"
    :class="[variantClasses, sizeClasses]"
  >
    <slot />
  </button>
</template>
