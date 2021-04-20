import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Alert, AlertProps } from '../src'

const status = ['info', 'warning', 'success', 'error']
const colorScheme = ['blue', 'green', 'purple', 'red']
const variant = ['subtle', 'solid']

const meta: Meta = {
  title: 'Alert',
  component: Alert,
  argTypes: {
    colorScheme: {
      control: {
        type: 'select',
        options: colorScheme,
      },
    },
    variant: {
      control: {
        type: 'select',
        options: variant,
      },
    },
    status: {
      control: {
        type: 'select',
        options: status,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<AlertProps> = args => (
  <Alert {...args}>This is an important message!</Alert>
)

export const Default = Template.bind({})
