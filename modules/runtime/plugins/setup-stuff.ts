import config from '#build/shared-config.mjs'

export default defineNuxtPlugin(() => {
  console.log(config)

  return {
    provide: {
      ourConfig: config
    }
  }
})
