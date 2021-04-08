import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Avatar, AvatarProps } from '../src'

const colorScheme = ['blue', 'green', 'purple', 'red']
const sizes = ['xs', 'sm', 'md', 'lg']

const meta: Meta = {
  title: 'Avatar',
  component: Avatar,
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
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<AvatarProps> = args => <Avatar {...args} />

export const Initials = Template.bind({})
Initials.args = {
  name: 'John Doe',
}
export const Image = Template.bind({})
Image.args = {
  name: 'John Doe',
  src: 'https://bit.ly/dan-abramov',
}
export const Badge = Template.bind({})
Badge.args = {
  name: 'John Doe',
  src: 'https://bit.ly/dan-abramov',
  badge: true,
}
