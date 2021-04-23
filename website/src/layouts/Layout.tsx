import React from 'react'
import { AppBar } from 'vanir-ui'
import { GoMarkGithub } from 'react-icons/go'
import { Link } from 'react-router-dom'

export const Layout: React.FC = ({ children }) => (
  <div className="w-screen flex flex-col h-screen">
    <AppBar justify="between" className="px-6">
      <Link to="/">
        <h1 className="text-2xl font-bold">Vanir</h1>
      </Link>
      <a href="https://github.com/seb7887/vanir-ui">
        <GoMarkGithub className="text-xl cursor-pointer" />
      </a>
    </AppBar>
    {children}
  </div>
)
