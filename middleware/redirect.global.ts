export default defineNuxtRouteMiddleware((to, from) => {
  if (to.fullPath === '/' || to.fullPath === '/home') {
    return navigateTo('/home/homePage')
  }
})
