import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '../components/ReactLeazy'
import { Suspense } from 'react'
// import { BsPinterest } from 'react-icons/bs'

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
