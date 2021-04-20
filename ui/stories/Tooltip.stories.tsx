import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Tooltip, TooltipProps } from '../src'

const colorScheme = ['blue', 'green', 'purple', 'red']
const sizes = ['xs', 'sm', 'md', 'lg']

const meta: Meta = {
  title: 'Tooltip',
  component: Tooltip,
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
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<TooltipProps> = args => (
  <Tooltip {...args}>
    <h1>Hover me!</h1>
  </Tooltip>
)

export const Default = Template.bind({})
Default.args = {
  label: 'Hello World!',
}
