import React from 'react'
import clsx from 'clsx'
import { Container } from './Container'

export interface PageHeaderProps {
  action?: JSX.Element
  className?: string
  title: string
  subTitle?: string
}

const baseClasses = 'flex items-center w-screen'

export const PageHeader: React.FC<PageHeaderProps> = ({
  className,
  title,
  subTitle,
  action,
}) => {
  const classes = clsx([baseClasses, className])

  return (
    <Container className={classes}>
      {action && React.cloneElement(action, { className: 'mr-4' })}
      <h1 className="text-xl font-semibold">{title}</h1>
      {subTitle && (
        <h3 className="ml-4 text-gray-400 text-sm font-normal">{subTitle}</h3>
      )}
    </Container>
  )
}
