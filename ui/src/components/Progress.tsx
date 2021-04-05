import React from 'react'
import clsx from 'clsx'
import { Container } from './Container'
import { ColorScheme, Size } from '../types/common'
import { bgColor } from '../utils/colors'

export interface ProgressProps {
  className?: string
  colorScheme?: ColorScheme
  size?: Size
  value: number
  variant?: 'light' | 'dark'
}

const sizeClass: Record<string, string> = {
  sm: 'h-2',
  md: 'h-4',
  lg: 'h-8',
}

export const Progress: React.FC<ProgressProps> = ({
  className,
  colorScheme = 'blue',
  size = 'md',
  value,
  variant = 'light',
}) => {
  const containerClasses = clsx([
    'w-full',
    sizeClass[size] || sizeClass['md'],
    variant === 'light' ? 'bg-gray-200' : 'bg-gray-500',
  ])
  const classes = clsx([
    className,
    colorScheme && bgColor[colorScheme],
    sizeClass[size] || sizeClass['md'],
  ])

  return (
    <Container className={containerClasses}>
      <div className={classes} style={{ width: `${value}%` }} />
    </Container>
  )
}
