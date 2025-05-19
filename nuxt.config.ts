// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nitro.build/deploy#compatibility-date
  compatibilityDate: 'latest',

  extends: [
    // 'some-layer',
    // can import from #layers/some-layer
    // ['some-layer', { meta: { name: 'some-layer' } }],
  ],

  future: {
    compatibilityVersion: 4
  },

  components: {
    dirs: [
      { path: '~/components/shared' },
      '~/components',
    ]
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
  modules: [
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@pinia/nuxt'
  ]
})