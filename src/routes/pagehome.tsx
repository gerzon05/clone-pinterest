import { HeaderPageHome } from '../modules/header/HeaderPageHome'
import { NuevoPageHome } from '../modules/Home/PageHome'
import { UserState } from '../hooks/user'
import { useLocation } from 'wouter'

export function PageHome() {
  const user = UserState((state) => state.user)
  const [_, setLocatation] = useLocation()
  if (!user) {
    setLocatation('/')
  }
  return (
    <>
      <HeaderPageHome />
      <NuevoPageHome />
    </>
  )
}
