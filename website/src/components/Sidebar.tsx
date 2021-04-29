import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Flex } from 'vanir-ui'
import clsx from 'clsx'

interface SectionItem {
  title: string
  link: string
}

interface Section {
  title: string
  items: SectionItem[]
}

interface SidebarProps {
  sections: Section[]
}

export const Sidebar: React.FC<SidebarProps> = ({ sections }) => {
  const { pathname } = useLocation()

  return (
    <Flex
      direction="column"
      className="border-r-2 pl-8 pr-6 pt-8 h-screen fixed"
    >
      {sections.map(({ title, items }) => (
        <div key={title} className="mb-4">
          <h2 className="uppercase font-semibold text-lg mb-2 text-gray-900">
            {title}
          </h2>
          <Flex direction="column">
            {items.map(item => (
              <Link
                key={item.link}
                to={item.link}
                className={clsx([
                  'px-2 py-1',
                  item.link === pathname &&
                    'font-bold bg-purple-400 bg-opacity-40 text-purple-600 rounded',
                ])}
              >
                {item.title}
              </Link>
            ))}
          </Flex>
        </div>
      ))}
    </Flex>
  )
}
