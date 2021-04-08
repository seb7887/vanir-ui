import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Badge, BadgeProps } from '../src'

const colorScheme = ['blue', 'green', 'purple', 'red']
const sizes = ['xs', 'sm', 'md', 'lg']
const variant = ['subtle', 'outline', 'solid']

const meta: Meta = {
  title: 'Badge',
  component: Badge,
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
        options: variant,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<BadgeProps> = args => <Badge {...args}>Badge</Badge>

export const Default = Template.bind({})
