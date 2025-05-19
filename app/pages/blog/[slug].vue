<script setup lang="ts">
const route = useRoute()
const { data, error, status, refresh } = await useFetch('/api/food')

// proxy
// const { data } = await useAsyncRouteData((route) => {
//   return route.path
// }, { throwOnError: false })

const name = ref('hi there')
useFetch('/api/foo', {
  body: {
    name
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

