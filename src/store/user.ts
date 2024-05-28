import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import type { CurrentUser } from '../../type/userState'

export const UserState = create(
  persist<CurrentUser>(
    set => ({
      user: null,
      usercontent: by => set(state => ({ user: (state.user = by) })),
      logout: () => set(() => ({ user: null })),
    }),
    {
      name: 'admin',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
