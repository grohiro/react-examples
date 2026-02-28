import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Flex, Theme, ThemePanel } from '@radix-ui/themes'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <Theme>
        <Flex>
          <div>Hello "__root"!</div>
          <Outlet />
          <ThemePanel />
        </Flex>
      </Theme>
    </React.Fragment>
  )
}
