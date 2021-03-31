import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbProps } from '../src'

const colorScheme = ['blue', 'green', 'purple', 'red', 'current']

const meta: Meta = {
  title: 'Breadcrumb',
  component: Breadcrumb,
  argTypes: {
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

const items: BreadcrumbItem[] = [
  {
    name: 'Home',
  },
  {
    name: 'Docs',
  },
  {
    name: 'Breadcrumb',
  },
]

const Template: Story<BreadcrumbProps> = args => (
  <Breadcrumb items={items} {...args} />
)

export const Default = Template.bind({})
