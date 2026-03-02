import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { Theme, ThemePanel } from '@radix-ui/themes'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import './index.css'

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <Theme appearance="dark" >
        <RouterProvider router={router} />
        <ThemePanel />
      </Theme>
      <TanStackRouterDevtools router={router} />
    </StrictMode>
  )
}
