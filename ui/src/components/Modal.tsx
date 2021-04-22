import React, { useRef, useCallback } from 'react'
import clsx from 'clsx'
import { Portal } from '@reach/portal'
import { useClickOutside } from '../hooks'
import { Flex } from './Flex'
import { Transition } from './Transition'
import { XIcon } from './XIcon'

export interface ModalProps {
  className?: string
  open: boolean
  onClose: () => void
}

const baseClasses =
  'border shadow-md px-4 pt-2 pb-4 rounded-md focus:outline-none bg-white'

export const Modal: React.FC<ModalProps> = ({
  className,
  open,
  onClose,
  children,
}) => {
  const ref = useRef(null)
  const classes = clsx([baseClasses, className])

  const handleClose = useCallback(() => {
    onClose()
  }, [onClose])

  useClickOutside(ref, () => handleClose())

  return (
    <Portal>
      <Transition
        show={open}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Flex align="center" justify="center" className="fixed inset-0 z-50">
          <div ref={ref} className={classes}>
            <Flex align="center" justify="end" className="w-full">
              <XIcon
                onClick={handleClose}
                className="cursor-pointer hover:opacity-50 transition duration-300"
              />
            </Flex>
            {children}
          </div>
        </Flex>
      </Transition>
    </Portal>
  )
}
