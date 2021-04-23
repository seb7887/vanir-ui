import React, { useState, useCallback } from 'react'
import { Meta, Story } from '@storybook/react'
import { Stepper, StepperProps, Button } from '../src'

const colorScheme = ['blue', 'green', 'purple', 'red']

const meta: Meta = {
  title: 'Stepper',
  component: Stepper,
  argTypes: {
    colorScheme: {
      control: {
        type: 'select',
        options: colorScheme,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const steps = ['First', 'Second', 'Last']

const Template: Story<StepperProps> = ({ colorScheme }) => {
  const [activeStep, setActiveStep] = useState<number>(0)

  const nextStep = useCallback(() => {
    setActiveStep(prev => prev + 1)
  }, [])

  const reset = useCallback(() => setActiveStep(0), [])

  return (
    <div className="flex flex-col">
      <Stepper
        activeStep={activeStep}
        steps={steps}
        colorScheme={colorScheme}
      />
      <div className="flex items-center mt-2">
        <Button onClick={nextStep}>Next</Button>
        <Button variant="ghost" onClick={reset}>
          Reset
        </Button>
      </div>
    </div>
  )
}

export const Default = Template.bind({})
