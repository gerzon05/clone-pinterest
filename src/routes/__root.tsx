import { createRootRoute, Outlet } from '@tanstack/react-router'
<<<<<<< HEAD
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
=======
import { TanStackRouterDevtools } from '../components/ReactLeazy'
>>>>>>> e19ff4aa5e9840047e0f4a86475d13855c598b12
import { Suspense } from 'react'
// import { BsPinterest } from 'react-icons/bs'

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
<<<<<<< HEAD
      <Suspense fallback={null}>
=======
      <Suspense>
>>>>>>> e19ff4aa5e9840047e0f4a86475d13855c598b12
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
})
