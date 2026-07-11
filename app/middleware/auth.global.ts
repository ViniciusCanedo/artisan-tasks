export default defineNuxtRouteMiddleware((to, from) => {
  // Global middleware sample logic
  console.log(`Navigating from ${from.path} to ${to.path}`)
})
