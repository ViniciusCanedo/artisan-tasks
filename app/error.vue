<script setup lang="ts">
defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center p-4 text-center">
    <h2 class="text-2xl font-bold text-red-600 mb-2">Error {{ error?.statusCode }}</h2>
    <p class="text-slate-600 mb-4">{{ error?.message || 'Something went wrong.' }}</p>
    <button @click="handleError" class="px-4 py-2 bg-emerald-600 text-white rounded shadow">
      Go Home
    </button>
  </div>
</template>
