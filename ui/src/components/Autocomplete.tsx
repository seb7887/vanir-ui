import React, { useMemo } from 'react'
import clsx from 'clsx'
import { Option } from '../types/common'
import { Input, InputProps } from './Input'
import { Flex } from './Flex'
import { Transition } from './Transition'

export interface AutocompleteProps
  extends Omit<InputProps, 'leftElement' | 'onClick'> {
  dropdownClassName?: string
  options?: Option[]
  onClick: (v: string) => void | Promise<void>
}

const baseClasses = 'shadow-lg mt-2'

const sizeClasses = {
  xs: 'px-1.5 py-0.5 text-xs',
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-1.5 text-base',
  lg: 'px-3.5 py-2 text-lg',
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  className,
  dropdownClassName,
  options,
  onClick,
  size = 'md',
  ...props
}) => {
  const classes = clsx([className])
  const show = useMemo(() => !!options && options.length > 0, [options])
  const dropdownClasses = clsx([
    baseClasses,
    dropdownClassName,
    size && sizeClasses[size],
  ])

  return (
    <Flex direction="column" className={classes}>
      <Input {...props} />
      <Transition
        show={show}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Flex direction="column" className={dropdownClasses}>
          {options &&
            options.map(({ label, value }) => (
              <span
                onClick={() => onClick(value)}
                key={`option-${value}`}
                className="hover:bg-gray-100 cursor-pointer transition duration-300 my-1"
              >
                {label}
              </span>
            ))}
        </Flex>
      </Transition>
    </Flex>
  )
}
