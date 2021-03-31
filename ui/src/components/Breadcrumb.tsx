import React from 'react'
import clsx from 'clsx'
import { Box } from './Box'
import { Flex } from './Flex'
import { ColorScheme } from '../types/common'
import { textColor } from '../utils/colors'

export interface BreadcrumbItem {
  name: string
  href?: string
}

export interface BreadcrumbProps {
  colorScheme?: ColorScheme | 'current'
  className?: string
  current: string
  items: BreadcrumbItem[]
}

const baseClasses =
  'transition-all duration-300 hover:underline hover:font-bold'

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  className,
  colorScheme = 'current',
  items,
}) => {
  const classes = clsx([
    className,
    colorScheme !== 'current' ? textColor[colorScheme] : 'text-current',
  ])

  return (
    <Flex className={classes} direction="row">
      {items.map((item, i) => (
        <>
          <a
            key={`breadcrumb-item-${i}`}
            href={item.href || '#'}
            className={`${baseClasses}${
              i === items.length - 1 ? ' font-bold' : ''
            }`}
          >
            {item.name}
          </a>
          {i < items.length - 1 ? (
            <Box className="mx-2" component="span">
              /
            </Box>
          ) : null}
        </>
      ))}
    </Flex>
  )
}
