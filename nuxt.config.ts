// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-07-09',
  future: {
    compatibilityVersion: 4
  },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],
  eslint: {
    config: {
      stylistic: false // Disabled to let Prettier handle formatting
    }
  },
  // Ensure GSAP works correctly with server-side rendering
  build: {
    transpile: ['gsap']
  }
})
