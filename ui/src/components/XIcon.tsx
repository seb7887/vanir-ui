import React from 'react'
import clsx from 'clsx'

interface XIconProps {
  className?: string
  onClick?: () => void
}

const baseClasses = 'h-5 w-5'

export const XIcon: React.FC<XIconProps> = ({ className, onClick }) => {
  const classes = clsx([baseClasses, className])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  )
}
