import React from 'react'
import { Portal } from '@reach/portal'
import { Alert, AlertProps } from './Alert'
import { Transition } from './Transition'

export interface ToastProps extends AlertProps {
  open: boolean
}

export const Toast: React.FC<ToastProps> = ({ children, open, ...props }) => {
  return (
    <Portal>
      <Transition
        show={open}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Alert {...props}>{children}</Alert>
      </Transition>
    </Portal>
  )
}
