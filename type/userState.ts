export interface CurrentUser {
  user: null | object
  usercontent: (by: object) => void
  logout: () => void
}
