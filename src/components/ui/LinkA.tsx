import { LinkHTMLAttributes } from 'react'

type Props = LinkHTMLAttributes<HTMLElement>

export const LinkA = (props: Props) => {
  return <a {...props}>{props.children}</a>
}
