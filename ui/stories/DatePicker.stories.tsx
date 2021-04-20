import React from 'react'
import { Meta, Story } from '@storybook/react'
import { DatePicker, DataPickerProps } from '../src'

const colorScheme = ['blue', 'green', 'purple', 'red']
const sizes = ['xs', 'sm', 'md', 'lg']
const variant = ['outline', 'unstyled', 'flushed']

const meta: Meta = {
  title: 'DatePicker',
  component: DatePicker,
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

const Template: Story<DataPickerProps> = args => <DatePicker {...args} />

export const Default = Template.bind({})
