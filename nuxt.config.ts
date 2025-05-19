// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nitro.build/deploy#compatibility-date
  compatibilityDate: 'latest',

  routeRules: {
    '/**': { ssr: false },
    '/about': { prerender: true },
  },

  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/eslint', '@nuxt/scripts']
})