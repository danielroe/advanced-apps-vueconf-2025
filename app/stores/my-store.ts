export const useMyStore = defineStore('my-store', () => {
  const count = ref(0)
  const increment = () => {
    count.value++
  }

  const { data, error, execute } = useFetch('/api/foo', {
    immediate: false,
    body: {
      name: 'John Doe',
    },
    method: 'POST',
  })

  async function fetchData() {
    console.log('Fetching data...')
    await execute()
    if (error.value) {
      console.error('Error fetching data:', error.value)
    } else {
      console.log('Fetched data:', data.value)
    }
  }

  return { count, increment, fetchData }
})
