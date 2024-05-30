import { useLocation } from 'wouter'
import { Helmet } from 'react-helmet'
import { UserState } from '../store/user'
import { SaveImage } from '@/modules/pin/SaveImage'

export default function SavePin() {
  const user = UserState(state => state.user)
  const [_, setLocation] = useLocation()
  if (user == null) {
    setLocation('/')
  }
  return (
    <>
      <Helmet>
        <title>Guardar imagen Clone de Pinterest</title>
        <meta name="description" content="Guardar una imagen en el clone de Pinterest" />
      </Helmet>
      <SaveImage />
    </>
  )
}
