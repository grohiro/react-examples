import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { RPCHandler } from '@orpc/server/fetch'
import { onError } from '@orpc/server'
import { CORSPlugin } from '@orpc/server/plugins'
import { router } from 'routes'

const app = new Hono()

app.use('/rpc/*', async (c, next) => {
  const handler = new RPCHandler(router, {
    plugins: [
      new CORSPlugin()
    ],
    interceptors: [
      onError((error) => {
        console.error(error)
      }),
    ],
  })

  const { matched, response } = await handler.handle(c.req.raw, {
    prefix: '/rpc',
    context: {} // Provide initial context if needed
  })

  if (matched) {
    return c.newResponse(response.body, response)
  }

  await next()
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
