import React from 'react'
import { AppBar } from 'vanir-ui'
import { GoMarkGithub } from 'react-icons/go'
import { Link } from 'react-router-dom'
import logo from '../favicon.svg'

export const Layout: React.FC = ({ children }) => (
  <div className="w-screen flex flex-col h-screen text-gray-900">
    <AppBar justify="between" className="px-8">
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className="w-6 h-6 mr-2"
          width={300}
          height={300}
        />
        <h1 className="text-2xl font-bold">Vanir UI</h1>
      </Link>
      <a href="https://github.com/seb7887/vanir-ui">
        <GoMarkGithub className="text-xl cursor-pointer" />
      </a>
    </AppBar>
    {children}
  </div>
)
