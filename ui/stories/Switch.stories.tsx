import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Switch, SwitchProps } from '../src'

const size = ['sm', 'md', 'lg']
const colorScheme = ['blue', 'green', 'purple', 'red']

const meta: Meta = {
  title: 'Switch',
  component: Switch,
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

const Template: Story<SwitchProps> = args => <Switch {...args} />

export const Default = Template.bind({})
