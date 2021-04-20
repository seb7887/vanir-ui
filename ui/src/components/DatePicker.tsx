import React from 'react'
import clsx from 'clsx'
import { focusBorderColor } from '../utils/colors'
import { InputProps } from './Input'

export interface DataPickerProps
  extends Omit<
    InputProps,
    'type' | 'leftElement' | 'rightElement' | 'onChange'
  > {}

const sizeClasses = {
  xs: 'px-1.5 py-0.5 text-xs',
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-1.5 text-base',
  lg: 'px-3.5 py-2 text-lg',
}

const baseClasses = 'transition duration-300 bg-transparent'

export const DatePicker: React.FC<DataPickerProps> = ({
  className,
  colorScheme = 'blue',
  size = 'md',
  variant = 'outline',
  disabled,
  ...props
}) => {
  const classes = clsx([
    baseClasses,
    className,
    size && sizeClasses,
    variant === 'outline' &&
      `border-2 rounded-lg ${focusBorderColor[colorScheme]}`,
    variant === 'flushed' &&
      `border-0 border-b-2 ${focusBorderColor[colorScheme]}`,
    variant === 'unstyled' && 'border-0',
    size && sizeClasses[size],
    disabled && 'pointer-events-none',
    variant === 'outline' && disabled && 'bg-gray-100',
  ])

  return <input type="date" className={classes} {...props} />
}
