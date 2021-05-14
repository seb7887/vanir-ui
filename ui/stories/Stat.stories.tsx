import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Stat, StatProps } from '../src'

const sizes = ['sm', 'md', 'lg']

const meta: Meta = {
  title: 'Stat',
  component: Stat,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: sizes,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<StatProps> = args => (
  <Stat {...args} label="Label" value="$324.53" helpText="Some Help Text" />
)

export const Default = Template.bind({})
