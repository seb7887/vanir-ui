import React from 'react'
import clsx from 'clsx'
import { useHover } from '../hooks'
import { ColorScheme, Size } from '../types/common'
import { bgColor } from '../utils/colors'
import { Transition } from './Transition'

export interface TooltipProps {
  className?: string
  label: string
  size?: Size
  colorScheme?: ColorScheme
}

const baseClasses =
  'bg-opacity-75 rounded-md shadow-md absolute py-1 px-2 mt-1 whitespace-nowrap'

const sizeClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
}

export const Tooltip: React.FC<TooltipProps> = ({
  className,
  children,
  label,
  size = 'md',
  colorScheme = 'blue',
}) => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>()
  const classes = clsx([
    baseClasses,
    className,
    size && sizeClasses[size],
    colorScheme && bgColor[colorScheme],
  ])

  return (
    <div ref={hoverRef} className="relative">
      {children}
      <Transition
        show={isHovered}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <span className={classes}>{label}</span>
      </Transition>
    </div>
  )
}
