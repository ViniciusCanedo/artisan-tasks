<script setup lang="ts">
import BaseBadge from './BaseBadge.vue'

interface Props {
  title: string
  description?: string
  priority: 'high' | 'medium' | 'low'
  time?: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="flex flex-col gap-3 p-5 bg-white border border-editorial-dark/10 rounded shadow-sm hover:shadow-md transition-shadow duration-200 text-left"
  >
    <div class="flex items-start justify-between gap-3">
      <h3
        class="font-serif font-semibold text-lg text-editorial-dark leading-tight tracking-tight break-words"
      >
        {{ title }}
      </h3>
      <BaseBadge :variant="priority" />
    </div>

    <p v-if="description" class="font-sans text-sm text-editorial-dark/80 line-clamp-3 break-words">
      {{ description }}
    </p>

    <div
      v-if="time"
      class="flex items-center gap-1.5 mt-auto pt-2 border-t border-editorial-dark/5 text-xs text-editorial-dark/60 font-medium"
    >
      <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <time>{{ time }}</time>
    </div>
  </div>
</template>
