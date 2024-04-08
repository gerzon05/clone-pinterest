import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '../components/ReactLeazy'
import { Suspense } from 'react'

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
})
