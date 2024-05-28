import { useLocation } from 'wouter'
import { UserState } from '@/store/user'

export function useValidateUser() {
  const user = UserState(state => state.user)
  const [_, setLocation] = useLocation()

  if (user == null) {
    setLocation('/')
  }
}
