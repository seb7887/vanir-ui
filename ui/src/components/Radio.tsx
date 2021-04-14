import React, { useCallback } from 'react'
import clsx from 'clsx'
import { ColorScheme } from '../types/common'
import { textColor } from '../utils/colors'

export interface RadioProps {
  className?: string
  colorScheme?: ColorScheme
  selected?: boolean
  value: string
  disabled?: boolean
  onChange: (v: string) => void | Promise<void>
}

const radioItemBaseClasses = 'inline-flex items-center'
const baseClasses = 'form-radio transition duration-300'

export const Radio: React.FC<RadioProps> = ({
  className,
  value,
  children,
  colorScheme = 'blue',
  disabled,
  onChange,
}) => {
  const classes = clsx([
    baseClasses,
    className,
    colorScheme && textColor[colorScheme],
    disabled && 'pointer-events-none opacity-70',
  ])
  const labelClasses = clsx(['ml-2', disabled && 'opacity-70'])

  const handleChange = useCallback(() => {
    onChange(value)
  }, [value, onChange])

  return (
    <label className={radioItemBaseClasses}>
      <input
        type="radio"
        name={`radio-${value}`}
        value={value}
        className={classes}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className={labelClasses}>{children}</span>
    </label>
  )
}
