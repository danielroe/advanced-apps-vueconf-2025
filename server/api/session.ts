import { getSessionData } from "~~/server/utils/session"

export default defineEventHandler(async event => {
  const data = await getSessionData(event)
  return data
})
