import { create } from 'zustand'

interface Statelogin {
  bool: boolean
  converttrue: () => void
  convertfalse: () => void
}
interface StatePerfil {
  bool: boolean
  perfiltrue: (by?: boolean) => void
  perfilfalse: () => void
}
interface Stateregister {
  bool: boolean
  regitrue: () => void
  regifalse: () => void
}

interface ErrorSaveRegister {
  error: string
  errorcontentregister: (by: string) => void
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

export const ErrorSaveRegister = create<ErrorSaveRegister>((set) => ({
  error: '',
  errorcontentregister: (by) => set((state) => ({ error: (state.error = by) })),
}))
export const PerfilState = create<StatePerfil>((set) => ({
  bool: false,
  perfiltrue: () => set((state) => ({ bool: (state.bool = !state.bool) })),
  perfilfalse: () => set(() => ({ bool: false })),
}))
