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
      {
        title: 'Changelog',
        link: '/docs/changelog',
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
      {
        title: 'Container',
        link: '/docs/layout/container',
      },
      {
        title: 'Flex',
        link: '/docs/layout/flex',
      },
      {
        title: 'Grid',
        link: '/docs/layout/grid',
      },
    ],
  },
  {
    title: 'Forms',
    items: [
      {
        title: 'Button',
        link: '/docs/forms/button',
      },
      {
        title: 'Checkbox',
        link: '/docs/forms/checkbox',
      },
      {
        title: 'Input',
        link: '/docs/forms/input',
      },
      {
        title: 'InputNumber',
        link: '/docs/forms/input-number',
      },
      {
        title: 'Radio',
        link: '/docs/forms/radio',
      },
      {
        title: 'Select',
        link: '/docs/forms/select',
      },
      {
        title: 'Switch',
        link: '/docs/forms/switch',
      },
      {
        title: 'TextArea',
        link: '/docs/forms/textarea',
      },
    ],
  },
  {
    title: 'Data Display',
    items: [],
  },
]

export const MDXLayoutProvider: React.FC = ({ children }) => {
  return <MDXProvider components={MDXComponents}>{children}</MDXProvider>
}

export const DocsLayout: React.FC = ({ children }) => (
  <div className="w-full h-full flex flex-row">
    <Sidebar sections={navigationItems} />
    <MDXLayoutProvider>
      <div className="flex-1 pr-2 pl-11 pt-10 ml-52">
        {children}
        <Footer />
      </div>
    </MDXLayoutProvider>
  </div>
)
