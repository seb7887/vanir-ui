import React from 'react'
import clsx from 'clsx'
import { Flex, FlexProps } from './Flex'
import { ColorScheme, ResponsiveSize } from '../types/common'
import { bgColor } from '../utils/colors'
import { shadowSizes } from '../utils/sizes'

export interface AppBarProps extends Omit<FlexProps, 'direction'> {
  colorScheme?: ColorScheme | 'transparent'
  elevation?: ResponsiveSize | 'default'
}

const baseClasses = 'w-screen h-12 px-4'

export const AppBar: React.FC<AppBarProps> = ({
  children,
  className,
  colorScheme = 'transparent',
  elevation = 'default',
  ...props
}) => {
  const classes = clsx([
    baseClasses,
    className,
    colorScheme !== 'transparent' ? bgColor[colorScheme] : 'bg-transparent',
    elevation && shadowSizes[elevation],
  ])

  return (
    <Flex className={classes} direction="row" align="center" {...props}>
      {children}
    </Flex>
  )
}
