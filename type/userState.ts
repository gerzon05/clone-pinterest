import type { LookImage } from '@/hooks/useLookImage'

export interface CurrentUser {
  user: null | object
  usercontent: (by: object) => void
  logout: () => void
}

export interface contextImage {
  image: LookImage
  setImage: (by: object) => void
}
