import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Skeleton, SkeletonProps, Avatar } from '../src'

const meta: Meta = {
  title: 'Skeleton',
  component: Skeleton,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<SkeletonProps> = args => (
  <div className="w-64">
    <Skeleton {...args} className="w-16 h-16 rounded-full">
      <Avatar size="lg" name="John Doe" src="https://bit.ly/dan-abramov" />
    </Skeleton>
    <Skeleton {...args} className="my-2">
      <span>Hello World!</span>
    </Skeleton>
    <Skeleton {...args}>
      <span>Another line</span>
    </Skeleton>
  </div>
)

export const Default = Template.bind({})
