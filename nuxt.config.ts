// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  app: {
    baseURL: '/hc-trash-hauler-schedule-lookup/',
  },
})
