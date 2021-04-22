import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Toast, ToastProps, Button, useToast, VanirUIProvider } from '../src'

const status = ['info', 'warning', 'success', 'error']
const colorScheme = ['blue', 'green', 'purple', 'red']
const variant = ['subtle', 'solid']

const meta: Meta = {
  title: 'Toast',
  component: Toast,
  argTypes: {
    colorScheme: {
      control: {
        type: 'select',
        options: colorScheme,
      },
    },
    variant: {
      control: {
        type: 'select',
        options: variant,
      },
    },
    status: {
      control: {
        type: 'select',
        options: status,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<ToastProps> = args => (
  <VanirUIProvider>
    <ToastStory {...args} />
  </VanirUIProvider>
)

const ToastStory: React.FC<ToastProps> = props => {
  const { displayToast, showToast } = useToast()

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button onClick={() => showToast(3000, () => console.log('hey'))}>
        Click me
      </Button>
      <Toast open={displayToast} {...props}>
        This is an important message!
      </Toast>
    </div>
  )
}

export const Default = Template.bind({})
