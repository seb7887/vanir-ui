import React from 'react'
import clsx from 'clsx'
import { ColorScheme } from '../types/common'
import { Flex } from './Flex'
import { bgColor, borderColor, textColor } from '../utils/colors'

type BadgeVariant = 'outline' | 'solid' | 'subtle'

export interface BadgeProps {
  className?: string
  colorScheme?: ColorScheme
  size?: 'sm' | 'md' | 'lg'
  variant?: BadgeVariant
}

const baseClasses = 'uppercase font-bold rounded shadow-xs'

const sizeClasses = {
  sm: 'px-0.5 text-sm',
  md: 'px-1 text-base',
  lg: 'px-2 text-lg',
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  children,
  colorScheme = 'blue',
  size = 'md',
  variant = 'subtle',
}) => {
  const classes = clsx([
    baseClasses,
    className,
    variant === 'outline' ? 'bg-transparent' : bgColor[colorScheme],
    variant === 'outline' && 'border-2',
    variant === 'outline' && borderColor[colorScheme],
    variant === 'subtle' && 'bg-opacity-20',
    variant !== 'solid' ? textColor[colorScheme] : 'text-white',
    size && sizeClasses[size],
  ])
  return (
    <Flex className={classes} justify="center" align="center">
      {children}
    </Flex>
  )
}
