import { addPlugin, addTemplate, addTypeTemplate, createResolver, defineNuxtModule, useNuxt } from 'nuxt/kit'

import { defu } from 'defu'

interface ModuleOptions {
  enabled: boolean
  logToConsole?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'shared-config',
    configKey: 'sharedConfig',
  },
  defaults: {
    enabled: false
  },
  setup(options) {
    const nuxt = useNuxt()
    const resolver = createResolver(import.meta.url)
    
    if (!options.enabled) {
      return
    }

    // Add shared config
    nuxt.options.experimental = defu({
      defaults: {
        useAsyncData: {
          deep: false
        }
      }
    }, nuxt.options.experimental)

    addTemplate({
      filename: 'shared-config.mjs',
      getContents: () => {
        return `export default ${JSON.stringify(options)}`
      },
    })

    addPlugin(resolver.resolve('runtime/plugins/setup-stuff'))

    // nuxt.hook('nitro:init', nitro => nitro.hooks.hook('', () =>{}))
  },
})
