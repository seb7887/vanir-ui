import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Paper, PaperProps } from '../src'

const elevation = ['xs', 'default', 'md', 'lg', 'xl', '2xl']
const variant = ['elevation', 'outlined']

const meta: Meta = {
  title: 'Paper',
  component: Paper,
  argTypes: {
    elevation: {
      control: {
        type: 'select',
        options: elevation,
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

const Template: Story<PaperProps> = args => (
  <Paper {...args} className="w-32 h-48 bg-gray-100" />
)

export const Default = Template.bind({})
