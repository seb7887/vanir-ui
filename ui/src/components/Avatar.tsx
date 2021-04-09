import React, { useMemo } from 'react'
import clsx from 'clsx'
import { ColorScheme, Size } from '../types/common'
import { Box } from './Box'
import { Flex } from './Flex'
import { bgColor } from '../utils/colors'

export interface AvatarProps {
  animated?: boolean
  badge?: boolean
  badgeColor?: 'green' | 'red'
  colorScheme?: ColorScheme
  className?: string
  name: string
  src?: string
  size?: Size
}

const getInitials = (fullName: string) => {
  let initials = fullName.split('').filter(char => {
    return /[A-Z]/.test(char)
  })
  return initials.join('')
}

const baseClasses =
  'bg-opacity-40 rounded-full font-bold text-gray-600 shadow-md'

const sizeClass = {
  xs: 'text-sm w-6 h-6',
  sm: 'text-base w-8 h-8',
  md: 'text-lg w-12 h-12',
  lg: 'text-2xl w-16 h-16',
}

const badgeColors = {
  green: 'bg-green-400',
  red: 'bg-red-400',
}

const badgeSize = {
  xs: '',
  sm: '',
  md: 'w-4 h-4',
  lg: '',
}

const badgeBaseClasses = 'rounded-full absolute right-0 bottom-0 ring-1'

export const Avatar: React.FC<AvatarProps> = ({
  animated,
  badge,
  badgeColor = 'green',
  colorScheme = 'blue',
  className,
  name,
  size = 'md',
  src,
}) => {
  const classes = clsx([
    baseClasses,
    className,
    colorScheme && bgColor[colorScheme],
    size && sizeClass[size],
    badge && 'inline-flex relative',
  ])
  const badgeClasses = clsx([
    badgeBaseClasses,
    badgeColor && badgeColors[badgeColor],
    size && badgeSize[size],
    animated && 'animate-ping',
  ])
  const initials = useMemo(() => getInitials(name), [name])

  return (
    <Box className={classes}>
      {!src ? (
        <Flex justify="center" align="center" className="h-full w-full">
          {initials}
        </Flex>
      ) : (
        <img src={src} alt={name} className="h-full w-full rounded-full" />
      )}
      {badge && <Box className={badgeClasses} />}
    </Box>
  )
}
