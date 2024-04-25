import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { CurrentUser } from '../type/userState'

export const UserState = create(
  persist<CurrentUser>(
    (set) => ({
      user: Object,
      usercontent: (by) => set((state) => ({ user: (state.user = by) })),
      logout: () => set(() => ({ user: Object })),
    }),
    {
      name: 'admin',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
