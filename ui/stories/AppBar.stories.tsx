import React from 'react'
import { Meta, Story } from '@storybook/react'
import { HiMenu, HiBell } from 'react-icons/hi'
import { AppBar, AppBarProps, Box } from '../src'

const elevation = ['xs', 'default', 'md', 'lg', 'xl', '2xl']
const colorScheme = ['blue', 'green', 'purple', 'red', 'transparent']

const meta: Meta = {
  title: 'AppBar',
  component: AppBar,
  argTypes: {
    elevation: {
      control: {
        type: 'select',
        options: elevation,
      },
    },
    colorScheme: {
      control: {
        type: 'select',
        options: colorScheme,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<AppBarProps> = args => (
  <AppBar {...args} justify="between">
    <Box className="flex items-center">
      <HiMenu className="mr-2" />
      <p className="text-base">Title</p>
    </Box>
    <HiBell />
  </AppBar>
)

export const Default = Template.bind({})
