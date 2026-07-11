import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: { name: 'local-logger' },
  setup(options, nuxt) {
    nuxt.hook('ready', () => {
      console.log('Successfully initialized local module for Nuxt 4!')
    })
  }
})
