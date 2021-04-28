import React from 'react'
import { GoMarkGithub } from 'react-icons/go'
import { IoLogoLinkedin } from 'react-icons/io'

interface LinkItem {
  link: string
  icon: JSX.Element
}

interface LinkProps {
  item: LinkItem
}

const Link: React.FC<LinkProps> = ({ item: { link, icon } }) => (
  <a href={link} className="m-2">
    {icon}
  </a>
)

const links: LinkItem[] = [
  {
    link: 'https://github.com/seb7887',
    icon: <GoMarkGithub className="w-5 h-5" />,
  },
  {
    link: 'https://www.linkedin.com/in/smsegura/',
    icon: <IoLogoLinkedin className="w-5 h-5" />,
  },
]

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col w-full items-center my-8">
      <span className="text-sm">Made by Sebastian Matias Segura</span>
      <div className="flex flex-row">
        {links.map((item, index) => (
          <Link key={index} item={item} />
        ))}
      </div>
    </footer>
  )
}
