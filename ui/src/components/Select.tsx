import React, { SelectHTMLAttributes, useCallback } from 'react'
import clsx from 'clsx'
import { ColorScheme, Size } from '../types/common'
import { focusBorderColor } from '../utils/colors'

export interface SelectOption {
  label: string
  value: string
}

type SelectVariant = 'outline' | 'unstyled' | 'flushed'

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'onChange'> {
  options: SelectOption[]
  className?: string
  colorScheme?: ColorScheme
  variant?: SelectVariant
  size?: Size
  onChange: (v: string) => void | Promise<void>
}

const baseClasses = 'transition duration-300 w-full bg-transparent'

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
  onChange,
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
    variant === 'unstyled' && 'border-transparent focus:border-1',
  ])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target
      onChange(value)
    },
    [onChange]
  )

  return (
    <select className={classes} onChange={handleChange} {...props}>
      {options.map(({ label, value }) => (
        <option value={value} className="bg-transparent">
          {label}
        </option>
      ))}
    </select>
  )
}
