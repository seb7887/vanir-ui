import React, { useState } from 'react'
import { Button } from 'vanir-ui'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen flex justify-center items-center h-screen">
      <Button
        variant="solid"
        colorScheme="green"
        size="lg"
        onClick={() => setCount(prev => prev + 1)}
      >
        Hello {count} times
      </Button>
    </div>
  )
}

export default App
