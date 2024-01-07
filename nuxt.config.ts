// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@vueuse/nuxt',
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
  ],
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/',
    },
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true
  },
  devtools: { enabled: true }
})
