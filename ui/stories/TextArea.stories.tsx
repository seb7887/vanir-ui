import React from 'react'
import { Meta, Story } from '@storybook/react'
import { TextArea, TextAreaProps } from '../src'

const meta: Meta = {
  title: 'TextArea',
  component: TextArea,
  argTypes: {
    colorScheme: {
      control: {
        type: 'select',
        options: ['blue', 'green', 'purple', 'red'],
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<TextAreaProps> = args => <TextArea {...args} />

export const Default = Template.bind({})
