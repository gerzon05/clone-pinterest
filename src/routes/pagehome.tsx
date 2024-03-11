import { createFileRoute } from '@tanstack/react-router'
import { HeaderPageHome } from '../components/HeaderPageHome'
import { NuevoPageHome } from '../components/PageHome'

export const Route = createFileRoute('/pagehome')({
  component: PageHome,
})

function PageHome() {
  return (
    <>
      <HeaderPageHome />
      <NuevoPageHome />
    </>
  )
}
