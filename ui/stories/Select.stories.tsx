import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Select, SelectOption, SelectProps } from '../src'

const colorScheme = ['blue', 'green', 'purple', 'red']
const sizes = ['xs', 'sm', 'md', 'lg']
const variant = ['outline', 'unstyled', 'flushed']

const meta: Meta = {
  title: 'Select',
  component: Select,
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

const Template: Story<SelectProps> = args => (
  <div className="w-60">
    <Select {...args} />
  </div>
)

const options: SelectOption[] = [
  {
    label: 'One',
    value: 'one',
  },
  {
    label: 'Two',
    value: 'two',
  },
  {
    label: 'Three',
    value: 'three',
  },
]

export const Default = Template.bind({})
Default.args = {
  options,
}
