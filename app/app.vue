<script setup lang="ts">
const event = useRequestEvent()

console.log(event?.context.myProject?.validated)

useAsyncData(`site-settings`, () => {
  console.log('Fetching site settings')
  return Promise.resolve({})
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtPage />
    <ul>
      <li><NuxtLink prefetch-on="interaction" to="/">Home</NuxtLink></li>
      <li><NuxtLink prefetch-on="interaction" to="/about">About</NuxtLink></li>
      <li><NuxtLink prefetch-on="interaction" to="/blog/foo">Blog</NuxtLink></li>
      <li><NuxtLink prefetch-on="interaction" to="/hello">Hello there</NuxtLink></li>
    </ul>
  </div>
</template>
