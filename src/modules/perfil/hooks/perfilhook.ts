import { create } from 'zustand'
import { StatePerfil } from '../type/typehook'

export const PerfilState = create<StatePerfil>((set) => ({
  bool: false,
  perfiltrue: () => set((state) => ({ bool: (state.bool = !state.bool) })),
  perfilfalse: () => set(() => ({ bool: false })),
}))
