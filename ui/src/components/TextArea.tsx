import React, { TextareaHTMLAttributes } from 'react'
import clsx from 'clsx'
import { ColorScheme } from '../types/common'
import { focusBorderColor } from '../utils/colors'

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  colorScheme?: ColorScheme
}

const baseClasses = 'transition duration-300 bg-transparent border-2 rounded-lg'

export const TextArea: React.FC<TextAreaProps> = ({
  className,
  colorScheme = 'blue',
  disabled,
  ...props
}) => {
  const classes = clsx([
    baseClasses,
    className,
    colorScheme && focusBorderColor[colorScheme],
    disabled && 'pointer-events-none opacity-50',
  ])

  return <textarea className={classes} {...props} />
}
