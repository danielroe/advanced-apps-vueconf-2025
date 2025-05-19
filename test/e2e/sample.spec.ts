import { fileURLToPath } from 'node:url'

import { describe, expect, it } from "vitest"
import { setup, $fetch } from "@nuxt/test-utils/e2e"

await setup({
  rootDir: fileURLToPath(new URL('../..', import.meta.url)),
})

describe('stuff', () => {
  it('should be true', async () => {
    expect(await $fetch('/')).toContain('index page')
  })
})
