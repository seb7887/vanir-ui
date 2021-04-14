import React, { SelectHTMLAttributes } from 'react'
import clsx from 'clsx'
import { ColorScheme, Size } from '../types/common'
import { focusBorderColor } from '../utils/colors'

export interface SelectOption {
  label: string
  value: string
}

type SelectVariant = 'outline' | 'unstyled' | 'flushed'

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options: SelectOption[]
  className?: string
  colorScheme?: ColorScheme
  variant?: SelectVariant
  size?: Size
}

const baseClasses = 'transition duration-300 w-full'

const sizeClasses = {
  xs: 'px-1.5 py-0.5 text-xs',
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-1.5 text-base',
  lg: 'px-3.5 py-2 text-lg',
}

export const Select: React.FC<SelectProps> = ({
  className,
  colorScheme = 'blue',
  variant = 'outline',
  size = 'md',
  options,
  disabled,
  ...props
}) => {
  const classes = clsx([
    baseClasses,
    className,
    variant === 'outline' &&
      `border-2 rounded-lg ${focusBorderColor[colorScheme]}`,
    variant === 'flushed' &&
      `border-0 border-b-2 ${focusBorderColor[colorScheme]}`,
    size && sizeClasses[size],
    disabled && 'pointer-events-none',
    variant === 'outline' && disabled && 'bg-gray-100',
    variant === 'unstyled' && 'border-transparent',
  ])

  return (
    <select className={classes} {...props}>
      {options.map(({ label, value }) => (
        <option value={value}>{label}</option>
      ))}
    </select>
  )
}
