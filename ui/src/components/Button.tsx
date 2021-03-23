import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button.attrs(
  ({ variant }: { variant: string }) => ({
    className: `px-8 py-2 font-semibold ${
      variant === 'default' ? 'text-white' : 'text-red-700'
    } transition duration-700 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-red-300 to-blue-300 hover:from-pink-400 hover:to-indigo-400`,
  })
)<{ variant: string }>``

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant?: string
}

export const Button: React.FC<ButtonProps> = ({
  text,
  variant = 'default',
  ...props
}) => {
  return (
    <StyledButton variant={variant} {...props}>
      {text}
    </StyledButton>
  )
}
