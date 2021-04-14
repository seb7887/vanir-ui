import React, { InputHTMLAttributes } from 'react'
import clsx from 'clsx'
import { ColorScheme, Size } from '../types/common'
import { Flex } from './Flex'
import { focusBorderColor } from '../utils/colors'

type InputVariant = 'outline' | 'unstyled' | 'flushed'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  className?: string
  colorScheme?: ColorScheme
  leftElement?: JSX.Element
  rightElement?: JSX.Element
  variant?: InputVariant
  size?: Size
}

const sizeClasses = {
  xs: 'px-1.5 py-0.5 text-xs',
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-1.5 text-base',
  lg: 'px-3.5 py-2 text-lg',
}

const baseClasses = 'transition duration-300'

export const Input: React.FC<InputProps> = ({
  className,
  colorScheme = 'blue',
  leftElement,
  rightElement,
  variant = 'outline',
  size = 'md',
  disabled,
  ...props
}) => {
  const classes = clsx([
    baseClasses,
    className,
    variant === 'outline' &&
      `border-2 rounded-lg ${focusBorderColor[colorScheme]}`,
    variant === 'flushed' && `border-b-2 ${focusBorderColor[colorScheme]}`,
    size && sizeClasses[size],
    disabled && 'pointer-events-none',
    variant === 'outline' && disabled && 'bg-gray-100',
  ])

  return (
    <Flex className={classes} align="center">
      {leftElement
        ? React.cloneElement(leftElement, { className: 'mr-2 text-gray-300' })
        : null}
      <input {...props} className="focus:outline-none bg-transparent" />
      {rightElement}
    </Flex>
  )
}
