import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Tabs, TabsProps, Tab } from '../src'

const colorScheme = ['blue', 'green', 'purple', 'red']
const theme = ['light', 'dark']

const meta: Meta = {
  title: 'Tabs',
  component: Tabs,
  argTypes: {
    colorScheme: {
      control: {
        type: 'select',
        options: colorScheme,
      },
    },
    theme: {
      control: {
        type: 'select',
        options: theme,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<TabsProps> = args => (
  <Tabs {...args}>
    <Tab label="One" tabIndex={0}>
      One Content
    </Tab>
    <Tab label="Two" tabIndex={1}>
      Two Content
    </Tab>
    <Tab label="Three" tabIndex={2}>
      Three Content
    </Tab>
    <Tab label="Four" tabIndex={3} disabled>
      Four Content
    </Tab>
  </Tabs>
)

export const Default = Template.bind({})
