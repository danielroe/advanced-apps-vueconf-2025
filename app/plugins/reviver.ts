export default definePayloadPlugin(nuxtApp => {
  definePayloadReducer('MyRichStuff', data => {})
  definePayloadReviver('MyRichStuff', data => {})
})
