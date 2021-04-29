import { Props } from '.'

export const flexProps: Props[] = [
  {
    name: 'align',
    type: 'start | end | center | strech | baseline',
    description: 'Shorthand of `align-items` CSS prop',
    default: '-',
  },
  {
    name: 'direction',
    type: 'row | column | row-reverse | col-reverse',
    description: 'Shorthand of `flex-direction` CSS prop',
    default: '-',
  },
  {
    name: 'grow',
    type: 'boolean',
    description: 'Shorthand of `flex-grow` CSS prop',
    default: '-',
  },
  {
    name: 'justify',
    type: 'start | end | center | between | around | evenly',
    description: 'Shorthand of `justify-content` CSS prop',
    default: '-',
  },
  {
    name: 'shrink',
    type: 'boolean',
    description: 'Shorthand of `flex-shrink` CSS prop',
    default: '-',
  },
  {
    name: 'wrap',
    type: 'none | wrap | reverse',
    description: 'Shorthand of `flex-wrap` CSS prop',
    default: '-',
  },
]

export const gridProps: Props[] = [
  {
    name: 'autoCol',
    type: 'See Tailwind docs',
    description: 'Shorthand for `grid-auto-columns` CSS prop',
    default: '-',
  },
  {
    name: 'autoRow',
    type: 'See Tailwind docs',
    description: 'Shorthand for `grid-auto-rows` CSS prop',
    default: '-',
  },
  {
    name: 'autoFlow',
    type: 'See Tailwind docs',
    description: 'Shorthand for `grid-auto-flow` CSS prop',
    default: '-',
  },
  {
    name: 'col',
    type: 'See Tailwind docs',
    description: 'Number of columns',
    default: '-',
  },
  {
    name: 'row',
    type: 'See Tailwind docs',
    description: 'Number of rows',
    default: '-',
  },
  {
    name: 'rowGap',
    type: 'See Tailwind docs',
    description:
      'Utilities for controlling gutters between grid rows and columns',
    default: '-',
  },
]

export const gridItemProps: Props[] = [
  {
    name: 'colEnd',
    type: 'See Tailwind docs',
    description: '',
    default: '-',
  },
  {
    name: 'colStart',
    type: 'See Tailwind docs',
    description: '',
    default: '-',
  },
  {
    name: 'colSpan',
    type: 'See Tailwind docs',
    description: '',
    default: '-',
  },
  {
    name: 'rowEnd',
    type: 'See Tailwind docs',
    description: '',
    default: '-',
  },
  {
    name: 'rowStart',
    type: 'See Tailwind docs',
    description: '',
    default: '-',
  },
  {
    name: 'rowSpan',
    type: 'See Tailwind docs',
    description: '',
    default: '-',
  },
]
