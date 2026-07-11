<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue?: string | number
  label?: string
  error?: string
  placeholder?: string
  disabled?: boolean
  rows?: number
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  label: '',
  error: '',
  placeholder: '',
  disabled: false,
  rows: 3,
  id: () => `textarea-${Math.random().toString(36).substr(2, 9)}`
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const onInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLTextAreaElement).value)
}

const textareaClasses = computed(() => {
  const base =
    'w-full px-3 py-2 bg-editorial-cream border font-sans text-editorial-dark rounded shadow-sm focus:outline-none focus:ring-2 transition-all duration-200'
  if (props.error) {
    return `${base} border-red-600 text-red-900 focus:ring-red-600 focus:border-red-600`
  }
  return `${base} border-editorial-dark/10 focus:ring-editorial-accent focus:border-editorial-accent`
})
</script>

<template>
  <div class="flex flex-col gap-1 w-full text-left">
    <label v-if="label" :for="id" class="font-serif text-sm font-semibold text-editorial-dark">
      {{ label }}
    </label>
    <textarea
      :id="id"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      :class="textareaClasses"
      @input="onInput"
    />
    <span v-if="error" class="text-xs font-semibold text-red-600 mt-0.5">
      {{ error }}
    </span>
  </div>
</template>
