<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant: 'high' | 'medium' | 'low' | 'count'
  text?: string | number
}

const props = defineProps<Props>()

const badgeClasses = computed(() => {
  switch (props.variant) {
    case 'high':
      return 'bg-red-50 text-red-800 border border-red-200/60 font-semibold px-2.5 py-0.5 rounded text-xs tracking-wide uppercase'
    case 'medium':
      return 'bg-amber-50 text-amber-800 border border-amber-200/60 font-semibold px-2.5 py-0.5 rounded text-xs tracking-wide uppercase'
    case 'low':
      return 'bg-emerald-50 text-emerald-800 border border-emerald-200/60 font-semibold px-2.5 py-0.5 rounded text-xs tracking-wide uppercase'
    case 'count':
      return 'bg-editorial-dark text-editorial-cream text-xs font-semibold px-2 py-0.5 rounded-full inline-flex items-center justify-center min-w-[20px] h-[20px]'
  }
})
</script>

<template>
  <span class="inline-flex items-center select-none font-sans" :class="badgeClasses">
    <slot>{{ text }}</slot>
  </span>
</template>
