import React from 'react'
import { Meta, Story } from '@storybook/react'
import { HiArrowLeft } from 'react-icons/hi'
import { PageHeader, PageHeaderProps } from '../src'

const meta: Meta = {
  title: 'PageHeader',
  component: PageHeader,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<PageHeaderProps> = args => <PageHeader {...args} />

export const Default = Template.bind({})
Default.args = {
  action: <HiArrowLeft />,
  title: 'Title',
  subTitle: 'Subtitle',
}
