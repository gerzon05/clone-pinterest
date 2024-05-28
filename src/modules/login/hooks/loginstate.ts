import { create } from 'zustand'
import type { Statelogin, Stateregister } from '../type/logintype'

export const Login = create<Statelogin>(set => ({
  bool: false,
  converttrue: () => set(() => ({ bool: true })),
  convertfalse: () => set(() => ({ bool: false })),
}))

export const Register = create<Stateregister>(set => ({
  bool: false,
  regitrue: () => set(() => ({ bool: true })),
  regifalse: () => set(() => ({ bool: false })),
}))
