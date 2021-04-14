import React from 'react'
import { Meta, Story } from '@storybook/react'
import { HiPhone, HiCheck } from 'react-icons/hi'
import { Input, InputProps } from '../src'

const colorScheme = ['blue', 'green', 'purple', 'red']
const sizes = ['xs', 'sm', 'md', 'lg']
const variant = ['outline', 'unstyled', 'flushed']

const meta: Meta = {
  title: 'Input',
  component: Input,
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

const Template: Story<InputProps> = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Placeholder',
}
export const WithIcons = Template.bind({})
WithIcons.args = {
  placeholder: 'Placeholder',
  leftElement: <HiPhone />,
  rightElement: <HiCheck className="text-green-400" />,
}

const FullWidth: Story<InputProps> = args => (
  <div className="w-96">
    <Input {...args} />
  </div>
)

export const WidthExample = FullWidth.bind({})
WidthExample.args = {
  placeholder: 'Placeholder',
}
