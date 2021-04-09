import React, { useCallback } from 'react'
import clsx from 'clsx'
import { Container } from './Container'

export interface SkeletonProps {
  className?: string
  isLoaded?: boolean
}

const skeletonClasses =
  'bg-gray-500 animate-pulse rounded-sm pointer-events-none select-none'

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  children,
  isLoaded,
}) => {
  const classes = clsx([className, !isLoaded && skeletonClasses])

  const renderChildren = useCallback(() => {
    return React.Children.map(children, child => {
      if (!isLoaded && React.isValidElement(child)) {
        const props = {
          className: 'invisible',
        }
        return React.cloneElement(child, props)
      }
      return child
    })
  }, [children])

  return <Container className={classes}>{renderChildren()}</Container>
}
