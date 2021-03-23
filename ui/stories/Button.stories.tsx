import React from 'react'
import { Meta, Story, addDecorator } from '@storybook/react'
import { withPerformance } from 'storybook-addon-performance'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import { Button, ButtonProps } from '../src'

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    text: {
      control: {
        type: 'Text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

addDecorator(withPerformance)
addDecorator(withKnobs)

const Template: Story<ButtonProps> = args => <Button {...args} />

export const SCButton = Template.bind({})

SCButton.args = {
  text: 'Button',
  variant: select('Variant', { Default: 'default' }, 'default'),
}
