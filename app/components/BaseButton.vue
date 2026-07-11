<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <button class="mt-4 px-4 py-2 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
    {{ label }}
  </button>
</template>
