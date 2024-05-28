import { useLocation } from 'wouter'
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
      <SaveImage />
    </>
  )
}
