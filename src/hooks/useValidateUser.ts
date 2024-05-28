import { UserState } from '@/store/user'
import { useLocation } from 'wouter'

export function useValidateUser() {
  const user = UserState((state) => state.user)
  const [_, setLocation] = useLocation()

  if (user == null) {
    setLocation('/')
  }
}