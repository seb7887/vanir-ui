import React from 'react'
import { Meta, Story, addDecorator } from '@storybook/react'
import { withPerformance } from 'storybook-addon-performance'
import { HiSave } from 'react-icons/hi'
import { Button, ButtonProps } from '../src'

const buttonVariants = ['solid', 'outline', 'ghost', 'link']
const colorScheme = ['blue', 'green', 'purple', 'red']
const sizes = ['xs', 'sm', 'md', 'lg']

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    colorScheme: {
      control: {
        type: 'select',
        options: colorScheme,
      },
    },
    variant: {
      control: {
        type: 'select',
        options: buttonVariants,
      },
    },
    size: {
      control: {
        type: 'select',
        options: sizes,
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'clicked',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

addDecorator(withPerformance)

const Template: Story<ButtonProps> = args => (
  <Button colorScheme="blue" variant="solid" {...args}>
    Button
  </Button>
)

export const DefaulButton = Template.bind({})
export const ButtonLeftIcon = Template.bind({})
ButtonLeftIcon.args = {
  leftIcon: <HiSave />,
}
export const ButtonRightIcon = Template.bind({})
ButtonRightIcon.args = {
  rightIcon: <HiSave />,
}
