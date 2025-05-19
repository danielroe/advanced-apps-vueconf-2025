import fs from 'unstorage/drivers/fs'

export default defineCachedEventHandler(async event => {
  await new Promise(resolve => setTimeout(resolve, 5000))
  return {
    message: 'Hello from the server!'
  }
}, {
  swr: true,
  
})
