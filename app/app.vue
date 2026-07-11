<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const title = ref('Welcome to Nuxt 4')
const titleRef = ref(null)

onMounted(() => {
  gsap.from(titleRef.value, { opacity: 0, y: -20, duration: 1, ease: 'power2.out' })
})
</script>

<template>
  <NuxtLayout>
    <div class="flex min-h-screen flex-col items-center justify-center bg-slate-50 text-slate-900">
      <h1 ref="titleRef" class="text-4xl font-bold tracking-tight text-emerald-600 sm:text-6xl">
        {{ title }}
      </h1>
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>
