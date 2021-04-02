import React from 'react'
import clsx from 'clsx'
import { Size } from '../types/common'

export interface SpinnerProps {
  className?: string
  size?: Size | 'xl' | '2xl'
}

const sizesClass = {
  xs: 'h-2 w-2',
  sm: 'h-3 w-3',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
  xl: 'h-8 w-8',
  '2xl': 'h-9 w-9',
}

const baseClasses = 'text-current animate-spin'

export const Spinner: React.FC<SpinnerProps> = ({ className, size = 'md' }) => {
  const classes = clsx([baseClasses, size && sizesClass[size], className])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={classes}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        className="opacity-25"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}
