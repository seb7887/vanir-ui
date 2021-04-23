import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Accordion, AccordionProps, AccordionItem } from '../src'

const meta: Meta = {
  title: 'Accordion',
  component: Accordion,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<AccordionProps> = args => <Accordion {...args} />

const items: AccordionItem[] = [
  {
    title: 'Section 1 title',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Section 2 title',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
]

export const Default = Template.bind({})
Default.args = {
  items,
  className: 'w-96',
}
