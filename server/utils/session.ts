import type { H3Event } from 'h3'

export const getSessionData = async (event: H3Event) => {
  const config = useRuntimeConfig(event)

  const session = await getSession(event, { password: config.sessionPassword })

  return session.data
}

export const setSessionData = async (event: H3Event, data: any) => {
  const config = useRuntimeConfig(event)
  await updateSession(event, data, { password: config.sessionPassword })
}
