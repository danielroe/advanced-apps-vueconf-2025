// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nitro.build/deploy#compatibility-date
  compatibilityDate: 'latest',

  future: {
    compatibilityVersion: 4
  },

  experimental: {
    defaults: {
      useAsyncData: {
        deep: false
      }
    }
    // sharedPrerenderData: true,
  },

  routeRules: {
    // '/about/**': { ssr: false },
    '/about': {
      prerender: true
    },
    '/hello': { redirect: '/about' },
  },

  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/eslint', '@nuxt/scripts']
})
