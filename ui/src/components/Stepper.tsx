import React from 'react'
import clsx from 'clsx'
import { ColorScheme } from '../types/common'
import { Flex } from './Flex'
import { bgColor, textColor, ringColor } from '../utils/colors'

export interface StepperProps {
  className?: string
  colorScheme?: ColorScheme
  steps: string[]
  activeStep: number
  stepClassName?: string
  activeStepClassName?: string
}

const baseClasses = 'flex transition duration-300'

export const Stepper: React.FC<StepperProps> = ({
  className,
  colorScheme = 'blue',
  steps,
  activeStep,
  stepClassName,
  activeStepClassName,
}) => {
  const classes = clsx([baseClasses, className])
  const stepClasses = clsx([
    stepClassName,
    'bg-gray-300 px-1.5 rounded-full text-sm mr-2 text-white font-medium',
  ])
  const completedClasses = clsx([
    stepClasses,
    'font-semibold',
    colorScheme && textColor[colorScheme],
    colorScheme && bgColor[colorScheme],
  ])
  const activeStepClasses = clsx([
    activeStepClassName,
    'px-0 ring-2',
    colorScheme && ringColor[colorScheme],
    colorScheme && bgColor[colorScheme],
  ])

  return (
    <div className={classes}>
      {steps.map((step, index) => (
        <>
          <Flex align="center">
            <div
              className={
                activeStep === index
                  ? clsx([stepClasses, activeStepClasses])
                  : activeStep > index
                  ? completedClasses
                  : stepClasses
              }
            >
              {activeStep > index ? 'x' : index + 1}
            </div>
            <p
              className={
                activeStep >= index
                  ? 'font-medium text-gray-800'
                  : 'text-gray-800'
              }
            >
              {step}
            </p>
          </Flex>
          {index < steps.length - 1 ? (
            <div className="mx-2 w-8 pt-3">
              <div className="w-8 h-2 border-t border-gray-800" />
            </div>
          ) : null}
        </>
      ))}
    </div>
  )
}
