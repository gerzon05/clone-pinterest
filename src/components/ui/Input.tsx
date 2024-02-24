import React from 'react'
import { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLElement>

export const Input = (props: Props) => {
    return (
        <input {...props} />
    )
}