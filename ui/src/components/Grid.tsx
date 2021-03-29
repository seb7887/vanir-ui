import React from 'react'
import clsx from 'clsx'
import { Box, BoxProps } from './Box'

type AutoOptions = 'auto' | 'min' | 'max' | 'fr'
type ColOptions =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | 'none'
type RowOptions = '1' | '2' | '3' | '4' | '5' | '6' | 'none'
type GapOptions =
  | 'px'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | ' 44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'

export interface GridProps extends Omit<BoxProps, 'component'> {
  autoCol?: AutoOptions
  autoFlow?: 'row' | 'column' | 'row-dense' | 'column-dense'
  autoRow?: AutoOptions
  cols?: ColOptions
  columnGap?: GapOptions
  gap?: GapOptions
  rows?: RowOptions
  rowGap?: GapOptions
}

const baseClasses = 'grid'

const templateColumns = (n: ColOptions) => `grid-cols-${n}`
const templateRows = (n: RowOptions) => `grid-rows-${n}`
const gapClass = (n: GapOptions) => `gap-${n}`
const colGapClass = (n: GapOptions) => `gap-x-${n}`
const rowGapClass = (n: GapOptions) => `gap-y-${n}`

const flowClass = {
  row: 'grid-flow-row',
  column: 'grid-flow-col',
  'row-dense': 'grid-flow-row-dense',
  'column-dense': 'grid-flow-column-dense',
}

const autoColClass = (n: AutoOptions) => `auto-cols-${n}`
const autoRowClass = (n: AutoOptions) => `auto-rows-${n}`

export const Grid: React.FC<GridProps> = ({
  autoCol,
  autoFlow,
  autoRow,
  cols,
  columnGap,
  className,
  children,
  gap,
  rows,
  rowGap,
}) => {
  const classes = clsx([
    baseClasses,
    cols && templateColumns(cols),
    rows && templateRows(rows),
    gap && gapClass(gap),
    columnGap && colGapClass(columnGap),
    rowGap && rowGapClass(rowGap),
    autoFlow && flowClass[autoFlow],
    autoCol && autoColClass(autoCol),
    autoRow && autoRowClass(autoRow),
    className,
  ])

  return <Box className={classes}>{children}</Box>
}

type ColStartEndOptions =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | 'auto'
type ColSpanOptions =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | 'full'
type RowStartEndOptions = '1' | '2' | '3' | '4' | '5' | '6' | '7' | 'auto'
type RowSpanOptions = '1' | '2' | '3' | '4' | '5' | '6' | 'full'

export interface GridItemProps extends Omit<BoxProps, 'component'> {
  colEnd?: ColStartEndOptions
  colSpan?: ColSpanOptions
  colStart?: ColStartEndOptions
  rowEnd?: RowStartEndOptions
  rowSpan?: RowSpanOptions
  rowStart?: RowStartEndOptions
}

const colStartClass = (n: ColStartEndOptions) => `col-start-${n}`
const colEndClass = (n: ColStartEndOptions) => `col-end-${n}`
const rowStartClass = (n: RowStartEndOptions) => `row-start-${n}`
const rowEndClass = (n: RowStartEndOptions) => `row-end-${n}`
const colSpanClass = (n: ColSpanOptions) => `col-span-${n}`
const rowSpanClass = (n: RowSpanOptions) => `row-span-${n}`

export const GridItem: React.FC<GridItemProps> = ({
  colEnd,
  colSpan,
  colStart,
  children,
  className,
  rowEnd,
  rowSpan,
  rowStart,
}) => {
  const classes = clsx([
    className,
    colEnd && colEndClass(colEnd),
    colSpan && colSpanClass(colSpan),
    colStart && colStartClass(colStart),
    rowEnd && rowEndClass(rowEnd),
    rowSpan && rowSpanClass(rowSpan),
    rowStart && rowStartClass(rowStart),
  ])

  return <Box className={classes}>{children}</Box>
}
