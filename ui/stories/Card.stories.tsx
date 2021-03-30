import React from 'react'
import { Meta, Story } from '@storybook/react'
import { HiDotsVertical, HiInformationCircle } from 'react-icons/hi'
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
  PaperProps,
} from '../src'

const elevation = ['xs', 'default', 'md', 'lg', 'xl', '2xl']
const variant = ['elevation', 'outlined']

const meta: Meta = {
  title: 'Card',
  component: Card,
  argTypes: {
    elevation: {
      control: {
        type: 'select',
        options: elevation,
      },
    },
    variant: {
      control: {
        type: 'select',
        options: variant,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<PaperProps> = args => (
  <Card {...args} className="w-60 bg-gray-50">
    <CardHeader
      title="Card Title"
      subtitle="Subtitle"
      avatar={<HiInformationCircle />}
      action={<HiDotsVertical />}
    />
    <CardMedia
      src="https://cdn.nextgov.com/media/img/upload/2020/10/19/NGspace20201019/860x394.jpg"
      alt="example"
    />
    <CardContent>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </CardContent>
    <CardActions justify="center">
      <Button size="sm" variant="ghost" colorScheme="purple">
        Learn More
      </Button>
    </CardActions>
  </Card>
)

export const WithHeader = Template.bind({})
