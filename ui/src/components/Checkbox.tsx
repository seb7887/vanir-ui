import React from 'react'
import clsx from 'clsx'
import { Flex } from './Flex'
import { ColorScheme } from '../types/common'
import { bgColor } from '../utils/colors'

export interface CheckboxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type' | 'value' | 'checked' | 'size'
  > {
  className?: string
  value?: boolean
  label?: string
  size?: 'sm' | 'md'
  colorScheme?: ColorScheme
}

const DefaultMarkSVGIcon: React.FC<Pick<CheckboxProps, 'className'>> = ({
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clip-rule="evenodd"
    />
  </svg>
)

const baseClasses = 'border-2 rounded-md transition duration-300 text-white'

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
}

export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  value,
  label,
  disabled,
  id,
  size = 'md',
  colorScheme = 'blue',
  ...props
}) => {
  const classes = clsx([
    baseClasses,
    className,
    size && sizeClasses[size],
    colorScheme && value && bgColor[colorScheme],
    disabled && 'opacity-50',
  ])
  const hiddenClasses = clsx([
    'overflow-hidden cursor-pointer absolute opacity-0',
    disabled && 'pointer-events-none',
  ])

  return (
    <Flex align="center">
      <input
        id={id}
        type="checkbox"
        checked={value}
        className={hiddenClasses}
        {...props}
      />
      <Flex component="span" align="center" className={classes}>
        <DefaultMarkSVGIcon className={`${value ? 'visible' : 'invisible'}`} />
      </Flex>
      {label && (
        <label htmlFor={id} className="ml-2">
          {label}
        </label>
      )}
    </Flex>
  )
}
