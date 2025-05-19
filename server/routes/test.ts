

export default defineEventHandler(async event => {
  const storage = useStorage()

  // /Users/daniel/code/danielroe/advanced-apps-vueconf
  // Users:daniel:code:danielroe:advanced-apps-vueconf

  console.log([...new Set(
    await storage.getKeys().then(keys => keys.map(k => k.match(/(^[^:]+):/)?.[1]))
  )])

  return 'test'
})
