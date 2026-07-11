<script setup lang="ts">
import { computed } from 'vue'

interface SelectOption {
  value: string | number
  label: string
}

interface Props {
  modelValue?: string | number
  label?: string
  error?: string
  placeholder?: string
  disabled?: boolean
  options: (string | SelectOption)[]
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  label: '',
  error: '',
  placeholder: '',
  disabled: false
})

const defaultId = useId()
const selectId = computed(() => props.id || defaultId)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const onChange = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLSelectElement).value)
}

const normalizedOptions = computed((): SelectOption[] => {
  return props.options.map((option) => {
    if (typeof option === 'string') {
      return { value: option, label: option }
    }
    return option
  })
})

const selectClasses = computed(() => {
  const base =
    'w-full px-3 py-2 bg-editorial-cream border font-sans text-editorial-dark rounded shadow-sm focus:outline-none focus:ring-2 transition-all duration-200 cursor-pointer appearance-none'
  if (props.error) {
    return `${base} border-red-600 text-red-900 focus:ring-red-600 focus:border-red-600`
  }
  return `${base} border-editorial-dark/10 focus:ring-editorial-accent focus:border-editorial-accent`
})
</script>

<template>
  <div class="flex flex-col gap-1 w-full text-left relative">
    <label
      v-if="label"
      :for="selectId"
      class="font-serif text-sm font-semibold text-editorial-dark"
    >
      {{ label }}
    </label>
    <div class="relative">
      <select
        :id="selectId"
        :value="modelValue"
        :disabled="disabled"
        :class="selectClasses"
        @change="onChange"
      >
        <option v-if="placeholder" value="" disabled selected>
          {{ placeholder }}
        </option>
        <option v-for="option in normalizedOptions" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
      <!-- Custom arrow indicator -->
      <div
        class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-editorial-dark/60"
      >
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
    <span v-if="error" class="text-xs font-semibold text-red-600 mt-0.5">
      {{ error }}
    </span>
  </div>
</template>
