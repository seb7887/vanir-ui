import React from 'react'
import clsx from 'clsx'
import { Box, BoxProps } from './Box'

interface FlexProps extends BoxProps {
  align?: 'start' | 'end' | 'center' | 'strech' | 'baseline'
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse'
  grow?: boolean
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  shrink?: boolean
  wrap?: 'none' | 'wrap' | 'reverse'
}

const baseClasses = 'flex'

const directionClasses = {
  column: 'flex-col',
  'column-reverse': 'flex-col-reverse',
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
}

const alignClasses = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  strech: 'items-strech',
  baseline: 'items-baseline',
}

const justifyClasses = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
}

const wrapClasses = {
  none: 'flex-nowrap',
  wrap: 'flex-wrap',
  reverse: 'flex-wrap-reverse',
}

export const Flex: React.FC<FlexProps> = ({
  align,
  children,
  className,
  component = 'div',
  direction,
  grow,
  justify,
  shrink,
  wrap,
}) => {
  const classes = clsx([
    baseClasses,
    align && alignClasses[align],
    direction && directionClasses[direction],
    justify && justifyClasses[justify],
    grow && 'flex-grow',
    shrink && 'flex-shrink',
    wrap && wrapClasses[wrap],
    className,
  ])

  return (
    <Box className={classes} component={component}>
      {children}
    </Box>
  )
}
