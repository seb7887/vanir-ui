import React, { useCallback, useMemo, useState } from 'react'
import clsx from 'clsx'
import { ColorScheme } from '../types/common'
import { bgColor } from '../utils/colors'

export interface SwitchProps {
  className?: string
  checked?: boolean
  colorScheme?: ColorScheme
  defaultValue?: boolean
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  onChange: (value?: boolean) => void | Promise<void>
}

const baseClasses =
  'inline-block box-border relative align-middle bg-gray-300 p-px border rounded-xl focus:outline-none transition duration-300'

const circleBaseClasses =
  'focus:outline-none rounded-full bg-white absolute transition duration-300 left-0'

const sizeClasses = {
  sm: 'w-8 h-5',
  md: 'w-10 h-6',
  lg: 'w-12 h-7',
}

const circleSizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
}

export const Switch: React.FC<SwitchProps> = ({
  className,
  checked,
  colorScheme = 'blue',
  defaultValue = false,
  disabled,
  size = 'md',
  onChange,
}) => {
  const [enabled, setEnabled] = useState<boolean>(defaultValue)
  const switchEnabled = useMemo(() => {
    return checked != null ? checked : enabled
  }, [checked, enabled])
  const classes = clsx([
    baseClasses,
    className,
    size && sizeClasses[size],
    switchEnabled && bgColor[colorScheme],
    disabled && 'cursor-not-allowed opacity-50',
  ])
  const circleClasses = clsx([
    circleBaseClasses,
    size && circleSizeClasses[size],
  ])

  const handleChange = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault()
      if (checked == null) {
        setEnabled(!enabled)
        onChange(enabled)
      } else {
        onChange()
      }
    },
    [setEnabled, enabled, checked]
  )

  return (
    <button className={classes} onClick={handleChange} disabled={disabled}>
      <span
        className={circleClasses}
        style={{
          top: '1px',
          transform: switchEnabled
            ? 'translateX(calc(100% - 3px))'
            : 'translateX(1px)',
        }}
      />
    </button>
  )
}
