import { ColorScheme, Theme } from '../types/common'

export const textColor: Record<ColorScheme, string> = {
  blue: 'text-blue-400',
  green: 'text-green-400',
  purple: 'text-purple-400',
  red: 'text-red-400',
}

export const hoverTextColor: Record<ColorScheme, string> = {
  blue: 'hover:text-blue-500',
  green: 'hover:text-green-500',
  purple: 'hover:text-purple-500',
  red: 'hover:text-red-500',
}

export const borderColor: Record<ColorScheme, string> = {
  blue: 'border-blue-400',
  green: 'border-green-400',
  purple: 'border-purple-400',
  red: 'border-red-400',
}

export const hoverBorderColor: Record<ColorScheme, string> = {
  blue: 'hover:border-blue-500',
  green: 'hover:border-green-500',
  purple: 'hover:border-purple-500',
  red: 'hover:border-red-500',
}

export const hoverBorderColor400: Record<ColorScheme, string> = {
  blue: 'hover:border-blue-400',
  green: 'hover:border-green-400',
  purple: 'hover:border-purple-400',
  red: 'hover:border-red-400',
}

export const focusBorderColor: Record<ColorScheme, string> = {
  blue: 'focus-within:border-blue-500',
  green: 'focus-within:border-green-500',
  purple: 'focus-within:border-purple-500',
  red: 'focus-within:border-red-500',
}

export const focusBorderBottomColor: Record<ColorScheme, string> = {
  blue: 'focus-within:border-blue-500',
  green: 'focus-within:border-green-500',
  purple: 'focus-within:border-purple-500',
  red: 'focus-within:border-red-500',
}

export const bgColor: Record<ColorScheme, string> = {
  blue: 'bg-blue-400',
  green: 'bg-green-400',
  purple: 'bg-purple-400',
  red: 'bg-red-400',
}

export const hoverBgColor: Record<ColorScheme, string> = {
  blue: 'hover:bg-blue-500',
  green: 'hover:bg-green-500',
  purple: 'hover:bg-purple-500',
  red: 'hover:bg-red-500',
}

export const themeColor: Record<Theme, string> = {
  light: 'text-black',
  dark: 'text-gray-50',
}
