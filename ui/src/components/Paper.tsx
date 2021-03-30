import React from 'react'
import clsx from 'clsx'
import { Flex, FlexProps } from './Flex'
import { ResponsiveSize } from '../types/common'
import { shadowSizes } from '../utils/sizes'

type PaperVariant = 'elevation' | 'outlined'
type PaperElevation = ResponsiveSize | 'default'

export interface PaperProps extends Pick<FlexProps, 'direction'> {
  className?: string
  elevation?: PaperElevation
  square?: boolean
  variant?: PaperVariant
}

const baseClasses = 'border'

export const Paper: React.FC<PaperProps> = ({
  children,
  className,
  direction = 'column',
  elevation = 'default',
  square,
  variant = 'elevation',
}) => {
  const classes = clsx([
    baseClasses,
    className,
    elevation && shadowSizes[elevation],
    !square && 'rounded-md',
    variant ? 'border-gray-50' : 'border-transparent',
  ])

  return (
    <Flex className={classes} direction={direction}>
      {children}
    </Flex>
  )
}
