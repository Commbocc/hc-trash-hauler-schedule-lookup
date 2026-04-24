// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  compatibilityDate: '2026-04-24',
  devtools: { enabled: true },
  ssr: false,
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  app: {
    baseURL: '/hc-trash-hauler-schedule-lookup/',
    head: {
      title: 'Trash Hauler Schedule Lookup',
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
})
