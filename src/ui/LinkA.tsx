import type { LinkHTMLAttributes } from 'react'

type Props = LinkHTMLAttributes<HTMLElement>

export function LinkA(props: Props) {
  return <a {...props}>{props.children}</a>
}
