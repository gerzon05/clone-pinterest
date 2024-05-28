import type { ImgHTMLAttributes } from 'react'

type Props = ImgHTMLAttributes<HTMLElement>

export function Img(porps: Props) {
  return <img {...porps} />
}
