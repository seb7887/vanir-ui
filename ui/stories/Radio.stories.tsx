import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Radio, RadioProps } from '../src'

const colorScheme = ['blue', 'green', 'purple', 'red']

const meta: Meta = {
  title: 'Radio',
  component: Radio,
  argTypes: {
    colorScheme: {
      control: {
        type: 'select',
        options: colorScheme,
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onChange: {
      action: 'changed',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<RadioProps> = args => <Radio {...args}>Radio</Radio>

export const Default = Template.bind({})
Default.args = {
  value: 'test',
}
