import React from 'react'
import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLElement>

export const Button = (props: Props) => {
  return <button {...props}>{props.children}</button>
}
