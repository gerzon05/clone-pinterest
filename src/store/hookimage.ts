import { create } from 'zustand'
import { contextImage } from '../../type/userState'

export const StateImage = create<contextImage>((set) => ({
  image: null,
  setImage: (by) => set((state) => ({ image: (state.image = by) })),
}))
