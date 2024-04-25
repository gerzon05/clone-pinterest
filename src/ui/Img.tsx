import React from 'react'
import { ImgHTMLAttributes } from 'react'

type Props = ImgHTMLAttributes<HTMLElement>

export const Img = (porps: Props) => {
  return <img {...porps} />
}
