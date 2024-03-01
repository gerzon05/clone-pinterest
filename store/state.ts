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
interface objectRegister {
  email: string
  password: string
  emailcontent: (by: string) => void
  passwordcontent: (by: string) => void
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
export const AuthRegister = create<objectRegister>((set) => ({
  email: '',
  password: '',
  emailcontent: (by) => set((state) => ({ email: (state.email = by) })),
  passwordcontent: (by) =>
    set((state) => ({ password: (state.password = by) })),
}))
export const ErrorSaveRegister = create<ErrorSaveRegister>((set) => ({
  error: '',
  errorcontentregister: (by) => set((state) => ({ error: (state.error = by) })),
}))
