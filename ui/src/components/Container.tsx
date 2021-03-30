import React from 'react'
import clsx from 'clsx'
import { Box, BoxProps } from './Box'
import { ResponsiveSize } from '../types/common'

export interface ContainerProps extends BoxProps {
  responsive?: ResponsiveSize | 'none'
}

const containerClass: Record<ResponsiveSize | 'none', string> = {
  none: 'container',
  sm: 'sm:container',
  md: 'md:container',
  lg: 'lg:continer',
  xl: 'xl:container',
  '2xl': '2xl:container',
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  responsive = 'none',
}) => {
  const classes = clsx([className, responsive && containerClass[responsive]])

  return <Box className={classes}>{children}</Box>
}
