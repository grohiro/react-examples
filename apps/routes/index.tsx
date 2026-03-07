import { os } from '@orpc/server'
import * as z from 'zod'

const HelloInput = z.object({
  name: z.string().optional()
})

const HelloOutput = z.object({
  message: z.string().nonempty()
})

/*
 * curl \
 *  -X POST  \
 *  -H "Content-Type: application/json" \
 *  -d '{"json": {"name": "Tanaka"}}' \
 *  http://127.0.0.1:3000/rpc/hello 
 */
const hello = os
  .route({ method: 'POST', path: '/hello' })
  .input(HelloInput)
  .output(HelloOutput)
  .handler(async ({ input }) => {
    return {
      message: `Hello ${input.name}!`
    }
  })

export const router = {
  hello,
}
