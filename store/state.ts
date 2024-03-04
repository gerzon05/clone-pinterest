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
interface objectRegister {
  email: string
  password: string
  emailcontent: (by: string) => void
  passwordcontent: (by: string) => void
}
interface objectLogin {
  email: string
  password: string
  emailLogin: (by: string) => void
  passwordLogin: (by: string) => void
}
interface ErrorSaveRegister {
  error: string
  errorcontentregister: (by: string) => void
}
interface CurrentUser {
  user: Object
  usercontent: (by: object) => void
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
export const AuthRegister = create<objectRegister>((set) => ({
  email: '',
  password: '',
  emailcontent: (by) => set((state) => ({ email: (state.email = by) })),
  passwordcontent: (by) =>
    set((state) => ({ password: (state.password = by) })),
}))
export const AuthLogin = create<objectLogin>((set) => ({
  email: '',
  password: '',
  emailLogin: (by) => set((state) => ({ email: (state.email = by) })),
  passwordLogin: (by) => set((state) => ({ password: (state.password = by) })),
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
export const CurrentUser = create<CurrentUser>((set) => ({
  user: Object,
  usercontent: (by) => set((state) => ({ user: (state.user = by) })),
}))
