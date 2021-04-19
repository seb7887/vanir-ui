import React from 'react'
import { Meta, Story } from '@storybook/react'
import { InputNumber, InputNumberProps } from '../src'

const colorScheme = ['blue', 'green', 'purple', 'red']
const sizes = ['xs', 'sm', 'md', 'lg']
const variant = ['outline', 'unstyled', 'flushed']

const meta: Meta = {
  title: 'InputNumber',
  component: InputNumber,
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
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onChange: {
      action: 'value changed',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<InputNumberProps> = args => <InputNumber {...args} />

export const Default = Template.bind({})
