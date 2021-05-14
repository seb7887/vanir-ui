import React from 'react'
import { Toast, Button, useToast } from 'vanir-ui'

export const ToastComponent: React.FC = () => {
  const { displayToast, showToast } = useToast()

  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <Button onClick={() => showToast(3000, () => console.log('hey'))}>
        Click me
      </Button>
      <Toast open={displayToast}>This is an important message!</Toast>
    </div>
  )
}
