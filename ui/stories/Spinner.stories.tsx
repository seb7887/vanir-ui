import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Spinner, SpinnerProps } from '../src'

const meta: Meta = {
  title: 'Spinner',
  component: Spinner,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<SpinnerProps> = args => <Spinner {...args} />

export const Default = Template.bind({})
