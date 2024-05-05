export interface CurrentUser {
  user: null | object
  usercontent: (by: object) => void
  logout: () => void
}

export interface contextImage {
  image: null | object
  setImage: (by: object) => void
}
