import React from 'react'
import { Modal, Button, useModal } from 'vanir-ui'

export const ModalComponent: React.FC = () => {
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
