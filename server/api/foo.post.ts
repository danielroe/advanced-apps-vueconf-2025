import * as z from 'valibot'

const schema = z.object({
  name: z.string(),
})

export default defineEventHandler(async event => {
  const result = await readValidatedBody(event, body => z.parse(schema, body))
  return {
    food: 'bar'
  }
})
