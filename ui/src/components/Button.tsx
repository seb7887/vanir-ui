import React, { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
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
import { Flex } from './Flex'

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

const baseClasses =
  'font-semibold transition-all duration-300 focus:outline-none'

const getClasses = ({
  className,
  colorScheme,
  disabled,
  fullWidth,
  rounded,
  size,
  variant,
}: Partial<ButtonProps>) =>
  clsx([
    baseClasses,
    size ? textSizes[size] : textSizes['md'],
    size ? buttonPadding[size] : buttonPadding['md'],
    variant === 'solid'
      ? bgColor[colorScheme ? colorScheme : 'blue']
      : 'bg-transparent',
    variant === 'solid'
      ? 'text-white'
      : textColor[colorScheme ? colorScheme : 'blue'],
    variant === 'outline' && 'border-2',
    variant === 'outline' && borderColor[colorScheme ? colorScheme : 'blue'],
    variant !== 'link' && hoverBgColor[colorScheme ? colorScheme : 'blue'],
    variant !== 'solid' && hoverTextColor[colorScheme ? colorScheme : 'blue'],
    variant !== 'solid' && hoverBorderColor[colorScheme ? colorScheme : 'blue'],
    (variant === 'outline' || variant === 'ghost') && 'hover:bg-opacity-10',
    variant === 'link' && 'hover:underline',
    rounded ? 'rounded-2xl' : 'rounded-lg',
    disabled && 'pointer-events-none opacity-50',
    fullWidth && 'w-auto',
    className,
  ])

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  colorScheme = 'blue',
  disabled,
  fullWidth,
  leftIcon,
  loading,
  rightIcon,
  rounded,
  size = 'md',
  variant = 'solid',
  ...props
}) => {
  const classes = getClasses({
    colorScheme,
    disabled,
    fullWidth,
    rounded,
    size,
    variant,
  })
  return (
    <button className={classes} {...props}>
      <Flex align="center">
        {leftIcon && (
          <Flex className="mr-2" align="center" component="span">
            {leftIcon}
          </Flex>
        )}
        {children}
        {rightIcon && (
          <Flex className="ml-2" align="center" component="span">
            {rightIcon}
          </Flex>
        )}
      </Flex>
    </button>
  )
}
