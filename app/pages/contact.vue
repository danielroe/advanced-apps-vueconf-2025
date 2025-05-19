<script setup lang="ts">
const store = useMyStore()
// do not do this
// useAsyncData(async () => {
//   await store.fetchData()
// })

await callOnce(async () => {
  await store.fetchData()
}, { mode: 'navigation' })
</script>

<template>
  <div>
    About
  </div>
</template>
