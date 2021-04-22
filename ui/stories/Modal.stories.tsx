import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Modal, ModalProps, useModal, Button, VanirUIProvider } from '../src'

const meta: Meta = {
  title: 'Modal',
  component: Modal,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<ModalProps> = args => (
  <VanirUIProvider>
    <ModalExample {...args} />
  </VanirUIProvider>
)

const ModalExample: React.FC<ModalProps> = () => {
  const { displayModal, openModal, closeModal } = useModal()

  return (
    <div className="flex column h-screen w-screen justify-center items-center">
      <div>
        <Button onClick={() => openModal()}>Open Modal</Button>
      </div>
      <Modal open={displayModal} onClose={() => closeModal()}>
        <h1>Hello World</h1>
        <p>This is a message</p>
      </Modal>
    </div>
  )
}

export const Default = Template.bind({})
