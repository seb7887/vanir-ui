import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Empty, EmptyProps } from '../src'

const size = ['xs', 'sm', 'md', 'lg']
const colorScheme = ['blue', 'green', 'purple', 'red']

const meta: Meta = {
  title: 'Empty',
  component: Empty,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: size,
      },
    },
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

const Template: Story<EmptyProps> = args => (
  <Empty {...args}>No data available</Empty>
)

export const Default = Template.bind({})
