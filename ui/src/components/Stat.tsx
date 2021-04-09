import React, { useMemo } from 'react'
import clsx from 'clsx'
import { Flex } from './Flex'
import { Size } from '../types/common'

export interface StatProps {
  className?: string
  label?: string
  value: string
  helpText?: string | JSX.Element
  size?: 'sm' | 'md' | 'lg'
}

const labelClasses = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
}

const valueClasses = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-3xl',
}

const helpTextClasses = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
}

export const Stat: React.FC<StatProps> = ({
  className,
  label,
  value,
  helpText,
  size = 'md',
}) => {
  const classes = clsx([className])
  const labelClass = clsx(['font-medium', labelClasses[size]])
  const valueClass = clsx(['font-semibold', valueClasses[size]])
  const helpTextClass = clsx(['font-normal', helpTextClasses[size]])
  const props = useMemo(
    () => ({
      className: helpTextClass,
    }),
    [size]
  )

  return (
    <Flex className={classes} direction="column">
      {label ? <span className={labelClass}>{label}</span> : null}
      <span className={valueClass}>{value}</span>
      {!helpText ? null : typeof helpText === 'string' ? (
        <span className={helpTextClass}>{helpText}</span>
      ) : (
        React.cloneElement(helpText, props)
      )}
    </Flex>
  )
}
