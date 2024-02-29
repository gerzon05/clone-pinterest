import { create } from 'zustand'

interface Statelogin {
  bool: boolean
  converttrue: () => void
  convertfalse: () => void
}
interface Stateregister {
  bool: boolean
  regitrue: () => void
  regifalse: () => void
}

export const Login = create<Statelogin>((set) => ({
  bool: false,
  converttrue: () => set(() => ({ bool: true })),
  convertfalse: () => set(() => ({ bool: false })),
}))

export const Register = create<Stateregister>((set) => ({
  bool: false,
  regitrue: () => set(() => ({ bool: true })),
  regifalse: () => set(() => ({ bool: false })),
}))
