<script setup lang="ts">
import type { InternalApi } from 'nitropack'
const route = useRoute()
const { data, error, status, refresh } = await useFetch('/api/food')

let someProperty: InternalApi['/api/foo']['post'] 

someProperty = await $fetch('/api/foo', {
  method: 'POST',
  body: {
    name: 'foo'
  }
})

// proxy
// const { data } = await useAsyncRouteData((route) => {
//   return route.path
// }, { throwOnError: false })

const name = ref('hi there')
const { data: foo } = useFetch('/api/foo', {
  method: 'POST',
  body: {
    named: name.value
  }
})

useFetch('/api/foo', {
  watch: [name]
})

watchEffect(() => {
  $fetch('/api/foo', {
    body: {
      name: name.value
    }
  })
})

useAsyncData(() => {
  return $fetch('/api/foo', {
    body: {
      name: name.value
    }
  })
})

watch(error, error => {
  if (error) {
    showError(error)
  }
})

async function login () {
  try {
    const result = await $fetch('/api/foo')
  } catch {}
}

console.log(data.value)
</script>

<template>
  <div>
    {{ data }}
    <button @click="navigateTo('/blog/' + Math.random())">Navigate to random blog</button>
    <NuxtLink prefetch-on="interaction" to="/blog/bar">Navigate to random blog</NuxtLink>
  </div>
</template>

