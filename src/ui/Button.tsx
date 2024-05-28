import type { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLElement>

export function Button(props: Props) {
  return <button {...props}>{props.children}</button>
}
