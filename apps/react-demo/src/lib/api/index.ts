import { createORPCClient, onError } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch'
import type { RouterClient } from '@orpc/server'
import { router } from 'routes'

const link = new RPCLink({
  url: import.meta.env.VITE_RPC_ENDPOINT || 'http://127.0.0.1/rpc',
  headers: () => ({
    // authorization: 'Bearer token',
  }),
  // fetch: <-- provide fetch polyfill fetch if needed
  interceptors: [
    onError((error) => {
      console.error(error)
    })
  ],
})


export const rpc = createORPCClient<RouterClient<typeof router>>(link)
