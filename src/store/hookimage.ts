import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import type { contextImage } from '../../type/userState'

export const StateImage = create(
  persist<contextImage>(
    set => ({
      image: {
        title: '',
        image: '',
        url: '',
        description: '',
        category: '',
      },
      setImage: by => set(state => ({ image: { ...state.image, ...by } })),
    }),
    {
      name: 'admin',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
