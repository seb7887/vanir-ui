import React, { useCallback, useState } from 'react'
import clsx from 'clsx'
import { Flex } from './Flex'
import { Transition } from './Transition'

export interface AccordionItem {
  title: string
  content: string
}

export interface AccordionProps {
  className?: string
  items: AccordionItem[]
  titleClassName?: string
  contentClassName?: string
}

interface ChevronIconProps {
  direction: 'up' | 'down'
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ direction }) => (
  <>
    {direction === 'down' ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    )}
  </>
)

interface AccordionComponentProps {
  titleClasses: string
  contentClasses: string
  item: AccordionItem
}

const AccordionComponent: React.FC<AccordionComponentProps> = ({
  titleClasses,
  contentClasses,
  item,
}) => {
  const [open, setOpen] = useState<boolean>(false)
  const { title, content } = item

  const handleClick = useCallback(() => setOpen(prev => !prev), [])

  return (
    <>
      <div className={titleClasses} onClick={handleClick}>
        <h1>{title}</h1>
        <ChevronIcon direction={open ? 'up' : 'down'} />
      </div>
      <Transition
        show={open}
        enter="transition duration-300 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <p className={contentClasses}>{content}</p>
      </Transition>
    </>
  )
}

const titleBaseClasses =
  'w-full flex justify-between px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-gray-100 transition duration-300'
const contentBaseClasses = 'px-4 py-2 text-gray-700'

export const Accordion: React.FC<AccordionProps> = ({
  className,
  items,
  titleClassName,
  contentClassName,
}) => {
  const classes = clsx([className])
  const titleClasses = clsx([titleBaseClasses, titleClassName])
  const contentClasses = clsx([contentBaseClasses, contentClassName])

  return (
    <Flex className={classes} direction="column">
      {items.map((item, index) => (
        <AccordionComponent
          key={`${index}`}
          item={item}
          titleClasses={titleClasses}
          contentClasses={contentClasses}
        />
      ))}
    </Flex>
  )
}
