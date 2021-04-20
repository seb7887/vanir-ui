import React from 'react'
import { CSSTransition } from 'react-transition-group'

export interface TransitionProps {
  show: boolean
  enter: string
  enterFrom: string
  enterTo: string
  leave: string
  leaveFrom: string
  leaveTo: string
}

export const Transition: React.FC<TransitionProps> = ({
  children,
  show,
  enter,
  enterFrom,
  enterTo,
  leave,
  leaveFrom,
  leaveTo,
}) => {
  const enterClasses = enter.split(' ').filter(s => s.length)
  const enterFromClasses = enterFrom.split(' ').filter(s => s.length)
  const enterToClasses = enterTo.split(' ').filter(s => s.length)
  const leaveClasses = leave.split(' ').filter(s => s.length)
  const leaveFromClasses = leaveFrom.split(' ').filter(s => s.length)
  const leaveToClasses = leaveTo.split(' ').filter(s => s.length)

  const addClasses = (node: HTMLElement, classes: string[]) => {
    classes.length && node.classList.add(...classes)
  }

  const removeClasses = (node: HTMLElement, classes: string[]) => {
    classes.length && node.classList.remove(...classes)
  }

  return (
    <CSSTransition
      in={show}
      unmountOnExit
      addEndListener={(node: HTMLElement, done) => {
        node.addEventListener('transitionend', done, false)
      }}
      onEnter={(node: HTMLElement) => {
        addClasses(node, [...enterClasses, ...enterFromClasses])
      }}
      onEntering={(node: HTMLElement) => {
        removeClasses(node, enterFromClasses)
        addClasses(node, enterToClasses)
      }}
      onEntered={(node: HTMLElement) => {
        removeClasses(node, [...enterToClasses, ...enterClasses])
      }}
      onExit={(node: HTMLElement) => {
        addClasses(node, [...leaveClasses, ...leaveFromClasses])
      }}
      onExiting={(node: HTMLElement) => {
        removeClasses(node, leaveFromClasses)
        addClasses(node, leaveToClasses)
      }}
      onExited={(node: HTMLElement) => {
        removeClasses(node, [...leaveToClasses, ...leaveClasses])
      }}
    >
      {children}
    </CSSTransition>
  )
}
