import { createFileRoute } from '@tanstack/react-router'
import { Nuevo } from '../components/PageHome'
import { HeaderPageHome } from '../components/HeaderPageHome'

export const Route = createFileRoute('/pagehome')({
  component: PageHome,
})

function PageHome() {
  return (
    <>
      <HeaderPageHome />
      <h1>soy la pagina home</h1>
      <Nuevo />
    </>
  )
}
