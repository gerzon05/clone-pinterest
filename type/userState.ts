export interface CurrentUser {
  user: Object
  usercontent: (by: object) => void
  logout: () => void
}
