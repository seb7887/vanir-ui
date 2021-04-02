import React, { useState, useMemo, useCallback, useEffect } from 'react'
import clsx from 'clsx'
import { Box } from './Box'
import { Flex } from './Flex'
import { ColorScheme } from '../types/common'
import {
  borderColor,
  hoverBorderColor400,
  hoverTextColor,
  themeColor,
} from '../utils/colors'

export interface TabsProps {
  theme?: 'light' | 'dark'
  colorScheme?: ColorScheme
  className?: string
  defaultTab?: number
  onTabChange?: (key: number) => void | Promise<void>
}

const baseClasses =
  'px-4 py-2 border-b-2 hover:border-b-4 cursor-pointer transition duration-300'

export const Tabs: React.FC<TabsProps> = ({
  className,
  children,
  colorScheme = 'blue',
  defaultTab,
  onTabChange,
  theme = 'light',
}) => {
  const tabs: Exclude<
    React.ReactNode,
    boolean | null | undefined
  >[] = useMemo(() => {
    return React.Children.toArray(children).filter(
      t => React.isValidElement(t) && t.type === Tab
    )
  }, [children])
  const [activeTab, setActiveTab] = useState<number>(0)

  useEffect(() => {
    if (defaultTab) {
      setActiveTab(defaultTab)
    } else if (tabs.length && React.isValidElement(tabs[0])) {
      setActiveTab(tabs[0].props.tabIndex)
    }
  }, [defaultTab, tabs])

  const activeTabContent = useMemo(() => {
    return tabs.find(
      c => React.isValidElement(c) && c.props.tabIndex === activeTab
    )
  }, [tabs, activeTab])

  const onTabClick = useCallback(
    (t: Exclude<React.ReactNode, boolean | null | undefined>) => {
      if (React.isValidElement(t)) {
        setActiveTab(t.props.tabIndex)
        if (onTabChange) {
          onTabChange(t.props.tabIndex)
        }
      }
    },
    [setActiveTab, onTabChange]
  )

  return (
    <Flex direction="column">
      <Flex direction="row" align="center">
        {tabs.map(t => {
          if (!React.isValidElement(t)) return
          const isActive = activeTab === t.props.tabIndex
          const classes = clsx([
            baseClasses,
            className,
            theme && themeColor[theme],
            colorScheme && isActive && borderColor[colorScheme],
            isActive && 'border-b-4',
            colorScheme && hoverBorderColor400[colorScheme],
            colorScheme && hoverTextColor[colorScheme],
            t.props.disabled &&
              `pointer-events-none ${themeColor[theme]} text-opacity-50`,
          ])

          return (
            <Box
              className={classes}
              key={`tab-${t.props.tabIndex}`}
              onClick={() => onTabClick(t)}
            >
              {t.props.label}
            </Box>
          )
        })}
      </Flex>
      {activeTabContent}
    </Flex>
  )
}

export interface TabProps {
  label: string
  tabIndex: number
  className?: string
  disabled?: boolean
}

export const Tab: React.FC<TabProps> = ({ children, className }) => {
  const classes = clsx([className])

  return <Box className={classes}>{children}</Box>
}
