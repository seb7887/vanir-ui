import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { ColorScheme, Size } from '../types/common'
import {
  bgColor,
  borderColor,
  hoverBgColor,
  hoverBorderColor,
  hoverTextColor,
  textColor,
} from '../utils/colors'
import { buttonPadding, textSizes } from '../utils/sizes'

type ButtonVariant = 'solid' | 'outline' | 'link' | 'ghost'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorScheme?: ColorScheme
  fullWidth?: boolean
  leftIcon?: JSX.Element
  loading?: boolean
  rightIcon?: JSX.Element
  rounded?: boolean
  size?: Size
  variant?: ButtonVariant
}

const StyledButton = styled.button.attrs(
  ({ colorScheme, disabled, rounded, size, variant }: ButtonProps) => ({
    className: `font-semibold
      ${textSizes[size ? size : 'md']}
      ${buttonPadding[size ? size : 'md']}
      ${
        variant === 'solid'
          ? bgColor[colorScheme ? colorScheme : 'blue']
          : 'bg-transparent'
      }
      ${
        variant === 'solid'
          ? 'text-white'
          : textColor[colorScheme ? colorScheme : 'blue']
      }
      ${variant === 'outline' && 'border-2'}
      ${variant === 'outline' &&
        borderColor[colorScheme ? colorScheme : 'blue']}
      ${variant !== 'link' && hoverBgColor[colorScheme ? colorScheme : 'blue']}
      ${variant !== 'solid' &&
        hoverTextColor[colorScheme ? colorScheme : 'blue']}
      ${variant !== 'solid' &&
        hoverBorderColor[colorScheme ? colorScheme : 'blue']}
      ${(variant === 'outline' || variant === 'ghost') && 'hover:bg-opacity-10'}
      ${variant === 'link' && 'hover:underline'}
      transition-all
      duration-300
      ${rounded ? 'rounded-2xl' : 'rounded-lg'}
      ${(variant === 'solid' || variant === 'outline') && 'shadow-md'}
      ${disabled && 'pointer-events-none opacity-50'}
      `,
  })
)<ButtonProps>`
  &:focus {
    outline: none;
  }
`

export const Button: React.FC<ButtonProps> = ({
  children,
  colorScheme = 'blue',
  disabled,
  fullWidth,
  leftIcon,
  loading,
  rightIcon,
  rounded,
  size = 'md',
  type = 'button',
  variant = 'solid',
  ...props
}) => {
  return (
    <StyledButton
      colorScheme={colorScheme}
      disabled={disabled}
      rounded={rounded}
      size={size}
      variant={variant}
      type={type}
      {...props}
    >
      <div className="flex items-center">
        {leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
        {children}
        {rightIcon && (
          <span className="ml-2 flex items-center">{rightIcon}</span>
        )}
      </div>
    </StyledButton>
  )
}
