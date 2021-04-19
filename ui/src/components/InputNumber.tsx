import React, { useState, useCallback, useEffect, useMemo } from 'react'
import clsx from 'clsx'
import { Flex } from './Flex'
import { Input, InputProps } from './Input'

export interface InputNumberProps
  extends Omit<
    InputProps,
    'type' | 'leftElement' | 'rightElement' | 'onChange'
  > {
  lowerLimit?: number
  upperLimit?: number
  onChange: (v: number) => void | Promise<void>
}

interface IconProps extends Pick<InputProps, 'size'> {
  onClick: () => void
  disabled?: boolean
}

const baseClasses = 'cursor-pointer hover:opacity-70 transition duration-300'
const disabledClasses = 'pointer-events-none opacity-50'

const sizeClasses = {
  xs: 'h-2 w-2',
  sm: 'h-3 w-3',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
}

const UpIcon: React.FC<IconProps> = ({ size = 'md', onClick, disabled }) => {
  const classes = clsx([
    baseClasses,
    size && sizeClasses[size],
    disabled && disabledClasses,
  ])
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
      viewBox="0 0 20 20"
      fill="currentColor"
      onClick={onClick}
    >
      <path
        fill-rule="evenodd"
        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
        clip-rule="evenodd"
      />
    </svg>
  )
}

const DownIcon: React.FC<IconProps> = ({ size = 'md', onClick, disabled }) => {
  const classes = clsx([
    baseClasses,
    size && sizeClasses[size],
    disabled && disabledClasses,
  ])
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
      viewBox="0 0 20 20"
      fill="currentColor"
      onClick={onClick}
    >
      <path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  )
}

interface StepperProps extends Pick<InputProps, 'size'> {
  onClick: (v: 'up' | 'down') => void
  upDisabled?: boolean
  downDisabled?: boolean
}

const Stepper: React.FC<StepperProps> = ({
  size = 'md',
  onClick,
  upDisabled,
  downDisabled,
}) => {
  return (
    <Flex direction="column" align="center">
      <UpIcon onClick={() => onClick('up')} size={size} disabled={upDisabled} />
      <DownIcon
        onClick={() => onClick('down')}
        size={size}
        disabled={downDisabled}
      />
    </Flex>
  )
}

export const InputNumber: React.FC<InputNumberProps> = ({
  value,
  onChange,
  lowerLimit,
  upperLimit,
  size = 'md',
  ...props
}) => {
  const [numberValue, setNumberValue] = useState<number>(0)

  useEffect(() => {
    setNumberValue(value ? Number(value) : 0)
  }, [value])

  const handleChange = useCallback((v: 'up' | 'down') => {
    setNumberValue(prev => {
      if (v === 'up') {
        return prev + 1
      }
      return prev - 1
    })
  }, [])

  const handleChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setNumberValue(Number(value))
    },
    []
  )

  useEffect(() => {
    onChange(numberValue)
  }, [numberValue])

  const upDisabled = useMemo(() => numberValue === upperLimit, [
    numberValue,
    upperLimit,
  ])
  const downDisabled = useMemo(() => numberValue === lowerLimit, [
    numberValue,
    lowerLimit,
  ])

  return (
    <Input
      value={numberValue}
      size={size}
      onChange={handleChangeInput}
      rightElement={
        <Stepper
          onClick={handleChange}
          size={size}
          upDisabled={upDisabled}
          downDisabled={downDisabled}
        />
      }
      {...props}
    />
  )
}
