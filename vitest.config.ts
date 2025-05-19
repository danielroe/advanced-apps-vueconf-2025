import { defineConfig } from "vitest/config"
import { defineVitestProject } from "@nuxt/test-utils/config"

export default defineConfig({
  test: {
    workspace: [
      {
        test: {
          name: 'e2e',
          include: ['test/e2e/**/*.spec.ts'],
        } 
      },
      {
        test: {
          name: 'unit',
          include: ['test/unit/**/*.spec.ts'],
        } 
      },
      defineVitestProject({
        test: {
          // to investigate
          // browser: {
          //   enabled: true,
          //   provider: 'playwright',
          //   instances: [{ browser: 'chromium' }],
          // },
          name: 'nuxt',
          include: ['test/nuxt/**/*.spec.ts'],
        } 
      })
    ]
  }
})
