import React from 'react'
import clsx from 'clsx'
import { Box } from './Box'
import { Container, ContainerProps } from './Container'
import { Flex, FlexProps } from './Flex'
import { Paper, PaperProps } from './Paper'

const baseClasses = 'px-2 py-1 max-w-lg'

export const Card: React.FC<PaperProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = clsx([className])

  return (
    <Paper className={classes} {...props}>
      {children}
    </Paper>
  )
}

export interface CardHeaderProps extends Omit<FlexProps, 'direction'> {
  action?: JSX.Element
  avatar?: JSX.Element
  title: string
  subtitle?: string
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  action,
  avatar,
  className,
  title,
  subtitle,
}) => {
  const classes = clsx([baseClasses, className])

  return (
    <Flex className={classes} direction="row" justify="between" align="center">
      <Flex direction="row" align="center">
        <Box className="mr-2">{avatar}</Box>
        <Flex direction="column">
          <p className="text-base font-medium">{title}</p>
          {subtitle ? (
            <p className=" text-xs font-normal text-gray-700">{subtitle}</p>
          ) : null}
        </Flex>
      </Flex>
      {action}
    </Flex>
  )
}

export const CardContent: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = clsx([baseClasses, className, 'text-sm text-gray-700'])

  return (
    <Container className={classes} {...props}>
      {children}
    </Container>
  )
}

export interface CardMediaProps extends ContainerProps {
  src: string
  alt?: string
}

export const CardMedia: React.FC<CardMediaProps> = ({
  className,
  src,
  alt,
}) => {
  const classes = clsx([className])

  return (
    <Container className={classes}>
      <img src={src} alt={alt} />
    </Container>
  )
}

export const CardActions: React.FC<Omit<FlexProps, 'direction'>> = ({
  children,
  className,
  ...props
}) => {
  const classes = clsx([baseClasses, className])

  return (
    <Flex className={classes} direction="row" {...props}>
      {children}
    </Flex>
  )
}
