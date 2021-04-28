import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Sidebar, MDXComponents, Footer } from '../components'

const navigationItems = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Installation',
        link: '/docs/getting-started',
      },
    ],
  },
  {
    title: 'Layout',
    items: [
      {
        title: 'Box',
        link: '/docs/layout/box',
      },
    ],
  },
]

export const MDXLayoutProvider: React.FC = ({ children }) => {
  return <MDXProvider components={MDXComponents}>{children}</MDXProvider>
}

export const DocsLayout: React.FC = ({ children }) => (
  <div className="w-full h-full flex flex-row">
    <Sidebar sections={navigationItems} />
    <MDXLayoutProvider>
      <div className="flex-1 px-8 pt-10 ml-52">
        {children}
        <Footer />
      </div>
    </MDXLayoutProvider>
  </div>
)
