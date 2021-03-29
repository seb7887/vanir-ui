import React from 'react'
import clsx from 'clsx'

export interface BoxProps {
  className?: string
  component?: 'div' | 'span'
}

export const Box: React.FC<BoxProps> = ({
  className,
  children,
  component: Component = 'div',
  ...props
}) => {
  const classes = clsx(className)

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
