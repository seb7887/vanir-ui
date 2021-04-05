import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Progress, ProgressProps } from '../src'

const colorScheme = ['blue', 'green', 'purple', 'red']
const theme = ['light', 'dark']
const sizes = ['sm', 'md', 'lg']

const meta: Meta = {
  title: 'Progress',
  component: Progress,
  argTypes: {
    colorScheme: {
      control: {
        type: 'select',
        options: colorScheme,
      },
    },
    size: {
      control: {
        type: 'select',
        options: sizes,
      },
    },
    variant: {
      control: {
        type: 'select',
        options: theme,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<ProgressProps> = args => (
  <div className="w-60">
    <Progress {...args} />
  </div>
)

export const Default = Template.bind({})
