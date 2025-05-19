import { describe, expect, it } from "vitest"

import { SomeComponent } from '#components'
import { mountSuspended } from "@nuxt/test-utils/runtime"

describe('nuxt context', () => {
  it('has runtime config', async () => {
    const wrapper = await mountSuspended(SomeComponent)

    expect(wrapper.html()).toMatchInlineSnapshot(`"<div> Admin </div>"`)
  })
})
