import React from 'react'
import clsx from 'clsx'
import { ColorScheme } from '../types/common'
import { Flex } from './Flex'
import { bgColor, textColor } from '../utils/colors'

export type AlertStatus = 'info' | 'warning' | 'success' | 'error'
type AlertVariant = 'solid' | 'subtle'

export interface AlertProps {
  className?: string
  status?: AlertStatus
  variant?: AlertVariant
  colorScheme?: ColorScheme
}

const baseClasses = 'py-2 px-4 rounded-md font-semibold shadow-sm'

interface IconProps {
  variant?: AlertVariant
}

const InfoIcon: React.FC<IconProps> = ({ variant = 'subtle' }) => (
  <>
    {variant === 'subtle' ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        />
      </svg>
    )}
  </>
)

const SuccessIcon: React.FC<IconProps> = ({ variant = 'subtle' }) => (
  <>
    {variant === 'subtle' ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    )}
  </>
)

const ErrorIcon: React.FC<IconProps> = ({ variant = 'subtle' }) => (
  <>
    {variant === 'subtle' ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
    )}
  </>
)

const renderIcon = (status: AlertStatus, variant: AlertVariant) => {
  switch (status) {
    case 'success':
      return <SuccessIcon variant={variant} />
    case 'info':
      return <InfoIcon variant={variant} />
    default:
      return <ErrorIcon variant={variant} />
  }
}

export const Alert: React.FC<AlertProps> = ({
  children,
  className,
  status = 'info',
  variant = 'subtle',
  colorScheme = 'blue',
}) => {
  const classes = clsx([
    baseClasses,
    className,
    variant === 'subtle' && 'bg-opacity-20',
    colorScheme && bgColor[colorScheme],
    variant !== 'solid' ? textColor[colorScheme] : 'text-white',
  ])

  return (
    <Flex className={classes} align="center">
      {renderIcon(status, variant)}
      {children}
    </Flex>
  )
}
